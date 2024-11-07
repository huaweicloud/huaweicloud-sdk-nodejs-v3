import { ExternalAccessDetails } from './ExternalAccessDetails';
import { UnusedIamUserAccessKeyDetails } from './UnusedIamUserAccessKeyDetails';
import { UnusedIamUserPasswordDetails } from './UnusedIamUserPasswordDetails';
import { UnusedPermissionDetails } from './UnusedPermissionDetails';


export class FindingDetails {
    private 'external_access_details'?: ExternalAccessDetails;
    private 'unused_iam_user_access_key_details'?: UnusedIamUserAccessKeyDetails;
    private 'unused_iam_user_password_details'?: UnusedIamUserPasswordDetails;
    private 'unused_permission_details'?: UnusedPermissionDetails;
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
}