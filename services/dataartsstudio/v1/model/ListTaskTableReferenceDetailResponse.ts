import { TaskTableReferenceDetailResponse } from './TaskTableReferenceDetailResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskTableReferenceDetailResponse extends SdkResponse {
    public total?: number;
    private 'task_table_detail_list'?: Array<TaskTableReferenceDetailResponse>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTaskTableReferenceDetailResponse {
        this['total'] = total;
        return this;
    }
    public withTaskTableDetailList(taskTableDetailList: Array<TaskTableReferenceDetailResponse>): ListTaskTableReferenceDetailResponse {
        this['task_table_detail_list'] = taskTableDetailList;
        return this;
    }
    public set taskTableDetailList(taskTableDetailList: Array<TaskTableReferenceDetailResponse>  | undefined) {
        this['task_table_detail_list'] = taskTableDetailList;
    }
    public get taskTableDetailList(): Array<TaskTableReferenceDetailResponse> | undefined {
        return this['task_table_detail_list'];
    }
}