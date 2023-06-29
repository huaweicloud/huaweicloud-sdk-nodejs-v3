import { AgencyMappingArray } from './AgencyMappingArray';


export class UpdateAgencyMappingRequest {
    private 'cluster_id': string | undefined;
    public body?: AgencyMappingArray;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateAgencyMappingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: AgencyMappingArray): UpdateAgencyMappingRequest {
        this['body'] = body;
        return this;
    }
}