# tic-tac-toe

A game putting into practice new JavaScript skills

The biggest concept I learned about and put into practice was organizing code through factory functions and modules.
At the beginning of this project, I didn't design it properly to make the most of these JavaScript organizing structures.
One of the main reasons to use factory functions and modules is to make use of closures and to encapsulate data. With this
concept, it is possible to have private and public data within the objects. Not revealing private properties is most definitely
useful for security among other things. With the use of closures however, we need a way to set values of properties and access said,
modified properties. This is where getters and setters come in. I had a little trouble understanding this concept while building this project, but I was able to figure it out and even included some notes in the JavaScript that briefly contextualize these functions. The biggest benefit I noticed to using these organizational patterns was that adding new methods for more functionality was so easy. I just had to keep in mind which object the new method should be stored under.

On a side note, the UI of this project was inspired by the UI of the google tic tac toe game. In no way did I copy code from google,
I simply used their UI as inspiration for my project.

Here is a list of some future improvements I can make to this project:

1. Add animations to marker placements as well as to the winning/draw screen
2. build a CPU that plays against one player
