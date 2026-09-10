import { EngineRiskDesc } from './EngineRiskDesc';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRiskInfoResponse extends SdkResponse {
    public risks?: Array<EngineRiskDesc>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withRisks(risks: Array<EngineRiskDesc>): ShowRiskInfoResponse {
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