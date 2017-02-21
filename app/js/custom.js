

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



$( document ).on( 'click', '.js-loading-btn-toggle', function( e ) {

     $( '.js-loading-btn-toggle' ).each( function() {

          $( this ).toggleClass( 'is-loading' );

     } );

     e.preventDefault();

} );

$( document ).on( 'click', '.js-loading-btn-medium-toggle', function( e ) {

     $( '.js-loading-btn-medium-toggle' ).each( function() {

          $( this ).addClass( 'is-loading' );
            function endLoading(){
             $( '.js-loading-btn-medium-toggle' ).removeClass( 'is-loading' );
            }
            setTimeout(endLoading, 6000);

     } );

     e.preventDefault();

} );

$( document ).on( 'click', '.js-loading-card-toggle', function( e ) {

     $( '.js-loading-card-target-overlay' ).toggleClass( 'dur-300 fadeIn is-hidden' );
     $( '.js-loading-card-target-loader' ).toggleClass( 'delay-200 dur-500 fadeInScaleDown' );

     e.preventDefault();

} );

;(function( $ ){

    $( document ).ready(function() {


        var progressOverlayEnterClasses = "delay-100 dur-300 fadeIn"
        var progressOverlayExitClasses = "is-hidden delay-100 dur-500 fadeOut"

        var progressLoaderEnterClasses = "delay-600 dur-300 fadeInLeft"


        // Show the overlay then start the progress animation
        function startprogressLoader() {

            setTimeout( function() {
                $( '.js-progress-overlay' ).removeClass(progressOverlayExitClasses);
                $( '.js-progress-overlay' ).addClass(progressOverlayEnterClasses);

                $( '.progressLoader').removeClass( 'is-right' );


                setTimeout(  function() {
                    to90();
                    animateDots();
                    changeText(6000);
                }, 600 );


                // Class might not be needed
                $( 'html' ).addClass( 'no-scroll' );

            }, 150 );
            clearButtonState();
            disableButton( '.js-enter-button' );
        };


        function overlayFadeOut() {
            // Hides the overlay
            $( '.js-progress-overlay' ).removeClass(progressOverlayEnterClasses);
            $( '.js-progress-overlay' ).addClass(progressOverlayExitClasses);

            // A simulation of the photograph trasnitioning into the darker version
            // $( '.bg-after-img' ).fadeIn( 250 );
            //
            // // A simulation of existing functionality with a more refined animation.
            // $( '.bg-loginform-img' ).addClass( 'is-left' );
            // $( '.bg-summary-img' ).removeClass( 'is-right' );

            // Class might not be needed
            $( 'html' ).removeClass( 'no-scroll' );
            setTimeout(  function() {
                resetLoader();
            }, 700 );



            // This is importaint, it kills a loop that will otherwise just keep going forever.
            dotsIsAnimating = false;

        };
        function resetLoader() {
            circle.set(0.0);
            circle.setText(0);
            $(".js-progresstext--string").text('Loading');
            // $(".progressLoader--percentage").text('0');
            clearButtonState();
            disableButton( '.js-exit-button' );
        }

        // Animates the dots
        // If nothing else happens this will stop the app looking broken
        // http://jsfiddle.net/Ty4gt/

        var dotsIsAnimating = true;
        function animateDots() {
            dotsIsAnimating = true;
            var dotCount = 0;

            function addDots(){
                if (dotsIsAnimating==true) {
                    dotCount++;
                    $('.js-progresstext--dots').text( new Array(dotCount % 5).join('.') );

                    // importaint to know if this is still going
                    // console.log("dot+");
                }
                else {
                    clearInterval(dotId);
                    dotCount = 0;

                    // confirms this has stoped
                    // console.log("dot STOP");
                }
            };

            var dotId = setInterval(addDots, 400 );
        };

        // This is a simulation of the backend changing the text.

        function changeText(l) {
            var animateTxt = 0;
            var progressUpdates = [
                "Checking your login details",
                "Loading your account information",
                "Fetching investment valuations"
            ];
            var progressUpdatesLen = progressUpdates.length;
            var findProgressTxt = $(".js-progresstext--string");

            function frame() {
                animateTxt++

                findProgressTxt.text( progressUpdates[animateTxt-1] );
                if (animateTxt == progressUpdatesLen) {
                    clearInterval(id);

                }
            };
            var id = setInterval(frame, l/progressUpdatesLen );
        };

        // In reality the text will change in response to a message from the back end.
        function giveProgressUpdate(message) {
                $(".progresstext--string").text(message);
        };


        // a Simple bar width animation with no Jquery
        function jswidth(animationLength) {
            var animateWidth = 0;
            var findBar =  document.getElementById("bar-id");
            var findBarLable = document.getElementById("bar-lable-id");
            function frame() {
                animateWidth++
                findBarLable.innerHTML = animateWidth + '%';
                findBar.style.width = animateWidth + '%';
                if (animateWidth == 100) {
                    clearInterval(id);
                    overlayFadeOut();
                }
            };
            var id = setInterval(frame, (animationLength/99) );
        };







         // Tweenable.setBezierFunction ( easeEnd, 0.770, 0.900, 0.815, 0.995) ;
        var circle = new ProgressBar.Circle('.js-progressLoader--circle', {
            // filled color is blue1
            color: '#006193',
            // unfilled/background color is grey15
            trailColor: '#d9d9d9',
            // If greater than 6, will break in IE
            strokeWidth: 6,
            duration: 2500,
            easing: 'linear',
            text: {
                // Initial value for text.
                // Default: null
                value: '0',

                // Class name for text element.
                // Default: 'progressbar-text'
                className: 'progressLoader--percentage',

                // Inline CSS styles for the text element.
                // If you want to modify all CSS your self, set null to disable
                // all default styles.
                // If the style option contains values, container is automatically
                // set to position: relative. You can disable behavior this with
                // autoStyleContainer: false
                // If you specify anything in this object, none of the default styles
                // apply
                // Default: object speficied below
                style: null,

                // Only effective if the text.style is not null
                // By default position: relative is applied to container if text
                // is set. Setting this to false disables that feature.
                autoStyleContainer: true,

                // Only effective if the shape is SemiCircle.
                // If true, baseline for text is aligned with bottom of
                // the SVG canvas. If false, bottom line of SVG canvas
                // is in the center of text.
                // Default: true
                alignToBottom: false
            }
        });




        // only whole numbers in the UI
        var updatePercentage = function(){
            circle.setText( Math.round( circle.value() * 100) );
        }

        // First part of the animation
        function to90() {

            circle.animate(
                0.9, {
                    duration: 7000,
                    step: updatePercentage
                }, function() {
                    to99slow();
            });

        };

        // Second part of the animation has a slower speed
        function to99slow() {

            circle.animate(0.99, {
                duration: 6000,
                easeing: 'easeOutExpo',
                step: updatePercentage
            });

        };


        // Advances the animation to the end.
        // This should be done AFTER the UI for the next screen is ready
        function endprogressLoader() {

            circle.animate(1.0, {
                duration: 800,
                easing: 'easeOutExpo',
                step: updatePercentage
            }, function() {

                window.scrollTo(0, 0);
                overlayFadeOut();
            });

        };





        // DEMO buttons simulation buttons other events

        // Simple progress bar start
        $( document ).on( 'click', '.js-animate-bar-width', function( e ) {
            // simpleBarTo99()
            jswidth(8000);
            animateDots();
            changeText(6000);
            e.preventDefault();
        });

        // simulates a sucsessful submission of the login form
        $( document ).on( 'click', '.js-progress-enter-trigger', function( e ) {
            startprogressLoader();
            e.preventDefault();
        });

        // simulates the account summary area ready
        $( document ).on( 'click', '.js-progress-exit-trigger', function( e ) {
            endprogressLoader();
            e.preventDefault();
        });

    });
})( jQuery ); // close IIFE
