import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useHeroMedia } from "@/hooks/useHeroMedia";
import { useIsMobile } from "@/hooks/use-mobile";
import heroMainVideo from "@/assets/hero-main-video.mp4";
import heroAereoRio from "@/assets/hero-aereo-rio.jpg";

const CONTENT_DISPLAY_DURATION = 6000;

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const { heroMedia, loading } = useHeroMedia();
  const isMobile = useIsMobile();

  const [resolvedSrc, setResolvedSrc] = useState<string | null>(null);
  const [posterSrc, setPosterSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mobileVideoOpen, setMobileVideoOpen] = useState(false);

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

  // Desktop: show content after video ends
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

  // Mobile: open fullscreen video player
  const openMobileVideo = useCallback(() => {
    setMobileVideoOpen(true);
  }, []);

  const closeMobileVideo = useCallback(() => {
    setMobileVideoOpen(false);
    if (mobileVideoRef.current) {
      mobileVideoRef.current.pause();
      mobileVideoRef.current.currentTime = 0;
    }
  }, []);

  // ── MOBILE: static image + play button ──
  if (isMobile) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Static background image */}
        <img
          src={posterSrc || heroAereoRio}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* Content always visible */}
        <div className="relative h-full flex items-center justify-center text-center px-4 py-20">
          <div className="max-w-5xl mx-auto space-y-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-[1.2] drop-shadow-2xl">
              {t.hero.title}
              <br />
              <span className="text-accent">{t.hero.titleAccent}</span>
            </h1>

            <p className="text-sm sm:text-lg text-white font-light max-w-3xl mx-auto px-2 drop-shadow-lg">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col items-center gap-3 pt-2">
              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-5 text-base rounded-full"
                asChild
              >
                <a href="https://us2.cloudbeds.com/pt-br/reservas/PAWNo0?currency=usd" target="_blank" rel="noopener noreferrer">
                  {t.hero.bookNow}
                </a>
              </Button>

              {/* Play video button */}
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-6 py-5 text-base rounded-full bg-transparent"
                onClick={openMobileVideo}
              >
                <Play className="mr-2" size={20} />
                {t.hero.knowRoute}
              </Button>
            </div>
          </div>
        </div>

        {/* Fullscreen video modal */}
        {mobileVideoOpen && resolvedSrc && (
          <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
            <button
              onClick={closeMobileVideo}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 rounded-full p-2"
              aria-label="Fechar vídeo"
            >
              <X size={24} />
            </button>
            <video
              ref={mobileVideoRef}
              src={resolvedSrc}
              className="w-full h-full object-contain"
              autoPlay
              controls
              playsInline
              onEnded={closeMobileVideo}
            />
          </div>
        )}
      </section>
    );
  }

  // ── DESKTOP: video background with cycling content ──
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={posterSrc || heroAereoRio}
          alt="Hero background"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />

        {resolvedSrc && (
          <video
            ref={videoRef}
            src={resolvedSrc}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            style={{ willChange: "opacity", transform: "translateZ(0)" }}
            autoPlay
            muted
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
            onEnded={handleVideoEnded}
          />
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85 transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div
        className={`relative h-full flex items-center justify-center text-center px-4 sm:px-6 md:py-0 transition-opacity duration-700 ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            {t.hero.title}
            <br />
            <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>

          <p className="text-lg md:text-2xl text-white font-light max-w-3xl mx-auto px-2 drop-shadow-lg">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://us2.cloudbeds.com/pt-br/reservas/PAWNo0?currency=usd" target="_blank" rel="noopener noreferrer">
                {t.hero.bookNow}
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
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
    </section>
  );
};

export default Hero;
