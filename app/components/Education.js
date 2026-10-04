export default function Education() {
  return (
    <>
      <section id="education">
        <div className="wrap relative z-[2] mx-auto w-full max-w-[1200px] px-8 max-[640px]:px-5">
          <h2 className="reveal"><span className="num">06</span> Education</h2>
          <div className="edu">
            <div className="reveal">
              <span className="year">Dec 2022 – Jul 2024</span>
              <h3>M.Sc. Informatics</h3>
              <p>University of Delhi</p>
              <span className="gpa">GPA 8.0 / 10</span>
            </div>
            <div className="reveal">
              <span className="year">Jul 2019 – May 2022</span>
              <h3>B.Sc. (Hons) Electronic Sciences</h3>
              <p>University of Delhi</p>
              <span className="gpa">GPA 8.0 / 10</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
