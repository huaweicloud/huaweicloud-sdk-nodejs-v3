import { GrowNodeReq } from './GrowNodeReq';


export class ExpandClusterComponentRequest {
    private 'cluster_id': string | undefined;
    private 'X-Language': string | undefined;
    public body?: GrowNodeReq;
    public constructor(clusterId?: any, xLanguage?: any) { 
        this['cluster_id'] = clusterId;
        this['X-Language'] = xLanguage;
    }
    public withClusterId(clusterId: string): ExpandClusterComponentRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withXLanguage(xLanguage: string): ExpandClusterComponentRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: GrowNodeReq): ExpandClusterComponentRequest {
        this['body'] = body;
        return this;
    }
}