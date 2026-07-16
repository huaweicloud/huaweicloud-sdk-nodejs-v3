import { ServerImageResponse } from './ServerImageResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevServerImagesResponse extends SdkResponse {
    public current?: number;
    public data?: Array<ServerImageResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListDevServerImagesResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<ServerImageResponse>): ListDevServerImagesResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListDevServerImagesResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListDevServerImagesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListDevServerImagesResponse {
        this['total'] = total;
        return this;
    }
}