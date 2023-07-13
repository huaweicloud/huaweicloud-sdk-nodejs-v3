import { HbaseModifySettingV2Req } from './HbaseModifySettingV2Req';


export class UpdateClusterSettingRequest {
    private 'cluster_id': string | undefined;
    private 'X-Language'?: string | undefined;
    public body?: HbaseModifySettingV2Req;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterSettingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
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