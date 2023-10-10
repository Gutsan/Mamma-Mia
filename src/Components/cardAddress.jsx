import { IconBike } from "@tabler/icons-react"
import { useContext } from "react"
import { UserDataContex } from "../Context/UserDataContex"

export const CardAddress=()=>{
    const {setShowModal}=useContext(UserDataContex)
    const handleClickModal=()=>{
        setShowModal(true)
    }
    return (
        <>
        <div className="card-address no-mobil" onClick={handleClickModal}>
        <h6><IconBike/> Delivery</h6>
        <p>Ingrese su dirección</p>
        </div>
        </>
    )
}