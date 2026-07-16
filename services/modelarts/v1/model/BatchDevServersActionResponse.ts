import { ServerResponse } from './ServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDevServersActionResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): BatchDevServersActionResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerResponse>): BatchDevServersActionResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): BatchDevServersActionResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BatchDevServersActionResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): BatchDevServersActionResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): BatchDevServersActionResponse {
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