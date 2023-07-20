

export class MysqlProxyAvailable {
    public code?: string;
    public description?: string;
    public constructor() { 
    }
    public withCode(code: string): MysqlProxyAvailable {
        this['code'] = code;
        return this;
    }
    public withDescription(description: string): MysqlProxyAvailable {
        this['description'] = description;
        return this;
    }
}