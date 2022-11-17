

export class TargetInstanceBody {
    public id: string;
    public name?: string;
    public password?: string;
    public constructor(id?: any) { 
        this['id'] = id;
    }
    public withId(id: string): TargetInstanceBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TargetInstanceBody {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): TargetInstanceBody {
        this['password'] = password;
        return this;
    }
}