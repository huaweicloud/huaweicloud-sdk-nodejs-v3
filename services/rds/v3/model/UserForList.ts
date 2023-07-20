

export class UserForList {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UserForList {
        this['name'] = name;
        return this;
    }
}