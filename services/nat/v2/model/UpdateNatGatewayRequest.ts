import { UpdateNatGatewayRequestBody } from './UpdateNatGatewayRequestBody';


export class UpdateNatGatewayRequest {
    private 'nat_gateway_id'?: string;
    public body?: UpdateNatGatewayRequestBody;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): UpdateNatGatewayRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withBody(body: UpdateNatGatewayRequestBody): UpdateNatGatewayRequest {
        this['body'] = body;
        return this;
    }
}