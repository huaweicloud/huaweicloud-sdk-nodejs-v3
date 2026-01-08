

export class AfterHbaConfOption {
    public type?: AfterHbaConfOptionTypeEnum | string;
    public database?: string;
    public user?: string;
    public address?: string;
    public method?: AfterHbaConfOptionMethodEnum | string;
    public constructor(type?: string, database?: string, user?: string, address?: string, method?: string) { 
        this['type'] = type;
        this['database'] = database;
        this['user'] = user;
        this['address'] = address;
        this['method'] = method;
    }
    public withType(type: AfterHbaConfOptionTypeEnum | string): AfterHbaConfOption {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): AfterHbaConfOption {
        this['database'] = database;
        return this;
    }
    public withUser(user: string): AfterHbaConfOption {
        this['user'] = user;
        return this;
    }
    public withAddress(address: string): AfterHbaConfOption {
        this['address'] = address;
        return this;
    }
    public withMethod(method: AfterHbaConfOptionMethodEnum | string): AfterHbaConfOption {
        this['method'] = method;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AfterHbaConfOptionTypeEnum {
    HOST = 'host',
    HOSTNOSSL = 'hostnossl',
    HOSTSSL = 'hostssl'
}
/**
    * @export
    * @enum {string}
    */
export enum AfterHbaConfOptionMethodEnum {
    REJECT = 'reject',
    MD5 = 'md5',
    SHA256 = 'sha256',
    SM3 = 'sm3',
    CERT = 'cert'
}
