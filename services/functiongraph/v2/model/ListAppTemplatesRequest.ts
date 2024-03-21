

export class ListAppTemplatesRequest {
    public marker?: string;
    public maxitems?: string;
    public runtime?: string;
    public category?: string;
    private 'X-Language'?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withMarker(marker: string): ListAppTemplatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListAppTemplatesRequest {
        this['maxitems'] = maxitems;
        return this;
    }
    public withRuntime(runtime: string): ListAppTemplatesRequest {
        this['runtime'] = runtime;
        return this;
    }
    public withCategory(category: string): ListAppTemplatesRequest {
        this['category'] = category;
        return this;
    }
    public withXLanguage(xLanguage: string): ListAppTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withContentType(contentType: string): ListAppTemplatesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}