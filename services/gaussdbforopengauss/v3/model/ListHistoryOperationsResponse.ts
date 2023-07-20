import { ListHistoryOperationsResult } from './ListHistoryOperationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryOperationsResponse extends SdkResponse {
    public histories?: Array<ListHistoryOperationsResult>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withHistories(histories: Array<ListHistoryOperationsResult>): ListHistoryOperationsResponse {
        this['histories'] = histories;
        return this;
    }
    public withTotalCount(totalCount: number): ListHistoryOperationsResponse {
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