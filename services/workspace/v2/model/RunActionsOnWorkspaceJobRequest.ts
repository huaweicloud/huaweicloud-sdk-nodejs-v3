import { JobActionsReq } from './JobActionsReq';


export class RunActionsOnWorkspaceJobRequest {
    private 'job_id'?: string;
    public body?: JobActionsReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): RunActionsOnWorkspaceJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: JobActionsReq): RunActionsOnWorkspaceJobRequest {
        this['body'] = body;
        return this;
    }
}