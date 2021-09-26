import { UpdateFunctionConfigRequestBody } from './UpdateFunctionConfigRequestBody';


export class UpdateFunctionConfigRequest {
    private 'function_urn': string | undefined;
    public body?: UpdateFunctionConfigRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionConfigRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionConfigRequestBody): UpdateFunctionConfigRequest {
        this['body'] = body;
        return this;
    }
}