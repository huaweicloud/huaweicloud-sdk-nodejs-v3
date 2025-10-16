import { DnsDomain } from './DnsDomain';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ConfirmDnsDomainResponse extends SdkResponse {
    private 'next_marker'?: string;
    public items?: Array<DnsDomain>;
    public constructor() { 
        super();
    }
    public withNextMarker(nextMarker: string): ConfirmDnsDomainResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withItems(items: Array<DnsDomain>): ConfirmDnsDomainResponse {
        this['items'] = items;
        return this;
    }
}