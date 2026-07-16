import { ServerHyperinstanceResponse } from './ServerHyperinstanceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHyperinstancesResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerHyperinstanceResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListHyperinstancesResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerHyperinstanceResponse>): ListHyperinstancesResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListHyperinstancesResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListHyperinstancesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListHyperinstancesResponse {
        this['total'] = total;
        return this;
    }
    public withXRequestId(xRequestId: string): ListHyperinstancesResponse {
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