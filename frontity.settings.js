const settings = {
  "name": "mjg-frontity",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Meet John Gray",
      // "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Blog",
              "/"
            ],
            [
              "Writing Portfolio",
              "/writing-portfolio%e2%80%8b/"
            ],
            [
              "Images",
              "/images/"
            ],
            [
              "About",
              "/about/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://meetjohngray.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
