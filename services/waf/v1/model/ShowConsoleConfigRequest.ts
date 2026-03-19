

export class ShowConsoleConfigRequest {
    private 'Content-Type'?: string;
    public region?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ShowConsoleConfigRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withRegion(region: string): ShowConsoleConfigRequest {
        this['region'] = region;
        return this;
    }
}