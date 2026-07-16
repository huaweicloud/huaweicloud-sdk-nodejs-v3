import { DevServerTemplateListResponse } from './DevServerTemplateListResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDevServerJobTemplatesResponse extends SdkResponse {
    public current?: number;
    public data?: Array<DevServerTemplateListResponse>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListDevServerJobTemplatesResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<DevServerTemplateListResponse>): ListDevServerJobTemplatesResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListDevServerJobTemplatesResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListDevServerJobTemplatesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListDevServerJobTemplatesResponse {
        this['total'] = total;
        return this;
    }
}