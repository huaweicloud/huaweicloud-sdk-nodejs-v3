import { BatchSetBackupPolicyFailedRecordResult } from './BatchSetBackupPolicyFailedRecordResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetBackupPolicyResponse extends SdkResponse {
    private 'succeeded_num'?: number;
    private 'failed_num'?: number;
    private 'failed_instances'?: Array<BatchSetBackupPolicyFailedRecordResult>;
    public constructor() { 
        super();
    }
    public withSucceededNum(succeededNum: number): BatchSetBackupPolicyResponse {
        this['succeeded_num'] = succeededNum;
        return this;
    }
    public set succeededNum(succeededNum: number  | undefined) {
        this['succeeded_num'] = succeededNum;
    }
    public get succeededNum(): number | undefined {
        return this['succeeded_num'];
    }
    public withFailedNum(failedNum: number): BatchSetBackupPolicyResponse {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withFailedInstances(failedInstances: Array<BatchSetBackupPolicyFailedRecordResult>): BatchSetBackupPolicyResponse {
        this['failed_instances'] = failedInstances;
        return this;
    }
    public set failedInstances(failedInstances: Array<BatchSetBackupPolicyFailedRecordResult>  | undefined) {
        this['failed_instances'] = failedInstances;
    }
    public get failedInstances(): Array<BatchSetBackupPolicyFailedRecordResult> | undefined {
        return this['failed_instances'];
    }
}