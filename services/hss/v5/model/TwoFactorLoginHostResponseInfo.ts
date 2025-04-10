

export class TwoFactorLoginHostResponseInfo {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'os_type'?: string;
    private 'auth_switch'?: boolean;
    private 'auth_type'?: string;
    private 'topic_display_name'?: string;
    private 'topic_urn'?: string;
    private 'outside_host'?: boolean;
    public constructor() { 
    }
    public withHostId(hostId: string): TwoFactorLoginHostResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): TwoFactorLoginHostResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withOsType(osType: string): TwoFactorLoginHostResponseInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withAuthSwitch(authSwitch: boolean): TwoFactorLoginHostResponseInfo {
        this['auth_switch'] = authSwitch;
        return this;
    }
    public set authSwitch(authSwitch: boolean  | undefined) {
        this['auth_switch'] = authSwitch;
    }
    public get authSwitch(): boolean | undefined {
        return this['auth_switch'];
    }
    public withAuthType(authType: string): TwoFactorLoginHostResponseInfo {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withTopicDisplayName(topicDisplayName: string): TwoFactorLoginHostResponseInfo {
        this['topic_display_name'] = topicDisplayName;
        return this;
    }
    public set topicDisplayName(topicDisplayName: string  | undefined) {
        this['topic_display_name'] = topicDisplayName;
    }
    public get topicDisplayName(): string | undefined {
        return this['topic_display_name'];
    }
    public withTopicUrn(topicUrn: string): TwoFactorLoginHostResponseInfo {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withOutsideHost(outsideHost: boolean): TwoFactorLoginHostResponseInfo {
        this['outside_host'] = outsideHost;
        return this;
    }
    public set outsideHost(outsideHost: boolean  | undefined) {
        this['outside_host'] = outsideHost;
    }
    public get outsideHost(): boolean | undefined {
        return this['outside_host'];
    }
}