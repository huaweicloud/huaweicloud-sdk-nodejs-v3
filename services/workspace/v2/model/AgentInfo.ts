

export class AgentInfo {
    private 'agent_name'?: string;
    private 'agent_version'?: string;
    private 'is_installed'?: boolean;
    public constructor() { 
    }
    public withAgentName(agentName: string): AgentInfo {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withAgentVersion(agentVersion: string): AgentInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withIsInstalled(isInstalled: boolean): AgentInfo {
        this['is_installed'] = isInstalled;
        return this;
    }
    public set isInstalled(isInstalled: boolean  | undefined) {
        this['is_installed'] = isInstalled;
    }
    public get isInstalled(): boolean | undefined {
        return this['is_installed'];
    }
}