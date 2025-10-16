
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePremiumInstanceProgressResponse extends SdkResponse {
    public step?: number;
    public status?: number;
    public constructor() { 
        super();
    }
    public withStep(step: number): UpdatePremiumInstanceProgressResponse {
        this['step'] = step;
        return this;
    }
    public withStatus(status: number): UpdatePremiumInstanceProgressResponse {
        this['status'] = status;
        return this;
    }
}