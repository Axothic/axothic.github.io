(this["webpackJsonpamongcord-sync"] = this["webpackJsonpamongcord-sync"] || []).push([
    [0], {
        114: function (n, e) {},
        120: function (n, e, t) {
            "use strict";
            t.r(e);
            var a = t(42),
                r = t(1),
                c = t.n(r),
                o = t(61),
                i = t.n(o),
                l = t(124),
                u = t(70),
                d = (t(78), t(16)),
                f = t(3),
                s = t(4);

            function m() {
                var n = Object(f.a)(["\n  height: 35px;\n"]);
                return m = function () {
                    return n
                }, n
            }
            var g = s.default.img(m());

            function p(n) {
                var e = n.player;
                return c.a.createElement(g, {
                    src: "crewmates/".concat(e.color).concat(e.alive ? "" : "_dead", ".png"),
                    alt: e.color
                })
            }

            function b() {
                var n = Object(f.a)(["\n    background-color: ", ";\n    filter: ", ";\n  "]);
                return b = function () {
                    return n
                }, n
            }

            function v() {
                var n = Object(f.a)(["\n  font-family: 'Poppins';\n  font-weight: bold;\n  color: white;\n  border: none;\n  outline: white;\n  border-radius: 5px;\n  margin-bottom: 10px;\n  height: 80px;\n  width: calc(50% - 5px);\n"]);
                return v = function () {
                    return n
                }, n
            }
            var E = {
                    black: "#72808B",
                    cyan: "#68B4A7",
                    green: "#4E885D",
                    orange: "#E2A45B",
                    pink: "#F59CD8",
                    purple: "#A171DF",
                    yellow: "#E0E05B",
                    lime: "#90DB84",
                    red: "#DD6867",
                    white: "#B3BED2",
                    brown: "#A07E58",
                    blue: "#576AD4"
                },
                h = s.default.button(v());

            function O(n) {
                var e = n.player,
                    t = n.loading,
                    a = n.sendAliveUpdate,
                    r = Object(s.default)(h)(b(), E[e.color], e.alive ? "" : "brightness(0.6)");
                return c.a.createElement(r, {
                    disabled: t,
                    onClick: function () {
                        a(e.color, !e.alive)
                    }
                }, c.a.createElement(p, {
                    player: e
                }), c.a.createElement("div", null, e.name))
            }

            function x() {
                var n = Object(f.a)(["\n  background-color: #E0E05B;\n"]);
                return x = function () {
                    return n
                }, n
            }

            function y() {
                var n = Object(f.a)(["\n  height: 10px;\n  width: 10px;\n  background-color: #6ACC86;\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 5px;\n"]);
                return y = function () {
                    return n
                }, n
            }

            function S() {
                var n = Object(f.a)(["\n  font-family: 'Poppins';\n  font-size: 14px;\n  text-transform: uppercase;\n  vertical-align: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]);
                return S = function () {
                    return n
                }, n
            }
            var j = s.default.p(S()),
                _ = s.default.span(y()),
                w = Object(s.default)(_)(x());

            function C(n) {
                var e = n.channelName,
                    t = n.reconnecting;
                return c.a.createElement(j, null, t ? c.a.createElement("div", null, c.a.createElement(w, null), " Reconnecting...") : c.a.createElement("div", null, c.a.createElement(_, null), " Connected to ", c.a.createElement("b", null, e)))
            }

            function k() {
                var n = Object(f.a)(["\n  border: none;\n  height: 50px;\n  font-family: 'Poppins';\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 27px;\n  color: #ffffff;\n  background-color: #505DD6;\n  border-radius: 25px;\n  margin-bottom: 10px;\n\n  &:hover {\n    background-color: #444FB6;\n  }\n\n  &:focus, button:active {\n    border: none;\n  }\n\n  &:disabled { \n    background-color: #A7AEEB\n  }\n"]);
                return k = function () {
                    return n
                }, n
            }
            var D = t(4).default.button(k());

            function A() {
                var n = Object(f.a)(["\n  margin-right: 25px;\n  margin-left: 25px;\n  text-align: center;\n  width: 100%;\n  max-width: 330px;\n"]);
                return A = function () {
                    return n
                }, n
            }

            function T() {
                var n = Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);
                return T = function () {
                    return n
                }, n
            }
            var B = s.default.div(T()),
                P = s.default.div(A());

            function N(n) {
                var e = n.children;
                return c.a.createElement(B, {
                    key: "external"
                }, c.a.createElement(P, {
                    key: "internal"
                }, e))
            }

            function R() {
                var n = Object(f.a)(["\n  align-items: center;\n"]);
                return R = function () {
                    return n
                }, n
            }

            function I() {
                var n = Object(f.a)(["\n  flex-wrap: wrap;\n"]);
                return I = function () {
                    return n
                }, n
            }

            function U() {
                var n = Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);
                return U = function () {
                    return n
                }, n
            }

            function K() {
                var n = Object(f.a)(["\n  width: calc(50% - 5px);\n"]);
                return K = function () {
                    return n
                }, n
            }

            function W() {
                var n = Object(f.a)(["\n  width: 100%;\n"]);
                return W = function () {
                    return n
                }, n
            }

            function L() {
                var n = Object(f.a)(["\n  height: 55px;\n  margin-top: 25px;\n"]);
                return L = function () {
                    return n
                }, n
            }
            var z = s.default.img(L()),
                H = Object(s.default)(D)(W()),
                V = Object(s.default)(D)(K()),
                J = s.default.div(U()),
                G = Object(s.default)(J)(I()),
                F = s.default.div(R());
            var Y = function (n) {
                var e = n.gameState,
                    t = n.sendStageUpdate,
                    a = n.sendAliveUpdate,
                    r = n.loading,
                    o = n.reconnecting;
                return c.a.createElement(N, null, c.a.createElement(F, null, c.a.createElement(z, {
                    src: "icon.png",
                    alt: "Amongcord Icon"
                })), c.a.createElement(C, {
                    reconnecting: o,
                    channelName: e.channel_name
                }), c.a.createElement(H, {
                    disabled: "lobby" === e.game_stage || r,
                    onClick: function () {
                        t("lobby")
                    }
                }, "Lobby"), c.a.createElement("br", null), c.a.createElement(J, null, c.a.createElement(V, {
                    disabled: "tasks" === e.game_stage || r,
                    onClick: function () {
                        t("tasks")
                    }
                }, "Tasks"), c.a.createElement(V, {
                    disabled: "discussion" === e.game_stage || r,
                    onClick: function () {
                        t("discussion")
                    }
                }, "Discussion")), c.a.createElement("section", null, c.a.createElement("h2", null, "Players"), c.a.createElement(G, null, e.players.map((function (n) {
                    return c.a.createElement(O, {
                        player: n,
                        loading: r,
                        sendAliveUpdate: a
                    })
                })))))
            };

            function M(n) {
                var e = n.className;
                return c.a.createElement("div", {
                    className: e
                }, c.a.createElement("img", {
                    src: "icon.png",
                    height: "110",
                    alt: "Amongcord Icon"
                }), c.a.createElement("br", null), c.a.createElement("img", {
                    src: "logo.svg",
                    style: {
                        marginBottom: "35px"
                    },
                    alt: "Amongcord Sync"
                }))
            }
            var Z = t(20);

            function $() {
                var n = Object(f.a)(["\n  text-transform: uppercase;\n  font-family: 'Poppins';\n  font-size: 48px;\n  height: 80px;\n  width: 100%;\n  border-radius: 5px;\n  box-sizing: border-box;\n  border: 2px solid #B3B3B3;\n  text-align: center;\n  margin-bottom: 10px;\n  caret-color: transparent;\n  user-select: initial;\n\n  &::placeholder {\n    color: #D9D9D9;\n  }\n\n  &:focus::placeholder {\n    color: transparent;\n  }\n"]);
                return $ = function () {
                    return n
                }, n
            }
            var q = s.default.input($());

            function Q(n) {
                var e = n.syncId,
                    t = n.setSyncId;
                return c.a.createElement(q, {
                    key: "codeinput",
                    placeholder: "ABC123",
                    value: e,
                    maxLength: Z.a,
                    onInput: function (n) {
                        n.target.value.length > Z.a && (n.target.value = n.target.value.slice(0, Z.a)), t(n.target.value.toUpperCase())
                    },
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false"
                })
            }

            function X() {
                var n = Object(f.a)(["\n  width: 100%;\n"]);
                return X = function () {
                    return n
                }, n
            }
            var nn = Object(s.default)(D)(X());

            function en(n) {
                var e = n.syncId,
                    t = n.connectToGame,
                    a = n.loading;
                return c.a.createElement(nn, {
                    disabled: (e || "").length !== Z.a || a,
                    onClick: t
                }, "Connect")
            }

            function tn() {
                var n = Object(f.a)(["\n  margin-right: 25px;\n  margin-left: 25px;\n  text-align: center;\n  align-self: center;\n  width: 100%;\n  max-width: 330px;\n"]);
                return tn = function () {
                    return n
                }, n
            }

            function an() {
                var n = Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100vh;\n"]);
                return an = function () {
                    return n
                }, n
            }
            var rn = s.default.div(an()),
                cn = s.default.div(tn());

            function on(n) {
                var e = n.children;
                return c.a.createElement(rn, {
                    key: "external"
                }, c.a.createElement(cn, {
                    key: "internal"
                }, e))
            }
            var ln = t(65),
                un = t.n(ln);

            function dn() {
                var n = Object(f.a)(["\n  background-color: ", ";\n  width: 100%;\n  cursor: pointer;\n  ", "\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  &:focus, button:active {\n    border: none;\n  }\n"]);
                return dn = function () {
                    return n
                }, n
            }

            function fn(n) {
                var e = n.link,
                    t = n.children,
                    a = n.color,
                    r = n.margin,
                    o = Object(s.default)(D)(dn(), a, r ? "margin-top: 20px;" : "", un()(a).darken(.07));
                return c.a.createElement(o, {
                    onClick: function () {
                        window.open(e)
                    }
                }, t)
            }

            function sn() {
                var n = Object(f.a)(["\n  height: 15px;\n  margin-right: 10px;\n"]);
                return sn = function () {
                    return n
                }, n
            }
            var mn = s.default.img(sn());

            function gn() {
                return c.a.createElement(fn, {
                    color: "#7289DA",
                    link: "https://add.amongcord.xyz/",
                    margin: !0
                }, c.a.createElement(mn, {
                    src: "discord.svg",
                    alt: ""
                }), "Add the bot to your server")
            }

            function pn() {
                var n = Object(f.a)(["\n  height: 15px;\n  margin-right: 10px;\n"]);
                return pn = function () {
                    return n
                }, n
            }
            var bn = s.default.img(pn());

            function vn() {
                return c.a.createElement(fn, {
                    color: "#e85b46",
                    link: "https://patreon.com/pedrofracassi"
                }, c.a.createElement(bn, {
                    src: "patreon.svg",
                    alt: ""
                }), "Become a Patron")
            }
            var En = function (n) {
                    var e = n.syncId,
                        t = n.setSyncId,
                        a = n.connectToGame,
                        r = n.loading;
                    return c.a.createElement(on, {
                        centerVertically: !0
                    }, c.a.createElement(M, {
                        className: "title"
                    }), c.a.createElement("div", null, c.a.createElement(Q, {
                        syncId: e,
                        setSyncId: t
                    }), c.a.createElement(en, {
                        loading: r,
                        syncId: e,
                        connectToGame: a
                    }), c.a.createElement(gn, null), c.a.createElement(vn, null)))
                },
                hn = t(66),
                On = t.n(hn),
                xn = t(67);
            (new(t.n(xn).a)).enable();
            var yn = function () {
                var n = window.location.pathname.split("/").join(""),
                    e = Object(r.useState)(n),
                    t = Object(d.a)(e, 2),
                    a = t[0],
                    o = t[1],
                    i = Object(r.useState)(!1),
                    l = Object(d.a)(i, 2),
                    u = l[0],
                    f = l[1],
                    s = Object(r.useState)(!1),
                    m = Object(d.a)(s, 2),
                    g = m[0],
                    p = m[1],
                    b = Object(r.useState)(),
                    v = Object(d.a)(b, 2),
                    E = v[0],
                    h = v[1],
                    O = Object(r.useState)(!1),
                    x = Object(d.a)(O, 2),
                    y = x[0],
                    S = x[1],
                    j = Object(r.useState)({
                        sync_id: "",
                        channel_name: "",
                        game_stage: "lobby",
                        players: []
                    }),
                    _ = Object(d.a)(j, 2),
                    w = _[0],
                    C = _[1];
                return u ? c.a.createElement(Y, {
                    gameState: w,
                    reconnecting: g,
                    sendAliveUpdate: function (n, e) {
                        S(!0), E.emit("setAlive", JSON.stringify({
                            sync_id: w.sync_id,
                            color: n,
                            alive: e
                        }))
                    },
                    sendStageUpdate: function (n) {
                        S(!0), E.emit("setStage", JSON.stringify({
                            sync_id: w.sync_id,
                            game_stage: n
                        }))
                    },
                    loading: y
                }) : c.a.createElement(En, {
                    syncId: a,
                    setSyncId: o,
                    connectToGame: function () {
                        var n = On()(Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: "",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).REACT_APP_SYNC_SERVER_ADDRESS || "socket.axothic.com:2442");
                        S(!0), n.on("connect", (function () {
                            n.emit("join", a)
                        })), n.on("gameStateUpdate", (function (n) {
                            S(!1), f(!0), C(n)
                        })), n.on("gameEnded", (function () {
                            o(""), f(!1)
                        })), n.on("connect_error", (function () {
                            f(!1)
                        })), n.on("connect_timeout", (function () {
                            f(!1)
                        })), n.on("disconnect", (function () {
                            f(!1)
                        })), n.on("reconnecting", (function () {
                            p(!0)
                        })), n.on("reconnect", (function () {
                            p(!1)
                        })), n.on("reconnect_failed", (function () {
                            f(!1), p(!1)
                        })), h(n)
                    },
                    loading: y
                })
            };
            l.a({
                dsn: Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0
                }).REACT_APP_SENTRY_DSN,
                integrations: [new u.a.BrowserTracing({
                    tracingOrigins: [Object({
                        NODE_ENV: "production",
                        PUBLIC_URL: "",
                        WDS_SOCKET_HOST: void 0,
                        WDS_SOCKET_PATH: void 0,
                        WDS_SOCKET_PORT: void 0
                    }).REACT_APP_SYNC_SERVER_ADDRESS],
                    beforeNavigate: function (n) {
                        return Object(a.a)(Object(a.a)({}, n), {}, {
                            name: window.location.pathname.replace(/[A-Z0-9]{6}$/, "/")
                        })
                    }
                })],
                tracesSampleRate: 1
            }), i.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(yn, null)), document.getElementById("root"))
        },
        20: function (n) {
            n.exports = JSON.parse('{"a":6}')
        },
        73: function (n, e, t) {
            n.exports = t(120)
        },
        78: function (n, e, t) {}
    },
    [
        [73, 1, 2]
    ]
]);
//# sourceMappingURL=main.b806338c.chunk.js.map