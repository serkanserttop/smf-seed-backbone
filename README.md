# smf-seed-backbone
This repo is a very simple setup to get up and running with Smartface Applications using Backbone. 

It watches files and builds them into a single file that can be fed into a Smartface application.

You can use it with a project like [Backbone App](https://github.com/serkanserttop/smf-backbone-app) to develop mobile apps quickly without the compile cycle.

You should have installed Gulp and Bower globally and run `npm install` and `bower install`.

Then in two separate terminals, run `npm start` and `gulp watch`.

We added `underscore` and `backbone` bower dependencies to `bower.json` file.

Whenever you save your changes under the `smf` folder, gulp will combine all the files into `dist/main.js` file.

Exit your app and re-enter again from your device.

Your app will be updated with the new file.