import { ShowQuotaResource } from './ShowQuotaResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quotas?: ShowQuotaResource;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: ShowQuotaResource): ShowQuotaResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowQuotaResponse {
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