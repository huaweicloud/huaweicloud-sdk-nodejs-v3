

export class UpdateImageServerReq {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateImageServerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateImageServerReq {
        this['description'] = description;
        return this;
    }
}