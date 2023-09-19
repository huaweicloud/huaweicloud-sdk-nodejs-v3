

export class DeleteConfReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DeleteConfReq {
        this['name'] = name;
        return this;
    }
}