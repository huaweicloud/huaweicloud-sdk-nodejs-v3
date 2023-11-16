
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFactoryJobNameResponse extends SdkResponse {
    private 'is_success'?: boolean;
    private 'status_code'?: number;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): UpdateFactoryJobNameResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withStatusCode(statusCode: number): UpdateFactoryJobNameResponse {
        this['status_code'] = statusCode;
        return this;
    }
    public set statusCode(statusCode: number  | undefined) {
        this['status_code'] = statusCode;
    }
    public get statusCode(): number | undefined {
        return this['status_code'];
    }
}