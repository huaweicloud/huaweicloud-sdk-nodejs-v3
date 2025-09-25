

export class DeleteConfReqNew {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DeleteConfReqNew {
        this['name'] = name;
        return this;
    }
}