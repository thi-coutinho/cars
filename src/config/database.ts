import pkg from '@prisma/client'
const { PrismaClient } = pkg
const prisma = new PrismaClient()
// prisma.$connect()
// try {
//     const getconnect = async () => await prisma.$connect()
//     getconnect()
// } catch (error) {
//     console.log(error)
// }
export default prisma