
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteWorkspacesResponse extends SdkResponse {
    public message?: string;
    private 'is_success'?: boolean;
    public constructor() { 
        super();
    }
    public withMessage(message: string): BatchDeleteWorkspacesResponse {
        this['message'] = message;
        return this;
    }
    public withIsSuccess(isSuccess: boolean): BatchDeleteWorkspacesResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
}