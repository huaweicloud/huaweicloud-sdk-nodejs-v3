import { UpgradePlan } from './UpgradePlan';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotUpgradePlansResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: UpgradePlan;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAutopilotUpgradePlansResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAutopilotUpgradePlansResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: UpgradePlan): ListAutopilotUpgradePlansResponse {
        this['items'] = items;
        return this;
    }
}