import { IssueConfigFieldsResponseBodyResult } from './IssueConfigFieldsResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIssueConfigFieldsResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: IssueConfigFieldsResponseBodyResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIssueConfigFieldsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIssueConfigFieldsResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: IssueConfigFieldsResponseBodyResult): ShowIssueConfigFieldsResponse {
        this['result'] = result;
        return this;
    }
}