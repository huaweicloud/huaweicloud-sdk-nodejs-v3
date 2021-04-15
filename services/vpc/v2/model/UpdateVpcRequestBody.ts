import { UpdateVpcOption } from './UpdateVpcOption';


export class UpdateVpcRequestBody {
    public vpc: UpdateVpcOption;
    public constructor(vpc?: any) { 
        this['vpc'] = vpc;
    }
    public withVpc(vpc: UpdateVpcOption): UpdateVpcRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}