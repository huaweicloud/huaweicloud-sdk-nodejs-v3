import { CreateVpcOption } from './CreateVpcOption';


export class CreateVpcRequestBody {
    public vpc: CreateVpcOption;
    public constructor(vpc?: any) { 
        this['vpc'] = vpc;
    }
    public withVpc(vpc: CreateVpcOption): CreateVpcRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}