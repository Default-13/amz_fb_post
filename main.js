const { link } = require('fs');
let Feed = require('rss-to-json')

// creating empty array
var linkArray = []

let linkList = Feed.load('http://spendfish.com/rss.cfm', function(err, rss) {
   for(item of rss.items) {
    //    console.log(item.link)
        linkArray.push(item.link)
   }
   linkItem = linkArray[Math.floor(Math.random() * linkArray.length)];
})

