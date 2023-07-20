

export class NovaCreateServersSchedulerHint {
    public group?: string;
    private 'different_host'?: Array<string>;
    private 'same_host'?: Array<string>;
    public cidr?: string;
    private 'build_near_host_ip'?: string;
    public tenancy?: string;
    private 'dedicated_host_id'?: string;
    public constructor() { 
    }
    public withGroup(group: string): NovaCreateServersSchedulerHint {
        this['group'] = group;
        return this;
    }
    public withDifferentHost(differentHost: Array<string>): NovaCreateServersSchedulerHint {
        this['different_host'] = differentHost;
        return this;
    }
    public set differentHost(differentHost: Array<string>  | undefined) {
        this['different_host'] = differentHost;
    }
    public get differentHost(): Array<string> | undefined {
        return this['different_host'];
    }
    public withSameHost(sameHost: Array<string>): NovaCreateServersSchedulerHint {
        this['same_host'] = sameHost;
        return this;
    }
    public set sameHost(sameHost: Array<string>  | undefined) {
        this['same_host'] = sameHost;
    }
    public get sameHost(): Array<string> | undefined {
        return this['same_host'];
    }
    public withCidr(cidr: string): NovaCreateServersSchedulerHint {
        this['cidr'] = cidr;
        return this;
    }
    public withBuildNearHostIp(buildNearHostIp: string): NovaCreateServersSchedulerHint {
        this['build_near_host_ip'] = buildNearHostIp;
        return this;
    }
    public set buildNearHostIp(buildNearHostIp: string  | undefined) {
        this['build_near_host_ip'] = buildNearHostIp;
    }
    public get buildNearHostIp(): string | undefined {
        return this['build_near_host_ip'];
    }
    public withTenancy(tenancy: string): NovaCreateServersSchedulerHint {
        this['tenancy'] = tenancy;
        return this;
    }
    public withDedicatedHostId(dedicatedHostId: string): NovaCreateServersSchedulerHint {
        this['dedicated_host_id'] = dedicatedHostId;
        return this;
    }
    public set dedicatedHostId(dedicatedHostId: string  | undefined) {
        this['dedicated_host_id'] = dedicatedHostId;
    }
    public get dedicatedHostId(): string | undefined {
        return this['dedicated_host_id'];
    }
}