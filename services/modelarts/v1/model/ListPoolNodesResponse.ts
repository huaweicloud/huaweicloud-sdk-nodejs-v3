import { Node } from './Node';
import { NodeListMetadata } from './NodeListMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoolNodesResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodeListMetadata;
    public items?: Array<Node>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListPoolNodesResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListPoolNodesResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodeListMetadata): ListPoolNodesResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<Node>): ListPoolNodesResponse {
        this['items'] = items;
        return this;
    }
}