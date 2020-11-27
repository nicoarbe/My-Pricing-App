import React from 'react';

export function NavBar(props){
  return(
    <nav className=" my-2 my-md-0 mr-md-3">
      {props.miNavBar.map((name,index)=>{
        return (
          <a 
            className="p-2 text-dark"
            target='_blank'
            href={name.url}
            key={`numLink-${index}`}
            id={`numLink-${index}`}
          >  
          {name.nameLink}          
          </a>
        );
      })}
      
    </nav>
  );
}