import { UsageInfos } from './UsageInfos';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsageInfosResponse extends SdkResponse {
    public value?: Array<UsageInfos>;
    public constructor() { 
        super();
    }
    public withValue(value: Array<UsageInfos>): ListUsageInfosResponse {
        this['value'] = value;
        return this;
    }
}