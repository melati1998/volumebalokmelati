import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class Hitungvolumebalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      tinggi: 0,
      lebar: 0,
      volume: 0,
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFB6C1' }}>
        <View style={{ backgroundColor: '#DB7093' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
          Menghitung volume balok
        </Text>
      </View>

      <View style={{ margin: 20, padding: 10, backgroundColor: '#DB7093' }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Panjang"
            onChangeText={(panjang) => this.setState({ panjang })}
            keyboardtype='numeric'
          />
            <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Tinggi"
            onChangeText={(tinggi) => this.setState({ tinggi })}
            keyboardtype='numeric'
            />
            <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Lebar"
            onChangeText={(lebar) => this.setState({ lebar })}
            keyboardtype='numeric'
            />

            <Button
              onPress={() => this.State({
              volume: (this.state.panjang * this.state.tinggi * this.state.lebar)
              })}
              title="Hitung"
              accessibilityLabel="Klik Untuk Menghitung"
            />

              </View>

              <View style={{ margin: 20, backgroundColor: '#DB7093' }}>
                  <Text style={{ padding: 10, fontSize: 20 }}>
                    panjang={this.state.panjang} {'\n'}
                    tinggi={this.state.tinggi} {'\n'}
                    lebar={this.state.lebar} {'\n'}
                    volume={this.state.volume}
                  </Text>
                  </View>
              </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => Hitungvolumebalok);
