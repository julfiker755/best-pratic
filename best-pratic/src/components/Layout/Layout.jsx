import React from 'react';
import Header from '../Header/Header';
import { Outlet,useNavigation } from 'react-router-dom';

const Layout = () => {
  const navigation = useNavigation();
  // const location=useLocation()
  //  console.log(location)
    return (
        <div>
          <Header></Header>  
          <div>
            { 
            navigation.state === "loading" ? <p className='text-[red]'>Loading....</p> :<Outlet></Outlet>
            }
          
          </div>
        </div>
    );
};

export default Layout;