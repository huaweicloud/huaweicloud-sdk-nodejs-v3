

export class SubnetInfo {
    private 'subnet_id'?: string;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): SubnetInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}