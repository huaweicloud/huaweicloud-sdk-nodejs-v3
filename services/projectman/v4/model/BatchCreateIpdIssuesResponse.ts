
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateIpdIssuesResponse extends SdkResponse {
    public message?: string;
    public result?: Array<object>;
    public status?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): BatchCreateIpdIssuesResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<object>): BatchCreateIpdIssuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchCreateIpdIssuesResponse {
        this['status'] = status;
        return this;
    }
}