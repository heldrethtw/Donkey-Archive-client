import "./index.css";
import { jsx, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Bootstrap from "react-bootstrap";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Helper functions used in the file
export function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}

export function $parcel$interopDefault(a) {
    return a && a.__esModule ? a.default : a;
}

const $parcel$global = globalThis;
const $parcel$modules = {};
const $parcel$inits = {};

let parcelRequire = $parcel$global["parcelRequireb94a"];

if (!parcelRequire) {
    parcelRequire = function (id) {
        if (id in $parcel$modules) {
            return $parcel$modules[id].exports;
        }
        if (id in $parcel$inits) {
            const init = $parcel$inits[id];
            delete $parcel$inits[id];
            const module = { id: id, exports: {} };
            $parcel$modules[id] = module;
            init.call(module.exports, module, module.exports);
            return module.exports;
        }
        throw new Error(`Cannot find module '${id}'`);
    };

    parcelRequire.register = function register(id, init) {
        $parcel$inits[id] = init;
    };

    $parcel$global["parcelRequireb94a"] = parcelRequire;
}

// Modules assumed to be in respective files
import MainView from "./MainView"; // Modify path as necessary
import MovieCard from "./MovieCard"; // Modify path as necessary
import MovieView from "./MovieView"; // Modify path as necessary
import { LoginView } from "./LoginView"; // Modify path as necessary
import SignUp from "./SignUp"; // Modify path as necessary

render(
    <Container>
        <MainView />
    </Container>,
    document.getElementById("root")
);
