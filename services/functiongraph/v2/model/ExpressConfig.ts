

export class ExpressConfig {
    private 'log_level'?: ExpressConfigLogLevelEnum | string;
    public constructor() { 
    }
    public withLogLevel(logLevel: ExpressConfigLogLevelEnum | string): ExpressConfig {
        this['log_level'] = logLevel;
        return this;
    }
    public set logLevel(logLevel: ExpressConfigLogLevelEnum | string  | undefined) {
        this['log_level'] = logLevel;
    }
    public get logLevel(): ExpressConfigLogLevelEnum | string | undefined {
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
