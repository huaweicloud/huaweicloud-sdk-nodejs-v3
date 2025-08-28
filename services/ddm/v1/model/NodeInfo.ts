

export class NodeInfo {
    private 'available_zone'?: string;
    private 'subnet_id'?: string;
    public constructor(availableZone?: string, subnetId?: string) { 
        this['available_zone'] = availableZone;
        this['subnet_id'] = subnetId;
    }
    public withAvailableZone(availableZone: string): NodeInfo {
        this['available_zone'] = availableZone;
        return this;
    }
    public set availableZone(availableZone: string  | undefined) {
        this['available_zone'] = availableZone;
    }
    public get availableZone(): string | undefined {
        return this['available_zone'];
    }
    public withSubnetId(subnetId: string): NodeInfo {
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