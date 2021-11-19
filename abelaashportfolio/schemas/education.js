export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "program",
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
            name: "educationType",
            title: "Process of Education",
            type: "string",
            options: {
                list: [
                  { value: "Progress", title: "In-Progress"},
                  { value: "Graduated", title: "Graduated"},
                    
                ],
                
            },
        },
    ],
};