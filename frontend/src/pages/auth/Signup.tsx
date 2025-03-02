import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Percent } from "lucide-react";

function Signup() {
  const inputStyle = "input w-full border-none";
  const [step, setStep] = useState(2);

  const handleNext = (e: React.FormEvent<HTMLFormElement>) => {
    if (step === 1) {
      setStep(2);
      return;
    }
    e.preventDefault();
    // Manejar lógica de envío de  data después del backend;
  };
  return (
    <div className="md:grid md:grid-cols-6 h-screen">
      {step === 1 && (
        <>
          <div className="col-span-2 bg-black h-full pt-28 px-10">
            <ul className="steps mb-5 w-full mx-auto">
              <li className="step step-success">Registro</li>
              <li className="step">Tu estado</li>
            </ul>
            <h1 className="text-2xl font-semibold text-[#00DF82] text-center mb-10">
              Bienvenid@ a tu ahorro personal
            </h1>
            <form onSubmit={handleNext}>
              <fieldset className="fieldset flex w-full gap-5">
                <div className="w-full">
                  <legend className="fieldset-legend">Nombre</legend>
                  <input
                    type="text"
                    className={inputStyle}
                    placeholder="ej. Juan"
                  />
                </div>

                <div className="w-full">
                  <legend className="fieldset-legend">Apellido</legend>
                  <input
                    type="text"
                    className={inputStyle}
                    placeholder="ej. Perez"
                  />
                </div>
              </fieldset>
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
              Ya tienes una cuenta?{" "}
              <Link to="/login" className="underline text-gray-300">
                Inicia sesión
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
        </>
      )}
      {step === 2 && (
        <>
          <div className="col-span-2 bg-black h-full pt-28 px-10">
            <ul className="steps mb-5 w-full mx-auto">
              <li className="step ">Registro</li>
              <li className="step step-success">Tu estado</li>
            </ul>
            <h1 className="text-2xl font-semibold text-[#00DF82] text-center mb-10">
              Bienvenid@ a tu ahorro personal
            </h1>
            <form onSubmit={handleNext}>
              <fieldset className="fieldset w-full">
                <fieldset className="fieldset flex w-full gap-5">
                  <div className="relative w-full">
                    <legend className="fieldset-legend">Ahorro</legend>
                    <Percent className="absolute bottom-2 right-2 text-[#ccc] w-5 h-5 z-10" />
                    <input
                      type="text"
                      className={["pr-9", inputStyle].join(" ")}
                      placeholder="10, 20, 30 etc."
                    />
                  </div>
                  <div className="relative w-full">
                    <legend className="fieldset-legend">Cada</legend>
                    <ChevronDown className="absolute bottom-2 right-2 text-[#ccc] w-5 h-5 z-20" />
                    <select
                      className="input cursor-default  w-full pr-9 -z-10"
                      name="periodo"
                    >
                      <option value="semanal">Semanal</option>
                      <option value="mensual">Mensual</option>
                      <option value="diario">Diario</option>
                    </select>
                  </div>
                </fieldset>

                <div>
                  <legend className="fieldset-legend">Propósitos</legend>
                  <input
                    type="text"
                    className={inputStyle}
                    placeholder="Comprar una casa, carro, etc."
                  />
                </div>
                <div>
                  <legend className="fieldset-legend">Saldo actual</legend>
                  <input
                    type="number"
                    className={["input validator", inputStyle].join(" ")}
                    required
                    placeholder="Cúal es tu saldo actual?"
                    min="1"
                    title="Debe ser mayor a 0"
                  />
                  <p className="validator-hint">Debe ser mayor a 0</p>
                </div>
              </fieldset>

              <button
                type="submit"
                className="btn bg-[#30A88C] hover:bg-[#17876A] w-full mt-8"
              >
                Siguiente
              </button>
            </form>
            <p className="mt-5 text-center">
              Ya tienes una cuenta?{" "}
              <Link to="/login" className="underline text-gray-300">
                Inicia sesión
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
        </>
      )}
    </div>
  );
}

export default Signup;
