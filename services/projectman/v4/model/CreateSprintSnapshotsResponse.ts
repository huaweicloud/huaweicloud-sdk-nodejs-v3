
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSprintSnapshotsResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreateSprintSnapshotsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreateSprintSnapshotsResponse {
        this['message'] = message;
        return this;
    }
}