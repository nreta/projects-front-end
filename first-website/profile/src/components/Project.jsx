/* eslint-disable no-unused-vars */
import Imge1 from "../assets/Screenshot (209).png"
import Imge2 from "../assets/Screenshot (210).png"
import Imge3 from "../assets/Screenshot (211).png"
import Imge4 from "../assets/Screenshot (212).png"
import { TypeAnimation } from "react-type-animation"
import ProjectItem from "./ProjectItem"

const Project = () => {
  return (
    <div id="projects" className="m-auto md:pl-20 p-4 py-16 bg-stone-300">
        
        <h1 className="text-4xl font-bold text-center text-stone-800">

        <TypeAnimation
                sequence={[
                'Projects',
                2000, // wait 1s 
                'Some of My Projects',
                3000,
                ]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-center font-semibold py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis at eligendi itaque molestias maiores deleniti alias ut ipsum, quis fugiat consectetur? Sed, eaque minus dolorum et natus soluta in.</p>
        
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem img={Imge1} title="Crypto App"/>
            <ProjectItem img={Imge2} title="Property App"/>
            <ProjectItem img={Imge3} title="Netflix App"/>
            <ProjectItem img={Imge4} title="Twitch App"/>
        </div>
    </div>
  )
}

export default Project