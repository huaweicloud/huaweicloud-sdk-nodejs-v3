

export class ListBridgeFunctionsRequest {
    private 'function_urn'?: string;
    public type?: string;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): ListBridgeFunctionsRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withType(type: string): ListBridgeFunctionsRequest {
        this['type'] = type;
        return this;
    }
}