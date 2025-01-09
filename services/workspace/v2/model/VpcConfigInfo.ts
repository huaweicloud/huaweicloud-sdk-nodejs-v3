

export class VpcConfigInfo {
    private 'used_subnet_ids'?: Array<string>;
    private 'vpc_id'?: string;
    private 'subnet_ids'?: Array<string>;
    private 'default_access_vpc'?: boolean;
    public constructor() { 
    }
    public withUsedSubnetIds(usedSubnetIds: Array<string>): VpcConfigInfo {
        this['used_subnet_ids'] = usedSubnetIds;
        return this;
    }
    public set usedSubnetIds(usedSubnetIds: Array<string>  | undefined) {
        this['used_subnet_ids'] = usedSubnetIds;
    }
    public get usedSubnetIds(): Array<string> | undefined {
        return this['used_subnet_ids'];
    }
    public withVpcId(vpcId: string): VpcConfigInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetIds(subnetIds: Array<string>): VpcConfigInfo {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: Array<string>  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): Array<string> | undefined {
        return this['subnet_ids'];
    }
    public withDefaultAccessVpc(defaultAccessVpc: boolean): VpcConfigInfo {
        this['default_access_vpc'] = defaultAccessVpc;
        return this;
    }
    public set defaultAccessVpc(defaultAccessVpc: boolean  | undefined) {
        this['default_access_vpc'] = defaultAccessVpc;
    }
    public get defaultAccessVpc(): boolean | undefined {
        return this['default_access_vpc'];
    }
}