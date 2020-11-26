import React, { Component } from "react";
import { Provider } from "react-redux";
import Store from "./shared/store/configureStore";
import RouterComponent from "./Router";
import { requestStoragePermission } from './shared/services/permission.service';

console.disableYellowBox = true;

type Props = {};
const store = Store();
export default class App extends Component<Props> {

  async requestPermission() {
    await requestStoragePermission()
  }
  componentDidMount() {
    this.requestPermission();
  }
  
  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}
