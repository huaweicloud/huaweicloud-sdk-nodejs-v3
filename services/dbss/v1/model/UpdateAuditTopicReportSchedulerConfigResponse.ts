
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuditTopicReportSchedulerConfigResponse extends SdkResponse {
    public status?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateAuditTopicReportSchedulerConfigResponse {
        this['status'] = status;
        return this;
    }
}