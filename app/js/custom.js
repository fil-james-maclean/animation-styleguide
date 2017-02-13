

$( document ).on( 'click', '.js-fadeIn-trigger', function( e ) {

     $( '.js-fadeIn-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-300 fadeIn is-hidden' );

     } );

     e.preventDefault();

 } );



$( document ).on( 'click', '.js-fadeInScaleUp-trigger', function( e ) {

    $( '.js-fadeInScaleUp-target' ).each( function() {

         $( this ).toggleClass( 'delay-100 dur-500 fadeInScaleUp is-hidden' );

    } );

    e.preventDefault();

} );



$( document ).on( 'click', '.js-fadeInScaleDown-trigger', function( e ) {

    $( '.js-fadeInScaleDown-target' ).each( function() {

         $( this ).toggleClass( 'delay-100 dur-500 fadeInScaleDown is-hidden' );

    } );

    e.preventDefault();

} );



$( document ).on( 'click', '.js-fadeInUp-trigger', function( e ) {

    $( '.js-fadeInUp-target' ).each( function() {

         $( this ).toggleClass( 'delay-100 dur-300 fadeInUp is-hidden' );

    } );

    e.preventDefault();

} );



$( document ).on( 'click', '.js-fadeInDown-trigger', function( e ) {

    $( '.js-fadeInDown-target' ).each( function() {

         $( this ).toggleClass( 'delay-100 dur-300 fadeInDown is-hidden' );

    } );

    e.preventDefault();

} );



$( document ).on( 'click', '.js-fadeInLeft-trigger', function( e ) {

     $( '.js-fadeInLeft-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-300 fadeInLeft is-hidden' );

     } );

     e.preventDefault();

 } );



 $( document ).on( 'click', '.js-fadeInRight-trigger', function( e ) {

      $( '.js-fadeInRight-target' ).each( function() {

           $( this ).toggleClass( 'delay-100 dur-300 fadeInRight is-hidden' );

      } );

      e.preventDefault();

} );


$( document ).on( 'click', '.js-FlipUp90-trigger', function( e ) {

     $( '.js-FlipUp90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 FlipUp90  is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-FlipDown90-trigger', function( e ) {

     $( '.js-FlipDown90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 FlipDown90  is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-fadeOut-trigger', function( e ) {

     $( '.js-fadeOut-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-300 fadeOut is-hidden' );

     } );

     e.preventDefault();

 } );


$( document ).on( 'click', '.js-fadeOutScaleDown-trigger', function( e ) {

  $( '.js-fadeOutScaleDown-target' ).each( function() {

       $( this ).toggleClass( 'delay-100 dur-300 fadeOutScaleDown is-hidden' );

  } );

  e.preventDefault();

} );


$( document ).on( 'click', '.js-fadeOutScaleUp-trigger', function( e ) {

  $( '.js-fadeOutScaleUp-target' ).each( function() {

       $( this ).toggleClass( 'delay-100 dur-300 fadeOutScaleUp is-hidden' );

  } );

  e.preventDefault();

} );


$( document ).on( 'click', '.js-fadeOutUp-trigger', function( e ) {

  $( '.js-fadeOutUp-target' ).each( function() {

       $( this ).toggleClass( 'delay-100 dur-300 fadeOutUp is-hidden' );

  } );

  e.preventDefault();

} );


$( document ).on( 'click', '.js-fadeOutDown-trigger', function( e ) {

  $( '.js-fadeOutDown-target' ).each( function() {

       $( this ).toggleClass( 'delay-100 dur-300 fadeOutDown is-hidden' );

  } );

  e.preventDefault();

} );



$( document ).on( 'click', '.js-fadeOutLeft-trigger', function( e ) {

     $( '.js-fadeOutLeft-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-300 fadeOutLeft is-hidden' );

     } );

     e.preventDefault();

} );



$( document ).on( 'click', '.js-fadeOutRight-trigger', function( e ) {

     $( '.js-fadeOutRight-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-300 fadeOutRight is-hidden' );

     } );

     e.preventDefault();

} );



$( document ).on( 'click', '.js-FlipOutUp90-trigger', function( e ) {

     $( '.js-FlipOutUp90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 FlipOutUp90 is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-FlipOutDown90-trigger', function( e ) {

     $( '.js-FlipOutDown90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 FlipOutDown90 is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-FlipLeft180-trigger', function( e ) {

     $( '.js-FlipLeft180-target' ).each( function() {

         if ( $( this ).hasClass( 'card__flipped' ) ) {
              $( this ).removeClass( 'delay-100 dur-500 FlipLeft180 card__flipped' );
              $( this ).addClass( 'delay-100 dur-500 FlipRight180' );
         } else {
             $( this ).removeClass( 'delay-100 dur-500 FlipRight180' );
             $( this ).addClass( 'delay-100 dur-500 FlipLeft180 card__flipped' );
         }
     } );

     e.preventDefault();

} );



$( document ).on( 'click', '.js-PulseScale-trigger', function( e ) {

     $( '.js-PulseScale-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-1000 PulseScale' );

     } );

     e.preventDefault();

} );



$( document ).on( 'click', '.js-PulseOutline-trigger', function( e ) {

     $( '.js-PulseOutline-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-300 PulseOutline' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-Shake-trigger', function( e ) {

     $( '.js-Shake-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-1200 Shake' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-Spotlight-trigger', function( e ) {

     $( '.js-Spotlight-target' ).each( function() {

          $( this ).toggleClass( 'Spotlight' );
          $( '.js-overlay-target' ).toggleClass( 'delay-100 dur-400 fadeIn' );

     } );

     e.preventDefault();

} );


/* Modal Animations */

var $modal = $( '.js-modal-target' );
var $overlay = $( '.js-overlay-target' );

var modalEnterClasses = "delay-100 dur-500 fadeInScaleUp js-modal__is-open"
var modalExitClasses = "is-hidden delay-100 dur-300 fadeOutScaleDown js-modal__is-closed"
var modalExecuteClasses = "is-hidden delay-100 dur-300 fadeOutRight js-modal__is-closed"

var overlayEnterClasses = "dur-400 fadeIn"
var overlayExitClasses = "dur-200 fadeOut"

function clearButtonState() {
    $( '.js-enter-button, .js-exit-button, .js-execute-button' ).removeClass('disabled');
}

function disableButton( $sel ) {
    $( $sel ).addClass( 'disabled' );
}

// function disableButton2( $sel, fN ) {
//     $( $sel ).addClass( 'disabled' );
//     fN == false ? console.log('no functions called') : fN();
// }
//
// disableButton2( '.myThing', clearButtonState );

function enableButton( $sel ) {
    $( $sel ).removeClass( 'disabled' );
}

/*
Function to control the entrance animation of the modal
*/
function enterModal() {
    $modal.removeClass(modalExitClasses);
    $modal.removeClass(modalExecuteClasses);
    $modal.addClass(modalEnterClasses);

    $overlay.removeClass(overlayExitClasses);
    $overlay.addClass(overlayEnterClasses);

    clearButtonState();
    disableButton( '.js-enter-button' );
}

/*
Function to control the exit animation of the modal
*/
function exitModal() {
    $modal.removeClass(modalEnterClasses);
    $modal.addClass(modalExitClasses);

    $overlay.removeClass(overlayEnterClasses);
    $overlay.addClass(overlayExitClasses);

    clearButtonState();
    disableButton( '.js-exit-button, .js-execute-button' );
}

/*
Function to control the execution animation of the modal
*/
function executeModal() {
    $modal.removeClass(modalEnterClasses);
    $modal.addClass(modalExecuteClasses);

    $overlay.removeClass(overlayEnterClasses);
    $overlay.addClass(overlayExitClasses);

    clearButtonState();
    disableButton( '.js-exit-button, .js-execute-button' );
}

/* button handlers */
$( document ).on( 'click', '.js-modal-enter-trigger', function( event ) {
    $( '.js-modal-target' ).hasClass('js-modal__is-closed') ? enterModal() : false;
    event.preventDefault();
} );

$( document ).on( 'click', '.js-modal-exit-trigger', function( event ) {
    $( '.js-modal-target' ).hasClass('js-modal__is-open') ? exitModal() : false;
    event.preventDefault();
} );

$( document ).on( 'click', '.js-modal-execute-trigger', function( e ) {
     $( '.js-modal-target' ).hasClass('js-modal__is-open') ? executeModal() : false;
     e.preventDefault();
} );
