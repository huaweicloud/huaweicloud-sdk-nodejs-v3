import { HbaseModifySettingV2Req } from './HbaseModifySettingV2Req';


export class UpdateClusterSettingRequest {
    public projectId: string;
    public clusterId: string;
    private 'X-Language'?: string | undefined;
    public body?: HbaseModifySettingV2Req;
    public constructor(projectId?: any, clusterId?: any) { 
        this['projectId'] = projectId;
        this['clusterId'] = clusterId;
    }
    public withProjectId(projectId: string): UpdateClusterSettingRequest {
        this['projectId'] = projectId;
        return this;
    }
    public withClusterId(clusterId: string): UpdateClusterSettingRequest {
        this['clusterId'] = clusterId;
        return this;
    }
    public withXLanguage(xLanguage: string): UpdateClusterSettingRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: HbaseModifySettingV2Req): UpdateClusterSettingRequest {
        this['body'] = body;
        return this;
    }
}