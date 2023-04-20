import { useForm } from 'react-hook-form'
import { newEmpleado } from '../api/empleado.api';
import moment from 'moment-timezone';
import { useNavigate } from 'react-router-dom';

export function EmpleadosFormPage() {

    moment.tz.setDefault('America/Bogota');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const entrada = moment.tz(data.entrada, 'America/Bogota').toDate();
        const salida = moment.tz(data.salida, 'America/Bogota').toDate();
        if (salida < entrada) {
            alert('La hora de salida no puede ser anterior a la de entrada');
            return;
        }
        await newEmpleado({ ...data, entrada, salida });
        navigate("/empleados")
    });

    const entrada = watch("entrada");

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Ingresa el nombre del empleado"  {...register("nombre", { required: true })} />
                <input type="datetime-local" id="entrada" max={new Date().toISOString()} placeholder="Ingresa la hora de entrada"   {...register("entrada", { required: true })} />
                <input type="datetime-local" id="salida" max={new Date().toISOString()} min={entrada} placeholder="Ingresa la hora de salida"   {...register("salida", { required: true })} />
                {errors.salida && <span>La hora de salida es requerida</span>}
                {errors.entrada && <span>La hora de entrada es requerida</span>}
                {errors.nombre && <span>El nombre es requerido requerida</span>}
                <button>Guardar</button>
            </form>

        </div>
    )
}