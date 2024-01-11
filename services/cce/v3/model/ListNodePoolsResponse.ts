import { NodePoolResp } from './NodePoolResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodePoolsResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<NodePoolResp>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListNodePoolsResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListNodePoolsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<NodePoolResp>): ListNodePoolsResponse {
        this['items'] = items;
        return this;
    }
}