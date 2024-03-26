import { Provider } from "react-redux";
import Layout from "./components/Layout";
import appStore from "./Redux/store";
function App() {
  return (
    <Provider store={appStore}>
      <Layout />
    </Provider>
  );
}

export default App;
