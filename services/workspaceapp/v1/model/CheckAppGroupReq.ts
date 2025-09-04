

export class CheckAppGroupReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CheckAppGroupReq {
        this['name'] = name;
        return this;
    }
}