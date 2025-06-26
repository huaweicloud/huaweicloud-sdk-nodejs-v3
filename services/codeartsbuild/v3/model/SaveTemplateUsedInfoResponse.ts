
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SaveTemplateUsedInfoResponse extends SdkResponse {
    public result?: string;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: string): SaveTemplateUsedInfoResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): SaveTemplateUsedInfoResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): SaveTemplateUsedInfoResponse {
        this['status'] = status;
        return this;
    }
}