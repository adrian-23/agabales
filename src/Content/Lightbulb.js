import React from 'react'
import {SubHeadingItem, SubHeadingList, Motivation} from '../Components'
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


export default function LightBulb(){

    return(
      <div className='show' id='Lightbulb'>

        <Motivation header='Lightbulb' motivation='Motivation:' reason="Lightbulb started as an in class project for an elective CS class that me and my friends had started but
            with the time for a quarter was not enough to create what we had envisioned for this project. Our main goal was to develop and provide an application
            that is capable of helping teachers not only in the Computer Science field but a variety of fields. With technology rapidly growing, automating 
            a task that normally teachers do in class would benefit the students and the teachers.">

        </Motivation>

        <img src={images[1]} className='my-2 border rounded img-fluid' alt=''></img>
        <SubHeadingList title='What is Lightbulb?'>
                <SubHeadingItem content='Lightbulb is an online classroom assessment tool that helps instructors assess the performance of their students.'></SubHeadingItem>
                
        </SubHeadingList>

        <SubHeadingList title='Capabalities:'>
                <SubHeadingItem content='Creating Classrooms'></SubHeadingItem>
                <SubHeadingItem content='Creating Quizzes'></SubHeadingItem>
                <SubHeadingItem content='Different question types for student assessment.'></SubHeadingItem>
                <SubHeadingItem content='Real time Data Visualization of quiz results.'></SubHeadingItem>
        </SubHeadingList>

        <SubHeadingList title='Quizzes:'>
                <SubHeadingItem content='Quizzes contain question types.'></SubHeadingItem>
                <SubHeadingItem content='Instructors are able to create quizzes and add them to specific classrooms later on.'></SubHeadingItem>
                <SubHeadingItem content='A quiz can be set active by an instructor which means students are able to enter this classroom and answer the questions in it.'></SubHeadingItem>
                <SubHeadingItem content='Active quizzes cannot be edited by the instructor.'></SubHeadingItem>
                <SubHeadingItem content='Supports Latex/Mathjax integration for mathematical equations'></SubHeadingItem>
        </SubHeadingList>
        <img src={images[5]} className='my-2 mb-5 border rounded img-fluid' alt=''></img>

        <SubHeadingList title='Classrooms:'>
                <SubHeadingItem content='Classroom contain quizzes.'></SubHeadingItem>
                <SubHeadingItem content='Instructors are be able to add quizzes to a specific classroom they have created.'></SubHeadingItem>
                <SubHeadingItem content='Students are able to enter classrooms via QR code (This needs to be enabled by the instructor).'></SubHeadingItem>
                <SubHeadingItem content='Each Classroom can only contain one active quiz at a time.'></SubHeadingItem>
        </SubHeadingList>
        <img src={images[6]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[7]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[8]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[9]} className='my-2 border rounded img-fluid' alt=''></img>

        <SubHeadingList title='Students:'>
                <SubHeadingItem content='Students are able to enter classrooms with a quiz active in it. '></SubHeadingItem>
                <SubHeadingItem content='Students just have to answer the questions and submit at the end.'></SubHeadingItem>
      
        </SubHeadingList>
        <img src={images[10]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[11]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[12]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[2]} className='my-2 border rounded img-fluid' alt=''></img>
        <img src={images[3]} className='my-2 mb-5 border rounded img-fluid' alt=''></img>

        <SubHeadingList title='Data Visualization/Answers:'>
          <SubHeadingItem content='Graphs and Table are provided for instructors'></SubHeadingItem>
          <SubHeadingItem content='Short Answers have to be assessed by the instructor unless it matches the keyword'></SubHeadingItem>
        </SubHeadingList>
        <img src={images[4]} className='my-2 mb-5 border rounded img-fluid' alt=''></img>


        <h5 className='quatrocento'>Friends that I collaborated with to make this project possible:</h5>
          <ul className='content-info'>
           
            <li>
              <div id='teammate'>
                <span className='mb-0'>Katie</span>
                <a href="mailto:katieborl@gmail.com"  target='_blank' rel="noopener noreferrer" className="tag-cloud-link"><i className="mx-1 fa fa-envelope mail project-item-size"aria-hidden="true"></i> </a>
                <a href="https://github.com/katiebo1294" target='_blank' rel="noopener noreferrer" className="mx-1 tag-cloud-link"><i className="fa fa-github project-item-size" aria-hidden="true"></i> </a>
                <a href="https://www.linkedin.com/in/katie-borley/" className="tag-cloud-link" target='_blank' rel="noopener noreferrer"><i  className='mx-1 fa fa-linkedin project-item-size'  aria-hidden="true"></i> </a>
              </div>
            </li>

            <li>
              <div id='teammate'>
                <span className='mb-0'>Timothy</span>
                <a href="mailto:timothypoehlman@gmail.com" className="tag-cloud-link"><i className="mx-1 fa fa-envelope mail project-item-size"aria-hidden="true"></i> </a>
                <a href="https://github.com/Timothy-Poehlman" target='_blank' rel="noopener noreferrer" className="mx-1 tag-cloud-link"><i className="fa fa-github project-item-size" aria-hidden="true"></i> </a>
                <a href="https://www.linkedin.com/in/timothy-poehlman" target='_blank' rel="noopener noreferrer" className="tag-cloud-link"><i target='_blank' rel="noopener noreferrer" className='mx-1 fa fa-linkedin project-item-size'  aria-hidden="true"></i> </a>
              </div>
            </li>
            
            <li>
              <div id='teammate'>
                <span className='mb-0'>Hansel</span>
                <a href="mailto:soto26938@gmail.com" className="tag-cloud-link"><i className="mx-1 fa fa-envelope mail project-item-size"aria-hidden="true"></i> </a>
                <a href="https://github.com/HGuzman-Soto" target='_blank' rel="noopener noreferrer" className="mx-1 tag-cloud-link"><i className="fa fa-github project-item-size" aria-hidden="true"></i> </a>
                <a href="https://www.linkedin.com/in/hansel-guzman-soto-15b80a175/" target='_blank' rel="noopener noreferrer" className="tag-cloud-link"><i target='_blank' rel="noopener noreferrer" className='mx-1 fa fa-linkedin project-item-size'  aria-hidden="true"></i> </a>
              </div>
            </li>
          </ul>
        


      </div>
    )
}