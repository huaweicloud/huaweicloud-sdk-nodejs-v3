
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppGroupsResponse extends SdkResponse {
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): CreateAppGroupsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateAppGroupsResponse {
        this['status'] = status;
        return this;
    }
}