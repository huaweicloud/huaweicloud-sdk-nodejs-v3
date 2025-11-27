

export class CountOtherResourceRequest {
    private 'is_delegated'?: boolean;
    public type?: string;
    private 'is_delegate_domain'?: boolean;
    private 'name_list'?: Array<string>;
    private 'region_id'?: string;
    private 'create_since'?: string;
    private 'create_until'?: string;
    public ip?: string;
    private 'os_type'?: string;
    private 'os_version_list'?: string;
    private 'agent_state'?: string;
    public constructor() { 
    }
    public withIsDelegated(isDelegated: boolean): CountOtherResourceRequest {
        this['is_delegated'] = isDelegated;
        return this;
    }
    public set isDelegated(isDelegated: boolean  | undefined) {
        this['is_delegated'] = isDelegated;
    }
    public get isDelegated(): boolean | undefined {
        return this['is_delegated'];
    }
    public withType(type: string): CountOtherResourceRequest {
        this['type'] = type;
        return this;
    }
    public withIsDelegateDomain(isDelegateDomain: boolean): CountOtherResourceRequest {
        this['is_delegate_domain'] = isDelegateDomain;
        return this;
    }
    public set isDelegateDomain(isDelegateDomain: boolean  | undefined) {
        this['is_delegate_domain'] = isDelegateDomain;
    }
    public get isDelegateDomain(): boolean | undefined {
        return this['is_delegate_domain'];
    }
    public withNameList(nameList: Array<string>): CountOtherResourceRequest {
        this['name_list'] = nameList;
        return this;
    }
    public set nameList(nameList: Array<string>  | undefined) {
        this['name_list'] = nameList;
    }
    public get nameList(): Array<string> | undefined {
        return this['name_list'];
    }
    public withRegionId(regionId: string): CountOtherResourceRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withCreateSince(createSince: string): CountOtherResourceRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withCreateUntil(createUntil: string): CountOtherResourceRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
    public withIp(ip: string): CountOtherResourceRequest {
        this['ip'] = ip;
        return this;
    }
    public withOsType(osType: string): CountOtherResourceRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsVersionList(osVersionList: string): CountOtherResourceRequest {
        this['os_version_list'] = osVersionList;
        return this;
    }
    public set osVersionList(osVersionList: string  | undefined) {
        this['os_version_list'] = osVersionList;
    }
    public get osVersionList(): string | undefined {
        return this['os_version_list'];
    }
    public withAgentState(agentState: string): CountOtherResourceRequest {
        this['agent_state'] = agentState;
        return this;
    }
    public set agentState(agentState: string  | undefined) {
        this['agent_state'] = agentState;
    }
    public get agentState(): string | undefined {
        return this['agent_state'];
    }
}