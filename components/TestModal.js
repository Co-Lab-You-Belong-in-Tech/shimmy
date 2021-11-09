import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native';

export default class TestModal extends Component {
  state = {
    isVisible: false
  };

  displayModal(show){
    this.setState({isVisible: show})
  }

  render() {
    return ( 
      <View>
          <Modal
            style={styles.modalView}
            animationType = {"slide"}
            transparent={false}
            visible={this.state.isVisible}
            onRequestClose={() => {
              Alert.alert('Modal has now been closed.');
            }}>

            <Image 
              style = { styles.image }/>
              <Text style = { styles.text }>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Maecenas eget tempus augue, a convallis velit.</Text>
          </Modal>
            
          <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.displayModal(true);
              }}>
              <Text style={styles.buttonText}>Show Modal</Text>
          </TouchableOpacity>     
      </View>     
    )
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  },
  modalView: {
    margin: 0,
    justifyContent: 'flex-end'
    },
    containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
    },
    content: {
    width: '95%',
    height: '50%',
    backgroundColor: 'white',
    overflow: 'hidden',
    },
});
