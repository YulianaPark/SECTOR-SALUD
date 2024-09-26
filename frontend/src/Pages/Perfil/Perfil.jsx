import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars, FaEdit, FaSave, FaCamera, FaHome, FaUser } from 'react-icons/fa';

const Perfil = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userProfile, setUserProfile] = useState({
        fotoPerfil: null,
        tipoIdentificacion: "Cédula de Ciudadanía",
        numeroIdentificacion: "123456789",
        nombreCompleto: "Juan Perez",
        fechaNacimiento: "1985-05-15",
        sexoBiologico: "Masculino",
        direccionResidencia: "Calle 123 #45-67, Bogotá",
        numeroCelular: "3001234567",
        correoElectronico: "juan.perez@example.com"
    });

    const userName = userProfile.nombreCompleto;

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserProfile({
            ...userProfile,
            [name]: value
        });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserProfile({
                    ...userProfile,
                    fotoPerfil: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            {/* Barra de navegación */}
            <nav className="bg-white fixed w-full z-20 top-0 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <button
                                className="md:hidden text-black focus:outline-none"
                                onClick={toggleSidebar}
                            >
                                {sidebarOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                            <Link to="/" className="flex-shrink-0 ml-2 flex items-center">
                                <Link to="/" className="flex-shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8"
                                        viewBox="0 0 448 512"
                                        fill="currentColor"
                                    >
                                        <path d="M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9l-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5h118.5c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 497.7 0 480c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0s32 14.3 32 32h320c0-17.7 14.3-32 32-32zM338.6 384H109.4c-10.1 10.6-18.6 21.3-25.5 32h280.2c-6.8-10.7-15.3-21.4-25.5-32zM109.4 128h229.2c10.1-10.7 18.6-21.3 25.5-32H83.9c6.8 10.7 15.3 21.3 25.5 32zm55.4 48c18.4 13.8 38.4 27.5 59.3 41.5c20.9-14 40.8-27.7 59.3-41.5H164.8z" />
                                    </svg>
                                </Link>
                                <span className="text-gray-700 text-xs font-bold ml-2">
                                    Laboratory Orders
                                </span>
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <span className="text-black text-xl font-medium">
                                Bienvenido, {userName}
                            </span>
                        </div>
                        <div>
                            <Link
                                to="/inicio-sesion"
                                className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                            >
                                Cerrar Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16 bg-gray-100 min-h-screen">
                {/* Barra lateral izquierda */}
                <aside
                    className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                        } md:translate-x-0 fixed md:static inset-y-0 left-0 w-64 bg-white border-r border-gray-200 overflow-y-auto transition-transform duration-300 ease-in-out z-10`}
                >
                    <nav className="flex-1 px-2 py-4 space-y-2">
                        <Link
                            to="/Dashboard"
                            className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-200"
                        >
                            <FaHome className="w-6 h-6" />
                            <span className="ml-3">Home</span>
                        </Link>
                        <Link
                            to="/Perfil"
                            className="flex items-center p-2 text-gray-700 rounded-md hover:bg-gray-200"
                        >
                            <FaUser className="w-6 h-6" />
                            <span className="ml-3">Perfil de usuario</span>
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold text-gray-800">Perfil del Paciente</h1>
                        <button
                            onClick={isEditing ? handleSave : handleEditToggle}
                            className="flex items-center px-4 py-2 bg-blue-200 text-black rounded-lg hover:bg-blue-300 transition duration-300"
                        >
                            {isEditing ? <FaSave className="mr-2" /> : <FaEdit className="mr-2" />}
                            {isEditing ? 'Guardar' : 'Editar'}
                        </button>
                    </div>

                    {/* Foto de Perfil */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative">
                            <img
                                src={
                                    userProfile.fotoPerfil ||
                                    'https://via.placeholder.com/150?text=Foto+de+Perfil'
                                }
                                alt="Foto de Perfil"
                                className="w-40 h-40 object-cover rounded-full shadow-lg border-4 border-blue-200"
                            />
                            {isEditing && (
                                <label
                                    htmlFor="upload-photo"
                                    className="absolute bottom-0 right-0 bg-blue-200 text-white p-2 rounded-full cursor-pointer hover:bg-blue-300 transition duration-300"
                                >
                                    <FaCamera />
                                    <input
                                        type="file"
                                        id="upload-photo"
                                        accept="image/*"
                                        onChange={handleProfilePictureChange}
                                        className="hidden"
                                    />
                                </label>
                            )}
                        </div>
                        <h2 className="mt-4 text-3xl font-semibold text-gray-800">{userName}</h2>
                    </div>

                    {/* Información del Perfil */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {Object.entries(userProfile).map(([key, value]) => {
                            if (key === 'fotoPerfil') return null; // Omitir fotoPerfil en la lista
                            return (
                                <div
                                    key={key}
                                    className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:scale-105 transform transition duration-300 relative"
                                >
                                    <p className="text-sm uppercase font-semibold tracking-wide text-gray-600">
                                        {key
                                            .replace(/([A-Z])/g, ' $1')
                                            .replace(/^./, str => str.toUpperCase())}
                                    </p>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name={key}
                                            value={value}
                                            onChange={handleInputChange}
                                            className="mt-2 block w-full bg-white text-gray-900 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                        />
                                    ) : (
                                        <p className="text-xl font-semibold mt-2 text-gray-800">{value}</p>
                                    )}

                                    {/* Borde degradado en la parte inferior */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-b-lg"></div>
                                </div>
                            );
                        })}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Perfil;
