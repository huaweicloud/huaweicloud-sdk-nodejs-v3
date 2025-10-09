import { AttachedPolicy } from './AttachedPolicy';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAttachedAgencyPoliciesV5Response extends SdkResponse {
    private 'attached_policies'?: Array<AttachedPolicy>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAttachedPolicies(attachedPolicies: Array<AttachedPolicy>): ListAttachedAgencyPoliciesV5Response {
        this['attached_policies'] = attachedPolicies;
        return this;
    }
    public set attachedPolicies(attachedPolicies: Array<AttachedPolicy>  | undefined) {
        this['attached_policies'] = attachedPolicies;
    }
    public get attachedPolicies(): Array<AttachedPolicy> | undefined {
        return this['attached_policies'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAttachedAgencyPoliciesV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}