import { CreateVersionAliasRequestBody } from './CreateVersionAliasRequestBody';


export class CreateVersionAliasRequest {
    private 'function_urn': string | undefined;
    public body?: CreateVersionAliasRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): CreateVersionAliasRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: CreateVersionAliasRequestBody): CreateVersionAliasRequest {
        this['body'] = body;
        return this;
    }
}