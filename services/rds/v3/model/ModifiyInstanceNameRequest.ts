

export class ModifiyInstanceNameRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ModifiyInstanceNameRequest {
        this['name'] = name;
        return this;
    }
}