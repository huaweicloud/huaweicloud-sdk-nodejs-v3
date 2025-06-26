import { PageResp } from './PageResp';
import { ServerHdaUpgradeRecord } from './ServerHdaUpgradeRecord';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListServerHdaUpgradeRecordsResponse extends SdkResponse {
    public count?: number;
    public items?: Array<ServerHdaUpgradeRecord>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListServerHdaUpgradeRecordsResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<ServerHdaUpgradeRecord>): ListServerHdaUpgradeRecordsResponse {
        this['items'] = items;
        return this;
    }
}