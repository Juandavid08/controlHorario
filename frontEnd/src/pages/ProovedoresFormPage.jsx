import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { newProovedor, deleteProovedor, updateProovedor, getProovedor } from '../api/proovedor.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function ProovedoresFormPage() {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        if (params.id) {
            await updateProovedor(params.id, data);
            toast.success(`Se actualizó el registro del Proovedor o Invitado ${data.nombre}`, {
                position: "top-right",
                background: "#008f39",
            })
        } else {
            await newProovedor({...data});
            toast.success(`Se registró un nuevo Proovedor o Invitado llamado ${data.nombre}`, {
                position: "top-right",
                background: "#008f39",
            });
        }
        navigate("/proovedores");
    });

    useEffect(() => {
        async function loadProovedor() {
            if (params.id) {
                console.log('Obteniendo informacion')
                const { data } = await getProovedor(params.id);
                setValue("nombre", data.nombre);
                setValue("identidad", data.identidad);
            }
        }
        loadProovedor();
    }, [])
    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit} className="bg-zinc-800 p-10 rounded-lg mt-2">
                <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="text" placeholder="Ingresa el nombre del proovedor o invitado"  {...register("nombre", { required: true })} autoFocus />
                <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="number" placeholder="Ingresa el numero de identidad"  {...register("identidad", { required: true })} />
                {errors.nombre && <span>El nombre es requerido requerida</span>}
                {errors.identidad && <span>El numero de identidad es requerido requerida</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {params.id && (
                <div className='flex justify-end'>
                    <button className='bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={async () => {
                        const accepted = window.confirm("Estás seguro?");
                        if (accepted) {
                            await deleteProovedor(params.id);
                            toast.success(`Se eliminó el registro con exito del empleado`, {
                                position: "top-right",
                                background: "#008f39",
                            });
                            navigate("/proovedores");
                        }
                    }}>Borrar</button>
                </div>
            )}
        </div>
    );
}