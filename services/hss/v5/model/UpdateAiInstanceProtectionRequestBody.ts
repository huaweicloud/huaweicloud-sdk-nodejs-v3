

export class UpdateAiInstanceProtectionRequestBody {
    private 'agent_id_list'?: Array<string>;
    public status?: UpdateAiInstanceProtectionRequestBodyStatusEnum | string;
    public constructor(agentIdList?: Array<string>, status?: string) { 
        this['agent_id_list'] = agentIdList;
        this['status'] = status;
    }
    public withAgentIdList(agentIdList: Array<string>): UpdateAiInstanceProtectionRequestBody {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withStatus(status: UpdateAiInstanceProtectionRequestBodyStatusEnum | string): UpdateAiInstanceProtectionRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAiInstanceProtectionRequestBodyStatusEnum {
    OPEN = 'open',
    CLOSE = 'close'
}
