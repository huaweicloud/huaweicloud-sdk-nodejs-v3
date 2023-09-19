import { UpdatePublicKibanaBandwidthReq } from './UpdatePublicKibanaBandwidthReq';


export class UpdateAlterKibanaRequest {
    private 'cluster_id'?: string;
    public body?: UpdatePublicKibanaBandwidthReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateAlterKibanaRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdatePublicKibanaBandwidthReq): UpdateAlterKibanaRequest {
        this['body'] = body;
        return this;
    }
}