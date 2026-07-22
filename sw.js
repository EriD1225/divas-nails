/* Divas Nails · trabajadora de servicio: deja la aplicación disponible sin conexión */
var CACHÉ='divas-nails-v3';
var ARCHIVOS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-180.png'];
auto.addEventListener('instalar',función(e){
  e.esperaHasta(cachés.abierto(CACHÉ).entonces(función(c){retorno c.agregar todo(ARCHIVOS);}).entonces(función(){retorno auto.saltarEsperando();}));
});
auto.addEventListener('activar',función(e){
  e.esperaHasta(cachés.llaves().entonces(función(ks){
    retorno Promesa.todos(ks.filtro(función(k){retorno k!==CACHÉ;}).mapa(función(k){retorno cachés.eliminar(k);}));
  }).entonces(función(){retorno auto.clientes.reclamar();}));
});
auto.addEventListener('buscar',función(e){
  var req=e.solicitud;
  var url=nuevo URL(req.url);
  si(req.método!=='OBTENER' || url.origen!==auto.ubicación.origen){ retorno; }
  e.responderCon(
    cachés.partido(req,{ignorarBuscar:verdadero}).entonces(función(r){
      si(r) retorno r;
      retorno fetch(req).entonces(función(res){
        var cp=res.clon();
        cachés.abierto(CACHÉ).entonces(función(c){ intentar{ c.put(req,cp); }atrapar(err){} });
        retorno res;
      }).atrapar(función(){ retorno cachés.partido('./index.html'); });
    })
  );
});
