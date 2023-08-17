import { CreateVirtualGatewayRequestBody } from './CreateVirtualGatewayRequestBody';


export class CreateVirtualGatewayRequest {
    public body?: CreateVirtualGatewayRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVirtualGatewayRequestBody): CreateVirtualGatewayRequest {
        this['body'] = body;
        return this;
    }
}