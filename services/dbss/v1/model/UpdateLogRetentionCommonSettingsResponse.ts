
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLogRetentionCommonSettingsResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateLogRetentionCommonSettingsResponse {
        this['status'] = status;
        return this;
    }
}