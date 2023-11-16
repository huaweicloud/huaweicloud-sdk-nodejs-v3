

export class ListJobConfigRequest {
    private 'job_id'?: string;
    private 'get_all_params'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ListJobConfigRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGetAllParams(getAllParams: string): ListJobConfigRequest {
        this['get_all_params'] = getAllParams;
        return this;
    }
    public set getAllParams(getAllParams: string  | undefined) {
        this['get_all_params'] = getAllParams;
    }
    public get getAllParams(): string | undefined {
        return this['get_all_params'];
    }
}