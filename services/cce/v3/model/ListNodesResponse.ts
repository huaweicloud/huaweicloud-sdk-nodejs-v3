import { V3Node } from './V3Node';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodesResponse extends SdkResponse {
    public apiVersion?: string;
    public items?: Array<V3Node>;
    public kind?: string;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListNodesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<V3Node>): ListNodesResponse {
        this['items'] = items;
        return this;
    }
    public withKind(kind: string): ListNodesResponse {
        this['kind'] = kind;
        return this;
    }
}