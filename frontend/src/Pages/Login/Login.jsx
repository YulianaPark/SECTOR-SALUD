// Login.jsx
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import imagePath from "../../assets/img/img1.jpg"; // Asegúrate de que la ruta sea correcta

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <>
      {/* Barra de navegación */}
      <nav className="bg-white bg-opacity-80 fixed w-full z-10 top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logotipo de la empresa */}
              <Link to="/" className="flex-shrink-0">
                {/* SVG del logo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  {/* Font Awesome Free 6.6.0 by @fontawesome */}
                  <path d="M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9l-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5h118.5c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 497.7 0 480c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0s32 14.3 32 32h320c0-17.7 14.3-32 32-32zM338.6 384H109.4c-10.1 10.6-18.6 21.3-25.5 32h280.2c-6.8-10.7-15.3-21.4-25.5-32zM109.4 128h229.2c10.1-10.7 18.6-21.3 25.5-32H83.9c6.8 10.7 15.3 21.3 25.5 32zm55.4 48c18.4 13.8 38.4 27.5 59.3 41.5c20.9-14 40.8-27.7 59.3-41.5H164.8z" />
                </svg>
              </Link>
              <span className="text-xs text-gray-700 font-bold ml-2">
                Laboratory Orders
              </span>
            </div>
            {/* Enlaces de navegación eliminados */}
          </div>
        </div>
      </nav>

      {/* Sección principal */}
      <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="flex w-full max-w-7xl shadow-lg rounded-lg overflow-hidden">
          {/* Lado izquierdo con la imagen */}
          <div className="hidden md:block md:w-1/2">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${imagePath})` }}
            ></div>
          </div>

          {/* Lado derecho con el formulario */}
          <div className="w-full md:w-1/2 bg-white p-8">
            <div className="max-w-md mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                  Consulta tus <span className="text-blue-600">Resultados</span>
                </h1>
                <p className="mt-4 text-gray-600">
                  Accede a tus resultados de laboratorio de forma rápida y segura.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                {/* Tipo de Identificación */}
                <div>
                  <label
                    htmlFor="tipo-identificacion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Identificación
                  </label>
                  <select
                    {...register("tipoIdentificacion", {
                      required: "Este campo es obligatorio",
                    })}
                    id="tipo-identificacion"
                    className={`mt-1 block w-full px-4 py-3 border ${
                      errors.tipoIdentificacion
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option value="">Seleccione...</option>
                    <option value="CC">Cédula de Ciudadanía</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="CE">Cédula de Extranjería</option>
                  </select>
                  {errors.tipoIdentificacion && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.tipoIdentificacion.message}
                    </p>
                  )}
                </div>

                {/* Número de Identificación */}
                <div>
                  <label
                    htmlFor="numero-identificacion"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de Identificación
                  </label>
                  <input
                    {...register("numeroIdentificacion", {
                      required: "Este campo es obligatorio",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se permiten números",
                      },
                    })}
                    type="text"
                    id="numero-identificacion"
                    className={`mt-1 block w-full px-4 py-3 border ${
                      errors.numeroIdentificacion
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.numeroIdentificacion && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.numeroIdentificacion.message}
                    </p>
                  )}
                </div>

                {/* Fecha de Nacimiento */}
                <div>
                  <label
                    htmlFor="fecha-nacimiento"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Fecha de Nacimiento
                  </label>
                  <input
                    {...register("fechaNacimiento", {
                      required: "Este campo es obligatorio",
                    })}
                    type="date"
                    id="fecha-nacimiento"
                    className={`mt-1 block w-full px-4 py-3 border ${
                      errors.fechaNacimiento
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.fechaNacimiento && (
                    <p className="text-sm text-red-600 mt-2">
                      {errors.fechaNacimiento.message}
                    </p>
                  )}
                </div>

                {/* Botón de Envío */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
                >
                  Colsultar Resultados
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
