import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionDeviceAlarm } from './model/ActionDeviceAlarm';
import { ActionDeviceCommand } from './model/ActionDeviceCommand';
import { ActionSmnForwarding } from './model/ActionSmnForwarding';
import { AddActionReq } from './model/AddActionReq';
import { AddApplication } from './model/AddApplication';
import { AddApplicationRequest } from './model/AddApplicationRequest';
import { AddApplicationResponse } from './model/AddApplicationResponse';
import { AddBacklogPolicy } from './model/AddBacklogPolicy';
import { AddCertificateRequest } from './model/AddCertificateRequest';
import { AddCertificateResponse } from './model/AddCertificateResponse';
import { AddDevice } from './model/AddDevice';
import { AddDeviceGroupDTO } from './model/AddDeviceGroupDTO';
import { AddDeviceGroupRequest } from './model/AddDeviceGroupRequest';
import { AddDeviceGroupResponse } from './model/AddDeviceGroupResponse';
import { AddDeviceRequest } from './model/AddDeviceRequest';
import { AddDeviceResponse } from './model/AddDeviceResponse';
import { AddFlowControlPolicy } from './model/AddFlowControlPolicy';
import { AddProduct } from './model/AddProduct';
import { AddQueueRequest } from './model/AddQueueRequest';
import { AddQueueResponse } from './model/AddQueueResponse';
import { AddRuleReq } from './model/AddRuleReq';
import { AddTunnelDto } from './model/AddTunnelDto';
import { AddTunnelRequest } from './model/AddTunnelRequest';
import { AddTunnelResponse } from './model/AddTunnelResponse';
import { AmqpForwarding } from './model/AmqpForwarding';
import { ApplicationDTO } from './model/ApplicationDTO';
import { AsyncDeviceCommandRequest } from './model/AsyncDeviceCommandRequest';
import { AuthInfo } from './model/AuthInfo';
import { AuthInfoRes } from './model/AuthInfoRes';
import { AuthInfoWithoutSecret } from './model/AuthInfoWithoutSecret';
import { BacklogPolicyInfo } from './model/BacklogPolicyInfo';
import { BatchShowQueueRequest } from './model/BatchShowQueueRequest';
import { BatchShowQueueResponse } from './model/BatchShowQueueResponse';
import { BatchTargetResult } from './model/BatchTargetResult';
import { BatchTargets } from './model/BatchTargets';
import { BatchTaskFile } from './model/BatchTaskFile';
import { BindTagsDTO } from './model/BindTagsDTO';
import { BroadcastMessageRequest } from './model/BroadcastMessageRequest';
import { BroadcastMessageResponse } from './model/BroadcastMessageResponse';
import { CertificatesRspDTO } from './model/CertificatesRspDTO';
import { ChangeRuleStatusRequest } from './model/ChangeRuleStatusRequest';
import { ChangeRuleStatusResponse } from './model/ChangeRuleStatusResponse';
import { ChannelDetail } from './model/ChannelDetail';
import { CheckCertificateRequest } from './model/CheckCertificateRequest';
import { CheckCertificateResponse } from './model/CheckCertificateResponse';
import { CloseDeviceTunnelRequest } from './model/CloseDeviceTunnelRequest';
import { CloseDeviceTunnelResponse } from './model/CloseDeviceTunnelResponse';
import { Cmd } from './model/Cmd';
import { ColumnMapping } from './model/ColumnMapping';
import { ConditionGroup } from './model/ConditionGroup';
import { ConnectState } from './model/ConnectState';
import { CreateAccessCodeRequest } from './model/CreateAccessCodeRequest';
import { CreateAccessCodeRequestBody } from './model/CreateAccessCodeRequestBody';
import { CreateAccessCodeResponse } from './model/CreateAccessCodeResponse';
import { CreateAsyncCommandRequest } from './model/CreateAsyncCommandRequest';
import { CreateAsyncCommandResponse } from './model/CreateAsyncCommandResponse';
import { CreateBatchTask } from './model/CreateBatchTask';
import { CreateBatchTaskRequest } from './model/CreateBatchTaskRequest';
import { CreateBatchTaskResponse } from './model/CreateBatchTaskResponse';
import { CreateCertificateDTO } from './model/CreateCertificateDTO';
import { CreateCommandRequest } from './model/CreateCommandRequest';
import { CreateCommandResponse } from './model/CreateCommandResponse';
import { CreateMessageRequest } from './model/CreateMessageRequest';
import { CreateMessageResponse } from './model/CreateMessageResponse';
import { CreateOrDeleteDeviceInGroupRequest } from './model/CreateOrDeleteDeviceInGroupRequest';
import { CreateOrDeleteDeviceInGroupResponse } from './model/CreateOrDeleteDeviceInGroupResponse';
import { CreateOtaPackage } from './model/CreateOtaPackage';
import { CreateOtaPackageRequest } from './model/CreateOtaPackageRequest';
import { CreateOtaPackageResponse } from './model/CreateOtaPackageResponse';
import { CreateProductRequest } from './model/CreateProductRequest';
import { CreateProductResponse } from './model/CreateProductResponse';
import { CreateRoutingBacklogPolicyRequest } from './model/CreateRoutingBacklogPolicyRequest';
import { CreateRoutingBacklogPolicyResponse } from './model/CreateRoutingBacklogPolicyResponse';
import { CreateRoutingFlowControlPolicyRequest } from './model/CreateRoutingFlowControlPolicyRequest';
import { CreateRoutingFlowControlPolicyResponse } from './model/CreateRoutingFlowControlPolicyResponse';
import { CreateRoutingRuleRequest } from './model/CreateRoutingRuleRequest';
import { CreateRoutingRuleResponse } from './model/CreateRoutingRuleResponse';
import { CreateRuleActionRequest } from './model/CreateRuleActionRequest';
import { CreateRuleActionResponse } from './model/CreateRuleActionResponse';
import { CreateRuleRequest } from './model/CreateRuleRequest';
import { CreateRuleResponse } from './model/CreateRuleResponse';
import { DailyTimerType } from './model/DailyTimerType';
import { DeleteApplicationRequest } from './model/DeleteApplicationRequest';
import { DeleteApplicationResponse } from './model/DeleteApplicationResponse';
import { DeleteBatchTaskFileRequest } from './model/DeleteBatchTaskFileRequest';
import { DeleteBatchTaskFileResponse } from './model/DeleteBatchTaskFileResponse';
import { DeleteBatchTaskRequest } from './model/DeleteBatchTaskRequest';
import { DeleteBatchTaskResponse } from './model/DeleteBatchTaskResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteDeviceGroupRequest } from './model/DeleteDeviceGroupRequest';
import { DeleteDeviceGroupResponse } from './model/DeleteDeviceGroupResponse';
import { DeleteDeviceRequest } from './model/DeleteDeviceRequest';
import { DeleteDeviceResponse } from './model/DeleteDeviceResponse';
import { DeleteDeviceTunnelRequest } from './model/DeleteDeviceTunnelRequest';
import { DeleteDeviceTunnelResponse } from './model/DeleteDeviceTunnelResponse';
import { DeleteOtaPackageRequest } from './model/DeleteOtaPackageRequest';
import { DeleteOtaPackageResponse } from './model/DeleteOtaPackageResponse';
import { DeleteProductRequest } from './model/DeleteProductRequest';
import { DeleteProductResponse } from './model/DeleteProductResponse';
import { DeleteQueueRequest } from './model/DeleteQueueRequest';
import { DeleteQueueResponse } from './model/DeleteQueueResponse';
import { DeleteRoutingBacklogPolicyRequest } from './model/DeleteRoutingBacklogPolicyRequest';
import { DeleteRoutingBacklogPolicyResponse } from './model/DeleteRoutingBacklogPolicyResponse';
import { DeleteRoutingFlowControlPolicyRequest } from './model/DeleteRoutingFlowControlPolicyRequest';
import { DeleteRoutingFlowControlPolicyResponse } from './model/DeleteRoutingFlowControlPolicyResponse';
import { DeleteRoutingRuleRequest } from './model/DeleteRoutingRuleRequest';
import { DeleteRoutingRuleResponse } from './model/DeleteRoutingRuleResponse';
import { DeleteRuleActionRequest } from './model/DeleteRuleActionRequest';
import { DeleteRuleActionResponse } from './model/DeleteRuleActionResponse';
import { DeleteRuleRequest } from './model/DeleteRuleRequest';
import { DeleteRuleResponse } from './model/DeleteRuleResponse';
import { DeviceBroadcastRequest } from './model/DeviceBroadcastRequest';
import { DeviceCommandRequest } from './model/DeviceCommandRequest';
import { DeviceDataCondition } from './model/DeviceDataCondition';
import { DeviceGroupResponseSummary } from './model/DeviceGroupResponseSummary';
import { DeviceLinkageStatusCondition } from './model/DeviceLinkageStatusCondition';
import { DeviceMessage } from './model/DeviceMessage';
import { DeviceMessageRequest } from './model/DeviceMessageRequest';
import { DevicePropertiesRequest } from './model/DevicePropertiesRequest';
import { DeviceShadowData } from './model/DeviceShadowData';
import { DeviceShadowProperties } from './model/DeviceShadowProperties';
import { DeviceSide } from './model/DeviceSide';
import { DisForwarding } from './model/DisForwarding';
import { DmsKafkaForwarding } from './model/DmsKafkaForwarding';
import { DmsRocketMQForwarding } from './model/DmsRocketMQForwarding';
import { ErrorInfo } from './model/ErrorInfo';
import { ErrorInfoDTO } from './model/ErrorInfoDTO';
import { FileLocation } from './model/FileLocation';
import { FlowControlPolicyInfo } from './model/FlowControlPolicyInfo';
import { FreezeDeviceRequest } from './model/FreezeDeviceRequest';
import { FreezeDeviceResponse } from './model/FreezeDeviceResponse';
import { FunctionGraphForwarding } from './model/FunctionGraphForwarding';
import { HttpForwarding } from './model/HttpForwarding';
import { InfluxDBForwarding } from './model/InfluxDBForwarding';
import { InitialDesired } from './model/InitialDesired';
import { ListBatchTaskFilesRequest } from './model/ListBatchTaskFilesRequest';
import { ListBatchTaskFilesResponse } from './model/ListBatchTaskFilesResponse';
import { ListBatchTasksRequest } from './model/ListBatchTasksRequest';
import { ListBatchTasksResponse } from './model/ListBatchTasksResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListDeviceGroupsRequest } from './model/ListDeviceGroupsRequest';
import { ListDeviceGroupsResponse } from './model/ListDeviceGroupsResponse';
import { ListDeviceMessagesRequest } from './model/ListDeviceMessagesRequest';
import { ListDeviceMessagesResponse } from './model/ListDeviceMessagesResponse';
import { ListDeviceTunnelsRequest } from './model/ListDeviceTunnelsRequest';
import { ListDeviceTunnelsResponse } from './model/ListDeviceTunnelsResponse';
import { ListDevicesRequest } from './model/ListDevicesRequest';
import { ListDevicesResponse } from './model/ListDevicesResponse';
import { ListOtaPackageInfoRequest } from './model/ListOtaPackageInfoRequest';
import { ListOtaPackageInfoResponse } from './model/ListOtaPackageInfoResponse';
import { ListProductsRequest } from './model/ListProductsRequest';
import { ListProductsResponse } from './model/ListProductsResponse';
import { ListPropertiesRequest } from './model/ListPropertiesRequest';
import { ListPropertiesResponse } from './model/ListPropertiesResponse';
import { ListResourcesByTagsRequest } from './model/ListResourcesByTagsRequest';
import { ListResourcesByTagsResponse } from './model/ListResourcesByTagsResponse';
import { ListRoutingBacklogPolicyRequest } from './model/ListRoutingBacklogPolicyRequest';
import { ListRoutingBacklogPolicyResponse } from './model/ListRoutingBacklogPolicyResponse';
import { ListRoutingFlowControlPolicyRequest } from './model/ListRoutingFlowControlPolicyRequest';
import { ListRoutingFlowControlPolicyResponse } from './model/ListRoutingFlowControlPolicyResponse';
import { ListRoutingRulesRequest } from './model/ListRoutingRulesRequest';
import { ListRoutingRulesResponse } from './model/ListRoutingRulesResponse';
import { ListRuleActionsRequest } from './model/ListRuleActionsRequest';
import { ListRuleActionsResponse } from './model/ListRuleActionsResponse';
import { ListRulesRequest } from './model/ListRulesRequest';
import { ListRulesResponse } from './model/ListRulesResponse';
import { MessageResult } from './model/MessageResult';
import { MrsKafkaForwarding } from './model/MrsKafkaForwarding';
import { MysqlForwarding } from './model/MysqlForwarding';
import { NetAddress } from './model/NetAddress';
import { ObsForwarding } from './model/ObsForwarding';
import { ObsLocation } from './model/ObsLocation';
import { OtaPackageInfo } from './model/OtaPackageInfo';
import { Page } from './model/Page';
import { PageInfo } from './model/PageInfo';
import { ProductSummary } from './model/ProductSummary';
import { PropertiesDTO } from './model/PropertiesDTO';
import { PropertyFilter } from './model/PropertyFilter';
import { QueryDeviceSimplify } from './model/QueryDeviceSimplify';
import { QueryQueueBase } from './model/QueryQueueBase';
import { QueryResourceByTagsDTO } from './model/QueryResourceByTagsDTO';
import { QueueInfo } from './model/QueueInfo';
import { ResetDeviceSecret } from './model/ResetDeviceSecret';
import { ResetDeviceSecretRequest } from './model/ResetDeviceSecretRequest';
import { ResetDeviceSecretResponse } from './model/ResetDeviceSecretResponse';
import { ResetFingerprint } from './model/ResetFingerprint';
import { ResetFingerprintRequest } from './model/ResetFingerprintRequest';
import { ResetFingerprintResponse } from './model/ResetFingerprintResponse';
import { ResourceDTO } from './model/ResourceDTO';
import { RetryBatchTaskRequest } from './model/RetryBatchTaskRequest';
import { RetryBatchTaskResponse } from './model/RetryBatchTaskResponse';
import { RomaForwarding } from './model/RomaForwarding';
import { RoutingRule } from './model/RoutingRule';
import { RoutingRuleAction } from './model/RoutingRuleAction';
import { RoutingRuleSubject } from './model/RoutingRuleSubject';
import { Rule } from './model/Rule';
import { RuleAction } from './model/RuleAction';
import { RuleCondition } from './model/RuleCondition';
import { RuleResponse } from './model/RuleResponse';
import { RuleStatus } from './model/RuleStatus';
import { SearchDevice } from './model/SearchDevice';
import { SearchDevicesRequest } from './model/SearchDevicesRequest';
import { SearchDevicesResponse } from './model/SearchDevicesResponse';
import { SearchSql } from './model/SearchSql';
import { ServiceCapability } from './model/ServiceCapability';
import { ServiceCommand } from './model/ServiceCommand';
import { ServiceCommandPara } from './model/ServiceCommandPara';
import { ServiceCommandResponse } from './model/ServiceCommandResponse';
import { ServiceEvent } from './model/ServiceEvent';
import { ServiceProperty } from './model/ServiceProperty';
import { ShowApplicationRequest } from './model/ShowApplicationRequest';
import { ShowApplicationResponse } from './model/ShowApplicationResponse';
import { ShowApplicationsRequest } from './model/ShowApplicationsRequest';
import { ShowApplicationsResponse } from './model/ShowApplicationsResponse';
import { ShowAsyncDeviceCommandRequest } from './model/ShowAsyncDeviceCommandRequest';
import { ShowAsyncDeviceCommandResponse } from './model/ShowAsyncDeviceCommandResponse';
import { ShowBatchTaskRequest } from './model/ShowBatchTaskRequest';
import { ShowBatchTaskResponse } from './model/ShowBatchTaskResponse';
import { ShowDeviceGroupRequest } from './model/ShowDeviceGroupRequest';
import { ShowDeviceGroupResponse } from './model/ShowDeviceGroupResponse';
import { ShowDeviceMessageRequest } from './model/ShowDeviceMessageRequest';
import { ShowDeviceMessageResponse } from './model/ShowDeviceMessageResponse';
import { ShowDeviceRequest } from './model/ShowDeviceRequest';
import { ShowDeviceResponse } from './model/ShowDeviceResponse';
import { ShowDeviceShadowRequest } from './model/ShowDeviceShadowRequest';
import { ShowDeviceShadowResponse } from './model/ShowDeviceShadowResponse';
import { ShowDeviceTunnelRequest } from './model/ShowDeviceTunnelRequest';
import { ShowDeviceTunnelResponse } from './model/ShowDeviceTunnelResponse';
import { ShowDevicesInGroupRequest } from './model/ShowDevicesInGroupRequest';
import { ShowDevicesInGroupResponse } from './model/ShowDevicesInGroupResponse';
import { ShowOtaPackageRequest } from './model/ShowOtaPackageRequest';
import { ShowOtaPackageResponse } from './model/ShowOtaPackageResponse';
import { ShowProductRequest } from './model/ShowProductRequest';
import { ShowProductResponse } from './model/ShowProductResponse';
import { ShowQueueRequest } from './model/ShowQueueRequest';
import { ShowQueueResponse } from './model/ShowQueueResponse';
import { ShowRoutingBacklogPolicyRequest } from './model/ShowRoutingBacklogPolicyRequest';
import { ShowRoutingBacklogPolicyResponse } from './model/ShowRoutingBacklogPolicyResponse';
import { ShowRoutingFlowControlPolicyRequest } from './model/ShowRoutingFlowControlPolicyRequest';
import { ShowRoutingFlowControlPolicyResponse } from './model/ShowRoutingFlowControlPolicyResponse';
import { ShowRoutingRuleRequest } from './model/ShowRoutingRuleRequest';
import { ShowRoutingRuleResponse } from './model/ShowRoutingRuleResponse';
import { ShowRuleActionRequest } from './model/ShowRuleActionRequest';
import { ShowRuleActionResponse } from './model/ShowRuleActionResponse';
import { ShowRuleRequest } from './model/ShowRuleRequest';
import { ShowRuleResponse } from './model/ShowRuleResponse';
import { SimpleTimerType } from './model/SimpleTimerType';
import { SimplifyDevice } from './model/SimplifyDevice';
import { StopBatchTaskRequest } from './model/StopBatchTaskRequest';
import { StopBatchTaskResponse } from './model/StopBatchTaskResponse';
import { Strategy } from './model/Strategy';
import { TagDeviceRequest } from './model/TagDeviceRequest';
import { TagDeviceResponse } from './model/TagDeviceResponse';
import { TagV5DTO } from './model/TagV5DTO';
import { Task } from './model/Task';
import { TaskDetail } from './model/TaskDetail';
import { TaskPolicy } from './model/TaskPolicy';
import { TaskProgress } from './model/TaskProgress';
import { TimeRange } from './model/TimeRange';
import { TunnelInfo } from './model/TunnelInfo';
import { UnbindTagsDTO } from './model/UnbindTagsDTO';
import { UnfreezeDeviceRequest } from './model/UnfreezeDeviceRequest';
import { UnfreezeDeviceResponse } from './model/UnfreezeDeviceResponse';
import { UntagDeviceRequest } from './model/UntagDeviceRequest';
import { UntagDeviceResponse } from './model/UntagDeviceResponse';
import { UpdateActionReq } from './model/UpdateActionReq';
import { UpdateApplicationDTO } from './model/UpdateApplicationDTO';
import { UpdateApplicationRequest } from './model/UpdateApplicationRequest';
import { UpdateApplicationResponse } from './model/UpdateApplicationResponse';
import { UpdateBacklogPolicy } from './model/UpdateBacklogPolicy';
import { UpdateDesired } from './model/UpdateDesired';
import { UpdateDesireds } from './model/UpdateDesireds';
import { UpdateDevice } from './model/UpdateDevice';
import { UpdateDeviceGroupDTO } from './model/UpdateDeviceGroupDTO';
import { UpdateDeviceGroupRequest } from './model/UpdateDeviceGroupRequest';
import { UpdateDeviceGroupResponse } from './model/UpdateDeviceGroupResponse';
import { UpdateDeviceRequest } from './model/UpdateDeviceRequest';
import { UpdateDeviceResponse } from './model/UpdateDeviceResponse';
import { UpdateDeviceShadowDesiredDataRequest } from './model/UpdateDeviceShadowDesiredDataRequest';
import { UpdateDeviceShadowDesiredDataResponse } from './model/UpdateDeviceShadowDesiredDataResponse';
import { UpdateFlowControlPolicy } from './model/UpdateFlowControlPolicy';
import { UpdateProduct } from './model/UpdateProduct';
import { UpdateProductRequest } from './model/UpdateProductRequest';
import { UpdateProductResponse } from './model/UpdateProductResponse';
import { UpdatePropertiesRequest } from './model/UpdatePropertiesRequest';
import { UpdatePropertiesResponse } from './model/UpdatePropertiesResponse';
import { UpdateRoutingBacklogPolicyRequest } from './model/UpdateRoutingBacklogPolicyRequest';
import { UpdateRoutingBacklogPolicyResponse } from './model/UpdateRoutingBacklogPolicyResponse';
import { UpdateRoutingFlowControlPolicyRequest } from './model/UpdateRoutingFlowControlPolicyRequest';
import { UpdateRoutingFlowControlPolicyResponse } from './model/UpdateRoutingFlowControlPolicyResponse';
import { UpdateRoutingRuleRequest } from './model/UpdateRoutingRuleRequest';
import { UpdateRoutingRuleResponse } from './model/UpdateRoutingRuleResponse';
import { UpdateRuleActionRequest } from './model/UpdateRuleActionRequest';
import { UpdateRuleActionResponse } from './model/UpdateRuleActionResponse';
import { UpdateRuleReq } from './model/UpdateRuleReq';
import { UpdateRuleRequest } from './model/UpdateRuleRequest';
import { UpdateRuleResponse } from './model/UpdateRuleResponse';
import { UserPropDTO } from './model/UserPropDTO';
import { VerifyCertificateDTO } from './model/VerifyCertificateDTO';

export class IoTDAClient {
    public static newBuilder(): ClientBuilder<IoTDAClient> {
            return new ClientBuilder<IoTDAClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 接入凭证是用于客户端使用AMQP等协议与平台建链的一个认证凭据。只保留一条记录，如果重复调用只会重置接入凭证，使得之前的失效。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成接入凭证
     * @param {CreateAccessCodeRequestBody} createAccessCodeRequestBody 生成接入凭证的请求结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessCode(createAccessCodeRequest?: CreateAccessCodeRequest): Promise<CreateAccessCodeResponse> {
        const options = ParamCreater().createAccessCode(createAccessCodeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建一个AMQP队列。每个租户只能创建100个队列，若超过规格，则创建失败，若队列名称与已有的队列名称相同，则创建失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建AMQP队列
     * @param {QueueInfo} addQueueReQuestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addQueue(addQueueRequest?: AddQueueRequest): Promise<AddQueueResponse> {
        const options = ParamCreater().addQueue(addQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中的AMQP队列信息列表。可通过队列名称作模糊查询，支持分页。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询AMQP列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [queueName] **参数说明**：amqp队列名称，支持模糊查询，为空查询所有的队列（当前规格单个用户最大100个队列）。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）、间隔号（.）、冒号（:）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowQueue(batchShowQueueRequest?: BatchShowQueueRequest): Promise<BatchShowQueueResponse> {
        const options = ParamCreater().batchShowQueue(batchShowQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台上删除指定AMQP队列。若当前队列正在使用，则会删除失败。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除AMQP队列
     * @param {string} queueId **参数说明**：队列ID，用于唯一标识一个队列。 **取值范围**：长度36位，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueue(deleteQueueRequest?: DeleteQueueRequest): Promise<DeleteQueueResponse> {
        const options = ParamCreater().deleteQueue(deleteQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定队列的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个AMQP队列
     * @param {string} queueId **参数说明**：队列ID，用于唯一标识一个队列。 **取值范围**：长度36位，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQueue(showQueueRequest?: ShowQueueRequest): Promise<ShowQueueResponse> {
        const options = ParamCreater().showQueue(showQueueRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口创建资源空间。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源空间
     * @param {AddApplication} addApplicationRequestBody 创建资源空间所携带的结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addApplication(addApplicationRequest?: AddApplicationRequest): Promise<AddApplicationResponse> {
        const options = ParamCreater().addApplication(addApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定资源空间。删除资源空间属于高危操作，删除资源空间后，该空间下的产品、设备等资源将不可用，请谨慎操作！
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源空间
     * @param {string} appId **参数说明**：资源空间ID，唯一标识一个资源空间，由物联网平台在创建资源空间时分配。资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest): Promise<DeleteApplicationResponse> {
        const options = ParamCreater().deleteApplication(deleteApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口查询指定资源空间详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源空间
     * @param {string} appId **参数说明**：资源空间ID，唯一标识一个资源空间，由物联网平台在创建资源空间时分配。资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplication(showApplicationRequest?: ShowApplicationRequest): Promise<ShowApplicationResponse> {
        const options = ParamCreater().showApplication(showApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口查询资源空间列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源空间列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {boolean} [defaultApp] **参数说明**：默认资源空间标识，不携带则查询所有资源空间。 **取值范围**： - true：查询默认资源空间。 - false：查询非默认资源空间。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplications(showApplicationsRequest?: ShowApplicationsRequest): Promise<ShowApplicationsResponse> {
        const options = ParamCreater().showApplications(showApplicationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可以调用此接口更新资源空间的名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源空间
     * @param {string} appId **参数说明**：资源空间ID，唯一标识一个资源空间，由物联网平台在创建资源空间时分配。资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateApplicationDTO} updateApplicationRequestBody 更新资源空间信息所携带的结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApplication(updateApplicationRequest?: UpdateApplicationRequest): Promise<UpdateApplicationResponse> {
        const options = ParamCreater().updateApplication(updateApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发异步命令，以实现对设备的控制。平台负责将命令发送给设备，并将设备执行命令结果异步通知应用服务器。 命令执行结果支持灵活的数据流转，应用服务器通过调用物联网平台的创建规则触发条件（Resource:device.command.status，Event:update）、创建规则动作并激活规则后，当命令状态变更时，物联网平台会根据规则将结果发送到规则指定的服务器，如用户自定义的HTTP服务器，AMQP服务器，以及华为云的其他储存服务器等, 详情参考[[设备命令状态变更通知](https://support.huaweicloud.com/api-iothub/iot_06_v5_01212.html)](tag:hws)[[设备命令状态变更通知](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_01212.html)](tag:hws_hk)。
     * 注意：
     * - 此接口适用于NB设备异步命令下发，暂不支持其他协议类型设备命令下发。
     * - 此接口仅支持单个设备异步命令下发，如需多个设备异步命令下发，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发异步设备命令
     * @param {string} deviceId **参数说明**：下发命令的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {AsyncDeviceCommandRequest} createAsyncCommandRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAsyncCommand(createAsyncCommandRequest?: CreateAsyncCommandRequest): Promise<CreateAsyncCommandResponse> {
        const options = ParamCreater().createAsyncCommand(createAsyncCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 物联网平台可查询指定id的命令。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定id的命令
     * @param {string} deviceId **参数说明**：下发命令的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} commandId **参数说明**：下发命令的命令id，用于唯一标识一个消息，在下发命令时由物联网平台分配获得。 **取值范围**：长度不超过100，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAsyncDeviceCommand(showAsyncDeviceCommandRequest?: ShowAsyncDeviceCommandRequest): Promise<ShowAsyncDeviceCommandResponse> {
        const options = ParamCreater().showAsyncDeviceCommand(showAsyncDeviceCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建数据流转积压策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建数据流转积压策略
     * @param {AddBacklogPolicy} createRoutingBacklogPolicyRequestBody **参数说明**：请求的body对象，详细请看新增数据流转积压策略请求结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRoutingBacklogPolicy(createRoutingBacklogPolicyRequest?: CreateRoutingBacklogPolicyRequest): Promise<CreateRoutingBacklogPolicyResponse> {
        const options = ParamCreater().createRoutingBacklogPolicy(createRoutingBacklogPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台删除指定数据流转积压策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据流转积压策略
     * @param {string} policyId **参数说明**：数据流转积压策略id，用于唯一标识一个数据流转积压策略，在创建数据流转积压策略时由物联网平台分配获得。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRoutingBacklogPolicy(deleteRoutingBacklogPolicyRequest?: DeleteRoutingBacklogPolicyRequest): Promise<DeleteRoutingBacklogPolicyResponse> {
        const options = ParamCreater().deleteRoutingBacklogPolicy(deleteRoutingBacklogPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询在物联网平台设置的数据流转积压策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据流转积压策略列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [policyName] **参数说明**：数据流转积压策略名称。 **取值范围**：长度不超过256，只允许中文、字母、数字、以及_?\&#39;#().,&amp;%@!-等字符的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。默认每页10条记录，最大设定每页50条记录。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRoutingBacklogPolicy(listRoutingBacklogPolicyRequest?: ListRoutingBacklogPolicyRequest): Promise<ListRoutingBacklogPolicyResponse> {
        const options = ParamCreater().listRoutingBacklogPolicy(listRoutingBacklogPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台查询指定数据流转积压策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据流转积压策略
     * @param {string} policyId **参数说明**：数据流转积压策略id，用于唯一标识一个数据流转积压策略，在创建数据流转积压策略时由物联网平台分配获得。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRoutingBacklogPolicy(showRoutingBacklogPolicyRequest?: ShowRoutingBacklogPolicyRequest): Promise<ShowRoutingBacklogPolicyResponse> {
        const options = ParamCreater().showRoutingBacklogPolicy(showRoutingBacklogPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台修改指定数据流转积压策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据流转积压策略
     * @param {string} policyId **参数说明**：数据流转积压策略id，用于唯一标识一个数据流转积压策略，在创建数据流转积压策略时由物联网平台分配获得。
     * @param {UpdateBacklogPolicy} updateRoutingBacklogPolicyRequestBody **参数说明**：请求的body对象，详细请看数据流转积压策略更新结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRoutingBacklogPolicy(updateRoutingBacklogPolicyRequest?: UpdateRoutingBacklogPolicyRequest): Promise<UpdateRoutingBacklogPolicyResponse> {
        const options = ParamCreater().updateRoutingBacklogPolicy(updateRoutingBacklogPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为创建批量处理任务，对多个设备进行批量操作。当前支持批量软固件升级、批量创建设备、批量删除设备、批量冻结设备、批量解冻设备、批量创建命令、批量创建消息任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建批量任务
     * @param {CreateBatchTask} createBatchTaskRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBatchTask(createBatchTaskRequest?: CreateBatchTaskRequest): Promise<CreateBatchTaskResponse> {
        const options = ParamCreater().createBatchTask(createBatchTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除物联网平台中已经完成（状态为成功，失败，部分成功，已停止）的批量任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除批量任务
     * @param {string} taskId **参数说明**：批量任务ID，创建批量任务时由物联网平台分配获得。 **取值范围**：长度不超过24，只允许小写字母a到f、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBatchTask(deleteBatchTaskRequest?: DeleteBatchTaskRequest): Promise<DeleteBatchTaskResponse> {
        const options = ParamCreater().deleteBatchTask(deleteBatchTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中批量任务列表，每一个任务又包括具体的任务内容、任务状态、任务完成情况统计等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量任务列表
     * @param {string} taskType **参数说明**：批量任务类型。 **取值范围**： - softwareUpgrade: 软件升级任务 - firmwareUpgrade: 固件升级任务 - createDevices: 批量创建设备任务 - deleteDevices: 批量删除设备任务 - freezeDevices: 批量冻结设备任务 - unfreezeDevices: 批量解冻设备任务 - createCommands: 批量创建同步命令任务 - createAsyncCommands: 批量创建异步命令任务 - createMessages: 批量创建消息任务 - updateDeviceShadows：批量配置设备影子任务 - updateDevices：批量更新设备任务
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的任务列表，不携带该参数则会查询该用户下所有任务列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [status] **参数说明**：批量任务的状态，可选参数。 **取值范围**： - Initializing: 初始化中。 - Waitting: 等待中。 - Processing: 执行中。 - Success: 成功。 - Fail: 失败。 - PartialSuccess: 部分成功。 - Stopped: 停止。 - Stopping: 停止中。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。  **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBatchTasks(listBatchTasksRequest?: ListBatchTasksRequest): Promise<ListBatchTasksResponse> {
        const options = ParamCreater().listBatchTasks(listBatchTasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口重试批量任务，目前只支持task_type为firmwareUpgrade，softwareUpgrade。如果task_id对应任务已经成功、停止、正在停止、等待中或初始化中，则不可以调用该接口。如果请求Body为{}，则调用该接口后会重新执行所有状态为失败、失败待重试和已停止的子任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重试批量任务
     * @param {string} taskId **参数说明**：批量任务ID，创建批量任务时由物联网平台分配获得。 **取值范围**：长度不超过24，只允许小写字母a到f、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {BatchTargets} [retryBatchTaskRequestBody] request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public retryBatchTask(retryBatchTaskRequest?: RetryBatchTaskRequest): Promise<RetryBatchTaskResponse> {
        const options = ParamCreater().retryBatchTask(retryBatchTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定批量任务的信息，包括任务内容、任务状态、任务完成情况统计以及子任务列表等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量任务
     * @param {string} taskId **参数说明**：批量任务ID，创建批量任务时由物联网平台分配获得。 **取值范围**：长度不超过24，只允许小写字母a到f、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [taskDetailStatus] **参数说明**：子任务的执行状态，可选参数。 **取值范围**： - Success: 成功。 - Fail: 失败。 - Processing: 执行中。 - FailWaitRetry: 失败重试。 - Stopped: 已停止。 - Waitting: 等待执行。 - Removed: 已移除。
     * @param {string} [target] **参数说明**：执行批量任务的目标，当task_type为firmwareUpgrade，softwareUpgrade，deleteDevices，freezeDevices，unfreezeDevices，createCommands，createAsyncCommands，createMessages，updateDeviceShadows，此处填写device_id **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。  **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchTask(showBatchTaskRequest?: ShowBatchTaskRequest): Promise<ShowBatchTaskResponse> {
        const options = ParamCreater().showBatchTask(showBatchTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口停止批量任务，目前只支持task_type为firmwareUpgrade，softwareUpgrade。如果task_id对应任务已经完成（成功、失败、部分成功，已经停止）或正在停止中，则不可以调用该接口。如果请求Body为{}，则调用该接口后会停止所有正在执行中、等待中和失败待重试状态的子任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止批量任务
     * @param {string} taskId **参数说明**：批量任务ID，创建批量任务时由物联网平台分配获得。 **取值范围**：长度不超过24，只允许小写字母a到f、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {BatchTargets} [stopBatchTaskRequestBody] request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopBatchTask(stopBatchTaskRequest?: StopBatchTaskRequest): Promise<StopBatchTaskResponse> {
        const options = ParamCreater().stopBatchTask(stopBatchTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除批量任务文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除批量任务文件
     * @param {string} fileId **参数说明**：要删除的批量任务文件ID。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBatchTaskFile(deleteBatchTaskFileRequest?: DeleteBatchTaskFileRequest): Promise<DeleteBatchTaskFileResponse> {
        const options = ParamCreater().deleteBatchTaskFile(deleteBatchTaskFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询批量任务文件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量任务文件列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBatchTaskFiles(listBatchTaskFilesRequest?: ListBatchTaskFilesRequest): Promise<ListBatchTaskFilesResponse> {
        const options = ParamCreater().listBatchTaskFiles(listBatchTaskFilesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口向订阅了指定Topic的所有在线设备发布广播消息。应用将广播消息下发给平台后，平台会先返回应用响应结果，再将消息广播给设备。
     * 注意：
     * - 此接口只适用于使用MQTT协议接入的设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发广播消息
     * @param {DeviceBroadcastRequest} broadcastMessageRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public broadcastMessage(broadcastMessageRequest?: BroadcastMessageRequest): Promise<BroadcastMessageResponse> {
        const options = ParamCreater().broadcastMessage(broadcastMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台上传设备CA证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传设备CA证书
     * @param {CreateCertificateDTO} addCertificateRequestBody request
     * @param {string} [spAuthToken] Sp用户Token。通过调用IoBPS服务获取SP用户Token
     * @param {string} [stageAuthToken] Stage用户的Token, 仅提供给IoStage服务使用
     * @param {string} [instanceId] 实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCertificate(addCertificateRequest?: AddCertificateRequest): Promise<AddCertificateResponse> {
        const options = ParamCreater().addCertificate(addCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台验证设备的CA证书，目的是为了验证用户持有设备CA证书的私钥
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 验证设备CA证书
     * @param {string} certificateId 设备CA证书ID，在上传设备CA证书时由平台分配的唯一标识。
     * @param {string} actionId 对证书执行的操作，当前仅支持verify:校验证书
     * @param {VerifyCertificateDTO} checkCertificateRequestBody certificate
     * @param {string} [spAuthToken] Sp用户Token。通过调用IoBPS服务获取SP用户Token
     * @param {string} [stageAuthToken] Stage用户的Token, 仅提供给IoStage服务使用
     * @param {string} [instanceId] 实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkCertificate(checkCertificateRequest?: CheckCertificateRequest): Promise<CheckCertificateResponse> {
        const options = ParamCreater().checkCertificate(checkCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台删除设备CA证书
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除设备CA证书
     * @param {string} certificateId 设备CA证书ID，在上传设备CA证书时由平台分配的唯一标识。
     * @param {string} [spAuthToken] Sp用户Token。通过调用IoBPS服务获取SP用户Token
     * @param {string} [stageAuthToken] Stage用户的Token, 仅提供给IoStage服务使用
     * @param {string} [instanceId] 实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
        const options = ParamCreater().deleteCertificate(deleteCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台获取设备CA证书列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取设备CA证书列表
     * @param {string} [spAuthToken] Sp用户Token。通过调用IoBPS服务获取SP用户Token
     * @param {string} [stageAuthToken] Stage用户的Token, 仅提供给IoStage服务使用
     * @param {string} [instanceId] 实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [appId] 资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的证书列表，不携带该参数则会查询该用户下所有证书列表。
     * @param {number} [limit] 分页查询时每页显示的记录数，默认值为10，取值范围为1-50的整数。
     * @param {string} [marker] 上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。
     * @param {number} [offset] 表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificates(listCertificatesRequest?: ListCertificatesRequest): Promise<ListCertificatesResponse> {
        const options = ParamCreater().listCertificates(listCertificatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发命令，以实现对设备的同步控制。平台负责将命令以同步方式发送给设备，并将设备执行命令结果同步返回, 如果设备没有响应，平台会返回给应用服务器超时，平台超时时间是20秒。如果命令下发需要超过20秒，建议采用[[消息下发](https://support.huaweicloud.com/api-iothub/iot_06_v5_0059.html)](tag:hws)[[消息下发](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0059.html)](tag:hws_hk)。
     * 注意：
     * - 此接口适用于MQTT设备同步命令下发，暂不支持NB-IoT设备命令下发。
     * - 此接口仅支持单个设备同步命令下发，如需多个设备同步命令下发，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发设备命令
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {DeviceCommandRequest} createCommandRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCommand(createCommandRequest?: CreateCommandRequest): Promise<CreateCommandResponse> {
        const options = ParamCreater().createCommand(createCommandRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口新建设备组，一个华为云账号下最多可有1,000个设备组，包括父设备组和子设备组。设备组的最大层级关系不超过5层，即群组形成的关系树最大深度不超过5。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加设备组
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {AddDeviceGroupDTO} [addDeviceGroupRequestBody] **参数说明**：请求结构体，见请求结构体说明。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDeviceGroup(addDeviceGroupRequest?: AddDeviceGroupRequest): Promise<AddDeviceGroupResponse> {
        const options = ParamCreater().addDeviceGroup(addDeviceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口管理设备组中的设备。单个设备组内最多添加20,000个设备，一个设备最多可以被添加到10个设备组中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 管理设备组中的设备
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合
     * @param {string} actionId **参数说明**：操作类型，支持添加设备和删除设备。 **取值范围**： - addDevice: 添加设备。添加已注册的设备到指定的设备组中。 - removeDevice: 删除设备。从指定的设备组中删除设备，只是解除了设备和设备组的关系，该设备在平台仍然存在。
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrDeleteDeviceInGroup(createOrDeleteDeviceInGroupRequest?: CreateOrDeleteDeviceInGroupRequest): Promise<CreateOrDeleteDeviceInGroupResponse> {
        const options = ParamCreater().createOrDeleteDeviceInGroup(createOrDeleteDeviceInGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除指定设备组，如果该设备组存在子设备组或者该设备组中存在设备，必须先删除子设备组并将设备从该设备组移除，才能删除该设备组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除设备组
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeviceGroup(deleteDeviceGroupRequest?: DeleteDeviceGroupRequest): Promise<DeleteDeviceGroupResponse> {
        const options = ParamCreater().deleteDeviceGroup(deleteDeviceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中的设备组信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备组列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {string} [lastModifiedTime] **参数说明**：查询设备组在last_modified_time之后修改的记录。 **取值范围**：格式为yyyyMMdd\&#39;T\&#39;HHmmss\&#39;Z\&#39;，如20151212T121212Z。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的产品列表，不携带该参数则会查询该用户下所有产品列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [groupType] **参数说明**：设备组类型，默认为静态设备组；当设备组类型为动态设备组时，需要填写动态设备组规则
     * @param {string} [name] **参数说明**：设备组名称，单个资源空间下不可重复。 **取值范围**：长度不超过64，只允许中文、字母、数字、以及_? \&#39;#().,&amp;%@!-等字符的组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeviceGroups(listDeviceGroupsRequest?: ListDeviceGroupsRequest): Promise<ListDeviceGroupsResponse> {
        const options = ParamCreater().listDeviceGroups(listDeviceGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询指定设备组详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备组
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceGroup(showDeviceGroupRequest?: ShowDeviceGroupRequest): Promise<ShowDeviceGroupResponse> {
        const options = ParamCreater().showDeviceGroup(showDeviceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询指定设备组下的设备列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备组设备列表
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDevicesInGroup(showDevicesInGroupRequest?: ShowDevicesInGroupRequest): Promise<ShowDevicesInGroupResponse> {
        const options = ParamCreater().showDevicesInGroup(showDevicesInGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改物联网平台中指定设备组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改设备组
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {UpdateDeviceGroupDTO} updateDeviceGroupRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDeviceGroup(updateDeviceGroupRequest?: UpdateDeviceGroupRequest): Promise<UpdateDeviceGroupResponse> {
        const options = ParamCreater().updateDeviceGroup(updateDeviceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建一个设备，仅在创建后设备才可以接入物联网平台。
     * 
     * - 该接口支持使用gateway_id参数指定在父设备下创建一个子设备，并且支持多级子设备，当前最大支持二级子设备。
     * - 该接口同时还支持对设备进行初始配置，接口会读取创建设备请求参数product_id对应的产品详情，如果产品的属性有定义默认值，则会将该属性默认值写入该设备的设备影子中。
     * - 用户还可以使用创建设备请求参数shadow字段为设备指定初始配置，指定后将会根据service_id和desired设置的属性值与产品中对应属性的默认值比对，如果不同，则将以shadow字段中设置的属性值为准写入到设备影子中。
     * - 该接口仅支持创建单个设备，如需批量注册设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建设备
     * @param {AddDevice} addDeviceRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
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
     * 应用服务器可调用此接口在物联网平台上删除指定设备。若设备下连接了非直连设备，则必须把设备下的非直连设备都删除后，才能删除该设备。该接口仅支持删除单个设备，如需批量删除设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
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
     * 应用服务器可调用此接口冻结设备，设备冻结后不能再连接上线，可以通过解冻设备接口解除设备冻结。注意，当前仅支持冻结与平台直连的设备。该接口仅支持冻结单个设备，如需批量冻结设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 冻结设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public freezeDevice(freezeDeviceRequest?: FreezeDeviceRequest): Promise<FreezeDeviceResponse> {
        const options = ParamCreater().freezeDevice(freezeDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中的设备信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {string} [productId] **参数说明**：设备关联的产品ID，用于唯一标识一个产品模型，创建产品后获得。方法请参见 [[创建产品](https://support.huaweicloud.com/api-iothub/iot_06_v5_0050.html)](tag:hws)[[创建产品](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0050.html)](tag:hws_hk)。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [gatewayId] **参数说明**：网关ID，用于标识设备所属的父设备，即父设备的设备ID。携带该参数时，表示查询该设备下的子设备，默认查询下一级子设备，如果需要查询该设备下所有各级子设备，请同时携带is_cascade_query参数为true；不携带该参数时，表示查询用户下所有设备。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {boolean} [isCascadeQuery] **参数说明**：是否级联查询，该参数仅在同时携带gateway_id时生效。默认值为false。 **取值范围**： - true：表示查询设备ID等于gateway_id参数的设备下的所有各级子设备。 - false：表示查询设备ID等于gateway_id参数的设备下的一级子设备。
     * @param {string} [nodeId] **参数说明**：设备标识码，通常使用IMEI、MAC地址或Serial No作为node_id。 **取值范围**：长度不超过64，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [deviceName] **参数说明**：设备名称。 **取值范围**：长度不超过256，只允许中文、字母、数字、以及_?\&#39;#().,&amp;%@!-等字符的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {string} [startTime] **参数说明**：查询设备注册时间在startTime之后的记录，格式：yyyyMMdd\&#39;T\&#39;HHmmss\&#39;Z\&#39;，如20151212T121212Z。
     * @param {string} [endTime] **参数说明**：查询设备注册时间在endTime之前的记录，格式：yyyyMMdd\&#39;T\&#39;HHmmss\&#39;Z\&#39;，如20151212T121212Z。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的设备列表，不携带该参数则会查询该用户下所有设备列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
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
     * 应用服务器可调用此接口重置设备密钥，携带指定密钥时平台将设备密钥重置为指定的密钥，不携带密钥时平台将自动生成一个新的随机密钥返回。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置设备密钥
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} actionId **参数说明**：对设备执行的操作。 **取值范围**： - resetSecret: 重置密钥。注意：NB设备密钥由于协议特殊性，只支持十六进制密钥接入。
     * @param {ResetDeviceSecret} resetDeviceSecretRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetDeviceSecret(resetDeviceSecretRequest?: ResetDeviceSecretRequest): Promise<ResetDeviceSecretResponse> {
        const options = ParamCreater().resetDeviceSecret(resetDeviceSecretRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口重置设备指纹。携带指定设备指纹时将之重置为指定值；不携带时将之置空，后续设备第一次接入时，该设备指纹的值将设置为第一次接入时的证书指纹。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重置设备指纹
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {ResetFingerprint} resetFingerprintRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetFingerprint(resetFingerprintRequest?: ResetFingerprintRequest): Promise<ResetFingerprintResponse> {
        const options = ParamCreater().resetFingerprint(resetFingerprintRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * #### 接口说明
     * 
     * 应用服务器使用SQL语句调用该接口，灵活的搜索所需要的设备资源列表
     * 
     * #### 限制
     * 
     * - 仅**标准版实例、企业版实例**支持该接口调用，基础版不支持。
     * - 单账号调用该接口的 TPS 限制最大为1/S(每秒1次请求数)
     * 
     * #### 类SQL语法使用说明
     * 
     * 类SQL语句有select、from、where(可选)、order by(可选)、limit子句(可选)组成，长度限制为400个字符。子句里的内容大小写敏感，SQL语句的关键字大小写不敏感。
     * 
     * 示例：
     * 
     * &#x60;&#x60;&#x60;
     * select * from device where device_id &#x3D; \&#39;as********\&#39; limit 0,5
     * &#x60;&#x60;&#x60;
     * 
     * ##### SELECT子句
     * 
     * &#x60;&#x60;&#x60;
     * select [field]/[count(*)/count(1)] from device
     * &#x60;&#x60;&#x60;
     * 
     * 其中field为需要获取的字段，请参考响应参数字段名称，也可填*，获取所有字段。
     * 
     * 如果需要统计搜索的设备个数，请填count(*)或者count(1).
     * 
     * ##### FROM子句
     * 
     * &#x60;&#x60;&#x60;
     * from device
     * &#x60;&#x60;&#x60;
     * 
     * from后为要查询的资源名，当前支持\&quot;device\&quot;
     * 
     * ##### WHERE子句(可选)
     * 
     * &#x60;&#x60;&#x60;
     * WHERE [condition1] AND [condition2]
     * &#x60;&#x60;&#x60;
     * 
     * 最多支持5个condition，不支持嵌套；支持的检索字段请参见下面的**搜索条件字段说明**和**支持的运算符**章节
     * 
     * 连接词支持AND、OR，优先级参考标准SQL语法，默认AND优先级高于OR。
     * 
     * ##### LIMIT子句(可选)
     * 
     * &#x60;&#x60;&#x60;
     * limit [offset,] rows
     * &#x60;&#x60;&#x60;
     * 
     * offset标识搜索的偏移量，rows标识返回搜索结果的最大行数，例如：
     * 
     * - limit n ;示例(select * from device limit 10)
     * 
     *   最大返回n条结果数据
     *   
     * - limit m,n; 示例(select * from device limit 20,10) 
     *   搜索偏移量为m，最大返回n条结果数据
     * 
     * ###### 限制
     * 
     *  offset 最大 500， rows最大50，如果不填写limit子句，默认为limit 10
     * 
     * ##### ORDER BY子句(可选)
     * 
     * 用于实现自定义排序，当前支持自定义排序的字段为：\&quot;marker\&quot;。
     * 
     * &#x60;&#x60;&#x60;
     * order by marker [asc]/[desc]
     * &#x60;&#x60;&#x60;
     * 
     * 子句不填写时默认逻辑为随机排序
     * 
     * #### 搜索条件字段说明
     * 
     * | 字段名      | 类型   | 说明             | 取值范围                                                     |
     * | :---------- | :----- | :--------------- | :----------------------------------------------------------- |
     * | app_id      | string | 资源空间ID       | 长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
     * | device_id   | string | 设备ID           | 长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
     * | gateway_id  | string | 网关ID           | 长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
     * | product_id  | string | 设备关联的产品ID | 长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
     * | device_name | string | 设备名称         | 长度不超过256，只允许中文、字母、数字、以及_?\&#39;#().,&amp;%@!-等字符的组合符。 |
     * | node_id     | string | 设备标识码       | 长度不超过64，只允许字母、数字、下划线（_）、连接符（-）的组合 |
     * | status      | string | 设备的状态       | ONLINE(在线)、OFFLINE(离线)、ABNORMAL(异常)、INACTIVE(未激活)、FROZEN(冻结) |
     * | node_type   | string | 设备节点类型     | GATEWAY(直连设备或网关)、ENDPOINT(非直连设备)                |
     * | tag_key     | string | 标签键           | 长度不超过64，只允许中文、字母、数字、以及_.-等字符的组合。  |
     * | tag_value   | string | 标签值           | 长度不超过128，只允许中文、字母、数字、以及_.-等字符的组合。 |
     * | sw_version  | string | 软件版本         | 长度不超过64，只允许字母、数字、下划线（_）、连接符（-）、英文点(.)的组合。 |
     * | fw_version  | string | 固件版本         | 长度不超过64，只允许字母、数字、下划线（_）、连接符（-）、英文点(.)的组合。 |
     * | group_id    | string | 群组Id           | 长度不超过36，十六进制字符串和连接符（-）的组合              |
     * | create_time | string | 设备注册时间     | 格式：yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSS\&#39;Z\&#39;，如：2015-06-06T12:10:10.000Z |
     * | marker      | string | 结果记录ID       | 长度为24的十六进制字符串，如ffffffffffffffffffffffff         |
     * 
     * #### 支持的运算符
     * 
     * | 运算符  | 支持的字段                               |
     * | ------- | ---------------------------------------- |
     * | &#x3D;       | 所有                                     |
     * | !&#x3D;      | 所有                                     |
     * | &gt;       | create_time、marker                      |
     * | &lt;       | create_time、marker                      |
     * | like    | device_name、node_id、tag_key、tag_value |
     * | in      | 除tag_key、tag_value以外字段             |
     * | not  in | 除tag_key、tag_value以外字段             |
     * 
     * #### SQL 限制
     * 
     * - like: 只支持前缀匹配，不支持后缀匹配或者通配符匹配。前缀匹配不得少于4个字符，且不能包含任何特殊字符(只允许中文、字母、数字、下划线（_）、连接符（-）). 前缀后必须跟上\&quot;%\&quot;结尾。
     * - 不支持除了count(*)/count(1)以外的其他任何函数。
     * - 不支持其他SQL用法，如嵌套SQL、union、join、别名(Alias)等用法
     * - SQL长度限制为400个字符，单个请求条件最大支持5个。
     * - 不支持\&quot;null\&quot;和空字符串等条件值匹配
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 灵活搜索设备列表
     * @param {SearchSql} searchDevicesRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchDevices(searchDevicesRequest?: SearchDevicesRequest): Promise<SearchDevicesResponse> {
        const options = ParamCreater().searchDevices(searchDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定设备的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDevice(showDeviceRequest?: ShowDeviceRequest): Promise<ShowDeviceResponse> {
        const options = ParamCreater().showDevice(showDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口解冻设备，解除冻结后，设备可以连接上线。该接口仅支持解冻单个设备，如需批量解冻设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解冻设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unfreezeDevice(unfreezeDeviceRequest?: UnfreezeDeviceRequest): Promise<UnfreezeDeviceResponse> {
        const options = ParamCreater().unfreezeDevice(unfreezeDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改物联网平台中指定设备的基本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateDevice} updateDeviceRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
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
     * 应用服务器可调用此接口查询指定设备的设备影子信息，包括对设备的期望属性信息（desired区）和设备最新上报的属性信息（reported区）。
     * 
     * 设备影子介绍：
     * 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。
     * - 每个设备有且只有一个设备影子，由设备ID唯一标识
     * - 设备影子用于存储设备上报的(状态)属性和应用程序期望的设备(状态)属性
     * - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性
     * - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发
     * 
     * 限制：
     * 设备影子JSON文档中的key不允许特殊字符：点(.)、dollar符号($)、空char(十六进制的ASCII码为00)。如果包含了以上特殊字符则无法正常刷新影子文档。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备影子数据
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceShadow(showDeviceShadowRequest?: ShowDeviceShadowRequest): Promise<ShowDeviceShadowResponse> {
        const options = ParamCreater().showDeviceShadow(showDeviceShadowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口配置设备影子的预期属性（desired区），当设备上线或者设备上报属性时把属性下发给设备。
     * 
     * 设备影子介绍：
     * 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。
     * - 每个设备有且只有一个设备影子，由设备ID唯一标识
     * - 设备影子用于存储设备上报的(状态)属性和应用程序期望的设备(状态)属性
     * - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性
     * - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发
     * - 该接口仅支持配置单个设备的设备影子的预期数据，如需多个设备的设备影子配置，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * 限制：
     * 设备影子JSON文档中的key不允许特殊字符：点(.)、dollar符号($)、空char(十六进制的ASCII码为00)。如果包含了以上特殊字符则无法正常刷新影子文档。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置设备影子预期数据
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateDesireds} updateDeviceShadowDesiredDataRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDeviceShadowDesiredData(updateDeviceShadowDesiredDataRequest?: UpdateDeviceShadowDesiredDataRequest): Promise<UpdateDeviceShadowDesiredDataResponse> {
        const options = ParamCreater().updateDeviceShadowDesiredData(updateDeviceShadowDesiredDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建数据流转流控策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建数据流转流控策略
     * @param {AddFlowControlPolicy} createRoutingFlowControlPolicyRequestBody **参数说明**：请求的body对象，详细请看新增数据流转流控策略请求结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRoutingFlowControlPolicy(createRoutingFlowControlPolicyRequest?: CreateRoutingFlowControlPolicyRequest): Promise<CreateRoutingFlowControlPolicyResponse> {
        const options = ParamCreater().createRoutingFlowControlPolicy(createRoutingFlowControlPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台删除指定数据流转流控策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据流转流控策略
     * @param {string} policyId **参数说明**：数据流转流控策略id，用于唯一标识一个数据流转流控策略，在创建数据流转流控策略时由物联网平台分配获得。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRoutingFlowControlPolicy(deleteRoutingFlowControlPolicyRequest?: DeleteRoutingFlowControlPolicyRequest): Promise<DeleteRoutingFlowControlPolicyResponse> {
        const options = ParamCreater().deleteRoutingFlowControlPolicy(deleteRoutingFlowControlPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询在物联网平台设置的数据流转流控策略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据流转流控策略列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [scope] **参数说明**：流控策略作用域。不携带该参数时，查询所有作用域流控策略；取值USER时，查询租户级流控策略；取值为CHANNEL时，查询转发通道级流控策略；取值为RULE时，查询转发规则级流控策略；取值为ACTION时，查询转发动作级流控策略。
     * @param {string} [scopeValue] **参数说明**：流控策略作用域附加值。 不携带scope参数或scope参数取值为USER时，可不携带该字段，查询租户级流控策略。 scope参数取值为CHANNEL时，不携带该字段表示查询所有转发通道级流控策略，携带该字段表示查询该字段取值对应转发通道的流控策略。**取值范围**：HTTP_FORWARDING、DIS_FORWARDING、OBS_FORWARDING、AMQP_FORWARDING、DMS_KAFKA_FORWARDING。 scope参数为RULE时，不携带该字段表示查询所有转发规则级流控策略，携带该字段表示查询该字段取值对应转发规则的流控策略。 scope参数为ACTION时，不携带该字段表示查询所有转发动作级流控策略，携带该字段表示查询该字段取值对应转发动作的流控策略。
     * @param {string} [policyName] **参数说明**：数据流转流控策略名称。 **取值范围**：长度不超过256，只允许中文、字母、数字、以及_?\&#39;#().,&amp;%@!-等字符的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。默认每页10条记录，最大设定每页50条记录。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRoutingFlowControlPolicy(listRoutingFlowControlPolicyRequest?: ListRoutingFlowControlPolicyRequest): Promise<ListRoutingFlowControlPolicyResponse> {
        const options = ParamCreater().listRoutingFlowControlPolicy(listRoutingFlowControlPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台查询指定数据流转流控策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据流转流控策略
     * @param {string} policyId **参数说明**：数据流转流控策略id，用于唯一标识一个数据流转流控策略，在创建数据流转流控策略时由物联网平台分配获得。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRoutingFlowControlPolicy(showRoutingFlowControlPolicyRequest?: ShowRoutingFlowControlPolicyRequest): Promise<ShowRoutingFlowControlPolicyResponse> {
        const options = ParamCreater().showRoutingFlowControlPolicy(showRoutingFlowControlPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台修改指定数据流转流控策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改数据流转流控策略
     * @param {string} policyId **参数说明**：数据流转流控策略id，用于唯一标识一个数据流转流控策略，在创建数据流转流控策略时由物联网平台分配获得。
     * @param {UpdateFlowControlPolicy} updateRoutingFlowControlPolicyRequestBody **参数说明**：请求的body对象，详细请看数据流转流控策略更新结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRoutingFlowControlPolicy(updateRoutingFlowControlPolicyRequest?: UpdateRoutingFlowControlPolicyRequest): Promise<UpdateRoutingFlowControlPolicyResponse> {
        const options = ParamCreater().updateRoutingFlowControlPolicy(updateRoutingFlowControlPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 物联网平台可向设备下发消息，应用服务器可调用此接口向指定设备下发消息，以实现对设备的控制。应用将消息下发给平台后，平台返回应用响应结果，平台再将消息发送给设备。平台返回应用响应结果不一定是设备接收结果，建议用户应用通过订阅[[设备消息状态变更通知](https://support.huaweicloud.com/api-iothub/iot_06_v5_01203.html)](tag:hws)[[设备消息状态变更通知](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_01203.html)](tag:hws_hk)，订阅后平台会将设备接收结果推送给订阅的应用。
     * 注意：
     * - 此接口适用于MQTT设备消息下发，暂不支持其他协议接入的设备消息下发。
     * - 此接口仅支持单个设备消息下发，如需多个设备消息下发，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下发设备消息
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {DeviceMessageRequest} createMessageRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMessage(createMessageRequest?: CreateMessageRequest): Promise<CreateMessageResponse> {
        const options = ParamCreater().createMessage(createMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询平台下发给设备的消息，平台为每个设备默认最多保存20条消息，超过20条后， 后续的消息会替换下发最早的消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备消息
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeviceMessages(listDeviceMessagesRequest?: ListDeviceMessagesRequest): Promise<ListDeviceMessagesResponse> {
        const options = ParamCreater().listDeviceMessages(listDeviceMessagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询平台下发给设备的指定消息id的消息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定消息id的消息
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} messageId **参数说明**：下发消息的消息ID，用于唯一标识一个消息，在消息下发时由物联网平台分配获得。 **取值范围**：长度不超过100，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceMessage(showDeviceMessageRequest?: ShowDeviceMessageRequest): Promise<ShowDeviceMessageResponse> {
        const options = ParamCreater().showDeviceMessage(showDeviceMessageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可调用此接口创建升级包关联OBS对象
     * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建OTA升级包
     * @param {CreateOtaPackage} createOtaPackageRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOtaPackage(createOtaPackageRequest?: CreateOtaPackageRequest): Promise<CreateOtaPackageResponse> {
        const options = ParamCreater().createOtaPackage(createOtaPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可调用此接口删除关联OBS对象的升级包信息，不会删除OBS上对象
     * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除OTA升级包
     * @param {string} packageId **参数说明**：升级包ID，用于唯一标识一个升级包。由物联网平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOtaPackage(deleteOtaPackageRequest?: DeleteOtaPackageRequest): Promise<DeleteOtaPackageResponse> {
        const options = ParamCreater().deleteOtaPackage(deleteOtaPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可调用此接口查询关联OBS对象的升级包列表
     * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OTA升级包列表
     * @param {string} packageType **参数说明**：升级包类型。 **取值范围**：软件包必须设置为：softwarePackage，固件包必须设置为：firmwarePackage。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [appId] **参数说明**：资源空间ID。存在多资源空间的用户需要使用该接口时，建议携带该参数指定查询指定资源空间的升级包列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [productId] **参数说明**：设备关联的产品ID，用于唯一标识一个产品模型，创建产品后获得。方法请参见 [[创建产品](https://support.huaweicloud.com/api-iothub/iot_06_v5_0050.html)](tag:hws)[[创建产品](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0050.html)](tag:hws_hk)。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [version] **参数说明**：升级包版本号。 **取值范围**：长度不超过256，只允许字母、数字、下划线（_）、连接符（-）、英文点（.）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。**取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOtaPackageInfo(listOtaPackageInfoRequest?: ListOtaPackageInfoRequest): Promise<ListOtaPackageInfoResponse> {
        const options = ParamCreater().listOtaPackageInfo(listOtaPackageInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可调用此接口查询关联OBS对象的升级包详情
     * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取OTA升级包详情
     * @param {string} packageId **参数说明**：升级包ID，用于唯一标识一个升级包。由物联网平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOtaPackage(showOtaPackageRequest?: ShowOtaPackageRequest): Promise<ShowOtaPackageResponse> {
        const options = ParamCreater().showOtaPackage(showOtaPackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口创建产品。此接口仅创建了产品，没有创建和安装插件，如果需要对数据进行编解码，还需要在平台开发和安装插件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建产品
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {AddProduct} [createProductRequestBody] request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProduct(createProductRequest?: CreateProductRequest): Promise<CreateProductResponse> {
        const options = ParamCreater().createProduct(createProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除已导入物联网平台的指定产品模型。此接口仅删除了产品，未删除关联的插件，在产品下存在设备时，该产品不允许删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除产品
     * @param {string} productId **参数说明**：产品ID，用于唯一标识一个产品，在物联网平台创建产品后由平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，建议携带该参数，指定要删除的产品属于哪个资源空间；若不携带，则优先删除默认资源空间下产品，如默认资源空间下无对应产品，则按照产品创建时间删除最早创建产品。如果用户存在多资源空间，同时又不想携带该参数，可以联系华为技术支持对用户数据做资源空间合并。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProduct(deleteProductRequest?: DeleteProductRequest): Promise<DeleteProductResponse> {
        const options = ParamCreater().deleteProduct(deleteProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询已导入物联网平台的产品模型信息列表，了解产品模型的概要信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的产品列表，不携带该参数则会查询该用户下所有产品列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [productName] **参数说明**：产品名称。 **取值范围**：长度不超过64，只允许中文、字母、数字、以及_?\&#39;#().,&amp;%@!-等字符的组合。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProducts(listProductsRequest?: ListProductsRequest): Promise<ListProductsResponse> {
        const options = ParamCreater().listProducts(listProductsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询已导入物联网平台的指定产品模型详细信息，包括产品模型的服务、属性、命令等。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询产品
     * @param {string} productId **参数说明**：产品ID，用于唯一标识一个产品，在物联网平台创建产品后由平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，建议携带该参数，指定要查询的产品属于哪个资源空间；若不携带，则优先取默认资源空间下产品，如默认资源空间下无对应产品，则按照产品创建时间取最早创建产品。如果用户存在多资源空间，同时又不想携带该参数，可以联系华为技术支持对用户数据做资源空间合并。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProduct(showProductRequest?: ShowProductRequest): Promise<ShowProductResponse> {
        const options = ParamCreater().showProduct(showProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改已导入物联网平台的指定产品模型，包括产品模型的服务、属性、命令等。此接口仅修改了产品，未修改和安装插件，如果修改了产品中的service定义，且在平台中有对应的插件，请修改并重新安装插件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改产品
     * @param {string} productId **参数说明**：产品ID，用于唯一标识一个产品，在物联网平台创建产品后由平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateProduct} updateProductRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProduct(updateProductRequest?: UpdateProductRequest): Promise<UpdateProductResponse> {
        const options = ParamCreater().updateProduct(updateProductRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向设备发送指令用以查询设备的实时属性, 并由设备将属性查询的结果同步返回给应用服务器。
     * 注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备属性
     * @param {string} deviceId **参数说明**：下发属性的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} serviceId **参数说明**：设备的服务ID，在设备关联的产品模型中定义。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProperties(listPropertiesRequest?: ListPropertiesRequest): Promise<ListPropertiesResponse> {
        const options = ParamCreater().listProperties(listPropertiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向指定设备下发属性。平台负责将属性以同步方式发送给设备，并将设备执行属性结果同步返回。
     * 注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改设备属性
     * @param {string} deviceId **参数说明**：下发属性的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {DevicePropertiesRequest} updatePropertiesRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProperties(updatePropertiesRequest?: UpdatePropertiesRequest): Promise<UpdatePropertiesResponse> {
        const options = ParamCreater().updateProperties(updatePropertiesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建一条规则触发条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则触发条件
     * @param {AddRuleReq} createRoutingRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRoutingRule(createRoutingRuleRequest?: CreateRoutingRuleRequest): Promise<CreateRoutingRuleResponse> {
        const options = ParamCreater().createRoutingRule(createRoutingRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建一条规则动作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则动作
     * @param {AddActionReq} createRuleActionRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRuleAction(createRuleActionRequest?: CreateRuleActionRequest): Promise<CreateRuleActionResponse> {
        const options = ParamCreater().createRuleAction(createRuleActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除物联网平台中的指定规则条件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则触发条件
     * @param {string} ruleId **参数说明**：规则条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRoutingRule(deleteRoutingRuleRequest?: DeleteRoutingRuleRequest): Promise<DeleteRoutingRuleResponse> {
        const options = ParamCreater().deleteRoutingRule(deleteRoutingRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除物联网平台中的指定规则动作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则动作
     * @param {string} actionId **参数说明**：规则动作ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRuleAction(deleteRuleActionRequest?: DeleteRuleActionRequest): Promise<DeleteRuleActionResponse> {
        const options = ParamCreater().deleteRuleAction(deleteRuleActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中设置的规则条件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则条件列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [resource] **参数说明**：订阅的资源名称。 **取值范围**： - device：设备。 - device.property：设备属性。 - device.message：设备消息。 - device.message.status：设备消息状态。 - device.status：设备状态。 - batchtask：批量任务。 - product：产品。 - device.command.status：设备异步命令状态。
     * @param {string} [event] **参数说明**：订阅的资源事件。 **取值范围**：与资源有关，不同的资源，事件不同。 event需要与resource关联使用，具体的“resource：event”映射关系如下： - device：create（设备添加） - device：delete（设备删除） - device：update（设备更新） - device.status：update （设备状态变更） - device.property：report（设备属性上报） - device.message：report（设备消息上报） - device.message.status：update（设备消息状态变更） - batchtask：update （批量任务状态变更） - product：create（产品添加） - product：delete（产品删除） - product：update（产品更新） - device.command.status：update（设备异步命令状态更新）。
     * @param {string} [appType] **参数说明**：租户规则的生效范围。 **取值范围**： - GLOBAL：生效范围为租户级。 - APP：生效范围为资源空间级。如果类型为APP，可携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)](tag:hws)[[默认资源空间](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0006.html#section0)](tag:hws_hk)下的规则列表。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)](tag:hws)[[默认资源空间](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0006.html#section0)](tag:hws_hk)下的规则动作列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [ruleName] **参数说明**：用户自定义的规则名称
     * @param {boolean} [active] **参数说明**：规则条件的状态是否为激活。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。默认每页10条记录，最大设定每页50条记录。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRoutingRules(listRoutingRulesRequest?: ListRoutingRulesRequest): Promise<ListRoutingRulesResponse> {
        const options = ParamCreater().listRoutingRules(listRoutingRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中设置的规则动作列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则动作列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [ruleId] **参数说明**：规则触发条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [channel] **参数说明**：规则动作的类型。 **取值范围**： - HTTP_FORWARDING：HTTP服务消息类型。 - DIS_FORWARDING：转发DIS服务消息类型。 - OBS_FORWARDING：转发OBS服务消息类型。 - AMQP_FORWARDING：转发AMQP服务消息类型。 - DMS_KAFKA_FORWARDING：转发kafka消息类型。[ - ROMA_FORWARDING：转发Roma消息类型。（仅企业版支持） - INFLUXDB_FORWARDING：转发InfluxDB消息类型。（仅标准版和企业版支持） - MYSQL_FORWARDING：转发MySQL消息类型。（仅标准版和企业版支持） - FUNCTIONGRAPH_FORWARDING：转发FunctionGraph消息类型。（仅标准版和企业版支持） - MRS_KAFKA_FORWARDING：转发MRS_KAFKA消息类型。（仅企业版支持） - DMS_ROCKETMQ_FORWARDING：转发RocketMQ消息类型。（仅标准版和企业版支持）](tag:hws)[ - INFLUXDB_FORWARDING：转发InfluxDB消息类型。 - MYSQL_FORWARDING：转发MySQL消息类型。 - FUNCTIONGRAPH_FORWARDING：转发FunctionGraph消息类型。](tag:hws_hk)
     * @param {string} [appType] **参数说明**：租户规则的生效范围。 **取值范围**： - GLOBAL：生效范围为租户级。 - APP：生效范围为资源空间级。如果类型为APP，可携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)](tag:hws)[[默认资源空间](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0006.html#section0)](tag:hws_hk)下的规则动作列表。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，rule_id不携带且app_type为APP时，该参数生效，可携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)](tag:hws)[[默认资源空间](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0006.html#section0)](tag:hws_hk)下的规则动作列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。默认每页10条记录，最大设定每页50条记录。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleActions(listRuleActionsRequest?: ListRuleActionsRequest): Promise<ListRuleActionsResponse> {
        const options = ParamCreater().listRuleActions(listRuleActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定规则条件的配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则条件
     * @param {string} ruleId **参数说明**：规则条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRoutingRule(showRoutingRuleRequest?: ShowRoutingRuleRequest): Promise<ShowRoutingRuleResponse> {
        const options = ParamCreater().showRoutingRule(showRoutingRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定规则动作的配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则动作
     * @param {string} actionId **参数说明**：规则动作ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRuleAction(showRuleActionRequest?: ShowRuleActionRequest): Promise<ShowRuleActionResponse> {
        const options = ParamCreater().showRuleAction(showRuleActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则条件的配置参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改规则触发条件
     * @param {string} ruleId **参数说明**：规则条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateRuleReq} updateRoutingRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRoutingRule(updateRoutingRuleRequest?: UpdateRoutingRuleRequest): Promise<UpdateRoutingRuleResponse> {
        const options = ParamCreater().updateRoutingRule(updateRoutingRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则动作的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改规则动作
     * @param {string} actionId **参数说明**：规则动作ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateActionReq} updateRuleActionRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRuleAction(updateRuleActionRequest?: UpdateRuleActionRequest): Promise<UpdateRuleActionResponse> {
        const options = ParamCreater().updateRuleAction(updateRuleActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则的状态，激活或者去激活规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改规则状态
     * @param {string} ruleId **参数说明**：规则Id。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {RuleStatus} changeRuleStatusRequestBody **参数说明**：请求的body对象，详细请看规则结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeRuleStatus(changeRuleStatusRequest?: ChangeRuleStatusRequest): Promise<ChangeRuleStatusResponse> {
        const options = ParamCreater().changeRuleStatus(changeRuleStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口在物联网平台创建一条规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建规则
     * @param {Rule} createRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRule(createRuleRequest?: CreateRuleRequest): Promise<CreateRuleResponse> {
        const options = ParamCreater().createRule(createRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口删除物联网平台中的指定规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除规则
     * @param {string} ruleId **参数说明**：规则ID，用于唯一标识一条规则，在创建规则时由物联网平台分配获得。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRule(deleteRuleRequest?: DeleteRuleRequest): Promise<DeleteRuleResponse> {
        const options = ParamCreater().deleteRule(deleteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中设置的规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的规则列表，不携带该参数则会查询该用户下所有规则列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [ruleType] **参数说明**：规则类型。此参数为非必选参数，指定对应的规则类型结果进行返回，不携带该参数则会返回所有类型规则。 **取值范围**： - DEVICE_LINKAGE：云端联动规则。  - DEVICE_SIDE：端侧规则。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRules(listRulesRequest?: ListRulesRequest): Promise<ListRulesResponse> {
        const options = ParamCreater().listRules(listRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询物联网平台中指定规则的配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询规则
     * @param {string} ruleId **参数说明**：规则ID，用于唯一标识一条规则，在创建规则时由物联网平台分配获得。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRule(showRuleRequest?: ShowRuleRequest): Promise<ShowRuleResponse> {
        const options = ParamCreater().showRule(showRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改规则
     * @param {string} ruleId **参数说明**：规则ID，用于唯一标识一条规则，在创建规则时由物联网平台分配获得。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {Rule} updateRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRule(updateRuleRequest?: UpdateRuleRequest): Promise<UpdateRuleResponse> {
        const options = ParamCreater().updateRule(updateRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口查询绑定了指定标签的资源。当前支持标签的资源有Device(设备)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按标签查询资源
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {QueryResourceByTagsDTO} [listResourcesByTagsRequestBody] 请求结构体，见请求结构体说明
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourcesByTags(listResourcesByTagsRequest?: ListResourcesByTagsRequest): Promise<ListResourcesByTagsResponse> {
        const options = ParamCreater().listResourcesByTags(listResourcesByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为指定资源绑定标签。当前支持标签的资源有Device(设备)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定标签
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {BindTagsDTO} [tagDeviceRequestBody] **参数说明**：请求结构体，见请求结构体说明
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagDevice(tagDeviceRequest?: TagDeviceRequest): Promise<TagDeviceResponse> {
        const options = ParamCreater().tagDevice(tagDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可调用此接口为指定资源解绑标签。当前支持标签的资源有Device(设备)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑标签
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID
     * @param {UnbindTagsDTO} [untagDeviceRequestBody] **参数说明**：请求结构体，见请求结构体说明
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagDevice(untagDeviceRequest?: UntagDeviceRequest): Promise<UntagDeviceResponse> {
        const options = ParamCreater().untagDevice(untagDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可以通过该接口创建隧道（WebSocket协议），应用服务器和设备可以通过该隧道进行数据传输。
     * 
     * - 该API接口在基础版不支持。
     * - 该API调用后平台会向对应的MQTT/MQTTS设备下发隧道地址及密钥，同时给应用服务器也返回隧道地址及密钥，设备可以通过该地址及密钥创建WebSocket协议连接。
     * - 一个设备无法创建多个隧道。
     * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建设备隧道
     * @param {AddTunnelDto} addTunnelRequestBody 创建隧道请求体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addTunnel(addTunnelRequest?: AddTunnelRequest): Promise<AddTunnelResponse> {
        const options = ParamCreater().addTunnel(addTunnelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 应用服务器可通过该接口关闭某个设备隧道。关闭后可以再次连接。
     * - 该API接口在基础版不支持。
     * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭设备隧道
     * @param {string} tunnelId 隧道ID
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public closeDeviceTunnel(closeDeviceTunnelRequest?: CloseDeviceTunnelRequest): Promise<CloseDeviceTunnelResponse> {
        const options = ParamCreater().closeDeviceTunnel(closeDeviceTunnelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可通过该接口删除某个设备隧道。删除后该通道不存在，无法再次连接。
     * - 该API接口在基础版不支持。
     * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除设备隧道
     * @param {string} tunnelId 隧道ID
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeviceTunnel(deleteDeviceTunnelRequest?: DeleteDeviceTunnelRequest): Promise<DeleteDeviceTunnelResponse> {
        const options = ParamCreater().deleteDeviceTunnel(deleteDeviceTunnelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可通过该接口查询某项目下的所有设备隧道，以实现对设备管理。应用服务器可通过此接口向平台查询设备隧道建立的情况。
     * - 该API接口在基础版不支持。
     * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备所有隧道
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {string} [deviceId] **参数说明**：设备ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeviceTunnels(listDeviceTunnelsRequest?: ListDeviceTunnelsRequest): Promise<ListDeviceTunnelsResponse> {
        const options = ParamCreater().listDeviceTunnels(listDeviceTunnelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户可通过该接口查询某项目中的某个设备隧道，查看该设备隧道的信息与连接情况。应用服务器可调用此接口向平台查询设备隧道建立情况。
     * - 该API接口在基础版不支持。
     * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询设备隧道
     * @param {string} tunnelId 隧道ID
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，建议携带该参数，在使用专业版时必须携带该参数。您可以在IoTDA管理控制台界面，选择左侧导航栏“总览”页签查看当前实例的ID，具体获取方式请参考[[查看实例详情](https://support.huaweicloud.com/usermanual-iothub/iot_01_0121.html)](tag:hws) [[查看实例详情](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_0121.html)](tag:hws_hk)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceTunnel(showDeviceTunnelRequest?: ShowDeviceTunnelRequest): Promise<ShowDeviceTunnelResponse> {
        const options = ParamCreater().showDeviceTunnel(showDeviceTunnelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 接入凭证是用于客户端使用AMQP等协议与平台建链的一个认证凭据。只保留一条记录，如果重复调用只会重置接入凭证，使得之前的失效。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessCode(createAccessCodeRequest?: CreateAccessCodeRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/auth/accesscode",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createAccessCodeRequest !== null && createAccessCodeRequest !== undefined) {
                if (createAccessCodeRequest instanceof CreateAccessCodeRequest) {
                    body = createAccessCodeRequest.body
                    instanceId = createAccessCodeRequest.instanceId;
                } else {
                    body = createAccessCodeRequest['body'];
                    instanceId = createAccessCodeRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建一个AMQP队列。每个租户只能创建100个队列，若超过规格，则创建失败，若队列名称与已有的队列名称相同，则创建失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addQueue(addQueueRequest?: AddQueueRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/amqp-queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addQueueRequest !== null && addQueueRequest !== undefined) {
                if (addQueueRequest instanceof AddQueueRequest) {
                    body = addQueueRequest.body
                    instanceId = addQueueRequest.instanceId;
                } else {
                    body = addQueueRequest['body'];
                    instanceId = addQueueRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中的AMQP队列信息列表。可通过队列名称作模糊查询，支持分页。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchShowQueue(batchShowQueueRequest?: BatchShowQueueRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/amqp-queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let queueName;
            
            let limit;
            
            let marker;
            
            let offset;

            if (batchShowQueueRequest !== null && batchShowQueueRequest !== undefined) {
                if (batchShowQueueRequest instanceof BatchShowQueueRequest) {
                    instanceId = batchShowQueueRequest.instanceId;
                    queueName = batchShowQueueRequest.queueName;
                    limit = batchShowQueueRequest.limit;
                    marker = batchShowQueueRequest.marker;
                    offset = batchShowQueueRequest.offset;
                } else {
                    instanceId = batchShowQueueRequest['Instance-Id'];
                    queueName = batchShowQueueRequest['queue_name'];
                    limit = batchShowQueueRequest['limit'];
                    marker = batchShowQueueRequest['marker'];
                    offset = batchShowQueueRequest['offset'];
                }
            }

        
            if (queueName !== null && queueName !== undefined) {
                localVarQueryParameter['queue_name'] = queueName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台上删除指定AMQP队列。若当前队列正在使用，则会删除失败。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteQueue(deleteQueueRequest?: DeleteQueueRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/amqp-queues/{queue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueId;
            
            let instanceId;

            if (deleteQueueRequest !== null && deleteQueueRequest !== undefined) {
                if (deleteQueueRequest instanceof DeleteQueueRequest) {
                    queueId = deleteQueueRequest.queueId;
                    instanceId = deleteQueueRequest.instanceId;
                } else {
                    queueId = deleteQueueRequest['queue_id'];
                    instanceId = deleteQueueRequest['Instance-Id'];
                }
            }

        
            if (queueId === null || queueId === undefined) {
            throw new RequiredError('queueId','Required parameter queueId was null or undefined when calling deleteQueue.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'queue_id': queueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定队列的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQueue(showQueueRequest?: ShowQueueRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/amqp-queues/{queue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let queueId;
            
            let instanceId;

            if (showQueueRequest !== null && showQueueRequest !== undefined) {
                if (showQueueRequest instanceof ShowQueueRequest) {
                    queueId = showQueueRequest.queueId;
                    instanceId = showQueueRequest.instanceId;
                } else {
                    queueId = showQueueRequest['queue_id'];
                    instanceId = showQueueRequest['Instance-Id'];
                }
            }

        
            if (queueId === null || queueId === undefined) {
            throw new RequiredError('queueId','Required parameter queueId was null or undefined when calling showQueue.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'queue_id': queueId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口创建资源空间。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addApplication(addApplicationRequest?: AddApplicationRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addApplicationRequest !== null && addApplicationRequest !== undefined) {
                if (addApplicationRequest instanceof AddApplicationRequest) {
                    body = addApplicationRequest.body
                    instanceId = addApplicationRequest.instanceId;
                } else {
                    body = addApplicationRequest['body'];
                    instanceId = addApplicationRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定资源空间。删除资源空间属于高危操作，删除资源空间后，该空间下的产品、设备等资源将不可用，请谨慎操作！
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let instanceId;

            if (deleteApplicationRequest !== null && deleteApplicationRequest !== undefined) {
                if (deleteApplicationRequest instanceof DeleteApplicationRequest) {
                    appId = deleteApplicationRequest.appId;
                    instanceId = deleteApplicationRequest.instanceId;
                } else {
                    appId = deleteApplicationRequest['app_id'];
                    instanceId = deleteApplicationRequest['Instance-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling deleteApplication.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口查询指定资源空间详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplication(showApplicationRequest?: ShowApplicationRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let appId;
            
            let instanceId;

            if (showApplicationRequest !== null && showApplicationRequest !== undefined) {
                if (showApplicationRequest instanceof ShowApplicationRequest) {
                    appId = showApplicationRequest.appId;
                    instanceId = showApplicationRequest.instanceId;
                } else {
                    appId = showApplicationRequest['app_id'];
                    instanceId = showApplicationRequest['Instance-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling showApplication.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口查询资源空间列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApplications(showApplicationsRequest?: ShowApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let defaultApp;

            if (showApplicationsRequest !== null && showApplicationsRequest !== undefined) {
                if (showApplicationsRequest instanceof ShowApplicationsRequest) {
                    instanceId = showApplicationsRequest.instanceId;
                    defaultApp = showApplicationsRequest.defaultApp;
                } else {
                    instanceId = showApplicationsRequest['Instance-Id'];
                    defaultApp = showApplicationsRequest['default_app'];
                }
            }

        
            if (defaultApp !== null && defaultApp !== undefined) {
                localVarQueryParameter['default_app'] = defaultApp;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可以调用此接口更新资源空间的名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApplication(updateApplicationRequest?: UpdateApplicationRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let appId;
            
            let instanceId;

            if (updateApplicationRequest !== null && updateApplicationRequest !== undefined) {
                if (updateApplicationRequest instanceof UpdateApplicationRequest) {
                    appId = updateApplicationRequest.appId;
                    body = updateApplicationRequest.body
                    instanceId = updateApplicationRequest.instanceId;
                } else {
                    appId = updateApplicationRequest['app_id'];
                    body = updateApplicationRequest['body'];
                    instanceId = updateApplicationRequest['Instance-Id'];
                }
            }

        
            if (appId === null || appId === undefined) {
            throw new RequiredError('appId','Required parameter appId was null or undefined when calling updateApplication.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'app_id': appId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发异步命令，以实现对设备的控制。平台负责将命令发送给设备，并将设备执行命令结果异步通知应用服务器。 命令执行结果支持灵活的数据流转，应用服务器通过调用物联网平台的创建规则触发条件（Resource:device.command.status，Event:update）、创建规则动作并激活规则后，当命令状态变更时，物联网平台会根据规则将结果发送到规则指定的服务器，如用户自定义的HTTP服务器，AMQP服务器，以及华为云的其他储存服务器等, 详情参考[[设备命令状态变更通知](https://support.huaweicloud.com/api-iothub/iot_06_v5_01212.html)](tag:hws)[[设备命令状态变更通知](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_01212.html)](tag:hws_hk)。
         * 注意：
         * - 此接口适用于NB设备异步命令下发，暂不支持其他协议类型设备命令下发。
         * - 此接口仅支持单个设备异步命令下发，如需多个设备异步命令下发，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAsyncCommand(createAsyncCommandRequest?: CreateAsyncCommandRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/async-commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (createAsyncCommandRequest !== null && createAsyncCommandRequest !== undefined) {
                if (createAsyncCommandRequest instanceof CreateAsyncCommandRequest) {
                    deviceId = createAsyncCommandRequest.deviceId;
                    body = createAsyncCommandRequest.body
                    instanceId = createAsyncCommandRequest.instanceId;
                } else {
                    deviceId = createAsyncCommandRequest['device_id'];
                    body = createAsyncCommandRequest['body'];
                    instanceId = createAsyncCommandRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling createAsyncCommand.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 物联网平台可查询指定id的命令。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAsyncDeviceCommand(showAsyncDeviceCommandRequest?: ShowAsyncDeviceCommandRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/async-commands/{command_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let commandId;
            
            let instanceId;

            if (showAsyncDeviceCommandRequest !== null && showAsyncDeviceCommandRequest !== undefined) {
                if (showAsyncDeviceCommandRequest instanceof ShowAsyncDeviceCommandRequest) {
                    deviceId = showAsyncDeviceCommandRequest.deviceId;
                    commandId = showAsyncDeviceCommandRequest.commandId;
                    instanceId = showAsyncDeviceCommandRequest.instanceId;
                } else {
                    deviceId = showAsyncDeviceCommandRequest['device_id'];
                    commandId = showAsyncDeviceCommandRequest['command_id'];
                    instanceId = showAsyncDeviceCommandRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling showAsyncDeviceCommand.');
            }
            if (commandId === null || commandId === undefined) {
            throw new RequiredError('commandId','Required parameter commandId was null or undefined when calling showAsyncDeviceCommand.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId,'command_id': commandId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建数据流转积压策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRoutingBacklogPolicy(createRoutingBacklogPolicyRequest?: CreateRoutingBacklogPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/routing-rule/backlog-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createRoutingBacklogPolicyRequest !== null && createRoutingBacklogPolicyRequest !== undefined) {
                if (createRoutingBacklogPolicyRequest instanceof CreateRoutingBacklogPolicyRequest) {
                    body = createRoutingBacklogPolicyRequest.body
                    instanceId = createRoutingBacklogPolicyRequest.instanceId;
                } else {
                    body = createRoutingBacklogPolicyRequest['body'];
                    instanceId = createRoutingBacklogPolicyRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台删除指定数据流转积压策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRoutingBacklogPolicy(deleteRoutingBacklogPolicyRequest?: DeleteRoutingBacklogPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/routing-rule/backlog-policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let instanceId;

            if (deleteRoutingBacklogPolicyRequest !== null && deleteRoutingBacklogPolicyRequest !== undefined) {
                if (deleteRoutingBacklogPolicyRequest instanceof DeleteRoutingBacklogPolicyRequest) {
                    policyId = deleteRoutingBacklogPolicyRequest.policyId;
                    instanceId = deleteRoutingBacklogPolicyRequest.instanceId;
                } else {
                    policyId = deleteRoutingBacklogPolicyRequest['policy_id'];
                    instanceId = deleteRoutingBacklogPolicyRequest['Instance-Id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteRoutingBacklogPolicy.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询在物联网平台设置的数据流转积压策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRoutingBacklogPolicy(listRoutingBacklogPolicyRequest?: ListRoutingBacklogPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/backlog-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let policyName;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listRoutingBacklogPolicyRequest !== null && listRoutingBacklogPolicyRequest !== undefined) {
                if (listRoutingBacklogPolicyRequest instanceof ListRoutingBacklogPolicyRequest) {
                    instanceId = listRoutingBacklogPolicyRequest.instanceId;
                    policyName = listRoutingBacklogPolicyRequest.policyName;
                    limit = listRoutingBacklogPolicyRequest.limit;
                    marker = listRoutingBacklogPolicyRequest.marker;
                    offset = listRoutingBacklogPolicyRequest.offset;
                } else {
                    instanceId = listRoutingBacklogPolicyRequest['Instance-Id'];
                    policyName = listRoutingBacklogPolicyRequest['policy_name'];
                    limit = listRoutingBacklogPolicyRequest['limit'];
                    marker = listRoutingBacklogPolicyRequest['marker'];
                    offset = listRoutingBacklogPolicyRequest['offset'];
                }
            }

        
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台查询指定数据流转积压策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRoutingBacklogPolicy(showRoutingBacklogPolicyRequest?: ShowRoutingBacklogPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/backlog-policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let instanceId;

            if (showRoutingBacklogPolicyRequest !== null && showRoutingBacklogPolicyRequest !== undefined) {
                if (showRoutingBacklogPolicyRequest instanceof ShowRoutingBacklogPolicyRequest) {
                    policyId = showRoutingBacklogPolicyRequest.policyId;
                    instanceId = showRoutingBacklogPolicyRequest.instanceId;
                } else {
                    policyId = showRoutingBacklogPolicyRequest['policy_id'];
                    instanceId = showRoutingBacklogPolicyRequest['Instance-Id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showRoutingBacklogPolicy.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台修改指定数据流转积压策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRoutingBacklogPolicy(updateRoutingBacklogPolicyRequest?: UpdateRoutingBacklogPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/routing-rule/backlog-policy/{policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let instanceId;

            if (updateRoutingBacklogPolicyRequest !== null && updateRoutingBacklogPolicyRequest !== undefined) {
                if (updateRoutingBacklogPolicyRequest instanceof UpdateRoutingBacklogPolicyRequest) {
                    policyId = updateRoutingBacklogPolicyRequest.policyId;
                    body = updateRoutingBacklogPolicyRequest.body
                    instanceId = updateRoutingBacklogPolicyRequest.instanceId;
                } else {
                    policyId = updateRoutingBacklogPolicyRequest['policy_id'];
                    body = updateRoutingBacklogPolicyRequest['body'];
                    instanceId = updateRoutingBacklogPolicyRequest['Instance-Id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateRoutingBacklogPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为创建批量处理任务，对多个设备进行批量操作。当前支持批量软固件升级、批量创建设备、批量删除设备、批量冻结设备、批量解冻设备、批量创建命令、批量创建消息任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBatchTask(createBatchTaskRequest?: CreateBatchTaskRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/batchtasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createBatchTaskRequest !== null && createBatchTaskRequest !== undefined) {
                if (createBatchTaskRequest instanceof CreateBatchTaskRequest) {
                    body = createBatchTaskRequest.body
                    instanceId = createBatchTaskRequest.instanceId;
                } else {
                    body = createBatchTaskRequest['body'];
                    instanceId = createBatchTaskRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除物联网平台中已经完成（状态为成功，失败，部分成功，已停止）的批量任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBatchTask(deleteBatchTaskRequest?: DeleteBatchTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/batchtasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;
            
            let instanceId;

            if (deleteBatchTaskRequest !== null && deleteBatchTaskRequest !== undefined) {
                if (deleteBatchTaskRequest instanceof DeleteBatchTaskRequest) {
                    taskId = deleteBatchTaskRequest.taskId;
                    instanceId = deleteBatchTaskRequest.instanceId;
                } else {
                    taskId = deleteBatchTaskRequest['task_id'];
                    instanceId = deleteBatchTaskRequest['Instance-Id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteBatchTask.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中批量任务列表，每一个任务又包括具体的任务内容、任务状态、任务完成情况统计等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBatchTasks(listBatchTasksRequest?: ListBatchTasksRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/batchtasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskType;
            
            let instanceId;
            
            let appId;
            
            let status;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listBatchTasksRequest !== null && listBatchTasksRequest !== undefined) {
                if (listBatchTasksRequest instanceof ListBatchTasksRequest) {
                    taskType = listBatchTasksRequest.taskType;
                    instanceId = listBatchTasksRequest.instanceId;
                    appId = listBatchTasksRequest.appId;
                    status = listBatchTasksRequest.status;
                    limit = listBatchTasksRequest.limit;
                    marker = listBatchTasksRequest.marker;
                    offset = listBatchTasksRequest.offset;
                } else {
                    taskType = listBatchTasksRequest['task_type'];
                    instanceId = listBatchTasksRequest['Instance-Id'];
                    appId = listBatchTasksRequest['app_id'];
                    status = listBatchTasksRequest['status'];
                    limit = listBatchTasksRequest['limit'];
                    marker = listBatchTasksRequest['marker'];
                    offset = listBatchTasksRequest['offset'];
                }
            }

        
            if (taskType === null || taskType === undefined) {
                throw new RequiredError('taskType','Required parameter taskType was null or undefined when calling listBatchTasks.');
            }
            if (taskType !== null && taskType !== undefined) {
                localVarQueryParameter['task_type'] = taskType;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
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
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口重试批量任务，目前只支持task_type为firmwareUpgrade，softwareUpgrade。如果task_id对应任务已经成功、停止、正在停止、等待中或初始化中，则不可以调用该接口。如果请求Body为{}，则调用该接口后会重新执行所有状态为失败、失败待重试和已停止的子任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        retryBatchTask(retryBatchTaskRequest?: RetryBatchTaskRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/batchtasks/{task_id}/retry",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;
            
            let instanceId;

            if (retryBatchTaskRequest !== null && retryBatchTaskRequest !== undefined) {
                if (retryBatchTaskRequest instanceof RetryBatchTaskRequest) {
                    taskId = retryBatchTaskRequest.taskId;
                    instanceId = retryBatchTaskRequest.instanceId;
                    body = retryBatchTaskRequest.body
                } else {
                    taskId = retryBatchTaskRequest['task_id'];
                    instanceId = retryBatchTaskRequest['Instance-Id'];
                    body = retryBatchTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling retryBatchTask.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定批量任务的信息，包括任务内容、任务状态、任务完成情况统计以及子任务列表等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBatchTask(showBatchTaskRequest?: ShowBatchTaskRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/batchtasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let taskId;
            
            let instanceId;
            
            let taskDetailStatus;
            
            let target;
            
            let limit;
            
            let marker;
            
            let offset;

            if (showBatchTaskRequest !== null && showBatchTaskRequest !== undefined) {
                if (showBatchTaskRequest instanceof ShowBatchTaskRequest) {
                    taskId = showBatchTaskRequest.taskId;
                    instanceId = showBatchTaskRequest.instanceId;
                    taskDetailStatus = showBatchTaskRequest.taskDetailStatus;
                    target = showBatchTaskRequest.target;
                    limit = showBatchTaskRequest.limit;
                    marker = showBatchTaskRequest.marker;
                    offset = showBatchTaskRequest.offset;
                } else {
                    taskId = showBatchTaskRequest['task_id'];
                    instanceId = showBatchTaskRequest['Instance-Id'];
                    taskDetailStatus = showBatchTaskRequest['task_detail_status'];
                    target = showBatchTaskRequest['target'];
                    limit = showBatchTaskRequest['limit'];
                    marker = showBatchTaskRequest['marker'];
                    offset = showBatchTaskRequest['offset'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBatchTask.');
            }
            if (taskDetailStatus !== null && taskDetailStatus !== undefined) {
                localVarQueryParameter['task_detail_status'] = taskDetailStatus;
            }
            if (target !== null && target !== undefined) {
                localVarQueryParameter['target'] = target;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口停止批量任务，目前只支持task_type为firmwareUpgrade，softwareUpgrade。如果task_id对应任务已经完成（成功、失败、部分成功，已经停止）或正在停止中，则不可以调用该接口。如果请求Body为{}，则调用该接口后会停止所有正在执行中、等待中和失败待重试状态的子任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopBatchTask(stopBatchTaskRequest?: StopBatchTaskRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/batchtasks/{task_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let taskId;
            
            let instanceId;

            if (stopBatchTaskRequest !== null && stopBatchTaskRequest !== undefined) {
                if (stopBatchTaskRequest instanceof StopBatchTaskRequest) {
                    taskId = stopBatchTaskRequest.taskId;
                    instanceId = stopBatchTaskRequest.instanceId;
                    body = stopBatchTaskRequest.body
                } else {
                    taskId = stopBatchTaskRequest['task_id'];
                    instanceId = stopBatchTaskRequest['Instance-Id'];
                    body = stopBatchTaskRequest['body'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling stopBatchTask.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除批量任务文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBatchTaskFile(deleteBatchTaskFileRequest?: DeleteBatchTaskFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/batchtask-files/{file_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let fileId;
            
            let instanceId;

            if (deleteBatchTaskFileRequest !== null && deleteBatchTaskFileRequest !== undefined) {
                if (deleteBatchTaskFileRequest instanceof DeleteBatchTaskFileRequest) {
                    fileId = deleteBatchTaskFileRequest.fileId;
                    instanceId = deleteBatchTaskFileRequest.instanceId;
                } else {
                    fileId = deleteBatchTaskFileRequest['file_id'];
                    instanceId = deleteBatchTaskFileRequest['Instance-Id'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
            throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling deleteBatchTaskFile.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'file_id': fileId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询批量任务文件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBatchTaskFiles(listBatchTaskFilesRequest?: ListBatchTaskFilesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/batchtask-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let instanceId;

            if (listBatchTaskFilesRequest !== null && listBatchTaskFilesRequest !== undefined) {
                if (listBatchTaskFilesRequest instanceof ListBatchTaskFilesRequest) {
                    instanceId = listBatchTaskFilesRequest.instanceId;
                } else {
                    instanceId = listBatchTaskFilesRequest['Instance-Id'];
                }
            }

        
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口向订阅了指定Topic的所有在线设备发布广播消息。应用将广播消息下发给平台后，平台会先返回应用响应结果，再将消息广播给设备。
         * 注意：
         * - 此接口只适用于使用MQTT协议接入的设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        broadcastMessage(broadcastMessageRequest?: BroadcastMessageRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/broadcast-messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (broadcastMessageRequest !== null && broadcastMessageRequest !== undefined) {
                if (broadcastMessageRequest instanceof BroadcastMessageRequest) {
                    body = broadcastMessageRequest.body
                    instanceId = broadcastMessageRequest.instanceId;
                } else {
                    body = broadcastMessageRequest['body'];
                    instanceId = broadcastMessageRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台上传设备CA证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addCertificate(addCertificateRequest?: AddCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let spAuthToken;
            
            let stageAuthToken;
            
            let instanceId;

            if (addCertificateRequest !== null && addCertificateRequest !== undefined) {
                if (addCertificateRequest instanceof AddCertificateRequest) {
                    body = addCertificateRequest.body
                    spAuthToken = addCertificateRequest.spAuthToken;
                    stageAuthToken = addCertificateRequest.stageAuthToken;
                    instanceId = addCertificateRequest.instanceId;
                } else {
                    body = addCertificateRequest['body'];
                    spAuthToken = addCertificateRequest['Sp-Auth-Token'];
                    stageAuthToken = addCertificateRequest['Stage-Auth-Token'];
                    instanceId = addCertificateRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (spAuthToken !== undefined && spAuthToken !== null) {
                localVarHeaderParameter['Sp-Auth-Token'] = String(spAuthToken);
            }
            if (stageAuthToken !== undefined && stageAuthToken !== null) {
                localVarHeaderParameter['Stage-Auth-Token'] = String(stageAuthToken);
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台验证设备的CA证书，目的是为了验证用户持有设备CA证书的私钥
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkCertificate(checkCertificateRequest?: CheckCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/certificates/{certificate_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let certificateId;
            
            let actionId;
            
            let spAuthToken;
            
            let stageAuthToken;
            
            let instanceId;

            if (checkCertificateRequest !== null && checkCertificateRequest !== undefined) {
                if (checkCertificateRequest instanceof CheckCertificateRequest) {
                    certificateId = checkCertificateRequest.certificateId;
                    actionId = checkCertificateRequest.actionId;
                    body = checkCertificateRequest.body
                    spAuthToken = checkCertificateRequest.spAuthToken;
                    stageAuthToken = checkCertificateRequest.stageAuthToken;
                    instanceId = checkCertificateRequest.instanceId;
                } else {
                    certificateId = checkCertificateRequest['certificate_id'];
                    actionId = checkCertificateRequest['action_id'];
                    body = checkCertificateRequest['body'];
                    spAuthToken = checkCertificateRequest['Sp-Auth-Token'];
                    stageAuthToken = checkCertificateRequest['Stage-Auth-Token'];
                    instanceId = checkCertificateRequest['Instance-Id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling checkCertificate.');
            }
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling checkCertificate.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action_id'] = actionId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (spAuthToken !== undefined && spAuthToken !== null) {
                localVarHeaderParameter['Sp-Auth-Token'] = String(spAuthToken);
            }
            if (stageAuthToken !== undefined && stageAuthToken !== null) {
                localVarHeaderParameter['Stage-Auth-Token'] = String(stageAuthToken);
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台删除设备CA证书
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;
            
            let spAuthToken;
            
            let stageAuthToken;
            
            let instanceId;

            if (deleteCertificateRequest !== null && deleteCertificateRequest !== undefined) {
                if (deleteCertificateRequest instanceof DeleteCertificateRequest) {
                    certificateId = deleteCertificateRequest.certificateId;
                    spAuthToken = deleteCertificateRequest.spAuthToken;
                    stageAuthToken = deleteCertificateRequest.stageAuthToken;
                    instanceId = deleteCertificateRequest.instanceId;
                } else {
                    certificateId = deleteCertificateRequest['certificate_id'];
                    spAuthToken = deleteCertificateRequest['Sp-Auth-Token'];
                    stageAuthToken = deleteCertificateRequest['Stage-Auth-Token'];
                    instanceId = deleteCertificateRequest['Instance-Id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificate.');
            }
            if (spAuthToken !== undefined && spAuthToken !== null) {
                localVarHeaderParameter['Sp-Auth-Token'] = String(spAuthToken);
            }
            if (stageAuthToken !== undefined && stageAuthToken !== null) {
                localVarHeaderParameter['Stage-Auth-Token'] = String(stageAuthToken);
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台获取设备CA证书列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let spAuthToken;
            
            let stageAuthToken;
            
            let instanceId;
            
            let appId;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    spAuthToken = listCertificatesRequest.spAuthToken;
                    stageAuthToken = listCertificatesRequest.stageAuthToken;
                    instanceId = listCertificatesRequest.instanceId;
                    appId = listCertificatesRequest.appId;
                    limit = listCertificatesRequest.limit;
                    marker = listCertificatesRequest.marker;
                    offset = listCertificatesRequest.offset;
                } else {
                    spAuthToken = listCertificatesRequest['Sp-Auth-Token'];
                    stageAuthToken = listCertificatesRequest['Stage-Auth-Token'];
                    instanceId = listCertificatesRequest['Instance-Id'];
                    appId = listCertificatesRequest['app_id'];
                    limit = listCertificatesRequest['limit'];
                    marker = listCertificatesRequest['marker'];
                    offset = listCertificatesRequest['offset'];
                }
            }

        
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (spAuthToken !== undefined && spAuthToken !== null) {
                localVarHeaderParameter['Sp-Auth-Token'] = String(spAuthToken);
            }
            if (stageAuthToken !== undefined && stageAuthToken !== null) {
                localVarHeaderParameter['Stage-Auth-Token'] = String(stageAuthToken);
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发命令，以实现对设备的同步控制。平台负责将命令以同步方式发送给设备，并将设备执行命令结果同步返回, 如果设备没有响应，平台会返回给应用服务器超时，平台超时时间是20秒。如果命令下发需要超过20秒，建议采用[[消息下发](https://support.huaweicloud.com/api-iothub/iot_06_v5_0059.html)](tag:hws)[[消息下发](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0059.html)](tag:hws_hk)。
         * 注意：
         * - 此接口适用于MQTT设备同步命令下发，暂不支持NB-IoT设备命令下发。
         * - 此接口仅支持单个设备同步命令下发，如需多个设备同步命令下发，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCommand(createCommandRequest?: CreateCommandRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/commands",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (createCommandRequest !== null && createCommandRequest !== undefined) {
                if (createCommandRequest instanceof CreateCommandRequest) {
                    deviceId = createCommandRequest.deviceId;
                    body = createCommandRequest.body
                    instanceId = createCommandRequest.instanceId;
                } else {
                    deviceId = createCommandRequest['device_id'];
                    body = createCommandRequest['body'];
                    instanceId = createCommandRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling createCommand.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口新建设备组，一个华为云账号下最多可有1,000个设备组，包括父设备组和子设备组。设备组的最大层级关系不超过5层，即群组形成的关系树最大深度不超过5。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDeviceGroup(addDeviceGroupRequest?: AddDeviceGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/device-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addDeviceGroupRequest !== null && addDeviceGroupRequest !== undefined) {
                if (addDeviceGroupRequest instanceof AddDeviceGroupRequest) {
                    instanceId = addDeviceGroupRequest.instanceId;
                    body = addDeviceGroupRequest.body
                } else {
                    instanceId = addDeviceGroupRequest['Instance-Id'];
                    body = addDeviceGroupRequest['body'];
                }
            }

        
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口管理设备组中的设备。单个设备组内最多添加20,000个设备，一个设备最多可以被添加到10个设备组中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOrDeleteDeviceInGroup(createOrDeleteDeviceInGroupRequest?: CreateOrDeleteDeviceInGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/device-group/{group_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let actionId;
            
            let deviceId;
            
            let instanceId;

            if (createOrDeleteDeviceInGroupRequest !== null && createOrDeleteDeviceInGroupRequest !== undefined) {
                if (createOrDeleteDeviceInGroupRequest instanceof CreateOrDeleteDeviceInGroupRequest) {
                    groupId = createOrDeleteDeviceInGroupRequest.groupId;
                    actionId = createOrDeleteDeviceInGroupRequest.actionId;
                    deviceId = createOrDeleteDeviceInGroupRequest.deviceId;
                    instanceId = createOrDeleteDeviceInGroupRequest.instanceId;
                } else {
                    groupId = createOrDeleteDeviceInGroupRequest['group_id'];
                    actionId = createOrDeleteDeviceInGroupRequest['action_id'];
                    deviceId = createOrDeleteDeviceInGroupRequest['device_id'];
                    instanceId = createOrDeleteDeviceInGroupRequest['Instance-Id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createOrDeleteDeviceInGroup.');
            }
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling createOrDeleteDeviceInGroup.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action_id'] = actionId;
            }
            if (deviceId === null || deviceId === undefined) {
                throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling createOrDeleteDeviceInGroup.');
            }
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除指定设备组，如果该设备组存在子设备组或者该设备组中存在设备，必须先删除子设备组并将设备从该设备组移除，才能删除该设备组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeviceGroup(deleteDeviceGroupRequest?: DeleteDeviceGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/device-group/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let instanceId;

            if (deleteDeviceGroupRequest !== null && deleteDeviceGroupRequest !== undefined) {
                if (deleteDeviceGroupRequest instanceof DeleteDeviceGroupRequest) {
                    groupId = deleteDeviceGroupRequest.groupId;
                    instanceId = deleteDeviceGroupRequest.instanceId;
                } else {
                    groupId = deleteDeviceGroupRequest['group_id'];
                    instanceId = deleteDeviceGroupRequest['Instance-Id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteDeviceGroup.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中的设备组信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDeviceGroups(listDeviceGroupsRequest?: ListDeviceGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/device-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let marker;
            
            let offset;
            
            let lastModifiedTime;
            
            let appId;
            
            let groupType;
            
            let name;

            if (listDeviceGroupsRequest !== null && listDeviceGroupsRequest !== undefined) {
                if (listDeviceGroupsRequest instanceof ListDeviceGroupsRequest) {
                    instanceId = listDeviceGroupsRequest.instanceId;
                    limit = listDeviceGroupsRequest.limit;
                    marker = listDeviceGroupsRequest.marker;
                    offset = listDeviceGroupsRequest.offset;
                    lastModifiedTime = listDeviceGroupsRequest.lastModifiedTime;
                    appId = listDeviceGroupsRequest.appId;
                    groupType = listDeviceGroupsRequest.groupType;
                    name = listDeviceGroupsRequest.name;
                } else {
                    instanceId = listDeviceGroupsRequest['Instance-Id'];
                    limit = listDeviceGroupsRequest['limit'];
                    marker = listDeviceGroupsRequest['marker'];
                    offset = listDeviceGroupsRequest['offset'];
                    lastModifiedTime = listDeviceGroupsRequest['last_modified_time'];
                    appId = listDeviceGroupsRequest['app_id'];
                    groupType = listDeviceGroupsRequest['group_type'];
                    name = listDeviceGroupsRequest['name'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (lastModifiedTime !== null && lastModifiedTime !== undefined) {
                localVarQueryParameter['last_modified_time'] = lastModifiedTime;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (groupType !== null && groupType !== undefined) {
                localVarQueryParameter['group_type'] = groupType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询指定设备组详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceGroup(showDeviceGroupRequest?: ShowDeviceGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/device-group/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let instanceId;

            if (showDeviceGroupRequest !== null && showDeviceGroupRequest !== undefined) {
                if (showDeviceGroupRequest instanceof ShowDeviceGroupRequest) {
                    groupId = showDeviceGroupRequest.groupId;
                    instanceId = showDeviceGroupRequest.instanceId;
                } else {
                    groupId = showDeviceGroupRequest['group_id'];
                    instanceId = showDeviceGroupRequest['Instance-Id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDeviceGroup.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询指定设备组下的设备列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDevicesInGroup(showDevicesInGroupRequest?: ShowDevicesInGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/device-group/{group_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let instanceId;
            
            let limit;
            
            let marker;
            
            let offset;

            if (showDevicesInGroupRequest !== null && showDevicesInGroupRequest !== undefined) {
                if (showDevicesInGroupRequest instanceof ShowDevicesInGroupRequest) {
                    groupId = showDevicesInGroupRequest.groupId;
                    instanceId = showDevicesInGroupRequest.instanceId;
                    limit = showDevicesInGroupRequest.limit;
                    marker = showDevicesInGroupRequest.marker;
                    offset = showDevicesInGroupRequest.offset;
                } else {
                    groupId = showDevicesInGroupRequest['group_id'];
                    instanceId = showDevicesInGroupRequest['Instance-Id'];
                    limit = showDevicesInGroupRequest['limit'];
                    marker = showDevicesInGroupRequest['marker'];
                    offset = showDevicesInGroupRequest['offset'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showDevicesInGroup.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改物联网平台中指定设备组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDeviceGroup(updateDeviceGroupRequest?: UpdateDeviceGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/device-group/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let instanceId;

            if (updateDeviceGroupRequest !== null && updateDeviceGroupRequest !== undefined) {
                if (updateDeviceGroupRequest instanceof UpdateDeviceGroupRequest) {
                    groupId = updateDeviceGroupRequest.groupId;
                    body = updateDeviceGroupRequest.body
                    instanceId = updateDeviceGroupRequest.instanceId;
                } else {
                    groupId = updateDeviceGroupRequest['group_id'];
                    body = updateDeviceGroupRequest['body'];
                    instanceId = updateDeviceGroupRequest['Instance-Id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateDeviceGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建一个设备，仅在创建后设备才可以接入物联网平台。
         * 
         * - 该接口支持使用gateway_id参数指定在父设备下创建一个子设备，并且支持多级子设备，当前最大支持二级子设备。
         * - 该接口同时还支持对设备进行初始配置，接口会读取创建设备请求参数product_id对应的产品详情，如果产品的属性有定义默认值，则会将该属性默认值写入该设备的设备影子中。
         * - 用户还可以使用创建设备请求参数shadow字段为设备指定初始配置，指定后将会根据service_id和desired设置的属性值与产品中对应属性的默认值比对，如果不同，则将以shadow字段中设置的属性值为准写入到设备影子中。
         * - 该接口仅支持创建单个设备，如需批量注册设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addDevice(addDeviceRequest?: AddDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addDeviceRequest !== null && addDeviceRequest !== undefined) {
                if (addDeviceRequest instanceof AddDeviceRequest) {
                    body = addDeviceRequest.body
                    instanceId = addDeviceRequest.instanceId;
                } else {
                    body = addDeviceRequest['body'];
                    instanceId = addDeviceRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台上删除指定设备。若设备下连接了非直连设备，则必须把设备下的非直连设备都删除后，才能删除该设备。该接口仅支持删除单个设备，如需批量删除设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDevice(deleteDeviceRequest?: DeleteDeviceRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let instanceId;

            if (deleteDeviceRequest !== null && deleteDeviceRequest !== undefined) {
                if (deleteDeviceRequest instanceof DeleteDeviceRequest) {
                    deviceId = deleteDeviceRequest.deviceId;
                    instanceId = deleteDeviceRequest.instanceId;
                } else {
                    deviceId = deleteDeviceRequest['device_id'];
                    instanceId = deleteDeviceRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling deleteDevice.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口冻结设备，设备冻结后不能再连接上线，可以通过解冻设备接口解除设备冻结。注意，当前仅支持冻结与平台直连的设备。该接口仅支持冻结单个设备，如需批量冻结设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        freezeDevice(freezeDeviceRequest?: FreezeDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/freeze",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let instanceId;

            if (freezeDeviceRequest !== null && freezeDeviceRequest !== undefined) {
                if (freezeDeviceRequest instanceof FreezeDeviceRequest) {
                    deviceId = freezeDeviceRequest.deviceId;
                    instanceId = freezeDeviceRequest.instanceId;
                } else {
                    deviceId = freezeDeviceRequest['device_id'];
                    instanceId = freezeDeviceRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling freezeDevice.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中的设备信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDevices(listDevicesRequest?: ListDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let productId;
            
            let gatewayId;
            
            let isCascadeQuery;
            
            let nodeId;
            
            let deviceName;
            
            let limit;
            
            let marker;
            
            let offset;
            
            let startTime;
            
            let endTime;
            
            let appId;

            if (listDevicesRequest !== null && listDevicesRequest !== undefined) {
                if (listDevicesRequest instanceof ListDevicesRequest) {
                    instanceId = listDevicesRequest.instanceId;
                    productId = listDevicesRequest.productId;
                    gatewayId = listDevicesRequest.gatewayId;
                    isCascadeQuery = listDevicesRequest.isCascadeQuery;
                    nodeId = listDevicesRequest.nodeId;
                    deviceName = listDevicesRequest.deviceName;
                    limit = listDevicesRequest.limit;
                    marker = listDevicesRequest.marker;
                    offset = listDevicesRequest.offset;
                    startTime = listDevicesRequest.startTime;
                    endTime = listDevicesRequest.endTime;
                    appId = listDevicesRequest.appId;
                } else {
                    instanceId = listDevicesRequest['Instance-Id'];
                    productId = listDevicesRequest['product_id'];
                    gatewayId = listDevicesRequest['gateway_id'];
                    isCascadeQuery = listDevicesRequest['is_cascade_query'];
                    nodeId = listDevicesRequest['node_id'];
                    deviceName = listDevicesRequest['device_name'];
                    limit = listDevicesRequest['limit'];
                    marker = listDevicesRequest['marker'];
                    offset = listDevicesRequest['offset'];
                    startTime = listDevicesRequest['start_time'];
                    endTime = listDevicesRequest['end_time'];
                    appId = listDevicesRequest['app_id'];
                }
            }

        
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (gatewayId !== null && gatewayId !== undefined) {
                localVarQueryParameter['gateway_id'] = gatewayId;
            }
            if (isCascadeQuery !== null && isCascadeQuery !== undefined) {
                localVarQueryParameter['is_cascade_query'] = isCascadeQuery;
            }
            if (nodeId !== null && nodeId !== undefined) {
                localVarQueryParameter['node_id'] = nodeId;
            }
            if (deviceName !== null && deviceName !== undefined) {
                localVarQueryParameter['device_name'] = deviceName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口重置设备密钥，携带指定密钥时平台将设备密钥重置为指定的密钥，不携带密钥时平台将自动生成一个新的随机密钥返回。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetDeviceSecret(resetDeviceSecretRequest?: ResetDeviceSecretRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let deviceId;
            
            let actionId;
            
            let instanceId;

            if (resetDeviceSecretRequest !== null && resetDeviceSecretRequest !== undefined) {
                if (resetDeviceSecretRequest instanceof ResetDeviceSecretRequest) {
                    deviceId = resetDeviceSecretRequest.deviceId;
                    actionId = resetDeviceSecretRequest.actionId;
                    body = resetDeviceSecretRequest.body
                    instanceId = resetDeviceSecretRequest.instanceId;
                } else {
                    deviceId = resetDeviceSecretRequest['device_id'];
                    actionId = resetDeviceSecretRequest['action_id'];
                    body = resetDeviceSecretRequest['body'];
                    instanceId = resetDeviceSecretRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling resetDeviceSecret.');
            }
            if (actionId === null || actionId === undefined) {
                throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling resetDeviceSecret.');
            }
            if (actionId !== null && actionId !== undefined) {
                localVarQueryParameter['action_id'] = actionId;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口重置设备指纹。携带指定设备指纹时将之重置为指定值；不携带时将之置空，后续设备第一次接入时，该设备指纹的值将设置为第一次接入时的证书指纹。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resetFingerprint(resetFingerprintRequest?: ResetFingerprintRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/reset-fingerprint",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (resetFingerprintRequest !== null && resetFingerprintRequest !== undefined) {
                if (resetFingerprintRequest instanceof ResetFingerprintRequest) {
                    deviceId = resetFingerprintRequest.deviceId;
                    body = resetFingerprintRequest.body
                    instanceId = resetFingerprintRequest.instanceId;
                } else {
                    deviceId = resetFingerprintRequest['device_id'];
                    body = resetFingerprintRequest['body'];
                    instanceId = resetFingerprintRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling resetFingerprint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * #### 接口说明
         * 
         * 应用服务器使用SQL语句调用该接口，灵活的搜索所需要的设备资源列表
         * 
         * #### 限制
         * 
         * - 仅**标准版实例、企业版实例**支持该接口调用，基础版不支持。
         * - 单账号调用该接口的 TPS 限制最大为1/S(每秒1次请求数)
         * 
         * #### 类SQL语法使用说明
         * 
         * 类SQL语句有select、from、where(可选)、order by(可选)、limit子句(可选)组成，长度限制为400个字符。子句里的内容大小写敏感，SQL语句的关键字大小写不敏感。
         * 
         * 示例：
         * 
         * &#x60;&#x60;&#x60;
         * select * from device where device_id &#x3D; \&#39;as********\&#39; limit 0,5
         * &#x60;&#x60;&#x60;
         * 
         * ##### SELECT子句
         * 
         * &#x60;&#x60;&#x60;
         * select [field]/[count(*)/count(1)] from device
         * &#x60;&#x60;&#x60;
         * 
         * 其中field为需要获取的字段，请参考响应参数字段名称，也可填*，获取所有字段。
         * 
         * 如果需要统计搜索的设备个数，请填count(*)或者count(1).
         * 
         * ##### FROM子句
         * 
         * &#x60;&#x60;&#x60;
         * from device
         * &#x60;&#x60;&#x60;
         * 
         * from后为要查询的资源名，当前支持\&quot;device\&quot;
         * 
         * ##### WHERE子句(可选)
         * 
         * &#x60;&#x60;&#x60;
         * WHERE [condition1] AND [condition2]
         * &#x60;&#x60;&#x60;
         * 
         * 最多支持5个condition，不支持嵌套；支持的检索字段请参见下面的**搜索条件字段说明**和**支持的运算符**章节
         * 
         * 连接词支持AND、OR，优先级参考标准SQL语法，默认AND优先级高于OR。
         * 
         * ##### LIMIT子句(可选)
         * 
         * &#x60;&#x60;&#x60;
         * limit [offset,] rows
         * &#x60;&#x60;&#x60;
         * 
         * offset标识搜索的偏移量，rows标识返回搜索结果的最大行数，例如：
         * 
         * - limit n ;示例(select * from device limit 10)
         * 
         *   最大返回n条结果数据
         *   
         * - limit m,n; 示例(select * from device limit 20,10) 
         *   搜索偏移量为m，最大返回n条结果数据
         * 
         * ###### 限制
         * 
         *  offset 最大 500， rows最大50，如果不填写limit子句，默认为limit 10
         * 
         * ##### ORDER BY子句(可选)
         * 
         * 用于实现自定义排序，当前支持自定义排序的字段为：\&quot;marker\&quot;。
         * 
         * &#x60;&#x60;&#x60;
         * order by marker [asc]/[desc]
         * &#x60;&#x60;&#x60;
         * 
         * 子句不填写时默认逻辑为随机排序
         * 
         * #### 搜索条件字段说明
         * 
         * | 字段名      | 类型   | 说明             | 取值范围                                                     |
         * | :---------- | :----- | :--------------- | :----------------------------------------------------------- |
         * | app_id      | string | 资源空间ID       | 长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
         * | device_id   | string | 设备ID           | 长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
         * | gateway_id  | string | 网关ID           | 长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
         * | product_id  | string | 设备关联的产品ID | 长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。 |
         * | device_name | string | 设备名称         | 长度不超过256，只允许中文、字母、数字、以及_?\&#39;#().,&amp;%@!-等字符的组合符。 |
         * | node_id     | string | 设备标识码       | 长度不超过64，只允许字母、数字、下划线（_）、连接符（-）的组合 |
         * | status      | string | 设备的状态       | ONLINE(在线)、OFFLINE(离线)、ABNORMAL(异常)、INACTIVE(未激活)、FROZEN(冻结) |
         * | node_type   | string | 设备节点类型     | GATEWAY(直连设备或网关)、ENDPOINT(非直连设备)                |
         * | tag_key     | string | 标签键           | 长度不超过64，只允许中文、字母、数字、以及_.-等字符的组合。  |
         * | tag_value   | string | 标签值           | 长度不超过128，只允许中文、字母、数字、以及_.-等字符的组合。 |
         * | sw_version  | string | 软件版本         | 长度不超过64，只允许字母、数字、下划线（_）、连接符（-）、英文点(.)的组合。 |
         * | fw_version  | string | 固件版本         | 长度不超过64，只允许字母、数字、下划线（_）、连接符（-）、英文点(.)的组合。 |
         * | group_id    | string | 群组Id           | 长度不超过36，十六进制字符串和连接符（-）的组合              |
         * | create_time | string | 设备注册时间     | 格式：yyyy-MM-dd\&#39;T\&#39;HH:mm:ss.SSS\&#39;Z\&#39;，如：2015-06-06T12:10:10.000Z |
         * | marker      | string | 结果记录ID       | 长度为24的十六进制字符串，如ffffffffffffffffffffffff         |
         * 
         * #### 支持的运算符
         * 
         * | 运算符  | 支持的字段                               |
         * | ------- | ---------------------------------------- |
         * | &#x3D;       | 所有                                     |
         * | !&#x3D;      | 所有                                     |
         * | &gt;       | create_time、marker                      |
         * | &lt;       | create_time、marker                      |
         * | like    | device_name、node_id、tag_key、tag_value |
         * | in      | 除tag_key、tag_value以外字段             |
         * | not  in | 除tag_key、tag_value以外字段             |
         * 
         * #### SQL 限制
         * 
         * - like: 只支持前缀匹配，不支持后缀匹配或者通配符匹配。前缀匹配不得少于4个字符，且不能包含任何特殊字符(只允许中文、字母、数字、下划线（_）、连接符（-）). 前缀后必须跟上\&quot;%\&quot;结尾。
         * - 不支持除了count(*)/count(1)以外的其他任何函数。
         * - 不支持其他SQL用法，如嵌套SQL、union、join、别名(Alias)等用法
         * - SQL长度限制为400个字符，单个请求条件最大支持5个。
         * - 不支持\&quot;null\&quot;和空字符串等条件值匹配
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchDevices(searchDevicesRequest?: SearchDevicesRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/search/query-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (searchDevicesRequest !== null && searchDevicesRequest !== undefined) {
                if (searchDevicesRequest instanceof SearchDevicesRequest) {
                    body = searchDevicesRequest.body
                    instanceId = searchDevicesRequest.instanceId;
                } else {
                    body = searchDevicesRequest['body'];
                    instanceId = searchDevicesRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定设备的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDevice(showDeviceRequest?: ShowDeviceRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let instanceId;

            if (showDeviceRequest !== null && showDeviceRequest !== undefined) {
                if (showDeviceRequest instanceof ShowDeviceRequest) {
                    deviceId = showDeviceRequest.deviceId;
                    instanceId = showDeviceRequest.instanceId;
                } else {
                    deviceId = showDeviceRequest['device_id'];
                    instanceId = showDeviceRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling showDevice.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口解冻设备，解除冻结后，设备可以连接上线。该接口仅支持解冻单个设备，如需批量解冻设备，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unfreezeDevice(unfreezeDeviceRequest?: UnfreezeDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/unfreeze",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let instanceId;

            if (unfreezeDeviceRequest !== null && unfreezeDeviceRequest !== undefined) {
                if (unfreezeDeviceRequest instanceof UnfreezeDeviceRequest) {
                    deviceId = unfreezeDeviceRequest.deviceId;
                    instanceId = unfreezeDeviceRequest.instanceId;
                } else {
                    deviceId = unfreezeDeviceRequest['device_id'];
                    instanceId = unfreezeDeviceRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling unfreezeDevice.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改物联网平台中指定设备的基本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDevice(updateDeviceRequest?: UpdateDeviceRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (updateDeviceRequest !== null && updateDeviceRequest !== undefined) {
                if (updateDeviceRequest instanceof UpdateDeviceRequest) {
                    deviceId = updateDeviceRequest.deviceId;
                    body = updateDeviceRequest.body
                    instanceId = updateDeviceRequest.instanceId;
                } else {
                    deviceId = updateDeviceRequest['device_id'];
                    body = updateDeviceRequest['body'];
                    instanceId = updateDeviceRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling updateDevice.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询指定设备的设备影子信息，包括对设备的期望属性信息（desired区）和设备最新上报的属性信息（reported区）。
         * 
         * 设备影子介绍：
         * 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。
         * - 每个设备有且只有一个设备影子，由设备ID唯一标识
         * - 设备影子用于存储设备上报的(状态)属性和应用程序期望的设备(状态)属性
         * - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性
         * - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发
         * 
         * 限制：
         * 设备影子JSON文档中的key不允许特殊字符：点(.)、dollar符号($)、空char(十六进制的ASCII码为00)。如果包含了以上特殊字符则无法正常刷新影子文档。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceShadow(showDeviceShadowRequest?: ShowDeviceShadowRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/shadow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let instanceId;

            if (showDeviceShadowRequest !== null && showDeviceShadowRequest !== undefined) {
                if (showDeviceShadowRequest instanceof ShowDeviceShadowRequest) {
                    deviceId = showDeviceShadowRequest.deviceId;
                    instanceId = showDeviceShadowRequest.instanceId;
                } else {
                    deviceId = showDeviceShadowRequest['device_id'];
                    instanceId = showDeviceShadowRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling showDeviceShadow.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口配置设备影子的预期属性（desired区），当设备上线或者设备上报属性时把属性下发给设备。
         * 
         * 设备影子介绍：
         * 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。
         * - 每个设备有且只有一个设备影子，由设备ID唯一标识
         * - 设备影子用于存储设备上报的(状态)属性和应用程序期望的设备(状态)属性
         * - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性
         * - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发
         * - 该接口仅支持配置单个设备的设备影子的预期数据，如需多个设备的设备影子配置，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * 限制：
         * 设备影子JSON文档中的key不允许特殊字符：点(.)、dollar符号($)、空char(十六进制的ASCII码为00)。如果包含了以上特殊字符则无法正常刷新影子文档。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDeviceShadowDesiredData(updateDeviceShadowDesiredDataRequest?: UpdateDeviceShadowDesiredDataRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/devices/{device_id}/shadow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (updateDeviceShadowDesiredDataRequest !== null && updateDeviceShadowDesiredDataRequest !== undefined) {
                if (updateDeviceShadowDesiredDataRequest instanceof UpdateDeviceShadowDesiredDataRequest) {
                    deviceId = updateDeviceShadowDesiredDataRequest.deviceId;
                    body = updateDeviceShadowDesiredDataRequest.body
                    instanceId = updateDeviceShadowDesiredDataRequest.instanceId;
                } else {
                    deviceId = updateDeviceShadowDesiredDataRequest['device_id'];
                    body = updateDeviceShadowDesiredDataRequest['body'];
                    instanceId = updateDeviceShadowDesiredDataRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling updateDeviceShadowDesiredData.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建数据流转流控策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRoutingFlowControlPolicy(createRoutingFlowControlPolicyRequest?: CreateRoutingFlowControlPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/routing-rule/flowcontrol-policy",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createRoutingFlowControlPolicyRequest !== null && createRoutingFlowControlPolicyRequest !== undefined) {
                if (createRoutingFlowControlPolicyRequest instanceof CreateRoutingFlowControlPolicyRequest) {
                    body = createRoutingFlowControlPolicyRequest.body
                    instanceId = createRoutingFlowControlPolicyRequest.instanceId;
                } else {
                    body = createRoutingFlowControlPolicyRequest['body'];
                    instanceId = createRoutingFlowControlPolicyRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台删除指定数据流转流控策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRoutingFlowControlPolicy(deleteRoutingFlowControlPolicyRequest?: DeleteRoutingFlowControlPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/routing-rule/flowcontrol-policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let instanceId;

            if (deleteRoutingFlowControlPolicyRequest !== null && deleteRoutingFlowControlPolicyRequest !== undefined) {
                if (deleteRoutingFlowControlPolicyRequest instanceof DeleteRoutingFlowControlPolicyRequest) {
                    policyId = deleteRoutingFlowControlPolicyRequest.policyId;
                    instanceId = deleteRoutingFlowControlPolicyRequest.instanceId;
                } else {
                    policyId = deleteRoutingFlowControlPolicyRequest['policy_id'];
                    instanceId = deleteRoutingFlowControlPolicyRequest['Instance-Id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling deleteRoutingFlowControlPolicy.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询在物联网平台设置的数据流转流控策略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRoutingFlowControlPolicy(listRoutingFlowControlPolicyRequest?: ListRoutingFlowControlPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/flowcontrol-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let scope;
            
            let scopeValue;
            
            let policyName;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listRoutingFlowControlPolicyRequest !== null && listRoutingFlowControlPolicyRequest !== undefined) {
                if (listRoutingFlowControlPolicyRequest instanceof ListRoutingFlowControlPolicyRequest) {
                    instanceId = listRoutingFlowControlPolicyRequest.instanceId;
                    scope = listRoutingFlowControlPolicyRequest.scope;
                    scopeValue = listRoutingFlowControlPolicyRequest.scopeValue;
                    policyName = listRoutingFlowControlPolicyRequest.policyName;
                    limit = listRoutingFlowControlPolicyRequest.limit;
                    marker = listRoutingFlowControlPolicyRequest.marker;
                    offset = listRoutingFlowControlPolicyRequest.offset;
                } else {
                    instanceId = listRoutingFlowControlPolicyRequest['Instance-Id'];
                    scope = listRoutingFlowControlPolicyRequest['scope'];
                    scopeValue = listRoutingFlowControlPolicyRequest['scope_value'];
                    policyName = listRoutingFlowControlPolicyRequest['policy_name'];
                    limit = listRoutingFlowControlPolicyRequest['limit'];
                    marker = listRoutingFlowControlPolicyRequest['marker'];
                    offset = listRoutingFlowControlPolicyRequest['offset'];
                }
            }

        
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }
            if (scopeValue !== null && scopeValue !== undefined) {
                localVarQueryParameter['scope_value'] = scopeValue;
            }
            if (policyName !== null && policyName !== undefined) {
                localVarQueryParameter['policy_name'] = policyName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台查询指定数据流转流控策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRoutingFlowControlPolicy(showRoutingFlowControlPolicyRequest?: ShowRoutingFlowControlPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/flowcontrol-policy/{policy_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let policyId;
            
            let instanceId;

            if (showRoutingFlowControlPolicyRequest !== null && showRoutingFlowControlPolicyRequest !== undefined) {
                if (showRoutingFlowControlPolicyRequest instanceof ShowRoutingFlowControlPolicyRequest) {
                    policyId = showRoutingFlowControlPolicyRequest.policyId;
                    instanceId = showRoutingFlowControlPolicyRequest.instanceId;
                } else {
                    policyId = showRoutingFlowControlPolicyRequest['policy_id'];
                    instanceId = showRoutingFlowControlPolicyRequest['Instance-Id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling showRoutingFlowControlPolicy.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台修改指定数据流转流控策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRoutingFlowControlPolicy(updateRoutingFlowControlPolicyRequest?: UpdateRoutingFlowControlPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/routing-rule/flowcontrol-policy/{policy_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let policyId;
            
            let instanceId;

            if (updateRoutingFlowControlPolicyRequest !== null && updateRoutingFlowControlPolicyRequest !== undefined) {
                if (updateRoutingFlowControlPolicyRequest instanceof UpdateRoutingFlowControlPolicyRequest) {
                    policyId = updateRoutingFlowControlPolicyRequest.policyId;
                    body = updateRoutingFlowControlPolicyRequest.body
                    instanceId = updateRoutingFlowControlPolicyRequest.instanceId;
                } else {
                    policyId = updateRoutingFlowControlPolicyRequest['policy_id'];
                    body = updateRoutingFlowControlPolicyRequest['body'];
                    instanceId = updateRoutingFlowControlPolicyRequest['Instance-Id'];
                }
            }

        
            if (policyId === null || policyId === undefined) {
            throw new RequiredError('policyId','Required parameter policyId was null or undefined when calling updateRoutingFlowControlPolicy.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'policy_id': policyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 物联网平台可向设备下发消息，应用服务器可调用此接口向指定设备下发消息，以实现对设备的控制。应用将消息下发给平台后，平台返回应用响应结果，平台再将消息发送给设备。平台返回应用响应结果不一定是设备接收结果，建议用户应用通过订阅[[设备消息状态变更通知](https://support.huaweicloud.com/api-iothub/iot_06_v5_01203.html)](tag:hws)[[设备消息状态变更通知](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_01203.html)](tag:hws_hk)，订阅后平台会将设备接收结果推送给订阅的应用。
         * 注意：
         * - 此接口适用于MQTT设备消息下发，暂不支持其他协议接入的设备消息下发。
         * - 此接口仅支持单个设备消息下发，如需多个设备消息下发，请参见 [[创建批量任务](https://support.huaweicloud.com/api-iothub/iot_06_v5_0045.html)](tag:hws)[[创建批量任务](https://support.huaweicloud.com/intl/zh-cn/api-iothub/iot_06_v5_0045.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMessage(createMessageRequest?: CreateMessageRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (createMessageRequest !== null && createMessageRequest !== undefined) {
                if (createMessageRequest instanceof CreateMessageRequest) {
                    deviceId = createMessageRequest.deviceId;
                    body = createMessageRequest.body
                    instanceId = createMessageRequest.instanceId;
                } else {
                    deviceId = createMessageRequest['device_id'];
                    body = createMessageRequest['body'];
                    instanceId = createMessageRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling createMessage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询平台下发给设备的消息，平台为每个设备默认最多保存20条消息，超过20条后， 后续的消息会替换下发最早的消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDeviceMessages(listDeviceMessagesRequest?: ListDeviceMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let instanceId;

            if (listDeviceMessagesRequest !== null && listDeviceMessagesRequest !== undefined) {
                if (listDeviceMessagesRequest instanceof ListDeviceMessagesRequest) {
                    deviceId = listDeviceMessagesRequest.deviceId;
                    instanceId = listDeviceMessagesRequest.instanceId;
                } else {
                    deviceId = listDeviceMessagesRequest['device_id'];
                    instanceId = listDeviceMessagesRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling listDeviceMessages.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询平台下发给设备的指定消息id的消息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceMessage(showDeviceMessageRequest?: ShowDeviceMessageRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/messages/{message_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let deviceId;
            
            let messageId;
            
            let instanceId;

            if (showDeviceMessageRequest !== null && showDeviceMessageRequest !== undefined) {
                if (showDeviceMessageRequest instanceof ShowDeviceMessageRequest) {
                    deviceId = showDeviceMessageRequest.deviceId;
                    messageId = showDeviceMessageRequest.messageId;
                    instanceId = showDeviceMessageRequest.instanceId;
                } else {
                    deviceId = showDeviceMessageRequest['device_id'];
                    messageId = showDeviceMessageRequest['message_id'];
                    instanceId = showDeviceMessageRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling showDeviceMessage.');
            }
            if (messageId === null || messageId === undefined) {
            throw new RequiredError('messageId','Required parameter messageId was null or undefined when calling showDeviceMessage.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'device_id': deviceId,'message_id': messageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可调用此接口创建升级包关联OBS对象
         * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOtaPackage(createOtaPackageRequest?: CreateOtaPackageRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/ota-upgrades/packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createOtaPackageRequest !== null && createOtaPackageRequest !== undefined) {
                if (createOtaPackageRequest instanceof CreateOtaPackageRequest) {
                    body = createOtaPackageRequest.body
                    instanceId = createOtaPackageRequest.instanceId;
                } else {
                    body = createOtaPackageRequest['body'];
                    instanceId = createOtaPackageRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可调用此接口删除关联OBS对象的升级包信息，不会删除OBS上对象
         * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOtaPackage(deleteOtaPackageRequest?: DeleteOtaPackageRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/ota-upgrades/packages/{package_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let packageId;
            
            let instanceId;

            if (deleteOtaPackageRequest !== null && deleteOtaPackageRequest !== undefined) {
                if (deleteOtaPackageRequest instanceof DeleteOtaPackageRequest) {
                    packageId = deleteOtaPackageRequest.packageId;
                    instanceId = deleteOtaPackageRequest.instanceId;
                } else {
                    packageId = deleteOtaPackageRequest['package_id'];
                    instanceId = deleteOtaPackageRequest['Instance-Id'];
                }
            }

        
            if (packageId === null || packageId === undefined) {
            throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling deleteOtaPackage.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'package_id': packageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可调用此接口查询关联OBS对象的升级包列表
         * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOtaPackageInfo(listOtaPackageInfoRequest?: ListOtaPackageInfoRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/ota-upgrades/packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let packageType;
            
            let instanceId;
            
            let appId;
            
            let productId;
            
            let version;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listOtaPackageInfoRequest !== null && listOtaPackageInfoRequest !== undefined) {
                if (listOtaPackageInfoRequest instanceof ListOtaPackageInfoRequest) {
                    packageType = listOtaPackageInfoRequest.packageType;
                    instanceId = listOtaPackageInfoRequest.instanceId;
                    appId = listOtaPackageInfoRequest.appId;
                    productId = listOtaPackageInfoRequest.productId;
                    version = listOtaPackageInfoRequest.version;
                    limit = listOtaPackageInfoRequest.limit;
                    marker = listOtaPackageInfoRequest.marker;
                    offset = listOtaPackageInfoRequest.offset;
                } else {
                    packageType = listOtaPackageInfoRequest['package_type'];
                    instanceId = listOtaPackageInfoRequest['Instance-Id'];
                    appId = listOtaPackageInfoRequest['app_id'];
                    productId = listOtaPackageInfoRequest['product_id'];
                    version = listOtaPackageInfoRequest['version'];
                    limit = listOtaPackageInfoRequest['limit'];
                    marker = listOtaPackageInfoRequest['marker'];
                    offset = listOtaPackageInfoRequest['offset'];
                }
            }

        
            if (packageType === null || packageType === undefined) {
                throw new RequiredError('packageType','Required parameter packageType was null or undefined when calling listOtaPackageInfo.');
            }
            if (packageType !== null && packageType !== undefined) {
                localVarQueryParameter['package_type'] = packageType;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (productId !== null && productId !== undefined) {
                localVarQueryParameter['product_id'] = productId;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可调用此接口查询关联OBS对象的升级包详情
         * 使用前提：使用该API需要您授权设备接入服务(IoTDA)的实例访问对象存储服务(OBS)以及 密钥管理服务(KMS Administrator)的权限。在“[[统一身份认证服务（IAM）](https://console.huaweicloud.com/iam)](tag:hws)[[统一身份认证服务（IAM）](https://console-intl.huaweicloud.com/iam)](tag:hws_hk) - 委托”中将委托名称为iotda_admin_trust的委托授权KMS Administrator和OBS OperateAccess
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOtaPackage(showOtaPackageRequest?: ShowOtaPackageRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/ota-upgrades/packages/{package_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let packageId;
            
            let instanceId;

            if (showOtaPackageRequest !== null && showOtaPackageRequest !== undefined) {
                if (showOtaPackageRequest instanceof ShowOtaPackageRequest) {
                    packageId = showOtaPackageRequest.packageId;
                    instanceId = showOtaPackageRequest.instanceId;
                } else {
                    packageId = showOtaPackageRequest['package_id'];
                    instanceId = showOtaPackageRequest['Instance-Id'];
                }
            }

        
            if (packageId === null || packageId === undefined) {
            throw new RequiredError('packageId','Required parameter packageId was null or undefined when calling showOtaPackage.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'package_id': packageId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口创建产品。此接口仅创建了产品，没有创建和安装插件，如果需要对数据进行编解码，还需要在平台开发和安装插件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createProduct(createProductRequest?: CreateProductRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/products",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createProductRequest !== null && createProductRequest !== undefined) {
                if (createProductRequest instanceof CreateProductRequest) {
                    instanceId = createProductRequest.instanceId;
                    body = createProductRequest.body
                } else {
                    instanceId = createProductRequest['Instance-Id'];
                    body = createProductRequest['body'];
                }
            }

        
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除已导入物联网平台的指定产品模型。此接口仅删除了产品，未删除关联的插件，在产品下存在设备时，该产品不允许删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteProduct(deleteProductRequest?: DeleteProductRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/products/{product_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let instanceId;
            
            let appId;

            if (deleteProductRequest !== null && deleteProductRequest !== undefined) {
                if (deleteProductRequest instanceof DeleteProductRequest) {
                    productId = deleteProductRequest.productId;
                    instanceId = deleteProductRequest.instanceId;
                    appId = deleteProductRequest.appId;
                } else {
                    productId = deleteProductRequest['product_id'];
                    instanceId = deleteProductRequest['Instance-Id'];
                    appId = deleteProductRequest['app_id'];
                }
            }

        
            if (productId === null || productId === undefined) {
            throw new RequiredError('productId','Required parameter productId was null or undefined when calling deleteProduct.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'product_id': productId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询已导入物联网平台的产品模型信息列表，了解产品模型的概要信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProducts(listProductsRequest?: ListProductsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let limit;
            
            let marker;
            
            let appId;
            
            let productName;
            
            let offset;

            if (listProductsRequest !== null && listProductsRequest !== undefined) {
                if (listProductsRequest instanceof ListProductsRequest) {
                    instanceId = listProductsRequest.instanceId;
                    limit = listProductsRequest.limit;
                    marker = listProductsRequest.marker;
                    appId = listProductsRequest.appId;
                    productName = listProductsRequest.productName;
                    offset = listProductsRequest.offset;
                } else {
                    instanceId = listProductsRequest['Instance-Id'];
                    limit = listProductsRequest['limit'];
                    marker = listProductsRequest['marker'];
                    appId = listProductsRequest['app_id'];
                    productName = listProductsRequest['product_name'];
                    offset = listProductsRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (productName !== null && productName !== undefined) {
                localVarQueryParameter['product_name'] = productName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询已导入物联网平台的指定产品模型详细信息，包括产品模型的服务、属性、命令等。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProduct(showProductRequest?: ShowProductRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/products/{product_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let productId;
            
            let instanceId;
            
            let appId;

            if (showProductRequest !== null && showProductRequest !== undefined) {
                if (showProductRequest instanceof ShowProductRequest) {
                    productId = showProductRequest.productId;
                    instanceId = showProductRequest.instanceId;
                    appId = showProductRequest.appId;
                } else {
                    productId = showProductRequest['product_id'];
                    instanceId = showProductRequest['Instance-Id'];
                    appId = showProductRequest['app_id'];
                }
            }

        
            if (productId === null || productId === undefined) {
            throw new RequiredError('productId','Required parameter productId was null or undefined when calling showProduct.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'product_id': productId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改已导入物联网平台的指定产品模型，包括产品模型的服务、属性、命令等。此接口仅修改了产品，未修改和安装插件，如果修改了产品中的service定义，且在平台中有对应的插件，请修改并重新安装插件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProduct(updateProductRequest?: UpdateProductRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/products/{product_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let productId;
            
            let instanceId;

            if (updateProductRequest !== null && updateProductRequest !== undefined) {
                if (updateProductRequest instanceof UpdateProductRequest) {
                    productId = updateProductRequest.productId;
                    body = updateProductRequest.body
                    instanceId = updateProductRequest.instanceId;
                } else {
                    productId = updateProductRequest['product_id'];
                    body = updateProductRequest['body'];
                    instanceId = updateProductRequest['Instance-Id'];
                }
            }

        
            if (productId === null || productId === undefined) {
            throw new RequiredError('productId','Required parameter productId was null or undefined when calling updateProduct.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'product_id': productId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向设备发送指令用以查询设备的实时属性, 并由设备将属性查询的结果同步返回给应用服务器。
         * 注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProperties(listPropertiesRequest?: ListPropertiesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let deviceId;
            
            let serviceId;
            
            let instanceId;

            if (listPropertiesRequest !== null && listPropertiesRequest !== undefined) {
                if (listPropertiesRequest instanceof ListPropertiesRequest) {
                    deviceId = listPropertiesRequest.deviceId;
                    serviceId = listPropertiesRequest.serviceId;
                    instanceId = listPropertiesRequest.instanceId;
                } else {
                    deviceId = listPropertiesRequest['device_id'];
                    serviceId = listPropertiesRequest['service_id'];
                    instanceId = listPropertiesRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling listProperties.');
            }
            if (serviceId === null || serviceId === undefined) {
                throw new RequiredError('serviceId','Required parameter serviceId was null or undefined when calling listProperties.');
            }
            if (serviceId !== null && serviceId !== undefined) {
                localVarQueryParameter['service_id'] = serviceId;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向指定设备下发属性。平台负责将属性以同步方式发送给设备，并将设备执行属性结果同步返回。
         * 注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateProperties(updatePropertiesRequest?: UpdatePropertiesRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/devices/{device_id}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let deviceId;
            
            let instanceId;

            if (updatePropertiesRequest !== null && updatePropertiesRequest !== undefined) {
                if (updatePropertiesRequest instanceof UpdatePropertiesRequest) {
                    deviceId = updatePropertiesRequest.deviceId;
                    body = updatePropertiesRequest.body
                    instanceId = updatePropertiesRequest.instanceId;
                } else {
                    deviceId = updatePropertiesRequest['device_id'];
                    body = updatePropertiesRequest['body'];
                    instanceId = updatePropertiesRequest['Instance-Id'];
                }
            }

        
            if (deviceId === null || deviceId === undefined) {
            throw new RequiredError('deviceId','Required parameter deviceId was null or undefined when calling updateProperties.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'device_id': deviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建一条规则触发条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRoutingRule(createRoutingRuleRequest?: CreateRoutingRuleRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/routing-rule/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createRoutingRuleRequest !== null && createRoutingRuleRequest !== undefined) {
                if (createRoutingRuleRequest instanceof CreateRoutingRuleRequest) {
                    body = createRoutingRuleRequest.body
                    instanceId = createRoutingRuleRequest.instanceId;
                } else {
                    body = createRoutingRuleRequest['body'];
                    instanceId = createRoutingRuleRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建一条规则动作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRuleAction(createRuleActionRequest?: CreateRuleActionRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/routing-rule/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createRuleActionRequest !== null && createRuleActionRequest !== undefined) {
                if (createRuleActionRequest instanceof CreateRuleActionRequest) {
                    body = createRuleActionRequest.body
                    instanceId = createRuleActionRequest.instanceId;
                } else {
                    body = createRuleActionRequest['body'];
                    instanceId = createRuleActionRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除物联网平台中的指定规则条件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRoutingRule(deleteRoutingRuleRequest?: DeleteRoutingRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/routing-rule/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let instanceId;

            if (deleteRoutingRuleRequest !== null && deleteRoutingRuleRequest !== undefined) {
                if (deleteRoutingRuleRequest instanceof DeleteRoutingRuleRequest) {
                    ruleId = deleteRoutingRuleRequest.ruleId;
                    instanceId = deleteRoutingRuleRequest.instanceId;
                } else {
                    ruleId = deleteRoutingRuleRequest['rule_id'];
                    instanceId = deleteRoutingRuleRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteRoutingRule.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除物联网平台中的指定规则动作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRuleAction(deleteRuleActionRequest?: DeleteRuleActionRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/routing-rule/actions/{action_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let actionId;
            
            let instanceId;

            if (deleteRuleActionRequest !== null && deleteRuleActionRequest !== undefined) {
                if (deleteRuleActionRequest instanceof DeleteRuleActionRequest) {
                    actionId = deleteRuleActionRequest.actionId;
                    instanceId = deleteRuleActionRequest.instanceId;
                } else {
                    actionId = deleteRuleActionRequest['action_id'];
                    instanceId = deleteRuleActionRequest['Instance-Id'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
            throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling deleteRuleAction.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'action_id': actionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中设置的规则条件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRoutingRules(listRoutingRulesRequest?: ListRoutingRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let resource;
            
            let event;
            
            let appType;
            
            let appId;
            
            let ruleName;
            
            let active;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listRoutingRulesRequest !== null && listRoutingRulesRequest !== undefined) {
                if (listRoutingRulesRequest instanceof ListRoutingRulesRequest) {
                    instanceId = listRoutingRulesRequest.instanceId;
                    resource = listRoutingRulesRequest.resource;
                    event = listRoutingRulesRequest.event;
                    appType = listRoutingRulesRequest.appType;
                    appId = listRoutingRulesRequest.appId;
                    ruleName = listRoutingRulesRequest.ruleName;
                    active = listRoutingRulesRequest.active;
                    limit = listRoutingRulesRequest.limit;
                    marker = listRoutingRulesRequest.marker;
                    offset = listRoutingRulesRequest.offset;
                } else {
                    instanceId = listRoutingRulesRequest['Instance-Id'];
                    resource = listRoutingRulesRequest['resource'];
                    event = listRoutingRulesRequest['event'];
                    appType = listRoutingRulesRequest['app_type'];
                    appId = listRoutingRulesRequest['app_id'];
                    ruleName = listRoutingRulesRequest['rule_name'];
                    active = listRoutingRulesRequest['active'];
                    limit = listRoutingRulesRequest['limit'];
                    marker = listRoutingRulesRequest['marker'];
                    offset = listRoutingRulesRequest['offset'];
                }
            }

        
            if (resource !== null && resource !== undefined) {
                localVarQueryParameter['resource'] = resource;
            }
            if (event !== null && event !== undefined) {
                localVarQueryParameter['event'] = event;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
            }
            if (active !== null && active !== undefined) {
                localVarQueryParameter['active'] = active;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中设置的规则动作列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRuleActions(listRuleActionsRequest?: ListRuleActionsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let ruleId;
            
            let channel;
            
            let appType;
            
            let appId;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listRuleActionsRequest !== null && listRuleActionsRequest !== undefined) {
                if (listRuleActionsRequest instanceof ListRuleActionsRequest) {
                    instanceId = listRuleActionsRequest.instanceId;
                    ruleId = listRuleActionsRequest.ruleId;
                    channel = listRuleActionsRequest.channel;
                    appType = listRuleActionsRequest.appType;
                    appId = listRuleActionsRequest.appId;
                    limit = listRuleActionsRequest.limit;
                    marker = listRuleActionsRequest.marker;
                    offset = listRuleActionsRequest.offset;
                } else {
                    instanceId = listRuleActionsRequest['Instance-Id'];
                    ruleId = listRuleActionsRequest['rule_id'];
                    channel = listRuleActionsRequest['channel'];
                    appType = listRuleActionsRequest['app_type'];
                    appId = listRuleActionsRequest['app_id'];
                    limit = listRuleActionsRequest['limit'];
                    marker = listRuleActionsRequest['marker'];
                    offset = listRuleActionsRequest['offset'];
                }
            }

        
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
            }
            if (channel !== null && channel !== undefined) {
                localVarQueryParameter['channel'] = channel;
            }
            if (appType !== null && appType !== undefined) {
                localVarQueryParameter['app_type'] = appType;
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定规则条件的配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRoutingRule(showRoutingRuleRequest?: ShowRoutingRuleRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let instanceId;

            if (showRoutingRuleRequest !== null && showRoutingRuleRequest !== undefined) {
                if (showRoutingRuleRequest instanceof ShowRoutingRuleRequest) {
                    ruleId = showRoutingRuleRequest.ruleId;
                    instanceId = showRoutingRuleRequest.instanceId;
                } else {
                    ruleId = showRoutingRuleRequest['rule_id'];
                    instanceId = showRoutingRuleRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showRoutingRule.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定规则动作的配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRuleAction(showRuleActionRequest?: ShowRuleActionRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/actions/{action_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let actionId;
            
            let instanceId;

            if (showRuleActionRequest !== null && showRuleActionRequest !== undefined) {
                if (showRuleActionRequest instanceof ShowRuleActionRequest) {
                    actionId = showRuleActionRequest.actionId;
                    instanceId = showRuleActionRequest.instanceId;
                } else {
                    actionId = showRuleActionRequest['action_id'];
                    instanceId = showRuleActionRequest['Instance-Id'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
            throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling showRuleAction.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'action_id': actionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改物联网平台中指定规则条件的配置参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRoutingRule(updateRoutingRuleRequest?: UpdateRoutingRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/routing-rule/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleId;
            
            let instanceId;

            if (updateRoutingRuleRequest !== null && updateRoutingRuleRequest !== undefined) {
                if (updateRoutingRuleRequest instanceof UpdateRoutingRuleRequest) {
                    ruleId = updateRoutingRuleRequest.ruleId;
                    body = updateRoutingRuleRequest.body
                    instanceId = updateRoutingRuleRequest.instanceId;
                } else {
                    ruleId = updateRoutingRuleRequest['rule_id'];
                    body = updateRoutingRuleRequest['body'];
                    instanceId = updateRoutingRuleRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateRoutingRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改物联网平台中指定规则动作的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRuleAction(updateRuleActionRequest?: UpdateRuleActionRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/routing-rule/actions/{action_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let actionId;
            
            let instanceId;

            if (updateRuleActionRequest !== null && updateRuleActionRequest !== undefined) {
                if (updateRuleActionRequest instanceof UpdateRuleActionRequest) {
                    actionId = updateRuleActionRequest.actionId;
                    body = updateRuleActionRequest.body
                    instanceId = updateRuleActionRequest.instanceId;
                } else {
                    actionId = updateRuleActionRequest['action_id'];
                    body = updateRuleActionRequest['body'];
                    instanceId = updateRuleActionRequest['Instance-Id'];
                }
            }

        
            if (actionId === null || actionId === undefined) {
            throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling updateRuleAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'action_id': actionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改物联网平台中指定规则的状态，激活或者去激活规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeRuleStatus(changeRuleStatusRequest?: ChangeRuleStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/rules/{rule_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleId;
            
            let instanceId;

            if (changeRuleStatusRequest !== null && changeRuleStatusRequest !== undefined) {
                if (changeRuleStatusRequest instanceof ChangeRuleStatusRequest) {
                    ruleId = changeRuleStatusRequest.ruleId;
                    body = changeRuleStatusRequest.body
                    instanceId = changeRuleStatusRequest.instanceId;
                } else {
                    ruleId = changeRuleStatusRequest['rule_id'];
                    body = changeRuleStatusRequest['body'];
                    instanceId = changeRuleStatusRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling changeRuleStatus.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台创建一条规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRule(createRuleRequest?: CreateRuleRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (createRuleRequest !== null && createRuleRequest !== undefined) {
                if (createRuleRequest instanceof CreateRuleRequest) {
                    body = createRuleRequest.body
                    instanceId = createRuleRequest.instanceId;
                } else {
                    body = createRuleRequest['body'];
                    instanceId = createRuleRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口删除物联网平台中的指定规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRule(deleteRuleRequest?: DeleteRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let instanceId;

            if (deleteRuleRequest !== null && deleteRuleRequest !== undefined) {
                if (deleteRuleRequest instanceof DeleteRuleRequest) {
                    ruleId = deleteRuleRequest.ruleId;
                    instanceId = deleteRuleRequest.instanceId;
                } else {
                    ruleId = deleteRuleRequest['rule_id'];
                    instanceId = deleteRuleRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deleteRule.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中设置的规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRules(listRulesRequest?: ListRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let appId;
            
            let ruleType;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listRulesRequest !== null && listRulesRequest !== undefined) {
                if (listRulesRequest instanceof ListRulesRequest) {
                    instanceId = listRulesRequest.instanceId;
                    appId = listRulesRequest.appId;
                    ruleType = listRulesRequest.ruleType;
                    limit = listRulesRequest.limit;
                    marker = listRulesRequest.marker;
                    offset = listRulesRequest.offset;
                } else {
                    instanceId = listRulesRequest['Instance-Id'];
                    appId = listRulesRequest['app_id'];
                    ruleType = listRulesRequest['rule_type'];
                    limit = listRulesRequest['limit'];
                    marker = listRulesRequest['marker'];
                    offset = listRulesRequest['offset'];
                }
            }

        
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (ruleType !== null && ruleType !== undefined) {
                localVarQueryParameter['rule_type'] = ruleType;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询物联网平台中指定规则的配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRule(showRuleRequest?: ShowRuleRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;
            
            let instanceId;

            if (showRuleRequest !== null && showRuleRequest !== undefined) {
                if (showRuleRequest instanceof ShowRuleRequest) {
                    ruleId = showRuleRequest.ruleId;
                    instanceId = showRuleRequest.instanceId;
                } else {
                    ruleId = showRuleRequest['rule_id'];
                    instanceId = showRuleRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showRule.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口修改物联网平台中指定规则的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRule(updateRuleRequest?: UpdateRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let ruleId;
            
            let instanceId;

            if (updateRuleRequest !== null && updateRuleRequest !== undefined) {
                if (updateRuleRequest instanceof UpdateRuleRequest) {
                    ruleId = updateRuleRequest.ruleId;
                    body = updateRuleRequest.body
                    instanceId = updateRuleRequest.instanceId;
                } else {
                    ruleId = updateRuleRequest['rule_id'];
                    body = updateRuleRequest['body'];
                    instanceId = updateRuleRequest['Instance-Id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询绑定了指定标签的资源。当前支持标签的资源有Device(设备)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourcesByTags(listResourcesByTagsRequest?: ListResourcesByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/tags/query-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let instanceId;
            
            let limit;
            
            let marker;
            
            let offset;

            if (listResourcesByTagsRequest !== null && listResourcesByTagsRequest !== undefined) {
                if (listResourcesByTagsRequest instanceof ListResourcesByTagsRequest) {
                    instanceId = listResourcesByTagsRequest.instanceId;
                    limit = listResourcesByTagsRequest.limit;
                    marker = listResourcesByTagsRequest.marker;
                    offset = listResourcesByTagsRequest.offset;
                    body = listResourcesByTagsRequest.body
                } else {
                    instanceId = listResourcesByTagsRequest['Instance-Id'];
                    limit = listResourcesByTagsRequest['limit'];
                    marker = listResourcesByTagsRequest['marker'];
                    offset = listResourcesByTagsRequest['offset'];
                    body = listResourcesByTagsRequest['body'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为指定资源绑定标签。当前支持标签的资源有Device(设备)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        tagDevice(tagDeviceRequest?: TagDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/tags/bind-resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (tagDeviceRequest !== null && tagDeviceRequest !== undefined) {
                if (tagDeviceRequest instanceof TagDeviceRequest) {
                    instanceId = tagDeviceRequest.instanceId;
                    body = tagDeviceRequest.body
                } else {
                    instanceId = tagDeviceRequest['Instance-Id'];
                    body = tagDeviceRequest['body'];
                }
            }

        
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口为指定资源解绑标签。当前支持标签的资源有Device(设备)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        untagDevice(untagDeviceRequest?: UntagDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/tags/unbind-resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (untagDeviceRequest !== null && untagDeviceRequest !== undefined) {
                if (untagDeviceRequest instanceof UntagDeviceRequest) {
                    instanceId = untagDeviceRequest.instanceId;
                    body = untagDeviceRequest.body
                } else {
                    instanceId = untagDeviceRequest['Instance-Id'];
                    body = untagDeviceRequest['body'];
                }
            }

        
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可以通过该接口创建隧道（WebSocket协议），应用服务器和设备可以通过该隧道进行数据传输。
         * 
         * - 该API接口在基础版不支持。
         * - 该API调用后平台会向对应的MQTT/MQTTS设备下发隧道地址及密钥，同时给应用服务器也返回隧道地址及密钥，设备可以通过该地址及密钥创建WebSocket协议连接。
         * - 一个设备无法创建多个隧道。
         * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addTunnel(addTunnelRequest?: AddTunnelRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/tunnels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let instanceId;

            if (addTunnelRequest !== null && addTunnelRequest !== undefined) {
                if (addTunnelRequest instanceof AddTunnelRequest) {
                    body = addTunnelRequest.body
                    instanceId = addTunnelRequest.instanceId;
                } else {
                    body = addTunnelRequest['body'];
                    instanceId = addTunnelRequest['Instance-Id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可通过该接口关闭某个设备隧道。关闭后可以再次连接。
         * - 该API接口在基础版不支持。
         * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        closeDeviceTunnel(closeDeviceTunnelRequest?: CloseDeviceTunnelRequest) {
            const options = {
                method: "PUT",
                url: "/v5/iot/{project_id}/tunnels/{tunnel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tunnelId;
            
            let instanceId;

            if (closeDeviceTunnelRequest !== null && closeDeviceTunnelRequest !== undefined) {
                if (closeDeviceTunnelRequest instanceof CloseDeviceTunnelRequest) {
                    tunnelId = closeDeviceTunnelRequest.tunnelId;
                    instanceId = closeDeviceTunnelRequest.instanceId;
                } else {
                    tunnelId = closeDeviceTunnelRequest['tunnel_id'];
                    instanceId = closeDeviceTunnelRequest['Instance-Id'];
                }
            }

        
            if (tunnelId === null || tunnelId === undefined) {
            throw new RequiredError('tunnelId','Required parameter tunnelId was null or undefined when calling closeDeviceTunnel.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'tunnel_id': tunnelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可通过该接口删除某个设备隧道。删除后该通道不存在，无法再次连接。
         * - 该API接口在基础版不支持。
         * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDeviceTunnel(deleteDeviceTunnelRequest?: DeleteDeviceTunnelRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/tunnels/{tunnel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tunnelId;
            
            let instanceId;

            if (deleteDeviceTunnelRequest !== null && deleteDeviceTunnelRequest !== undefined) {
                if (deleteDeviceTunnelRequest instanceof DeleteDeviceTunnelRequest) {
                    tunnelId = deleteDeviceTunnelRequest.tunnelId;
                    instanceId = deleteDeviceTunnelRequest.instanceId;
                } else {
                    tunnelId = deleteDeviceTunnelRequest['tunnel_id'];
                    instanceId = deleteDeviceTunnelRequest['Instance-Id'];
                }
            }

        
            if (tunnelId === null || tunnelId === undefined) {
            throw new RequiredError('tunnelId','Required parameter tunnelId was null or undefined when calling deleteDeviceTunnel.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'tunnel_id': tunnelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可通过该接口查询某项目下的所有设备隧道，以实现对设备管理。应用服务器可通过此接口向平台查询设备隧道建立的情况。
         * - 该API接口在基础版不支持。
         * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDeviceTunnels(listDeviceTunnelsRequest?: ListDeviceTunnelsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/tunnels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let deviceId;

            if (listDeviceTunnelsRequest !== null && listDeviceTunnelsRequest !== undefined) {
                if (listDeviceTunnelsRequest instanceof ListDeviceTunnelsRequest) {
                    instanceId = listDeviceTunnelsRequest.instanceId;
                    deviceId = listDeviceTunnelsRequest.deviceId;
                } else {
                    instanceId = listDeviceTunnelsRequest['Instance-Id'];
                    deviceId = listDeviceTunnelsRequest['device_id'];
                }
            }

        
            if (deviceId !== null && deviceId !== undefined) {
                localVarQueryParameter['device_id'] = deviceId;
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户可通过该接口查询某项目中的某个设备隧道，查看该设备隧道的信息与连接情况。应用服务器可调用此接口向平台查询设备隧道建立情况。
         * - 该API接口在基础版不支持。
         * - 具体应用可见“设备远程登录”功能，请参见[[设备远程登录](https://support.huaweicloud.com/usermanual-iothub/iot_01_00301.html)](tag:hws)[[设备远程登录](https://support.huaweicloud.com/intl/zh-cn/usermanual-iothub/iot_01_00301.html)](tag:hws_hk)。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDeviceTunnel(showDeviceTunnelRequest?: ShowDeviceTunnelRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/tunnels/{tunnel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let tunnelId;
            
            let instanceId;

            if (showDeviceTunnelRequest !== null && showDeviceTunnelRequest !== undefined) {
                if (showDeviceTunnelRequest instanceof ShowDeviceTunnelRequest) {
                    tunnelId = showDeviceTunnelRequest.tunnelId;
                    instanceId = showDeviceTunnelRequest.instanceId;
                } else {
                    tunnelId = showDeviceTunnelRequest['tunnel_id'];
                    instanceId = showDeviceTunnelRequest['Instance-Id'];
                }
            }

        
            if (tunnelId === null || tunnelId === undefined) {
            throw new RequiredError('tunnelId','Required parameter tunnelId was null or undefined when calling showDeviceTunnel.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'tunnel_id': tunnelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): IoTDAClient {
    return new IoTDAClient(client);
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