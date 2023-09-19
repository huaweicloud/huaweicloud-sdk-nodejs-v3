import { AddFavoriteReq } from './AddFavoriteReq';


export class AddFavoriteRequest {
    private 'cluster_id'?: string;
    public body?: AddFavoriteReq;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): AddFavoriteRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: AddFavoriteReq): AddFavoriteRequest {
        this['body'] = body;
        return this;
    }
}