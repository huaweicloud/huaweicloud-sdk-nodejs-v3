import { BaseResponse } from './BaseResponse';
import { PolicyGroupNameInfo } from './PolicyGroupNameInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportPolicyGroupsResponse extends SdkResponse {
    private 'error_code'?: string;
    private 'error_msg'?: string;
    private 'error_detail'?: string;
    private 'encoded_authorization_message'?: string;
    private 'policy_group_name_list'?: Array<PolicyGroupNameInfo>;
    private 'failed_policy_group_name_list'?: Array<PolicyGroupNameInfo>;
    public constructor() { 
        super();
    }
    public withErrorCode(errorCode: string): ImportPolicyGroupsResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMsg(errorMsg: string): ImportPolicyGroupsResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withErrorDetail(errorDetail: string): ImportPolicyGroupsResponse {
        this['error_detail'] = errorDetail;
        return this;
    }
    public set errorDetail(errorDetail: string  | undefined) {
        this['error_detail'] = errorDetail;
    }
    public get errorDetail(): string | undefined {
        return this['error_detail'];
    }
    public withEncodedAuthorizationMessage(encodedAuthorizationMessage: string): ImportPolicyGroupsResponse {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
        return this;
    }
    public set encodedAuthorizationMessage(encodedAuthorizationMessage: string  | undefined) {
        this['encoded_authorization_message'] = encodedAuthorizationMessage;
    }
    public get encodedAuthorizationMessage(): string | undefined {
        return this['encoded_authorization_message'];
    }
    public withPolicyGroupNameList(policyGroupNameList: Array<PolicyGroupNameInfo>): ImportPolicyGroupsResponse {
        this['policy_group_name_list'] = policyGroupNameList;
        return this;
    }
    public set policyGroupNameList(policyGroupNameList: Array<PolicyGroupNameInfo>  | undefined) {
        this['policy_group_name_list'] = policyGroupNameList;
    }
    public get policyGroupNameList(): Array<PolicyGroupNameInfo> | undefined {
        return this['policy_group_name_list'];
    }
    public withFailedPolicyGroupNameList(failedPolicyGroupNameList: Array<PolicyGroupNameInfo>): ImportPolicyGroupsResponse {
        this['failed_policy_group_name_list'] = failedPolicyGroupNameList;
        return this;
    }
    public set failedPolicyGroupNameList(failedPolicyGroupNameList: Array<PolicyGroupNameInfo>  | undefined) {
        this['failed_policy_group_name_list'] = failedPolicyGroupNameList;
    }
    public get failedPolicyGroupNameList(): Array<PolicyGroupNameInfo> | undefined {
        return this['failed_policy_group_name_list'];
    }
}