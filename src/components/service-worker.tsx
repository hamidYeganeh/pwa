"use client";

import { useEffect } from "react";

export const ServiceWorkerRegistrar = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );

          registration.addEventListener("beforeinstallprompt", (e) => {
            console.log({ e });
          });
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
    //   useEffect(() => {
    // window.addEventListener('beforeinstallprompt', e => {
    //   e.preventDefault();
    //   console.log('KGHSJKJD');

    //   // Instead, wait for the user to click the install button.
    //   // aboutDialog.addEventListener('close', () => {
    //   //   if (aboutDialog.returnValue === 'install') {
    //   //     e.prompt();
    //   //   }
    //   // });
    //   // @ts-ignore
    //   e.prompt();
    // });
  }, []);

  return null;
};
