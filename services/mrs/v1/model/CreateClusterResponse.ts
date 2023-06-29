
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public result?: boolean;
    public msg?: string;
    private 'cluster_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CreateClusterResponse {
        this['result'] = result;
        return this;
    }
    public withMsg(msg: string): CreateClusterResponse {
        this['msg'] = msg;
        return this;
    }
    public withClusterId(clusterId: string): CreateClusterResponse {
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