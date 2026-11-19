

export class UpdateAiInstanceProtectionResultItem {
    private 'agent_id'?: string;
    public succeed?: boolean;
    private 'error_msg'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): UpdateAiInstanceProtectionResultItem {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withSucceed(succeed: boolean): UpdateAiInstanceProtectionResultItem {
        this['succeed'] = succeed;
        return this;
    }
    public withErrorMsg(errorMsg: string): UpdateAiInstanceProtectionResultItem {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
}