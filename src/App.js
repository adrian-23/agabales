import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import About from './Content/About'
import Converter from './Content/Converter'
import Lightbulb from './Content/Lightbulb'
import Microshell from './Content/Microshell'
import Based from './Content/Based'
import resume from './Resume/Resume.pdf'
import OS from './Content/OS'
import ScrollToTop from '../src/Utility/ScrolltoTop'
import { SideBarDropDown ,SideTabContainer, SideTab, TagCloud, TagCloudLink, ListLink, ListDescription, Credentials} from './Components';

function App() {
  

ScrollToTop();
  
  return (

    
    <div className="App container d-md-flex align-items-stretch">
      <div id='content' className='p-4 p-md-5 pt-5'>

      
          <Switch>
            <Route exact path='/' component={About}></Route>

            <Route exact path='/about' component={About}>

            </Route>
            <Route path='/lightbulb' component={Lightbulb}>
              
            </Route>
            <Route path='/converter' component={Converter}>
            </Route>
            <Route path='/microshell' component={Microshell}>
             
            </Route>
            <Route path='/based26' component={Based}>
            </Route>

            <Route path='/OS' component={OS}>
            </Route>

            <Route component={About}></Route>
          </Switch>
      </div>
      

      <nav id='sidebar'>
        <SideTabContainer>


            <TagCloud>
              <h3 className='text-center my-2' id='About-btn'> <Link to='/about' > About </Link></h3>
            </TagCloud>

            
            <SideTab title='Projects'>

              <SideBarDropDown id='description-lightbulb'  title='Lightbulb' logo='mr-2 fa fa-lightbulb-o project-item-size'  >
                  <ListDescription href='/lightbulb' id='description-lightbulb' content='Description'></ListDescription>
                  <ListLink href='https://github.com/wwu-csci-497/bettercrative' content='Github'><span className="text-success">(Public)</span></ListLink>
              </SideBarDropDown>

              <SideBarDropDown id='description-youtube_to_spotify'  yt='mr-2 fa fa-youtube-play project-item-size' spotify='fa fa-spotify project-item-size mx-2' >
                  <ListDescription href='/converter' id='description-youtube_to_spotify' content='Description'></ListDescription>
                  <ListLink href='https://github.com/adrian-23/YT-Playlist---Spotify-Playlist-Converter' content='Github'><span className="text-success">(Public)</span></ListLink>
              </SideBarDropDown>

              <SideBarDropDown id='description-Microshell' title='Microshell' logo='mr-2 fa fa-linux project-item-size'>
                  <ListDescription href='/microshell' id='description-Microshell' content='Description'></ListDescription>
                  <ListLink  content='Github'><span className="text-danger">(Private)</span></ListLink>
              </SideBarDropDown>


              <SideBarDropDown id='description-deadwood' title='Deadwood' logo='mr-2 fa fa-gamepad project-item-size'>
                  <ListDescription href='#in_progress' id='description-based26' content='Description'> <span className="text-success">(In Progress...)</span></ListDescription>
                  <ListLink content='Github'><span className="text-danger">(Private)</span></ListLink>
              </SideBarDropDown>


            </SideTab>


            <SideTab title='Fun Problems'>
                
                <SideBarDropDown id='description-based26' title='Based26' logo='mr-2 fa fa-sort-alpha-asc project-item-size'>
                  <ListDescription href='/based26' id='description-based26' content='Description'> </ListDescription>
                  <ListLink href='https://github.com/adrian-23/Based26'  content='Github'></ListLink>
                </SideBarDropDown>
            </SideTab>

            <SideTab title='Class Notes'>
              <SideBarDropDown id='description-OS' title='Operating Systems' logo='mr-2 fa fa-cogs	project-item-size'>
                <ListDescription href='/OS' id='description-OS' content='Notes'></ListDescription>
              </SideBarDropDown>
            </SideTab>

            <Credentials>
              <TagCloud>
                <TagCloudLink href='mailto:adriangabales1@gmail.com' button_desc='fa fa-envelope mail' content=''></TagCloudLink>
                <TagCloudLink href='https://github.com/adrian-23' button_desc='fa fa-github' content=''></TagCloudLink>
                <TagCloudLink href='https://www.linkedin.com/in/adrian-gabales/' button_desc='fa fa-linkedin mail' content=''></TagCloudLink>
                <TagCloudLink href={resume} button_desc='' content='CV'></TagCloudLink>
              </TagCloud>
            </Credentials>
            

              
        </SideTabContainer>

        

        
      </nav>
    </div>


    
    
    

  );
}

export default App;
