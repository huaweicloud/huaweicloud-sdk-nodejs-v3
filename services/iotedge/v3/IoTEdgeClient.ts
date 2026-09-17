import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { ClusterNodeConfig } from './model/ClusterNodeConfig';
import { CreateAppInstanceRequest } from './model/CreateAppInstanceRequest';
import { CreateAppInstanceRequestDTO } from './model/CreateAppInstanceRequestDTO';
import { CreateAppInstanceResponse } from './model/CreateAppInstanceResponse';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppRequestDTO } from './model/CreateAppRequestDTO';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateAppVersionRequest } from './model/CreateAppVersionRequest';
import { CreateAppVersionRequestBody } from './model/CreateAppVersionRequestBody';
import { CreateAppVersionResponse } from './model/CreateAppVersionResponse';
import { CreateClusterInstallCmdRequest } from './model/CreateClusterInstallCmdRequest';
import { CreateClusterInstallCmdResponse } from './model/CreateClusterInstallCmdResponse';
import { CreateClusterNodesInstallCmdRequest } from './model/CreateClusterNodesInstallCmdRequest';
import { CreateClusterNodesInstallCmdResponse } from './model/CreateClusterNodesInstallCmdResponse';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterRequestDTO } from './model/CreateClusterRequestDTO';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateNodesInstallCmdV3RequestBody } from './model/CreateNodesInstallCmdV3RequestBody';
import { DeleteAppInstanceRequest } from './model/DeleteAppInstanceRequest';
import { DeleteAppInstanceResponse } from './model/DeleteAppInstanceResponse';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DeleteAppVersionRequest } from './model/DeleteAppVersionRequest';
import { DeleteAppVersionResponse } from './model/DeleteAppVersionResponse';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DownloadAppVersionRequest } from './model/DownloadAppVersionRequest';
import { DownloadAppVersionResponse } from './model/DownloadAppVersionResponse';
import { InvokeKubeApiRequest } from './model/InvokeKubeApiRequest';
import { InvokeKubeApiResponse } from './model/InvokeKubeApiResponse';
import { LicenseInfo } from './model/LicenseInfo';
import { ListAppImageRequest } from './model/ListAppImageRequest';
import { ListAppImageResponse } from './model/ListAppImageResponse';
import { ListAppInstanceHistoryRequest } from './model/ListAppInstanceHistoryRequest';
import { ListAppInstanceHistoryResponse } from './model/ListAppInstanceHistoryResponse';
import { ListAppInstancesRequest } from './model/ListAppInstancesRequest';
import { ListAppInstancesResponse } from './model/ListAppInstancesResponse';
import { ListAppVersionsRequest } from './model/ListAppVersionsRequest';
import { ListAppVersionsResponse } from './model/ListAppVersionsResponse';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListClusterNamespacesRequest } from './model/ListClusterNamespacesRequest';
import { ListClusterNamespacesResponse } from './model/ListClusterNamespacesResponse';
import { ListClusterNodesRequest } from './model/ListClusterNodesRequest';
import { ListClusterNodesResponse } from './model/ListClusterNodesResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { NodeAllocatedResourceDTO } from './model/NodeAllocatedResourceDTO';
import { NodeConfig } from './model/NodeConfig';
import { NodeResourceDTO } from './model/NodeResourceDTO';
import { PageInfoDTO } from './model/PageInfoDTO';
import { QueryAppBriefResponseDTO } from './model/QueryAppBriefResponseDTO';
import { QueryAppImageResponseDTO } from './model/QueryAppImageResponseDTO';
import { QueryAppInstanceHistoryResponseDTO } from './model/QueryAppInstanceHistoryResponseDTO';
import { QueryAppInstanceResp } from './model/QueryAppInstanceResp';
import { QueryAppVersionResponseDTO } from './model/QueryAppVersionResponseDTO';
import { QueryClusterBriefResponseDTO } from './model/QueryClusterBriefResponseDTO';
import { QueryNamespaceResp } from './model/QueryNamespaceResp';
import { QueryNodeResp } from './model/QueryNodeResp';
import { ResourceDetail } from './model/ResourceDetail';
import { ShowAppRequest } from './model/ShowAppRequest';
import { ShowAppResponse } from './model/ShowAppResponse';
import { ShowAppVersionRequest } from './model/ShowAppVersionRequest';
import { ShowAppVersionResponse } from './model/ShowAppVersionResponse';
import { ShowClusterNodeRequest } from './model/ShowClusterNodeRequest';
import { ShowClusterNodeResponse } from './model/ShowClusterNodeResponse';
import { ShowClusterRequest } from './model/ShowClusterRequest';
import { ShowClusterResourcesRequest } from './model/ShowClusterResourcesRequest';
import { ShowClusterResourcesResponse } from './model/ShowClusterResourcesResponse';
import { ShowClusterResponse } from './model/ShowClusterResponse';
import { UpdateAppInstanceRequest } from './model/UpdateAppInstanceRequest';
import { UpdateAppInstanceRequestDTO } from './model/UpdateAppInstanceRequestDTO';
import { UpdateAppInstanceResponse } from './model/UpdateAppInstanceResponse';
import { UpdateResourceBindingRequest } from './model/UpdateResourceBindingRequest';
import { UpdateResourceBindingResponse } from './model/UpdateResourceBindingResponse';
import { UpdateResourceBody } from './model/UpdateResourceBody';

export class IoTEdgeClient {
    public static newBuilder(): ClientBuilder<IoTEdgeClient> {
            let client = new ClientBuilder<IoTEdgeClient>(newClient);
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
     * 应用服务器可调用此接口为创建批量处理任务，对多个设备进行批量操作。当前支持批量软固件升级、批量创建设备、批量删除设备、批量冻结、批量解冻、批量下发同步命令、批量下发异步命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用模板
     * @param {CreateAppRequestDTO} createAppRequestBody 创建应用请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApp(createAppRequest?: CreateAppRequest): Promise<CreateAppResponse> {
        const options = ParamCreater().createApp(createAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除应用模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用模板
     * @param {string} appId 应用ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApp(deleteAppRequest?: DeleteAppRequest): Promise<DeleteAppResponse> {
        const options = ParamCreater().deleteApp(deleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询应用模板列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用模板列表
     * @param {string} [appType] 应用类型
     * @param {string} [providerType] 应用来源
     * @param {string} [appId] 应用ID
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000。
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApps(listAppsRequest?: ListAppsRequest): Promise<ListAppsResponse> {
        const options = ParamCreater().listApps(listAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定批量任务的信息，包括任务内容、任务状态、任务完成情况统计以及子任务列表等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用模板详情
     * @param {string} appId 应用模板ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApp(showAppRequest?: ShowAppRequest): Promise<ShowAppResponse> {
        const options = ParamCreater().showApp(showAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为创建应用实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用实例
     * @param {string} clusterId 边缘集群ID
     * @param {CreateAppInstanceRequestDTO} createAppInstanceRequestBody 创建应用实例请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppInstance(createAppInstanceRequest?: CreateAppInstanceRequest): Promise<CreateAppInstanceResponse> {
        const options = ParamCreater().createAppInstance(createAppInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为删除应用实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用实例
     * @param {string} clusterId 边缘集群ID
     * @param {string} appInstanceId 应用实例ID
     * @param {string} [namespace] 命名空间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppInstance(deleteAppInstanceRequest?: DeleteAppInstanceRequest): Promise<DeleteAppInstanceResponse> {
        const options = ParamCreater().deleteAppInstance(deleteAppInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询应用实例的历史版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用实例的历史版本列表
     * @param {string} clusterId 边缘集群ID
     * @param {string} appInstanceId 应用实例ID
     * @param {string} [namespace] 命名空间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppInstanceHistory(listAppInstanceHistoryRequest?: ListAppInstanceHistoryRequest): Promise<ListAppInstanceHistoryResponse> {
        const options = ParamCreater().listAppInstanceHistory(listAppInstanceHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询应用实例列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用实例列表
     * @param {string} clusterId 边缘集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppInstances(listAppInstancesRequest?: ListAppInstancesRequest): Promise<ListAppInstancesResponse> {
        const options = ParamCreater().listAppInstances(listAppInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为更新应用实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用实例
     * @param {string} clusterId 边缘集群ID
     * @param {string} appInstanceId 应用实例ID
     * @param {UpdateAppInstanceRequestDTO} updateAppInstanceRequestBody 更新应用实例请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAppInstance(updateAppInstanceRequest?: UpdateAppInstanceRequest): Promise<UpdateAppInstanceResponse> {
        const options = ParamCreater().updateAppInstance(updateAppInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为创建应用版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用版本
     * @param {string} appId 应用ID
     * @param {string} version 应用版本
     * @param {any} chart chart包。当前仅支持tgz文件格式。
     * @param {string} [images] 应用包含的镜像列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAppVersion(createAppVersionRequest?: CreateAppVersionRequest): Promise<CreateAppVersionResponse> {
        const options = ParamCreater().createAppVersion(createAppVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除应用版本。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用版本
     * @param {string} appId 应用ID
     * @param {string} version 应用版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppVersion(deleteAppVersionRequest?: DeleteAppVersionRequest): Promise<DeleteAppVersionResponse> {
        const options = ParamCreater().deleteAppVersion(deleteAppVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口下载应用版本Chart包。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载应用版本Chart包
     * @param {string} appId 应用ID
     * @param {string} version 应用版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadAppVersion(downloadAppVersionRequest?: DownloadAppVersionRequest): Promise<DownloadAppVersionResponse> {
        const options = ParamCreater().downloadAppVersion(downloadAppVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询应用版本包含的镜像列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用版本包含的镜像列表
     * @param {string} appId 应用ID
     * @param {string} version 应用版本
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000。
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppImage(listAppImageRequest?: ListAppImageRequest): Promise<ListAppImageResponse> {
        const options = ParamCreater().listAppImage(listAppImageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询应用版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用版本列表
     * @param {string} appId 应用ID
     * @param {string} [version] 应用版本号
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000。
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppVersions(listAppVersionsRequest?: ListAppVersionsRequest): Promise<ListAppVersionsResponse> {
        const options = ParamCreater().listAppVersions(listAppVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询应用版本详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用版本详情
     * @param {string} appId 应用ID
     * @param {string} version 应用版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppVersion(showAppVersionRequest?: ShowAppVersionRequest): Promise<ShowAppVersionResponse> {
        const options = ParamCreater().showAppVersion(showAppVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为创建边缘集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建边缘集群
     * @param {CreateClusterRequestDTO} createClusterRequestBody 创建边缘集群请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse> {
        const options = ParamCreater().createCluster(createClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口生成边缘集群安装命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成边缘集群安装命令
     * @param {string} clusterId 边缘集群ID
     * @param {string} arch 边缘集群架构
     * @param {string} [os] 集群操作系统内核
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterInstallCmd(createClusterInstallCmdRequest?: CreateClusterInstallCmdRequest): Promise<CreateClusterInstallCmdResponse> {
        const options = ParamCreater().createClusterInstallCmd(createClusterInstallCmdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除边缘集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除边缘集群
     * @param {string} clusterId 边缘集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse> {
        const options = ParamCreater().deleteCluster(deleteClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询边缘集群列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘集群列表
     * @param {string} [clusterName] 边缘集群名称
     * @param {string} [state] 边缘集群状态
     * @param {Array<string>} [clusterIds] 边缘集群ID列表
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000。
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters(listClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询边缘集群详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘集群详情
     * @param {string} clusterId 边缘集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCluster(showClusterRequest?: ShowClusterRequest): Promise<ShowClusterResponse> {
        const options = ParamCreater().showCluster(showClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源列表-企业版
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源列表-企业版
     * @param {string} [resourceGroup] 查询资源组
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterResources(showClusterResourcesRequest?: ShowClusterResourcesRequest): Promise<ShowClusterResourcesResponse> {
        const options = ParamCreater().showClusterResources(showClusterResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改资源绑定信息-企业版
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改资源绑定信息-企业版
     * @param {string} resourceId 资源id
     * @param {UpdateResourceBody} updateResourceBindingRequestBody 更改资源绑定信息请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResourceBinding(updateResourceBindingRequest?: UpdateResourceBindingRequest): Promise<UpdateResourceBindingResponse> {
        const options = ParamCreater().updateResourceBinding(updateResourceBindingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 转发k8s API。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 转发k8s API
     * @param {string} clusterId 边缘集群ID
     * @param {string} xForwardTarget 透传的k8s的API，{method} {uri}?{query_param}
     * @param {string} xForwardHeaders 透传的API的header
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public invokeKubeApi(invokeKubeApiRequest?: InvokeKubeApiRequest): Promise<InvokeKubeApiResponse> {
        const options = ParamCreater().invokeKubeApi(invokeKubeApiRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询命名空间列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询命名空间列表
     * @param {string} clusterId 边缘集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterNamespaces(listClusterNamespacesRequest?: ListClusterNamespacesRequest): Promise<ListClusterNamespacesResponse> {
        const options = ParamCreater().listClusterNamespaces(listClusterNamespacesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成安装集群节点的安装命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成安装集群节点的安装命令
     * @param {string} clusterId 边缘集群ID
     * @param {CreateNodesInstallCmdV3RequestBody} createNodesInstallCmdV3RequestBody request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterNodesInstallCmd(createClusterNodesInstallCmdRequest?: CreateClusterNodesInstallCmdRequest): Promise<CreateClusterNodesInstallCmdResponse> {
        const options = ParamCreater().createClusterNodesInstallCmd(createClusterNodesInstallCmdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询集群的节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群的节点列表
     * @param {string} clusterId 边缘集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterNodes(listClusterNodesRequest?: ListClusterNodesRequest): Promise<ListClusterNodesResponse> {
        const options = ParamCreater().listClusterNodes(listClusterNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询集群的节点详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群的节点详情
     * @param {string} clusterId 边缘集群ID
     * @param {string} nodeName 节点名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterNode(showClusterNodeRequest?: ShowClusterNodeRequest): Promise<ShowClusterNodeResponse> {
        const options = ParamCreater().showClusterNode(showClusterNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 应用服务器可调用此接口为创建批量处理任务，对多个设备进行批量操作。当前支持批量软固件升级、批量创建设备、批量删除设备、批量冻结、批量解冻、批量下发同步命令、批量下发异步命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApp(createAppRequest?: CreateAppRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAppRequest !== null && createAppRequest !== undefined) {
                if (createAppRequest instanceof CreateAppRequest) {
                    body = createAppRequest.body
                } else {
                    body = createAppRequest['body'];
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
         * 应用服务器可调用此接口删除应用模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    appId = deleteAppRequest.appId;
                } else {
                    appId = deleteAppRequest['app_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApp.');
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询应用模板列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appType;
            
            let providerType;
            
            let appId;
            
            let limit;
            
            let offset;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    appType = listAppsRequest.appType;
                    providerType = listAppsRequest.providerType;
                    appId = listAppsRequest.appId;
                    limit = listAppsRequest.limit;
                    offset = listAppsRequest.offset;
                } else {
                    appType = listAppsRequest['app_type'];
                    providerType = listAppsRequest['provider_type'];
                    appId = listAppsRequest['app_id'];
                    limit = listAppsRequest['limit'];
                    offset = listAppsRequest['offset'];
                }
            }

        
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (providerType !== null && providerType !== undefined) {
                localVarQueryParameter['provider_type'] = providerType;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定批量任务的信息，包括任务内容、任务状态、任务完成情况统计以及子任务列表等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApp(showAppRequest?: ShowAppRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;

            if (showAppRequest !== null && showAppRequest !== undefined) {
                if (showAppRequest instanceof ShowAppRequest) {
                    appId = showAppRequest.appId;
                } else {
                    appId = showAppRequest['app_id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showApp.');
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为创建应用实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppInstance(createAppInstanceRequest?: CreateAppInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clusters/{cluster_id}/app-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createAppInstanceRequest !== null && createAppInstanceRequest !== undefined) {
                if (createAppInstanceRequest instanceof CreateAppInstanceRequest) {
                    clusterId = createAppInstanceRequest.clusterId;
                    body = createAppInstanceRequest.body
                } else {
                    clusterId = createAppInstanceRequest['cluster_id'];
                    body = createAppInstanceRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAppInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为删除应用实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppInstance(deleteAppInstanceRequest?: DeleteAppInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/clusters/{cluster_id}/app-instances/{app_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appInstanceId;
            
            let namespace;

            if (deleteAppInstanceRequest !== null && deleteAppInstanceRequest !== undefined) {
                if (deleteAppInstanceRequest instanceof DeleteAppInstanceRequest) {
                    clusterId = deleteAppInstanceRequest.clusterId;
                    appInstanceId = deleteAppInstanceRequest.appInstanceId;
                    namespace = deleteAppInstanceRequest.namespace;
                } else {
                    clusterId = deleteAppInstanceRequest['cluster_id'];
                    appInstanceId = deleteAppInstanceRequest['app_instance_id'];
                    namespace = deleteAppInstanceRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAppInstance.');
            }
            if (appInstanceId === null || appInstanceId === undefined) {
            throw new RequiredError('appInstanceId','Required parameter appInstanceId was null or undefined when calling deleteAppInstance.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'app_instance_id': appInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询应用实例的历史版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppInstanceHistory(listAppInstanceHistoryRequest?: ListAppInstanceHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters/{cluster_id}/app-instances/{app_instance_id}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let appInstanceId;
            
            let namespace;

            if (listAppInstanceHistoryRequest !== null && listAppInstanceHistoryRequest !== undefined) {
                if (listAppInstanceHistoryRequest instanceof ListAppInstanceHistoryRequest) {
                    clusterId = listAppInstanceHistoryRequest.clusterId;
                    appInstanceId = listAppInstanceHistoryRequest.appInstanceId;
                    namespace = listAppInstanceHistoryRequest.namespace;
                } else {
                    clusterId = listAppInstanceHistoryRequest['cluster_id'];
                    appInstanceId = listAppInstanceHistoryRequest['app_instance_id'];
                    namespace = listAppInstanceHistoryRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAppInstanceHistory.');
            }
            if (appInstanceId === null || appInstanceId === undefined) {
            throw new RequiredError('appInstanceId','Required parameter appInstanceId was null or undefined when calling listAppInstanceHistory.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'app_instance_id': appInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询应用实例列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppInstances(listAppInstancesRequest?: ListAppInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters/{cluster_id}/app-instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listAppInstancesRequest !== null && listAppInstancesRequest !== undefined) {
                if (listAppInstancesRequest instanceof ListAppInstancesRequest) {
                    clusterId = listAppInstancesRequest.clusterId;
                } else {
                    clusterId = listAppInstancesRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAppInstances.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为更新应用实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAppInstance(updateAppInstanceRequest?: UpdateAppInstanceRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/clusters/{cluster_id}/app-instances/{app_instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let appInstanceId;

            if (updateAppInstanceRequest !== null && updateAppInstanceRequest !== undefined) {
                if (updateAppInstanceRequest instanceof UpdateAppInstanceRequest) {
                    clusterId = updateAppInstanceRequest.clusterId;
                    appInstanceId = updateAppInstanceRequest.appInstanceId;
                    body = updateAppInstanceRequest.body
                } else {
                    clusterId = updateAppInstanceRequest['cluster_id'];
                    appInstanceId = updateAppInstanceRequest['app_instance_id'];
                    body = updateAppInstanceRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAppInstance.');
            }
            if (appInstanceId === null || appInstanceId === undefined) {
            throw new RequiredError('appInstanceId','Required parameter appInstanceId was null or undefined when calling updateAppInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'app_instance_id': appInstanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为创建应用版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAppVersion(createAppVersionRequest?: CreateAppVersionRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/apps/{app_id}/versions",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let appId;
            
            let version;
            let chart;
            
            let images;
            

            if (createAppVersionRequest !== null && createAppVersionRequest !== undefined) {
                if (createAppVersionRequest instanceof CreateAppVersionRequest) {
                    appId = createAppVersionRequest.appId;
                    version = createAppVersionRequest.version;
                    chart = createAppVersionRequest.body?.chart;
                    images = createAppVersionRequest.body?.images;
                } else {
                    appId = createAppVersionRequest['app_id'];
                    version = createAppVersionRequest['version'];
                    chart = createAppVersionRequest['body']['chart'];
                    images = createAppVersionRequest['body']['images'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling createAppVersion.');
            }
            if (version === null || version === undefined) {
                throw new RequiredError('version','Required parameter version was null or undefined when calling createAppVersion.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (chart === null || chart === undefined) {
            throw new RequiredError('chart','Required parameter chart was null or undefined when calling createAppVersion.');
            }
            if (images !== undefined) { 
                localVarFormParams.append('images', images as any);
            }
            if (chart !== undefined) { 
                localVarFormParams.append('chart', chart as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除应用版本。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppVersion(deleteAppVersionRequest?: DeleteAppVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/apps/{app_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let version;

            if (deleteAppVersionRequest !== null && deleteAppVersionRequest !== undefined) {
                if (deleteAppVersionRequest instanceof DeleteAppVersionRequest) {
                    appId = deleteAppVersionRequest.appId;
                    version = deleteAppVersionRequest.version;
                } else {
                    appId = deleteAppVersionRequest['app_id'];
                    version = deleteAppVersionRequest['version'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteAppVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling deleteAppVersion.');
            }

            options.pathParams = { 'app_id': appId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口下载应用版本Chart包。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadAppVersion(downloadAppVersionRequest?: DownloadAppVersionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/apps/{app_id}/versions/{version}/archive",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let version;

            if (downloadAppVersionRequest !== null && downloadAppVersionRequest !== undefined) {
                if (downloadAppVersionRequest instanceof DownloadAppVersionRequest) {
                    appId = downloadAppVersionRequest.appId;
                    version = downloadAppVersionRequest.version;
                } else {
                    appId = downloadAppVersionRequest['app_id'];
                    version = downloadAppVersionRequest['version'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling downloadAppVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling downloadAppVersion.');
            }

            options.pathParams = { 'app_id': appId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询应用版本包含的镜像列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppImage(listAppImageRequest?: ListAppImageRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/apps/{app_id}/versions/{version}/images",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let version;
            
            let limit;
            
            let offset;

            if (listAppImageRequest !== null && listAppImageRequest !== undefined) {
                if (listAppImageRequest instanceof ListAppImageRequest) {
                    appId = listAppImageRequest.appId;
                    version = listAppImageRequest.version;
                    limit = listAppImageRequest.limit;
                    offset = listAppImageRequest.offset;
                } else {
                    appId = listAppImageRequest['app_id'];
                    version = listAppImageRequest['version'];
                    limit = listAppImageRequest['limit'];
                    offset = listAppImageRequest['offset'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling listAppImage.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling listAppImage.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询应用版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppVersions(listAppVersionsRequest?: ListAppVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/apps/{app_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let version;
            
            let limit;
            
            let offset;

            if (listAppVersionsRequest !== null && listAppVersionsRequest !== undefined) {
                if (listAppVersionsRequest instanceof ListAppVersionsRequest) {
                    appId = listAppVersionsRequest.appId;
                    version = listAppVersionsRequest.version;
                    limit = listAppVersionsRequest.limit;
                    offset = listAppVersionsRequest.offset;
                } else {
                    appId = listAppVersionsRequest['app_id'];
                    version = listAppVersionsRequest['version'];
                    limit = listAppVersionsRequest['limit'];
                    offset = listAppVersionsRequest['offset'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling listAppVersions.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询应用版本详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppVersion(showAppVersionRequest?: ShowAppVersionRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/apps/{app_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let version;

            if (showAppVersionRequest !== null && showAppVersionRequest !== undefined) {
                if (showAppVersionRequest instanceof ShowAppVersionRequest) {
                    appId = showAppVersionRequest.appId;
                    version = showAppVersionRequest.version;
                } else {
                    appId = showAppVersionRequest['app_id'];
                    version = showAppVersionRequest['version'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showAppVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showAppVersion.');
            }

            options.pathParams = { 'app_id': appId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为创建边缘集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    body = createClusterRequest.body
                } else {
                    body = createClusterRequest['body'];
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
         * 应用服务器可调用此接口生成边缘集群安装命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterInstallCmd(createClusterInstallCmdRequest?: CreateClusterInstallCmdRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clusters/{cluster_id}/install-cmd",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let arch;
            
            let os;

            if (createClusterInstallCmdRequest !== null && createClusterInstallCmdRequest !== undefined) {
                if (createClusterInstallCmdRequest instanceof CreateClusterInstallCmdRequest) {
                    clusterId = createClusterInstallCmdRequest.clusterId;
                    arch = createClusterInstallCmdRequest.arch;
                    os = createClusterInstallCmdRequest.os;
                } else {
                    clusterId = createClusterInstallCmdRequest['cluster_id'];
                    arch = createClusterInstallCmdRequest['arch'];
                    os = createClusterInstallCmdRequest['os'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterInstallCmd.');
            }
            if (arch === null || arch === undefined) {
                throw new RequiredError('arch','Required parameter arch was null or undefined when calling createClusterInstallCmd.');
            }
            if (arch !== null && arch !== undefined) {
                localVarQueryParameter['arch'] = arch;
            }
            if (os !== null && os !== undefined) {
                localVarQueryParameter['os'] = os;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除边缘集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询边缘集群列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters(listClustersRequest?: ListClustersRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterName;
            
            let state;
            
            let clusterIds;
            
            let limit;
            
            let offset;

            if (listClustersRequest !== null && listClustersRequest !== undefined) {
                if (listClustersRequest instanceof ListClustersRequest) {
                    clusterName = listClustersRequest.clusterName;
                    state = listClustersRequest.state;
                    clusterIds = listClustersRequest.clusterIds;
                    limit = listClustersRequest.limit;
                    offset = listClustersRequest.offset;
                } else {
                    clusterName = listClustersRequest['cluster_name'];
                    state = listClustersRequest['state'];
                    clusterIds = listClustersRequest['cluster_ids'];
                    limit = listClustersRequest['limit'];
                    offset = listClustersRequest['offset'];
                }
            }

        
            if (clusterName !== null && clusterName !== undefined) {
                localVarQueryParameter['cluster_name'] = clusterName;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (clusterIds !== null && clusterIds !== undefined) {
                localVarQueryParameter['cluster_ids'] = clusterIds;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询边缘集群详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCluster(showClusterRequest?: ShowClusterRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterRequest !== null && showClusterRequest !== undefined) {
                if (showClusterRequest instanceof ShowClusterRequest) {
                    clusterId = showClusterRequest.clusterId;
                } else {
                    clusterId = showClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源列表-企业版
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterResources(showClusterResourcesRequest?: ShowClusterResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let resourceGroup;
            
            let offset;
            
            let limit;

            if (showClusterResourcesRequest !== null && showClusterResourcesRequest !== undefined) {
                if (showClusterResourcesRequest instanceof ShowClusterResourcesRequest) {
                    resourceGroup = showClusterResourcesRequest.resourceGroup;
                    offset = showClusterResourcesRequest.offset;
                    limit = showClusterResourcesRequest.limit;
                } else {
                    resourceGroup = showClusterResourcesRequest['resource_group'];
                    offset = showClusterResourcesRequest['offset'];
                    limit = showClusterResourcesRequest['limit'];
                }
            }

        
            if (resourceGroup !== null && resourceGroup !== undefined) {
                localVarQueryParameter['resource_group'] = resourceGroup;
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
         * 更改资源绑定信息-企业版
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceBinding(updateResourceBindingRequest?: UpdateResourceBindingRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/resources/{resource_id}/cluster",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (updateResourceBindingRequest !== null && updateResourceBindingRequest !== undefined) {
                if (updateResourceBindingRequest instanceof UpdateResourceBindingRequest) {
                    resourceId = updateResourceBindingRequest.resourceId;
                    body = updateResourceBindingRequest.body
                } else {
                    resourceId = updateResourceBindingRequest['resource_id'];
                    body = updateResourceBindingRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling updateResourceBinding.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 转发k8s API。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        invokeKubeApi(invokeKubeApiRequest?: InvokeKubeApiRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clusters/{cluster_id}/api-proxy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let xForwardTarget;
            
            let xForwardHeaders;

            if (invokeKubeApiRequest !== null && invokeKubeApiRequest !== undefined) {
                if (invokeKubeApiRequest instanceof InvokeKubeApiRequest) {
                    clusterId = invokeKubeApiRequest.clusterId;
                    xForwardTarget = invokeKubeApiRequest.xForwardTarget;
                    xForwardHeaders = invokeKubeApiRequest.xForwardHeaders;
                } else {
                    clusterId = invokeKubeApiRequest['cluster_id'];
                    xForwardTarget = invokeKubeApiRequest['X-Forward-Target'];
                    xForwardHeaders = invokeKubeApiRequest['X-Forward-Headers'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling invokeKubeApi.');
            }
            if (xForwardTarget !== undefined && xForwardTarget !== null) {
                localVarHeaderParameter['X-Forward-Target'] = String(xForwardTarget);
            }
            if (xForwardHeaders !== undefined && xForwardHeaders !== null) {
                localVarHeaderParameter['X-Forward-Headers'] = String(xForwardHeaders);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询命名空间列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterNamespaces(listClusterNamespacesRequest?: ListClusterNamespacesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters/{cluster_id}/namespaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterNamespacesRequest !== null && listClusterNamespacesRequest !== undefined) {
                if (listClusterNamespacesRequest instanceof ListClusterNamespacesRequest) {
                    clusterId = listClusterNamespacesRequest.clusterId;
                } else {
                    clusterId = listClusterNamespacesRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterNamespaces.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 生成安装集群节点的安装命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterNodesInstallCmd(createClusterNodesInstallCmdRequest?: CreateClusterNodesInstallCmdRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clusters/{cluster_id}/nodes/install-cmd",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createClusterNodesInstallCmdRequest !== null && createClusterNodesInstallCmdRequest !== undefined) {
                if (createClusterNodesInstallCmdRequest instanceof CreateClusterNodesInstallCmdRequest) {
                    clusterId = createClusterNodesInstallCmdRequest.clusterId;
                    body = createClusterNodesInstallCmdRequest.body
                } else {
                    clusterId = createClusterNodesInstallCmdRequest['cluster_id'];
                    body = createClusterNodesInstallCmdRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterNodesInstallCmd.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询集群的节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterNodes(listClusterNodesRequest?: ListClusterNodesRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterNodesRequest !== null && listClusterNodesRequest !== undefined) {
                if (listClusterNodesRequest instanceof ListClusterNodesRequest) {
                    clusterId = listClusterNodesRequest.clusterId;
                } else {
                    clusterId = listClusterNodesRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterNodes.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询集群的节点详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterNode(showClusterNodeRequest?: ShowClusterNodeRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/clusters/{cluster_id}/nodes/{node_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let nodeName;

            if (showClusterNodeRequest !== null && showClusterNodeRequest !== undefined) {
                if (showClusterNodeRequest instanceof ShowClusterNodeRequest) {
                    clusterId = showClusterNodeRequest.clusterId;
                    nodeName = showClusterNodeRequest.nodeName;
                } else {
                    clusterId = showClusterNodeRequest['cluster_id'];
                    nodeName = showClusterNodeRequest['node_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterNode.');
            }
            if (nodeName === null || nodeName === undefined) {
            throw new RequiredError('nodeName','Required parameter nodeName was null or undefined when calling showClusterNode.');
            }

            options.pathParams = { 'cluster_id': clusterId,'node_name': nodeName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IoTEdgeClient {
    return new IoTEdgeClient(client);
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