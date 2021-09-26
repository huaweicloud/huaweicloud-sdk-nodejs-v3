import { UpdateVersionAliasRequestBody } from './UpdateVersionAliasRequestBody';


export class UpdateVersionAliasRequest {
    private 'function_urn': string | undefined;
    private 'alias_name': string | undefined;
    public body?: UpdateVersionAliasRequestBody;
    public constructor(functionUrn?: any, aliasName?: any) { 
        this['function_urn'] = functionUrn;
        this['alias_name'] = aliasName;
    }
    public withFunctionUrn(functionUrn: string): UpdateVersionAliasRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withAliasName(aliasName: string): UpdateVersionAliasRequest {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName() {
        return this['alias_name'];
    }
    public withBody(body: UpdateVersionAliasRequestBody): UpdateVersionAliasRequest {
        this['body'] = body;
        return this;
    }
}