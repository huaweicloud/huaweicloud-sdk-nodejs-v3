import { CreateFunctionVersionRequestBody } from './CreateFunctionVersionRequestBody';


export class CreateFunctionVersionRequest {
    private 'function_urn'?: string;
    public body?: CreateFunctionVersionRequestBody;
    public constructor(functionUrn?: string) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): CreateFunctionVersionRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withBody(body: CreateFunctionVersionRequestBody): CreateFunctionVersionRequest {
        this['body'] = body;
        return this;
    }
}