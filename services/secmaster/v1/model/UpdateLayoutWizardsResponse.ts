import { WizardDetailInfo } from './WizardDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLayoutWizardsResponse extends SdkResponse {
    public code?: string;
    public data?: Array<WizardDetailInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): UpdateLayoutWizardsResponse {
        this['code'] = code;
        return this;
    }
    public withData(data: Array<WizardDetailInfo>): UpdateLayoutWizardsResponse {
        this['data'] = data;
        return this;
    }
    public withXRequestId(xRequestId: string): UpdateLayoutWizardsResponse {
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