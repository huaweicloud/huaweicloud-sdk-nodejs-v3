

export class ListSubnetsRequest {
    private 'vpc_id'?: string;
    private 'availability_zone_id'?: string;
    public constructor() { 
    }
    public withVpcId(vpcId: string): ListSubnetsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withAvailabilityZoneId(availabilityZoneId: string): ListSubnetsRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
}