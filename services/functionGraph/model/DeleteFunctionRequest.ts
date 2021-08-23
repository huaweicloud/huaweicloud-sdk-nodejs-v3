
export class DeleteFunctionRequest {
    public func_urn ?: string;
    public constructor(func_urn?: string) {
        this['func_urn'] = func_urn;
    }
    public withFunctionUrn(func_urn?: string): DeleteFunctionRequest{
        this['func_urn'] = func_urn;
        return this;
    }
}