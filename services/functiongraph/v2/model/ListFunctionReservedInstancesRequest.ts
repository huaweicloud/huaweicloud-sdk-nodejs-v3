

export class ListFunctionReservedInstancesRequest {
    public marker?: string;
    public maxitems?: string;
    public urn?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListFunctionReservedInstancesRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListFunctionReservedInstancesRequest {
        this['maxitems'] = maxitems;
        return this;
    }
    public withUrn(urn: string): ListFunctionReservedInstancesRequest {
        this['urn'] = urn;
        return this;
    }
}