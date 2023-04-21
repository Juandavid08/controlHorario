import { useNavigate } from "react-router-dom"

export function ProovedorCard({ proovedor }) {
    
    const navigate = useNavigate()

    return (
        <div 
        className="bg-zinc-800 p-3 hover:bg-zinc-700
        hover:cursor-pointer"
        onClick = {() => {
            navigate(`/proovedor/${proovedor.id}`)
        }}
        >
            <h1 className="font-bold uppercase">{proovedor.nombre}</h1>
            <h1 className="font-bold uppercase">CC: {proovedor.identidad}</h1>
            <hr />
        </div>
    )
}
