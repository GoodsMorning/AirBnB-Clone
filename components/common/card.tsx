import Box from "@mui/material/Box";
import Image from "next/image";

export default function Card() {
    const imageSrc = "/images/fuji.jpeg"
    return ( 
        <Box className="inline-block">
            <Box className="mb-3 w-full aspect-square">
                <Image className="object-cover w-full h-full rounded-lg" src={imageSrc} alt="Card Image" width={300} height={300} />
            </Box>
            <Box className="truncate">Card Name Fuji Mountain, Japan</Box>
            <Box className="font-light text-gray-500 text-sm truncate">Near, Fuji Mountain</Box>
            <Box className="font-light text-gray-500 text-sm truncate">Nov 15-20</Box>
            <Box className="my-1">
                <span>฿12,218</span>
                <span className="pl-1 text-sm font-light">night</span>
            </Box>
        </Box> 
    );
}

