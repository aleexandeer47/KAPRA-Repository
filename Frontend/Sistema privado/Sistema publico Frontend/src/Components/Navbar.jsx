import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav className="bg-[#1B263B] h-screen w-64 text-white shadow-md p-6 flex flex-col">
      <div className="mb-8">
        <img src="" alt="" />
      </div>

      <ul className="flex flex-col space-y-6">
        <li className='pt-10'>
          <Link to="/" className="hover:text-gray-200 block text-[20px] font-Inter font-SemiBold">
            Inicio
          </Link>
        </li>
        <li className='pt-10'>
          <Link to="/" className="hover:text-gray-200 block text-[20px] font-Inter font-SemiBold">
            Productos
          </Link>
        </li>
        <li className='pt-10'>
          <Link to="/" className="hover:text-gray-200 block text-[20px] font-Inter font-SemiBold">
            Pedidos
          </Link>
        </li>
        <li className='pt-10'>
          <Link to="/" className="hover:text-gray-200 block text-[20px] font-Inter font-SemiBold">
            Gestión de usuarios
          </Link>
        </li>
        <li className='pt-10'>
          <Link to="/Profile" className="hover:text-gray-200 block text-[20px] font-Inter font-SemiBold">
            Configuración
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
