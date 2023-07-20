import { AgencyMappingArray } from './AgencyMappingArray';


export class UpdateAgencyMappingRequest {
    private 'cluster_id'?: string;
    public body?: AgencyMappingArray;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateAgencyMappingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AgencyMappingArray): UpdateAgencyMappingRequest {
        this['body'] = body;
        return this;
    }
}