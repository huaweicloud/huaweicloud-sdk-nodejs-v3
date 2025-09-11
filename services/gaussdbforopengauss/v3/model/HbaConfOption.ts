

export class HbaConfOption {
    public type?: HbaConfOptionTypeEnum | string;
    public database?: string;
    public user?: string;
    public address?: string;
    public method?: HbaConfOptionMethodEnum | string;
    public constructor(type?: string, database?: string, user?: string, address?: string, method?: string) { 
        this['type'] = type;
        this['database'] = database;
        this['user'] = user;
        this['address'] = address;
        this['method'] = method;
    }
    public withType(type: HbaConfOptionTypeEnum | string): HbaConfOption {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): HbaConfOption {
        this['database'] = database;
        return this;
    }
    public withUser(user: string): HbaConfOption {
        this['user'] = user;
        return this;
    }
    public withAddress(address: string): HbaConfOption {
        this['address'] = address;
        return this;
    }
    public withMethod(method: HbaConfOptionMethodEnum | string): HbaConfOption {
        this['method'] = method;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HbaConfOptionTypeEnum {
    HOST = 'host',
    HOSTNOSSL = 'hostnossl',
    HOSTSSL = 'hostssl'
}
/**
    * @export
    * @enum {string}
    */
export enum HbaConfOptionMethodEnum {
    REJECT = 'reject',
    MD5 = 'md5',
    SHA256 = 'sha256',
    SM3 = 'sm3',
    CERT = 'cert'
}
