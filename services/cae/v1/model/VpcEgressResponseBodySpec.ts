import { EgressCidr } from './EgressCidr';


export class VpcEgressResponseBodySpec {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public cidrs?: Array<EgressCidr>;
    public constructor() { 
    }
    public withVpcId(vpcId: string): VpcEgressResponseBodySpec {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): VpcEgressResponseBodySpec {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withCidrs(cidrs: Array<EgressCidr>): VpcEgressResponseBodySpec {
        this['cidrs'] = cidrs;
        return this;
    }
}