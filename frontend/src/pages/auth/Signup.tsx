import { Link } from "react-router-dom";

function Signup() {
  const inputStyle = "input w-full border-none";
  return (
    <div className="md:grid md:grid-cols-6 h-screen">
      <div className="col-span-2 bg-black h-full pt-28 px-10">
        <ul className="steps mb-5 w-full mx-auto">
          <li className="step step-success">Register</li>
          <li className="step">Tu estado</li>
        </ul>
        <h1 className="text-2xl font-semibold text-[#00DF82] text-center mb-10">
          Bienvenido a tu ahorro personal
        </h1>
        <form>
          <div className="flex w-full gap-5">
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Nombre</legend>
              <input
                type="text"
                className={inputStyle}
                placeholder="ej. Juan"
              />
            </fieldset>
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Apellido</legend>
              <input
                type="text"
                className={inputStyle}
                placeholder="ej. Perez"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className={inputStyle}
              placeholder="ej. JuanPerez123@gmail.com"
            />
          </fieldset>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Contraseña</legend>
            <input
              type="text"
              className={inputStyle}
              placeholder="Ingresa tu contraseña"
            />
          </fieldset>

          <button type="submit" className="btn bg-[#30A88C] hover:bg-[#17876A] w-full mt-8">Registrarme</button>
        </form>
        <p className="mt-5 text-center">Ya tienes una cuenta? <Link to="/login" className="underline text-gray-300">Inicia sesión</Link></p>

      </div>

      <div className="col-span-4 bg-[#042222] h-full px-8 pt-40">
        <h1 className="text-5xl font-bold text-[#17876A] text-end ">
          Activa tu IQ financiero
        </h1>
        <p className="text-2xl text-[#17876E] text-end mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe velit
          possimus nesciunt ab sint repellat ipsam est perferendis? Aspernatur,
          fugiat blanditiis? Consequatur quo omnis nam facilis ratione provident
          fuga voluptatibus.
        </p>
      </div>
    </div>
  );
}

export default Signup;
