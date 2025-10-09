

export class CreateUserReqBody {
    public name?: string;
    public description?: string;
    public enabled?: boolean;
    public constructor(name?: string, enabled?: boolean) { 
        this['name'] = name;
        this['enabled'] = enabled;
    }
    public withName(name: string): CreateUserReqBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateUserReqBody {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): CreateUserReqBody {
        this['enabled'] = enabled;
        return this;
    }
}