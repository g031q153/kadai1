module.exports = {
    name: 'material',
    columns: {
        material_id: {
            primary: true,
            type: 'int',
            generated: true
        },
        material_name: {
            type:'varchar',
            uniquye: true
        },
        material_calorie: {
            type:'numeric'
        },
    } ,
};