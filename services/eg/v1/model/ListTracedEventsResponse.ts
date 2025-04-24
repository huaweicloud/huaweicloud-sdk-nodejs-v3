import { ListTracedEventsRespResult } from './ListTracedEventsRespResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTracedEventsResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public result?: Array<ListTracedEventsRespResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTracedEventsResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListTracedEventsResponse {
        this['size'] = size;
        return this;
    }
    public withResult(result: Array<ListTracedEventsRespResult>): ListTracedEventsResponse {
        this['result'] = result;
        return this;
    }
    public withXRequestId(xRequestId: string): ListTracedEventsResponse {
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