import { OperationalTaskIdListRequest } from './OperationalTaskIdListRequest';


export class ResumeOperationalTaskRequest {
    private 'cluster_id'?: string;
    public body?: OperationalTaskIdListRequest;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ResumeOperationalTaskRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: OperationalTaskIdListRequest): ResumeOperationalTaskRequest {
        this['body'] = body;
        return this;
    }
}