export default function Hero() {
  return (
    <>
      
      <div className="wrap relative z-[2] mx-auto w-full max-w-[1200px] px-8 max-[640px]:px-5">
        <header className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-left">
              <h1>
                <span className="line"><span>Harmanjeet</span></span>
                <span className="line"><span className="gradient-text">Singh.</span></span>
              </h1>
              <p className="lead">I build full-stack web apps and the automated tests behind them. Today I ship <span className="serif">logistics software</span> for a courier company, and I started in electronics — so I'm just as comfortable debugging a machine as a React component.</p>
      
              <div className="hero-meta">
                <div>
                  <span className="label">Currently</span>
                  <span className="value">Full-Stack Dev @ M5C Logistics</span>
                </div>
                <div>
                  <span className="label">Based in</span>
                  <span className="value">New Delhi, IN</span>
                </div>
              </div>
      
              <div className="cta">
                <a className="btn primary" href="#projects">
                  See my projects
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a className="btn" href="mailto:harmanjeetsingh671@gmail.com">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  Email me
                </a>
              </div>
            </div>
      
            <div className="hero-right">
              <div className="code-card">
                <div className="code-header">
                  <div className="code-dots"><span></span><span></span><span></span></div>
                  <div className="code-title">~/harmanjeet/dev.ts</div>
                </div>
                <div className="code-body">
      <span className="code-line"><span className="tok-com">// shipping software since '22</span></span>
      <span className="code-line"><span className="tok-key">const</span> <span className="tok-var">dev</span> <span className="tok-brace">=</span> <span className="tok-brace">{'{'}</span></span>
      <span className="code-line">  <span className="tok-prop">name</span><span className="tok-brace">:</span> <span className="tok-str">"Harmanjeet Singh"</span><span className="tok-brace">,</span></span>
      <span className="code-line">  <span className="tok-prop">role</span><span className="tok-brace">:</span> <span className="tok-str">"Full-Stack Engineer"</span><span className="tok-brace">,</span></span>
      <span className="code-line">  <span className="tok-prop">stack</span><span className="tok-brace">:</span> <span className="tok-brace">[</span><span className="tok-str">"Next.js"</span><span className="tok-brace">,</span> <span className="tok-str">"Node"</span><span className="tok-brace">,</span> <span className="tok-str">"Mongo"</span><span className="tok-brace">],</span></span>
      <span className="code-line">  <span className="tok-prop">based</span><span className="tok-brace">:</span> <span className="tok-str">"New Delhi, IN"</span><span className="tok-brace">,</span></span>
      <span className="code-line">  <span className="tok-prop">ships</span><span className="tok-brace">:</span> <span className="tok-key">async</span> <span className="tok-brace">()</span> <span className="tok-key">=&gt;</span> <span className="tok-brace">{'{'}</span></span>
      <span className="code-line">    <span className="tok-key">await</span> <span className="tok-fn">build</span><span className="tok-brace">(</span><span className="tok-str">"logistics"</span><span className="tok-brace">);</span></span>
      <span className="code-line">    <span className="tok-key">await</span> <span className="tok-fn">test</span><span className="tok-brace">(</span><span className="tok-str">"everything"</span><span className="tok-brace">);</span></span>
      <span className="code-line">    <span className="tok-key">return</span> <span className="tok-num">100</span><span className="tok-brace">;</span> <span className="tok-com">// % profit</span></span>
      <span className="code-line">  <span className="tok-brace">{'}'}</span></span>
      <span className="code-line"><span className="tok-brace">{'}'};</span><span className="code-caret"></span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
