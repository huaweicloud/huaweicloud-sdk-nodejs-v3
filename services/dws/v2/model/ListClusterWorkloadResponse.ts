import { WorkloadStatus } from './WorkloadStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterWorkloadResponse extends SdkResponse {
    private 'workload_res_code'?: number;
    private 'workload_res_str'?: string;
    private 'workload_status'?: WorkloadStatus;
    public constructor() { 
        super();
    }
    public withWorkloadResCode(workloadResCode: number): ListClusterWorkloadResponse {
        this['workload_res_code'] = workloadResCode;
        return this;
    }
    public set workloadResCode(workloadResCode: number  | undefined) {
        this['workload_res_code'] = workloadResCode;
    }
    public get workloadResCode(): number | undefined {
        return this['workload_res_code'];
    }
    public withWorkloadResStr(workloadResStr: string): ListClusterWorkloadResponse {
        this['workload_res_str'] = workloadResStr;
        return this;
    }
    public set workloadResStr(workloadResStr: string  | undefined) {
        this['workload_res_str'] = workloadResStr;
    }
    public get workloadResStr(): string | undefined {
        return this['workload_res_str'];
    }
    public withWorkloadStatus(workloadStatus: WorkloadStatus): ListClusterWorkloadResponse {
        this['workload_status'] = workloadStatus;
        return this;
    }
    public set workloadStatus(workloadStatus: WorkloadStatus  | undefined) {
        this['workload_status'] = workloadStatus;
    }
    public get workloadStatus(): WorkloadStatus | undefined {
        return this['workload_status'];
    }
}