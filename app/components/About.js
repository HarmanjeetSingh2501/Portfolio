export default function About() {
  return (
    <>
      <section id="about">
        <div className="wrap relative z-[2] mx-auto w-full max-w-[1200px] px-8 max-[640px]:px-5">
          <h2 className="reveal"><span className="num">01</span> About</h2>
          <div className="about">
            <div className="reveal">
              <p>I hold an M.Sc. in Informatics and a B.Sc. (Hons) in Electronic Sciences, both from the University of Delhi. That mix shapes how I work: I like systems where software meets something physical, and I like proving they work with tests.</p>
            </div>
            <div className="reveal">
              <p>Since September 2025 I've been at M5C Logistics, building the software its courier and freight business runs on. Before that I was a Software Development Engineer in Test at Safepass, automating inspection machines, and a software engineer intern at ReferLoan.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
