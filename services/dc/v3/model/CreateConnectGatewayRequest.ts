import { CreateConnectGatewayRequestBody } from './CreateConnectGatewayRequestBody';


export class CreateConnectGatewayRequest {
    public body?: CreateConnectGatewayRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateConnectGatewayRequestBody): CreateConnectGatewayRequest {
        this['body'] = body;
        return this;
    }
}