

export class ShowApiVersionRequest {
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): ShowApiVersionRequest {
        this['version'] = version;
        return this;
    }
}