import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddTenantTrustedIpAddressRequest } from './model/AddTenantTrustedIpAddressRequest';
import { AddTenantTrustedIpAddressResponse } from './model/AddTenantTrustedIpAddressResponse';
import { AddTrustedIpAddressRequest } from './model/AddTrustedIpAddressRequest';
import { AddTrustedIpAddressRequestBody } from './model/AddTrustedIpAddressRequestBody';
import { AddTrustedIpAddressResponse } from './model/AddTrustedIpAddressResponse';
import { AssociateGroupUserGroupRequest } from './model/AssociateGroupUserGroupRequest';
import { AssociateGroupUserGroupResponse } from './model/AssociateGroupUserGroupResponse';
import { AssociateRepositoryUserGroupRequest } from './model/AssociateRepositoryUserGroupRequest';
import { AssociateRepositoryUserGroupResponse } from './model/AssociateRepositoryUserGroupResponse';
import { CreateGroupRequest } from './model/CreateGroupRequest';
import { CreateGroupRequestBody } from './model/CreateGroupRequestBody';
import { CreateGroupResponse } from './model/CreateGroupResponse';
import { DeleteGroupRequest } from './model/DeleteGroupRequest';
import { DeleteGroupResponse } from './model/DeleteGroupResponse';
import { DeleteTenantTrustedIpAddressRequest } from './model/DeleteTenantTrustedIpAddressRequest';
import { DeleteTenantTrustedIpAddressResponse } from './model/DeleteTenantTrustedIpAddressResponse';
import { DeleteTrustedIpAddressRequest } from './model/DeleteTrustedIpAddressRequest';
import { DeleteTrustedIpAddressResponse } from './model/DeleteTrustedIpAddressResponse';
import { FailureForBatchCreateGroupMembersDto } from './model/FailureForBatchCreateGroupMembersDto';
import { GroupSumDto } from './model/GroupSumDto';
import { GroupsManageableDto } from './model/GroupsManageableDto';
import { ListManageableGroupsRequest } from './model/ListManageableGroupsRequest';
import { ListManageableGroupsResponse } from './model/ListManageableGroupsResponse';
import { ListTenantTrustedIpAddressesRequest } from './model/ListTenantTrustedIpAddressesRequest';
import { ListTenantTrustedIpAddressesResponse } from './model/ListTenantTrustedIpAddressesResponse';
import { ListTrustedIpAddressesRequest } from './model/ListTrustedIpAddressesRequest';
import { ListTrustedIpAddressesResponse } from './model/ListTrustedIpAddressesResponse';
import { LockRepositoryRequest } from './model/LockRepositoryRequest';
import { LockRepositoryResponse } from './model/LockRepositoryResponse';
import { MemberBaseDto } from './model/MemberBaseDto';
import { ShowGroupRequest } from './model/ShowGroupRequest';
import { ShowGroupResponse } from './model/ShowGroupResponse';
import { TenantTrustedIpAddressDto } from './model/TenantTrustedIpAddressDto';
import { TrustedIpAddressDto } from './model/TrustedIpAddressDto';
import { UnlockRepositoryRequest } from './model/UnlockRepositoryRequest';
import { UnlockRepositoryResponse } from './model/UnlockRepositoryResponse';
import { UpdateTenantTrustedIpAddressRequest } from './model/UpdateTenantTrustedIpAddressRequest';
import { UpdateTenantTrustedIpAddressResponse } from './model/UpdateTenantTrustedIpAddressResponse';
import { UpdateTrustedIpAddressRequest } from './model/UpdateTrustedIpAddressRequest';
import { UpdateTrustedIpAddressResponse } from './model/UpdateTrustedIpAddressResponse';

export class CodeHubClient {
    public static newBuilder(): ClientBuilder<CodeHubClient> {
            let client = new ClientBuilder<CodeHubClient>(newClient);
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
     * 关联代码组与成员组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联代码组与成员组
     * @param {string} projectId 项目id
     * @param {number} groupId 代码组 ID
     * @param {string} userGroupId 成员组 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateGroupUserGroup(associateGroupUserGroupRequest?: AssociateGroupUserGroupRequest): Promise<AssociateGroupUserGroupResponse> {
        const options = ParamCreater().associateGroupUserGroup(associateGroupUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联仓库与成员组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联仓库与成员组
     * @param {string} projectId 项目id
     * @param {number} repositoryId 仓库id
     * @param {string} userGroupId 成员组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateRepositoryUserGroup(associateRepositoryUserGroupRequest?: AssociateRepositoryUserGroupRequest): Promise<AssociateRepositoryUserGroupResponse> {
        const options = ParamCreater().associateRepositoryUserGroup(associateRepositoryUserGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建代码组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建代码组
     * @param {string} projectId 项目id
     * @param {CreateGroupRequestBody} createGroupRequestBody 创建代码组参数
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
     * 删除代码组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除代码组
     * @param {string} projectId 项目id
     * @param {number} groupId 代码组id
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
     * 项目下拥有创建权限的代码组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 项目下拥有创建权限的代码组列表
     * @param {string} projectId 项目id
     * @param {'group' | 'repository'} [scope] 创建资源类型，group 代码组，repository仓库
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 返回数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listManageableGroups(listManageableGroupsRequest?: ListManageableGroupsRequest): Promise<ListManageableGroupsResponse> {
        const options = ParamCreater().listManageableGroups(listManageableGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Total'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取代码组信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取代码组信息
     * @param {string} projectId 项目id
     * @param {number} groupId 代码组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGroup(showGroupRequest?: ShowGroupRequest): Promise<ShowGroupResponse> {
        const options = ParamCreater().showGroup(showGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加仓库ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加仓库ip白名单
     * @param {number} id 仓库id
     * @param {AddTrustedIpAddressRequestBody} addTrustedIpAddressRequestBody 添加ip白名单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTrustedIpAddress(addTrustedIpAddressRequest?: AddTrustedIpAddressRequest): Promise<AddTrustedIpAddressResponse> {
        const options = ParamCreater().addTrustedIpAddress(addTrustedIpAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仓库ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仓库ip白名单
     * @param {number} id ip的id
     * @param {number} ipId ip的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTrustedIpAddress(deleteTrustedIpAddressRequest?: DeleteTrustedIpAddressRequest): Promise<DeleteTrustedIpAddressResponse> {
        const options = ParamCreater().deleteTrustedIpAddress(deleteTrustedIpAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取仓库ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取仓库ip白名单
     * @param {number} id 仓库id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 返回数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTrustedIpAddresses(listTrustedIpAddressesRequest?: ListTrustedIpAddressesRequest): Promise<ListTrustedIpAddressesResponse> {
        const options = ParamCreater().listTrustedIpAddresses(listTrustedIpAddressesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Total'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库短ID锁定仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据仓库短ID锁定仓库
     * @param {string} projectId 项目id
     * @param {number} repositoryId 仓库的主键id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public lockRepository(lockRepositoryRequest?: LockRepositoryRequest): Promise<LockRepositoryResponse> {
        const options = ParamCreater().lockRepository(lockRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据仓库短ID解锁仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据仓库短ID解锁仓库
     * @param {string} projectId 项目id
     * @param {number} repositoryId 仓库的主键id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unlockRepository(unlockRepositoryRequest?: UnlockRepositoryRequest): Promise<UnlockRepositoryResponse> {
        const options = ParamCreater().unlockRepository(unlockRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改仓库ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改仓库ip白名单
     * @param {number} id 仓库id
     * @param {number} ipId ip的id
     * @param {AddTrustedIpAddressRequestBody} addTrustedIpAddressRequestBody 修改ip白名单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTrustedIpAddress(updateTrustedIpAddressRequest?: UpdateTrustedIpAddressRequest): Promise<UpdateTrustedIpAddressResponse> {
        const options = ParamCreater().updateTrustedIpAddress(updateTrustedIpAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加租户ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加租户ip白名单
     * @param {AddTrustedIpAddressRequestBody} addTrustedIpAddressRequestBody 添加租户ip白名单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTenantTrustedIpAddress(addTenantTrustedIpAddressRequest?: AddTenantTrustedIpAddressRequest): Promise<AddTenantTrustedIpAddressResponse> {
        const options = ParamCreater().addTenantTrustedIpAddress(addTenantTrustedIpAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除租户ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除租户ip白名单
     * @param {number} ipId ip的id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTenantTrustedIpAddress(deleteTenantTrustedIpAddressRequest?: DeleteTenantTrustedIpAddressRequest): Promise<DeleteTenantTrustedIpAddressResponse> {
        const options = ParamCreater().deleteTenantTrustedIpAddress(deleteTenantTrustedIpAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户ip白名单
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 返回数量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTenantTrustedIpAddresses(listTenantTrustedIpAddressesRequest?: ListTenantTrustedIpAddressesRequest): Promise<ListTenantTrustedIpAddressesResponse> {
        const options = ParamCreater().listTenantTrustedIpAddresses(listTenantTrustedIpAddressesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Total'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改租户ip白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改租户ip白名单
     * @param {number} ipId ip的ip
     * @param {AddTrustedIpAddressRequestBody} addTrustedIpAddressRequestBody 修改租户ip白名单参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTenantTrustedIpAddress(updateTenantTrustedIpAddressRequest?: UpdateTenantTrustedIpAddressRequest): Promise<UpdateTenantTrustedIpAddressResponse> {
        const options = ParamCreater().updateTenantTrustedIpAddress(updateTenantTrustedIpAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 关联代码组与成员组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateGroupUserGroup(associateGroupUserGroupRequest?: AssociateGroupUserGroupRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/groups/{group_id}/user-group/{user_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let groupId;
            
            let userGroupId;

            if (associateGroupUserGroupRequest !== null && associateGroupUserGroupRequest !== undefined) {
                if (associateGroupUserGroupRequest instanceof AssociateGroupUserGroupRequest) {
                    projectId = associateGroupUserGroupRequest.projectId;
                    groupId = associateGroupUserGroupRequest.groupId;
                    userGroupId = associateGroupUserGroupRequest.userGroupId;
                } else {
                    projectId = associateGroupUserGroupRequest['project_id'];
                    groupId = associateGroupUserGroupRequest['group_id'];
                    userGroupId = associateGroupUserGroupRequest['user_group_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling associateGroupUserGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling associateGroupUserGroup.');
            }
            if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError('userGroupId','Required parameter userGroupId was null or undefined when calling associateGroupUserGroup.');
            }

            options.pathParams = { 'project_id': projectId,'group_id': groupId,'user_group_id': userGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关联仓库与成员组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateRepositoryUserGroup(associateRepositoryUserGroupRequest?: AssociateRepositoryUserGroupRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/repositories/{repository_id}/user-group/{user_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let repositoryId;
            
            let userGroupId;

            if (associateRepositoryUserGroupRequest !== null && associateRepositoryUserGroupRequest !== undefined) {
                if (associateRepositoryUserGroupRequest instanceof AssociateRepositoryUserGroupRequest) {
                    projectId = associateRepositoryUserGroupRequest.projectId;
                    repositoryId = associateRepositoryUserGroupRequest.repositoryId;
                    userGroupId = associateRepositoryUserGroupRequest.userGroupId;
                } else {
                    projectId = associateRepositoryUserGroupRequest['project_id'];
                    repositoryId = associateRepositoryUserGroupRequest['repository_id'];
                    userGroupId = associateRepositoryUserGroupRequest['user_group_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling associateRepositoryUserGroup.');
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling associateRepositoryUserGroup.');
            }
            if (userGroupId === null || userGroupId === undefined) {
            throw new RequiredError('userGroupId','Required parameter userGroupId was null or undefined when calling associateRepositoryUserGroup.');
            }

            options.pathParams = { 'project_id': projectId,'repository_id': repositoryId,'user_group_id': userGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建代码组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGroup(createGroupRequest?: CreateGroupRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let projectId;

            if (createGroupRequest !== null && createGroupRequest !== undefined) {
                if (createGroupRequest instanceof CreateGroupRequest) {
                    projectId = createGroupRequest.projectId;
                    body = createGroupRequest.body
                } else {
                    projectId = createGroupRequest['project_id'];
                    body = createGroupRequest['body'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling createGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除代码组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGroup(deleteGroupRequest?: DeleteGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/{project_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let groupId;

            if (deleteGroupRequest !== null && deleteGroupRequest !== undefined) {
                if (deleteGroupRequest instanceof DeleteGroupRequest) {
                    projectId = deleteGroupRequest.projectId;
                    groupId = deleteGroupRequest.groupId;
                } else {
                    projectId = deleteGroupRequest['project_id'];
                    groupId = deleteGroupRequest['group_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling deleteGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteGroup.');
            }

            options.pathParams = { 'project_id': projectId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 项目下拥有创建权限的代码组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listManageableGroups(listManageableGroupsRequest?: ListManageableGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v4/{project_id}/manageable-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let scope;
            
            let offset;
            
            let limit;

            if (listManageableGroupsRequest !== null && listManageableGroupsRequest !== undefined) {
                if (listManageableGroupsRequest instanceof ListManageableGroupsRequest) {
                    projectId = listManageableGroupsRequest.projectId;
                    scope = listManageableGroupsRequest.scope;
                    offset = listManageableGroupsRequest.offset;
                    limit = listManageableGroupsRequest.limit;
                } else {
                    projectId = listManageableGroupsRequest['project_id'];
                    scope = listManageableGroupsRequest['scope'];
                    offset = listManageableGroupsRequest['offset'];
                    limit = listManageableGroupsRequest['limit'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listManageableGroups.');
            }
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取代码组信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGroup(showGroupRequest?: ShowGroupRequest) {
            const options = {
                method: "GET",
                url: "/v4/{project_id}/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let groupId;

            if (showGroupRequest !== null && showGroupRequest !== undefined) {
                if (showGroupRequest instanceof ShowGroupRequest) {
                    projectId = showGroupRequest.projectId;
                    groupId = showGroupRequest.groupId;
                } else {
                    projectId = showGroupRequest['project_id'];
                    groupId = showGroupRequest['group_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showGroup.');
            }
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showGroup.');
            }

            options.pathParams = { 'project_id': projectId,'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加仓库ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTrustedIpAddress(addTrustedIpAddressRequest?: AddTrustedIpAddressRequest) {
            const options = {
                method: "POST",
                url: "/v4/projects/{id}/trusted-ip-addresses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (addTrustedIpAddressRequest !== null && addTrustedIpAddressRequest !== undefined) {
                if (addTrustedIpAddressRequest instanceof AddTrustedIpAddressRequest) {
                    id = addTrustedIpAddressRequest.id;
                    body = addTrustedIpAddressRequest.body
                } else {
                    id = addTrustedIpAddressRequest['id'];
                    body = addTrustedIpAddressRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling addTrustedIpAddress.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除仓库ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTrustedIpAddress(deleteTrustedIpAddressRequest?: DeleteTrustedIpAddressRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/projects/{id}/trusted-ip-addresses/{ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;
            
            let ipId;

            if (deleteTrustedIpAddressRequest !== null && deleteTrustedIpAddressRequest !== undefined) {
                if (deleteTrustedIpAddressRequest instanceof DeleteTrustedIpAddressRequest) {
                    id = deleteTrustedIpAddressRequest.id;
                    ipId = deleteTrustedIpAddressRequest.ipId;
                } else {
                    id = deleteTrustedIpAddressRequest['id'];
                    ipId = deleteTrustedIpAddressRequest['ip_id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteTrustedIpAddress.');
            }
            if (ipId === null || ipId === undefined) {
            throw new RequiredError('ipId','Required parameter ipId was null or undefined when calling deleteTrustedIpAddress.');
            }

            options.pathParams = { 'id': id,'ip_id': ipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取仓库ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTrustedIpAddresses(listTrustedIpAddressesRequest?: ListTrustedIpAddressesRequest) {
            const options = {
                method: "GET",
                url: "/v4/projects/{id}/trusted-ip-addresses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let offset;
            
            let limit;

            if (listTrustedIpAddressesRequest !== null && listTrustedIpAddressesRequest !== undefined) {
                if (listTrustedIpAddressesRequest instanceof ListTrustedIpAddressesRequest) {
                    id = listTrustedIpAddressesRequest.id;
                    offset = listTrustedIpAddressesRequest.offset;
                    limit = listTrustedIpAddressesRequest.limit;
                } else {
                    id = listTrustedIpAddressesRequest['id'];
                    offset = listTrustedIpAddressesRequest['offset'];
                    limit = listTrustedIpAddressesRequest['limit'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listTrustedIpAddresses.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库短ID锁定仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        lockRepository(lockRepositoryRequest?: LockRepositoryRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/repositories/{repository_id}/lock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let repositoryId;

            if (lockRepositoryRequest !== null && lockRepositoryRequest !== undefined) {
                if (lockRepositoryRequest instanceof LockRepositoryRequest) {
                    projectId = lockRepositoryRequest.projectId;
                    repositoryId = lockRepositoryRequest.repositoryId;
                } else {
                    projectId = lockRepositoryRequest['project_id'];
                    repositoryId = lockRepositoryRequest['repository_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling lockRepository.');
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling lockRepository.');
            }

            options.pathParams = { 'project_id': projectId,'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据仓库短ID解锁仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unlockRepository(unlockRepositoryRequest?: UnlockRepositoryRequest) {
            const options = {
                method: "POST",
                url: "/v4/{project_id}/repositories/{repository_id}/unlock",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let projectId;
            
            let repositoryId;

            if (unlockRepositoryRequest !== null && unlockRepositoryRequest !== undefined) {
                if (unlockRepositoryRequest instanceof UnlockRepositoryRequest) {
                    projectId = unlockRepositoryRequest.projectId;
                    repositoryId = unlockRepositoryRequest.repositoryId;
                } else {
                    projectId = unlockRepositoryRequest['project_id'];
                    repositoryId = unlockRepositoryRequest['repository_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling unlockRepository.');
            }
            if (repositoryId === null || repositoryId === undefined) {
            throw new RequiredError('repositoryId','Required parameter repositoryId was null or undefined when calling unlockRepository.');
            }

            options.pathParams = { 'project_id': projectId,'repository_id': repositoryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改仓库ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTrustedIpAddress(updateTrustedIpAddressRequest?: UpdateTrustedIpAddressRequest) {
            const options = {
                method: "PUT",
                url: "/v4/projects/{id}/trusted-ip-addresses/{ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;
            
            let ipId;

            if (updateTrustedIpAddressRequest !== null && updateTrustedIpAddressRequest !== undefined) {
                if (updateTrustedIpAddressRequest instanceof UpdateTrustedIpAddressRequest) {
                    id = updateTrustedIpAddressRequest.id;
                    ipId = updateTrustedIpAddressRequest.ipId;
                    body = updateTrustedIpAddressRequest.body
                } else {
                    id = updateTrustedIpAddressRequest['id'];
                    ipId = updateTrustedIpAddressRequest['ip_id'];
                    body = updateTrustedIpAddressRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateTrustedIpAddress.');
            }
            if (ipId === null || ipId === undefined) {
            throw new RequiredError('ipId','Required parameter ipId was null or undefined when calling updateTrustedIpAddress.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id,'ip_id': ipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加租户ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTenantTrustedIpAddress(addTenantTrustedIpAddressRequest?: AddTenantTrustedIpAddressRequest) {
            const options = {
                method: "POST",
                url: "/v4/tenant/trusted-ip-addresses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addTenantTrustedIpAddressRequest !== null && addTenantTrustedIpAddressRequest !== undefined) {
                if (addTenantTrustedIpAddressRequest instanceof AddTenantTrustedIpAddressRequest) {
                    body = addTenantTrustedIpAddressRequest.body
                } else {
                    body = addTenantTrustedIpAddressRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除租户ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTenantTrustedIpAddress(deleteTenantTrustedIpAddressRequest?: DeleteTenantTrustedIpAddressRequest) {
            const options = {
                method: "DELETE",
                url: "/v4/tenant/trusted-ip-addresses/{ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ipId;

            if (deleteTenantTrustedIpAddressRequest !== null && deleteTenantTrustedIpAddressRequest !== undefined) {
                if (deleteTenantTrustedIpAddressRequest instanceof DeleteTenantTrustedIpAddressRequest) {
                    ipId = deleteTenantTrustedIpAddressRequest.ipId;
                } else {
                    ipId = deleteTenantTrustedIpAddressRequest['ip_id'];
                }
            }

        
            if (ipId === null || ipId === undefined) {
            throw new RequiredError('ipId','Required parameter ipId was null or undefined when calling deleteTenantTrustedIpAddress.');
            }

            options.pathParams = { 'ip_id': ipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取租户ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTenantTrustedIpAddresses(listTenantTrustedIpAddressesRequest?: ListTenantTrustedIpAddressesRequest) {
            const options = {
                method: "GET",
                url: "/v4/tenant/trusted-ip-addresses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listTenantTrustedIpAddressesRequest !== null && listTenantTrustedIpAddressesRequest !== undefined) {
                if (listTenantTrustedIpAddressesRequest instanceof ListTenantTrustedIpAddressesRequest) {
                    offset = listTenantTrustedIpAddressesRequest.offset;
                    limit = listTenantTrustedIpAddressesRequest.limit;
                } else {
                    offset = listTenantTrustedIpAddressesRequest['offset'];
                    limit = listTenantTrustedIpAddressesRequest['limit'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改租户ip白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTenantTrustedIpAddress(updateTenantTrustedIpAddressRequest?: UpdateTenantTrustedIpAddressRequest) {
            const options = {
                method: "PUT",
                url: "/v4/tenant/trusted-ip-addresses/{ip_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ipId;

            if (updateTenantTrustedIpAddressRequest !== null && updateTenantTrustedIpAddressRequest !== undefined) {
                if (updateTenantTrustedIpAddressRequest instanceof UpdateTenantTrustedIpAddressRequest) {
                    ipId = updateTenantTrustedIpAddressRequest.ipId;
                    body = updateTenantTrustedIpAddressRequest.body
                } else {
                    ipId = updateTenantTrustedIpAddressRequest['ip_id'];
                    body = updateTenantTrustedIpAddressRequest['body'];
                }
            }

        
            if (ipId === null || ipId === undefined) {
            throw new RequiredError('ipId','Required parameter ipId was null or undefined when calling updateTenantTrustedIpAddress.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ip_id': ipId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeHubClient {
    return new CodeHubClient(client);
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