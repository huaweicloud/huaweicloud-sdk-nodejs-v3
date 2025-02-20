import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchImportSecretsResponse extends SdkResponse {
    private 'error_list'?: Array<ErrorInfo>;
    public total?: number;
    public success?: number;
    public failed?: number;
    public constructor() { 
        super();
    }
    public withErrorList(errorList: Array<ErrorInfo>): BatchImportSecretsResponse {
        this['error_list'] = errorList;
        return this;
    }
    public set errorList(errorList: Array<ErrorInfo>  | undefined) {
        this['error_list'] = errorList;
    }
    public get errorList(): Array<ErrorInfo> | undefined {
        return this['error_list'];
    }
    public withTotal(total: number): BatchImportSecretsResponse {
        this['total'] = total;
        return this;
    }
    public withSuccess(success: number): BatchImportSecretsResponse {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: number): BatchImportSecretsResponse {
        this['failed'] = failed;
        return this;
    }
}