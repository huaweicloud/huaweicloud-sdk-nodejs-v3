

export class ShowVirtualGatewayRequest {
    public fields?: Array<string>;
    private 'virtual_gateway_id'?: string;
    public constructor(virtualGatewayId?: string) { 
        this['virtual_gateway_id'] = virtualGatewayId;
    }
    public withFields(fields: Array<string>): ShowVirtualGatewayRequest {
        this['fields'] = fields;
        return this;
    }
    public withVirtualGatewayId(virtualGatewayId: string): ShowVirtualGatewayRequest {
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