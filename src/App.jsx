import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Head from "./components/Head";
import Body from "./components/Body";
import store from "./store/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

/* 

Head
Body
SideBar
  Main Container

MainContainer
  buttons list
  video container
    video card

*/

export default App;
