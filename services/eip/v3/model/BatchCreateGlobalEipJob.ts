

export class BatchCreateGlobalEipJob {
    public id?: string;
    public name?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withId(id: string): BatchCreateGlobalEipJob {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BatchCreateGlobalEipJob {
        this['name'] = name;
        return this;
    }
    public withJobId(jobId: string): BatchCreateGlobalEipJob {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}