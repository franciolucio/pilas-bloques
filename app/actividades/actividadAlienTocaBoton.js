/*

siguienteFila(){
 this.robot.hacer_luego(avanzarFilaEnCuadriculaMultiple,{'cuadriculaMultiple':this.cuadricula})
}*/

import bloques from 'pilas-engine-bloques/actividades/bloques';
import direcciones from 'pilas-engine-bloques/actividades/direccionesCuadricula';
var {Accion} = bloques;


//import comer from 'pilas-engine-bloques/actividades/comer';

var {IrDerecha} = direcciones;

var ApretarBoton = Accion.extend({
  init() {
    this._super();
    this.set('id', 'ApretarBoton');
  },


  block_init(block) {
    this._super(block);
    block.appendDummyInput()
         .appendField('Apretar ')
         .appendField(this.obtener_icono('../libs/data/iconos.botonRojo.png'));
  },



  nombre_comportamiento() {
    return 'DesencadenarAnimacionDobleSiColiciona';
  },

  argumentos() {
    return '{\'idAnimacion\':\'prendida\',\'idAnimacionReceptor\':\'apretar\',\'etiqueta\':\'BotonAnimado\',\'mensajeError\': \'No hay un botón aquí\'}';

  }
});

var actividadAlienTocaBoton = {
  nombre: 'Futbol de robots',
  enunciado: 'Ayudá a nuestro robot',

  // la escena proviene de ejerciciosPilas
  escena: AlienInicial, // jshint ignore:line
  puedeComentar: false,
  puedeDesactivar: false,
  puedeDuplicar: false,
  subtareas: [],

  // TODO: aca irian atributos iniciales que se desean para un personaje
  variables: [],
  control: [],
  expresiones: [],
  acciones: [IrDerecha,ApretarBoton],
  sensores: [],
};

export default actividadAlienTocaBoton;