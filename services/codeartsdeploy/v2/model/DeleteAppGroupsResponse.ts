
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteAppGroupsResponse extends SdkResponse {
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): DeleteAppGroupsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteAppGroupsResponse {
        this['status'] = status;
        return this;
    }
}