module.exports = {
    name: 'muscle',
    columns: {
        muscle_id: {
            primary: true,
            type: 'int',
            generated: true
        },
        muscle_name: {
            type:'varchar',
            uniquye: true
        },
        muscle_calorie: {
            type:'numeric'
        },
    } ,
};