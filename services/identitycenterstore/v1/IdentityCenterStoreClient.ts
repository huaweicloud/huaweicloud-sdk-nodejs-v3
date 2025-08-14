import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddressDto } from './model/AddressDto';
import { AlternateIdentifierDto } from './model/AlternateIdentifierDto';
import { AttributeOperationDto } from './model/AttributeOperationDto';
import { BatchDeleteSessionsReqBody } from './model/BatchDeleteSessionsReqBody';
import { BatchDeleteSessionsRequest } from './model/BatchDeleteSessionsRequest';
import { BatchDeleteSessionsResponse } from './model/BatchDeleteSessionsResponse';
import { BatchListMfaDevicesForUserReqBody } from './model/BatchListMfaDevicesForUserReqBody';
import { BatchListMfaDevicesForUserRequest } from './model/BatchListMfaDevicesForUserRequest';
import { BatchListMfaDevicesForUserResponse } from './model/BatchListMfaDevicesForUserResponse';
import { BearerToken } from './model/BearerToken';
import { CreateBearerTokenRequest } from './model/CreateBearerTokenRequest';
import { CreateBearerTokenResponse } from './model/CreateBearerTokenResponse';
import { CreateExternalIdPConfigurationForDirectoryRequest } from './model/CreateExternalIdPConfigurationForDirectoryRequest';
import { CreateExternalIdPConfigurationForDirectoryResponse } from './model/CreateExternalIdPConfigurationForDirectoryResponse';
import { CreateGroupMembershipReqBody } from './model/CreateGroupMembershipReqBody';
import { CreateGroupMembershipRequest } from './model/CreateGroupMembershipRequest';
import { CreateGroupMembershipResponse } from './model/CreateGroupMembershipResponse';
import { CreateGroupReqBody } from './model/CreateGroupReqBody';
import { CreateGroupRequest } from './model/CreateGroupRequest';
import { CreateGroupResponse } from './model/CreateGroupResponse';
import { CreateIDPReqBody } from './model/CreateIDPReqBody';
import { CreateProvisioningTenantRequest } from './model/CreateProvisioningTenantRequest';
import { CreateProvisioningTenantResponse } from './model/CreateProvisioningTenantResponse';
import { CreateSpCertificateRequest } from './model/CreateSpCertificateRequest';
import { CreateSpCertificateResponse } from './model/CreateSpCertificateResponse';
import { CreateUserReqBody } from './model/CreateUserReqBody';
import { CreateUserRequest } from './model/CreateUserRequest';
import { CreateUserResponse } from './model/CreateUserResponse';
import { DeleteBearerTokenRequest } from './model/DeleteBearerTokenRequest';
import { DeleteBearerTokenResponse } from './model/DeleteBearerTokenResponse';
import { DeleteExternalIdPCertificateRequest } from './model/DeleteExternalIdPCertificateRequest';
import { DeleteExternalIdPCertificateResponse } from './model/DeleteExternalIdPCertificateResponse';
import { DeleteExternalIdPConfigurationForDirectoryRequest } from './model/DeleteExternalIdPConfigurationForDirectoryRequest';
import { DeleteExternalIdPConfigurationForDirectoryResponse } from './model/DeleteExternalIdPConfigurationForDirectoryResponse';
import { DeleteGroupMembershipRequest } from './model/DeleteGroupMembershipRequest';
import { DeleteGroupMembershipResponse } from './model/DeleteGroupMembershipResponse';
import { DeleteGroupRequest } from './model/DeleteGroupRequest';
import { DeleteGroupResponse } from './model/DeleteGroupResponse';
import { DeleteMfaDeviceForUserRequest } from './model/DeleteMfaDeviceForUserRequest';
import { DeleteMfaDeviceForUserResponse } from './model/DeleteMfaDeviceForUserResponse';
import { DeleteProvisioningTenantRequest } from './model/DeleteProvisioningTenantRequest';
import { DeleteProvisioningTenantResponse } from './model/DeleteProvisioningTenantResponse';
import { DeleteSpCertificateRequest } from './model/DeleteSpCertificateRequest';
import { DeleteSpCertificateResponse } from './model/DeleteSpCertificateResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { DescribeGroupMembershipRequest } from './model/DescribeGroupMembershipRequest';
import { DescribeGroupMembershipResponse } from './model/DescribeGroupMembershipResponse';
import { DescribeGroupRequest } from './model/DescribeGroupRequest';
import { DescribeGroupResp } from './model/DescribeGroupResp';
import { DescribeGroupResponse } from './model/DescribeGroupResponse';
import { DescribeGroupsRequest } from './model/DescribeGroupsRequest';
import { DescribeGroupsRequestBody } from './model/DescribeGroupsRequestBody';
import { DescribeGroupsResponse } from './model/DescribeGroupsResponse';
import { DescribePasswordPolicyRequest } from './model/DescribePasswordPolicyRequest';
import { DescribePasswordPolicyResponse } from './model/DescribePasswordPolicyResponse';
import { DescribeUserRequest } from './model/DescribeUserRequest';
import { DescribeUserResp } from './model/DescribeUserResp';
import { DescribeUserResponse } from './model/DescribeUserResponse';
import { DescribeUsersRequest } from './model/DescribeUsersRequest';
import { DescribeUsersRequestBody } from './model/DescribeUsersRequestBody';
import { DescribeUsersResponse } from './model/DescribeUsersResponse';
import { DisableExternalIdPConfigurationForDirectoryRequest } from './model/DisableExternalIdPConfigurationForDirectoryRequest';
import { DisableExternalIdPConfigurationForDirectoryResponse } from './model/DisableExternalIdPConfigurationForDirectoryResponse';
import { DisableUserRequest } from './model/DisableUserRequest';
import { DisableUserResponse } from './model/DisableUserResponse';
import { EmailDto } from './model/EmailDto';
import { EnableExternalIdPConfigurationForDirectoryRequest } from './model/EnableExternalIdPConfigurationForDirectoryRequest';
import { EnableExternalIdPConfigurationForDirectoryResponse } from './model/EnableExternalIdPConfigurationForDirectoryResponse';
import { EnableUserRequest } from './model/EnableUserRequest';
import { EnableUserResponse } from './model/EnableUserResponse';
import { EnterpriseDto } from './model/EnterpriseDto';
import { ExternalIdDto } from './model/ExternalIdDto';
import { ExternalIdpConfigurationDto } from './model/ExternalIdpConfigurationDto';
import { GetGroupIdReqBody } from './model/GetGroupIdReqBody';
import { GetGroupIdRequest } from './model/GetGroupIdRequest';
import { GetGroupIdResponse } from './model/GetGroupIdResponse';
import { GetGroupMembershipIdReqBody } from './model/GetGroupMembershipIdReqBody';
import { GetGroupMembershipIdRequest } from './model/GetGroupMembershipIdRequest';
import { GetGroupMembershipIdResponse } from './model/GetGroupMembershipIdResponse';
import { GetIdentityStoreSummaryRequest } from './model/GetIdentityStoreSummaryRequest';
import { GetIdentityStoreSummaryResponse } from './model/GetIdentityStoreSummaryResponse';
import { GetSpConfigurationForDirectoryRequest } from './model/GetSpConfigurationForDirectoryRequest';
import { GetSpConfigurationForDirectoryResponse } from './model/GetSpConfigurationForDirectoryResponse';
import { GetUserIdReqBody } from './model/GetUserIdReqBody';
import { GetUserIdRequest } from './model/GetUserIdRequest';
import { GetUserIdResponse } from './model/GetUserIdResponse';
import { GroupDto } from './model/GroupDto';
import { GroupMembershipDto } from './model/GroupMembershipDto';
import { GroupMembershipExistenceResultDto } from './model/GroupMembershipExistenceResultDto';
import { GroupMembershipItem } from './model/GroupMembershipItem';
import { IdpCertificate } from './model/IdpCertificate';
import { IdpCertificateBody } from './model/IdpCertificateBody';
import { IdpSAMLConfig } from './model/IdpSAMLConfig';
import { ImportExternalIdPCertificateReqBody } from './model/ImportExternalIdPCertificateReqBody';
import { ImportExternalIdPCertificateRequest } from './model/ImportExternalIdPCertificateRequest';
import { ImportExternalIdPCertificateResponse } from './model/ImportExternalIdPCertificateResponse';
import { IsMemberInGroupsReqBody } from './model/IsMemberInGroupsReqBody';
import { IsMemberInGroupsRequest } from './model/IsMemberInGroupsRequest';
import { IsMemberInGroupsResponse } from './model/IsMemberInGroupsResponse';
import { ListBearerTokensRequest } from './model/ListBearerTokensRequest';
import { ListBearerTokensResponse } from './model/ListBearerTokensResponse';
import { ListExternalIdPCertificatesRequest } from './model/ListExternalIdPCertificatesRequest';
import { ListExternalIdPCertificatesResponse } from './model/ListExternalIdPCertificatesResponse';
import { ListExternalIdPConfigurationsForDirectoryRequest } from './model/ListExternalIdPConfigurationsForDirectoryRequest';
import { ListExternalIdPConfigurationsForDirectoryResponse } from './model/ListExternalIdPConfigurationsForDirectoryResponse';
import { ListGroupMembershipsForMemberRequest } from './model/ListGroupMembershipsForMemberRequest';
import { ListGroupMembershipsForMemberResponse } from './model/ListGroupMembershipsForMemberResponse';
import { ListGroupMembershipsRequest } from './model/ListGroupMembershipsRequest';
import { ListGroupMembershipsResponse } from './model/ListGroupMembershipsResponse';
import { ListGroupsRequest } from './model/ListGroupsRequest';
import { ListGroupsResponse } from './model/ListGroupsResponse';
import { ListProvisioningTenantsRequest } from './model/ListProvisioningTenantsRequest';
import { ListProvisioningTenantsResponse } from './model/ListProvisioningTenantsResponse';
import { ListSessionsRequest } from './model/ListSessionsRequest';
import { ListSessionsResponse } from './model/ListSessionsResponse';
import { ListSpCertificatesRequest } from './model/ListSpCertificatesRequest';
import { ListSpCertificatesResponse } from './model/ListSpCertificatesResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { ManagerDto } from './model/ManagerDto';
import { MemberIdDto } from './model/MemberIdDto';
import { MfaDeviceDto } from './model/MfaDeviceDto';
import { NameDto } from './model/NameDto';
import { PageInfoDto } from './model/PageInfoDto';
import { PasswordPolicyDto } from './model/PasswordPolicyDto';
import { PhoneNumberDto } from './model/PhoneNumberDto';
import { ProvisioningTenant } from './model/ProvisioningTenant';
import { RegisterMfaDeviceForUserRequest } from './model/RegisterMfaDeviceForUserRequest';
import { RegisterMfaDeviceForUserResponse } from './model/RegisterMfaDeviceForUserResponse';
import { ResetPwdModeRequest } from './model/ResetPwdModeRequest';
import { ResetPwdModeResponse } from './model/ResetPwdModeResponse';
import { RetrieveMfaDevicesForUserDto } from './model/RetrieveMfaDevicesForUserDto';
import { RetrieveMfaDevicesForUserEntryDto } from './model/RetrieveMfaDevicesForUserEntryDto';
import { SPOIDCConfig } from './model/SPOIDCConfig';
import { SPSAMLConfig } from './model/SPSAMLConfig';
import { SpCertificateDto } from './model/SpCertificateDto';
import { UniqueAttributeDto } from './model/UniqueAttributeDto';
import { UpdateExternalIdPConfigurationForDirectoryReqBody } from './model/UpdateExternalIdPConfigurationForDirectoryReqBody';
import { UpdateExternalIdPConfigurationForDirectoryRequest } from './model/UpdateExternalIdPConfigurationForDirectoryRequest';
import { UpdateExternalIdPConfigurationForDirectoryResponse } from './model/UpdateExternalIdPConfigurationForDirectoryResponse';
import { UpdateGroupReqBody } from './model/UpdateGroupReqBody';
import { UpdateGroupRequest } from './model/UpdateGroupRequest';
import { UpdateGroupResponse } from './model/UpdateGroupResponse';
import { UpdateMfaDeviceForUserReqBody } from './model/UpdateMfaDeviceForUserReqBody';
import { UpdateMfaDeviceForUserRequest } from './model/UpdateMfaDeviceForUserRequest';
import { UpdateMfaDeviceForUserResponse } from './model/UpdateMfaDeviceForUserResponse';
import { UpdatePasswordPolicyReqBody } from './model/UpdatePasswordPolicyReqBody';
import { UpdatePasswordPolicyRequest } from './model/UpdatePasswordPolicyRequest';
import { UpdatePasswordPolicyResponse } from './model/UpdatePasswordPolicyResponse';
import { UpdatePwdModeReqBody } from './model/UpdatePwdModeReqBody';
import { UpdateSpActiveCertificateRequest } from './model/UpdateSpActiveCertificateRequest';
import { UpdateSpActiveCertificateResponse } from './model/UpdateSpActiveCertificateResponse';
import { UpdateUserReqBody } from './model/UpdateUserReqBody';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { UserDto } from './model/UserDto';
import { UserSessionDto } from './model/UserSessionDto';
import { VerifyEmailRequest } from './model/VerifyEmailRequest';
import { VerifyEmailResponse } from './model/VerifyEmailResponse';

export class IdentityCenterStoreClient {
    public static newBuilder(): ClientBuilder<IdentityCenterStoreClient> {
            let client = new ClientBuilder<IdentityCenterStoreClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 在指定的身份源中创建一个IAM身份中心用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {CreateGroupReqBody} createGroupReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGroup(createGroupRequest?: CreateGroupRequest): Promise<CreateGroupResponse> {
        const options = ParamCreater().createGroup(createGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户组ID，删除对应的IAM身份中心用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IdentityCenter用户组的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGroup(deleteGroupRequest?: DeleteGroupRequest): Promise<DeleteGroupResponse> {
        const options = ParamCreater().deleteGroup(deleteGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户组ID，查询IAM身份中心用户组的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IdentityCenter用户组的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeGroup(describeGroupRequest?: DescribeGroupRequest): Promise<DescribeGroupResponse> {
        const options = ParamCreater().describeGroup(describeGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询指定用户组详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询指定用户组详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {DescribeGroupsRequestBody} describeGroupsRequestBody 批量获取指定的group详情
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeGroups(describeGroupsRequest?: DescribeGroupsRequest): Promise<DescribeGroupsResponse> {
        const options = ParamCreater().describeGroups(describeGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据显示名或外部身份源ID，以精确匹配的方式查询用户组ID。显示名和外部身份源ID两种查询方式二选一，不支持同时传入。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组ID
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {GetGroupIdReqBody} getGroupIdReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getGroupId(getGroupIdRequest?: GetGroupIdRequest): Promise<GetGroupIdResponse> {
        const options = ParamCreater().getGroupId(getGroupIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定身份源下的IAM身份中心用户组列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [marker] 分页标记
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [displayName] 通过显示名模糊查询用户组信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroups(listGroupsRequest?: ListGroupsRequest): Promise<ListGroupsResponse> {
        const options = ParamCreater().listGroups(listGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户组ID，更新对应IAM身份中心用户组的属性。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IdentityCenter用户组的全局唯一标识符（ID）
     * @param {UpdateGroupReqBody} updateGroupReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateGroup(updateGroupRequest?: UpdateGroupRequest): Promise<UpdateGroupResponse> {
        const options = ParamCreater().updateGroup(updateGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将用户添加到用户组中，用户和用户组必须在同一身份源下。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定用户和组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {CreateGroupMembershipReqBody} createGroupMembershipReqBody Successful
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGroupMembership(createGroupMembershipRequest?: CreateGroupMembershipRequest): Promise<CreateGroupMembershipResponse> {
        const options = ParamCreater().createGroupMembership(createGroupMembershipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据关联关系ID解绑用户和用户组，也就是将用户移出用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑用户和组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} membershipId 身份源中用户和组关联关系的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGroupMembership(deleteGroupMembershipRequest?: DeleteGroupMembershipRequest): Promise<DeleteGroupMembershipResponse> {
        const options = ParamCreater().deleteGroupMembership(deleteGroupMembershipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据关联关系ID，查询此关联关系的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询绑定关系详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} membershipId 身份源中用户和组关联关系的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeGroupMembership(describeGroupMembershipRequest?: DescribeGroupMembershipRequest): Promise<DescribeGroupMembershipResponse> {
        const options = ParamCreater().describeGroupMembership(describeGroupMembershipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户ID和用户组ID，查询对应的关联关系ID。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询绑定关系ID
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {GetGroupMembershipIdReqBody} getGroupMembershipIdReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getGroupMembershipId(getGroupMembershipIdRequest?: GetGroupMembershipIdRequest): Promise<GetGroupMembershipIdResponse> {
        const options = ParamCreater().getGroupMembershipId(getGroupMembershipIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户ID和用户组ID列表，查询用户是否为用户组的成员。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户是否是用户组成员
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {IsMemberInGroupsReqBody} isMemberInGroupsReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public isMemberInGroups(isMemberInGroupsRequest?: IsMemberInGroupsRequest): Promise<IsMemberInGroupsResponse> {
        const options = ParamCreater().isMemberInGroups(isMemberInGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户组ID，列出用户组中的用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组中的用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IdentityCenter用户组的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroupMemberships(listGroupMembershipsRequest?: ListGroupMembershipsRequest): Promise<ListGroupMembershipsResponse> {
        const options = ParamCreater().listGroupMemberships(listGroupMembershipsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户ID，列出用户加入的用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户加入的组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 用户唯一标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGroupMembershipsForMember(listGroupMembershipsForMemberRequest?: ListGroupMembershipsForMemberRequest): Promise<ListGroupMembershipsForMemberResponse> {
        const options = ParamCreater().listGroupMembershipsForMember(listGroupMembershipsForMemberRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建外部身份提供商配置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {CreateIDPReqBody} createIDPReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExternalIdPConfigurationForDirectory(createExternalIdPConfigurationForDirectoryRequest?: CreateExternalIdPConfigurationForDirectoryRequest): Promise<CreateExternalIdPConfigurationForDirectoryResponse> {
        const options = ParamCreater().createExternalIdPConfigurationForDirectory(createExternalIdPConfigurationForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除外部身份提供商证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除外部身份提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} certificateId 身份源中证书全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExternalIdPCertificate(deleteExternalIdPCertificateRequest?: DeleteExternalIdPCertificateRequest): Promise<DeleteExternalIdPCertificateResponse> {
        const options = ParamCreater().deleteExternalIdPCertificate(deleteExternalIdPCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除外部身份提供商配置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExternalIdPConfigurationForDirectory(deleteExternalIdPConfigurationForDirectoryRequest?: DeleteExternalIdPConfigurationForDirectoryRequest): Promise<DeleteExternalIdPConfigurationForDirectoryResponse> {
        const options = ParamCreater().deleteExternalIdPConfigurationForDirectory(deleteExternalIdPConfigurationForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用外部身份提供商。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用外部身份提供商
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableExternalIdPConfigurationForDirectory(disableExternalIdPConfigurationForDirectoryRequest?: DisableExternalIdPConfigurationForDirectoryRequest): Promise<DisableExternalIdPConfigurationForDirectoryResponse> {
        const options = ParamCreater().disableExternalIdPConfigurationForDirectory(disableExternalIdPConfigurationForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用外部身份提供商。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用外部身份提供商
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableExternalIdPConfigurationForDirectory(enableExternalIdPConfigurationForDirectoryRequest?: EnableExternalIdPConfigurationForDirectoryRequest): Promise<EnableExternalIdPConfigurationForDirectoryResponse> {
        const options = ParamCreater().enableExternalIdPConfigurationForDirectory(enableExternalIdPConfigurationForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入外部身份提供商证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入外部身份提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {ImportExternalIdPCertificateReqBody} [importExternalIdPCertificateReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importExternalIdPCertificate(importExternalIdPCertificateRequest?: ImportExternalIdPCertificateRequest): Promise<ImportExternalIdPCertificateResponse> {
        const options = ParamCreater().importExternalIdPCertificate(importExternalIdPCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询外部身份提供商证书列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出外部身份提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExternalIdPCertificates(listExternalIdPCertificatesRequest?: ListExternalIdPCertificatesRequest): Promise<ListExternalIdPCertificatesResponse> {
        const options = ParamCreater().listExternalIdPCertificates(listExternalIdPCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询外部身份提供商配置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExternalIdPConfigurationsForDirectory(listExternalIdPConfigurationsForDirectoryRequest?: ListExternalIdPConfigurationsForDirectoryRequest): Promise<ListExternalIdPConfigurationsForDirectoryResponse> {
        const options = ParamCreater().listExternalIdPConfigurationsForDirectory(listExternalIdPConfigurationsForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新外部身份提供商配置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} idpId 外部身份提供商的全局唯一标识符（ID）
     * @param {UpdateExternalIdPConfigurationForDirectoryReqBody} updateExternalIdPConfigurationForDirectoryReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateExternalIdPConfigurationForDirectory(updateExternalIdPConfigurationForDirectoryRequest?: UpdateExternalIdPConfigurationForDirectoryRequest): Promise<UpdateExternalIdPConfigurationForDirectoryResponse> {
        const options = ParamCreater().updateExternalIdPConfigurationForDirectory(updateExternalIdPConfigurationForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询自定义密码策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义密码策略
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describePasswordPolicy(describePasswordPolicyRequest?: DescribePasswordPolicyRequest): Promise<DescribePasswordPolicyResponse> {
        const options = ParamCreater().describePasswordPolicy(describePasswordPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义密码策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义密码策略
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {UpdatePasswordPolicyReqBody} updatePasswordPolicyReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePasswordPolicy(updatePasswordPolicyRequest?: UpdatePasswordPolicyRequest): Promise<UpdatePasswordPolicyResponse> {
        const options = ParamCreater().updatePasswordPolicy(updatePasswordPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建服务提供商SAML协议签名证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSpCertificate(createSpCertificateRequest?: CreateSpCertificateRequest): Promise<CreateSpCertificateResponse> {
        const options = ParamCreater().createSpCertificate(createSpCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除服务提供商SAML协议签名证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} certificateId 身份源中证书全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSpCertificate(deleteSpCertificateRequest?: DeleteSpCertificateRequest): Promise<DeleteSpCertificateResponse> {
        const options = ParamCreater().deleteSpCertificate(deleteSpCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务提供商配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务提供商配置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getSpConfigurationForDirectory(getSpConfigurationForDirectoryRequest?: GetSpConfigurationForDirectoryRequest): Promise<GetSpConfigurationForDirectoryResponse> {
        const options = ParamCreater().getSpConfigurationForDirectory(getSpConfigurationForDirectoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务提供商SAML协议签名证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出服务提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpCertificates(listSpCertificatesRequest?: ListSpCertificatesRequest): Promise<ListSpCertificatesResponse> {
        const options = ParamCreater().listSpCertificates(listSpCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 激活服务提供商SAML协议签名证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 激活服务提供商证书
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} certificateId 身份源中证书全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSpActiveCertificate(updateSpActiveCertificateRequest?: UpdateSpActiveCertificateRequest): Promise<UpdateSpActiveCertificateResponse> {
        const options = ParamCreater().updateSpActiveCertificate(updateSpActiveCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询身份源配额信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询身份源配额信息
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getIdentityStoreSummary(getIdentityStoreSummaryRequest?: GetIdentityStoreSummaryRequest): Promise<GetIdentityStoreSummaryResponse> {
        const options = ParamCreater().getIdentityStoreSummary(getIdentityStoreSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建访问令牌。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建访问令牌
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} tenantId 自动预置配置的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBearerToken(createBearerTokenRequest?: CreateBearerTokenRequest): Promise<CreateBearerTokenResponse> {
        const options = ParamCreater().createBearerToken(createBearerTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用自动预置，开启SCIM协议自动同步功能。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用自动预置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProvisioningTenant(createProvisioningTenantRequest?: CreateProvisioningTenantRequest): Promise<CreateProvisioningTenantResponse> {
        const options = ParamCreater().createProvisioningTenant(createProvisioningTenantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除访问令牌。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除访问令牌
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} tenantId 自动预置配置的全局唯一标识符（ID）
     * @param {string} tokenId 访问令牌全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBearerToken(deleteBearerTokenRequest?: DeleteBearerTokenRequest): Promise<DeleteBearerTokenResponse> {
        const options = ParamCreater().deleteBearerToken(deleteBearerTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自动预置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自动预置
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} tenantId 自动预置配置的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProvisioningTenant(deleteProvisioningTenantRequest?: DeleteProvisioningTenantRequest): Promise<DeleteProvisioningTenantResponse> {
        const options = ParamCreater().deleteProvisioningTenant(deleteProvisioningTenantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询访问令牌列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出访问令牌
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} tenantId 自动预置配置的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBearerTokens(listBearerTokensRequest?: ListBearerTokensRequest): Promise<ListBearerTokensResponse> {
        const options = ParamCreater().listBearerTokens(listBearerTokensRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询是否开启自动预置，返回具体SCIM自动预配配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自动预置信息
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProvisioningTenants(listProvisioningTenantsRequest?: ListProvisioningTenantsRequest): Promise<ListProvisioningTenantsResponse> {
        const options = ParamCreater().listProvisioningTenants(listProvisioningTenantsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除用户登录会话。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除用户登录会话
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {BatchDeleteSessionsReqBody} [batchDeleteSessionsReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteSessions(batchDeleteSessionsRequest?: BatchDeleteSessionsRequest): Promise<BatchDeleteSessionsResponse> {
        const options = ParamCreater().batchDeleteSessions(batchDeleteSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定用户的MFA设备列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户MFA设备
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {BatchListMfaDevicesForUserReqBody} batchListMfaDevicesForUserReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListMfaDevicesForUser(batchListMfaDevicesForUserRequest?: BatchListMfaDevicesForUserRequest): Promise<BatchListMfaDevicesForUserResponse> {
        const options = ParamCreater().batchListMfaDevicesForUser(batchListMfaDevicesForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定的身份源中创建一个IAM身份中心用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {CreateUserReqBody} createUserReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createUser(createUserRequest?: CreateUserRequest): Promise<CreateUserResponse> {
        const options = ParamCreater().createUser(createUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除用户绑定的MFA设备。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户MFA设备
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} deviceId 设备ID
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMfaDeviceForUser(deleteMfaDeviceForUserRequest?: DeleteMfaDeviceForUserRequest): Promise<DeleteMfaDeviceForUserResponse> {
        const options = ParamCreater().deleteMfaDeviceForUser(deleteMfaDeviceForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户ID，删除对应的IAM身份中心用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteUser(deleteUserRequest?: DeleteUserRequest): Promise<DeleteUserResponse> {
        const options = ParamCreater().deleteUser(deleteUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户ID，查询对应IAM身份中心用户的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeUser(describeUserRequest?: DescribeUserRequest): Promise<DescribeUserResponse> {
        const options = ParamCreater().describeUser(describeUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询指定用户详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询指定用户详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {DescribeUsersRequestBody} describeUsersRequestBody 批量获取指定的user详情
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeUsers(describeUsersRequest?: DescribeUsersRequest): Promise<DescribeUsersResponse> {
        const options = ParamCreater().describeUsers(describeUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用IAM身份中心的用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableUser(disableUserRequest?: DisableUserRequest): Promise<DisableUserResponse> {
        const options = ParamCreater().disableUser(disableUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用IAM身份中心的用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableUser(enableUserRequest?: EnableUserRequest): Promise<EnableUserResponse> {
        const options = ParamCreater().enableUser(enableUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户名或外部身份源ID，以精确匹配的方式查询用户ID。用户名和外部身份源ID两种查询方式二选一，不支持同时传入。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户ID
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {GetUserIdReqBody} getUserIdReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getUserId(getUserIdRequest?: GetUserIdRequest): Promise<GetUserIdResponse> {
        const options = ParamCreater().getUserId(getUserIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定用户的登录会话信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户登录会话
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSessions(listSessionsRequest?: ListSessionsRequest): Promise<ListSessionsResponse> {
        const options = ParamCreater().listSessions(listSessionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定身份源下的IAM身份中心用户列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {string} [marker] 分页标记
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [userName] 用户名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUsers(listUsersRequest?: ListUsersRequest): Promise<ListUsersResponse> {
        const options = ParamCreater().listUsers(listUsersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为用户发起注册MFA设备，返回一个MFA注册地址。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册MFA设备
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerMfaDeviceForUser(registerMfaDeviceForUserRequest?: RegisterMfaDeviceForUserRequest): Promise<RegisterMfaDeviceForUserResponse> {
        const options = ParamCreater().registerMfaDeviceForUser(registerMfaDeviceForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过电子邮件发送密码重置链接或生成用户的一次性密码。。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过电子邮件发送密码重置链接或生成用户的一次性密码
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {UpdatePwdModeReqBody} updatePwdModeReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetPwdMode(resetPwdModeRequest?: ResetPwdModeRequest): Promise<ResetPwdModeResponse> {
        const options = ParamCreater().resetPwdMode(resetPwdModeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新MFA设备显示名称。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新MFA设备显示名称
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} deviceId MFA设备ID
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {UpdateMfaDeviceForUserReqBody} [updateMfaDeviceForUserReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMfaDeviceForUser(updateMfaDeviceForUserRequest?: UpdateMfaDeviceForUserRequest): Promise<UpdateMfaDeviceForUserResponse> {
        const options = ParamCreater().updateMfaDeviceForUser(updateMfaDeviceForUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据用户ID，更新对应IAM身份中心用户的属性。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {UpdateUserReqBody} updateUserReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateUser(updateUserRequest?: UpdateUserRequest): Promise<UpdateUserResponse> {
        const options = ParamCreater().updateUser(updateUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 验证用户邮箱。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 验证用户邮箱
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IdentityCenter用户的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public verifyEmail(verifyEmailRequest?: VerifyEmailRequest): Promise<VerifyEmailResponse> {
        const options = ParamCreater().verifyEmail(verifyEmailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 在指定的身份源中创建一个IAM身份中心用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroup(createGroupRequest?: CreateGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (createGroupRequest !== null && createGroupRequest !== undefined) {
                if (createGroupRequest instanceof CreateGroupRequest) {
                    identityStoreId = createGroupRequest.identityStoreId;
                    body = createGroupRequest.body
                    xSecurityToken = createGroupRequest.xSecurityToken;
                } else {
                    identityStoreId = createGroupRequest['identity_store_id'];
                    body = createGroupRequest['body'];
                    xSecurityToken = createGroupRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户组ID，删除对应的IAM身份中心用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroup(deleteGroupRequest?: DeleteGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let groupId;
            
            let xSecurityToken;

            if (deleteGroupRequest !== null && deleteGroupRequest !== undefined) {
                if (deleteGroupRequest instanceof DeleteGroupRequest) {
                    identityStoreId = deleteGroupRequest.identityStoreId;
                    groupId = deleteGroupRequest.groupId;
                    xSecurityToken = deleteGroupRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteGroupRequest['identity_store_id'];
                    groupId = deleteGroupRequest['group_id'];
                    xSecurityToken = deleteGroupRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGroup.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户组ID，查询IAM身份中心用户组的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeGroup(describeGroupRequest?: DescribeGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let groupId;
            
            let xSecurityToken;

            if (describeGroupRequest !== null && describeGroupRequest !== undefined) {
                if (describeGroupRequest instanceof DescribeGroupRequest) {
                    identityStoreId = describeGroupRequest.identityStoreId;
                    groupId = describeGroupRequest.groupId;
                    xSecurityToken = describeGroupRequest.xSecurityToken;
                } else {
                    identityStoreId = describeGroupRequest['identity_store_id'];
                    groupId = describeGroupRequest['group_id'];
                    xSecurityToken = describeGroupRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling describeGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling describeGroup.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询指定用户组详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeGroups(describeGroupsRequest?: DescribeGroupsRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/groups/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (describeGroupsRequest !== null && describeGroupsRequest !== undefined) {
                if (describeGroupsRequest instanceof DescribeGroupsRequest) {
                    identityStoreId = describeGroupsRequest.identityStoreId;
                    body = describeGroupsRequest.body
                    xSecurityToken = describeGroupsRequest.xSecurityToken;
                } else {
                    identityStoreId = describeGroupsRequest['identity_store_id'];
                    body = describeGroupsRequest['body'];
                    xSecurityToken = describeGroupsRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling describeGroups.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据显示名或外部身份源ID，以精确匹配的方式查询用户组ID。显示名和外部身份源ID两种查询方式二选一，不支持同时传入。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getGroupId(getGroupIdRequest?: GetGroupIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/groups/retrieve-group-id",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (getGroupIdRequest !== null && getGroupIdRequest !== undefined) {
                if (getGroupIdRequest instanceof GetGroupIdRequest) {
                    identityStoreId = getGroupIdRequest.identityStoreId;
                    body = getGroupIdRequest.body
                    xSecurityToken = getGroupIdRequest.xSecurityToken;
                } else {
                    identityStoreId = getGroupIdRequest['identity_store_id'];
                    body = getGroupIdRequest['body'];
                    xSecurityToken = getGroupIdRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling getGroupId.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定身份源下的IAM身份中心用户组列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroups(listGroupsRequest?: ListGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let identityStoreId;
            
            let xSecurityToken;
            
            let marker;
            
            let limit;
            
            let displayName;

            if (listGroupsRequest !== null && listGroupsRequest !== undefined) {
                if (listGroupsRequest instanceof ListGroupsRequest) {
                    identityStoreId = listGroupsRequest.identityStoreId;
                    xSecurityToken = listGroupsRequest.xSecurityToken;
                    marker = listGroupsRequest.marker;
                    limit = listGroupsRequest.limit;
                    displayName = listGroupsRequest.displayName;
                } else {
                    identityStoreId = listGroupsRequest['identity_store_id'];
                    xSecurityToken = listGroupsRequest['X-Security-Token'];
                    marker = listGroupsRequest['marker'];
                    limit = listGroupsRequest['limit'];
                    displayName = listGroupsRequest['display_name'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listGroups.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (displayName !== null && displayName !== undefined) {
                localVarQueryParameter['display_name'] = displayName;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户组ID，更新对应IAM身份中心用户组的属性。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateGroup(updateGroupRequest?: UpdateGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/identity-stores/{identity_store_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let groupId;
            
            let xSecurityToken;

            if (updateGroupRequest !== null && updateGroupRequest !== undefined) {
                if (updateGroupRequest instanceof UpdateGroupRequest) {
                    identityStoreId = updateGroupRequest.identityStoreId;
                    groupId = updateGroupRequest.groupId;
                    body = updateGroupRequest.body
                    xSecurityToken = updateGroupRequest.xSecurityToken;
                } else {
                    identityStoreId = updateGroupRequest['identity_store_id'];
                    groupId = updateGroupRequest['group_id'];
                    body = updateGroupRequest['body'];
                    xSecurityToken = updateGroupRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling updateGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将用户添加到用户组中，用户和用户组必须在同一身份源下。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroupMembership(createGroupMembershipRequest?: CreateGroupMembershipRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/group-memberships",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (createGroupMembershipRequest !== null && createGroupMembershipRequest !== undefined) {
                if (createGroupMembershipRequest instanceof CreateGroupMembershipRequest) {
                    identityStoreId = createGroupMembershipRequest.identityStoreId;
                    body = createGroupMembershipRequest.body
                    xSecurityToken = createGroupMembershipRequest.xSecurityToken;
                } else {
                    identityStoreId = createGroupMembershipRequest['identity_store_id'];
                    body = createGroupMembershipRequest['body'];
                    xSecurityToken = createGroupMembershipRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createGroupMembership.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据关联关系ID解绑用户和用户组，也就是将用户移出用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroupMembership(deleteGroupMembershipRequest?: DeleteGroupMembershipRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/group-memberships/{membership_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let membershipId;
            
            let xSecurityToken;

            if (deleteGroupMembershipRequest !== null && deleteGroupMembershipRequest !== undefined) {
                if (deleteGroupMembershipRequest instanceof DeleteGroupMembershipRequest) {
                    identityStoreId = deleteGroupMembershipRequest.identityStoreId;
                    membershipId = deleteGroupMembershipRequest.membershipId;
                    xSecurityToken = deleteGroupMembershipRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteGroupMembershipRequest['identity_store_id'];
                    membershipId = deleteGroupMembershipRequest['membership_id'];
                    xSecurityToken = deleteGroupMembershipRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteGroupMembership.');
            }
            if (membershipId === null || membershipId === undefined) {
            throw new RequiredError('membershipId','Required parameter membershipId was null or undefined when calling deleteGroupMembership.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'membership_id': membershipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据关联关系ID，查询此关联关系的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeGroupMembership(describeGroupMembershipRequest?: DescribeGroupMembershipRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/group-memberships/{membership_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let membershipId;
            
            let xSecurityToken;

            if (describeGroupMembershipRequest !== null && describeGroupMembershipRequest !== undefined) {
                if (describeGroupMembershipRequest instanceof DescribeGroupMembershipRequest) {
                    identityStoreId = describeGroupMembershipRequest.identityStoreId;
                    membershipId = describeGroupMembershipRequest.membershipId;
                    xSecurityToken = describeGroupMembershipRequest.xSecurityToken;
                } else {
                    identityStoreId = describeGroupMembershipRequest['identity_store_id'];
                    membershipId = describeGroupMembershipRequest['membership_id'];
                    xSecurityToken = describeGroupMembershipRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling describeGroupMembership.');
            }
            if (membershipId === null || membershipId === undefined) {
            throw new RequiredError('membershipId','Required parameter membershipId was null or undefined when calling describeGroupMembership.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'membership_id': membershipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户ID和用户组ID，查询对应的关联关系ID。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getGroupMembershipId(getGroupMembershipIdRequest?: GetGroupMembershipIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/group-memberships/retrieve-group-membership-id",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (getGroupMembershipIdRequest !== null && getGroupMembershipIdRequest !== undefined) {
                if (getGroupMembershipIdRequest instanceof GetGroupMembershipIdRequest) {
                    identityStoreId = getGroupMembershipIdRequest.identityStoreId;
                    body = getGroupMembershipIdRequest.body
                    xSecurityToken = getGroupMembershipIdRequest.xSecurityToken;
                } else {
                    identityStoreId = getGroupMembershipIdRequest['identity_store_id'];
                    body = getGroupMembershipIdRequest['body'];
                    xSecurityToken = getGroupMembershipIdRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling getGroupMembershipId.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户ID和用户组ID列表，查询用户是否为用户组的成员。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        isMemberInGroups(isMemberInGroupsRequest?: IsMemberInGroupsRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/is-member-in-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (isMemberInGroupsRequest !== null && isMemberInGroupsRequest !== undefined) {
                if (isMemberInGroupsRequest instanceof IsMemberInGroupsRequest) {
                    identityStoreId = isMemberInGroupsRequest.identityStoreId;
                    body = isMemberInGroupsRequest.body
                    xSecurityToken = isMemberInGroupsRequest.xSecurityToken;
                } else {
                    identityStoreId = isMemberInGroupsRequest['identity_store_id'];
                    body = isMemberInGroupsRequest['body'];
                    xSecurityToken = isMemberInGroupsRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling isMemberInGroups.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户组ID，列出用户组中的用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroupMemberships(listGroupMembershipsRequest?: ListGroupMembershipsRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/group-memberships",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let identityStoreId;
            
            let groupId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listGroupMembershipsRequest !== null && listGroupMembershipsRequest !== undefined) {
                if (listGroupMembershipsRequest instanceof ListGroupMembershipsRequest) {
                    identityStoreId = listGroupMembershipsRequest.identityStoreId;
                    groupId = listGroupMembershipsRequest.groupId;
                    xSecurityToken = listGroupMembershipsRequest.xSecurityToken;
                    limit = listGroupMembershipsRequest.limit;
                    marker = listGroupMembershipsRequest.marker;
                } else {
                    identityStoreId = listGroupMembershipsRequest['identity_store_id'];
                    groupId = listGroupMembershipsRequest['group_id'];
                    xSecurityToken = listGroupMembershipsRequest['X-Security-Token'];
                    limit = listGroupMembershipsRequest['limit'];
                    marker = listGroupMembershipsRequest['marker'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listGroupMemberships.');
            }
            if (groupId === null || groupId === undefined) {
                throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listGroupMemberships.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户ID，列出用户加入的用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroupMembershipsForMember(listGroupMembershipsForMemberRequest?: ListGroupMembershipsForMemberRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/group-memberships-for-member",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listGroupMembershipsForMemberRequest !== null && listGroupMembershipsForMemberRequest !== undefined) {
                if (listGroupMembershipsForMemberRequest instanceof ListGroupMembershipsForMemberRequest) {
                    identityStoreId = listGroupMembershipsForMemberRequest.identityStoreId;
                    userId = listGroupMembershipsForMemberRequest.userId;
                    xSecurityToken = listGroupMembershipsForMemberRequest.xSecurityToken;
                    limit = listGroupMembershipsForMemberRequest.limit;
                    marker = listGroupMembershipsForMemberRequest.marker;
                } else {
                    identityStoreId = listGroupMembershipsForMemberRequest['identity_store_id'];
                    userId = listGroupMembershipsForMemberRequest['user_id'];
                    xSecurityToken = listGroupMembershipsForMemberRequest['X-Security-Token'];
                    limit = listGroupMembershipsForMemberRequest['limit'];
                    marker = listGroupMembershipsForMemberRequest['marker'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listGroupMembershipsForMember.');
            }
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling listGroupMembershipsForMember.');
            }
            if (userId !== null && userId !== undefined) {
                localVarQueryParameter['user_id'] = userId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExternalIdPConfigurationForDirectory(createExternalIdPConfigurationForDirectoryRequest?: CreateExternalIdPConfigurationForDirectoryRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/external-idp",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (createExternalIdPConfigurationForDirectoryRequest !== null && createExternalIdPConfigurationForDirectoryRequest !== undefined) {
                if (createExternalIdPConfigurationForDirectoryRequest instanceof CreateExternalIdPConfigurationForDirectoryRequest) {
                    identityStoreId = createExternalIdPConfigurationForDirectoryRequest.identityStoreId;
                    body = createExternalIdPConfigurationForDirectoryRequest.body
                    xSecurityToken = createExternalIdPConfigurationForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = createExternalIdPConfigurationForDirectoryRequest['identity_store_id'];
                    body = createExternalIdPConfigurationForDirectoryRequest['body'];
                    xSecurityToken = createExternalIdPConfigurationForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createExternalIdPConfigurationForDirectory.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除外部身份提供商证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteExternalIdPCertificate(deleteExternalIdPCertificateRequest?: DeleteExternalIdPCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}/certificate/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let certificateId;
            
            let idpId;
            
            let xSecurityToken;

            if (deleteExternalIdPCertificateRequest !== null && deleteExternalIdPCertificateRequest !== undefined) {
                if (deleteExternalIdPCertificateRequest instanceof DeleteExternalIdPCertificateRequest) {
                    identityStoreId = deleteExternalIdPCertificateRequest.identityStoreId;
                    certificateId = deleteExternalIdPCertificateRequest.certificateId;
                    idpId = deleteExternalIdPCertificateRequest.idpId;
                    xSecurityToken = deleteExternalIdPCertificateRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteExternalIdPCertificateRequest['identity_store_id'];
                    certificateId = deleteExternalIdPCertificateRequest['certificate_id'];
                    idpId = deleteExternalIdPCertificateRequest['idp_id'];
                    xSecurityToken = deleteExternalIdPCertificateRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteExternalIdPCertificate.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteExternalIdPCertificate.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling deleteExternalIdPCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'certificate_id': certificateId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteExternalIdPConfigurationForDirectory(deleteExternalIdPConfigurationForDirectoryRequest?: DeleteExternalIdPConfigurationForDirectoryRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let idpId;
            
            let xSecurityToken;

            if (deleteExternalIdPConfigurationForDirectoryRequest !== null && deleteExternalIdPConfigurationForDirectoryRequest !== undefined) {
                if (deleteExternalIdPConfigurationForDirectoryRequest instanceof DeleteExternalIdPConfigurationForDirectoryRequest) {
                    identityStoreId = deleteExternalIdPConfigurationForDirectoryRequest.identityStoreId;
                    idpId = deleteExternalIdPConfigurationForDirectoryRequest.idpId;
                    xSecurityToken = deleteExternalIdPConfigurationForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteExternalIdPConfigurationForDirectoryRequest['identity_store_id'];
                    idpId = deleteExternalIdPConfigurationForDirectoryRequest['idp_id'];
                    xSecurityToken = deleteExternalIdPConfigurationForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteExternalIdPConfigurationForDirectory.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling deleteExternalIdPConfigurationForDirectory.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用外部身份提供商。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableExternalIdPConfigurationForDirectory(disableExternalIdPConfigurationForDirectoryRequest?: DisableExternalIdPConfigurationForDirectoryRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let idpId;
            
            let xSecurityToken;

            if (disableExternalIdPConfigurationForDirectoryRequest !== null && disableExternalIdPConfigurationForDirectoryRequest !== undefined) {
                if (disableExternalIdPConfigurationForDirectoryRequest instanceof DisableExternalIdPConfigurationForDirectoryRequest) {
                    identityStoreId = disableExternalIdPConfigurationForDirectoryRequest.identityStoreId;
                    idpId = disableExternalIdPConfigurationForDirectoryRequest.idpId;
                    xSecurityToken = disableExternalIdPConfigurationForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = disableExternalIdPConfigurationForDirectoryRequest['identity_store_id'];
                    idpId = disableExternalIdPConfigurationForDirectoryRequest['idp_id'];
                    xSecurityToken = disableExternalIdPConfigurationForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling disableExternalIdPConfigurationForDirectory.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling disableExternalIdPConfigurationForDirectory.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用外部身份提供商。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableExternalIdPConfigurationForDirectory(enableExternalIdPConfigurationForDirectoryRequest?: EnableExternalIdPConfigurationForDirectoryRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let idpId;
            
            let xSecurityToken;

            if (enableExternalIdPConfigurationForDirectoryRequest !== null && enableExternalIdPConfigurationForDirectoryRequest !== undefined) {
                if (enableExternalIdPConfigurationForDirectoryRequest instanceof EnableExternalIdPConfigurationForDirectoryRequest) {
                    identityStoreId = enableExternalIdPConfigurationForDirectoryRequest.identityStoreId;
                    idpId = enableExternalIdPConfigurationForDirectoryRequest.idpId;
                    xSecurityToken = enableExternalIdPConfigurationForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = enableExternalIdPConfigurationForDirectoryRequest['identity_store_id'];
                    idpId = enableExternalIdPConfigurationForDirectoryRequest['idp_id'];
                    xSecurityToken = enableExternalIdPConfigurationForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling enableExternalIdPConfigurationForDirectory.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling enableExternalIdPConfigurationForDirectory.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入外部身份提供商证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importExternalIdPCertificate(importExternalIdPCertificateRequest?: ImportExternalIdPCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let idpId;
            
            let xSecurityToken;

            if (importExternalIdPCertificateRequest !== null && importExternalIdPCertificateRequest !== undefined) {
                if (importExternalIdPCertificateRequest instanceof ImportExternalIdPCertificateRequest) {
                    identityStoreId = importExternalIdPCertificateRequest.identityStoreId;
                    idpId = importExternalIdPCertificateRequest.idpId;
                    xSecurityToken = importExternalIdPCertificateRequest.xSecurityToken;
                    body = importExternalIdPCertificateRequest.body
                } else {
                    identityStoreId = importExternalIdPCertificateRequest['identity_store_id'];
                    idpId = importExternalIdPCertificateRequest['idp_id'];
                    xSecurityToken = importExternalIdPCertificateRequest['X-Security-Token'];
                    body = importExternalIdPCertificateRequest['body'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling importExternalIdPCertificate.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling importExternalIdPCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询外部身份提供商证书列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExternalIdPCertificates(listExternalIdPCertificatesRequest?: ListExternalIdPCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}/certificate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let idpId;
            
            let xSecurityToken;

            if (listExternalIdPCertificatesRequest !== null && listExternalIdPCertificatesRequest !== undefined) {
                if (listExternalIdPCertificatesRequest instanceof ListExternalIdPCertificatesRequest) {
                    identityStoreId = listExternalIdPCertificatesRequest.identityStoreId;
                    idpId = listExternalIdPCertificatesRequest.idpId;
                    xSecurityToken = listExternalIdPCertificatesRequest.xSecurityToken;
                } else {
                    identityStoreId = listExternalIdPCertificatesRequest['identity_store_id'];
                    idpId = listExternalIdPCertificatesRequest['idp_id'];
                    xSecurityToken = listExternalIdPCertificatesRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listExternalIdPCertificates.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling listExternalIdPCertificates.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExternalIdPConfigurationsForDirectory(listExternalIdPConfigurationsForDirectoryRequest?: ListExternalIdPConfigurationsForDirectoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/external-idp",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (listExternalIdPConfigurationsForDirectoryRequest !== null && listExternalIdPConfigurationsForDirectoryRequest !== undefined) {
                if (listExternalIdPConfigurationsForDirectoryRequest instanceof ListExternalIdPConfigurationsForDirectoryRequest) {
                    identityStoreId = listExternalIdPConfigurationsForDirectoryRequest.identityStoreId;
                    xSecurityToken = listExternalIdPConfigurationsForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = listExternalIdPConfigurationsForDirectoryRequest['identity_store_id'];
                    xSecurityToken = listExternalIdPConfigurationsForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listExternalIdPConfigurationsForDirectory.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新外部身份提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateExternalIdPConfigurationForDirectory(updateExternalIdPConfigurationForDirectoryRequest?: UpdateExternalIdPConfigurationForDirectoryRequest) {
            const options = {
                method: "PUT",
                url: "/v1/identity-stores/{identity_store_id}/external-idp/{idp_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let idpId;
            
            let xSecurityToken;

            if (updateExternalIdPConfigurationForDirectoryRequest !== null && updateExternalIdPConfigurationForDirectoryRequest !== undefined) {
                if (updateExternalIdPConfigurationForDirectoryRequest instanceof UpdateExternalIdPConfigurationForDirectoryRequest) {
                    identityStoreId = updateExternalIdPConfigurationForDirectoryRequest.identityStoreId;
                    idpId = updateExternalIdPConfigurationForDirectoryRequest.idpId;
                    body = updateExternalIdPConfigurationForDirectoryRequest.body
                    xSecurityToken = updateExternalIdPConfigurationForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = updateExternalIdPConfigurationForDirectoryRequest['identity_store_id'];
                    idpId = updateExternalIdPConfigurationForDirectoryRequest['idp_id'];
                    body = updateExternalIdPConfigurationForDirectoryRequest['body'];
                    xSecurityToken = updateExternalIdPConfigurationForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling updateExternalIdPConfigurationForDirectory.');
            }
            if (idpId === null || idpId === undefined) {
            throw new RequiredError('idpId','Required parameter idpId was null or undefined when calling updateExternalIdPConfigurationForDirectory.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'idp_id': idpId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义密码策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describePasswordPolicy(describePasswordPolicyRequest?: DescribePasswordPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/password-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (describePasswordPolicyRequest !== null && describePasswordPolicyRequest !== undefined) {
                if (describePasswordPolicyRequest instanceof DescribePasswordPolicyRequest) {
                    identityStoreId = describePasswordPolicyRequest.identityStoreId;
                    xSecurityToken = describePasswordPolicyRequest.xSecurityToken;
                } else {
                    identityStoreId = describePasswordPolicyRequest['identity_store_id'];
                    xSecurityToken = describePasswordPolicyRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling describePasswordPolicy.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义密码策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePasswordPolicy(updatePasswordPolicyRequest?: UpdatePasswordPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/identity-stores/{identity_store_id}/password-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (updatePasswordPolicyRequest !== null && updatePasswordPolicyRequest !== undefined) {
                if (updatePasswordPolicyRequest instanceof UpdatePasswordPolicyRequest) {
                    identityStoreId = updatePasswordPolicyRequest.identityStoreId;
                    body = updatePasswordPolicyRequest.body
                    xSecurityToken = updatePasswordPolicyRequest.xSecurityToken;
                } else {
                    identityStoreId = updatePasswordPolicyRequest['identity_store_id'];
                    body = updatePasswordPolicyRequest['body'];
                    xSecurityToken = updatePasswordPolicyRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling updatePasswordPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建服务提供商SAML协议签名证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSpCertificate(createSpCertificateRequest?: CreateSpCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/saml-certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (createSpCertificateRequest !== null && createSpCertificateRequest !== undefined) {
                if (createSpCertificateRequest instanceof CreateSpCertificateRequest) {
                    identityStoreId = createSpCertificateRequest.identityStoreId;
                    xSecurityToken = createSpCertificateRequest.xSecurityToken;
                } else {
                    identityStoreId = createSpCertificateRequest['identity_store_id'];
                    xSecurityToken = createSpCertificateRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createSpCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除服务提供商SAML协议签名证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSpCertificate(deleteSpCertificateRequest?: DeleteSpCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/saml-certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let certificateId;
            
            let xSecurityToken;

            if (deleteSpCertificateRequest !== null && deleteSpCertificateRequest !== undefined) {
                if (deleteSpCertificateRequest instanceof DeleteSpCertificateRequest) {
                    identityStoreId = deleteSpCertificateRequest.identityStoreId;
                    certificateId = deleteSpCertificateRequest.certificateId;
                    xSecurityToken = deleteSpCertificateRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteSpCertificateRequest['identity_store_id'];
                    certificateId = deleteSpCertificateRequest['certificate_id'];
                    xSecurityToken = deleteSpCertificateRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteSpCertificate.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteSpCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务提供商配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getSpConfigurationForDirectory(getSpConfigurationForDirectoryRequest?: GetSpConfigurationForDirectoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/sp-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (getSpConfigurationForDirectoryRequest !== null && getSpConfigurationForDirectoryRequest !== undefined) {
                if (getSpConfigurationForDirectoryRequest instanceof GetSpConfigurationForDirectoryRequest) {
                    identityStoreId = getSpConfigurationForDirectoryRequest.identityStoreId;
                    xSecurityToken = getSpConfigurationForDirectoryRequest.xSecurityToken;
                } else {
                    identityStoreId = getSpConfigurationForDirectoryRequest['identity_store_id'];
                    xSecurityToken = getSpConfigurationForDirectoryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling getSpConfigurationForDirectory.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务提供商SAML协议签名证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpCertificates(listSpCertificatesRequest?: ListSpCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/saml-certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (listSpCertificatesRequest !== null && listSpCertificatesRequest !== undefined) {
                if (listSpCertificatesRequest instanceof ListSpCertificatesRequest) {
                    identityStoreId = listSpCertificatesRequest.identityStoreId;
                    xSecurityToken = listSpCertificatesRequest.xSecurityToken;
                } else {
                    identityStoreId = listSpCertificatesRequest['identity_store_id'];
                    xSecurityToken = listSpCertificatesRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listSpCertificates.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 激活服务提供商SAML协议签名证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSpActiveCertificate(updateSpActiveCertificateRequest?: UpdateSpActiveCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/saml-certificates/{certificate_id}/active",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let certificateId;
            
            let xSecurityToken;

            if (updateSpActiveCertificateRequest !== null && updateSpActiveCertificateRequest !== undefined) {
                if (updateSpActiveCertificateRequest instanceof UpdateSpActiveCertificateRequest) {
                    identityStoreId = updateSpActiveCertificateRequest.identityStoreId;
                    certificateId = updateSpActiveCertificateRequest.certificateId;
                    xSecurityToken = updateSpActiveCertificateRequest.xSecurityToken;
                } else {
                    identityStoreId = updateSpActiveCertificateRequest['identity_store_id'];
                    certificateId = updateSpActiveCertificateRequest['certificate_id'];
                    xSecurityToken = updateSpActiveCertificateRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling updateSpActiveCertificate.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateSpActiveCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询身份源配额信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getIdentityStoreSummary(getIdentityStoreSummaryRequest?: GetIdentityStoreSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/identity-store-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (getIdentityStoreSummaryRequest !== null && getIdentityStoreSummaryRequest !== undefined) {
                if (getIdentityStoreSummaryRequest instanceof GetIdentityStoreSummaryRequest) {
                    identityStoreId = getIdentityStoreSummaryRequest.identityStoreId;
                    xSecurityToken = getIdentityStoreSummaryRequest.xSecurityToken;
                } else {
                    identityStoreId = getIdentityStoreSummaryRequest['identity_store_id'];
                    xSecurityToken = getIdentityStoreSummaryRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling getIdentityStoreSummary.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建访问令牌。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBearerToken(createBearerTokenRequest?: CreateBearerTokenRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/tenant/{tenant_id}/bearer-token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let tenantId;
            
            let xSecurityToken;

            if (createBearerTokenRequest !== null && createBearerTokenRequest !== undefined) {
                if (createBearerTokenRequest instanceof CreateBearerTokenRequest) {
                    identityStoreId = createBearerTokenRequest.identityStoreId;
                    tenantId = createBearerTokenRequest.tenantId;
                    xSecurityToken = createBearerTokenRequest.xSecurityToken;
                } else {
                    identityStoreId = createBearerTokenRequest['identity_store_id'];
                    tenantId = createBearerTokenRequest['tenant_id'];
                    xSecurityToken = createBearerTokenRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createBearerToken.');
            }
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling createBearerToken.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用自动预置，开启SCIM协议自动同步功能。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProvisioningTenant(createProvisioningTenantRequest?: CreateProvisioningTenantRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/provision-tenant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (createProvisioningTenantRequest !== null && createProvisioningTenantRequest !== undefined) {
                if (createProvisioningTenantRequest instanceof CreateProvisioningTenantRequest) {
                    identityStoreId = createProvisioningTenantRequest.identityStoreId;
                    xSecurityToken = createProvisioningTenantRequest.xSecurityToken;
                } else {
                    identityStoreId = createProvisioningTenantRequest['identity_store_id'];
                    xSecurityToken = createProvisioningTenantRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createProvisioningTenant.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除访问令牌。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBearerToken(deleteBearerTokenRequest?: DeleteBearerTokenRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/tenant/{tenant_id}/bearer-token/{token_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let tenantId;
            
            let tokenId;
            
            let xSecurityToken;

            if (deleteBearerTokenRequest !== null && deleteBearerTokenRequest !== undefined) {
                if (deleteBearerTokenRequest instanceof DeleteBearerTokenRequest) {
                    identityStoreId = deleteBearerTokenRequest.identityStoreId;
                    tenantId = deleteBearerTokenRequest.tenantId;
                    tokenId = deleteBearerTokenRequest.tokenId;
                    xSecurityToken = deleteBearerTokenRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteBearerTokenRequest['identity_store_id'];
                    tenantId = deleteBearerTokenRequest['tenant_id'];
                    tokenId = deleteBearerTokenRequest['token_id'];
                    xSecurityToken = deleteBearerTokenRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteBearerToken.');
            }
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling deleteBearerToken.');
            }
            if (tokenId === null || tokenId === undefined) {
            throw new RequiredError('tokenId','Required parameter tokenId was null or undefined when calling deleteBearerToken.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'tenant_id': tenantId,'token_id': tokenId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自动预置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProvisioningTenant(deleteProvisioningTenantRequest?: DeleteProvisioningTenantRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/tenant/{tenant_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let tenantId;
            
            let xSecurityToken;

            if (deleteProvisioningTenantRequest !== null && deleteProvisioningTenantRequest !== undefined) {
                if (deleteProvisioningTenantRequest instanceof DeleteProvisioningTenantRequest) {
                    identityStoreId = deleteProvisioningTenantRequest.identityStoreId;
                    tenantId = deleteProvisioningTenantRequest.tenantId;
                    xSecurityToken = deleteProvisioningTenantRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteProvisioningTenantRequest['identity_store_id'];
                    tenantId = deleteProvisioningTenantRequest['tenant_id'];
                    xSecurityToken = deleteProvisioningTenantRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteProvisioningTenant.');
            }
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling deleteProvisioningTenant.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询访问令牌列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBearerTokens(listBearerTokensRequest?: ListBearerTokensRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/tenant/{tenant_id}/bearer-token",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let tenantId;
            
            let xSecurityToken;

            if (listBearerTokensRequest !== null && listBearerTokensRequest !== undefined) {
                if (listBearerTokensRequest instanceof ListBearerTokensRequest) {
                    identityStoreId = listBearerTokensRequest.identityStoreId;
                    tenantId = listBearerTokensRequest.tenantId;
                    xSecurityToken = listBearerTokensRequest.xSecurityToken;
                } else {
                    identityStoreId = listBearerTokensRequest['identity_store_id'];
                    tenantId = listBearerTokensRequest['tenant_id'];
                    xSecurityToken = listBearerTokensRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listBearerTokens.');
            }
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listBearerTokens.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询是否开启自动预置，返回具体SCIM自动预配配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProvisioningTenants(listProvisioningTenantsRequest?: ListProvisioningTenantsRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/provision-tenant",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let xSecurityToken;

            if (listProvisioningTenantsRequest !== null && listProvisioningTenantsRequest !== undefined) {
                if (listProvisioningTenantsRequest instanceof ListProvisioningTenantsRequest) {
                    identityStoreId = listProvisioningTenantsRequest.identityStoreId;
                    xSecurityToken = listProvisioningTenantsRequest.xSecurityToken;
                } else {
                    identityStoreId = listProvisioningTenantsRequest['identity_store_id'];
                    xSecurityToken = listProvisioningTenantsRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listProvisioningTenants.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除用户登录会话。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteSessions(batchDeleteSessionsRequest?: BatchDeleteSessionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/sessions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (batchDeleteSessionsRequest !== null && batchDeleteSessionsRequest !== undefined) {
                if (batchDeleteSessionsRequest instanceof BatchDeleteSessionsRequest) {
                    identityStoreId = batchDeleteSessionsRequest.identityStoreId;
                    userId = batchDeleteSessionsRequest.userId;
                    xSecurityToken = batchDeleteSessionsRequest.xSecurityToken;
                    body = batchDeleteSessionsRequest.body
                } else {
                    identityStoreId = batchDeleteSessionsRequest['identity_store_id'];
                    userId = batchDeleteSessionsRequest['user_id'];
                    xSecurityToken = batchDeleteSessionsRequest['X-Security-Token'];
                    body = batchDeleteSessionsRequest['body'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling batchDeleteSessions.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling batchDeleteSessions.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定用户的MFA设备列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListMfaDevicesForUser(batchListMfaDevicesForUserRequest?: BatchListMfaDevicesForUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/retrieve-mfa-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (batchListMfaDevicesForUserRequest !== null && batchListMfaDevicesForUserRequest !== undefined) {
                if (batchListMfaDevicesForUserRequest instanceof BatchListMfaDevicesForUserRequest) {
                    identityStoreId = batchListMfaDevicesForUserRequest.identityStoreId;
                    body = batchListMfaDevicesForUserRequest.body
                    xSecurityToken = batchListMfaDevicesForUserRequest.xSecurityToken;
                } else {
                    identityStoreId = batchListMfaDevicesForUserRequest['identity_store_id'];
                    body = batchListMfaDevicesForUserRequest['body'];
                    xSecurityToken = batchListMfaDevicesForUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling batchListMfaDevicesForUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定的身份源中创建一个IAM身份中心用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUser(createUserRequest?: CreateUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (createUserRequest !== null && createUserRequest !== undefined) {
                if (createUserRequest instanceof CreateUserRequest) {
                    identityStoreId = createUserRequest.identityStoreId;
                    body = createUserRequest.body
                    xSecurityToken = createUserRequest.xSecurityToken;
                } else {
                    identityStoreId = createUserRequest['identity_store_id'];
                    body = createUserRequest['body'];
                    xSecurityToken = createUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling createUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除用户绑定的MFA设备。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMfaDeviceForUser(deleteMfaDeviceForUserRequest?: DeleteMfaDeviceForUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/mfa-devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let deviceId;
            
            let xSecurityToken;

            if (deleteMfaDeviceForUserRequest !== null && deleteMfaDeviceForUserRequest !== undefined) {
                if (deleteMfaDeviceForUserRequest instanceof DeleteMfaDeviceForUserRequest) {
                    identityStoreId = deleteMfaDeviceForUserRequest.identityStoreId;
                    userId = deleteMfaDeviceForUserRequest.userId;
                    deviceId = deleteMfaDeviceForUserRequest.deviceId;
                    xSecurityToken = deleteMfaDeviceForUserRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteMfaDeviceForUserRequest['identity_store_id'];
                    userId = deleteMfaDeviceForUserRequest['user_id'];
                    deviceId = deleteMfaDeviceForUserRequest['device_id'];
                    xSecurityToken = deleteMfaDeviceForUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteMfaDeviceForUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteMfaDeviceForUser.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling deleteMfaDeviceForUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户ID，删除对应的IAM身份中心用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUser(deleteUserRequest?: DeleteUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (deleteUserRequest !== null && deleteUserRequest !== undefined) {
                if (deleteUserRequest instanceof DeleteUserRequest) {
                    identityStoreId = deleteUserRequest.identityStoreId;
                    userId = deleteUserRequest.userId;
                    xSecurityToken = deleteUserRequest.xSecurityToken;
                } else {
                    identityStoreId = deleteUserRequest['identity_store_id'];
                    userId = deleteUserRequest['user_id'];
                    xSecurityToken = deleteUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling deleteUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户ID，查询对应IAM身份中心用户的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeUser(describeUserRequest?: DescribeUserRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (describeUserRequest !== null && describeUserRequest !== undefined) {
                if (describeUserRequest instanceof DescribeUserRequest) {
                    identityStoreId = describeUserRequest.identityStoreId;
                    userId = describeUserRequest.userId;
                    xSecurityToken = describeUserRequest.xSecurityToken;
                } else {
                    identityStoreId = describeUserRequest['identity_store_id'];
                    userId = describeUserRequest['user_id'];
                    xSecurityToken = describeUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling describeUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling describeUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询指定用户详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeUsers(describeUsersRequest?: DescribeUsersRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (describeUsersRequest !== null && describeUsersRequest !== undefined) {
                if (describeUsersRequest instanceof DescribeUsersRequest) {
                    identityStoreId = describeUsersRequest.identityStoreId;
                    body = describeUsersRequest.body
                    xSecurityToken = describeUsersRequest.xSecurityToken;
                } else {
                    identityStoreId = describeUsersRequest['identity_store_id'];
                    body = describeUsersRequest['body'];
                    xSecurityToken = describeUsersRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling describeUsers.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用IAM身份中心的用户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableUser(disableUserRequest?: DisableUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (disableUserRequest !== null && disableUserRequest !== undefined) {
                if (disableUserRequest instanceof DisableUserRequest) {
                    identityStoreId = disableUserRequest.identityStoreId;
                    userId = disableUserRequest.userId;
                    xSecurityToken = disableUserRequest.xSecurityToken;
                } else {
                    identityStoreId = disableUserRequest['identity_store_id'];
                    userId = disableUserRequest['user_id'];
                    xSecurityToken = disableUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling disableUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling disableUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用IAM身份中心的用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableUser(enableUserRequest?: EnableUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (enableUserRequest !== null && enableUserRequest !== undefined) {
                if (enableUserRequest instanceof EnableUserRequest) {
                    identityStoreId = enableUserRequest.identityStoreId;
                    userId = enableUserRequest.userId;
                    xSecurityToken = enableUserRequest.xSecurityToken;
                } else {
                    identityStoreId = enableUserRequest['identity_store_id'];
                    userId = enableUserRequest['user_id'];
                    xSecurityToken = enableUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling enableUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling enableUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户名或外部身份源ID，以精确匹配的方式查询用户ID。用户名和外部身份源ID两种查询方式二选一，不支持同时传入。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getUserId(getUserIdRequest?: GetUserIdRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/retrieve-user-id",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let xSecurityToken;

            if (getUserIdRequest !== null && getUserIdRequest !== undefined) {
                if (getUserIdRequest instanceof GetUserIdRequest) {
                    identityStoreId = getUserIdRequest.identityStoreId;
                    body = getUserIdRequest.body
                    xSecurityToken = getUserIdRequest.xSecurityToken;
                } else {
                    identityStoreId = getUserIdRequest['identity_store_id'];
                    body = getUserIdRequest['body'];
                    xSecurityToken = getUserIdRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling getUserId.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定用户的登录会话信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSessions(listSessionsRequest?: ListSessionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/sessions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (listSessionsRequest !== null && listSessionsRequest !== undefined) {
                if (listSessionsRequest instanceof ListSessionsRequest) {
                    identityStoreId = listSessionsRequest.identityStoreId;
                    userId = listSessionsRequest.userId;
                    xSecurityToken = listSessionsRequest.xSecurityToken;
                } else {
                    identityStoreId = listSessionsRequest['identity_store_id'];
                    userId = listSessionsRequest['user_id'];
                    xSecurityToken = listSessionsRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listSessions.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling listSessions.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定身份源下的IAM身份中心用户列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-stores/{identity_store_id}/users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let identityStoreId;
            
            let xSecurityToken;
            
            let marker;
            
            let limit;
            
            let userName;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    identityStoreId = listUsersRequest.identityStoreId;
                    xSecurityToken = listUsersRequest.xSecurityToken;
                    marker = listUsersRequest.marker;
                    limit = listUsersRequest.limit;
                    userName = listUsersRequest.userName;
                } else {
                    identityStoreId = listUsersRequest['identity_store_id'];
                    xSecurityToken = listUsersRequest['X-Security-Token'];
                    marker = listUsersRequest['marker'];
                    limit = listUsersRequest['limit'];
                    userName = listUsersRequest['user_name'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling listUsers.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'identity_store_id': identityStoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 为用户发起注册MFA设备，返回一个MFA注册地址。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerMfaDeviceForUser(registerMfaDeviceForUserRequest?: RegisterMfaDeviceForUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/mfa-devices/register-mfa-device",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (registerMfaDeviceForUserRequest !== null && registerMfaDeviceForUserRequest !== undefined) {
                if (registerMfaDeviceForUserRequest instanceof RegisterMfaDeviceForUserRequest) {
                    identityStoreId = registerMfaDeviceForUserRequest.identityStoreId;
                    userId = registerMfaDeviceForUserRequest.userId;
                    xSecurityToken = registerMfaDeviceForUserRequest.xSecurityToken;
                } else {
                    identityStoreId = registerMfaDeviceForUserRequest['identity_store_id'];
                    userId = registerMfaDeviceForUserRequest['user_id'];
                    xSecurityToken = registerMfaDeviceForUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling registerMfaDeviceForUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling registerMfaDeviceForUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过电子邮件发送密码重置链接或生成用户的一次性密码。。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetPwdMode(resetPwdModeRequest?: ResetPwdModeRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/reset-password",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (resetPwdModeRequest !== null && resetPwdModeRequest !== undefined) {
                if (resetPwdModeRequest instanceof ResetPwdModeRequest) {
                    identityStoreId = resetPwdModeRequest.identityStoreId;
                    userId = resetPwdModeRequest.userId;
                    body = resetPwdModeRequest.body
                    xSecurityToken = resetPwdModeRequest.xSecurityToken;
                } else {
                    identityStoreId = resetPwdModeRequest['identity_store_id'];
                    userId = resetPwdModeRequest['user_id'];
                    body = resetPwdModeRequest['body'];
                    xSecurityToken = resetPwdModeRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling resetPwdMode.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling resetPwdMode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新MFA设备显示名称。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMfaDeviceForUser(updateMfaDeviceForUserRequest?: UpdateMfaDeviceForUserRequest) {
            const options = {
                method: "PUT",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/mfa-devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let userId;
            
            let deviceId;
            
            let xSecurityToken;

            if (updateMfaDeviceForUserRequest !== null && updateMfaDeviceForUserRequest !== undefined) {
                if (updateMfaDeviceForUserRequest instanceof UpdateMfaDeviceForUserRequest) {
                    identityStoreId = updateMfaDeviceForUserRequest.identityStoreId;
                    userId = updateMfaDeviceForUserRequest.userId;
                    deviceId = updateMfaDeviceForUserRequest.deviceId;
                    xSecurityToken = updateMfaDeviceForUserRequest.xSecurityToken;
                    body = updateMfaDeviceForUserRequest.body
                } else {
                    identityStoreId = updateMfaDeviceForUserRequest['identity_store_id'];
                    userId = updateMfaDeviceForUserRequest['user_id'];
                    deviceId = updateMfaDeviceForUserRequest['device_id'];
                    xSecurityToken = updateMfaDeviceForUserRequest['X-Security-Token'];
                    body = updateMfaDeviceForUserRequest['body'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling updateMfaDeviceForUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateMfaDeviceForUser.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling updateMfaDeviceForUser.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据用户ID，更新对应IAM身份中心用户的属性。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateUser(updateUserRequest?: UpdateUserRequest) {
            const options = {
                method: "PUT",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (updateUserRequest !== null && updateUserRequest !== undefined) {
                if (updateUserRequest instanceof UpdateUserRequest) {
                    identityStoreId = updateUserRequest.identityStoreId;
                    userId = updateUserRequest.userId;
                    body = updateUserRequest.body
                    xSecurityToken = updateUserRequest.xSecurityToken;
                } else {
                    identityStoreId = updateUserRequest['identity_store_id'];
                    userId = updateUserRequest['user_id'];
                    body = updateUserRequest['body'];
                    xSecurityToken = updateUserRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling updateUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling updateUser.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 验证用户邮箱。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        verifyEmail(verifyEmailRequest?: VerifyEmailRequest) {
            const options = {
                method: "POST",
                url: "/v1/identity-stores/{identity_store_id}/users/{user_id}/verify-email",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let identityStoreId;
            
            let userId;
            
            let xSecurityToken;

            if (verifyEmailRequest !== null && verifyEmailRequest !== undefined) {
                if (verifyEmailRequest instanceof VerifyEmailRequest) {
                    identityStoreId = verifyEmailRequest.identityStoreId;
                    userId = verifyEmailRequest.userId;
                    xSecurityToken = verifyEmailRequest.xSecurityToken;
                } else {
                    identityStoreId = verifyEmailRequest['identity_store_id'];
                    userId = verifyEmailRequest['user_id'];
                    xSecurityToken = verifyEmailRequest['X-Security-Token'];
                }
            }

        
            if (identityStoreId === null || identityStoreId === undefined) {
            throw new RequiredError('identityStoreId','Required parameter identityStoreId was null or undefined when calling verifyEmail.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling verifyEmail.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'identity_store_id': identityStoreId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IdentityCenterStoreClient {
    return new IdentityCenterStoreClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}