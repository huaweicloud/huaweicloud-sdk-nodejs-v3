import { PoolModel } from './PoolModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoolsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public items?: Array<PoolModel>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListPoolsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListPoolsResponse {
        this['kind'] = kind;
        return this;
    }
    public withItems(items: Array<PoolModel>): ListPoolsResponse {
        this['items'] = items;
        return this;
    }
}