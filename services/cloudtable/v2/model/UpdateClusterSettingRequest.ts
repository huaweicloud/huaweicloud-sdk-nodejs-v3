import { HbaseModifySettingV2Req } from './HbaseModifySettingV2Req';


export class UpdateClusterSettingRequest {
    private 'cluster_id'?: string;
    private 'X-Language'?: string;
    public body?: HbaseModifySettingV2Req;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateClusterSettingRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withXLanguage(xLanguage: string): UpdateClusterSettingRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: HbaseModifySettingV2Req): UpdateClusterSettingRequest {
        this['body'] = body;
        return this;
    }
}