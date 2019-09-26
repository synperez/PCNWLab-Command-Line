/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:

//Downloaded zip
//Unziped PCNWLab-Command-Line-master.zip
cd Downloads
mv PCNWLab-Command-Line-master ../Desktop/
cd ..
cd Desktop
cd PCNWLab-Command-Line-master/
mv stuff pset2
mkdir assets
cd assets
mkdir images
mkdir memes
mkdir src
mv amazon.jpg assets/
mv hello.html assets/
mv twitter.png assets/
mv meme.jpg assets/
mv google.jpg assets/
mv app.js assets/
mv foo.js assets/
mv facebook.png assets/
cd assets
mv twitter.png images/
mv facebook.png images/
mv google.jpg images/
mv amazon.jpg images/
mv meme.jpg memes/
code .
//changed "SOME_CLASS" to "Full Stack: Nights & Weekends". Saved it.





~/Desktop/pset2
    /assets
        /images
            amazon.jpg
            facebook.png
            google.jpg
            twitter.png
        /memes
            meme.jpg
        /src
            foo.js
    app.js
    hello.html

4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.

5. You should have the following commits:
- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/
