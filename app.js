* {
  box-sizing: border-box;
}

:root {
  --bg-1: #6ad7c9;
  --bg-2: #45d9b1;
  --bg-3: #f3a154;
  --bg-4: #ef9662;
  --dark: #111415;
  --soft-dark: #2d2d2d;
  --panel: #f3f7f1;
  --ink: #1d2020;
  --muted: #6a736f;
  --line: #d9dfe2;
  --shadow: rgba(22, 28, 28, 0.12);
  --green-1: #4b79a6;
  --green-2: #79d7c1;
  --green-3: #b7d550;
  --gold: #e3b833;
  --orange: #fa9b5a;
  --purple: #8670c5;
  --teal: #4ec0bf;
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Noto Sans JP", "Inter", sans-serif;
  background: linear-gradient(90deg, #5fd3be 0%, #60d0bd 18%, #efaf5d 100%);
  color: var(--dark);
}

body {
  display: flex;
  justify-content: center;
  padding: 0;
}

button, input {
  font: inherit;
}

.page-shell {
  width: 100%;
  max-width: 1480px;
  min-height: 100vh;
  padding: 0 28px 28px;
}

.topbar {
  padding: 18px 18px 8px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 16px;
  width: fit-content;
  margin-left: 118px;
}

.brand-mark {
  position: relative;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(255,255,255,0.18);
  border: 4px solid rgba(255,255,255,0.9);
  box-shadow: inset 0 0 0 8px rgba(255,255,255,0.12);
}

.leaf {
  position: absolute;
  display: block;
  width: 32px;
  height: 34px;
  background: rgba(255,255,255,0.9);
  border-radius: 0 100% 0 100%;
  transform-origin: center;
}

.leaf-1 { left: 15px; top: 17px; transform: rotate(-32deg); }
.leaf-2 { right: 12px; top: 18px; transform: rotate(32deg); }
.leaf-3 { left: 22px; bottom: 15px; transform: rotate(26deg); }
.leaf-4 { right: 20px; bottom: 16px; transform: rotate(-24deg); }

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 7px rgba(46, 70, 56, 0.18);
}

.brand-text span {
  font-size: 22px;
  letter-spacing: 0.02em;
}

.brand-text strong {
  font-size: 42px;
  letter-spacing: 0.02em;
}

.main-content {
  padding-top: 10px;
}

.main-content h1 {
  margin: 26px auto 18px;
  max-width: 1220px;
  text-align: center;
  font-size: clamp(28px, 3vw, 52px);
  line-height: 1.35;
  letter-spacing: -0.04em;
  font-weight: 800;
  color: rgba(20, 25, 26, 0.94);
}

.flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin: 22px auto 0;
  max-width: 1360px;
  padding: 0 24px 8px;
  flex-wrap: nowrap;
}

.step-card {
  position: relative;
  background: rgba(255,255,255,0.35);
  border: 2px solid rgba(255,255,255,0.55);
  box-shadow: 0 20px 40px rgba(64, 88, 79, 0.08);
  backdrop-filter: blur(3px);
}

.phone-card {
  width: 370px;
  min-height: 620px;
  border-radius: 30px;
  padding: 18px 18px 22px;
  background: rgba(255,255,255,0.18);
}

.phone-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 580px;
  border-radius: 26px;
  background: linear-gradient(180deg, #f9f9f5 0%, #dfe6eb 100%);
  border: 4px solid #0e0f10;
  box-shadow: inset 0 0 0 3px rgba(255,255,255,0.9), 0 14px 22px rgba(34,44,44,0.18);
  overflow: hidden;
}

.phone-notch {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 82px;
  height: 12px;
  border-radius: 999px;
  background: rgba(18, 20, 20, 0.86);
  z-index: 3;
}

.phone-screen {
  position: absolute;
  inset: 18px 12px 12px;
  border-radius: 18px;
  background: linear-gradient(180deg, #f7f0ea 0%, #e7f0ef 100%);
  box-shadow: inset 0 0 0 2px rgba(0,0,0,0.02);
  overflow: hidden;
}

.meal-photo {
  position: absolute;
  inset: 18px 18px 72px;
  border-radius: 16px 16px 8px 8px;
  background: linear-gradient(180deg, #fbf7f2 0%, #cbe0be 100%);
  border: 2px solid rgba(39, 75, 60, 0.1);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.meal-art {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.65), rgba(110, 170, 96, 0.14));
}

.bowl {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 30%, #f7f2ed 0%, #d9d4c3 32%, #a49885 33%, #cb9a55 34%, #d9d3bf 65%, #a9b98d 100%);
  box-shadow: inset 0 0 0 12px rgba(255,255,255,0.28);
}

.bowl-main {
  width: 220px;
  height: 112px;
  left: 50%;
  top: 96px;
  transform: translateX(-50%);
}

.bowl-side {
  width: 160px;
  height: 84px;
  left: 50%;
  bottom: 88px;
  transform: translateX(-50%);
}

.dish {
  position: absolute;
  border-radius: 50%;
  box-shadow: inset 0 0 0 7px rgba(255,255,255,0.18);
}

.dish-1 { width: 60px; height: 60px; left: 26px; top: 130px; background: radial-gradient(circle at 50% 35%, #f6d4a1 0%, #d68b42 40%, #8c5b2a 100%); }
.dish-2 { width: 46px; height: 46px; right: 36px; top: 142px; background: radial-gradient(circle at 50% 30%, #f0d16a 0%, #d2a440 44%, #7b4f1b 100%); }
.dish-3 { width: 42px; height: 42px; left: 104px; top: 210px; background: radial-gradient(circle at 50% 30%, #9ebd86 0%, #5e8d39 38%, #2c5e3d 100%); }
.dish-4 { width: 52px; height: 52px; right: 94px; top: 206px; background: radial-gradient(circle at 50% 30%, #e6d89f 0%, #c77643 38%, #7a4a25 100%); }
.dish-5 { width: 38px; height: 38px; left: 182px; top: 238px; background: radial-gradient(circle at 50% 30%, #b7d360 0%, #5f8c36 40%, #2d5931 100%); }

.capture-underlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 70px;
  background: linear-gradient(180deg, rgba(255,255,255,0), rgba(16, 84, 68, 0.08));
}

.capture-label {
  position: absolute;
  left: 50%;
  bottom: 38px;
  transform: translateX(-50%);
  font-size: 15px;
  font-weight: 600;
  color: rgba(0,0,0,0.72);
}

.camera-btn {
  position: absolute;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #dbe5e6 100%);
  color: #5c727e;
  box-shadow: 0 8px 16px rgba(28, 55, 64, 0.15), inset 0 0 0 2px rgba(0,0,0,0.05);
  cursor: pointer;
}

#photoInput {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}

.analysis-card {
  width: 410px;
  min-height: 470px;
  border-radius: 26px;
  padding: 18px 18px 14px;
  background: rgba(255,255,255,0.25);
}

.analysis-visual {
  position: relative;
  height: 160px;
  border-radius: 18px 18px 0 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05));
}

.ai-face {
  position: absolute;
  left: 70px;
  top: 20px;
  width: 118px;
  height: 106px;
}

.ai-head {
  position: relative;
  width: 94px;
  height: 74px;
  margin: 8px auto 0;
  border-radius: 28px;
  background: linear-gradient(180deg, #dfe8ee 0%, #c2d1dc 100%);
  box-shadow: inset 0 0 0 4px rgba(255,255,255,0.4);
}

.eye {
  position: absolute;
  top: 26px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #1f2c2a;
}

.eye.left { left: 24px; }
.eye.right { right: 24px; }

.mouth {
  position: absolute;
  left: 50%;
  bottom: 16px;
  width: 26px;
  height: 12px;
  transform: translateX(-50%);
  border-bottom: 4px solid #5e6b72;
  border-radius: 0 0 20px 20px;
}

.ai-body {
  width: 98px;
  height: 44px;
  margin: 0 auto;
  border-radius: 14px 14px 20px 20px;
  background: linear-gradient(180deg, #dfe8ee 0%, #b7c7d1 100%);
}

.magnifier {
  position: absolute;
  right: 26px;
  top: 20px;
  width: 118px;
  height: 118px;
}

.magnifier .circle {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 8px solid #d8e6f0;
  border-radius: 50%;
  box-shadow: inset 0 0 0 8px rgba(255,255,255,0.28), 0 6px 10px rgba(62,87,105,0.12);
}

.magnifier .handle {
  position: absolute;
  width: 16px;
  height: 66px;
  background: #5b7b88;
  right: 8px;
  bottom: 0;
  transform: rotate(42deg);
  border-radius: 12px;
}

.bars {
  position: absolute;
  left: 62px;
  bottom: 12px;
  display: flex;
  align-items: end;
  gap: 8px;
  height: 52px;
}

.bars span {
  display: block;
  width: 20px;
  min-height: 24px;
  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #b3d781 0%, #7bb29a 100%);
}

.analysis-box {
  margin-top: 10px;
  padding: 14px 16px 10px;
  border-radius: 18px;
  background: rgba(255,255,255,0.36);
  border: 1px solid rgba(127,144,136,0.18);
}

.tag {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f4d756, #efb147);
  color: #2c3a34;
  font-size: 12px;
  font-weight: 700;
}

.calorie-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 18px;
  font-size: 14px;
  font-weight: 600;
  color: rgba(21,25,28,0.78);
}

.calorie-row strong {
  font-size: 18px;
  font-weight: 800;
}

.pfc-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.pfc-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 62px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
}

.pfc-item span {
  font-size: 13px;
  opacity: 0.9;
}

.pfc-item strong {
  font-size: 22px;
  line-height: 1;
  margin-top: 3px;
}

.protein { background: linear-gradient(180deg, #67d0c1 0%, #4aa3d5 100%); }
.fat { background: linear-gradient(180deg, #95d468 0%, #66b29a 100%); }
.carb { background: linear-gradient(180deg, #f7c267 0%, #e79d4d 100%); }

.radar-box {
  display: grid;
  grid-template-columns: 134px 1fr;
  gap: 14px;
  margin-top: 18px;
  align-items: center;
}

.radar-chart {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(191,214,193,0.9) 48%, rgba(158, 212, 188, 0.6) 100%);
  box-shadow: inset 0 0 0 12px rgba(255,255,255,0.24);
}

.radar-chart::before,
.radar-chart::after {
  content: "";
  position: absolute;
  inset: 12px;
  border-radius: 50%;
  border: 1px solid rgba(86, 126, 124, 0.2);
}

.radar-chart::after {
  inset: 24px;
}

.dot {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f8f9ef;
  box-shadow: 0 0 0 4px rgba(111, 150, 120, 0.2);
}

.dot-a { left: 52px; top: 18px; }
.dot-b { left: 82px; top: 38px; }
.dot-c { left: 42px; top: 82px; }
.dot-d { left: 18px; top: 52px; }
.dot-e { left: 92px; top: 84px; }

.legend {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 12px;
  font-size: 11px;
  font-weight: 700;
  color: rgba(16, 20, 20, 0.8);
}

.legend > div {
  display: flex;
  align-items: center;
  gap: 8px;
}

.key {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.key-green { background: #5ac2ad; }
.key-orange { background: #f3a972; }
.key-yellow { background: #e6c95d; }
.key-purple { background: #7a75d5; }

.arrow {
  width: 26px;
  height: 26px;
  display: grid;
  place-items: center;
  font-size: 28px;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 3px 10px rgba(11, 15, 16, 0.18);
}

.advice-card {
  width: 385px;
  min-height: 520px;
  border-radius: 26px;
  padding: 16px 14px 14px;
  background: rgba(255,255,255,0.26);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.advice-portrait {
  position: relative;
  width: 110px;
  height: 110px;
  margin: 10px auto 16px;
}

.portrait-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 5px solid rgba(127, 187, 181, 0.8);
  box-shadow: 0 0 0 12px rgba(122, 196, 191, 0.18);
}

.portrait-face {
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  background: linear-gradient(180deg, #fdf3e3 0%, #f7d8a9 100%);
  overflow: hidden;
}

.portrait-face .head {
  position: absolute;
  left: 50%;
  top: 38px;
  transform: translateX(-50%);
  width: 34px;
  height: 32px;
  border-radius: 50%;
  background: #f9d3a1;
}

.portrait-face .hair {
  position: absolute;
  left: 50%;
  top: 18px;
  transform: translateX(-50%);
  width: 52px;
  height: 26px;
  border-radius: 24px 24px 8px 8px;
  background: rgba(93, 58, 36, 0.9);
}

.portrait-face .smile {
  position: absolute;
  left: 50%;
  bottom: 17px;
  transform: translateX(-50%);
  width: 26px;
  height: 12px;
  border-bottom: 4px solid rgba(69, 51, 40, 0.9);
  border-radius: 0 0 16px 16px;
}

.bubble {
  position: relative;
  margin-top: 8px;
  padding: 22px 18px 18px;
  border-radius: 24px 24px 24px 18px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(116,130,126,0.22);
  color: rgba(18, 20, 20, 0.8);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.6;
  box-shadow: 0 14px 20px rgba(42, 50, 52, 0.08);
}

.bubble::before {
  content: "";
  position: absolute;
  left: 36px;
  top: -12px;
  width: 24px;
  height: 24px;
  background: rgba(255,255,255,0.75);
  border-left: 1px solid rgba(116,130,126,0.22);
  border-top: 1px solid rgba(116,130,126,0.22);
  transform: rotate(45deg);
}

.menu-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: auto;
  padding-top: 12px;
}

.tab {
  border: 0;
  background: rgba(255,255,255,0.18);
  border-radius: 16px;
  padding: 12px 8px 10px;
  color: rgba(39,52,55,0.7);
  font-size: 11px;
  font-weight: 700;
  box-shadow: inset 0 0 0 1px rgba(95,105,104,0.12);
}

.tab.active {
  background: rgba(255,255,255,0.7);
  color: rgba(15,19,20,0.88);
}

@media (max-width: 1180px) {
  .flow {
    flex-wrap: wrap;
  }

  .arrow {
    transform: rotate(90deg);
  }
}

@media (max-width: 720px) {
  .page-shell {
    padding-left: 14px;
    padding-right: 14px;
  }

  .brand-wrap {
    margin-left: 0;
    justify-content: center;
  }

  .main-content h1 {
    max-width: 640px;
    font-size: 26px;
    letter-spacing: -0.03em;
  }

  .phone-card,
  .analysis-card,
  .advice-card {
    width: min(100%, 420px);
  }
}
