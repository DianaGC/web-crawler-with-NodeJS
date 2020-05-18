const _ = require('underscore');
const getInformation = require('./service/service');
const { filterDataFromURL, createObjectFromDataFilter } = require('./cheerio/functionsCheerio');
const { getNumberFromString } = require('./functions/functions')

async function main(){
    try {
        let numberMaxOfWord = 5;
        let orderedDataByComments = [];
        let orderedDataByPoints = [];
        //service 
        let response = await getInformation();

        console.log('---------Filter 30 first news-------')
        filterDataFromURL(response.data);
        let dataObjList = createObjectFromDataFilter(response.data);

        _.forEach(dataObjList, item =>{
            item.title.split(" ").length > numberMaxOfWord ? orderedDataByComments.push(item) : orderedDataByPoints.push(item);
        })
        console.log('---------Order data by Comment-------');
        orderedDataByComments.sort((x, y) => {
            return getNumberFromString(x.comment," comments") - getNumberFromString(y.comment," comments")
        })
        console.log(orderedDataByComments)
        
        console.log('---------Order data by Points--------');
        orderedDataByPoints.sort((x, y) => {
            return getNumberFromString(x.point, " points") - getNumberFromString(y.point, " points")
        })
        console.log(orderedDataByPoints)

    } catch (error) {
        console.log(error)        
    }
    
}

main();