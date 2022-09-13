// db-seed.js

import { PrismaClient } from '@prisma/client'
import { faker} from '@faker-js/faker';

const main = async () => {
    // Generate 100 user records for seeding
    let userData = []
    for (let i=0; i<10; i++) {
        userData.push({
            "name": faker.name.fullName(),
            "location": faker.address.cityName() 
        })
    }

    // Add records into DB
    const prisma = new PrismaClient()
    const createMany = await prisma.users.createMany({
        data: userData
    })
}
main()