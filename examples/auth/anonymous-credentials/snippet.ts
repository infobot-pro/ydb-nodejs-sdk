import {Driver, Logger, AnonymousAuthService} from 'ydb-sdk';

export async function run(logger: Logger, entryPoint: string, dbName: string) {
    logger.debug('Driver initializing...');
    const driver = new Driver(entryPoint, dbName, new AnonymousAuthService());
    const timeout = 10000;
    if (!await driver.ready(timeout)) {
        logger.fatal(`Driver has not become ready in ${timeout}ms!`);
        process.exit(1);
    }
}
