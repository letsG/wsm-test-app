import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        marginTop: 20,
        marginBottom: 20,
      },
    },
    MuiContainer: {
      root: {
        "&.albumsList": {
          paddingLeft: 20,
          paddingRight: 20,
        },
        "&.mainContainer": {
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 30,
        },
      },
    },
    MuiAppBar: {
      root: {
        minHeight: 60,
        "&.row": {
          flexDirection: "row",
        },
        "&.appBar": {
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiTextField: {
      root: {
        "&.grow": {
          flexGrow: 1,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#3182FB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1CD92F",
      contrastText: "#fff",
    },
    error: {
      main: "#FF0000",
      contrastText: "#fff",
    },
  },
  spacing: 8,
});

const { persistor, store } = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
