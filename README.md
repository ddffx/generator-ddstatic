# generator-ddstatic [![Build Status](https://secure.travis-ci.org/ddffx/generator-ddstatic.png?branch=master)](https://travis-ci.org/ddffx/generator-ddstatic)

A tool for generating static website scaffolds. Useful for building statc websites, web application prototypes quickly. I use it for developing HTML, CSS, JavaScript projects.

It is a generator for [Yeoman](http://yeoman.io).

#### How does this tool help:
- Quickly set up your dev site
- Update the project and regenerate the site in minutes
- Deploy on S3 in one click
- As a static site on s3 it could be viewed on various devices to test out design & user experience.
- During development see changes through live reload
- Use SASS as preprocessor
- Automatic Resource Optimization (minification, concatenation of js css and imgaes)
- Use partials & modules to create and maintain reusable parts of the site (header, navigation, sidebars, search widgets, ad components, tracking components)
- Supports Markdown for regular text / html content
- Ability to use JSON data to create Dynamic Web App Views like Table Views, List Views, Item Views. Later this JSON could be used as a basis of the data structure / format to be produced by  backend apis.

#### Platform:
- OSX
- Windows
- Linux

#### Technology:
- [NodeJS](http://nodejs.org/)
- [Grunt JS](http://gruntjs.com/)
- [Yeoman.IO](yeoman.io)
* [Bower](http://bower.io/)
* [Assemble](http://assemble.io/)

#### How it works
Make sure you have NodeJS, SASS, Grunt, Bower & Yeoman installed.

#### 1. Create your project dircetory
`mkdir myapp && cd $_`
#### 2. Inside the directory
`yo postatic`


## Getting Started
### Make sure you have Node and SASS installed in your computer

### Next Install Yeoman

```
$ npm install -g yo
```
### To install generator-ddstatic from npm, run:

```
$ npm install -g generator-ddstatic
```

Finally, initiate the generator:

```
$ yo ddstatic
```

# License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
