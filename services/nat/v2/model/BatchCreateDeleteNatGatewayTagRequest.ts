import { BatchCreateDeleteNatTagsRequestBody } from './BatchCreateDeleteNatTagsRequestBody';


export class BatchCreateDeleteNatGatewayTagRequest {
    private 'nat_gateway_id'?: string;
    public body?: BatchCreateDeleteNatTagsRequestBody;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): BatchCreateDeleteNatGatewayTagRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withBody(body: BatchCreateDeleteNatTagsRequestBody): BatchCreateDeleteNatGatewayTagRequest {
        this['body'] = body;
        return this;
    }
}