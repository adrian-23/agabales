import React from 'react'
import webpic from '../images/webpic.png'
import {SubHeadingItem, SubHeadingList, Image, ParagraphItem} from '../Components'
function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../OS_Images', false, /\.(png|jpe?g|svg)$/));
export default function About(){
    return(
        <div className="show" id="OS">
            <SubHeadingList title="Chapter 1 - Introduction">
                <SubHeadingItem content='A computer system can be divided roughly into four components: '> 
                    <ParagraphItem highlight ='blue' content='Hardware'> </ParagraphItem>
                    <ParagraphItem highlight ='blue' content='OS'> </ParagraphItem>
                    <ParagraphItem highlight ='blue' content='application Programs'> </ParagraphItem>
                    <ParagraphItem highlight ='blue' content='user'> </ParagraphItem>

                </SubHeadingItem>

                <SubHeadingItem content='An operating system is software that manages the computer hardware, as well as providing an
                environment for application programs to run'></SubHeadingItem>

                <SubHeadingItem content='Interrupts == key way for hardware to interact with the OS. Interrupt managed by the interrupt handler.'></SubHeadingItem>
                <SubHeadingItem content='Programs must be in memory for a computer to exexcute programs. (L1 and L2 Cache are extensions of Main Memory)'></SubHeadingItem>
            </SubHeadingList>
                <p className='text-center'><Image picture={images[0]}></Image></p>

            <SubHeadingList title='The Role of Interrupts'>
                <SubHeadingItem content='Hardware interaction with the OS.'></SubHeadingItem>
                <SubHeadingItem content='To send signals to the CPU (normally from I/O devices USB, Keyboard, Mouse, etc.)'></SubHeadingItem>
                <SubHeadingItem content='Basically tells the CPU, "Hey I want you to stop what you are doing right now and do this first then continue what you are doing"'></SubHeadingItem>

                <SubHeadingList title='Types of Interrupts'>
                    <SubHeadingList title='Hardware Interrupts' highlight='red'>
                        <SubHeadingItem content='Generated by hardware devices. i.e keyboard usage'></SubHeadingItem>
                    </SubHeadingList>

                    <SubHeadingList highlight='blue' title='Software Interrupts (TRAPS)'>
                        <SubHeadingItem content='generated by programs when they request a system call to the OS'></SubHeadingItem>
                        <SubHeadingItem content='Can also be generated caused by an error (1/0 , segfault, etc.)'></SubHeadingItem>
                    </SubHeadingList>

                    
                </SubHeadingList>
            </SubHeadingList>

            <SubHeadingList title='Main Memory'>
                <SubHeadingItem content='volatile storage device -> loses its contents when power is turned off / lost'></SubHeadingItem>
                <SubHeadingItem content=''></SubHeadingItem>
                <SubHeadingItem content='Only large storage area that the processor can access directly'></SubHeadingItem>
            </SubHeadingList>
            <p className='text-center'><Image picture={images[1]}></Image></p>
            
            <SubHeadingList title='Multiprocessor Systems'>
                <SubHeadingItem content='Contains Processor -- Chip that contains the CPUs(1 or more)/'></SubHeadingItem>
                <SubHeadingItem content='Contains CPU -- responsible for executing instructions.'></SubHeadingItem>
                <SubHeadingItem content='Contains Core -- computation unit of the CPU.'></SubHeadingItem>
                <SubHeadingItem content='Multicore -- contains multiple cores on the same CPU'></SubHeadingItem>
                <SubHeadingItem content='Multiprocessor -- contains multiple processors'></SubHeadingItem>

                <SubHeadingItem content='Idea behind Multiprocessor systems: With more processors, we expect to get more work done.'></SubHeadingItem>
                <SubHeadingItem content='Most common multiprocessor systems use symmetric multiprocessing'></SubHeadingItem>
                <SubHeadingList title='Symmetric multiprocessing'>
                    <SubHeadingItem content='volatile storage device -> loses its contents when power is turned off / lost'></SubHeadingItem>
                    <SubHeadingItem content='Only large storage area that the processor can access directly'></SubHeadingItem>
                </SubHeadingList>
            </SubHeadingList>

            <SubHeadingList title='Transition from Kernel Mode to User Mode (Multimode/ Dual-Mode Operations)'>
                <SubHeadingList title='How does the computer know which to use?'>
                    <SubHeadingItem content='The mode bit in the hardware tells the computer which mode to use. Mode(0) | User(1)'></SubHeadingItem>
                </SubHeadingList>
                
                <SubHeadingItem content='Only large storage area that the processor can access directly'></SubHeadingItem>
            </SubHeadingList>

        </div>
    )
}