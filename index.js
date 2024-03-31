require("./index.css");
var $l9KIq$reactjsxruntime = require("react/jsx-runtime");
var $l9KIq$react = require("react");
var $l9KIq$proptypes = require("prop-types");
var $l9KIq$reactbootstrapButton = require("react-bootstrap/Button");
var $l9KIq$reactbootstrapForm = require("react-bootstrap/Form");
var $l9KIq$reactbootstrap = require("react-bootstrap");
var $l9KIq$reactdom = require("react-dom");
require("bootstrap/dist/css/bootstrap.min.css");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireb94a"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireb94a"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("d85dU", function(module, exports) {

$parcel$export(module.exports, "default", () => $aca6987a076e7950$export$2e2bcd8739ae039);



var $kCYwJ = parcelRequire("kCYwJ");

var $6VTWI = parcelRequire("6VTWI");

var $85CgF = parcelRequire("85CgF");

var $eoOBO = parcelRequire("eoOBO");
const MainView = ()=>{
    const [movies1, setMovies] = (0, $l9KIq$react.useState)([]);
    const [selectedMovie1, setSelectedMovie1] = (0, $l9KIq$react.useState)(null);
    const [user1, setUser] = (0, $l9KIq$react.useState)(null);
    const [token, setToken] = (0, $l9KIq$react.useState)(null);
    (0, $l9KIq$react.useEffect)(()=>{
        if (token) fetch("https://donkey-archive-af41e8314602.herokuapp.com/api/tmbd/movies", {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>response.json()).then((data)=>setMovies(data)).catch((error)=>console.error("Failed to fetch movies", error));
    }, [
        token
    ]);
    const handleLoggedIn1 = (user1, token)=>{
        setUser(user1);
        setToken(token);
    };
    const handleLoggedOut1 = ()=>{
        setUser(null);
        setToken(null);
    };
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
        children: !user1 ? /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $85CgF.LoginView), {
                    onLoggedIn: handleLoggedIn1
                }),
                /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $eoOBO.default), {})
            ]
        }) : selectedMovie1 ? /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $6VTWI.default), {
            movie: selectedMovie1,
            onBackClick: ()=>setSelectedMovie1(null)
        }) : /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactjsxruntime.Fragment), {
            children: [
                /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("button", {
                    onClick: handleLoggedOut1,
                    children: "Logout"
                }),
                movies1.map((movie)=>/*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $kCYwJ.default), {
                        movie: movie,
                        onMovieClick: setSelectedMovie1
                    }, movie._id))
            ]
        })
    });
};
var $aca6987a076e7950$export$2e2bcd8739ae039 = MainView;
return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
    children: !user ? /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $85CgF.LoginView), {
        onLoggedIn: handleLoggedIn
    }) : selectedMovie ? /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $6VTWI.default), {
        movie: selectedMovie,
        onBackClick: ()=>setSelectedMovie(null)
    }) : /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("button", {
                onClick: handleLoggedOut,
                children: "Logout"
            }),
            movies.map((movie)=>/*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $kCYwJ.default), {
                    movie: movie,
                    onMovieClick: setSelectedMovie
                }, movie._id))
        ]
    })
});

});
parcelRegister("kCYwJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $0708e1e19057a392$export$2e2bcd8739ae039);



function $0708e1e19057a392$var$MovieCard({ movie: movie, onMovieSelect: onMovieSelect, showImage: showImage }) {
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("h1", {
                children: movie.title
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("p", {
                children: movie.description
            }),
            showImage && /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("img", {
                src: movie.image
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("button", {
                onClick: ()=>onMovieSelect(movie),
                children: "Select"
            })
        ]
    });
}
$0708e1e19057a392$var$MovieCard.propTypes = {
    movie: (0, ($parcel$interopDefault($l9KIq$proptypes))).object.isRequired,
    onMovieSelect: (0, ($parcel$interopDefault($l9KIq$proptypes))).func.isRequired,
    showImage: (0, ($parcel$interopDefault($l9KIq$proptypes))).bool.isRequired
};
var $0708e1e19057a392$export$2e2bcd8739ae039 = $0708e1e19057a392$var$MovieCard;

});

parcelRegister("6VTWI", function(module, exports) {

$parcel$export(module.exports, "default", () => $d09280e3f4ddbd8c$export$2e2bcd8739ae039);



function $d09280e3f4ddbd8c$var$MovieView(props) {
    const { movie: movie, onBackClick: onBackClick } = props;
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)("div", {
        className: "movie-view",
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("h1", {
                children: movie.title
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("p", {
                children: movie.description
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("img", {
                src: movie.image,
                alt: movie.title
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("button", {
                onClick: onBackClick,
                children: "Back"
            })
        ]
    });
}
$d09280e3f4ddbd8c$var$MovieView.propTypes = {
    movie: (0, ($parcel$interopDefault($l9KIq$proptypes))).object.isRequired,
    onBackClick: (0, ($parcel$interopDefault($l9KIq$proptypes))).func.isRequired
};
var $d09280e3f4ddbd8c$export$2e2bcd8739ae039 = $d09280e3f4ddbd8c$var$MovieView;

});

parcelRegister("85CgF", function(module, exports) {

$parcel$export(module.exports, "LoginView", () => $4301c279c8999c7b$export$1582048ca8384970);




const $4301c279c8999c7b$export$1582048ca8384970 = ({ onLoggedIn: onLoggedIn })=>{
    const [username, setUsername] = (0, $l9KIq$react.useState)("");
    const [password, setPassword] = (0, $l9KIq$react.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        fetch("https://donkey-archive-af41e8314602.herokuapp.com/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Username: username,
                Password: password
            })
        }).then((response)=>response.json()).then((data)=>{
            if (data.user) onLoggedIn(data.user, data.token);
            else alert("Incorrect username or password");
        }).catch((e)=>{
            alert("Incorrect username or password");
        });
    };
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))), {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))).Group, {
                controlId: "formUsername",
                children: [
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))).Label, {
                        children: "Username:"
                    }),
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))).Control, {
                        type: "text",
                        value: username,
                        onChange: (e)=>setUsername(e.target.value),
                        required: true,
                        minLength: "3"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))).Group, {
                controlId: "formPassword",
                children: [
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))).Label, {
                        children: "Password:"
                    }),
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$reactbootstrapForm))).Control, {
                        type: "password",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$reactbootstrapButton))), {
                variant: "primary",
                type: "submit",
                children: "Submit"
            })
        ]
    });
};

});

parcelRegister("eoOBO", function(module, exports) {

$parcel$export(module.exports, "default", () => $4ba80ed9798eaec1$export$2e2bcd8739ae039);



const $4ba80ed9798eaec1$var$SignUp = ()=>{
    const [email, setEmail] = (0, $l9KIq$react.useState)("");
    const [password, setPassword] = (0, $l9KIq$react.useState)("");
    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch("https://donkey-archive-af41e8314602.herokuapp.com/api/auth/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Username: email,
                Password: password
            })
        }).then((response)=>response.json()).then((data)=>{
            console.log(data);
        }).catch((e)=>{
            console.log(e);
        });
    };
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("h2", {
                children: "Sign Up"
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactbootstrap.Form), {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactbootstrap.Form).Group, {
                        controlId: "email",
                        children: [
                            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Form).Label, {
                                children: "Email:"
                            }),
                            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Form).Control, {
                                type: "email",
                                value: email,
                                onChange: handleEmailChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactbootstrap.Form).Group, {
                        controlId: "password",
                        children: [
                            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Form).Label, {
                                children: "Password:"
                            }),
                            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Form).Control, {
                                type: "password",
                                value: password,
                                onChange: handlePasswordChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Button), {
                        variant: "primary",
                        type: "submit",
                        children: "Sign Up"
                    })
                ]
            })
        ]
    });
};
var $4ba80ed9798eaec1$export$2e2bcd8739ae039 = $4ba80ed9798eaec1$var$SignUp;

});









var $d85dU = parcelRequire("d85dU");
(0, ($parcel$interopDefault($l9KIq$reactdom))).render(/*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Container), {
    children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $d85dU.default), {})
}), document.getElementById("root"));


//# sourceMappingURL=index.js.map
