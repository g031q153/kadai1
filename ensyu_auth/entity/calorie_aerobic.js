module.exports = {
    name: 'calorie_aerobic',
    columns: {
        aerobic_mng_id: {
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
        aerobic_id: {
            type:'int',
        },
        time: {
            type:'numeric'
        },
    } ,
};