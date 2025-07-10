
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIssueDetailResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<{ [key: string]: object; }>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIssueDetailResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIssueDetailResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<{ [key: string]: object; }>): ShowIssueDetailResponse {
        this['result'] = result;
        return this;
    }
}