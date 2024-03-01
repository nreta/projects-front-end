/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const ProjectItem = ({img, title}) => {
  return (
    <div className="relative flex items-center justify-cneter h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:scale-110 bg-gradient-to-r from-stone-200 to-stone-800 ">
        <img src={img} alt={title} className="rounded-xl group-hover:opacity-10"/>
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">{title}</h3>
            <p className="pd-4 pt-2 text-white text-center">React Js</p>
            <a href="/">
                <p className="text-center font-semibold p-3 rounded-lg bg-white text-stone-800 fount-bold cursor-pointer text-lg">More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem