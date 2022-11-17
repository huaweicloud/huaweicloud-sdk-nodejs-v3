import { CreateApplicationEndpointRequestBody } from './CreateApplicationEndpointRequestBody';


export class CreateApplicationEndpointRequest {
    private 'application_urn': string | undefined;
    public body?: CreateApplicationEndpointRequestBody;
    public constructor(applicationUrn?: any) { 
        this['application_urn'] = applicationUrn;
    }
    public withApplicationUrn(applicationUrn: string): CreateApplicationEndpointRequest {
        this['application_urn'] = applicationUrn;
        return this;
    }
    public set applicationUrn(applicationUrn: string | undefined) {
        this['application_urn'] = applicationUrn;
    }
    public get applicationUrn() {
        return this['application_urn'];
    }
    public withBody(body: CreateApplicationEndpointRequestBody): CreateApplicationEndpointRequest {
        this['body'] = body;
        return this;
    }
}