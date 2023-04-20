import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { newEmpleado, deleteEmpleado, updateEmpleado, getEmpleado } from '../api/empleado.api';
import moment from 'moment-timezone';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";

export function EmpleadosFormPage() {

    moment.tz.setDefault('America/Bogota');

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data) => {
        const entrada = moment.tz(data.entrada, 'America/Bogota').toDate();
        const salida = moment.tz(data.salida, 'America/Bogota').toDate();
        if (salida < entrada) {
            alert('La hora de salida no puede ser anterior a la de entrada');
            return;
        }
        if (params.id) {
            await updateEmpleado(params.id, data)
            toast.success(`Se actualizó el registro del empleado ${data.nombre}`, {
                position: "top-right",
                background: "#008f39",
            })
        } else {
            await newEmpleado({ ...data, entrada, salida });
            toast.success(`Se registró a un empleado llamado ${data.nombre}`, {
                position: "top-right",
                background: "#008f39",
            })
        }
        navigate("/empleados")
    });

    const entrada = watch("entrada");

    useEffect(() => {
        async function loadEmpleado() {
            if (params.id) {
                console.log('Obteniendo informacion')
                const { data: { nombre, entrada, salida } } = await getEmpleado(params.id)
                setValue('nombre', nombre)
                setValue('entrada', entrada)
                setValue('salida', salida)
            }
        }
        loadEmpleado();
    }, [])
    return (
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="text" placeholder="Ingresa el nombre del empleado"  {...register("nombre", { required: true })} />
                <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="datetime-local" id="entrada" max={new Date().toISOString()} placeholder="Ingresa la hora de entrada"   {...register("entrada", { required: true })} />
                <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="datetime-local" id="salida" max={new Date().toISOString()} min={entrada} placeholder="Ingresa la hora de salida"   {...register("salida", { required: true })} />
                {errors.salida && <span>La hora de salida es requerida</span>}
                {errors.entrada && <span>La hora de entrada es requerida</span>}
                {errors.nombre && <span>El nombre es requerido requerida</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {params.id && (
                <div className='flex justify-end'>
                    <button className='bg-red-500 p-3 rounded-lg w-48 mt-3' onClick={async (data) => {
                        const accepted = window.confirm("Estás seguro?")
                        if (accepted) {
                            await deleteEmpleado(params.id, data);
                            toast.success(`Se eliminó el registro con exito del empleado`, {
                                position: "top-right",
                                background: "#008f39",
                            })
                            navigate("/empleados")
                        }
                    }}>Borrar</button>

                </div>
            )
            }
        </div>
    )
}