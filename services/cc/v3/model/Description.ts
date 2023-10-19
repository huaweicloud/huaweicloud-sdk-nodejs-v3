

export class Description {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): Description {
        this['description'] = description;
        return this;
    }
}