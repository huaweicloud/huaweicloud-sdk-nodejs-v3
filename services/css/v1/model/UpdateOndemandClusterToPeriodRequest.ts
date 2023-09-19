import { PeriodReq } from './PeriodReq';


export class UpdateOndemandClusterToPeriodRequest {
    private 'cluster_id'?: string;
    public body?: PeriodReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateOndemandClusterToPeriodRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: PeriodReq): UpdateOndemandClusterToPeriodRequest {
        this['body'] = body;
        return this;
    }
}