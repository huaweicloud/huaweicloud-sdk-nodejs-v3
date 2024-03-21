

export class ListFunctionReservedInstancesRequest {
    public marker?: string;
    public limit?: string;
    public urn?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
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
    public withContentType(contentType: string): ListFunctionReservedInstancesRequest {
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