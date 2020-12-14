import React from 'react'
import {SubHeadingItem, SubHeadingList, Image, Motivation, Paragraph, ParagraphItem} from '../Components'

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));


export default function Microshell(){
    return(
        <div className='show' id='Microshell'>
            <Motivation header='Microshell' motivation='What is a shell?' reason="A Shell provides you with an interface to a Unix system. It takes in an input from the user, which then executes programs based on what you tell it to do. When a program finishes executing, it displays that program's output.
              A famous one you already probably know is the terminal in MacOS called Bash."></Motivation>

            <p className='text-center'><img src={images[13]} className='mb-5 border rounded img-fluid' alt=''></img></p>

            <Paragraph header='How it all started:'>
                <ParagraphItem content='The ush microshell was an in class project that was given by Dr. Phil Nelson @ WWU.'></ParagraphItem>
                <ParagraphItem content='This Assignment was very challenging. I went through a lot of emotions doing this assignment (Happiness, frustration, excitement, etc. you name it all haha!) but I ended up learning and improving on C programming as well as shell usage.'></ParagraphItem>
            </Paragraph>


            <SubHeadingList title='Features Added Throughout the Quarter:'>
                <SubHeadingItem content='Implementing an Argument Parser'></SubHeadingItem>
                <SubHeadingItem content='Upgrading the Argument Parser to handle arguments given "quotes" '></SubHeadingItem>
                <SubHeadingItem content='Script processing'></SubHeadingItem>
                <SubHeadingItem content='Pipes'></SubHeadingItem>
            </SubHeadingList>

            <Paragraph header='Progress Pictures:'>
                <ParagraphItem content='Arg Parse'/>
                    <p className='text-center'>
                    <Image picture={images[22]}></Image>
                    </p>
                <ParagraphItem content='Script Processing implemented'/>
                    <p className='text-center'>
                        <Image picture={images[23]}></Image>
                        <Image picture={images[24]}></Image>
                        
                    </p>
                <ParagraphItem content='Last but not the least was implementing Pipes. This was probably the hardest out of all the features I had to implement on the shell.'></ParagraphItem>
                <Motivation header='Pipes' motivation='What are pipes?'>
                    <p className='text-center'><Image picture={images[26]} className='my-2 border rounded img-fluid'></Image></p>
                    <p className='mx-2'>Reference: <a href='https://www.geeksforgeeks.org/pipe-system-call/' target='_blank' rel='noopener noreferrer'>https://www.geeksforgeeks.org/pipe-system-call/</a></p>
                    <ParagraphItem content=' Pipes are a way of redirecting data in a shell. Data flows from left to right.'></ParagraphItem>
                    <ParagraphItem content='The picture below is an example of pipe usage. When typing ls, normally it outputs the list of items in your 
              present working directory. However with the pipe, I am able to list out all of the items in the current directory and feed it into the pipe and process that data again.
              I use grep to tell the shell to find any file that has "builtin" in it.'></ParagraphItem>
                </Motivation>


                <p className='text-center'><Image picture={images[25]} ></Image></p>

            </Paragraph>

            
        </div>
    )
}