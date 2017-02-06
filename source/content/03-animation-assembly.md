## Commonly animated properties
*UI animation changes one or more of these things over time. There are others but this covers most cases*

### Motion
movements and rotations about the interface
[example - square moving left and right]

### Scale
Growing larger or smaller
[example - square growing larger and smaller]

### Opacity
Changing between transparent and opaque
[example - square fading in and out]

### Colour
Changing hue and brightness
[example - square changing red, green and blue]

### 3d rotations
Rotating an object in its 3d space or changing the view of the space
[example - cube rotating then stopping to show a face]


### Staging
Where do you want the user to look?
https://www.youtube.com/watch?v=u-SXLaQGg50

### Duration
How long should the animation be?
*Roughly:*
- Small things 3-600ms
- Big things 8-1600ms
Detailed article on UI animation durations and delays
http://valhead.com/2016/05/05/how-fast-should-your-ui-animations-be/

### Easing
What is the velocity and weight of this object?
https://www.youtube.com/watch?v=fQBFsTqbKhY

### metaphorical 3d space
[Image of sketch]
Hold on to this metaphor for as long as it works but drop it when necessary.
For example a modal may appear to come up from the button that triggered it but once the question of that dialogue is resolved it may as well fade out or move swiftly away.


## Our categories of animation (the four E's)
*These serve as a checklist to make sure all likely situations that need animation are covered*

1. Enter
Add something too the screen

2. Exit
Remove something from the screen

3. Emphasis
Draw attention to something already on screen

4. Execute
Change in response to a users' input


## Examples of the different categories of animation relevant to different UI patterns

|                         |  Enter  |  Exit  |  Emphasis  |  Execute  |
|:------------------------|:-------:|:------:|:----------:|:---------:|
|  Modal                  |    x    |   x    |            |     x     |
|  Tooltip                |    x    |   x    |            |           |
|  Dropdown               |    x    |   x    |            |     x     |
|  Messages               |    x    |   x    |     x      |           |
|  Tabs scrolling         |         |        |            |     x     |
|  Toaster popup          |    x    |   x    |     x      |           |
|  Charts                 |    x    |        |     x      |           |
|  Confirmation messages  |    x    |        |            |           |
|  Expand and Collapse    |         |        |            |     x     |
|  Buttons                |         |        |            |     x     |
|  CTA                    |         |        |            |     x     |
|  Buy buttons            |         |        |            |     x     |
