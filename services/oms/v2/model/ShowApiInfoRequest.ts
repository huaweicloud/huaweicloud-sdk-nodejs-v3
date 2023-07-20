

export class ShowApiInfoRequest {
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): ShowApiInfoRequest {
        this['version'] = version;
        return this;
    }
}