import { UpdateVirtualGatewayRequestBody } from './UpdateVirtualGatewayRequestBody';


export class UpdateVirtualGatewayRequest {
    private 'virtual_gateway_id'?: string;
    public body?: UpdateVirtualGatewayRequestBody;
    public constructor(virtualGatewayId?: string) { 
        this['virtual_gateway_id'] = virtualGatewayId;
    }
    public withVirtualGatewayId(virtualGatewayId: string): UpdateVirtualGatewayRequest {
        this['virtual_gateway_id'] = virtualGatewayId;
        return this;
    }
    public set virtualGatewayId(virtualGatewayId: string  | undefined) {
        this['virtual_gateway_id'] = virtualGatewayId;
    }
    public get virtualGatewayId(): string | undefined {
        return this['virtual_gateway_id'];
    }
    public withBody(body: UpdateVirtualGatewayRequestBody): UpdateVirtualGatewayRequest {
        this['body'] = body;
        return this;
    }
}