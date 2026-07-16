import { DataVolumesRes } from './DataVolumesRes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDynamicStoragesResponse extends SdkResponse {
    public current?: number;
    public data?: Array<DataVolumesRes>;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCurrent(current: number): ListDynamicStoragesResponse {
        this['current'] = current;
        return this;
    }
    public withData(data: Array<DataVolumesRes>): ListDynamicStoragesResponse {
        this['data'] = data;
        return this;
    }
    public withPages(pages: number): ListDynamicStoragesResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListDynamicStoragesResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListDynamicStoragesResponse {
        this['total'] = total;
        return this;
    }
}