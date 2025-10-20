import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ToolsPillProps {
	logo: StaticImport;
	logoalt: string;
	title: string;
}

const ToolsPill = ({ logo, logoalt, title }: ToolsPillProps) => {
	return (
		<div className="flex items-center justify-center w-fit h-auto rounded-sm bg-[#181818] gap-2.5 pl-2.5 pr-3 py-2">
			<Image
				src={logo}
				alt={logoalt}
				priority={true}
				className="h-[21px] w-auto"
			/>

			<div className="flex items-center w-fit h-fit pb-0.5">
				<p className="text-sm text-floral-white font-aeonik-regular">
					{title}
				</p>
			</div>
		</div>
	);
};

export default ToolsPill;
