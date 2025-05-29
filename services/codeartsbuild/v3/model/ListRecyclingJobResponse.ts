import { RecyclingJobsResult } from './RecyclingJobsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecyclingJobResponse extends SdkResponse {
    public success?: boolean;
    public message?: string;
    private 'err_code'?: string;
    public result?: RecyclingJobsResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ListRecyclingJobResponse {
        this['success'] = success;
        return this;
    }
    public withMessage(message: string): ListRecyclingJobResponse {
        this['message'] = message;
        return this;
    }
    public withErrCode(errCode: string): ListRecyclingJobResponse {
        this['err_code'] = errCode;
        return this;
    }
    public set errCode(errCode: string  | undefined) {
        this['err_code'] = errCode;
    }
    public get errCode(): string | undefined {
        return this['err_code'];
    }
    public withResult(result: RecyclingJobsResult): ListRecyclingJobResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListRecyclingJobResponse {
        this['status'] = status;
        return this;
    }
}