

export class SupabaseAppBasicConfig {
    public region?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'time_zone'?: string;
    public constructor(region?: string, vpcId?: string, subnetId?: string) { 
        this['region'] = region;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withRegion(region: string): SupabaseAppBasicConfig {
        this['region'] = region;
        return this;
    }
    public withVpcId(vpcId: string): SupabaseAppBasicConfig {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): SupabaseAppBasicConfig {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withTimeZone(timeZone: string): SupabaseAppBasicConfig {
        this['time_zone'] = timeZone;
        return this;
    }
    public set timeZone(timeZone: string  | undefined) {
        this['time_zone'] = timeZone;
    }
    public get timeZone(): string | undefined {
        return this['time_zone'];
    }
}