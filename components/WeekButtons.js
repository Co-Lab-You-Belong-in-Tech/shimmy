import * as React from 'react';
import { ToggleButton } from 'react-native-paper';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const WeekButtons = () => {
    
  const [status, setStatus] = React.useState('checked');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };

  return (
    <ToggleButton
      icon="alpha-m"
      value="bluetooth"
      status={status}
      onPress={onButtonToggle}
			size='40'
			theme={{ roundness: 50 }}
    />
  );
};

export default WeekButtons;