// Import Icons //
import { CornerDownRight } from "lucide-react";

interface PrimaryButtonDarkDesktopProps {
	text: string;
}

const PrimaryButtonDarkDesktop = ({ text }: PrimaryButtonDarkDesktopProps) => {
	return (
		<button className="group flex items-center justify-between w-fit gap-4 h-fit rounded pl-[18px] pr-[10px] py-[10px] cursor-pointer bg-charcoal hover:bg-metal transition-colors duration-300 overflow-hidden">
			{/* Animated text container */}
			<div className="relative h-fit overflow-hidden flex items-center">
				{/* Default text */}
				<span className="block text-sm text-floral-white font-aeonik-medium transform transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
					{text}
				</span>

				{/* Duplicate text (slides up on hover, with spacing offset) */}
				<span className="absolute left-0 top-[140%] block text-sm text-floral-white font-aeonik-medium transform transition-transform duration-300 ease-out group-hover:translate-y-[-140%]">
					{text}
				</span>
			</div>

			<div className="flex items-center justify-center bg-lava rounded-[3px] h-6 w-6">
				<CornerDownRight
					className="text-floral-white"
					size={12}
					strokeWidth={3}
				/>
			</div>
		</button>
	);
};

export default PrimaryButtonDarkDesktop;
