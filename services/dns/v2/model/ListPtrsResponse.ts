import { FloatingIpsPtr } from './FloatingIpsPtr';
import { Metadata } from './Metadata';
import { PageLink } from './PageLink';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPtrsResponse extends SdkResponse {
    public floatingips?: Array<FloatingIpsPtr>;
    public links?: PageLink;
    public metadata?: Metadata;
    public constructor() { 
        super();
    }
    public withFloatingips(floatingips: Array<FloatingIpsPtr>): ListPtrsResponse {
        this['floatingips'] = floatingips;
        return this;
    }
    public withLinks(links: PageLink): ListPtrsResponse {
        this['links'] = links;
        return this;
    }
    public withMetadata(metadata: Metadata): ListPtrsResponse {
        this['metadata'] = metadata;
        return this;
    }
}