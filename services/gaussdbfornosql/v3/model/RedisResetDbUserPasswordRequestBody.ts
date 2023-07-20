

export class RedisResetDbUserPasswordRequestBody {
    public name?: string;
    public password?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): RedisResetDbUserPasswordRequestBody {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): RedisResetDbUserPasswordRequestBody {
        this['password'] = password;
        return this;
    }
}