// main.js

import { PrismaClient } from '@prisma/client'
import express from 'express'
const app = express();

app.get("/", async function (req, res) {
    
    // Get list of clients
    const prisma = new PrismaClient()

    let userTableData = "<h1>Our amazing app users</h1>"

    const users = await prisma.new_users.findMany()
    users.forEach(item => {
        userTableData += `
            
            <tr>
                <td>${item.name}</td>
                <td>${item.location}</td>
            </tr>
        `
    });

    let tableHTML = `
    <table>
        <thead>
            <tr>
                <td>Name</td>
                <td>Location</td>
            </tr>
        </thead>
        <tbody>
            ${userTableData}
        </tbody>
    </table>
    `

    res.send(tableHTML);

});

app.listen(3000);
