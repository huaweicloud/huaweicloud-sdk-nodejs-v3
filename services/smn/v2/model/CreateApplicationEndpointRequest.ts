import { CreateApplicationEndpointRequestBody } from './CreateApplicationEndpointRequestBody';


export class CreateApplicationEndpointRequest {
    private 'application_urn'?: string;
    public body?: CreateApplicationEndpointRequestBody;
    public constructor(applicationUrn?: string) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): CreateApplicationEndpointRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string  | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn(): string | undefined {
        return this['application_urn'];
    }
    public withBody(body: CreateApplicationEndpointRequestBody): CreateApplicationEndpointRequest {
        this['body'] = body;
        return this;
    }
}