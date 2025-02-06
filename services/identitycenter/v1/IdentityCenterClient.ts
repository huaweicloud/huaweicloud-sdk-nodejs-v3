import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessControlAttributeDto } from './model/AccessControlAttributeDto';
import { AccessControlAttributeValueDto } from './model/AccessControlAttributeValueDto';
import { AccountAssignmentDto } from './model/AccountAssignmentDto';
import { AccountAssignmentOperationStatusDto } from './model/AccountAssignmentOperationStatusDto';
import { AccountAssignmentOperationStatusMetadataDto } from './model/AccountAssignmentOperationStatusMetadataDto';
import { AttachManagedPolicyToPermissionSetReqBody } from './model/AttachManagedPolicyToPermissionSetReqBody';
import { AttachManagedPolicyToPermissionSetRequest } from './model/AttachManagedPolicyToPermissionSetRequest';
import { AttachManagedPolicyToPermissionSetResponse } from './model/AttachManagedPolicyToPermissionSetResponse';
import { AttachManagedRoleToPermissionSetRequest } from './model/AttachManagedRoleToPermissionSetRequest';
import { AttachManagedRoleToPermissionSetResponse } from './model/AttachManagedRoleToPermissionSetResponse';
import { AttachedManagedPolicyDto } from './model/AttachedManagedPolicyDto';
import { CreateAccountAssignmentReqBody } from './model/CreateAccountAssignmentReqBody';
import { CreateAccountAssignmentRequest } from './model/CreateAccountAssignmentRequest';
import { CreateAccountAssignmentResponse } from './model/CreateAccountAssignmentResponse';
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
import { DeleteCustomPolicyFromPermissionSetRequest } from './model/DeleteCustomPolicyFromPermissionSetRequest';
import { DeleteCustomPolicyFromPermissionSetResponse } from './model/DeleteCustomPolicyFromPermissionSetResponse';
import { DeleteCustomRoleFromPermissionSetRequest } from './model/DeleteCustomRoleFromPermissionSetRequest';
import { DeleteCustomRoleFromPermissionSetResponse } from './model/DeleteCustomRoleFromPermissionSetResponse';
import { DeleteInstanceAccessControlAttributeConfigurationRequest } from './model/DeleteInstanceAccessControlAttributeConfigurationRequest';
import { DeleteInstanceAccessControlAttributeConfigurationResponse } from './model/DeleteInstanceAccessControlAttributeConfigurationResponse';
import { DeletePermissionSetRequest } from './model/DeletePermissionSetRequest';
import { DeletePermissionSetResponse } from './model/DeletePermissionSetResponse';
import { DeleteTagDto } from './model/DeleteTagDto';
import { DeleteTagResourceReqBody } from './model/DeleteTagResourceReqBody';
import { DeleteTagResourceRequest } from './model/DeleteTagResourceRequest';
import { DeleteTagResourceResponse } from './model/DeleteTagResourceResponse';
import { DescribeAccountAssignmentCreationStatusRequest } from './model/DescribeAccountAssignmentCreationStatusRequest';
import { DescribeAccountAssignmentCreationStatusResponse } from './model/DescribeAccountAssignmentCreationStatusResponse';
import { DescribeAccountAssignmentDeletionStatusRequest } from './model/DescribeAccountAssignmentDeletionStatusRequest';
import { DescribeAccountAssignmentDeletionStatusResponse } from './model/DescribeAccountAssignmentDeletionStatusResponse';
import { DescribeInstanceAccessControlAttributeConfigurationRequest } from './model/DescribeInstanceAccessControlAttributeConfigurationRequest';
import { DescribeInstanceAccessControlAttributeConfigurationResponse } from './model/DescribeInstanceAccessControlAttributeConfigurationResponse';
import { DescribePermissionSetProvisioningStatusRequest } from './model/DescribePermissionSetProvisioningStatusRequest';
import { DescribePermissionSetProvisioningStatusResponse } from './model/DescribePermissionSetProvisioningStatusResponse';
import { DescribePermissionSetRequest } from './model/DescribePermissionSetRequest';
import { DescribePermissionSetResponse } from './model/DescribePermissionSetResponse';
import { DetachManagedPolicyFromPermissionSetReqBody } from './model/DetachManagedPolicyFromPermissionSetReqBody';
import { DetachManagedPolicyFromPermissionSetRequest } from './model/DetachManagedPolicyFromPermissionSetRequest';
import { DetachManagedPolicyFromPermissionSetResponse } from './model/DetachManagedPolicyFromPermissionSetResponse';
import { DetachManagedRoleFromPermissionSetRequest } from './model/DetachManagedRoleFromPermissionSetRequest';
import { DetachManagedRoleFromPermissionSetResponse } from './model/DetachManagedRoleFromPermissionSetResponse';
import { GetCustomPolicyForPermissionSetRequest } from './model/GetCustomPolicyForPermissionSetRequest';
import { GetCustomPolicyForPermissionSetResponse } from './model/GetCustomPolicyForPermissionSetResponse';
import { GetCustomRoleForPermissionSetRequest } from './model/GetCustomRoleForPermissionSetRequest';
import { GetCustomRoleForPermissionSetResponse } from './model/GetCustomRoleForPermissionSetResponse';
import { InstanceAccessControlAttributeConfigurationDto } from './model/InstanceAccessControlAttributeConfigurationDto';
import { InstanceMetadataEntryDto } from './model/InstanceMetadataEntryDto';
import { ListAccountAssignmentCreationStatusRequest } from './model/ListAccountAssignmentCreationStatusRequest';
import { ListAccountAssignmentCreationStatusResponse } from './model/ListAccountAssignmentCreationStatusResponse';
import { ListAccountAssignmentDeletionStatusRequest } from './model/ListAccountAssignmentDeletionStatusRequest';
import { ListAccountAssignmentDeletionStatusResponse } from './model/ListAccountAssignmentDeletionStatusResponse';
import { ListAccountAssignmentsRequest } from './model/ListAccountAssignmentsRequest';
import { ListAccountAssignmentsResponse } from './model/ListAccountAssignmentsResponse';
import { ListAccountsForProvisionedPermissionSetRequest } from './model/ListAccountsForProvisionedPermissionSetRequest';
import { ListAccountsForProvisionedPermissionSetResponse } from './model/ListAccountsForProvisionedPermissionSetResponse';
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
import { ListTagResourcesRequest } from './model/ListTagResourcesRequest';
import { ListTagResourcesResponse } from './model/ListTagResourcesResponse';
import { PageInfoDto } from './model/PageInfoDto';
import { PermissionSetDto } from './model/PermissionSetDto';
import { PermissionSetProvisioningStatusDto } from './model/PermissionSetProvisioningStatusDto';
import { PermissionSetProvisioningStatusMetadataDto } from './model/PermissionSetProvisioningStatusMetadataDto';
import { ProvisionPermissionSetReqBody } from './model/ProvisionPermissionSetReqBody';
import { ProvisionPermissionSetRequest } from './model/ProvisionPermissionSetRequest';
import { ProvisionPermissionSetResponse } from './model/ProvisionPermissionSetResponse';
import { PutCustomPolicyToPermissionSetReqBody } from './model/PutCustomPolicyToPermissionSetReqBody';
import { PutCustomPolicyToPermissionSetRequest } from './model/PutCustomPolicyToPermissionSetRequest';
import { PutCustomPolicyToPermissionSetResponse } from './model/PutCustomPolicyToPermissionSetResponse';
import { PutCustomRoleToPermissionSetReqBody } from './model/PutCustomRoleToPermissionSetReqBody';
import { PutCustomRoleToPermissionSetRequest } from './model/PutCustomRoleToPermissionSetRequest';
import { PutCustomRoleToPermissionSetResponse } from './model/PutCustomRoleToPermissionSetResponse';
import { ResourceAttachManagedPolicyToPermissionSetReqBody } from './model/ResourceAttachManagedPolicyToPermissionSetReqBody';
import { ResourceAttachedManagedPolicyDto } from './model/ResourceAttachedManagedPolicyDto';
import { ResourceDetachManagedPolicyFromPermissionSetReqBody } from './model/ResourceDetachManagedPolicyFromPermissionSetReqBody';
import { TagDto } from './model/TagDto';
import { TagResourceReqBody } from './model/TagResourceReqBody';
import { UpdateInstanceAccessControlAttributeConfigurationReqBody } from './model/UpdateInstanceAccessControlAttributeConfigurationReqBody';
import { UpdateInstanceAccessControlAttributeConfigurationRequest } from './model/UpdateInstanceAccessControlAttributeConfigurationRequest';
import { UpdateInstanceAccessControlAttributeConfigurationResponse } from './model/UpdateInstanceAccessControlAttributeConfigurationResponse';
import { UpdatePermissionSetReqBody } from './model/UpdatePermissionSetReqBody';
import { UpdatePermissionSetRequest } from './model/UpdatePermissionSetRequest';
import { UpdatePermissionSetResponse } from './model/UpdatePermissionSetResponse';

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
     * 使用指定的权限集为指定账号分配对应主体的访问权限，主体可为IAM身份中心用户或用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建账号分配
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 使用指定的权限集从指定的账号删除主体的访问权限，主体可为IAM身份中心用户或用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除账号分配
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 根据请求ID，查询指定IAM身份中心实例下的账号分配创建状态详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号分配创建状态详情
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 根据请求ID，查询指定IAM身份中心实例下的账号分配删除状态详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号分配删除状态详情
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 查询指定IAM身份中心实例下的账号分配的创建状态列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账号分配创建状态
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED'} [status] 根据传递的属性值过滤操作状态列表
     * @param {number} [limit] 每个请求返回的最大结果数
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
     * 查询指定IAM身份中心实例下的账号分配的删除状态列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账号分配删除状态
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {'IN_PROGRESS' | 'SUCCEEDED' | 'FAILED'} [status] 根据传递的属性值过滤操作状态列表
     * @param {number} [limit] 每个请求返回的最大结果数
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
     * 列出与指定账号以及指定权限集关联的用户或用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出账号和权限集关联的用户或用户组
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} accountId 账号的唯一身份标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [marker] 分页标记
     * @param {string} [permissionSetId] 指定权限集的唯一身份标识.
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
     * 查询IAM身份中心的实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出实例
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
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
     * 启用指定实例的访问控制功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用指定实例的访问控制功能
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 禁用指定IAM身份中心实例的基于属性的访问控制（ABAC）功能，并删除已配置的所有属性映射。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解除指定实例的访问控制属性配置
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 返回已配置为与指定IAM身份中心实例的基于属性的访问控制（ABAC）一起使用的IAM身份中心身份源属性列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定实例的访问控制属性配置
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 更新可与IAM身份中心实例一起使用的IAM身份中心身份源属性，以进行基于属性的访问控制（ABAC）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定实例的访问控制属性配置
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 在指定的权限集中添加系统身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加系统身份策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 在指定的IAM身份中心实例中创建一个权限集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 删除指定权限集中的自定义身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义身份策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 删除指定权限集中的自定义策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定权限集中的自定义策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 根据权限集ID，删除指定的权限集。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 根据权限集ID，查询指定权限集的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集详情
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 根据请求ID，查询权限集预分配状态的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询权限集预分配状态详情
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 删除指定权限集中的系统身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除系统身份策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 查询指定权限集中的自定义身份策略详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义身份策略详情
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 获取分配给权限集的自定义策略
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取分配给权限集的自定义策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 查询与指定权限集关联的账号列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集关联的账号
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [marker] 分页标记
     * @param {'LATEST_PERMISSION_SET_PROVISIONED' | 'LATEST_PERMISSION_SET_NOT_PROVISIONED'} [provisioningStatus] 权限集分配状态.
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
     * 获取添加到指定权限集中的系统身份策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出系统身份策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
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
     * 查询指定实例中的权限集预分配状态列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集预分配状态
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
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
     * 查询指定实例下的权限集列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
     * @param {string} [marker] 分页标记
     * @param {string} [permissionSetId] 权限集的全局唯一标识符（ID）
     * @param {string} [permissionUrn] 权限集urn
     * @param {string} [name] 权限集名称
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
     * 查询分配给指定账号的权限集列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出分配给账号的权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} accountId 账号的唯一身份标识
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
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
     * 将指定权限集预分配给指定账号。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预分配权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 在指定的权限集中添加自定义身份策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加自定义身份策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 将自定义策略附加到权限集
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将自定义策略附加到权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 根据权限集ID，更新指定权限集的属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新权限集
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 给指定的资源添加一个或多个标签。当前支持为权限集添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 为指定资源添加标签
     * @param {'identitycenter:permissionset'} resourceType 资源类型 identitycenter:permissionset（权限集）
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
     * 从指定资源中删除指定的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定资源的指定标签
     * @param {'identitycenter:permissionset'} resourceType 资源类型 identitycenter:permissionset（权限集）
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
     * 列出绑定到指定资源的标签。当前支持为权限集添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出绑定到指定资源的标签
     * @param {'identitycenter:permissionset'} resourceType 资源类型 identitycenter:permissionset（权限集）
     * @param {string} resourceId 权限集的唯一标识符（ID）。
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
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

    /**
     * 在指定的权限集中添加系统策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加系统策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 删除指定权限集中的系统策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除系统策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
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
     * 获取添加到指定权限集中的系统策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出系统策略
     * @param {string} instanceId IAM身份中心实例的全局唯一标识符（ID）。
     * @param {string} permissionSetId 权限集的全局唯一标识符（ID）
     * @param {string} [xSecurityToken] 如果正在使用临时安全凭据，则此header是必需的，该值是临时安全凭据的安全令牌（会话令牌）。
     * @param {number} [limit] 每个请求返回的最大结果数
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
}

export const ParamCreater = function () {
    return {
    
        /**
         * 使用指定的权限集为指定账号分配对应主体的访问权限，主体可为IAM身份中心用户或用户组。
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
         * 使用指定的权限集从指定的账号删除主体的访问权限，主体可为IAM身份中心用户或用户组。
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
         * 根据请求ID，查询指定IAM身份中心实例下的账号分配创建状态详情信息。
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
         * 根据请求ID，查询指定IAM身份中心实例下的账号分配删除状态详情信息。
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
         * 查询指定IAM身份中心实例下的账号分配的创建状态列表。
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
         * 查询指定IAM身份中心实例下的账号分配的删除状态列表。
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
         * 列出与指定账号以及指定权限集关联的用户或用户组。
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
         * 查询IAM身份中心的实例列表。
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
         * 启用指定实例的访问控制功能。
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
         * 禁用指定IAM身份中心实例的基于属性的访问控制（ABAC）功能，并删除已配置的所有属性映射。
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
         * 返回已配置为与指定IAM身份中心实例的基于属性的访问控制（ABAC）一起使用的IAM身份中心身份源属性列表。
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
         * 更新可与IAM身份中心实例一起使用的IAM身份中心身份源属性，以进行基于属性的访问控制（ABAC）。
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
         * 在指定的权限集中添加系统身份策略。
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
         * 在指定的IAM身份中心实例中创建一个权限集。
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
         * 删除指定权限集中的自定义身份策略。
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
         * 删除指定权限集中的自定义策略
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
         * 根据权限集ID，删除指定的权限集。
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
         * 根据权限集ID，查询指定权限集的详情信息。
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
         * 根据请求ID，查询权限集预分配状态的详情信息。
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
         * 删除指定权限集中的系统身份策略。
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
         * 查询指定权限集中的自定义身份策略详情。
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
         * 获取分配给权限集的自定义策略
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
         * 查询与指定权限集关联的账号列表。
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
         * 获取添加到指定权限集中的系统身份策略列表。
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
         * 查询指定实例中的权限集预分配状态列表。
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
         * 查询指定实例下的权限集列表。
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
         * 查询分配给指定账号的权限集列表。
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
         * 将指定权限集预分配给指定账号。
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
         * 在指定的权限集中添加自定义身份策略。
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
         * 将自定义策略附加到权限集
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
         * 根据权限集ID，更新指定权限集的属性。
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
         * 给指定的资源添加一个或多个标签。当前支持为权限集添加标签。
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
         * 从指定资源中删除指定的标签。
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
         * 列出绑定到指定资源的标签。当前支持为权限集添加标签。
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
    
        /**
         * 在指定的权限集中添加系统策略。
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
         * 删除指定权限集中的系统策略。
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
         * 获取添加到指定权限集中的系统策略列表。
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