import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AcceptOrRejectEndpointRequest } from './model/AcceptOrRejectEndpointRequest';
import { AcceptOrRejectEndpointRequestBody } from './model/AcceptOrRejectEndpointRequestBody';
import { AcceptOrRejectEndpointResponse } from './model/AcceptOrRejectEndpointResponse';
import { AddOrRemoveServicePermissionsRequest } from './model/AddOrRemoveServicePermissionsRequest';
import { AddOrRemoveServicePermissionsRequestBody } from './model/AddOrRemoveServicePermissionsRequestBody';
import { AddOrRemoveServicePermissionsResponse } from './model/AddOrRemoveServicePermissionsResponse';
import { BatchAddEndpointServicePermissionsRequest } from './model/BatchAddEndpointServicePermissionsRequest';
import { BatchAddEndpointServicePermissionsResponse } from './model/BatchAddEndpointServicePermissionsResponse';
import { BatchAddOrRemoveResourceInstanceBody } from './model/BatchAddOrRemoveResourceInstanceBody';
import { BatchAddOrRemoveResourceInstanceRequest } from './model/BatchAddOrRemoveResourceInstanceRequest';
import { BatchAddOrRemoveResourceInstanceResponse } from './model/BatchAddOrRemoveResourceInstanceResponse';
import { BatchAddPermissionRequest } from './model/BatchAddPermissionRequest';
import { BatchRemoveEndpointServicePermissionsRequest } from './model/BatchRemoveEndpointServicePermissionsRequest';
import { BatchRemoveEndpointServicePermissionsResponse } from './model/BatchRemoveEndpointServicePermissionsResponse';
import { BatchRemovePermissionRequest } from './model/BatchRemovePermissionRequest';
import { ConnectionEndpoints } from './model/ConnectionEndpoints';
import { ConnectionsDesc } from './model/ConnectionsDesc';
import { CreateEndpointRequest } from './model/CreateEndpointRequest';
import { CreateEndpointRequestBody } from './model/CreateEndpointRequestBody';
import { CreateEndpointResponse } from './model/CreateEndpointResponse';
import { CreateEndpointServiceRequest } from './model/CreateEndpointServiceRequest';
import { CreateEndpointServiceRequestBody } from './model/CreateEndpointServiceRequestBody';
import { CreateEndpointServiceResponse } from './model/CreateEndpointServiceResponse';
import { DeleteEndpointPolicyRequest } from './model/DeleteEndpointPolicyRequest';
import { DeleteEndpointPolicyResponse } from './model/DeleteEndpointPolicyResponse';
import { DeleteEndpointRequest } from './model/DeleteEndpointRequest';
import { DeleteEndpointResponse } from './model/DeleteEndpointResponse';
import { DeleteEndpointServiceRequest } from './model/DeleteEndpointServiceRequest';
import { DeleteEndpointServiceResponse } from './model/DeleteEndpointServiceResponse';
import { EndpointResp } from './model/EndpointResp';
import { EndpointService } from './model/EndpointService';
import { EpsAddPermissionRequest } from './model/EpsAddPermissionRequest';
import { EpsPermission } from './model/EpsPermission';
import { EpsRemovePermissionRequest } from './model/EpsRemovePermissionRequest';
import { EpsUpdatePermissionDesc } from './model/EpsUpdatePermissionDesc';
import { Link } from './model/Link';
import { ListEndpointInfoDetailsRequest } from './model/ListEndpointInfoDetailsRequest';
import { ListEndpointInfoDetailsResponse } from './model/ListEndpointInfoDetailsResponse';
import { ListEndpointServiceRequest } from './model/ListEndpointServiceRequest';
import { ListEndpointServiceResponse } from './model/ListEndpointServiceResponse';
import { ListEndpointsRequest } from './model/ListEndpointsRequest';
import { ListEndpointsResponse } from './model/ListEndpointsResponse';
import { ListQueryProjectResourceTagsRequest } from './model/ListQueryProjectResourceTagsRequest';
import { ListQueryProjectResourceTagsResponse } from './model/ListQueryProjectResourceTagsResponse';
import { ListQuotaDetailsRequest } from './model/ListQuotaDetailsRequest';
import { ListQuotaDetailsResponse } from './model/ListQuotaDetailsResponse';
import { ListResourceInstancesRequest } from './model/ListResourceInstancesRequest';
import { ListResourceInstancesResponse } from './model/ListResourceInstancesResponse';
import { ListServiceConnectionsRequest } from './model/ListServiceConnectionsRequest';
import { ListServiceConnectionsResponse } from './model/ListServiceConnectionsResponse';
import { ListServiceDescribeDetailsRequest } from './model/ListServiceDescribeDetailsRequest';
import { ListServiceDescribeDetailsResponse } from './model/ListServiceDescribeDetailsResponse';
import { ListServiceDetailsRequest } from './model/ListServiceDetailsRequest';
import { ListServiceDetailsResponse } from './model/ListServiceDetailsResponse';
import { ListServicePermissionsDetailsRequest } from './model/ListServicePermissionsDetailsRequest';
import { ListServicePermissionsDetailsResponse } from './model/ListServicePermissionsDetailsResponse';
import { ListServicePublicDetailsRequest } from './model/ListServicePublicDetailsRequest';
import { ListServicePublicDetailsResponse } from './model/ListServicePublicDetailsResponse';
import { ListSpecifiedVersionDetailsRequest } from './model/ListSpecifiedVersionDetailsRequest';
import { ListSpecifiedVersionDetailsResponse } from './model/ListSpecifiedVersionDetailsResponse';
import { ListVersionDetailsRequest } from './model/ListVersionDetailsRequest';
import { ListVersionDetailsResponse } from './model/ListVersionDetailsResponse';
import { Match } from './model/Match';
import { ModelError } from './model/ModelError';
import { PermissionObject } from './model/PermissionObject';
import { PolicyStatement } from './model/PolicyStatement';
import { PortList } from './model/PortList';
import { QueryError } from './model/QueryError';
import { QueryResourceInstanceTagsBody } from './model/QueryResourceInstanceTagsBody';
import { Quotas } from './model/Quotas';
import { ResourceInstance } from './model/ResourceInstance';
import { ResourceTag } from './model/ResourceTag';
import { ResourcesResp } from './model/ResourcesResp';
import { RoutetableInfoError } from './model/RoutetableInfoError';
import { RoutetableInfoErrorDetial } from './model/RoutetableInfoErrorDetial';
import { ServiceList } from './model/ServiceList';
import { TagList } from './model/TagList';
import { TagValuesList } from './model/TagValuesList';
import { UpdateEndpointConnectionsDescRequest } from './model/UpdateEndpointConnectionsDescRequest';
import { UpdateEndpointConnectionsDescResponse } from './model/UpdateEndpointConnectionsDescResponse';
import { UpdateEndpointPolicyRequest } from './model/UpdateEndpointPolicyRequest';
import { UpdateEndpointPolicyRequestBody } from './model/UpdateEndpointPolicyRequestBody';
import { UpdateEndpointPolicyResponse } from './model/UpdateEndpointPolicyResponse';
import { UpdateEndpointRoutetableRequest } from './model/UpdateEndpointRoutetableRequest';
import { UpdateEndpointRoutetableRequestBody } from './model/UpdateEndpointRoutetableRequestBody';
import { UpdateEndpointRoutetableResponse } from './model/UpdateEndpointRoutetableResponse';
import { UpdateEndpointServiceNameMode } from './model/UpdateEndpointServiceNameMode';
import { UpdateEndpointServiceNameRequest } from './model/UpdateEndpointServiceNameRequest';
import { UpdateEndpointServiceNameResponse } from './model/UpdateEndpointServiceNameResponse';
import { UpdateEndpointServicePermissionDescRequest } from './model/UpdateEndpointServicePermissionDescRequest';
import { UpdateEndpointServicePermissionDescResponse } from './model/UpdateEndpointServicePermissionDescResponse';
import { UpdateEndpointServiceRequest } from './model/UpdateEndpointServiceRequest';
import { UpdateEndpointServiceRequestBody } from './model/UpdateEndpointServiceRequestBody';
import { UpdateEndpointServiceResponse } from './model/UpdateEndpointServiceResponse';
import { UpdateEndpointWhiteRequest } from './model/UpdateEndpointWhiteRequest';
import { UpdateEndpointWhiteRequestBody } from './model/UpdateEndpointWhiteRequestBody';
import { UpdateEndpointWhiteResponse } from './model/UpdateEndpointWhiteResponse';
import { UpdateEpConnections } from './model/UpdateEpConnections';
import { UpdatePermissionDescRequest } from './model/UpdatePermissionDescRequest';
import { VersionObject } from './model/VersionObject';

export class VpcepClient {
    public static newBuilder(): ClientBuilder<VpcepClient> {
            return new ClientBuilder<VpcepClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 功能介绍
     * 接受或者拒绝终端节点连接到当前的终端节点服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 接受或拒绝终端节点的连接
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {AcceptOrRejectEndpointRequestBody} acceptOrRejectEndpointRequestBody 接受或拒绝终端节点接口请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public acceptOrRejectEndpoint(acceptOrRejectEndpointRequest?: AcceptOrRejectEndpointRequest): Promise<AcceptOrRejectEndpointResponse> {
        const options = ParamCreater().acceptOrRejectEndpoint(acceptOrRejectEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 批量添加或移除当前用户下终端节点服务的白名单。
     * 说明
     * 本帐号默认在自身用户的终端节点服务的白名单中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或移除终端节点服务的白名单
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {AddOrRemoveServicePermissionsRequestBody} addOrRemoveServicePermissionsRequestBody 批量添加或移除终端节点服务白名单接口的请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addOrRemoveServicePermissions(addOrRemoveServicePermissionsRequest?: AddOrRemoveServicePermissionsRequest): Promise<AddOrRemoveServicePermissionsResponse> {
        const options = ParamCreater().addOrRemoveServicePermissions(addOrRemoveServicePermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 批量添加当前用户下终端节点服务的白名单，支持添加描述信息。
     * 说明
     * 本帐号默认在自身用户的终端节点服务的白名单中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加终端节点服务的白名单
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {BatchAddPermissionRequest} batchAddPermission 批量添加终端节点服务白名单接口的请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddEndpointServicePermissions(batchAddEndpointServicePermissionsRequest?: BatchAddEndpointServicePermissionsRequest): Promise<BatchAddEndpointServicePermissionsResponse> {
        const options = ParamCreater().batchAddEndpointServicePermissions(batchAddEndpointServicePermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 批量删除当前用户下终端节点服务的白名单
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除终端节点服务的白名单
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {BatchRemovePermissionRequest} batchRemovePermissionRequest 批量删除终端节点服务白名单接口的请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchRemoveEndpointServicePermissions(batchRemoveEndpointServicePermissionsRequest?: BatchRemoveEndpointServicePermissionsRequest): Promise<BatchRemoveEndpointServicePermissionsResponse> {
        const options = ParamCreater().batchRemoveEndpointServicePermissions(batchRemoveEndpointServicePermissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 创建终端节点，以便访问终端节点服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建终端节点
     * @param {CreateEndpointRequestBody} createEndpointRequestBody 创建终端节点接口请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEndpoint(createEndpointRequest?: CreateEndpointRequest): Promise<CreateEndpointResponse> {
        const options = ParamCreater().createEndpoint(createEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 创建终端节点服务，允许其他用户创建终端节点连接您创建的终端节点服务，
     * 使用您所提供的服务。
     * 说明
     * 该接口为异步接口，调用成功会返回200状态码，说明请求已正常下发。
     * 通常创建终端节点服务需要1~2分钟，可以通过查询终端节点服务详情查看创建结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建终端节点服务
     * @param {CreateEndpointServiceRequestBody} createEndpointServiceRequestBody 创建终端节点服务接口请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEndpointService(createEndpointServiceRequest?: CreateEndpointServiceRequest): Promise<CreateEndpointServiceResponse> {
        const options = ParamCreater().createEndpointService(createEndpointServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 删除终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除终端节点
     * @param {string} vpcEndpointId 终端节点的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest): Promise<DeleteEndpointResponse> {
        const options = ParamCreater().deleteEndpoint(deleteEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 删除网关型终端节点policy。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除网关型终端节点policy
     * @param {string} vpcEndpointId 终端节点的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpointPolicy(deleteEndpointPolicyRequest?: DeleteEndpointPolicyRequest): Promise<DeleteEndpointPolicyResponse> {
        const options = ParamCreater().deleteEndpointPolicy(deleteEndpointPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 删除终端节点服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除终端节点服务
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpointService(deleteEndpointServiceRequest?: DeleteEndpointServiceRequest): Promise<DeleteEndpointServiceResponse> {
        const options = ParamCreater().deleteEndpointService(deleteEndpointServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询终端节点的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点详情
     * @param {string} vpcEndpointId 终端节点的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointInfoDetails(listEndpointInfoDetailsRequest?: ListEndpointInfoDetailsRequest): Promise<ListEndpointInfoDetailsResponse> {
        const options = ParamCreater().listEndpointInfoDetails(listEndpointInfoDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询当前用户下的终端节点服务的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点服务列表
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {string} [endpointServiceName] 终端节点服务的名称，支持大小写，前后模糊匹配。
     * @param {string} [id] 终端节点服务的ID，唯一标识。
     * @param {'creating' | 'available' | 'failed' | 'deleting'} [status] 终端节点服务的状态。 ● creating：创建中 ● available：可连接 ● failed：失败 ● deleting：删除中
     * @param {'create_at' | 'update_at'} [sortKey] 查询结果中终端节点服务列表的排序字段，取值为： ● create_at：终端节点服务的创建时间 ● update_at：终端节点服务的更新时间 默认值为create_at。
     * @param {'asc' | 'desc'} [sortDir] 查询结果中终端节点服务列表的排序方式，取值为： ● desc：降序排序 ● asc：升序排序 默认值为desc。
     * @param {number} [limit] 查询返回的终端节点服务数量限制，即每页返回的终端节点服务的个数。 取值范围：0~1000，取值一般为10，20或者50，默认为10。
     * @param {number} [offset] 偏移量。 偏移量为一个大于0小于终端节点服务总个数的整数， 表示从偏移量后面的终端节点服务开始查询。
     * @param {string} [publicBorderGroup] 筛选结果中匹配边缘属性的EPS
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointService(listEndpointServiceRequest?: ListEndpointServiceRequest): Promise<ListEndpointServiceResponse> {
        const options = ParamCreater().listEndpointService(listEndpointServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询当前用户下的终端节点的列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点列表
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {string} [endpointServiceName] 终端节点服务的名称，支持大小写，前后模糊匹配。
     * @param {string} [vpcId] 终端节点所在的VPC的ID。
     * @param {string} [id] 终端节点的ID，唯一标识。
     * @param {number} [limit] 查询返回终端节点的数量限制，即每页返回的资源个数。 取值范围：0~1000，取值一般为10，20或者50，默认为10。
     * @param {number} [offset] 偏移量。 偏移量为一个大于0小于终端节点服务总个数的整数， 表示从偏移量后面的终端节点服务开始查询。
     * @param {string} [sortKey] 查询结果中终端节点列表的排序字段，取值为： ● create_at：终端节点的创建时间 ● update_at：终端节点的更新时间 默认值为create_at。
     * @param {string} [sortDir] 查询结果中终端节点列表的排序方式，取值为： ● desc：降序排序 ● asc：升序排序 默认值为desc。
     * @param {string} [publicBorderGroup] 筛选结果中匹配边缘属性的EPS
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpoints(listEndpointsRequest?: ListEndpointsRequest): Promise<ListEndpointsResponse> {
        const options = ParamCreater().listEndpoints(listEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询用户的资源配额，包括终端节点服务和终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {'endpoint_service' | 'endpoint'} [type] 资源类型。 ● endpoint_service：终端节点服务 ● endpoint：终端节点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotaDetails(listQuotaDetailsRequest?: ListQuotaDetailsRequest): Promise<ListQuotaDetailsResponse> {
        const options = ParamCreater().listQuotaDetails(listQuotaDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询连接当前用户下的某一个终端节点服务的连接列表。marker_id是连接的唯一标识。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询连接终端节点服务的连接列表
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {string} [id] 终端节点的ID，唯一标识。
     * @param {string} [markerId] 终端节点的报文标识。
     * @param {string} [status] 终端节点的连接状态。 ● pendingAcceptance：待接受 ● accepted：已接受 ● rejected：已拒绝 ● failed：失败
     * @param {'create_at' | 'update_at'} [sortKey] 查询结果中终端节点列表的排序字段，取值为： ● create_at：终端节点的创建时间 ● update_at：终端节点的更新时间 默认值为create_at。
     * @param {'asc' | 'desc'} [sortDir] 查询结果中终端节点列表的排序方式，取值为： ● desc：降序排序 ● asc：升序排序 默认值为desc。
     * @param {number} [limit] 查询返回终端节点服务的连接列表限制每页个数，即每页返回的个数。 取值范围：0~1000，取值一般为10，20或者50，默认为10。
     * @param {number} [offset] 偏移量。 偏移量为一个大于0小于终端节点服务总个数的整数， 表示从偏移量后面的终端节点服务开始查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceConnections(listServiceConnectionsRequest?: ListServiceConnectionsRequest): Promise<ListServiceConnectionsResponse> {
        const options = ParamCreater().listServiceConnections(listServiceConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍查询终端节点服务的概要信息， 此接口是供创建终端节点的用户来查询需要连接的终端节点服务信息。 此接口既可以方便其他用户查询到您的终端节点服务概要信息, 又可以避免您的终端节点服务的细节信息暴露给其他用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点服务概要
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {string} [endpointServiceName] 终端节点服务的名称。说明：该字段和id字段必须二选一，否则会出现错误。
     * @param {string} [id] 终端节点服务的ID，唯一标识。 说明：该字段必须和endpoint_service_name字段二选一，否则会出现错误。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceDescribeDetails(listServiceDescribeDetailsRequest?: ListServiceDescribeDetailsRequest): Promise<ListServiceDescribeDetailsResponse> {
        const options = ParamCreater().listServiceDescribeDetails(listServiceDescribeDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询终端节点服务的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点服务详情
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceDetails(listServiceDetailsRequest?: ListServiceDetailsRequest): Promise<ListServiceDetailsResponse> {
        const options = ParamCreater().listServiceDetails(listServiceDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询当前用户下终端节点服务的白名单列表。
     * 说明
     * 本帐号默认在当前用户下终端节点服务的白名单中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点服务的白名单列表
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {string} [permission] 权限帐号ID，格式为“iam:domain::domain_id”。 其中“domain_id”为授权用户的帐号ID， 例如“iam:domain::6e9dfd51d1124e8d8498dce894923a0d”，支持模糊搜索。
     * @param {number} [limit] 查询返回终端节点服务的白名单数量限制，即每页返回的个数。 取值范围：0~500，取值一般为10，20或者50，默认为10。
     * @param {number} [offset] 偏移量。 偏移量为一个大于0小于终端节点服务总个数的整数， 表示从偏移量后面的终端节点服务开始查询。
     * @param {'create_at' | 'update_at'} [sortKey] 查询结果中白名单列表的排序字段，取值为create_at，表示白名单的添加时间。
     * @param {'asc' | 'desc'} [sortDir] 查询结果中白名单列表的排序方式，取值为： ● desc：降序排序 ● asc：升序排序 默认值为desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServicePermissionsDetails(listServicePermissionsDetailsRequest?: ListServicePermissionsDetailsRequest): Promise<ListServicePermissionsDetailsResponse> {
        const options = ParamCreater().listServicePermissionsDetails(listServicePermissionsDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询公共终端节点服务的列表，公共终端节点服务是所有用户可见且可连接的终端节点服务，
     * 由运维人员创建，用户可直接使用，但无权创建。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公共终端节点服务列表
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {number} [limit] 查询返回公共的终端节点服务数量限制，即每页返回的个数。 取值范围：0~1000，取值一般为10，20或者50，默认为10。
     * @param {number} [offset] 偏移量。 偏移量为一个大于0小于终端节点服务总个数的整数， 表示从偏移量后面的终端节点服务开始查询。
     * @param {string} [endpointServiceName] 公共终端节点服务的名称，支持大小写以及模糊匹配。
     * @param {string} [id] 公共终端节点服务的ID，唯一标识。
     * @param {'create_at' | 'update_at'} [sortKey] 查询结果中终端节点服务列表的排序字段，取值为： ● create_at：终端节点服务的创建时间 ● update_at：终端节点服务的更新时间 默认值为create_at。
     * @param {'asc' | 'desc'} [sortDir] 查询结果中终端节点服务列表的排序方式，取值为： ● desc：降序排序 ● asc：升序排序 默认值为desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServicePublicDetails(listServicePublicDetailsRequest?: ListServicePublicDetailsRequest): Promise<ListServicePublicDetailsResponse> {
        const options = ParamCreater().listServicePublicDetails(listServicePublicDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询指定VPC终端节点接口版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定VPC终端节点接口版本信息
     * @param {string} version 待查询版本号。 取值以v开头，例如v1。若为空，表示查询所有API的版本号。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSpecifiedVersionDetails(listSpecifiedVersionDetailsRequest?: ListSpecifiedVersionDetailsRequest): Promise<ListSpecifiedVersionDetailsResponse> {
        const options = ParamCreater().listSpecifiedVersionDetails(listSpecifiedVersionDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 查询VPC终端节点接口版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询VPC终端节点接口版本列表
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listVersionDetails(listVersionDetailsRequest?: ListVersionDetailsRequest): Promise<ListVersionDetailsResponse> {
        const options = ParamCreater().listVersionDetails(listVersionDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍：
     *      更新终端节点服务连接的终端节点的描述。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新终端节点连接描述
     * @param {string} vpcEndpointServiceId 终端节点服务ID
     * @param {UpdateEpConnections} updateEpConnections 更新终端节点连接描述请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointConnectionsDesc(updateEndpointConnectionsDescRequest?: UpdateEndpointConnectionsDescRequest): Promise<UpdateEndpointConnectionsDescResponse> {
        const options = ParamCreater().updateEndpointConnectionsDesc(updateEndpointConnectionsDescRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 修改网关型终端节点policy。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改网关型终端节点policy
     * @param {string} vpcEndpointId 终端节点的ID。
     * @param {UpdateEndpointPolicyRequestBody} updateEndpointPolicyRequestBody 更新网关型终端节点policy请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointPolicy(updateEndpointPolicyRequest?: UpdateEndpointPolicyRequest): Promise<UpdateEndpointPolicyResponse> {
        const options = ParamCreater().updateEndpointPolicy(updateEndpointPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 修改终端节点的路由表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端节点的路由表
     * @param {string} vpcEndpointId 终端节点的ID。
     * @param {UpdateEndpointRoutetableRequestBody} updateEndpointRoutetableRequestBody 更新终端节点路由表请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointRoutetable(updateEndpointRoutetableRequest?: UpdateEndpointRoutetableRequest): Promise<UpdateEndpointRoutetableResponse> {
        const options = ParamCreater().updateEndpointRoutetable(updateEndpointRoutetableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 修改终端节点服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端节点服务
     * @param {string} vpcEndpointServiceId 终端节点服务的ID
     * @param {UpdateEndpointServiceRequestBody} updateEndpointServiceRequestBody 修改终端节点服务接口请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointService(updateEndpointServiceRequest?: UpdateEndpointServiceRequest): Promise<UpdateEndpointServiceResponse> {
        const options = ParamCreater().updateEndpointService(updateEndpointServiceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 修改终端节点服务名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改终端节点服务名称
     * @param {string} vpcEndpointServiceId 终端节点服务ID
     * @param {UpdateEndpointServiceNameMode} [updateEndpointServiceNameMode] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointServiceName(updateEndpointServiceNameRequest?: UpdateEndpointServiceNameRequest): Promise<UpdateEndpointServiceNameResponse> {
        const options = ParamCreater().updateEndpointServiceName(updateEndpointServiceNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 更新当前用户下终端节点服务白名单的描述信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新终端节点服务白名单描述
     * @param {string} vpcEndpointServiceId 终端节点服务的ID。
     * @param {string} permissionId 白名单的ID。
     * @param {UpdatePermissionDescRequest} updatePermissionDescRequest 更新终端节点服务白名单描述接口的请求结构体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointServicePermissionDesc(updateEndpointServicePermissionDescRequest?: UpdateEndpointServicePermissionDescRequest): Promise<UpdateEndpointServicePermissionDescResponse> {
        const options = ParamCreater().updateEndpointServicePermissionDesc(updateEndpointServicePermissionDescRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 更新或删除允许访问终端节点的白名单。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新终端节点的白名单
     * @param {string} vpcEndpointId 终端节点的ID。
     * @param {UpdateEndpointWhiteRequestBody} updateEndpointWhiteRequestBody 更新终端节点白名单接口请求体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointWhite(updateEndpointWhiteRequest?: UpdateEndpointWhiteRequest): Promise<UpdateEndpointWhiteResponse> {
        const options = ParamCreater().updateEndpointWhite(updateEndpointWhiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 为指定Endpoint Service或Endpoint批量添加或删除标签。
     * ● 一个资源上最多有10个标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加或删除资源标签接口
     * @param {string} resourceType 资源类型，值为：endpoint_service或endpoint。
     * @param {string} resourceId 资源ID，Endpoint ServiceID或Endpoint ID。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {BatchAddOrRemoveResourceInstanceBody} [batchAddOrRemoveResourceInstanceBody] 批量添加或删除资源标签请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddOrRemoveResourceInstance(batchAddOrRemoveResourceInstanceRequest?: BatchAddOrRemoveResourceInstanceRequest): Promise<BatchAddOrRemoveResourceInstanceResponse> {
        const options = ParamCreater().batchAddOrRemoveResourceInstance(batchAddOrRemoveResourceInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 根据租户ID和资源类型，获取租户下资源的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户资源标签接口
     * @param {string} resourceType 资源类型，值为：endpoint_service或endpoint。
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueryProjectResourceTags(listQueryProjectResourceTagsRequest?: ListQueryProjectResourceTagsRequest): Promise<ListQueryProjectResourceTagsResponse> {
        const options = ParamCreater().listQueryProjectResourceTags(listQueryProjectResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍
     * 使用标签过滤查询租户下资源的实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源实例接口
     * @param {string} resourceType 资源类型，值为：endpoint_service或endpoint。
     * @param {QueryResourceInstanceTagsBody} queryResourceInstanceTagsBody 查询资源实例接口请求接口体
     * @param {string} [contentType] 发送的实体的MIME类型。推荐用户默认使用application/json， 如果API是对象、镜像上传等接口，媒体类型可按照流类型的不同进行确定。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
        const options = ParamCreater().listResourceInstances(listResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 功能介绍
         * 接受或者拒绝终端节点连接到当前的终端节点服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        acceptOrRejectEndpoint(acceptOrRejectEndpointRequest?: AcceptOrRejectEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/connections/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;
            
            let contentType;

            if (acceptOrRejectEndpointRequest !== null && acceptOrRejectEndpointRequest !== undefined) {
                if (acceptOrRejectEndpointRequest instanceof AcceptOrRejectEndpointRequest) {
                    vpcEndpointServiceId = acceptOrRejectEndpointRequest.vpcEndpointServiceId;
                    body = acceptOrRejectEndpointRequest.body
                    contentType = acceptOrRejectEndpointRequest.contentType;
                } else {
                    vpcEndpointServiceId = acceptOrRejectEndpointRequest['vpc_endpoint_service_id'];
                    body = acceptOrRejectEndpointRequest['body'];
                    contentType = acceptOrRejectEndpointRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling acceptOrRejectEndpoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 批量添加或移除当前用户下终端节点服务的白名单。
         * 说明
         * 本帐号默认在自身用户的终端节点服务的白名单中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addOrRemoveServicePermissions(addOrRemoveServicePermissionsRequest?: AddOrRemoveServicePermissionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/permissions/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;
            
            let contentType;

            if (addOrRemoveServicePermissionsRequest !== null && addOrRemoveServicePermissionsRequest !== undefined) {
                if (addOrRemoveServicePermissionsRequest instanceof AddOrRemoveServicePermissionsRequest) {
                    vpcEndpointServiceId = addOrRemoveServicePermissionsRequest.vpcEndpointServiceId;
                    body = addOrRemoveServicePermissionsRequest.body
                    contentType = addOrRemoveServicePermissionsRequest.contentType;
                } else {
                    vpcEndpointServiceId = addOrRemoveServicePermissionsRequest['vpc_endpoint_service_id'];
                    body = addOrRemoveServicePermissionsRequest['body'];
                    contentType = addOrRemoveServicePermissionsRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling addOrRemoveServicePermissions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 批量添加当前用户下终端节点服务的白名单，支持添加描述信息。
         * 说明
         * 本帐号默认在自身用户的终端节点服务的白名单中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddEndpointServicePermissions(batchAddEndpointServicePermissionsRequest?: BatchAddEndpointServicePermissionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/permissions/batch-create",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;
            
            let contentType;

            if (batchAddEndpointServicePermissionsRequest !== null && batchAddEndpointServicePermissionsRequest !== undefined) {
                if (batchAddEndpointServicePermissionsRequest instanceof BatchAddEndpointServicePermissionsRequest) {
                    vpcEndpointServiceId = batchAddEndpointServicePermissionsRequest.vpcEndpointServiceId;
                    body = batchAddEndpointServicePermissionsRequest.body
                    contentType = batchAddEndpointServicePermissionsRequest.contentType;
                } else {
                    vpcEndpointServiceId = batchAddEndpointServicePermissionsRequest['vpc_endpoint_service_id'];
                    body = batchAddEndpointServicePermissionsRequest['body'];
                    contentType = batchAddEndpointServicePermissionsRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling batchAddEndpointServicePermissions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 批量删除当前用户下终端节点服务的白名单
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchRemoveEndpointServicePermissions(batchRemoveEndpointServicePermissionsRequest?: BatchRemoveEndpointServicePermissionsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/permissions/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;
            
            let contentType;

            if (batchRemoveEndpointServicePermissionsRequest !== null && batchRemoveEndpointServicePermissionsRequest !== undefined) {
                if (batchRemoveEndpointServicePermissionsRequest instanceof BatchRemoveEndpointServicePermissionsRequest) {
                    vpcEndpointServiceId = batchRemoveEndpointServicePermissionsRequest.vpcEndpointServiceId;
                    body = batchRemoveEndpointServicePermissionsRequest.body
                    contentType = batchRemoveEndpointServicePermissionsRequest.contentType;
                } else {
                    vpcEndpointServiceId = batchRemoveEndpointServicePermissionsRequest['vpc_endpoint_service_id'];
                    body = batchRemoveEndpointServicePermissionsRequest['body'];
                    contentType = batchRemoveEndpointServicePermissionsRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling batchRemoveEndpointServicePermissions.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 创建终端节点，以便访问终端节点服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEndpoint(createEndpointRequest?: CreateEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpc-endpoints",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createEndpointRequest !== null && createEndpointRequest !== undefined) {
                if (createEndpointRequest instanceof CreateEndpointRequest) {
                    body = createEndpointRequest.body
                    contentType = createEndpointRequest.contentType;
                } else {
                    body = createEndpointRequest['body'];
                    contentType = createEndpointRequest['Content-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 创建终端节点服务，允许其他用户创建终端节点连接您创建的终端节点服务，
         * 使用您所提供的服务。
         * 说明
         * 该接口为异步接口，调用成功会返回200状态码，说明请求已正常下发。
         * 通常创建终端节点服务需要1~2分钟，可以通过查询终端节点服务详情查看创建结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEndpointService(createEndpointServiceRequest?: CreateEndpointServiceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/vpc-endpoint-services",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createEndpointServiceRequest !== null && createEndpointServiceRequest !== undefined) {
                if (createEndpointServiceRequest instanceof CreateEndpointServiceRequest) {
                    body = createEndpointServiceRequest.body
                    contentType = createEndpointServiceRequest.contentType;
                } else {
                    body = createEndpointServiceRequest['body'];
                    contentType = createEndpointServiceRequest['Content-Type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 删除终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpc-endpoints/{vpc_endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcEndpointId;
            
            let contentType;

            if (deleteEndpointRequest !== null && deleteEndpointRequest !== undefined) {
                if (deleteEndpointRequest instanceof DeleteEndpointRequest) {
                    vpcEndpointId = deleteEndpointRequest.vpcEndpointId;
                    contentType = deleteEndpointRequest.contentType;
                } else {
                    vpcEndpointId = deleteEndpointRequest['vpc_endpoint_id'];
                    contentType = deleteEndpointRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointId === null || vpcEndpointId === undefined) {
            throw new RequiredError('vpcEndpointId','Required parameter vpcEndpointId was null or undefined when calling deleteEndpoint.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'vpc_endpoint_id': vpcEndpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 删除网关型终端节点policy。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpointPolicy(deleteEndpointPolicyRequest?: DeleteEndpointPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpc-endpoints/{vpc_endpoint_id}/policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcEndpointId;
            
            let contentType;

            if (deleteEndpointPolicyRequest !== null && deleteEndpointPolicyRequest !== undefined) {
                if (deleteEndpointPolicyRequest instanceof DeleteEndpointPolicyRequest) {
                    vpcEndpointId = deleteEndpointPolicyRequest.vpcEndpointId;
                    contentType = deleteEndpointPolicyRequest.contentType;
                } else {
                    vpcEndpointId = deleteEndpointPolicyRequest['vpc_endpoint_id'];
                    contentType = deleteEndpointPolicyRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointId === null || vpcEndpointId === undefined) {
            throw new RequiredError('vpcEndpointId','Required parameter vpcEndpointId was null or undefined when calling deleteEndpointPolicy.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'vpc_endpoint_id': vpcEndpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 删除终端节点服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpointService(deleteEndpointServiceRequest?: DeleteEndpointServiceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcEndpointServiceId;
            
            let contentType;

            if (deleteEndpointServiceRequest !== null && deleteEndpointServiceRequest !== undefined) {
                if (deleteEndpointServiceRequest instanceof DeleteEndpointServiceRequest) {
                    vpcEndpointServiceId = deleteEndpointServiceRequest.vpcEndpointServiceId;
                    contentType = deleteEndpointServiceRequest.contentType;
                } else {
                    vpcEndpointServiceId = deleteEndpointServiceRequest['vpc_endpoint_service_id'];
                    contentType = deleteEndpointServiceRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling deleteEndpointService.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询终端节点的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointInfoDetails(listEndpointInfoDetailsRequest?: ListEndpointInfoDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoints/{vpc_endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcEndpointId;
            
            let contentType;

            if (listEndpointInfoDetailsRequest !== null && listEndpointInfoDetailsRequest !== undefined) {
                if (listEndpointInfoDetailsRequest instanceof ListEndpointInfoDetailsRequest) {
                    vpcEndpointId = listEndpointInfoDetailsRequest.vpcEndpointId;
                    contentType = listEndpointInfoDetailsRequest.contentType;
                } else {
                    vpcEndpointId = listEndpointInfoDetailsRequest['vpc_endpoint_id'];
                    contentType = listEndpointInfoDetailsRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointId === null || vpcEndpointId === undefined) {
            throw new RequiredError('vpcEndpointId','Required parameter vpcEndpointId was null or undefined when calling listEndpointInfoDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'vpc_endpoint_id': vpcEndpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询当前用户下的终端节点服务的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointService(listEndpointServiceRequest?: ListEndpointServiceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoint-services",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let endpointServiceName;
            
            let id;
            
            let status;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;
            
            let publicBorderGroup;

            if (listEndpointServiceRequest !== null && listEndpointServiceRequest !== undefined) {
                if (listEndpointServiceRequest instanceof ListEndpointServiceRequest) {
                    contentType = listEndpointServiceRequest.contentType;
                    endpointServiceName = listEndpointServiceRequest.endpointServiceName;
                    id = listEndpointServiceRequest.id;
                    status = listEndpointServiceRequest.status;
                    sortKey = listEndpointServiceRequest.sortKey;
                    sortDir = listEndpointServiceRequest.sortDir;
                    limit = listEndpointServiceRequest.limit;
                    offset = listEndpointServiceRequest.offset;
                    publicBorderGroup = listEndpointServiceRequest.publicBorderGroup;
                } else {
                    contentType = listEndpointServiceRequest['Content-Type'];
                    endpointServiceName = listEndpointServiceRequest['endpoint_service_name'];
                    id = listEndpointServiceRequest['id'];
                    status = listEndpointServiceRequest['status'];
                    sortKey = listEndpointServiceRequest['sort_key'];
                    sortDir = listEndpointServiceRequest['sort_dir'];
                    limit = listEndpointServiceRequest['limit'];
                    offset = listEndpointServiceRequest['offset'];
                    publicBorderGroup = listEndpointServiceRequest['public_border_group'];
                }
            }

        
            if (endpointServiceName !== null && endpointServiceName !== undefined) {
                localVarQueryParameter['endpoint_service_name'] = endpointServiceName;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询当前用户下的终端节点的列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpoints(listEndpointsRequest?: ListEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let endpointServiceName;
            
            let vpcId;
            
            let id;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;
            
            let publicBorderGroup;

            if (listEndpointsRequest !== null && listEndpointsRequest !== undefined) {
                if (listEndpointsRequest instanceof ListEndpointsRequest) {
                    contentType = listEndpointsRequest.contentType;
                    endpointServiceName = listEndpointsRequest.endpointServiceName;
                    vpcId = listEndpointsRequest.vpcId;
                    id = listEndpointsRequest.id;
                    limit = listEndpointsRequest.limit;
                    offset = listEndpointsRequest.offset;
                    sortKey = listEndpointsRequest.sortKey;
                    sortDir = listEndpointsRequest.sortDir;
                    publicBorderGroup = listEndpointsRequest.publicBorderGroup;
                } else {
                    contentType = listEndpointsRequest['Content-Type'];
                    endpointServiceName = listEndpointsRequest['endpoint_service_name'];
                    vpcId = listEndpointsRequest['vpc_id'];
                    id = listEndpointsRequest['id'];
                    limit = listEndpointsRequest['limit'];
                    offset = listEndpointsRequest['offset'];
                    sortKey = listEndpointsRequest['sort_key'];
                    sortDir = listEndpointsRequest['sort_dir'];
                    publicBorderGroup = listEndpointsRequest['public_border_group'];
                }
            }

        
            if (endpointServiceName !== null && endpointServiceName !== undefined) {
                localVarQueryParameter['endpoint_service_name'] = endpointServiceName;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (publicBorderGroup !== null && publicBorderGroup !== undefined) {
                localVarQueryParameter['public_border_group'] = publicBorderGroup;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询用户的资源配额，包括终端节点服务和终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotaDetails(listQuotaDetailsRequest?: ListQuotaDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let type;

            if (listQuotaDetailsRequest !== null && listQuotaDetailsRequest !== undefined) {
                if (listQuotaDetailsRequest instanceof ListQuotaDetailsRequest) {
                    contentType = listQuotaDetailsRequest.contentType;
                    type = listQuotaDetailsRequest.type;
                } else {
                    contentType = listQuotaDetailsRequest['Content-Type'];
                    type = listQuotaDetailsRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询连接当前用户下的某一个终端节点服务的连接列表。marker_id是连接的唯一标识。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceConnections(listServiceConnectionsRequest?: ListServiceConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpcEndpointServiceId;
            
            let contentType;
            
            let id;
            
            let markerId;
            
            let status;
            
            let sortKey;
            
            let sortDir;
            
            let limit;
            
            let offset;

            if (listServiceConnectionsRequest !== null && listServiceConnectionsRequest !== undefined) {
                if (listServiceConnectionsRequest instanceof ListServiceConnectionsRequest) {
                    vpcEndpointServiceId = listServiceConnectionsRequest.vpcEndpointServiceId;
                    contentType = listServiceConnectionsRequest.contentType;
                    id = listServiceConnectionsRequest.id;
                    markerId = listServiceConnectionsRequest.markerId;
                    status = listServiceConnectionsRequest.status;
                    sortKey = listServiceConnectionsRequest.sortKey;
                    sortDir = listServiceConnectionsRequest.sortDir;
                    limit = listServiceConnectionsRequest.limit;
                    offset = listServiceConnectionsRequest.offset;
                } else {
                    vpcEndpointServiceId = listServiceConnectionsRequest['vpc_endpoint_service_id'];
                    contentType = listServiceConnectionsRequest['Content-Type'];
                    id = listServiceConnectionsRequest['id'];
                    markerId = listServiceConnectionsRequest['marker_id'];
                    status = listServiceConnectionsRequest['status'];
                    sortKey = listServiceConnectionsRequest['sort_key'];
                    sortDir = listServiceConnectionsRequest['sort_dir'];
                    limit = listServiceConnectionsRequest['limit'];
                    offset = listServiceConnectionsRequest['offset'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling listServiceConnections.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (markerId !== null && markerId !== undefined) {
                localVarQueryParameter['marker_id'] = markerId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍查询终端节点服务的概要信息， 此接口是供创建终端节点的用户来查询需要连接的终端节点服务信息。 此接口既可以方便其他用户查询到您的终端节点服务概要信息, 又可以避免您的终端节点服务的细节信息暴露给其他用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceDescribeDetails(listServiceDescribeDetailsRequest?: ListServiceDescribeDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoint-services/describe",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let endpointServiceName;
            
            let id;

            if (listServiceDescribeDetailsRequest !== null && listServiceDescribeDetailsRequest !== undefined) {
                if (listServiceDescribeDetailsRequest instanceof ListServiceDescribeDetailsRequest) {
                    contentType = listServiceDescribeDetailsRequest.contentType;
                    endpointServiceName = listServiceDescribeDetailsRequest.endpointServiceName;
                    id = listServiceDescribeDetailsRequest.id;
                } else {
                    contentType = listServiceDescribeDetailsRequest['Content-Type'];
                    endpointServiceName = listServiceDescribeDetailsRequest['endpoint_service_name'];
                    id = listServiceDescribeDetailsRequest['id'];
                }
            }

        
            if (endpointServiceName !== null && endpointServiceName !== undefined) {
                localVarQueryParameter['endpoint_service_name'] = endpointServiceName;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询终端节点服务的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceDetails(listServiceDetailsRequest?: ListServiceDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let vpcEndpointServiceId;
            
            let contentType;

            if (listServiceDetailsRequest !== null && listServiceDetailsRequest !== undefined) {
                if (listServiceDetailsRequest instanceof ListServiceDetailsRequest) {
                    vpcEndpointServiceId = listServiceDetailsRequest.vpcEndpointServiceId;
                    contentType = listServiceDetailsRequest.contentType;
                } else {
                    vpcEndpointServiceId = listServiceDetailsRequest['vpc_endpoint_service_id'];
                    contentType = listServiceDetailsRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling listServiceDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询当前用户下终端节点服务的白名单列表。
         * 说明
         * 本帐号默认在当前用户下终端节点服务的白名单中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServicePermissionsDetails(listServicePermissionsDetailsRequest?: ListServicePermissionsDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/permissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let vpcEndpointServiceId;
            
            let contentType;
            
            let permission;
            
            let limit;
            
            let offset;
            
            let sortKey;
            
            let sortDir;

            if (listServicePermissionsDetailsRequest !== null && listServicePermissionsDetailsRequest !== undefined) {
                if (listServicePermissionsDetailsRequest instanceof ListServicePermissionsDetailsRequest) {
                    vpcEndpointServiceId = listServicePermissionsDetailsRequest.vpcEndpointServiceId;
                    contentType = listServicePermissionsDetailsRequest.contentType;
                    permission = listServicePermissionsDetailsRequest.permission;
                    limit = listServicePermissionsDetailsRequest.limit;
                    offset = listServicePermissionsDetailsRequest.offset;
                    sortKey = listServicePermissionsDetailsRequest.sortKey;
                    sortDir = listServicePermissionsDetailsRequest.sortDir;
                } else {
                    vpcEndpointServiceId = listServicePermissionsDetailsRequest['vpc_endpoint_service_id'];
                    contentType = listServicePermissionsDetailsRequest['Content-Type'];
                    permission = listServicePermissionsDetailsRequest['permission'];
                    limit = listServicePermissionsDetailsRequest['limit'];
                    offset = listServicePermissionsDetailsRequest['offset'];
                    sortKey = listServicePermissionsDetailsRequest['sort_key'];
                    sortDir = listServicePermissionsDetailsRequest['sort_dir'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling listServicePermissionsDetails.');
            }
            if (permission !== null && permission !== undefined) {
                localVarQueryParameter['permission'] = permission;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询公共终端节点服务的列表，公共终端节点服务是所有用户可见且可连接的终端节点服务，
         * 由运维人员创建，用户可直接使用，但无权创建。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServicePublicDetails(listServicePublicDetailsRequest?: ListServicePublicDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/vpc-endpoint-services/public",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let limit;
            
            let offset;
            
            let endpointServiceName;
            
            let id;
            
            let sortKey;
            
            let sortDir;

            if (listServicePublicDetailsRequest !== null && listServicePublicDetailsRequest !== undefined) {
                if (listServicePublicDetailsRequest instanceof ListServicePublicDetailsRequest) {
                    contentType = listServicePublicDetailsRequest.contentType;
                    limit = listServicePublicDetailsRequest.limit;
                    offset = listServicePublicDetailsRequest.offset;
                    endpointServiceName = listServicePublicDetailsRequest.endpointServiceName;
                    id = listServicePublicDetailsRequest.id;
                    sortKey = listServicePublicDetailsRequest.sortKey;
                    sortDir = listServicePublicDetailsRequest.sortDir;
                } else {
                    contentType = listServicePublicDetailsRequest['Content-Type'];
                    limit = listServicePublicDetailsRequest['limit'];
                    offset = listServicePublicDetailsRequest['offset'];
                    endpointServiceName = listServicePublicDetailsRequest['endpoint_service_name'];
                    id = listServicePublicDetailsRequest['id'];
                    sortKey = listServicePublicDetailsRequest['sort_key'];
                    sortDir = listServicePublicDetailsRequest['sort_dir'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (endpointServiceName !== null && endpointServiceName !== undefined) {
                localVarQueryParameter['endpoint_service_name'] = endpointServiceName;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询指定VPC终端节点接口版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSpecifiedVersionDetails(listSpecifiedVersionDetailsRequest?: ListSpecifiedVersionDetailsRequest) {
            const options = {
                method: "GET",
                url: "/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let version;
            
            let contentType;

            if (listSpecifiedVersionDetailsRequest !== null && listSpecifiedVersionDetailsRequest !== undefined) {
                if (listSpecifiedVersionDetailsRequest instanceof ListSpecifiedVersionDetailsRequest) {
                    version = listSpecifiedVersionDetailsRequest.version;
                    contentType = listSpecifiedVersionDetailsRequest.contentType;
                } else {
                    version = listSpecifiedVersionDetailsRequest['version'];
                    contentType = listSpecifiedVersionDetailsRequest['Content-Type'];
                }
            }

        
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling listSpecifiedVersionDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 查询VPC终端节点接口版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listVersionDetails(listVersionDetailsRequest?: ListVersionDetailsRequest) {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listVersionDetailsRequest !== null && listVersionDetailsRequest !== undefined) {
                if (listVersionDetailsRequest instanceof ListVersionDetailsRequest) {
                    contentType = listVersionDetailsRequest.contentType;
                } else {
                    contentType = listVersionDetailsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍：
         *      更新终端节点服务连接的终端节点的描述。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointConnectionsDesc(updateEndpointConnectionsDescRequest?: UpdateEndpointConnectionsDescRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/connections/description",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;

            if (updateEndpointConnectionsDescRequest !== null && updateEndpointConnectionsDescRequest !== undefined) {
                if (updateEndpointConnectionsDescRequest instanceof UpdateEndpointConnectionsDescRequest) {
                    vpcEndpointServiceId = updateEndpointConnectionsDescRequest.vpcEndpointServiceId;
                    body = updateEndpointConnectionsDescRequest.body
                } else {
                    vpcEndpointServiceId = updateEndpointConnectionsDescRequest['vpc_endpoint_service_id'];
                    body = updateEndpointConnectionsDescRequest['body'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling updateEndpointConnectionsDesc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 修改网关型终端节点policy。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointPolicy(updateEndpointPolicyRequest?: UpdateEndpointPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoints/{vpc_endpoint_id}/policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointId;
            
            let contentType;

            if (updateEndpointPolicyRequest !== null && updateEndpointPolicyRequest !== undefined) {
                if (updateEndpointPolicyRequest instanceof UpdateEndpointPolicyRequest) {
                    vpcEndpointId = updateEndpointPolicyRequest.vpcEndpointId;
                    body = updateEndpointPolicyRequest.body
                    contentType = updateEndpointPolicyRequest.contentType;
                } else {
                    vpcEndpointId = updateEndpointPolicyRequest['vpc_endpoint_id'];
                    body = updateEndpointPolicyRequest['body'];
                    contentType = updateEndpointPolicyRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointId === null || vpcEndpointId === undefined) {
            throw new RequiredError('vpcEndpointId','Required parameter vpcEndpointId was null or undefined when calling updateEndpointPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_id': vpcEndpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 修改终端节点的路由表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointRoutetable(updateEndpointRoutetableRequest?: UpdateEndpointRoutetableRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoints/{vpc_endpoint_id}/routetables",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointId;
            
            let contentType;

            if (updateEndpointRoutetableRequest !== null && updateEndpointRoutetableRequest !== undefined) {
                if (updateEndpointRoutetableRequest instanceof UpdateEndpointRoutetableRequest) {
                    vpcEndpointId = updateEndpointRoutetableRequest.vpcEndpointId;
                    body = updateEndpointRoutetableRequest.body
                    contentType = updateEndpointRoutetableRequest.contentType;
                } else {
                    vpcEndpointId = updateEndpointRoutetableRequest['vpc_endpoint_id'];
                    body = updateEndpointRoutetableRequest['body'];
                    contentType = updateEndpointRoutetableRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointId === null || vpcEndpointId === undefined) {
            throw new RequiredError('vpcEndpointId','Required parameter vpcEndpointId was null or undefined when calling updateEndpointRoutetable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_id': vpcEndpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 修改终端节点服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointService(updateEndpointServiceRequest?: UpdateEndpointServiceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;
            
            let contentType;

            if (updateEndpointServiceRequest !== null && updateEndpointServiceRequest !== undefined) {
                if (updateEndpointServiceRequest instanceof UpdateEndpointServiceRequest) {
                    vpcEndpointServiceId = updateEndpointServiceRequest.vpcEndpointServiceId;
                    body = updateEndpointServiceRequest.body
                    contentType = updateEndpointServiceRequest.contentType;
                } else {
                    vpcEndpointServiceId = updateEndpointServiceRequest['vpc_endpoint_service_id'];
                    body = updateEndpointServiceRequest['body'];
                    contentType = updateEndpointServiceRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling updateEndpointService.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 修改终端节点服务名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointServiceName(updateEndpointServiceNameRequest?: UpdateEndpointServiceNameRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;

            if (updateEndpointServiceNameRequest !== null && updateEndpointServiceNameRequest !== undefined) {
                if (updateEndpointServiceNameRequest instanceof UpdateEndpointServiceNameRequest) {
                    vpcEndpointServiceId = updateEndpointServiceNameRequest.vpcEndpointServiceId;
                    body = updateEndpointServiceNameRequest.body
                } else {
                    vpcEndpointServiceId = updateEndpointServiceNameRequest['vpc_endpoint_service_id'];
                    body = updateEndpointServiceNameRequest['body'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling updateEndpointServiceName.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 更新当前用户下终端节点服务白名单的描述信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointServicePermissionDesc(updateEndpointServicePermissionDescRequest?: UpdateEndpointServicePermissionDescRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoint-services/{vpc_endpoint_service_id}/permissions/{permission_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointServiceId;
            
            let permissionId;
            
            let contentType;

            if (updateEndpointServicePermissionDescRequest !== null && updateEndpointServicePermissionDescRequest !== undefined) {
                if (updateEndpointServicePermissionDescRequest instanceof UpdateEndpointServicePermissionDescRequest) {
                    vpcEndpointServiceId = updateEndpointServicePermissionDescRequest.vpcEndpointServiceId;
                    permissionId = updateEndpointServicePermissionDescRequest.permissionId;
                    body = updateEndpointServicePermissionDescRequest.body
                    contentType = updateEndpointServicePermissionDescRequest.contentType;
                } else {
                    vpcEndpointServiceId = updateEndpointServicePermissionDescRequest['vpc_endpoint_service_id'];
                    permissionId = updateEndpointServicePermissionDescRequest['permission_id'];
                    body = updateEndpointServicePermissionDescRequest['body'];
                    contentType = updateEndpointServicePermissionDescRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointServiceId === null || vpcEndpointServiceId === undefined) {
            throw new RequiredError('vpcEndpointServiceId','Required parameter vpcEndpointServiceId was null or undefined when calling updateEndpointServicePermissionDesc.');
            }
            if (permissionId === null || permissionId === undefined) {
            throw new RequiredError('permissionId','Required parameter permissionId was null or undefined when calling updateEndpointServicePermissionDesc.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_service_id': vpcEndpointServiceId,'permission_id': permissionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 更新或删除允许访问终端节点的白名单。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointWhite(updateEndpointWhiteRequest?: UpdateEndpointWhiteRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/vpc-endpoints/{vpc_endpoint_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let vpcEndpointId;
            
            let contentType;

            if (updateEndpointWhiteRequest !== null && updateEndpointWhiteRequest !== undefined) {
                if (updateEndpointWhiteRequest instanceof UpdateEndpointWhiteRequest) {
                    vpcEndpointId = updateEndpointWhiteRequest.vpcEndpointId;
                    body = updateEndpointWhiteRequest.body
                    contentType = updateEndpointWhiteRequest.contentType;
                } else {
                    vpcEndpointId = updateEndpointWhiteRequest['vpc_endpoint_id'];
                    body = updateEndpointWhiteRequest['body'];
                    contentType = updateEndpointWhiteRequest['Content-Type'];
                }
            }

        
            if (vpcEndpointId === null || vpcEndpointId === undefined) {
            throw new RequiredError('vpcEndpointId','Required parameter vpcEndpointId was null or undefined when calling updateEndpointWhite.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'vpc_endpoint_id': vpcEndpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 为指定Endpoint Service或Endpoint批量添加或删除标签。
         * ● 一个资源上最多有10个标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddOrRemoveResourceInstance(batchAddOrRemoveResourceInstanceRequest?: BatchAddOrRemoveResourceInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/{resource_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let resourceId;
            
            let contentType;

            if (batchAddOrRemoveResourceInstanceRequest !== null && batchAddOrRemoveResourceInstanceRequest !== undefined) {
                if (batchAddOrRemoveResourceInstanceRequest instanceof BatchAddOrRemoveResourceInstanceRequest) {
                    resourceType = batchAddOrRemoveResourceInstanceRequest.resourceType;
                    resourceId = batchAddOrRemoveResourceInstanceRequest.resourceId;
                    contentType = batchAddOrRemoveResourceInstanceRequest.contentType;
                    body = batchAddOrRemoveResourceInstanceRequest.body
                } else {
                    resourceType = batchAddOrRemoveResourceInstanceRequest['resource_type'];
                    resourceId = batchAddOrRemoveResourceInstanceRequest['resource_id'];
                    contentType = batchAddOrRemoveResourceInstanceRequest['Content-Type'];
                    body = batchAddOrRemoveResourceInstanceRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling batchAddOrRemoveResourceInstance.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchAddOrRemoveResourceInstance.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 根据租户ID和资源类型，获取租户下资源的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueryProjectResourceTags(listQueryProjectResourceTagsRequest?: ListQueryProjectResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let contentType;

            if (listQueryProjectResourceTagsRequest !== null && listQueryProjectResourceTagsRequest !== undefined) {
                if (listQueryProjectResourceTagsRequest instanceof ListQueryProjectResourceTagsRequest) {
                    resourceType = listQueryProjectResourceTagsRequest.resourceType;
                    contentType = listQueryProjectResourceTagsRequest.contentType;
                } else {
                    resourceType = listQueryProjectResourceTagsRequest['resource_type'];
                    contentType = listQueryProjectResourceTagsRequest['Content-Type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listQueryProjectResourceTags.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 功能介绍
         * 使用标签过滤查询租户下资源的实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceInstances(listResourceInstancesRequest?: ListResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{resource_type}/resource_instances/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceType;
            
            let contentType;

            if (listResourceInstancesRequest !== null && listResourceInstancesRequest !== undefined) {
                if (listResourceInstancesRequest instanceof ListResourceInstancesRequest) {
                    resourceType = listResourceInstancesRequest.resourceType;
                    body = listResourceInstancesRequest.body
                    contentType = listResourceInstancesRequest.contentType;
                } else {
                    resourceType = listResourceInstancesRequest['resource_type'];
                    body = listResourceInstancesRequest['body'];
                    contentType = listResourceInstancesRequest['Content-Type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listResourceInstances.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): VpcepClient {
    return new VpcepClient(client);
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