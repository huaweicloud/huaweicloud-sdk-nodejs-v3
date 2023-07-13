import { NeutronCreateSubnetOption } from './NeutronCreateSubnetOption';


export class NeutronCreateSubnetRequestBody {
    public subnet: NeutronCreateSubnetOption;
    public constructor(subnet?: any) { 
        this['subnet'] = subnet;
    }
    public withSubnet(subnet: NeutronCreateSubnetOption): NeutronCreateSubnetRequestBody {
        this['subnet'] = subnet;
        return this;
    }
}