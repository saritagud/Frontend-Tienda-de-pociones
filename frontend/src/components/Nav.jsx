import { useState } from "react";
import { FaBars } from "react-icons/fa";


function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <header>
                <nav className="flex justify-between w-full h-20">
                    <img className="w-44 " src="./src/assets/logo1.png"/>
                    <FaBars className="text-3xl mr-5 mt-7 text-purple-95000 cursor-pointer text-secundaryColor md:text-4xl lg:hidden" onClick={() => setIsOpen(!isOpen)} />
                {isOpen && (
                    <ul className="origin-top-right absolute right-0 mt-20 w-full h-screen shadow-lg bg-bgColor ring-1 ring-black ring-opacity-5 text-right cursor-pointer bg-purple-500">
                        { 
                            <>
                            <p className="block px-4 py-3 hover:bg-compSecundaryColor text-2xl text-white font-Urbanist">
                            <li className="md:text-4xl md:mt-5 text-textColor cursor-pointer">Ingredientes</li>
                          </p>
                          <p className="text-2xl block px-4 py-3 hover:bg-compSecundaryColor font-Urbanist text-white">
                              <li className="md:text-4xl md:mt-5 text-textColor cursor-pointer ">Pociones</li>
                          </p>
                          </>
                        }
                    </ul>
                )}
                </nav>
            </header>
        </div>
    )
}

export default Nav;