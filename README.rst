Test app with pyramid_starter_seed + cornice + reactjs
========================================================

This is a Pyramid starter seed based project integrating the Yeoman workflow (concat and minification assets, grunt-uncss, cdnify-scripts and more).

Prerequisites
-------------

* Nodejs (you can manage and install different node versions using NVM)
* python virtualenv
* Pyramid
* Cornice

Installation
------------

Open your shell and digit::

    $ git clone git@github.com:majerteam/pyramid_cornice_react_sample.git
    $ cd pyramid_cornice_react_sample
    $ YOUR_VIRTUALENV_PYTHON_PATH/bin/python setup.py develop
    $ cd pyramid_cornice_react_sample/webapp
    $ bower install
    $ npm install


How to run
----------

Come back to the first level dir of pyramid_starter_seed (where .ini file lives)::

    $ cd ../..

Devel mode::

    $ YOUR_VIRTUALENV_PYTHON_PATH/bin/pserve development.ini

Production mode::

    $ YOUR_VIRTUALENV_PYTHON_PATH/bin/pserve production.ini

More informations there (creating a new pyramid scaffold ... ):
https://github.com/davidemoro/pyramid_starter_seed/

Links about this scaffold
--------------------------

* http://davidemoro.blogspot.com/2014/09/pyramid-starter-seed-yeomam-part-1.html
* http://davidemoro.blogspot.com/2014/09/pyramid-starter-seed-yeoman-part-2.html
* http://davidemoro.blogspot.com/2014/09/pyramid-starter-seed-yeoman-part-3.html
