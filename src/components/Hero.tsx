import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useHeroMedia } from "@/hooks/useHeroMedia";
import { useIsMobile } from "@/hooks/use-mobile";
import heroMainVideo from "@/assets/hero-main-video.mp4";
import heroAereoRio from "@/assets/hero-aereo-rio.jpg";

const CONTENT_DISPLAY_DURATION = 6000;

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { heroMedia, loading } = useHeroMedia();
  const isMobile = useIsMobile();

  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
  const [posterSrc, setPosterSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (loading) return;
    setPosterSrc(heroMedia.image_url || heroAereoRio);
    setResolvedSrc(heroMedia.video_url || heroMainVideo);
  }, [loading, heroMedia.image_url, heroMedia.video_url]);

  // Reset states when source changes
  useEffect(() => {
    setVideoReady(false);
    setShowContent(false);
  }, [resolvedSrc]);

  // Mobile: show content briefly at start, then hide to let video play unobstructed
  useEffect(() => {
    if (!isMobile || !videoReady) return;
    setShowContent(true);
    const timer = setTimeout(() => setShowContent(false), CONTENT_DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [isMobile, videoReady]);

  // Both desktop and mobile: cycle content display after video ends
  const handleVideoEnded = useCallback(() => {
    setShowContent(true);
    setTimeout(() => {
      setShowContent(false);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, CONTENT_DISPLAY_DURATION);
  }, []);

  // On mobile, hide overlay and content DOM entirely while video plays to eliminate rendering load
  const mobileVideoPlaying = isMobile && videoReady && !showContent;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Poster fallback */}
        <img
          src={posterSrc || heroAereoRio}
          alt="Hero background"
          className={`absolute inset-0 w-full h-full object-cover object-center ${
            isMobile ? "" : "transition-opacity duration-700"
          } ${videoReady ? "opacity-0" : "opacity-100"}`}
        />

        {/* Video — no transitions on mobile to reduce compositing */}
        {resolvedSrc && (
          <video
            ref={videoRef}
            src={resolvedSrc}
            className={`absolute inset-0 w-full h-full object-cover object-center ${
              isMobile ? "" : "transition-opacity duration-700"
            } ${videoReady ? "opacity-100" : "opacity-0"}`}
            style={{ transform: "translateZ(0)" }}
            autoPlay
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            onEnded={handleVideoEnded}
          />
        )}

        {/* Overlay — completely removed from DOM on mobile while video plays */}
        {!mobileVideoPlaying && (
          <div
            className={`absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85 transition-opacity duration-700 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      {/* Hero Content — completely removed from DOM on mobile while video plays */}
      {!mobileVideoPlaying && (
        <div
          className={`relative h-full flex items-center justify-center text-center px-4 sm:px-6 py-20 md:py-0 transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.2] sm:leading-tight drop-shadow-2xl">
              {t.hero.title}
              <br />
              <span className="text-accent">{t.hero.titleAccent}</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-2xl text-white font-light max-w-3xl mx-auto px-2 drop-shadow-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://us2.cloudbeds.com/pt-br/reservas/PAWNo0?currency=usd" target="_blank" rel="noopener noreferrer">
                  {t.hero.bookNow}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                asChild
              >
                <a href="https://www.youtube.com/watch?v=N3BQLipS9YU" target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2" size={20} />
                  {t.hero.knowRoute}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
