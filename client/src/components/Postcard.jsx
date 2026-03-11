import { useNavigate } from "react-router-dom"

function Postcard(props) {

  const navigate = useNavigate()

  function openPost() {
    navigate("/post/" + props.slug)
  }

  return (
    <div className="post-card" onClick={openPost}>

      <div className="pc-num">
        #{props.id}
      </div>

      <div className="pc-title">
        {props.title}
      </div>

      <div className="pc-excerpt">
        {props.excerpt}
      </div>

      <div className="pc-meta">

        <div>
          {props.tags.map(function(tag, index) {
            return (
              <span key={index} className="tag">
                {tag}{" "}
              </span>
            )
          })}
        </div>

        <span className="pc-date">
          {props.date}
        </span>

      </div>

    </div>
  )
}

export default Postcard