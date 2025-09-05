import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import "../styles/radio.css";

const RadioButtons = () => (
	<RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
		<div className="radioContainer">
			<RadioGroup.Item className="RadioGroupItem" name="RADIOS" value="Radio Button 1" id="r1">
				<RadioGroup.Indicator className="RadioGroupIndicator" />
			</RadioGroup.Item>
			<label className="Label radio" htmlFor="r1">
				Radio 1
			</label>
		</div>
		<div className="radioContainer">
			<RadioGroup.Item className="RadioGroupItem" name="RADIOS" value="Radio Button 2" id="r2">
				<RadioGroup.Indicator className="RadioGroupIndicator" />
			</RadioGroup.Item>
			<label className="Label radio" htmlFor="r2">
				Radio 2
			</label>
		</div>
	</RadioGroup.Root>
);

export default RadioButtons;
