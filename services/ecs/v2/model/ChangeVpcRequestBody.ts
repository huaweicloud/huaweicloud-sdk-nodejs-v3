import { ChangeVpcNicBody } from './ChangeVpcNicBody';


export class ChangeVpcRequestBody {
    private 'vpc_id'?: string;
    public nic?: ChangeVpcNicBody;
    public constructor(vpcId?: string, nic?: ChangeVpcNicBody) { 
        this['vpc_id'] = vpcId;
        this['nic'] = nic;
    }
    public withVpcId(vpcId: string): ChangeVpcRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withNic(nic: ChangeVpcNicBody): ChangeVpcRequestBody {
        this['nic'] = nic;
        return this;
    }
}