

export class MigrationLog {
    private 'created_at'?: string;
    private 'log_level'?: MigrationLogLogLevelEnum | string;
    public message?: string;
    private 'log_code'?: string;
    public keyword?: Array<string>;
    public constructor() { 
    }
    public withCreatedAt(createdAt: string): MigrationLog {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withLogLevel(logLevel: MigrationLogLogLevelEnum | string): MigrationLog {
        this['log_level'] = logLevel;
        return this;
    }
    public set logLevel(logLevel: MigrationLogLogLevelEnum | string  | undefined) {
        this['log_level'] = logLevel;
    }
    public get logLevel(): MigrationLogLogLevelEnum | string | undefined {
        return this['log_level'];
    }
    public withMessage(message: string): MigrationLog {
        this['message'] = message;
        return this;
    }
    public withLogCode(logCode: string): MigrationLog {
        this['log_code'] = logCode;
        return this;
    }
    public set logCode(logCode: string  | undefined) {
        this['log_code'] = logCode;
    }
    public get logCode(): string | undefined {
        return this['log_code'];
    }
    public withKeyword(keyword: Array<string>): MigrationLog {
        this['keyword'] = keyword;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MigrationLogLogLevelEnum {
    INFO = 'INFO',
    ERROR = 'ERROR'
}
