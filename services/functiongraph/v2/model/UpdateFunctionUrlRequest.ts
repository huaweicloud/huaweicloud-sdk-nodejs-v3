import { FunctionUrlRequestBody } from './FunctionUrlRequestBody';


export class UpdateFunctionUrlRequest {
    private 'function_urn'?: string;
    public body?: FunctionUrlRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionUrlRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: FunctionUrlRequestBody): UpdateFunctionUrlRequest {
        this['body'] = body;
        return this;
    }
}