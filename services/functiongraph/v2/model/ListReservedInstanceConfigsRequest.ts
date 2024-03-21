

export class ListReservedInstanceConfigsRequest {
    private 'function_urn'?: string;
    public marker?: string;
    public limit?: string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): ListReservedInstanceConfigsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
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
    public withContentType(contentType: string): ListReservedInstanceConfigsRequest {
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