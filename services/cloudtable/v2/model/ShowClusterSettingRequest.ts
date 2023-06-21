

export class ShowClusterSettingRequest {
    public projectId: string;
    public clusterId: string;
    private 'X-Language'?: string | undefined;
    public constructor(projectId?: any, clusterId?: any) { 
        this['projectId'] = projectId;
        this['clusterId'] = clusterId;
    }
    public withProjectId(projectId: string): ShowClusterSettingRequest {
        this['projectId'] = projectId;
        return this;
    }
    public withClusterId(clusterId: string): ShowClusterSettingRequest {
        this['clusterId'] = clusterId;
        return this;
    }
    public withXLanguage(xLanguage: string): ShowClusterSettingRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
}