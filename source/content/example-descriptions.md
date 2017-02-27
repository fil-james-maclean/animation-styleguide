The metaphorical space
Left is the past or where you have been,
Right is the future or where you can go next,
Up and Down are above and below the current scroll position on the same page.

Towards the screen is higher up in the 3d space,
Away from the screen is lower down in the 3d space.
Both of these are achieved by scaling the object up or down as well as a slight movement up and down.


(fadeInScaleUp)
(fadeInScaleDown)
Modal

Enter
The modal comes from the page.
Animation used: fadeInScaleUp

Exit
If the modal is canceled it goes back to the page.
Animation used: fadeOutScaleDown

Execute
If the modal is 'resolved' i.e. if the call to action is clicked then the modal moves off the the right.


Toaster

Enter
The Toast moves across the middle of the page to draw attention to it
Animation used: fadeInLeft

Exit
There is no need to draw attention to the toasts departure so it simply fades out.
Animation used: fadeOut

Emphasis
If the users attention needs to be re-directed to the toast whilst it is already present on screen then it shakes.
Animation used: shake


Tooltip message

Enter
As the tooltip enters it suggests where it came from, in this case it came from the input field.
Animation used: fadeInDown

Exit
There is no need to draw attention to the tooltips departure so it simply fades out.
Animation used: fadeOut


Loading and progress
These rely less on metaphor as they are a

The inclusion of motion into a loading sate helps the user to feel reassured their inputs where received and the interface is responding. Without them the interface can look or feel broken leaving the users confused.

The examples inside the buttons use a bespoke set of movements to enter and exit.
The example of a card loading data is designed to give the impression that the white overlay and the spinner come down above the UI.
Animation used: fadeInScaleDown



When the total loading time is able to be know or accurately predicted and it is also above 5 seconds a loading animation that shows progress can give the user valuable information on what is going on.




The 'next' screen comes in from the right to reinforce the metaphor of past/present.

In effect there is an entrance and an exit happening in parallel with each movement, but they both happen at the same time to create a single movement.

The canvas movement is not one of the preset animations but it uses the same easing curve to control the acceleration.
