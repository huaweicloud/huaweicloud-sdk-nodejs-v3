import { CreateNatTagRequestBody } from './CreateNatTagRequestBody';


export class CreateNatGatewayTagRequest {
    private 'nat_gateway_id'?: string;
    public body?: CreateNatTagRequestBody;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): CreateNatGatewayTagRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withBody(body: CreateNatTagRequestBody): CreateNatGatewayTagRequest {
        this['body'] = body;
        return this;
    }
}