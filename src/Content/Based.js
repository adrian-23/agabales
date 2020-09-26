import React from 'react'
import { Image, Motivation} from '../Components'
import based26_pic from '../images/B261.jpg'
export default function Based(){
    return(
        <div id='Based26' className='show'>
            <Motivation header='Based 26' motivation='Motivation:' reason="This is a really fun problem that popped up when 
            I was working on Lightbulb when figuring out how to produce letters for multiple choice questions whenever the 
            number of choices exceeded 26 (Although I hope instructors that use Lightbulb don't ever have 26 choices for a multiple choice question haha...)."></Motivation>
            <Image picture={based26_pic}></Image>
        </div>
    )
}