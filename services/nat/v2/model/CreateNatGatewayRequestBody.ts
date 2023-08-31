import { CreateNatGatewayOption } from './CreateNatGatewayOption';


export class CreateNatGatewayRequestBody {
    private 'nat_gateway'?: CreateNatGatewayOption;
    public constructor(natGateway?: CreateNatGatewayOption) { 
        this['nat_gateway'] = natGateway;
    }
    public withNatGateway(natGateway: CreateNatGatewayOption): CreateNatGatewayRequestBody {
        this['nat_gateway'] = natGateway;
        return this;
    }
    public set natGateway(natGateway: CreateNatGatewayOption  | undefined) {
        this['nat_gateway'] = natGateway;
    }
    public get natGateway(): CreateNatGatewayOption | undefined {
        return this['nat_gateway'];
    }
}