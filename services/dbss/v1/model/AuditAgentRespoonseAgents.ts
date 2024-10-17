

export class AuditAgentRespoonseAgents {
    private 'agent_id'?: string;
    private 'agent_type'?: string;
    private 'agent_os'?: string;
    private 'agent_ip'?: string;
    private 'mem_threshold'?: number;
    private 'cpu_threshold'?: number;
    public status?: number;
    private 'agent_nic'?: string;
    private 'db_name'?: string;
    private 'datacap_status'?: number;
    private 'agent_url'?: string;
    public universal?: boolean;
    public sha256?: string;
    public constructor(agentId?: string, agentType?: string, agentOs?: string, agentIp?: string) { 
        this['agent_id'] = agentId;
        this['agent_type'] = agentType;
        this['agent_os'] = agentOs;
        this['agent_ip'] = agentIp;
    }
    public withAgentId(agentId: string): AuditAgentRespoonseAgents {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentType(agentType: string): AuditAgentRespoonseAgents {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): string | undefined {
        return this['agent_type'];
    }
    public withAgentOs(agentOs: string): AuditAgentRespoonseAgents {
        this['agent_os'] = agentOs;
        return this;
    }
    public set agentOs(agentOs: string  | undefined) {
        this['agent_os'] = agentOs;
    }
    public get agentOs(): string | undefined {
        return this['agent_os'];
    }
    public withAgentIp(agentIp: string): AuditAgentRespoonseAgents {
        this['agent_ip'] = agentIp;
        return this;
    }
    public set agentIp(agentIp: string  | undefined) {
        this['agent_ip'] = agentIp;
    }
    public get agentIp(): string | undefined {
        return this['agent_ip'];
    }
    public withMemThreshold(memThreshold: number): AuditAgentRespoonseAgents {
        this['mem_threshold'] = memThreshold;
        return this;
    }
    public set memThreshold(memThreshold: number  | undefined) {
        this['mem_threshold'] = memThreshold;
    }
    public get memThreshold(): number | undefined {
        return this['mem_threshold'];
    }
    public withCpuThreshold(cpuThreshold: number): AuditAgentRespoonseAgents {
        this['cpu_threshold'] = cpuThreshold;
        return this;
    }
    public set cpuThreshold(cpuThreshold: number  | undefined) {
        this['cpu_threshold'] = cpuThreshold;
    }
    public get cpuThreshold(): number | undefined {
        return this['cpu_threshold'];
    }
    public withStatus(status: number): AuditAgentRespoonseAgents {
        this['status'] = status;
        return this;
    }
    public withAgentNic(agentNic: string): AuditAgentRespoonseAgents {
        this['agent_nic'] = agentNic;
        return this;
    }
    public set agentNic(agentNic: string  | undefined) {
        this['agent_nic'] = agentNic;
    }
    public get agentNic(): string | undefined {
        return this['agent_nic'];
    }
    public withDbName(dbName: string): AuditAgentRespoonseAgents {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDatacapStatus(datacapStatus: number): AuditAgentRespoonseAgents {
        this['datacap_status'] = datacapStatus;
        return this;
    }
    public set datacapStatus(datacapStatus: number  | undefined) {
        this['datacap_status'] = datacapStatus;
    }
    public get datacapStatus(): number | undefined {
        return this['datacap_status'];
    }
    public withAgentUrl(agentUrl: string): AuditAgentRespoonseAgents {
        this['agent_url'] = agentUrl;
        return this;
    }
    public set agentUrl(agentUrl: string  | undefined) {
        this['agent_url'] = agentUrl;
    }
    public get agentUrl(): string | undefined {
        return this['agent_url'];
    }
    public withUniversal(universal: boolean): AuditAgentRespoonseAgents {
        this['universal'] = universal;
        return this;
    }
    public withSha256(sha256: string): AuditAgentRespoonseAgents {
        this['sha256'] = sha256;
        return this;
    }
}