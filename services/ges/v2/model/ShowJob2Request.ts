

export class ShowJob2Request {
    private 'graph_id': string | undefined;
    private 'job_id': string | undefined;
    public constructor(graphId?: any, jobId?: any) { 
        this['graph_id'] = graphId;
        this['job_id'] = jobId;
    }
    public withGraphId(graphId: string): ShowJob2Request {
        this['graph_id'] = graphId;
        return this;
    }
    public set graphId(graphId: string | undefined) {
        this['graph_id'] = graphId;
    }
    public get graphId() {
        return this['graph_id'];
    }
    public withJobId(jobId: string): ShowJob2Request {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}