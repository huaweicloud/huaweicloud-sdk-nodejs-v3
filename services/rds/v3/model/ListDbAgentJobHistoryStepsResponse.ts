import { ListDbAgentJobHistoryStepsResult } from './ListDbAgentJobHistoryStepsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbAgentJobHistoryStepsResponse extends SdkResponse {
    public steps?: Array<ListDbAgentJobHistoryStepsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSteps(steps: Array<ListDbAgentJobHistoryStepsResult>): ListDbAgentJobHistoryStepsResponse {
        this['steps'] = steps;
        return this;
    }
    public withTotalCount(totalCount: number): ListDbAgentJobHistoryStepsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}