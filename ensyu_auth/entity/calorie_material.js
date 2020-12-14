module.exports = {
    name: 'calorie_material',
    columns: {
        material_mng_id: {
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
        material_id: {
            type:'int',
        },
        volume: {
            type:'numeric'
        },
    } ,
};