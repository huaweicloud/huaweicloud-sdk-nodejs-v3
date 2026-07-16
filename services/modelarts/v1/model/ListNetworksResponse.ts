import { Network } from './Network';
import { NetworkListMetadata } from './NetworkListMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetworksResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NetworkListMetadata;
    public items?: Array<Network>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListNetworksResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListNetworksResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NetworkListMetadata): ListNetworksResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<Network>): ListNetworksResponse {
        this['items'] = items;
        return this;
    }
}