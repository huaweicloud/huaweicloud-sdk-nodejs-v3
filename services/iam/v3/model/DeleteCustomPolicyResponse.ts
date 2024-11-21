
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCustomPolicyResponse extends SdkResponse {
    public message?: string;
    public constructor() { 
        super();
    }
    public withMessage(message: string): DeleteCustomPolicyResponse {
        this['message'] = message;
        return this;
    }
}