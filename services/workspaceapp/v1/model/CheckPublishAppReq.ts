

export class CheckPublishAppReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CheckPublishAppReq {
        this['name'] = name;
        return this;
    }
}