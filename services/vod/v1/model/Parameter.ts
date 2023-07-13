

export class Parameter {
    public format?: string;
    public constructor() { 
    }
    public withFormat(format: string): Parameter {
        this['format'] = format;
        return this;
    }
}