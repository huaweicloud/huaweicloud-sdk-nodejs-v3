

export class TicsAgentDeployDetail {
    private 'agent_access_address'?: string;
    private 'agent_id'?: string;
    private 'cce_cluster_id'?: string;
    private 'cce_cluster_name'?: string;
    private 'console_ip'?: string;
    private 'console_port'?: number;
    private 'host_path'?: string;
    private 'namespace_name'?: string;
    private 'obs_pvc_name'?: string;
    private 'persistence_id'?: string;
    private 'resource_spec_code'?: string;
    private 'web_port'?: number;
    public constructor() { 
    }
    public withAgentAccessAddress(agentAccessAddress: string): TicsAgentDeployDetail {
        this['agent_access_address'] = agentAccessAddress;
        return this;
    }
    public set agentAccessAddress(agentAccessAddress: string  | undefined) {
        this['agent_access_address'] = agentAccessAddress;
    }
    public get agentAccessAddress(): string | undefined {
        return this['agent_access_address'];
    }
    public withAgentId(agentId: string): TicsAgentDeployDetail {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withCceClusterId(cceClusterId: string): TicsAgentDeployDetail {
        this['cce_cluster_id'] = cceClusterId;
        return this;
    }
    public set cceClusterId(cceClusterId: string  | undefined) {
        this['cce_cluster_id'] = cceClusterId;
    }
    public get cceClusterId(): string | undefined {
        return this['cce_cluster_id'];
    }
    public withCceClusterName(cceClusterName: string): TicsAgentDeployDetail {
        this['cce_cluster_name'] = cceClusterName;
        return this;
    }
    public set cceClusterName(cceClusterName: string  | undefined) {
        this['cce_cluster_name'] = cceClusterName;
    }
    public get cceClusterName(): string | undefined {
        return this['cce_cluster_name'];
    }
    public withConsoleIp(consoleIp: string): TicsAgentDeployDetail {
        this['console_ip'] = consoleIp;
        return this;
    }
    public set consoleIp(consoleIp: string  | undefined) {
        this['console_ip'] = consoleIp;
    }
    public get consoleIp(): string | undefined {
        return this['console_ip'];
    }
    public withConsolePort(consolePort: number): TicsAgentDeployDetail {
        this['console_port'] = consolePort;
        return this;
    }
    public set consolePort(consolePort: number  | undefined) {
        this['console_port'] = consolePort;
    }
    public get consolePort(): number | undefined {
        return this['console_port'];
    }
    public withHostPath(hostPath: string): TicsAgentDeployDetail {
        this['host_path'] = hostPath;
        return this;
    }
    public set hostPath(hostPath: string  | undefined) {
        this['host_path'] = hostPath;
    }
    public get hostPath(): string | undefined {
        return this['host_path'];
    }
    public withNamespaceName(namespaceName: string): TicsAgentDeployDetail {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withObsPvcName(obsPvcName: string): TicsAgentDeployDetail {
        this['obs_pvc_name'] = obsPvcName;
        return this;
    }
    public set obsPvcName(obsPvcName: string  | undefined) {
        this['obs_pvc_name'] = obsPvcName;
    }
    public get obsPvcName(): string | undefined {
        return this['obs_pvc_name'];
    }
    public withPersistenceId(persistenceId: string): TicsAgentDeployDetail {
        this['persistence_id'] = persistenceId;
        return this;
    }
    public set persistenceId(persistenceId: string  | undefined) {
        this['persistence_id'] = persistenceId;
    }
    public get persistenceId(): string | undefined {
        return this['persistence_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): TicsAgentDeployDetail {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withWebPort(webPort: number): TicsAgentDeployDetail {
        this['web_port'] = webPort;
        return this;
    }
    public set webPort(webPort: number  | undefined) {
        this['web_port'] = webPort;
    }
    public get webPort(): number | undefined {
        return this['web_port'];
    }
}