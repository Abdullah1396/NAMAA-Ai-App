:root {
    --primary: #1b4332;
    --secondary: #2d6a4f;
    --accent: #95d5b2;
    --white: #ffffff;
}

body {
    margin: 0;
    font-family: 'Tajawal', sans-serif;
    background: #f8fbf9;
    display: flex;
    justify-content: center;
}

#app {
    width: 100%;
    max-width: 414px;
    height: 100vh;
    background: #fdfdfd;
    position: relative;
    overflow-y: auto;
}

/* شاشة Splash */
#splash-screen {
    position: fixed;
    width: 100%;
    max-width: 414px;
    height: 100vh;
    background: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: white;
}

.splash-logo { width: 120px; margin-bottom: 20px; animation: pulse 2s infinite; }

header {
    padding: 50px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primary);
    color: white;
    border-radius: 0 0 30px 30px;
}

.logo-top img { height: 40px; }

.stats-card {
    background: white;
    margin: -30px 20px 20px;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.stat-item { text-align: center; }
.stat-item .label { display: block; font-size: 12px; color: #666; }
.stat-item .value { font-size: 20px; font-weight: bold; color: var(--primary); }

.scanner-box { padding: 20px; }
.scan-window {
    height: 250px;
    background: #eee;
    border-radius: 25px;
    position: relative;
    overflow: hidden;
    border: 3px dashed var(--accent);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.laser-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: var(--accent);
    box-shadow: 0 0 15px var(--accent);
    animation: scan 2s infinite;
}

.nav-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    max-width: 414px;
    background: white;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    box-shadow: 0 -5px 20px rgba(0,0,0,0.05);
}

.nav-btn { border: none; background: none; display: flex; flex-direction: column; align-items: center; font-size: 12px; color: #999; }
.nav-btn.active { color: var(--primary); font-weight: bold; }

@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }

.hidden { display: none; }
