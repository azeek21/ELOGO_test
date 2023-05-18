## Pure
A pure html, css, js version of the test task.
PREVIEW: [https:abdulaziz.codes/ELGO_test/pure](http://abdulaziz.codes/ELOGO_test/pure/)

I only used sass(scss) to scc compiler. <br/>
I just don't like repeatedly typing classnames. <br/>
Scss let's you avoid that by letting you nest classnames.<br/>

If you want to run locally:<br/>
DEV:
```
$ git clone https://github.com/azeek21/ELOGO_test.git
$ cd ELOGO_test/pure
$ npm run sass-dev
# open with any static html server you have.
# I will use simple python http.server for this
# NOTE: if you are using windows you might need to use python instead of python3
$ python3 -m http.server
```
sass-dev gives a better development experience with file maps for debugging in browser.  <br/>
Whereas, in production you want a smaller and compact build.<br/>
PROD: 
```
$ npm run sass-prod
```
