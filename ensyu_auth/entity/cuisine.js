module.exports = {
    name: 'cuisine',
    columns: {
        cuisine_id: {
            primary: true,
            type: 'int',
            generated: true
        },
        cuisine_name: {
            type:'varchar',
            uniquye: true
        },
        cuisine_calorie: {
            type:'numeric'
        },
    } ,
};