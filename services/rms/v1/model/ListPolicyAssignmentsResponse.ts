import { PageInfo } from './PageInfo';
import { PolicyAssignment } from './PolicyAssignment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyAssignmentsResponse extends SdkResponse {
    public value?: Array<PolicyAssignment>;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withValue(value: Array<PolicyAssignment>): ListPolicyAssignmentsResponse {
        this['value'] = value;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPolicyAssignmentsResponse {
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