import { UpdateVersionAliasRequestBody } from './UpdateVersionAliasRequestBody';


export class UpdateVersionAliasRequest {
    private 'function_urn'?: string;
    private 'alias_name'?: string;
    public body?: UpdateVersionAliasRequestBody;
    public constructor(functionUrn?: string, aliasName?: string) { 
        this['function_urn'] = functionUrn;
        this['alias_name'] = aliasName;
    }
    public withFunctionUrn(functionUrn: string): UpdateVersionAliasRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withAliasName(aliasName: string): UpdateVersionAliasRequest {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withBody(body: UpdateVersionAliasRequestBody): UpdateVersionAliasRequest {
        this['body'] = body;
        return this;
    }
}