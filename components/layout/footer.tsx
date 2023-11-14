import { Box, Button, IconButton, Tab, Tabs } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function Footer() {
  return (
    <>
      <Box className="py-12 px-10 lg:px-20 bg-hoverBg border-b-2 border-border">
        <Box className="mb-2 font-medium text-xl">
          Inspiration for future getaways
        </Box>
        <Box className="border-b-2 border-border">
          {/* <Tabs aria-label="Footer Tab">
            <Tab label="Popular" value={0} className="p-2 -ml-2 my-2 mr-2 normal-case text-left" />
            <Tab label="Art & Culture" value={1} className="p-2 -ml-2 my-2 mr-2 normal-case text-left" />
            <Tab label="Outdoors" value={2} className="p-2 -ml-2 my-2 mr-2 normal-case text-left" />
          </Tabs> */}
        </Box>
        <Box className="pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-6">
			{
				Array(15).fill(0).map((_,i) =>{
					return (
						<Box className="block col-span-1" key={i}>
							<span className="block">Canmore</span>
							<span className="block text-neutral-400	font-light text-sm">Condo rentals</span>
						</Box>
					)
				})
			}
		</Box>
      </Box>
      <Box className="px-10 lg:px-20 bg-hoverBg">
		<Box className="border-border border-b-2 grid grid-cols-1 md:grid-cols-3">
			<Box className="py-12 text-sm">
				<span className="mb-3 block">Support</span>
				<Box className="grid gap-2 font-light">
					<a href="#" className="hover:underline">Help Center</a>
					<a href="#" className="hover:underline">AirCover</a>
					<a href="#" className="hover:underline">Anti-discrimination</a>
				</Box>
			</Box>
			<Box className="py-12 text-sm">
				<span className="mb-3 block">Support</span>
				<Box className="grid gap-2 font-light">
					<a href="#" className="hover:underline">Help Center</a>
					<a href="#" className="hover:underline">AirCover</a>
					<a href="#" className="hover:underline">Anti-discrimination</a>
				</Box>
			</Box>
			<Box className="py-12 text-sm">
				<span className="mb-3 block">Support</span>
				<Box className="grid gap-2 font-light">
					<a href="#" className="hover:underline">Help Center</a>
					<a href="#" className="hover:underline">AirCover</a>
					<a href="#" className="hover:underline">Anti-discrimination</a>
				</Box>
			</Box>
		</Box>
		<Box className="py-6 grid place-items-center lg:grid lg:grid-cols-2 lg:">
			<Box className="flex lg:order-last lg:justify-end lg:w-full">
				<IconButton aria-label="Language" className="text-black hover:bg-hoverBg">
					<LanguageIcon />
				</IconButton>
				<Button className="text-black normal-case hover:bg-hoverBg" variant="text">
					English (US) ฿ THB
				</Button>
			</Box>
			<Box className="grid place-items-center lg:flex lg:justify-start lg:w-full">
				<Button className="normal-case text-black font-light"> 2023 Airbnb, Inc.</Button>
				<Box className="text-xs flex gap-1 font-light">
					<span>Terms</span>
					<span>·</span>
					<span>Sitemap</span>
					<span>·</span>
					<span>Privacy</span>
					<span>·</span>
					<span>Your Privacy Choices</span>
				</Box>
			</Box>
		</Box>
	  </Box>
    </>
  );
}
