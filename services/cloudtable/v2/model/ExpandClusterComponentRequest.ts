import { GrowNodeReq } from './GrowNodeReq';


export class ExpandClusterComponentRequest {
    public projectId: string;
    public clusterId: string;
    private 'X-Language': string | undefined;
    public body?: GrowNodeReq;
    public constructor(projectId?: any, clusterId?: any, xLanguage?: any) { 
        this['projectId'] = projectId;
        this['clusterId'] = clusterId;
        this['X-Language'] = xLanguage;
    }
    public withProjectId(projectId: string): ExpandClusterComponentRequest {
        this['projectId'] = projectId;
        return this;
    }
    public withClusterId(clusterId: string): ExpandClusterComponentRequest {
        this['clusterId'] = clusterId;
        return this;
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