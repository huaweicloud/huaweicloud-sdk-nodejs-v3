import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddressDto } from './model/AddressDto';
import { AlternateIdentifierDto } from './model/AlternateIdentifierDto';
import { AttributeOperationDto } from './model/AttributeOperationDto';
import { CreateGroupMembershipReqBody } from './model/CreateGroupMembershipReqBody';
import { CreateGroupMembershipRequest } from './model/CreateGroupMembershipRequest';
import { CreateGroupMembershipResponse } from './model/CreateGroupMembershipResponse';
import { CreateGroupReqBody } from './model/CreateGroupReqBody';
import { CreateGroupRequest } from './model/CreateGroupRequest';
import { CreateGroupResponse } from './model/CreateGroupResponse';
import { CreateUserReqBody } from './model/CreateUserReqBody';
import { CreateUserRequest } from './model/CreateUserRequest';
import { CreateUserResponse } from './model/CreateUserResponse';
import { DeleteGroupMembershipRequest } from './model/DeleteGroupMembershipRequest';
import { DeleteGroupMembershipResponse } from './model/DeleteGroupMembershipResponse';
import { DeleteGroupRequest } from './model/DeleteGroupRequest';
import { DeleteGroupResponse } from './model/DeleteGroupResponse';
import { DeleteUserRequest } from './model/DeleteUserRequest';
import { DeleteUserResponse } from './model/DeleteUserResponse';
import { DescribeGroupMembershipRequest } from './model/DescribeGroupMembershipRequest';
import { DescribeGroupMembershipResponse } from './model/DescribeGroupMembershipResponse';
import { DescribeGroupRequest } from './model/DescribeGroupRequest';
import { DescribeGroupResponse } from './model/DescribeGroupResponse';
import { DescribeUserRequest } from './model/DescribeUserRequest';
import { DescribeUserResponse } from './model/DescribeUserResponse';
import { EmailDto } from './model/EmailDto';
import { EnterpriseDto } from './model/EnterpriseDto';
import { ExternalIdDto } from './model/ExternalIdDto';
import { GetGroupIdReqBody } from './model/GetGroupIdReqBody';
import { GetGroupIdRequest } from './model/GetGroupIdRequest';
import { GetGroupIdResponse } from './model/GetGroupIdResponse';
import { GetGroupMembershipIdReqBody } from './model/GetGroupMembershipIdReqBody';
import { GetGroupMembershipIdRequest } from './model/GetGroupMembershipIdRequest';
import { GetGroupMembershipIdResponse } from './model/GetGroupMembershipIdResponse';
import { GetUserIdReqBody } from './model/GetUserIdReqBody';
import { GetUserIdRequest } from './model/GetUserIdRequest';
import { GetUserIdResponse } from './model/GetUserIdResponse';
import { GroupDto } from './model/GroupDto';
import { GroupMembershipDto } from './model/GroupMembershipDto';
import { GroupMembershipExistenceResultDto } from './model/GroupMembershipExistenceResultDto';
import { GroupMembershipItem } from './model/GroupMembershipItem';
import { IsMemberInGroupsReqBody } from './model/IsMemberInGroupsReqBody';
import { IsMemberInGroupsRequest } from './model/IsMemberInGroupsRequest';
import { IsMemberInGroupsResponse } from './model/IsMemberInGroupsResponse';
import { ListGroupMembershipsForMemberRequest } from './model/ListGroupMembershipsForMemberRequest';
import { ListGroupMembershipsForMemberResponse } from './model/ListGroupMembershipsForMemberResponse';
import { ListGroupMembershipsRequest } from './model/ListGroupMembershipsRequest';
import { ListGroupMembershipsResponse } from './model/ListGroupMembershipsResponse';
import { ListGroupsRequest } from './model/ListGroupsRequest';
import { ListGroupsResponse } from './model/ListGroupsResponse';
import { ListUsersRequest } from './model/ListUsersRequest';
import { ListUsersResponse } from './model/ListUsersResponse';
import { ManagerDto } from './model/ManagerDto';
import { MemberIdDto } from './model/MemberIdDto';
import { NameDto } from './model/NameDto';
import { PageInfoDto } from './model/PageInfoDto';
import { PhoneNumberDto } from './model/PhoneNumberDto';
import { UniqueAttributeDto } from './model/UniqueAttributeDto';
import { UpdateGroupReqBody } from './model/UpdateGroupReqBody';
import { UpdateGroupRequest } from './model/UpdateGroupRequest';
import { UpdateGroupResponse } from './model/UpdateGroupResponse';
import { UpdateUserReqBody } from './model/UpdateUserReqBody';
import { UpdateUserRequest } from './model/UpdateUserRequest';
import { UpdateUserResponse } from './model/UpdateUserResponse';
import { UserDto } from './model/UserDto';

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
     * 在指定的身份源中创建一个IAM身份中心用户组。
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
     * 根据用户组ID，删除对应的IAM身份中心用户组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IAM身份中心用户组的全局唯一标识符（ID）
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
     * 根据用户组ID，查询IAM身份中心用户组的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户组详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IAM身份中心用户组的全局唯一标识符（ID）
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
     * 根据显示名或外部身份源ID，以精确匹配的方式查询用户组ID。显示名和外部身份源ID两种查询方式二选一，不支持同时传入。
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
     * 查询指定身份源下的IAM身份中心用户组列表。
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
     * 根据用户组ID，更新对应IAM身份中心用户组的属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户组
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IAM身份中心用户组的全局唯一标识符（ID）
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
     * 将用户添加到用户组中，用户和用户组必须在同一身份源下。
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
     * 根据关联关系ID解绑用户和用户组，也就是将用户移出用户组。
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
     * 根据关联关系ID，查询此关联关系的详情信息。
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
     * 根据用户ID和用户组ID，查询对应的关联关系ID。
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
     * 根据用户ID和用户组ID列表，查询用户是否为用户组的成员。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户是否为用户组成员
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
     * 根据用户组ID，列出用户组中的用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出组中的用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} groupId 身份源中IAM身份中心用户组的全局唯一标识符（ID）
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
     * 根据用户ID，列出用户加入的用户组。
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
     * 在指定的身份源中创建一个IAM身份中心用户。
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
     * 根据用户ID，删除对应的IAM身份中心用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IAM身份中心用户的全局唯一标识符（ID）
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
     * 根据用户ID，查询对应IAM身份中心用户的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户详情
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IAM身份中心用户的全局唯一标识符（ID）
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
     * 根据用户名或外部身份源ID，以精确匹配的方式查询用户ID。用户名和外部身份源ID两种查询方式二选一，不支持同时传入。
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
     * 查询指定身份源下的IAM身份中心用户列表。
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
     * 根据用户ID，更新对应IAM身份中心用户的属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户
     * @param {string} identityStoreId 身份源的全局唯一标识符（ID）
     * @param {string} userId 身份源中IAM身份中心用户的全局唯一标识符（ID）
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
}

export const ParamCreater = function () {
    return {
    
        /**
         * 在指定的身份源中创建一个IAM身份中心用户组。
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
         * 根据用户组ID，删除对应的IAM身份中心用户组。
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
         * 根据用户组ID，查询IAM身份中心用户组的详情信息。
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
         * 根据显示名或外部身份源ID，以精确匹配的方式查询用户组ID。显示名和外部身份源ID两种查询方式二选一，不支持同时传入。
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
         * 查询指定身份源下的IAM身份中心用户组列表。
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
         * 根据用户组ID，更新对应IAM身份中心用户组的属性。
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
         * 将用户添加到用户组中，用户和用户组必须在同一身份源下。
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
         * 根据关联关系ID解绑用户和用户组，也就是将用户移出用户组。
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
         * 根据关联关系ID，查询此关联关系的详情信息。
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
         * 根据用户ID和用户组ID，查询对应的关联关系ID。
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
         * 根据用户ID和用户组ID列表，查询用户是否为用户组的成员。
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
         * 根据用户组ID，列出用户组中的用户。
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
         * 根据用户ID，列出用户加入的用户组。
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
         * 在指定的身份源中创建一个IAM身份中心用户。
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
         * 根据用户ID，删除对应的IAM身份中心用户。
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
         * 根据用户ID，查询对应IAM身份中心用户的详情信息。
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
         * 根据用户名或外部身份源ID，以精确匹配的方式查询用户ID。用户名和外部身份源ID两种查询方式二选一，不支持同时传入。
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
         * 查询指定身份源下的IAM身份中心用户列表。
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
         * 根据用户ID，更新对应IAM身份中心用户的属性。
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