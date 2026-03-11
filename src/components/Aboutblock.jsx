import '../css/home.css'
function Aboutblock() {
  return (
    <section className="about-block">
      <div className="about-label">About Me</div>
      <div className="about-inner">
        <div className="about-left">
          Hi! I am Yashovardhan Panigrahi hailing from India. I'm a sophomore currently doing B.Tech in Computer and Communication Engineering.<br/>
          The curiosity to actually learn how to code and build bloomed quite late in me but I'm glad it finally did. Better late than never honestly.
          It all started with the world of networking. Ever since I'm greatly intrigued by dynamics of how things work under the hood. Then one thing led to another and slowly I grew the desire of building for fun!<br/>
          To be frank, my learning curve has started off as straight as a road but I'm sure it's the beginning that's so rusty.<br/>I built this personal blog site to keep a track of my work and learnings. Over time I'll add more features to this.<br/>
          There is so much to learn and I cannot wait to tinker around with everything. <br/>Until then, signing off! ✌️

        </div>
        <div className="about-right">
            <a href="https://github.com/Gulabi-Dil" target="_blank" rel="noopener noreferrer" className="profile-github" title="Github">
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="mailto:thegreatmindhehe@gmail.com" className="profile-email" title="Send Email">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Aboutblock