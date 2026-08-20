import { BatchCreateSnapshotResponseResult } from './BatchCreateSnapshotResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateIssueSnapitemsResponse extends SdkResponse {
    public result?: BatchCreateSnapshotResponseResult;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: BatchCreateSnapshotResponseResult): BatchCreateIssueSnapitemsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchCreateIssueSnapitemsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchCreateIssueSnapitemsResponse {
        this['message'] = message;
        return this;
    }
}