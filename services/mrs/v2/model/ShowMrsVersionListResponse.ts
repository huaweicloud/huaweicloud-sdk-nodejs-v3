
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMrsVersionListResponse extends SdkResponse {
    private 'cluster_versions'?: Array<string>;
    public constructor() { 
        super();
    }
    public withClusterVersions(clusterVersions: Array<string>): ShowMrsVersionListResponse {
        this['cluster_versions'] = clusterVersions;
        return this;
    }
    public set clusterVersions(clusterVersions: Array<string>  | undefined) {
        this['cluster_versions'] = clusterVersions;
    }
    public get clusterVersions(): Array<string> | undefined {
        return this['cluster_versions'];
    }
}