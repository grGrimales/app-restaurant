import { Provider } from "react-redux";
import MainNavigation from "./navigation";

import createStore from "./store";

export default function App() {
  return (
    <Provider store={createStore}>
      <MainNavigation />
    </Provider>
  );
}
