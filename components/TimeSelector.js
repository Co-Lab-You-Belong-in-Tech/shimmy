import { Picker } from "@react-native-picker/picker";
import React, { useState } from 'react';

const TimeSelector = () => {
	const [value, setTime] = useState("")

	const handleChange = (value) => {
		setTime(value);
  } 

	return (
		<Picker
		onValueChange={(value) => handleChange(value)}
		mode="dropdown" // Android only
		>
			<Picker.Item label="09:00" value="0900" />
			<Picker.Item label="09:30" value="0930" />
			<Picker.Item label="10:30" value="1030" />
			<Picker.Item label="11:00" value="1100" />
			<Picker.Item label="11:30" value="1130" />
			<Picker.Item label="12:00" value="1200" />
			<Picker.Item label="12:30" value="1230" />
			<Picker.Item label="13:00" value="1300" />
			<Picker.Item label="13:30" value="1330" />
		</Picker>
	);
}

export default TimeSelector;
