// Telegram WebApp object
const tg = window.Telegram.WebApp;
// Tell Telegram app that WebApp is ready
tg.ready();
tg.expand();

consoleLog(tg);

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
