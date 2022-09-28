import { CreateEndpointServiceRequestBody } from './CreateEndpointServiceRequestBody';


export class CreateEndpointServiceRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateEndpointServiceRequestBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateEndpointServiceRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateEndpointServiceRequestBody): CreateEndpointServiceRequest {
        this['body'] = body;
        return this;
    }
}