

export class CreateRouteTags {
    public version?: string;
    public constructor() { 
    }
    public withVersion(version: string): CreateRouteTags {
        this['version'] = version;
        return this;
    }
}