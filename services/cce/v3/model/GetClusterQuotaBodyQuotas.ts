import { ClusterQuotaResource } from './ClusterQuotaResource';


export class GetClusterQuotaBodyQuotas {
    public resources?: Array<ClusterQuotaResource>;
    public constructor() { 
    }
    public withResources(resources: Array<ClusterQuotaResource>): GetClusterQuotaBodyQuotas {
        this['resources'] = resources;
        return this;
    }
}