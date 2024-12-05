import { UpdateConnectGatewayRequestBody } from './UpdateConnectGatewayRequestBody';


export class UpdateConnectGatewayRequest {
    private 'connect_gateway_id'?: string;
    public body?: UpdateConnectGatewayRequestBody;
    public constructor(connectGatewayId?: string) { 
        this['connect_gateway_id'] = connectGatewayId;
    }
    public withConnectGatewayId(connectGatewayId: string): UpdateConnectGatewayRequest {
        this['connect_gateway_id'] = connectGatewayId;
        return this;
    }
    public set connectGatewayId(connectGatewayId: string  | undefined) {
        this['connect_gateway_id'] = connectGatewayId;
    }
    public get connectGatewayId(): string | undefined {
        return this['connect_gateway_id'];
    }
    public withBody(body: UpdateConnectGatewayRequestBody): UpdateConnectGatewayRequest {
        this['body'] = body;
        return this;
    }
}