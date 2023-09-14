

export class DeleteFunctionUrlRequest {
    private 'function_urn'?: string;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): DeleteFunctionUrlRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
}