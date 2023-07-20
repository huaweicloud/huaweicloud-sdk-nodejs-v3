

export class ListFunctionVersionsRequest {
    private 'function_urn'?: string;
    public marker?: string;
    public maxitems?: string;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListFunctionVersionsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withMarker(marker: string): ListFunctionVersionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withMaxitems(maxitems: string): ListFunctionVersionsRequest {
        this['maxitems'] = maxitems;
        return this;
    }
}