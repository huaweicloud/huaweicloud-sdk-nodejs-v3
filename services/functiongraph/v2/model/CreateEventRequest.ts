import { CreateEventRequestBody } from './CreateEventRequestBody';


export class CreateEventRequest {
    private 'function_urn': string | undefined;
    public body?: CreateEventRequestBody;
    public constructor(functionUrn?: any) { 
        this['function_urn'] = functionUrn;
    }
    public withFunctionUrn(functionUrn: string): CreateEventRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withBody(body: CreateEventRequestBody): CreateEventRequest {
        this['body'] = body;
        return this;
    }
}