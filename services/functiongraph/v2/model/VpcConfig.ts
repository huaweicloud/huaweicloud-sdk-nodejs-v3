

export class VpcConfig {
    private 'vpc_name'?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withVpcName(vpcName: string): VpcConfig {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withVpcId(vpcId: string): VpcConfig {
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