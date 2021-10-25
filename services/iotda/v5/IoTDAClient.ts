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
import { AddCertificateRequest } from './model/AddCertificateRequest';
import { AddCertificateResponse } from './model/AddCertificateResponse';
import { AddDevice } from './model/AddDevice';
import { AddDeviceGroupDTO } from './model/AddDeviceGroupDTO';
import { AddDeviceGroupRequest } from './model/AddDeviceGroupRequest';
import { AddDeviceGroupResponse } from './model/AddDeviceGroupResponse';
import { AddDeviceRequest } from './model/AddDeviceRequest';
import { AddDeviceResponse } from './model/AddDeviceResponse';
import { AddProduct } from './model/AddProduct';
import { AddQueueRequest } from './model/AddQueueRequest';
import { AddQueueResponse } from './model/AddQueueResponse';
import { AddRuleReq } from './model/AddRuleReq';
import { AmqpForwarding } from './model/AmqpForwarding';
import { ApplicationDTO } from './model/ApplicationDTO';
import { AsyncDeviceCommandRequest } from './model/AsyncDeviceCommandRequest';
import { AuthInfo } from './model/AuthInfo';
import { AuthInfoWithoutSecret } from './model/AuthInfoWithoutSecret';
import { BatchShowQueueRequest } from './model/BatchShowQueueRequest';
import { BatchShowQueueResponse } from './model/BatchShowQueueResponse';
import { BatchTaskFile } from './model/BatchTaskFile';
import { BindTagsDTO } from './model/BindTagsDTO';
import { CertificatesRspDTO } from './model/CertificatesRspDTO';
import { ChangeRuleStatusRequest } from './model/ChangeRuleStatusRequest';
import { ChangeRuleStatusResponse } from './model/ChangeRuleStatusResponse';
import { ChannelDetail } from './model/ChannelDetail';
import { CheckCertificateRequest } from './model/CheckCertificateRequest';
import { CheckCertificateResponse } from './model/CheckCertificateResponse';
import { Cmd } from './model/Cmd';
import { ConditionGroup } from './model/ConditionGroup';
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
import { CreateProductRequest } from './model/CreateProductRequest';
import { CreateProductResponse } from './model/CreateProductResponse';
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
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteDeviceGroupRequest } from './model/DeleteDeviceGroupRequest';
import { DeleteDeviceGroupResponse } from './model/DeleteDeviceGroupResponse';
import { DeleteDeviceRequest } from './model/DeleteDeviceRequest';
import { DeleteDeviceResponse } from './model/DeleteDeviceResponse';
import { DeleteProductRequest } from './model/DeleteProductRequest';
import { DeleteProductResponse } from './model/DeleteProductResponse';
import { DeleteQueueRequest } from './model/DeleteQueueRequest';
import { DeleteQueueResponse } from './model/DeleteQueueResponse';
import { DeleteRoutingRuleRequest } from './model/DeleteRoutingRuleRequest';
import { DeleteRoutingRuleResponse } from './model/DeleteRoutingRuleResponse';
import { DeleteRuleActionRequest } from './model/DeleteRuleActionRequest';
import { DeleteRuleActionResponse } from './model/DeleteRuleActionResponse';
import { DeleteRuleRequest } from './model/DeleteRuleRequest';
import { DeleteRuleResponse } from './model/DeleteRuleResponse';
import { DeviceCommandRequest } from './model/DeviceCommandRequest';
import { DeviceDataCondition } from './model/DeviceDataCondition';
import { DeviceGroupResponseDTO } from './model/DeviceGroupResponseDTO';
import { DeviceMessage } from './model/DeviceMessage';
import { DeviceMessageRequest } from './model/DeviceMessageRequest';
import { DevicePropertiesRequest } from './model/DevicePropertiesRequest';
import { DeviceShadowData } from './model/DeviceShadowData';
import { DeviceShadowProperties } from './model/DeviceShadowProperties';
import { DisForwarding } from './model/DisForwarding';
import { DmsKafkaForwarding } from './model/DmsKafkaForwarding';
import { ErrorInfo } from './model/ErrorInfo';
import { FreezeDeviceRequest } from './model/FreezeDeviceRequest';
import { FreezeDeviceResponse } from './model/FreezeDeviceResponse';
import { HttpForwarding } from './model/HttpForwarding';
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
import { ListDevicesRequest } from './model/ListDevicesRequest';
import { ListDevicesResponse } from './model/ListDevicesResponse';
import { ListProductsRequest } from './model/ListProductsRequest';
import { ListProductsResponse } from './model/ListProductsResponse';
import { ListPropertiesRequest } from './model/ListPropertiesRequest';
import { ListPropertiesResponse } from './model/ListPropertiesResponse';
import { ListResourcesByTagsRequest } from './model/ListResourcesByTagsRequest';
import { ListResourcesByTagsResponse } from './model/ListResourcesByTagsResponse';
import { ListRoutingRulesRequest } from './model/ListRoutingRulesRequest';
import { ListRoutingRulesResponse } from './model/ListRoutingRulesResponse';
import { ListRuleActionsRequest } from './model/ListRuleActionsRequest';
import { ListRuleActionsResponse } from './model/ListRuleActionsResponse';
import { ListRulesRequest } from './model/ListRulesRequest';
import { ListRulesResponse } from './model/ListRulesResponse';
import { MessageResult } from './model/MessageResult';
import { NetAddress } from './model/NetAddress';
import { ObsForwarding } from './model/ObsForwarding';
import { Page } from './model/Page';
import { ProductSummary } from './model/ProductSummary';
import { PropertyFilter } from './model/PropertyFilter';
import { QueryDeviceSimplify } from './model/QueryDeviceSimplify';
import { QueryQueueBase } from './model/QueryQueueBase';
import { QueryResourceByTagsDTO } from './model/QueryResourceByTagsDTO';
import { QueueInfo } from './model/QueueInfo';
import { ResetDeviceSecret } from './model/ResetDeviceSecret';
import { ResetDeviceSecretRequest } from './model/ResetDeviceSecretRequest';
import { ResetDeviceSecretResponse } from './model/ResetDeviceSecretResponse';
import { ResourceDTO } from './model/ResourceDTO';
import { RoutingRule } from './model/RoutingRule';
import { RoutingRuleAction } from './model/RoutingRuleAction';
import { RoutingRuleSubject } from './model/RoutingRuleSubject';
import { Rule } from './model/Rule';
import { RuleAction } from './model/RuleAction';
import { RuleCondition } from './model/RuleCondition';
import { RuleResponse } from './model/RuleResponse';
import { RuleStatus } from './model/RuleStatus';
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
import { ShowDevicesInGroupRequest } from './model/ShowDevicesInGroupRequest';
import { ShowDevicesInGroupResponse } from './model/ShowDevicesInGroupResponse';
import { ShowProductRequest } from './model/ShowProductRequest';
import { ShowProductResponse } from './model/ShowProductResponse';
import { ShowQueueRequest } from './model/ShowQueueRequest';
import { ShowQueueResponse } from './model/ShowQueueResponse';
import { ShowRoutingRuleRequest } from './model/ShowRoutingRuleRequest';
import { ShowRoutingRuleResponse } from './model/ShowRoutingRuleResponse';
import { ShowRuleActionRequest } from './model/ShowRuleActionRequest';
import { ShowRuleActionResponse } from './model/ShowRuleActionResponse';
import { ShowRuleRequest } from './model/ShowRuleRequest';
import { ShowRuleResponse } from './model/ShowRuleResponse';
import { SimpleTimerType } from './model/SimpleTimerType';
import { SimplifyDevice } from './model/SimplifyDevice';
import { Strategy } from './model/Strategy';
import { TagDeviceRequest } from './model/TagDeviceRequest';
import { TagDeviceResponse } from './model/TagDeviceResponse';
import { TagV5DTO } from './model/TagV5DTO';
import { Task } from './model/Task';
import { TaskDetail } from './model/TaskDetail';
import { TaskPolicy } from './model/TaskPolicy';
import { TaskProgress } from './model/TaskProgress';
import { TimeRange } from './model/TimeRange';
import { UnbindTagsDTO } from './model/UnbindTagsDTO';
import { UnfreezeDeviceRequest } from './model/UnfreezeDeviceRequest';
import { UnfreezeDeviceResponse } from './model/UnfreezeDeviceResponse';
import { UntagDeviceRequest } from './model/UntagDeviceRequest';
import { UntagDeviceResponse } from './model/UntagDeviceResponse';
import { UpdateActionReq } from './model/UpdateActionReq';
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
import { UpdateProduct } from './model/UpdateProduct';
import { UpdateProductRequest } from './model/UpdateProductRequest';
import { UpdateProductResponse } from './model/UpdateProductResponse';
import { UpdatePropertiesRequest } from './model/UpdatePropertiesRequest';
import { UpdatePropertiesResponse } from './model/UpdatePropertiesResponse';
import { UpdateRoutingRuleRequest } from './model/UpdateRoutingRuleRequest';
import { UpdateRoutingRuleResponse } from './model/UpdateRoutingRuleResponse';
import { UpdateRuleActionRequest } from './model/UpdateRuleActionRequest';
import { UpdateRuleActionResponse } from './model/UpdateRuleActionResponse';
import { UpdateRuleReq } from './model/UpdateRuleReq';
import { UpdateRuleRequest } from './model/UpdateRuleRequest';
import { UpdateRuleResponse } from './model/UpdateRuleResponse';
import { UploadBatchTaskFileRequest } from './model/UploadBatchTaskFileRequest';
import { UploadBatchTaskFileRequestBody } from './model/UploadBatchTaskFileRequestBody';
import { UploadBatchTaskFileResponse } from './model/UploadBatchTaskFileResponse';
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
     * @summary 生成接入凭证
     * @param {CreateAccessCodeRequestBody} createAccessCodeRequestBody 生成接入凭证的请求结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessCode(createAccessCodeRequest?: CreateAccessCodeRequest): Promise<CreateAccessCodeResponse> {
        const options = ParamCreater().createAccessCode(createAccessCodeRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台创建一个AMQP队列。每个租户只能创建100个队列，若超过规格，则创建失败，若队列名称与已有的队列名称相同，则创建失败。
     * @summary 创建AMQP队列
     * @param {QueueInfo} addQueueReQuestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addQueue(addQueueRequest?: AddQueueRequest): Promise<AddQueueResponse> {
        const options = ParamCreater().addQueue(addQueueRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中的AMQP队列信息列表。可通过队列名称作模糊查询，支持分页。
     * @summary 查询AMQP列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [queueName] **参数说明**：amqp队列名称，支持模糊查询，为空查询所有的队列（当前规格单个用户最大100个队列）。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）、间隔号（.）、冒号（:）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchShowQueue(batchShowQueueRequest?: BatchShowQueueRequest): Promise<BatchShowQueueResponse> {
        const options = ParamCreater().batchShowQueue(batchShowQueueRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台上删除指定AMQP队列。若当前队列正在使用，则会删除失败。
     * @summary 删除AMQP队列
     * @param {string} queueId **参数说明**：队列ID，用于唯一标识一个队列。 **取值范围**：长度36位，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteQueue(deleteQueueRequest?: DeleteQueueRequest): Promise<string> {
        const options = ParamCreater().deleteQueue(deleteQueueRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中指定队列的详细信息。
     * @summary 查询单个AMQP队列
     * @param {string} queueId **参数说明**：队列ID，用于唯一标识一个队列。 **取值范围**：长度36位，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQueue(showQueueRequest?: ShowQueueRequest): Promise<ShowQueueResponse> {
        const options = ParamCreater().showQueue(showQueueRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口创建资源空间。
     * @summary 创建资源空间
     * @param {AddApplication} addApplicationRequestBody 创建资源空间所携带的结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addApplication(addApplicationRequest?: AddApplicationRequest): Promise<AddApplicationResponse> {
        const options = ParamCreater().addApplication(addApplicationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 删除指定资源空间。删除资源空间属于高危操作，删除资源空间后，该空间下的产品、设备等资源将不可用，请谨慎操作！
     * @summary 删除资源空间
     * @param {string} appId **参数说明**：资源空间ID，唯一标识一个资源空间，由物联网平台在创建资源空间时分配。资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest): Promise<string> {
        const options = ParamCreater().deleteApplication(deleteApplicationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口查询指定资源空间详情。
     * @summary 查询资源空间
     * @param {string} appId **参数说明**：资源空间ID，唯一标识一个资源空间，由物联网平台在创建资源空间时分配。资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplication(showApplicationRequest?: ShowApplicationRequest): Promise<ShowApplicationResponse> {
        const options = ParamCreater().showApplication(showApplicationRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 资源空间对应的是物联网平台原有的应用，在物联网平台的含义与应用一致，只是变更了名称。应用服务器可以调用此接口查询资源空间列表。
     * @summary 查询资源空间列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {boolean} [defaultApp] **参数说明**：默认资源空间标识，不携带则查询所有资源空间。 **取值范围**： - true：查询默认资源空间。 - false：查询非默认资源空间。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApplications(showApplicationsRequest?: ShowApplicationsRequest): Promise<ShowApplicationsResponse> {
        const options = ParamCreater().showApplications(showApplicationsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发异步命令，以实现对设备的控制。平台负责将命令发送给设备，并将设备执行命令结果异步通知应用服务器。 命令执行结果支持灵活的数据流转，应用服务器通过调用物联网平台的创建规则触发条件（Resource:device.command.status，Event:update）、创建规则动作并激活规则后，当命令状态变更时，物联网平台会根据规则将结果发送到规则指定的服务器，如用户自定义的HTTP服务器，AMQP服务器，以及华为云的其他储存服务器等, 详情参考[设备命令状态变更通知](https://support.huaweicloud.com/api-iothub/iot_06_v5_01212.html)。注意：此接口适用于NB设备异步命令下发，暂不支持其他协议类型设备命令下发。 
     * @summary 下发异步设备命令
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获。
     * @param {AsyncDeviceCommandRequest} createAsyncCommandRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAsyncCommand(createAsyncCommandRequest?: CreateAsyncCommandRequest): Promise<CreateAsyncCommandResponse> {
        const options = ParamCreater().createAsyncCommand(createAsyncCommandRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 物联网平台可查询指定id的命令。 
     * @summary 查询指定id的命令
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获。
     * @param {string} commandId **参数说明**：下发命令的命令id，用于唯一标识一个消息，在下发命令时由物联网平台分配获得。 **取值范围**：长度不超过100，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAsyncDeviceCommand(showAsyncDeviceCommandRequest?: ShowAsyncDeviceCommandRequest): Promise<ShowAsyncDeviceCommandResponse> {
        const options = ParamCreater().showAsyncDeviceCommand(showAsyncDeviceCommandRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口为创建批量处理任务，对多个设备进行批量操作。当前支持批量软固件升级、批量创建设备、批量删除设备、批量冻结设备、批量解冻设备、批量创建命令、批量创建消息任务。
     * @summary 创建批量任务
     * @param {CreateBatchTask} createBatchTaskRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBatchTask(createBatchTaskRequest?: CreateBatchTaskRequest): Promise<CreateBatchTaskResponse> {
        const options = ParamCreater().createBatchTask(createBatchTaskRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中批量任务列表，每一个任务又包括具体的任务内容、任务状态、任务完成情况统计等。
     * @summary 查询批量任务列表
     * @param {string} taskType **参数说明**：批量任务类型。 **取值范围**： - softwareUpgrade: 软件升级任务 - firmwareUpgrade: 固件升级任务 - createDevices: 批量创建设备任务 - deleteDevices: 批量删除设备任务 - freezeDevices: 批量冻结设备任务 - unfreezeDevices: 批量解冻设备任务 - createCommands: 批量创建同步命令任务 - createAsyncCommands: 批量创建异步命令任务 - createMessages: 批量创建消息任务 - updateDeviceShadows：批量配置设备影子任务
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的任务列表，不携带该参数则会查询该用户下所有任务列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [status] **参数说明**：批量任务的状态，可选参数。 **取值范围**： - Initializing: 初始化中。 - Waitting: 等待中。 - Processing: 执行中。 - Success: 成功。 - Fail: 失败。 - PartialSuccess: 部分成功。 - Stopped: 停止。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。  **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBatchTasks(listBatchTasksRequest?: ListBatchTasksRequest): Promise<ListBatchTasksResponse> {
        const options = ParamCreater().listBatchTasks(listBatchTasksRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中指定批量任务的信息，包括任务内容、任务状态、任务完成情况统计以及子任务列表等。
     * @summary 查询批量任务
     * @param {string} taskId **参数说明**：批量任务ID，创建批量任务时由物联网平台分配获得。 **取值范围**：长度不超过24，只允许小写字母a到f、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。  **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBatchTask(showBatchTaskRequest?: ShowBatchTaskRequest): Promise<ShowBatchTaskResponse> {
        const options = ParamCreater().showBatchTask(showBatchTaskRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口删除批量任务文件。
     * @summary 删除批量任务文件
     * @param {string} fileId **参数说明**：要删除的批量任务文件ID。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBatchTaskFile(deleteBatchTaskFileRequest?: DeleteBatchTaskFileRequest): Promise<string> {
        const options = ParamCreater().deleteBatchTaskFile(deleteBatchTaskFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询批量任务文件列表。
     * @summary 查询批量任务文件列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBatchTaskFiles(listBatchTaskFilesRequest?: ListBatchTaskFilesRequest): Promise<ListBatchTaskFilesResponse> {
        const options = ParamCreater().listBatchTaskFiles(listBatchTaskFilesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口上传批量任务文件，用于创建批量任务。当前支持批量创建设备任务、批量删除设备任务、批量冻结设备任务、批量解冻设备任务的文件上传。 - [批量注册设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchCreateDevices_Template.xlsx)   - [批量删除设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchDeleteDevices_Template.xlsx)   - [批量冻结设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchFreezeDevices_Template.xlsx)   - [批量解冻设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchUnfreezeDevices_Template.xlsx) 
     * @summary 上传批量任务文件
     * @param {any} file **参数说明**：上传批量任务文件。 **取值范围**：当前仅支持xlsx/xls文件格式，且文件最大行数为30000行。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadBatchTaskFile(uploadBatchTaskFileRequest?: UploadBatchTaskFileRequest): Promise<UploadBatchTaskFileResponse> {
        const options = ParamCreater().uploadBatchTaskFile(uploadBatchTaskFileRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台上传设备的CA证书
     * @summary 上传设备CA证书
     * @param {CreateCertificateDTO} addCertificateRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addCertificate(addCertificateRequest?: AddCertificateRequest): Promise<AddCertificateResponse> {
        const options = ParamCreater().addCertificate(addCertificateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台验证设备的CA证书，目的是为了验证用户持有设备CA证书的私钥
     * @summary 验证设备CA证书
     * @param {string} certificateId **参数说明**：设备CA证书ID，在上传设备CA证书时由平台分配的唯一标识。
     * @param {string} actionId **参数说明**：对证书执行的操作。 **取值范围**：当前仅支持verify:校验证书。
     * @param {VerifyCertificateDTO} checkCertificateRequestBody **参数说明**：certificate
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkCertificate(checkCertificateRequest?: CheckCertificateRequest): Promise<string> {
        const options = ParamCreater().checkCertificate(checkCertificateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台删除设备的CA证书
     * @summary 删除设备CA证书
     * @param {string} certificateId **参数说明**：设备CA证书ID，在上传设备CA证书时由平台分配的唯一标识。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest): Promise<string> {
        const options = ParamCreater().deleteCertificate(deleteCertificateRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台获取设备的CA证书列表
     * @summary 获取设备CA证书列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的证书列表，不携带该参数则会查询该用户下所有证书列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificates(listCertificatesRequest?: ListCertificatesRequest): Promise<ListCertificatesResponse> {
        const options = ParamCreater().listCertificates(listCertificatesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发命令，以实现对设备的同步控制。平台负责将命令以同步方式发送给设备，并将设备执行命令结果同步返回, 如果设备没有响应，平台会返回给应用服务器超时，平台超时间是20秒。注意：此接口适用于MQTT设备同步命令下发，暂不支持NB-IoT设备命令下发。 
     * @summary 下发设备命令
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获。
     * @param {DeviceCommandRequest} createCommandRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCommand(createCommandRequest?: CreateCommandRequest): Promise<CreateCommandResponse> {
        const options = ParamCreater().createCommand(createCommandRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口新建设备组，一个华为云账号下最多可有1,000个分组，包括父分组和子分组。设备组的最大层级关系不超过5层，即群组形成的关系树最大深度不超过5。
     * @summary 添加设备组
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {AddDeviceGroupDTO} [addDeviceGroupRequestBody] **参数说明**：请求结构体，见请求结构体说明。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDeviceGroup(addDeviceGroupRequest?: AddDeviceGroupRequest): Promise<AddDeviceGroupResponse> {
        const options = ParamCreater().addDeviceGroup(addDeviceGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口管理设备组中的设备。单个设备组内最多添加20,000个设备，一个设备最多可以被添加到10个设备组中。
     * @summary 管理设备组中的设备
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合
     * @param {string} actionId **参数说明**：操作类型，支持添加设备和删除设备。 **取值范围**： - addDevice: 添加设备。添加已注册的设备到指定的设备组中。 - removeDevice: 删除设备。从指定的设备组中删除设备，只是解除了设备和设备组的关系，该设备在平台仍然存在。
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOrDeleteDeviceInGroup(createOrDeleteDeviceInGroupRequest?: CreateOrDeleteDeviceInGroupRequest): Promise<string> {
        const options = ParamCreater().createOrDeleteDeviceInGroup(createOrDeleteDeviceInGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口删除指定设备组，如果该设备组存在子设备组或者该设备组中存在设备，必须先删除子设备组并将设备从该设备组移除，才能删除该设备组。
     * @summary 删除设备组
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDeviceGroup(deleteDeviceGroupRequest?: DeleteDeviceGroupRequest): Promise<string> {
        const options = ParamCreater().deleteDeviceGroup(deleteDeviceGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中的设备组信息列表。
     * @summary 查询设备组列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {string} [lastModifiedTime] **参数说明**：查询设备组在last_modified_time之后修改的记录。 **取值范围**：格式为yyyyMMdd\&#39;T\&#39;HHmmss\&#39;Z\&#39;，如20151212T121212Z。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的产品列表，不携带该参数则会查询该用户下所有产品列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeviceGroups(listDeviceGroupsRequest?: ListDeviceGroupsRequest): Promise<ListDeviceGroupsResponse> {
        const options = ParamCreater().listDeviceGroups(listDeviceGroupsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询指定设备组详情。
     * @summary 查询设备组
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceGroup(showDeviceGroupRequest?: ShowDeviceGroupRequest): Promise<ShowDeviceGroupResponse> {
        const options = ParamCreater().showDeviceGroup(showDeviceGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询指定设备组下的设备列表。
     * @summary 查询设备组设备列表
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDevicesInGroup(showDevicesInGroupRequest?: ShowDevicesInGroupRequest): Promise<ShowDevicesInGroupResponse> {
        const options = ParamCreater().showDevicesInGroup(showDevicesInGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改物联网平台中指定设备组。
     * @summary 修改设备组
     * @param {string} groupId **参数说明**：设备组ID，用于唯一标识一个设备组，在创建设备组时由物联网平台分配。 **取值范围**：长度不超过36，十六进制字符串和连接符（-）的组合。
     * @param {UpdateDeviceGroupDTO} updateDeviceGroupRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDeviceGroup(updateDeviceGroupRequest?: UpdateDeviceGroupRequest): Promise<UpdateDeviceGroupResponse> {
        const options = ParamCreater().updateDeviceGroup(updateDeviceGroupRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台创建一个设备，仅在创建后设备才可以接入物联网平台。  - 该接口支持使用gateway_id参数指定在父设备下创建一个子设备，并且支持多级子设备，当前最大支持二级子设备。 - 该接口同时还支持对设备进行初始配置，接口会读取创建设备请求参数product_id对应的产品详情，如果产品的属性有定义默认值，则会将该属性默认值写入该设备的设备影子中。 - 用户还可以使用创建设备请求参数shadow字段为设备指定初始配置，指定后将会根据service_id和desired设置的属性值与产品中对应属性的默认值比对，如果不同，则将以shadow字段中设置的属性值为准写入到设备影子中。
     * @summary 创建设备
     * @param {AddDevice} addDeviceRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addDevice(addDeviceRequest?: AddDeviceRequest): Promise<AddDeviceResponse> {
        const options = ParamCreater().addDevice(addDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台上删除指定设备。若设备下连接了非直连设备，则必须把设备下的非直连设备都删除后，才能删除该设备。
     * @summary 删除设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDevice(deleteDeviceRequest?: DeleteDeviceRequest): Promise<string> {
        const options = ParamCreater().deleteDevice(deleteDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口冻结设备，设备冻结后不能再连接上线，可以通过解冻设备接口解除设备冻结。注意，当前仅支持冻结与平台直连的设备。
     * @summary 冻结设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public freezeDevice(freezeDeviceRequest?: FreezeDeviceRequest): Promise<string> {
        const options = ParamCreater().freezeDevice(freezeDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中的设备信息列表。
     * @summary 查询设备列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [productId] **参数说明**：设备关联的产品ID，用于唯一标识一个产品模型，创建产品后获得。方法请参见 [创建产品](https://support.huaweicloud.com/api-iothub/iot_06_v5_0050.html)。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
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
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口重置设备密钥，携带指定密钥时平台将设备密钥重置为指定的密钥，不携带密钥时平台将自动生成一个新的随机密钥返回。
     * @summary 重置设备密钥
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} actionId **参数说明**：对设备执行的操作。 **取值范围**： - resetSecret: 重置密钥。注意：NB设备密钥由于协议特殊性，只支持十六进制密钥接入。
     * @param {ResetDeviceSecret} resetDeviceSecretRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resetDeviceSecret(resetDeviceSecretRequest?: ResetDeviceSecretRequest): Promise<ResetDeviceSecretResponse> {
        const options = ParamCreater().resetDeviceSecret(resetDeviceSecretRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中指定设备的详细信息。
     * @summary 查询设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDevice(showDeviceRequest?: ShowDeviceRequest): Promise<ShowDeviceResponse> {
        const options = ParamCreater().showDevice(showDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口解冻设备，解除冻结后，设备可以连接上线。
     * @summary 解冻设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unfreezeDevice(unfreezeDeviceRequest?: UnfreezeDeviceRequest): Promise<string> {
        const options = ParamCreater().unfreezeDevice(unfreezeDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改物联网平台中指定设备的基本信息。
     * @summary 修改设备
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateDevice} updateDeviceRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDevice(updateDeviceRequest?: UpdateDeviceRequest): Promise<UpdateDeviceResponse> {
        const options = ParamCreater().updateDevice(updateDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询指定设备的设备影子信息，包括对设备的期望属性信息（desired区）和设备最新上报的属性信息（reported区）。  设备影子介绍： 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。 - 每个设备有且只有一个设备影子，由设备ID唯一标识 - 设备影子仅保存最近一次设备的上报数据和预期数据 - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性 - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发 
     * @summary 查询设备影子数据
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceShadow(showDeviceShadowRequest?: ShowDeviceShadowRequest): Promise<ShowDeviceShadowResponse> {
        const options = ParamCreater().showDeviceShadow(showDeviceShadowRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口配置设备影子的预期属性（desired区），当设备上线或者设备上报属性时把属性下发给设备。  设备影子介绍： 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。 - 每个设备有且只有一个设备影子，由设备ID唯一标识 - 设备影子仅保存最近一次设备的上报数据和预期数据 - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性 - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发 
     * @summary 配置设备影子预期数据
     * @param {string} deviceId **参数说明**：设备ID，用于唯一标识一个设备。在注册设备时直接指定，或者由物联网平台分配获得。由物联网平台分配时，生成规则为\&quot;product_id\&quot; + \&quot;_\&quot; + \&quot;node_id\&quot;拼接而成。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateDesireds} updateDeviceShadowDesiredDataRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDeviceShadowDesiredData(updateDeviceShadowDesiredDataRequest?: UpdateDeviceShadowDesiredDataRequest): Promise<UpdateDeviceShadowDesiredDataResponse> {
        const options = ParamCreater().updateDeviceShadowDesiredData(updateDeviceShadowDesiredDataRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 物联网平台可向设备下发消息，应用服务器可调用此接口向指定设备下发消息，以实现对设备的控制。应用将消息下发给平台后，平台返回应用响应结果，平台再将消息发送给设备。注意：此接口适用于MQTT设备消息下发，暂不支持其他协议接入的设备消息下发。 
     * @summary 下发设备消息
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获。
     * @param {DeviceMessageRequest} createMessageRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMessage(createMessageRequest?: CreateMessageRequest): Promise<CreateMessageResponse> {
        const options = ParamCreater().createMessage(createMessageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 物联网平台可查询指定设备下发的消息，平台为每个设备默认最多保存20条消息，超过20条后， 后续的消息会替换下发最早的消息。 
     * @summary 查询设备消息
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeviceMessages(listDeviceMessagesRequest?: ListDeviceMessagesRequest): Promise<ListDeviceMessagesResponse> {
        const options = ParamCreater().listDeviceMessages(listDeviceMessagesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 物联网平台可查询设备下发的指定消息id的消息。 
     * @summary 查询指定消息id的消息
     * @param {string} deviceId **参数说明**：下发消息的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获。
     * @param {string} messageId **参数说明**：下发消息的消息ID，用于唯一标识一个消息，在消息下发时由物联网平台分配获得。 **取值范围**：长度不超过100，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDeviceMessage(showDeviceMessageRequest?: ShowDeviceMessageRequest): Promise<ShowDeviceMessageResponse> {
        const options = ParamCreater().showDeviceMessage(showDeviceMessageRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口创建产品。
     * @summary 创建产品
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {AddProduct} [createProductRequestBody] request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createProduct(createProductRequest?: CreateProductRequest): Promise<CreateProductResponse> {
        const options = ParamCreater().createProduct(createProductRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口删除已导入物联网平台的指定产品模型。
     * @summary 删除产品
     * @param {string} productId **参数说明**：产品ID，用于唯一标识一个产品，在物联网平台创建产品后由平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，建议携带该参数，指定要删除的产品属于哪个资源空间；若不携带，则优先删除默认资源空间下产品，如默认资源空间下无对应产品，则按照产品创建时间删除最早创建产品。如果用户存在多资源空间，同时又不想携带该参数，可以联系华为技术支持对用户数据做资源空间合并。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteProduct(deleteProductRequest?: DeleteProductRequest): Promise<string> {
        const options = ParamCreater().deleteProduct(deleteProductRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询已导入物联网平台的产品模型信息列表，了解产品模型的概要信息。
     * @summary 查询产品列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的产品列表，不携带该参数则会查询该用户下所有产品列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProducts(listProductsRequest?: ListProductsRequest): Promise<ListProductsResponse> {
        const options = ParamCreater().listProducts(listProductsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询已导入物联网平台的指定产品模型详细信息，包括产品模型的服务、属性、命令等。
     * @summary 查询产品
     * @param {string} productId **参数说明**：产品ID，用于唯一标识一个产品，在物联网平台创建产品后由平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，建议携带该参数，指定要查询的产品属于哪个资源空间；若不携带，则优先取默认资源空间下产品，如默认资源空间下无对应产品，则按照产品创建时间取最早创建产品。如果用户存在多资源空间，同时又不想携带该参数，可以联系华为技术支持对用户数据做资源空间合并。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProduct(showProductRequest?: ShowProductRequest): Promise<ShowProductResponse> {
        const options = ParamCreater().showProduct(showProductRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改已导入物联网平台的指定产品模型，包括产品模型的服务、属性、命令等。
     * @summary 修改产品
     * @param {string} productId **参数说明**：产品ID，用于唯一标识一个产品，在物联网平台创建产品后由平台分配获得。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateProduct} updateProductRequestBody request
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProduct(updateProductRequest?: UpdateProductRequest): Promise<UpdateProductResponse> {
        const options = ParamCreater().updateProduct(updateProductRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向设备发送指令用以查询设备的实时属性, 并由设备将属性查询的结果同步返回给应用服务器。注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。 
     * @summary 查询设备属性
     * @param {string} deviceId **参数说明**：下发属性的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} serviceId **参数说明**：设备的服务ID，在设备关联的产品模型中定义。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProperties(listPropertiesRequest?: ListPropertiesRequest): Promise<ListPropertiesResponse> {
        const options = ParamCreater().listProperties(listPropertiesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向指定设备下属性。平台负责将属性以同步方式发送给设备，并将设备执行属性结果同步返回。注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。 
     * @summary 修改设备属性
     * @param {string} deviceId **参数说明**：下发属性的设备ID，用于唯一标识一个设备，在注册设备时由物联网平台分配获得。 **取值范围**：长度不超过128，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {DevicePropertiesRequest} updatePropertiesRequestBody 请求结构体，见请求结构体说明
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateProperties(updatePropertiesRequest?: UpdatePropertiesRequest): Promise<UpdatePropertiesResponse> {
        const options = ParamCreater().updateProperties(updatePropertiesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台创建一条规则触发条件。
     * @summary 创建规则触发条件
     * @param {AddRuleReq} createRoutingRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRoutingRule(createRoutingRuleRequest?: CreateRoutingRuleRequest): Promise<CreateRoutingRuleResponse> {
        const options = ParamCreater().createRoutingRule(createRoutingRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台创建一条规则动作。
     * @summary 创建规则动作
     * @param {AddActionReq} createRuleActionRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRuleAction(createRuleActionRequest?: CreateRuleActionRequest): Promise<CreateRuleActionResponse> {
        const options = ParamCreater().createRuleAction(createRuleActionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口删除物联网平台中的指定规则条件。
     * @summary 删除规则触发条件
     * @param {string} ruleId **参数说明**：规则条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRoutingRule(deleteRoutingRuleRequest?: DeleteRoutingRuleRequest): Promise<string> {
        const options = ParamCreater().deleteRoutingRule(deleteRoutingRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口删除物联网平台中的指定规则动作。
     * @summary 删除规则动作
     * @param {string} actionId **参数说明**：规则动作ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRuleAction(deleteRuleActionRequest?: DeleteRuleActionRequest): Promise<string> {
        const options = ParamCreater().deleteRuleAction(deleteRuleActionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中设置的规则条件列表。
     * @summary 查询规则条件列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [resource] **参数说明**：订阅的资源名称。 **取值范围**： - device：设备。 - device.property：设备属性。 - device.message：设备消息。 - device.message.status：设备消息状态。 - device.status：设备状态。 - batchtask：批量任务。 - product：产品。 - device.command.status：设备异步命令状态。
     * @param {string} [event] **参数说明**：订阅的资源事件。 **取值范围**：与资源有关，不同的资源，事件不同。 event需要与resource关联使用，具体的“resource：event”映射关系如下： - device：create（设备添加） - device：delete（设备删除） - device：update（设备更新） - device.status：update （设备状态变更） - device.property：report（设备属性上报） - device.message：report（设备消息上报） - device.message.status：update（设备消息状态变更） - batchtask：update （批量任务状态变更） - product：create（产品添加） - product：delete（产品删除） - product：update（产品更新） - device.command.status：update（设备异步命令状态更新）。
     * @param {string} [appType] **参数说明**：租户规则的生效范围。 **取值范围**： - GLOBAL：生效范围为租户级。 - APP：生效范围为资源空间级。如果类型为APP，可携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)下的规则列表。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)下的规则动作列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [ruleName] **参数说明**：用户自定义的规则名称
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。默认每页10条记录，最大设定每页50条记录。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRoutingRules(listRoutingRulesRequest?: ListRoutingRulesRequest): Promise<ListRoutingRulesResponse> {
        const options = ParamCreater().listRoutingRules(listRoutingRulesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中设置的规则动作列表。
     * @summary 查询规则动作列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [ruleId] **参数说明**：规则触发条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [channel] **参数说明**：规则动作的类型。 **取值范围**： - HTTP_FORWARDING：HTTP服务消息类型。 - DIS_FORWARDING：转发DIS服务消息类型。 - OBS_FORWARDING：转发OBS服务消息类型。 - AMQP_FORWARDING：转发AMQP服务消息类型。 - DMS_KAFKA_FORWARDING：转发kafka消息类型。
     * @param {string} [appType] **参数说明**：租户规则的生效范围。 **取值范围**： - GLOBAL：生效范围为租户级。 - APP：生效范围为资源空间级。如果类型为APP，可携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)下的规则动作列表。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，rule_id不携带且app_type为APP时，该参数生效，可携带app_id查询指定资源空间下的规则动作列表，不携带app_id则查询[默认资源空间](https://support.huaweicloud.com/usermanual-iothub/iot_01_0006.html#section0)下的规则动作列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。默认每页10条记录，最大设定每页50条记录。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。 - 限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRuleActions(listRuleActionsRequest?: ListRuleActionsRequest): Promise<ListRuleActionsResponse> {
        const options = ParamCreater().listRuleActions(listRuleActionsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中指定规则条件的配置信息。
     * @summary 查询规则条件
     * @param {string} ruleId **参数说明**：规则条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRoutingRule(showRoutingRuleRequest?: ShowRoutingRuleRequest): Promise<ShowRoutingRuleResponse> {
        const options = ParamCreater().showRoutingRule(showRoutingRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中指定规则动作的配置信息。
     * @summary 查询规则动作
     * @param {string} actionId **参数说明**：规则动作ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRuleAction(showRuleActionRequest?: ShowRuleActionRequest): Promise<ShowRuleActionResponse> {
        const options = ParamCreater().showRuleAction(showRuleActionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则条件的配置参数。
     * @summary 修改规则触发条件
     * @param {string} ruleId **参数说明**：规则条件ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateRuleReq} updateRoutingRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRoutingRule(updateRoutingRuleRequest?: UpdateRoutingRuleRequest): Promise<UpdateRoutingRuleResponse> {
        const options = ParamCreater().updateRoutingRule(updateRoutingRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则动作的配置。
     * @summary 修改规则动作
     * @param {string} actionId **参数说明**：规则动作ID。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {UpdateActionReq} updateRuleActionRequestBody **参数说明**：请求的body对象，详细请看规则结构体
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRuleAction(updateRuleActionRequest?: UpdateRuleActionRequest): Promise<UpdateRuleActionResponse> {
        const options = ParamCreater().updateRuleAction(updateRuleActionRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则的状态，激活或者去激活规则。
     * @summary 修改规则状态
     * @param {string} ruleId **参数说明**：规则Id。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {RuleStatus} changeRuleStatusRequestBody **参数说明**：请求的body对象，详细请看规则结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeRuleStatus(changeRuleStatusRequest?: ChangeRuleStatusRequest): Promise<ChangeRuleStatusResponse> {
        const options = ParamCreater().changeRuleStatus(changeRuleStatusRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口在物联网平台创建一条规则。
     * @summary 创建规则
     * @param {Rule} createRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRule(createRuleRequest?: CreateRuleRequest): Promise<CreateRuleResponse> {
        const options = ParamCreater().createRule(createRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口删除物联网平台中的指定规则。
     * @summary 删除规则
     * @param {string} ruleId **参数说明**：规则ID，用于唯一标识一条规则，在创建规则时由物联网平台分配获得。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRule(deleteRuleRequest?: DeleteRuleRequest): Promise<string> {
        const options = ParamCreater().deleteRule(deleteRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中设置的规则列表。
     * @summary 查询规则列表
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {string} [appId] **参数说明**：资源空间ID。此参数为非必选参数，存在多资源空间的用户需要使用该接口时，可以携带该参数查询指定资源空间下的规则列表，不携带该参数则会查询该用户下所有规则列表。 **取值范围**：长度不超过36，只允许字母、数字、下划线（_）、连接符（-）的组合。
     * @param {string} [ruleType] **参数说明**：规则类型。此参数为非必选参数，指定对应的规则类型结果进行返回，不携带该参数则会返回所有类型规则。 **取值范围**： - DEVICE_LINKAGE - DATA_FORWARDING
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数，查询结果根据limit进行分页。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。默认为0，取值范围为0-500的整数。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRules(listRulesRequest?: ListRulesRequest): Promise<ListRulesResponse> {
        const options = ParamCreater().listRules(listRulesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询物联网平台中指定规则的配置信息。
     * @summary 查询规则
     * @param {string} ruleId **参数说明**：规则ID，用于唯一标识一条规则，在创建规则时由物联网平台分配获得。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRule(showRuleRequest?: ShowRuleRequest): Promise<ShowRuleResponse> {
        const options = ParamCreater().showRule(showRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口修改物联网平台中指定规则的配置。
     * @summary 修改规则
     * @param {string} ruleId **参数说明**：规则ID，用于唯一标识一条规则，在创建规则时由物联网平台分配获得。 **取值范围**：长度不超过32，只允许字母、数字的组合。
     * @param {Rule} updateRuleRequestBody **参数说明**：请求的body对象，详细请看规则结构体。
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRule(updateRuleRequest?: UpdateRuleRequest): Promise<UpdateRuleResponse> {
        const options = ParamCreater().updateRule(updateRuleRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口查询绑定了指定标签的资源。当前支持标签的资源有Device(设备)。
     * @summary 按标签查询资源
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {number} [limit] **参数说明**：分页查询时每页显示的记录数。 **取值范围**：1-50的整数，默认值为10。
     * @param {string} [marker] **参数说明**：上一次分页查询结果中最后一条记录的ID，在上一次分页查询时由物联网平台返回获得。分页查询时物联网平台是按marker也就是记录ID降序查询的，越新的数据记录ID也会越大。若填写marker，则本次只查询记录ID小于marker的数据记录。若不填写，则从记录ID最大也就是最新的一条数据开始查询。如果需要依次查询所有数据，则每次查询时必须填写上一次查询响应中的marker值。 **取值范围**：长度为24的十六进制字符串，默认值为ffffffffffffffffffffffff。
     * @param {number} [offset] **参数说明**：表示从marker后偏移offset条记录开始查询。当offset为0时，表示从marker后第一条记录开始输出。限制offset最大值是出于API性能考虑，您可以搭配marker使用该参数实现翻页，例如每页50条记录，1-11页内都可以直接使用offset跳转到指定页，但到11页后，由于offset限制为500，您需要使用第11页返回的marker作为下次查询的marker，以实现翻页到12-22页。 **取值范围**：0-500的整数，默认为0。
     * @param {QueryResourceByTagsDTO} [listResourcesByTagsRequestBody] 请求结构体，见请求结构体说明
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourcesByTags(listResourcesByTagsRequest?: ListResourcesByTagsRequest): Promise<ListResourcesByTagsResponse> {
        const options = ParamCreater().listResourcesByTags(listResourcesByTagsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口为指定资源绑定标签。当前支持标签的资源有Device(设备)。
     * @summary 绑定标签
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {BindTagsDTO} [tagDeviceRequestBody] **参数说明**：请求结构体，见请求结构体说明
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public tagDevice(tagDeviceRequest?: TagDeviceRequest): Promise<string> {
        const options = ParamCreater().tagDevice(tagDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
    /**
     * 应用服务器可调用此接口为指定资源解绑标签。当前支持标签的资源有Device(设备)。
     * @summary 解绑标签
     * @param {string} [instanceId] **参数说明**：实例ID。物理多租下各实例的唯一标识，一般华为云租户无需携带该参数，仅在物理多租场景下从管理面访问API时需要携带该参数。
     * @param {UnbindTagsDTO} [untagDeviceRequestBody] **参数说明**：请求结构体，见请求结构体说明
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public untagDevice(untagDeviceRequest?: UntagDeviceRequest): Promise<string> {
        const options = ParamCreater().untagDevice(untagDeviceRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 接入凭证是用于客户端使用AMQP等协议与平台建链的一个认证凭据。只保留一条记录，如果重复调用只会重置接入凭证，使得之前的失效。
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

            var body: any;
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

            var body: any;
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
         */
        batchShowQueue(batchShowQueueRequest?: BatchShowQueueRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/amqp-queues",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        deleteQueue(deleteQueueRequest?: DeleteQueueRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/amqp-queues/{queue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showQueue(showQueueRequest?: ShowQueueRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/amqp-queues/{queue_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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

            var body: any;
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
         */
        deleteApplication(deleteApplicationRequest?: DeleteApplicationRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showApplication(showApplicationRequest?: ShowApplicationRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/apps/{app_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showApplications(showApplicationsRequest?: ShowApplicationsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发异步命令，以实现对设备的控制。平台负责将命令发送给设备，并将设备执行命令结果异步通知应用服务器。 命令执行结果支持灵活的数据流转，应用服务器通过调用物联网平台的创建规则触发条件（Resource:device.command.status，Event:update）、创建规则动作并激活规则后，当命令状态变更时，物联网平台会根据规则将结果发送到规则指定的服务器，如用户自定义的HTTP服务器，AMQP服务器，以及华为云的其他储存服务器等, 详情参考[设备命令状态变更通知](https://support.huaweicloud.com/api-iothub/iot_06_v5_01212.html)。注意：此接口适用于NB设备异步命令下发，暂不支持其他协议类型设备命令下发。 
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

            var body: any;
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
         */
        showAsyncDeviceCommand(showAsyncDeviceCommandRequest?: ShowAsyncDeviceCommandRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/async-commands/{command_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口为创建批量处理任务，对多个设备进行批量操作。当前支持批量软固件升级、批量创建设备、批量删除设备、批量冻结设备、批量解冻设备、批量创建命令、批量创建消息任务。
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

            var body: any;
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
         * 应用服务器可调用此接口查询物联网平台中批量任务列表，每一个任务又包括具体的任务内容、任务状态、任务完成情况统计等。
         */
        listBatchTasks(listBatchTasksRequest?: ListBatchTasksRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/batchtasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口查询物联网平台中指定批量任务的信息，包括任务内容、任务状态、任务完成情况统计以及子任务列表等。
         */
        showBatchTask(showBatchTaskRequest?: ShowBatchTaskRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/batchtasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let taskId;
            let instanceId;
            let limit;
            let marker;
            let offset;

            if (showBatchTaskRequest !== null && showBatchTaskRequest !== undefined) {
                if (showBatchTaskRequest instanceof ShowBatchTaskRequest) {
                    taskId = showBatchTaskRequest.taskId;
                    instanceId = showBatchTaskRequest.instanceId;
                    limit = showBatchTaskRequest.limit;
                    marker = showBatchTaskRequest.marker;
                    offset = showBatchTaskRequest.offset;
                } else {
                    taskId = showBatchTaskRequest['task_id'];
                    instanceId = showBatchTaskRequest['Instance-Id'];
                    limit = showBatchTaskRequest['limit'];
                    marker = showBatchTaskRequest['marker'];
                    offset = showBatchTaskRequest['offset'];
                }
            }
        
            if (taskId === null || taskId === undefined) {
                throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling showBatchTask.');
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
         * 应用服务器可调用此接口删除批量任务文件。
         */
        deleteBatchTaskFile(deleteBatchTaskFileRequest?: DeleteBatchTaskFileRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/batchtask-files/{file_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        listBatchTaskFiles(listBatchTaskFilesRequest?: ListBatchTaskFilesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/batchtask-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口上传批量任务文件，用于创建批量任务。当前支持批量创建设备任务、批量删除设备任务、批量冻结设备任务、批量解冻设备任务的文件上传。 - [批量注册设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchCreateDevices_Template.xlsx)   - [批量删除设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchDeleteDevices_Template.xlsx)   - [批量冻结设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchFreezeDevices_Template.xlsx)   - [批量解冻设备模板](https://developer.obs.cn-north-4.myhuaweicloud.com/template/BatchUnfreezeDevices_Template.xlsx) 
         */
        uploadBatchTaskFile(uploadBatchTaskFileRequest?: UploadBatchTaskFileRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/batchtask-files",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            var file;
            let instanceId;

            if (uploadBatchTaskFileRequest !== null && uploadBatchTaskFileRequest !== undefined) {
                if (uploadBatchTaskFileRequest instanceof UploadBatchTaskFileRequest) {
                    file = uploadBatchTaskFileRequest.body;
                    instanceId = uploadBatchTaskFileRequest.instanceId;
                } else {
                    file = uploadBatchTaskFileRequest['body'];
                    instanceId = uploadBatchTaskFileRequest['Instance-Id'];
                }
            }
        
            if (file === null || file === undefined) {
                throw new RequiredError('file','Required parameter file was null or undefined when calling uploadBatchTaskFile.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台上传设备的CA证书
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

            var body: any;
            let instanceId;

            if (addCertificateRequest !== null && addCertificateRequest !== undefined) {
                if (addCertificateRequest instanceof AddCertificateRequest) {
                    body = addCertificateRequest.body
                    instanceId = addCertificateRequest.instanceId;
                } else {
                    body = addCertificateRequest['body'];
                    instanceId = addCertificateRequest['Instance-Id'];
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
         * 应用服务器可调用此接口在物联网平台验证设备的CA证书，目的是为了验证用户持有设备CA证书的私钥
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
            var body: any;
            let certificateId;
            let actionId;
            let instanceId;

            if (checkCertificateRequest !== null && checkCertificateRequest !== undefined) {
                if (checkCertificateRequest instanceof CheckCertificateRequest) {
                    certificateId = checkCertificateRequest.certificateId;
                    actionId = checkCertificateRequest.actionId;
                    body = checkCertificateRequest.body
                    instanceId = checkCertificateRequest.instanceId;
                } else {
                    certificateId = checkCertificateRequest['certificate_id'];
                    actionId = checkCertificateRequest['action_id'];
                    body = checkCertificateRequest['body'];
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
         * 应用服务器可调用此接口在物联网平台删除设备的CA证书
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let certificateId;
            let instanceId;

            if (deleteCertificateRequest !== null && deleteCertificateRequest !== undefined) {
                if (deleteCertificateRequest instanceof DeleteCertificateRequest) {
                    certificateId = deleteCertificateRequest.certificateId;
                    instanceId = deleteCertificateRequest.instanceId;
                } else {
                    certificateId = deleteCertificateRequest['certificate_id'];
                    instanceId = deleteCertificateRequest['Instance-Id'];
                }
            }
        
            if (certificateId === null || certificateId === undefined) {
                throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificate.');
            }
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口在物联网平台获取设备的CA证书列表
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let instanceId;
            let appId;
            let limit;
            let marker;
            let offset;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    instanceId = listCertificatesRequest.instanceId;
                    appId = listCertificatesRequest.appId;
                    limit = listCertificatesRequest.limit;
                    marker = listCertificatesRequest.marker;
                    offset = listCertificatesRequest.offset;
                } else {
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
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 设备的产品模型中定义了物联网平台可向设备下发的命令，应用服务器可调用此接口向指定设备下发命令，以实现对设备的同步控制。平台负责将命令以同步方式发送给设备，并将设备执行命令结果同步返回, 如果设备没有响应，平台会返回给应用服务器超时，平台超时间是20秒。注意：此接口适用于MQTT设备同步命令下发，暂不支持NB-IoT设备命令下发。 
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

            var body: any;
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
         * 应用服务器可调用此接口新建设备组，一个华为云账号下最多可有1,000个分组，包括父分组和子分组。设备组的最大层级关系不超过5层，即群组形成的关系树最大深度不超过5。
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

            var body: any;
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
         */
        createOrDeleteDeviceInGroup(createOrDeleteDeviceInGroupRequest?: CreateOrDeleteDeviceInGroupRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/device-group/{group_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        deleteDeviceGroup(deleteDeviceGroupRequest?: DeleteDeviceGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/device-group/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        listDeviceGroups(listDeviceGroupsRequest?: ListDeviceGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/device-group",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let instanceId;
            let limit;
            let marker;
            let offset;
            let lastModifiedTime;
            let appId;

            if (listDeviceGroupsRequest !== null && listDeviceGroupsRequest !== undefined) {
                if (listDeviceGroupsRequest instanceof ListDeviceGroupsRequest) {
                    instanceId = listDeviceGroupsRequest.instanceId;
                    limit = listDeviceGroupsRequest.limit;
                    marker = listDeviceGroupsRequest.marker;
                    offset = listDeviceGroupsRequest.offset;
                    lastModifiedTime = listDeviceGroupsRequest.lastModifiedTime;
                    appId = listDeviceGroupsRequest.appId;
                } else {
                    instanceId = listDeviceGroupsRequest['Instance-Id'];
                    limit = listDeviceGroupsRequest['limit'];
                    marker = listDeviceGroupsRequest['marker'];
                    offset = listDeviceGroupsRequest['offset'];
                    lastModifiedTime = listDeviceGroupsRequest['last_modified_time'];
                    appId = listDeviceGroupsRequest['app_id'];
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
            if (instanceId !== undefined && instanceId !== null) {
                localVarHeaderParameter['Instance-Id'] = String(instanceId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 应用服务器可调用此接口查询指定设备组详情。
         */
        showDeviceGroup(showDeviceGroupRequest?: ShowDeviceGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/device-group/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showDevicesInGroup(showDevicesInGroupRequest?: ShowDevicesInGroupRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/device-group/{group_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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

            var body: any;
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
         * 应用服务器可调用此接口在物联网平台创建一个设备，仅在创建后设备才可以接入物联网平台。  - 该接口支持使用gateway_id参数指定在父设备下创建一个子设备，并且支持多级子设备，当前最大支持二级子设备。 - 该接口同时还支持对设备进行初始配置，接口会读取创建设备请求参数product_id对应的产品详情，如果产品的属性有定义默认值，则会将该属性默认值写入该设备的设备影子中。 - 用户还可以使用创建设备请求参数shadow字段为设备指定初始配置，指定后将会根据service_id和desired设置的属性值与产品中对应属性的默认值比对，如果不同，则将以shadow字段中设置的属性值为准写入到设备影子中。
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

            var body: any;
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
         * 应用服务器可调用此接口在物联网平台上删除指定设备。若设备下连接了非直连设备，则必须把设备下的非直连设备都删除后，才能删除该设备。
         */
        deleteDevice(deleteDeviceRequest?: DeleteDeviceRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口冻结设备，设备冻结后不能再连接上线，可以通过解冻设备接口解除设备冻结。注意，当前仅支持冻结与平台直连的设备。
         */
        freezeDevice(freezeDeviceRequest?: FreezeDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/freeze",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        listDevices(listDevicesRequest?: ListDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
            var body: any;
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
         * 应用服务器可调用此接口查询物联网平台中指定设备的详细信息。
         */
        showDevice(showDeviceRequest?: ShowDeviceRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口解冻设备，解除冻结后，设备可以连接上线。
         */
        unfreezeDevice(unfreezeDeviceRequest?: UnfreezeDeviceRequest) {
            const options = {
                method: "POST",
                url: "/v5/iot/{project_id}/devices/{device_id}/unfreeze",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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

            var body: any;
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
         * 应用服务器可调用此接口查询指定设备的设备影子信息，包括对设备的期望属性信息（desired区）和设备最新上报的属性信息（reported区）。  设备影子介绍： 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。 - 每个设备有且只有一个设备影子，由设备ID唯一标识 - 设备影子仅保存最近一次设备的上报数据和预期数据 - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性 - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发 
         */
        showDeviceShadow(showDeviceShadowRequest?: ShowDeviceShadowRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/shadow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口配置设备影子的预期属性（desired区），当设备上线或者设备上报属性时把属性下发给设备。  设备影子介绍： 设备影子是一个用于存储和检索设备当前状态信息的JSON文档。 - 每个设备有且只有一个设备影子，由设备ID唯一标识 - 设备影子仅保存最近一次设备的上报数据和预期数据 - 无论该设备是否在线，都可以通过该影子获取和设置设备的属性 - 设备上线或者设备上报属性时，如果desired区和reported区存在差异，则将差异部分下发给设备，配置的预期属性需在产品模型中定义且method具有可写属性“W”才可下发 
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

            var body: any;
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
         * 物联网平台可向设备下发消息，应用服务器可调用此接口向指定设备下发消息，以实现对设备的控制。应用将消息下发给平台后，平台返回应用响应结果，平台再将消息发送给设备。注意：此接口适用于MQTT设备消息下发，暂不支持其他协议接入的设备消息下发。 
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

            var body: any;
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
         * 物联网平台可查询指定设备下发的消息，平台为每个设备默认最多保存20条消息，超过20条后， 后续的消息会替换下发最早的消息。 
         */
        listDeviceMessages(listDeviceMessagesRequest?: ListDeviceMessagesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/messages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 物联网平台可查询设备下发的指定消息id的消息。 
         */
        showDeviceMessage(showDeviceMessageRequest?: ShowDeviceMessageRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/messages/{message_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口创建产品。
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

            var body: any;
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
         * 应用服务器可调用此接口删除已导入物联网平台的指定产品模型。
         */
        deleteProduct(deleteProductRequest?: DeleteProductRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/products/{product_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        listProducts(listProductsRequest?: ListProductsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/products",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let instanceId;
            let limit;
            let marker;
            let appId;
            let offset;

            if (listProductsRequest !== null && listProductsRequest !== undefined) {
                if (listProductsRequest instanceof ListProductsRequest) {
                    instanceId = listProductsRequest.instanceId;
                    limit = listProductsRequest.limit;
                    marker = listProductsRequest.marker;
                    appId = listProductsRequest.appId;
                    offset = listProductsRequest.offset;
                } else {
                    instanceId = listProductsRequest['Instance-Id'];
                    limit = listProductsRequest['limit'];
                    marker = listProductsRequest['marker'];
                    appId = listProductsRequest['app_id'];
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
         */
        showProduct(showProductRequest?: ShowProductRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/products/{product_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 应用服务器可调用此接口修改已导入物联网平台的指定产品模型，包括产品模型的服务、属性、命令等。
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

            var body: any;
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
         * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向设备发送指令用以查询设备的实时属性, 并由设备将属性查询的结果同步返回给应用服务器。注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。 
         */
        listProperties(listPropertiesRequest?: ListPropertiesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/devices/{device_id}/properties",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         * 设备的产品模型中定义了物联网平台可向设备下发的属性，应用服务器可调用此接口向指定设备下属性。平台负责将属性以同步方式发送给设备，并将设备执行属性结果同步返回。注意：此接口适用于MQTT设备，暂不支持NB-IoT设备。 
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

            var body: any;
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

            var body: any;
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

            var body: any;
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
         */
        deleteRoutingRule(deleteRoutingRuleRequest?: DeleteRoutingRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/routing-rule/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        deleteRuleAction(deleteRuleActionRequest?: DeleteRuleActionRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/routing-rule/actions/{action_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        listRoutingRules(listRoutingRulesRequest?: ListRoutingRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let instanceId;
            let resource;
            let event;
            let appType;
            let appId;
            let ruleName;
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
         */
        listRuleActions(listRuleActionsRequest?: ListRuleActionsRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showRoutingRule(showRoutingRuleRequest?: ShowRoutingRuleRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showRuleAction(showRuleActionRequest?: ShowRuleActionRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/routing-rule/actions/{action_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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

            var body: any;
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

            var body: any;
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

            var body: any;
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

            var body: any;
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
         */
        deleteRule(deleteRuleRequest?: DeleteRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/iot/{project_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        listRules(listRulesRequest?: ListRulesRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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
         */
        showRule(showRuleRequest?: ShowRuleRequest) {
            const options = {
                method: "GET",
                url: "/v5/iot/{project_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
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

            var body: any;
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
            var body: any;
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

            var body: any;
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

            var body: any;
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