const diseaseApis = require('./server/apis/disease');

diseaseApis.diseaseCreate({ name: 'headache1 ' }).then(res => { console.log(res) })
diseaseApis.diseaseList(1,50).then(res=>{console.log(res)})