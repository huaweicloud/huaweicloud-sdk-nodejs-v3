import { AttachServerAppInfo } from './AttachServerAppInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLatestAttachedServerAppResponse extends SdkResponse {
    public items?: Array<AttachServerAppInfo>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<AttachServerAppInfo>): ListLatestAttachedServerAppResponse {
        this['items'] = items;
        return this;
    }
}