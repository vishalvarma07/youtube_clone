import React from "react";
import { createRoot } from "react-dom/client"; //version 18 updated
import './index.css';

import App from "./App";

const root = createRoot(document.getElementById('root'));

root.render(<App/>);