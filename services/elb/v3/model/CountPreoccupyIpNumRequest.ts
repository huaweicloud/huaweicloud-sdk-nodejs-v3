

export class CountPreoccupyIpNumRequest {
    private 'l7_flavor_id'?: string;
    private 'ip_target_enable'?: boolean;
    private 'ip_version'?: number;
    private 'loadbalancer_id'?: string;
    private 'availability_zone_id'?: Array<string>;
    public scene?: string;
    private 'nat64_enable'?: boolean;
    public constructor() { 
    }
    public withL7FlavorId(l7FlavorId: string): CountPreoccupyIpNumRequest {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string  | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId(): string | undefined {
        return this['l7_flavor_id'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): CountPreoccupyIpNumRequest {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean  | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable(): boolean | undefined {
        return this['ip_target_enable'];
    }
    public withIpVersion(ipVersion: number): CountPreoccupyIpNumRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withLoadbalancerId(loadbalancerId: string): CountPreoccupyIpNumRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withAvailabilityZoneId(availabilityZoneId: Array<string>): CountPreoccupyIpNumRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: Array<string>  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): Array<string> | undefined {
        return this['availability_zone_id'];
    }
    public withScene(scene: string): CountPreoccupyIpNumRequest {
        this['scene'] = scene;
        return this;
    }
    public withNat64Enable(nat64Enable: boolean): CountPreoccupyIpNumRequest {
        this['nat64_enable'] = nat64Enable;
        return this;
    }
    public set nat64Enable(nat64Enable: boolean  | undefined) {
        this['nat64_enable'] = nat64Enable;
    }
    public get nat64Enable(): boolean | undefined {
        return this['nat64_enable'];
    }
}