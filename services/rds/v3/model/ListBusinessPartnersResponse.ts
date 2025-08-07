import { BusinessPartner } from './BusinessPartner';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBusinessPartnersResponse extends SdkResponse {
    private 'business_partners'?: Array<BusinessPartner>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withBusinessPartners(businessPartners: Array<BusinessPartner>): ListBusinessPartnersResponse {
        this['business_partners'] = businessPartners;
        return this;
    }
    public set businessPartners(businessPartners: Array<BusinessPartner>  | undefined) {
        this['business_partners'] = businessPartners;
    }
    public get businessPartners(): Array<BusinessPartner> | undefined {
        return this['business_partners'];
    }
    public withTotalCount(totalCount: number): ListBusinessPartnersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}