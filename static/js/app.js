// Telegram WebApp object
const tg = window.Telegram.WebApp;
// Tell Telegram app that WebApp is ready
tg.ready();
tg.expand();

//Safe area variable declaration

(function(){
    let safeArea = tg.safeAreaInset;
    let contentSafeArea = tg.contentSafeAreaInset;
    
    let statusBarHeight = safeArea.top + contentSafeArea.top + "px";
    let navBarHeight = safeArea.bottom + contentSafeArea.bottom + "px";
    
    let root = document.documentElement;
    root.style.setProperty("--statusBar-height", statusBarHeight);
    root.style.setProperty("--navBar-height", navBarHeight);
    
    
})();

(function () {
    // Telegram WebApp object
    const initDataRaw = tg.initData; // ✅ RAW STRING ONLY

    fetch("/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            initData: initDataRaw
        })
    })
    .then(res => res.json())
    .then(data => {
        consoleLog("Telegram auth response:", data);

        if (data.ok) {
            consoleLog("Verified user:", data.user);
        }
    })
    .catch(err => consoleLog("Telegram auth error:", err));
})();
