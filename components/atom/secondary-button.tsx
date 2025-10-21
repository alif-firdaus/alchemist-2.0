// Import Icons //
import { CornerDownRight } from "lucide-react";

interface SecondaryButtonProps {
	text: string;
}

const SecondaryButton = ({ text }: SecondaryButtonProps) => {
	return (
		<button className="flex items-center justify-between w-fit h-fit gap-4">
			<p className="text-base font-aeonik-medium text-floral-white flex w-fit h-fit items-center justify-center pb-[2px]">
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

export default SecondaryButton;
