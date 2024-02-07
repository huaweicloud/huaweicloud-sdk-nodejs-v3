import { UpdateTenantVpcIgwRequestBodyVpcIgw } from './UpdateTenantVpcIgwRequestBodyVpcIgw';


export class UpdateTenantVpcIgwRequestBody {
    private 'vpc_igw'?: UpdateTenantVpcIgwRequestBodyVpcIgw;
    public constructor(vpcIgw?: UpdateTenantVpcIgwRequestBodyVpcIgw) { 
        this['vpc_igw'] = vpcIgw;
    }
    public withVpcIgw(vpcIgw: UpdateTenantVpcIgwRequestBodyVpcIgw): UpdateTenantVpcIgwRequestBody {
        this['vpc_igw'] = vpcIgw;
        return this;
    }
    public set vpcIgw(vpcIgw: UpdateTenantVpcIgwRequestBodyVpcIgw  | undefined) {
        this['vpc_igw'] = vpcIgw;
    }
    public get vpcIgw(): UpdateTenantVpcIgwRequestBodyVpcIgw | undefined {
        return this['vpc_igw'];
    }
}