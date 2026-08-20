
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpgradeInstanceResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'schedule_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpgradeInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withScheduleId(scheduleId: string): UpgradeInstanceResponse {
        this['schedule_id'] = scheduleId;
        return this;
    }
    public set scheduleId(scheduleId: string  | undefined) {
        this['schedule_id'] = scheduleId;
    }
    public get scheduleId(): string | undefined {
        return this['schedule_id'];
    }
}