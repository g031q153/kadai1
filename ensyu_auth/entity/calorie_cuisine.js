module.exports = {
    name: 'calorie_cuisine',
    columns: {
        cuisine_mng_id: {
            primary: true,
            type: 'int',
            generated: true
        },
        user_id:{
            type: 'int'
        },
        day :{
            type: 'date'
        },
        cuisine_id: {
            type:'int',
        },
        eclipse: {
            type:'int'
        },
    } ,
};