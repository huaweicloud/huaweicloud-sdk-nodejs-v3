
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResolveMergeRequestConflictsResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): ResolveMergeRequestConflictsResponse {
        this['message'] = message;
        return this;
    }
}