

export class ShowJob2Request {
    private 'graph_id'?: string;
    private 'job_id'?: string;
    public constructor(graphId?: string, jobId?: string) { 
        this['graph_id'] = graphId;
        this['job_id'] = jobId;
    }
    public withGraphId(graphId: string): ShowJob2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string  | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId(): string | undefined {
        return this['graph_id'];
    }
    public withJobId(jobId: string): ShowJob2Request {
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