import { UpdateFlinkJarRequestBody } from './UpdateFlinkJarRequestBody';


export class UpdateFlinkJarRequest {
    private 'job_id'?: number;
    public body?: UpdateFlinkJarRequestBody;
    public constructor(jobId?: number) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: number): UpdateFlinkJarRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withBody(body: UpdateFlinkJarRequestBody): UpdateFlinkJarRequest {
        this['body'] = body;
        return this;
    }
}