
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditBackupStatusResponse extends SdkResponse {
    public status?: number;
    public constructor() { 
        super();
    }
    public withStatus(status: number): ShowAuditBackupStatusResponse {
        this['status'] = status;
        return this;
    }
}