
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckJobNameIsExistsResponse extends SdkResponse {
    public result?: boolean;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: boolean): CheckJobNameIsExistsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CheckJobNameIsExistsResponse {
        this['status'] = status;
        return this;
    }
}