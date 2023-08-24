

export class CloseProtectionInfoRequestInfo {
    private 'host_id_list'?: Array<string>;
    private 'agent_id_list'?: Array<string>;
    private 'close_protection_type'?: string;
    public constructor(hostIdList?: Array<string>, agentIdList?: Array<string>, closeProtectionType?: string) { 
        this['host_id_list'] = hostIdList;
        this['agent_id_list'] = agentIdList;
        this['close_protection_type'] = closeProtectionType;
    }
    public withHostIdList(hostIdList: Array<string>): CloseProtectionInfoRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withAgentIdList(agentIdList: Array<string>): CloseProtectionInfoRequestInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withCloseProtectionType(closeProtectionType: string): CloseProtectionInfoRequestInfo {
        this['close_protection_type'] = closeProtectionType;
        return this;
    }
    public set closeProtectionType(closeProtectionType: string  | undefined) {
        this['close_protection_type'] = closeProtectionType;
    }
    public get closeProtectionType(): string | undefined {
        return this['close_protection_type'];
    }
}