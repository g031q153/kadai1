module.exports = {
    name: 'calorie_muscle',
    columns: {
        muscle_mng_id: {
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
        muscle_id: {
            type:'int',
        },
        weight: {
            type:'int'
        },
    } ,
};