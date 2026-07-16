import { Node } from './Node';
import { NodeListMetadata } from './NodeListMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNodePoolNodesResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeListMetadata;
    public items?: Array<Node>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListNodePoolNodesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListNodePoolNodesResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeListMetadata): ListNodePoolNodesResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<Node>): ListNodePoolNodesResponse {
        this['items'] = items;
        return this;
    }
}