export default function PageEffects() {
  return (
    <>
      
      <div id="cursorRing" aria-hidden="true"></div>
      <div id="cursorDot" aria-hidden="true"></div>
      
      
      <div id="loader" aria-hidden="true">
        <div className="loader-badge">initializing</div>
        <div className="loader-count" id="loaderCount">0</div>
        <div className="loader-track"><div className="loader-fill" id="loaderFill"></div></div>
        <div className="loader-msg" id="loaderMsg">
          <span className="tag">$</span>booting portfolio<span className="cursor"></span>
        </div>
      </div>
      
      
      <div className="bg-layer" aria-hidden="true">
        <div className="aurora">
          <span></span><span></span><span></span>
        </div>
        <canvas id="dotCanvas"></canvas>
        <div className="grid-lines"></div>
        <div className="beam beam-1"></div>
        <div className="beam beam-2"></div>
      </div>
    </>
  );
}
