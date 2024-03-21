import { CreateFunctionTriggerRequestBody } from './CreateFunctionTriggerRequestBody';


export class CreateFunctionTriggerRequest {
    private 'function_urn'?: string;
    private 'Content-Type'?: string;
    public body?: CreateFunctionTriggerRequestBody;
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
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
    public withContentType(contentType: string): CreateFunctionTriggerRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateFunctionTriggerRequestBody): CreateFunctionTriggerRequest {
        this['body'] = body;
        return this;
    }
}