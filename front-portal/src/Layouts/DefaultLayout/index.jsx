import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { faUsers, faTableColumns, faArrowRightFromBracket, faNewspaper, faCakeCandles, faFile } from '@fortawesome/free-solid-svg-icons'
import { useStateContext } from '../../Contexts/ContextProvider'


export default function DefaultLayout() {

  const {user, token, setUser, setToken} = useStateContext()

  if(!token){
    return <Navigate to="/login/"/>
  }

  return (
    <div className='h-screen flex w-full'>
        <sidebar className="flex flex-col justify-between gap-8 bg-gray-100 min-h-screen max-h-screen w-60 p-4 border-r-4 border-magentapb bg-turquezapb">
            <section>
                <div className="logo flex items-center gap-2 mb-2">
                  <img
                      src="/images/Logo-Perfect-body-blanco.png"
                      className="w-full h-full bg-indigo-600 p-2 rounded-xl"
                    />
                </div>

              <ul>
                <li>
                  <Link
                    to="/users"
                    className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon= {faUsers}
                      className='h-5 w-5 text-[#ffffff]'
                    />
                    <span className='text-[#ffffff]'>
                      Usuarios
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faTableColumns}
                      className='h-5 w-5 text-[#ffffff]'
                    />
                    <span className='text-[#ffffff]'>
                      Dashboard
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/newspaper"
                    className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={ faNewspaper}
                      className='h-5 w-5 text-[#ffffff]'
                    />
                    <span className='text-[#ffffff]'>
                      Noticias
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faCakeCandles}
                      className='h-5 w-5 text-[#ffffff]'
                    />
                    <span className='text-[#ffffff]'>
                      Cumpleaños
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-4 p-2 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <FontAwesomeIcon
                      icon={faFile}
                      className='h-5 w-5 text-[#ffffff]'
                    />
                    <span className='text-[#ffffff]'>
                      Documentos
                    </span>
                  </Link>
                </li>

              </ul>
            </section>

            <section>
              <ul className="my-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-2 text-gray-500 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-[#ffffff]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className='text-[#ffffff]'>
                      Ajustes
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center gap-4 p-2 text-gray-500 hover:bg-gray-200 transition-colors rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-[#ffffff]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                      />
                    </svg>
                    <span className='text-[#ffffff]'>
                      Ayuda
                    </span>
                  </a>
                </li>

                <li>
                  <a href="#"
                    className="flex items-center gap-4 p-2 text-gray-500 hover:bg-gray-200 transition-colors rounded-lg"
                    // onClick={logout}
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      className='h-5 w-5 text-[#ffffff]'
                    />
                    <span className='text-[#ffffff]'>
                      Logout
                    </span>
                  </a>
                </li>
              </ul>

              <div className="flex items-center gap-4 pt-4 border-t border-[#ffffff]">
                <div>
                  <h3 className="font-bold text-gray-900 text-[#ffffff]">
                     {/* {user?.name} */}
                  </h3>
                </div>
              </div>
            </section>

          </sidebar>

        <main className='p-8 w-full'>
         <Outlet/>
        </main>
     </div>
  )
}
