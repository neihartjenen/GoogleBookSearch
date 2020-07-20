# **GoogleBookSearch**

google book search is a web application that allows the user to search any book they want, save it, and allow them to access more information.

The application:
* Allows the user to look up any title
    * It brings up 10 relevant books for the user to see
    * Each books shows 
        * The cover art
        * The Title
        * The author
        * A link to where they can get more information on the book
        * And a short description
* Allows the user to save any of these books shown 
    * saves them in our saved page
    * the user can then delete any of their saved books

**Functionality**

Our *GoogleBookSearch* uses a google book search api, and extracting and presenting certain data. If the user then decides to save a book, we make sure to take all of the presented data for that book and put it into the users database using mongoose.

This is our application in action: ![GoogleBookSearch GIF](gif/walkThrough.gif)

**NPM's required**
* react
* react-dom
* axios
* react-router-dom
* react-scripts
* express
* if-env
* mongod
* mongoose
* seed
