
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MoveAppGroupsResponse extends SdkResponse {
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): MoveAppGroupsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): MoveAppGroupsResponse {
        this['status'] = status;
        return this;
    }
}