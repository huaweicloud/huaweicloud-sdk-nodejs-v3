

export class CreateUsersDetailResponses {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateUsersDetailResponses {
        this['name'] = name;
        return this;
    }
}