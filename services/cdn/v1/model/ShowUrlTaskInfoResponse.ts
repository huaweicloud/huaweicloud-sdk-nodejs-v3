import { Urls } from './Urls';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUrlTaskInfoResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public result?: Array<Urls>;
    private 'X-request-id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowUrlTaskInfoResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ShowUrlTaskInfoResponse {
        this['count'] = count;
        return this;
    }
    public withResult(result: Array<Urls>): ShowUrlTaskInfoResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowUrlTaskInfoResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-id'];
    }
}