

export class ShowVersionAliasRequest {
    private 'function_urn'?: string;
    private 'alias_name'?: string;
    private 'Content-Type'?: string;
    public constructor(functionUrn?: string, aliasName?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['alias_name'] = aliasName;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): ShowVersionAliasRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withAliasName(aliasName: string): ShowVersionAliasRequest {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withContentType(contentType: string): ShowVersionAliasRequest {
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