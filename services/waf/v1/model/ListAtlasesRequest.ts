

export class ListAtlasesRequest {
    private 'Content-Type'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public type?: number;
    public constructor() { 
    }
    public withContentType(contentType: string): ListAtlasesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withOffset(offset: number): ListAtlasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAtlasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListAtlasesRequest {
        this['name'] = name;
        return this;
    }
    public withType(type: number): ListAtlasesRequest {
        this['type'] = type;
        return this;
    }
}