import { UpdateSubnetOption } from './UpdateSubnetOption';


export class UpdateSubnetRequestBody {
    public subnet: UpdateSubnetOption;
    public constructor(subnet?: any) { 
        this['subnet'] = subnet;
    }
    public withSubnet(subnet: UpdateSubnetOption): UpdateSubnetRequestBody {
        this['subnet'] = subnet;
        return this;
    }
}