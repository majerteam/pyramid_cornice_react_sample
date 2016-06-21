import os

from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
with open(os.path.join(here, 'README.rst')) as f:
    README = f.read()
with open(os.path.join(here, 'CHANGES.rst')) as f:
    CHANGES = f.read()

requires = [
    'pyramid',
    'pyramid_chameleon',
    'pyramid_debugtoolbar',
    'waitress',
    'cornice',
    ]

setup(name='pyramid_cornice_react_sample',
      version='0.0',
      description='pyramid_cornice_react_sample',
      long_description=README + '\n\n' + CHANGES,
      classifiers=[
        "Programming Language :: Python",
        "Framework :: Pyramid",
        "Topic :: Internet :: WWW/HTTP",
        "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
        ],
      author='',
      author_email='',
      url='',
      keywords='web pyramid pylons',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      install_requires=requires,
      tests_require=requires,
      test_suite="pyramid_cornice_react_sample",
      entry_points="""\
      [paste.app_factory]
      main = pyramid_cornice_react_sample:main
      [console_scripts]
      pyramid_cornice_react_sample_clone = pyramid_cornice_react_sample.scripts:pyramid_cornice_react_sample_clone
      """,
      )
