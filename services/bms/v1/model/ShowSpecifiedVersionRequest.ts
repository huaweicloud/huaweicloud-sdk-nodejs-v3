

export class ShowSpecifiedVersionRequest {
    private 'api_version'?: string;
    public constructor(apiVersion?: string) { 
        this['api_version'] = apiVersion;
    }
    public withApiVersion(apiVersion: string): ShowSpecifiedVersionRequest {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
}