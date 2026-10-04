export default function Contributions() {
  return (
    <>
      <section id="contributions">
        <div className="wrap relative z-[2] mx-auto w-full max-w-[1200px] px-8 max-[640px]:px-5">
          <h2 className="reveal"><span className="num">02</span> Contributions</h2>
      
          <div className="contrib-wrap reveal">
            <div className="contrib-top">
              <span className="total"><b>2,477</b> contributions in the last year</span>
            </div>
      
            <div className="contrib-grid" id="contribGrid"></div>
      
            <div className="contrib-legend">
              <span className="scale">
                Less
                <span className="box bg-[var(--line)]"></span>
                <span className="box bg-green-950 dark:bg-green-400"></span>
                <span className="box bg-green-800 dark:bg-green-300"></span>
                <span className="box bg-green-600 dark:bg-green-200"></span>
                <span className="box bg-green-500 dark:bg-green-100"></span>
                More
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
