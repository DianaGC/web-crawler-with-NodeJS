const cheerio = require('cheerio');

const filterDataFromURL = html => {
    let data =[];
    const $ = cheerio.load(html);
    const statsTableData = $('.itemlist > tbody');
    let title = statsTableData.find('tr:not(.spacer):nth-child(-n+90)').text();
    console.log(title)
    data.push(title)
    return  data;  
};

const createObjectFromDataFilter = html =>{
    let titles = [];
    let points = [];
    let comments =[];
    let dataObjList = [];
    const $ = cheerio.load(html);
    const statsTableData = $('.itemlist > tbody > tr:not(.spacer):nth-child(-n+90)');

    statsTableData.each(function() {
        $(this).find('td.title > a.storylink').text() ? titles.push({"title":$(this).find('td.title > a.storylink').text()}):'';
        $(this).find('.score').text() ? points.push({"point":$(this).find('.score').text()}):'';
        $(this).find('.subtext > a:last-child').text() ? comments.push({"comment":$(this).find('.subtext > a:last-child').text()}):'';
    });

    for(let i = 0; i <titles.length ; i++)  dataObjList.push({ ...titles[i], ...points[i], ...comments[i] })
    return  dataObjList
}
module.exports = {filterDataFromURL, createObjectFromDataFilter}
