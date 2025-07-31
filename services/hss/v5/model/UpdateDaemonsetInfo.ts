

export class UpdateDaemonsetInfo {
    private 'agent_version'?: string;
    private 'cluster_id'?: string;
    public constructor(agentVersion?: string, clusterId?: string) { 
        this['agent_version'] = agentVersion;
        this['cluster_id'] = clusterId;
    }
    public withAgentVersion(agentVersion: string): UpdateDaemonsetInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withClusterId(clusterId: string): UpdateDaemonsetInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}