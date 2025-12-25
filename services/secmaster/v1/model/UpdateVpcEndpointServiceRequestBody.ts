import { UpdateVpcepServiceInfo } from './UpdateVpcepServiceInfo';


export class UpdateVpcEndpointServiceRequestBody {
    public list?: Array<UpdateVpcepServiceInfo>;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withList(list: Array<UpdateVpcepServiceInfo>): UpdateVpcEndpointServiceRequestBody {
        this['list'] = list;
        return this;
    }
    public withSubnetId(subnetId: string): UpdateVpcEndpointServiceRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): UpdateVpcEndpointServiceRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}