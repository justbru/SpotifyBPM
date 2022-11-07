import React, { useState, useEffect } from 'react';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeAuth from './routes/home_auth.js';
import Login from "./routes/log_in.js";
import PlaylistGenerated from './routes/playlist_generated.js';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<HomeAuth/>} />
      <Route path="/playlist/:id" element={<PlaylistGenerated/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);