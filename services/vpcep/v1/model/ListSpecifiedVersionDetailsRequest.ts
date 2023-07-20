

export class ListSpecifiedVersionDetailsRequest {
    private 'Content-Type'?: string;
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withContentType(contentType: string): ListSpecifiedVersionDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withVersion(version: string): ListSpecifiedVersionDetailsRequest {
        this['version'] = version;
        return this;
    }
}