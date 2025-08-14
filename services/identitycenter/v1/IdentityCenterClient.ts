import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessControlAttributeDto } from './model/AccessControlAttributeDto';
import { AccessControlAttributeValueDto } from './model/AccessControlAttributeValueDto';
import { AccountAssignmentDto } from './model/AccountAssignmentDto';
import { AccountAssignmentOperationStatusDto } from './model/AccountAssignmentOperationStatusDto';
import { AccountAssignmentOperationStatusMetadataDto } from './model/AccountAssignmentOperationStatusMetadataDto';
import { ApplicationAssignmentDto } from './model/ApplicationAssignmentDto';
import { ApplicationDto } from './model/ApplicationDto';
import { ApplicationInstanceDto } from './model/ApplicationInstanceDto';
import { ApplicationProfileDto } from './model/ApplicationProfileDto';
import { ApplicationProviderDto } from './model/ApplicationProviderDto';
import { ApplicationTemplateDisplayDto } from './model/ApplicationTemplateDisplayDto';
import { ApplicationTemplateDto } from './model/ApplicationTemplateDto';
import { AssignmentConfigDto } from './model/AssignmentConfigDto';
import { AttachManagedPolicyToPermissionSetReqBody } from './model/AttachManagedPolicyToPermissionSetReqBody';
import { AttachManagedPolicyToPermissionSetRequest } from './model/AttachManagedPolicyToPermissionSetRequest';
import { AttachManagedPolicyToPermissionSetResponse } from './model/AttachManagedPolicyToPermissionSetResponse';
import { AttachManagedRoleToPermissionSetRequest } from './model/AttachManagedRoleToPermissionSetRequest';
import { AttachManagedRoleToPermissionSetResponse } from './model/AttachManagedRoleToPermissionSetResponse';
import { AttachedManagedPolicyDto } from './model/AttachedManagedPolicyDto';
import { CertificateDto } from './model/CertificateDto';
import { ConsumersDto } from './model/ConsumersDto';
import { CreateAccountAssignmentReqBody } from './model/CreateAccountAssignmentReqBody';
import { CreateAccountAssignmentRequest } from './model/CreateAccountAssignmentRequest';
import { CreateAccountAssignmentResponse } from './model/CreateAccountAssignmentResponse';
import { CreateAliasReqBody } from './model/CreateAliasReqBody';
import { CreateAliasRequest } from './model/CreateAliasRequest';
import { CreateAliasResponse } from './model/CreateAliasResponse';
import { CreateApplicationAssignmentReqBody } from './model/CreateApplicationAssignmentReqBody';
import { CreateApplicationAssignmentRequest } from './model/CreateApplicationAssignmentRequest';
import { CreateApplicationAssignmentResponse } from './model/CreateApplicationAssignmentResponse';
import { CreateApplicationInstanceCertificateRequest } from './model/CreateApplicationInstanceCertificateRequest';
import { CreateApplicationInstanceCertificateResponse } from './model/CreateApplicationInstanceCertificateResponse';
import { CreateApplicationInstanceReqBody } from './model/CreateApplicationInstanceReqBody';
import { CreateApplicationInstanceRequest } from './model/CreateApplicationInstanceRequest';
import { CreateApplicationInstanceResponse } from './model/CreateApplicationInstanceResponse';
import { CreateInstanceAccessControlAttributeConfigurationReqBody } from './model/CreateInstanceAccessControlAttributeConfigurationReqBody';
import { CreateInstanceAccessControlAttributeConfigurationRequest } from './model/CreateInstanceAccessControlAttributeConfigurationRequest';
import { CreateInstanceAccessControlAttributeConfigurationResponse } from './model/CreateInstanceAccessControlAttributeConfigurationResponse';
import { CreatePermissionSetReqBody } from './model/CreatePermissionSetReqBody';
import { CreatePermissionSetRequest } from './model/CreatePermissionSetRequest';
import { CreatePermissionSetResponse } from './model/CreatePermissionSetResponse';
import { CreateTagResourceRequest } from './model/CreateTagResourceRequest';
import { CreateTagResourceResponse } from './model/CreateTagResourceResponse';
import { DeleteAccountAssignmentReqBody } from './model/DeleteAccountAssignmentReqBody';
import { DeleteAccountAssignmentRequest } from './model/DeleteAccountAssignmentRequest';
import { DeleteAccountAssignmentResponse } from './model/DeleteAccountAssignmentResponse';
import { DeleteApplicationAssignmentReqBody } from './model/DeleteApplicationAssignmentReqBody';
import { DeleteApplicationAssignmentRequest } from './model/DeleteApplicationAssignmentRequest';
import { DeleteApplicationAssignmentResponse } from './model/DeleteApplicationAssignmentResponse';
import { DeleteApplicationInstanceCertificateRequest } from './model/DeleteApplicationInstanceCertificateRequest';
import { DeleteApplicationInstanceCertificateResponse } from './model/DeleteApplicationInstanceCertificateResponse';
import { DeleteApplicationInstanceRequest } from './model/DeleteApplicationInstanceRequest';
import { DeleteApplicationInstanceResponse } from './model/DeleteApplicationInstanceResponse';
import { DeleteCustomPolicyFromPermissionSetRequest } from './model/DeleteCustomPolicyFromPermissionSetRequest';
import { DeleteCustomPolicyFromPermissionSetResponse } from './model/DeleteCustomPolicyFromPermissionSetResponse';
import { DeleteCustomRoleFromPermissionSetRequest } from './model/DeleteCustomRoleFromPermissionSetRequest';
import { DeleteCustomRoleFromPermissionSetResponse } from './model/DeleteCustomRoleFromPermissionSetResponse';
import { DeleteIdentityCenterRequest } from './model/DeleteIdentityCenterRequest';
import { DeleteIdentityCenterResponse } from './model/DeleteIdentityCenterResponse';
import { DeleteInstanceAccessControlAttributeConfigurationRequest } from './model/DeleteInstanceAccessControlAttributeConfigurationRequest';
import { DeleteInstanceAccessControlAttributeConfigurationResponse } from './model/DeleteInstanceAccessControlAttributeConfigurationResponse';
import { DeletePermissionSetRequest } from './model/DeletePermissionSetRequest';
import { DeletePermissionSetResponse } from './model/DeletePermissionSetResponse';
import { DeleteProfileRequest } from './model/DeleteProfileRequest';
import { DeleteProfileResponse } from './model/DeleteProfileResponse';
import { DeleteTagDto } from './model/DeleteTagDto';
import { DeleteTagResourceReqBody } from './model/DeleteTagResourceReqBody';
import { DeleteTagResourceRequest } from './model/DeleteTagResourceRequest';
import { DeleteTagResourceResponse } from './model/DeleteTagResourceResponse';
import { DescribeAccountAssignmentCreationStatusRequest } from './model/DescribeAccountAssignmentCreationStatusRequest';
import { DescribeAccountAssignmentCreationStatusResponse } from './model/DescribeAccountAssignmentCreationStatusResponse';
import { DescribeAccountAssignmentDeletionStatusRequest } from './model/DescribeAccountAssignmentDeletionStatusRequest';
import { DescribeAccountAssignmentDeletionStatusResponse } from './model/DescribeAccountAssignmentDeletionStatusResponse';
import { DescribeApplicationProviderRequest } from './model/DescribeApplicationProviderRequest';
import { DescribeApplicationProviderResponse } from './model/DescribeApplicationProviderResponse';
import { DescribeApplicationRequest } from './model/DescribeApplicationRequest';
import { DescribeApplicationResponse } from './model/DescribeApplicationResponse';
import { DescribeInstanceAccessControlAttributeConfigurationRequest } from './model/DescribeInstanceAccessControlAttributeConfigurationRequest';
import { DescribeInstanceAccessControlAttributeConfigurationResponse } from './model/DescribeInstanceAccessControlAttributeConfigurationResponse';
import { DescribePermissionSetProvisioningStatusRequest } from './model/DescribePermissionSetProvisioningStatusRequest';
import { DescribePermissionSetProvisioningStatusResponse } from './model/DescribePermissionSetProvisioningStatusResponse';
import { DescribePermissionSetRequest } from './model/DescribePermissionSetRequest';
import { DescribePermissionSetResponse } from './model/DescribePermissionSetResponse';
import { DescribeRegisteredRegionsRequest } from './model/DescribeRegisteredRegionsRequest';
import { DescribeRegisteredRegionsResponse } from './model/DescribeRegisteredRegionsResponse';
import { DetachManagedPolicyFromPermissionSetReqBody } from './model/DetachManagedPolicyFromPermissionSetReqBody';
import { DetachManagedPolicyFromPermissionSetRequest } from './model/DetachManagedPolicyFromPermissionSetRequest';
import { DetachManagedPolicyFromPermissionSetResponse } from './model/DetachManagedPolicyFromPermissionSetResponse';
import { DetachManagedRoleFromPermissionSetRequest } from './model/DetachManagedRoleFromPermissionSetRequest';
import { DetachManagedRoleFromPermissionSetResponse } from './model/DetachManagedRoleFromPermissionSetResponse';
import { DisassociateProfileReqBody } from './model/DisassociateProfileReqBody';
import { DisassociateProfileRequest } from './model/DisassociateProfileRequest';
import { DisassociateProfileResponse } from './model/DisassociateProfileResponse';
import { DisplayDataDto } from './model/DisplayDataDto';
import { DisplayDto } from './model/DisplayDto';
import { GetApplicationAssignmentConfigurationRequest } from './model/GetApplicationAssignmentConfigurationRequest';
import { GetApplicationAssignmentConfigurationResponse } from './model/GetApplicationAssignmentConfigurationResponse';
import { GetApplicationInstanceRequest } from './model/GetApplicationInstanceRequest';
import { GetApplicationInstanceResponse } from './model/GetApplicationInstanceResponse';
import { GetCustomPolicyForPermissionSetRequest } from './model/GetCustomPolicyForPermissionSetRequest';
import { GetCustomPolicyForPermissionSetResponse } from './model/GetCustomPolicyForPermissionSetResponse';
import { GetCustomRoleForPermissionSetRequest } from './model/GetCustomRoleForPermissionSetRequest';
import { GetCustomRoleForPermissionSetResponse } from './model/GetCustomRoleForPermissionSetResponse';
import { GetHaConfigurationRequest } from './model/GetHaConfigurationRequest';
import { GetHaConfigurationResponse } from './model/GetHaConfigurationResponse';
import { GetIdentityCenterServiceStatusRequest } from './model/GetIdentityCenterServiceStatusRequest';
import { GetIdentityCenterServiceStatusResponse } from './model/GetIdentityCenterServiceStatusResponse';
import { GetMfaDeviceManagementForIdentityStoreRequest } from './model/GetMfaDeviceManagementForIdentityStoreRequest';
import { GetMfaDeviceManagementForIdentityStoreResponse } from './model/GetMfaDeviceManagementForIdentityStoreResponse';
import { GetPermissionSetSummaryRequest } from './model/GetPermissionSetSummaryRequest';
import { GetPermissionSetSummaryResponse } from './model/GetPermissionSetSummaryResponse';
import { GetSsoConfigurationRequest } from './model/GetSsoConfigurationRequest';
import { GetSsoConfigurationResponse } from './model/GetSsoConfigurationResponse';
import { IdentityProviderConfigDto } from './model/IdentityProviderConfigDto';
import { IdentityStoreDto } from './model/IdentityStoreDto';
import { ImportApplicationInstanceServiceProviderMetadataReqBody } from './model/ImportApplicationInstanceServiceProviderMetadataReqBody';
import { ImportApplicationInstanceServiceProviderMetadataRequest } from './model/ImportApplicationInstanceServiceProviderMetadataRequest';
import { ImportApplicationInstanceServiceProviderMetadataResponse } from './model/ImportApplicationInstanceServiceProviderMetadataResponse';
import { InstanceAccessControlAttributeConfigurationDto } from './model/InstanceAccessControlAttributeConfigurationDto';
import { InstanceMetadataEntryDto } from './model/InstanceMetadataEntryDto';
import { ListAccountAssignmentCreationStatusRequest } from './model/ListAccountAssignmentCreationStatusRequest';
import { ListAccountAssignmentCreationStatusResponse } from './model/ListAccountAssignmentCreationStatusResponse';
import { ListAccountAssignmentDeletionStatusRequest } from './model/ListAccountAssignmentDeletionStatusRequest';
import { ListAccountAssignmentDeletionStatusResponse } from './model/ListAccountAssignmentDeletionStatusResponse';
import { ListAccountAssignmentsForPrincipalRequest } from './model/ListAccountAssignmentsForPrincipalRequest';
import { ListAccountAssignmentsForPrincipalResponse } from './model/ListAccountAssignmentsForPrincipalResponse';
import { ListAccountAssignmentsRequest } from './model/ListAccountAssignmentsRequest';
import { ListAccountAssignmentsResponse } from './model/ListAccountAssignmentsResponse';
import { ListAccountsForProvisionedPermissionSetRequest } from './model/ListAccountsForProvisionedPermissionSetRequest';
import { ListAccountsForProvisionedPermissionSetResponse } from './model/ListAccountsForProvisionedPermissionSetResponse';
import { ListApplicationAssignmentsForPrincipalRequest } from './model/ListApplicationAssignmentsForPrincipalRequest';
import { ListApplicationAssignmentsForPrincipalResponse } from './model/ListApplicationAssignmentsForPrincipalResponse';
import { ListApplicationAssignmentsRequest } from './model/ListApplicationAssignmentsRequest';
import { ListApplicationAssignmentsResponse } from './model/ListApplicationAssignmentsResponse';
import { ListApplicationInstanceCertificatesRequest } from './model/ListApplicationInstanceCertificatesRequest';
import { ListApplicationInstanceCertificatesResponse } from './model/ListApplicationInstanceCertificatesResponse';
import { ListApplicationInstancesRequest } from './model/ListApplicationInstancesRequest';
import { ListApplicationInstancesResponse } from './model/ListApplicationInstancesResponse';
import { ListApplicationProvidersRequest } from './model/ListApplicationProvidersRequest';
import { ListApplicationProvidersResponse } from './model/ListApplicationProvidersResponse';
import { ListApplicationTemplatesRequest } from './model/ListApplicationTemplatesRequest';
import { ListApplicationTemplatesResponse } from './model/ListApplicationTemplatesResponse';
import { ListApplicationsRequest } from './model/ListApplicationsRequest';
import { ListApplicationsResponse } from './model/ListApplicationsResponse';
import { ListCatalogApplicationsRequest } from './model/ListCatalogApplicationsRequest';
import { ListCatalogApplicationsResponse } from './model/ListCatalogApplicationsResponse';
import { ListIdentityStoreAssociationRequest } from './model/ListIdentityStoreAssociationRequest';
import { ListIdentityStoreAssociationResponse } from './model/ListIdentityStoreAssociationResponse';
import { ListInstancesRequest } from './model/ListInstancesRequest';
import { ListInstancesResponse } from './model/ListInstancesResponse';
import { ListManagedPoliciesInPermissionSetRequest } from './model/ListManagedPoliciesInPermissionSetRequest';
import { ListManagedPoliciesInPermissionSetResponse } from './model/ListManagedPoliciesInPermissionSetResponse';
import { ListManagedRolesInPermissionSetRequest } from './model/ListManagedRolesInPermissionSetRequest';
import { ListManagedRolesInPermissionSetResponse } from './model/ListManagedRolesInPermissionSetResponse';
import { ListPermissionSetProvisioningStatusRequest } from './model/ListPermissionSetProvisioningStatusRequest';
import { ListPermissionSetProvisioningStatusResponse } from './model/ListPermissionSetProvisioningStatusResponse';
import { ListPermissionSetsProvisionedToAccountRequest } from './model/ListPermissionSetsProvisionedToAccountRequest';
import { ListPermissionSetsProvisionedToAccountResponse } from './model/ListPermissionSetsProvisionedToAccountResponse';
import { ListPermissionSetsRequest } from './model/ListPermissionSetsRequest';
import { ListPermissionSetsResponse } from './model/ListPermissionSetsResponse';
import { ListProfilesRequest } from './model/ListProfilesRequest';
import { ListProfilesResponse } from './model/ListProfilesResponse';
import { ListTagResourcesRequest } from './model/ListTagResourcesRequest';
import { ListTagResourcesResponse } from './model/ListTagResourcesResponse';
import { PageInfoDto } from './model/PageInfoDto';
import { PermissionSetDto } from './model/PermissionSetDto';
import { PermissionSetProvisioningStatusDto } from './model/PermissionSetProvisioningStatusDto';
import { PermissionSetProvisioningStatusMetadataDto } from './model/PermissionSetProvisioningStatusMetadataDto';
import { PortalOptionsDto } from './model/PortalOptionsDto';
import { ProvisionPermissionSetReqBody } from './model/ProvisionPermissionSetReqBody';
import { ProvisionPermissionSetRequest } from './model/ProvisionPermissionSetRequest';
import { ProvisionPermissionSetResponse } from './model/ProvisionPermissionSetResponse';
import { PutCustomPolicyToPermissionSetReqBody } from './model/PutCustomPolicyToPermissionSetReqBody';
import { PutCustomPolicyToPermissionSetRequest } from './model/PutCustomPolicyToPermissionSetRequest';
import { PutCustomPolicyToPermissionSetResponse } from './model/PutCustomPolicyToPermissionSetResponse';
import { PutCustomRoleToPermissionSetReqBody } from './model/PutCustomRoleToPermissionSetReqBody';
import { PutCustomRoleToPermissionSetRequest } from './model/PutCustomRoleToPermissionSetRequest';
import { PutCustomRoleToPermissionSetResponse } from './model/PutCustomRoleToPermissionSetResponse';
import { PutMfaDeviceManagementForDirectoryReqBody } from './model/PutMfaDeviceManagementForDirectoryReqBody';
import { PutMfaDeviceManagementForIdentityStoreRequest } from './model/PutMfaDeviceManagementForIdentityStoreRequest';
import { PutMfaDeviceManagementForIdentityStoreResponse } from './model/PutMfaDeviceManagementForIdentityStoreResponse';
import { RegionDto } from './model/RegionDto';
import { RegisterRegionReqBody } from './model/RegisterRegionReqBody';
import { RegisterRegionRequest } from './model/RegisterRegionRequest';
import { RegisterRegionResponse } from './model/RegisterRegionResponse';
import { ResourceAttachManagedPolicyToPermissionSetReqBody } from './model/ResourceAttachManagedPolicyToPermissionSetReqBody';
import { ResourceAttachedManagedPolicyDto } from './model/ResourceAttachedManagedPolicyDto';
import { ResourceDetachManagedPolicyFromPermissionSetReqBody } from './model/ResourceDetachManagedPolicyFromPermissionSetReqBody';
import { ResponseConfigDto } from './model/ResponseConfigDto';
import { ResponseSchemaConfigDto } from './model/ResponseSchemaConfigDto';
import { ResponseSchemaPropertiesDetailsDto } from './model/ResponseSchemaPropertiesDetailsDto';
import { ResponseSchemaSubjectDetailsDto } from './model/ResponseSchemaSubjectDetailsDto';
import { ResponseSourceDetailsDto } from './model/ResponseSourceDetailsDto';
import { SSOConfigurationDto } from './model/SSOConfigurationDto';
import { SecurityConfigDto } from './model/SecurityConfigDto';
import { ServiceProviderConfigDto } from './model/ServiceProviderConfigDto';
import { SessionConfigurationDto } from './model/SessionConfigurationDto';
import { SignInOptionsDto } from './model/SignInOptionsDto';
import { StartIdentityCenterRequest } from './model/StartIdentityCenterRequest';
import { StartIdentityCenterResponse } from './model/StartIdentityCenterResponse';
import { TagDto } from './model/TagDto';
import { TagResourceReqBody } from './model/TagResourceReqBody';
import { UpdateApplicationInstanceActiveCertificateRequest } from './model/UpdateApplicationInstanceActiveCertificateRequest';
import { UpdateApplicationInstanceActiveCertificateResponse } from './model/UpdateApplicationInstanceActiveCertificateResponse';
import { UpdateApplicationInstanceDisplayDataReqBody } from './model/UpdateApplicationInstanceDisplayDataReqBody';
import { UpdateApplicationInstanceDisplayDataRequest } from './model/UpdateApplicationInstanceDisplayDataRequest';
import { UpdateApplicationInstanceDisplayDataResponse } from './model/UpdateApplicationInstanceDisplayDataResponse';
import { UpdateApplicationInstanceResponseConfigurationReqBody } from './model/UpdateApplicationInstanceResponseConfigurationReqBody';
import { UpdateApplicationInstanceResponseConfigurationRequest } from './model/UpdateApplicationInstanceResponseConfigurationRequest';
import { UpdateApplicationInstanceResponseConfigurationResponse } from './model/UpdateApplicationInstanceResponseConfigurationResponse';
import { UpdateApplicationInstanceResponseSchemaConfigurationReqBody } from './model/UpdateApplicationInstanceResponseSchemaConfigurationReqBody';
import { UpdateApplicationInstanceResponseSchemaConfigurationRequest } from './model/UpdateApplicationInstanceResponseSchemaConfigurationRequest';
import { UpdateApplicationInstanceResponseSchemaConfigurationResponse } from './model/UpdateApplicationInstanceResponseSchemaConfigurationResponse';
import { UpdateApplicationInstanceSecurityConfigurationReqBody } from './model/UpdateApplicationInstanceSecurityConfigurationReqBody';
import { UpdateApplicationInstanceSecurityConfigurationRequest } from './model/UpdateApplicationInstanceSecurityConfigurationRequest';
import { UpdateApplicationInstanceSecurityConfigurationResponse } from './model/UpdateApplicationInstanceSecurityConfigurationResponse';
import { UpdateApplicationInstanceServiceProviderConfigurationReqBody } from './model/UpdateApplicationInstanceServiceProviderConfigurationReqBody';
import { UpdateApplicationInstanceServiceProviderConfigurationRequest } from './model/UpdateApplicationInstanceServiceProviderConfigurationRequest';
import { UpdateApplicationInstanceServiceProviderConfigurationResponse } from './model/UpdateApplicationInstanceServiceProviderConfigurationResponse';
import { UpdateApplicationInstanceStatusReqBody } from './model/UpdateApplicationInstanceStatusReqBody';
import { UpdateApplicationInstanceStatusRequest } from './model/UpdateApplicationInstanceStatusRequest';
import { UpdateApplicationInstanceStatusResponse } from './model/UpdateApplicationInstanceStatusResponse';
import { UpdateHAConfigurationReqBody } from './model/UpdateHAConfigurationReqBody';
import { UpdateHaConfigurationRequest } from './model/UpdateHaConfigurationRequest';
import { UpdateHaConfigurationResponse } from './model/UpdateHaConfigurationResponse';
import { UpdateInstanceAccessControlAttributeConfigurationReqBody } from './model/UpdateInstanceAccessControlAttributeConfigurationReqBody';
import { UpdateInstanceAccessControlAttributeConfigurationRequest } from './model/UpdateInstanceAccessControlAttributeConfigurationRequest';
import { UpdateInstanceAccessControlAttributeConfigurationResponse } from './model/UpdateInstanceAccessControlAttributeConfigurationResponse';
import { UpdatePermissionSetReqBody } from './model/UpdatePermissionSetReqBody';
import { UpdatePermissionSetRequest } from './model/UpdatePermissionSetRequest';
import { UpdatePermissionSetResponse } from './model/UpdatePermissionSetResponse';
import { UpdateSsoConfigurationReqBody } from './model/UpdateSsoConfigurationReqBody';
import { UpdateSsoConfigurationRequest } from './model/UpdateSsoConfigurationRequest';
import { UpdateSsoConfigurationResponse } from './model/UpdateSsoConfigurationResponse';

export class IdentityCenterClient {
    public static newBuilder(): ClientBuilder<IdentityCenterClient> {
            let client = new ClientBuilder<IdentityCenterClient>(newClient, 'GlobalCredentials');
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
     * 使用指定的权限集为指定账户分配对应主体的访问权限，主体可为IdentityCenter用户或IdentityCenter用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建账户分配
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {CreateAccountAssignmentReqBody} createAccountAssignmentReqBody 请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccountAssignment(createAccountAssignmentRequest?: CreateAccountAssignmentRequest): Promise<CreateAccountAssignmentResponse> {
        const options = ParamCreater().createAccountAssignment(createAccountAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用指定的权限集从指定的账号删除主体的访问权限，主体可为IAM身份中心用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除账号分配
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {DeleteAccountAssignmentReqBody} deleteAccountAssignmentReqBody 请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccountAssignment(deleteAccountAssignmentRequest?: DeleteAccountAssignmentRequest): Promise<DeleteAccountAssignmentResponse> {
        const options = ParamCreater().deleteAccountAssignment(deleteAccountAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据请求ID，查询指定IAM Identity Center实例下的账户分配创建状态详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户分配创建状态详情
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} requestId 请求的唯一标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeAccountAssignmentCreationStatus(describeAccountAssignmentCreationStatusRequest?: DescribeAccountAssignmentCreationStatusRequest): Promise<DescribeAccountAssignmentCreationStatusResponse> {
        const options = ParamCreater().describeAccountAssignmentCreationStatus(describeAccountAssignmentCreationStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据请求ID，查询指定IAM Identity Center实例下的账户分配删除状态详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账户分配删除状态详情
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} requestId 请求唯一标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeAccountAssignmentDeletionStatus(describeAccountAssignmentDeletionStatusRequest?: DescribeAccountAssignmentDeletionStatusRequest): Promise<DescribeAccountAssignmentDeletionStatusResponse> {
        const options = ParamCreater().describeAccountAssignmentDeletionStatus(describeAccountAssignmentDeletionStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解除与用户或组绑定的所有账号授权关联。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除与用户或组绑定的所有账号授权关联
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {DisassociateProfileReqBody} disassociateProfileReqBody The information of disassociate profile request
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateProfile(disassociateProfileRequest?: DisassociateProfileRequest): Promise<DisassociateProfileResponse> {
        const options = ParamCreater().disassociateProfile(disassociateProfileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定IAM Identity Center实例下的账户分配的创建状态列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账户分配创建状态
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED'} [status] 根据传递的属性值过滤操作状态列表
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccountAssignmentCreationStatus(listAccountAssignmentCreationStatusRequest?: ListAccountAssignmentCreationStatusRequest): Promise<ListAccountAssignmentCreationStatusResponse> {
        const options = ParamCreater().listAccountAssignmentCreationStatus(listAccountAssignmentCreationStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定IAM Identity Center实例下的账户分配的删除状态列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账户分配删除状态
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED'} [status] 根据传递的属性值过滤操作状态列表
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccountAssignmentDeletionStatus(listAccountAssignmentDeletionStatusRequest?: ListAccountAssignmentDeletionStatusRequest): Promise<ListAccountAssignmentDeletionStatusResponse> {
        const options = ParamCreater().listAccountAssignmentDeletionStatus(listAccountAssignmentDeletionStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出与指定账户以及指定权限集关联的用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账户和权限集关联的用户或用户组
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} accountId The identifier of the account from which to list the assignments.
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {string} [permissionSetId] The identifier of the permission set from which to list assignments.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccountAssignments(listAccountAssignmentsRequest?: ListAccountAssignmentsRequest): Promise<ListAccountAssignmentsResponse> {
        const options = ParamCreater().listAccountAssignments(listAccountAssignmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索与用户或用户组关联的账号列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索与用户或用户组关联的账号列表
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} principalId IAM Identity Center 身份主体的全局唯一标识符（ID）
     * @param {'GROUP' | 'USER'} principalType IAM Identity Center 身份主体类型.
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {string} [accountId] 指定账户的唯一身份标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccountAssignmentsForPrincipal(listAccountAssignmentsForPrincipalRequest?: ListAccountAssignmentsForPrincipalRequest): Promise<ListAccountAssignmentsForPrincipalResponse> {
        const options = ParamCreater().listAccountAssignmentsForPrincipal(listAccountAssignmentsForPrincipalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用程序实例。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用程序实例
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {CreateApplicationInstanceReqBody} createApplicationInstanceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplicationInstance(createApplicationInstanceRequest?: CreateApplicationInstanceRequest): Promise<CreateApplicationInstanceResponse> {
        const options = ParamCreater().createApplicationInstance(createApplicationInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用程序实例。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用程序实例
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplicationInstance(deleteApplicationInstanceRequest?: DeleteApplicationInstanceRequest): Promise<DeleteApplicationInstanceResponse> {
        const options = ParamCreater().deleteApplicationInstance(deleteApplicationInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用程序实例与用户或用户组关联关系。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用程序实例与用户或用户组关联关系
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} profileId 应用程序实例与用户或用户组关联关系 ID
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProfile(deleteProfileRequest?: DeleteProfileRequest): Promise<DeleteProfileResponse> {
        const options = ParamCreater().deleteProfile(deleteProfileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序详情
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeApplication(describeApplicationRequest?: DescribeApplicationRequest): Promise<DescribeApplicationResponse> {
        const options = ParamCreater().describeApplication(describeApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序提供者详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序提供者详情
     * @param {string} applicationProviderId 应用程序提供方Id
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeApplicationProvider(describeApplicationProviderRequest?: DescribeApplicationProviderRequest): Promise<DescribeApplicationProviderResponse> {
        const options = ParamCreater().describeApplicationProvider(describeApplicationProviderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序分配属性配置，目的为用户或者用户组分配对应用程序的访问权限。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序分配属性配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getApplicationAssignmentConfiguration(getApplicationAssignmentConfigurationRequest?: GetApplicationAssignmentConfigurationRequest): Promise<GetApplicationAssignmentConfigurationResponse> {
        const options = ParamCreater().getApplicationAssignmentConfiguration(getApplicationAssignmentConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序实例详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序实例详情
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getApplicationInstance(getApplicationInstanceRequest?: GetApplicationInstanceRequest): Promise<GetApplicationInstanceResponse> {
        const options = ParamCreater().getApplicationInstance(getApplicationInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传应用程序实例元数据文件。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传应用程序实例元数据文件
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {ImportApplicationInstanceServiceProviderMetadataReqBody} importApplicationInstanceServiceProviderMetadataReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importApplicationInstanceServiceProviderMetadata(importApplicationInstanceServiceProviderMetadataRequest?: ImportApplicationInstanceServiceProviderMetadataRequest): Promise<ImportApplicationInstanceServiceProviderMetadataResponse> {
        const options = ParamCreater().importApplicationInstanceServiceProviderMetadata(importApplicationInstanceServiceProviderMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出应用程序实例。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序实例
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationInstances(listApplicationInstancesRequest?: ListApplicationInstancesRequest): Promise<ListApplicationInstancesResponse> {
        const options = ParamCreater().listApplicationInstances(listApplicationInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序提供者列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序提供者
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationProviders(listApplicationProvidersRequest?: ListApplicationProvidersRequest): Promise<ListApplicationProvidersResponse> {
        const options = ParamCreater().listApplicationProviders(listApplicationProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序模板列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序模板
     * @param {string} applicationId 应用程序ID，以app-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationTemplates(listApplicationTemplatesRequest?: ListApplicationTemplatesRequest): Promise<ListApplicationTemplatesResponse> {
        const options = ParamCreater().listApplicationTemplates(listApplicationTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplications(listApplicationsRequest?: ListApplicationsRequest): Promise<ListApplicationsResponse> {
        const options = ParamCreater().listApplications(listApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出应用程序目录中的预置应用模板。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序目录中的预置应用模板
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCatalogApplications(listCatalogApplicationsRequest?: ListCatalogApplicationsRequest): Promise<ListCatalogApplicationsResponse> {
        const options = ParamCreater().listCatalogApplications(listCatalogApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出应用程序实例与用户或用户组存在的关联关系。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序实例与用户或用户组存在的关联关系
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProfiles(listProfilesRequest?: ListProfilesRequest): Promise<ListProfilesResponse> {
        const options = ParamCreater().listProfiles(listProfilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用程序实例显示信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用程序实例显示信息
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {UpdateApplicationInstanceDisplayDataReqBody} updateApplicationInstanceDisplayDataReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceDisplayData(updateApplicationInstanceDisplayDataRequest?: UpdateApplicationInstanceDisplayDataRequest): Promise<UpdateApplicationInstanceDisplayDataResponse> {
        const options = ParamCreater().updateApplicationInstanceDisplayData(updateApplicationInstanceDisplayDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用程序属性配置信息，更新应用程序中的属性映射、中继状态以及会话过期时间。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用程序属性配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {UpdateApplicationInstanceResponseConfigurationReqBody} updateApplicationInstanceResponseConfigurationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceResponseConfiguration(updateApplicationInstanceResponseConfigurationRequest?: UpdateApplicationInstanceResponseConfigurationRequest): Promise<UpdateApplicationInstanceResponseConfigurationResponse> {
        const options = ParamCreater().updateApplicationInstanceResponseConfiguration(updateApplicationInstanceResponseConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用程序Schema属性映射配置，支持SAML断言中Subject属性映射以及Subject NameID格式。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用程序Schema属性映射配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {UpdateApplicationInstanceResponseSchemaConfigurationReqBody} updateApplicationInstanceResponseSchemaConfigurationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceResponseSchemaConfiguration(updateApplicationInstanceResponseSchemaConfigurationRequest?: UpdateApplicationInstanceResponseSchemaConfigurationRequest): Promise<UpdateApplicationInstanceResponseSchemaConfigurationResponse> {
        const options = ParamCreater().updateApplicationInstanceResponseSchemaConfiguration(updateApplicationInstanceResponseSchemaConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用程序实例证书配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用程序实例证书配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {UpdateApplicationInstanceSecurityConfigurationReqBody} updateApplicationInstanceSecurityConfigurationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceSecurityConfiguration(updateApplicationInstanceSecurityConfigurationRequest?: UpdateApplicationInstanceSecurityConfigurationRequest): Promise<UpdateApplicationInstanceSecurityConfigurationResponse> {
        const options = ParamCreater().updateApplicationInstanceSecurityConfiguration(updateApplicationInstanceSecurityConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用程序实例服务提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用程序实例服务提供商配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {UpdateApplicationInstanceServiceProviderConfigurationReqBody} updateApplicationInstanceServiceProviderConfigurationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceServiceProviderConfiguration(updateApplicationInstanceServiceProviderConfigurationRequest?: UpdateApplicationInstanceServiceProviderConfigurationRequest): Promise<UpdateApplicationInstanceServiceProviderConfigurationResponse> {
        const options = ParamCreater().updateApplicationInstanceServiceProviderConfiguration(updateApplicationInstanceServiceProviderConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用程序实例状态。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用程序实例状态
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {UpdateApplicationInstanceStatusReqBody} updateApplicationInstanceStatusReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceStatus(updateApplicationInstanceStatusRequest?: UpdateApplicationInstanceStatusRequest): Promise<UpdateApplicationInstanceStatusResponse> {
        const options = ParamCreater().updateApplicationInstanceStatus(updateApplicationInstanceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用程序分配用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 应用程序分配用户或用户组
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {CreateApplicationAssignmentReqBody} createApplicationAssignmentReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplicationAssignment(createApplicationAssignmentRequest?: CreateApplicationAssignmentRequest): Promise<CreateApplicationAssignmentResponse> {
        const options = ParamCreater().createApplicationAssignment(createApplicationAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用程序已分配用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用程序已分配用户或用户组
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {DeleteApplicationAssignmentReqBody} deleteApplicationAssignmentReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplicationAssignment(deleteApplicationAssignmentRequest?: DeleteApplicationAssignmentRequest): Promise<DeleteApplicationAssignmentResponse> {
        const options = ParamCreater().deleteApplicationAssignment(deleteApplicationAssignmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序已分配的用户或用户组列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用程序已分配的用户或用户组列表
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationAssignments(listApplicationAssignmentsRequest?: ListApplicationAssignmentsRequest): Promise<ListApplicationAssignmentsResponse> {
        const options = ParamCreater().listApplicationAssignments(listApplicationAssignmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索与用户或用户组关联的应用程序列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索与用户或用户组关联的应用程序列表
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} principalId 身份主体的全局唯一标识符（ID）
     * @param {'USER' | 'GROUP'} principalType 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationAssignmentsForPrincipal(listApplicationAssignmentsForPrincipalRequest?: ListApplicationAssignmentsForPrincipalRequest): Promise<ListApplicationAssignmentsForPrincipalResponse> {
        const options = ParamCreater().listApplicationAssignmentsForPrincipal(listApplicationAssignmentsForPrincipalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用程序实例证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用程序实例证书
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApplicationInstanceCertificate(createApplicationInstanceCertificateRequest?: CreateApplicationInstanceCertificateRequest): Promise<CreateApplicationInstanceCertificateResponse> {
        const options = ParamCreater().createApplicationInstanceCertificate(createApplicationInstanceCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用程序实例证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用程序实例证书
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} certificateId 应用程序证书全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplicationInstanceCertificate(deleteApplicationInstanceCertificateRequest?: DeleteApplicationInstanceCertificateRequest): Promise<DeleteApplicationInstanceCertificateResponse> {
        const options = ParamCreater().deleteApplicationInstanceCertificate(deleteApplicationInstanceCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用程序实例证书列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出应用程序实例证书
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApplicationInstanceCertificates(listApplicationInstanceCertificatesRequest?: ListApplicationInstanceCertificatesRequest): Promise<ListApplicationInstanceCertificatesResponse> {
        const options = ParamCreater().listApplicationInstanceCertificates(listApplicationInstanceCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 激活应用程序实例证书，实现证书轮转。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 激活应用程序实例证书
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} applicationInstanceId 应用程序实例ID，以app-ins-为前缀
     * @param {string} certificateId 应用程序证书全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplicationInstanceActiveCertificate(updateApplicationInstanceActiveCertificateRequest?: UpdateApplicationInstanceActiveCertificateRequest): Promise<UpdateApplicationInstanceActiveCertificateResponse> {
        const options = ParamCreater().updateApplicationInstanceActiveCertificate(updateApplicationInstanceActiveCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IAM身份中心实例配置信息，包括身份认证配置和会话管理配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例配置信息
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getSsoConfiguration(getSsoConfigurationRequest?: GetSsoConfigurationRequest): Promise<GetSsoConfigurationResponse> {
        const options = ParamCreater().getSsoConfiguration(getSsoConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置IAM身份中心服务实例配置信息，包括身份认证配置和会话管理配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置实例配置信息
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {UpdateSsoConfigurationReqBody} updateSsoConfigurationReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSsoConfiguration(updateSsoConfigurationRequest?: UpdateSsoConfigurationRequest): Promise<UpdateSsoConfigurationResponse> {
        const options = ParamCreater().updateSsoConfiguration(updateSsoConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 自定义访问门户URL，默认情况下，您可以使用遵循以下格式的 URL访问门户：idcenter.huaweicloud.com/d-xxxxxxxxxx/portal，您可以按如下方式更改为自定义 URL：idcenter.huaweicloud.com/your_subdomain/portal。设置自定义访问门户URL是一次性操作，无法撤销。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自定义访问门户URL
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {CreateAliasReqBody} createAliasReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlias(createAliasRequest?: CreateAliasRequest): Promise<CreateAliasResponse> {
        const options = ParamCreater().createAlias(createAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除IAM Identity Center服务实例。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务实例
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIdentityCenter(deleteIdentityCenterRequest?: DeleteIdentityCenterRequest): Promise<DeleteIdentityCenterResponse> {
        const options = ParamCreater().deleteIdentityCenter(deleteIdentityCenterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IAM身份中心服务实例开通后，具体开通所在区域。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务实例开通所在区域
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeRegisteredRegions(describeRegisteredRegionsRequest?: DescribeRegisteredRegionsRequest): Promise<DescribeRegisteredRegionsResponse> {
        const options = ParamCreater().describeRegisteredRegions(describeRegisteredRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询高可用功能配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询高可用功能配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getHaConfiguration(getHaConfigurationRequest?: GetHaConfigurationRequest): Promise<GetHaConfigurationResponse> {
        const options = ParamCreater().getHaConfiguration(getHaConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IAM Identity Center服务实例状态信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务实例状态
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getIdentityCenterServiceStatus(getIdentityCenterServiceStatusRequest?: GetIdentityCenterServiceStatusRequest): Promise<GetIdentityCenterServiceStatusResponse> {
        const options = ParamCreater().getIdentityCenterServiceStatus(getIdentityCenterServiceStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取IAM身份中心服务实例中的身份源配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取身份源配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIdentityStoreAssociation(listIdentityStoreAssociationRequest?: ListIdentityStoreAssociationRequest): Promise<ListIdentityStoreAssociationResponse> {
        const options = ParamCreater().listIdentityStoreAssociation(listIdentityStoreAssociationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IAM身份中心的实例列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出实例
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstances(listInstancesRequest?: ListInstancesRequest): Promise<ListInstancesResponse> {
        const options = ParamCreater().listInstances(listInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * IAM身份中心服务实例开通前，需要选择服务实例具体开通在某一区域。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 选择服务实例开通区域
     * @param {RegisterRegionReqBody} registerRegionReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerRegion(registerRegionRequest?: RegisterRegionRequest): Promise<RegisterRegionResponse> {
        const options = ParamCreater().registerRegion(registerRegionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通IAM Identity Center服务实例。此操作只能由组织的管理账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开通服务实例
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startIdentityCenter(startIdentityCenterRequest?: StartIdentityCenterRequest): Promise<StartIdentityCenterResponse> {
        const options = ParamCreater().startIdentityCenter(startIdentityCenterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 授权启用或者禁用高可用功能配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新高可用功能配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {UpdateHAConfigurationReqBody} [updateHAConfigurationReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHaConfiguration(updateHaConfigurationRequest?: UpdateHaConfigurationRequest): Promise<UpdateHaConfigurationResponse> {
        const options = ParamCreater().updateHaConfiguration(updateHaConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用指定实例的访问控制功能。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用指定实例的访问控制功能
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {CreateInstanceAccessControlAttributeConfigurationReqBody} createInstanceAccessControlAttributeConfigurationReqBody The information of access control attribute configuration request
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstanceAccessControlAttributeConfiguration(createInstanceAccessControlAttributeConfigurationRequest?: CreateInstanceAccessControlAttributeConfigurationRequest): Promise<CreateInstanceAccessControlAttributeConfigurationResponse> {
        const options = ParamCreater().createInstanceAccessControlAttributeConfiguration(createInstanceAccessControlAttributeConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用指定IAM Identity Center实例的基于属性的访问控制（ABAC）功能，并删除已配置的所有属性映射。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除指定实例的访问控制属性配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteInstanceAccessControlAttributeConfiguration(deleteInstanceAccessControlAttributeConfigurationRequest?: DeleteInstanceAccessControlAttributeConfigurationRequest): Promise<DeleteInstanceAccessControlAttributeConfigurationResponse> {
        const options = ParamCreater().deleteInstanceAccessControlAttributeConfiguration(deleteInstanceAccessControlAttributeConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回已配置为与指定IAM Identity Center实例的基于属性的访问控制（ABAC）一起使用的IAM Identity Center身份存储属性列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的访问控制属性配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describeInstanceAccessControlAttributeConfiguration(describeInstanceAccessControlAttributeConfigurationRequest?: DescribeInstanceAccessControlAttributeConfigurationRequest): Promise<DescribeInstanceAccessControlAttributeConfigurationResponse> {
        const options = ParamCreater().describeInstanceAccessControlAttributeConfiguration(describeInstanceAccessControlAttributeConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新可与IAM Identity Center实例一起使用的IAM Identity Center身份存储属性，以进行基于属性的访问控制（ABAC）。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定实例的访问控制属性配置
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {UpdateInstanceAccessControlAttributeConfigurationReqBody} updateInstanceAccessControlAttributeConfigurationReqBody The information of access control attribute configuration request
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateInstanceAccessControlAttributeConfiguration(updateInstanceAccessControlAttributeConfigurationRequest?: UpdateInstanceAccessControlAttributeConfigurationRequest): Promise<UpdateInstanceAccessControlAttributeConfigurationResponse> {
        const options = ParamCreater().updateInstanceAccessControlAttributeConfiguration(updateInstanceAccessControlAttributeConfigurationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询MFA管理配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询MFA管理配置信息
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getMfaDeviceManagementForIdentityStore(getMfaDeviceManagementForIdentityStoreRequest?: GetMfaDeviceManagementForIdentityStoreRequest): Promise<GetMfaDeviceManagementForIdentityStoreResponse> {
        const options = ParamCreater().getMfaDeviceManagementForIdentityStore(getMfaDeviceManagementForIdentityStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置MFA管理设置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置MFA管理设置信息
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {PutMfaDeviceManagementForDirectoryReqBody} [putMfaDeviceManagementForDirectoryReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putMfaDeviceManagementForIdentityStore(putMfaDeviceManagementForIdentityStoreRequest?: PutMfaDeviceManagementForIdentityStoreRequest): Promise<PutMfaDeviceManagementForIdentityStoreResponse> {
        const options = ParamCreater().putMfaDeviceManagementForIdentityStore(putMfaDeviceManagementForIdentityStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定的权限集中添加系统身份策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加系统身份策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {AttachManagedPolicyToPermissionSetReqBody} attachManagedPolicyToPermissionSetReqBody 系统身份策略附加到权限集请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachManagedPolicyToPermissionSet(attachManagedPolicyToPermissionSetRequest?: AttachManagedPolicyToPermissionSetRequest): Promise<AttachManagedPolicyToPermissionSetResponse> {
        const options = ParamCreater().attachManagedPolicyToPermissionSet(attachManagedPolicyToPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将系统策略附加到权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 附加系统策略到权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {ResourceAttachManagedPolicyToPermissionSetReqBody} resourceAttachManagedPolicyToPermissionSetReqBody 系统策略附加到权限集请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachManagedRoleToPermissionSet(attachManagedRoleToPermissionSetRequest?: AttachManagedRoleToPermissionSetRequest): Promise<AttachManagedRoleToPermissionSetResponse> {
        const options = ParamCreater().attachManagedRoleToPermissionSet(attachManagedRoleToPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在指定的IAM Identity Center实例中创建一个权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {CreatePermissionSetReqBody} createPermissionSetReqBody 创建权限集请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPermissionSet(createPermissionSetRequest?: CreatePermissionSetRequest): Promise<CreatePermissionSetResponse> {
        const options = ParamCreater().createPermissionSet(createPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定权限集中的自定义身份策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定权限集中的自定义身份策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomPolicyFromPermissionSet(deleteCustomPolicyFromPermissionSetRequest?: DeleteCustomPolicyFromPermissionSetRequest): Promise<DeleteCustomPolicyFromPermissionSetResponse> {
        const options = ParamCreater().deleteCustomPolicyFromPermissionSet(deleteCustomPolicyFromPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定权限集中的自定义策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定权限集中的自定义策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomRoleFromPermissionSet(deleteCustomRoleFromPermissionSetRequest?: DeleteCustomRoleFromPermissionSetRequest): Promise<DeleteCustomRoleFromPermissionSetResponse> {
        const options = ParamCreater().deleteCustomRoleFromPermissionSet(deleteCustomRoleFromPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据权限集ID，删除指定的权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePermissionSet(deletePermissionSetRequest?: DeletePermissionSetRequest): Promise<DeletePermissionSetResponse> {
        const options = ParamCreater().deletePermissionSet(deletePermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据权限集ID，查询指定权限集的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集详情
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describePermissionSet(describePermissionSetRequest?: DescribePermissionSetRequest): Promise<DescribePermissionSetResponse> {
        const options = ParamCreater().describePermissionSet(describePermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据请求Id，查询权限集预分配状态的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集预分配状态详情
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} requestId 请求的唯一标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public describePermissionSetProvisioningStatus(describePermissionSetProvisioningStatusRequest?: DescribePermissionSetProvisioningStatusRequest): Promise<DescribePermissionSetProvisioningStatusResponse> {
        const options = ParamCreater().describePermissionSetProvisioningStatus(describePermissionSetProvisioningStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将附加的系统身份策略从指定的权限集中分离。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从权限集分离系统身份策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {DetachManagedPolicyFromPermissionSetReqBody} detachManagedPolicyFromPermissionSetReqBody 请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachManagedPolicyFromPermissionSet(detachManagedPolicyFromPermissionSetRequest?: DetachManagedPolicyFromPermissionSetRequest): Promise<DetachManagedPolicyFromPermissionSetResponse> {
        const options = ParamCreater().detachManagedPolicyFromPermissionSet(detachManagedPolicyFromPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将附加的系统策略从指定的权限集中分离。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从权限集分离系统策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {ResourceDetachManagedPolicyFromPermissionSetReqBody} resourceDetachManagedPolicyFromPermissionSetReqBody 请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachManagedRoleFromPermissionSet(detachManagedRoleFromPermissionSetRequest?: DetachManagedRoleFromPermissionSetRequest): Promise<DetachManagedRoleFromPermissionSetResponse> {
        const options = ParamCreater().detachManagedRoleFromPermissionSet(detachManagedRoleFromPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分配给权限集的自定义身份策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分配给权限集的自定义身份策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getCustomPolicyForPermissionSet(getCustomPolicyForPermissionSetRequest?: GetCustomPolicyForPermissionSetRequest): Promise<GetCustomPolicyForPermissionSetResponse> {
        const options = ParamCreater().getCustomPolicyForPermissionSet(getCustomPolicyForPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取分配给权限集的自定义策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分配给权限集的自定义策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getCustomRoleForPermissionSet(getCustomRoleForPermissionSetRequest?: GetCustomRoleForPermissionSetRequest): Promise<GetCustomRoleForPermissionSetResponse> {
        const options = ParamCreater().getCustomRoleForPermissionSet(getCustomRoleForPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询权限集配额信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集配额信息
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getPermissionSetSummary(getPermissionSetSummaryRequest?: GetPermissionSetSummaryRequest): Promise<GetPermissionSetSummaryResponse> {
        const options = ParamCreater().getPermissionSetSummary(getPermissionSetSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询与指定权限集关联的账户列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集关联的账号
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {'LATEST_PERMISSION_SET_PROVISIONED' | 'LATEST_PERMISSION_SET_NOT_PROVISIONED'} [provisioningStatus] 权限集分配状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccountsForProvisionedPermissionSet(listAccountsForProvisionedPermissionSetRequest?: ListAccountsForProvisionedPermissionSetRequest): Promise<ListAccountsForProvisionedPermissionSetResponse> {
        const options = ParamCreater().listAccountsForProvisionedPermissionSet(listAccountsForProvisionedPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取附加到指定权限集的系统身份策略列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集中附加的系统身份策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagedPoliciesInPermissionSet(listManagedPoliciesInPermissionSetRequest?: ListManagedPoliciesInPermissionSetRequest): Promise<ListManagedPoliciesInPermissionSetResponse> {
        const options = ParamCreater().listManagedPoliciesInPermissionSet(listManagedPoliciesInPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取附加到指定权限集的系统策略列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集中附加的系统策略
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManagedRolesInPermissionSet(listManagedRolesInPermissionSetRequest?: ListManagedRolesInPermissionSetRequest): Promise<ListManagedRolesInPermissionSetResponse> {
        const options = ParamCreater().listManagedRolesInPermissionSet(listManagedRolesInPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例中的权限集预分配状态列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集预分配状态
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED'} [status] 根据传递的属性值过滤操作状态列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissionSetProvisioningStatus(listPermissionSetProvisioningStatusRequest?: ListPermissionSetProvisioningStatusRequest): Promise<ListPermissionSetProvisioningStatusResponse> {
        const options = ParamCreater().listPermissionSetProvisioningStatus(listPermissionSetProvisioningStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定实例下的权限集列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {string} [permissionSetId] 权限集的全局唯一标识符（ID）。
     * @param {string} [permissionUrn] 权限集的全局唯一URN。
     * @param {string} [name] 权限集名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissionSets(listPermissionSetsRequest?: ListPermissionSetsRequest): Promise<ListPermissionSetsResponse> {
        const options = ParamCreater().listPermissionSets(listPermissionSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询分配给指定账户的权限集列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出分配给账户的权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} accountId 指定账户的唯一身份标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {'LATEST_PERMISSION_SET_PROVISIONED' | 'LATEST_PERMISSION_SET_NOT_PROVISIONED'} [provisioningStatus] 权限集授权状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissionSetsProvisionedToAccount(listPermissionSetsProvisionedToAccountRequest?: ListPermissionSetsProvisionedToAccountRequest): Promise<ListPermissionSetsProvisionedToAccountResponse> {
        const options = ParamCreater().listPermissionSetsProvisionedToAccount(listPermissionSetsProvisionedToAccountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将指定权限集预分配给指定账户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预分配权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {ProvisionPermissionSetReqBody} provisionPermissionSetReqBody The information of provisin permission request
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public provisionPermissionSet(provisionPermissionSetRequest?: ProvisionPermissionSetRequest): Promise<ProvisionPermissionSetResponse> {
        const options = ParamCreater().provisionPermissionSet(provisionPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将自定义身份策略附加到权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将自定义身份策略附加到权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {PutCustomPolicyToPermissionSetReqBody} putCustomPolicyToPermissionSetReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putCustomPolicyToPermissionSet(putCustomPolicyToPermissionSetRequest?: PutCustomPolicyToPermissionSetRequest): Promise<PutCustomPolicyToPermissionSetResponse> {
        const options = ParamCreater().putCustomPolicyToPermissionSet(putCustomPolicyToPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将自定义策略附加到权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将自定义策略附加到权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {PutCustomRoleToPermissionSetReqBody} putCustomRoleToPermissionSetReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putCustomRoleToPermissionSet(putCustomRoleToPermissionSetRequest?: PutCustomRoleToPermissionSetRequest): Promise<PutCustomRoleToPermissionSetResponse> {
        const options = ParamCreater().putCustomRoleToPermissionSet(putCustomRoleToPermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据权限集ID，更新指定权限集的属性。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新权限集
     * @param {string} instanceId IAM Identity Center实例的全局唯一标识符（ID）
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {UpdatePermissionSetReqBody} updatePermissionSetReqBody 请求体
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePermissionSet(updatePermissionSetRequest?: UpdatePermissionSetRequest): Promise<UpdatePermissionSetResponse> {
        const options = ParamCreater().updatePermissionSet(updatePermissionSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向指定的资源添加一个或多个标签。目前，您可以将标签附加到实例中的权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定资源添加标签
     * @param {'identitycenter:permissionset'} resourceType 资源类型 identitycenter:permissionset权限集
     * @param {string} resourceId 权限集的唯一标识符（ID）。
     * @param {TagResourceReqBody} tagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTagResource(createTagResourceRequest?: CreateTagResourceRequest): Promise<CreateTagResourceResponse> {
        const options = ParamCreater().createTagResource(createTagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从指定资源中删除具有指定主键的任何标签。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从指定资源中删除指定主键标签
     * @param {'identitycenter:permissionset'} resourceType 资源类型 identitycenter:permissionset权限集
     * @param {string} resourceId 权限集的唯一标识符（ID）。
     * @param {DeleteTagResourceReqBody} deleteTagResourceReqBody 
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTagResource(deleteTagResourceRequest?: DeleteTagResourceRequest): Promise<DeleteTagResourceResponse> {
        const options = ParamCreater().deleteTagResource(deleteTagResourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出绑定到指定资源的标签。您可以将标签附加到实例中的权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出绑定到指定资源的标签
     * @param {'identitycenter:permissionset'} resourceType 资源类型 identitycenter:permissionset权限集
     * @param {string} resourceId 权限集的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数。
     * @param {string} [marker] 分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagResources(listTagResourcesRequest?: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
        const options = ParamCreater().listTagResources(listTagResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 使用指定的权限集为指定账户分配对应主体的访问权限，主体可为IdentityCenter用户或IdentityCenter用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccountAssignment(createAccountAssignmentRequest?: CreateAccountAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/account-assignments/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (createAccountAssignmentRequest !== null && createAccountAssignmentRequest !== undefined) {
                if (createAccountAssignmentRequest instanceof CreateAccountAssignmentRequest) {
                    instanceId = createAccountAssignmentRequest.instanceId;
                    body = createAccountAssignmentRequest.body
                    xSecurityToken = createAccountAssignmentRequest.xSecurityToken;
                } else {
                    instanceId = createAccountAssignmentRequest['instance_id'];
                    body = createAccountAssignmentRequest['body'];
                    xSecurityToken = createAccountAssignmentRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAccountAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用指定的权限集从指定的账号删除主体的访问权限，主体可为IAM身份中心用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccountAssignment(deleteAccountAssignmentRequest?: DeleteAccountAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/account-assignments/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (deleteAccountAssignmentRequest !== null && deleteAccountAssignmentRequest !== undefined) {
                if (deleteAccountAssignmentRequest instanceof DeleteAccountAssignmentRequest) {
                    instanceId = deleteAccountAssignmentRequest.instanceId;
                    body = deleteAccountAssignmentRequest.body
                    xSecurityToken = deleteAccountAssignmentRequest.xSecurityToken;
                } else {
                    instanceId = deleteAccountAssignmentRequest['instance_id'];
                    body = deleteAccountAssignmentRequest['body'];
                    xSecurityToken = deleteAccountAssignmentRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteAccountAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据请求ID，查询指定IAM Identity Center实例下的账户分配创建状态详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeAccountAssignmentCreationStatus(describeAccountAssignmentCreationStatusRequest?: DescribeAccountAssignmentCreationStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/account-assignments/creation-status/{request_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let requestId;
            
            let xSecurityToken;

            if (describeAccountAssignmentCreationStatusRequest !== null && describeAccountAssignmentCreationStatusRequest !== undefined) {
                if (describeAccountAssignmentCreationStatusRequest instanceof DescribeAccountAssignmentCreationStatusRequest) {
                    instanceId = describeAccountAssignmentCreationStatusRequest.instanceId;
                    requestId = describeAccountAssignmentCreationStatusRequest.requestId;
                    xSecurityToken = describeAccountAssignmentCreationStatusRequest.xSecurityToken;
                } else {
                    instanceId = describeAccountAssignmentCreationStatusRequest['instance_id'];
                    requestId = describeAccountAssignmentCreationStatusRequest['request_id'];
                    xSecurityToken = describeAccountAssignmentCreationStatusRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describeAccountAssignmentCreationStatus.');
            }
            if (requestId === null || requestId === undefined) {
            throw new RequiredError('requestId','Required parameter requestId was null or undefined when calling describeAccountAssignmentCreationStatus.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'request_id': requestId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据请求ID，查询指定IAM Identity Center实例下的账户分配删除状态详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeAccountAssignmentDeletionStatus(describeAccountAssignmentDeletionStatusRequest?: DescribeAccountAssignmentDeletionStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/account-assignments/deletion-status/{request_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let requestId;
            
            let xSecurityToken;

            if (describeAccountAssignmentDeletionStatusRequest !== null && describeAccountAssignmentDeletionStatusRequest !== undefined) {
                if (describeAccountAssignmentDeletionStatusRequest instanceof DescribeAccountAssignmentDeletionStatusRequest) {
                    instanceId = describeAccountAssignmentDeletionStatusRequest.instanceId;
                    requestId = describeAccountAssignmentDeletionStatusRequest.requestId;
                    xSecurityToken = describeAccountAssignmentDeletionStatusRequest.xSecurityToken;
                } else {
                    instanceId = describeAccountAssignmentDeletionStatusRequest['instance_id'];
                    requestId = describeAccountAssignmentDeletionStatusRequest['request_id'];
                    xSecurityToken = describeAccountAssignmentDeletionStatusRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describeAccountAssignmentDeletionStatus.');
            }
            if (requestId === null || requestId === undefined) {
            throw new RequiredError('requestId','Required parameter requestId was null or undefined when calling describeAccountAssignmentDeletionStatus.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'request_id': requestId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解除与用户或组绑定的所有账号授权关联。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateProfile(disassociateProfileRequest?: DisassociateProfileRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/disassociate-profile",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (disassociateProfileRequest !== null && disassociateProfileRequest !== undefined) {
                if (disassociateProfileRequest instanceof DisassociateProfileRequest) {
                    instanceId = disassociateProfileRequest.instanceId;
                    body = disassociateProfileRequest.body
                    xSecurityToken = disassociateProfileRequest.xSecurityToken;
                } else {
                    instanceId = disassociateProfileRequest['instance_id'];
                    body = disassociateProfileRequest['body'];
                    xSecurityToken = disassociateProfileRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling disassociateProfile.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定IAM Identity Center实例下的账户分配的创建状态列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccountAssignmentCreationStatus(listAccountAssignmentCreationStatusRequest?: ListAccountAssignmentCreationStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/account-assignments/creation-statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xSecurityToken;
            
            let status;
            
            let limit;
            
            let marker;

            if (listAccountAssignmentCreationStatusRequest !== null && listAccountAssignmentCreationStatusRequest !== undefined) {
                if (listAccountAssignmentCreationStatusRequest instanceof ListAccountAssignmentCreationStatusRequest) {
                    instanceId = listAccountAssignmentCreationStatusRequest.instanceId;
                    xSecurityToken = listAccountAssignmentCreationStatusRequest.xSecurityToken;
                    status = listAccountAssignmentCreationStatusRequest.status;
                    limit = listAccountAssignmentCreationStatusRequest.limit;
                    marker = listAccountAssignmentCreationStatusRequest.marker;
                } else {
                    instanceId = listAccountAssignmentCreationStatusRequest['instance_id'];
                    xSecurityToken = listAccountAssignmentCreationStatusRequest['X-Security-Token'];
                    status = listAccountAssignmentCreationStatusRequest['status'];
                    limit = listAccountAssignmentCreationStatusRequest['limit'];
                    marker = listAccountAssignmentCreationStatusRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAccountAssignmentCreationStatus.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定IAM Identity Center实例下的账户分配的删除状态列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccountAssignmentDeletionStatus(listAccountAssignmentDeletionStatusRequest?: ListAccountAssignmentDeletionStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/account-assignments/deletion-statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xSecurityToken;
            
            let status;
            
            let limit;
            
            let marker;

            if (listAccountAssignmentDeletionStatusRequest !== null && listAccountAssignmentDeletionStatusRequest !== undefined) {
                if (listAccountAssignmentDeletionStatusRequest instanceof ListAccountAssignmentDeletionStatusRequest) {
                    instanceId = listAccountAssignmentDeletionStatusRequest.instanceId;
                    xSecurityToken = listAccountAssignmentDeletionStatusRequest.xSecurityToken;
                    status = listAccountAssignmentDeletionStatusRequest.status;
                    limit = listAccountAssignmentDeletionStatusRequest.limit;
                    marker = listAccountAssignmentDeletionStatusRequest.marker;
                } else {
                    instanceId = listAccountAssignmentDeletionStatusRequest['instance_id'];
                    xSecurityToken = listAccountAssignmentDeletionStatusRequest['X-Security-Token'];
                    status = listAccountAssignmentDeletionStatusRequest['status'];
                    limit = listAccountAssignmentDeletionStatusRequest['limit'];
                    marker = listAccountAssignmentDeletionStatusRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAccountAssignmentDeletionStatus.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出与指定账户以及指定权限集关联的用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccountAssignments(listAccountAssignmentsRequest?: ListAccountAssignmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/account-assignments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let accountId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let permissionSetId;

            if (listAccountAssignmentsRequest !== null && listAccountAssignmentsRequest !== undefined) {
                if (listAccountAssignmentsRequest instanceof ListAccountAssignmentsRequest) {
                    instanceId = listAccountAssignmentsRequest.instanceId;
                    accountId = listAccountAssignmentsRequest.accountId;
                    xSecurityToken = listAccountAssignmentsRequest.xSecurityToken;
                    limit = listAccountAssignmentsRequest.limit;
                    marker = listAccountAssignmentsRequest.marker;
                    permissionSetId = listAccountAssignmentsRequest.permissionSetId;
                } else {
                    instanceId = listAccountAssignmentsRequest['instance_id'];
                    accountId = listAccountAssignmentsRequest['account_id'];
                    xSecurityToken = listAccountAssignmentsRequest['X-Security-Token'];
                    limit = listAccountAssignmentsRequest['limit'];
                    marker = listAccountAssignmentsRequest['marker'];
                    permissionSetId = listAccountAssignmentsRequest['permission_set_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAccountAssignments.');
            }
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling listAccountAssignments.');
            }
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (permissionSetId !== null && permissionSetId !== undefined) {
                localVarQueryParameter['permission_set_id'] = permissionSetId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索与用户或用户组关联的账号列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccountAssignmentsForPrincipal(listAccountAssignmentsForPrincipalRequest?: ListAccountAssignmentsForPrincipalRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/account-assignments-for-principals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let principalId;
            
            let principalType;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let accountId;

            if (listAccountAssignmentsForPrincipalRequest !== null && listAccountAssignmentsForPrincipalRequest !== undefined) {
                if (listAccountAssignmentsForPrincipalRequest instanceof ListAccountAssignmentsForPrincipalRequest) {
                    instanceId = listAccountAssignmentsForPrincipalRequest.instanceId;
                    principalId = listAccountAssignmentsForPrincipalRequest.principalId;
                    principalType = listAccountAssignmentsForPrincipalRequest.principalType;
                    xSecurityToken = listAccountAssignmentsForPrincipalRequest.xSecurityToken;
                    limit = listAccountAssignmentsForPrincipalRequest.limit;
                    marker = listAccountAssignmentsForPrincipalRequest.marker;
                    accountId = listAccountAssignmentsForPrincipalRequest.accountId;
                } else {
                    instanceId = listAccountAssignmentsForPrincipalRequest['instance_id'];
                    principalId = listAccountAssignmentsForPrincipalRequest['principal_id'];
                    principalType = listAccountAssignmentsForPrincipalRequest['principal_type'];
                    xSecurityToken = listAccountAssignmentsForPrincipalRequest['X-Security-Token'];
                    limit = listAccountAssignmentsForPrincipalRequest['limit'];
                    marker = listAccountAssignmentsForPrincipalRequest['marker'];
                    accountId = listAccountAssignmentsForPrincipalRequest['account_id'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAccountAssignmentsForPrincipal.');
            }
            if (principalId === null || principalId === undefined) {
                throw new RequiredError('principalId','Required parameter principalId was null or undefined when calling listAccountAssignmentsForPrincipal.');
            }
            if (principalId !== null && principalId !== undefined) {
                localVarQueryParameter['principal_id'] = principalId;
            }
            if (principalType === null || principalType === undefined) {
                throw new RequiredError('principalType','Required parameter principalType was null or undefined when calling listAccountAssignmentsForPrincipal.');
            }
            if (principalType !== null && principalType !== undefined) {
                localVarQueryParameter['principal_type'] = principalType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用程序实例。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplicationInstance(createApplicationInstanceRequest?: CreateApplicationInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/application-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (createApplicationInstanceRequest !== null && createApplicationInstanceRequest !== undefined) {
                if (createApplicationInstanceRequest instanceof CreateApplicationInstanceRequest) {
                    instanceId = createApplicationInstanceRequest.instanceId;
                    body = createApplicationInstanceRequest.body
                    xSecurityToken = createApplicationInstanceRequest.xSecurityToken;
                } else {
                    instanceId = createApplicationInstanceRequest['instance_id'];
                    body = createApplicationInstanceRequest['body'];
                    xSecurityToken = createApplicationInstanceRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createApplicationInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用程序实例。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplicationInstance(deleteApplicationInstanceRequest?: DeleteApplicationInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (deleteApplicationInstanceRequest !== null && deleteApplicationInstanceRequest !== undefined) {
                if (deleteApplicationInstanceRequest instanceof DeleteApplicationInstanceRequest) {
                    instanceId = deleteApplicationInstanceRequest.instanceId;
                    applicationInstanceId = deleteApplicationInstanceRequest.applicationInstanceId;
                    xSecurityToken = deleteApplicationInstanceRequest.xSecurityToken;
                } else {
                    instanceId = deleteApplicationInstanceRequest['instance_id'];
                    applicationInstanceId = deleteApplicationInstanceRequest['application_instance_id'];
                    xSecurityToken = deleteApplicationInstanceRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApplicationInstance.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling deleteApplicationInstance.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用程序实例与用户或用户组关联关系。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProfile(deleteProfileRequest?: DeleteProfileRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/profiles/{profile_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let profileId;
            
            let xSecurityToken;

            if (deleteProfileRequest !== null && deleteProfileRequest !== undefined) {
                if (deleteProfileRequest instanceof DeleteProfileRequest) {
                    instanceId = deleteProfileRequest.instanceId;
                    applicationInstanceId = deleteProfileRequest.applicationInstanceId;
                    profileId = deleteProfileRequest.profileId;
                    xSecurityToken = deleteProfileRequest.xSecurityToken;
                } else {
                    instanceId = deleteProfileRequest['instance_id'];
                    applicationInstanceId = deleteProfileRequest['application_instance_id'];
                    profileId = deleteProfileRequest['profile_id'];
                    xSecurityToken = deleteProfileRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteProfile.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling deleteProfile.');
            }
            if (profileId === null || profileId === undefined) {
            throw new RequiredError('profileId','Required parameter profileId was null or undefined when calling deleteProfile.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId,'profile_id': profileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeApplication(describeApplicationRequest?: DescribeApplicationRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/applications/{application_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (describeApplicationRequest !== null && describeApplicationRequest !== undefined) {
                if (describeApplicationRequest instanceof DescribeApplicationRequest) {
                    instanceId = describeApplicationRequest.instanceId;
                    applicationInstanceId = describeApplicationRequest.applicationInstanceId;
                    xSecurityToken = describeApplicationRequest.xSecurityToken;
                } else {
                    instanceId = describeApplicationRequest['instance_id'];
                    applicationInstanceId = describeApplicationRequest['application_instance_id'];
                    xSecurityToken = describeApplicationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describeApplication.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling describeApplication.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序提供者详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeApplicationProvider(describeApplicationProviderRequest?: DescribeApplicationProviderRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-providers/{application_provider_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationProviderId;
            
            let xSecurityToken;

            if (describeApplicationProviderRequest !== null && describeApplicationProviderRequest !== undefined) {
                if (describeApplicationProviderRequest instanceof DescribeApplicationProviderRequest) {
                    applicationProviderId = describeApplicationProviderRequest.applicationProviderId;
                    xSecurityToken = describeApplicationProviderRequest.xSecurityToken;
                } else {
                    applicationProviderId = describeApplicationProviderRequest['application_provider_id'];
                    xSecurityToken = describeApplicationProviderRequest['X-Security-Token'];
                }
            }

        
            if (applicationProviderId === null || applicationProviderId === undefined) {
            throw new RequiredError('applicationProviderId','Required parameter applicationProviderId was null or undefined when calling describeApplicationProvider.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'application_provider_id': applicationProviderId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序分配属性配置，目的为用户或者用户组分配对应用程序的访问权限。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getApplicationAssignmentConfiguration(getApplicationAssignmentConfigurationRequest?: GetApplicationAssignmentConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/applications/{application_instance_id}/assignments-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (getApplicationAssignmentConfigurationRequest !== null && getApplicationAssignmentConfigurationRequest !== undefined) {
                if (getApplicationAssignmentConfigurationRequest instanceof GetApplicationAssignmentConfigurationRequest) {
                    instanceId = getApplicationAssignmentConfigurationRequest.instanceId;
                    applicationInstanceId = getApplicationAssignmentConfigurationRequest.applicationInstanceId;
                    xSecurityToken = getApplicationAssignmentConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = getApplicationAssignmentConfigurationRequest['instance_id'];
                    applicationInstanceId = getApplicationAssignmentConfigurationRequest['application_instance_id'];
                    xSecurityToken = getApplicationAssignmentConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getApplicationAssignmentConfiguration.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling getApplicationAssignmentConfiguration.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序实例详情。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getApplicationInstance(getApplicationInstanceRequest?: GetApplicationInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (getApplicationInstanceRequest !== null && getApplicationInstanceRequest !== undefined) {
                if (getApplicationInstanceRequest instanceof GetApplicationInstanceRequest) {
                    instanceId = getApplicationInstanceRequest.instanceId;
                    applicationInstanceId = getApplicationInstanceRequest.applicationInstanceId;
                    xSecurityToken = getApplicationInstanceRequest.xSecurityToken;
                } else {
                    instanceId = getApplicationInstanceRequest['instance_id'];
                    applicationInstanceId = getApplicationInstanceRequest['application_instance_id'];
                    xSecurityToken = getApplicationInstanceRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getApplicationInstance.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling getApplicationInstance.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传应用程序实例元数据文件。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importApplicationInstanceServiceProviderMetadata(importApplicationInstanceServiceProviderMetadataRequest?: ImportApplicationInstanceServiceProviderMetadataRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/metadata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (importApplicationInstanceServiceProviderMetadataRequest !== null && importApplicationInstanceServiceProviderMetadataRequest !== undefined) {
                if (importApplicationInstanceServiceProviderMetadataRequest instanceof ImportApplicationInstanceServiceProviderMetadataRequest) {
                    instanceId = importApplicationInstanceServiceProviderMetadataRequest.instanceId;
                    applicationInstanceId = importApplicationInstanceServiceProviderMetadataRequest.applicationInstanceId;
                    body = importApplicationInstanceServiceProviderMetadataRequest.body
                    xSecurityToken = importApplicationInstanceServiceProviderMetadataRequest.xSecurityToken;
                } else {
                    instanceId = importApplicationInstanceServiceProviderMetadataRequest['instance_id'];
                    applicationInstanceId = importApplicationInstanceServiceProviderMetadataRequest['application_instance_id'];
                    body = importApplicationInstanceServiceProviderMetadataRequest['body'];
                    xSecurityToken = importApplicationInstanceServiceProviderMetadataRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling importApplicationInstanceServiceProviderMetadata.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling importApplicationInstanceServiceProviderMetadata.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出应用程序实例。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationInstances(listApplicationInstancesRequest?: ListApplicationInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/application-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listApplicationInstancesRequest !== null && listApplicationInstancesRequest !== undefined) {
                if (listApplicationInstancesRequest instanceof ListApplicationInstancesRequest) {
                    instanceId = listApplicationInstancesRequest.instanceId;
                    xSecurityToken = listApplicationInstancesRequest.xSecurityToken;
                    limit = listApplicationInstancesRequest.limit;
                    marker = listApplicationInstancesRequest.marker;
                } else {
                    instanceId = listApplicationInstancesRequest['instance_id'];
                    xSecurityToken = listApplicationInstancesRequest['X-Security-Token'];
                    limit = listApplicationInstancesRequest['limit'];
                    marker = listApplicationInstancesRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApplicationInstances.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序提供者列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationProviders(listApplicationProvidersRequest?: ListApplicationProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let xSecurityToken;

            if (listApplicationProvidersRequest !== null && listApplicationProvidersRequest !== undefined) {
                if (listApplicationProvidersRequest instanceof ListApplicationProvidersRequest) {
                    limit = listApplicationProvidersRequest.limit;
                    marker = listApplicationProvidersRequest.marker;
                    xSecurityToken = listApplicationProvidersRequest.xSecurityToken;
                } else {
                    limit = listApplicationProvidersRequest['limit'];
                    marker = listApplicationProvidersRequest['marker'];
                    xSecurityToken = listApplicationProvidersRequest['X-Security-Token'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序模板列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationTemplates(listApplicationTemplatesRequest?: ListApplicationTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/application-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let applicationId;
            
            let xSecurityToken;

            if (listApplicationTemplatesRequest !== null && listApplicationTemplatesRequest !== undefined) {
                if (listApplicationTemplatesRequest instanceof ListApplicationTemplatesRequest) {
                    applicationId = listApplicationTemplatesRequest.applicationId;
                    xSecurityToken = listApplicationTemplatesRequest.xSecurityToken;
                } else {
                    applicationId = listApplicationTemplatesRequest['application_id'];
                    xSecurityToken = listApplicationTemplatesRequest['X-Security-Token'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
                throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling listApplicationTemplates.');
            }
            if (applicationId !== null && applicationId !== undefined) {
                localVarQueryParameter['application_id'] = applicationId;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplications(listApplicationsRequest?: ListApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listApplicationsRequest !== null && listApplicationsRequest !== undefined) {
                if (listApplicationsRequest instanceof ListApplicationsRequest) {
                    instanceId = listApplicationsRequest.instanceId;
                    xSecurityToken = listApplicationsRequest.xSecurityToken;
                    limit = listApplicationsRequest.limit;
                    marker = listApplicationsRequest.marker;
                } else {
                    instanceId = listApplicationsRequest['instance_id'];
                    xSecurityToken = listApplicationsRequest['X-Security-Token'];
                    limit = listApplicationsRequest['limit'];
                    marker = listApplicationsRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApplications.');
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出应用程序目录中的预置应用模板。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCatalogApplications(listCatalogApplicationsRequest?: ListCatalogApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/catalog/applications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listCatalogApplicationsRequest !== null && listCatalogApplicationsRequest !== undefined) {
                if (listCatalogApplicationsRequest instanceof ListCatalogApplicationsRequest) {
                    xSecurityToken = listCatalogApplicationsRequest.xSecurityToken;
                    limit = listCatalogApplicationsRequest.limit;
                    marker = listCatalogApplicationsRequest.marker;
                } else {
                    xSecurityToken = listCatalogApplicationsRequest['X-Security-Token'];
                    limit = listCatalogApplicationsRequest['limit'];
                    marker = listCatalogApplicationsRequest['marker'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出应用程序实例与用户或用户组存在的关联关系。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProfiles(listProfilesRequest?: ListProfilesRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/profiles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (listProfilesRequest !== null && listProfilesRequest !== undefined) {
                if (listProfilesRequest instanceof ListProfilesRequest) {
                    instanceId = listProfilesRequest.instanceId;
                    applicationInstanceId = listProfilesRequest.applicationInstanceId;
                    xSecurityToken = listProfilesRequest.xSecurityToken;
                } else {
                    instanceId = listProfilesRequest['instance_id'];
                    applicationInstanceId = listProfilesRequest['application_instance_id'];
                    xSecurityToken = listProfilesRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listProfiles.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling listProfiles.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用程序实例显示信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceDisplayData(updateApplicationInstanceDisplayDataRequest?: UpdateApplicationInstanceDisplayDataRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/display-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (updateApplicationInstanceDisplayDataRequest !== null && updateApplicationInstanceDisplayDataRequest !== undefined) {
                if (updateApplicationInstanceDisplayDataRequest instanceof UpdateApplicationInstanceDisplayDataRequest) {
                    instanceId = updateApplicationInstanceDisplayDataRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceDisplayDataRequest.applicationInstanceId;
                    body = updateApplicationInstanceDisplayDataRequest.body
                    xSecurityToken = updateApplicationInstanceDisplayDataRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceDisplayDataRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceDisplayDataRequest['application_instance_id'];
                    body = updateApplicationInstanceDisplayDataRequest['body'];
                    xSecurityToken = updateApplicationInstanceDisplayDataRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceDisplayData.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceDisplayData.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用程序属性配置信息，更新应用程序中的属性映射、中继状态以及会话过期时间。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceResponseConfiguration(updateApplicationInstanceResponseConfigurationRequest?: UpdateApplicationInstanceResponseConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/response-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (updateApplicationInstanceResponseConfigurationRequest !== null && updateApplicationInstanceResponseConfigurationRequest !== undefined) {
                if (updateApplicationInstanceResponseConfigurationRequest instanceof UpdateApplicationInstanceResponseConfigurationRequest) {
                    instanceId = updateApplicationInstanceResponseConfigurationRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceResponseConfigurationRequest.applicationInstanceId;
                    body = updateApplicationInstanceResponseConfigurationRequest.body
                    xSecurityToken = updateApplicationInstanceResponseConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceResponseConfigurationRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceResponseConfigurationRequest['application_instance_id'];
                    body = updateApplicationInstanceResponseConfigurationRequest['body'];
                    xSecurityToken = updateApplicationInstanceResponseConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceResponseConfiguration.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceResponseConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用程序Schema属性映射配置，支持SAML断言中Subject属性映射以及Subject NameID格式。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceResponseSchemaConfiguration(updateApplicationInstanceResponseSchemaConfigurationRequest?: UpdateApplicationInstanceResponseSchemaConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/response-schema-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (updateApplicationInstanceResponseSchemaConfigurationRequest !== null && updateApplicationInstanceResponseSchemaConfigurationRequest !== undefined) {
                if (updateApplicationInstanceResponseSchemaConfigurationRequest instanceof UpdateApplicationInstanceResponseSchemaConfigurationRequest) {
                    instanceId = updateApplicationInstanceResponseSchemaConfigurationRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceResponseSchemaConfigurationRequest.applicationInstanceId;
                    body = updateApplicationInstanceResponseSchemaConfigurationRequest.body
                    xSecurityToken = updateApplicationInstanceResponseSchemaConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceResponseSchemaConfigurationRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceResponseSchemaConfigurationRequest['application_instance_id'];
                    body = updateApplicationInstanceResponseSchemaConfigurationRequest['body'];
                    xSecurityToken = updateApplicationInstanceResponseSchemaConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceResponseSchemaConfiguration.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceResponseSchemaConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用程序实例证书配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceSecurityConfiguration(updateApplicationInstanceSecurityConfigurationRequest?: UpdateApplicationInstanceSecurityConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/security-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (updateApplicationInstanceSecurityConfigurationRequest !== null && updateApplicationInstanceSecurityConfigurationRequest !== undefined) {
                if (updateApplicationInstanceSecurityConfigurationRequest instanceof UpdateApplicationInstanceSecurityConfigurationRequest) {
                    instanceId = updateApplicationInstanceSecurityConfigurationRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceSecurityConfigurationRequest.applicationInstanceId;
                    body = updateApplicationInstanceSecurityConfigurationRequest.body
                    xSecurityToken = updateApplicationInstanceSecurityConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceSecurityConfigurationRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceSecurityConfigurationRequest['application_instance_id'];
                    body = updateApplicationInstanceSecurityConfigurationRequest['body'];
                    xSecurityToken = updateApplicationInstanceSecurityConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceSecurityConfiguration.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceSecurityConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用程序实例服务提供商配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceServiceProviderConfiguration(updateApplicationInstanceServiceProviderConfigurationRequest?: UpdateApplicationInstanceServiceProviderConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/service-provider-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (updateApplicationInstanceServiceProviderConfigurationRequest !== null && updateApplicationInstanceServiceProviderConfigurationRequest !== undefined) {
                if (updateApplicationInstanceServiceProviderConfigurationRequest instanceof UpdateApplicationInstanceServiceProviderConfigurationRequest) {
                    instanceId = updateApplicationInstanceServiceProviderConfigurationRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceServiceProviderConfigurationRequest.applicationInstanceId;
                    body = updateApplicationInstanceServiceProviderConfigurationRequest.body
                    xSecurityToken = updateApplicationInstanceServiceProviderConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceServiceProviderConfigurationRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceServiceProviderConfigurationRequest['application_instance_id'];
                    body = updateApplicationInstanceServiceProviderConfigurationRequest['body'];
                    xSecurityToken = updateApplicationInstanceServiceProviderConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceServiceProviderConfiguration.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceServiceProviderConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用程序实例状态。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceStatus(updateApplicationInstanceStatusRequest?: UpdateApplicationInstanceStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (updateApplicationInstanceStatusRequest !== null && updateApplicationInstanceStatusRequest !== undefined) {
                if (updateApplicationInstanceStatusRequest instanceof UpdateApplicationInstanceStatusRequest) {
                    instanceId = updateApplicationInstanceStatusRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceStatusRequest.applicationInstanceId;
                    body = updateApplicationInstanceStatusRequest.body
                    xSecurityToken = updateApplicationInstanceStatusRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceStatusRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceStatusRequest['application_instance_id'];
                    body = updateApplicationInstanceStatusRequest['body'];
                    xSecurityToken = updateApplicationInstanceStatusRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceStatus.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用程序分配用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplicationAssignment(createApplicationAssignmentRequest?: CreateApplicationAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/applications/{application_instance_id}/assignments/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (createApplicationAssignmentRequest !== null && createApplicationAssignmentRequest !== undefined) {
                if (createApplicationAssignmentRequest instanceof CreateApplicationAssignmentRequest) {
                    instanceId = createApplicationAssignmentRequest.instanceId;
                    applicationInstanceId = createApplicationAssignmentRequest.applicationInstanceId;
                    body = createApplicationAssignmentRequest.body
                    xSecurityToken = createApplicationAssignmentRequest.xSecurityToken;
                } else {
                    instanceId = createApplicationAssignmentRequest['instance_id'];
                    applicationInstanceId = createApplicationAssignmentRequest['application_instance_id'];
                    body = createApplicationAssignmentRequest['body'];
                    xSecurityToken = createApplicationAssignmentRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createApplicationAssignment.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling createApplicationAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用程序已分配用户或用户组。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplicationAssignment(deleteApplicationAssignmentRequest?: DeleteApplicationAssignmentRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/applications/{application_instance_id}/assignments/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (deleteApplicationAssignmentRequest !== null && deleteApplicationAssignmentRequest !== undefined) {
                if (deleteApplicationAssignmentRequest instanceof DeleteApplicationAssignmentRequest) {
                    instanceId = deleteApplicationAssignmentRequest.instanceId;
                    applicationInstanceId = deleteApplicationAssignmentRequest.applicationInstanceId;
                    body = deleteApplicationAssignmentRequest.body
                    xSecurityToken = deleteApplicationAssignmentRequest.xSecurityToken;
                } else {
                    instanceId = deleteApplicationAssignmentRequest['instance_id'];
                    applicationInstanceId = deleteApplicationAssignmentRequest['application_instance_id'];
                    body = deleteApplicationAssignmentRequest['body'];
                    xSecurityToken = deleteApplicationAssignmentRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApplicationAssignment.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling deleteApplicationAssignment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序已分配的用户或用户组列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationAssignments(listApplicationAssignmentsRequest?: ListApplicationAssignmentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/applications/{application_instance_id}/assignments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listApplicationAssignmentsRequest !== null && listApplicationAssignmentsRequest !== undefined) {
                if (listApplicationAssignmentsRequest instanceof ListApplicationAssignmentsRequest) {
                    instanceId = listApplicationAssignmentsRequest.instanceId;
                    applicationInstanceId = listApplicationAssignmentsRequest.applicationInstanceId;
                    xSecurityToken = listApplicationAssignmentsRequest.xSecurityToken;
                    limit = listApplicationAssignmentsRequest.limit;
                    marker = listApplicationAssignmentsRequest.marker;
                } else {
                    instanceId = listApplicationAssignmentsRequest['instance_id'];
                    applicationInstanceId = listApplicationAssignmentsRequest['application_instance_id'];
                    xSecurityToken = listApplicationAssignmentsRequest['X-Security-Token'];
                    limit = listApplicationAssignmentsRequest['limit'];
                    marker = listApplicationAssignmentsRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApplicationAssignments.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling listApplicationAssignments.');
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
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索与用户或用户组关联的应用程序列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationAssignmentsForPrincipal(listApplicationAssignmentsForPrincipalRequest?: ListApplicationAssignmentsForPrincipalRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/application-assignments-for-principals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let principalId;
            
            let principalType;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listApplicationAssignmentsForPrincipalRequest !== null && listApplicationAssignmentsForPrincipalRequest !== undefined) {
                if (listApplicationAssignmentsForPrincipalRequest instanceof ListApplicationAssignmentsForPrincipalRequest) {
                    instanceId = listApplicationAssignmentsForPrincipalRequest.instanceId;
                    principalId = listApplicationAssignmentsForPrincipalRequest.principalId;
                    principalType = listApplicationAssignmentsForPrincipalRequest.principalType;
                    xSecurityToken = listApplicationAssignmentsForPrincipalRequest.xSecurityToken;
                    limit = listApplicationAssignmentsForPrincipalRequest.limit;
                    marker = listApplicationAssignmentsForPrincipalRequest.marker;
                } else {
                    instanceId = listApplicationAssignmentsForPrincipalRequest['instance_id'];
                    principalId = listApplicationAssignmentsForPrincipalRequest['principal_id'];
                    principalType = listApplicationAssignmentsForPrincipalRequest['principal_type'];
                    xSecurityToken = listApplicationAssignmentsForPrincipalRequest['X-Security-Token'];
                    limit = listApplicationAssignmentsForPrincipalRequest['limit'];
                    marker = listApplicationAssignmentsForPrincipalRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApplicationAssignmentsForPrincipal.');
            }
            if (principalId === null || principalId === undefined) {
                throw new RequiredError('principalId','Required parameter principalId was null or undefined when calling listApplicationAssignmentsForPrincipal.');
            }
            if (principalId !== null && principalId !== undefined) {
                localVarQueryParameter['principal_id'] = principalId;
            }
            if (principalType === null || principalType === undefined) {
                throw new RequiredError('principalType','Required parameter principalType was null or undefined when calling listApplicationAssignmentsForPrincipal.');
            }
            if (principalType !== null && principalType !== undefined) {
                localVarQueryParameter['principal_type'] = principalType;
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
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用程序实例证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApplicationInstanceCertificate(createApplicationInstanceCertificateRequest?: CreateApplicationInstanceCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;

            if (createApplicationInstanceCertificateRequest !== null && createApplicationInstanceCertificateRequest !== undefined) {
                if (createApplicationInstanceCertificateRequest instanceof CreateApplicationInstanceCertificateRequest) {
                    instanceId = createApplicationInstanceCertificateRequest.instanceId;
                    applicationInstanceId = createApplicationInstanceCertificateRequest.applicationInstanceId;
                    xSecurityToken = createApplicationInstanceCertificateRequest.xSecurityToken;
                } else {
                    instanceId = createApplicationInstanceCertificateRequest['instance_id'];
                    applicationInstanceId = createApplicationInstanceCertificateRequest['application_instance_id'];
                    xSecurityToken = createApplicationInstanceCertificateRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createApplicationInstanceCertificate.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling createApplicationInstanceCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用程序实例证书。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplicationInstanceCertificate(deleteApplicationInstanceCertificateRequest?: DeleteApplicationInstanceCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let certificateId;
            
            let xSecurityToken;

            if (deleteApplicationInstanceCertificateRequest !== null && deleteApplicationInstanceCertificateRequest !== undefined) {
                if (deleteApplicationInstanceCertificateRequest instanceof DeleteApplicationInstanceCertificateRequest) {
                    instanceId = deleteApplicationInstanceCertificateRequest.instanceId;
                    applicationInstanceId = deleteApplicationInstanceCertificateRequest.applicationInstanceId;
                    certificateId = deleteApplicationInstanceCertificateRequest.certificateId;
                    xSecurityToken = deleteApplicationInstanceCertificateRequest.xSecurityToken;
                } else {
                    instanceId = deleteApplicationInstanceCertificateRequest['instance_id'];
                    applicationInstanceId = deleteApplicationInstanceCertificateRequest['application_instance_id'];
                    certificateId = deleteApplicationInstanceCertificateRequest['certificate_id'];
                    xSecurityToken = deleteApplicationInstanceCertificateRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteApplicationInstanceCertificate.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling deleteApplicationInstanceCertificate.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteApplicationInstanceCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用程序实例证书列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApplicationInstanceCertificates(listApplicationInstanceCertificatesRequest?: ListApplicationInstanceCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let applicationInstanceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listApplicationInstanceCertificatesRequest !== null && listApplicationInstanceCertificatesRequest !== undefined) {
                if (listApplicationInstanceCertificatesRequest instanceof ListApplicationInstanceCertificatesRequest) {
                    instanceId = listApplicationInstanceCertificatesRequest.instanceId;
                    applicationInstanceId = listApplicationInstanceCertificatesRequest.applicationInstanceId;
                    xSecurityToken = listApplicationInstanceCertificatesRequest.xSecurityToken;
                    limit = listApplicationInstanceCertificatesRequest.limit;
                    marker = listApplicationInstanceCertificatesRequest.marker;
                } else {
                    instanceId = listApplicationInstanceCertificatesRequest['instance_id'];
                    applicationInstanceId = listApplicationInstanceCertificatesRequest['application_instance_id'];
                    xSecurityToken = listApplicationInstanceCertificatesRequest['X-Security-Token'];
                    limit = listApplicationInstanceCertificatesRequest['limit'];
                    marker = listApplicationInstanceCertificatesRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listApplicationInstanceCertificates.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling listApplicationInstanceCertificates.');
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
            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 激活应用程序实例证书，实现证书轮转。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplicationInstanceActiveCertificate(updateApplicationInstanceActiveCertificateRequest?: UpdateApplicationInstanceActiveCertificateRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/application-instances/{application_instance_id}/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let applicationInstanceId;
            
            let certificateId;
            
            let xSecurityToken;

            if (updateApplicationInstanceActiveCertificateRequest !== null && updateApplicationInstanceActiveCertificateRequest !== undefined) {
                if (updateApplicationInstanceActiveCertificateRequest instanceof UpdateApplicationInstanceActiveCertificateRequest) {
                    instanceId = updateApplicationInstanceActiveCertificateRequest.instanceId;
                    applicationInstanceId = updateApplicationInstanceActiveCertificateRequest.applicationInstanceId;
                    certificateId = updateApplicationInstanceActiveCertificateRequest.certificateId;
                    xSecurityToken = updateApplicationInstanceActiveCertificateRequest.xSecurityToken;
                } else {
                    instanceId = updateApplicationInstanceActiveCertificateRequest['instance_id'];
                    applicationInstanceId = updateApplicationInstanceActiveCertificateRequest['application_instance_id'];
                    certificateId = updateApplicationInstanceActiveCertificateRequest['certificate_id'];
                    xSecurityToken = updateApplicationInstanceActiveCertificateRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateApplicationInstanceActiveCertificate.');
            }
            if (applicationInstanceId === null || applicationInstanceId === undefined) {
            throw new RequiredError('applicationInstanceId','Required parameter applicationInstanceId was null or undefined when calling updateApplicationInstanceActiveCertificate.');
            }
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling updateApplicationInstanceActiveCertificate.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'application_instance_id': applicationInstanceId,'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IAM身份中心实例配置信息，包括身份认证配置和会话管理配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getSsoConfiguration(getSsoConfigurationRequest?: GetSsoConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/sso-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (getSsoConfigurationRequest !== null && getSsoConfigurationRequest !== undefined) {
                if (getSsoConfigurationRequest instanceof GetSsoConfigurationRequest) {
                    instanceId = getSsoConfigurationRequest.instanceId;
                    xSecurityToken = getSsoConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = getSsoConfigurationRequest['instance_id'];
                    xSecurityToken = getSsoConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getSsoConfiguration.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置IAM身份中心服务实例配置信息，包括身份认证配置和会话管理配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSsoConfiguration(updateSsoConfigurationRequest?: UpdateSsoConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/sso-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (updateSsoConfigurationRequest !== null && updateSsoConfigurationRequest !== undefined) {
                if (updateSsoConfigurationRequest instanceof UpdateSsoConfigurationRequest) {
                    instanceId = updateSsoConfigurationRequest.instanceId;
                    body = updateSsoConfigurationRequest.body
                    xSecurityToken = updateSsoConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = updateSsoConfigurationRequest['instance_id'];
                    body = updateSsoConfigurationRequest['body'];
                    xSecurityToken = updateSsoConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateSsoConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 自定义访问门户URL，默认情况下，您可以使用遵循以下格式的 URL访问门户：idcenter.huaweicloud.com/d-xxxxxxxxxx/portal，您可以按如下方式更改为自定义 URL：idcenter.huaweicloud.com/your_subdomain/portal。设置自定义访问门户URL是一次性操作，无法撤销。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlias(createAliasRequest?: CreateAliasRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/alias",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (createAliasRequest !== null && createAliasRequest !== undefined) {
                if (createAliasRequest instanceof CreateAliasRequest) {
                    instanceId = createAliasRequest.instanceId;
                    body = createAliasRequest.body
                    xSecurityToken = createAliasRequest.xSecurityToken;
                } else {
                    instanceId = createAliasRequest['instance_id'];
                    body = createAliasRequest['body'];
                    xSecurityToken = createAliasRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createAlias.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除IAM Identity Center服务实例。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIdentityCenter(deleteIdentityCenterRequest?: DeleteIdentityCenterRequest) {
            const options = {
                method: "POST",
                url: "/v1/service/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (deleteIdentityCenterRequest !== null && deleteIdentityCenterRequest !== undefined) {
                if (deleteIdentityCenterRequest instanceof DeleteIdentityCenterRequest) {
                    xSecurityToken = deleteIdentityCenterRequest.xSecurityToken;
                } else {
                    xSecurityToken = deleteIdentityCenterRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IAM身份中心服务实例开通后，具体开通所在区域。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeRegisteredRegions(describeRegisteredRegionsRequest?: DescribeRegisteredRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/registered-regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (describeRegisteredRegionsRequest !== null && describeRegisteredRegionsRequest !== undefined) {
                if (describeRegisteredRegionsRequest instanceof DescribeRegisteredRegionsRequest) {
                    xSecurityToken = describeRegisteredRegionsRequest.xSecurityToken;
                } else {
                    xSecurityToken = describeRegisteredRegionsRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询高可用功能配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getHaConfiguration(getHaConfigurationRequest?: GetHaConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/disaster-recovery-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (getHaConfigurationRequest !== null && getHaConfigurationRequest !== undefined) {
                if (getHaConfigurationRequest instanceof GetHaConfigurationRequest) {
                    instanceId = getHaConfigurationRequest.instanceId;
                    xSecurityToken = getHaConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = getHaConfigurationRequest['instance_id'];
                    xSecurityToken = getHaConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getHaConfiguration.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IAM Identity Center服务实例状态信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getIdentityCenterServiceStatus(getIdentityCenterServiceStatusRequest?: GetIdentityCenterServiceStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/identity-center-service/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (getIdentityCenterServiceStatusRequest !== null && getIdentityCenterServiceStatusRequest !== undefined) {
                if (getIdentityCenterServiceStatusRequest instanceof GetIdentityCenterServiceStatusRequest) {
                    xSecurityToken = getIdentityCenterServiceStatusRequest.xSecurityToken;
                } else {
                    xSecurityToken = getIdentityCenterServiceStatusRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取IAM身份中心服务实例中的身份源配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIdentityStoreAssociation(listIdentityStoreAssociationRequest?: ListIdentityStoreAssociationRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/identity-store-associations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (listIdentityStoreAssociationRequest !== null && listIdentityStoreAssociationRequest !== undefined) {
                if (listIdentityStoreAssociationRequest instanceof ListIdentityStoreAssociationRequest) {
                    instanceId = listIdentityStoreAssociationRequest.instanceId;
                    xSecurityToken = listIdentityStoreAssociationRequest.xSecurityToken;
                } else {
                    instanceId = listIdentityStoreAssociationRequest['instance_id'];
                    xSecurityToken = listIdentityStoreAssociationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listIdentityStoreAssociation.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IAM身份中心的实例列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstances(listInstancesRequest?: ListInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listInstancesRequest !== null && listInstancesRequest !== undefined) {
                if (listInstancesRequest instanceof ListInstancesRequest) {
                    xSecurityToken = listInstancesRequest.xSecurityToken;
                    limit = listInstancesRequest.limit;
                    marker = listInstancesRequest.marker;
                } else {
                    xSecurityToken = listInstancesRequest['X-Security-Token'];
                    limit = listInstancesRequest['limit'];
                    marker = listInstancesRequest['marker'];
                }
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
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * IAM身份中心服务实例开通前，需要选择服务实例具体开通在某一区域。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerRegion(registerRegionRequest?: RegisterRegionRequest) {
            const options = {
                method: "POST",
                url: "/v1/register-regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xSecurityToken;

            if (registerRegionRequest !== null && registerRegionRequest !== undefined) {
                if (registerRegionRequest instanceof RegisterRegionRequest) {
                    body = registerRegionRequest.body
                    xSecurityToken = registerRegionRequest.xSecurityToken;
                } else {
                    body = registerRegionRequest['body'];
                    xSecurityToken = registerRegionRequest['X-Security-Token'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开通IAM Identity Center服务实例。此操作只能由组织的管理账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startIdentityCenter(startIdentityCenterRequest?: StartIdentityCenterRequest) {
            const options = {
                method: "POST",
                url: "/v1/service/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xSecurityToken;

            if (startIdentityCenterRequest !== null && startIdentityCenterRequest !== undefined) {
                if (startIdentityCenterRequest instanceof StartIdentityCenterRequest) {
                    xSecurityToken = startIdentityCenterRequest.xSecurityToken;
                } else {
                    xSecurityToken = startIdentityCenterRequest['X-Security-Token'];
                }
            }

        
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 授权启用或者禁用高可用功能配置。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHaConfiguration(updateHaConfigurationRequest?: UpdateHaConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/disaster-recovery-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (updateHaConfigurationRequest !== null && updateHaConfigurationRequest !== undefined) {
                if (updateHaConfigurationRequest instanceof UpdateHaConfigurationRequest) {
                    instanceId = updateHaConfigurationRequest.instanceId;
                    xSecurityToken = updateHaConfigurationRequest.xSecurityToken;
                    body = updateHaConfigurationRequest.body
                } else {
                    instanceId = updateHaConfigurationRequest['instance_id'];
                    xSecurityToken = updateHaConfigurationRequest['X-Security-Token'];
                    body = updateHaConfigurationRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateHaConfiguration.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用指定实例的访问控制功能。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstanceAccessControlAttributeConfiguration(createInstanceAccessControlAttributeConfigurationRequest?: CreateInstanceAccessControlAttributeConfigurationRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/access-control-attribute-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (createInstanceAccessControlAttributeConfigurationRequest !== null && createInstanceAccessControlAttributeConfigurationRequest !== undefined) {
                if (createInstanceAccessControlAttributeConfigurationRequest instanceof CreateInstanceAccessControlAttributeConfigurationRequest) {
                    instanceId = createInstanceAccessControlAttributeConfigurationRequest.instanceId;
                    body = createInstanceAccessControlAttributeConfigurationRequest.body
                    xSecurityToken = createInstanceAccessControlAttributeConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = createInstanceAccessControlAttributeConfigurationRequest['instance_id'];
                    body = createInstanceAccessControlAttributeConfigurationRequest['body'];
                    xSecurityToken = createInstanceAccessControlAttributeConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createInstanceAccessControlAttributeConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用指定IAM Identity Center实例的基于属性的访问控制（ABAC）功能，并删除已配置的所有属性映射。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteInstanceAccessControlAttributeConfiguration(deleteInstanceAccessControlAttributeConfigurationRequest?: DeleteInstanceAccessControlAttributeConfigurationRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/access-control-attribute-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (deleteInstanceAccessControlAttributeConfigurationRequest !== null && deleteInstanceAccessControlAttributeConfigurationRequest !== undefined) {
                if (deleteInstanceAccessControlAttributeConfigurationRequest instanceof DeleteInstanceAccessControlAttributeConfigurationRequest) {
                    instanceId = deleteInstanceAccessControlAttributeConfigurationRequest.instanceId;
                    xSecurityToken = deleteInstanceAccessControlAttributeConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = deleteInstanceAccessControlAttributeConfigurationRequest['instance_id'];
                    xSecurityToken = deleteInstanceAccessControlAttributeConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteInstanceAccessControlAttributeConfiguration.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回已配置为与指定IAM Identity Center实例的基于属性的访问控制（ABAC）一起使用的IAM Identity Center身份存储属性列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describeInstanceAccessControlAttributeConfiguration(describeInstanceAccessControlAttributeConfigurationRequest?: DescribeInstanceAccessControlAttributeConfigurationRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/access-control-attribute-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (describeInstanceAccessControlAttributeConfigurationRequest !== null && describeInstanceAccessControlAttributeConfigurationRequest !== undefined) {
                if (describeInstanceAccessControlAttributeConfigurationRequest instanceof DescribeInstanceAccessControlAttributeConfigurationRequest) {
                    instanceId = describeInstanceAccessControlAttributeConfigurationRequest.instanceId;
                    xSecurityToken = describeInstanceAccessControlAttributeConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = describeInstanceAccessControlAttributeConfigurationRequest['instance_id'];
                    xSecurityToken = describeInstanceAccessControlAttributeConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describeInstanceAccessControlAttributeConfiguration.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新可与IAM Identity Center实例一起使用的IAM Identity Center身份存储属性，以进行基于属性的访问控制（ABAC）。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateInstanceAccessControlAttributeConfiguration(updateInstanceAccessControlAttributeConfigurationRequest?: UpdateInstanceAccessControlAttributeConfigurationRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/access-control-attribute-configuration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (updateInstanceAccessControlAttributeConfigurationRequest !== null && updateInstanceAccessControlAttributeConfigurationRequest !== undefined) {
                if (updateInstanceAccessControlAttributeConfigurationRequest instanceof UpdateInstanceAccessControlAttributeConfigurationRequest) {
                    instanceId = updateInstanceAccessControlAttributeConfigurationRequest.instanceId;
                    body = updateInstanceAccessControlAttributeConfigurationRequest.body
                    xSecurityToken = updateInstanceAccessControlAttributeConfigurationRequest.xSecurityToken;
                } else {
                    instanceId = updateInstanceAccessControlAttributeConfigurationRequest['instance_id'];
                    body = updateInstanceAccessControlAttributeConfigurationRequest['body'];
                    xSecurityToken = updateInstanceAccessControlAttributeConfigurationRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updateInstanceAccessControlAttributeConfiguration.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询MFA管理配置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getMfaDeviceManagementForIdentityStore(getMfaDeviceManagementForIdentityStoreRequest?: GetMfaDeviceManagementForIdentityStoreRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/mfa-devices/management-settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (getMfaDeviceManagementForIdentityStoreRequest !== null && getMfaDeviceManagementForIdentityStoreRequest !== undefined) {
                if (getMfaDeviceManagementForIdentityStoreRequest instanceof GetMfaDeviceManagementForIdentityStoreRequest) {
                    instanceId = getMfaDeviceManagementForIdentityStoreRequest.instanceId;
                    xSecurityToken = getMfaDeviceManagementForIdentityStoreRequest.xSecurityToken;
                } else {
                    instanceId = getMfaDeviceManagementForIdentityStoreRequest['instance_id'];
                    xSecurityToken = getMfaDeviceManagementForIdentityStoreRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getMfaDeviceManagementForIdentityStore.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设置MFA管理设置信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        putMfaDeviceManagementForIdentityStore(putMfaDeviceManagementForIdentityStoreRequest?: PutMfaDeviceManagementForIdentityStoreRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/mfa-devices/management-settings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (putMfaDeviceManagementForIdentityStoreRequest !== null && putMfaDeviceManagementForIdentityStoreRequest !== undefined) {
                if (putMfaDeviceManagementForIdentityStoreRequest instanceof PutMfaDeviceManagementForIdentityStoreRequest) {
                    instanceId = putMfaDeviceManagementForIdentityStoreRequest.instanceId;
                    xSecurityToken = putMfaDeviceManagementForIdentityStoreRequest.xSecurityToken;
                    body = putMfaDeviceManagementForIdentityStoreRequest.body
                } else {
                    instanceId = putMfaDeviceManagementForIdentityStoreRequest['instance_id'];
                    xSecurityToken = putMfaDeviceManagementForIdentityStoreRequest['X-Security-Token'];
                    body = putMfaDeviceManagementForIdentityStoreRequest['body'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling putMfaDeviceManagementForIdentityStore.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定的权限集中添加系统身份策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachManagedPolicyToPermissionSet(attachManagedPolicyToPermissionSetRequest?: AttachManagedPolicyToPermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/attach-managed-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (attachManagedPolicyToPermissionSetRequest !== null && attachManagedPolicyToPermissionSetRequest !== undefined) {
                if (attachManagedPolicyToPermissionSetRequest instanceof AttachManagedPolicyToPermissionSetRequest) {
                    instanceId = attachManagedPolicyToPermissionSetRequest.instanceId;
                    permissionSetId = attachManagedPolicyToPermissionSetRequest.permissionSetId;
                    body = attachManagedPolicyToPermissionSetRequest.body
                    xSecurityToken = attachManagedPolicyToPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = attachManagedPolicyToPermissionSetRequest['instance_id'];
                    permissionSetId = attachManagedPolicyToPermissionSetRequest['permission_set_id'];
                    body = attachManagedPolicyToPermissionSetRequest['body'];
                    xSecurityToken = attachManagedPolicyToPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachManagedPolicyToPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling attachManagedPolicyToPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将系统策略附加到权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachManagedRoleToPermissionSet(attachManagedRoleToPermissionSetRequest?: AttachManagedRoleToPermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/attach-managed-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (attachManagedRoleToPermissionSetRequest !== null && attachManagedRoleToPermissionSetRequest !== undefined) {
                if (attachManagedRoleToPermissionSetRequest instanceof AttachManagedRoleToPermissionSetRequest) {
                    instanceId = attachManagedRoleToPermissionSetRequest.instanceId;
                    permissionSetId = attachManagedRoleToPermissionSetRequest.permissionSetId;
                    body = attachManagedRoleToPermissionSetRequest.body
                    xSecurityToken = attachManagedRoleToPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = attachManagedRoleToPermissionSetRequest['instance_id'];
                    permissionSetId = attachManagedRoleToPermissionSetRequest['permission_set_id'];
                    body = attachManagedRoleToPermissionSetRequest['body'];
                    xSecurityToken = attachManagedRoleToPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling attachManagedRoleToPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling attachManagedRoleToPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在指定的IAM Identity Center实例中创建一个权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPermissionSet(createPermissionSetRequest?: CreatePermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/permission-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let xSecurityToken;

            if (createPermissionSetRequest !== null && createPermissionSetRequest !== undefined) {
                if (createPermissionSetRequest instanceof CreatePermissionSetRequest) {
                    instanceId = createPermissionSetRequest.instanceId;
                    body = createPermissionSetRequest.body
                    xSecurityToken = createPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = createPermissionSetRequest['instance_id'];
                    body = createPermissionSetRequest['body'];
                    xSecurityToken = createPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling createPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定权限集中的自定义身份策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomPolicyFromPermissionSet(deleteCustomPolicyFromPermissionSetRequest?: DeleteCustomPolicyFromPermissionSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/custom-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (deleteCustomPolicyFromPermissionSetRequest !== null && deleteCustomPolicyFromPermissionSetRequest !== undefined) {
                if (deleteCustomPolicyFromPermissionSetRequest instanceof DeleteCustomPolicyFromPermissionSetRequest) {
                    instanceId = deleteCustomPolicyFromPermissionSetRequest.instanceId;
                    permissionSetId = deleteCustomPolicyFromPermissionSetRequest.permissionSetId;
                    xSecurityToken = deleteCustomPolicyFromPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = deleteCustomPolicyFromPermissionSetRequest['instance_id'];
                    permissionSetId = deleteCustomPolicyFromPermissionSetRequest['permission_set_id'];
                    xSecurityToken = deleteCustomPolicyFromPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteCustomPolicyFromPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling deleteCustomPolicyFromPermissionSet.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定权限集中的自定义策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomRoleFromPermissionSet(deleteCustomRoleFromPermissionSetRequest?: DeleteCustomRoleFromPermissionSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/custom-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (deleteCustomRoleFromPermissionSetRequest !== null && deleteCustomRoleFromPermissionSetRequest !== undefined) {
                if (deleteCustomRoleFromPermissionSetRequest instanceof DeleteCustomRoleFromPermissionSetRequest) {
                    instanceId = deleteCustomRoleFromPermissionSetRequest.instanceId;
                    permissionSetId = deleteCustomRoleFromPermissionSetRequest.permissionSetId;
                    xSecurityToken = deleteCustomRoleFromPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = deleteCustomRoleFromPermissionSetRequest['instance_id'];
                    permissionSetId = deleteCustomRoleFromPermissionSetRequest['permission_set_id'];
                    xSecurityToken = deleteCustomRoleFromPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deleteCustomRoleFromPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling deleteCustomRoleFromPermissionSet.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据权限集ID，删除指定的权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePermissionSet(deletePermissionSetRequest?: DeletePermissionSetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (deletePermissionSetRequest !== null && deletePermissionSetRequest !== undefined) {
                if (deletePermissionSetRequest instanceof DeletePermissionSetRequest) {
                    instanceId = deletePermissionSetRequest.instanceId;
                    permissionSetId = deletePermissionSetRequest.permissionSetId;
                    xSecurityToken = deletePermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = deletePermissionSetRequest['instance_id'];
                    permissionSetId = deletePermissionSetRequest['permission_set_id'];
                    xSecurityToken = deletePermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling deletePermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling deletePermissionSet.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据权限集ID，查询指定权限集的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describePermissionSet(describePermissionSetRequest?: DescribePermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (describePermissionSetRequest !== null && describePermissionSetRequest !== undefined) {
                if (describePermissionSetRequest instanceof DescribePermissionSetRequest) {
                    instanceId = describePermissionSetRequest.instanceId;
                    permissionSetId = describePermissionSetRequest.permissionSetId;
                    xSecurityToken = describePermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = describePermissionSetRequest['instance_id'];
                    permissionSetId = describePermissionSetRequest['permission_set_id'];
                    xSecurityToken = describePermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describePermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling describePermissionSet.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据请求Id，查询权限集预分配状态的详情信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        describePermissionSetProvisioningStatus(describePermissionSetProvisioningStatusRequest?: DescribePermissionSetProvisioningStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/provisioning-status/{request_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let requestId;
            
            let xSecurityToken;

            if (describePermissionSetProvisioningStatusRequest !== null && describePermissionSetProvisioningStatusRequest !== undefined) {
                if (describePermissionSetProvisioningStatusRequest instanceof DescribePermissionSetProvisioningStatusRequest) {
                    instanceId = describePermissionSetProvisioningStatusRequest.instanceId;
                    requestId = describePermissionSetProvisioningStatusRequest.requestId;
                    xSecurityToken = describePermissionSetProvisioningStatusRequest.xSecurityToken;
                } else {
                    instanceId = describePermissionSetProvisioningStatusRequest['instance_id'];
                    requestId = describePermissionSetProvisioningStatusRequest['request_id'];
                    xSecurityToken = describePermissionSetProvisioningStatusRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling describePermissionSetProvisioningStatus.');
            }
            if (requestId === null || requestId === undefined) {
            throw new RequiredError('requestId','Required parameter requestId was null or undefined when calling describePermissionSetProvisioningStatus.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'request_id': requestId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将附加的系统身份策略从指定的权限集中分离。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachManagedPolicyFromPermissionSet(detachManagedPolicyFromPermissionSetRequest?: DetachManagedPolicyFromPermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/detach-managed-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (detachManagedPolicyFromPermissionSetRequest !== null && detachManagedPolicyFromPermissionSetRequest !== undefined) {
                if (detachManagedPolicyFromPermissionSetRequest instanceof DetachManagedPolicyFromPermissionSetRequest) {
                    instanceId = detachManagedPolicyFromPermissionSetRequest.instanceId;
                    permissionSetId = detachManagedPolicyFromPermissionSetRequest.permissionSetId;
                    body = detachManagedPolicyFromPermissionSetRequest.body
                    xSecurityToken = detachManagedPolicyFromPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = detachManagedPolicyFromPermissionSetRequest['instance_id'];
                    permissionSetId = detachManagedPolicyFromPermissionSetRequest['permission_set_id'];
                    body = detachManagedPolicyFromPermissionSetRequest['body'];
                    xSecurityToken = detachManagedPolicyFromPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling detachManagedPolicyFromPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling detachManagedPolicyFromPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将附加的系统策略从指定的权限集中分离。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachManagedRoleFromPermissionSet(detachManagedRoleFromPermissionSetRequest?: DetachManagedRoleFromPermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/detach-managed-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (detachManagedRoleFromPermissionSetRequest !== null && detachManagedRoleFromPermissionSetRequest !== undefined) {
                if (detachManagedRoleFromPermissionSetRequest instanceof DetachManagedRoleFromPermissionSetRequest) {
                    instanceId = detachManagedRoleFromPermissionSetRequest.instanceId;
                    permissionSetId = detachManagedRoleFromPermissionSetRequest.permissionSetId;
                    body = detachManagedRoleFromPermissionSetRequest.body
                    xSecurityToken = detachManagedRoleFromPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = detachManagedRoleFromPermissionSetRequest['instance_id'];
                    permissionSetId = detachManagedRoleFromPermissionSetRequest['permission_set_id'];
                    body = detachManagedRoleFromPermissionSetRequest['body'];
                    xSecurityToken = detachManagedRoleFromPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling detachManagedRoleFromPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling detachManagedRoleFromPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分配给权限集的自定义身份策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getCustomPolicyForPermissionSet(getCustomPolicyForPermissionSetRequest?: GetCustomPolicyForPermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/custom-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (getCustomPolicyForPermissionSetRequest !== null && getCustomPolicyForPermissionSetRequest !== undefined) {
                if (getCustomPolicyForPermissionSetRequest instanceof GetCustomPolicyForPermissionSetRequest) {
                    instanceId = getCustomPolicyForPermissionSetRequest.instanceId;
                    permissionSetId = getCustomPolicyForPermissionSetRequest.permissionSetId;
                    xSecurityToken = getCustomPolicyForPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = getCustomPolicyForPermissionSetRequest['instance_id'];
                    permissionSetId = getCustomPolicyForPermissionSetRequest['permission_set_id'];
                    xSecurityToken = getCustomPolicyForPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getCustomPolicyForPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling getCustomPolicyForPermissionSet.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取分配给权限集的自定义策略。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getCustomRoleForPermissionSet(getCustomRoleForPermissionSetRequest?: GetCustomRoleForPermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/custom-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (getCustomRoleForPermissionSetRequest !== null && getCustomRoleForPermissionSetRequest !== undefined) {
                if (getCustomRoleForPermissionSetRequest instanceof GetCustomRoleForPermissionSetRequest) {
                    instanceId = getCustomRoleForPermissionSetRequest.instanceId;
                    permissionSetId = getCustomRoleForPermissionSetRequest.permissionSetId;
                    xSecurityToken = getCustomRoleForPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = getCustomRoleForPermissionSetRequest['instance_id'];
                    permissionSetId = getCustomRoleForPermissionSetRequest['permission_set_id'];
                    xSecurityToken = getCustomRoleForPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getCustomRoleForPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling getCustomRoleForPermissionSet.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询权限集配额信息。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getPermissionSetSummary(getPermissionSetSummaryRequest?: GetPermissionSetSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-set-summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;
            
            let xSecurityToken;

            if (getPermissionSetSummaryRequest !== null && getPermissionSetSummaryRequest !== undefined) {
                if (getPermissionSetSummaryRequest instanceof GetPermissionSetSummaryRequest) {
                    instanceId = getPermissionSetSummaryRequest.instanceId;
                    xSecurityToken = getPermissionSetSummaryRequest.xSecurityToken;
                } else {
                    instanceId = getPermissionSetSummaryRequest['instance_id'];
                    xSecurityToken = getPermissionSetSummaryRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling getPermissionSetSummary.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询与指定权限集关联的账户列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccountsForProvisionedPermissionSet(listAccountsForProvisionedPermissionSetRequest?: ListAccountsForProvisionedPermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let provisioningStatus;

            if (listAccountsForProvisionedPermissionSetRequest !== null && listAccountsForProvisionedPermissionSetRequest !== undefined) {
                if (listAccountsForProvisionedPermissionSetRequest instanceof ListAccountsForProvisionedPermissionSetRequest) {
                    instanceId = listAccountsForProvisionedPermissionSetRequest.instanceId;
                    permissionSetId = listAccountsForProvisionedPermissionSetRequest.permissionSetId;
                    xSecurityToken = listAccountsForProvisionedPermissionSetRequest.xSecurityToken;
                    limit = listAccountsForProvisionedPermissionSetRequest.limit;
                    marker = listAccountsForProvisionedPermissionSetRequest.marker;
                    provisioningStatus = listAccountsForProvisionedPermissionSetRequest.provisioningStatus;
                } else {
                    instanceId = listAccountsForProvisionedPermissionSetRequest['instance_id'];
                    permissionSetId = listAccountsForProvisionedPermissionSetRequest['permission_set_id'];
                    xSecurityToken = listAccountsForProvisionedPermissionSetRequest['X-Security-Token'];
                    limit = listAccountsForProvisionedPermissionSetRequest['limit'];
                    marker = listAccountsForProvisionedPermissionSetRequest['marker'];
                    provisioningStatus = listAccountsForProvisionedPermissionSetRequest['provisioning_status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAccountsForProvisionedPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling listAccountsForProvisionedPermissionSet.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取附加到指定权限集的系统身份策略列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagedPoliciesInPermissionSet(listManagedPoliciesInPermissionSetRequest?: ListManagedPoliciesInPermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/managed-policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listManagedPoliciesInPermissionSetRequest !== null && listManagedPoliciesInPermissionSetRequest !== undefined) {
                if (listManagedPoliciesInPermissionSetRequest instanceof ListManagedPoliciesInPermissionSetRequest) {
                    instanceId = listManagedPoliciesInPermissionSetRequest.instanceId;
                    permissionSetId = listManagedPoliciesInPermissionSetRequest.permissionSetId;
                    xSecurityToken = listManagedPoliciesInPermissionSetRequest.xSecurityToken;
                    limit = listManagedPoliciesInPermissionSetRequest.limit;
                    marker = listManagedPoliciesInPermissionSetRequest.marker;
                } else {
                    instanceId = listManagedPoliciesInPermissionSetRequest['instance_id'];
                    permissionSetId = listManagedPoliciesInPermissionSetRequest['permission_set_id'];
                    xSecurityToken = listManagedPoliciesInPermissionSetRequest['X-Security-Token'];
                    limit = listManagedPoliciesInPermissionSetRequest['limit'];
                    marker = listManagedPoliciesInPermissionSetRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listManagedPoliciesInPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling listManagedPoliciesInPermissionSet.');
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
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取附加到指定权限集的系统策略列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManagedRolesInPermissionSet(listManagedRolesInPermissionSetRequest?: ListManagedRolesInPermissionSetRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/managed-roles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listManagedRolesInPermissionSetRequest !== null && listManagedRolesInPermissionSetRequest !== undefined) {
                if (listManagedRolesInPermissionSetRequest instanceof ListManagedRolesInPermissionSetRequest) {
                    instanceId = listManagedRolesInPermissionSetRequest.instanceId;
                    permissionSetId = listManagedRolesInPermissionSetRequest.permissionSetId;
                    xSecurityToken = listManagedRolesInPermissionSetRequest.xSecurityToken;
                    limit = listManagedRolesInPermissionSetRequest.limit;
                    marker = listManagedRolesInPermissionSetRequest.marker;
                } else {
                    instanceId = listManagedRolesInPermissionSetRequest['instance_id'];
                    permissionSetId = listManagedRolesInPermissionSetRequest['permission_set_id'];
                    xSecurityToken = listManagedRolesInPermissionSetRequest['X-Security-Token'];
                    limit = listManagedRolesInPermissionSetRequest['limit'];
                    marker = listManagedRolesInPermissionSetRequest['marker'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listManagedRolesInPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling listManagedRolesInPermissionSet.');
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
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例中的权限集预分配状态列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissionSetProvisioningStatus(listPermissionSetProvisioningStatusRequest?: ListPermissionSetProvisioningStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/provisioning-statuses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let status;

            if (listPermissionSetProvisioningStatusRequest !== null && listPermissionSetProvisioningStatusRequest !== undefined) {
                if (listPermissionSetProvisioningStatusRequest instanceof ListPermissionSetProvisioningStatusRequest) {
                    instanceId = listPermissionSetProvisioningStatusRequest.instanceId;
                    xSecurityToken = listPermissionSetProvisioningStatusRequest.xSecurityToken;
                    limit = listPermissionSetProvisioningStatusRequest.limit;
                    marker = listPermissionSetProvisioningStatusRequest.marker;
                    status = listPermissionSetProvisioningStatusRequest.status;
                } else {
                    instanceId = listPermissionSetProvisioningStatusRequest['instance_id'];
                    xSecurityToken = listPermissionSetProvisioningStatusRequest['X-Security-Token'];
                    limit = listPermissionSetProvisioningStatusRequest['limit'];
                    marker = listPermissionSetProvisioningStatusRequest['marker'];
                    status = listPermissionSetProvisioningStatusRequest['status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPermissionSetProvisioningStatus.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定实例下的权限集列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissionSets(listPermissionSetsRequest?: ListPermissionSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let permissionSetId;
            
            let permissionUrn;
            
            let name;

            if (listPermissionSetsRequest !== null && listPermissionSetsRequest !== undefined) {
                if (listPermissionSetsRequest instanceof ListPermissionSetsRequest) {
                    instanceId = listPermissionSetsRequest.instanceId;
                    xSecurityToken = listPermissionSetsRequest.xSecurityToken;
                    limit = listPermissionSetsRequest.limit;
                    marker = listPermissionSetsRequest.marker;
                    permissionSetId = listPermissionSetsRequest.permissionSetId;
                    permissionUrn = listPermissionSetsRequest.permissionUrn;
                    name = listPermissionSetsRequest.name;
                } else {
                    instanceId = listPermissionSetsRequest['instance_id'];
                    xSecurityToken = listPermissionSetsRequest['X-Security-Token'];
                    limit = listPermissionSetsRequest['limit'];
                    marker = listPermissionSetsRequest['marker'];
                    permissionSetId = listPermissionSetsRequest['permission_set_id'];
                    permissionUrn = listPermissionSetsRequest['permission_urn'];
                    name = listPermissionSetsRequest['name'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPermissionSets.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (permissionSetId !== null && permissionSetId !== undefined) {
                localVarQueryParameter['permission_set_id'] = permissionSetId;
            }
            if (permissionUrn !== null && permissionUrn !== undefined) {
                localVarQueryParameter['permission_urn'] = permissionUrn;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询分配给指定账户的权限集列表。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissionSetsProvisionedToAccount(listPermissionSetsProvisionedToAccountRequest?: ListPermissionSetsProvisionedToAccountRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{instance_id}/permission-sets/provisioned-to-accounts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let accountId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;
            
            let provisioningStatus;

            if (listPermissionSetsProvisionedToAccountRequest !== null && listPermissionSetsProvisionedToAccountRequest !== undefined) {
                if (listPermissionSetsProvisionedToAccountRequest instanceof ListPermissionSetsProvisionedToAccountRequest) {
                    instanceId = listPermissionSetsProvisionedToAccountRequest.instanceId;
                    accountId = listPermissionSetsProvisionedToAccountRequest.accountId;
                    xSecurityToken = listPermissionSetsProvisionedToAccountRequest.xSecurityToken;
                    limit = listPermissionSetsProvisionedToAccountRequest.limit;
                    marker = listPermissionSetsProvisionedToAccountRequest.marker;
                    provisioningStatus = listPermissionSetsProvisionedToAccountRequest.provisioningStatus;
                } else {
                    instanceId = listPermissionSetsProvisionedToAccountRequest['instance_id'];
                    accountId = listPermissionSetsProvisionedToAccountRequest['account_id'];
                    xSecurityToken = listPermissionSetsProvisionedToAccountRequest['X-Security-Token'];
                    limit = listPermissionSetsProvisionedToAccountRequest['limit'];
                    marker = listPermissionSetsProvisionedToAccountRequest['marker'];
                    provisioningStatus = listPermissionSetsProvisionedToAccountRequest['provisioning_status'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listPermissionSetsProvisionedToAccount.');
            }
            if (accountId === null || accountId === undefined) {
                throw new RequiredError('accountId','Required parameter accountId was null or undefined when calling listPermissionSetsProvisionedToAccount.');
            }
            if (accountId !== null && accountId !== undefined) {
                localVarQueryParameter['account_id'] = accountId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (provisioningStatus !== null && provisioningStatus !== undefined) {
                localVarQueryParameter['provisioning_status'] = provisioningStatus;
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将指定权限集预分配给指定账户。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        provisionPermissionSet(provisionPermissionSetRequest?: ProvisionPermissionSetRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/provision",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (provisionPermissionSetRequest !== null && provisionPermissionSetRequest !== undefined) {
                if (provisionPermissionSetRequest instanceof ProvisionPermissionSetRequest) {
                    instanceId = provisionPermissionSetRequest.instanceId;
                    permissionSetId = provisionPermissionSetRequest.permissionSetId;
                    body = provisionPermissionSetRequest.body
                    xSecurityToken = provisionPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = provisionPermissionSetRequest['instance_id'];
                    permissionSetId = provisionPermissionSetRequest['permission_set_id'];
                    body = provisionPermissionSetRequest['body'];
                    xSecurityToken = provisionPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling provisionPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling provisionPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将自定义身份策略附加到权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        putCustomPolicyToPermissionSet(putCustomPolicyToPermissionSetRequest?: PutCustomPolicyToPermissionSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/custom-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (putCustomPolicyToPermissionSetRequest !== null && putCustomPolicyToPermissionSetRequest !== undefined) {
                if (putCustomPolicyToPermissionSetRequest instanceof PutCustomPolicyToPermissionSetRequest) {
                    instanceId = putCustomPolicyToPermissionSetRequest.instanceId;
                    permissionSetId = putCustomPolicyToPermissionSetRequest.permissionSetId;
                    body = putCustomPolicyToPermissionSetRequest.body
                    xSecurityToken = putCustomPolicyToPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = putCustomPolicyToPermissionSetRequest['instance_id'];
                    permissionSetId = putCustomPolicyToPermissionSetRequest['permission_set_id'];
                    body = putCustomPolicyToPermissionSetRequest['body'];
                    xSecurityToken = putCustomPolicyToPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling putCustomPolicyToPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling putCustomPolicyToPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将自定义策略附加到权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        putCustomRoleToPermissionSet(putCustomRoleToPermissionSetRequest?: PutCustomRoleToPermissionSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}/custom-role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (putCustomRoleToPermissionSetRequest !== null && putCustomRoleToPermissionSetRequest !== undefined) {
                if (putCustomRoleToPermissionSetRequest instanceof PutCustomRoleToPermissionSetRequest) {
                    instanceId = putCustomRoleToPermissionSetRequest.instanceId;
                    permissionSetId = putCustomRoleToPermissionSetRequest.permissionSetId;
                    body = putCustomRoleToPermissionSetRequest.body
                    xSecurityToken = putCustomRoleToPermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = putCustomRoleToPermissionSetRequest['instance_id'];
                    permissionSetId = putCustomRoleToPermissionSetRequest['permission_set_id'];
                    body = putCustomRoleToPermissionSetRequest['body'];
                    xSecurityToken = putCustomRoleToPermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling putCustomRoleToPermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling putCustomRoleToPermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据权限集ID，更新指定权限集的属性。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePermissionSet(updatePermissionSetRequest?: UpdatePermissionSetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/instances/{instance_id}/permission-sets/{permission_set_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;
            
            let permissionSetId;
            
            let xSecurityToken;

            if (updatePermissionSetRequest !== null && updatePermissionSetRequest !== undefined) {
                if (updatePermissionSetRequest instanceof UpdatePermissionSetRequest) {
                    instanceId = updatePermissionSetRequest.instanceId;
                    permissionSetId = updatePermissionSetRequest.permissionSetId;
                    body = updatePermissionSetRequest.body
                    xSecurityToken = updatePermissionSetRequest.xSecurityToken;
                } else {
                    instanceId = updatePermissionSetRequest['instance_id'];
                    permissionSetId = updatePermissionSetRequest['permission_set_id'];
                    body = updatePermissionSetRequest['body'];
                    xSecurityToken = updatePermissionSetRequest['X-Security-Token'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling updatePermissionSet.');
            }
            if (permissionSetId === null || permissionSetId === undefined) {
            throw new RequiredError('permissionSetId','Required parameter permissionSetId was null or undefined when calling updatePermissionSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'instance_id': instanceId,'permission_set_id': permissionSetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向指定的资源添加一个或多个标签。目前，您可以将标签附加到实例中的权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTagResource(createTagResourceRequest?: CreateTagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let xSecurityToken;

            if (createTagResourceRequest !== null && createTagResourceRequest !== undefined) {
                if (createTagResourceRequest instanceof CreateTagResourceRequest) {
                    resourceType = createTagResourceRequest.resourceType;
                    resourceId = createTagResourceRequest.resourceId;
                    body = createTagResourceRequest.body
                    xSecurityToken = createTagResourceRequest.xSecurityToken;
                } else {
                    resourceType = createTagResourceRequest['resource_type'];
                    resourceId = createTagResourceRequest['resource_id'];
                    body = createTagResourceRequest['body'];
                    xSecurityToken = createTagResourceRequest['X-Security-Token'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTagResource.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从指定资源中删除具有指定主键的任何标签。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTagResource(deleteTagResourceRequest?: DeleteTagResourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/instances/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let xSecurityToken;

            if (deleteTagResourceRequest !== null && deleteTagResourceRequest !== undefined) {
                if (deleteTagResourceRequest instanceof DeleteTagResourceRequest) {
                    resourceType = deleteTagResourceRequest.resourceType;
                    resourceId = deleteTagResourceRequest.resourceId;
                    body = deleteTagResourceRequest.body
                    xSecurityToken = deleteTagResourceRequest.xSecurityToken;
                } else {
                    resourceType = deleteTagResourceRequest['resource_type'];
                    resourceId = deleteTagResourceRequest['resource_id'];
                    body = deleteTagResourceRequest['body'];
                    xSecurityToken = deleteTagResourceRequest['X-Security-Token'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTagResource.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTagResource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xSecurityToken !== undefined && xSecurityToken !== null) {
                localVarHeaderParameter['X-Security-Token'] = String(xSecurityToken);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出绑定到指定资源的标签。您可以将标签附加到实例中的权限集。此操作只能由组织的管理账号或作为服务委托管理员的成员账号调用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagResources(listTagResourcesRequest?: ListTagResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/instances/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceType;
            
            let resourceId;
            
            let xSecurityToken;
            
            let limit;
            
            let marker;

            if (listTagResourcesRequest !== null && listTagResourcesRequest !== undefined) {
                if (listTagResourcesRequest instanceof ListTagResourcesRequest) {
                    resourceType = listTagResourcesRequest.resourceType;
                    resourceId = listTagResourcesRequest.resourceId;
                    xSecurityToken = listTagResourcesRequest.xSecurityToken;
                    limit = listTagResourcesRequest.limit;
                    marker = listTagResourcesRequest.marker;
                } else {
                    resourceType = listTagResourcesRequest['resource_type'];
                    resourceId = listTagResourcesRequest['resource_id'];
                    xSecurityToken = listTagResourcesRequest['X-Security-Token'];
                    limit = listTagResourcesRequest['limit'];
                    marker = listTagResourcesRequest['marker'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listTagResources.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listTagResources.');
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
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IdentityCenterClient {
    return new IdentityCenterClient(client);
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