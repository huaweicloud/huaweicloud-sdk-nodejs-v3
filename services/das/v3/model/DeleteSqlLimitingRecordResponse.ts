
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteSqlLimitingRecordResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): DeleteSqlLimitingRecordResponse {
        this['status'] = status;
        return this;
    }
}