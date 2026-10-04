export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="wrap relative z-[2] mx-auto w-full max-w-[1200px] px-8 max-[640px]:px-5">
          <h2 className="reveal"><span className="num">05</span> Skills</h2>
          <div className="skills-grid">
            <div className="skill-card reveal"><div className="label">01 / Languages</div><h3>Core</h3><p>TypeScript, JavaScript, C/C++, HTML/CSS</p></div>
            <div className="skill-card reveal"><div className="label">02 / Frameworks</div><h3>Frontend & Backend</h3><p>Next.js, React.js, Node.js, Express.js</p></div>
            <div className="skill-card reveal"><div className="label">03 / Databases</div><h3>Storage</h3><p>SQL, MySQL, MongoDB, Redis</p></div>
            <div className="skill-card reveal"><div className="label">04 / Tools</div><h3>DevOps & Tooling</h3><p>Git, Docker, Vercel, Render, GitHub Actions, Tauri, Jira, Selenium, Bitbucket, LabVIEW</p></div>
            <div className="skill-card reveal"><div className="label">05 / Concepts</div><h3>Foundations</h3><p>Data structures, algorithms, OOP, REST APIs</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
