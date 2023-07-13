

export class DeleteVersionAliasRequest {
    private 'function_urn': string | undefined;
    private 'alias_name': string | undefined;
    public constructor(functionUrn?: any, aliasName?: any) { 
        this['function_urn'] = functionUrn;
        this['alias_name'] = aliasName;
    }
    public withFunctionUrn(functionUrn: string): DeleteVersionAliasRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withAliasName(aliasName: string): DeleteVersionAliasRequest {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName() {
        return this['alias_name'];
    }
}