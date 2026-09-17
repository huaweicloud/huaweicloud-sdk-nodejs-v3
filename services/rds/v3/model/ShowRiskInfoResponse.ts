import { ShowRiskInfoEngineRiskDesc } from './ShowRiskInfoEngineRiskDesc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRiskInfoResponse extends SdkResponse {
    public risks?: Array<ShowRiskInfoEngineRiskDesc>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRisks(risks: Array<ShowRiskInfoEngineRiskDesc>): ShowRiskInfoResponse {
        this['risks'] = risks;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowRiskInfoResponse {
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