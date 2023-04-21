import {
	BsXDiamondFill,
	BsArrowLeftRight,
	BsBoxSeam,
	BsArrowDownRight,
} from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";
import { IoIosRocket } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SiTailwindcss } from "react-icons/si";

export const dataCards = [
	{
		title: "Astro + Tailwind",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		icon: (
			<SiTailwindcss className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		title: "Excellent page speed",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		icon: (
			<IoIosRocket className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		title: "Composant prêt à être utiliser",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		icon: (
			<BsXDiamondFill className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		title: "SEO",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		icon: (
			<BsArrowLeftRight className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		title: "Open to new idea and contributions",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		icon: (
			<HiOutlineLightBulb className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
	{
		title: "Bonne pratice",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error id dignissimos'",
		icon: (
			<VscChecklist className='text-4xl text-white bg-blue-800 rounded-full p-2' />
		),
	},
];
