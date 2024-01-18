

export class ShowCgwRequest {
    private 'customer_gateway_id'?: string;
    public constructor(customerGatewayId?: string) { 
        this['customer_gateway_id'] = customerGatewayId;
    }
    public withCustomerGatewayId(customerGatewayId: string): ShowCgwRequest {
        this['customer_gateway_id'] = customerGatewayId;
        return this;
    }
    public set customerGatewayId(customerGatewayId: string  | undefined) {
        this['customer_gateway_id'] = customerGatewayId;
    }
    public get customerGatewayId(): string | undefined {
        return this['customer_gateway_id'];
    }
}