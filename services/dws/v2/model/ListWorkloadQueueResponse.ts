
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkloadQueueResponse extends SdkResponse {
    private 'workload_queue_name_list'?: Array<string> | undefined;
    private 'workload_res_code'?: number | undefined;
    private 'workload_res_str'?: string | undefined;
    public constructor() { 
        super();
    }
    public withWorkloadQueueNameList(workloadQueueNameList: Array<string>): ListWorkloadQueueResponse {
        this['workload_queue_name_list'] = workloadQueueNameList;
        return this;
    }
    public set workloadQueueNameList(workloadQueueNameList: Array<string> | undefined) {
        this['workload_queue_name_list'] = workloadQueueNameList;
    }
    public get workloadQueueNameList() {
        return this['workload_queue_name_list'];
    }
    public withWorkloadResCode(workloadResCode: number): ListWorkloadQueueResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode() {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ListWorkloadQueueResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr() {
        return this['workload_res_str'];
    }
}