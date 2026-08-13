import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddResourcesRequestBody } from './model/AddResourcesRequestBody';
import { AddResourcesToGroupRequest } from './model/AddResourcesToGroupRequest';
import { AddResourcesToGroupResponse } from './model/AddResourcesToGroupResponse';
import { BaseResourceEntity } from './model/BaseResourceEntity';
import { CollectAllResourcesSummaryRequest } from './model/CollectAllResourcesSummaryRequest';
import { CollectAllResourcesSummaryResponse } from './model/CollectAllResourcesSummaryResponse';
import { CountAllResourcesRequest } from './model/CountAllResourcesRequest';
import { CountAllResourcesResponse } from './model/CountAllResourcesResponse';
import { CreateGroupsResponse } from './model/CreateGroupsResponse';
import { CreateResourceGroupRequest } from './model/CreateResourceGroupRequest';
import { CreateResourceGroupResponse } from './model/CreateResourceGroupResponse';
import { DeleteResourceGroupRequest } from './model/DeleteResourceGroupRequest';
import { DeleteResourceGroupResponse } from './model/DeleteResourceGroupResponse';
import { GenericResourceGroupRequestBody } from './model/GenericResourceGroupRequestBody';
import { ListAllProvidersRequest } from './model/ListAllProvidersRequest';
import { ListAllProvidersResponse } from './model/ListAllProvidersResponse';
import { ListAllResourcesRequest } from './model/ListAllResourcesRequest';
import { ListAllResourcesResponse } from './model/ListAllResourcesResponse';
import { ListAllTagsRequest } from './model/ListAllTagsRequest';
import { ListAllTagsResponse } from './model/ListAllTagsResponse';
import { ListResourceGroupsRequest } from './model/ListResourceGroupsRequest';
import { ListResourceGroupsResponse } from './model/ListResourceGroupsResponse';
import { ListResourcesRequest } from './model/ListResourcesRequest';
import { ListResourcesResponse } from './model/ListResourcesResponse';
import { PageInfo } from './model/PageInfo';
import { RemoveResourceFromGroupRequest } from './model/RemoveResourceFromGroupRequest';
import { RemoveResourceFromGroupResponse } from './model/RemoveResourceFromGroupResponse';
import { ResourceEntity } from './model/ResourceEntity';
import { ResourceProviderResponse } from './model/ResourceProviderResponse';
import { ResourceRelation } from './model/ResourceRelation';
import { ResourceSummaryResponseItem } from './model/ResourceSummaryResponseItem';
import { ResourceSummaryResponseItemRegions } from './model/ResourceSummaryResponseItemRegions';
import { ResourceSummaryResponseItemTypes } from './model/ResourceSummaryResponseItemTypes';
import { ResourceTypeResponse } from './model/ResourceTypeResponse';
import { ShowResourceByIdRequest } from './model/ShowResourceByIdRequest';
import { ShowResourceByIdResponse } from './model/ShowResourceByIdResponse';
import { ShowResourceDetailRequest } from './model/ShowResourceDetailRequest';
import { ShowResourceDetailResponse } from './model/ShowResourceDetailResponse';
import { ShowResourceGroupRequest } from './model/ShowResourceGroupRequest';
import { ShowResourceGroupResponse } from './model/ShowResourceGroupResponse';
import { ShowResourceRelationsRequest } from './model/ShowResourceRelationsRequest';
import { ShowResourceRelationsResponse } from './model/ShowResourceRelationsResponse';
import { TagDetail } from './model/TagDetail';
import { UpdateResourceGroupRequest } from './model/UpdateResourceGroupRequest';
import { UpdateResourceGroupRequestBody } from './model/UpdateResourceGroupRequestBody';
import { UpdateResourceGroupResponse } from './model/UpdateResourceGroupResponse';

export class RcClient {
    public static newBuilder(): ClientBuilder<RcClient> {
            let client = new ClientBuilder<RcClient>(newClient, 'GlobalCredentials');
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
     * 将一个或多个资源添加到资源组，需要当前用户有resourcecenter:group:addResource权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 将资源添加到资源组
     * @param {string} groupId 资源组ID
     * @param {AddResourcesRequestBody} addResourcesRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addResourcesToGroup(addResourcesToGroupRequest?: AddResourcesToGroupRequest): Promise<AddResourcesToGroupResponse> {
        const options = ParamCreater().addResourcesToGroup(addResourcesToGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个资源分组，需要当前用户有resourcecenter:group:create权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源分组
     * @param {GenericResourceGroupRequestBody} genericResourceGroupRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceGroup(createResourceGroupRequest?: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
        const options = ParamCreater().createResourceGroup(createResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个资源分组，需要当前用户有resourcecenter:group:delete权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除一个资源分组
     * @param {string} groupId 资源组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceGroup(deleteResourceGroupRequest?: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
        const options = ParamCreater().deleteResourceGroup(deleteResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源分组列表，需要当前用户有resourcecenter:group:list权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源分组列表
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceGroups(listResourceGroupsRequest?: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
        const options = ParamCreater().listResourceGroups(listResourceGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从资源组中移除一个资源，需要当前用户有resourcecenter:group:removeResource权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从资源组中移除资源
     * @param {string} groupId 资源组ID
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public removeResourceFromGroup(removeResourceFromGroupRequest?: RemoveResourceFromGroupRequest): Promise<RemoveResourceFromGroupResponse> {
        const options = ParamCreater().removeResourceFromGroup(removeResourceFromGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询一个资源分组，需要当前用户有resourcecenter:group:get权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询一个资源分组
     * @param {string} groupId 资源组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceGroup(showResourceGroupRequest?: ShowResourceGroupRequest): Promise<ShowResourceGroupResponse> {
        const options = ParamCreater().showResourceGroup(showResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改一个资源分组，需要当前用户有resourcecenter:group:update权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改一个资源分组
     * @param {string} groupId 资源组ID
     * @param {UpdateResourceGroupRequestBody} updateResourceGroupRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResourceGroup(updateResourceGroupRequest?: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
        const options = ParamCreater().updateResourceGroup(updateResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定资源ID，查询该资源与其他资源的关联关系，需要当前用户有resourcecenter::listResourceRelation权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源关系
     * @param {string} resourceId 资源ID
     * @param {string} [relatedResourceId] 资源ID
     * @param {string} [relatedResourceType] 关联资源类型
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceRelations(showResourceRelationsRequest?: ShowResourceRelationsRequest): Promise<ShowResourceRelationsResponse> {
        const options = ParamCreater().showResourceRelations(showResourceRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号的资源概览，需要当前用户有rc::listResourceSummary权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源概要
     * @param {string} [name] 资源名称
     * @param {Array<string>} [type] 资源类型（provider.type）
     * @param {Array<string>} [regionId] 区域ID列表
     * @param {Array<string>} [epId] 企业项目ID列表
     * @param {Array<string>} [projectId] 项目ID
     * @param {Array<string>} [tags] 标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public collectAllResourcesSummary(collectAllResourcesSummaryRequest?: CollectAllResourcesSummaryRequest): Promise<CollectAllResourcesSummaryResponse> {
        const options = ParamCreater().collectAllResourcesSummary(collectAllResourcesSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源数量，需要当前用户有resourcecenter::getResourceCount权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源数量
     * @param {string} [id] 资源ID
     * @param {string} [name] 资源名称
     * @param {Array<string>} [type] 资源类型（provider.type）
     * @param {Array<string>} [regionId] 区域ID列表
     * @param {Array<string>} [epId] 企业项目ID列表
     * @param {Array<string>} [projectId] 项目ID
     * @param {Array<string>} [tags] 标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countAllResources(countAllResourcesRequest?: CountAllResourcesRequest): Promise<CountAllResourcesResponse> {
        const options = ParamCreater().countAllResources(countAllResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有已对接RC的云服务、资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举所有已对接的云服务
     * @param {number} [offset] 分页偏移
     * @param {number} [limit] 最大的返回数量
     * @param {'zh-cn' | 'en-us' | 'fr-fr' | 'es-us' | 'pt-br'} [xLanguage] 选择接口返回的信息的语言，默认为\&quot;zh-cn\&quot;中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllProviders(listAllProvidersRequest?: ListAllProvidersRequest): Promise<ListAllProvidersResponse> {
        const options = ParamCreater().listAllProviders(listAllProvidersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回当前用户下所有资源，需要当前用户有resourcecenter::listResource权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举所有资源
     * @param {string} [regionId] 区域ID
     * @param {string} [epId] 企业项目ID
     * @param {string} [type] 资源类型（provider.type）
     * @param {number} [limit] 最大的返回数量。
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {string} [id] 资源ID
     * @param {string} [name] 资源名称
     * @param {Array<string>} [tags] 标签列表
     * @param {string} [groupId] 资源组ID
     * @param {Array<string>} [sortKey] 排序字段列表，仅支持createdAt和updatedAt
     * @param {Array<string>} [sortValue] 排序顺序列表，仅支持asc和desc
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllResources(listAllResourcesRequest?: ListAllResourcesRequest): Promise<ListAllResourcesResponse> {
        const options = ParamCreater().listAllResources(listAllResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号下所有资源的标签，需要当前用户有resourcecenter::listResourceTag权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举资源标签
     * @param {string} [key] 标签键名
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {number} [limit] 最大的返回数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTags(listAllTagsRequest?: ListAllTagsRequest): Promise<ListAllTagsResponse> {
        const options = ParamCreater().listAllTags(listAllTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 返回当前租户下特定资源类型的资源，需要当前用户有resourcecenter::listResourceByType权限。比如查询云服务器，对应的RC资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列举指定类型的资源
     * @param {string} provider 云服务名称
     * @param {string} type 资源类型名称
     * @param {string} [regionId] 区域ID
     * @param {string} [epId] 企业项目ID
     * @param {{ [key: string]: Array<string>; }} [tag] 标签
     * @param {number} [limit] 最大的返回数量
     * @param {string} [marker] 分页参数，通过上一个请求中返回的marker信息作为输入，获取当前页
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResources(listResourcesRequest?: ListResourcesRequest): Promise<ListResourcesResponse> {
        const options = ParamCreater().listResources(listResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定资源ID，返回该资源的详细信息，需要当前用户有resourcecenter::getResourceByType权限。比如查询云服务器，对应的RC资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定类型的单个资源
     * @param {string} provider 云服务名称
     * @param {string} type 资源类型名称
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceById(showResourceByIdRequest?: ShowResourceByIdRequest): Promise<ShowResourceByIdResponse> {
        const options = ParamCreater().showResourceById(showResourceByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前帐号下的单个资源，需要当前用户有resourcecenter::getResource权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个资源
     * @param {string} resourceId 资源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceDetail(showResourceDetailRequest?: ShowResourceDetailRequest): Promise<ShowResourceDetailResponse> {
        const options = ParamCreater().showResourceDetail(showResourceDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 将一个或多个资源添加到资源组，需要当前用户有resourcecenter:group:addResource权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addResourcesToGroup(addResourcesToGroupRequest?: AddResourcesToGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/resource-center/groups/{group_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (addResourcesToGroupRequest !== null && addResourcesToGroupRequest !== undefined) {
                if (addResourcesToGroupRequest instanceof AddResourcesToGroupRequest) {
                    groupId = addResourcesToGroupRequest.groupId;
                    body = addResourcesToGroupRequest.body
                } else {
                    groupId = addResourcesToGroupRequest['group_id'];
                    body = addResourcesToGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling addResourcesToGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个资源分组，需要当前用户有resourcecenter:group:create权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceGroup(createResourceGroupRequest?: CreateResourceGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/resource-center/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createResourceGroupRequest !== null && createResourceGroupRequest !== undefined) {
                if (createResourceGroupRequest instanceof CreateResourceGroupRequest) {
                    body = createResourceGroupRequest.body
                } else {
                    body = createResourceGroupRequest['body'];
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
         * 删除一个资源分组，需要当前用户有resourcecenter:group:delete权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceGroup(deleteResourceGroupRequest?: DeleteResourceGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-center/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (deleteResourceGroupRequest !== null && deleteResourceGroupRequest !== undefined) {
                if (deleteResourceGroupRequest instanceof DeleteResourceGroupRequest) {
                    groupId = deleteResourceGroupRequest.groupId;
                } else {
                    groupId = deleteResourceGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteResourceGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源分组列表，需要当前用户有resourcecenter:group:list权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceGroups(listResourceGroupsRequest?: ListResourceGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listResourceGroupsRequest !== null && listResourceGroupsRequest !== undefined) {
                if (listResourceGroupsRequest instanceof ListResourceGroupsRequest) {
                    limit = listResourceGroupsRequest.limit;
                    marker = listResourceGroupsRequest.marker;
                } else {
                    limit = listResourceGroupsRequest['limit'];
                    marker = listResourceGroupsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从资源组中移除一个资源，需要当前用户有resourcecenter:group:removeResource权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        removeResourceFromGroup(removeResourceFromGroupRequest?: RemoveResourceFromGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/resource-center/groups/{group_id}/resources/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let resourceId;

            if (removeResourceFromGroupRequest !== null && removeResourceFromGroupRequest !== undefined) {
                if (removeResourceFromGroupRequest instanceof RemoveResourceFromGroupRequest) {
                    groupId = removeResourceFromGroupRequest.groupId;
                    resourceId = removeResourceFromGroupRequest.resourceId;
                } else {
                    groupId = removeResourceFromGroupRequest['group_id'];
                    resourceId = removeResourceFromGroupRequest['resource_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling removeResourceFromGroup.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling removeResourceFromGroup.');
            }

            options.pathParams = { 'group_id': groupId,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询一个资源分组，需要当前用户有resourcecenter:group:get权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceGroup(showResourceGroupRequest?: ShowResourceGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (showResourceGroupRequest !== null && showResourceGroupRequest !== undefined) {
                if (showResourceGroupRequest instanceof ShowResourceGroupRequest) {
                    groupId = showResourceGroupRequest.groupId;
                } else {
                    groupId = showResourceGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showResourceGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改一个资源分组，需要当前用户有resourcecenter:group:update权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceGroup(updateResourceGroupRequest?: UpdateResourceGroupRequest) {
            const options = {
                method: "PATCH",
                url: "/v1/resource-center/groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (updateResourceGroupRequest !== null && updateResourceGroupRequest !== undefined) {
                if (updateResourceGroupRequest instanceof UpdateResourceGroupRequest) {
                    groupId = updateResourceGroupRequest.groupId;
                    body = updateResourceGroupRequest.body
                } else {
                    groupId = updateResourceGroupRequest['group_id'];
                    body = updateResourceGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateResourceGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定资源ID，查询该资源与其他资源的关联关系，需要当前用户有resourcecenter::listResourceRelation权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceRelations(showResourceRelationsRequest?: ShowResourceRelationsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/resource-relations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceId;
            
            let relatedResourceId;
            
            let relatedResourceType;
            
            let limit;
            
            let marker;

            if (showResourceRelationsRequest !== null && showResourceRelationsRequest !== undefined) {
                if (showResourceRelationsRequest instanceof ShowResourceRelationsRequest) {
                    resourceId = showResourceRelationsRequest.resourceId;
                    relatedResourceId = showResourceRelationsRequest.relatedResourceId;
                    relatedResourceType = showResourceRelationsRequest.relatedResourceType;
                    limit = showResourceRelationsRequest.limit;
                    marker = showResourceRelationsRequest.marker;
                } else {
                    resourceId = showResourceRelationsRequest['resource_id'];
                    relatedResourceId = showResourceRelationsRequest['related_resource_id'];
                    relatedResourceType = showResourceRelationsRequest['related_resource_type'];
                    limit = showResourceRelationsRequest['limit'];
                    marker = showResourceRelationsRequest['marker'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
                throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceRelations.');
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (relatedResourceId !== null && relatedResourceId !== undefined) {
                localVarQueryParameter['related_resource_id'] = relatedResourceId;
            }
            if (relatedResourceType !== null && relatedResourceType !== undefined) {
                localVarQueryParameter['related_resource_type'] = relatedResourceType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号的资源概览，需要当前用户有rc::listResourceSummary权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        collectAllResourcesSummary(collectAllResourcesSummaryRequest?: CollectAllResourcesSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/all-resources/summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let type;
            
            let regionId;
            
            let epId;
            
            let projectId;
            
            let tags;

            if (collectAllResourcesSummaryRequest !== null && collectAllResourcesSummaryRequest !== undefined) {
                if (collectAllResourcesSummaryRequest instanceof CollectAllResourcesSummaryRequest) {
                    name = collectAllResourcesSummaryRequest.name;
                    type = collectAllResourcesSummaryRequest.type;
                    regionId = collectAllResourcesSummaryRequest.regionId;
                    epId = collectAllResourcesSummaryRequest.epId;
                    projectId = collectAllResourcesSummaryRequest.projectId;
                    tags = collectAllResourcesSummaryRequest.tags;
                } else {
                    name = collectAllResourcesSummaryRequest['name'];
                    type = collectAllResourcesSummaryRequest['type'];
                    regionId = collectAllResourcesSummaryRequest['region_id'];
                    epId = collectAllResourcesSummaryRequest['ep_id'];
                    projectId = collectAllResourcesSummaryRequest['project_id'];
                    tags = collectAllResourcesSummaryRequest['tags'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源数量，需要当前用户有resourcecenter::getResourceCount权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countAllResources(countAllResourcesRequest?: CountAllResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/all-resources/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let name;
            
            let type;
            
            let regionId;
            
            let epId;
            
            let projectId;
            
            let tags;

            if (countAllResourcesRequest !== null && countAllResourcesRequest !== undefined) {
                if (countAllResourcesRequest instanceof CountAllResourcesRequest) {
                    id = countAllResourcesRequest.id;
                    name = countAllResourcesRequest.name;
                    type = countAllResourcesRequest.type;
                    regionId = countAllResourcesRequest.regionId;
                    epId = countAllResourcesRequest.epId;
                    projectId = countAllResourcesRequest.projectId;
                    tags = countAllResourcesRequest.tags;
                } else {
                    id = countAllResourcesRequest['id'];
                    name = countAllResourcesRequest['name'];
                    type = countAllResourcesRequest['type'];
                    regionId = countAllResourcesRequest['region_id'];
                    epId = countAllResourcesRequest['ep_id'];
                    projectId = countAllResourcesRequest['project_id'];
                    tags = countAllResourcesRequest['tags'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有已对接RC的云服务、资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllProviders(listAllProvidersRequest?: ListAllProvidersRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/all-providers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let xLanguage;

            if (listAllProvidersRequest !== null && listAllProvidersRequest !== undefined) {
                if (listAllProvidersRequest instanceof ListAllProvidersRequest) {
                    offset = listAllProvidersRequest.offset;
                    limit = listAllProvidersRequest.limit;
                    xLanguage = listAllProvidersRequest.xLanguage;
                } else {
                    offset = listAllProvidersRequest['offset'];
                    limit = listAllProvidersRequest['limit'];
                    xLanguage = listAllProvidersRequest['X-Language'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回当前用户下所有资源，需要当前用户有resourcecenter::listResource权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllResources(listAllResourcesRequest?: ListAllResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/all-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionId;
            
            let epId;
            
            let type;
            
            let limit;
            
            let marker;
            
            let id;
            
            let name;
            
            let tags;
            
            let groupId;
            
            let sortKey;
            
            let sortValue;

            if (listAllResourcesRequest !== null && listAllResourcesRequest !== undefined) {
                if (listAllResourcesRequest instanceof ListAllResourcesRequest) {
                    regionId = listAllResourcesRequest.regionId;
                    epId = listAllResourcesRequest.epId;
                    type = listAllResourcesRequest.type;
                    limit = listAllResourcesRequest.limit;
                    marker = listAllResourcesRequest.marker;
                    id = listAllResourcesRequest.id;
                    name = listAllResourcesRequest.name;
                    tags = listAllResourcesRequest.tags;
                    groupId = listAllResourcesRequest.groupId;
                    sortKey = listAllResourcesRequest.sortKey;
                    sortValue = listAllResourcesRequest.sortValue;
                } else {
                    regionId = listAllResourcesRequest['region_id'];
                    epId = listAllResourcesRequest['ep_id'];
                    type = listAllResourcesRequest['type'];
                    limit = listAllResourcesRequest['limit'];
                    marker = listAllResourcesRequest['marker'];
                    id = listAllResourcesRequest['id'];
                    name = listAllResourcesRequest['name'];
                    tags = listAllResourcesRequest['tags'];
                    groupId = listAllResourcesRequest['group_id'];
                    sortKey = listAllResourcesRequest['sort_key'];
                    sortValue = listAllResourcesRequest['sort_value'];
                }
            }

        
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortValue !== null && sortValue !== undefined) {
                localVarQueryParameter['sort_value'] = sortValue;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号下所有资源的标签，需要当前用户有resourcecenter::listResourceTag权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTags(listAllTagsRequest?: ListAllTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/all-resources/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let key;
            
            let marker;
            
            let limit;

            if (listAllTagsRequest !== null && listAllTagsRequest !== undefined) {
                if (listAllTagsRequest instanceof ListAllTagsRequest) {
                    key = listAllTagsRequest.key;
                    marker = listAllTagsRequest.marker;
                    limit = listAllTagsRequest.limit;
                } else {
                    key = listAllTagsRequest['key'];
                    marker = listAllTagsRequest['marker'];
                    limit = listAllTagsRequest['limit'];
                }
            }

        
            if (key !== null && key !== undefined) {
                localVarQueryParameter['key'] = key;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 返回当前租户下特定资源类型的资源，需要当前用户有resourcecenter::listResourceByType权限。比如查询云服务器，对应的RC资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResources(listResourcesRequest?: ListResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/provider/{provider}/type/{type}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let provider;
            
            let type;
            
            let regionId;
            
            let epId;
            
            let tag;
            
            let limit;
            
            let marker;

            if (listResourcesRequest !== null && listResourcesRequest !== undefined) {
                if (listResourcesRequest instanceof ListResourcesRequest) {
                    provider = listResourcesRequest.provider;
                    type = listResourcesRequest.type;
                    regionId = listResourcesRequest.regionId;
                    epId = listResourcesRequest.epId;
                    tag = listResourcesRequest.tag;
                    limit = listResourcesRequest.limit;
                    marker = listResourcesRequest.marker;
                } else {
                    provider = listResourcesRequest['provider'];
                    type = listResourcesRequest['type'];
                    regionId = listResourcesRequest['region_id'];
                    epId = listResourcesRequest['ep_id'];
                    tag = listResourcesRequest['tag'];
                    limit = listResourcesRequest['limit'];
                    marker = listResourcesRequest['marker'];
                }
            }

        
            if (provider === null || provider === undefined) {
            throw new RequiredError('provider','Required parameter provider was null or undefined when calling listResources.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling listResources.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (epId !== null && epId !== undefined) {
                localVarQueryParameter['ep_id'] = epId;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'provider': provider,'type': type, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定资源ID，返回该资源的详细信息，需要当前用户有resourcecenter::getResourceByType权限。比如查询云服务器，对应的RC资源类型是ecs.cloudservers，其中provider为ecs，type为cloudservers。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceById(showResourceByIdRequest?: ShowResourceByIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/provider/{provider}/type/{type}/resources/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let provider;
            
            let type;
            
            let resourceId;

            if (showResourceByIdRequest !== null && showResourceByIdRequest !== undefined) {
                if (showResourceByIdRequest instanceof ShowResourceByIdRequest) {
                    provider = showResourceByIdRequest.provider;
                    type = showResourceByIdRequest.type;
                    resourceId = showResourceByIdRequest.resourceId;
                } else {
                    provider = showResourceByIdRequest['provider'];
                    type = showResourceByIdRequest['type'];
                    resourceId = showResourceByIdRequest['resource_id'];
                }
            }

        
            if (provider === null || provider === undefined) {
            throw new RequiredError('provider','Required parameter provider was null or undefined when calling showResourceById.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling showResourceById.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceById.');
            }

            options.pathParams = { 'provider': provider,'type': type,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前帐号下的单个资源，需要当前用户有resourcecenter::getResource权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceDetail(showResourceDetailRequest?: ShowResourceDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/resource-center/all-resources/{resource_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (showResourceDetailRequest !== null && showResourceDetailRequest !== undefined) {
                if (showResourceDetailRequest instanceof ShowResourceDetailRequest) {
                    resourceId = showResourceDetailRequest.resourceId;
                } else {
                    resourceId = showResourceDetailRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceDetail.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): RcClient {
    return new RcClient(client);
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