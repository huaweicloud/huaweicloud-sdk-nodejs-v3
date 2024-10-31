import { ListLimitTaskResponseResult } from './ListLimitTaskResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLimitTaskResponse extends SdkResponse {
    private 'limit_task_list'?: Array<ListLimitTaskResponseResult>;
    public limit?: number;
    public offset?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withLimitTaskList(limitTaskList: Array<ListLimitTaskResponseResult>): ListLimitTaskResponse {
        this['limit_task_list'] = limitTaskList;
        return this;
    }
    public set limitTaskList(limitTaskList: Array<ListLimitTaskResponseResult>  | undefined) {
        this['limit_task_list'] = limitTaskList;
    }
    public get limitTaskList(): Array<ListLimitTaskResponseResult> | undefined {
        return this['limit_task_list'];
    }
    public withLimit(limit: number): ListLimitTaskResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListLimitTaskResponse {
        this['offset'] = offset;
        return this;
    }
    public withTotalCount(totalCount: number): ListLimitTaskResponse {
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