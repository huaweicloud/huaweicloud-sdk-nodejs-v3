import { CreateEndpointRequestBody } from './CreateEndpointRequestBody';


export class CreateEndpointRequest {
    private 'Content-Type'?: string | undefined;
    public body?: CreateEndpointRequestBody;
    public constructor() { 
    }
    public withContentType(contentType: string): CreateEndpointRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateEndpointRequestBody): CreateEndpointRequest {
        this['body'] = body;
        return this;
    }
}