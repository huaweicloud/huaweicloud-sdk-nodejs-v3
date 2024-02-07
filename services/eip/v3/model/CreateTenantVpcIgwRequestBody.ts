import { CreateTenantVpcIgwRequestBodyVpcIgw } from './CreateTenantVpcIgwRequestBodyVpcIgw';


export class CreateTenantVpcIgwRequestBody {
    private 'vpc_igw'?: CreateTenantVpcIgwRequestBodyVpcIgw;
    public constructor(vpcIgw?: CreateTenantVpcIgwRequestBodyVpcIgw) { 
        this['vpc_igw'] = vpcIgw;
    }
    public withVpcIgw(vpcIgw: CreateTenantVpcIgwRequestBodyVpcIgw): CreateTenantVpcIgwRequestBody {
        this['vpc_igw'] = vpcIgw;
        return this;
    }
    public set vpcIgw(vpcIgw: CreateTenantVpcIgwRequestBodyVpcIgw  | undefined) {
        this['vpc_igw'] = vpcIgw;
    }
    public get vpcIgw(): CreateTenantVpcIgwRequestBodyVpcIgw | undefined {
        return this['vpc_igw'];
    }
}