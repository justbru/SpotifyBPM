import React, { useState, useEffect } from 'react';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import log_in from "./routes/log_in";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<log_in/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);