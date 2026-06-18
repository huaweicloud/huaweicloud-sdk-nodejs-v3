
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateRepositoryResourcePermissionsResponse extends SdkResponse {
    public status?: number;
    public message?: string;
    public constructor() { 
        super();
    }
    public withStatus(status: number): UpdateRepositoryResourcePermissionsResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UpdateRepositoryResourcePermissionsResponse {
        this['message'] = message;
        return this;
    }
}