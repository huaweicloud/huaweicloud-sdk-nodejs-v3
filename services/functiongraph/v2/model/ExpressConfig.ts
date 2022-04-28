

export class ExpressConfig {
    private 'log_level'?: ExpressConfigLogLevelEnum | undefined;
    public constructor() { 
    }
    public withLogLevel(logLevel: ExpressConfigLogLevelEnum): ExpressConfig {
        this['log_level'] = logLevel;
        return this;
    }
    public set logLevel(logLevel: ExpressConfigLogLevelEnum | undefined) {
        this['log_level'] = logLevel;
    }
    public get logLevel() {
        return this['log_level'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExpressConfigLogLevelEnum {
    ALL = 'ALL',
    ERROR = 'ERROR',
    NONE = 'NONE'
}
