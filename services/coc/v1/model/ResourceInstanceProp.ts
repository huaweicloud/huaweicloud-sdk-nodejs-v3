

export class ResourceInstanceProp {
    private 'host_name'?: string;
    private 'fixed_ip'?: string;
    private 'floating_ip'?: string;
    private 'region_id'?: string;
    private 'zone_id'?: string;
    public application?: string;
    public group?: string;
    private 'project_id'?: string;
    public constructor(hostName?: string, fixedIp?: string, regionId?: string, zoneId?: string) { 
        this['host_name'] = hostName;
        this['fixed_ip'] = fixedIp;
        this['region_id'] = regionId;
        this['zone_id'] = zoneId;
    }
    public withHostName(hostName: string): ResourceInstanceProp {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withFixedIp(fixedIp: string): ResourceInstanceProp {
        this['fixed_ip'] = fixedIp;
        return this;
    }
    public set fixedIp(fixedIp: string  | undefined) {
        this['fixed_ip'] = fixedIp;
    }
    public get fixedIp(): string | undefined {
        return this['fixed_ip'];
    }
    public withFloatingIp(floatingIp: string): ResourceInstanceProp {
        this['floating_ip'] = floatingIp;
        return this;
    }
    public set floatingIp(floatingIp: string  | undefined) {
        this['floating_ip'] = floatingIp;
    }
    public get floatingIp(): string | undefined {
        return this['floating_ip'];
    }
    public withRegionId(regionId: string): ResourceInstanceProp {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withZoneId(zoneId: string): ResourceInstanceProp {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withApplication(application: string): ResourceInstanceProp {
        this['application'] = application;
        return this;
    }
    public withGroup(group: string): ResourceInstanceProp {
        this['group'] = group;
        return this;
    }
    public withProjectId(projectId: string): ResourceInstanceProp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}