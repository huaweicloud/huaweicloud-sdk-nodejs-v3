import { UpgradeWorkFlow } from './UpgradeWorkFlow';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotUpgradeWorkFlowsResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: UpgradeWorkFlow;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAutopilotUpgradeWorkFlowsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAutopilotUpgradeWorkFlowsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: UpgradeWorkFlow): ListAutopilotUpgradeWorkFlowsResponse {
        this['items'] = items;
        return this;
    }
}