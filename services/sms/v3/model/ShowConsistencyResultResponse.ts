import { ConsistencyResultRequestBodyResultList } from './ConsistencyResultRequestBodyResultList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConsistencyResultResponse extends SdkResponse {
    private 'result_list'?: Array<ConsistencyResultRequestBodyResultList>;
    private 'task_id'?: string;
    public constructor() { 
        super();
    }
    public withResultList(resultList: Array<ConsistencyResultRequestBodyResultList>): ShowConsistencyResultResponse {
        this['result_list'] = resultList;
        return this;
    }
    public set resultList(resultList: Array<ConsistencyResultRequestBodyResultList>  | undefined) {
        this['result_list'] = resultList;
    }
    public get resultList(): Array<ConsistencyResultRequestBodyResultList> | undefined {
        return this['result_list'];
    }
    public withTaskId(taskId: string): ShowConsistencyResultResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}