import { OrganizationPolicyAssignmentDetailedStatusResponse } from './OrganizationPolicyAssignmentDetailedStatusResponse';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationPolicyAssignmentDetailedStatusResponse extends SdkResponse {
    public value?: Array<OrganizationPolicyAssignmentDetailedStatusResponse>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withValue(value: Array<OrganizationPolicyAssignmentDetailedStatusResponse>): ShowOrganizationPolicyAssignmentDetailedStatusResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowOrganizationPolicyAssignmentDetailedStatusResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}