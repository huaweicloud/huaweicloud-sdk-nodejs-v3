import { CbcOrderResult } from './CbcOrderResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostPaidVaultResponse extends SdkResponse {
    public orders?: Array<CbcOrderResult>;
    public retCode?: number;
    public errText?: string;
    private 'error_code'?: string;
    public constructor() { 
        super();
    }
    public withOrders(orders: Array<CbcOrderResult>): CreatePostPaidVaultResponse {
        this['orders'] = orders;
        return this;
    }
    public withRetCode(retCode: number): CreatePostPaidVaultResponse {
        this['retCode'] = retCode;
        return this;
    }
    public withErrText(errText: string): CreatePostPaidVaultResponse {
        this['errText'] = errText;
        return this;
    }
    public withErrorCode(errorCode: string): CreatePostPaidVaultResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
}