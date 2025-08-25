
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateAppsResponse extends SdkResponse {
    private 'cluster_id'?: string;
    private 'app_id'?: Array<string>;
    public constructor() { 
        super();
    }
    public withClusterId(clusterId: string): DisassociateAppsResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppId(appId: Array<string>): DisassociateAppsResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: Array<string>  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): Array<string> | undefined {
        return this['app_id'];
    }
}