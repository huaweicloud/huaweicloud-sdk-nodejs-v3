import { AutopilotCluster } from './AutopilotCluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotClustersResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<AutopilotCluster>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAutopilotClustersResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAutopilotClustersResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<AutopilotCluster>): ListAutopilotClustersResponse {
        this['items'] = items;
        return this;
    }
}