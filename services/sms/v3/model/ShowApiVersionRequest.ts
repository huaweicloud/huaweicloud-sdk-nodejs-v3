

export class ShowApiVersionRequest {
    public version: string;
    public constructor(version?: any) { 
        this['version'] = version;
    }
    public withVersion(version: string): ShowApiVersionRequest {
        this['version'] = version;
        return this;
    }
}