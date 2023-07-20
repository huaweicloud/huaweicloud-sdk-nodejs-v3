
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDisasterRecoveryResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'disaster_recovery_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateDisasterRecoveryResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): CreateDisasterRecoveryResponse {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string  | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId(): string | undefined {
        return this['disaster_recovery_id'];
    }
}