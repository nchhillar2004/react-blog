import React from 'react'
import PostView from '../../Views/Posts Views/PostView';
import python from '../../../assets/python.jfif';
import java from '../../../assets/java.png';
import php from '../../../assets/php.png';
import mern from '../../../assets/mern.png';
import mysql from '../../../assets/mysql.png';
import clang from '../../../assets/clang.jfif';
import html from '../../../assets/html.jpg';
import cpp from '../../../assets/cpp.jfif';
import csharp from '../../../assets/csharp.jfif';
import './Skills.css';
import './SkillsPhone.css';

function Skills() {
  const Read = 'Read More';
  return (
    <div className='Skills'>
        <div className="page_number5">
                    <p id="page_5">00005</p>
              </div>
        <div className="SkillsTitle">
          <p>Nishant Chhillar</p>
          <h1>Skills</h1>
        </div>
        <div className="SkillsContainer">
            <PostView image={`${mern}`} title='MERN' content="I possess expertise in MERN full-stack development, backed by certification. This website's MERN implementation aligns with my skills, making it a favorite tool in my repertoire." time='6:08' date='09/09/2023' button={Read} read='https://www.mongodb.com/mern-stack#:~:text=MERN%20stands%20for%20MongoDB%2C%20Express,a%20client%2Dside%20JavaScript%20framework'/>
            <PostView image={`${java}`} title='Java' content="Java is my favorite programming language. Currently, I'm actively engaged in Data Structures and Algorithms (DSA) learning, honing my skills in Java to solve complex problems efficiently." time='6:10' date='09/09/2023' button={Read} read='https://www.java.com/en/'/>
            <PostView image={`${python}`} title='Python' content="I have a basic proficiency in Python and the tkinter library. While my primary expertise lies in MERN, I can leverage Python and tkinter for GUI development when needed." time='10:10' date='10/09/2023' button={Read} read='https://python.org' />
            <PostView image={`${clang}`} title='C Lang.' content="I'm also studying C programming as part of my college curriculum, broadening my programming skills and enhancing my understanding of low-level programming concepts." time='10:12' date='10/09/2023' button={Read} read='https://en.wikipedia.org/wiki/C_(programming_language)' />
            <PostView image={`${mysql}`} title='My SQL' content="I'm proficient in MySQL and have successfully applied it in a fashion design database management project, demonstrating my ability to integrate database solutions with Python for practical applications." time='10:15' date='10/09/2023' button={Read} read='https://www.mysql.com/' />
            <PostView image={`${html}`} title='HTML/CSS/JS' content="HTML and CSS are some of my favorite and most accessible tools. I've created numerous projects using them, resulting in ten GitHub repositories showcasing my work in HTML, CSS, and JavaScript." time='10:16' date='10/09/2023' button={Read} read='https://en.wikipedia.org/wiki/HTML' />
            <PostView image={`${php}`} title='PHP' content="While I may not have extensive knowledge of PHP, I'm eager to learn it for server-side programming, recognizing its significance in web development and its role in building dynamic web applications." time='10:18' date='10/09/2023' button={Read} read='https://www.php.net/' />
            <PostView image={`${cpp}`} title='C ++' content="Learning C++ is an excellent choice for game development and various other applications. Its power and efficiency make it a valuable addition to your programming skillset." time='10:20' date='10/09/2023' button={Read} read='https://en.wikipedia.org/wiki/C%2B%2B' />
            <PostView image={`${csharp}`} title='C#' content="I'm enthusiastic about learning C#. Its applications in game development and software programming make it an essential language to master, and I'm eager to explore its capabilities and expand my programming expertise." time='10:23' date='10/09/2023' button={Read} read='https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/' />
        </div>
    </div>
  )
}

export default Skills