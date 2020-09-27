import React,{useState} from 'react'
import {Collapse} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export function SideTabContainer(props){
    return(
    <div className="p-4 pt-5 sidebar-content fixed-top" >
        {props.children}
    </div>
    )
}

export function TagCloud(props){
    return(
    <div className='tagcloud'>{props.children}</div>
    )
}

export function TagCloudLink(props){
    if(props.content !== ''){
        return(
            <a href={props.href} className='tag-cloud-link' target='_blank' rel='noopener noreferrer'><i className={props.button_desc}><span className='text-project-item'>{props.content}</span></i></a>
            )
    }
    else{
        return(
        <a href={props.href} className='tag-cloud-link' target='_blank' rel='noopener noreferrer'><i className={props.button_desc}>{props.content}</i></a>
        )
    }
}

export function ListLink(props){
    
    
    if (props.href === undefined){
        return(
            <li> <a href='#not_available'id={props.id} ><span className="fa fa-chevron-right mr-2"></span>{props.content} {props.children}</a></li>
        )
    }
    else{
        return(
            <li> <a href={props.href} id={props.id} target="_blank" rel="noopener noreferrer"><span className="fa fa-chevron-right mr-2"></span>{props.content} {props.children}</a></li>
        )
    }
    
    
}

export function ListDescription(props){
    return(
        <li> <Link to={props.href} id={props.id}><span className="fa fa-chevron-right mr-2"></span>{props.content}{props.children} </Link></li>
    )
}

export function SideTab(props){
    return(
        <>
        <h5>{props.title}</h5>
        <ul className="list-unstyled components mb-5">
	          <li>
	            {props.children}
	          </li>
          </ul>
        </>
    )
}

export function SideBarDropDown(props){
    
    const [open, setOpen] = useState(false);
    if(props.id === 'description-youtube_to_spotify'){
        return(
            <>
        <a
            
            onClick={() => setOpen(!open)}
            data-toggle='collapse'
            className='dropdown-toggle'
            aria-expanded={open}
            style={{cursor:'pointer'}}
            
        >

            <i className={props.yt} style={{color:'red'}}></i>to<i className={props.spotify} style={{color:'#1db954'}}></i> <span style={{fontSize:'14px', color:'black'}}>playlist converter</span>
            
        </a>
        <Collapse in={open}>
            <ul id={props.id} className='list-unstyled'>
                {props.children}
            </ul>
        </Collapse>
        </>
        )
    }
    else{
        
        return (
            <>
            <a
            
                onClick={() => setOpen(!open)}
                data-toggle='collapse'
                className='dropdown-toggle'
                aria-expanded={open}
                style={{cursor:'pointer'}}
                
            >
                <i className={props.logo}></i>
                {props.title}
            </a>
            <Collapse in={open}>
                <ul id={props.id} className='list-unstyled'>
                    {props.children}
                </ul>
            </Collapse>
            </>
        );
    }
      
}

export function Credentials(props){
    return(
        <div className='mb-5'>
            <h5> Connect with me!</h5>

            {props.children}
        
        </div>
    )
}

export function SubHeadingItem(props){
    return(
        <li><h6>{props.content}{props.children}</h6></li>
    )
}
export function SubHeadingList(props){
    
    if(props.highlight !==undefined){
        var txt_color;
        
        if(props.highlight==='red'){
            txt_color = 'text-danger';
        }
        else if(props.highlight==='blue'){
            txt_color = 'text-info';
        }
        else{
            txt_color='text-success'
        }
        console.log(props.highlight);
        return(
            <>
            <h3 className={txt_color}>{props.title}</h3>
            <ul className='quatrocento content-info mb-5'>
                {props.children}
            </ul>
            </>
        )
    }
    else{
        return(
            <>
            <h3>{props.title}</h3>
    
            <ul className='quatrocento content-info mb-5'>
                {props.children}
            </ul>
    
            </>
        )
    }
    
}

export function Image(props){
    return(
        <img src={props.picture} className='my-2 mx-3 border img-fluid' />
    )
}

export function Motivation(props){
    return(
        <div className='motivation border rounded my-5'>
            <h1 className='mx-2'>{props.header}</h1>
            
            <p className='mx-2 my-2'> {props.motivation}</p>
            <p className='mx-2 my-2 content-info quatrocento'> {props.reason} </p>
            {props.children}
        </div>
    )
}

export function Paragraph(props){
    return(
        <>
        <h3>{props.header}</h3>

        {props.children}
        </>
    )

}

export function ParagraphItem(props){
    if(props.highlight !== undefined){
        var attr= 'my-2 content-info quatrocento ';
        var txt_color;
        
        if(props.highlight==='red'){
            txt_color = 'text-danger';
        }
        else if(props.highlight==='blue'){
            txt_color = 'text-info';
        }
        else{
            txt_color='text-success'
        }
        return(
            <p className={attr + txt_color}>{props.content}</p>
        )
    }
    else{
        return(

            <p className='my-2 content-info quatrocento'>{props.content}</p>
        )
    }
    
}
