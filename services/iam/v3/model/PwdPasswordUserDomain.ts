

export class PwdPasswordUserDomain {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): PwdPasswordUserDomain {
        this['name'] = name;
        return this;
    }
}