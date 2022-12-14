import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Linear from './Linear';
import Resnet from './Resnet';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import Electronica from './Electronica';

const App = () => {

  return (
    <div className="center w85">

      <Header />

      <div className="ph3 pv1 background-gray">

        <Routes>
          <Route path="/" element={<LinkList/>} />

          <Route path="/create" element={<CreateLink/>} />
          <Route path="/linear" element={<Linear/>} />
          <Route path="/resnet" element={<Resnet/>} />
          <Route path='/electronica' element={<Electronica/>}/>

          <Route path="/login" element={<Login/>} />

	</Routes>

      </div>
    </div>
  );

};

export default App;