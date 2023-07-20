import { UpdateFunctionAsyncInvokeConfigRequestBody } from './UpdateFunctionAsyncInvokeConfigRequestBody';


export class UpdateFunctionAsyncInvokeConfigRequest {
    private 'function_urn'?: string;
    public body?: UpdateFunctionAsyncInvokeConfigRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionAsyncInvokeConfigRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionAsyncInvokeConfigRequestBody): UpdateFunctionAsyncInvokeConfigRequest {
        this['body'] = body;
        return this;
    }
}