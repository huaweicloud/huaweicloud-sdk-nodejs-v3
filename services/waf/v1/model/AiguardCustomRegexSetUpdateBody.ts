

export class AiguardCustomRegexSetUpdateBody {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): AiguardCustomRegexSetUpdateBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardCustomRegexSetUpdateBody {
        this['description'] = description;
        return this;
    }
}