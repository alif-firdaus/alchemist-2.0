// Import Icons //
import { CornerDownRight } from "lucide-react";

interface SecondaryButtonDesktopProps {
	text: string;
	iconBg?: string;
}

const SecondaryButtonDesktop = ({
	text,
	iconBg = "bg-lava",
}: SecondaryButtonDesktopProps) => {
	return (
		<button className="group flex items-center justify-between w-fit h-fit gap-4 cursor-pointer transition-colors duration-300">
			{/* Animated text container */}
			<div className="relative h-fit overflow-hidden flex items-center">
				{/* Default text */}
				<span className="block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:-translate-y-[140%]">
					{text}
				</span>

				{/* Duplicate text (slides up on hover) */}
				<span className="absolute left-0 top-[140%] block text-sm font-aeonik-medium text-floral-white transform transition-transform duration-300 ease-out group-hover:translate-y-[-140%]">
					{text}
				</span>
			</div>

			{/* Icon container */}
			<div
				className={`flex items-center justify-center ${iconBg} rounded-[3px] h-6 w-6 transition-colors duration-300`}
			>
				<CornerDownRight
					className="text-floral-white"
					size={12}
					strokeWidth={3}
				/>
			</div>
		</button>
	);
};

export default SecondaryButtonDesktop;
