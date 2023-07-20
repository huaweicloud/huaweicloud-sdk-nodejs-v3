

export class ShowVersionRequest {
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): ShowVersionRequest {
        this['version'] = version;
        return this;
    }
}