import { CdmCreateJobJsonReq } from './CdmCreateJobJsonReq';


export class CreateJobRequest {
    private 'cluster_id'?: string;
    public body?: CdmCreateJobJsonReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: CdmCreateJobJsonReq): CreateJobRequest {
        this['body'] = body;
        return this;
    }
}