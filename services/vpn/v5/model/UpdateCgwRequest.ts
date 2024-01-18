import { UpdateCgwRequestBody } from './UpdateCgwRequestBody';


export class UpdateCgwRequest {
    private 'customer_gateway_id'?: string;
    public body?: UpdateCgwRequestBody;
    public constructor(customerGatewayId?: string) { 
        this['customer_gateway_id'] = customerGatewayId;
    }
    public withCustomerGatewayId(customerGatewayId: string): UpdateCgwRequest {
        this['customer_gateway_id'] = customerGatewayId;
        return this;
    }
    public set customerGatewayId(customerGatewayId: string  | undefined) {
        this['customer_gateway_id'] = customerGatewayId;
    }
    public get customerGatewayId(): string | undefined {
        return this['customer_gateway_id'];
    }
    public withBody(body: UpdateCgwRequestBody): UpdateCgwRequest {
        this['body'] = body;
        return this;
    }
}