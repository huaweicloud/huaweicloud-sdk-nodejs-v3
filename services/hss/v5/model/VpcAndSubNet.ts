

export class VpcAndSubNet {
    private 'vpc_id'?: string;
    private 'subnet_id_list'?: Array<string>;
    public constructor(vpcId?: string, subnetIdList?: Array<string>) { 
        this['vpc_id'] = vpcId;
        this['subnet_id_list'] = subnetIdList;
    }
    public withVpcId(vpcId: string): VpcAndSubNet {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIdList(subnetIdList: Array<string>): VpcAndSubNet {
        this['subnet_id_list'] = subnetIdList;
        return this;
    }
    public set subnetIdList(subnetIdList: Array<string>  | undefined) {
        this['subnet_id_list'] = subnetIdList;
    }
    public get subnetIdList(): Array<string> | undefined {
        return this['subnet_id_list'];
    }
}