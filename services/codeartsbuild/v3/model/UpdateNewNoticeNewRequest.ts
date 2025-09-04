import { UpdateNoticeRequestBody } from './UpdateNoticeRequestBody';


export class UpdateNewNoticeNewRequest {
    private 'job_id'?: string;
    public body?: UpdateNoticeRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateNewNoticeNewRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: UpdateNoticeRequestBody): UpdateNewNoticeNewRequest {
        this['body'] = body;
        return this;
    }
}