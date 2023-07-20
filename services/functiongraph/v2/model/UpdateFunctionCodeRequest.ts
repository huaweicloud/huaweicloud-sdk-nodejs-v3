import { UpdateFunctionCodeRequestBody } from './UpdateFunctionCodeRequestBody';


export class UpdateFunctionCodeRequest {
    private 'function_urn'?: string;
    public body?: UpdateFunctionCodeRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): UpdateFunctionCodeRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: UpdateFunctionCodeRequestBody): UpdateFunctionCodeRequest {
        this['body'] = body;
        return this;
    }
}