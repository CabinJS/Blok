'use strict';

var spawn = require('child_process').spawn;
var fs = require('fs');

require('should');
var wrench = require('wrench');

describe('Blok theme', function () {

  var JadeSiteName = 'testJadeSite';

  before(function () {
    if (fs.existsSync(JadeSiteName)) {
      wrench.rmdirSyncRecursive(JadeSiteName);
    }
  });

  after(function () {
    wrench.rmdirSyncRecursive(JadeSiteName);
  });

  // To speed up testing in development, copy the node_modules from the theme
  // rather than installing each time from npm
  var noInstall = process.env.NODE_ENV === 'dev' ? '--noInstall' : '';

  it('should generate a site when installed with Cabin using the Jade template engine', function (done) {
    var cabinProcess = spawn('node', ['node_modules/cabin/bin/cabin', 'new', JadeSiteName, '.', '--local', '--templateEngine', 'Jade', noInstall]);
    cabinProcess.on('close', function () {
      if (noInstall) {
        wrench.copyDirSyncRecursive('node_modules', JadeSiteName + '/node_modules');
      }
      var gruntBuildProcess = spawn('grunt', ['build'], {
        cwd: JadeSiteName
      });

      gruntBuildProcess.on('close', function () {
        fs.existsSync(JadeSiteName + '/dist/index.html').should.be.ok;
        fs.existsSync(JadeSiteName + '/dist/posts/my-cool-blog-post/index.html').should.be.ok;
        fs.existsSync(JadeSiteName + '/dist/styles/main.css').should.be.ok;
        done();
      });
    });
  });
});
