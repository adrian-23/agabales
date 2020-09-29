import React from 'react'
import {SubHeadingItem, SubHeadingList, Image} from '../Components'
import spotify from '../images/Spotify.png'
import youtube from '../images/Youtube.png'

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));



export default function Converter(){
    return(
        
        <div className='show' id='Converter'>
            <div className='motivation border rounded my-5'>
                <h1 className='mx-2'>Youtube Playlist to Spotify Playlist Converter</h1>
                
                <p className='mx-2 my-2'> Motivation:</p>
                <p className='mx-2 my-2 content-info quatrocento'> Like other people, we have playlists in Youtube. Unfortunately for me, I had a lot of songs stored in my youtube playlist which I 
                really needed it to be in Spotify as it is more convenient during certain activities i.e. excercising and plus I did not have to Youtube premium so it was not ideal for me. 
                Having 100+ songs, I did not want to manually convert. My laziness in converting it manually led to a fun project haha!
                </p>
            </div>
        
        
            <p className='text-center'>
                <img src={youtube} className='my-2 mx-3 border rounded-circle img-fluid' alt=''/>
                <i className='fa fa-arrow-circle-right' style={{fontSize:'200%'}}></i>
                <img src={spotify} className='my-2 mx-3 border rounded-circle img-fluid' alt='' />
            </p>

            <SubHeadingList title='Getting Started/Game plan:'>
                <SubHeadingItem content='I had to research about the Youtube API'></SubHeadingItem>
                <SubHeadingItem content='then I had to research about Spotify API'></SubHeadingItem>
                <SubHeadingItem content='Last I had to figure out how I can process data between the two APIs'></SubHeadingItem>
            </SubHeadingList>
            
            <SubHeadingList title='The process:'>
                <SubHeadingItem content='Grabbing my API keys from Youtube and Spotify'></SubHeadingItem>
                <SubHeadingItem content='I parsed through the youtube URL and extracted the playlist ID of a given URL. Demo playlist down below!'></SubHeadingItem>
                <SubHeadingItem content='Used the Youtube API to process the ID and retrieve its items'></SubHeadingItem>
                <SubHeadingItem content='Parsed thru the Data given by the Youtube API and put the items in an artist-title format for the Spotify API'></SubHeadingItem>
                <SubHeadingItem content='Fed the artist-title formatted data to the Spotify API to create a new Spotify playlist or add the items into a currently existing playlist'></SubHeadingItem>
            </SubHeadingList>
            
            <p className='text-center'>
                <Image picture={images[16]}></Image>
                <Image picture={images[17]}></Image>
                <Image picture={images[18]}></Image>
                <Image picture={images[19]}></Image>
                <Image picture={images[20]}></Image>
                
            </p>


            <p className='my-3 quatrocento content-info'> There we go! Songs are now inside a spotify playlist!</p>
          <p className='content-info quatrocento '> Although it is able to convert youtube playlists now, it still needs to get improved as certain youtube titles
            do not follow the {'{'}artist - title{'}'} format. In my free time, I make adjustments on parsing to be able to parse more songs that are 
            formatted differently than the rest.
          </p>
          <p className='content-info quatrocento'>If you want to try out my converter, the github link is in the tab. Feel Free to fork it! I have not posted how to set it up a tutorial
            on how to use it yet (coming soon) but if you know what you are doing then feel free to try it out.
          </p>
        </div>
    )
}
