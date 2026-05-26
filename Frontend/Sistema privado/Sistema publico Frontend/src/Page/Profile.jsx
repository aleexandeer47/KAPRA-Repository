import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../Components/Navbar'

const Profile = () => {
  return (
    <div className="flex h-screen">
      <Nav />
      <div className="flex-1 p-8 overflow-auto flex flex-col items-center justify-center justify-start ">
        <div className="w-full max-w-7xl mb-25">
            <h1 className="text-4xl font-Inter font-bold text-left text-blue-900 mt-15">Datos Personales</h1>
        </div>


        <div className="w-full max-w-7xl mb-8">
          <div className="border border-gray-200 rounded-2xl p-10 bg-white shadow-sm">
            <div className="flex gap-12 items-center">
              <div className="flex-1 pr-8">
                <div className="mb-6">
                  <label className="block text-gray-700 font-Inter font-Regular mb-2">Nombre</label>
                  <input 
                    type="text" 
                    defaultValue="Jonatan Santos Morales"
                    className="w-full bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-Sans"
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-Inter font-Regular mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    defaultValue="jonas@gmail.com"
                    className="w-full bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-Sans"
                    disabled
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-Inter font-Regular mb-2">Contraseña</label>
                  <div className="relative">
                    <input 
                      type="password" 
                      defaultValue="••••••••••••"
                      className="w-full bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-Sans"
                      disabled
                    />
                    <button className="absolute right-4 top-3 text-gray-600">
                      <img src="" alt="" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-Inter font-Regular mb-2">Fecha de Nacimiento</label>
                    <input 
                      type="text" 
                      defaultValue="12-02-2008"
                      className="w-full bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-Sans"
                      disabled
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-Inter font-Regular mb-2">Número telefónico</label>
                    <input 
                      type="text" 
                      defaultValue="1212-4534"
                      className="w-full bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-Sans"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center justify-center w-56">
                <div className="w-55 h-55 rounded-full bg-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className='font-sans'>imagen</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="bg-blue-900 text-white font-Inter font-SemiBold py-3 px-8 rounded-md hover:bg-blue-800">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;