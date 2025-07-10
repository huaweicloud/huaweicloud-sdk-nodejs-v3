
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTemplatesTwoResponse extends SdkResponse {
    public error?: Error;
    public result?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListTemplatesTwoResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: string): ListTemplatesTwoResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListTemplatesTwoResponse {
        this['status'] = status;
        return this;
    }
}