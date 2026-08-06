
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddSqlLimitingRecordNewResponse extends SdkResponse {
    public status?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: boolean): AddSqlLimitingRecordNewResponse {
        this['status'] = status;
        return this;
    }
}