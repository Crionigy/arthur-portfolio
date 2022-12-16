import './style.css'

import App from './App/App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip, Toast, Popover } from 'bootstrap';

const canvas = document.querySelector('canvas.webgl');

const app = new App(canvas);
