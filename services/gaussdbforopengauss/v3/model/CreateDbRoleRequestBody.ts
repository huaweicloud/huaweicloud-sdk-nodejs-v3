

export class CreateDbRoleRequestBody {
    public name?: string;
    public password?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): CreateDbRoleRequestBody {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): CreateDbRoleRequestBody {
        this['password'] = password;
        return this;
    }
}