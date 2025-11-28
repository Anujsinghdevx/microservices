import { PrismaClient } from "@prisma/client";

// Create a single instance of PrismaClient to be used throughout the application
const prisma = new PrismaClient({
    log : process.env.NODE_ENV === "development" ? ["query", "info", "warn", "error"] : ["error"],
})

//handle graceful shutdown
process.on("beforeExit", async () => {
    await prisma.$disconnect();
});

process.on("SIGINT", async () => {
    await prisma.$disconnect();
    process.exit(0);
});

process.on("SIGTERM", async () => {
    await prisma.$disconnect();
    process.exit(0);
});

export default prisma;