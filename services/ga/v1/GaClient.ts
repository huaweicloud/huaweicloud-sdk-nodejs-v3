import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccelerateIp } from './model/AccelerateIp';
import { AcceleratorDetail } from './model/AcceleratorDetail';
import { Area } from './model/Area';
import { AreaRegion } from './model/AreaRegion';
import { ClientAffinity } from './model/ClientAffinity';
import { ConfigStatus } from './model/ConfigStatus';
import { CreateAcceleratorOption } from './model/CreateAcceleratorOption';
import { CreateAcceleratorOptionIpSets } from './model/CreateAcceleratorOptionIpSets';
import { CreateAcceleratorRequest } from './model/CreateAcceleratorRequest';
import { CreateAcceleratorRequestBody } from './model/CreateAcceleratorRequestBody';
import { CreateAcceleratorResponse } from './model/CreateAcceleratorResponse';
import { CreateEndpointGroupOption } from './model/CreateEndpointGroupOption';
import { CreateEndpointGroupRequest } from './model/CreateEndpointGroupRequest';
import { CreateEndpointGroupRequestBody } from './model/CreateEndpointGroupRequestBody';
import { CreateEndpointGroupResponse } from './model/CreateEndpointGroupResponse';
import { CreateEndpointOption } from './model/CreateEndpointOption';
import { CreateEndpointRequest } from './model/CreateEndpointRequest';
import { CreateEndpointRequestBody } from './model/CreateEndpointRequestBody';
import { CreateEndpointResponse } from './model/CreateEndpointResponse';
import { CreateHealthCheckOption } from './model/CreateHealthCheckOption';
import { CreateHealthCheckRequest } from './model/CreateHealthCheckRequest';
import { CreateHealthCheckRequestBody } from './model/CreateHealthCheckRequestBody';
import { CreateHealthCheckResponse } from './model/CreateHealthCheckResponse';
import { CreateListenerOption } from './model/CreateListenerOption';
import { CreateListenerRequest } from './model/CreateListenerRequest';
import { CreateListenerRequestBody } from './model/CreateListenerRequestBody';
import { CreateListenerResponse } from './model/CreateListenerResponse';
import { CreateTagsRequest } from './model/CreateTagsRequest';
import { CreateTagsRequestBody } from './model/CreateTagsRequestBody';
import { CreateTagsResponse } from './model/CreateTagsResponse';
import { DeleteAcceleratorRequest } from './model/DeleteAcceleratorRequest';
import { DeleteAcceleratorResponse } from './model/DeleteAcceleratorResponse';
import { DeleteEndpointGroupRequest } from './model/DeleteEndpointGroupRequest';
import { DeleteEndpointGroupResponse } from './model/DeleteEndpointGroupResponse';
import { DeleteEndpointRequest } from './model/DeleteEndpointRequest';
import { DeleteEndpointResponse } from './model/DeleteEndpointResponse';
import { DeleteHealthCheckRequest } from './model/DeleteHealthCheckRequest';
import { DeleteHealthCheckResponse } from './model/DeleteHealthCheckResponse';
import { DeleteListenerRequest } from './model/DeleteListenerRequest';
import { DeleteListenerResponse } from './model/DeleteListenerResponse';
import { DeleteTagsRequest } from './model/DeleteTagsRequest';
import { DeleteTagsRequestBody } from './model/DeleteTagsRequestBody';
import { DeleteTagsResponse } from './model/DeleteTagsResponse';
import { DeletingResourceTag } from './model/DeletingResourceTag';
import { EndpointDetail } from './model/EndpointDetail';
import { EndpointGroupDetail } from './model/EndpointGroupDetail';
import { EndpointType } from './model/EndpointType';
import { FrozenInfo } from './model/FrozenInfo';
import { HealthCheckDetail } from './model/HealthCheckDetail';
import { HealthCheckProtocol } from './model/HealthCheckProtocol';
import { Id } from './model/Id';
import { ListAcceleratorsRequest } from './model/ListAcceleratorsRequest';
import { ListAcceleratorsResponse } from './model/ListAcceleratorsResponse';
import { ListEndpointGroupsRequest } from './model/ListEndpointGroupsRequest';
import { ListEndpointGroupsResponse } from './model/ListEndpointGroupsResponse';
import { ListEndpointsRequest } from './model/ListEndpointsRequest';
import { ListEndpointsResponse } from './model/ListEndpointsResponse';
import { ListHealthChecksRequest } from './model/ListHealthChecksRequest';
import { ListHealthChecksResponse } from './model/ListHealthChecksResponse';
import { ListListenersRequest } from './model/ListListenersRequest';
import { ListListenersResponse } from './model/ListListenersResponse';
import { ListRegionsRequest } from './model/ListRegionsRequest';
import { ListRegionsResponse } from './model/ListRegionsResponse';
import { ListenerDetail } from './model/ListenerDetail';
import { ListenerProtocol } from './model/ListenerProtocol';
import { PageInfo } from './model/PageInfo';
import { PortRange } from './model/PortRange';
import { ResourceTag } from './model/ResourceTag';
import { ResourceType } from './model/ResourceType';
import { ShowAcceleratorRequest } from './model/ShowAcceleratorRequest';
import { ShowAcceleratorResponse } from './model/ShowAcceleratorResponse';
import { ShowEndpointGroupRequest } from './model/ShowEndpointGroupRequest';
import { ShowEndpointGroupResponse } from './model/ShowEndpointGroupResponse';
import { ShowEndpointRequest } from './model/ShowEndpointRequest';
import { ShowEndpointResponse } from './model/ShowEndpointResponse';
import { ShowHealthCheckRequest } from './model/ShowHealthCheckRequest';
import { ShowHealthCheckResponse } from './model/ShowHealthCheckResponse';
import { ShowListenerRequest } from './model/ShowListenerRequest';
import { ShowListenerResponse } from './model/ShowListenerResponse';
import { ShowResourceTagsRequest } from './model/ShowResourceTagsRequest';
import { ShowResourceTagsResponse } from './model/ShowResourceTagsResponse';
import { UpdateAcceleratorOption } from './model/UpdateAcceleratorOption';
import { UpdateAcceleratorRequest } from './model/UpdateAcceleratorRequest';
import { UpdateAcceleratorRequestBody } from './model/UpdateAcceleratorRequestBody';
import { UpdateAcceleratorResponse } from './model/UpdateAcceleratorResponse';
import { UpdateEndpointGroupOption } from './model/UpdateEndpointGroupOption';
import { UpdateEndpointGroupRequest } from './model/UpdateEndpointGroupRequest';
import { UpdateEndpointGroupRequestBody } from './model/UpdateEndpointGroupRequestBody';
import { UpdateEndpointGroupResponse } from './model/UpdateEndpointGroupResponse';
import { UpdateEndpointOption } from './model/UpdateEndpointOption';
import { UpdateEndpointRequest } from './model/UpdateEndpointRequest';
import { UpdateEndpointRequestBody } from './model/UpdateEndpointRequestBody';
import { UpdateEndpointResponse } from './model/UpdateEndpointResponse';
import { UpdateHealthCheckOption } from './model/UpdateHealthCheckOption';
import { UpdateHealthCheckRequest } from './model/UpdateHealthCheckRequest';
import { UpdateHealthCheckRequestBody } from './model/UpdateHealthCheckRequestBody';
import { UpdateHealthCheckResponse } from './model/UpdateHealthCheckResponse';
import { UpdateListenerOption } from './model/UpdateListenerOption';
import { UpdateListenerRequest } from './model/UpdateListenerRequest';
import { UpdateListenerRequestBody } from './model/UpdateListenerRequestBody';
import { UpdateListenerResponse } from './model/UpdateListenerResponse';

export class GaClient {
    public static newBuilder(): ClientBuilder<GaClient> {
            return new ClientBuilder<GaClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建全球加速器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建全球加速器
     * @param {CreateAcceleratorRequestBody} createAcceleratorRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccelerator(createAcceleratorRequest?: CreateAcceleratorRequest): Promise<CreateAcceleratorResponse> {
        const options = ParamCreater().createAccelerator(createAcceleratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除全球加速器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除全球加速器
     * @param {string} acceleratorId 全球加速器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccelerator(deleteAcceleratorRequest?: DeleteAcceleratorRequest): Promise<void> {
        const options = ParamCreater().deleteAccelerator(deleteAcceleratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全球加速器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球加速器列表
     * @param {number} [limit] 分页查询每页的资源个数。如果不设置，则默认为500。
     * @param {string} [marker] 分页查询的起始的资源ID，表示上一页最后一条查询资源记录的ID。不指定时表示查询第一页。 必须与limit一起使用。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 资源ID。
     * @param {string} [name] 资源名称，取值范围：0~64个字符之间，只能由数字、字母、中划线和中文组成。
     * @param {'ACTIVE' | 'PENDING' | 'ERROR' | 'DELETING'} [status] 配置状态，可选范围: - ACTIVE：运行中 - PENDING：待定 - ERROR：错误 - DELETING：正在删除
     * @param {string} [enterpriseProjectId] 租户的企业项目id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccelerators(listAcceleratorsRequest?: ListAcceleratorsRequest): Promise<ListAcceleratorsResponse> {
        const options = ParamCreater().listAccelerators(listAcceleratorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询全球加速器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询全球加速器详情
     * @param {string} acceleratorId 全球加速器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccelerator(showAcceleratorRequest?: ShowAcceleratorRequest): Promise<ShowAcceleratorResponse> {
        const options = ParamCreater().showAccelerator(showAcceleratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新全球加速器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新全球加速器
     * @param {string} acceleratorId 全球加速器ID。
     * @param {UpdateAcceleratorRequestBody} updateAcceleratorRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccelerator(updateAcceleratorRequest?: UpdateAcceleratorRequest): Promise<UpdateAcceleratorResponse> {
        const options = ParamCreater().updateAccelerator(updateAcceleratorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建终端节点
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {CreateEndpointRequestBody} createEndpointRequestBody 
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
     * 删除终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除终端节点
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {string} endpointId 终端节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest): Promise<void> {
        const options = ParamCreater().deleteEndpoint(deleteEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点组下终端节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点组下终端节点列表
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {number} [limit] 分页查询每页的资源个数。如果不设置，则默认为500。
     * @param {string} [marker] 分页查询的起始的资源ID，表示上一页最后一条查询资源记录的ID。不指定时表示查询第一页。 必须与limit一起使用。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 资源ID。
     * @param {'ACTIVE' | 'PENDING' | 'ERROR' | 'DELETING'} [status] 配置状态，可选范围: - ACTIVE：运行中 - PENDING：待定 - ERROR：错误 - DELETING：正在删除
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
     * 查询终端节点详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点详情
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {string} endpointId 终端节点ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEndpoint(showEndpointRequest?: ShowEndpointRequest): Promise<ShowEndpointResponse> {
        const options = ParamCreater().showEndpoint(showEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新终端节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新终端节点
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {string} endpointId 终端节点ID。
     * @param {UpdateEndpointRequestBody} updateEndpointRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpoint(updateEndpointRequest?: UpdateEndpointRequest): Promise<UpdateEndpointResponse> {
        const options = ParamCreater().updateEndpoint(updateEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建终端节点组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建终端节点组
     * @param {CreateEndpointGroupRequestBody} createEndpointGroupRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEndpointGroup(createEndpointGroupRequest?: CreateEndpointGroupRequest): Promise<CreateEndpointGroupResponse> {
        const options = ParamCreater().createEndpointGroup(createEndpointGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除终端节点组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除终端节点组
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEndpointGroup(deleteEndpointGroupRequest?: DeleteEndpointGroupRequest): Promise<void> {
        const options = ParamCreater().deleteEndpointGroup(deleteEndpointGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点组列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点组列表
     * @param {number} [limit] 分页查询每页的资源个数。如果不设置，则默认为500。
     * @param {string} [marker] 分页查询的起始的资源ID，表示上一页最后一条查询资源记录的ID。不指定时表示查询第一页。 必须与limit一起使用。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 资源ID。
     * @param {string} [name] 资源名称，取值范围：0~64个字符之间，只能由数字、字母、中划线和中文组成。
     * @param {'ACTIVE' | 'PENDING' | 'ERROR' | 'DELETING'} [status] 配置状态，可选范围: - ACTIVE：运行中 - PENDING：待定 - ERROR：错误 - DELETING：正在删除
     * @param {string} [listenerId] 监听器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpointGroups(listEndpointGroupsRequest?: ListEndpointGroupsRequest): Promise<ListEndpointGroupsResponse> {
        const options = ParamCreater().listEndpointGroups(listEndpointGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询终端节点组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询终端节点组详情
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEndpointGroup(showEndpointGroupRequest?: ShowEndpointGroupRequest): Promise<ShowEndpointGroupResponse> {
        const options = ParamCreater().showEndpointGroup(showEndpointGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新终端节点组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新终端节点组
     * @param {string} endpointGroupId 终端节点组ID。
     * @param {UpdateEndpointGroupRequestBody} updateEndpointGroupRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEndpointGroup(updateEndpointGroupRequest?: UpdateEndpointGroupRequest): Promise<UpdateEndpointGroupResponse> {
        const options = ParamCreater().updateEndpointGroup(updateEndpointGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建健康检查
     * @param {CreateHealthCheckRequestBody} createHealthCheckRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHealthCheck(createHealthCheckRequest?: CreateHealthCheckRequest): Promise<CreateHealthCheckResponse> {
        const options = ParamCreater().createHealthCheck(createHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除健康检查
     * @param {string} healthCheckId 健康检查ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHealthCheck(deleteHealthCheckRequest?: DeleteHealthCheckRequest): Promise<void> {
        const options = ParamCreater().deleteHealthCheck(deleteHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询健康检查列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康检查列表
     * @param {number} [limit] 分页查询每页的资源个数。如果不设置，则默认为500。
     * @param {string} [marker] 分页查询的起始的资源ID，表示上一页最后一条查询资源记录的ID。不指定时表示查询第一页。 必须与limit一起使用。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 资源ID。
     * @param {'ACTIVE' | 'PENDING' | 'ERROR' | 'DELETING'} [status] 配置状态，可选范围: - ACTIVE：运行中 - PENDING：待定 - ERROR：错误 - DELETING：正在删除
     * @param {string} [endpointGroupId] 终端节点组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHealthChecks(listHealthChecksRequest?: ListHealthChecksRequest): Promise<ListHealthChecksResponse> {
        const options = ParamCreater().listHealthChecks(listHealthChecksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询健康检查详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康检查详情
     * @param {string} healthCheckId 健康检查ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHealthCheck(showHealthCheckRequest?: ShowHealthCheckRequest): Promise<ShowHealthCheckResponse> {
        const options = ParamCreater().showHealthCheck(showHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新健康检查。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新健康检查
     * @param {string} healthCheckId 健康检查ID。
     * @param {UpdateHealthCheckRequestBody} updateHealthCheckRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHealthCheck(updateHealthCheckRequest?: UpdateHealthCheckRequest): Promise<UpdateHealthCheckResponse> {
        const options = ParamCreater().updateHealthCheck(updateHealthCheckRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建监听器
     * @param {CreateListenerRequestBody} createListenerRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createListener(createListenerRequest?: CreateListenerRequest): Promise<CreateListenerResponse> {
        const options = ParamCreater().createListener(createListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除监听器
     * @param {string} listenerId 监听器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteListener(deleteListenerRequest?: DeleteListenerRequest): Promise<void> {
        const options = ParamCreater().deleteListener(deleteListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监听器列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器列表
     * @param {number} [limit] 分页查询每页的资源个数。如果不设置，则默认为500。
     * @param {string} [marker] 分页查询的起始的资源ID，表示上一页最后一条查询资源记录的ID。不指定时表示查询第一页。 必须与limit一起使用。
     * @param {boolean} [pageReverse] 分页的顺序，true表示从后往前分页，false表示从前往后分页，默认为false。
     * @param {string} [id] 资源ID。
     * @param {string} [name] 资源名称，取值范围：0~64个字符之间，只能由数字、字母、中划线和中文组成。
     * @param {'ACTIVE' | 'PENDING' | 'ERROR' | 'DELETING'} [status] 配置状态，可选范围: - ACTIVE：运行中 - PENDING：待定 - ERROR：错误 - DELETING：正在删除
     * @param {string} [acceleratorId] 全球加速器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listListeners(listListenersRequest?: ListListenersRequest): Promise<ListListenersResponse> {
        const options = ParamCreater().listListeners(listListenersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监听器详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监听器详情
     * @param {string} listenerId 监听器ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListener(showListenerRequest?: ShowListenerRequest): Promise<ShowListenerResponse> {
        const options = ParamCreater().showListener(showListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新监听器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新监听器
     * @param {string} listenerId 监听器ID。
     * @param {UpdateListenerRequestBody} updateListenerRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateListener(updateListenerRequest?: UpdateListenerRequest): Promise<UpdateListenerResponse> {
        const options = ParamCreater().updateListener(updateListenerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询区域列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询区域列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRegions(): Promise<ListRegionsResponse> {
        const options = ParamCreater().listRegions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量添加标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加标签
     * @param {ResourceType} resourceType 资源类型。
     * @param {string} resourceId 资源ID。
     * @param {CreateTagsRequestBody} createTagsRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTags(createTagsRequest?: CreateTagsRequest): Promise<CreateTagsResponse> {
        const options = ParamCreater().createTags(createTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除标签
     * @param {ResourceType} resourceType 资源类型。
     * @param {string} resourceId 资源ID。
     * @param {DeleteTagsRequestBody} deleteTagsRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTags(deleteTagsRequest?: DeleteTagsRequest): Promise<DeleteTagsResponse> {
        const options = ParamCreater().deleteTags(deleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源已打标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源已打标签
     * @param {ResourceType} resourceType 资源类型。
     * @param {string} resourceId 资源ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceTags(showResourceTagsRequest?: ShowResourceTagsRequest): Promise<ShowResourceTagsResponse> {
        const options = ParamCreater().showResourceTags(showResourceTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建全球加速器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccelerator(createAcceleratorRequest?: CreateAcceleratorRequest) {
            const options = {
                method: "POST",
                url: "/v1/accelerators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createAcceleratorRequest !== null && createAcceleratorRequest !== undefined) {
                if (createAcceleratorRequest instanceof CreateAcceleratorRequest) {
                    body = createAcceleratorRequest.body
                } else {
                    body = createAcceleratorRequest['body'];
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
         * 删除全球加速器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccelerator(deleteAcceleratorRequest?: DeleteAcceleratorRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/accelerators/{accelerator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let acceleratorId;

            if (deleteAcceleratorRequest !== null && deleteAcceleratorRequest !== undefined) {
                if (deleteAcceleratorRequest instanceof DeleteAcceleratorRequest) {
                    acceleratorId = deleteAcceleratorRequest.acceleratorId;
                } else {
                    acceleratorId = deleteAcceleratorRequest['accelerator_id'];
                }
            }

        
            if (acceleratorId === null || acceleratorId === undefined) {
            throw new RequiredError('acceleratorId','Required parameter acceleratorId was null or undefined when calling deleteAccelerator.');
            }

            options.pathParams = { 'accelerator_id': acceleratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全球加速器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccelerators(listAcceleratorsRequest?: ListAcceleratorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/accelerators",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let status;
            
            let enterpriseProjectId;

            if (listAcceleratorsRequest !== null && listAcceleratorsRequest !== undefined) {
                if (listAcceleratorsRequest instanceof ListAcceleratorsRequest) {
                    limit = listAcceleratorsRequest.limit;
                    marker = listAcceleratorsRequest.marker;
                    pageReverse = listAcceleratorsRequest.pageReverse;
                    id = listAcceleratorsRequest.id;
                    name = listAcceleratorsRequest.name;
                    status = listAcceleratorsRequest.status;
                    enterpriseProjectId = listAcceleratorsRequest.enterpriseProjectId;
                } else {
                    limit = listAcceleratorsRequest['limit'];
                    marker = listAcceleratorsRequest['marker'];
                    pageReverse = listAcceleratorsRequest['page_reverse'];
                    id = listAcceleratorsRequest['id'];
                    name = listAcceleratorsRequest['name'];
                    status = listAcceleratorsRequest['status'];
                    enterpriseProjectId = listAcceleratorsRequest['enterprise_project_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询全球加速器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccelerator(showAcceleratorRequest?: ShowAcceleratorRequest) {
            const options = {
                method: "GET",
                url: "/v1/accelerators/{accelerator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let acceleratorId;

            if (showAcceleratorRequest !== null && showAcceleratorRequest !== undefined) {
                if (showAcceleratorRequest instanceof ShowAcceleratorRequest) {
                    acceleratorId = showAcceleratorRequest.acceleratorId;
                } else {
                    acceleratorId = showAcceleratorRequest['accelerator_id'];
                }
            }

        
            if (acceleratorId === null || acceleratorId === undefined) {
            throw new RequiredError('acceleratorId','Required parameter acceleratorId was null or undefined when calling showAccelerator.');
            }

            options.pathParams = { 'accelerator_id': acceleratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新全球加速器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccelerator(updateAcceleratorRequest?: UpdateAcceleratorRequest) {
            const options = {
                method: "PUT",
                url: "/v1/accelerators/{accelerator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let acceleratorId;

            if (updateAcceleratorRequest !== null && updateAcceleratorRequest !== undefined) {
                if (updateAcceleratorRequest instanceof UpdateAcceleratorRequest) {
                    acceleratorId = updateAcceleratorRequest.acceleratorId;
                    body = updateAcceleratorRequest.body
                } else {
                    acceleratorId = updateAcceleratorRequest['accelerator_id'];
                    body = updateAcceleratorRequest['body'];
                }
            }

        
            if (acceleratorId === null || acceleratorId === undefined) {
            throw new RequiredError('acceleratorId','Required parameter acceleratorId was null or undefined when calling updateAccelerator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'accelerator_id': acceleratorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEndpoint(createEndpointRequest?: CreateEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v1/endpoint-groups/{endpoint_group_id}/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let endpointGroupId;

            if (createEndpointRequest !== null && createEndpointRequest !== undefined) {
                if (createEndpointRequest instanceof CreateEndpointRequest) {
                    endpointGroupId = createEndpointRequest.endpointGroupId;
                    body = createEndpointRequest.body
                } else {
                    endpointGroupId = createEndpointRequest['endpoint_group_id'];
                    body = createEndpointRequest['body'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling createEndpoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_group_id': endpointGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/endpoint-groups/{endpoint_group_id}/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointGroupId;
            
            let endpointId;

            if (deleteEndpointRequest !== null && deleteEndpointRequest !== undefined) {
                if (deleteEndpointRequest instanceof DeleteEndpointRequest) {
                    endpointGroupId = deleteEndpointRequest.endpointGroupId;
                    endpointId = deleteEndpointRequest.endpointId;
                } else {
                    endpointGroupId = deleteEndpointRequest['endpoint_group_id'];
                    endpointId = deleteEndpointRequest['endpoint_id'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling deleteEndpoint.');
            }
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling deleteEndpoint.');
            }

            options.pathParams = { 'endpoint_group_id': endpointGroupId,'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点组下终端节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpoints(listEndpointsRequest?: ListEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v1/endpoint-groups/{endpoint_group_id}/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let endpointGroupId;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let status;

            if (listEndpointsRequest !== null && listEndpointsRequest !== undefined) {
                if (listEndpointsRequest instanceof ListEndpointsRequest) {
                    endpointGroupId = listEndpointsRequest.endpointGroupId;
                    limit = listEndpointsRequest.limit;
                    marker = listEndpointsRequest.marker;
                    pageReverse = listEndpointsRequest.pageReverse;
                    id = listEndpointsRequest.id;
                    status = listEndpointsRequest.status;
                } else {
                    endpointGroupId = listEndpointsRequest['endpoint_group_id'];
                    limit = listEndpointsRequest['limit'];
                    marker = listEndpointsRequest['marker'];
                    pageReverse = listEndpointsRequest['page_reverse'];
                    id = listEndpointsRequest['id'];
                    status = listEndpointsRequest['status'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling listEndpoints.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'endpoint_group_id': endpointGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEndpoint(showEndpointRequest?: ShowEndpointRequest) {
            const options = {
                method: "GET",
                url: "/v1/endpoint-groups/{endpoint_group_id}/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointGroupId;
            
            let endpointId;

            if (showEndpointRequest !== null && showEndpointRequest !== undefined) {
                if (showEndpointRequest instanceof ShowEndpointRequest) {
                    endpointGroupId = showEndpointRequest.endpointGroupId;
                    endpointId = showEndpointRequest.endpointId;
                } else {
                    endpointGroupId = showEndpointRequest['endpoint_group_id'];
                    endpointId = showEndpointRequest['endpoint_id'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling showEndpoint.');
            }
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling showEndpoint.');
            }

            options.pathParams = { 'endpoint_group_id': endpointGroupId,'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新终端节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpoint(updateEndpointRequest?: UpdateEndpointRequest) {
            const options = {
                method: "PUT",
                url: "/v1/endpoint-groups/{endpoint_group_id}/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let endpointGroupId;
            
            let endpointId;

            if (updateEndpointRequest !== null && updateEndpointRequest !== undefined) {
                if (updateEndpointRequest instanceof UpdateEndpointRequest) {
                    endpointGroupId = updateEndpointRequest.endpointGroupId;
                    endpointId = updateEndpointRequest.endpointId;
                    body = updateEndpointRequest.body
                } else {
                    endpointGroupId = updateEndpointRequest['endpoint_group_id'];
                    endpointId = updateEndpointRequest['endpoint_id'];
                    body = updateEndpointRequest['body'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling updateEndpoint.');
            }
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling updateEndpoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_group_id': endpointGroupId,'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建终端节点组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEndpointGroup(createEndpointGroupRequest?: CreateEndpointGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/endpoint-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createEndpointGroupRequest !== null && createEndpointGroupRequest !== undefined) {
                if (createEndpointGroupRequest instanceof CreateEndpointGroupRequest) {
                    body = createEndpointGroupRequest.body
                } else {
                    body = createEndpointGroupRequest['body'];
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
         * 删除终端节点组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpointGroup(deleteEndpointGroupRequest?: DeleteEndpointGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/endpoint-groups/{endpoint_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointGroupId;

            if (deleteEndpointGroupRequest !== null && deleteEndpointGroupRequest !== undefined) {
                if (deleteEndpointGroupRequest instanceof DeleteEndpointGroupRequest) {
                    endpointGroupId = deleteEndpointGroupRequest.endpointGroupId;
                } else {
                    endpointGroupId = deleteEndpointGroupRequest['endpoint_group_id'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling deleteEndpointGroup.');
            }

            options.pathParams = { 'endpoint_group_id': endpointGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点组列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpointGroups(listEndpointGroupsRequest?: ListEndpointGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v1/endpoint-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let status;
            
            let listenerId;

            if (listEndpointGroupsRequest !== null && listEndpointGroupsRequest !== undefined) {
                if (listEndpointGroupsRequest instanceof ListEndpointGroupsRequest) {
                    limit = listEndpointGroupsRequest.limit;
                    marker = listEndpointGroupsRequest.marker;
                    pageReverse = listEndpointGroupsRequest.pageReverse;
                    id = listEndpointGroupsRequest.id;
                    name = listEndpointGroupsRequest.name;
                    status = listEndpointGroupsRequest.status;
                    listenerId = listEndpointGroupsRequest.listenerId;
                } else {
                    limit = listEndpointGroupsRequest['limit'];
                    marker = listEndpointGroupsRequest['marker'];
                    pageReverse = listEndpointGroupsRequest['page_reverse'];
                    id = listEndpointGroupsRequest['id'];
                    name = listEndpointGroupsRequest['name'];
                    status = listEndpointGroupsRequest['status'];
                    listenerId = listEndpointGroupsRequest['listener_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (listenerId !== null && listenerId !== undefined) {
                localVarQueryParameter['listener_id'] = listenerId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询终端节点组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEndpointGroup(showEndpointGroupRequest?: ShowEndpointGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1/endpoint-groups/{endpoint_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointGroupId;

            if (showEndpointGroupRequest !== null && showEndpointGroupRequest !== undefined) {
                if (showEndpointGroupRequest instanceof ShowEndpointGroupRequest) {
                    endpointGroupId = showEndpointGroupRequest.endpointGroupId;
                } else {
                    endpointGroupId = showEndpointGroupRequest['endpoint_group_id'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling showEndpointGroup.');
            }

            options.pathParams = { 'endpoint_group_id': endpointGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新终端节点组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpointGroup(updateEndpointGroupRequest?: UpdateEndpointGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v1/endpoint-groups/{endpoint_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let endpointGroupId;

            if (updateEndpointGroupRequest !== null && updateEndpointGroupRequest !== undefined) {
                if (updateEndpointGroupRequest instanceof UpdateEndpointGroupRequest) {
                    endpointGroupId = updateEndpointGroupRequest.endpointGroupId;
                    body = updateEndpointGroupRequest.body
                } else {
                    endpointGroupId = updateEndpointGroupRequest['endpoint_group_id'];
                    body = updateEndpointGroupRequest['body'];
                }
            }

        
            if (endpointGroupId === null || endpointGroupId === undefined) {
            throw new RequiredError('endpointGroupId','Required parameter endpointGroupId was null or undefined when calling updateEndpointGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_group_id': endpointGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHealthCheck(createHealthCheckRequest?: CreateHealthCheckRequest) {
            const options = {
                method: "POST",
                url: "/v1/health-checks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createHealthCheckRequest !== null && createHealthCheckRequest !== undefined) {
                if (createHealthCheckRequest instanceof CreateHealthCheckRequest) {
                    body = createHealthCheckRequest.body
                } else {
                    body = createHealthCheckRequest['body'];
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
         * 删除健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHealthCheck(deleteHealthCheckRequest?: DeleteHealthCheckRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/health-checks/{health_check_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let healthCheckId;

            if (deleteHealthCheckRequest !== null && deleteHealthCheckRequest !== undefined) {
                if (deleteHealthCheckRequest instanceof DeleteHealthCheckRequest) {
                    healthCheckId = deleteHealthCheckRequest.healthCheckId;
                } else {
                    healthCheckId = deleteHealthCheckRequest['health_check_id'];
                }
            }

        
            if (healthCheckId === null || healthCheckId === undefined) {
            throw new RequiredError('healthCheckId','Required parameter healthCheckId was null or undefined when calling deleteHealthCheck.');
            }

            options.pathParams = { 'health_check_id': healthCheckId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询健康检查列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHealthChecks(listHealthChecksRequest?: ListHealthChecksRequest) {
            const options = {
                method: "GET",
                url: "/v1/health-checks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let status;
            
            let endpointGroupId;

            if (listHealthChecksRequest !== null && listHealthChecksRequest !== undefined) {
                if (listHealthChecksRequest instanceof ListHealthChecksRequest) {
                    limit = listHealthChecksRequest.limit;
                    marker = listHealthChecksRequest.marker;
                    pageReverse = listHealthChecksRequest.pageReverse;
                    id = listHealthChecksRequest.id;
                    status = listHealthChecksRequest.status;
                    endpointGroupId = listHealthChecksRequest.endpointGroupId;
                } else {
                    limit = listHealthChecksRequest['limit'];
                    marker = listHealthChecksRequest['marker'];
                    pageReverse = listHealthChecksRequest['page_reverse'];
                    id = listHealthChecksRequest['id'];
                    status = listHealthChecksRequest['status'];
                    endpointGroupId = listHealthChecksRequest['endpoint_group_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (endpointGroupId !== null && endpointGroupId !== undefined) {
                localVarQueryParameter['endpoint_group_id'] = endpointGroupId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询健康检查详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHealthCheck(showHealthCheckRequest?: ShowHealthCheckRequest) {
            const options = {
                method: "GET",
                url: "/v1/health-checks/{health_check_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let healthCheckId;

            if (showHealthCheckRequest !== null && showHealthCheckRequest !== undefined) {
                if (showHealthCheckRequest instanceof ShowHealthCheckRequest) {
                    healthCheckId = showHealthCheckRequest.healthCheckId;
                } else {
                    healthCheckId = showHealthCheckRequest['health_check_id'];
                }
            }

        
            if (healthCheckId === null || healthCheckId === undefined) {
            throw new RequiredError('healthCheckId','Required parameter healthCheckId was null or undefined when calling showHealthCheck.');
            }

            options.pathParams = { 'health_check_id': healthCheckId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新健康检查。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHealthCheck(updateHealthCheckRequest?: UpdateHealthCheckRequest) {
            const options = {
                method: "PUT",
                url: "/v1/health-checks/{health_check_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let healthCheckId;

            if (updateHealthCheckRequest !== null && updateHealthCheckRequest !== undefined) {
                if (updateHealthCheckRequest instanceof UpdateHealthCheckRequest) {
                    healthCheckId = updateHealthCheckRequest.healthCheckId;
                    body = updateHealthCheckRequest.body
                } else {
                    healthCheckId = updateHealthCheckRequest['health_check_id'];
                    body = updateHealthCheckRequest['body'];
                }
            }

        
            if (healthCheckId === null || healthCheckId === undefined) {
            throw new RequiredError('healthCheckId','Required parameter healthCheckId was null or undefined when calling updateHealthCheck.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'health_check_id': healthCheckId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createListener(createListenerRequest?: CreateListenerRequest) {
            const options = {
                method: "POST",
                url: "/v1/listeners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;

            if (createListenerRequest !== null && createListenerRequest !== undefined) {
                if (createListenerRequest instanceof CreateListenerRequest) {
                    body = createListenerRequest.body
                } else {
                    body = createListenerRequest['body'];
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
         * 删除监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteListener(deleteListenerRequest?: DeleteListenerRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;

            if (deleteListenerRequest !== null && deleteListenerRequest !== undefined) {
                if (deleteListenerRequest instanceof DeleteListenerRequest) {
                    listenerId = deleteListenerRequest.listenerId;
                } else {
                    listenerId = deleteListenerRequest['listener_id'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling deleteListener.');
            }

            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询监听器列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listListeners(listListenersRequest?: ListListenersRequest) {
            const options = {
                method: "GET",
                url: "/v1/listeners",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let pageReverse;
            
            let id;
            
            let name;
            
            let status;
            
            let acceleratorId;

            if (listListenersRequest !== null && listListenersRequest !== undefined) {
                if (listListenersRequest instanceof ListListenersRequest) {
                    limit = listListenersRequest.limit;
                    marker = listListenersRequest.marker;
                    pageReverse = listListenersRequest.pageReverse;
                    id = listListenersRequest.id;
                    name = listListenersRequest.name;
                    status = listListenersRequest.status;
                    acceleratorId = listListenersRequest.acceleratorId;
                } else {
                    limit = listListenersRequest['limit'];
                    marker = listListenersRequest['marker'];
                    pageReverse = listListenersRequest['page_reverse'];
                    id = listListenersRequest['id'];
                    name = listListenersRequest['name'];
                    status = listListenersRequest['status'];
                    acceleratorId = listListenersRequest['accelerator_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (pageReverse !== null && pageReverse !== undefined) {
                localVarQueryParameter['page_reverse'] = pageReverse;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (acceleratorId !== null && acceleratorId !== undefined) {
                localVarQueryParameter['accelerator_id'] = acceleratorId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询监听器详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListener(showListenerRequest?: ShowListenerRequest) {
            const options = {
                method: "GET",
                url: "/v1/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let listenerId;

            if (showListenerRequest !== null && showListenerRequest !== undefined) {
                if (showListenerRequest instanceof ShowListenerRequest) {
                    listenerId = showListenerRequest.listenerId;
                } else {
                    listenerId = showListenerRequest['listener_id'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling showListener.');
            }

            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新监听器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateListener(updateListenerRequest?: UpdateListenerRequest) {
            const options = {
                method: "PUT",
                url: "/v1/listeners/{listener_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let listenerId;

            if (updateListenerRequest !== null && updateListenerRequest !== undefined) {
                if (updateListenerRequest instanceof UpdateListenerRequest) {
                    listenerId = updateListenerRequest.listenerId;
                    body = updateListenerRequest.body
                } else {
                    listenerId = updateListenerRequest['listener_id'];
                    body = updateListenerRequest['body'];
                }
            }

        
            if (listenerId === null || listenerId === undefined) {
            throw new RequiredError('listenerId','Required parameter listenerId was null or undefined when calling updateListener.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'listener_id': listenerId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询区域列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRegions() {
            const options = {
                method: "GET",
                url: "/v1/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量添加标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTags(createTagsRequest?: CreateTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{resource_type}/{resource_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let resourceType;
            
            let resourceId;

            if (createTagsRequest !== null && createTagsRequest !== undefined) {
                if (createTagsRequest instanceof CreateTagsRequest) {
                    resourceType = createTagsRequest.resourceType;
                    resourceId = createTagsRequest.resourceId;
                    body = createTagsRequest.body
                } else {
                    resourceType = createTagsRequest['resource_type'];
                    resourceId = createTagsRequest['resource_id'];
                    body = createTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTags(deleteTagsRequest?: DeleteTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{resource_type}/{resource_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            
            let resourceType;
            
            let resourceId;

            if (deleteTagsRequest !== null && deleteTagsRequest !== undefined) {
                if (deleteTagsRequest instanceof DeleteTagsRequest) {
                    resourceType = deleteTagsRequest.resourceType;
                    resourceId = deleteTagsRequest.resourceId;
                    body = deleteTagsRequest.body
                } else {
                    resourceType = deleteTagsRequest['resource_type'];
                    resourceId = deleteTagsRequest['resource_id'];
                    body = deleteTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling deleteTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling deleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源已打标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceTags(showResourceTagsRequest?: ShowResourceTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{resource_type}/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;
            
            let resourceId;

            if (showResourceTagsRequest !== null && showResourceTagsRequest !== undefined) {
                if (showResourceTagsRequest instanceof ShowResourceTagsRequest) {
                    resourceType = showResourceTagsRequest.resourceType;
                    resourceId = showResourceTagsRequest.resourceId;
                } else {
                    resourceType = showResourceTagsRequest['resource_type'];
                    resourceId = showResourceTagsRequest['resource_id'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling showResourceTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling showResourceTags.');
            }

            options.pathParams = { 'resource_type': resourceType,'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): GaClient {
    return new GaClient(client);
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