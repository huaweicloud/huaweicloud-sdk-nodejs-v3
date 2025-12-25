import { WizardDetailInfo } from './WizardDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLayoutWizardByFieldResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: WizardDetailInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowLayoutWizardByFieldResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowLayoutWizardByFieldResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: WizardDetailInfo): ShowLayoutWizardByFieldResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowLayoutWizardByFieldResponse {
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