

export class ListFunctionReservedInstancesRequest {
    public marker?: string;
    public limit?: string;
    public urn?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListFunctionReservedInstancesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ListFunctionReservedInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withUrn(urn: string): ListFunctionReservedInstancesRequest {
        this['urn'] = urn;
        return this;
    }
}