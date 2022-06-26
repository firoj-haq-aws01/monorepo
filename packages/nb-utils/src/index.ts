import { logger } from "@nb/logger";

export const reverseString = (str: string): string => {
    logger.info(`String to be reveresed: ${str}`);
    return str.split("").reverse().join("");
} 
