import { AddonInstance } from './AddonInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotAddonInstancesResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<AddonInstance>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAutopilotAddonInstancesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAutopilotAddonInstancesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<AddonInstance>): ListAutopilotAddonInstancesResponse {
        this['items'] = items;
        return this;
    }
}