import { IPDStatusVO } from './IPDStatusVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueStatuesResponse extends SdkResponse {
    public total?: number;
    public result?: Array<IPDStatusVO>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListIssueStatuesResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<IPDStatusVO>): ListIssueStatuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListIssueStatuesResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListIssueStatuesResponse {
        this['message'] = message;
        return this;
    }
}