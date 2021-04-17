import React from 'react';
import { useForm } from 'react-hook-form';

export default function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    console.log(errors);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="m-3">
        <div className="d-grid gap-2">
            <input type="text" className="form-input" placeholder="Nombre" {...register("First name", {required: true, maxLength: 80})} />
            <input type="text" className="form-input" placeholder="Apellido" {...register("Last name", {required: true, maxLength: 100})} />
            <input type="text" className="form-input" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input type="tel" className="form-input" placeholder="Numero de telefono" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
            <select className="form-select" {...register("Titulo", { required: true })}>
                <option value="Señor">Señor</option>
                <option value="Señora">Señora</option>
                <option value="Señorita">Señorita</option>
                <option value="Doctor">Doctor</option>
            </select>
            <hr className="m-1"></hr>
            <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
    </form>
  );
}