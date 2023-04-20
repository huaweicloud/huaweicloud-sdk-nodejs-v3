

export class VpcConfig {
    private 'vpc_name'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    public constructor() { 
    }
    public withVpcName(vpcName: string): VpcConfig {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName() {
        return this['vpc_name'];
    }
    public withVpcId(vpcId: string): VpcConfig {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
}