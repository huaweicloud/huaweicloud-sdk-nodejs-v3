

export class DeleteConnectGatewayRequest {
    private 'connect_gateway_id'?: string;
    public constructor(connectGatewayId?: string) { 
        this['connect_gateway_id'] = connectGatewayId;
    }
    public withConnectGatewayId(connectGatewayId: string): DeleteConnectGatewayRequest {
        this['connect_gateway_id'] = connectGatewayId;
        return this;
    }
    public set connectGatewayId(connectGatewayId: string  | undefined) {
        this['connect_gateway_id'] = connectGatewayId;
    }
    public get connectGatewayId(): string | undefined {
        return this['connect_gateway_id'];
    }
}