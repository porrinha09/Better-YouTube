// ==UserScript==
// @name         Password
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Better Youtube
// @author       Kelvin zv
// @match        https://www.youtube.com/*
// @downloadURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Password.js
// @updateURL https://raw.githubusercontent.com/porrinha09/Better-YouTube/main/Plugins/Password.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var senhaCorreta = "teste";

    function exibirMenuSenha() {
        var senha = prompt("Digite a senha para acessar o YouTube:");
        if (senha === senhaCorreta) {
        } else {
            alert("Senha incorreta");
            exibirMenuSenha();
        }
    }

    exibirMenuSenha();
})();
