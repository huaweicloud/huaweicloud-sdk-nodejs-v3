import { ApproveOpinionDetail } from './ApproveOpinionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlaybookApprovesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: Array<ApproveOpinionDetail>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListPlaybookApprovesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListPlaybookApprovesResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: Array<ApproveOpinionDetail>): ListPlaybookApprovesResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ListPlaybookApprovesResponse {
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