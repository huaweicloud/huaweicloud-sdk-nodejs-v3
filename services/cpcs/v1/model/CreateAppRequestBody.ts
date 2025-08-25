

export class CreateAppRequestBody {
    private 'app_name'?: string;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    public description?: string;
    public constructor(appName?: string, vpcId?: string, vpcName?: string, subnetId?: string, subnetName?: string) { 
        this['app_name'] = appName;
        this['vpc_id'] = vpcId;
        this['vpc_name'] = vpcName;
        this['subnet_id'] = subnetId;
        this['subnet_name'] = subnetName;
    }
    public withAppName(appName: string): CreateAppRequestBody {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withVpcId(vpcId: string): CreateAppRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): CreateAppRequestBody {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetId(subnetId: string): CreateAppRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): CreateAppRequestBody {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withDescription(description: string): CreateAppRequestBody {
        this['description'] = description;
        return this;
    }
}