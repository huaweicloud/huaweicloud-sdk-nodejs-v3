
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ParseDeadLockResponse extends SdkResponse {
    private 'job_id'?: string;
    public status?: string;
    private 'sql_insight_job_id'?: number;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): ParseDeadLockResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): ParseDeadLockResponse {
        this['status'] = status;
        return this;
    }
    public withSqlInsightJobId(sqlInsightJobId: number): ParseDeadLockResponse {
        this['sql_insight_job_id'] = sqlInsightJobId;
        return this;
    }
    public set sqlInsightJobId(sqlInsightJobId: number  | undefined) {
        this['sql_insight_job_id'] = sqlInsightJobId;
    }
    public get sqlInsightJobId(): number | undefined {
        return this['sql_insight_job_id'];
    }
}