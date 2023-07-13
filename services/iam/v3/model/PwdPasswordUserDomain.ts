

export class PwdPasswordUserDomain {
    public name: string;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): PwdPasswordUserDomain {
        this['name'] = name;
        return this;
    }
}