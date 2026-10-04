export default function Navbar() {
  return (
    <>
      <div className="topbar" id="topbar">
        <div className="wrap relative z-[2] mx-auto w-full max-w-[1200px] px-8 max-[640px]:px-5">
          <nav aria-label="Main">
            <a className="logo" href="#top">HS <span>~/portfolio</span></a>
            <div className="nav-right">
              <div className="links">
                <a href="#techstack">Stack</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
              </div>
              <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
              </button>
              <button className="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
                <span className="bars">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </nav>
        </div>
        <div className="progress" id="progress"></div>
      </div>
      
      <div className="mobile-menu" id="mobileMenu" aria-hidden="true">
        <a href="#techstack">Stack</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </>
  );
}
