

export class DeleteVirtualGatewayRequest {
    private 'virtual_gateway_id'?: string;
    public constructor(virtualGatewayId?: string) { 
        this['virtual_gateway_id'] = virtualGatewayId;
    }
    public withVirtualGatewayId(virtualGatewayId: string): DeleteVirtualGatewayRequest {
        this['virtual_gateway_id'] = virtualGatewayId;
        return this;
    }
    public set virtualGatewayId(virtualGatewayId: string  | undefined) {
        this['virtual_gateway_id'] = virtualGatewayId;
    }
    public get virtualGatewayId(): string | undefined {
        return this['virtual_gateway_id'];
    }
}