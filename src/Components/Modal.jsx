import { IconMapPin2, IconUser, IconX } from "@tabler/icons-react"
import { useContext } from "react"
import { UserDataContex } from "../Context/UserDataContex"

export const Modal=()=>{
    const {setShowModal}=useContext(UserDataContex)
    const handleClickClose=()=>{
        setShowModal(false)
    }
    return(
    <div className="Overfly">
        <div className="modal">
            <button onClick={handleClickClose} className="btn-cerrar"><IconX/></button>
            <h2>Detalles de Entrega</h2>
            <h3>DELIVERY</h3>
            <div className="inp-modal">
                <IconMapPin2/>
                <input type="text" placeholder=""/>
                <label>Dirección</label>
            </div>
            <h3>DATOS USUARIO</h3>
            <div className="inp-modal">
                <IconUser/>
                <input type="text" placeholder=""/>
                <label>Nombre</label>
            </div>
            <div className="inp-modal">
                <IconUser/>
                <input type="text" placeholder=""/>
                <label>Correo</label>
            </div>
            <div className="inp-modal">
                <IconUser/>
                <input type="text" placeholder=""/>
                <label>Télefono</label>
            </div>
            <button className="btn-save">Guardar</button>
        </div>
    </div>
    )
}