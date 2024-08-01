
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteConsumerGroupResponse extends SdkResponse {
    public errorCode?: string;
    public errorMessage?: string;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): DeleteConsumerGroupResponse {
        this['errorCode'] = errorCode;
        return this;
    }
    public withErrorMessage(errorMessage: string): DeleteConsumerGroupResponse {
        this['errorMessage'] = errorMessage;
        return this;
    }
}