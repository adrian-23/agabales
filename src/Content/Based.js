import React from 'react'
import { Image, Motivation, Paragraph, ParagraphItem} from '../Components'
import based26_pic from '../images/B261.jpg'
export default function Based(){
    return(
        <div id='Based26' className='show'>
            <Motivation header='Based 26' motivation='Motivation:' reason="This is a really fun problem that popped up when 
            I was working on Lightbulb when figuring out how to produce letters for multiple choice questions whenever the 
            number of choices exceeded 26 (Although I hope instructors that use Lightbulb don't ever have 26 choices for a multiple choice question haha...)."></Motivation>
            <img src={based26_pic} className='my-2 border rounded img-fluid' alt=''></img>

            <h3 className="my-2 quatrocento">Given the 26 letters in the alphabet, return the appropriate letter given an index n</h3>
            <h3 className="quatrocento">(1)A .... Z (26) </h3>
            <h4 className="quatrocento">(27)AA ... AZ (52)</h4>
            <h5 className="quatrocento">(703)AAA ... ZZZ (18278)</h5>
            <p class="quatrocento my-5">
            This was a little tricky at first until you see the pattern as the size n increases. If you are curious about the solution I came up with, it's in the  github tab of this section.
            </p>
            <p className="mb-0"> Reference Used: </p>
            <a href="https://www.minus40.info/sky/alphabetcountdec.html" target="_blank" rel="noopener noreferrer"> https://www.minus40.info/sky/alphabetcountdec.html</a>
        </div>
    )
}