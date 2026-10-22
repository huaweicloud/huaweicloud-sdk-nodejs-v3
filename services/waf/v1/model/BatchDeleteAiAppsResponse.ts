
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAiAppsResponse extends SdkResponse {
    public appIds?: Array<string>;
    public constructor() { 
        super();
    }
    public withAppIds(appIds: Array<string>): BatchDeleteAiAppsResponse {
        this['appIds'] = appIds;
        return this;
    }
}