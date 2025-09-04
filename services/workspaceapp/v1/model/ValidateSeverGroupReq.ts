

export class ValidateSeverGroupReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ValidateSeverGroupReq {
        this['name'] = name;
        return this;
    }
}