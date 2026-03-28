import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useHeroMedia } from "@/hooks/useHeroMedia";
import { useIsMobile } from "@/hooks/use-mobile";
import { detectConnectionSpeed, getVideoConfig, getMobileVideoQuality } from "@/lib/videoUtils";
import heroMainVideo from "@/assets/hero-main-video.mp4";
import heroMobileVideo480 from "@/assets/hero-main-video-480p.mp4";
import heroMobileVideo1080 from "@/assets/hero-main-video-1080p-mobile.mp4";
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
  const [canUseVideo, setCanUseVideo] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const [mobileQuality, setMobileQuality] = useState<'1080p' | '480p'>('1080p');

  // Detect connection speed on mount
  useEffect(() => {
    detectConnectionSpeed().then((speed) => {
      const config = getVideoConfig(speed, !!isMobile);
      setCanUseVideo(config.useVideo);
      setMobileQuality(getMobileVideoQuality(speed));
      if (!config.useVideo) {
        setShowContent(true);
      }
    });
  }, [isMobile]);

  useEffect(() => {
    if (loading) return;
    setPosterSrc(heroMedia.image_url || heroAereoRio);
    const mobileVideo = mobileQuality === '1080p' ? heroMobileVideo1080 : heroMobileVideo480;
    const fallbackVideo = isMobile ? mobileVideo : heroMainVideo;
    setResolvedSrc(heroMedia.video_url || fallbackVideo);
  }, [loading, heroMedia.image_url, heroMedia.video_url]);

  useEffect(() => {
    setVideoReady(false);
    setShowContent(false);
    setVideoFailed(false);
  }, [resolvedSrc]);

  // Show content initially on mobile, then hide once video starts
  useEffect(() => {
    if (!isMobile || !canUseVideo) return;
    setShowContent(true);
    const timer = setTimeout(() => {
      if (videoReady && !videoFailed) {
        setShowContent(false);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isMobile, canUseVideo, videoReady, videoFailed]);

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

  const handleVideoError = useCallback(() => {
    setVideoFailed(true);
    setShowContent(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    setVideoReady(true);
  }, []);

  const shouldShowVideo = canUseVideo && !videoFailed && resolvedSrc;
  const shouldAlwaysShowContent = !canUseVideo || videoFailed;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Poster image – always present as fallback */}
        <img
          src={posterSrc || heroAereoRio}
          alt="Hero background"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
            videoReady && shouldShowVideo ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video – renders on both desktop AND mobile if connection allows */}
        {shouldShowVideo && (
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
            preload={isMobile ? "metadata" : "auto"}
            onCanPlay={handleCanPlay}
            onEnded={handleVideoEnded}
            onError={handleVideoError}
          />
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85 transition-opacity duration-700 ${
            showContent || shouldAlwaysShowContent ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`relative h-full flex items-center justify-center text-center px-4 sm:px-6 transition-opacity duration-700 ${
          showContent || shouldAlwaysShowContent
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto space-y-4 md:space-y-8 animate-fade-in">
          <h1
            className={`font-serif font-bold text-white leading-tight drop-shadow-2xl ${
              isMobile
                ? "text-3xl sm:text-4xl leading-[1.2]"
                : "text-4xl md:text-7xl lg:text-8xl"
            }`}
          >
            {t.hero.title}
            <br />
            <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>

          <p
            className={`text-white font-light max-w-3xl mx-auto px-2 drop-shadow-lg ${
              isMobile ? "text-sm sm:text-lg" : "text-lg md:text-2xl"
            }`}
          >
            {t.hero.subtitle}
          </p>

          <div
            className={`flex items-center gap-3 md:gap-4 pt-2 md:pt-4 ${
              isMobile
                ? "flex-col"
                : "flex-row justify-center"
            }`}
          >
            <Button
              size="lg"
              className={`bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                isMobile
                  ? "w-full px-6 py-5 text-base"
                  : "px-8 py-6 text-lg"
              }`}
              asChild
            >
              <a
                href="https://us2.cloudbeds.com/pt-br/reservas/PAWNo0?currency=usd"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.bookNow}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className={`border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent ${
                isMobile
                  ? "w-full px-6 py-5 text-base"
                  : "px-8 py-6 text-lg"
              }`}
              asChild
            >
              <a
                href="https://www.youtube.com/watch?v=N3BQLipS9YU"
                target="_blank"
                rel="noopener noreferrer"
              >
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
