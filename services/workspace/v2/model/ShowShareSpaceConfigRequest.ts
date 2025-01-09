

export class ShowShareSpaceConfigRequest {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ShowShareSpaceConfigRequest {
        this['name'] = name;
        return this;
    }
}