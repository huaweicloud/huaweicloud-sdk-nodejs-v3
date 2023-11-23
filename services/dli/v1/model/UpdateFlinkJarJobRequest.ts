import { UpdateFlinkJarRequestBody } from './UpdateFlinkJarRequestBody';


export class UpdateFlinkJarJobRequest {
    private 'job_id'?: number;
    public body?: UpdateFlinkJarRequestBody;
    public constructor(jobId?: number) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: number): UpdateFlinkJarJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withBody(body: UpdateFlinkJarRequestBody): UpdateFlinkJarJobRequest {
        this['body'] = body;
        return this;
    }
}