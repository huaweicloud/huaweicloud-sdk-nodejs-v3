

export class ListReservedInstanceConfigsRequest {
    private 'function_urn'?: string | undefined;
    public marker?: string;
    public limit?: string;
    public constructor() { 
    }
    public withFunctionUrn(functionUrn: string): ListReservedInstanceConfigsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withMarker(marker: string): ListReservedInstanceConfigsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: string): ListReservedInstanceConfigsRequest {
        this['limit'] = limit;
        return this;
    }
}