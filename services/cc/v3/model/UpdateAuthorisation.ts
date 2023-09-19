

export class UpdateAuthorisation {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateAuthorisation {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateAuthorisation {
        this['description'] = description;
        return this;
    }
}