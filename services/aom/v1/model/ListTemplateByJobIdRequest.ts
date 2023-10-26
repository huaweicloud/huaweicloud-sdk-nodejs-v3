import { ListTemplateByJobIdRequestBody } from './ListTemplateByJobIdRequestBody';


export class ListTemplateByJobIdRequest {
    private 'job_id'?: string;
    public body?: ListTemplateByJobIdRequestBody;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ListTemplateByJobIdRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBody(body: ListTemplateByJobIdRequestBody): ListTemplateByJobIdRequest {
        this['body'] = body;
        return this;
    }
}