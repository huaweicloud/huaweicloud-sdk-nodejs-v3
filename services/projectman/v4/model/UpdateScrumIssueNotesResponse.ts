import { IssueInfoResponseResult } from './IssueInfoResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateScrumIssueNotesResponse extends SdkResponse {
    public result?: IssueInfoResponseResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: IssueInfoResponseResult): UpdateScrumIssueNotesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateScrumIssueNotesResponse {
        this['status'] = status;
        return this;
    }
}