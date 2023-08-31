

export class ShowPrivateNatRequest {
    private 'gateway_id'?: string;
    public constructor(gatewayId?: string) { 
        this['gateway_id'] = gatewayId;
    }
    public withGatewayId(gatewayId: string): ShowPrivateNatRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
}