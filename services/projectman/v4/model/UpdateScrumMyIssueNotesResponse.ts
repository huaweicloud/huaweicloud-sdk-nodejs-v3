import { UpdateNoteResponseResult } from './UpdateNoteResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateScrumMyIssueNotesResponse extends SdkResponse {
    public result?: UpdateNoteResponseResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: UpdateNoteResponseResult): UpdateScrumMyIssueNotesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): UpdateScrumMyIssueNotesResponse {
        this['status'] = status;
        return this;
    }
}