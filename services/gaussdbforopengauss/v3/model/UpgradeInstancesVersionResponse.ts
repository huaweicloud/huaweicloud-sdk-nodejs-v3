
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeInstancesVersionResponse extends SdkResponse {
    private 'job_ids'?: Array<string>;
    private 'succeeded_num'?: number;
    private 'failed_num'?: number;
    private 'failed_instance_ids'?: Array<string>;
    private 'error_messages'?: Array<string>;
    public constructor() { 
        super();
    }
    public withJobIds(jobIds: Array<string>): UpgradeInstancesVersionResponse {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
    public withSucceededNum(succeededNum: number): UpgradeInstancesVersionResponse {
        this['succeeded_num'] = succeededNum;
        return this;
    }
    public set succeededNum(succeededNum: number  | undefined) {
        this['succeeded_num'] = succeededNum;
    }
    public get succeededNum(): number | undefined {
        return this['succeeded_num'];
    }
    public withFailedNum(failedNum: number): UpgradeInstancesVersionResponse {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withFailedInstanceIds(failedInstanceIds: Array<string>): UpgradeInstancesVersionResponse {
        this['failed_instance_ids'] = failedInstanceIds;
        return this;
    }
    public set failedInstanceIds(failedInstanceIds: Array<string>  | undefined) {
        this['failed_instance_ids'] = failedInstanceIds;
    }
    public get failedInstanceIds(): Array<string> | undefined {
        return this['failed_instance_ids'];
    }
    public withErrorMessages(errorMessages: Array<string>): UpgradeInstancesVersionResponse {
        this['error_messages'] = errorMessages;
        return this;
    }
    public set errorMessages(errorMessages: Array<string>  | undefined) {
        this['error_messages'] = errorMessages;
    }
    public get errorMessages(): Array<string> | undefined {
        return this['error_messages'];
    }
}