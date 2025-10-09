
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetAccountSummaryV5Response extends SdkResponse {
    private 'attached_policies_per_agency_quota'?: number;
    private 'attached_policies_per_group_quota'?: number;
    private 'attached_policies_per_user_quota'?: number;
    private 'policies_quota'?: number;
    private 'policy_size_quota'?: number;
    private 'versions_per_policy_quota'?: number;
    public policies?: number;
    public agencies?: number;
    private 'agencies_quota'?: number;
    public users?: number;
    private 'users_quota'?: number;
    public groups?: number;
    private 'groups_quota'?: number;
    private 'root_user_mfa_enabled'?: number;
    public constructor() { 
        super();
    }
    public withAttachedPoliciesPerAgencyQuota(attachedPoliciesPerAgencyQuota: number): GetAccountSummaryV5Response {
        this['attached_policies_per_agency_quota'] = attachedPoliciesPerAgencyQuota;
        return this;
    }
    public set attachedPoliciesPerAgencyQuota(attachedPoliciesPerAgencyQuota: number  | undefined) {
        this['attached_policies_per_agency_quota'] = attachedPoliciesPerAgencyQuota;
    }
    public get attachedPoliciesPerAgencyQuota(): number | undefined {
        return this['attached_policies_per_agency_quota'];
    }
    public withAttachedPoliciesPerGroupQuota(attachedPoliciesPerGroupQuota: number): GetAccountSummaryV5Response {
        this['attached_policies_per_group_quota'] = attachedPoliciesPerGroupQuota;
        return this;
    }
    public set attachedPoliciesPerGroupQuota(attachedPoliciesPerGroupQuota: number  | undefined) {
        this['attached_policies_per_group_quota'] = attachedPoliciesPerGroupQuota;
    }
    public get attachedPoliciesPerGroupQuota(): number | undefined {
        return this['attached_policies_per_group_quota'];
    }
    public withAttachedPoliciesPerUserQuota(attachedPoliciesPerUserQuota: number): GetAccountSummaryV5Response {
        this['attached_policies_per_user_quota'] = attachedPoliciesPerUserQuota;
        return this;
    }
    public set attachedPoliciesPerUserQuota(attachedPoliciesPerUserQuota: number  | undefined) {
        this['attached_policies_per_user_quota'] = attachedPoliciesPerUserQuota;
    }
    public get attachedPoliciesPerUserQuota(): number | undefined {
        return this['attached_policies_per_user_quota'];
    }
    public withPoliciesQuota(policiesQuota: number): GetAccountSummaryV5Response {
        this['policies_quota'] = policiesQuota;
        return this;
    }
    public set policiesQuota(policiesQuota: number  | undefined) {
        this['policies_quota'] = policiesQuota;
    }
    public get policiesQuota(): number | undefined {
        return this['policies_quota'];
    }
    public withPolicySizeQuota(policySizeQuota: number): GetAccountSummaryV5Response {
        this['policy_size_quota'] = policySizeQuota;
        return this;
    }
    public set policySizeQuota(policySizeQuota: number  | undefined) {
        this['policy_size_quota'] = policySizeQuota;
    }
    public get policySizeQuota(): number | undefined {
        return this['policy_size_quota'];
    }
    public withVersionsPerPolicyQuota(versionsPerPolicyQuota: number): GetAccountSummaryV5Response {
        this['versions_per_policy_quota'] = versionsPerPolicyQuota;
        return this;
    }
    public set versionsPerPolicyQuota(versionsPerPolicyQuota: number  | undefined) {
        this['versions_per_policy_quota'] = versionsPerPolicyQuota;
    }
    public get versionsPerPolicyQuota(): number | undefined {
        return this['versions_per_policy_quota'];
    }
    public withPolicies(policies: number): GetAccountSummaryV5Response {
        this['policies'] = policies;
        return this;
    }
    public withAgencies(agencies: number): GetAccountSummaryV5Response {
        this['agencies'] = agencies;
        return this;
    }
    public withAgenciesQuota(agenciesQuota: number): GetAccountSummaryV5Response {
        this['agencies_quota'] = agenciesQuota;
        return this;
    }
    public set agenciesQuota(agenciesQuota: number  | undefined) {
        this['agencies_quota'] = agenciesQuota;
    }
    public get agenciesQuota(): number | undefined {
        return this['agencies_quota'];
    }
    public withUsers(users: number): GetAccountSummaryV5Response {
        this['users'] = users;
        return this;
    }
    public withUsersQuota(usersQuota: number): GetAccountSummaryV5Response {
        this['users_quota'] = usersQuota;
        return this;
    }
    public set usersQuota(usersQuota: number  | undefined) {
        this['users_quota'] = usersQuota;
    }
    public get usersQuota(): number | undefined {
        return this['users_quota'];
    }
    public withGroups(groups: number): GetAccountSummaryV5Response {
        this['groups'] = groups;
        return this;
    }
    public withGroupsQuota(groupsQuota: number): GetAccountSummaryV5Response {
        this['groups_quota'] = groupsQuota;
        return this;
    }
    public set groupsQuota(groupsQuota: number  | undefined) {
        this['groups_quota'] = groupsQuota;
    }
    public get groupsQuota(): number | undefined {
        return this['groups_quota'];
    }
    public withRootUserMfaEnabled(rootUserMfaEnabled: number): GetAccountSummaryV5Response {
        this['root_user_mfa_enabled'] = rootUserMfaEnabled;
        return this;
    }
    public set rootUserMfaEnabled(rootUserMfaEnabled: number  | undefined) {
        this['root_user_mfa_enabled'] = rootUserMfaEnabled;
    }
    public get rootUserMfaEnabled(): number | undefined {
        return this['root_user_mfa_enabled'];
    }
}