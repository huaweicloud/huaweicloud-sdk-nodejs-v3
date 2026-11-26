

export class ListWorkloadIdentitiesRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListWorkloadIdentitiesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListWorkloadIdentitiesRequest {
        this['marker'] = marker;
        return this;
    }
}