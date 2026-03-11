import '../css/home.css'
import Masthead from '../components/Masthead'
import Aboutblock from '../components/Aboutblock'
import Postcard from '../components/Postcard'
import {posts} from '../data/posts'


function Home() {
  return (
    <>
    <div className="page">
      <Masthead /> 
      <br/>
      <Aboutblock />
      <section className="posts-section">
        <div className="posts-label">Posts</div>
        <div className="posts-grid">
          {posts.map((post) => (
            <Postcard key={post.id} {...post} />
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
export default Home
