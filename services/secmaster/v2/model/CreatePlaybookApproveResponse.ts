import { ApproveOpinionDetail } from './ApproveOpinionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePlaybookApproveResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: ApproveOpinionDetail;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreatePlaybookApproveResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreatePlaybookApproveResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: ApproveOpinionDetail): CreatePlaybookApproveResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreatePlaybookApproveResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}