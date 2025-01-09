import { VmOperateResult } from './VmOperateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DetachInstancesResponse extends SdkResponse {
    private 'failed_operation_list'?: Array<VmOperateResult>;
    private 'job_id'?: string;
    public constructor() { 
        super();
    }
    public withFailedOperationList(failedOperationList: Array<VmOperateResult>): DetachInstancesResponse {
        this['failed_operation_list'] = failedOperationList;
        return this;
    }
    public set failedOperationList(failedOperationList: Array<VmOperateResult>  | undefined) {
        this['failed_operation_list'] = failedOperationList;
    }
    public get failedOperationList(): Array<VmOperateResult> | undefined {
        return this['failed_operation_list'];
    }
    public withJobId(jobId: string): DetachInstancesResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}