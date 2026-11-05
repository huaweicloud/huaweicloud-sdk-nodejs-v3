

export class AiguardAtlasUpdateBody {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): AiguardAtlasUpdateBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardAtlasUpdateBody {
        this['description'] = description;
        return this;
    }
}