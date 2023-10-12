

export class UserResource {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): UserResource {
        this['name'] = name;
        return this;
    }
}