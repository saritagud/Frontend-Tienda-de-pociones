import {FaPhone, FaEnvelope} from "react-icons/fa";


function Footer(){
    return(
        <div>
            <footer className="flex justify-between items-center p-4 bg-azul  text-white font-semibold font-Urbanist lg:text-3xl xl:h-24">
                <p>© 2023 El Caldero Mágico, Inc. All Right Reserved.</p>
                <div className="flex">
                <FaEnvelope className="m-2 text-3xl lg:text-4xl"/>
                <FaPhone className="m-2 text-3xl lg:text-4xl"/>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer