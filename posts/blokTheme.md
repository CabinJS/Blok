{
  title: "Blok Theme",
  date:  "2013-7-2"
}

Blok is a blogging theme for [Cabin](http://cabinjs.com).

The theme's source code is located at the [Blok GitHub repository](https://github.com/CabinJS/Blok).

## Installation

To use Blok you must have [Node.js](http://nodejs.org/), [Python](http://www.python.org/) (for [Pygments](http://pygments.org/)), and [Compass](http://compass-style.org/) installed.

First install Cabin and Grunt globally with this command:

```bash
npm install -g cabin grunt-cli
```

Then scaffold a static site generator using the Blok theme with this command:

```bash
cabin new blog CabinJS/Blok
```

Now change into the `blog` directory and run the `grunt` command:

```bash
cd blog && grunt
```

This will build your site, start a static file server, open a browser tab with the site's homepage, and start a watch process to rebuild your site when source files change.

Try editing a markdown file in the `posts` folder or CSS in the `src/styles` folder and upon saving, your site will automatically be rebuilt with the updated content/styles. When you edit markdown, your browser will automatically refresh to view new content, and when editing styles, they will be injected directly into the page for an immediate update.

**Note: In the future, you can build your site by running the `grunt` command in the `blog` folder.**

## User Guide

### Expected files to edit

There are parts of the Blok theme which you are expected to edit when building your site. Here they are:

#### Layouts

You are expected to add your name to the nav home link in the [`src/layouts/base.jade`](https://github.com/CabinJS/Blok/blob/master/src/layouts/base.jade#L16) or [`src/layouts/_header.ejs`](https://github.com/CabinJS/Blok/blob/master/src/layouts/_header.ejs#L22) file. 

To get [Disqus](http://disqus.com/) setup, you must add your Disqus username to the [`src/layouts/_social.jade`](https://github.com/CabinJS/Blok/blob/master/src/layouts/_social.jade#L37) or [`src/layouts/_social.ejs`](https://github.com/CabinJS/Blok/blob/master/src/layouts/_social.ejs#L42) file. There are also placeholder comments for Google Analytics scripts in the [`src/layouts/base.jade`](https://github.com/CabinJS/Blok/blob/master/src/layouts/base.jade#L45) and [`src/layouts/_footer.ejs`](https://github.com/CabinJS/Blok/blob/master/src/layouts/_footer.ejs#L10) files.

#### Pages

You are expected to edit the `src/pages/about.(jade/ejs)` and `src/pages/projects.(jade/ejs)` pages to describe yourself and your projects.

#### Posts

You are expected to edit the default posts and add your own metadata and content.

### Authoring Posts

Blok generates pages using markdown posts in the `posts` folder. It expects markdown posts to contain two required metadata properties:

#### title
Type: `String`

Title of the post which is also used as its url.

#### date
Type: `String`

DateString which is parsed and displayed as the publishing date of the post.

To learn more about post metadata, check out [grunt-pages](https://github.com/CabinJS/grunt-pages#authoring-posts).

### Included libraries/tools

#### normalize.css

[Normalize.css](https://github.com/CabinJS/Blok/blob/master/src/styles/_normalize.scss) is used to normalize styles across browsers.

#### jQuery

jQuery is used to toggle the touch optimized menu in [`src/scripts/main.js`](https://github.com/CabinJS/Blok/blob/master/src/scripts/main.js).

#### IcoMoon

Blok uses the [IcoMoon App](http://icomoon.io/app/) to generate icon fonts. By default it uses icons for social media and comments, but you can easily add and remove icons.

To alter the icons, go to [this](http://icomoon.io/app/) url, and click the below session icon in the bottom right and upload the `src/styles/IcoMoon Session.json` file.

<img src="http://i.imgur.com/7fmXyfF.png">

After updating the icons simply download them and replace the `fonts` folder inside the `src/styles` folder and replace the contents of `src/styles/_icon.scss` with `style.css`. You will also need to update the `src/styles/IcoMoon Session.json` by clicking `Store Session` after clicking the session icon to allow for future icon changes.

## RSS

If you would like to generate an RSS feed, check out grunt-pages' [RSS option](https://github.com/CabinJS/grunt-pages#rss) and add it to your grunt-pages config in Gruntfile.js.

## Markdown
Cabin supports [GitHub flavored Markdown](https://help.github.com/articles/github-flavored-markdown) for its static site generation. It has awesome features like:

### Syntax highlighted code blocks
```javascript
function praise (thing) {
  console.log(thing + ' is so great!');
}

praise('Blok');
```
### Linked headers(link on the left)
Link into specific sections of your posts.
