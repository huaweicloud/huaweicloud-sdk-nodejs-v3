import { EventStreamingDetail } from './EventStreamingDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventStreamingResponse extends SdkResponse {
    public total?: number;
    public size?: number;
    public items?: Array<EventStreamingDetail>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListEventStreamingResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListEventStreamingResponse {
        this['size'] = size;
        return this;
    }
    public withItems(items: Array<EventStreamingDetail>): ListEventStreamingResponse {
        this['items'] = items;
        return this;
    }
    public withXRequestId(xRequestId: string): ListEventStreamingResponse {
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