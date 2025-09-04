import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AccessRomaBriefInfo } from './model/AccessRomaBriefInfo';
import { AccessRomaInfo } from './model/AccessRomaInfo';
import { ActiveControlRspDTO } from './model/ActiveControlRspDTO';
import { ActiveStandbyConfigDTO } from './model/ActiveStandbyConfigDTO';
import { AddAppConfigsTemplatesRequest } from './model/AddAppConfigsTemplatesRequest';
import { AddAppConfigsTemplatesResponse } from './model/AddAppConfigsTemplatesResponse';
import { AddDeviceRequest } from './model/AddDeviceRequest';
import { AddDeviceRequestBody } from './model/AddDeviceRequestBody';
import { AddDeviceResponse } from './model/AddDeviceResponse';
import { AddGeneralAppConfigsTemplateRequest } from './model/AddGeneralAppConfigsTemplateRequest';
import { AddGeneralAppConfigsTemplateResponse } from './model/AddGeneralAppConfigsTemplateResponse';
import { AddGeneralOtTemplateRequest } from './model/AddGeneralOtTemplateRequest';
import { AddGeneralOtTemplateResponse } from './model/AddGeneralOtTemplateResponse';
import { AddOtTemplatesRequest } from './model/AddOtTemplatesRequest';
import { AddOtTemplatesResponse } from './model/AddOtTemplatesResponse';
import { AuthAkSkInfo } from './model/AuthAkSkInfo';
import { AuthorizeNa2NodesRequestDTO } from './model/AuthorizeNa2NodesRequestDTO';
import { BasePathDTO } from './model/BasePathDTO';
import { BatchAssociateNaToNodesRequest } from './model/BatchAssociateNaToNodesRequest';
import { BatchAssociateNaToNodesResponse } from './model/BatchAssociateNaToNodesResponse';
import { BatchConfirmConfigsNewRequest } from './model/BatchConfirmConfigsNewRequest';
import { BatchConfirmConfigsNewResponse } from './model/BatchConfirmConfigsNewResponse';
import { BatchImportConfigRequestBody } from './model/BatchImportConfigRequestBody';
import { BatchImportConfigsRequest } from './model/BatchImportConfigsRequest';
import { BatchImportConfigsRequestBody } from './model/BatchImportConfigsRequestBody';
import { BatchImportConfigsResponse } from './model/BatchImportConfigsResponse';
import { BatchListAppConfigsTemplatesRequest } from './model/BatchListAppConfigsTemplatesRequest';
import { BatchListAppConfigsTemplatesResponse } from './model/BatchListAppConfigsTemplatesResponse';
import { BatchListDcDevicesRequest } from './model/BatchListDcDevicesRequest';
import { BatchListDcDevicesResponse } from './model/BatchListDcDevicesResponse';
import { BatchListDcDsRequest } from './model/BatchListDcDsRequest';
import { BatchListDcDsResponse } from './model/BatchListDcDsResponse';
import { BatchListDcPointsRequest } from './model/BatchListDcPointsRequest';
import { BatchListDcPointsResponse } from './model/BatchListDcPointsResponse';
import { BatchListEdgeAppVersionsRequest } from './model/BatchListEdgeAppVersionsRequest';
import { BatchListEdgeAppVersionsResponse } from './model/BatchListEdgeAppVersionsResponse';
import { BatchListEdgeAppsRequest } from './model/BatchListEdgeAppsRequest';
import { BatchListEdgeAppsResponse } from './model/BatchListEdgeAppsResponse';
import { BatchListModulesRequest } from './model/BatchListModulesRequest';
import { BatchListModulesResponse } from './model/BatchListModulesResponse';
import { BatchListOtTemplatesRequest } from './model/BatchListOtTemplatesRequest';
import { BatchListOtTemplatesResponse } from './model/BatchListOtTemplatesResponse';
import { CertificateLocalPathDTO } from './model/CertificateLocalPathDTO';
import { ConfirmIaConfigRequestBody } from './model/ConfirmIaConfigRequestBody';
import { ConfirmIaConfigsRequestBody } from './model/ConfirmIaConfigsRequestBody';
import { ContainerConfigsDTO } from './model/ContainerConfigsDTO';
import { ContainerConfigsReqDTO } from './model/ContainerConfigsReqDTO';
import { ContainerConfigsResDTO } from './model/ContainerConfigsResDTO';
import { ContainerPortDTO } from './model/ContainerPortDTO';
import { ContainerSettingsDTO } from './model/ContainerSettingsDTO';
import { ContainerSettingsReqDTO } from './model/ContainerSettingsReqDTO';
import { CreateAppConfigsTemplatesReqDTO } from './model/CreateAppConfigsTemplatesReqDTO';
import { CreateDcDsReqDTO } from './model/CreateDcDsReqDTO';
import { CreateDcPointReqDTO } from './model/CreateDcPointReqDTO';
import { CreateDcPointRequest } from './model/CreateDcPointRequest';
import { CreateDcPointRespDTO } from './model/CreateDcPointRespDTO';
import { CreateDcPointResponse } from './model/CreateDcPointResponse';
import { CreateDsRequest } from './model/CreateDsRequest';
import { CreateDsResponse } from './model/CreateDsResponse';
import { CreateEdgeAppRequest } from './model/CreateEdgeAppRequest';
import { CreateEdgeAppResponse } from './model/CreateEdgeAppResponse';
import { CreateEdgeApplicationRequestDTO } from './model/CreateEdgeApplicationRequestDTO';
import { CreateEdgeApplicationVersionDTO } from './model/CreateEdgeApplicationVersionDTO';
import { CreateEdgeApplicationVersionRequest } from './model/CreateEdgeApplicationVersionRequest';
import { CreateEdgeApplicationVersionResponse } from './model/CreateEdgeApplicationVersionResponse';
import { CreateEdgeModuleReqDTO } from './model/CreateEdgeModuleReqDTO';
import { CreateEdgeNodeRequest } from './model/CreateEdgeNodeRequest';
import { CreateEdgeNodeResponse } from './model/CreateEdgeNodeResponse';
import { CreateExternalEntityReqDTO } from './model/CreateExternalEntityReqDTO';
import { CreateExternalEntityRequest } from './model/CreateExternalEntityRequest';
import { CreateExternalEntityResponse } from './model/CreateExternalEntityResponse';
import { CreateInstallCmdRequest } from './model/CreateInstallCmdRequest';
import { CreateInstallCmdRequestDTO } from './model/CreateInstallCmdRequestDTO';
import { CreateInstallCmdResponse } from './model/CreateInstallCmdResponse';
import { CreateModuleRequest } from './model/CreateModuleRequest';
import { CreateModuleResponse } from './model/CreateModuleResponse';
import { CreateOtTemplatesReqDTO } from './model/CreateOtTemplatesReqDTO';
import { CreateRouterReqDTO } from './model/CreateRouterReqDTO';
import { CreateScheduleReqDTO } from './model/CreateScheduleReqDTO';
import { CreateScheduleRequest } from './model/CreateScheduleRequest';
import { CreateScheduleResponse } from './model/CreateScheduleResponse';
import { DailyDto } from './model/DailyDto';
import { DeleteAppConfigsTemplateRequest } from './model/DeleteAppConfigsTemplateRequest';
import { DeleteAppConfigsTemplateResponse } from './model/DeleteAppConfigsTemplateResponse';
import { DeleteDcDsRequest } from './model/DeleteDcDsRequest';
import { DeleteDcDsResponse } from './model/DeleteDcDsResponse';
import { DeleteDcPointRequest } from './model/DeleteDcPointRequest';
import { DeleteDcPointResponse } from './model/DeleteDcPointResponse';
import { DeleteDcPointsFailedDetail } from './model/DeleteDcPointsFailedDetail';
import { DeleteDcPointsReqDTO } from './model/DeleteDcPointsReqDTO';
import { DeleteDcPointsRequest } from './model/DeleteDcPointsRequest';
import { DeleteDcPointsResponse } from './model/DeleteDcPointsResponse';
import { DeleteDeviceRequest } from './model/DeleteDeviceRequest';
import { DeleteDeviceResponse } from './model/DeleteDeviceResponse';
import { DeleteEdgeAppRequest } from './model/DeleteEdgeAppRequest';
import { DeleteEdgeAppResponse } from './model/DeleteEdgeAppResponse';
import { DeleteEdgeApplicationVersionRequest } from './model/DeleteEdgeApplicationVersionRequest';
import { DeleteEdgeApplicationVersionResponse } from './model/DeleteEdgeApplicationVersionResponse';
import { DeleteEdgeNodeRequest } from './model/DeleteEdgeNodeRequest';
import { DeleteEdgeNodeResponse } from './model/DeleteEdgeNodeResponse';
import { DeleteExternalEntityRequest } from './model/DeleteExternalEntityRequest';
import { DeleteExternalEntityResponse } from './model/DeleteExternalEntityResponse';
import { DeleteIaConfigRequest } from './model/DeleteIaConfigRequest';
import { DeleteIaConfigResponse } from './model/DeleteIaConfigResponse';
import { DeleteModuleRequest } from './model/DeleteModuleRequest';
import { DeleteModuleResponse } from './model/DeleteModuleResponse';
import { DeleteNaRequest } from './model/DeleteNaRequest';
import { DeleteNaResponse } from './model/DeleteNaResponse';
import { DeleteOtTemplateRequest } from './model/DeleteOtTemplateRequest';
import { DeleteOtTemplateResponse } from './model/DeleteOtTemplateResponse';
import { DeleteScheduleRequest } from './model/DeleteScheduleRequest';
import { DeleteScheduleResponse } from './model/DeleteScheduleResponse';
import { DeviceAuthInfoDTO } from './model/DeviceAuthInfoDTO';
import { DeviceAuthInfoDisplayDTO } from './model/DeviceAuthInfoDisplayDTO';
import { DeviceControlDefaultValuesReqDTO } from './model/DeviceControlDefaultValuesReqDTO';
import { DeviceControlReleaseReqDTO } from './model/DeviceControlReleaseReqDTO';
import { DeviceControlSetReqDTO } from './model/DeviceControlSetReqDTO';
import { DeviceDataRecord } from './model/DeviceDataRecord';
import { DeviceDefaultValues } from './model/DeviceDefaultValues';
import { EdgeAppInstanceDTO } from './model/EdgeAppInstanceDTO';
import { EdgeDeviceAuthInfo } from './model/EdgeDeviceAuthInfo';
import { EdgeModuleDTO } from './model/EdgeModuleDTO';
import { EdgeNodeCreation } from './model/EdgeNodeCreation';
import { EdgeNodeDTO } from './model/EdgeNodeDTO';
import { ExceptionalDates } from './model/ExceptionalDates';
import { ExecuteDeviceControlsReleaseRequest } from './model/ExecuteDeviceControlsReleaseRequest';
import { ExecuteDeviceControlsReleaseResponse } from './model/ExecuteDeviceControlsReleaseResponse';
import { ExecuteDeviceControlsSetRequest } from './model/ExecuteDeviceControlsSetRequest';
import { ExecuteDeviceControlsSetResponse } from './model/ExecuteDeviceControlsSetResponse';
import { ExtDevice } from './model/ExtDevice';
import { ExternalEntityRespDTO } from './model/ExternalEntityRespDTO';
import { HaConfigDTO } from './model/HaConfigDTO';
import { HostInfoDTO } from './model/HostInfoDTO';
import { HttpGetDTO } from './model/HttpGetDTO';
import { ImportPointsRequest } from './model/ImportPointsRequest';
import { ImportPointsRequestBody } from './model/ImportPointsRequestBody';
import { ImportPointsResponse } from './model/ImportPointsResponse';
import { InvokeModuleMsgRequest } from './model/InvokeModuleMsgRequest';
import { InvokeModuleMsgResponse } from './model/InvokeModuleMsgResponse';
import { ListDevicesRequest } from './model/ListDevicesRequest';
import { ListDevicesResponse } from './model/ListDevicesResponse';
import { ListEdgeNodesRequest } from './model/ListEdgeNodesRequest';
import { ListEdgeNodesResponse } from './model/ListEdgeNodesResponse';
import { ListExternalEntityRequest } from './model/ListExternalEntityRequest';
import { ListExternalEntityResponse } from './model/ListExternalEntityResponse';
import { ListIaConfigsRequest } from './model/ListIaConfigsRequest';
import { ListIaConfigsResponse } from './model/ListIaConfigsResponse';
import { ListNaAuthorizedNodesRequest } from './model/ListNaAuthorizedNodesRequest';
import { ListNaAuthorizedNodesResponse } from './model/ListNaAuthorizedNodesResponse';
import { ListNasRequest } from './model/ListNasRequest';
import { ListNasResponse } from './model/ListNasResponse';
import { ListPropertyActiveControlsRequest } from './model/ListPropertyActiveControlsRequest';
import { ListPropertyActiveControlsResponse } from './model/ListPropertyActiveControlsResponse';
import { ListRoutesRequest } from './model/ListRoutesRequest';
import { ListRoutesResponse } from './model/ListRoutesResponse';
import { LogConfigDTO } from './model/LogConfigDTO';
import { ModuleContainerSettingsResDTO } from './model/ModuleContainerSettingsResDTO';
import { MqttConnectionInfo } from './model/MqttConnectionInfo';
import { NPUDetailsDTO } from './model/NPUDetailsDTO';
import { Nic } from './model/Nic';
import { NpuUsedInfoDTO } from './model/NpuUsedInfoDTO';
import { OfflineCacheConfigsDTO } from './model/OfflineCacheConfigsDTO';
import { PageInfoDTO } from './model/PageInfoDTO';
import { PointCleanDTO } from './model/PointCleanDTO';
import { PointScalingDTO } from './model/PointScalingDTO';
import { PointValidityingDTO } from './model/PointValidityingDTO';
import { ProbeDTO } from './model/ProbeDTO';
import { ProcessingConfigDTO } from './model/ProcessingConfigDTO';
import { QueryAppConfigsTemplateBriefRespDTO } from './model/QueryAppConfigsTemplateBriefRespDTO';
import { QueryApplicationBriefResponseDTO } from './model/QueryApplicationBriefResponseDTO';
import { QueryAuthorizedNodeDTO } from './model/QueryAuthorizedNodeDTO';
import { QueryDcDeviceRespDTO } from './model/QueryDcDeviceRespDTO';
import { QueryDcDsBriefRespDTO } from './model/QueryDcDsBriefRespDTO';
import { QueryDeviceSimplifyDto } from './model/QueryDeviceSimplifyDto';
import { QueryEdgeAppVersionBriefResponseDTO } from './model/QueryEdgeAppVersionBriefResponseDTO';
import { QueryIaConfigResponseDTO } from './model/QueryIaConfigResponseDTO';
import { QueryNaBriefResponseDTO } from './model/QueryNaBriefResponseDTO';
import { QueryOtTemplateBriefRespDTO } from './model/QueryOtTemplateBriefRespDTO';
import { ResourceConfigDTO } from './model/ResourceConfigDTO';
import { ResourceDTO } from './model/ResourceDTO';
import { RouterDetailRespDTO } from './model/RouterDetailRespDTO';
import { RouterRespDTO } from './model/RouterRespDTO';
import { ScheduleTask } from './model/ScheduleTask';
import { SetDeviceControlDefaultValuesRequest } from './model/SetDeviceControlDefaultValuesRequest';
import { SetDeviceControlDefaultValuesResponse } from './model/SetDeviceControlDefaultValuesResponse';
import { ShowAppConfigsTemplateRequest } from './model/ShowAppConfigsTemplateRequest';
import { ShowAppConfigsTemplateResponse } from './model/ShowAppConfigsTemplateResponse';
import { ShowDcDsRequest } from './model/ShowDcDsRequest';
import { ShowDcDsResponse } from './model/ShowDcDsResponse';
import { ShowDcPointRequest } from './model/ShowDcPointRequest';
import { ShowDcPointResponse } from './model/ShowDcPointResponse';
import { ShowEdgeAppRequest } from './model/ShowEdgeAppRequest';
import { ShowEdgeAppResponse } from './model/ShowEdgeAppResponse';
import { ShowEdgeApplicationVersionRequest } from './model/ShowEdgeApplicationVersionRequest';
import { ShowEdgeApplicationVersionResponse } from './model/ShowEdgeApplicationVersionResponse';
import { ShowEdgeNodeHostsInfoRequest } from './model/ShowEdgeNodeHostsInfoRequest';
import { ShowEdgeNodeHostsInfoResponse } from './model/ShowEdgeNodeHostsInfoResponse';
import { ShowEdgeNodeRequest } from './model/ShowEdgeNodeRequest';
import { ShowEdgeNodeResponse } from './model/ShowEdgeNodeResponse';
import { ShowIaConfigRequest } from './model/ShowIaConfigRequest';
import { ShowIaConfigResponse } from './model/ShowIaConfigResponse';
import { ShowModuleRequest } from './model/ShowModuleRequest';
import { ShowModuleResponse } from './model/ShowModuleResponse';
import { ShowModuleShadowRequest } from './model/ShowModuleShadowRequest';
import { ShowModuleShadowResponse } from './model/ShowModuleShadowResponse';
import { ShowNaRequest } from './model/ShowNaRequest';
import { ShowNaResponse } from './model/ShowNaResponse';
import { ShowOtTemplateRequest } from './model/ShowOtTemplateRequest';
import { ShowOtTemplateResponse } from './model/ShowOtTemplateResponse';
import { ShowPointTemplateRequest } from './model/ShowPointTemplateRequest';
import { ShowPointTemplateResponse } from './model/ShowPointTemplateResponse';
import { ShowPointsRequest } from './model/ShowPointsRequest';
import { ShowPointsResponse } from './model/ShowPointsResponse';
import { ShowProductConfigRequest } from './model/ShowProductConfigRequest';
import { ShowProductConfigResponse } from './model/ShowProductConfigResponse';
import { SynchronizeDcConfigsRequest } from './model/SynchronizeDcConfigsRequest';
import { SynchronizeDcConfigsResponse } from './model/SynchronizeDcConfigsResponse';
import { TcpSocketDTO } from './model/TcpSocketDTO';
import { TimeSpans } from './model/TimeSpans';
import { UpdateDcDsReqDTO } from './model/UpdateDcDsReqDTO';
import { UpdateDcDsRequest } from './model/UpdateDcDsRequest';
import { UpdateDcDsResponse } from './model/UpdateDcDsResponse';
import { UpdateDcPointReqDTO } from './model/UpdateDcPointReqDTO';
import { UpdateDcPointRequest } from './model/UpdateDcPointRequest';
import { UpdateDcPointResponse } from './model/UpdateDcPointResponse';
import { UpdateDesireds } from './model/UpdateDesireds';
import { UpdateDeviceRequest } from './model/UpdateDeviceRequest';
import { UpdateDeviceResponse } from './model/UpdateDeviceResponse';
import { UpdateEdgeAppVersionDTO } from './model/UpdateEdgeAppVersionDTO';
import { UpdateEdgeAppVersionStateDTO } from './model/UpdateEdgeAppVersionStateDTO';
import { UpdateEdgeApplicationVersionRequest } from './model/UpdateEdgeApplicationVersionRequest';
import { UpdateEdgeApplicationVersionResponse } from './model/UpdateEdgeApplicationVersionResponse';
import { UpdateEdgeApplicationVersionStateRequest } from './model/UpdateEdgeApplicationVersionStateRequest';
import { UpdateEdgeApplicationVersionStateResponse } from './model/UpdateEdgeApplicationVersionStateResponse';
import { UpdateEdgeModuleReqDTO } from './model/UpdateEdgeModuleReqDTO';
import { UpdateEdgeModuleStateReqDTO } from './model/UpdateEdgeModuleStateReqDTO';
import { UpdateEdgeNodeRequest } from './model/UpdateEdgeNodeRequest';
import { UpdateEdgeNodeResponse } from './model/UpdateEdgeNodeResponse';
import { UpdateExternalEntityReqDTO } from './model/UpdateExternalEntityReqDTO';
import { UpdateExternalEntityRequest } from './model/UpdateExternalEntityRequest';
import { UpdateExternalEntityResponse } from './model/UpdateExternalEntityResponse';
import { UpdateIaConfigRequest } from './model/UpdateIaConfigRequest';
import { UpdateIaConfigRequestDTO } from './model/UpdateIaConfigRequestDTO';
import { UpdateIaConfigResponse } from './model/UpdateIaConfigResponse';
import { UpdateModuleRequest } from './model/UpdateModuleRequest';
import { UpdateModuleResponse } from './model/UpdateModuleResponse';
import { UpdateModuleShadowRequest } from './model/UpdateModuleShadowRequest';
import { UpdateModuleShadowResponse } from './model/UpdateModuleShadowResponse';
import { UpdateModuleShadowsRequestBody } from './model/UpdateModuleShadowsRequestBody';
import { UpdateModuleStateRequest } from './model/UpdateModuleStateRequest';
import { UpdateModuleStateResponse } from './model/UpdateModuleStateResponse';
import { UpdateNaRequest } from './model/UpdateNaRequest';
import { UpdateNaRequestDTO } from './model/UpdateNaRequestDTO';
import { UpdateNaResponse } from './model/UpdateNaResponse';
import { UpdateNodeReqDTO } from './model/UpdateNodeReqDTO';
import { UpdateOfflineCacheConfigsDTO } from './model/UpdateOfflineCacheConfigsDTO';
import { UpdateRoutesRequest } from './model/UpdateRoutesRequest';
import { UpdateRoutesResponse } from './model/UpdateRoutesResponse';
import { UpdateScheduleReqDTO } from './model/UpdateScheduleReqDTO';
import { UpdateScheduleRequest } from './model/UpdateScheduleRequest';
import { UpdateScheduleResponse } from './model/UpdateScheduleResponse';
import { VolumeDTO } from './model/VolumeDTO';

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
     * 创建边缘节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建边缘节点
     * @param {EdgeNodeCreation} createEdgeNodeRequestBody request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEdgeNode(createEdgeNodeRequest?: CreateEdgeNodeRequest): Promise<CreateEdgeNodeResponse> {
        const options = ParamCreater().createEdgeNode(createEdgeNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 生成边缘节点安装命令，命令有效时间30分钟，超过后需要重新生成
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成边缘节点安装命令
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} arch 节点架构
     * @param {CreateInstallCmdRequestDTO} [createInstallCmdRequestBody] 指定边缘节点的更新主备配置的请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createInstallCmd(createInstallCmdRequest?: CreateInstallCmdRequest): Promise<CreateInstallCmdResponse> {
        const options = ParamCreater().createInstallCmd(createInstallCmdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定边缘节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除边缘节点
     * @param {string} edgeNodeId 边缘节点ID
     * @param {boolean} [deleteExternalNode] 是否同时删除外部节点（仅对高级版有效），默认为false不删除IEF侧的边缘节点
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEdgeNode(deleteEdgeNodeRequest?: DeleteEdgeNodeRequest): Promise<DeleteEdgeNodeResponse> {
        const options = ParamCreater().deleteEdgeNode(deleteEdgeNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询边缘节点列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘节点列表
     * @param {string} [name] 节点名称
     * @param {string} [state] 节点状态,OFFLINE|ONLINE|UNINSTALLED|INSTALLED|DELETING|UPGRADING
     * @param {string} [type] 节点所属资源类型，advanced|standard
     * @param {string} [instanceId] 实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [spaceId] 资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的设备列表，不携带该参数则会查询该用户下所有设备列表。
     * @param {Array<string>} [nodeIds] 节点id列表,查询ID在给的节点ID列表内的节点信息
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEdgeNodes(listEdgeNodesRequest?: ListEdgeNodesRequest): Promise<ListEdgeNodesResponse> {
        const options = ParamCreater().listEdgeNodes(listEdgeNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询边缘节点详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘节点详情
     * @param {string} edgeNodeId 边缘节点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEdgeNode(showEdgeNodeRequest?: ShowEdgeNodeRequest): Promise<ShowEdgeNodeResponse> {
        const options = ParamCreater().showEdgeNode(showEdgeNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询边缘节点下的主机详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘节点下的主机详情
     * @param {string} edgeNodeId 边缘节点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEdgeNodeHostsInfo(showEdgeNodeHostsInfoRequest?: ShowEdgeNodeHostsInfoRequest): Promise<ShowEdgeNodeHostsInfoResponse> {
        const options = ParamCreater().showEdgeNodeHostsInfo(showEdgeNodeHostsInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改边缘节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改边缘节点
     * @param {string} edgeNodeId 节点id
     * @param {UpdateNodeReqDTO} updateEdgeNodeRequestBody 修改边缘节点请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEdgeNode(updateEdgeNodeRequest?: UpdateEdgeNodeRequest): Promise<UpdateEdgeNodeResponse> {
        const options = ParamCreater().updateEdgeNode(updateEdgeNodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备控制释放
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设备控制释放
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} deviceId 设备ID
     * @param {DeviceControlReleaseReqDTO} deviceControlReleaseReqDTO 设备控制释放请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeDeviceControlsRelease(executeDeviceControlsReleaseRequest?: ExecuteDeviceControlsReleaseRequest): Promise<ExecuteDeviceControlsReleaseResponse> {
        const options = ParamCreater().executeDeviceControlsRelease(executeDeviceControlsReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备控制设置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设备控制设置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} deviceId 设备ID
     * @param {DeviceControlSetReqDTO} deviceControlSetReqDTO 设备控制设置请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeDeviceControlsSet(executeDeviceControlsSetRequest?: ExecuteDeviceControlsSetRequest): Promise<ExecuteDeviceControlsSetResponse> {
        const options = ParamCreater().executeDeviceControlsSet(executeDeviceControlsSetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取属性执行中的控制
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取属性执行中的控制
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} deviceId 设备ID
     * @param {string} property 设备属性。必选
     * @param {string} [serviceId] 设备服务id。可选，在属性平铺场景不需要填，如果不填则表示service_id为空字符串
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPropertyActiveControls(listPropertyActiveControlsRequest?: ListPropertyActiveControlsRequest): Promise<ListPropertyActiveControlsResponse> {
        const options = ParamCreater().listPropertyActiveControls(listPropertyActiveControlsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备控制默认值
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设备控制默认值
     * @param {string} edgeNodeId 边缘节点ID
     * @param {DeviceControlDefaultValuesReqDTO} deviceControlDefaultValueReqDTO 设备默认值请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setDeviceControlDefaultValues(setDeviceControlDefaultValuesRequest?: SetDeviceControlDefaultValuesRequest): Promise<SetDeviceControlDefaultValuesResponse> {
        const options = ParamCreater().setDeviceControlDefaultValues(setDeviceControlDefaultValuesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加设备
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加设备
     * @param {string} edgeNodeId 边缘节点ID
     * @param {AddDeviceRequestBody} addDeviceRequestBody 添加设备请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDevice(addDeviceRequest?: AddDeviceRequest): Promise<AddDeviceResponse> {
        const options = ParamCreater().addDevice(addDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除设备
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除设备
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} deviceId 设备ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDevice(deleteDeviceRequest?: DeleteDeviceRequest): Promise<DeleteDeviceResponse> {
        const options = ParamCreater().deleteDevice(deleteDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询设备列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备列表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} [gatewayId] 父设备ID,对应之前的gatewayId的概念，传该参数时代表查询网关下的子设备，不传代表查询网关直连设备
     * @param {string} [deviceName] 设备名称
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDevices(listDevicesRequest?: ListDevicesRequest): Promise<ListDevicesResponse> {
        const options = ParamCreater().listDevices(listDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取协议配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取协议配置
     * @param {string} protocolType 协议类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProductConfig(showProductConfigRequest?: ShowProductConfigRequest): Promise<ShowProductConfigResponse> {
        const options = ParamCreater().showProductConfig(showProductConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改设备
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改设备
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} deviceId 设备ID
     * @param {UpdateDesireds} updateDeviceRequestBody request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDevice(updateDeviceRequest?: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
        const options = ParamCreater().updateDevice(updateDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加应用配置模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加应用配置模板
     * @param {CreateAppConfigsTemplatesReqDTO} addAppConfigsTemplatesRequestBody 添加应用配置模板请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAppConfigsTemplates(addAppConfigsTemplatesRequest?: AddAppConfigsTemplatesRequest): Promise<AddAppConfigsTemplatesResponse> {
        const options = ParamCreater().addAppConfigsTemplates(addAppConfigsTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入标准应用配置模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入标准应用配置模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addGeneralAppConfigsTemplate(addGeneralAppConfigsTemplateRequest?: AddGeneralAppConfigsTemplateRequest): Promise<AddGeneralAppConfigsTemplateResponse> {
        const options = ParamCreater().addGeneralAppConfigsTemplate();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用配置模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用配置模板列表
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListAppConfigsTemplates(batchListAppConfigsTemplatesRequest?: BatchListAppConfigsTemplatesRequest): Promise<BatchListAppConfigsTemplatesResponse> {
        const options = ParamCreater().batchListAppConfigsTemplates(batchListAppConfigsTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用配置模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用配置模板
     * @param {string} tplId 模板id，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAppConfigsTemplate(deleteAppConfigsTemplateRequest?: DeleteAppConfigsTemplateRequest): Promise<DeleteAppConfigsTemplateResponse> {
        const options = ParamCreater().deleteAppConfigsTemplate(deleteAppConfigsTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用配置模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用配置模板详情
     * @param {string} tplId 模板id，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppConfigsTemplate(showAppConfigsTemplateRequest?: ShowAppConfigsTemplateRequest): Promise<ShowAppConfigsTemplateResponse> {
        const options = ParamCreater().showAppConfigsTemplate(showAppConfigsTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用列表
     * @param {string} [edgeAppId] 应用ID搜索关键字
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {'SYSTEM_REQUIRED' | 'SYSTEM_OPTIONAL' | 'USER'} [appType] 应用id搜索关键字
     * @param {'DATA_PROCESSING' | 'PROTOCOL_PARSING' | 'ON_PREMISE_INTEGRATION' | 'GATEWAY_MANAGER' | 'COMPOSITE_APPLICATION' | 'DATA_COLLECTION'} [functionType] 功能类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListEdgeApps(batchListEdgeAppsRequest?: BatchListEdgeAppsRequest): Promise<BatchListEdgeAppsResponse> {
        const options = ParamCreater().batchListEdgeApps(batchListEdgeAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用
     * @param {CreateEdgeApplicationRequestDTO} createEdgeAppRequestBody 创建应用请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEdgeApp(createEdgeAppRequest?: CreateEdgeAppRequest): Promise<CreateEdgeAppResponse> {
        const options = ParamCreater().createEdgeApp(createEdgeAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用
     * @param {string} edgeAppId 应用ID，应用唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEdgeApp(deleteEdgeAppRequest?: DeleteEdgeAppRequest): Promise<DeleteEdgeAppResponse> {
        const options = ParamCreater().deleteEdgeApp(deleteEdgeAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用
     * @param {string} edgeAppId 应用ID，应用唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEdgeApp(showEdgeAppRequest?: ShowEdgeAppRequest): Promise<ShowEdgeAppResponse> {
        const options = ParamCreater().showEdgeApp(showEdgeAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用版本列表
     * @param {string} edgeAppId 应用版本,应用内版本唯一。
     * @param {string} [version] 应用版本搜索关键字
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {'GPU' | 'NPU' | 'unEquipped'} [aiCardType] ai加速卡类型
     * @param {'x86_64' | 'arm32' | 'arm64'} [arch] 支持架构
     * @param {'DRAFT' | 'PUBLISHED' | 'OFF_SHELF'} [state] 应用版本状态
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListEdgeAppVersions(batchListEdgeAppVersionsRequest?: BatchListEdgeAppVersionsRequest): Promise<BatchListEdgeAppVersionsResponse> {
        const options = ParamCreater().batchListEdgeAppVersions(batchListEdgeAppVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建应用版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建应用版本
     * @param {string} edgeAppId 应用ID，应用唯一。
     * @param {CreateEdgeApplicationVersionDTO} createEdgeApplicationVersionRequestBody 创建应用版本的请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEdgeApplicationVersion(createEdgeApplicationVersionRequest?: CreateEdgeApplicationVersionRequest): Promise<CreateEdgeApplicationVersionResponse> {
        const options = ParamCreater().createEdgeApplicationVersion(createEdgeApplicationVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除应用版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除应用版本
     * @param {string} edgeAppId 应用版本,应用内版本唯一。
     * @param {string} version 应用版本ID，应用版本唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEdgeApplicationVersion(deleteEdgeApplicationVersionRequest?: DeleteEdgeApplicationVersionRequest): Promise<DeleteEdgeApplicationVersionResponse> {
        const options = ParamCreater().deleteEdgeApplicationVersion(deleteEdgeApplicationVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用版本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用版本详情
     * @param {string} edgeAppId 应用ID，应用唯一。
     * @param {string} version 应用版本,应用内版本唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEdgeApplicationVersion(showEdgeApplicationVersionRequest?: ShowEdgeApplicationVersionRequest): Promise<ShowEdgeApplicationVersionResponse> {
        const options = ParamCreater().showEdgeApplicationVersion(showEdgeApplicationVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改应用版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改应用版本
     * @param {string} edgeAppId 应用ID，应用唯一。
     * @param {string} version 应用版本,应用内版本唯一。
     * @param {UpdateEdgeAppVersionDTO} updateEdgeApplicationVersionRequestBody 创建应用版本请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEdgeApplicationVersion(updateEdgeApplicationVersionRequest?: UpdateEdgeApplicationVersionRequest): Promise<UpdateEdgeApplicationVersionResponse> {
        const options = ParamCreater().updateEdgeApplicationVersion(updateEdgeApplicationVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新应用版本状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新应用版本状态
     * @param {string} edgeAppId 应用ID，应用唯一标识。
     * @param {string} version 应用版本,应用内版本唯一。
     * @param {UpdateEdgeAppVersionStateDTO} updateEdgeApplicationVersionStateRequestBody 更新应用版本状态请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEdgeApplicationVersionState(updateEdgeApplicationVersionStateRequest?: UpdateEdgeApplicationVersionStateRequest): Promise<UpdateEdgeApplicationVersionStateResponse> {
        const options = ParamCreater().updateEdgeApplicationVersionState(updateEdgeApplicationVersionStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据源配置列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据源配置列表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} [moduleId] 数据源所属的模块id
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListDcDs(batchListDcDsRequest?: BatchListDcDsRequest): Promise<BatchListDcDsResponse> {
        const options = ParamCreater().batchListDcDs(batchListDcDsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口在指定边缘节点上创建数据源配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据源配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {CreateDcDsReqDTO} createDcDsReqDTO 创建数据源配置请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDs(createDsRequest?: CreateDsRequest): Promise<CreateDsResponse> {
        const options = ParamCreater().createDs(createDsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据源配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据源配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDcDs(deleteDcDsRequest?: DeleteDcDsRequest): Promise<DeleteDcDsResponse> {
        const options = ParamCreater().deleteDcDs(deleteDcDsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据源配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据源配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDcDs(showDcDsRequest?: ShowDcDsRequest): Promise<ShowDcDsResponse> {
        const options = ParamCreater().showDcDs(showDcDsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下发数采配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发数采配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public synchronizeDcConfigs(synchronizeDcConfigsRequest?: SynchronizeDcConfigsRequest): Promise<SynchronizeDcConfigsResponse> {
        const options = ParamCreater().synchronizeDcConfigs(synchronizeDcConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改数据源配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据源配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {UpdateDcDsReqDTO} updateDcDsReqDTO 修改数据源配置数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDcDs(updateDcDsRequest?: UpdateDcDsRequest): Promise<UpdateDcDsResponse> {
        const options = ParamCreater().updateDcDs(updateDcDsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数采连接下子设备列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查数采连接子设备列表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {string} [deviceId] 设备标识码。
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListDcDevices(batchListDcDevicesRequest?: BatchListDcDevicesRequest): Promise<BatchListDcDevicesResponse> {
        const options = ParamCreater().batchListDcDevices(batchListDcDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询点位表配置列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询点位表配置列表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {string} [pointId] 采集点位表id，创建点位表时设置，数据源下唯一。
     * @param {string} [name] 点位名称，允许中、数字、英文大小写、下划线、中划线、#%()*特殊字符.模糊查询
     * @param {string} [property] 属性，允许中、数字、英文大小写、下划线、中划线，精确查询
     * @param {string} [deviceId] 设备标识，精确查询
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListDcPoints(batchListDcPointsRequest?: BatchListDcPointsRequest): Promise<BatchListDcPointsResponse> {
        const options = ParamCreater().batchListDcPoints(batchListDcPointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口在指定边缘节点上点位表配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建点位表配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {CreateDcPointReqDTO} createDcPointReq 创建点位表配置请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDcPoint(createDcPointRequest?: CreateDcPointRequest): Promise<CreateDcPointResponse> {
        const options = ParamCreater().createDcPoint(createDcPointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除点位表配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除点位表配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {string} pointId 采集点位表id，创建点位表时设置，数据源下唯一。
     * @param {string} [deviceId] 设备id
     * @param {string} [property] 设备服务属性，允许中、数字、英文大小写、下划线、中划线
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDcPoint(deleteDcPointRequest?: DeleteDcPointRequest): Promise<DeleteDcPointResponse> {
        const options = ParamCreater().deleteDcPoint(deleteDcPointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除点位表配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除点位表配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {DeleteDcPointsReqDTO} deleteDcPointsReqDTO 批量删除点位表配置请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDcPoints(deleteDcPointsRequest?: DeleteDcPointsRequest): Promise<DeleteDcPointsResponse> {
        const options = ParamCreater().deleteDcPoints(deleteDcPointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询点位表配置详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询点位表配置详情
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {string} pointId 采集点位表id，创建点位表时设置，数据源下唯一。
     * @param {string} [deviceId] 设备id
     * @param {string} [property] 设备服务属性，允许中、数字、英文大小写、下划线、中划线
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDcPoint(showDcPointRequest?: ShowDcPointRequest): Promise<ShowDcPointResponse> {
        const options = ParamCreater().showDcPoint(showDcPointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改点位表配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改点位表配置
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {string} pointId 采集点位表id，创建点位表时设置，数据源下唯一。
     * @param {UpdateDcPointReqDTO} updateDcPointReqDTO 修改数据表配置数据
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDcPoint(updateDcPointRequest?: UpdateDcPointRequest): Promise<UpdateDcPointResponse> {
        const options = ParamCreater().updateDcPoint(updateDcPointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过在指定边缘节点上设置外部实体的接入信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 在指定节点上创建外部实体
     * @param {string} edgeNodeId 边缘节点ID
     * @param {CreateExternalEntityReqDTO} createExternalEntityRequestBody 指定边缘节点的创建外部实体请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExternalEntity(createExternalEntityRequest?: CreateExternalEntityRequest): Promise<CreateExternalEntityResponse> {
        const options = ParamCreater().createExternalEntity(createExternalEntityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除节点下外部实体
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定节点下外部实体
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} externalId 外部实体ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteExternalEntity(deleteExternalEntityRequest?: DeleteExternalEntityRequest): Promise<DeleteExternalEntityResponse> {
        const options = ParamCreater().deleteExternalEntity(deleteExternalEntityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户在指定边缘节点上查询外部实体列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定边缘节点下的外部实体
     * @param {string} edgeNodeId 边缘节点ID
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，取值范围为非负整数，默认值为10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExternalEntity(listExternalEntityRequest?: ListExternalEntityRequest): Promise<ListExternalEntityResponse> {
        const options = ParamCreater().listExternalEntity(listExternalEntityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过在指定边缘节点上修改指定外部实体的接入信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改节点下指定的外部实体信息
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} externalId 外部实体ID
     * @param {UpdateExternalEntityReqDTO} updateExternalEntityRequestBody 指定边缘节点的创建外部实体请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateExternalEntity(updateExternalEntityRequest?: UpdateExternalEntityRequest): Promise<UpdateExternalEntityResponse> {
        const options = ParamCreater().updateExternalEntity(updateExternalEntityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口查询指定边缘节点上边缘模块列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘模块列表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {'SYSTEM_REQUIRED' | 'SYSTEM_OPTIONAL' | 'USER'} [appType] 应用类型
     * @param {'DATA_PROCESSING' | 'PROTOCOL_PARSING' | 'ON_PREMISE_INTEGRATION'} [functionType] 功能类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListModules(batchListModulesRequest?: BatchListModulesRequest): Promise<BatchListModulesResponse> {
        const options = ParamCreater().batchListModules(batchListModulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口在指定边缘节点上创建边缘模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建边缘模块
     * @param {string} edgeNodeId 边缘节点ID
     * @param {CreateEdgeModuleReqDTO} createModuleRequestBody 创建边缘模块请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createModule(createModuleRequest?: CreateModuleRequest): Promise<CreateModuleResponse> {
        const options = ParamCreater().createModule(createModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过过Console接口在指定边缘节点上删除边缘模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除边缘模块
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteModule(deleteModuleRequest?: DeleteModuleRequest): Promise<DeleteModuleResponse> {
        const options = ParamCreater().deleteModule(deleteModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * iotedge通过该接口透明代理用户到模块的请求
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 代理边缘模块消息
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {object} proxyPayload 代理消息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public invokeModuleMsg(invokeModuleMsgRequest?: InvokeModuleMsgRequest): Promise<InvokeModuleMsgResponse> {
        const options = ParamCreater().invokeModuleMsg(invokeModuleMsgRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口查询指定边缘节点上指定边缘模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘模块
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showModule(showModuleRequest?: ShowModuleRequest): Promise<ShowModuleResponse> {
        const options = ParamCreater().showModule(showModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口查询指定边缘节点上指定边缘模块
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改边缘模块
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {UpdateEdgeModuleReqDTO} updateModuleRequestBody 修改边缘模块请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateModule(updateModuleRequest?: UpdateModuleRequest): Promise<UpdateModuleResponse> {
        const options = ParamCreater().updateModule(updateModuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口启停数采连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改边缘模块状态
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {UpdateEdgeModuleStateReqDTO} updateModuleStateRequestBody 创建边缘模块请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateModuleState(updateModuleStateRequest?: UpdateModuleStateRequest): Promise<UpdateModuleStateResponse> {
        const options = ParamCreater().updateModuleState(updateModuleStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取模块影子信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模块影子
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showModuleShadow(showModuleShadowRequest?: ShowModuleShadowRequest): Promise<ShowModuleShadowResponse> {
        const options = ParamCreater().showModuleShadow(showModuleShadowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新模块影子信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新模块影子
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} moduleId 边缘模块ID
     * @param {UpdateModuleShadowsRequestBody} updateModuleShadowsRequestBody 修改模块影子请求结构体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateModuleShadow(updateModuleShadowRequest?: UpdateModuleShadowRequest): Promise<UpdateModuleShadowResponse> {
        const options = ParamCreater().updateModuleShadow(updateModuleShadowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户在指定边缘节点上查询边缘路由列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘路由列表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {boolean} [parsed] 是否解析路由
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRoutes(listRoutesRequest?: ListRoutesRequest): Promise<ListRoutesResponse> {
        const options = ParamCreater().listRoutes(listRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过在指定边缘节点上设置边缘路由
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置边缘路由
     * @param {string} edgeNodeId 边缘节点ID
     * @param {Array<CreateRouterReqDTO>} updateRoutesRequestBody 创建边缘模块请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRoutes(updateRoutesRequest?: UpdateRoutesRequest): Promise<UpdateRoutesResponse> {
        const options = ParamCreater().updateRoutes(updateRoutesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入标准数采模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入标准数采模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addGeneralOtTemplate(addGeneralOtTemplateRequest?: AddGeneralOtTemplateRequest): Promise<AddGeneralOtTemplateResponse> {
        const options = ParamCreater().addGeneralOtTemplate();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加数采模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加数采模板
     * @param {CreateOtTemplatesReqDTO} addOtTemplatesRequestBody 添加数采模板请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addOtTemplates(addOtTemplatesRequest?: AddOtTemplatesRequest): Promise<AddOtTemplatesResponse> {
        const options = ParamCreater().addOtTemplates(addOtTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数采模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数采模板列表
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListOtTemplates(batchListOtTemplatesRequest?: BatchListOtTemplatesRequest): Promise<BatchListOtTemplatesResponse> {
        const options = ParamCreater().batchListOtTemplates(batchListOtTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数采模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数采模板
     * @param {string} tplId 模板id，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOtTemplate(deleteOtTemplateRequest?: DeleteOtTemplateRequest): Promise<DeleteOtTemplateResponse> {
        const options = ParamCreater().deleteOtTemplate(deleteOtTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数采模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数采模板详情
     * @param {string} tplId 模板id，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOtTemplate(showOtTemplateRequest?: ShowOtTemplateRequest): Promise<ShowOtTemplateResponse> {
        const options = ParamCreater().showOtTemplate(showOtTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过Console接口在指定边缘节点上点位表配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量导入点位表
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {'PARTIAL' | 'COMPLETE'} updateType 该字段PARTIAL则增量覆盖，已有点位更新，新增点位插入;该字段为COMPLETE则全量覆盖，则删除数据源下所有点位，插入当前导入所有点位
     * @param {any} file 上传点位映射文件。当前仅支持xlsx/xls文件格式，且文件最大行数为10000行。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importPoints(importPointsRequest?: ImportPointsRequest): Promise<ImportPointsResponse> {
        const options = ParamCreater().importPoints(importPointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询点位表模板文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询点位表模板文件
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPointTemplate(showPointTemplateRequest?: ShowPointTemplateRequest): Promise<ShowPointTemplateResponse> {
        const options = ParamCreater().showPointTemplate(showPointTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询点位表模板文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询点位表模板文件
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} dsId 采集数据源id，创建数据源配置时设置，节点下唯一。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPoints(showPointsRequest?: ShowPointsRequest): Promise<ShowPointsResponse> {
        const options = ParamCreater().showPoints(showPointsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过北向接口在指定边缘节点上创建调度计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建调度计划
     * @param {string} edgeNodeId 边缘节点ID
     * @param {CreateScheduleReqDTO} createScheduleReqDTO 创建调度计划请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSchedule(createScheduleRequest?: CreateScheduleRequest): Promise<CreateScheduleResponse> {
        const options = ParamCreater().createSchedule(createScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过北向接口删除边缘节点上调度计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除调度计划
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} scheduleId 调度计划id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSchedule(deleteScheduleRequest?: DeleteScheduleRequest): Promise<DeleteScheduleResponse> {
        const options = ParamCreater().deleteSchedule(deleteScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户通过北向接口修改边缘节点上调度计划
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新调度计划，机机接口，全量更新字段
     * @param {string} edgeNodeId 边缘节点ID
     * @param {string} scheduleId 调度计划id
     * @param {UpdateScheduleReqDTO} updateScheduleReqDTO 更新调度计划请求结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSchedule(updateScheduleRequest?: UpdateScheduleRequest): Promise<UpdateScheduleResponse> {
        const options = ParamCreater().updateSchedule(updateScheduleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 南向3rdIA对下发的配置项进行批量确认
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量确认南向3rdIA配置项
     * @param {string} nodeId 边缘节点ID
     * @param {string} iaId 边侧第三方应用的模块ID
     * @param {ConfirmIaConfigsRequestBody} batchConfirmConfigsRequestBody 确认配置项列表的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchConfirmConfigsNew(batchConfirmConfigsNewRequest?: BatchConfirmConfigsNewRequest): Promise<BatchConfirmConfigsNewResponse> {
        const options = ParamCreater().batchConfirmConfigsNew(batchConfirmConfigsNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量导入南向3rdIA配置项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量导入南向3rdIA配置项
     * @param {string} nodeId 边缘节点ID
     * @param {string} iaId 边侧第三方应用的模块ID
     * @param {BatchImportConfigsRequestBody} batchImportConfigsRequestBody 确认配置项的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchImportConfigs(batchImportConfigsRequest?: BatchImportConfigsRequest): Promise<BatchImportConfigsResponse> {
        const options = ParamCreater().batchImportConfigs(batchImportConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除南向3rdIA配置项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除南向3rdIA配置项
     * @param {string} nodeId 边缘节点ID
     * @param {string} iaId 边侧第三方应用的模块ID
     * @param {string} configId 配置ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIaConfig(deleteIaConfigRequest?: DeleteIaConfigRequest): Promise<DeleteIaConfigResponse> {
        const options = ParamCreater().deleteIaConfig(deleteIaConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询南向3rdIA配置项列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询南向3rdIA配置项列表
     * @param {string} nodeId 边缘节点ID
     * @param {string} iaId 边侧第三方应用的模块ID
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，取值范围为非负整数，默认值为10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIaConfigs(listIaConfigsRequest?: ListIaConfigsRequest): Promise<ListIaConfigsResponse> {
        const options = ParamCreater().listIaConfigs(listIaConfigsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询南向3rdIA配置项详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询南向3rdIA配置项详情
     * @param {string} nodeId 边缘节点ID
     * @param {string} iaId 边侧第三方应用的模块ID
     * @param {string} configId 配置ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIaConfig(showIaConfigRequest?: ShowIaConfigRequest): Promise<ShowIaConfigResponse> {
        const options = ParamCreater().showIaConfig(showIaConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建&amp;更新南向3rdIA配置项信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建&更新南向3rdIA配置项信息
     * @param {string} nodeId 边缘节点ID
     * @param {string} iaId 边侧第三方应用的模块ID
     * @param {string} configId 配置ID
     * @param {UpdateIaConfigRequestDTO} updateIaConfigRequestBody 创建&amp;更新南向3rdIA配置项信息请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIaConfig(updateIaConfigRequest?: UpdateIaConfigRequest): Promise<UpdateIaConfigResponse> {
        const options = ParamCreater().updateIaConfig(updateIaConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量授权北向NA信息到边缘节点。
     * 已授权的边缘节点上的南向IA应用，可以通过部署在边缘节点上的api网关访问北向NA提供的接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 授权北向NA信息到边缘节点
     * @param {string} naId 北向数据接收端点ID
     * @param {string} action 批量删除delete，批量添加add
     * @param {AuthorizeNa2NodesRequestDTO} batchAuthorizeNaToNodesRequestBody 添加NA授权的节点请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateNaToNodes(batchAssociateNaToNodesRequest?: BatchAssociateNaToNodesRequest): Promise<BatchAssociateNaToNodesResponse> {
        const options = ParamCreater().batchAssociateNaToNodes(batchAssociateNaToNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除北向NA信息，如果有边缘节点已分配该NA信息，会通知到该边缘节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除北向NA信息
     * @param {string} naId 北向数据接收端点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNa(deleteNaRequest?: DeleteNaRequest): Promise<DeleteNaResponse> {
        const options = ParamCreater().deleteNa(deleteNaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询该北向NA信息的已分配节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询该北向NA信息的已分配节点
     * @param {string} naId 北向数据接收端点ID
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，默认值为10，取值区间为1-1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNaAuthorizedNodes(listNaAuthorizedNodesRequest?: ListNaAuthorizedNodesRequest): Promise<ListNaAuthorizedNodesResponse> {
        const options = ParamCreater().listNaAuthorizedNodes(listNaAuthorizedNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询北向NA信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询北向NA信息列表
     * @param {string} [name] NA名称搜索关键字
     * @param {number} [offset] 查询的起始位置，取值范围为非负整数，默认为0
     * @param {number} [limit] 每页记录数，取值范围为非负整数，默认值为10
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNas(listNasRequest?: ListNasRequest): Promise<ListNasResponse> {
        const options = ParamCreater().listNas(listNasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询北向NA信息详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询北向NA信息详情
     * @param {string} naId 北向数据接收端点ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNa(showNaRequest?: ShowNaRequest): Promise<ShowNaResponse> {
        const options = ParamCreater().showNa(showNaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建&amp;更新北向NA信息，当更新北向NA信息时，会通知到已分配该北向NA的所有边缘节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建&更新北向NA信息
     * @param {string} naId 北向数据接收端点ID
     * @param {UpdateNaRequestDTO} updateNaRequestBody 创建&amp;更新北向NA请求的结构体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNa(updateNaRequest?: UpdateNaRequest): Promise<UpdateNaResponse> {
        const options = ParamCreater().updateNa(updateNaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建边缘节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEdgeNode(createEdgeNodeRequest?: CreateEdgeNodeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEdgeNodeRequest !== null && createEdgeNodeRequest !== undefined) {
                if (createEdgeNodeRequest instanceof CreateEdgeNodeRequest) {
                    body = createEdgeNodeRequest.body
                } else {
                    body = createEdgeNodeRequest['body'];
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
         * 生成边缘节点安装命令，命令有效时间30分钟，超过后需要重新生成
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createInstallCmd(createInstallCmdRequest?: CreateInstallCmdRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/install",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let edgeNodeId;
            
            let arch;

            if (createInstallCmdRequest !== null && createInstallCmdRequest !== undefined) {
                if (createInstallCmdRequest instanceof CreateInstallCmdRequest) {
                    edgeNodeId = createInstallCmdRequest.edgeNodeId;
                    arch = createInstallCmdRequest.arch;
                    body = createInstallCmdRequest.body
                } else {
                    edgeNodeId = createInstallCmdRequest['edge_node_id'];
                    arch = createInstallCmdRequest['arch'];
                    body = createInstallCmdRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling createInstallCmd.');
            }
            if (arch === null || arch === undefined) {
                throw new RequiredError('arch','Required parameter arch was null or undefined when calling createInstallCmd.');
            }
            if (arch !== null && arch !== undefined) {
                localVarQueryParameter['arch'] = arch;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定边缘节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEdgeNode(deleteEdgeNodeRequest?: DeleteEdgeNodeRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let deleteExternalNode;

            if (deleteEdgeNodeRequest !== null && deleteEdgeNodeRequest !== undefined) {
                if (deleteEdgeNodeRequest instanceof DeleteEdgeNodeRequest) {
                    edgeNodeId = deleteEdgeNodeRequest.edgeNodeId;
                    deleteExternalNode = deleteEdgeNodeRequest.deleteExternalNode;
                } else {
                    edgeNodeId = deleteEdgeNodeRequest['edge_node_id'];
                    deleteExternalNode = deleteEdgeNodeRequest['delete_external_node'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteEdgeNode.');
            }
            if (deleteExternalNode !== null && deleteExternalNode !== undefined) {
                localVarQueryParameter['delete_external_node'] = deleteExternalNode;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询边缘节点列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEdgeNodes(listEdgeNodesRequest?: ListEdgeNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let state;
            
            let type;
            
            let instanceId;
            
            let spaceId;
            
            let nodeIds;
            
            let offset;
            
            let limit;

            if (listEdgeNodesRequest !== null && listEdgeNodesRequest !== undefined) {
                if (listEdgeNodesRequest instanceof ListEdgeNodesRequest) {
                    name = listEdgeNodesRequest.name;
                    state = listEdgeNodesRequest.state;
                    type = listEdgeNodesRequest.type;
                    instanceId = listEdgeNodesRequest.instanceId;
                    spaceId = listEdgeNodesRequest.spaceId;
                    nodeIds = listEdgeNodesRequest.nodeIds;
                    offset = listEdgeNodesRequest.offset;
                    limit = listEdgeNodesRequest.limit;
                } else {
                    name = listEdgeNodesRequest['name'];
                    state = listEdgeNodesRequest['state'];
                    type = listEdgeNodesRequest['type'];
                    instanceId = listEdgeNodesRequest['instance_id'];
                    spaceId = listEdgeNodesRequest['space_id'];
                    nodeIds = listEdgeNodesRequest['node_ids'];
                    offset = listEdgeNodesRequest['offset'];
                    limit = listEdgeNodesRequest['limit'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }
            if (spaceId !== null && spaceId !== undefined) {
                localVarQueryParameter['space_id'] = spaceId;
            }
            if (nodeIds !== null && nodeIds !== undefined) {
                localVarQueryParameter['node_ids'] = nodeIds;
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
         * 查询边缘节点详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEdgeNode(showEdgeNodeRequest?: ShowEdgeNodeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;

            if (showEdgeNodeRequest !== null && showEdgeNodeRequest !== undefined) {
                if (showEdgeNodeRequest instanceof ShowEdgeNodeRequest) {
                    edgeNodeId = showEdgeNodeRequest.edgeNodeId;
                } else {
                    edgeNodeId = showEdgeNodeRequest['edge_node_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showEdgeNode.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询边缘节点下的主机详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEdgeNodeHostsInfo(showEdgeNodeHostsInfoRequest?: ShowEdgeNodeHostsInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;

            if (showEdgeNodeHostsInfoRequest !== null && showEdgeNodeHostsInfoRequest !== undefined) {
                if (showEdgeNodeHostsInfoRequest instanceof ShowEdgeNodeHostsInfoRequest) {
                    edgeNodeId = showEdgeNodeHostsInfoRequest.edgeNodeId;
                } else {
                    edgeNodeId = showEdgeNodeHostsInfoRequest['edge_node_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showEdgeNodeHostsInfo.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改边缘节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEdgeNode(updateEdgeNodeRequest?: UpdateEdgeNodeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (updateEdgeNodeRequest !== null && updateEdgeNodeRequest !== undefined) {
                if (updateEdgeNodeRequest instanceof UpdateEdgeNodeRequest) {
                    edgeNodeId = updateEdgeNodeRequest.edgeNodeId;
                    body = updateEdgeNodeRequest.body
                } else {
                    edgeNodeId = updateEdgeNodeRequest['edge_node_id'];
                    body = updateEdgeNodeRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateEdgeNode.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备控制释放
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeDeviceControlsRelease(executeDeviceControlsReleaseRequest?: ExecuteDeviceControlsReleaseRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices/{device_id}/controls/release",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let deviceId;

            if (executeDeviceControlsReleaseRequest !== null && executeDeviceControlsReleaseRequest !== undefined) {
                if (executeDeviceControlsReleaseRequest instanceof ExecuteDeviceControlsReleaseRequest) {
                    edgeNodeId = executeDeviceControlsReleaseRequest.edgeNodeId;
                    deviceId = executeDeviceControlsReleaseRequest.deviceId;
                    body = executeDeviceControlsReleaseRequest.body
                } else {
                    edgeNodeId = executeDeviceControlsReleaseRequest['edge_node_id'];
                    deviceId = executeDeviceControlsReleaseRequest['device_id'];
                    body = executeDeviceControlsReleaseRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling executeDeviceControlsRelease.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling executeDeviceControlsRelease.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备控制设置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeDeviceControlsSet(executeDeviceControlsSetRequest?: ExecuteDeviceControlsSetRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices/{device_id}/controls/set",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let deviceId;

            if (executeDeviceControlsSetRequest !== null && executeDeviceControlsSetRequest !== undefined) {
                if (executeDeviceControlsSetRequest instanceof ExecuteDeviceControlsSetRequest) {
                    edgeNodeId = executeDeviceControlsSetRequest.edgeNodeId;
                    deviceId = executeDeviceControlsSetRequest.deviceId;
                    body = executeDeviceControlsSetRequest.body
                } else {
                    edgeNodeId = executeDeviceControlsSetRequest['edge_node_id'];
                    deviceId = executeDeviceControlsSetRequest['device_id'];
                    body = executeDeviceControlsSetRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling executeDeviceControlsSet.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling executeDeviceControlsSet.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取属性执行中的控制
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPropertyActiveControls(listPropertyActiveControlsRequest?: ListPropertyActiveControlsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices/{device_id}/active-controls",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let deviceId;
            
            let property;
            
            let serviceId;

            if (listPropertyActiveControlsRequest !== null && listPropertyActiveControlsRequest !== undefined) {
                if (listPropertyActiveControlsRequest instanceof ListPropertyActiveControlsRequest) {
                    edgeNodeId = listPropertyActiveControlsRequest.edgeNodeId;
                    deviceId = listPropertyActiveControlsRequest.deviceId;
                    property = listPropertyActiveControlsRequest.property;
                    serviceId = listPropertyActiveControlsRequest.serviceId;
                } else {
                    edgeNodeId = listPropertyActiveControlsRequest['edge_node_id'];
                    deviceId = listPropertyActiveControlsRequest['device_id'];
                    property = listPropertyActiveControlsRequest['property'];
                    serviceId = listPropertyActiveControlsRequest['service_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling listPropertyActiveControls.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling listPropertyActiveControls.');
            }
            if (property === null || property === undefined) {
                throw new RequiredError('property','Required parameter property was null or undefined when calling listPropertyActiveControls.');
            }
            if (property !== null && property !== undefined) {
                localVarQueryParameter['property'] = property;
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备控制默认值
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setDeviceControlDefaultValues(setDeviceControlDefaultValuesRequest?: SetDeviceControlDefaultValuesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices/controls/default-values",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (setDeviceControlDefaultValuesRequest !== null && setDeviceControlDefaultValuesRequest !== undefined) {
                if (setDeviceControlDefaultValuesRequest instanceof SetDeviceControlDefaultValuesRequest) {
                    edgeNodeId = setDeviceControlDefaultValuesRequest.edgeNodeId;
                    body = setDeviceControlDefaultValuesRequest.body
                } else {
                    edgeNodeId = setDeviceControlDefaultValuesRequest['edge_node_id'];
                    body = setDeviceControlDefaultValuesRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling setDeviceControlDefaultValues.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加设备
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDevice(addDeviceRequest?: AddDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (addDeviceRequest !== null && addDeviceRequest !== undefined) {
                if (addDeviceRequest instanceof AddDeviceRequest) {
                    edgeNodeId = addDeviceRequest.edgeNodeId;
                    body = addDeviceRequest.body
                } else {
                    edgeNodeId = addDeviceRequest['edge_node_id'];
                    body = addDeviceRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling addDevice.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除设备
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDevice(deleteDeviceRequest?: DeleteDeviceRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let deviceId;

            if (deleteDeviceRequest !== null && deleteDeviceRequest !== undefined) {
                if (deleteDeviceRequest instanceof DeleteDeviceRequest) {
                    edgeNodeId = deleteDeviceRequest.edgeNodeId;
                    deviceId = deleteDeviceRequest.deviceId;
                } else {
                    edgeNodeId = deleteDeviceRequest['edge_node_id'];
                    deviceId = deleteDeviceRequest['device_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteDevice.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling deleteDevice.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询设备列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevices(listDevicesRequest?: ListDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let gatewayId;
            
            let deviceName;
            
            let offset;
            
            let limit;

            if (listDevicesRequest !== null && listDevicesRequest !== undefined) {
                if (listDevicesRequest instanceof ListDevicesRequest) {
                    edgeNodeId = listDevicesRequest.edgeNodeId;
                    gatewayId = listDevicesRequest.gatewayId;
                    deviceName = listDevicesRequest.deviceName;
                    offset = listDevicesRequest.offset;
                    limit = listDevicesRequest.limit;
                } else {
                    edgeNodeId = listDevicesRequest['edge_node_id'];
                    gatewayId = listDevicesRequest['gateway_id'];
                    deviceName = listDevicesRequest['device_name'];
                    offset = listDevicesRequest['offset'];
                    limit = listDevicesRequest['limit'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling listDevices.');
            }
            if (gatewayId !== null && gatewayId !== undefined) {
                localVarQueryParameter['gateway_id'] = gatewayId;
            }
            if (deviceName !== null && deviceName !== undefined) {
                localVarQueryParameter['device_name'] = deviceName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取协议配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProductConfig(showProductConfigRequest?: ShowProductConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/protocol-configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let protocolType;

            if (showProductConfigRequest !== null && showProductConfigRequest !== undefined) {
                if (showProductConfigRequest instanceof ShowProductConfigRequest) {
                    protocolType = showProductConfigRequest.protocolType;
                } else {
                    protocolType = showProductConfigRequest['protocol_type'];
                }
            }

        
            if (protocolType === null || protocolType === undefined) {
                throw new RequiredError('protocolType','Required parameter protocolType was null or undefined when calling showProductConfig.');
            }
            if (protocolType !== null && protocolType !== undefined) {
                localVarQueryParameter['protocol_type'] = protocolType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改设备
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDevice(updateDeviceRequest?: UpdateDeviceRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/devices/{device_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let deviceId;

            if (updateDeviceRequest !== null && updateDeviceRequest !== undefined) {
                if (updateDeviceRequest instanceof UpdateDeviceRequest) {
                    edgeNodeId = updateDeviceRequest.edgeNodeId;
                    deviceId = updateDeviceRequest.deviceId;
                    body = updateDeviceRequest.body
                } else {
                    edgeNodeId = updateDeviceRequest['edge_node_id'];
                    deviceId = updateDeviceRequest['device_id'];
                    body = updateDeviceRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateDevice.');
            }
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling updateDevice.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加应用配置模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAppConfigsTemplates(addAppConfigsTemplatesRequest?: AddAppConfigsTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/templates/apps/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addAppConfigsTemplatesRequest !== null && addAppConfigsTemplatesRequest !== undefined) {
                if (addAppConfigsTemplatesRequest instanceof AddAppConfigsTemplatesRequest) {
                    body = addAppConfigsTemplatesRequest.body
                } else {
                    body = addAppConfigsTemplatesRequest['body'];
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
         * 导入标准应用配置模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addGeneralAppConfigsTemplate() {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/templates/apps/configs/import",
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
         * 查询应用配置模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListAppConfigsTemplates(batchListAppConfigsTemplatesRequest?: BatchListAppConfigsTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/templates/apps/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (batchListAppConfigsTemplatesRequest !== null && batchListAppConfigsTemplatesRequest !== undefined) {
                if (batchListAppConfigsTemplatesRequest instanceof BatchListAppConfigsTemplatesRequest) {
                    offset = batchListAppConfigsTemplatesRequest.offset;
                    limit = batchListAppConfigsTemplatesRequest.limit;
                } else {
                    offset = batchListAppConfigsTemplatesRequest['offset'];
                    limit = batchListAppConfigsTemplatesRequest['limit'];
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
         * 删除应用配置模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAppConfigsTemplate(deleteAppConfigsTemplateRequest?: DeleteAppConfigsTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/templates/apps/configs/{tpl_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tplId;

            if (deleteAppConfigsTemplateRequest !== null && deleteAppConfigsTemplateRequest !== undefined) {
                if (deleteAppConfigsTemplateRequest instanceof DeleteAppConfigsTemplateRequest) {
                    tplId = deleteAppConfigsTemplateRequest.tplId;
                } else {
                    tplId = deleteAppConfigsTemplateRequest['tpl_id'];
                }
            }

        
            if (tplId === null || tplId === undefined) {
            throw new RequiredError('tplId','Required parameter tplId was null or undefined when calling deleteAppConfigsTemplate.');
            }

            options.pathParams = { 'tpl_id': tplId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用配置模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppConfigsTemplate(showAppConfigsTemplateRequest?: ShowAppConfigsTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/templates/apps/configs/{tpl_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tplId;

            if (showAppConfigsTemplateRequest !== null && showAppConfigsTemplateRequest !== undefined) {
                if (showAppConfigsTemplateRequest instanceof ShowAppConfigsTemplateRequest) {
                    tplId = showAppConfigsTemplateRequest.tplId;
                } else {
                    tplId = showAppConfigsTemplateRequest['tpl_id'];
                }
            }

        
            if (tplId === null || tplId === undefined) {
            throw new RequiredError('tplId','Required parameter tplId was null or undefined when calling showAppConfigsTemplate.');
            }

            options.pathParams = { 'tpl_id': tplId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListEdgeApps(batchListEdgeAppsRequest?: BatchListEdgeAppsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeAppId;
            
            let offset;
            
            let limit;
            
            let appType;
            
            let functionType;

            if (batchListEdgeAppsRequest !== null && batchListEdgeAppsRequest !== undefined) {
                if (batchListEdgeAppsRequest instanceof BatchListEdgeAppsRequest) {
                    edgeAppId = batchListEdgeAppsRequest.edgeAppId;
                    offset = batchListEdgeAppsRequest.offset;
                    limit = batchListEdgeAppsRequest.limit;
                    appType = batchListEdgeAppsRequest.appType;
                    functionType = batchListEdgeAppsRequest.functionType;
                } else {
                    edgeAppId = batchListEdgeAppsRequest['edge_app_id'];
                    offset = batchListEdgeAppsRequest['offset'];
                    limit = batchListEdgeAppsRequest['limit'];
                    appType = batchListEdgeAppsRequest['app_type'];
                    functionType = batchListEdgeAppsRequest['function_type'];
                }
            }

        
            if (edgeAppId !== null && edgeAppId !== undefined) {
                localVarQueryParameter['edge_app_id'] = edgeAppId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (functionType !== null && functionType !== undefined) {
                localVarQueryParameter['function_type'] = functionType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEdgeApp(createEdgeAppRequest?: CreateEdgeAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEdgeAppRequest !== null && createEdgeAppRequest !== undefined) {
                if (createEdgeAppRequest instanceof CreateEdgeAppRequest) {
                    body = createEdgeAppRequest.body
                } else {
                    body = createEdgeAppRequest['body'];
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
         * 删除应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEdgeApp(deleteEdgeAppRequest?: DeleteEdgeAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeAppId;

            if (deleteEdgeAppRequest !== null && deleteEdgeAppRequest !== undefined) {
                if (deleteEdgeAppRequest instanceof DeleteEdgeAppRequest) {
                    edgeAppId = deleteEdgeAppRequest.edgeAppId;
                } else {
                    edgeAppId = deleteEdgeAppRequest['edge_app_id'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling deleteEdgeApp.');
            }

            options.pathParams = { 'edge_app_id': edgeAppId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEdgeApp(showEdgeAppRequest?: ShowEdgeAppRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeAppId;

            if (showEdgeAppRequest !== null && showEdgeAppRequest !== undefined) {
                if (showEdgeAppRequest instanceof ShowEdgeAppRequest) {
                    edgeAppId = showEdgeAppRequest.edgeAppId;
                } else {
                    edgeAppId = showEdgeAppRequest['edge_app_id'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling showEdgeApp.');
            }

            options.pathParams = { 'edge_app_id': edgeAppId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListEdgeAppVersions(batchListEdgeAppVersionsRequest?: BatchListEdgeAppVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeAppId;
            
            let version;
            
            let offset;
            
            let limit;
            
            let aiCardType;
            
            let arch;
            
            let state;

            if (batchListEdgeAppVersionsRequest !== null && batchListEdgeAppVersionsRequest !== undefined) {
                if (batchListEdgeAppVersionsRequest instanceof BatchListEdgeAppVersionsRequest) {
                    edgeAppId = batchListEdgeAppVersionsRequest.edgeAppId;
                    version = batchListEdgeAppVersionsRequest.version;
                    offset = batchListEdgeAppVersionsRequest.offset;
                    limit = batchListEdgeAppVersionsRequest.limit;
                    aiCardType = batchListEdgeAppVersionsRequest.aiCardType;
                    arch = batchListEdgeAppVersionsRequest.arch;
                    state = batchListEdgeAppVersionsRequest.state;
                } else {
                    edgeAppId = batchListEdgeAppVersionsRequest['edge_app_id'];
                    version = batchListEdgeAppVersionsRequest['version'];
                    offset = batchListEdgeAppVersionsRequest['offset'];
                    limit = batchListEdgeAppVersionsRequest['limit'];
                    aiCardType = batchListEdgeAppVersionsRequest['ai_card_type'];
                    arch = batchListEdgeAppVersionsRequest['arch'];
                    state = batchListEdgeAppVersionsRequest['state'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling batchListEdgeAppVersions.');
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (aiCardType !== null && aiCardType !== undefined) {
                localVarQueryParameter['ai_card_type'] = aiCardType;
            }
            if (arch !== null && arch !== undefined) {
                localVarQueryParameter['arch'] = arch;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_app_id': edgeAppId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建应用版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEdgeApplicationVersion(createEdgeApplicationVersionRequest?: CreateEdgeApplicationVersionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeAppId;

            if (createEdgeApplicationVersionRequest !== null && createEdgeApplicationVersionRequest !== undefined) {
                if (createEdgeApplicationVersionRequest instanceof CreateEdgeApplicationVersionRequest) {
                    edgeAppId = createEdgeApplicationVersionRequest.edgeAppId;
                    body = createEdgeApplicationVersionRequest.body
                } else {
                    edgeAppId = createEdgeApplicationVersionRequest['edge_app_id'];
                    body = createEdgeApplicationVersionRequest['body'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling createEdgeApplicationVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_app_id': edgeAppId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除应用版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEdgeApplicationVersion(deleteEdgeApplicationVersionRequest?: DeleteEdgeApplicationVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeAppId;
            
            let version;

            if (deleteEdgeApplicationVersionRequest !== null && deleteEdgeApplicationVersionRequest !== undefined) {
                if (deleteEdgeApplicationVersionRequest instanceof DeleteEdgeApplicationVersionRequest) {
                    edgeAppId = deleteEdgeApplicationVersionRequest.edgeAppId;
                    version = deleteEdgeApplicationVersionRequest.version;
                } else {
                    edgeAppId = deleteEdgeApplicationVersionRequest['edge_app_id'];
                    version = deleteEdgeApplicationVersionRequest['version'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling deleteEdgeApplicationVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling deleteEdgeApplicationVersion.');
            }

            options.pathParams = { 'edge_app_id': edgeAppId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询应用版本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEdgeApplicationVersion(showEdgeApplicationVersionRequest?: ShowEdgeApplicationVersionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeAppId;
            
            let version;

            if (showEdgeApplicationVersionRequest !== null && showEdgeApplicationVersionRequest !== undefined) {
                if (showEdgeApplicationVersionRequest instanceof ShowEdgeApplicationVersionRequest) {
                    edgeAppId = showEdgeApplicationVersionRequest.edgeAppId;
                    version = showEdgeApplicationVersionRequest.version;
                } else {
                    edgeAppId = showEdgeApplicationVersionRequest['edge_app_id'];
                    version = showEdgeApplicationVersionRequest['version'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling showEdgeApplicationVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showEdgeApplicationVersion.');
            }

            options.pathParams = { 'edge_app_id': edgeAppId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改应用版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEdgeApplicationVersion(updateEdgeApplicationVersionRequest?: UpdateEdgeApplicationVersionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}/versions/{version}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeAppId;
            
            let version;

            if (updateEdgeApplicationVersionRequest !== null && updateEdgeApplicationVersionRequest !== undefined) {
                if (updateEdgeApplicationVersionRequest instanceof UpdateEdgeApplicationVersionRequest) {
                    edgeAppId = updateEdgeApplicationVersionRequest.edgeAppId;
                    version = updateEdgeApplicationVersionRequest.version;
                    body = updateEdgeApplicationVersionRequest.body
                } else {
                    edgeAppId = updateEdgeApplicationVersionRequest['edge_app_id'];
                    version = updateEdgeApplicationVersionRequest['version'];
                    body = updateEdgeApplicationVersionRequest['body'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling updateEdgeApplicationVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling updateEdgeApplicationVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_app_id': edgeAppId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新应用版本状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEdgeApplicationVersionState(updateEdgeApplicationVersionStateRequest?: UpdateEdgeApplicationVersionStateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-apps/{edge_app_id}/versions/{version}/state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeAppId;
            
            let version;

            if (updateEdgeApplicationVersionStateRequest !== null && updateEdgeApplicationVersionStateRequest !== undefined) {
                if (updateEdgeApplicationVersionStateRequest instanceof UpdateEdgeApplicationVersionStateRequest) {
                    edgeAppId = updateEdgeApplicationVersionStateRequest.edgeAppId;
                    version = updateEdgeApplicationVersionStateRequest.version;
                    body = updateEdgeApplicationVersionStateRequest.body
                } else {
                    edgeAppId = updateEdgeApplicationVersionStateRequest['edge_app_id'];
                    version = updateEdgeApplicationVersionStateRequest['version'];
                    body = updateEdgeApplicationVersionStateRequest['body'];
                }
            }

        
            if (edgeAppId === null || edgeAppId === undefined) {
            throw new RequiredError('edgeAppId','Required parameter edgeAppId was null or undefined when calling updateEdgeApplicationVersionState.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling updateEdgeApplicationVersionState.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_app_id': edgeAppId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据源配置列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListDcDs(batchListDcDsRequest?: BatchListDcDsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let moduleId;
            
            let offset;
            
            let limit;

            if (batchListDcDsRequest !== null && batchListDcDsRequest !== undefined) {
                if (batchListDcDsRequest instanceof BatchListDcDsRequest) {
                    edgeNodeId = batchListDcDsRequest.edgeNodeId;
                    moduleId = batchListDcDsRequest.moduleId;
                    offset = batchListDcDsRequest.offset;
                    limit = batchListDcDsRequest.limit;
                } else {
                    edgeNodeId = batchListDcDsRequest['edge_node_id'];
                    moduleId = batchListDcDsRequest['module_id'];
                    offset = batchListDcDsRequest['offset'];
                    limit = batchListDcDsRequest['limit'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling batchListDcDs.');
            }
            if (moduleId !== null && moduleId !== undefined) {
                localVarQueryParameter['module_id'] = moduleId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口在指定边缘节点上创建数据源配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDs(createDsRequest?: CreateDsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (createDsRequest !== null && createDsRequest !== undefined) {
                if (createDsRequest instanceof CreateDsRequest) {
                    edgeNodeId = createDsRequest.edgeNodeId;
                    body = createDsRequest.body
                } else {
                    edgeNodeId = createDsRequest['edge_node_id'];
                    body = createDsRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling createDs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据源配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDcDs(deleteDcDsRequest?: DeleteDcDsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let dsId;

            if (deleteDcDsRequest !== null && deleteDcDsRequest !== undefined) {
                if (deleteDcDsRequest instanceof DeleteDcDsRequest) {
                    edgeNodeId = deleteDcDsRequest.edgeNodeId;
                    dsId = deleteDcDsRequest.dsId;
                } else {
                    edgeNodeId = deleteDcDsRequest['edge_node_id'];
                    dsId = deleteDcDsRequest['ds_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteDcDs.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling deleteDcDs.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据源配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDcDs(showDcDsRequest?: ShowDcDsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let dsId;

            if (showDcDsRequest !== null && showDcDsRequest !== undefined) {
                if (showDcDsRequest instanceof ShowDcDsRequest) {
                    edgeNodeId = showDcDsRequest.edgeNodeId;
                    dsId = showDcDsRequest.dsId;
                } else {
                    edgeNodeId = showDcDsRequest['edge_node_id'];
                    dsId = showDcDsRequest['ds_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showDcDs.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling showDcDs.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下发数采配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        synchronizeDcConfigs(synchronizeDcConfigsRequest?: SynchronizeDcConfigsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/synchronize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let dsId;

            if (synchronizeDcConfigsRequest !== null && synchronizeDcConfigsRequest !== undefined) {
                if (synchronizeDcConfigsRequest instanceof SynchronizeDcConfigsRequest) {
                    edgeNodeId = synchronizeDcConfigsRequest.edgeNodeId;
                    dsId = synchronizeDcConfigsRequest.dsId;
                } else {
                    edgeNodeId = synchronizeDcConfigsRequest['edge_node_id'];
                    dsId = synchronizeDcConfigsRequest['ds_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling synchronizeDcConfigs.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling synchronizeDcConfigs.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改数据源配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDcDs(updateDcDsRequest?: UpdateDcDsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let dsId;

            if (updateDcDsRequest !== null && updateDcDsRequest !== undefined) {
                if (updateDcDsRequest instanceof UpdateDcDsRequest) {
                    edgeNodeId = updateDcDsRequest.edgeNodeId;
                    dsId = updateDcDsRequest.dsId;
                    body = updateDcDsRequest.body
                } else {
                    edgeNodeId = updateDcDsRequest['edge_node_id'];
                    dsId = updateDcDsRequest['ds_id'];
                    body = updateDcDsRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateDcDs.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling updateDcDs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数采连接下子设备列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListDcDevices(batchListDcDevicesRequest?: BatchListDcDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let dsId;
            
            let deviceId;
            
            let offset;
            
            let limit;

            if (batchListDcDevicesRequest !== null && batchListDcDevicesRequest !== undefined) {
                if (batchListDcDevicesRequest instanceof BatchListDcDevicesRequest) {
                    edgeNodeId = batchListDcDevicesRequest.edgeNodeId;
                    dsId = batchListDcDevicesRequest.dsId;
                    deviceId = batchListDcDevicesRequest.deviceId;
                    offset = batchListDcDevicesRequest.offset;
                    limit = batchListDcDevicesRequest.limit;
                } else {
                    edgeNodeId = batchListDcDevicesRequest['edge_node_id'];
                    dsId = batchListDcDevicesRequest['ds_id'];
                    deviceId = batchListDcDevicesRequest['device_id'];
                    offset = batchListDcDevicesRequest['offset'];
                    limit = batchListDcDevicesRequest['limit'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling batchListDcDevices.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling batchListDcDevices.');
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询点位表配置列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListDcPoints(batchListDcPointsRequest?: BatchListDcPointsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/points",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let dsId;
            
            let pointId;
            
            let name;
            
            let property;
            
            let deviceId;
            
            let offset;
            
            let limit;

            if (batchListDcPointsRequest !== null && batchListDcPointsRequest !== undefined) {
                if (batchListDcPointsRequest instanceof BatchListDcPointsRequest) {
                    edgeNodeId = batchListDcPointsRequest.edgeNodeId;
                    dsId = batchListDcPointsRequest.dsId;
                    pointId = batchListDcPointsRequest.pointId;
                    name = batchListDcPointsRequest.name;
                    property = batchListDcPointsRequest.property;
                    deviceId = batchListDcPointsRequest.deviceId;
                    offset = batchListDcPointsRequest.offset;
                    limit = batchListDcPointsRequest.limit;
                } else {
                    edgeNodeId = batchListDcPointsRequest['edge_node_id'];
                    dsId = batchListDcPointsRequest['ds_id'];
                    pointId = batchListDcPointsRequest['point_id'];
                    name = batchListDcPointsRequest['name'];
                    property = batchListDcPointsRequest['property'];
                    deviceId = batchListDcPointsRequest['device_id'];
                    offset = batchListDcPointsRequest['offset'];
                    limit = batchListDcPointsRequest['limit'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling batchListDcPoints.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling batchListDcPoints.');
            }
            if (pointId !== null && pointId !== undefined) {
                localVarQueryParameter['point_id'] = pointId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (property !== null && property !== undefined) {
                localVarQueryParameter['property'] = property;
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口在指定边缘节点上点位表配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDcPoint(createDcPointRequest?: CreateDcPointRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/points",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let dsId;

            if (createDcPointRequest !== null && createDcPointRequest !== undefined) {
                if (createDcPointRequest instanceof CreateDcPointRequest) {
                    edgeNodeId = createDcPointRequest.edgeNodeId;
                    dsId = createDcPointRequest.dsId;
                    body = createDcPointRequest.body
                } else {
                    edgeNodeId = createDcPointRequest['edge_node_id'];
                    dsId = createDcPointRequest['ds_id'];
                    body = createDcPointRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling createDcPoint.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling createDcPoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除点位表配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDcPoint(deleteDcPointRequest?: DeleteDcPointRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/points/{point_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let dsId;
            
            let pointId;
            
            let deviceId;
            
            let property;

            if (deleteDcPointRequest !== null && deleteDcPointRequest !== undefined) {
                if (deleteDcPointRequest instanceof DeleteDcPointRequest) {
                    edgeNodeId = deleteDcPointRequest.edgeNodeId;
                    dsId = deleteDcPointRequest.dsId;
                    pointId = deleteDcPointRequest.pointId;
                    deviceId = deleteDcPointRequest.deviceId;
                    property = deleteDcPointRequest.property;
                } else {
                    edgeNodeId = deleteDcPointRequest['edge_node_id'];
                    dsId = deleteDcPointRequest['ds_id'];
                    pointId = deleteDcPointRequest['point_id'];
                    deviceId = deleteDcPointRequest['device_id'];
                    property = deleteDcPointRequest['property'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteDcPoint.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling deleteDcPoint.');
            }
            if (pointId === null || pointId === undefined) {
            throw new RequiredError('pointId','Required parameter pointId was null or undefined when calling deleteDcPoint.');
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (property !== null && property !== undefined) {
                localVarQueryParameter['property'] = property;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId,'point_id': pointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除点位表配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDcPoints(deleteDcPointsRequest?: DeleteDcPointsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/points/batch-delete",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let dsId;

            if (deleteDcPointsRequest !== null && deleteDcPointsRequest !== undefined) {
                if (deleteDcPointsRequest instanceof DeleteDcPointsRequest) {
                    edgeNodeId = deleteDcPointsRequest.edgeNodeId;
                    dsId = deleteDcPointsRequest.dsId;
                    body = deleteDcPointsRequest.body
                } else {
                    edgeNodeId = deleteDcPointsRequest['edge_node_id'];
                    dsId = deleteDcPointsRequest['ds_id'];
                    body = deleteDcPointsRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteDcPoints.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling deleteDcPoints.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询点位表配置详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDcPoint(showDcPointRequest?: ShowDcPointRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/points/{point_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let dsId;
            
            let pointId;
            
            let deviceId;
            
            let property;

            if (showDcPointRequest !== null && showDcPointRequest !== undefined) {
                if (showDcPointRequest instanceof ShowDcPointRequest) {
                    edgeNodeId = showDcPointRequest.edgeNodeId;
                    dsId = showDcPointRequest.dsId;
                    pointId = showDcPointRequest.pointId;
                    deviceId = showDcPointRequest.deviceId;
                    property = showDcPointRequest.property;
                } else {
                    edgeNodeId = showDcPointRequest['edge_node_id'];
                    dsId = showDcPointRequest['ds_id'];
                    pointId = showDcPointRequest['point_id'];
                    deviceId = showDcPointRequest['device_id'];
                    property = showDcPointRequest['property'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showDcPoint.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling showDcPoint.');
            }
            if (pointId === null || pointId === undefined) {
            throw new RequiredError('pointId','Required parameter pointId was null or undefined when calling showDcPoint.');
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (property !== null && property !== undefined) {
                localVarQueryParameter['property'] = property;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId,'point_id': pointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改点位表配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDcPoint(updateDcPointRequest?: UpdateDcPointRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/points/{point_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let dsId;
            
            let pointId;

            if (updateDcPointRequest !== null && updateDcPointRequest !== undefined) {
                if (updateDcPointRequest instanceof UpdateDcPointRequest) {
                    edgeNodeId = updateDcPointRequest.edgeNodeId;
                    dsId = updateDcPointRequest.dsId;
                    pointId = updateDcPointRequest.pointId;
                    body = updateDcPointRequest.body
                } else {
                    edgeNodeId = updateDcPointRequest['edge_node_id'];
                    dsId = updateDcPointRequest['ds_id'];
                    pointId = updateDcPointRequest['point_id'];
                    body = updateDcPointRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateDcPoint.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling updateDcPoint.');
            }
            if (pointId === null || pointId === undefined) {
            throw new RequiredError('pointId','Required parameter pointId was null or undefined when calling updateDcPoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId,'point_id': pointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过在指定边缘节点上设置外部实体的接入信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExternalEntity(createExternalEntityRequest?: CreateExternalEntityRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/externals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (createExternalEntityRequest !== null && createExternalEntityRequest !== undefined) {
                if (createExternalEntityRequest instanceof CreateExternalEntityRequest) {
                    edgeNodeId = createExternalEntityRequest.edgeNodeId;
                    body = createExternalEntityRequest.body
                } else {
                    edgeNodeId = createExternalEntityRequest['edge_node_id'];
                    body = createExternalEntityRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling createExternalEntity.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除节点下外部实体
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteExternalEntity(deleteExternalEntityRequest?: DeleteExternalEntityRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/externals/{external_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let externalId;

            if (deleteExternalEntityRequest !== null && deleteExternalEntityRequest !== undefined) {
                if (deleteExternalEntityRequest instanceof DeleteExternalEntityRequest) {
                    edgeNodeId = deleteExternalEntityRequest.edgeNodeId;
                    externalId = deleteExternalEntityRequest.externalId;
                } else {
                    edgeNodeId = deleteExternalEntityRequest['edge_node_id'];
                    externalId = deleteExternalEntityRequest['external_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteExternalEntity.');
            }
            if (externalId === null || externalId === undefined) {
            throw new RequiredError('externalId','Required parameter externalId was null or undefined when calling deleteExternalEntity.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'external_id': externalId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户在指定边缘节点上查询外部实体列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExternalEntity(listExternalEntityRequest?: ListExternalEntityRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/externals",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let offset;
            
            let limit;

            if (listExternalEntityRequest !== null && listExternalEntityRequest !== undefined) {
                if (listExternalEntityRequest instanceof ListExternalEntityRequest) {
                    edgeNodeId = listExternalEntityRequest.edgeNodeId;
                    offset = listExternalEntityRequest.offset;
                    limit = listExternalEntityRequest.limit;
                } else {
                    edgeNodeId = listExternalEntityRequest['edge_node_id'];
                    offset = listExternalEntityRequest['offset'];
                    limit = listExternalEntityRequest['limit'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling listExternalEntity.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过在指定边缘节点上修改指定外部实体的接入信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateExternalEntity(updateExternalEntityRequest?: UpdateExternalEntityRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/externals/{external_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let externalId;

            if (updateExternalEntityRequest !== null && updateExternalEntityRequest !== undefined) {
                if (updateExternalEntityRequest instanceof UpdateExternalEntityRequest) {
                    edgeNodeId = updateExternalEntityRequest.edgeNodeId;
                    externalId = updateExternalEntityRequest.externalId;
                    body = updateExternalEntityRequest.body
                } else {
                    edgeNodeId = updateExternalEntityRequest['edge_node_id'];
                    externalId = updateExternalEntityRequest['external_id'];
                    body = updateExternalEntityRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateExternalEntity.');
            }
            if (externalId === null || externalId === undefined) {
            throw new RequiredError('externalId','Required parameter externalId was null or undefined when calling updateExternalEntity.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'external_id': externalId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口查询指定边缘节点上边缘模块列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListModules(batchListModulesRequest?: BatchListModulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let offset;
            
            let limit;
            
            let appType;
            
            let functionType;

            if (batchListModulesRequest !== null && batchListModulesRequest !== undefined) {
                if (batchListModulesRequest instanceof BatchListModulesRequest) {
                    edgeNodeId = batchListModulesRequest.edgeNodeId;
                    offset = batchListModulesRequest.offset;
                    limit = batchListModulesRequest.limit;
                    appType = batchListModulesRequest.appType;
                    functionType = batchListModulesRequest.functionType;
                } else {
                    edgeNodeId = batchListModulesRequest['edge_node_id'];
                    offset = batchListModulesRequest['offset'];
                    limit = batchListModulesRequest['limit'];
                    appType = batchListModulesRequest['app_type'];
                    functionType = batchListModulesRequest['function_type'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling batchListModules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (functionType !== null && functionType !== undefined) {
                localVarQueryParameter['function_type'] = functionType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口在指定边缘节点上创建边缘模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createModule(createModuleRequest?: CreateModuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (createModuleRequest !== null && createModuleRequest !== undefined) {
                if (createModuleRequest instanceof CreateModuleRequest) {
                    edgeNodeId = createModuleRequest.edgeNodeId;
                    body = createModuleRequest.body
                } else {
                    edgeNodeId = createModuleRequest['edge_node_id'];
                    body = createModuleRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling createModule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过过Console接口在指定边缘节点上删除边缘模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteModule(deleteModuleRequest?: DeleteModuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let moduleId;

            if (deleteModuleRequest !== null && deleteModuleRequest !== undefined) {
                if (deleteModuleRequest instanceof DeleteModuleRequest) {
                    edgeNodeId = deleteModuleRequest.edgeNodeId;
                    moduleId = deleteModuleRequest.moduleId;
                } else {
                    edgeNodeId = deleteModuleRequest['edge_node_id'];
                    moduleId = deleteModuleRequest['module_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteModule.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling deleteModule.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * iotedge通过该接口透明代理用户到模块的请求
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        invokeModuleMsg(invokeModuleMsgRequest?: InvokeModuleMsgRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}/proxy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let moduleId;

            if (invokeModuleMsgRequest !== null && invokeModuleMsgRequest !== undefined) {
                if (invokeModuleMsgRequest instanceof InvokeModuleMsgRequest) {
                    edgeNodeId = invokeModuleMsgRequest.edgeNodeId;
                    moduleId = invokeModuleMsgRequest.moduleId;
                    body = invokeModuleMsgRequest.body
                } else {
                    edgeNodeId = invokeModuleMsgRequest['edge_node_id'];
                    moduleId = invokeModuleMsgRequest['module_id'];
                    body = invokeModuleMsgRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling invokeModuleMsg.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling invokeModuleMsg.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口查询指定边缘节点上指定边缘模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showModule(showModuleRequest?: ShowModuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let moduleId;

            if (showModuleRequest !== null && showModuleRequest !== undefined) {
                if (showModuleRequest instanceof ShowModuleRequest) {
                    edgeNodeId = showModuleRequest.edgeNodeId;
                    moduleId = showModuleRequest.moduleId;
                } else {
                    edgeNodeId = showModuleRequest['edge_node_id'];
                    moduleId = showModuleRequest['module_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showModule.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling showModule.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口查询指定边缘节点上指定边缘模块
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateModule(updateModuleRequest?: UpdateModuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let moduleId;

            if (updateModuleRequest !== null && updateModuleRequest !== undefined) {
                if (updateModuleRequest instanceof UpdateModuleRequest) {
                    edgeNodeId = updateModuleRequest.edgeNodeId;
                    moduleId = updateModuleRequest.moduleId;
                    body = updateModuleRequest.body
                } else {
                    edgeNodeId = updateModuleRequest['edge_node_id'];
                    moduleId = updateModuleRequest['module_id'];
                    body = updateModuleRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateModule.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling updateModule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口启停数采连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateModuleState(updateModuleStateRequest?: UpdateModuleStateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}/state",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let moduleId;

            if (updateModuleStateRequest !== null && updateModuleStateRequest !== undefined) {
                if (updateModuleStateRequest instanceof UpdateModuleStateRequest) {
                    edgeNodeId = updateModuleStateRequest.edgeNodeId;
                    moduleId = updateModuleStateRequest.moduleId;
                    body = updateModuleStateRequest.body
                } else {
                    edgeNodeId = updateModuleStateRequest['edge_node_id'];
                    moduleId = updateModuleStateRequest['module_id'];
                    body = updateModuleStateRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateModuleState.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling updateModuleState.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取模块影子信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showModuleShadow(showModuleShadowRequest?: ShowModuleShadowRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}/shadow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let moduleId;

            if (showModuleShadowRequest !== null && showModuleShadowRequest !== undefined) {
                if (showModuleShadowRequest instanceof ShowModuleShadowRequest) {
                    edgeNodeId = showModuleShadowRequest.edgeNodeId;
                    moduleId = showModuleShadowRequest.moduleId;
                } else {
                    edgeNodeId = showModuleShadowRequest['edge_node_id'];
                    moduleId = showModuleShadowRequest['module_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showModuleShadow.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling showModuleShadow.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新模块影子信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateModuleShadow(updateModuleShadowRequest?: UpdateModuleShadowRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/modules/{module_id}/shadow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let moduleId;

            if (updateModuleShadowRequest !== null && updateModuleShadowRequest !== undefined) {
                if (updateModuleShadowRequest instanceof UpdateModuleShadowRequest) {
                    edgeNodeId = updateModuleShadowRequest.edgeNodeId;
                    moduleId = updateModuleShadowRequest.moduleId;
                    body = updateModuleShadowRequest.body
                } else {
                    edgeNodeId = updateModuleShadowRequest['edge_node_id'];
                    moduleId = updateModuleShadowRequest['module_id'];
                    body = updateModuleShadowRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateModuleShadow.');
            }
            if (moduleId === null || moduleId === undefined) {
            throw new RequiredError('moduleId','Required parameter moduleId was null or undefined when calling updateModuleShadow.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'module_id': moduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户在指定边缘节点上查询边缘路由列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRoutes(listRoutesRequest?: ListRoutesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeNodeId;
            
            let parsed;

            if (listRoutesRequest !== null && listRoutesRequest !== undefined) {
                if (listRoutesRequest instanceof ListRoutesRequest) {
                    edgeNodeId = listRoutesRequest.edgeNodeId;
                    parsed = listRoutesRequest.parsed;
                } else {
                    edgeNodeId = listRoutesRequest['edge_node_id'];
                    parsed = listRoutesRequest['parsed'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling listRoutes.');
            }
            if (parsed !== null && parsed !== undefined) {
                localVarQueryParameter['parsed'] = parsed;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过在指定边缘节点上设置边缘路由
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRoutes(updateRoutesRequest?: UpdateRoutesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/routes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (updateRoutesRequest !== null && updateRoutesRequest !== undefined) {
                if (updateRoutesRequest instanceof UpdateRoutesRequest) {
                    edgeNodeId = updateRoutesRequest.edgeNodeId;
                    body = updateRoutesRequest.body
                } else {
                    edgeNodeId = updateRoutesRequest['edge_node_id'];
                    body = updateRoutesRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateRoutes.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入标准数采模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addGeneralOtTemplate() {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/templates/ots/data-sources/import",
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
         * 添加数采模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addOtTemplates(addOtTemplatesRequest?: AddOtTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/templates/ots/data-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addOtTemplatesRequest !== null && addOtTemplatesRequest !== undefined) {
                if (addOtTemplatesRequest instanceof AddOtTemplatesRequest) {
                    body = addOtTemplatesRequest.body
                } else {
                    body = addOtTemplatesRequest['body'];
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
         * 查询数采模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListOtTemplates(batchListOtTemplatesRequest?: BatchListOtTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/templates/ots/data-sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (batchListOtTemplatesRequest !== null && batchListOtTemplatesRequest !== undefined) {
                if (batchListOtTemplatesRequest instanceof BatchListOtTemplatesRequest) {
                    offset = batchListOtTemplatesRequest.offset;
                    limit = batchListOtTemplatesRequest.limit;
                } else {
                    offset = batchListOtTemplatesRequest['offset'];
                    limit = batchListOtTemplatesRequest['limit'];
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
         * 删除数采模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOtTemplate(deleteOtTemplateRequest?: DeleteOtTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/templates/ots/data-sources/{tpl_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tplId;

            if (deleteOtTemplateRequest !== null && deleteOtTemplateRequest !== undefined) {
                if (deleteOtTemplateRequest instanceof DeleteOtTemplateRequest) {
                    tplId = deleteOtTemplateRequest.tplId;
                } else {
                    tplId = deleteOtTemplateRequest['tpl_id'];
                }
            }

        
            if (tplId === null || tplId === undefined) {
            throw new RequiredError('tplId','Required parameter tplId was null or undefined when calling deleteOtTemplate.');
            }

            options.pathParams = { 'tpl_id': tplId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数采模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOtTemplate(showOtTemplateRequest?: ShowOtTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/templates/ots/data-sources/{tpl_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tplId;

            if (showOtTemplateRequest !== null && showOtTemplateRequest !== undefined) {
                if (showOtTemplateRequest instanceof ShowOtTemplateRequest) {
                    tplId = showOtTemplateRequest.tplId;
                } else {
                    tplId = showOtTemplateRequest['tpl_id'];
                }
            }

        
            if (tplId === null || tplId === undefined) {
            throw new RequiredError('tplId','Required parameter tplId was null or undefined when calling showOtTemplate.');
            }

            options.pathParams = { 'tpl_id': tplId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过Console接口在指定边缘节点上点位表配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importPoints(importPointsRequest?: ImportPointsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/import-points",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let edgeNodeId;
            
            let dsId;
            
            let updateType;
            let file;
            

            if (importPointsRequest !== null && importPointsRequest !== undefined) {
                if (importPointsRequest instanceof ImportPointsRequest) {
                    edgeNodeId = importPointsRequest.edgeNodeId;
                    dsId = importPointsRequest.dsId;
                    updateType = importPointsRequest.updateType;
                    file = importPointsRequest.body?.file;
                } else {
                    edgeNodeId = importPointsRequest['edge_node_id'];
                    dsId = importPointsRequest['ds_id'];
                    updateType = importPointsRequest['update_type'];
                    file = importPointsRequest['body']['file'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling importPoints.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling importPoints.');
            }
            if (updateType === null || updateType === undefined) {
                throw new RequiredError('updateType','Required parameter updateType was null or undefined when calling importPoints.');
            }
            if (updateType !== null && updateType !== undefined) {
                localVarQueryParameter['update_type'] = updateType;
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling importPoints.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询点位表模板文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPointTemplate(showPointTemplateRequest?: ShowPointTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/download-template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let dsId;

            if (showPointTemplateRequest !== null && showPointTemplateRequest !== undefined) {
                if (showPointTemplateRequest instanceof ShowPointTemplateRequest) {
                    edgeNodeId = showPointTemplateRequest.edgeNodeId;
                    dsId = showPointTemplateRequest.dsId;
                } else {
                    edgeNodeId = showPointTemplateRequest['edge_node_id'];
                    dsId = showPointTemplateRequest['ds_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showPointTemplate.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling showPointTemplate.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询点位表模板文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPoints(showPointsRequest?: ShowPointsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/ots/data-sources/{ds_id}/export-points",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let dsId;

            if (showPointsRequest !== null && showPointsRequest !== undefined) {
                if (showPointsRequest instanceof ShowPointsRequest) {
                    edgeNodeId = showPointsRequest.edgeNodeId;
                    dsId = showPointsRequest.dsId;
                } else {
                    edgeNodeId = showPointsRequest['edge_node_id'];
                    dsId = showPointsRequest['ds_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling showPoints.');
            }
            if (dsId === null || dsId === undefined) {
            throw new RequiredError('dsId','Required parameter dsId was null or undefined when calling showPoints.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'ds_id': dsId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过北向接口在指定边缘节点上创建调度计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSchedule(createScheduleRequest?: CreateScheduleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/schedules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;

            if (createScheduleRequest !== null && createScheduleRequest !== undefined) {
                if (createScheduleRequest instanceof CreateScheduleRequest) {
                    edgeNodeId = createScheduleRequest.edgeNodeId;
                    body = createScheduleRequest.body
                } else {
                    edgeNodeId = createScheduleRequest['edge_node_id'];
                    body = createScheduleRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling createSchedule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过北向接口删除边缘节点上调度计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSchedule(deleteScheduleRequest?: DeleteScheduleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/schedules/{schedule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let edgeNodeId;
            
            let scheduleId;

            if (deleteScheduleRequest !== null && deleteScheduleRequest !== undefined) {
                if (deleteScheduleRequest instanceof DeleteScheduleRequest) {
                    edgeNodeId = deleteScheduleRequest.edgeNodeId;
                    scheduleId = deleteScheduleRequest.scheduleId;
                } else {
                    edgeNodeId = deleteScheduleRequest['edge_node_id'];
                    scheduleId = deleteScheduleRequest['schedule_id'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling deleteSchedule.');
            }
            if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('scheduleId','Required parameter scheduleId was null or undefined when calling deleteSchedule.');
            }

            options.pathParams = { 'edge_node_id': edgeNodeId,'schedule_id': scheduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户通过北向接口修改边缘节点上调度计划
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSchedule(updateScheduleRequest?: UpdateScheduleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{edge_node_id}/schedules/{schedule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let edgeNodeId;
            
            let scheduleId;

            if (updateScheduleRequest !== null && updateScheduleRequest !== undefined) {
                if (updateScheduleRequest instanceof UpdateScheduleRequest) {
                    edgeNodeId = updateScheduleRequest.edgeNodeId;
                    scheduleId = updateScheduleRequest.scheduleId;
                    body = updateScheduleRequest.body
                } else {
                    edgeNodeId = updateScheduleRequest['edge_node_id'];
                    scheduleId = updateScheduleRequest['schedule_id'];
                    body = updateScheduleRequest['body'];
                }
            }

        
            if (edgeNodeId === null || edgeNodeId === undefined) {
            throw new RequiredError('edgeNodeId','Required parameter edgeNodeId was null or undefined when calling updateSchedule.');
            }
            if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('scheduleId','Required parameter scheduleId was null or undefined when calling updateSchedule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'edge_node_id': edgeNodeId,'schedule_id': scheduleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 南向3rdIA对下发的配置项进行批量确认
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchConfirmConfigsNew(batchConfirmConfigsNewRequest?: BatchConfirmConfigsNewRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{node_id}/ias/{ia_id}/configs/batch-confirm",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nodeId;
            
            let iaId;

            if (batchConfirmConfigsNewRequest !== null && batchConfirmConfigsNewRequest !== undefined) {
                if (batchConfirmConfigsNewRequest instanceof BatchConfirmConfigsNewRequest) {
                    nodeId = batchConfirmConfigsNewRequest.nodeId;
                    iaId = batchConfirmConfigsNewRequest.iaId;
                    body = batchConfirmConfigsNewRequest.body
                } else {
                    nodeId = batchConfirmConfigsNewRequest['node_id'];
                    iaId = batchConfirmConfigsNewRequest['ia_id'];
                    body = batchConfirmConfigsNewRequest['body'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling batchConfirmConfigsNew.');
            }
            if (iaId === null || iaId === undefined) {
            throw new RequiredError('iaId','Required parameter iaId was null or undefined when calling batchConfirmConfigsNew.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'node_id': nodeId,'ia_id': iaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量导入南向3rdIA配置项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchImportConfigs(batchImportConfigsRequest?: BatchImportConfigsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/edge-nodes/{node_id}/ias/{ia_id}/configs/batch-import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nodeId;
            
            let iaId;

            if (batchImportConfigsRequest !== null && batchImportConfigsRequest !== undefined) {
                if (batchImportConfigsRequest instanceof BatchImportConfigsRequest) {
                    nodeId = batchImportConfigsRequest.nodeId;
                    iaId = batchImportConfigsRequest.iaId;
                    body = batchImportConfigsRequest.body
                } else {
                    nodeId = batchImportConfigsRequest['node_id'];
                    iaId = batchImportConfigsRequest['ia_id'];
                    body = batchImportConfigsRequest['body'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling batchImportConfigs.');
            }
            if (iaId === null || iaId === undefined) {
            throw new RequiredError('iaId','Required parameter iaId was null or undefined when calling batchImportConfigs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'node_id': nodeId,'ia_id': iaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除南向3rdIA配置项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIaConfig(deleteIaConfigRequest?: DeleteIaConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/edge-nodes/{node_id}/ias/{ia_id}/configs/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let nodeId;
            
            let iaId;
            
            let configId;

            if (deleteIaConfigRequest !== null && deleteIaConfigRequest !== undefined) {
                if (deleteIaConfigRequest instanceof DeleteIaConfigRequest) {
                    nodeId = deleteIaConfigRequest.nodeId;
                    iaId = deleteIaConfigRequest.iaId;
                    configId = deleteIaConfigRequest.configId;
                } else {
                    nodeId = deleteIaConfigRequest['node_id'];
                    iaId = deleteIaConfigRequest['ia_id'];
                    configId = deleteIaConfigRequest['config_id'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling deleteIaConfig.');
            }
            if (iaId === null || iaId === undefined) {
            throw new RequiredError('iaId','Required parameter iaId was null or undefined when calling deleteIaConfig.');
            }
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling deleteIaConfig.');
            }

            options.pathParams = { 'node_id': nodeId,'ia_id': iaId,'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询南向3rdIA配置项列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIaConfigs(listIaConfigsRequest?: ListIaConfigsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{node_id}/ias/{ia_id}/configs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let nodeId;
            
            let iaId;
            
            let offset;
            
            let limit;

            if (listIaConfigsRequest !== null && listIaConfigsRequest !== undefined) {
                if (listIaConfigsRequest instanceof ListIaConfigsRequest) {
                    nodeId = listIaConfigsRequest.nodeId;
                    iaId = listIaConfigsRequest.iaId;
                    offset = listIaConfigsRequest.offset;
                    limit = listIaConfigsRequest.limit;
                } else {
                    nodeId = listIaConfigsRequest['node_id'];
                    iaId = listIaConfigsRequest['ia_id'];
                    offset = listIaConfigsRequest['offset'];
                    limit = listIaConfigsRequest['limit'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling listIaConfigs.');
            }
            if (iaId === null || iaId === undefined) {
            throw new RequiredError('iaId','Required parameter iaId was null or undefined when calling listIaConfigs.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'node_id': nodeId,'ia_id': iaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询南向3rdIA配置项详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIaConfig(showIaConfigRequest?: ShowIaConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/edge-nodes/{node_id}/ias/{ia_id}/configs/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let nodeId;
            
            let iaId;
            
            let configId;

            if (showIaConfigRequest !== null && showIaConfigRequest !== undefined) {
                if (showIaConfigRequest instanceof ShowIaConfigRequest) {
                    nodeId = showIaConfigRequest.nodeId;
                    iaId = showIaConfigRequest.iaId;
                    configId = showIaConfigRequest.configId;
                } else {
                    nodeId = showIaConfigRequest['node_id'];
                    iaId = showIaConfigRequest['ia_id'];
                    configId = showIaConfigRequest['config_id'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling showIaConfig.');
            }
            if (iaId === null || iaId === undefined) {
            throw new RequiredError('iaId','Required parameter iaId was null or undefined when calling showIaConfig.');
            }
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling showIaConfig.');
            }

            options.pathParams = { 'node_id': nodeId,'ia_id': iaId,'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建&amp;更新南向3rdIA配置项信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIaConfig(updateIaConfigRequest?: UpdateIaConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/edge-nodes/{node_id}/ias/{ia_id}/configs/{config_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let nodeId;
            
            let iaId;
            
            let configId;

            if (updateIaConfigRequest !== null && updateIaConfigRequest !== undefined) {
                if (updateIaConfigRequest instanceof UpdateIaConfigRequest) {
                    nodeId = updateIaConfigRequest.nodeId;
                    iaId = updateIaConfigRequest.iaId;
                    configId = updateIaConfigRequest.configId;
                    body = updateIaConfigRequest.body
                } else {
                    nodeId = updateIaConfigRequest['node_id'];
                    iaId = updateIaConfigRequest['ia_id'];
                    configId = updateIaConfigRequest['config_id'];
                    body = updateIaConfigRequest['body'];
                }
            }

        
            if (nodeId === null || nodeId === undefined) {
            throw new RequiredError('nodeId','Required parameter nodeId was null or undefined when calling updateIaConfig.');
            }
            if (iaId === null || iaId === undefined) {
            throw new RequiredError('iaId','Required parameter iaId was null or undefined when calling updateIaConfig.');
            }
            if (configId === null || configId === undefined) {
            throw new RequiredError('configId','Required parameter configId was null or undefined when calling updateIaConfig.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'node_id': nodeId,'ia_id': iaId,'config_id': configId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量授权北向NA信息到边缘节点。
         * 已授权的边缘节点上的南向IA应用，可以通过部署在边缘节点上的api网关访问北向NA提供的接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateNaToNodes(batchAssociateNaToNodesRequest?: BatchAssociateNaToNodesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/nas/{na_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let naId;
            
            let action;

            if (batchAssociateNaToNodesRequest !== null && batchAssociateNaToNodesRequest !== undefined) {
                if (batchAssociateNaToNodesRequest instanceof BatchAssociateNaToNodesRequest) {
                    naId = batchAssociateNaToNodesRequest.naId;
                    action = batchAssociateNaToNodesRequest.action;
                    body = batchAssociateNaToNodesRequest.body
                } else {
                    naId = batchAssociateNaToNodesRequest['na_id'];
                    action = batchAssociateNaToNodesRequest['action'];
                    body = batchAssociateNaToNodesRequest['body'];
                }
            }

        
            if (naId === null || naId === undefined) {
            throw new RequiredError('naId','Required parameter naId was null or undefined when calling batchAssociateNaToNodes.');
            }
            if (action === null || action === undefined) {
                throw new RequiredError('action','Required parameter action was null or undefined when calling batchAssociateNaToNodes.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'na_id': naId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除北向NA信息，如果有边缘节点已分配该NA信息，会通知到该边缘节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNa(deleteNaRequest?: DeleteNaRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/nas/{na_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let naId;

            if (deleteNaRequest !== null && deleteNaRequest !== undefined) {
                if (deleteNaRequest instanceof DeleteNaRequest) {
                    naId = deleteNaRequest.naId;
                } else {
                    naId = deleteNaRequest['na_id'];
                }
            }

        
            if (naId === null || naId === undefined) {
            throw new RequiredError('naId','Required parameter naId was null or undefined when calling deleteNa.');
            }

            options.pathParams = { 'na_id': naId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询该北向NA信息的已分配节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNaAuthorizedNodes(listNaAuthorizedNodesRequest?: ListNaAuthorizedNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nas/{na_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let naId;
            
            let offset;
            
            let limit;

            if (listNaAuthorizedNodesRequest !== null && listNaAuthorizedNodesRequest !== undefined) {
                if (listNaAuthorizedNodesRequest instanceof ListNaAuthorizedNodesRequest) {
                    naId = listNaAuthorizedNodesRequest.naId;
                    offset = listNaAuthorizedNodesRequest.offset;
                    limit = listNaAuthorizedNodesRequest.limit;
                } else {
                    naId = listNaAuthorizedNodesRequest['na_id'];
                    offset = listNaAuthorizedNodesRequest['offset'];
                    limit = listNaAuthorizedNodesRequest['limit'];
                }
            }

        
            if (naId === null || naId === undefined) {
            throw new RequiredError('naId','Required parameter naId was null or undefined when calling listNaAuthorizedNodes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'na_id': naId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询北向NA信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNas(listNasRequest?: ListNasRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let offset;
            
            let limit;

            if (listNasRequest !== null && listNasRequest !== undefined) {
                if (listNasRequest instanceof ListNasRequest) {
                    name = listNasRequest.name;
                    offset = listNasRequest.offset;
                    limit = listNasRequest.limit;
                } else {
                    name = listNasRequest['name'];
                    offset = listNasRequest['offset'];
                    limit = listNasRequest['limit'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * 查询北向NA信息详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNa(showNaRequest?: ShowNaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/nas/{na_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let naId;

            if (showNaRequest !== null && showNaRequest !== undefined) {
                if (showNaRequest instanceof ShowNaRequest) {
                    naId = showNaRequest.naId;
                } else {
                    naId = showNaRequest['na_id'];
                }
            }

        
            if (naId === null || naId === undefined) {
            throw new RequiredError('naId','Required parameter naId was null or undefined when calling showNa.');
            }

            options.pathParams = { 'na_id': naId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建&amp;更新北向NA信息，当更新北向NA信息时，会通知到已分配该北向NA的所有边缘节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNa(updateNaRequest?: UpdateNaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/nas/{na_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let naId;

            if (updateNaRequest !== null && updateNaRequest !== undefined) {
                if (updateNaRequest instanceof UpdateNaRequest) {
                    naId = updateNaRequest.naId;
                    body = updateNaRequest.body
                } else {
                    naId = updateNaRequest['na_id'];
                    body = updateNaRequest['body'];
                }
            }

        
            if (naId === null || naId === undefined) {
            throw new RequiredError('naId','Required parameter naId was null or undefined when calling updateNa.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'na_id': naId, };
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