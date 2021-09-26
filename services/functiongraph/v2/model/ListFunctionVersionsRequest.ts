

export class ListFunctionVersionsRequest {
    private 'function_urn': string | undefined;
    public marker?: string;
    public maxitems?: string;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListFunctionVersionsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
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