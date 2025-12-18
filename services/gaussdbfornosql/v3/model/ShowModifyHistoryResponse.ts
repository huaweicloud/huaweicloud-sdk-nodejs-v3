import { ConfigurationHistoryRsp } from './ConfigurationHistoryRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowModifyHistoryResponse extends SdkResponse {
    public histories?: Array<ConfigurationHistoryRsp>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ConfigurationHistoryRsp>): ShowModifyHistoryResponse {
        this['histories'] = histories;
        return this;
    }
    public withTotalCount(totalCount: number): ShowModifyHistoryResponse {
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