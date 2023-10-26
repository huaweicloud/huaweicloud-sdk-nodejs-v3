

export class Metadata {
    public type?: string;
    public configuration?: { [key: string]: object; };
    public constructor() { 
    }
    public withType(type: string): Metadata {
        this['type'] = type;
        return this;
    }
    public withConfiguration(configuration: { [key: string]: object; }): Metadata {
        this['configuration'] = configuration;
        return this;
    }
}