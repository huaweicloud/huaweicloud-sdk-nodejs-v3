
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateGroupResourcePermissionsResponse extends SdkResponse {
    public status?: number;
    public message?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: number): UpdateGroupResourcePermissionsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UpdateGroupResourcePermissionsResponse {
        this['message'] = message;
        return this;
    }
}