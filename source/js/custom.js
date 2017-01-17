
$( document ).on( 'click', '.js-trigger1', function( e ) {

     $( '.js-target1' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeIn fil-ani-is-hidden' );

     } );

     e.preventDefault();

 } );


$( document ).on( 'click', '.js-trigger2', function( e ) {

    $( '.js-target2' ).each( function() {

         $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-fadeInUp fil-ani-is-hidden' );

    } );

    e.preventDefault();

} );


$( document ).on( 'click', '.js-trigger3', function( e ) {

     $( '.js-target3' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeInLeft fil-ani-is-hidden' );

     } );

     e.preventDefault();

 } );


 $( document ).on( 'click', '.js-trigger4', function( e ) {

      $( '.js-target4' ).each( function() {

           $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeInRight fil-ani-is-hidden' );

      } );

      e.preventDefault();

} );
