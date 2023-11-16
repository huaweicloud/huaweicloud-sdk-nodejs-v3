import { DomainInfo } from './DomainInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainResponse extends SdkResponse {
    public count?: number;
    public items?: Array<DomainInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListDomainResponse {
        this['count'] = count;
        return this;
    }
    public withItems(items: Array<DomainInfo>): ListDomainResponse {
        this['items'] = items;
        return this;
    }
}