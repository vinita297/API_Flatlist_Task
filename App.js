import react from 'react';
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';


class App extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      data: []
    }
  }

  componentDidMount() {
    this.getDate()
  }

  getDate = async () => {
    try {
      let response = await fetch(
        `https://random-data-api.com/api/food/random_food?size=10`,
      )
      let JSON = await response.json();
      this.setState({
        data: JSON
      })
      console.log('json', this.state.data)
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ width: 70, height: 30, borderColor: '#000', borderWidth: 1 }}>
          <TouchableOpacity onPress={() => { this.setState({ counter: this.state.counter + 1 }) }}>
            <Text>
              Increase
            </Text>
          </TouchableOpacity>
          <View>
          </View>
          <View style={{ marginTop: 12 }}>
            <Text>
              {this.state.counter}
            </Text>
          </View>
        </View>
        <View style={{ width: 70, height: 30, marginTop: 40, borderColor: '#000', borderWidth: 1 }}>
          <TouchableOpacity onPress={() => { this.setState({ counter: this.state.counter - 1 }) }}>
            <Text>
              Decrease
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={this.state.data}
          renderItem={(item, index) => {
            console.log(item)
            return (
              <View style={{ flex: 1 }}>
                <View style={{ borderWidth: 1, margin: 10 }}>
                  <Text>
                    Dish:{item.item.dish}
                  </Text>
                  <Text>
                    Discription: {item.item.description}
                  </Text>
                </View>
              </View>
            )
          }}
        />
      </View>
    )
  }
}

export default App;