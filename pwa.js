const isLocalDevelopment = ["localhost", "127.0.0.1"].includes(window.location.hostname);

if ("serviceWorker" in navigator && isLocalDevelopment) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister());
    });
} else if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js").catch((error) => {
            console.error("Service worker registration failed:", error);
        });
    });
}
