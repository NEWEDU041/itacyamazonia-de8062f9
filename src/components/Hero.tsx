import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useHeroMedia } from "@/hooks/useHeroMedia";
import heroMainVideo from "@/assets/hero-main-video.mp4";

const Hero = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { heroMedia, loading } = useHeroMedia();
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Use database video if available, otherwise fallback to static
  const videoSource = heroMedia.video_url || heroMainVideo;

  // Force video play when source changes or component mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video && videoSource) {
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, user interaction needed
          console.log("Autoplay prevented, waiting for user interaction");
        });
      }
    }
  }, [videoSource]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        {/* Loading placeholder */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-primary animate-pulse" />
        )}
        <video
          ref={videoRef}
          src={videoSource}
          className={`w-full h-full object-cover object-center md:object-center transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            minWidth: '100%',
            minHeight: '100%'
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={handleVideoLoaded}
          onLoadedData={handleVideoLoaded}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 py-20 md:py-0">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.2] sm:leading-tight drop-shadow-2xl">
            {t.hero.title}
            <br />
            <span className="text-accent">{t.hero.titleAccent}</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-2xl text-white font-light max-w-3xl mx-auto px-2 drop-shadow-lg">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
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
    </section>
  );
};

export default Hero;
