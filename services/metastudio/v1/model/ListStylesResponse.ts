import { StyleInfo } from './StyleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListStylesResponse extends SdkResponse {
    public count?: number;
    public styles?: Array<StyleInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListStylesResponse {
        this['count'] = count;
        return this;
    }
    public withStyles(styles: Array<StyleInfo>): ListStylesResponse {
        this['styles'] = styles;
        return this;
    }
    public withXRequestId(xRequestId: string): ListStylesResponse {
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