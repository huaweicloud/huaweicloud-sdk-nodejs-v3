import { WizardDetailInfo } from './WizardDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLayoutWizardsResponse extends SdkResponse {
    public code?: string;
    public data?: Array<WizardDetailInfo>;
    public message?: string;
    public offset?: number;
    private 'request_id'?: string;
    public limit?: number;
    public success?: boolean;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListLayoutWizardsResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<WizardDetailInfo>): ListLayoutWizardsResponse {
        this['data'] = data;
        return this;
    }
    public withMessage(message: string): ListLayoutWizardsResponse {
        this['message'] = message;
        return this;
    }
    public withOffset(offset: number): ListLayoutWizardsResponse {
        this['offset'] = offset;
        return this;
    }
    public withRequestId(requestId: string): ListLayoutWizardsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLimit(limit: number): ListLayoutWizardsResponse {
        this['limit'] = limit;
        return this;
    }
    public withSuccess(success: boolean): ListLayoutWizardsResponse {
        this['success'] = success;
        return this;
    }
    public withTotal(total: number): ListLayoutWizardsResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListLayoutWizardsResponse {
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