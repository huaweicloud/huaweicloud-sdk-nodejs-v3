import { ApiKeyResponseV2 } from './ApiKeyResponseV2';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInferApiKeysResponse extends SdkResponse {
    public data?: Array<ApiKeyResponseV2>;
    public current?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<ApiKeyResponseV2>): ListInferApiKeysResponse {
        this['data'] = data;
        return this;
    }
    public withCurrent(current: number): ListInferApiKeysResponse {
        this['current'] = current;
        return this;
    }
    public withPages(pages: number): ListInferApiKeysResponse {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): ListInferApiKeysResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListInferApiKeysResponse {
        this['total'] = total;
        return this;
    }
}