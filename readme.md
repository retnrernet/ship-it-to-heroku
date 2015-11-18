# Ship It to Heroku
[![Dependency Status](https://david-dm.org/brh55/ship-it-to-heroku.svg)](https://david-dm.org/brh55/ship-it-to-heroku)
![Bloody Fast](https://img.shields.io/badge/bloody-fast-EC5355.svg)

Deploy your static website to Heroku in less than a minute. It's that simple.
What an awesome way to demo a live site or showcasing some work!

## Requirements

  * [Heroku](https://www.heroku.com)

## How to Use
1. Fork this repository
2. Clone you forked repo

    `git clone https://yourforkedrepo.git`

3. Navigate to fork clone

    `cd to/you/fork-repo`

4. Delete example stuff in the `www` directory, and copy over your website files here. You must have an `index.html` file!
5. Stage your new files and commit your changes!

    `git add --all && git commit -m "Add my own static website"`

6. Push your changes to your repo!

    `git push origin master`

7. Go to your forked repo github page, and click the deploy button below! ![Llama Power](http://orig05.deviantart.net/fee3/f/2010/094/f/d/llama_walk_by_taquito143.gif)

    [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## If you have Node
You can use a convenience gulp task.

1. Clean out all example files in www

    `gulp clean`

## Check out this repo on Heroku!
https://ship-it-to-heroku.herokuapp.com/
