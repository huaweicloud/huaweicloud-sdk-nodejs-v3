import { UpdateNatGatewayOption } from './UpdateNatGatewayOption';


export class UpdateNatGatewayRequestBody {
    private 'nat_gateway'?: UpdateNatGatewayOption;
    public constructor(natGateway?: UpdateNatGatewayOption) { 
        this['nat_gateway'] = natGateway;
    }
    public withNatGateway(natGateway: UpdateNatGatewayOption): UpdateNatGatewayRequestBody {
        this['nat_gateway'] = natGateway;
        return this;
    }
    public set natGateway(natGateway: UpdateNatGatewayOption  | undefined) {
        this['nat_gateway'] = natGateway;
    }
    public get natGateway(): UpdateNatGatewayOption | undefined {
        return this['nat_gateway'];
    }
}