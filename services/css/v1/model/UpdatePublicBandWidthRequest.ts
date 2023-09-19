import { BindPublicReqEipReq } from './BindPublicReqEipReq';


export class UpdatePublicBandWidthRequest {
    private 'cluster_id'?: string;
    public body?: BindPublicReqEipReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdatePublicBandWidthRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: BindPublicReqEipReq): UpdatePublicBandWidthRequest {
        this['body'] = body;
        return this;
    }
}