import { HbaHistoryResult } from './HbaHistoryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHbaInfoHistoryResponse extends SdkResponse {
    private 'hba_histories'?: Array<HbaHistoryResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHbaHistories(hbaHistories: Array<HbaHistoryResult>): ListHbaInfoHistoryResponse {
        this['hba_histories'] = hbaHistories;
        return this;
    }
    public set hbaHistories(hbaHistories: Array<HbaHistoryResult>  | undefined) {
        this['hba_histories'] = hbaHistories;
    }
    public get hbaHistories(): Array<HbaHistoryResult> | undefined {
        return this['hba_histories'];
    }
    public withTotalCount(totalCount: number): ListHbaInfoHistoryResponse {
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