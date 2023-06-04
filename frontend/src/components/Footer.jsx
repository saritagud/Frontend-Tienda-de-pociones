import {FaPhone, FaEnvelope} from "react-icons/fa";


function Footer(){
    return(
        <div>
            <footer className="flex justify-between items-center p-4 bg-azul  text-white font-semibold font-Urbanist">
                <p>© 2023 El Caldero Mágico, Inc. All Right Reserved.</p>
                <div className="flex">
                <FaEnvelope className="m-2 text-3xl"/>
                <FaPhone className="m-2 text-3xl"/>
                </div>
                
            </footer>
        </div>
    )
}

export default Footer