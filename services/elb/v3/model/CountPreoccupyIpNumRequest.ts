

export class CountPreoccupyIpNumRequest {
    private 'l7_flavor_id'?: string | undefined;
    private 'ip_target_enable'?: boolean | undefined;
    private 'ip_version'?: number | undefined;
    private 'loadbalancer_id'?: string | undefined;
    private 'availability_zone_id'?: Array<string> | undefined;
    public constructor() { 
    }
    public withL7FlavorId(l7FlavorId: string): CountPreoccupyIpNumRequest {
        this['l7_flavor_id'] = l7FlavorId;
        return this;
    }
    public set l7FlavorId(l7FlavorId: string | undefined) {
        this['l7_flavor_id'] = l7FlavorId;
    }
    public get l7FlavorId() {
        return this['l7_flavor_id'];
    }
    public withIpTargetEnable(ipTargetEnable: boolean): CountPreoccupyIpNumRequest {
        this['ip_target_enable'] = ipTargetEnable;
        return this;
    }
    public set ipTargetEnable(ipTargetEnable: boolean | undefined) {
        this['ip_target_enable'] = ipTargetEnable;
    }
    public get ipTargetEnable() {
        return this['ip_target_enable'];
    }
    public withIpVersion(ipVersion: number): CountPreoccupyIpNumRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withLoadbalancerId(loadbalancerId: string): CountPreoccupyIpNumRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId() {
        return this['loadbalancer_id'];
    }
    public withAvailabilityZoneId(availabilityZoneId: Array<string>): CountPreoccupyIpNumRequest {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: Array<string> | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId() {
        return this['availability_zone_id'];
    }
}