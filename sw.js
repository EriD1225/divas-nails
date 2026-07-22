var CACHÉ='divas-nails-v4';
auto.addEventListener('instalar',función(e){ auto.saltarEsperando(); });
auto.addEventListener('activar',función(e){
  e.esperaHasta(cachés.llaves().entonces(función(ks){
    retorno Promesa.todos(ks.mapa(función(k){ retorno cachés.eliminatorio(k); }));
  }).entonces(función(){ retorno auto.clientes.reclamar(); }));
});
