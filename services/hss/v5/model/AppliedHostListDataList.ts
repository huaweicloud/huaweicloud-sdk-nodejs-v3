

export class AppliedHostListDataList {
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'agent_id'?: string;
    private 'conflict_port'?: Array<number>;
    private 'applied_port'?: Array<number>;
    public constructor() { 
    }
    public withHostId(hostId: string): AppliedHostListDataList {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): AppliedHostListDataList {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): AppliedHostListDataList {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withAgentId(agentId: string): AppliedHostListDataList {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withConflictPort(conflictPort: Array<number>): AppliedHostListDataList {
        this['conflict_port'] = conflictPort;
        return this;
    }
    public set conflictPort(conflictPort: Array<number>  | undefined) {
        this['conflict_port'] = conflictPort;
    }
    public get conflictPort(): Array<number> | undefined {
        return this['conflict_port'];
    }
    public withAppliedPort(appliedPort: Array<number>): AppliedHostListDataList {
        this['applied_port'] = appliedPort;
        return this;
    }
    public set appliedPort(appliedPort: Array<number>  | undefined) {
        this['applied_port'] = appliedPort;
    }
    public get appliedPort(): Array<number> | undefined {
        return this['applied_port'];
    }
}