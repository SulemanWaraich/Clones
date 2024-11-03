import UltraLinx from '../assets/UltraLinx.jfif';
import SocialMediaManager from '../assets/SocialMediaManager.png'
import CRUD2 from '../assets/CRUD2.png';

function Projects() {
  return (
    <div className="w-screen min-h-screen p-5">
      <h1 className="md:text-4xl text-3xl border-b-4 pb-2 mb-10 mt-4 border-sky-400 mx-auto md:w-[200px] w-[170px] font-bold">My Projects</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 px-24 ">

        <div className='border-2 shadow-lg pb-4 rounded-lg h-72'>
          
          <img src={UltraLinx} alt="#" className='h-48 object-cover w-full'/>
          <div className='bg-white  flex flex-col items-center pt-2'>
          <h2 className='font-bold text-xl'>Spotify Clone</h2>
          <p>Vanilla ( HTML | CSS | JS )</p>
          </div>
        </div>
        
        <div className='border-2 shadow-lg pb-4 rounded-lg h-72'>
          <img src={SocialMediaManager} alt="#" className='h-48 object-cover w-full bg-zinc-800'/>
          <div className='bg-white flex flex-col justify-center items-center pt-2'>
          <h2 className='font-bold text-xl'>Socail Media Manager</h2>
          <p>MERN Stack | React.js | Tailwind CSS</p>
          </div>
        </div>

        <div className='border-2 shadow-lg pb-4 rounded-lg h-72'>
          <img src={CRUD2} alt="#" className='h-48 object-cover w-full'/>
          <div className='bg-white flex flex-col justify-center items-center pt-2'>
          <h2 className='font-bold text-xl'>CRUD</h2>
          <p>MERN Stack | React.js | AXIOS | API</p>
          </div>
        </div>

        <div className='border-2 shadow-lg pb-4 rounded-lg h-72'>
          <img src={CRUD2} alt="#" className='h-48 object-cover w-full'/>
          <div className='bg-white flex flex-col justify-center items-center pt-2'>
          <h2 className='font-bold text-xl'>CRUD</h2>
          <p>MERN Stack | React.js | AXIOS | API</p>
          </div>
        </div>

        <div className='border-2 shadow-lg pb-4 rounded-lg h-72'>
          <img src={CRUD2} alt="#" className='h-48 object-cover w-full'/>
          <div className='bg-white flex flex-col justify-center items-center pt-2'>
          <h2 className='font-bold text-xl'>CRUD</h2>
          <p>MERN Stack | React.js | AXIOS | API</p>
          </div>
        </div>

        <div className='border-2 shadow-lg pb-4 rounded-lg h-72'>
          <img src={CRUD2} alt="#" className='h-48 object-cover w-full'/>
          <div className='bg-white flex flex-col justify-center items-center pt-2'>
          <h2 className='font-bold text-xl'>CRUD</h2>
          <p>MERN Stack | React.js | AXIOS | API</p>
          </div>
        </div>
     

        
        

      </div>
    </div>
  )
}

export default Projects