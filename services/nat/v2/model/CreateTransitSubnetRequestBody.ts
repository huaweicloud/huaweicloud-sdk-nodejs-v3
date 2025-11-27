import { CreateTransitSubnetOption } from './CreateTransitSubnetOption';


export class CreateTransitSubnetRequestBody {
    private 'transit_subnet'?: CreateTransitSubnetOption;
    public constructor(transitSubnet?: CreateTransitSubnetOption) { 
        this['transit_subnet'] = transitSubnet;
    }
    public withTransitSubnet(transitSubnet: CreateTransitSubnetOption): CreateTransitSubnetRequestBody {
        this['transit_subnet'] = transitSubnet;
        return this;
    }
    public set transitSubnet(transitSubnet: CreateTransitSubnetOption  | undefined) {
        this['transit_subnet'] = transitSubnet;
    }
    public get transitSubnet(): CreateTransitSubnetOption | undefined {
        return this['transit_subnet'];
    }
}