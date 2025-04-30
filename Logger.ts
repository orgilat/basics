
import winston from 'winston';

const timeFormat = 'YYYY-MM-DD HH:mm:ss';
const printformat = info => `[${info.timestamp}] ${info.level}: ${info.message}`;

const options = {
    level: 'info',
    transports: [
        // Write all logs with level `info` and below to console
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({format: timeFormat}),
                winston.format.printf(printformat),
                winston.format.align()
            )
        }),

    
    ]
};


export const logger = winston.createLogger(options);