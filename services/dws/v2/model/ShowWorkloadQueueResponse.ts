import { WorkloadQueueItem } from './WorkloadQueueItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkloadQueueResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'workload_queue'?: WorkloadQueueItem;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): ShowWorkloadQueueResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ShowWorkloadQueueResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withWorkloadQueue(workloadQueue: WorkloadQueueItem): ShowWorkloadQueueResponse {
        this['workload_queue'] = workloadQueue;
        return this;
    }
    public set workloadQueue(workloadQueue: WorkloadQueueItem  | undefined) {
        this['workload_queue'] = workloadQueue;
    }
    public get workloadQueue(): WorkloadQueueItem | undefined {
        return this['workload_queue'];
    }
}