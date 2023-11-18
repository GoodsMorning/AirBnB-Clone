import { Box } from "@mui/material";
import TuneIcon from '@mui/icons-material/Tune';
import { FaBeer, FaCar, FaGlobe, FaHome, FaKey, FaRoad, FaSun } from 'react-icons/fa'

export default function Bar () {

  const categories = [
    {
      name: 'Cabins',
      icon: FaHome
    },
    {
      name: 'New',
      icon: FaKey
    },
    {
      name: 'Countryside',
      icon: FaRoad
    },
    {
      name: 'Top of the world',
      icon: FaGlobe
    },
    {
      name: 'Vineyards',
      icon: FaCar
    },
    {
      name: 'Rooms',
      icon: FaHome
    },
    {
      name: 'Beachfront',
      icon: FaSun
    },
  ]
  return (
    <>
      <Box className="sticky top-24 h-20 -mb-1 hidden md:flex justify-end align-middle md:px-10 lg:px-20 border-b border-border bg-white">
        <Box className="w-full flex items-center gap-8 overflow-x-auto">
          {
            categories!.map((category,index) => {
              const IconComponent = category.icon
              return (
                <label htmlFor="radio" className="h-full flex items-center justitfy-center text-gray-500 hover:text-black hover:border-b-2" key={index}>
                  <span>
                    <div className="flex justify-center">
                    <IconComponent size={20}/>
                    </div>
                    <div className="pt-2 text-xs whitespace-nowrap">{ category.name }</div>
                  </span>
                </label>
              )
            })
          }
        </Box>
        <Box className="pl-6 flex items-center ">
          <button className="flex items-center gap-2 border rounded-lg h-12 px-4 py-2 text-xs"><TuneIcon/> Filters </button>
        </Box>
        <Box className="pl-4 flex items-center ">
          <button className="flex items-center gap-2  border rounded-lg h-12 px-4 py-2 text-xs whitespace-nowrap">
             Display total before taxes 
             <div className="w-9 h-6 bg-gray-400 rounded-full flex items-center">
              <div  className="w-5 h-5 m-[2px] rounded-full bg-white"/>
             </div>
          </button>
        </Box>
      </Box>
    </>
    )
}