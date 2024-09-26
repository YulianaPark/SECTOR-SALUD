import { Link } from "react-router-dom";
import img2 from "../../assets/img/img2.jpg"; // Asegúrate de que la imagen esté correctamente cargada.

export const Index = () => {
  return (
    <div>
      {/* Barra de navegación */}
      <nav className="bg-white bg-opacity-80 fixed w-full z-10 top-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Logotipo de la empresa */}
              <Link to="/" className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  {/* Font Awesome Free 6.6.0 by @fontawesome */}
                  <path d="M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0l-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5l118.5 0c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32L64 480c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0S64 14.3 64 32l320 0c0-17.7 14.3-32 32-32zM338.6 384l-229.2 0c-10.1 10.6-18.6 21.3-25.5 32l280.2 0c-6.8-10.7-15.3-21.4-25.5-32zM109.4 128l229.2 0c10.1-10.7 18.6-21.3 25.5-32L83.9 96c6.8 10.7 15.3 21.3 25.5 32zm55.4 48c18.4 13.8 38.4 27.5 59.3 41.5c20.9-14 40.8-27.7 59.3-41.5l-118.5 0z" />
                </svg>
              </Link>
              <span className="text-gray-700 text-xs font-bold ml-2">Laboratory Orders</span>
            </div>

            {/* Botón de inicio de sesión */}
            <div className="hidden md:block">
              <Link
                to="/inicio-sesion"
                className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sección principal */}
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${img2})` }}
      >
        {/* Superposición de color */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl leading-tight mb-5">
            Consulta de resultados de{" "}
            <span
              className="text-blue-500"
              style={{
                textShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              laboratorio
            </span>
          </h1>

          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Accede a tus resultados de laboratorio de manera fácil, rápida y segura, desde
            cualquier lugar y en cualquier momento.
          </p>

          {/* Botón */}
          <div className="flex justify-center">
            <Link
              to="/inicio-sesion"
              className="py-3 px-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition duration-300 ease-in-out"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
