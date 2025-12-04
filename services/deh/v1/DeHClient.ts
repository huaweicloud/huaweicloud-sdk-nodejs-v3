import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchCreateDedicatedHostTagsRequest } from './model/BatchCreateDedicatedHostTagsRequest';
import { BatchCreateDedicatedHostTagsResponse } from './model/BatchCreateDedicatedHostTagsResponse';
import { BatchDeleteDedicatedHostTagsRequest } from './model/BatchDeleteDedicatedHostTagsRequest';
import { BatchDeleteDedicatedHostTagsResponse } from './model/BatchDeleteDedicatedHostTagsResponse';
import { CreateDedicatedHostRequest } from './model/CreateDedicatedHostRequest';
import { CreateDedicatedHostResponse } from './model/CreateDedicatedHostResponse';
import { DedicatedHostType } from './model/DedicatedHostType';
import { DedicatedHostTypeOffering } from './model/DedicatedHostTypeOffering';
import { DeleteDedicatedHostRequest } from './model/DeleteDedicatedHostRequest';
import { DeleteDedicatedHostResponse } from './model/DeleteDedicatedHostResponse';
import { ListDedicatedHostAllTypesRequest } from './model/ListDedicatedHostAllTypesRequest';
import { ListDedicatedHostAllTypesResponse } from './model/ListDedicatedHostAllTypesResponse';
import { ListDedicatedHostTagsRequest } from './model/ListDedicatedHostTagsRequest';
import { ListDedicatedHostTagsResponse } from './model/ListDedicatedHostTagsResponse';
import { ListDedicatedHostTypesRequest } from './model/ListDedicatedHostTypesRequest';
import { ListDedicatedHostTypesResponse } from './model/ListDedicatedHostTypesResponse';
import { ListDedicatedHostsByTagsRequest } from './model/ListDedicatedHostsByTagsRequest';
import { ListDedicatedHostsByTagsResponse } from './model/ListDedicatedHostsByTagsResponse';
import { ListDedicatedHostsRequest } from './model/ListDedicatedHostsRequest';
import { ListDedicatedHostsResponse } from './model/ListDedicatedHostsResponse';
import { ListResourceTag } from './model/ListResourceTag';
import { ListServersDedicatedHostRequest } from './model/ListServersDedicatedHostRequest';
import { ListServersDedicatedHostResponse } from './model/ListServersDedicatedHostResponse';
import { Match } from './model/Match';
import { PageInfo } from './model/PageInfo';
import { ReqAllocateDeh } from './model/ReqAllocateDeh';
import { ReqAllocateDehExtendParam } from './model/ReqAllocateDehExtendParam';
import { ReqListDehByTags } from './model/ReqListDehByTags';
import { ReqSetOrDeleteTags } from './model/ReqSetOrDeleteTags';
import { ReqUpdateDeh } from './model/ReqUpdateDeh';
import { ReqUpdateDehMessage } from './model/ReqUpdateDehMessage';
import { ResourceTag } from './model/ResourceTag';
import { RespAddr } from './model/RespAddr';
import { RespDedicatedHost } from './model/RespDedicatedHost';
import { RespDeh } from './model/RespDeh';
import { RespFlavor } from './model/RespFlavor';
import { RespHostProperty } from './model/RespHostProperty';
import { RespHostType } from './model/RespHostType';
import { RespImage } from './model/RespImage';
import { RespInstanceCapacity } from './model/RespInstanceCapacity';
import { RespMetadata } from './model/RespMetadata';
import { RespQuotaSet } from './model/RespQuotaSet';
import { RespServer } from './model/RespServer';
import { ShowDedicatedHostRequest } from './model/ShowDedicatedHostRequest';
import { ShowDedicatedHostResponse } from './model/ShowDedicatedHostResponse';
import { ShowDedicatedHostTagsRequest } from './model/ShowDedicatedHostTagsRequest';
import { ShowDedicatedHostTagsResponse } from './model/ShowDedicatedHostTagsResponse';
import { ShowQuotaSetsRequest } from './model/ShowQuotaSetsRequest';
import { ShowQuotaSetsResponse } from './model/ShowQuotaSetsResponse';
import { Tag } from './model/Tag';
import { UpdateDedicatedHostRequest } from './model/UpdateDedicatedHostRequest';
import { UpdateDedicatedHostResponse } from './model/UpdateDedicatedHostResponse';

export class DeHClient {
    public static newBuilder(): ClientBuilder<DeHClient> {
            let client = new ClientBuilder<DeHClient>(newClient);
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
     * 为指定专属主机批量添加标签。
     * 
     * 标签管理服务（TMS）使用该接口批量添加专属主机的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加专属主机标签
     * @param {string} dedicatedHostId 专属主机ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {ReqSetOrDeleteTags} reqSetOrDeleteTags 批量添加标签请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateDedicatedHostTags(batchCreateDedicatedHostTagsRequest?: BatchCreateDedicatedHostTagsRequest): Promise<BatchCreateDedicatedHostTagsResponse> {
        const options = ParamCreater().batchCreateDedicatedHostTags(batchCreateDedicatedHostTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除指定专属主机标签。
     * 
     * 标签管理服务（TMS）使用该接口批量删除专属主机的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除专属主机标签
     * @param {string} dedicatedHostId 专属主机ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {ReqSetOrDeleteTags} reqSetOrDeleteTags 批量删除标签请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteDedicatedHostTags(batchDeleteDedicatedHostTagsRequest?: BatchDeleteDedicatedHostTagsRequest): Promise<BatchDeleteDedicatedHostTagsResponse> {
        const options = ParamCreater().batchDeleteDedicatedHostTags(batchDeleteDedicatedHostTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 分配一台或多台专属主机，需要设置实例规格、所属AZ、数量等参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 分配专属主机
     * @param {ReqAllocateDeh} reqAllocateDeh 创建专属主机消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDedicatedHost(createDedicatedHostRequest?: CreateDedicatedHostRequest): Promise<CreateDedicatedHostResponse> {
        const options = ParamCreater().createDedicatedHost(createDedicatedHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 释放专属主机。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 释放专属主机
     * @param {string} dedicatedHostId 专属主机ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDedicatedHost(deleteDedicatedHostRequest?: DeleteDedicatedHostRequest): Promise<DeleteDedicatedHostResponse> {
        const options = ParamCreater().deleteDedicatedHost(deleteDedicatedHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询专属主机类型列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属主机类型列表
     * @param {string} [flavor] 
     * @param {string} [availabilityZone] 
     * @param {string} [limit] 
     * @param {string} [marker] 
     * @param {string} [hostType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDedicatedHostAllTypes(listDedicatedHostAllTypesRequest?: ListDedicatedHostAllTypesRequest): Promise<ListDedicatedHostAllTypesResponse> {
        const options = ParamCreater().listDedicatedHostAllTypes(listDedicatedHostAllTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有专属主机的标签信息。
     * 
     * 标签管理服务（TMS）使用该接口查询所有专属主机的标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有专属主机标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDedicatedHostTags(listDedicatedHostTagsRequest?: ListDedicatedHostTagsRequest): Promise<ListDedicatedHostTagsResponse> {
        const options = ParamCreater().listDedicatedHostTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某一AZ内可用的专属主机类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用的专属主机类型
     * @param {string} availabilityZone AZ。
     * @param {string} [limit] 查询返回云服务器列表当前页面的数量。
     * @param {string} [marker] 以单页最后一条专属主机的host_type作为分页标记
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDedicatedHostTypes(listDedicatedHostTypesRequest?: ListDedicatedHostTypesRequest): Promise<ListDedicatedHostTypesResponse> {
        const options = ParamCreater().listDedicatedHostTypes(listDedicatedHostTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过该接口查询专属主机列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属主机列表
     * @param {string} [dedicatedHostId] 专属主机ID。
     * @param {string} [name] 专属主机名称。
     * @param {string} [hostType] 专属主机类型。
     * @param {string} [hostTypeName] 专属主机类型的名称。
     * @param {string} [flavor] 规格ID。
     * @param {'available' | 'fault' | 'released'} [state] 专属主机状态。  取值范围：“available”、“fault”或“released”。
     * @param {string} [tenant] 取值范围：租户ID或“all”。  只有管理员可以指定该参数。
     * @param {string} [availabilityZone] 专属主机所属AZ。
     * @param {number} [limit] 每个页面上显示的条目数。
     * @param {string} [marker] 该值是上一页最后一条记录的ID。  如果“marker”取值无效，将会返回“400”错误码。
     * @param {string} [tags] 专属主机标签。
     * @param {string} [instanceUuid] 专属主机上的云服务器ID。
     * @param {string} [releasedAt] 专属主机的释放时间。
     * @param {string} [changesSince] 当专属主机更新了状态时，按日期和时间戳过滤响应。为了便于记录更改，还可能返回最近删除的专属主机。  日期和时间戳的格式为ISO 8601：CCYY-MM-DDThh:mm:ss±hh:mm  如果包含“hh:mm”值，则将时区作为UTC的偏移量返回。例如，“2015-08-27T09:49:58-05:00”。如果您省略时区，则假定为UTC时区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDedicatedHosts(listDedicatedHostsRequest?: ListDedicatedHostsRequest): Promise<ListDedicatedHostsResponse> {
        const options = ParamCreater().listDedicatedHosts(listDedicatedHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 使用标签过滤专属主机列表，并返回专属主机使用的所有标签。
     * 
     * 标签管理服务（TMS）使用该接口过滤专属主机列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按标签查询专属主机列表
     * @param {ReqListDehByTags} reqListDehByTags 按标签查询专属主机列表请求消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDedicatedHostsByTags(listDedicatedHostsByTagsRequest?: ListDedicatedHostsByTagsRequest): Promise<ListDedicatedHostsByTagsResponse> {
        const options = ParamCreater().listDedicatedHostsByTags(listDedicatedHostsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询专属主机上已部署的云服务器信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属主机上的云服务器
     * @param {string} dedicatedHostId 专属主机ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {number} [limit] 每个页面上显示的条目数。
     * @param {string} [marker] 该值是上一页最后一条记录的ID。  如果“marker”取值无效，将会返回“400”错误码。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServersDedicatedHost(listServersDedicatedHostRequest?: ListServersDedicatedHostRequest): Promise<ListServersDedicatedHostResponse> {
        const options = ParamCreater().listServersDedicatedHost(listServersDedicatedHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某一台专属主机的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属主机详情
     * @param {string} dedicatedHostId 专属主机ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDedicatedHost(showDedicatedHostRequest?: ShowDedicatedHostRequest): Promise<ShowDedicatedHostResponse> {
        const options = ParamCreater().showDedicatedHost(showDedicatedHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定专属主机的标签信息。
     * 
     * 标签管理服务（TMS）使用该接口查询指定专属主机的全部标签数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定专属主机标签
     * @param {string} dedicatedHostId 专属主机ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDedicatedHostTags(showDedicatedHostTagsRequest?: ShowDedicatedHostTagsRequest): Promise<ShowDedicatedHostTagsResponse> {
        const options = ParamCreater().showDedicatedHostTags(showDedicatedHostTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询租户的专属主机配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的专属主机配额
     * @param {string} tenantId 租户ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {string} [resource] 配额类别。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotaSets(showQuotaSetsRequest?: ShowQuotaSetsRequest): Promise<ShowQuotaSetsResponse> {
        const options = ParamCreater().showQuotaSets(showQuotaSetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于变更专属主机的“auto_placement”和“name”属性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新专属主机属性
     * @param {string} dedicatedHostId 专属主机ID。  可以从专属主机控制台查询，或者通过调用查询专属主机列表API获取。
     * @param {ReqUpdateDeh} reqUpdateDeh 更新专属主机属性消息体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDedicatedHost(updateDedicatedHostRequest?: UpdateDedicatedHostRequest): Promise<UpdateDedicatedHostResponse> {
        const options = ParamCreater().updateDedicatedHost(updateDedicatedHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为指定专属主机批量添加标签。
         * 
         * 标签管理服务（TMS）使用该接口批量添加专属主机的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateDedicatedHostTags(batchCreateDedicatedHostTagsRequest?: BatchCreateDedicatedHostTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/dedicated-host-tags/{dedicated_host_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dedicatedHostId;

            if (batchCreateDedicatedHostTagsRequest !== null && batchCreateDedicatedHostTagsRequest !== undefined) {
                if (batchCreateDedicatedHostTagsRequest instanceof BatchCreateDedicatedHostTagsRequest) {
                    dedicatedHostId = batchCreateDedicatedHostTagsRequest.dedicatedHostId;
                    body = batchCreateDedicatedHostTagsRequest.body
                } else {
                    dedicatedHostId = batchCreateDedicatedHostTagsRequest['dedicated_host_id'];
                    body = batchCreateDedicatedHostTagsRequest['body'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling batchCreateDedicatedHostTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除指定专属主机标签。
         * 
         * 标签管理服务（TMS）使用该接口批量删除专属主机的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteDedicatedHostTags(batchDeleteDedicatedHostTagsRequest?: BatchDeleteDedicatedHostTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/dedicated-host-tags/{dedicated_host_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dedicatedHostId;

            if (batchDeleteDedicatedHostTagsRequest !== null && batchDeleteDedicatedHostTagsRequest !== undefined) {
                if (batchDeleteDedicatedHostTagsRequest instanceof BatchDeleteDedicatedHostTagsRequest) {
                    dedicatedHostId = batchDeleteDedicatedHostTagsRequest.dedicatedHostId;
                    body = batchDeleteDedicatedHostTagsRequest.body
                } else {
                    dedicatedHostId = batchDeleteDedicatedHostTagsRequest['dedicated_host_id'];
                    body = batchDeleteDedicatedHostTagsRequest['body'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling batchDeleteDedicatedHostTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 分配一台或多台专属主机，需要设置实例规格、所属AZ、数量等参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDedicatedHost(createDedicatedHostRequest?: CreateDedicatedHostRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/dedicated-hosts",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDedicatedHostRequest !== null && createDedicatedHostRequest !== undefined) {
                if (createDedicatedHostRequest instanceof CreateDedicatedHostRequest) {
                    body = createDedicatedHostRequest.body
                } else {
                    body = createDedicatedHostRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 释放专属主机。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDedicatedHost(deleteDedicatedHostRequest?: DeleteDedicatedHostRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/dedicated-hosts/{dedicated_host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dedicatedHostId;

            if (deleteDedicatedHostRequest !== null && deleteDedicatedHostRequest !== undefined) {
                if (deleteDedicatedHostRequest instanceof DeleteDedicatedHostRequest) {
                    dedicatedHostId = deleteDedicatedHostRequest.dedicatedHostId;
                } else {
                    dedicatedHostId = deleteDedicatedHostRequest['dedicated_host_id'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling deleteDedicatedHost.');
            }

            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询专属主机类型列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDedicatedHostAllTypes(listDedicatedHostAllTypesRequest?: ListDedicatedHostAllTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dedicated-host-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let flavor;
            
            let availabilityZone;
            
            let limit;
            
            let marker;
            
            let hostType;

            if (listDedicatedHostAllTypesRequest !== null && listDedicatedHostAllTypesRequest !== undefined) {
                if (listDedicatedHostAllTypesRequest instanceof ListDedicatedHostAllTypesRequest) {
                    flavor = listDedicatedHostAllTypesRequest.flavor;
                    availabilityZone = listDedicatedHostAllTypesRequest.availabilityZone;
                    limit = listDedicatedHostAllTypesRequest.limit;
                    marker = listDedicatedHostAllTypesRequest.marker;
                    hostType = listDedicatedHostAllTypesRequest.hostType;
                } else {
                    flavor = listDedicatedHostAllTypesRequest['flavor'];
                    availabilityZone = listDedicatedHostAllTypesRequest['availability_zone'];
                    limit = listDedicatedHostAllTypesRequest['limit'];
                    marker = listDedicatedHostAllTypesRequest['marker'];
                    hostType = listDedicatedHostAllTypesRequest['host_type'];
                }
            }

        
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (hostType !== null && hostType !== undefined) {
                localVarQueryParameter['host_type'] = hostType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有专属主机的标签信息。
         * 
         * 标签管理服务（TMS）使用该接口查询所有专属主机的标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDedicatedHostTags() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dedicated-host-tags/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某一AZ内可用的专属主机类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDedicatedHostTypes(listDedicatedHostTypesRequest?: ListDedicatedHostTypesRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/availability-zone/{availability_zone}/dedicated-host-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let availabilityZone;
            
            let limit;
            
            let marker;

            if (listDedicatedHostTypesRequest !== null && listDedicatedHostTypesRequest !== undefined) {
                if (listDedicatedHostTypesRequest instanceof ListDedicatedHostTypesRequest) {
                    availabilityZone = listDedicatedHostTypesRequest.availabilityZone;
                    limit = listDedicatedHostTypesRequest.limit;
                    marker = listDedicatedHostTypesRequest.marker;
                } else {
                    availabilityZone = listDedicatedHostTypesRequest['availability_zone'];
                    limit = listDedicatedHostTypesRequest['limit'];
                    marker = listDedicatedHostTypesRequest['marker'];
                }
            }

        
            if (availabilityZone === null || availabilityZone === undefined) {
            throw new RequiredError('availabilityZone','Required parameter availabilityZone was null or undefined when calling listDedicatedHostTypes.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'availability_zone': availabilityZone, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过该接口查询专属主机列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDedicatedHosts(listDedicatedHostsRequest?: ListDedicatedHostsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dedicated-hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dedicatedHostId;
            
            let name;
            
            let hostType;
            
            let hostTypeName;
            
            let flavor;
            
            let state;
            
            let tenant;
            
            let availabilityZone;
            
            let limit;
            
            let marker;
            
            let tags;
            
            let instanceUuid;
            
            let releasedAt;
            
            let changesSince;

            if (listDedicatedHostsRequest !== null && listDedicatedHostsRequest !== undefined) {
                if (listDedicatedHostsRequest instanceof ListDedicatedHostsRequest) {
                    dedicatedHostId = listDedicatedHostsRequest.dedicatedHostId;
                    name = listDedicatedHostsRequest.name;
                    hostType = listDedicatedHostsRequest.hostType;
                    hostTypeName = listDedicatedHostsRequest.hostTypeName;
                    flavor = listDedicatedHostsRequest.flavor;
                    state = listDedicatedHostsRequest.state;
                    tenant = listDedicatedHostsRequest.tenant;
                    availabilityZone = listDedicatedHostsRequest.availabilityZone;
                    limit = listDedicatedHostsRequest.limit;
                    marker = listDedicatedHostsRequest.marker;
                    tags = listDedicatedHostsRequest.tags;
                    instanceUuid = listDedicatedHostsRequest.instanceUuid;
                    releasedAt = listDedicatedHostsRequest.releasedAt;
                    changesSince = listDedicatedHostsRequest.changesSince;
                } else {
                    dedicatedHostId = listDedicatedHostsRequest['dedicated_host_id'];
                    name = listDedicatedHostsRequest['name'];
                    hostType = listDedicatedHostsRequest['host_type'];
                    hostTypeName = listDedicatedHostsRequest['host_type_name'];
                    flavor = listDedicatedHostsRequest['flavor'];
                    state = listDedicatedHostsRequest['state'];
                    tenant = listDedicatedHostsRequest['tenant'];
                    availabilityZone = listDedicatedHostsRequest['availability_zone'];
                    limit = listDedicatedHostsRequest['limit'];
                    marker = listDedicatedHostsRequest['marker'];
                    tags = listDedicatedHostsRequest['tags'];
                    instanceUuid = listDedicatedHostsRequest['instance_uuid'];
                    releasedAt = listDedicatedHostsRequest['released_at'];
                    changesSince = listDedicatedHostsRequest['changes-since'];
                }
            }

        
            if (dedicatedHostId !== null && dedicatedHostId !== undefined) {
                localVarQueryParameter['dedicated_host_id'] = dedicatedHostId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (hostType !== null && hostType !== undefined) {
                localVarQueryParameter['host_type'] = hostType;
            }
            if (hostTypeName !== null && hostTypeName !== undefined) {
                localVarQueryParameter['host_type_name'] = hostTypeName;
            }
            if (flavor !== null && flavor !== undefined) {
                localVarQueryParameter['flavor'] = flavor;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (tenant !== null && tenant !== undefined) {
                localVarQueryParameter['tenant'] = tenant;
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (instanceUuid !== null && instanceUuid !== undefined) {
                localVarQueryParameter['instance_uuid'] = instanceUuid;
            }
            if (releasedAt !== null && releasedAt !== undefined) {
                localVarQueryParameter['released_at'] = releasedAt;
            }
            if (changesSince !== null && changesSince !== undefined) {
                localVarQueryParameter['changes-since'] = changesSince;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤专属主机列表，并返回专属主机使用的所有标签。
         * 
         * 标签管理服务（TMS）使用该接口过滤专属主机列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDedicatedHostsByTags(listDedicatedHostsByTagsRequest?: ListDedicatedHostsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/dedicated-host-tags/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listDedicatedHostsByTagsRequest !== null && listDedicatedHostsByTagsRequest !== undefined) {
                if (listDedicatedHostsByTagsRequest instanceof ListDedicatedHostsByTagsRequest) {
                    body = listDedicatedHostsByTagsRequest.body
                } else {
                    body = listDedicatedHostsByTagsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询专属主机上已部署的云服务器信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServersDedicatedHost(listServersDedicatedHostRequest?: ListServersDedicatedHostRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dedicated-hosts/{dedicated_host_id}/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dedicatedHostId;
            
            let limit;
            
            let marker;

            if (listServersDedicatedHostRequest !== null && listServersDedicatedHostRequest !== undefined) {
                if (listServersDedicatedHostRequest instanceof ListServersDedicatedHostRequest) {
                    dedicatedHostId = listServersDedicatedHostRequest.dedicatedHostId;
                    limit = listServersDedicatedHostRequest.limit;
                    marker = listServersDedicatedHostRequest.marker;
                } else {
                    dedicatedHostId = listServersDedicatedHostRequest['dedicated_host_id'];
                    limit = listServersDedicatedHostRequest['limit'];
                    marker = listServersDedicatedHostRequest['marker'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling listServersDedicatedHost.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某一台专属主机的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDedicatedHost(showDedicatedHostRequest?: ShowDedicatedHostRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dedicated-hosts/{dedicated_host_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dedicatedHostId;

            if (showDedicatedHostRequest !== null && showDedicatedHostRequest !== undefined) {
                if (showDedicatedHostRequest instanceof ShowDedicatedHostRequest) {
                    dedicatedHostId = showDedicatedHostRequest.dedicatedHostId;
                } else {
                    dedicatedHostId = showDedicatedHostRequest['dedicated_host_id'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling showDedicatedHost.');
            }

            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定专属主机的标签信息。
         * 
         * 标签管理服务（TMS）使用该接口查询指定专属主机的全部标签数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDedicatedHostTags(showDedicatedHostTagsRequest?: ShowDedicatedHostTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/dedicated-host-tags/{dedicated_host_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let dedicatedHostId;

            if (showDedicatedHostTagsRequest !== null && showDedicatedHostTagsRequest !== undefined) {
                if (showDedicatedHostTagsRequest instanceof ShowDedicatedHostTagsRequest) {
                    dedicatedHostId = showDedicatedHostTagsRequest.dedicatedHostId;
                } else {
                    dedicatedHostId = showDedicatedHostTagsRequest['dedicated_host_id'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling showDedicatedHostTags.');
            }

            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询租户的专属主机配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotaSets(showQuotaSetsRequest?: ShowQuotaSetsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/quota-sets/{tenant_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tenantId;
            
            let resource;

            if (showQuotaSetsRequest !== null && showQuotaSetsRequest !== undefined) {
                if (showQuotaSetsRequest instanceof ShowQuotaSetsRequest) {
                    tenantId = showQuotaSetsRequest.tenantId;
                    resource = showQuotaSetsRequest.resource;
                } else {
                    tenantId = showQuotaSetsRequest['tenant_id'];
                    resource = showQuotaSetsRequest['resource'];
                }
            }

        
            if (tenantId === null || tenantId === undefined) {
            throw new RequiredError('tenantId','Required parameter tenantId was null or undefined when calling showQuotaSets.');
            }
            if (resource !== null && resource !== undefined) {
                localVarQueryParameter['resource'] = resource;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'tenant_id': tenantId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于变更专属主机的“auto_placement”和“name”属性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDedicatedHost(updateDedicatedHostRequest?: UpdateDedicatedHostRequest) {
            const options = {
                method: "PUT",
                url: "/v1.0/{project_id}/dedicated-hosts/{dedicated_host_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dedicatedHostId;

            if (updateDedicatedHostRequest !== null && updateDedicatedHostRequest !== undefined) {
                if (updateDedicatedHostRequest instanceof UpdateDedicatedHostRequest) {
                    dedicatedHostId = updateDedicatedHostRequest.dedicatedHostId;
                    body = updateDedicatedHostRequest.body
                } else {
                    dedicatedHostId = updateDedicatedHostRequest['dedicated_host_id'];
                    body = updateDedicatedHostRequest['body'];
                }
            }

        
            if (dedicatedHostId === null || dedicatedHostId === undefined) {
            throw new RequiredError('dedicatedHostId','Required parameter dedicatedHostId was null or undefined when calling updateDedicatedHost.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dedicated_host_id': dedicatedHostId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): DeHClient {
    return new DeHClient(client);
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