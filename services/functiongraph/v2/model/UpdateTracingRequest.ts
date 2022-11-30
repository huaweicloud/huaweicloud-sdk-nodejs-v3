import { UpdateTracingRequestBody } from './UpdateTracingRequestBody';


export class UpdateTracingRequest {
    private 'function_urn': string | undefined;
    public body?: UpdateTracingRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateTracingRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: UpdateTracingRequestBody): UpdateTracingRequest {
        this['body'] = body;
        return this;
    }
}