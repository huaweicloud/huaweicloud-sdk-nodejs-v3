
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteFlinkJobSavepointResponse extends SdkResponse {
    private 'is_success'?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: string): ExecuteFlinkJobSavepointResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: string  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): string | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ExecuteFlinkJobSavepointResponse {
        this['message'] = message;
        return this;
    }
}