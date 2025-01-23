

export class ListAvailabilityZonesRequest {
    private 'public_border_group'?: string;
    private 'loadbalancer_id'?: string;
    public constructor() { 
    }
    public withPublicBorderGroup(publicBorderGroup: string): ListAvailabilityZonesRequest {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withLoadbalancerId(loadbalancerId: string): ListAvailabilityZonesRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
}