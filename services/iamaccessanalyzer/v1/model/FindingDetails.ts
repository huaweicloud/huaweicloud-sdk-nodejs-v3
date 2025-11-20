import { ExternalAccessDetails } from './ExternalAccessDetails';
import { IamBpAccessApiWithPasswordDetails } from './IamBpAccessApiWithPasswordDetails';
import { IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails } from './IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails';
import { IamBpAssignHighRiskSysPolicyOrRoleToUserDetails } from './IamBpAssignHighRiskSysPolicyOrRoleToUserDetails';
import { IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails } from './IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails';
import { IamBpAttachHighRiskSysIdentityPolicyToUserDetails } from './IamBpAttachHighRiskSysIdentityPolicyToUserDetails';
import { IamBpLoginProtectionDisabledDetails } from './IamBpLoginProtectionDisabledDetails';
import { IamBpMfaUnconfiguredDetails } from './IamBpMfaUnconfiguredDetails';
import { IamBpRootUserHasAccessKeyDetails } from './IamBpRootUserHasAccessKeyDetails';
import { PrivilegeEscalationDetails } from './PrivilegeEscalationDetails';
import { UnusedIamAgencyDetails } from './UnusedIamAgencyDetails';
import { UnusedIamUserAccessKeyDetails } from './UnusedIamUserAccessKeyDetails';
import { UnusedIamUserPasswordDetails } from './UnusedIamUserPasswordDetails';
import { UnusedPermissionDetails } from './UnusedPermissionDetails';


export class FindingDetails {
    private 'external_access_details'?: ExternalAccessDetails;
    private 'privilege_escalation_details'?: PrivilegeEscalationDetails;
    private 'unused_iam_user_access_key_details'?: UnusedIamUserAccessKeyDetails;
    private 'unused_iam_user_password_details'?: UnusedIamUserPasswordDetails;
    private 'unused_permission_details'?: UnusedPermissionDetails;
    private 'unused_iam_agency_details'?: UnusedIamAgencyDetails;
    private 'iam_bp_root_user_has_access_key_details'?: IamBpRootUserHasAccessKeyDetails;
    private 'iam_bp_access_api_with_password_details'?: IamBpAccessApiWithPasswordDetails;
    private 'iam_bp_login_protection_disabled_details'?: IamBpLoginProtectionDisabledDetails;
    private 'iam_bp_mfa_unconfigured_details'?: IamBpMfaUnconfiguredDetails;
    private 'iam_bp_assign_high_risk_sys_policy_or_role_to_user_details'?: IamBpAssignHighRiskSysPolicyOrRoleToUserDetails;
    private 'iam_bp_attach_high_risk_sys_identity_policy_to_user_details'?: IamBpAttachHighRiskSysIdentityPolicyToUserDetails;
    private 'iam_bp_assign_high_risk_sys_policy_or_role_to_agency_details'?: IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails;
    private 'iam_bp_attach_high_risk_sys_identity_policy_to_agency_details'?: IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails;
    public constructor() { 
    }
    public withExternalAccessDetails(externalAccessDetails: ExternalAccessDetails): FindingDetails {
        this['external_access_details'] = externalAccessDetails;
        return this;
    }
    public set externalAccessDetails(externalAccessDetails: ExternalAccessDetails  | undefined) {
        this['external_access_details'] = externalAccessDetails;
    }
    public get externalAccessDetails(): ExternalAccessDetails | undefined {
        return this['external_access_details'];
    }
    public withPrivilegeEscalationDetails(privilegeEscalationDetails: PrivilegeEscalationDetails): FindingDetails {
        this['privilege_escalation_details'] = privilegeEscalationDetails;
        return this;
    }
    public set privilegeEscalationDetails(privilegeEscalationDetails: PrivilegeEscalationDetails  | undefined) {
        this['privilege_escalation_details'] = privilegeEscalationDetails;
    }
    public get privilegeEscalationDetails(): PrivilegeEscalationDetails | undefined {
        return this['privilege_escalation_details'];
    }
    public withUnusedIamUserAccessKeyDetails(unusedIamUserAccessKeyDetails: UnusedIamUserAccessKeyDetails): FindingDetails {
        this['unused_iam_user_access_key_details'] = unusedIamUserAccessKeyDetails;
        return this;
    }
    public set unusedIamUserAccessKeyDetails(unusedIamUserAccessKeyDetails: UnusedIamUserAccessKeyDetails  | undefined) {
        this['unused_iam_user_access_key_details'] = unusedIamUserAccessKeyDetails;
    }
    public get unusedIamUserAccessKeyDetails(): UnusedIamUserAccessKeyDetails | undefined {
        return this['unused_iam_user_access_key_details'];
    }
    public withUnusedIamUserPasswordDetails(unusedIamUserPasswordDetails: UnusedIamUserPasswordDetails): FindingDetails {
        this['unused_iam_user_password_details'] = unusedIamUserPasswordDetails;
        return this;
    }
    public set unusedIamUserPasswordDetails(unusedIamUserPasswordDetails: UnusedIamUserPasswordDetails  | undefined) {
        this['unused_iam_user_password_details'] = unusedIamUserPasswordDetails;
    }
    public get unusedIamUserPasswordDetails(): UnusedIamUserPasswordDetails | undefined {
        return this['unused_iam_user_password_details'];
    }
    public withUnusedPermissionDetails(unusedPermissionDetails: UnusedPermissionDetails): FindingDetails {
        this['unused_permission_details'] = unusedPermissionDetails;
        return this;
    }
    public set unusedPermissionDetails(unusedPermissionDetails: UnusedPermissionDetails  | undefined) {
        this['unused_permission_details'] = unusedPermissionDetails;
    }
    public get unusedPermissionDetails(): UnusedPermissionDetails | undefined {
        return this['unused_permission_details'];
    }
    public withUnusedIamAgencyDetails(unusedIamAgencyDetails: UnusedIamAgencyDetails): FindingDetails {
        this['unused_iam_agency_details'] = unusedIamAgencyDetails;
        return this;
    }
    public set unusedIamAgencyDetails(unusedIamAgencyDetails: UnusedIamAgencyDetails  | undefined) {
        this['unused_iam_agency_details'] = unusedIamAgencyDetails;
    }
    public get unusedIamAgencyDetails(): UnusedIamAgencyDetails | undefined {
        return this['unused_iam_agency_details'];
    }
    public withIamBpRootUserHasAccessKeyDetails(iamBpRootUserHasAccessKeyDetails: IamBpRootUserHasAccessKeyDetails): FindingDetails {
        this['iam_bp_root_user_has_access_key_details'] = iamBpRootUserHasAccessKeyDetails;
        return this;
    }
    public set iamBpRootUserHasAccessKeyDetails(iamBpRootUserHasAccessKeyDetails: IamBpRootUserHasAccessKeyDetails  | undefined) {
        this['iam_bp_root_user_has_access_key_details'] = iamBpRootUserHasAccessKeyDetails;
    }
    public get iamBpRootUserHasAccessKeyDetails(): IamBpRootUserHasAccessKeyDetails | undefined {
        return this['iam_bp_root_user_has_access_key_details'];
    }
    public withIamBpAccessApiWithPasswordDetails(iamBpAccessApiWithPasswordDetails: IamBpAccessApiWithPasswordDetails): FindingDetails {
        this['iam_bp_access_api_with_password_details'] = iamBpAccessApiWithPasswordDetails;
        return this;
    }
    public set iamBpAccessApiWithPasswordDetails(iamBpAccessApiWithPasswordDetails: IamBpAccessApiWithPasswordDetails  | undefined) {
        this['iam_bp_access_api_with_password_details'] = iamBpAccessApiWithPasswordDetails;
    }
    public get iamBpAccessApiWithPasswordDetails(): IamBpAccessApiWithPasswordDetails | undefined {
        return this['iam_bp_access_api_with_password_details'];
    }
    public withIamBpLoginProtectionDisabledDetails(iamBpLoginProtectionDisabledDetails: IamBpLoginProtectionDisabledDetails): FindingDetails {
        this['iam_bp_login_protection_disabled_details'] = iamBpLoginProtectionDisabledDetails;
        return this;
    }
    public set iamBpLoginProtectionDisabledDetails(iamBpLoginProtectionDisabledDetails: IamBpLoginProtectionDisabledDetails  | undefined) {
        this['iam_bp_login_protection_disabled_details'] = iamBpLoginProtectionDisabledDetails;
    }
    public get iamBpLoginProtectionDisabledDetails(): IamBpLoginProtectionDisabledDetails | undefined {
        return this['iam_bp_login_protection_disabled_details'];
    }
    public withIamBpMfaUnconfiguredDetails(iamBpMfaUnconfiguredDetails: IamBpMfaUnconfiguredDetails): FindingDetails {
        this['iam_bp_mfa_unconfigured_details'] = iamBpMfaUnconfiguredDetails;
        return this;
    }
    public set iamBpMfaUnconfiguredDetails(iamBpMfaUnconfiguredDetails: IamBpMfaUnconfiguredDetails  | undefined) {
        this['iam_bp_mfa_unconfigured_details'] = iamBpMfaUnconfiguredDetails;
    }
    public get iamBpMfaUnconfiguredDetails(): IamBpMfaUnconfiguredDetails | undefined {
        return this['iam_bp_mfa_unconfigured_details'];
    }
    public withIamBpAssignHighRiskSysPolicyOrRoleToUserDetails(iamBpAssignHighRiskSysPolicyOrRoleToUserDetails: IamBpAssignHighRiskSysPolicyOrRoleToUserDetails): FindingDetails {
        this['iam_bp_assign_high_risk_sys_policy_or_role_to_user_details'] = iamBpAssignHighRiskSysPolicyOrRoleToUserDetails;
        return this;
    }
    public set iamBpAssignHighRiskSysPolicyOrRoleToUserDetails(iamBpAssignHighRiskSysPolicyOrRoleToUserDetails: IamBpAssignHighRiskSysPolicyOrRoleToUserDetails  | undefined) {
        this['iam_bp_assign_high_risk_sys_policy_or_role_to_user_details'] = iamBpAssignHighRiskSysPolicyOrRoleToUserDetails;
    }
    public get iamBpAssignHighRiskSysPolicyOrRoleToUserDetails(): IamBpAssignHighRiskSysPolicyOrRoleToUserDetails | undefined {
        return this['iam_bp_assign_high_risk_sys_policy_or_role_to_user_details'];
    }
    public withIamBpAttachHighRiskSysIdentityPolicyToUserDetails(iamBpAttachHighRiskSysIdentityPolicyToUserDetails: IamBpAttachHighRiskSysIdentityPolicyToUserDetails): FindingDetails {
        this['iam_bp_attach_high_risk_sys_identity_policy_to_user_details'] = iamBpAttachHighRiskSysIdentityPolicyToUserDetails;
        return this;
    }
    public set iamBpAttachHighRiskSysIdentityPolicyToUserDetails(iamBpAttachHighRiskSysIdentityPolicyToUserDetails: IamBpAttachHighRiskSysIdentityPolicyToUserDetails  | undefined) {
        this['iam_bp_attach_high_risk_sys_identity_policy_to_user_details'] = iamBpAttachHighRiskSysIdentityPolicyToUserDetails;
    }
    public get iamBpAttachHighRiskSysIdentityPolicyToUserDetails(): IamBpAttachHighRiskSysIdentityPolicyToUserDetails | undefined {
        return this['iam_bp_attach_high_risk_sys_identity_policy_to_user_details'];
    }
    public withIamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails(iamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails: IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails): FindingDetails {
        this['iam_bp_assign_high_risk_sys_policy_or_role_to_agency_details'] = iamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails;
        return this;
    }
    public set iamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails(iamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails: IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails  | undefined) {
        this['iam_bp_assign_high_risk_sys_policy_or_role_to_agency_details'] = iamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails;
    }
    public get iamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails(): IamBpAssignHighRiskSysPolicyOrRoleToAgencyDetails | undefined {
        return this['iam_bp_assign_high_risk_sys_policy_or_role_to_agency_details'];
    }
    public withIamBpAttachHighRiskSysIdentityPolicyToAgencyDetails(iamBpAttachHighRiskSysIdentityPolicyToAgencyDetails: IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails): FindingDetails {
        this['iam_bp_attach_high_risk_sys_identity_policy_to_agency_details'] = iamBpAttachHighRiskSysIdentityPolicyToAgencyDetails;
        return this;
    }
    public set iamBpAttachHighRiskSysIdentityPolicyToAgencyDetails(iamBpAttachHighRiskSysIdentityPolicyToAgencyDetails: IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails  | undefined) {
        this['iam_bp_attach_high_risk_sys_identity_policy_to_agency_details'] = iamBpAttachHighRiskSysIdentityPolicyToAgencyDetails;
    }
    public get iamBpAttachHighRiskSysIdentityPolicyToAgencyDetails(): IamBpAttachHighRiskSysIdentityPolicyToAgencyDetails | undefined {
        return this['iam_bp_attach_high_risk_sys_identity_policy_to_agency_details'];
    }
}