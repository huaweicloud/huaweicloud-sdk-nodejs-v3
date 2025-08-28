

export class ModifyInstanceNameReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ModifyInstanceNameReq {
        this['name'] = name;
        return this;
    }
}