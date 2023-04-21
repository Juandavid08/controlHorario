import { useEffect, useState } from "react"
import { getAllProovedores } from "../api/proovedor.api"
import {ProovedorCard} from "./ProovedorCard";

export function ProovedoresList() {

    const [proovedores, setProovedores] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState("");

    useEffect(() => {
        async function loadProovedores() {
            const res = await getAllProovedores();
            setProovedores(res.data);
        }
        loadProovedores();
    }, [])

    const filtrarProovedores = () => {
        return proovedores.filter((proovedor) => {
            if (filtroNombre && !proovedor.nombre.toLowerCase().includes(filtroNombre.toLowerCase())) {
                return false;
            }
            return true;
        });
    };

    return <div >
        <div className='max-w-xl mx-auto'>
            <label htmlFor="filtroNombre">Filtrar por nombre: </label>
            <input className='bg-zinc-200 p-3 rounded-lg block w-2/4 mb-3' style={{ color: "black" }} type="text" id="filtroNombre" value={filtroNombre} onChange={(e) => setFiltroNombre(e.target.value)} />
        </div>

        <div className="grid grid-cols-3 gap-5">
            {filtrarProovedores().map((proovedor) => (
                <ProovedorCard key={proovedor.id} proovedor={proovedor} />
            ))}
        </div>
    </div>

}
