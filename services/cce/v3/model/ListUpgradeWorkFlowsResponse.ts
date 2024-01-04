import { UpgradeWorkFlow } from './UpgradeWorkFlow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUpgradeWorkFlowsResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: UpgradeWorkFlow;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListUpgradeWorkFlowsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListUpgradeWorkFlowsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: UpgradeWorkFlow): ListUpgradeWorkFlowsResponse {
        this['items'] = items;
        return this;
    }
}