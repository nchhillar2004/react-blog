import React from 'react'
import PostView from '../../Views/Posts Views/PostView';
import firebase from '../../../assets/firebase.png';
import swing from '../../../assets/swing.png';
import blog from '../../../assets/blog.png';
import android from '../../../assets/android.png';
import pacman from '../../../assets/pacman.jfif';
import phpadmin from '../../../assets/phpmyadmin.png';
import './Publications.css';
import './PublicationsPhone.css';

function Publications() {
    const Source = 'Source Code';
    const Visit = 'Live Preview';
  return (
    <div className='Posts'>
        <div className="page_number6">
                    <p id="page_6">00006</p>
              </div>
        <div className="PostsTitle">
          <p>Publications by Nishant Chhillar</p>
          <h1>Publicati-<br></br>on</h1>
        </div>
        <div className="PostsContainer">
            <PostView image={`${phpadmin}`} title='PHP Servers' content="Developed a php website using realtime database (mysql) with a responsive design enabling users to register login and create or join a server listed in the database." time='10:36' date='04/11/2023' button={Visit} read='https://amassable-lump.000webhostapp.com/'/>
            <PostView image={`${blog}`} title='Personal Blog' content="Designed a highly interactive and responsive personal blog website with captivating animations, ensuring an engaging and visually appealing user experience. Share your thoughts and experiences with style!" time='10:30' date='10/09/2023' button={Source} read='https://nishantchhillar.tech'/>
            <PostView image={`${pacman}`} title='Pacman Game' content="Developed an entertaining Pac-Man game using JavaScript, offering classic maze-chasing fun. Guide Pac-Man, avoid ghosts, and gobble up dots for a nostalgic gaming experience. Enjoy hours of retro entertainment!" time='10:32' date='10/09/2023' button='Play game' read='https://pacman-js.web.app/'/>
            <PostView image={`${android}`} title='Fluent' content="I've developed an Android app in Java with real-time Firebase database integration. It offers currency and weight conversion functionality, showcasing expertise in both programming and data management." time='10:34' date='10/09/2023' button={Source} read='https://github.com/nchhillar2004/Fluent' />
            <PostView image={`${firebase}`} title='Hyper Mail' content="I've created a responsive, user-friendly website named 'Hyper Mail' that employs Firebase authentication for secure signup and login processes, showcasing my expertise in web development and user authentication." time='10:35' date='10/09/2023' button={Source} read='https://github.com/nchhillar2004/hypermail' />
            <PostView image={`${swing}`} title='Java Bank GUI' content="Crafted a Java bank GUI using Swing, providing a user-friendly interface for banking operations. Seamlessly manage accounts, deposits, and withdrawals, enhancing the banking experience with elegant design." time='10:37' date='10/09/2023' button={Source} read='https://github.com/nchhillar2004/Paytm-Java-Bank' />
        </div>
    </div>
  )
}

export default Publications