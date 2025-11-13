import { Vpc } from './Vpc';


export class AssociateResolverQueryLogConfigRequestBody {
    public vpc?: Vpc;
    public constructor(vpc?: Vpc) { 
        this['vpc'] = vpc;
    }
    public withVpc(vpc: Vpc): AssociateResolverQueryLogConfigRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}