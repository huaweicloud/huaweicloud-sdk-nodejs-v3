import { DisableTheJobRequestBody } from './DisableTheJobRequestBody';


export class DisableTheJobRequest {
    private 'job_id'?: string;
    public body?: DisableTheJobRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): DisableTheJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: DisableTheJobRequestBody): DisableTheJobRequest {
        this['body'] = body;
        return this;
    }
}