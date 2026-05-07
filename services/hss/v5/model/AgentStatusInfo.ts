

export class AgentStatusInfo {
    private 'agent_status'?: string;
    private 'status_time'?: number;
    private 'abnormal_reason'?: string;
    public constructor() { 
    }
    public withAgentStatus(agentStatus: string): AgentStatusInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withStatusTime(statusTime: number): AgentStatusInfo {
        this['status_time'] = statusTime;
        return this;
    }
    public set statusTime(statusTime: number  | undefined) {
        this['status_time'] = statusTime;
    }
    public get statusTime(): number | undefined {
        return this['status_time'];
    }
    public withAbnormalReason(abnormalReason: string): AgentStatusInfo {
        this['abnormal_reason'] = abnormalReason;
        return this;
    }
    public set abnormalReason(abnormalReason: string  | undefined) {
        this['abnormal_reason'] = abnormalReason;
    }
    public get abnormalReason(): string | undefined {
        return this['abnormal_reason'];
    }
}