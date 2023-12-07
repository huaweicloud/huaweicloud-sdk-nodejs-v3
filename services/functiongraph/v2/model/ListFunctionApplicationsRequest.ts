

export class ListFunctionApplicationsRequest {
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListFunctionApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListFunctionApplicationsRequest {
        this['marker'] = marker;
        return this;
    }
}