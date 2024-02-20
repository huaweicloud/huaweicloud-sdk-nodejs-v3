import { Criterion } from './Criterion';


export class FindingFilter {
    public criterion?: Criterion;
    public key?: FindingFilterKeyEnum | string;
    public constructor(criterion?: Criterion, key?: string) { 
        this['criterion'] = criterion;
        this['key'] = key;
    }
    public withCriterion(criterion: Criterion): FindingFilter {
        this['criterion'] = criterion;
        return this;
    }
    public withKey(key: FindingFilterKeyEnum | string): FindingFilter {
        this['key'] = key;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FindingFilterKeyEnum {
    RESOURCE = 'resource',
    RESOURCE_TYPE = 'resource_type',
    RESOURCE_OWNER_ACCOUNT = 'resource_owner_account',
    IS_PUBLIC = 'is_public',
    ID = 'id',
    STATUS = 'status',
    PRINCIPAL_TYPE = 'principal_type',
    PRINCIPAL_IDENTIFIER = 'principal_identifier',
    CHANGE_TYPE = 'change_type',
    EXISTING_FINDING_ID = 'existing_finding_id',
    EXISTING_FINDING_STATUS = 'existing_finding_status',
    CONDITION_GPRINCIPALURN = 'condition.g:PrincipalUrn',
    CONDITION_GPRINCIPALID = 'condition.g:PrincipalId',
    CONDITION_GPRINCIPALACCOUNT = 'condition.g:PrincipalAccount',
    CONDITION_GPRINCIPALORGID = 'condition.g:PrincipalOrgId',
    CONDITION_GPRINCIPALORGPATH = 'condition.g:PrincipalOrgPath',
    CONDITION_GPRINCIPALORGMANAGEMENTACCOUNTID = 'condition.g:PrincipalOrgManagementAccountId',
    CONDITION_GSOURCEIP = 'condition.g:SourceIp',
    CONDITION_GSOURCEVPC = 'condition.g:SourceVpc'
}
