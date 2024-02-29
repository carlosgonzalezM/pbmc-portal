import React from 'react'

const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      birthday: 1,
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 1,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 2,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 3,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 6,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 8,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 9,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 10,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 12,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 14,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 19,

      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          birthday: 30,

      },
     
    // More people...
  ]

export default function Birthday() {
  return (
    <section className="flex justify-between " >
        <section className="w-1/3">
            <div className=" w-full bg-white py-2 px-20 sm:py-16">
                <ul className=" flex flex-col" >
                    {
                        people.map((person)=>(
                                                <li className="flex justify-center mb-3 " 
                                                    key={person}>
                                                    
                                                    <p className=" text-magentapb font-bold text-lg mr-4">
                                                    {person.birthday}
                                                    </p>
                                                    <p className=" font-semibold text-base">
                                                    {person.name}
                                                    </p>
                                                </li>
                                            )
                                )
                    }
                </ul>
            </div>
        </section>

        <section className="w-2/3">
            <div className="bg-white w-full py-2 sm:py-16">
                <div className="mx-auto grid w-full gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                            <ul role="list" 
                                className="grid gap-x-10 gap-y-20 w-full sm:grid-cols-3 sm:gap-y-16 xl:col-span-4">
                                {
                                    people.map((person) => (
                                                                <li key={person.name}>
                                                                        <div className="flex items-center gap-x-6">
                                                                            <img className="h-16 w-16 rounded-full" 
                                                                                src={person.imageUrl} alt="" 
                                                                            />
                                                                            <div>
                                                                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                                                                                    {person.name}
                                                                                </h3>
                                                                                <p className="text-sm font-semibold leading-6 text-indigo-600">
                                                                                    {person.role}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                </li>
                                                            )
                                                )
                                }
                            </ul>
                 </div>
            </div>
        </section>
  </section>
  )
}
