

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


$( document ).on( 'click', '.js-flipUp90-trigger', function( e ) {

     $( '.js-flipUp90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 flipUp90  is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-flipDown90-trigger', function( e ) {

     $( '.js-flipDown90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 flipDown90  is-hidden' );

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



$( document ).on( 'click', '.js-flipOutUp90-trigger', function( e ) {

     $( '.js-flipOutUp90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 flipOutUp90 is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-flipOutDown90-trigger', function( e ) {

     $( '.js-flipOutDown90-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-500 flipOutDown90 is-hidden' );

     } );

     e.preventDefault();

} );


$( document ).on( 'click', '.js-flipLeft180-trigger', function( e ) {

     $( '.js-flipLeft180-target' ).each( function() {

         if ( $( this ).hasClass( 'card__flipped' ) ) {
              $( this ).removeClass( 'delay-100 dur-500 flipLeft180 card__flipped' );
              $( this ).addClass( 'delay-100 dur-500 flipRight180' );
         } else {
             $( this ).removeClass( 'delay-100 dur-500 flipRight180' );
             $( this ).addClass( 'delay-100 dur-500 flipLeft180 card__flipped' );
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


$( document ).on( 'click', '.js-shake-trigger', function( e ) {

     $( '.js-shake-target' ).each( function() {

          $( this ).toggleClass( 'delay-100 dur-1200 shake' );

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
;(function( $ ){
var findModal = $( '.js-modal-target' );
var findOverlay = $( '.js-overlay-target' );

var modalEnterClasses = "delay-100 dur-500 fadeInScaleUp js-modal__is-open"
var modalExitClasses = "is-hidden delay-100 dur-400 fadeOutScaleDown js-modal__is-closed"
var modalExecuteClasses = "is-hidden delay-100 dur-400 fadeOutRight js-modal__is-closed"

var overlayEnterClasses = "delay-200 dur-400 fadeIn"
var overlayExitClasses = "delay-400 dur-200 fadeOut"

function clearButtonState() {
    $( '.js-enter-button, .js-exit-button, .js-emphasis-button, .js-execute-button' ).removeClass('disabled');
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
    $( '.js-modal-target' ).removeClass(modalExitClasses);
    $( '.js-modal-target' ).removeClass(modalExecuteClasses);
    $( '.js-modal-target' ).addClass(modalEnterClasses);

    $( '.js-overlay-target' ).removeClass(overlayExitClasses);
    $( '.js-overlay-target' ).addClass(overlayEnterClasses);

    clearButtonState();
    disableButton( '.js-enter-button' );
}

/*
Function to control the exit animation of the modal
*/
function exitModal() {
    $( '.js-modal-target' ).removeClass(modalEnterClasses);
    $( '.js-modal-target' ).addClass(modalExitClasses);

    $( '.js-overlay-target' ).removeClass(overlayEnterClasses);
    $( '.js-overlay-target' ).addClass(overlayExitClasses);

    clearButtonState();
    disableButton( '.js-exit-button, .js-execute-button' );
}

/*
Function to control the execution animation of the modal
*/
function executeModal() {
    $( '.js-modal-target' ).removeClass(modalEnterClasses);
    $( '.js-modal-target' ).addClass(modalExecuteClasses);

    $( '.js-overlay-target' ).removeClass(overlayEnterClasses);
    $( '.js-overlay-target' ).addClass(overlayExitClasses);

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


/* Toast example */
var toastEnterClasses = "delay-100 dur-500 fadeInRight js-toast__is-open"
var toastExitClasses = "is-hidden delay-100 dur-200 fadeOut js-toast__is-closed"
var toastEmphasisClasses = "dur-800 shake js-toast__is-open"
/*
Function to control the entrance animation of the Toast
*/
function enterToast() {
    $( '.js-toast-target' ).removeClass(toastExitClasses);
    $( '.js-toast-target' ).removeClass(toastEmphasisClasses);
    $( '.js-toast-target' ).addClass(toastEnterClasses);

    clearButtonState();
    disableButton( '.js-enter-button' );
}

/*
Function to control the exit animation of the Toast
*/
function exitToast() {
    $( '.js-toast-target' ).removeClass(toastEnterClasses);
    $( '.js-toast-target' ).removeClass(toastEmphasisClasses);
    $( '.js-toast-target' ).addClass(toastExitClasses);

    clearButtonState();
    disableButton( '.js-exit-button, .js-emphasis-button' );
}

function emphasisToast() {
    $( '.js-toast-target' ).removeClass(toastEnterClasses);
    $( '.js-toast-target' ).removeClass(toastExitClasses);
    $( '.js-toast-target' ).addClass(toastEmphasisClasses);

}


$( document ).on( 'click', '.js-toast-enter-trigger', function( event ) {
    $( '.js-toast-target' ).hasClass('js-toast__is-closed') ? enterToast() : false;
    event.preventDefault();
} );

$( document ).on( 'click', '.js-toast-exit-trigger', function( event ) {
    $( '.js-toast-target' ).hasClass('js-toast__is-open') ? exitToast() : false;
    event.preventDefault();
} );

$( document ).on( 'click', '.js-toast-emphasis-trigger', function( e ) {
     $( '.js-toast-target' ).hasClass('js-toast__is-open') ? emphasisToast() : false;
     e.preventDefault();
} );


/* Tooltip example */
var tooltipEnterClasses = "delay-100 dur-500 fadeInDown js-tooltip__is-open"
var tooltipExitClasses = "is-hidden delay-100 dur-200 fadeOut js-tooltip__is-closed"

function enterTooltip() {
    $( '.js-tooltip-target' ).removeClass(tooltipExitClasses);
    $( '.js-tooltip-target' ).addClass(tooltipEnterClasses);

    clearButtonState();
    disableButton( '.js-enter-button' );
}

function exitTooltip() {
    $( '.js-tooltip-target' ).removeClass(tooltipEnterClasses);
    $( '.js-tooltip-target' ).addClass(tooltipExitClasses);

    clearButtonState();
    disableButton( '.js-exit-button' );
}

$( document ).on( 'click', '.js-tooltip-enter-trigger', function( event ) {
    $( '.js-tooltip-target' ).hasClass('js-tooltip__is-closed') ? enterTooltip() : false;
    event.preventDefault();
} );

$( document ).on( 'click', '.js-tooltip-exit-trigger', function( event ) {
    $( '.js-tooltip-target' ).hasClass('js-tooltip__is-open') ? exitTooltip() : false;
    event.preventDefault();
} );

})( jQuery ); // close IIFE

$( document ).on( 'click', '.js-loading-btn-toggle', function( e ) {

     $( '.js-loading-btn-toggle' ).each( function() {

          $( this ).toggleClass( 'is-loading' );

     } );

     e.preventDefault();

} );

$( document ).on( 'click', '.js-loading-card-toggle', function( e ) {

     $( '.js-loading-card-target-overlay' ).toggleClass( 'dur-300 fadeIn is-hidden' );
     $( '.js-loading-card-target-loader' ).toggleClass( 'delay-200 dur-500 fadeInScaleDown' );

     e.preventDefault();

} );

js-loading-card-toggle
