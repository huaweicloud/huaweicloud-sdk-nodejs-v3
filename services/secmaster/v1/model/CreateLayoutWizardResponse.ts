import { LayoutCommonRsp } from './LayoutCommonRsp';
import { WizardDetailInfo } from './WizardDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLayoutWizardResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public data?: WizardDetailInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): CreateLayoutWizardResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): CreateLayoutWizardResponse {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): CreateLayoutWizardResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): CreateLayoutWizardResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: WizardDetailInfo): CreateLayoutWizardResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateLayoutWizardResponse {
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