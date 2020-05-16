### Web Crawler with Node.js and Cheerio.js

Create a web crawler using scraping techniques to extract the first 30 entries from https://news.ycombinator.com/ . You’ll only care about the title, a number of the order, the amount of comments and points for each entry.​

Filter all previous entries with more than five words in the title ordered by the amount of comments first.
Filter all previous entries with less than or equal to five words in the title ordered by points.

### Web crawler
A Web crawler, sometimes called a spider or spiderbot and often shortened to crawler, is an Internet bot that systematically browses the World Wide Web, typically for the purpose of Web indexing (web spidering). [https://en.wikipedia.org/wiki/Web_crawler](Web_crawler)  In addition to indexing the world wide web, crawling can also be used to gather data (known as web scraping).

## Pre-requisites

- Install Node v10.15.3
- We are using tool to scraping  [https://cheerio.js.org/](Cheerio.js)
- We are using Axios 


### Running the project
- Install project dependencies :
``` npm install ```
- Run the project:
``` npm start ```
- Run tests
```npm tests ```




