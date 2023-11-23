import { ShowBatchJobDetailResp } from './ShowBatchJobDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSparkJobsResponse extends SdkResponse {
    public from?: number;
    public total?: number;
    public sessions?: Array<ShowBatchJobDetailResp>;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withFrom(from: number): ListSparkJobsResponse {
        this['from'] = from;
        return this;
    }
    public withTotal(total: number): ListSparkJobsResponse {
        this['total'] = total;
        return this;
    }
    public withSessions(sessions: Array<ShowBatchJobDetailResp>): ListSparkJobsResponse {
        this['sessions'] = sessions;
        return this;
    }
    public withCreateTime(createTime: number): ListSparkJobsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}