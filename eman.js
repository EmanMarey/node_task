import express from 'express';
const app = express();
const students = [{
        id: 1,
        name: "eman",
        city: "kfr alzayat",
    },
    {
        id: 2,
        name: "mohamed",
        city: "abeeg"
    },
    {
        id: 3,
        name: "saad",
        city: "kfr elzayat"

    }
];

const studentsfunction = (request, response) => {
    let output = '<ul>';
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        output += "<li>" + student.name + "</li>";
    }
    output += '</ul>'
    response.send(output);
};

app.get('/students', studentsfunction)


app.listen(5000);