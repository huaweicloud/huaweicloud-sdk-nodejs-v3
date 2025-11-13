

export class ListSystemLinesRequest {
    public locale?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLocale(locale: string): ListSystemLinesRequest {
        this['locale'] = locale;
        return this;
    }
    public withLimit(limit: number): ListSystemLinesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSystemLinesRequest {
        this['offset'] = offset;
        return this;
    }
}