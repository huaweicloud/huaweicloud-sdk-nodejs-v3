import { GenStreamGraphReq } from './GenStreamGraphReq';


export class CreateStreamGraphRequest {
    private 'job_id'?: string;
    public body?: GenStreamGraphReq;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): CreateStreamGraphRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: GenStreamGraphReq): CreateStreamGraphRequest {
        this['body'] = body;
        return this;
    }
}