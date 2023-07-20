

export class AgentRegister {
    private 'agent_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'host_os'?: string;
    private 'host_nickname'?: string;
    private 'agent_version'?: string;
    private 'agent_type'?: string;
    public constructor(agentId?: string, hostName?: string, hostIp?: string, hostOs?: string) { 
        this['agent_id'] = agentId;
        this['host_name'] = hostName;
        this['host_ip'] = hostIp;
        this['host_os'] = hostOs;
    }
    public withAgentId(agentId: string): AgentRegister {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostName(hostName: string): AgentRegister {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): AgentRegister {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withHostOs(hostOs: string): AgentRegister {
        this['host_os'] = hostOs;
        return this;
    }
    public set hostOs(hostOs: string  | undefined) {
        this['host_os'] = hostOs;
    }
    public get hostOs(): string | undefined {
        return this['host_os'];
    }
    public withHostNickname(hostNickname: string): AgentRegister {
        this['host_nickname'] = hostNickname;
        return this;
    }
    public set hostNickname(hostNickname: string  | undefined) {
        this['host_nickname'] = hostNickname;
    }
    public get hostNickname(): string | undefined {
        return this['host_nickname'];
    }
    public withAgentVersion(agentVersion: string): AgentRegister {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withAgentType(agentType: string): AgentRegister {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): string | undefined {
        return this['agent_type'];
    }
}