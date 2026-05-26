import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Components/Navbar'

const Profile = () => {
  return (
    <div className="flex h-screen">
      <Nav />
      <div className="flex-1 p-8 overflow-auto flex flex-col items-center justify-center py-5 transform translate-y-5">
        <div>
            <h1 className="text-4xl font-Inter font-bold text-blue-900 mb-8">Datos Personales</h1>
        </div>
        
        <div className="w-full max-w-6xl">
          
          <div className="border border-gray-300 rounded-lg p-8 bg-white">
            <div className="flex gap-12 justify-center">
              <div className="flex-1 max-w-lg">
                <div className="mb-6">
                  <label className="block text-gray-800 font-Inter font-Regular mb-2">Nombre</label>
                  <input 
                    type="text" 
                    defaultValue="Jonatan Santos Morales"
                    className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-full"
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 font-Inter font-Regular mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    defaultValue="jonas@gmail.com"
                    className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-full"
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-800 font-Inter font-Regular mb-2">Contraseña</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      defaultValue="••••••••••••"
                      className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-full"
                      disabled
                    />
                    <button className="absolute right-4 top-2 text-gray-600">
                      <img src="" alt="" />
                    </button>
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex-1">
                    <label className="block text-gray-800 font-Inter font-Regular mb-2">Fecha de Nacimiento</label>
                    <input 
                      type="text" 
                      defaultValue="12-02-2008"
                      className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-full"
                      disabled
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-800 font-Inter font-Regular mb-2">Número telefónico</label>
                    <input 
                      type="text" 
                      defaultValue="1212-4534"
                      className="w-full bg-gray-300 text-gray-800 px-4 py-2 rounded-full"
                      disabled
                    />
                  </div>
                </div>

                <button className="bg-blue-900 text-white font-Inter font-Semi Blod py-2 px-8 rounded-md hover:bg-blue-800">
                  Cerrar sesión
                </button>
              </div>

              <div className="flex-shrink-0 flex items-start justify-center pt-2">
                <div className="w-48 h-48 rounded-full bg-gray-300 border-4 border-blue-900 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-gray-600 text-sm">📷 Imagen de perfil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;