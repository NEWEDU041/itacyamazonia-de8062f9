import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play, Loader2 } from "lucide-react";
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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showContent, setShowContent] = useState(false);
  // Mobile: buffer-first loading — show content while video preloads silently
  const [mobileBuffering, setMobileBuffering] = useState(false);

  useEffect(() => {
    if (loading) return;
    setPosterSrc(heroMedia.image_url || heroAereoRio);
    setResolvedSrc(heroMedia.video_url || heroMainVideo);
  }, [loading, heroMedia.image_url, heroMedia.video_url]);

  useEffect(() => {
    if (isMobile) {
      // Mobile: show content immediately, buffer video in background
      setVideoLoaded(false);
      setIsBuffering(false);
      setShowContent(true);
      setMobileBuffering(true);
      return;
    }
    setVideoLoaded(false);
    setIsBuffering(false);
    setShowContent(false);
  }, [resolvedSrc, isMobile]);

  const handleVideoLoaded = () => setVideoLoaded(true);

  // On mobile, wait for full buffer before playing
  const handleCanPlayThrough = useCallback(() => {
    setVideoLoaded(true);
    if (isMobile && mobileBuffering) {
      setMobileBuffering(false);
      // Small delay to ensure smooth transition
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }, 300);
    }
  }, [isMobile, mobileBuffering]);

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

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Poster image shown while video buffers */}
        {!videoLoaded && (
          <img
            src={posterSrc || heroAereoRio}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}

        {/* Video: renders on both desktop and mobile, but on mobile waits for buffer */}
        {resolvedSrc && (
          <video
            ref={videoRef}
            src={resolvedSrc}
            poster={posterSrc || heroAereoRio}
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
              videoLoaded && !mobileBuffering ? "opacity-100" : "opacity-0"
            }`}
            style={{ minWidth: "100%", minHeight: "100%" }}
            autoPlay={!isMobile}
            muted
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoaded}
            onCanPlayThrough={handleCanPlayThrough}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => {
              setIsBuffering(false);
              setVideoLoaded(true);
            }}
            onEnded={handleVideoEnded}
          />
        )}

        {isBuffering && <div className="absolute inset-0 bg-black/10" />}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85 transition-opacity duration-700 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Hero Content */}
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

          {/* Mobile: loading indicator while video buffers */}
          {mobileBuffering && (
            <div className="flex items-center gap-2 mx-auto text-white/70 text-sm">
              <Loader2 size={16} className="animate-spin" />
              <span>Carregando vídeo...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
