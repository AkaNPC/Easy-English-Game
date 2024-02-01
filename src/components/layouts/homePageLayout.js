import { Outlet } from "react-router-dom";
import HomePage from "../pages/homePage";

const Layout = ({createPlayerData}) => {
    return (
      <>
      <HomePage createPlayerData={createPlayerData}/>
        <Outlet/>
      </>
    );
  };

export default Layout;