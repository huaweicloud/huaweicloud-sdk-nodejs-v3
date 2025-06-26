import { LatestVersionInfo } from './LatestVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccessAgentLatestVersionResponse extends SdkResponse {
    public items?: Array<LatestVersionInfo>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<LatestVersionInfo>): ListAccessAgentLatestVersionResponse {
        this['items'] = items;
        return this;
    }
}