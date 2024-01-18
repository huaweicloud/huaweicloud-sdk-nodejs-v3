import { CdmStartJobReq } from './CdmStartJobReq';


export class StartJobRequest {
    private 'cluster_id'?: string;
    private 'job_name'?: string;
    public body?: CdmStartJobReq;
    public constructor(clusterId?: string, jobName?: string) { 
        this['cluster_id'] = clusterId;
        this['job_name'] = jobName;
    }
    public withClusterId(clusterId: string): StartJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withJobName(jobName: string): StartJobRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withBody(body: CdmStartJobReq): StartJobRequest {
        this['body'] = body;
        return this;
    }
}