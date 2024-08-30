import React from 'react';
import Cards from './Cards';


const Features = () => {

  const data = [
    { image: "https://images.unsplash.com/photo-1569515626422-b504b5bd3e2c?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Sketch", description: "Correct Design, Marketing" },
    { image: "https://cdn.prod.website-files.com/639e3a353adcb618f4be6835/64882742f68d61afbc7d7090_vision-portfolio-framer-template-p-1600.webp", title: "Framer.io", description: "User Interface Design" },
  ];

  return (
    <div className='w-full  h-screen mt-10'>
      <div className=' flex justify-between'>
        <div>
            <h3>Case Studies</h3>
        </div>
        <div className='w-1/5 flex items-center justify-between'>
            <div className='w-1/2 h-1 bg-black rounded-md'>
            </div>
            <div>
                <span>01</span>
            </div>
        </div>
      </div>
      <div className='w-full lg:flex lg:items-center lg:justify-between'>
        {data.map((item, i) => {
          return <Cards key={i} data={item}/>
        })}
      </div>
    </div>
  );
}

export default Features;
