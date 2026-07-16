

export class JobDescription {
    public description?: string;
    public constructor() { 
    }
    public withDescription(description: string): JobDescription {
        this['description'] = description;
        return this;
    }
}