import { GrowNodeReq } from './GrowNodeReq';


export class ExpandClusterComponentRequest {
    private 'cluster_id'?: string;
    private 'X-Language'?: string;
    public body?: GrowNodeReq;
    public constructor(clusterId?: string, xLanguage?: string) { 
        this['cluster_id'] = clusterId;
        this['X-Language'] = xLanguage;
    }
    public withClusterId(clusterId: string): ExpandClusterComponentRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withXLanguage(xLanguage: string): ExpandClusterComponentRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: GrowNodeReq): ExpandClusterComponentRequest {
        this['body'] = body;
        return this;
    }
}