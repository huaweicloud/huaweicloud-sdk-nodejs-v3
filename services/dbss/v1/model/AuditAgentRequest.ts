

export class AuditAgentRequest {
    private 'db_id'?: string;
    public mode?: AuditAgentRequestModeEnum | number;
    private 'agent_id'?: string;
    private 'agent_type'?: AuditAgentRequestAgentTypeEnum | string;
    private 'agent_os'?: AuditAgentRequestAgentOsEnum | string;
    private 'agent_ip'?: string;
    private 'agent_nic'?: string;
    private 'cpu_threshold'?: number;
    private 'mem_threshold'?: number;
    public constructor(dbId?: string, mode?: number, agentType?: string, agentOs?: string) { 
        this['db_id'] = dbId;
        this['mode'] = mode;
        this['agent_type'] = agentType;
        this['agent_os'] = agentOs;
    }
    public withDbId(dbId: string): AuditAgentRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withMode(mode: AuditAgentRequestModeEnum | number): AuditAgentRequest {
        this['mode'] = mode;
        return this;
    }
    public withAgentId(agentId: string): AuditAgentRequest {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentType(agentType: AuditAgentRequestAgentTypeEnum | string): AuditAgentRequest {
        this['agent_type'] = agentType;
        return this;
    }
    public set agentType(agentType: AuditAgentRequestAgentTypeEnum | string  | undefined) {
        this['agent_type'] = agentType;
    }
    public get agentType(): AuditAgentRequestAgentTypeEnum | string | undefined {
        return this['agent_type'];
    }
    public withAgentOs(agentOs: AuditAgentRequestAgentOsEnum | string): AuditAgentRequest {
        this['agent_os'] = agentOs;
        return this;
    }
    public set agentOs(agentOs: AuditAgentRequestAgentOsEnum | string  | undefined) {
        this['agent_os'] = agentOs;
    }
    public get agentOs(): AuditAgentRequestAgentOsEnum | string | undefined {
        return this['agent_os'];
    }
    public withAgentIp(agentIp: string): AuditAgentRequest {
        this['agent_ip'] = agentIp;
        return this;
    }
    public set agentIp(agentIp: string  | undefined) {
        this['agent_ip'] = agentIp;
    }
    public get agentIp(): string | undefined {
        return this['agent_ip'];
    }
    public withAgentNic(agentNic: string): AuditAgentRequest {
        this['agent_nic'] = agentNic;
        return this;
    }
    public set agentNic(agentNic: string  | undefined) {
        this['agent_nic'] = agentNic;
    }
    public get agentNic(): string | undefined {
        return this['agent_nic'];
    }
    public withCpuThreshold(cpuThreshold: number): AuditAgentRequest {
        this['cpu_threshold'] = cpuThreshold;
        return this;
    }
    public set cpuThreshold(cpuThreshold: number  | undefined) {
        this['cpu_threshold'] = cpuThreshold;
    }
    public get cpuThreshold(): number | undefined {
        return this['cpu_threshold'];
    }
    public withMemThreshold(memThreshold: number): AuditAgentRequest {
        this['mem_threshold'] = memThreshold;
        return this;
    }
    public set memThreshold(memThreshold: number  | undefined) {
        this['mem_threshold'] = memThreshold;
    }
    public get memThreshold(): number | undefined {
        return this['mem_threshold'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuditAgentRequestModeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum AuditAgentRequestAgentTypeEnum {
    APP = 'APP',
    DB = 'DB'
}
/**
    * @export
    * @enum {string}
    */
export enum AuditAgentRequestAgentOsEnum {
    LINUX64_X86 = 'LINUX64_X86',
    LINUX64_ARM = 'LINUX64_ARM',
    WINDOWS64 = 'WINDOWS64'
}
