

export class ShowAppCountRequest {
    private 'Content-Type'?: string;
    public region?: string;
    public constructor(contentType?: string, region?: string) { 
        this['Content-Type'] = contentType;
        this['region'] = region;
    }
    public withContentType(contentType: string): ShowAppCountRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegion(region: string): ShowAppCountRequest {
        this['region'] = region;
        return this;
    }
}