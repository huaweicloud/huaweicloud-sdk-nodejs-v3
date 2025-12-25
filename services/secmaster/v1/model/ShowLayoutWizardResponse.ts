import { WizardDetailInfo } from './WizardDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLayoutWizardResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public data?: WizardDetailInfo;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ShowLayoutWizardResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowLayoutWizardResponse {
        this['message'] = message;
        return this;
    }
    public withData(data: WizardDetailInfo): ShowLayoutWizardResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowLayoutWizardResponse {
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