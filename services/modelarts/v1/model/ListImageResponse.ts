import { ImageResponse } from './ImageResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ImageResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListImageResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ImageResponse>): ListImageResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListImageResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListImageResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListImageResponse {
        this['total'] = total;
        return this;
    }
}