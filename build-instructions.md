# Building and Debugging

## Initial Setup
- install node.js if not already installed
- clone repo, then navigate to this folder in the shell (in VS Code, just open a terminal from this project and it will be in the right place)
- run ``npm install`` to get all dependencies installed

## For testing and debugging
- run ``npm run watch`` to run watchify, then start a server (I use the VS Code Live Server extension). Every time you save it will refresh.

## Before pushing to master
- The page itself is just running of of master, so every push to master on GitHub is publishing a version, so...
- run ``npm run build`` to create new build in /dist folder

Eventually we will want to minify build.js to make the code load faster, but so far that isn't happening. (I also want to remove the reliance on lodash and/or jquery, or at least one of them! That's a lot of code for a little project.)