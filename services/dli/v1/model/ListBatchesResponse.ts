import { ShowBatchJobDetailResp } from './ShowBatchJobDetailResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBatchesResponse extends SdkResponse {
    public from?: number;
    public total?: number;
    public sessions?: Array<ShowBatchJobDetailResp>;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withFrom(from: number): ListBatchesResponse {
        this['from'] = from;
        return this;
    }
    public withTotal(total: number): ListBatchesResponse {
        this['total'] = total;
        return this;
    }
    public withSessions(sessions: Array<ShowBatchJobDetailResp>): ListBatchesResponse {
        this['sessions'] = sessions;
        return this;
    }
    public withCreateTime(createTime: number): ListBatchesResponse {
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