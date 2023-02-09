import { DomainItemLocationDetails } from './DomainItemLocationDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainItemLocationDetailsResponse extends SdkResponse {
    private 'domain_item_location_details'?: DomainItemLocationDetails | undefined;
    public constructor() { 
        super();
    }
    public withDomainItemLocationDetails(domainItemLocationDetails: DomainItemLocationDetails): ShowDomainItemLocationDetailsResponse {
        this['domain_item_location_details'] = domainItemLocationDetails;
        return this;
    }
    public set domainItemLocationDetails(domainItemLocationDetails: DomainItemLocationDetails | undefined) {
        this['domain_item_location_details'] = domainItemLocationDetails;
    }
    public get domainItemLocationDetails() {
        return this['domain_item_location_details'];
    }
}