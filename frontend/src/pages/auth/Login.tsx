import { Link } from "react-router-dom"

function Login() {
  const inputStyle = "input w-full border-none";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Manejar lógica de envío de  data después del backend;
  };
  return (
    <div className="md:grid md:grid-cols-6 h-screen">
      <div className="col-span-2 bg-black h-full pt-34 px-10">
            <h1 className="text-2xl font-semibold text-[#00DF82] text-center mb-10">
              Bienvenid@ nuevamente, te extrañamos!
            </h1>
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">Email</legend>
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="ej. JuanPerez123@gmail.com"
                />
                <legend className="fieldset-legend">Contraseña</legend>
                <input
                  type="text"
                  className={inputStyle}
                  placeholder="Ingresa tu contraseña"
                />
              </fieldset>

              <button
                type="submit"
                className="btn bg-[#30A88C] hover:bg-[#17876A] w-full mt-8"
              >
                Siguiente
              </button>
            </form>
            <p className="mt-5 text-center">
              Todavía no tienes una cuenta?{" "}
              <Link to="/register" className="underline text-gray-300">
                Registrate
              </Link>
            </p>
          </div>
       <div className="col-span-4 bg-[#042222] h-full px-8 pt-40">
            <h1 className="text-5xl font-bold text-[#17876A] text-end ">
              Activa tu IQ financiero
            </h1>
            <p className="text-2xl text-[#17876E] text-end mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
              velit possimus nesciunt ab sint repellat ipsam est perferendis?
              Aspernatur, fugiat blanditiis? Consequatur quo omnis nam facilis
              ratione provident fuga voluptatibus.
            </p>
          </div>
    </div>
  )
}

export default Login