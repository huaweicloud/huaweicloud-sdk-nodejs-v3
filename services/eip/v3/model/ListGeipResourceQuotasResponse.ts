import { ListQuotas } from './ListQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGeipResourceQuotasResponse extends SdkResponse {
    private 'request_id'?: string;
    public quotas?: ListQuotas;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListGeipResourceQuotasResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withQuotas(quotas: ListQuotas): ListGeipResourceQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withXRequestId(xRequestId: string): ListGeipResourceQuotasResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}