import { DomainItemDetail } from './DomainItemDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainItemDetailsResponse extends SdkResponse {
    private 'domain_item_details'?: DomainItemDetail;
    public constructor() { 
        super();
    }
    public withDomainItemDetails(domainItemDetails: DomainItemDetail): ShowDomainItemDetailsResponse {
        this['domain_item_details'] = domainItemDetails;
        return this;
    }
    public set domainItemDetails(domainItemDetails: DomainItemDetail  | undefined) {
        this['domain_item_details'] = domainItemDetails;
    }
    public get domainItemDetails(): DomainItemDetail | undefined {
        return this['domain_item_details'];
    }
}