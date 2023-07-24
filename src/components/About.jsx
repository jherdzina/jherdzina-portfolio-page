import React from 'react'

const About = () => {
  return (
      <div
        name='about'
        className='w-full h-screen bg-gradient-to-b from-gray-800 
        to-black text-white'
      
      >
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col
          justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    About
                </p>
            </div>
                
                <p className='text-xl mt-20'>
                As a detail-oriented and analytical Accounts Receivables professional with 6 years of experience, 
                I have developed a strong foundation in data analysis, problem-solving, and project management. 
                Seeking a transition into a career in software development, I have completed coursework in 
                programming languages such as React, JavaScript, and Python though the University of Wisconsin-Madison. 
                I am excited to bring my transferable skills, dedication to accuracy, and passion for learning 
                into a new role in software development.

                </p>

                <br />

                <p className='text-xl'>
                My dream growing up for as long as I can remember was to be an artist. 
                I love working in all different mediums of art and it turns out programming is a 
                lot like making art, it’s just another medium to be creative with. 
                I’m especially drawn to the creativity and problem solving of programming, 
                how you can create something out of nothing and watch as it all comes together, 
                how you can style it and make it your own. Writing and executing code for the 
                first time had this sort of magic to it, watching all the pieces come together 
                to create something.

                </p>

          </div>
      </div>
    
  )
}

export default About