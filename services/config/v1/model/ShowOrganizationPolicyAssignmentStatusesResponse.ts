import { OrganizationPolicyAssignmentStatusResponse } from './OrganizationPolicyAssignmentStatusResponse';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationPolicyAssignmentStatusesResponse extends SdkResponse {
    public value?: Array<OrganizationPolicyAssignmentStatusResponse>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withValue(value: Array<OrganizationPolicyAssignmentStatusResponse>): ShowOrganizationPolicyAssignmentStatusesResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ShowOrganizationPolicyAssignmentStatusesResponse {
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