import logo from './logo.svg';
import "./css/style.css"

function App() {
  return (
    <div className="w-screen h-screen bg-[#181818] overflow-hidden">
      {/* navbar */}
      <div className='w-screen py-6 px-5 lg:px-64 bg-[#252525] flex justify-between text-neutral-300'>
        <span className='text-lg font-semibold'>
          Material3
        </span>
        
        <ul className='hidden md:flex items-center space-x-5'>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
          <li>
            Sevice
          </li>
          <li>
            Help
          </li>
        </ul>

        {/* hamburger menu */}
        <button className='space-y-1 group md:hidden'>
          <div className='w-6 h-1 bg-white'></div>
          <div className='w-6 h-1 bg-white'></div>
          <div className='w-6 h-1 bg-white'></div>

          {/* menu */}
          <ul className='bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end'>
            <button className='px-10 py-8 relative ml-auto'>
              <div className='w-6 h-1 rotate-45 absolute bg-white'></div>
              <div className='w-6 h-1 -rotate-45 absolute bg-white'></div>
            </button>
            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
              About
            </li>
            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
              Contact
            </li>
            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
              Sevice
            </li>
            <li className='flex justify-center w-full py-4 hover:bg-[#202020]'>
              Help
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
}

export default App;
