import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaHome, FaUser, FaBars, FaTimes } from "react-icons/fa";

// Componente para ver los detalles de una orden de laboratorio
const OrderDetails = () => {
    const { orderNumber } = useParams();

    // Simulación de datos detallados de la orden
    const orderData = {
        orderNumber,
        groups: [
            {
                name: "Química sanguínea",
                tests: [
                    { name: "Glucometría", result: "120 mg/dL" },
                    { name: "Hierro total", result: "60 mcg/dL" },
                    { name: "Triglicéridos", result: "150 mg/dL" }
                ]
            }
        ]
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Detalles de la Orden {orderNumber}</h2>
            {orderData.groups.map((group, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold">{group.name}</h3>
                    <ul>
                        {group.tests.map((test, i) => (
                            <li key={i} className="text-gray-700">
                                {test.name}: <span className="font-medium">{test.result}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

// Componente principal Dashboard
export const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const userName = "Juan Perez";
    const [orders, setOrders] = useState([]); // Datos de órdenes
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;
    const [sortOrder, setSortOrder] = useState("desc");
    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState({ start: "", end: "" });

    // Simulación de datos de órdenes
    useEffect(() => {
        setOrders([
            { date: "2023-09-20", docCode: "X1234567890", orderNumber: "00001" },
            { date: "2023-09-21", docCode: "X1234567891", orderNumber: "00002" },
            // Más órdenes...
        ]);
    }, []);

    // Manejo de ordenamiento por fecha
    const handleSort = () => {
        const sortedOrders = [...orders].sort((a, b) => {
            return sortOrder === "desc"
                ? new Date(b.date) - new Date(a.date)
                : new Date(a.date) - new Date(b.date);
        });
        setOrders(sortedOrders);
        setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    };

    // Manejo de paginación
    const indexOfLastOrder = currentPage * ordersPerPage;
    const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
    const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Filtrar órdenes por número de orden o rango de fechas
    const filteredOrders = orders.filter((order) =>
        order.orderNumber.includes(searchTerm) &&
        (dateRange.start === "" || new Date(order.date) >= new Date(dateRange.start)) &&
        (dateRange.end === "" || new Date(order.date) <= new Date(dateRange.end))
    );

    // Validación de rango de fechas
    const handleDateValidation = () => {
        if (dateRange.start && dateRange.end && new Date(dateRange.start) > new Date(dateRange.end)) {
            alert("La fecha de inicio no puede ser posterior a la fecha de fin.");
        }
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className="bg-gradient-to-r from-white to-white fixed w-full z-20 top-0 shadow-md">
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
                                className="py-2 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-s-2 bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
                            >
                                Cerrar Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="flex pt-16 bg-gray-100 min-h-screen">
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
                    <h1 className="text-xl font-bold mb-4">Órdenes de laboratorio</h1>

                    {/* Filtros de búsqueda */}
                    <div className="flex mb-4 space-x-4">
                        <input
                            type="text"
                            placeholder="Número de orden"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="date"
                            placeholder="Fecha de inicio"
                            value={dateRange.start}
                            onChange={(e) => {
                                setDateRange({ ...dateRange, start: e.target.value });
                                handleDateValidation();
                            }}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                        <input
                            type="date"
                            placeholder="Fecha de fin"
                            value={dateRange.end}
                            onChange={(e) => {
                                setDateRange({ ...dateRange, end: e.target.value });
                                handleDateValidation();
                            }}
                            className="p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    {/* Botón para cambiar el orden */}
                    <button onClick={handleSort} className="mb-4 p-2 bg-blue-200 rounded-md">
                        Ordenar por fecha ({sortOrder === "desc" ? "Descendente" : "Ascendente"})
                    </button>

                    {/* Tabla de órdenes */}
                    <table className="w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="p-2 text-left">Fecha de la orden</th>
                                <th className="p-2 text-left">Documento de la orden</th>
                                <th className="p-2 text-left">Número de la orden</th>
                                <th className="p-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder).map((order, index) => (
                                <tr key={index} className="border-t border-gray-200">
                                    <td className="p-2">{order.date}</td>
                                    <td className="p-2">{order.docCode}</td>
                                    <td className="p-2">{order.orderNumber}</td>
                                    <td className="p-2">
                                        <Link
                                            to={`/order/${order.orderNumber}`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            Ver más
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Paginación */}
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 bg-blue-200 rounded-md"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage >= Math.ceil(filteredOrders.length / ordersPerPage)}
                            className="p-2 bg-blue-200 rounded-md"
                        >
                            Siguiente
                        </button>
                    </div>
                </main>
            </div>
        </>
    );
};
