export default function TitleSection({ title, subtitle, description }) {
	return (
		<div className='text-center max-w-[60%] mx-auto'>
			<p className='uppercase text-[#0D2AAE] text-sm'>{title}</p>
			<p className='font-bold text-3xl pb-2'>{subtitle}</p>
			<p className='font-light text-gray-600'>{description}</p>
		</div>
	);
}
