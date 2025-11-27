import { UpdateTransitSubnetOption } from './UpdateTransitSubnetOption';


export class UpdateTransitSubnetRequestBody {
    private 'transit_subnet'?: UpdateTransitSubnetOption;
    public constructor(transitSubnet?: UpdateTransitSubnetOption) { 
        this['transit_subnet'] = transitSubnet;
    }
    public withTransitSubnet(transitSubnet: UpdateTransitSubnetOption): UpdateTransitSubnetRequestBody {
        this['transit_subnet'] = transitSubnet;
        return this;
    }
    public set transitSubnet(transitSubnet: UpdateTransitSubnetOption  | undefined) {
        this['transit_subnet'] = transitSubnet;
    }
    public get transitSubnet(): UpdateTransitSubnetOption | undefined {
        return this['transit_subnet'];
    }
}