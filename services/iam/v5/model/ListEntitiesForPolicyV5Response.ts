import { PageInfo } from './PageInfo';
import { PolicyAgency } from './PolicyAgency';
import { PolicyGroup } from './PolicyGroup';
import { PolicyUser } from './PolicyUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEntitiesForPolicyV5Response extends SdkResponse {
    private 'policy_agencies'?: Array<PolicyAgency>;
    private 'policy_groups'?: Array<PolicyGroup>;
    private 'policy_users'?: Array<PolicyUser>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPolicyAgencies(policyAgencies: Array<PolicyAgency>): ListEntitiesForPolicyV5Response {
        this['policy_agencies'] = policyAgencies;
        return this;
    }
    public set policyAgencies(policyAgencies: Array<PolicyAgency>  | undefined) {
        this['policy_agencies'] = policyAgencies;
    }
    public get policyAgencies(): Array<PolicyAgency> | undefined {
        return this['policy_agencies'];
    }
    public withPolicyGroups(policyGroups: Array<PolicyGroup>): ListEntitiesForPolicyV5Response {
        this['policy_groups'] = policyGroups;
        return this;
    }
    public set policyGroups(policyGroups: Array<PolicyGroup>  | undefined) {
        this['policy_groups'] = policyGroups;
    }
    public get policyGroups(): Array<PolicyGroup> | undefined {
        return this['policy_groups'];
    }
    public withPolicyUsers(policyUsers: Array<PolicyUser>): ListEntitiesForPolicyV5Response {
        this['policy_users'] = policyUsers;
        return this;
    }
    public set policyUsers(policyUsers: Array<PolicyUser>  | undefined) {
        this['policy_users'] = policyUsers;
    }
    public get policyUsers(): Array<PolicyUser> | undefined {
        return this['policy_users'];
    }
    public withPageInfo(pageInfo: PageInfo): ListEntitiesForPolicyV5Response {
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