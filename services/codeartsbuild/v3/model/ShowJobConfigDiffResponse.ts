
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowJobConfigDiffResponse extends SdkResponse {
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): ShowJobConfigDiffResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowJobConfigDiffResponse {
        this['status'] = status;
        return this;
    }
}