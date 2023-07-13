

export class ShowAppCountRequest {
    private 'Content-Type': string | undefined;
    public region: string;
    public constructor(contentType?: any, region?: any) { 
        this['Content-Type'] = contentType;
        this['region'] = region;
    }
    public withContentType(contentType: string): ShowAppCountRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withRegion(region: string): ShowAppCountRequest {
        this['region'] = region;
        return this;
    }
}