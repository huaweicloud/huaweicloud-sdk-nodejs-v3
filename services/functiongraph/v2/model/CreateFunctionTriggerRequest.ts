import { CreateFunctionTriggerRequestBody } from './CreateFunctionTriggerRequestBody';


export class CreateFunctionTriggerRequest {
    private 'function_urn'?: string;
    public body?: CreateFunctionTriggerRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): CreateFunctionTriggerRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: CreateFunctionTriggerRequestBody): CreateFunctionTriggerRequest {
        this['body'] = body;
        return this;
    }
}