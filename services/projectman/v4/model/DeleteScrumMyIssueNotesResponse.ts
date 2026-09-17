import { DeleteIssueNoteResultResult } from './DeleteIssueNoteResultResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteScrumMyIssueNotesResponse extends SdkResponse {
    public result?: DeleteIssueNoteResultResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: DeleteIssueNoteResultResult): DeleteScrumMyIssueNotesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): DeleteScrumMyIssueNotesResponse {
        this['status'] = status;
        return this;
    }
}