
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteBackgroundTaskResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): DeleteBackgroundTaskResponse {
        this['message'] = message;
        return this;
    }
}