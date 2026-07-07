

export class ShowAnalysisSessionStatusRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    private 'job_id'?: string;
    public constructor(instanceId?: string, nodeId?: string, jobId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
        this['job_id'] = jobId;
    }
    public withInstanceId(instanceId: string): ShowAnalysisSessionStatusRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ShowAnalysisSessionStatusRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withJobId(jobId: string): ShowAnalysisSessionStatusRequest {
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