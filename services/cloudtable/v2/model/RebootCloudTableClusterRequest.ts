import { HbaseClusterActionReq } from './HbaseClusterActionReq';


export class RebootCloudTableClusterRequest {
    public projectId: string;
    public clusterId: string;
    private 'X-Language'?: string | undefined;
    public body?: HbaseClusterActionReq;
    public constructor(projectId?: any, clusterId?: any) { 
        this['projectId'] = projectId;
        this['clusterId'] = clusterId;
    }
    public withProjectId(projectId: string): RebootCloudTableClusterRequest {
        this['projectId'] = projectId;
        return this;
    }
    public withClusterId(clusterId: string): RebootCloudTableClusterRequest {
        this['clusterId'] = clusterId;
        return this;
    }
    public withXLanguage(xLanguage: string): RebootCloudTableClusterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: HbaseClusterActionReq): RebootCloudTableClusterRequest {
        this['body'] = body;
        return this;
    }
}