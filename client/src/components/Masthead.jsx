import '../css/home.css'
function Masthead() {
  return (
    <header className="masthead">

  <div className="mast-topstrip">
    <span className="mast-strip-item">EST. 2026</span>
    <span className="mast-strip-item mid">
      BUILDING THINGS AND GOING DOWN THE RABBIT HOLE
    </span>
    <span className="mast-strip-item">VOL. I</span>
  </div>

  <div className="rule-thick"></div>
  <div className="rule-thin"></div>

  <div className="mast-center">
    <div className="mast-logo"> 《🕶》 </div>

    <h1 className="mast-title">
      yash<em>.log</em>
    </h1>

    <p className="mast-subtitle">
      A Documentation of My Dev Journey
    </p>

  </div>

</header>
  )
}

export default Masthead