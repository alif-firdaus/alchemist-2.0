import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Components //
import SecondaryButtonDesktop from "../atom/secondary-button-desktop";

interface WorksCardDesktopProps {
	thumbnail: StaticImport;
	thumbnailalt: string;
	order: string;
	title: string;
	description: string;
}

const WorksCardDesktop = ({
	thumbnail,
	thumbnailalt,
	order,
	title,
	description,
}: WorksCardDesktopProps) => {
	return (
		<div className="grid grid-cols-3 items-center justify-center w-full h-full">
			<div className="w-full h-full items-center justify-center p-content-padding-lg border-b-[1px] border-r-[1px] border-dark-border">
				<div className="flex flex-col items-start justify-start w-full h-1/2 gap-7">
					<p className="text-xs text-smoke font-satoshi">{order}</p>
					<h3 className="text-4xl text-floral-white font-aeonik-medium leading-[1.2]">
						{title}
					</h3>
				</div>

				<div className="flex flex-col items-start justify-end w-full h-1/2 gap-9">
					<p className="text-base text-smoke font-aeonik-regular leading-snug">
						{description}
					</p>
					<SecondaryButtonDesktop
						text="Case study"
						iconBg="bg-lava"
					/>
				</div>
			</div>

			<div className="col-span-2 w-full h-auto items-center justify-center p-content-padding-lg border-b-[1px] border-dark-border">
				<div className="flex items-center justify-center w-full h-full">
					<Image
						src={thumbnail}
						alt={thumbnailalt}
						priority={true}
						className="object-cover object-top w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default WorksCardDesktop;
