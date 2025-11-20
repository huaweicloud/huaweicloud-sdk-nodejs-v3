import { AddonCheckTask } from './AddonCheckTask';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAddonPrecheckTasksResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public pageInfo?: PageInfo;
    public items?: Array<AddonCheckTask>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListAddonPrecheckTasksResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListAddonPrecheckTasksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAddonPrecheckTasksResponse {
        this['pageInfo'] = pageInfo;
        return this;
    }
    public withItems(items: Array<AddonCheckTask>): ListAddonPrecheckTasksResponse {
        this['items'] = items;
        return this;
    }
}