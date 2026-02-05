import { HotspotSessionMigrationConfig } from './HotspotSessionMigrationConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHotspotSessionConfigResponse extends SdkResponse {
    public items?: Array<HotspotSessionMigrationConfig>;
    public constructor() { 
        super();
    }
    public withItems(items: Array<HotspotSessionMigrationConfig>): ListHotspotSessionConfigResponse {
        this['items'] = items;
        return this;
    }
}