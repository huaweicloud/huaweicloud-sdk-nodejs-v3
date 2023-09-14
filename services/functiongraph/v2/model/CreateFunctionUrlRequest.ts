import { FunctionUrlRequestBody } from './FunctionUrlRequestBody';


export class CreateFunctionUrlRequest {
    private 'function_urn'?: string;
    public body?: FunctionUrlRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): CreateFunctionUrlRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: FunctionUrlRequestBody): CreateFunctionUrlRequest {
        this['body'] = body;
        return this;
    }
}