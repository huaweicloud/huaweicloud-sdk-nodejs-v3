import { CancelAsyncInvocationRequestBody } from './CancelAsyncInvocationRequestBody';


export class CancelAsyncInvocationRequest {
    private 'function_urn'?: string;
    private 'Content-Type'?: string;
    public body?: CancelAsyncInvocationRequestBody;
    public constructor(functionUrn?: string, contentType?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
    }
    public withFunctionUrn(functionUrn: string): CancelAsyncInvocationRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withContentType(contentType: string): CancelAsyncInvocationRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CancelAsyncInvocationRequestBody): CancelAsyncInvocationRequest {
        this['body'] = body;
        return this;
    }
}