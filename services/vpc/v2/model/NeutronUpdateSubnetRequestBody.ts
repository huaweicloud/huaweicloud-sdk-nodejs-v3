import { NeutronUpdateSubnetOption } from './NeutronUpdateSubnetOption';


export class NeutronUpdateSubnetRequestBody {
    public subnet?: NeutronUpdateSubnetOption;
    public constructor(subnet?: NeutronUpdateSubnetOption) { 
        this['subnet'] = subnet;
    }
    public withSubnet(subnet: NeutronUpdateSubnetOption): NeutronUpdateSubnetRequestBody {
        this['subnet'] = subnet;
        return this;
    }
}