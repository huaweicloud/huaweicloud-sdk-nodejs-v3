import { LoadCustomThesaurusReq } from './LoadCustomThesaurusReq';


export class CreateLoadIkThesaurusRequest {
    private 'cluster_id'?: string;
    public body?: LoadCustomThesaurusReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): CreateLoadIkThesaurusRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: LoadCustomThesaurusReq): CreateLoadIkThesaurusRequest {
        this['body'] = body;
        return this;
    }
}