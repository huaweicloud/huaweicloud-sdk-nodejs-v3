import { AddonInstance } from './AddonInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddonInstancesResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<AddonInstance>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAddonInstancesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAddonInstancesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<AddonInstance>): ListAddonInstancesResponse {
        this['items'] = items;
        return this;
    }
}