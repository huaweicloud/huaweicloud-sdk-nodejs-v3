

export class AvailableHostListDataList {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'agent_id'?: string;
    private 'conflict_port'?: Array<number>;
    private 'os_type'?: string;
    private 'group_name'?: string;
    private 'group_id'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): AvailableHostListDataList {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): AvailableHostListDataList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): AvailableHostListDataList {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAgentId(agentId: string): AvailableHostListDataList {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withConflictPort(conflictPort: Array<number>): AvailableHostListDataList {
        this['conflict_port'] = conflictPort;
        return this;
    }
    public set conflictPort(conflictPort: Array<number>  | undefined) {
        this['conflict_port'] = conflictPort;
    }
    public get conflictPort(): Array<number> | undefined {
        return this['conflict_port'];
    }
    public withOsType(osType: string): AvailableHostListDataList {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withGroupName(groupName: string): AvailableHostListDataList {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): AvailableHostListDataList {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}