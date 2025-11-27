

export class TopPathSummary {
    public path?: string;
    public value?: number;
    public constructor() { 
    }
    public withPath(path: string): TopPathSummary {
        this['path'] = path;
        return this;
    }
    public withValue(value: number): TopPathSummary {
        this['value'] = value;
        return this;
    }
}