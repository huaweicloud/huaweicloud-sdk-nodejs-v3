import { ComplianceItem } from './ComplianceItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstancePatchItemsResponse extends SdkResponse {
    public count?: number;
    private 'compliance_items'?: Array<ComplianceItem>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowInstancePatchItemsResponse {
        this['count'] = count;
        return this;
    }
    public withComplianceItems(complianceItems: Array<ComplianceItem>): ShowInstancePatchItemsResponse {
        this['compliance_items'] = complianceItems;
        return this;
    }
    public set complianceItems(complianceItems: Array<ComplianceItem>  | undefined) {
        this['compliance_items'] = complianceItems;
    }
    public get complianceItems(): Array<ComplianceItem> | undefined {
        return this['compliance_items'];
    }
}