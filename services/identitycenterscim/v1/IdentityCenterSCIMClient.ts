import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddressItemDto } from './model/AddressItemDto';
import { AuthenticationSchemeItemDto } from './model/AuthenticationSchemeItemDto';
import { BulkDto } from './model/BulkDto';
import { ChangePasswordDto } from './model/ChangePasswordDto';
import { CreateGroupReqBody } from './model/CreateGroupReqBody';
import { CreateGroupRequest } from './model/CreateGroupRequest';
import { CreateGroupResponse } from './model/CreateGroupResponse';
import { CreateUserReqBody } from './model/CreateUserReqBody';
import { CreateUserRequest } from './model/CreateUserRequest';
import { CreateUserResponse } from './model/CreateUserResponse';
import { DeleteGroupRequest } from './model/DeleteGroupRequest';
import { DeleteGroupResponse } from './model/DeleteGroupResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { EmailItemDto } from './model/EmailItemDto';
import { EnterpriseDto } from './model/EnterpriseDto';
import { EtagDto } from './model/EtagDto';
import { FilterDto } from './model/FilterDto';
import { GetGroupRequest } from './model/GetGroupRequest';
import { GetGroupResp } from './model/GetGroupResp';
import { GetGroupResponse } from './model/GetGroupResponse';
import { GetUserRequest } from './model/GetUserRequest';
import { GetUserResp } from './model/GetUserResp';
import { GetUserResponse } from './model/GetUserResponse';
import { ListGroupsRequest } from './model/ListGroupsRequest';
import { ListGroupsResponse } from './model/ListGroupsResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { ManagerDto } from './model/ManagerDto';
import { MemberItemDto } from './model/MemberItemDto';
import { MetaDto } from './model/MetaDto';
import { NameDto } from './model/NameDto';
import { OperationItemDto } from './model/OperationItemDto';
import { PatchDto } from './model/PatchDto';
import { PatchGroupReqBody } from './model/PatchGroupReqBody';
import { PatchGroupRequest } from './model/PatchGroupRequest';
import { PatchGroupResponse } from './model/PatchGroupResponse';
import { PatchUserReqBody } from './model/PatchUserReqBody';
import { PatchUserRequest } from './model/PatchUserRequest';
import { PatchUserResponse } from './model/PatchUserResponse';
import { PhoneNumberItemDto } from './model/PhoneNumberItemDto';
import { PutUserRequest } from './model/PutUserRequest';
import { PutUserResponse } from './model/PutUserResponse';
import { ServiceProviderConfigRequest } from './model/ServiceProviderConfigRequest';
import { ServiceProviderConfigResponse } from './model/ServiceProviderConfigResponse';
import { SortDto } from './model/SortDto';
import { UpdateUserReqBody } from './model/UpdateUserReqBody';

export class IdentityCenterSCIMClient {
    public static newBuilder(): ClientBuilder<IdentityCenterSCIMClient> {
            let client = new ClientBuilder<IdentityCenterSCIMClient>(newClient, 'IdentityCenterSCIMCredentials');
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
     * 使用SCIM协议，同步用户组到IAM身份中心。
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - displayName、schemas为必填项
     * - 在单个请求中最多可以添加100个成员
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户组
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {CreateGroupReqBody} [createGroupReqBody] 
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
     * 删除现有用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户组
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} groupId 用户组的全局唯一标识符（ID）
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
     * 查询现有用户组的详情信息。
     * 暂不支持
     * IAM身份中心暂不支持此API操作的以下方面。
     * - 查询用户组详情接口和列出用户组接口返回空成员列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组详情
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} groupId 用户组的全局唯一标识符（ID）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getGroup(getGroupRequest?: GetGroupRequest): Promise<GetGroupResponse> {
        const options = ParamCreater().getGroup(getGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对现有用户组列表执行筛选查询，最多只能返回50个结果。
     * 暂不支持
     * IAM身份中心暂不支持此API操作的以下方面。
     * - 查询用户组详情接口和列出用户组接口返回空成员列表
     * 
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - 目前，列出用户组接口最多只能返回50个结果
     * - 支持的筛选器组合：(displayName)、(id)。请注意，使用id作为单个过滤器虽然有效，但应避免使用，因为已经有一个查询用户组详情接口可用
     * - 过滤器中支持的比较运算符：eq
     * - 必须按如下方式指定筛选器：&lt;filterAttribute&gt; eq \&quot;&lt;filterValue&gt;\&quot;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户组
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
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
     * 修改现有用户组的部分属性，和管理用户组中的用户。
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - 请求中只允许使用displayName、 members和externalId属性
     * - 单个请求中最多允许100个成员更改
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部分更新用户组
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} groupId 用户组的全局唯一标识符（ID）
     * @param {PatchGroupReqBody} [patchGroupReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchGroup(patchGroupRequest?: PatchGroupRequest): Promise<PatchGroupResponse> {
        const options = ParamCreater().patchGroup(patchGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询IAM身份中心的SCIM相关配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务提供商配置
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public serviceProviderConfig(serviceProviderConfigRequest?: ServiceProviderConfigRequest): Promise<ServiceProviderConfigResponse> {
        const options = ParamCreater().serviceProviderConfig(serviceProviderConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用SCIM协议，同步用户到IAM身份中心。
     * 暂不支持
     * IAM身份中心暂不支持此API操作的以下方面。
     * - ims、photos、x509Certificates、entitlements和password属性
     * - manager的displayName子属性
     * - emails、addresses和phoneNumbers的display子属性
     * 
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - 必须填写userName、displayName、schemas属性，name属性中的familyName、givenName子属性，emails属性中的value、primary、type子属性
     * - addresses可以包含字母、重音字符、符号、数字、标点符号、空格（正常和不换行）
     * - 我们不支持多值属性中的多个值（例如emails,addresses,phoneNumbers）。只允许单个值
     * - emails属性值必须标记为primary
     * - 不能指定groups字段
     * - userName字段可以包含字母、数字和部分符号_+&#x3D;,.@-
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建用户
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {CreateUserReqBody} [createUserReqBody] 
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
     * 删除现有用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} userId 用户的全局唯一标识符（ID）
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
     * 查询现有用户的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户详情
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} userId 用户的全局唯一标识符（ID）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public getUser(getUserRequest?: GetUserRequest): Promise<GetUserResponse> {
        const options = ParamCreater().getUser(getUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对现有用户列表执行筛选查询，最多只能返回50个结果。
     * 暂不支持
     * IAM身份中心不支持此API操作的以下方面。
     * - startIndex,attributes,excludedAttributes（虽在SCIM协议中列出）
     * 
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - 目前，列出用户接口最多只能返回50个结果
     * - 支持的筛选器组合：(userName)、(id)。请注意，使用id作为单个过滤器虽然有效，但应避免使用，因为已经有一个查询用户详情接口可用
     * - 过滤器中支持的比较运算符：eq
     * - 必须按如下方式指定筛选器：&lt;filterAttribute&gt; eq \&quot;&lt;filterValue&gt;\&quot;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出用户
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
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
     * 修改现有用户的部分属性。
     * 暂不支持
     * IAM身份中心暂不支持此API操作的以下方面。
     * - 对userName或active属性执行多个PATCH操作
     * - ims、photos、x509Certificates、entitlements和password属性
     * - manager的displayName子属性
     * - emails、addresses和phoneNumbers的display子属性
     * 
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - 支持的操作是add、replace和remove
     * - 必须指定操作
     * - remove操作需要指定属性路径
     * - add和replace操作需要指定属性的值
     * - 仅允许修改userName、active、externalId、displayName、nickName、profileUrl、title、userType、preferredLanguage、locale、timezone、name、enterprise、emails、addresses和phoneNumbers属性
     * - 过滤器中仅支持eq运算符
     * - userName或active属性不支持remove操作
     * - 我们不支持多值属性中的多个值（例如emails,addresses,phoneNumbers）。这些属性中的每一个都只允许有一个值
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部分更新用户
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} userId 用户的全局唯一标识符（ID）
     * @param {PatchUserReqBody} [patchUserReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public patchUser(patchUserRequest?: PatchUserRequest): Promise<PatchUserResponse> {
        const options = ParamCreater().patchUser(patchUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新现有用户。
     * 暂不支持
     * IAM身份中心暂不支持此API操作的以下方面。
     * - ims、photos、x509Certificates、entitlements和password属性
     * - manager的displayName子属性
     * - emails、addresses和phoneNumbers的display子属性
     * 
     * 约束条件
     * IAM身份中心对此API操作具有以下约束。
     * - 必须填写userName、displayName、schemas属性，name属性中的familyName、givenName子属性，emails属性中的value、primary、type子属性
     * - addresses可以包含字母、重音字符、符号、数字、标点符号、空格（正常和不换行）
     * - 我们不支持多值属性中的多个值（例如emails,addresses,phoneNumbers）
     * - emails属性值必须标记为primary
     * - 不能指定groups属性
     * - userName字段可以包含字母、数字和部分符号_+&#x3D;,.@-
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户
     * @param {string} authorization 承载令牌
     * @param {string} tenantId 租户的全局唯一标识符（ID）
     * @param {string} userId 用户的全局唯一标识符（ID）
     * @param {UpdateUserReqBody} [updateUserReqBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putUser(putUserRequest?: PutUserRequest): Promise<PutUserResponse> {
        const options = ParamCreater().putUser(putUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 使用SCIM协议，同步用户组到IAM身份中心。
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - displayName、schemas为必填项
         * - 在单个请求中最多可以添加100个成员
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroup(createGroupRequest?: CreateGroupRequest) {
            const options = {
                method: "POST",
                url: "/{tenant_id}/scim/v2/Groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let tenantId;

            if (createGroupRequest !== null && createGroupRequest !== undefined) {
                if (createGroupRequest instanceof CreateGroupRequest) {
                    authorization = createGroupRequest.authorization;
                    tenantId = createGroupRequest.tenantId;
                    body = createGroupRequest.body
                } else {
                    authorization = createGroupRequest['Authorization'];
                    tenantId = createGroupRequest['tenant_id'];
                    body = createGroupRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling createGroup.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除现有用户组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroup(deleteGroupRequest?: DeleteGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/{tenant_id}/scim/v2/Groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;
            
            let groupId;

            if (deleteGroupRequest !== null && deleteGroupRequest !== undefined) {
                if (deleteGroupRequest instanceof DeleteGroupRequest) {
                    authorization = deleteGroupRequest.authorization;
                    tenantId = deleteGroupRequest.tenantId;
                    groupId = deleteGroupRequest.groupId;
                } else {
                    authorization = deleteGroupRequest['Authorization'];
                    tenantId = deleteGroupRequest['tenant_id'];
                    groupId = deleteGroupRequest['group_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling deleteGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGroup.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询现有用户组的详情信息。
         * 暂不支持
         * IAM身份中心暂不支持此API操作的以下方面。
         * - 查询用户组详情接口和列出用户组接口返回空成员列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getGroup(getGroupRequest?: GetGroupRequest) {
            const options = {
                method: "GET",
                url: "/{tenant_id}/scim/v2/Groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;
            
            let groupId;

            if (getGroupRequest !== null && getGroupRequest !== undefined) {
                if (getGroupRequest instanceof GetGroupRequest) {
                    authorization = getGroupRequest.authorization;
                    tenantId = getGroupRequest.tenantId;
                    groupId = getGroupRequest.groupId;
                } else {
                    authorization = getGroupRequest['Authorization'];
                    tenantId = getGroupRequest['tenant_id'];
                    groupId = getGroupRequest['group_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling getGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling getGroup.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对现有用户组列表执行筛选查询，最多只能返回50个结果。
         * 暂不支持
         * IAM身份中心暂不支持此API操作的以下方面。
         * - 查询用户组详情接口和列出用户组接口返回空成员列表
         * 
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - 目前，列出用户组接口最多只能返回50个结果
         * - 支持的筛选器组合：(displayName)、(id)。请注意，使用id作为单个过滤器虽然有效，但应避免使用，因为已经有一个查询用户组详情接口可用
         * - 过滤器中支持的比较运算符：eq
         * - 必须按如下方式指定筛选器：&lt;filterAttribute&gt; eq \&quot;&lt;filterValue&gt;\&quot;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGroups(listGroupsRequest?: ListGroupsRequest) {
            const options = {
                method: "GET",
                url: "/{tenant_id}/scim/v2/Groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;

            if (listGroupsRequest !== null && listGroupsRequest !== undefined) {
                if (listGroupsRequest instanceof ListGroupsRequest) {
                    authorization = listGroupsRequest.authorization;
                    tenantId = listGroupsRequest.tenantId;
                } else {
                    authorization = listGroupsRequest['Authorization'];
                    tenantId = listGroupsRequest['tenant_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listGroups.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改现有用户组的部分属性，和管理用户组中的用户。
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - 请求中只允许使用displayName、 members和externalId属性
         * - 单个请求中最多允许100个成员更改
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        patchGroup(patchGroupRequest?: PatchGroupRequest) {
            const options = {
                method: "PATCH",
                url: "/{tenant_id}/scim/v2/Groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let tenantId;
            
            let groupId;

            if (patchGroupRequest !== null && patchGroupRequest !== undefined) {
                if (patchGroupRequest instanceof PatchGroupRequest) {
                    authorization = patchGroupRequest.authorization;
                    tenantId = patchGroupRequest.tenantId;
                    groupId = patchGroupRequest.groupId;
                    body = patchGroupRequest.body
                } else {
                    authorization = patchGroupRequest['Authorization'];
                    tenantId = patchGroupRequest['tenant_id'];
                    groupId = patchGroupRequest['group_id'];
                    body = patchGroupRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling patchGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling patchGroup.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询IAM身份中心的SCIM相关配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        serviceProviderConfig(serviceProviderConfigRequest?: ServiceProviderConfigRequest) {
            const options = {
                method: "GET",
                url: "/{tenant_id}/scim/v2/ServiceProviderConfig",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;

            if (serviceProviderConfigRequest !== null && serviceProviderConfigRequest !== undefined) {
                if (serviceProviderConfigRequest instanceof ServiceProviderConfigRequest) {
                    authorization = serviceProviderConfigRequest.authorization;
                    tenantId = serviceProviderConfigRequest.tenantId;
                } else {
                    authorization = serviceProviderConfigRequest['Authorization'];
                    tenantId = serviceProviderConfigRequest['tenant_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling serviceProviderConfig.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用SCIM协议，同步用户到IAM身份中心。
         * 暂不支持
         * IAM身份中心暂不支持此API操作的以下方面。
         * - ims、photos、x509Certificates、entitlements和password属性
         * - manager的displayName子属性
         * - emails、addresses和phoneNumbers的display子属性
         * 
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - 必须填写userName、displayName、schemas属性，name属性中的familyName、givenName子属性，emails属性中的value、primary、type子属性
         * - addresses可以包含字母、重音字符、符号、数字、标点符号、空格（正常和不换行）
         * - 我们不支持多值属性中的多个值（例如emails,addresses,phoneNumbers）。只允许单个值
         * - emails属性值必须标记为primary
         * - 不能指定groups字段
         * - userName字段可以包含字母、数字和部分符号_+&#x3D;,.@-
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createUser(createUserRequest?: CreateUserRequest) {
            const options = {
                method: "POST",
                url: "/{tenant_id}/scim/v2/Users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let tenantId;

            if (createUserRequest !== null && createUserRequest !== undefined) {
                if (createUserRequest instanceof CreateUserRequest) {
                    authorization = createUserRequest.authorization;
                    tenantId = createUserRequest.tenantId;
                    body = createUserRequest.body
                } else {
                    authorization = createUserRequest['Authorization'];
                    tenantId = createUserRequest['tenant_id'];
                    body = createUserRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling createUser.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除现有用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteUser(deleteUserRequest?: DeleteUserRequest) {
            const options = {
                method: "DELETE",
                url: "/{tenant_id}/scim/v2/Users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;
            
            let userId;

            if (deleteUserRequest !== null && deleteUserRequest !== undefined) {
                if (deleteUserRequest instanceof DeleteUserRequest) {
                    authorization = deleteUserRequest.authorization;
                    tenantId = deleteUserRequest.tenantId;
                    userId = deleteUserRequest.userId;
                } else {
                    authorization = deleteUserRequest['Authorization'];
                    tenantId = deleteUserRequest['tenant_id'];
                    userId = deleteUserRequest['user_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling deleteUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling deleteUser.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询现有用户的详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        getUser(getUserRequest?: GetUserRequest) {
            const options = {
                method: "GET",
                url: "/{tenant_id}/scim/v2/Users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;
            
            let userId;

            if (getUserRequest !== null && getUserRequest !== undefined) {
                if (getUserRequest instanceof GetUserRequest) {
                    authorization = getUserRequest.authorization;
                    tenantId = getUserRequest.tenantId;
                    userId = getUserRequest.userId;
                } else {
                    authorization = getUserRequest['Authorization'];
                    tenantId = getUserRequest['tenant_id'];
                    userId = getUserRequest['user_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling getUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling getUser.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对现有用户列表执行筛选查询，最多只能返回50个结果。
         * 暂不支持
         * IAM身份中心不支持此API操作的以下方面。
         * - startIndex,attributes,excludedAttributes（虽在SCIM协议中列出）
         * 
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - 目前，列出用户接口最多只能返回50个结果
         * - 支持的筛选器组合：(userName)、(id)。请注意，使用id作为单个过滤器虽然有效，但应避免使用，因为已经有一个查询用户详情接口可用
         * - 过滤器中支持的比较运算符：eq
         * - 必须按如下方式指定筛选器：&lt;filterAttribute&gt; eq \&quot;&lt;filterValue&gt;\&quot;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUsers(listUsersRequest?: ListUsersRequest) {
            const options = {
                method: "GET",
                url: "/{tenant_id}/scim/v2/Users",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let authorization;
            
            let tenantId;

            if (listUsersRequest !== null && listUsersRequest !== undefined) {
                if (listUsersRequest instanceof ListUsersRequest) {
                    authorization = listUsersRequest.authorization;
                    tenantId = listUsersRequest.tenantId;
                } else {
                    authorization = listUsersRequest['Authorization'];
                    tenantId = listUsersRequest['tenant_id'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling listUsers.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }

            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改现有用户的部分属性。
         * 暂不支持
         * IAM身份中心暂不支持此API操作的以下方面。
         * - 对userName或active属性执行多个PATCH操作
         * - ims、photos、x509Certificates、entitlements和password属性
         * - manager的displayName子属性
         * - emails、addresses和phoneNumbers的display子属性
         * 
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - 支持的操作是add、replace和remove
         * - 必须指定操作
         * - remove操作需要指定属性路径
         * - add和replace操作需要指定属性的值
         * - 仅允许修改userName、active、externalId、displayName、nickName、profileUrl、title、userType、preferredLanguage、locale、timezone、name、enterprise、emails、addresses和phoneNumbers属性
         * - 过滤器中仅支持eq运算符
         * - userName或active属性不支持remove操作
         * - 我们不支持多值属性中的多个值（例如emails,addresses,phoneNumbers）。这些属性中的每一个都只允许有一个值
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        patchUser(patchUserRequest?: PatchUserRequest) {
            const options = {
                method: "PATCH",
                url: "/{tenant_id}/scim/v2/Users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let tenantId;
            
            let userId;

            if (patchUserRequest !== null && patchUserRequest !== undefined) {
                if (patchUserRequest instanceof PatchUserRequest) {
                    authorization = patchUserRequest.authorization;
                    tenantId = patchUserRequest.tenantId;
                    userId = patchUserRequest.userId;
                    body = patchUserRequest.body
                } else {
                    authorization = patchUserRequest['Authorization'];
                    tenantId = patchUserRequest['tenant_id'];
                    userId = patchUserRequest['user_id'];
                    body = patchUserRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling patchUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling patchUser.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新现有用户。
         * 暂不支持
         * IAM身份中心暂不支持此API操作的以下方面。
         * - ims、photos、x509Certificates、entitlements和password属性
         * - manager的displayName子属性
         * - emails、addresses和phoneNumbers的display子属性
         * 
         * 约束条件
         * IAM身份中心对此API操作具有以下约束。
         * - 必须填写userName、displayName、schemas属性，name属性中的familyName、givenName子属性，emails属性中的value、primary、type子属性
         * - addresses可以包含字母、重音字符、符号、数字、标点符号、空格（正常和不换行）
         * - 我们不支持多值属性中的多个值（例如emails,addresses,phoneNumbers）
         * - emails属性值必须标记为primary
         * - 不能指定groups属性
         * - userName字段可以包含字母、数字和部分符号_+&#x3D;,.@-
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        putUser(putUserRequest?: PutUserRequest) {
            const options = {
                method: "PUT",
                url: "/{tenant_id}/scim/v2/Users/{user_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let authorization;
            
            let tenantId;
            
            let userId;

            if (putUserRequest !== null && putUserRequest !== undefined) {
                if (putUserRequest instanceof PutUserRequest) {
                    authorization = putUserRequest.authorization;
                    tenantId = putUserRequest.tenantId;
                    userId = putUserRequest.userId;
                    body = putUserRequest.body
                } else {
                    authorization = putUserRequest['Authorization'];
                    tenantId = putUserRequest['tenant_id'];
                    userId = putUserRequest['user_id'];
                    body = putUserRequest['body'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling putUser.');
            }
            if (userId === null || userId === undefined) {
            throw new RequiredError('userId','Required parameter userId was null or undefined when calling putUser.');
            }
            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'tenant_id': tenantId,'user_id': userId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IdentityCenterSCIMClient {
    return new IdentityCenterSCIMClient(client);
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