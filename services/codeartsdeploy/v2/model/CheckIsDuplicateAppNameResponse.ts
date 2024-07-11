
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckIsDuplicateAppNameResponse extends SdkResponse {
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CheckIsDuplicateAppNameResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CheckIsDuplicateAppNameResponse {
        this['status'] = status;
        return this;
    }
}