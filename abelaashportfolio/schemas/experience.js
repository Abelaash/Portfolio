export default {
    name: "experience",
    title: "Work Experience",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "place",
            type: "string",
        },
        {
            name: "location",
            type: "string",
        },
        {
            name: "startDate",
            type: "date",
            options: {
                dataFormat: 'YYYY-MM'
            }
        },
        {
            name: "endDate",
            type: "date",
            options: {
                dataFormat: 'YYYY-MM'
            }
        },
       
        {
            name: "description",
            type: "text",
        },
        
        
    ],
};