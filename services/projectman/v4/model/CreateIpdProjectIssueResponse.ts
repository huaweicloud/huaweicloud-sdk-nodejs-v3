
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateIpdProjectIssueResponse extends SdkResponse {
    public message?: string;
    public result?: Array<object>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): CreateIpdProjectIssueResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<object>): CreateIpdProjectIssueResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): CreateIpdProjectIssueResponse {
        this['status'] = status;
        return this;
    }
}