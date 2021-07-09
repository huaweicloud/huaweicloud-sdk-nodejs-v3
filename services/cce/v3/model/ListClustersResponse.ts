import { Cluster } from './Cluster';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClustersResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public items?: Array<Cluster>;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ListClustersResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ListClustersResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withItems(items: Array<Cluster>): ListClustersResponse {
        this['items'] = items;
        return this;
    }
}