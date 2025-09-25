import { ListSqlLimitTaskResponseResult } from './ListSqlLimitTaskResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlLimitTaskResponse extends SdkResponse {
    private 'limit_task_list'?: Array<ListSqlLimitTaskResponseResult>;
    public limit?: number;
    public offset?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withLimitTaskList(limitTaskList: Array<ListSqlLimitTaskResponseResult>): ListSqlLimitTaskResponse {
        this['limit_task_list'] = limitTaskList;
        return this;
    }
    public set limitTaskList(limitTaskList: Array<ListSqlLimitTaskResponseResult>  | undefined) {
        this['limit_task_list'] = limitTaskList;
    }
    public get limitTaskList(): Array<ListSqlLimitTaskResponseResult> | undefined {
        return this['limit_task_list'];
    }
    public withLimit(limit: number): ListSqlLimitTaskResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSqlLimitTaskResponse {
        this['offset'] = offset;
        return this;
    }
    public withTotalCount(totalCount: number): ListSqlLimitTaskResponse {
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