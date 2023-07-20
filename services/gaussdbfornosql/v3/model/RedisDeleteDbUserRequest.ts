

export class RedisDeleteDbUserRequest {
    public names?: Array<string>;
    public constructor(names?: Array<string>) { 
        this['names'] = names;
    }
    public withNames(names: Array<string>): RedisDeleteDbUserRequest {
        this['names'] = names;
        return this;
    }
}