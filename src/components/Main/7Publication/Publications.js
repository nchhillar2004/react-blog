import React from 'react'
import './Publications.css'
import './PublicationsPhone.css'
import PublicationView from '../../Views/Publication Views/PublicationView'

function Publications() {
  return (
    <div className='Publications'>
        <div className="page_number7">
                    <p id="page_7">00007</p>
              </div>
        <div className="PostsTitle">
          <p>Publications by Nishant Chhillar</p>
          <h1>Publicati-<br></br>on</h1>
        </div>
        <div className="PublicationsContainer">
          <PublicationView precontent=" If you're as passionate about web development as I am, delve into the world of" highlight='React.js' postcontent='I, Nishant Chhillar, an experienced developer, can be your guide. Master this JavaScript library alongside me' time="03/11/2023"/>
          <PublicationView precontent="If you share my interest in" highlight='Java programming' postcontent="you're in the right place. I, Nishant Chhillar, an experienced developer, can help you build a strong foundation." time="03/11/2023"/>
          <PublicationView precontent="Join me, Nishant Chhillar, in my" highlight='Discord server' postcontent="dedicated to programming and collaboration. This is a space where like-minded developers come together to learn, share knowledge, and work on exciting projects." time="04/11/2023"/>
          <PublicationView precontent="Explore my" highlight='GitHub' postcontent="profile, where you can find a collection of code repositories showcasing my projects and contributions. Here, you can dive into the world of code and innovation through my open-source work." time="04/11/2023"/>
          <PublicationView precontent="Embark on your blogging journey with my guidance. As an experienced content writer, I can assist you in crafting your" highlight='First Blog' postcontent="Share your unique insights, experiences, or passions with the world, and let me, Nishant Chhillar, help you take your first step into the world of online content creation." time="04/11/2023"/>
          <PublicationView precontent="" highlight='Collaboration' postcontent="is at the heart of what I do, and I believe it's the key to achieving great results. Working together, we can combine our strengths and knowledge to create something exceptional. Whether it's within my Discord server, on shared coding projects, or in any collaborative endeavor" time="04/11/2023"/>
        </div>
        <div className='ContactContainer'>
          <h2>Contact-<br></br>links</h2>
          <nav>
            <ul>
              <li><a href='https://discord.gg/7n5aKX3z8s' target='_blank'>Discord</a></li>
              <li><a href='https://github.com/nchhillar2004' target='_blank'>GitHub</a></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Publications