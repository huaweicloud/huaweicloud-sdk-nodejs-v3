

export class RedisConnectionParam {
    public password?: string;
    public id?: string;
    public addrs?: string;
    public name?: string;
    public constructor() { 
    }
    public withPassword(password: string): RedisConnectionParam {
        this['password'] = password;
        return this;
    }
    public withId(id: string): RedisConnectionParam {
        this['id'] = id;
        return this;
    }
    public withAddrs(addrs: string): RedisConnectionParam {
        this['addrs'] = addrs;
        return this;
    }
    public withName(name: string): RedisConnectionParam {
        this['name'] = name;
        return this;
    }
}