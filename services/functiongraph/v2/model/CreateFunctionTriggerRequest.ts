import { CreateFunctionTriggerRequestBody } from './CreateFunctionTriggerRequestBody';


export class CreateFunctionTriggerRequest {
    private 'function_urn': string | undefined;
    public body?: CreateFunctionTriggerRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): CreateFunctionTriggerRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: CreateFunctionTriggerRequestBody): CreateFunctionTriggerRequest {
        this['body'] = body;
        return this;
    }
}