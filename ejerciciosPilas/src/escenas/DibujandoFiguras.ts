/// <reference path = "EscenaActividad.ts" />
/// <reference path = "Dibujos.ts" />
/// <reference path = "../actores/Dibujante.ts" />
/// <reference path = "../../dependencias/pilasweb.d.ts" />

abstract class DibujandoFiguras extends EscenaActividad {
    dibujoEsperado: DibujoLineal;
    pizarraFantasma: Pizarra;
    anchoLinea = 6;

    iniciar() {
        this.fondo = new Fondo(this.pathFondo(),0,0);
        this.crearAutomata();
        this.dibujoEsperado = DibujoLineal.desdePuntosSimples(this.puntosEsperados());
        this.hacerDibujoPreexistente();
        this.hacerDibujoEsperado();
    }

    crearAutomata(){
      this.automata = new Dibujante();
      this.automata.escala = 0.5;
      this.automata.x = -150;
      this.automata.y = 100;
    }

    /** Se puede completar en subclases para realizar un dibujo antes de trazar el dibujo esperado */
    hacerDibujoPreexistente() {}

    hacerDibujoEsperado() {
      this.pizarraFantasma = new Pizarra();
      this.dibujoEsperado.dibujarEn(this.pizarraFantasma, this.colorDibujoEsperado(), this.anchoLinea);
    }

    dibujoRealizado(): DibujoLineal {
      return (this.automata as any).pizarra ?
        DibujoLineal.desdePizarra((this.automata as any).pizarra, true) :
        new DibujoLineal([]);
    }

    estaResueltoElProblema(){
      return this.dibujoRealizado().igualA(this.dibujoEsperado.unificado());
    }

    pathFondo(): string {
      return 'fondo.dibujando.figuras.png';
    }

    colorDibujo() {
      return pilas.colores.azuloscuro;
    }

    colorDibujoEsperado() {
      return pilas.colores.grisclaro;
    }

    abstract puntosEsperados(): PuntoSimple[] | PuntoSimple[][];
}

// Puntos obtenidos haciendo:
// pilas.escena_actual().automata.pizarra.puntosDeLineas().map(p => " {x:" + p.x.toString() +",y:" + p.y.toString() + "}").toString()

class DibujandoCuadrado extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-50,y:90}, {x:-50,y:80}, {x:-50,y:70}, {x:-50,y:60}, {x:-50,y:50}, {x:-50,y:40}, {x:-50,y:30}, {x:-50,y:20}, {x:-50,y:10}, {x:-50,y:0}, {x:-60,y:0}, {x:-70,y:0}, {x:-80,y:0}, {x:-90,y:0}, {x:-100,y:0}, {x:-110,y:0}, {x:-120,y:0}, {x:-130,y:0}, {x:-140,y:0}, {x:-150,y:0}, {x:-150,y:10}, {x:-150,y:20}, {x:-150,y:30}, {x:-150,y:40}, {x:-150,y:50}, {x:-150,y:60}, {x:-150,y:70}, {x:-150,y:80}, {x:-150,y:90}, {x:-150,y:100}];
  }
}

class Dibujando5CuadradosHorizontal extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-145,y:100}, {x:-140,y:100}, {x:-135,y:100}, {x:-130,y:100}, {x:-125,y:100}, {x:-120,y:100}, {x:-115,y:100}, {x:-110,y:100}, {x:-105,y:100}, {x:-100,y:100}, {x:-100,y:95}, {x:-100,y:90}, {x:-100,y:85}, {x:-100,y:80}, {x:-100,y:75}, {x:-100,y:70}, {x:-100,y:65}, {x:-100,y:60}, {x:-100,y:55}, {x:-100,y:50}, {x:-105,y:50}, {x:-110,y:50}, {x:-115,y:50}, {x:-120,y:50}, {x:-125,y:50}, {x:-130,y:50}, {x:-135,y:50}, {x:-140,y:50}, {x:-145,y:50}, {x:-150,y:50}, {x:-150,y:55}, {x:-150,y:60}, {x:-150,y:65}, {x:-150,y:70}, {x:-150,y:75}, {x:-150,y:80}, {x:-150,y:85}, {x:-150,y:90}, {x:-150,y:95}, {x:-150,y:100}, {x:-145,y:100}, {x:-140,y:100}, {x:-135,y:100}, {x:-130,y:100}, {x:-125,y:100}, {x:-120,y:100}, {x:-115,y:100}, {x:-110,y:100}, {x:-105,y:100}, {x:-100,y:100}, {x:-95,y:100}, {x:-90,y:100}, {x:-85,y:100}, {x:-80,y:100}, {x:-75,y:100}, {x:-70,y:100}, {x:-65,y:100}, {x:-60,y:100}, {x:-55,y:100}, {x:-50,y:100}, {x:-50,y:95}, {x:-50,y:90}, {x:-50,y:85}, {x:-50,y:80}, {x:-50,y:75}, {x:-50,y:70}, {x:-50,y:65}, {x:-50,y:60}, {x:-50,y:55}, {x:-50,y:50}, {x:-55,y:50}, {x:-60,y:50}, {x:-65,y:50}, {x:-70,y:50}, {x:-75,y:50}, {x:-80,y:50}, {x:-85,y:50}, {x:-90,y:50}, {x:-95,y:50}, {x:-100,y:50}, {x:-100,y:55}, {x:-100,y:60}, {x:-100,y:65}, {x:-100,y:70}, {x:-100,y:75}, {x:-100,y:80}, {x:-100,y:85}, {x:-100,y:90}, {x:-100,y:95}, {x:-100,y:100}, {x:-95,y:100}, {x:-90,y:100}, {x:-85,y:100}, {x:-80,y:100}, {x:-75,y:100}, {x:-70,y:100}, {x:-65,y:100}, {x:-60,y:100}, {x:-55,y:100}, {x:-50,y:100}, {x:-45,y:100}, {x:-40,y:100}, {x:-35,y:100}, {x:-30,y:100}, {x:-25,y:100}, {x:-20,y:100}, {x:-15,y:100}, {x:-10,y:100}, {x:-5,y:100}, {x:0,y:100}, {x:0,y:95}, {x:0,y:90}, {x:0,y:85}, {x:0,y:80}, {x:0,y:75}, {x:0,y:70}, {x:0,y:65}, {x:0,y:60}, {x:0,y:55}, {x:0,y:50}, {x:-5,y:50}, {x:-10,y:50}, {x:-15,y:50}, {x:-20,y:50}, {x:-25,y:50}, {x:-30,y:50}, {x:-35,y:50}, {x:-40,y:50}, {x:-45,y:50}, {x:-50,y:50}, {x:-50,y:55}, {x:-50,y:60}, {x:-50,y:65}, {x:-50,y:70}, {x:-50,y:75}, {x:-50,y:80}, {x:-50,y:85}, {x:-50,y:90}, {x:-50,y:95}, {x:-50,y:100}, {x:-45,y:100}, {x:-40,y:100}, {x:-35,y:100}, {x:-30,y:100}, {x:-25,y:100}, {x:-20,y:100}, {x:-15,y:100}, {x:-10,y:100}, {x:-5,y:100}, {x:0,y:100}, {x:5,y:100}, {x:10,y:100}, {x:15,y:100}, {x:20,y:100}, {x:25,y:100}, {x:30,y:100}, {x:35,y:100}, {x:40,y:100}, {x:45,y:100}, {x:50,y:100}, {x:50,y:95}, {x:50,y:90}, {x:50,y:85}, {x:50,y:80}, {x:50,y:75}, {x:50,y:70}, {x:50,y:65}, {x:50,y:60}, {x:50,y:55}, {x:50,y:50}, {x:45,y:50}, {x:40,y:50}, {x:35,y:50}, {x:30,y:50}, {x:25,y:50}, {x:20,y:50}, {x:15,y:50}, {x:10,y:50}, {x:5,y:50}, {x:0,y:50}, {x:0,y:55}, {x:0,y:60}, {x:0,y:65}, {x:0,y:70}, {x:0,y:75}, {x:0,y:80}, {x:0,y:85}, {x:0,y:90}, {x:0,y:95}, {x:0,y:100}, {x:5,y:100}, {x:10,y:100}, {x:15,y:100}, {x:20,y:100}, {x:25,y:100}, {x:30,y:100}, {x:35,y:100}, {x:40,y:100}, {x:45,y:100}, {x:50,y:100}, {x:55,y:100}, {x:60,y:100}, {x:65,y:100}, {x:70,y:100}, {x:75,y:100}, {x:80,y:100}, {x:85,y:100}, {x:90,y:100}, {x:95,y:100}, {x:100,y:100}, {x:100,y:95}, {x:100,y:90}, {x:100,y:85}, {x:100,y:80}, {x:100,y:75}, {x:100,y:70}, {x:100,y:65}, {x:100,y:60}, {x:100,y:55}, {x:100,y:50}, {x:95,y:50}, {x:90,y:50}, {x:85,y:50}, {x:80,y:50}, {x:75,y:50}, {x:70,y:50}, {x:65,y:50}, {x:60,y:50}, {x:55,y:50}, {x:50,y:50}, {x:50,y:55}, {x:50,y:60}, {x:50,y:65}, {x:50,y:70}, {x:50,y:75}, {x:50,y:80}, {x:50,y:85}, {x:50,y:90}, {x:50,y:95}, {x:50,y:100}, {x:55,y:100}, {x:60,y:100}, {x:65,y:100}, {x:70,y:100}, {x:75,y:100}, {x:80,y:100}, {x:85,y:100}, {x:90,y:100}, {x:95,y:100}, {x:100,y:100}];
  }
}

class Dibujando5CuadradosDiagonal extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-145,y:100}, {x:-140,y:100}, {x:-135,y:100}, {x:-130,y:100}, {x:-125,y:100}, {x:-120,y:100}, {x:-115,y:100}, {x:-110,y:100}, {x:-105,y:100}, {x:-100,y:100}, {x:-100,y:95}, {x:-100,y:90}, {x:-100,y:85}, {x:-100,y:80}, {x:-100,y:75}, {x:-100,y:70}, {x:-100,y:65}, {x:-100,y:60}, {x:-100,y:55}, {x:-100,y:50}, {x:-105,y:50}, {x:-110,y:50}, {x:-115,y:50}, {x:-120,y:50}, {x:-125,y:50}, {x:-130,y:50}, {x:-135,y:50}, {x:-140,y:50}, {x:-145,y:50}, {x:-150,y:50}, {x:-150,y:55}, {x:-150,y:60}, {x:-150,y:65}, {x:-150,y:70}, {x:-150,y:75}, {x:-150,y:80}, {x:-150,y:85}, {x:-150,y:90}, {x:-150,y:95}, {x:-150,y:100}, {x:-145,y:100}, {x:-140,y:100}, {x:-135,y:100}, {x:-130,y:100}, {x:-125,y:100}, {x:-120,y:100}, {x:-115,y:100}, {x:-110,y:100}, {x:-105,y:100}, {x:-100,y:100}, {x:-100,y:95}, {x:-100,y:90}, {x:-100,y:85}, {x:-100,y:80}, {x:-100,y:75}, {x:-100,y:70}, {x:-100,y:65}, {x:-100,y:60}, {x:-100,y:55}, {x:-100,y:50}, {x:-95,y:50}, {x:-90,y:50}, {x:-85,y:50}, {x:-80,y:50}, {x:-75,y:50}, {x:-70,y:50}, {x:-65,y:50}, {x:-60,y:50}, {x:-55,y:50}, {x:-50,y:50}, {x:-50,y:45}, {x:-50,y:40}, {x:-50,y:35}, {x:-50,y:30}, {x:-50,y:25}, {x:-50,y:20}, {x:-50,y:15}, {x:-50,y:10}, {x:-50,y:5}, {x:-50,y:0}, {x:-55,y:0}, {x:-60,y:0}, {x:-65,y:0}, {x:-70,y:0}, {x:-75,y:0}, {x:-80,y:0}, {x:-85,y:0}, {x:-90,y:0}, {x:-95,y:0}, {x:-100,y:0}, {x:-100,y:5}, {x:-100,y:10}, {x:-100,y:15}, {x:-100,y:20}, {x:-100,y:25}, {x:-100,y:30}, {x:-100,y:35}, {x:-100,y:40}, {x:-100,y:45}, {x:-100,y:50}, {x:-95,y:50}, {x:-90,y:50}, {x:-85,y:50}, {x:-80,y:50}, {x:-75,y:50}, {x:-70,y:50}, {x:-65,y:50}, {x:-60,y:50}, {x:-55,y:50}, {x:-50,y:50}, {x:-50,y:45}, {x:-50,y:40}, {x:-50,y:35}, {x:-50,y:30}, {x:-50,y:25}, {x:-50,y:20}, {x:-50,y:15}, {x:-50,y:10}, {x:-50,y:5}, {x:-50,y:0}, {x:-45,y:0}, {x:-40,y:0}, {x:-35,y:0}, {x:-30,y:0}, {x:-25,y:0}, {x:-20,y:0}, {x:-15,y:0}, {x:-10,y:0}, {x:-5,y:0}, {x:0,y:0}, {x:0,y:-5}, {x:0,y:-10}, {x:0,y:-15}, {x:0,y:-20}, {x:0,y:-25}, {x:0,y:-30}, {x:0,y:-35}, {x:0,y:-40}, {x:0,y:-45}, {x:0,y:-50}, {x:-5,y:-50}, {x:-10,y:-50}, {x:-15,y:-50}, {x:-20,y:-50}, {x:-25,y:-50}, {x:-30,y:-50}, {x:-35,y:-50}, {x:-40,y:-50}, {x:-45,y:-50}, {x:-50,y:-50}, {x:-50,y:-45}, {x:-50,y:-40}, {x:-50,y:-35}, {x:-50,y:-30}, {x:-50,y:-25}, {x:-50,y:-20}, {x:-50,y:-15}, {x:-50,y:-10}, {x:-50,y:-5}, {x:-50,y:0}, {x:-45,y:0}, {x:-40,y:0}, {x:-35,y:0}, {x:-30,y:0}, {x:-25,y:0}, {x:-20,y:0}, {x:-15,y:0}, {x:-10,y:0}, {x:-5,y:0}, {x:0,y:0}, {x:0,y:-5}, {x:0,y:-10}, {x:0,y:-15}, {x:0,y:-20}, {x:0,y:-25}, {x:0,y:-30}, {x:0,y:-35}, {x:0,y:-40}, {x:0,y:-45}, {x:0,y:-50}, {x:5,y:-50}, {x:10,y:-50}, {x:15,y:-50}, {x:20,y:-50}, {x:25,y:-50}, {x:30,y:-50}, {x:35,y:-50}, {x:40,y:-50}, {x:45,y:-50}, {x:50,y:-50}, {x:50,y:-55}, {x:50,y:-60}, {x:50,y:-65}, {x:50,y:-70}, {x:50,y:-75}, {x:50,y:-80}, {x:50,y:-85}, {x:50,y:-90}, {x:50,y:-95}, {x:50,y:-100}, {x:45,y:-100}, {x:40,y:-100}, {x:35,y:-100}, {x:30,y:-100}, {x:25,y:-100}, {x:20,y:-100}, {x:15,y:-100}, {x:10,y:-100}, {x:5,y:-100}, {x:0,y:-100}, {x:0,y:-95}, {x:0,y:-90}, {x:0,y:-85}, {x:0,y:-80}, {x:0,y:-75}, {x:0,y:-70}, {x:0,y:-65}, {x:0,y:-60}, {x:0,y:-55}, {x:0,y:-50}, {x:5,y:-50}, {x:10,y:-50}, {x:15,y:-50}, {x:20,y:-50}, {x:25,y:-50}, {x:30,y:-50}, {x:35,y:-50}, {x:40,y:-50}, {x:45,y:-50}, {x:50,y:-50}, {x:50,y:-55}, {x:50,y:-60}, {x:50,y:-65}, {x:50,y:-70}, {x:50,y:-75}, {x:50,y:-80}, {x:50,y:-85}, {x:50,y:-90}, {x:50,y:-95}, {x:50,y:-100}, {x:55,y:-100}, {x:60,y:-100}, {x:65,y:-100}, {x:70,y:-100}, {x:75,y:-100}, {x:80,y:-100}, {x:85,y:-100}, {x:90,y:-100}, {x:95,y:-100}, {x:100,y:-100}, {x:100,y:-105}, {x:100,y:-110}, {x:100,y:-115}, {x:100,y:-120}, {x:100,y:-125}, {x:100,y:-130}, {x:100,y:-135}, {x:100,y:-140}, {x:100,y:-145}, {x:100,y:-150}, {x:95,y:-150}, {x:90,y:-150}, {x:85,y:-150}, {x:80,y:-150}, {x:75,y:-150}, {x:70,y:-150}, {x:65,y:-150}, {x:60,y:-150}, {x:55,y:-150}, {x:50,y:-150}, {x:50,y:-145}, {x:50,y:-140}, {x:50,y:-135}, {x:50,y:-130}, {x:50,y:-125}, {x:50,y:-120}, {x:50,y:-115}, {x:50,y:-110}, {x:50,y:-105}, {x:50,y:-100}, {x:55,y:-100}, {x:60,y:-100}, {x:65,y:-100}, {x:70,y:-100}, {x:75,y:-100}, {x:80,y:-100}, {x:85,y:-100}, {x:90,y:-100}, {x:95,y:-100}, {x:100,y:-100}, {x:100,y:-105}, {x:100,y:-110}, {x:100,y:-115}, {x:100,y:-120}, {x:100,y:-125}, {x:100,y:-130}, {x:100,y:-135}, {x:100,y:-140}, {x:100,y:-145}, {x:100,y:-150}];
  }
}

class Dibujando4CuadradosInteriores extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-145,y:100}, {x:-140,y:100}, {x:-135,y:100}, {x:-130,y:100}, {x:-125,y:100}, {x:-120,y:100}, {x:-115,y:100}, {x:-110,y:100}, {x:-105,y:100}, {x:-100,y:100}, {x:-100,y:95}, {x:-100,y:90}, {x:-100,y:85}, {x:-100,y:80}, {x:-100,y:75}, {x:-100,y:70}, {x:-100,y:65}, {x:-100,y:60}, {x:-100,y:55}, {x:-100,y:50}, {x:-105,y:50}, {x:-110,y:50}, {x:-115,y:50}, {x:-120,y:50}, {x:-125,y:50}, {x:-130,y:50}, {x:-135,y:50}, {x:-140,y:50}, {x:-145,y:50}, {x:-150,y:50}, {x:-150,y:55}, {x:-150,y:60}, {x:-150,y:65}, {x:-150,y:70}, {x:-150,y:75}, {x:-150,y:80}, {x:-150,y:85}, {x:-150,y:90}, {x:-150,y:95}, {x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-50,y:90}, {x:-50,y:80}, {x:-50,y:70}, {x:-50,y:60}, {x:-50,y:50}, {x:-50,y:40}, {x:-50,y:30}, {x:-50,y:20}, {x:-50,y:10}, {x:-50,y:0}, {x:-60,y:0}, {x:-70,y:0}, {x:-80,y:0}, {x:-90,y:0}, {x:-100,y:0}, {x:-110,y:0}, {x:-120,y:0}, {x:-130,y:0}, {x:-140,y:0}, {x:-150,y:0}, {x:-150,y:10}, {x:-150,y:20}, {x:-150,y:30}, {x:-150,y:40}, {x:-150,y:50}, {x:-150,y:60}, {x:-150,y:70}, {x:-150,y:80}, {x:-150,y:90}, {x:-150,y:100}, {x:-135,y:100}, {x:-120,y:100}, {x:-105,y:100}, {x:-90,y:100}, {x:-75,y:100}, {x:-60,y:100}, {x:-45,y:100}, {x:-30,y:100}, {x:-15,y:100}, {x:0,y:100}, {x:0,y:85}, {x:0,y:70}, {x:0,y:55}, {x:0,y:40}, {x:0,y:25}, {x:0,y:10}, {x:0,y:-5}, {x:0,y:-20}, {x:0,y:-35}, {x:0,y:-50}, {x:-15,y:-50}, {x:-30,y:-50}, {x:-45,y:-50}, {x:-60,y:-50}, {x:-75,y:-50}, {x:-90,y:-50}, {x:-105,y:-50}, {x:-120,y:-50}, {x:-135,y:-50}, {x:-150,y:-50}, {x:-150,y:-35}, {x:-150,y:-20}, {x:-150,y:-5}, {x:-150,y:10}, {x:-150,y:25}, {x:-150,y:40}, {x:-150,y:55}, {x:-150,y:70}, {x:-150,y:85}, {x:-150,y:100}, {x:-130,y:100}, {x:-110,y:100}, {x:-90,y:100}, {x:-70,y:100}, {x:-50,y:100}, {x:-30,y:100}, {x:-10,y:100}, {x:10,y:100}, {x:30,y:100}, {x:50,y:100}, {x:50,y:80}, {x:50,y:60}, {x:50,y:40}, {x:50,y:20}, {x:50,y:0}, {x:50,y:-20}, {x:50,y:-40}, {x:50,y:-60}, {x:50,y:-80}, {x:50,y:-100}, {x:30,y:-100}, {x:10,y:-100}, {x:-10,y:-100}, {x:-30,y:-100}, {x:-50,y:-100}, {x:-70,y:-100}, {x:-90,y:-100}, {x:-110,y:-100}, {x:-130,y:-100}, {x:-150,y:-100}, {x:-150,y:-80}, {x:-150,y:-60}, {x:-150,y:-40}, {x:-150,y:-20}, {x:-150,y:0}, {x:-150,y:20}, {x:-150,y:40}, {x:-150,y:60}, {x:-150,y:80}, {x:-150,y:100}];
  }
}

class DibujandoCabezaElefante extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-50,y:90}, {x:-50,y:80}, {x:-50,y:70}, {x:-50,y:60}, {x:-50,y:50}, {x:-50,y:40}, {x:-50,y:30}, {x:-50,y:20}, {x:-50,y:10}, {x:-50,y:0}, {x:-60,y:0}, {x:-70,y:0}, {x:-80,y:0}, {x:-90,y:0}, {x:-100,y:0}, {x:-110,y:0}, {x:-120,y:0}, {x:-130,y:0}, {x:-140,y:0}, {x:-150,y:0}, {x:-150,y:10}, {x:-150,y:20}, {x:-150,y:30}, {x:-150,y:40}, {x:-150,y:50}, {x:-150,y:60}, {x:-150,y:70}, {x:-150,y:80}, {x:-150,y:90}, {x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-50,y:90}, {x:-50,y:80}, {x:-50,y:70}, {x:-50,y:60}, {x:-50,y:50}, {x:-50,y:40}, {x:-50,y:30}, {x:-50,y:20}, {x:-50,y:10}, {x:-50,y:0}, {x:-50,y:-5}, {x:-50,y:-10}, {x:-50,y:-15}, {x:-50,y:-20}, {x:-50,y:-25}, {x:-50,y:-30}, {x:-50,y:-35}, {x:-50,y:-40}, {x:-50,y:-45}, {x:-50,y:-50}, {x:-55,y:-50}, {x:-60,y:-50}, {x:-65,y:-50}, {x:-70,y:-50}, {x:-75,y:-50}, {x:-80,y:-50}, {x:-85,y:-50}, {x:-90,y:-50}, {x:-95,y:-50}, {x:-100,y:-50}, {x:-100,y:-45}, {x:-100,y:-40}, {x:-100,y:-35}, {x:-100,y:-30}, {x:-100,y:-25}, {x:-100,y:-20}, {x:-100,y:-15}, {x:-100,y:-10}, {x:-100,y:-5}, {x:-100,y:0}, {x:-95,y:0}, {x:-90,y:0}, {x:-85,y:0}, {x:-80,y:0}, {x:-75,y:0}, {x:-70,y:0}, {x:-65,y:0}, {x:-60,y:0}, {x:-55,y:0}, {x:-50,y:0}, {x:-50,y:-5}, {x:-50,y:-10}, {x:-50,y:-15}, {x:-50,y:-20}, {x:-50,y:-25}, {x:-50,y:-30}, {x:-50,y:-35}, {x:-50,y:-40}, {x:-50,y:-45}, {x:-50,y:-50}, {x:-50,y:-55}, {x:-50,y:-60}, {x:-50,y:-65}, {x:-50,y:-70}, {x:-50,y:-75}, {x:-50,y:-80}, {x:-50,y:-85}, {x:-50,y:-90}, {x:-50,y:-95}, {x:-50,y:-100}, {x:-55,y:-100}, {x:-60,y:-100}, {x:-65,y:-100}, {x:-70,y:-100}, {x:-75,y:-100}, {x:-80,y:-100}, {x:-85,y:-100}, {x:-90,y:-100}, {x:-95,y:-100}, {x:-100,y:-100}, {x:-100,y:-95}, {x:-100,y:-90}, {x:-100,y:-85}, {x:-100,y:-80}, {x:-100,y:-75}, {x:-100,y:-70}, {x:-100,y:-65}, {x:-100,y:-60}, {x:-100,y:-55}, {x:-100,y:-50}, {x:-95,y:-50}, {x:-90,y:-50}, {x:-85,y:-50}, {x:-80,y:-50}, {x:-75,y:-50}, {x:-70,y:-50}, {x:-65,y:-50}, {x:-60,y:-50}, {x:-55,y:-50}, {x:-50,y:-50}, {x:-50,y:-55}, {x:-50,y:-60}, {x:-50,y:-65}, {x:-50,y:-70}, {x:-50,y:-75}, {x:-50,y:-80}, {x:-50,y:-85}, {x:-50,y:-90}, {x:-50,y:-95}, {x:-50,y:-100}, {x:-50,y:-105}, {x:-50,y:-110}, {x:-50,y:-115}, {x:-50,y:-120}, {x:-50,y:-125}, {x:-50,y:-130}, {x:-50,y:-135}, {x:-50,y:-140}, {x:-50,y:-145}, {x:-50,y:-150}, {x:-55,y:-150}, {x:-60,y:-150}, {x:-65,y:-150}, {x:-70,y:-150}, {x:-75,y:-150}, {x:-80,y:-150}, {x:-85,y:-150}, {x:-90,y:-150}, {x:-95,y:-150}, {x:-100,y:-150}, {x:-100,y:-145}, {x:-100,y:-140}, {x:-100,y:-135}, {x:-100,y:-130}, {x:-100,y:-125}, {x:-100,y:-120}, {x:-100,y:-115}, {x:-100,y:-110}, {x:-100,y:-105}, {x:-100,y:-100}, {x:-95,y:-100}, {x:-90,y:-100}, {x:-85,y:-100}, {x:-80,y:-100}, {x:-75,y:-100}, {x:-70,y:-100}, {x:-65,y:-100}, {x:-60,y:-100}, {x:-55,y:-100}, {x:-50,y:-100}, {x:-50,y:-105}, {x:-50,y:-110}, {x:-50,y:-115}, {x:-50,y:-120}, {x:-50,y:-125}, {x:-50,y:-130}, {x:-50,y:-135}, {x:-50,y:-140}, {x:-50,y:-145}, {x:-50,y:-150}, {x:-50,y:-155}, {x:-50,y:-160}, {x:-50,y:-165}, {x:-50,y:-170}, {x:-50,y:-175}, {x:-50,y:-180}, {x:-50,y:-185}, {x:-50,y:-190}, {x:-50,y:-195}, {x:-50,y:-200}, {x:-55,y:-200}, {x:-60,y:-200}, {x:-65,y:-200}, {x:-70,y:-200}, {x:-75,y:-200}, {x:-80,y:-200}, {x:-85,y:-200}, {x:-90,y:-200}, {x:-95,y:-200}, {x:-100,y:-200}, {x:-100,y:-195}, {x:-100,y:-190}, {x:-100,y:-185}, {x:-100,y:-180}, {x:-100,y:-175}, {x:-100,y:-170}, {x:-100,y:-165}, {x:-100,y:-160}, {x:-100,y:-155}, {x:-100,y:-150}, {x:-95,y:-150}, {x:-90,y:-150}, {x:-85,y:-150}, {x:-80,y:-150}, {x:-75,y:-150}, {x:-70,y:-150}, {x:-65,y:-150}, {x:-60,y:-150}, {x:-55,y:-150}, {x:-50,y:-150}, {x:-50,y:-155}, {x:-50,y:-160}, {x:-50,y:-165}, {x:-50,y:-170}, {x:-50,y:-175}, {x:-50,y:-180}, {x:-50,y:-185}, {x:-50,y:-190}, {x:-50,y:-195}, {x:-50,y:-200}];
  }
}

class DibujandoHexagono extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-45,y:91}, {x:-40,y:83}, {x:-35,y:74}, {x:-30,y:65}, {x:-25,y:57}, {x:-20,y:48}, {x:-15,y:39}, {x:-10,y:31}, {x:-5,y:22}, {x:0,y:13}, {x:-5,y:5}, {x:-10,y:-4}, {x:-15,y:-13}, {x:-20,y:-21}, {x:-25,y:-30}, {x:-30,y:-39}, {x:-35,y:-47}, {x:-40,y:-56}, {x:-45,y:-65}, {x:-50,y:-73}, {x:-60,y:-73}, {x:-70,y:-73}, {x:-80,y:-73}, {x:-90,y:-73}, {x:-100,y:-73}, {x:-110,y:-73}, {x:-120,y:-73}, {x:-130,y:-73}, {x:-140,y:-73}, {x:-150,y:-73}, {x:-155,y:-65}, {x:-160,y:-56}, {x:-165,y:-47}, {x:-170,y:-39}, {x:-175,y:-30}, {x:-180,y:-21}, {x:-185,y:-13}, {x:-190,y:-4}, {x:-195,y:5}, {x:-200,y:13}, {x:-195,y:22}, {x:-190,y:31}, {x:-185,y:39}, {x:-180,y:48}, {x:-175,y:57}, {x:-170,y:65}, {x:-165,y:74}, {x:-160,y:83}, {x:-155,y:91}, {x:-150,y:100}];
  }
}

class DibujandoTrianguloEquilatero extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-55,y:91}, {x:-60,y:83}, {x:-65,y:74}, {x:-70,y:65}, {x:-75,y:57}, {x:-80,y:48}, {x:-85,y:39}, {x:-90,y:31}, {x:-95,y:22}, {x:-100,y:13}, {x:-105,y:22}, {x:-110,y:31}, {x:-115,y:39}, {x:-120,y:48}, {x:-125,y:57}, {x:-130,y:65}, {x:-135,y:74}, {x:-140,y:83}, {x:-145,y:91}, {x:-150,y:100}];
  }
}

class DibujandoPoligonosInteriores extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-55,y:91}, {x:-60,y:83}, {x:-65,y:74}, {x:-70,y:65}, {x:-75,y:57}, {x:-80,y:48}, {x:-85,y:39}, {x:-90,y:31}, {x:-95,y:22}, {x:-100,y:13}, {x:-105,y:22}, {x:-110,y:31}, {x:-115,y:39}, {x:-120,y:48}, {x:-125,y:57}, {x:-130,y:65}, {x:-135,y:74}, {x:-140,y:83}, {x:-145,y:91}, {x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-50,y:90}, {x:-50,y:80}, {x:-50,y:70}, {x:-50,y:60}, {x:-50,y:50}, {x:-50,y:40}, {x:-50,y:30}, {x:-50,y:20}, {x:-50,y:10}, {x:-50,y:0}, {x:-60,y:0}, {x:-70,y:0}, {x:-80,y:0}, {x:-90,y:0}, {x:-100,y:0}, {x:-110,y:0}, {x:-120,y:0}, {x:-130,y:0}, {x:-140,y:0}, {x:-150,y:0}, {x:-150,y:10}, {x:-150,y:20}, {x:-150,y:30}, {x:-150,y:40}, {x:-150,y:50}, {x:-150,y:60}, {x:-150,y:70}, {x:-150,y:80}, {x:-150,y:90}, {x:-150,y:100}, {x:-140,y:100}, {x:-130,y:100}, {x:-120,y:100}, {x:-110,y:100}, {x:-100,y:100}, {x:-90,y:100}, {x:-80,y:100}, {x:-70,y:100}, {x:-60,y:100}, {x:-50,y:100}, {x:-47,y:90}, {x:-44,y:81}, {x:-41,y:71}, {x:-38,y:62}, {x:-35,y:52}, {x:-31,y:43}, {x:-28,y:33}, {x:-25,y:24}, {x:-22,y:14}, {x:-19,y:5}, {x:-27,y:-1}, {x:-35,y:-7}, {x:-43,y:-13}, {x:-51,y:-19}, {x:-60,y:-24}, {x:-68,y:-30}, {x:-76,y:-36}, {x:-84,y:-42}, {x:-92,y:-48}, {x:-100,y:-54}, {x:-108,y:-48}, {x:-116,y:-42}, {x:-124,y:-36}, {x:-132,y:-30}, {x:-140,y:-24}, {x:-149,y:-19}, {x:-157,y:-13}, {x:-165,y:-7}, {x:-173,y:-1}, {x:-181,y:5}, {x:-178,y:14}, {x:-175,y:24}, {x:-172,y:33}, {x:-169,y:43}, {x:-165,y:52}, {x:-162,y:62}, {x:-159,y:71}, {x:-156,y:81}, {x:-153,y:90}, {x:-150,y:100}];
  }
}

class DibujandoCuevaEstalagtitas extends DibujandoFiguras {
  puntosEsperados(){
    return [{x:-150,y:100}, {x:-130,y:100}, {x:-110,y:100}, {x:-90,y:100}, {x:-70,y:100}, {x:-50,y:100}, {x:-30,y:100}, {x:-10,y:100}, {x:10,y:100}, {x:30,y:100}, {x:50,y:100}, {x:50,y:80}, {x:50,y:60}, {x:50,y:40}, {x:50,y:20}, {x:50,y:0}, {x:50,y:-20}, {x:50,y:-40}, {x:50,y:-60}, {x:50,y:-80}, {x:50,y:-100}, {x:30,y:-100}, {x:10,y:-100}, {x:-10,y:-100}, {x:-30,y:-100}, {x:-50,y:-100}, {x:-70,y:-100}, {x:-90,y:-100}, {x:-110,y:-100}, {x:-130,y:-100}, {x:-150,y:-100}, {x:-150,y:-80}, {x:-150,y:-60}, {x:-150,y:-40}, {x:-150,y:-20}, {x:-150,y:0}, {x:-150,y:20}, {x:-150,y:40}, {x:-150,y:60}, {x:-150,y:80}, {x:-150,y:100}, {x:-146,y:100}, {x:-142,y:100}, {x:-138,y:100}, {x:-134,y:100}, {x:-130,y:100}, {x:-126,y:100}, {x:-122,y:100}, {x:-118,y:100}, {x:-114,y:100}, {x:-110,y:100}, {x:-112,y:97}, {x:-114,y:93}, {x:-116,y:90}, {x:-118,y:86}, {x:-120,y:83}, {x:-122,y:79}, {x:-124,y:76}, {x:-126,y:72}, {x:-128,y:69}, {x:-130,y:65}, {x:-132,y:69}, {x:-134,y:72}, {x:-136,y:76}, {x:-138,y:79}, {x:-140,y:83}, {x:-142,y:86}, {x:-144,y:90}, {x:-146,y:93}, {x:-148,y:97}, {x:-150,y:100}, {x:-146,y:100}, {x:-142,y:100}, {x:-138,y:100}, {x:-134,y:100}, {x:-130,y:100}, {x:-126,y:100}, {x:-122,y:100}, {x:-118,y:100}, {x:-114,y:100}, {x:-110,y:100}, {x:-104,y:100}, {x:-98,y:100}, {x:-92,y:100}, {x:-86,y:100}, {x:-80,y:100}, {x:-74,y:100}, {x:-68,y:100}, {x:-62,y:100}, {x:-56,y:100}, {x:-50,y:100}, {x:-53,y:95}, {x:-56,y:90}, {x:-59,y:84}, {x:-62,y:79}, {x:-65,y:74}, {x:-68,y:69}, {x:-71,y:64}, {x:-74,y:58}, {x:-77,y:53}, {x:-80,y:48}, {x:-83,y:53}, {x:-86,y:58}, {x:-89,y:64}, {x:-92,y:69}, {x:-95,y:74}, {x:-98,y:79}, {x:-101,y:84}, {x:-104,y:90}, {x:-107,y:95}, {x:-110,y:100}, {x:-104,y:100}, {x:-98,y:100}, {x:-92,y:100}, {x:-86,y:100}, {x:-80,y:100}, {x:-74,y:100}, {x:-68,y:100}, {x:-62,y:100}, {x:-56,y:100}, {x:-50,y:100}, {x:-40,y:100}, {x:-30,y:100}, {x:-20,y:100}, {x:-10,y:100}, {x:0,y:100}, {x:10,y:100}, {x:20,y:100}, {x:30,y:100}, {x:40,y:100}, {x:50,y:100}, {x:45,y:91}, {x:40,y:83}, {x:35,y:74}, {x:30,y:65}, {x:25,y:57}, {x:20,y:48}, {x:15,y:39}, {x:10,y:31}, {x:5,y:22}, {x:0,y:13}, {x:-5,y:22}, {x:-10,y:31}, {x:-15,y:39}, {x:-20,y:48}, {x:-25,y:57}, {x:-30,y:65}, {x:-35,y:74}, {x:-40,y:83}, {x:-45,y:91}, {x:-50,y:100}];
  }
}


class DibujandoLibremente extends DibujandoFiguras {
  puntosEsperados(){
    return [];
  }
}
