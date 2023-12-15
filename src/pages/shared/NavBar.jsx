
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function NavBar() {
    const [click, setClick] = useState(false)

    const handleMenu = () => {
        setClick(!click)
    }

  const content = 
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-cyan-200 font-semibold transition ">
        <ul className="text-center text-xl p-20 ">
          <Link spy={true} smooth={true} to="/">
            <li className="my-4 py-4 bottom-0 hover:rounded">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="/portfolio">
            <li className="my-4 py-4 bottom-b hover:rounded">Portfolio</li>
          </Link>
        </ul>
      </div>
    </>


  return (
    <>
      <div className="bg-cyan-400">
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
          <div className="flex justify-between items-center ">
            <span className="text-2xl font-[Poppins] cursor-pointer ">
              <img
                className="h-10 inline"
                src="https://images-workbench.99static.com/yZpQOr5hRvRMDH8KUaa-H57RreI=/99designs-contests-attachments/127/127757/attachment_127757494"
                alt=""
              />
              portfolio
            </span>

            <span className="text-3xl cursor-pointer block ">
              {/* <button onClick={toggleMenu}>
                    { menu ?  <FiMenu /> : <MdClose />}
                    </button> */}
                    <div>
            {click && content}
          </div>
          <button onClick={handleMenu} className="block sm:hidden transition ">
            {
                click ? <MdClose /> : <FiMenu />

            }
          </button>
            </span>
          </div>
          <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ">
            <li className="mx-4 my-6 md:my-0">
              <Link to='/' className="text-xl hover:text-cyan-500 duration-500">
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link to='/portfolio'
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Portfolio
              </Link>
            </li>
            <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
              Get Started
            </button>
          </ul>
        </nav>
      </div>


    </>
  );
}

export default NavBar;

{/* {<nav className="mb-[-20px]">
  <div className="h-5vh flex justify-between z-20 text-white lg:py-5 px-20 py-4 flex-1 font-[Poppins]">
    <div className="flex items-center flex-1 ">
      <span className="text-3xl font-bold">Logo</span>
    </div>
    <div className="lg:flex md:flex lg:flex-1 justify-end font-normal hidden ">
      <div className="flex-10">
        <ul className="flex gap-8 mr-16 text-[16px] ">
          <Link spy={true} smooth={true} to="/">
            <li className="hover:text-cyan-600 transition border-slate-900  hover:border-cyan-600 cursor-pointer">Home</li>
          </Link>
          <Link spy={true} smooth={true} to="/portfolio">
            <li className="hover:text-cyan-600 transition  border-slate-900  hover:border-cyan-600 cursor-pointer">Portfolio</li>
          </Link>
        </ul>
      </div>
    </div>
    <div>
      {click && content}
    </div>
    <button onClick={handleMenu} className="block sm:hidden transition ">
      {
          click ? <MdClose /> : <FiMenu />

      }
    </button>
  </div>
</nav>} */}
