import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { posts } from "../data/posts"
import remarkGfm from 'remark-gfm'
import "../css/post.css"

function Post() {

  const { slug } = useParams()
  const navigate = useNavigate()

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="post-page">
      <div className="post-back" onClick={() => navigate("/")}>
        ← back
      </div>

      <div className="post-header">

        <div className="post-meta-top">

          <span className="post-meta-date">
            {post.date}
          </span>

          <div className="post-meta-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>

        </div>

        <h1 className="post-title">
  {post.title}

    {post.github && (
    <a href={post.github} target="_blank" rel="noopener noreferrer" className="post-github">
        <i className="fa-solid fa-link"></i>
    </a>
  )}
</h1>

        <p className="post-subtitle">
          {post.excerpt}
        </p>

      </div>

      <div className="post-divider"></div>

      
      <div className="post-body">
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
            a: ({href, children}) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children} ↗
                </a>
            )
        }}
        >
        {post.content}
        </ReactMarkdown>
        </div>
    </div>
  )
}

export default Post