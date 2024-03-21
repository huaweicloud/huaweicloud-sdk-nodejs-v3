

export class ListFunctionApplicationsRequest {
    public limit?: string;
    public marker?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withLimit(limit: string): ListFunctionApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFunctionApplicationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withContentType(contentType: string): ListFunctionApplicationsRequest {
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