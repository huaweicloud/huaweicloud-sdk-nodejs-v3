import { CancelAsyncInvocationRequestBody } from './CancelAsyncInvocationRequestBody';


export class CancelAsyncInvocationRequest {
    private 'function_urn'?: string;
    public body?: CancelAsyncInvocationRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
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
    public withBody(body: CancelAsyncInvocationRequestBody): CancelAsyncInvocationRequest {
        this['body'] = body;
        return this;
    }
}