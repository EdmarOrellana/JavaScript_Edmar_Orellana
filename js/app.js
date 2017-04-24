
  window.onload = function(){
  pantalla=document.getElementById("display");
  }

  document.getElementById("on").onmousedown = function () {
  Calculadora.borrarNumero();
  Calculadora.reducirTeclaOn();
  },

  document.getElementById("on").onmouseup = function () {
  Calculadora.devolverTeclaOn();
  },

  document.getElementById("sign").onmousedown = function () {
  Calculadora.agregarSigno();
  Calculadora.reducirTeclaSign();
  }

  document.getElementById("sign").onmouseup = function () {
  Calculadora.devolverTeclaSign();
  }

  document.getElementById("raiz").onmousedown = function () {
  Calculadora.raizC();
  Calculadora.reducirTeclaRaiz();
  }

  document.getElementById("raiz").onmouseup = function () {
  Calculadora.devolverTeclaRaiz();
  }

  document.getElementById("dividido").onmousedown = function () {
  Calculadora.operarNumero('/');
  pantalla.innerHTML="";
  Calculadora.reducirTeclaDiv();
  }

  document.getElementById("dividido").onmouseup = function () {
  Calculadora.devolverTeclaDiv();
  }

  document.getElementById("7").onmousedown = function () {
  Calculadora.mostrarNumero('7');
  Calculadora.reducirTecla7();
  }

  document.getElementById("7").onmouseup = function () {
  Calculadora.devolverTecla7();
  }

  document.getElementById("8").onmousedown = function () {
  Calculadora.mostrarNumero('8');
  Calculadora.reducirTecla8();
  }

  document.getElementById("8").onmouseup = function () {
  Calculadora.devolverTecla8();
  }

  document.getElementById("9").onmousedown = function () {
  Calculadora.mostrarNumero('9');
  Calculadora.reducirTecla9();
  }

  document.getElementById("9").onmouseup = function () {
  Calculadora.devolverTecla9();
  }

  document.getElementById("por").onmousedown = function () {
  Calculadora.operarNumero('*');
  pantalla.innerHTML="";
  Calculadora.reducirTeclaPor();
  }

  document.getElementById("por").onmouseup = function () {
  Calculadora.devolverTeclaPor();
  }

  document.getElementById("4").onmousedown = function () {
  Calculadora.mostrarNumero('4');
  Calculadora.reducirTecla4();
  }

  document.getElementById("4").onmouseup = function () {
  Calculadora.devolverTecla4();
  }

  document.getElementById("5").onmousedown = function () {
  Calculadora.mostrarNumero('5');
  Calculadora.reducirTecla5();
  }

  document.getElementById("5").onmouseup = function () {
  Calculadora.devolverTecla5();
  }

  document.getElementById("6").onmousedown = function () {
  Calculadora.mostrarNumero('6');
  Calculadora.reducirTecla6();
  }

  document.getElementById("6").onmouseup = function () {
  Calculadora.devolverTecla6();
  }

  document.getElementById("menos").onmousedown = function () {
  Calculadora.operarNumero('-');
  pantalla.innerHTML="";
  Calculadora.reducirTeclaMenos();
  }

  document.getElementById("menos").onmouseup = function () {
  Calculadora.devolverTeclaMenos();
  }

  document.getElementById("1").onmousedown = function () {
  Calculadora.mostrarNumero('1');
  Calculadora.reducirTecla1();
  }

  document.getElementById("1").onmouseup = function () {
  Calculadora.devolverTecla1();
  }

  document.getElementById("2").onmousedown = function () {
  Calculadora.mostrarNumero('2');
  Calculadora.reducirTecla2();
  }

  document.getElementById("2").onmouseup = function () {
  Calculadora.devolverTecla2();
  }

  document.getElementById("3").onmousedown = function () {
  Calculadora.mostrarNumero('3');
  Calculadora.reducirTecla3();
  }

  document.getElementById("3").onmouseup = function () {
  Calculadora.devolverTecla3();
  }

  document.getElementById("0").onmousedown = function () {
  Calculadora.mostrarNumero('0');
  Calculadora.reducirTecla0();
  }

  document.getElementById("0").onmouseup = function () {
  Calculadora.devolverTecla0();
  }

  document.getElementById("punto").onmousedown = function () {
  Calculadora.mostrarNumero('.');
  Calculadora.reducirTeclaPunto();
  }

  document.getElementById("punto").onmouseup = function () {
  Calculadora.devolverTeclaPunto();
  }

  document.getElementById("igual").onmousedown = function () {
  Calculadora.igualarNumero();
  Calculadora.reducirTeclaIgual();
  }

  document.getElementById("igual").onmouseup = function () {
  Calculadora.devolverTeclaIgual();
  }

  document.getElementById("mas").onmousedown = function () {
  Calculadora.operarNumero('+');
  pantalla.innerHTML="";
  Calculadora.reducirTeclaMas();
  }

  document.getElementById("mas").onmouseup = function () {
  Calculadora.devolverTeclaMas();
  }

var Calculadora = (function(){
      var n="0";
      var ni=1;
      var punto=0;
      var ci=0;
      var op="no";

    return {
        mostrarNumero: function(nn) {
          if (n=="0" || ni==1) {
             pantalla.innerHTML=nn;
             n=nn;
             if (nn==".") {
                 pantalla.innerHTML="0.";
                 n=nn;
                 punto=1;
                 }
             }
          else {
             if (nn=="." && punto==0) {
               pantalla.innerHTML+=nn;
               n+=nn;
               punto=1;
             }
             //Para escribir una segunda coma
             else if (nn=="." && punto==1) {}
             else {
             pantalla.innerHTML+=nn;
             n+=nn;
             }
           }
          ni=0
        },

        operarNumero: function(s) {
          Calculadora.igualarNumero()
          ci=n
          op=s;
          ni=1;
        },

        igualarNumero: function() {
          if (op=="no") {
          pantalla.innerHTML=n;
              }
          else {
          sl=ci+op+n;
          sol=eval(sl)
          pantalla.innerHTML=sol
          ci=sol;
        }
        },

        borrarNumero: function(){
          pantalla.innerHTML=0;
          n="0";
          punto=0;
          ni=0
          op="no"
        },

        agregarSigno: function() {
          nx=Number(n);
          nx=-nx;
          n=String(nx);
          pantalla.innerHTML=n;
        },

        raizC: function() {
          n=Math.sqrt(n)
          pantalla.innerHTML=n;
          op="no";
          ni=1;
        },

        reducirTeclaOn: function() {
        document.getElementById('on').style="transform: scale(0.9);"
        },

        devolverTeclaOn: function() {
        document.getElementById('on').style="transform: scale(1);"
        },

        reducirTeclaSign: function() {
        document.getElementById('sign').style="transform: scale(0.9);"
        },

        devolverTeclaSign: function() {
        document.getElementById('sign').style="transform: scale(1);"
        },

        reducirTeclaRaiz: function() {
        document.getElementById('raiz').style="transform: scale(0.9);"
        },

        devolverTeclaRaiz: function() {
        document.getElementById('raiz').style="transform: scale(1);"
        },

        reducirTeclaDiv: function() {
        document.getElementById('dividido').style="transform: scale(0.9);"
        },

        devolverTeclaDiv: function() {
        document.getElementById('dividido').style="transform: scale(1);"
        },

        reducirTecla7: function() {
        document.getElementById('7').style="transform: scale(0.9);"
        },

        devolverTecla7: function() {
        document.getElementById('7').style="transform: scale(1);"
        },

        reducirTecla8: function() {
        document.getElementById('8').style="transform: scale(0.9);"
        },

        devolverTecla8: function() {
        document.getElementById('8').style="transform: scale(1);"
        },

        reducirTecla9: function() {
        document.getElementById('9').style="transform: scale(0.9);"
        },

        devolverTecla9: function() {
        document.getElementById('9').style="transform: scale(1);"
        },

        reducirTeclaPor: function() {
        document.getElementById('por').style="transform: scale(0.9);"
        },

        devolverTeclaPor: function() {
        document.getElementById('por').style="transform: scale(1);"
        },

        reducirTecla4: function() {
        document.getElementById('4').style="transform: scale(0.9);"
        },

        devolverTecla4: function() {
        document.getElementById('4').style="transform: scale(1);"
        },

        reducirTecla5: function() {
        document.getElementById('5').style="transform: scale(0.9);"
        },

        devolverTecla5: function() {
        document.getElementById('5').style="transform: scale(1);"
        },

        reducirTecla6: function() {
        document.getElementById('6').style="transform: scale(0.9);"
        },

        devolverTecla6: function() {
        document.getElementById('6').style="transform: scale(1);"
        },

        reducirTeclaMenos: function() {
        document.getElementById('menos').style="transform: scale(0.9);"
        },

        devolverTeclaMenos: function() {
        document.getElementById('menos').style="transform: scale(1);"
        },

        reducirTecla1: function() {
        document.getElementById('1').style="transform: scale(0.9);"
        },

        devolverTecla1: function() {
        document.getElementById('1').style="transform: scale(1);"
        },

        reducirTecla2: function() {
        document.getElementById('2').style="transform: scale(0.9);"
        },

        devolverTecla2: function() {
        document.getElementById('2').style="transform: scale(1);"
        },

        reducirTecla3: function() {
        document.getElementById('3').style="transform: scale(0.9);"
        },

        devolverTecla3: function() {
        document.getElementById('3').style="transform: scale(1);"
        },

        reducirTecla0: function() {
        document.getElementById('0').style="transform: scale(0.9);"
        },

        devolverTecla0: function() {
        document.getElementById('0').style="transform: scale(1);"
        },

        reducirTeclaPunto: function() {
        document.getElementById('punto').style="transform: scale(0.9);"
        },

        devolverTeclaPunto: function() {
        document.getElementById('punto').style="transform: scale(1);"
        },

        reducirTeclaIgual: function() {
        document.getElementById('igual').style="transform: scale(0.9);"
        },

        devolverTeclaIgual: function() {
        document.getElementById('igual').style="transform: scale(1);"
        },

        reducirTeclaMas: function() {
        document.getElementById('mas').style="transform: scale(0.9);"
        },

        devolverTeclaMas: function() {
        document.getElementById('mas').style="transform: scale(1);"
        }

    };
})();

Calculadora.init();
