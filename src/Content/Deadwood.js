import React from 'react'
import {SubHeadingItem, SubHeadingList, Image, Motivation, Paragraph, ParagraphItem, Bullet, Content} from '../Components'

function importAll(r) {
    console.log(r.keys());
  return r.keys().map(r);
}

const images = importAll(require.context('../deadwood_images', false, /\.(png|jpe?g|svg)$/));

export default function Deadwood(){
    return(
        <div className='show' id='Deadwood'>
            <Motivation header='Deadwood' motivation='' reason="Deadwood is a card game that takes place in the wild west. It’s a multiplayer card game optimally 2-6 people but can handle up to 8 players. As a player, you can take on acting roles, move across the ten sets, earn money, and upgrade your ranks throughout the stages. 
            Within 3-4 days, the game is done and the total score of each player gets tallied which will identify the winner of the session."></Motivation>

            <p className='text-center'><img src={images[2]} className='mb-5 border rounded img-fluid' alt=''></img></p>

            <Paragraph header='How it all started:'>
                <ParagraphItem content="Deadwood is a project from my Object Oriented Design class given by Dr. Sharmin Moushumi @ WWU."></ParagraphItem>
                <ParagraphItem content='This project consisted of two parts. a terminal based version and a GUI based version implemented in Java.'></ParagraphItem>
            </Paragraph>


            <SubHeadingList title='Gameplan:'>
                <SubHeadingItem content='Creating Use Case Diagrams, Sequence Diagrams, and Class Diagrams for Deadwood'></SubHeadingItem>
                <SubHeadingItem content='Implementing terminal based game '></SubHeadingItem>
                <SubHeadingItem content='Learn JavaFX'></SubHeadingItem>
                <SubHeadingItem content='Implement GUI based version of Deadwood'></SubHeadingItem>
            </SubHeadingList>

            <Paragraph header='Project Timeline'>
                <ParagraphItem content='First part consisted of planning'/>
                    
                    <Content>
                        <Bullet><ParagraphItem content='Created Use Case Diagrams'></ParagraphItem></Bullet>
                        <Bullet><ParagraphItem content='Created Use Sequence Diagrams'></ParagraphItem></Bullet>
                        <Bullet><ParagraphItem content='Created Use Class Diagrams'></ParagraphItem></Bullet>
                        <p className='text-center'><Image picture={images[0]} className='my-2 border rounded img-fluid'></Image></p>

                    </Content>
                    



                    
                <ParagraphItem content='Implementing the terminal based Deadwood'/>
                <p className='text-center'><Image picture={images[8]} className='my-2 border rounded img-fluid'></Image></p>
                <p className='text-center'><Image picture={images[7]} className='my-2 border rounded img-fluid'></Image></p>

                <ParagraphItem content='Applying JavaFX to create a GUI for Deadwood'/>
                <p className='text-center'><Image picture={images[3]} className='my-2 border rounded img-fluid'></Image></p>
                <p className='text-center'><Image picture={images[4]} className='my-2 border rounded img-fluid'></Image></p>
                <p className='text-center'><Image picture={images[5]} className='my-2 border rounded img-fluid'></Image></p>
                <p className='text-center'><Image picture={images[6]} className='my-2 border rounded img-fluid'></Image></p>

                <Paragraph header='Challenges faced'>
                    <ParagraphItem content='Some minor challenges were setting up times with my partner for pair programming the game, combining ideas, 
                    improving efficiency of methods. However, the biggest learning curve in this project is learning JavaFX within a limited amount of time. This caused me and my partner to refactor our code on certain parts of the project from the based terminal game 
                    to the GUI based version and learning the GUI library alone took a huge chunk of my time. '></ParagraphItem>

                </Paragraph>

                <Paragraph header='Main Takeaways from this project'>
                    <Content>
                        <Bullet><ParagraphItem content='More priority in planning and the last 10% is coding it all up.'></ParagraphItem></Bullet>
                        <Bullet><ParagraphItem content='Utilization of class diagrams'></ParagraphItem></Bullet>                        

                    </Content>
                </Paragraph>

                
                <Paragraph header='References Used:'>
                <p className='text-center'><Image picture={images[1]} className='my-2 border rounded img-fluid'></Image></p>
                    <Content>
                        <Bullet><p className='mx-2'><a href='https://cheapass.com//wp-content/uploads/2016/07/Deadwood-Free-Edition-Rules.pdf' target='_blank' rel='noopener noreferrer'>Deadwood Rules</a></p></Bullet>
                        <Bullet><p className='mx-2'><a href='https://cheapass.com//wp-content/uploads/2016/07/Deadwood-Boards.pdf' target='_blank' rel='noopener noreferrer'>Deadwood Boards</a></p></Bullet>
                        <Bullet><p className='mx-2'><a href='https://cheapass.com//wp-content/uploads/2016/07/Deadwood-Card-Fronts.pdf' target='_blank' rel='noopener noreferrer'>Deadwood Cards</a></p></Bullet>
                        <Bullet><p className='mx-2'><a href='https://cheapass.com//wp-content/uploads/2016/07/Deadwood-Card-Backs.pdf' target='_blank' rel='noopener noreferrer'>Deadwood Card Backs</a></p></Bullet>

                    </Content>

                </Paragraph>
                    
               


                

            </Paragraph>
        </div>
    )
}