/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import WorkItem from "./WorkItem"
import { TypeAnimation } from "react-type-animation";
const data = [

    {
        year:2020,
        title:"Content creater", 
        duration:"3 Years", 
        details: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
    },
    {
        year:2020,
        title:"Google", 
        duration:"3 Years", 
        details: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
    },
    {
        year:2020,
        title:"Facebook", 
        duration:"3 Years", 
        details: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
    },
    {
        year:2020,
        title:"Twitter", 
        duration:"3 Years", 
        details: "Loren ipsun dolor sit anet, consectetur adipisci elit, sed eiusnod tenpor incidunt ut labore et dolore nagna aliqua. Ut enin ad ninin venian, quis nostrun exercitationen ullan corporis suscipit laboriosan, nisi ut aliquid ex ea connodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillun dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt nollit anin id est laborun."
    }
];

const Work = () => {
  return (
    <div id="work" className=" m-auto md:pl-20 p-4 py-16 bg-stone-200" >
        <h1 className="text-4xl font-bold text-center text-gray-800">
        <TypeAnimation
                sequence={[
                'Work',
                2000, 'Where I have Worked',
                2000, ]}

            wrapper="div"
            speed={50}
            cursor={true}
            
            style={{ fontSize: '1em', paddingLeft: "6px" }}
            repeat={Infinity}
            />
            
        </h1>
        {data.map((item, index) =>(
            <WorkItem key={index} 
            year={item.year} 
            title={item.title} 
            duraction={item.duration} 
            details={item.details}/>
        
        ))}
    
    </div>

    
  );
};

export default Work