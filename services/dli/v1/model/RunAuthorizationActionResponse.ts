
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunAuthorizationActionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): RunAuthorizationActionResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): RunAuthorizationActionResponse {
        this['message'] = message;
        return this;
    }
}