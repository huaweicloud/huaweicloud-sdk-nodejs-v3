import { Partition } from './Partition';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPartitionsResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<Partition>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListPartitionsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListPartitionsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<Partition>): ListPartitionsResponse {
        this['items'] = items;
        return this;
    }
}