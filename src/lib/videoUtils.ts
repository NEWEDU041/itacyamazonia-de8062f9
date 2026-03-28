type ConnectionSpeed = 'slow' | 'medium' | 'fast';

interface VideoConfig {
  useVideo: boolean;
  poster: string;
}

export const detectConnectionSpeed = (): Promise<ConnectionSpeed> => {
  return new Promise((resolve) => {
    const nav = navigator as any;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    if (connection) {
      const type: string = connection.effectiveType || '';
      const downlink: number = connection.downlink || 0;

      if (type.includes('2g') || (type === '3g' && downlink < 1.5)) {
        resolve('slow');
      } else if (type === '3g' || downlink < 5) {
        resolve('medium');
      } else {
        resolve('fast');
      }
    } else {
      // No API available – assume medium
      resolve('medium');
    }
  });
};

export const getVideoConfig = (speed: ConnectionSpeed, isMobile: boolean): VideoConfig => {
  if (isMobile && speed === 'slow') {
    return { useVideo: false, poster: '' };
  }
  return { useVideo: true, poster: '' };
};

export const getMobileVideoQuality = (speed: ConnectionSpeed): '1080p' | '480p' => {
  return speed === 'fast' || speed === 'medium' ? '1080p' : '480p';
};
