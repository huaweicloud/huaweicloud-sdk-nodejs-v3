

export class ListCustomRegexSetRequest {
    private 'Content-Type'?: string;
    public name?: string;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListCustomRegexSetRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListCustomRegexSetRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ListCustomRegexSetRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomRegexSetRequest {
        this['limit'] = limit;
        return this;
    }
}