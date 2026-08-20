import { SnapshotsVO } from './SnapshotsVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueSprintSnapshotsResponse extends SdkResponse {
    public result?: Array<SnapshotsVO>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<SnapshotsVO>): ListIssueSprintSnapshotsResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListIssueSprintSnapshotsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListIssueSprintSnapshotsResponse {
        this['message'] = message;
        return this;
    }
}