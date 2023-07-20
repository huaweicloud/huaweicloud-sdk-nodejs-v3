import { UpdateTracingRequestBody } from './UpdateTracingRequestBody';


export class UpdateTracingRequest {
    private 'function_urn'?: string;
    public body?: UpdateTracingRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateTracingRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: UpdateTracingRequestBody): UpdateTracingRequest {
        this['body'] = body;
        return this;
    }
}