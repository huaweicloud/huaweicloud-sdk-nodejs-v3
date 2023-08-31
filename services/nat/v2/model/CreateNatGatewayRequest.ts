import { CreateNatGatewayRequestBody } from './CreateNatGatewayRequestBody';


export class CreateNatGatewayRequest {
    public body?: CreateNatGatewayRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateNatGatewayRequestBody): CreateNatGatewayRequest {
        this['body'] = body;
        return this;
    }
}