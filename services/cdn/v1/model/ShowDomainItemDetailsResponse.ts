import { DomainItemDetail } from './DomainItemDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainItemDetailsResponse extends SdkResponse {
    private 'domain_item_details'?: DomainItemDetail | undefined;
    public constructor() { 
        super();
    }
    public withDomainItemDetails(domainItemDetails: DomainItemDetail): ShowDomainItemDetailsResponse {
        this['domain_item_details'] = domainItemDetails;
        return this;
    }
    public set domainItemDetails(domainItemDetails: DomainItemDetail | undefined) {
        this['domain_item_details'] = domainItemDetails;
    }
    public get domainItemDetails() {
        return this['domain_item_details'];
    }
}