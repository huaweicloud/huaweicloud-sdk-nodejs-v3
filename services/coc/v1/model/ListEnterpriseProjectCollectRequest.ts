

export class ListEnterpriseProjectCollectRequest {
    public id?: string;
    public marker?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withId(id: string): ListEnterpriseProjectCollectRequest {
        this['id'] = id;
        return this;
    }
    public withMarker(marker: string): ListEnterpriseProjectCollectRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListEnterpriseProjectCollectRequest {
        this['limit'] = limit;
        return this;
    }
}