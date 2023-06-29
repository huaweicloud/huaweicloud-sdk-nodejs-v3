
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunJobFlowResponse extends SdkResponse {
    private 'cluster_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withClusterId(clusterId: string): RunJobFlowResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
}