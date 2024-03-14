import { BatchCopyResultVo } from './BatchCopyResultVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCopyDomainResponse extends SdkResponse {
    public result?: Array<BatchCopyResultVo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<BatchCopyResultVo>): BatchCopyDomainResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): BatchCopyDomainResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}