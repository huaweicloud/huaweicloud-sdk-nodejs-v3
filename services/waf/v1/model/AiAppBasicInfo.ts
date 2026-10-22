

export class AiAppBasicInfo {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): AiAppBasicInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AiAppBasicInfo {
        this['name'] = name;
        return this;
    }
}