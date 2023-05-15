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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Possimus magni dolor maiores minus. Ea vitae qui quam dolores 
                    sapiente sequi debitis consequatur eos, repudiandae incidunt, 
                    nihil inventore ad, ab iure quaerat nam! Repellat hic fugit 
                    eius eos nemo architecto dolore non animi alias. Ipsum, ad 
                    modi debitis ipsam sequi rem.
                </p>

                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Mollitia tenetur, accusamus minima eligendi dignissimos labore 
                    enim esse impedit at et ut cupiditate, debitis exercitationem 
                    iure iste tempore commodi, molestias fugiat. Nisi autem numquam 
                    repellendus accusantium? Optio quo quisquam alias architecto 
                    similique eligendi nesciunt. Rerum, fugit a. Corrupti repellat 
                    quam molestiae.
                </p>

          </div>
      </div>
    
  )
}

export default About