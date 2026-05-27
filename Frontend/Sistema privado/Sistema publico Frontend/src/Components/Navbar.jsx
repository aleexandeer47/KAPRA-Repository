import { Link } from 'react-router'
import casaIncono from '../assets/icon-icons.png'
import camisaIcono from '../assets/camisaIcono.png'
import PedidoIcono from '../assets/CajaIcono.png'
import UsuarioIcono from '../assets/UsuariosIcono.png'
import ConfiguracionIcono from '../assets/ConfiguracionIcono.png'
import LogoKapra from '../assets/LogoKapra - Editado.png'

const Nav = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 hover:w-64 bg-[#1B263B] text-white shadow-md p-4 overflow-hidden transition-all duration-300 ease-in-out group">
      <div className="mb-8 flex flex-col items-center group-hover:items-start">
        <img src={LogoKapra} alt="Logo Kapra" className="w-60" />
      </div>

      <ul className="flex flex-col gap-6">
        <li>
          <Link to="/" className="flex items-center justify-center group-hover:justify-start gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/10">
            <img src={casaIncono} alt="Inicio" className="w-6 h-6" />
            <span className="hidden group-hover:inline-block text-[18px] font-Inter font-SemiBold">Inicio</span>
          </Link>
        </li>
        <li>
          <Link to="/BaseProduct" className="flex items-center justify-center group-hover:justify-start gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/10">
            <img src={camisaIcono} alt="Productos" className="w-6 h-6" />
            <span className="hidden group-hover:inline-block text-[18px] font-Inter font-SemiBold">Productos</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center justify-center group-hover:justify-start gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/10">
            <img src={PedidoIcono} alt="Pedidos" className="w-6 h-6" />
            <span className="hidden group-hover:inline-block text-[18px] font-Inter font-SemiBold">Pedidos</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="flex items-center justify-center group-hover:justify-start gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/10">
            <img src={UsuarioIcono} alt="Gestión de usuarios" className="w-6 h-6" />
            <span className="hidden group-hover:inline-block text-[18px] font-Inter font-SemiBold">Gestión de usuarios</span>
          </Link>
        </li>
        <li>
          <Link to="/Profile" className="flex items-center justify-center group-hover:justify-start gap-4 px-3 py-3 rounded-xl transition-all duration-200 hover:bg-white/10">
            <img src={ConfiguracionIcono} alt="Configuración" className="w-6 h-6" />
            <span className="hidden group-hover:inline-block text-[18px] font-Inter font-SemiBold">Configuración</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
