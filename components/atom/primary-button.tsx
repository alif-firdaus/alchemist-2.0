// Import Icons //
import { CornerDownRight } from "lucide-react";

interface PrimaryButtonProps {
	text: string;
	bgColor: string;
	textColor: string;
	bgColorHover?: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
}

const PrimaryButton = ({
	text,
	bgColor,
	textColor,
	bgColorHover,
	type = "button",
	disabled = false,
}: PrimaryButtonProps) => {
	const bgColorClass = bgColor;
	const textColorClass = textColor;
	const hoverClass = bgColorHover ? `lg:hover:${bgColorHover}` : "";
	const disabledClass = disabled
		? "opacity-60 cursor-not-allowed pointer-events-none"
		: "";

	return (
		<button
			type={type}
			disabled={disabled}
			className={`flex items-center justify-between w-full lg:w-fit lg:gap-4 h-fit rounded pl-[18px] pr-3 lg:pr-[10px] py-3 lg:py-[10px] cursor-pointer ${bgColorClass} ${textColorClass} ${hoverClass} ${disabledClass} transition-all duration-300`}
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
