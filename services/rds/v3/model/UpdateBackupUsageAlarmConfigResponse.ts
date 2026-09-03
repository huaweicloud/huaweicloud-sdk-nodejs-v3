
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBackupUsageAlarmConfigResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateBackupUsageAlarmConfigResponse {
        this['status'] = status;
        return this;
    }
}