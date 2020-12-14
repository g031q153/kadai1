module.exports = {
    name: 'aerobic',
    columns: {
        aerobic_id: {
            primary: true,
            type: 'int',
            generated: true
        },
        aerobic_name: {
            type:'varchar',
            uniquye: true
        },
        aerobic_calorie: {
            type:'numeric'
        },
    } ,
};