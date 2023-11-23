

export class ListAppTemplatesRequest {
    public marker?: string;
    public maxitems?: string;
    public runtime?: string;
    public category?: string;
    private 'X-Language'?: string;
    public constructor() { 
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
}