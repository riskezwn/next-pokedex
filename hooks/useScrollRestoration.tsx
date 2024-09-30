import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useScrollRestoration() {
  const router = useRouter();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      let shouldScrollRestore = false;

      window.history.scrollRestoration = 'manual';

      const onBeforeUnload = (event: any) => {
        window.sessionStorage.setItem(router.asPath, JSON.stringify({ x: window.scrollX, y: window.scrollY }));
      };

      const onRouteChangeStart = () => {
        window.sessionStorage.setItem(router.asPath, JSON.stringify({ x: window.scrollX, y: window.scrollY }));
      };

      const onRouteChangeComplete = (url: string) => {
        const scrollPos = window.sessionStorage.getItem(url);
        if (scrollPos) {
          const { x, y } = JSON.parse(scrollPos);
          window.scrollTo(x, y);
        } else {
          window.scrollTo(0, 0);
        }
      };

      window.addEventListener('beforeunload', onBeforeUnload);
      router.events.on('routeChangeStart', onRouteChangeStart);
      router.events.on('routeChangeComplete', onRouteChangeComplete);

      return () => {
        window.removeEventListener('beforeunload', onBeforeUnload);
        router.events.off('routeChangeStart', onRouteChangeStart);
        router.events.off('routeChangeComplete', onRouteChangeComplete);
      };
    }
  }, [router]);
}