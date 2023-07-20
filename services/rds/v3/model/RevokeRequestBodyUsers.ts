

export class RevokeRequestBodyUsers {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): RevokeRequestBodyUsers {
        this['name'] = name;
        return this;
    }
}