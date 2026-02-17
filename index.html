<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Radhe Chavan | Penetration Tester</title>
  <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;600;700&family=Orbitron:wght@700;900&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --red: #ff2244;
      --red-dim: #aa1122;
      --red-glow: rgba(255,34,68,0.35);
      --bg: #050508;
      --bg2: #0a0a10;
      --bg3: #0f0f18;
      --grid: rgba(255,34,68,0.04);
      --text: #e8e8f0;
      --muted: #5a5a72;
      --mono: 'Share Tech Mono', monospace;
      --display: 'Orbitron', sans-serif;
      --body: 'Rajdhani', sans-serif;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--bg);
      color: var(--text);
      font-family: var(--body);
      font-size: 16px;
      overflow-x: hidden;
      cursor: crosshair;
    }

    /* GRID BACKGROUND */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 40px 40px;
      pointer-events: none;
      z-index: 0;
    }

    /* SCANLINE OVERLAY */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.05) 2px,
        rgba(0,0,0,0.05) 4px
      );
      pointer-events: none;
      z-index: 999;
    }

    /* NAV */
    nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      padding: 16px 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(5,5,8,0.85);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255,34,68,0.15);
    }

    .nav-logo {
      font-family: var(--display);
      font-size: 13px;
      font-weight: 700;
      color: var(--red);
      letter-spacing: 4px;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;
    }

    .nav-links a {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      text-decoration: none;
      letter-spacing: 2px;
      transition: color 0.2s;
    }

    .nav-links a:hover { color: var(--red); }

    .nav-status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--mono);
      font-size: 10px;
      color: #22ff88;
      letter-spacing: 2px;
    }

    .status-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #22ff88;
      animation: blink 1.4s ease-in-out infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.2; }
    }

    /* HERO */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 120px 48px 80px;
      z-index: 1;
    }

    .hero-inner {
      max-width: 900px;
    }

    .hero-tag {
      font-family: var(--mono);
      font-size: 11px;
      letter-spacing: 4px;
      color: var(--red);
      margin-bottom: 24px;
      opacity: 0;
      animation: fadeUp 0.6s 0.2s ease forwards;
    }

    .hero-tag::before { content: '> '; }

    .hero-name {
      font-family: var(--display);
      font-size: clamp(44px, 8vw, 88px);
      font-weight: 900;
      line-height: 0.9;
      letter-spacing: -2px;
      color: #fff;
      opacity: 0;
      animation: fadeUp 0.6s 0.4s ease forwards;
    }

    .hero-name span {
      color: var(--red);
      text-shadow: 0 0 40px var(--red-glow), 0 0 80px var(--red-glow);
    }

    .hero-title {
      font-family: var(--mono);
      font-size: clamp(13px, 2vw, 17px);
      color: var(--muted);
      margin-top: 20px;
      letter-spacing: 3px;
      opacity: 0;
      animation: fadeUp 0.6s 0.6s ease forwards;
    }

    .hero-title .accent { color: var(--red); }

    .hero-desc {
      font-family: var(--body);
      font-size: 18px;
      line-height: 1.7;
      color: #9090a8;
      max-width: 560px;
      margin-top: 32px;
      font-weight: 400;
      opacity: 0;
      animation: fadeUp 0.6s 0.8s ease forwards;
    }

    .hero-cta {
      display: flex;
      gap: 16px;
      margin-top: 40px;
      opacity: 0;
      animation: fadeUp 0.6s 1s ease forwards;
    }

    .btn-primary {
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 3px;
      color: var(--bg);
      background: var(--red);
      border: none;
      padding: 14px 32px;
      text-decoration: none;
      text-transform: uppercase;
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
      transition: all 0.2s;
      cursor: crosshair;
    }

    .btn-primary:hover {
      background: #ff4466;
      box-shadow: 0 0 24px var(--red-glow);
    }

    .btn-secondary {
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 3px;
      color: var(--red);
      background: transparent;
      border: 1px solid rgba(255,34,68,0.4);
      padding: 14px 32px;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.2s;
      cursor: crosshair;
    }

    .btn-secondary:hover {
      border-color: var(--red);
      background: rgba(255,34,68,0.08);
    }

    /* HERO DECORATION */
    .hero-deco {
      position: absolute;
      right: 48px;
      top: 50%;
      transform: translateY(-50%);
      width: 340px;
      opacity: 0;
      animation: fadeIn 1s 1.2s ease forwards;
    }

    .terminal-box {
      background: rgba(10,10,16,0.9);
      border: 1px solid rgba(255,34,68,0.25);
      padding: 0;
      font-family: var(--mono);
      font-size: 12px;
      position: relative;
      overflow: hidden;
    }

    .terminal-box::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--red), transparent);
    }

    .terminal-header {
      background: rgba(255,34,68,0.08);
      padding: 10px 16px;
      border-bottom: 1px solid rgba(255,34,68,0.15);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .t-dot { width: 10px; height: 10px; border-radius: 50%; }
    .t-dot.r { background: var(--red); }
    .t-dot.y { background: #ffaa22; }
    .t-dot.g { background: #22ff88; }

    .terminal-title {
      margin-left: 8px;
      color: var(--muted);
      font-size: 10px;
      letter-spacing: 2px;
    }

    .terminal-body {
      padding: 20px;
      line-height: 2;
    }

    .t-line { display: block; }
    .t-prompt { color: var(--red); }
    .t-cmd { color: #22ff88; }
    .t-out { color: #9090a8; padding-left: 16px; }
    .t-key { color: var(--red); }
    .t-val { color: #e8e8f0; }
    .t-cursor {
      display: inline-block;
      width: 8px; height: 14px;
      background: var(--red);
      vertical-align: middle;
      animation: blink 1s step-end infinite;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    /* STATS BAR */
    .stats-bar {
      position: relative;
      z-index: 1;
      border-top: 1px solid rgba(255,34,68,0.1);
      border-bottom: 1px solid rgba(255,34,68,0.1);
      background: rgba(10,10,16,0.6);
      padding: 28px 48px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
    }

    .stat-item {
      text-align: center;
      padding: 0 24px;
      border-right: 1px solid rgba(255,34,68,0.1);
    }

    .stat-item:last-child { border-right: none; }

    .stat-num {
      font-family: var(--display);
      font-size: 36px;
      font-weight: 900;
      color: var(--red);
      display: block;
      line-height: 1;
      text-shadow: 0 0 20px var(--red-glow);
    }

    .stat-label {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--muted);
      letter-spacing: 2px;
      margin-top: 6px;
      display: block;
      text-transform: uppercase;
    }

    /* SECTION BASE */
    section {
      position: relative;
      z-index: 1;
      padding: 100px 48px;
    }

    .section-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 60px;
    }

    .section-num {
      font-family: var(--display);
      font-size: 11px;
      color: var(--red);
      letter-spacing: 4px;
      opacity: 0.6;
    }

    .section-title {
      font-family: var(--display);
      font-size: clamp(22px, 3vw, 32px);
      font-weight: 700;
      color: #fff;
      letter-spacing: 2px;
    }

    .section-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, rgba(255,34,68,0.4), transparent);
    }

    /* SKILLS */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 2px;
    }

    .skill-card {
      background: var(--bg2);
      border: 1px solid rgba(255,34,68,0.08);
      padding: 28px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 3px;
      height: 100%;
      background: var(--red);
      transform: scaleY(0);
      transition: transform 0.3s ease;
      transform-origin: bottom;
    }

    .skill-card:hover {
      background: var(--bg3);
      border-color: rgba(255,34,68,0.25);
      transform: translateX(4px);
    }

    .skill-card:hover::before { transform: scaleY(1); }

    .skill-icon {
      font-size: 28px;
      margin-bottom: 12px;
      display: block;
    }

    .skill-name {
      font-family: var(--mono);
      font-size: 13px;
      color: var(--red);
      letter-spacing: 2px;
      margin-bottom: 8px;
    }

    .skill-desc {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.6;
    }

    .skill-bar-wrap {
      margin-top: 16px;
      height: 2px;
      background: rgba(255,255,255,0.05);
    }

    .skill-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--red), #ff6688);
      position: relative;
    }

    .skill-bar::after {
      content: '';
      position: absolute;
      right: 0; top: -2px;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--red);
      box-shadow: 0 0 8px var(--red);
    }

    /* PROJECTS */
    .projects-list {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .project-item {
      background: var(--bg2);
      border: 1px solid rgba(255,34,68,0.08);
      padding: 32px 36px;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: start;
      gap: 24px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }

    .project-item::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, var(--red), transparent);
      transform: scaleX(0);
      transition: transform 0.4s ease;
      transform-origin: left;
    }

    .project-item:hover {
      background: var(--bg3);
      border-color: rgba(255,34,68,0.2);
    }

    .project-item:hover::after { transform: scaleX(1); }

    .project-tag {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 3px;
      color: var(--red);
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .project-name {
      font-family: var(--display);
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }

    .project-desc {
      font-size: 15px;
      color: var(--muted);
      line-height: 1.7;
      max-width: 600px;
    }

    .project-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .chip {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 1px;
      color: var(--red);
      border: 1px solid rgba(255,34,68,0.25);
      padding: 4px 12px;
      background: rgba(255,34,68,0.04);
    }

    .project-status {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 2px;
      white-space: nowrap;
    }

    .status-live { color: #22ff88; }
    .status-wip { color: #ffaa22; }
    .status-soon { color: var(--muted); }

    /* EXPERIENCE */
    .exp-timeline {
      position: relative;
      padding-left: 40px;
    }

    .exp-timeline::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 1px;
      background: linear-gradient(180deg, var(--red), transparent);
    }

    .exp-item {
      position: relative;
      margin-bottom: 48px;
    }

    .exp-item::before {
      content: '';
      position: absolute;
      left: -44px;
      top: 8px;
      width: 8px; height: 8px;
      border-radius: 50%;
      background: var(--red);
      box-shadow: 0 0 12px var(--red);
    }

    .exp-date {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--red);
      letter-spacing: 3px;
      margin-bottom: 8px;
    }

    .exp-role {
      font-family: var(--display);
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      letter-spacing: 1px;
    }

    .exp-company {
      font-family: var(--mono);
      font-size: 12px;
      color: var(--muted);
      letter-spacing: 2px;
      margin: 6px 0 16px;
    }

    .exp-points {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .exp-points li {
      font-size: 15px;
      color: #9090a8;
      padding-left: 20px;
      position: relative;
      line-height: 1.6;
    }

    .exp-points li::before {
      content: '//';
      position: absolute;
      left: 0;
      color: rgba(255,34,68,0.5);
      font-family: var(--mono);
      font-size: 11px;
    }

    /* CONTACT */
    .contact-section {
      background: var(--bg2);
      border-top: 1px solid rgba(255,34,68,0.15);
      text-align: center;
    }

    .contact-heading {
      font-family: var(--display);
      font-size: clamp(28px, 5vw, 56px);
      font-weight: 900;
      color: #fff;
      letter-spacing: 2px;
      margin-bottom: 16px;
    }

    .contact-heading span { color: var(--red); }

    .contact-sub {
      font-family: var(--mono);
      font-size: 13px;
      color: var(--muted);
      letter-spacing: 3px;
      margin-bottom: 48px;
    }

    .contact-links {
      display: flex;
      gap: 24px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .contact-link {
      font-family: var(--mono);
      font-size: 12px;
      letter-spacing: 3px;
      color: var(--text);
      text-decoration: none;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 16px 36px;
      display: flex;
      align-items: center;
      gap: 12px;
      transition: all 0.3s;
    }

    .contact-link:hover {
      border-color: var(--red);
      color: var(--red);
      box-shadow: 0 0 20px rgba(255,34,68,0.15);
    }

    /* FOOTER */
    footer {
      position: relative;
      z-index: 1;
      padding: 24px 48px;
      border-top: 1px solid rgba(255,34,68,0.08);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-copy {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--muted);
      letter-spacing: 2px;
    }

    .footer-copy span { color: var(--red); }

    /* RED GLOW CORNER */
    .glow-corner {
      position: fixed;
      bottom: -100px;
      right: -100px;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255,34,68,0.07), transparent 70%);
      pointer-events: none;
      z-index: 0;
    }

    /* RESPONSIVE */
    @media (max-width: 900px) {
      nav { padding: 16px 24px; }
      .nav-links { display: none; }
      .hero { padding: 100px 24px 60px; }
      .hero-deco { display: none; }
      .stats-bar { grid-template-columns: repeat(2,1fr); padding: 24px; }
      .stat-item { border-right: none; border-bottom: 1px solid rgba(255,34,68,0.1); padding: 16px; }
      section { padding: 60px 24px; }
      footer { padding: 20px 24px; flex-direction: column; gap: 12px; text-align: center; }
    }
  </style>
</head>
<body>

  <div class="glow-corner"></div>

  <!-- NAV -->
  <nav>
    <a href="#" class="nav-logo">RADHE_CHAVAN</a>
    <ul class="nav-links">
      <li><a href="#skills">SKILLS</a></li>
      <li><a href="#projects">PROJECTS</a></li>
      <li><a href="#experience">EXPERIENCE</a></li>
      <li><a href="#contact">CONTACT</a></li>
    </ul>
    <div class="nav-status">
      <span class="status-dot"></span>
      AVAILABLE_FOR_HIRE
    </div>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-inner">
      <p class="hero-tag">PENETRATION TESTER // SECURITY ANALYST</p>
      <h1 class="hero-name">
        RADHE<br/><span>CHAVAN</span>
      </h1>
      <p class="hero-title">
        <span class="accent">//</span>&nbsp;
        OFFENSIVE SECURITY &nbsp;|&nbsp; WEB APP TESTING &nbsp;|&nbsp; VAPT
      </p>
      <p class="hero-desc">
        Security Analyst with hands-on experience in vulnerability assessment, 
        SQL injection exploitation, and professional penetration testing engagements. 
        Building tools. Breaking systems. Documenting impact.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn-primary">View Projects</a>
        <a href="#contact" class="btn-secondary">Contact Me</a>
      </div>
    </div>

    <!-- TERMINAL WIDGET -->
    <div class="hero-deco">
      <div class="terminal-box">
        <div class="terminal-header">
          <span class="t-dot r"></span>
          <span class="t-dot y"></span>
          <span class="t-dot g"></span>
          <span class="terminal-title">RECON_TERMINAL — zsh</span>
        </div>
        <div class="terminal-body">
          <span class="t-line"><span class="t-prompt">radhe@kali</span>:~$ <span class="t-cmd">whoami</span></span>
          <span class="t-line t-out"><span class="t-key">role</span>: <span class="t-val">Penetration Tester</span></span>
          <span class="t-line t-out"><span class="t-key">exp </span>: <span class="t-val">9 months (Security Analyst)</span></span>
          <span class="t-line t-out"><span class="t-key">certs</span>: <span class="t-val">In Progress</span></span>
          <span class="t-line">&nbsp;</span>
          <span class="t-line"><span class="t-prompt">radhe@kali</span>:~$ <span class="t-cmd">cat skills.txt</span></span>
          <span class="t-line t-out">SQLi | XSS | IDOR | Burp</span>
          <span class="t-line t-out">Nmap | Recon | Reporting</span>
          <span class="t-line t-out">Python | Bash | Linux</span>
          <span class="t-line">&nbsp;</span>
          <span class="t-line"><span class="t-prompt">radhe@kali</span>:~$ <span class="t-cursor"></span></span>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <div class="stats-bar">
    <div class="stat-item">
      <span class="stat-num">9+</span>
      <span class="stat-label">Months Professional Exp</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">2</span>
      <span class="stat-label">VAPT Projects Completed</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">10+</span>
      <span class="stat-label">CVEs / Vulns Identified</span>
    </div>
    <div class="stat-item">
      <span class="stat-num">∞</span>
      <span class="stat-label">Bugs Left to Find</span>
    </div>
  </div>

  <!-- SKILLS -->
  <section id="skills">
    <div class="section-header">
      <span class="section-num">01</span>
      <h2 class="section-title">ARSENAL</h2>
      <div class="section-line"></div>
    </div>

    <div class="skills-grid">

      <div class="skill-card">
        <span class="skill-icon">🌐</span>
        <div class="skill-name">WEB APP TESTING</div>
        <div class="skill-desc">SQL Injection, XSS, IDOR, Auth Bypass. Manual exploitation with deep root-cause analysis.</div>
        <div class="skill-bar-wrap"><div class="skill-bar" style="width:80%"></div></div>
      </div>

      <div class="skill-card">
        <span class="skill-icon">🔍</span>
        <div class="skill-name">RECONNAISSANCE</div>
        <div class="skill-desc">Nmap, subdomain enum, service fingerprinting, OSINT gathering, attack surface mapping.</div>
        <div class="skill-bar-wrap"><div class="skill-bar" style="width:75%"></div></div>
      </div>

      <div class="skill-card">
        <span class="skill-icon">🛠</span>
        <div class="skill-name">TOOLS</div>
        <div class="skill-desc">Burp Suite, SQLMap, Metasploit, Nmap, Nikto, Gobuster, Wireshark.</div>
        <div class="skill-bar-wrap"><div class="skill-bar" style="width:82%"></div></div>
      </div>

      <div class="skill-card">
        <span class="skill-icon">📝</span>
        <div class="skill-name">REPORT WRITING</div>
        <div class="skill-desc">Professional vulnerability reports with CVSS scoring, PoC, business impact and remediation.</div>
        <div class="skill-bar-wrap"><div class="skill-bar" style="width:78%"></div></div>
      </div>

      <div class="skill-card">
        <span class="skill-icon">🐍</span>
        <div class="skill-name">SCRIPTING</div>
        <div class="skill-desc">Python automation scripts, Bash tooling, recon pipeline automation, CVE mappers.</div>
        <div class="skill-bar-wrap"><div class="skill-bar" style="width:65%"></div></div>
      </div>

      <div class="skill-card">
        <span class="skill-icon">🏴</span>
        <div class="skill-name">METHODOLOGY</div>
        <div class="skill-desc">OWASP Top 10, PTES framework, structured engagement scoping and finding prioritization.</div>
        <div class="skill-bar-wrap"><div class="skill-bar" style="width:72%"></div></div>
      </div>

    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" style="background: rgba(10,10,16,0.4);">
    <div class="section-header">
      <span class="section-num">02</span>
      <h2 class="section-title">OPERATIONS</h2>
      <div class="section-line"></div>
    </div>

    <div class="projects-list">

      <div class="project-item">
        <div>
          <div class="project-tag">// WRITEUP — WEB SECURITY</div>
          <div class="project-name">SQL INJECTION: Lab to Real-World Case Study</div>
          <div class="project-desc">
            From PortSwigger labs to a live VAPT engagement — full breakdown of SQL injection discovery, manual exploitation, database extraction, business impact analysis, and remediation strategy.
          </div>
          <div class="project-chips">
            <span class="chip">SQL INJECTION</span>
            <span class="chip">MANUAL EXPLOIT</span>
            <span class="chip">VAPT</span>
            <span class="chip">BURP SUITE</span>
          </div>
        </div>
        <div class="project-status status-wip">◈ IN PROGRESS</div>
      </div>

      <div class="project-item">
        <div>
          <div class="project-tag">// TOOL — PYTHON AUTOMATION</div>
          <div class="project-name">RECON AUTOMATION ENGINE</div>
          <div class="project-desc">
            Python-based automated recon tool that runs Nmap, extracts open ports, maps services, auto-triggers NSE scripts, and generates structured Markdown/JSON reports for each target.
          </div>
          <div class="project-chips">
            <span class="chip">PYTHON</span>
            <span class="chip">NMAP</span>
            <span class="chip">AUTOMATION</span>
            <span class="chip">JSON OUTPUT</span>
          </div>
        </div>
        <div class="project-status status-wip">◈ IN PROGRESS</div>
      </div>

      <div class="project-item">
        <div>
          <div class="project-tag">// WRITEUP — VULNERABILITY RESEARCH</div>
          <div class="project-name">IDOR & AUTH BYPASS RESEARCH</div>
          <div class="project-desc">
            Deep-dive analysis of Insecure Direct Object References and authentication bypass vulnerabilities — root cause, access control failures, exploitation logic and secure code fixes.
          </div>
          <div class="project-chips">
            <span class="chip">IDOR</span>
            <span class="chip">AUTH BYPASS</span>
            <span class="chip">OWASP</span>
          </div>
        </div>
        <div class="project-status status-soon">◎ COMING SOON</div>
      </div>

      <div class="project-item">
        <div>
          <div class="project-tag">// TOOL — PHASE 1 BUILD</div>
          <div class="project-name">VULNSCAN — Automated Vulnerability Scanner</div>
          <div class="project-desc">
            Modular vulnerability scanner built in Python. Phase 1: port scanning + banner grabbing + service detection. Phase 2: CVE mapping via NVD API. Phase 3: HTML/PDF report generation.
          </div>
          <div class="project-chips">
            <span class="chip">PYTHON</span>
            <span class="chip">NVD API</span>
            <span class="chip">CVE MAPPING</span>
            <span class="chip">ASYNC</span>
          </div>
        </div>
        <div class="project-status status-soon">◎ COMING SOON</div>
      </div>

    </div>
  </section>

  <!-- EXPERIENCE -->
  <section id="experience">
    <div class="section-header">
      <span class="section-num">03</span>
      <h2 class="section-title">ENGAGEMENTS</h2>
      <div class="section-line"></div>
    </div>

    <div class="exp-timeline">

      <div class="exp-item">
        <div class="exp-date">2024 — PRESENT</div>
        <div class="exp-role">Security Analyst</div>
        <div class="exp-company">// Cybersecurity Firm — India</div>
        <ul class="exp-points">
          <li>Conducted 25+ vulnerability assessments across web and network environments</li>
          <li>Identified critical SQL Injection vulnerability enabling full database compromise in production application</li>
          <li>Performed manual validation of automated scanner findings, reducing false positives significantly</li>
          <li>Authored detailed professional penetration test reports with CVSS scoring and remediation guidance</li>
          <li>Delivered 2 complete VAPT engagements from scoping through final report presentation</li>
        </ul>
      </div>

      <div class="exp-item">
        <div class="exp-date">2023 — 2024</div>
        <div class="exp-role">Self-Directed Security Training</div>
        <div class="exp-company">// PortSwigger Web Security Academy | HTB | TryHackMe</div>
        <ul class="exp-points">
          <li>Completed PortSwigger SQL Injection learning path — all labs including blind and time-based</li>
          <li>Practiced web application attack chains: SQLi → XSS → IDOR → Auth mechanisms</li>
          <li>Built foundational methodology for structured vulnerability analysis and reporting</li>
        </ul>
      </div>

    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="contact-section">
    <div class="section-header" style="justify-content: center; margin-bottom: 32px;">
      <span class="section-num">04</span>
      <h2 class="section-title">ESTABLISH CONTACT</h2>
    </div>

    <h2 class="contact-heading">READY TO <span>COLLABORATE</span></h2>
    <p class="contact-sub">OPEN FOR PENTEST ROLES // BUG BOUNTY // FREELANCE ENGAGEMENTS</p>

    <div class="contact-links">
      <a href="https://linkedin.com/in/yourprofile" class="contact-link" target="_blank">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        LINKEDIN
      </a>
      <a href="https://github.com/radhe-chavan" class="contact-link" target="_blank">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
        GITHUB
      </a>
      <a href="mailto:your@email.com" class="contact-link">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
        EMAIL
      </a>
      <a href="/blogs" class="contact-link">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
        BLOG
      </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <span class="footer-copy">© 2026 <span>RADHE CHAVAN</span> // ALL SYSTEMS OPERATIONAL</span>
    <span class="footer-copy">BUILT WITH <span>PASSION</span> // OFFENSIVE SECURITY</span>
  </footer>

  <script>
    // Typing effect in terminal
    // Intersection Observer for fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .project-item, .exp-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });

    // Glitch effect on name hover
    const name = document.querySelector('.hero-name');
    name.addEventListener('mouseenter', () => {
      name.style.textShadow = '3px 0 var(--red), -3px 0 #00ffff';
      setTimeout(() => { name.style.textShadow = ''; }, 200);
    });
  </script>
</body>
</html>
