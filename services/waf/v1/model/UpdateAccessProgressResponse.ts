
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAccessProgressResponse extends SdkResponse {
    public step?: number;
    public status?: number;
    public constructor() { 
        super();
    }
    public withStep(step: number): UpdateAccessProgressResponse {
        this['step'] = step;
        return this;
    }
    public withStatus(status: number): UpdateAccessProgressResponse {
        this['status'] = status;
        return this;
    }
}