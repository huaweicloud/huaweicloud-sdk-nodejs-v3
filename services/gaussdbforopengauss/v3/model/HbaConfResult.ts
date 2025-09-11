

export class HbaConfResult {
    public type?: HbaConfResultTypeEnum | string;
    public database?: string;
    public user?: string;
    public address?: string;
    public method?: string;
    public constructor() { 
    }
    public withType(type: HbaConfResultTypeEnum | string): HbaConfResult {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): HbaConfResult {
        this['database'] = database;
        return this;
    }
    public withUser(user: string): HbaConfResult {
        this['user'] = user;
        return this;
    }
    public withAddress(address: string): HbaConfResult {
        this['address'] = address;
        return this;
    }
    public withMethod(method: string): HbaConfResult {
        this['method'] = method;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HbaConfResultTypeEnum {
    HOST = 'host',
    HOSTNOSSL = 'hostnossl',
    HOSTSSL = 'hostssl'
}
