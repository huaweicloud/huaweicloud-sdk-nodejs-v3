
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetPermissionSetSummaryResponse extends SdkResponse {
    private 'permission_sets'?: number;
    private 'permission_sets_quota'?: number;
    private 'permission_policy_count_quota'?: number;
    private 'permission_policy_quota'?: number;
    public constructor() { 
        super();
    }
    public withPermissionSets(permissionSets: number): GetPermissionSetSummaryResponse {
        this['permission_sets'] = permissionSets;
        return this;
    }
    public set permissionSets(permissionSets: number  | undefined) {
        this['permission_sets'] = permissionSets;
    }
    public get permissionSets(): number | undefined {
        return this['permission_sets'];
    }
    public withPermissionSetsQuota(permissionSetsQuota: number): GetPermissionSetSummaryResponse {
        this['permission_sets_quota'] = permissionSetsQuota;
        return this;
    }
    public set permissionSetsQuota(permissionSetsQuota: number  | undefined) {
        this['permission_sets_quota'] = permissionSetsQuota;
    }
    public get permissionSetsQuota(): number | undefined {
        return this['permission_sets_quota'];
    }
    public withPermissionPolicyCountQuota(permissionPolicyCountQuota: number): GetPermissionSetSummaryResponse {
        this['permission_policy_count_quota'] = permissionPolicyCountQuota;
        return this;
    }
    public set permissionPolicyCountQuota(permissionPolicyCountQuota: number  | undefined) {
        this['permission_policy_count_quota'] = permissionPolicyCountQuota;
    }
    public get permissionPolicyCountQuota(): number | undefined {
        return this['permission_policy_count_quota'];
    }
    public withPermissionPolicyQuota(permissionPolicyQuota: number): GetPermissionSetSummaryResponse {
        this['permission_policy_quota'] = permissionPolicyQuota;
        return this;
    }
    public set permissionPolicyQuota(permissionPolicyQuota: number  | undefined) {
        this['permission_policy_quota'] = permissionPolicyQuota;
    }
    public get permissionPolicyQuota(): number | undefined {
        return this['permission_policy_quota'];
    }
}