
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppWhitelistAgentStaticsResponse extends SdkResponse {
    private 'agent_num'?: number;
    public constructor() { 
        super();
    }
    public withAgentNum(agentNum: number): ShowAppWhitelistAgentStaticsResponse {
        this['agent_num'] = agentNum;
        return this;
    }
    public set agentNum(agentNum: number  | undefined) {
        this['agent_num'] = agentNum;
    }
    public get agentNum(): number | undefined {
        return this['agent_num'];
    }
}