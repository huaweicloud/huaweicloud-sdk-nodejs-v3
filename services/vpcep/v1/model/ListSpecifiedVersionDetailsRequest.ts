

export class ListSpecifiedVersionDetailsRequest {
    private 'Content-Type'?: string | undefined;
    public version: string;
    public constructor(version?: any) { 
        this['version'] = version;
    }
    public withContentType(contentType: string): ListSpecifiedVersionDetailsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withVersion(version: string): ListSpecifiedVersionDetailsRequest {
        this['version'] = version;
        return this;
    }
}