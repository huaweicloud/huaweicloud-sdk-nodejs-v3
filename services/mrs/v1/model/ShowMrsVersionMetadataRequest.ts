

export class ShowMrsVersionMetadataRequest {
    private 'version_name'?: string;
    private 'cluster_id'?: string;
    public constructor(versionName?: string) { 
        this['version_name'] = versionName;
    }
    public withVersionName(versionName: string): ShowMrsVersionMetadataRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
    public withClusterId(clusterId: string): ShowMrsVersionMetadataRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
}