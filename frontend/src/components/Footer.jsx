import {FaPhone, FaEnvelope} from "react-icons/fa";


function Footer(){
    return(
        <div>
            <footer className="flex justify-between items-center p-4 bg-morado  text-azul font-semibold font-Urbanist">
                <p>© 2023 nombredelaweb, Inc. All Right Reserved.</p>
                <FaEnvelope className="m-2 text-3xl"/>
                <FaPhone className="m-2 text-3xl"/>
            </footer>
        </div>
    )
}

export default Footer