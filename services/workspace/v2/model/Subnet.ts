

export class Subnet {
    private 'subnet_id'?: string;
    public constructor(subnetId?: string) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): Subnet {
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