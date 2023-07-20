import { CreateSubnetOption } from './CreateSubnetOption';


export class CreateSubnetRequestBody {
    public subnet?: CreateSubnetOption;
    public constructor(subnet?: CreateSubnetOption) { 
        this['subnet'] = subnet;
    }
    public withSubnet(subnet: CreateSubnetOption): CreateSubnetRequestBody {
        this['subnet'] = subnet;
        return this;
    }
}