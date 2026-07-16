import { Node } from './Node';
import { NodePageInfo } from './NodePageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodesResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<Node>;
    public pageInfo?: NodePageInfo;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListNodesResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListNodesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<Node>): ListNodesResponse {
        this['items'] = items;
        return this;
    }
    public withPageInfo(pageInfo: NodePageInfo): ListNodesResponse {
        this['pageInfo'] = pageInfo;
        return this;
    }
}