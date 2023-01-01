const PocketBase = require('pocketbase/cjs')
require('cross-fetch/polyfill');
global.EventSource = require('eventsource');

const pb = new PocketBase('http://127.0.0.1:8090');

exports.diseaseList = async (min, max) => {
    const resultList = await pb.collection('disease').getList(min, max);    
    return resultList;
}

exports.diseaseCreate= async (data)=> {
    const record = await pb.collection('disease').create(data);
    return record;
}




