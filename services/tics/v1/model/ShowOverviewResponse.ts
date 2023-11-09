
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOverviewResponse extends SdkResponse {
    private 'agent_cnt'?: number;
    private 'instance_cnt'?: number;
    private 'league_cnt'?: number;
    private 'notice_to_handle_cnt'?: number;
    public constructor() { 
        super();
    }
    public withAgentCnt(agentCnt: number): ShowOverviewResponse {
        this['agent_cnt'] = agentCnt;
        return this;
    }
    public set agentCnt(agentCnt: number  | undefined) {
        this['agent_cnt'] = agentCnt;
    }
    public get agentCnt(): number | undefined {
        return this['agent_cnt'];
    }
    public withInstanceCnt(instanceCnt: number): ShowOverviewResponse {
        this['instance_cnt'] = instanceCnt;
        return this;
    }
    public set instanceCnt(instanceCnt: number  | undefined) {
        this['instance_cnt'] = instanceCnt;
    }
    public get instanceCnt(): number | undefined {
        return this['instance_cnt'];
    }
    public withLeagueCnt(leagueCnt: number): ShowOverviewResponse {
        this['league_cnt'] = leagueCnt;
        return this;
    }
    public set leagueCnt(leagueCnt: number  | undefined) {
        this['league_cnt'] = leagueCnt;
    }
    public get leagueCnt(): number | undefined {
        return this['league_cnt'];
    }
    public withNoticeToHandleCnt(noticeToHandleCnt: number): ShowOverviewResponse {
        this['notice_to_handle_cnt'] = noticeToHandleCnt;
        return this;
    }
    public set noticeToHandleCnt(noticeToHandleCnt: number  | undefined) {
        this['notice_to_handle_cnt'] = noticeToHandleCnt;
    }
    public get noticeToHandleCnt(): number | undefined {
        return this['notice_to_handle_cnt'];
    }
}