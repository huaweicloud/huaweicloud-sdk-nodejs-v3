
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpdProjectIssuesResponse extends SdkResponse {
    public message?: string;
    public result?: object;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): ListIpdProjectIssuesResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: object): ListIpdProjectIssuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListIpdProjectIssuesResponse {
        this['status'] = status;
        return this;
    }
}