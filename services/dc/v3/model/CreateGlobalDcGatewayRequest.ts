import { CreateGlobalDcGatewayRequestBody } from './CreateGlobalDcGatewayRequestBody';


export class CreateGlobalDcGatewayRequest {
    public body?: CreateGlobalDcGatewayRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateGlobalDcGatewayRequestBody): CreateGlobalDcGatewayRequest {
        this['body'] = body;
        return this;
    }
}