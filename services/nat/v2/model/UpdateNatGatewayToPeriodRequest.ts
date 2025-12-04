import { UpdateNatGatewayToPeriodRequestBody } from './UpdateNatGatewayToPeriodRequestBody';


export class UpdateNatGatewayToPeriodRequest {
    private 'nat_gateway_id'?: string;
    public body?: UpdateNatGatewayToPeriodRequestBody;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): UpdateNatGatewayToPeriodRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withBody(body: UpdateNatGatewayToPeriodRequestBody): UpdateNatGatewayToPeriodRequest {
        this['body'] = body;
        return this;
    }
}