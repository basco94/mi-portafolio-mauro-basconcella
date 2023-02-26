let  modal  =  documento . getElementById ( 'miModal' ) ;
let  flex  =  documento . getElementById ( 'flex' ) ;
dejar  abrir  =  documento . getElementById ( 'abrir' ) ;
let  cerrar  =  documento . getElementById ( 'cerrar' ) ;

abrir _ addEventListener ( 'clic' ,  función ( ) {
    modales _ estilo _ mostrar  =  'bloquear' ;
} ) ;

cerrar _ addEventListener ( 'clic' ,  función ( ) {
    modales _ estilo _ mostrar  =  'ninguno' ;
} ) ;

ventana _ addEventListener ( 'clic' ,  función ( e ) {
    consola _ log ( p. ej . objetivo ) ;
    if ( p . ej . objetivo  ==  flex ) {
        modales _ estilo _ mostrar  =  'ninguno' ;
    }
} ) ;