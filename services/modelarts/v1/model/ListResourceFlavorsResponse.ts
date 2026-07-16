import { ResourceFlavor } from './ResourceFlavor';
import { ResourceFlavorListMetadata } from './ResourceFlavorListMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceFlavorsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ResourceFlavorListMetadata;
    public items?: Array<ResourceFlavor>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ListResourceFlavorsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ListResourceFlavorsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ResourceFlavorListMetadata): ListResourceFlavorsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withItems(items: Array<ResourceFlavor>): ListResourceFlavorsResponse {
        this['items'] = items;
        return this;
    }
}