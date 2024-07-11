
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppGroupsResponse extends SdkResponse {
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): UpdateAppGroupsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateAppGroupsResponse {
        this['status'] = status;
        return this;
    }
}