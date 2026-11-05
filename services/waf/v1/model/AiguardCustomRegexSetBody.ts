

export class AiguardCustomRegexSetBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): AiguardCustomRegexSetBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AiguardCustomRegexSetBody {
        this['description'] = description;
        return this;
    }
}