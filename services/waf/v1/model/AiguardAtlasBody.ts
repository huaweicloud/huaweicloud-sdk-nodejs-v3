

export class AiguardAtlasBody {
    public name?: string;
    public type?: number;
    public description?: string;
    public constructor(name?: string, type?: number) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): AiguardAtlasBody {
        this['name'] = name;
        return this;
    }
    public withType(type: number): AiguardAtlasBody {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): AiguardAtlasBody {
        this['description'] = description;
        return this;
    }
}