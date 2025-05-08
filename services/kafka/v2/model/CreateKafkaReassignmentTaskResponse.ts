
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKafkaReassignmentTaskResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'reassignment_time'?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateKafkaReassignmentTaskResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withReassignmentTime(reassignmentTime: number): CreateKafkaReassignmentTaskResponse {
        this['reassignment_time'] = reassignmentTime;
        return this;
    }
    public set reassignmentTime(reassignmentTime: number  | undefined) {
        this['reassignment_time'] = reassignmentTime;
    }
    public get reassignmentTime(): number | undefined {
        return this['reassignment_time'];
    }
}