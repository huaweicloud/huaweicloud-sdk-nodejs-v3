

export class ShowHttp2RpcsRequest {
    private 'gateway_id'?: string;
    private 'Accept'?: string;
    public constructor(gatewayId?: string) { 
        this['gateway_id'] = gatewayId;
    }
    public withGatewayId(gatewayId: string): ShowHttp2RpcsRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withAccept(accept: string): ShowHttp2RpcsRequest {
        this['Accept'] = accept;
        return this;
    }
    public set accept(accept: string  | undefined) {
        this['Accept'] = accept;
    }
    public get accept(): string | undefined {
        return this['Accept'];
    }
}