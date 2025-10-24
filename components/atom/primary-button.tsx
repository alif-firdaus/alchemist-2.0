// Import Icons //
import { CornerDownRight } from "lucide-react";

interface PrimaryButtonProps {
	text: string;
	bgColor: string;
	textColor: string;
	bgColorHover?: string;
	type?: "button" | "submit" | "reset";
}

const PrimaryButton = ({
	text,
	bgColor,
	textColor,
	bgColorHover,
	type = "button",
}: PrimaryButtonProps) => {
	const bgColorClass = bgColor;
	const textColorClass = textColor;
	const hoverClass = bgColorHover ? `lg:hover:${bgColorHover}` : "";

	return (
		<button
			type={type}
			className={`flex items-center justify-between w-full lg:w-fit lg:gap-4 h-fit rounded pl-[18px] pr-3 lg:pr-[10px] py-3 lg:py-[10px] cursor-pointer ${bgColorClass} ${textColorClass} ${hoverClass} transition-all duration-300`}
		>
			<p className="text-base lg:text-sm font-aeonik-medium flex w-fit h-fit items-center justify-center pb-[2px]">
				{text}
			</p>
			<div className="flex items-center justify-center bg-lava rounded-[3px] h-[28px] w-[28px]">
				<CornerDownRight
					className="text-floral-white"
					size={12}
					strokeWidth={3}
				/>
			</div>
		</button>
	);
};

export default PrimaryButton;
