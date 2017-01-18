
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

$( document ).on( 'click', '.js-trigger5', function( e ) {

     $( '.js-target5' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipUp90  fil-ani-is-hidden' );

     } );

     e.preventDefault();

} );

$( document ).on( 'click', '.js-trigger6', function( e ) {

     $( '.js-target6' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipDown90  fil-ani-is-hidden' );

     } );

     e.preventDefault();

} );
//
// $( document ).on( 'click', '.js-trigger7', function( e ) {
//
//      $( '.js-target7' ).each( function() {
//
//           $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipLeft180' );
//
//      } );
//
//      e.preventDefault();
//
// } );


$( document ).on( 'click', '.js-trigger8', function( e ) {

     $( '.js-target8' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeOut fil-ani-is-hidden' );

     } );

     e.preventDefault();

 } );

$( document ).on( 'click', '.js-trigger9', function( e ) {

  $( '.js-target9' ).each( function() {

       $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeOutDown fil-ani-is-hidden' );

  } );

  e.preventDefault();

} );


$( document ).on( 'click', '.js-trigger10', function( e ) {

     $( '.js-target10' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeOutLeft fil-ani-is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-trigger11', function( e ) {

     $( '.js-target11' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-300 fil-ani-fadeOutRight fil-ani-is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-trigger12', function( e ) {

     $( '.js-target12' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipOutUp90 fil-ani-is-hidden' );

     } );

     e.preventDefault();

} );

$( document ).on( 'click', '.js-trigger13', function( e ) {

     $( '.js-target13' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipOutDown90 fil-ani-is-hidden' );

     } );

     e.preventDefault();

} );

$( document ).on( 'click', '.js-trigger14', function( e ) {

     $( '.js-target14' ).each( function() {

         if ( $( this ).hasClass( 'fil-ani-card__flipped' ) ) {
              $( this ).removeClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipLeft180 fil-ani-card__flipped' );
              $( this ).addClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipRight180' );
         } else {
             $( this ).removeClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipRight180' );
             $( this ).addClass( 'fil-ani-delay-100 fil-ani-dur-500 fil-ani-FlipLeft180 fil-ani-card__flipped' );
         }
     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-trigger15', function( e ) {

     $( '.js-target15' ).each( function() {

          $( this ).toggleClass( 'fil-ani-delay-100 fil-ani-dur-1000 fil-ani-PulseScale' );

     } );

     e.preventDefault();

} );
