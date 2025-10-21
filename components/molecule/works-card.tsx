import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import Components //
import SecondaryButton from "../atom/secondary-button";

interface WorksCardProps {
	thumbnail: StaticImport;
	thumbnailalt: string;
	thumbnailtitle: string;
	order: string;
	title: string;
	description: string;
}

const WorksCard = ({
	thumbnail,
	thumbnailalt,
	thumbnailtitle,
	order,
	title,
	description,
}: WorksCardProps) => {
	return (
		<div className="flex flex-col w-full h-auto items-center justify-center">
			<div className="flex w-full h-auto p-[30px] border-b-[1px] border-dark-border">
				<Image
					src={thumbnail}
					alt={thumbnailalt}
					title={thumbnailtitle}
					priority={true}
					className="object-cover object-center w-full h-auto"
				/>
			</div>

			<div className="flex flex-col items-start justify-center w-full h-auto px-[30px] gap-24 pt-9 pb-9 border-b-[1px] border-dark-border">
				<div className="flex flex-col items-start justify-center w-full h-auto gap-7">
					<p className="text-xs text-smoke font-satoshi">{order}</p>
					<h3 className="text-[32px] text-floral-white font-aeonik-medium">
						{title}
					</h3>
				</div>

				<div className="flex flex-col items-start justify-center w-full h-auto gap-9">
					<p className="text-base text-smoke font-aeonik-regular leading-snug">
						{description}
					</p>
					<SecondaryButton text="Case study" />
				</div>
			</div>
		</div>
	);
};

export default WorksCard;
