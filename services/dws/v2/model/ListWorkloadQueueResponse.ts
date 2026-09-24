import { PlanStageQueue } from './PlanStageQueue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkloadQueueResponse extends SdkResponse {
    private 'queue_list'?: Array<PlanStageQueue>;
    private 'workload_queue_name_list'?: Array<string>;
    private 'workload_res_code'?: number;
    public constructor() { 
        super();
    }
    public withQueueList(queueList: Array<PlanStageQueue>): ListWorkloadQueueResponse {
        this['queue_list'] = queueList;
        return this;
    }
    public set queueList(queueList: Array<PlanStageQueue>  | undefined) {
        this['queue_list'] = queueList;
    }
    public get queueList(): Array<PlanStageQueue> | undefined {
        return this['queue_list'];
    }
    public withWorkloadQueueNameList(workloadQueueNameList: Array<string>): ListWorkloadQueueResponse {
        this['workload_queue_name_list'] = workloadQueueNameList;
        return this;
    }
    public set workloadQueueNameList(workloadQueueNameList: Array<string>  | undefined) {
        this['workload_queue_name_list'] = workloadQueueNameList;
    }
    public get workloadQueueNameList(): Array<string> | undefined {
        return this['workload_queue_name_list'];
    }
    public withWorkloadResCode(workloadResCode: number): ListWorkloadQueueResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
}