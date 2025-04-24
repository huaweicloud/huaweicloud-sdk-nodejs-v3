import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AgencyCreateReq } from './model/AgencyCreateReq';
import { ApiVersionsLinks } from './model/ApiVersionsLinks';
import { ApiVersionsVersions } from './model/ApiVersionsVersions';
import { ApigwTargetDetail } from './model/ApigwTargetDetail';
import { BatchWindow } from './model/BatchWindow';
import { CatalogTargetInfo } from './model/CatalogTargetInfo';
import { ChannelCreateReq } from './model/ChannelCreateReq';
import { ChannelCreateReqPolicy } from './model/ChannelCreateReqPolicy';
import { ChannelCreateReqPrincipal } from './model/ChannelCreateReqPrincipal';
import { ChannelInfo } from './model/ChannelInfo';
import { ChannelUpdateReq } from './model/ChannelUpdateReq';
import { CheckPutEventsReq } from './model/CheckPutEventsReq';
import { CheckPutEventsReqSources } from './model/CheckPutEventsReqSources';
import { CheckPutEventsRequest } from './model/CheckPutEventsRequest';
import { CheckPutEventsResponse } from './model/CheckPutEventsResponse';
import { CheckPutEventsResult } from './model/CheckPutEventsResult';
import { CloudEvents } from './model/CloudEvents';
import { ConnectionCreateReq } from './model/ConnectionCreateReq';
import { ConnectionInfo } from './model/ConnectionInfo';
import { ConnectionInfoFlavor } from './model/ConnectionInfoFlavor';
import { ConnectionType } from './model/ConnectionType';
import { ConnectionUpdateReq } from './model/ConnectionUpdateReq';
import { CreateAgenciesRequest } from './model/CreateAgenciesRequest';
import { CreateAgenciesResponse } from './model/CreateAgenciesResponse';
import { CreateChannelRequest } from './model/CreateChannelRequest';
import { CreateChannelResponse } from './model/CreateChannelResponse';
import { CreateConnectionRequest } from './model/CreateConnectionRequest';
import { CreateConnectionResponse } from './model/CreateConnectionResponse';
import { CreateEndpointRequest } from './model/CreateEndpointRequest';
import { CreateEndpointResponse } from './model/CreateEndpointResponse';
import { CreateEventSchemaRequest } from './model/CreateEventSchemaRequest';
import { CreateEventSchemaResponse } from './model/CreateEventSchemaResponse';
import { CreateEventSchemaVersionRequest } from './model/CreateEventSchemaVersionRequest';
import { CreateEventSchemaVersionResponse } from './model/CreateEventSchemaVersionResponse';
import { CreateEventSourceRequest } from './model/CreateEventSourceRequest';
import { CreateEventSourceResponse } from './model/CreateEventSourceResponse';
import { CreateEventStreamingRequest } from './model/CreateEventStreamingRequest';
import { CreateEventStreamingResponse } from './model/CreateEventStreamingResponse';
import { CreateSubscriptionRequest } from './model/CreateSubscriptionRequest';
import { CreateSubscriptionResponse } from './model/CreateSubscriptionResponse';
import { CreateSubscriptionTargetRequest } from './model/CreateSubscriptionTargetRequest';
import { CreateSubscriptionTargetResponse } from './model/CreateSubscriptionTargetResponse';
import { CustomizeSchemaCreateReq } from './model/CustomizeSchemaCreateReq';
import { CustomizeSchemaItemInfo } from './model/CustomizeSchemaItemInfo';
import { CustomizeSchemaUpdateReq } from './model/CustomizeSchemaUpdateReq';
import { CustomizeSchemaVersionCreateReq } from './model/CustomizeSchemaVersionCreateReq';
import { CustomizeSchemaVersionItemInfo } from './model/CustomizeSchemaVersionItemInfo';
import { CustomizeSourceCreateReq } from './model/CustomizeSourceCreateReq';
import { CustomizeSourceInfo } from './model/CustomizeSourceInfo';
import { CustomizeSourceInfoEventTypes } from './model/CustomizeSourceInfoEventTypes';
import { CustomizeSourceUpdateReq } from './model/CustomizeSourceUpdateReq';
import { DeadLetterQueue } from './model/DeadLetterQueue';
import { DeleteChannelRequest } from './model/DeleteChannelRequest';
import { DeleteChannelResponse } from './model/DeleteChannelResponse';
import { DeleteConnectionRequest } from './model/DeleteConnectionRequest';
import { DeleteConnectionResponse } from './model/DeleteConnectionResponse';
import { DeleteEndpointRequest } from './model/DeleteEndpointRequest';
import { DeleteEndpointResponse } from './model/DeleteEndpointResponse';
import { DeleteEventSchemaRequest } from './model/DeleteEventSchemaRequest';
import { DeleteEventSchemaResponse } from './model/DeleteEventSchemaResponse';
import { DeleteEventSchemaVersionRequest } from './model/DeleteEventSchemaVersionRequest';
import { DeleteEventSchemaVersionResponse } from './model/DeleteEventSchemaVersionResponse';
import { DeleteEventSourceRequest } from './model/DeleteEventSourceRequest';
import { DeleteEventSourceResponse } from './model/DeleteEventSourceResponse';
import { DeleteEventStreamingRequest } from './model/DeleteEventStreamingRequest';
import { DeleteEventStreamingResponse } from './model/DeleteEventStreamingResponse';
import { DeleteSubscriptionRequest } from './model/DeleteSubscriptionRequest';
import { DeleteSubscriptionResponse } from './model/DeleteSubscriptionResponse';
import { DeleteSubscriptionTargetRequest } from './model/DeleteSubscriptionTargetRequest';
import { DeleteSubscriptionTargetResponse } from './model/DeleteSubscriptionTargetResponse';
import { DeliverDetail } from './model/DeliverDetail';
import { DeliverItem } from './model/DeliverItem';
import { DeliverTarget } from './model/DeliverTarget';
import { DiscoverEventSchemaFromDataRequest } from './model/DiscoverEventSchemaFromDataRequest';
import { DiscoverEventSchemaFromDataResponse } from './model/DiscoverEventSchemaFromDataResponse';
import { EgTargetDetail } from './model/EgTargetDetail';
import { EndpointConnection } from './model/EndpointConnection';
import { EndpointCreateReq } from './model/EndpointCreateReq';
import { EndpointInfo } from './model/EndpointInfo';
import { EndpointUpdateReq } from './model/EndpointUpdateReq';
import { ErrorInfo } from './model/ErrorInfo';
import { EventPubMetricsItem } from './model/EventPubMetricsItem';
import { EventSampleItemInfo } from './model/EventSampleItemInfo';
import { EventStreamingCreateReq } from './model/EventStreamingCreateReq';
import { EventStreamingCreateReqRuleConfig } from './model/EventStreamingCreateReqRuleConfig';
import { EventStreamingDetail } from './model/EventStreamingDetail';
import { EventStreamingOperateReq } from './model/EventStreamingOperateReq';
import { EventStreamingSink } from './model/EventStreamingSink';
import { EventStreamingSource } from './model/EventStreamingSource';
import { EventStreamingUpdateReq } from './model/EventStreamingUpdateReq';
import { EventSubMetricsItem } from './model/EventSubMetricsItem';
import { ExecuteSubscriptionOperationRequest } from './model/ExecuteSubscriptionOperationRequest';
import { ExecuteSubscriptionOperationResponse } from './model/ExecuteSubscriptionOperationResponse';
import { HeaderParameter } from './model/HeaderParameter';
import { InvocationHttpParameters } from './model/InvocationHttpParameters';
import { KafkaConnectionDetail } from './model/KafkaConnectionDetail';
import { KafkaTargetDetail } from './model/KafkaTargetDetail';
import { KafkaTargetDetailKeyTransform } from './model/KafkaTargetDetailKeyTransform';
import { ListAgenciesRequest } from './model/ListAgenciesRequest';
import { ListAgenciesResponse } from './model/ListAgenciesResponse';
import { ListApiVersionsRequest } from './model/ListApiVersionsRequest';
import { ListApiVersionsResponse } from './model/ListApiVersionsResponse';
import { ListChannelsRequest } from './model/ListChannelsRequest';
import { ListChannelsResponse } from './model/ListChannelsResponse';
import { ListConnectionsRequest } from './model/ListConnectionsRequest';
import { ListConnectionsResponse } from './model/ListConnectionsResponse';
import { ListEndpointsRequest } from './model/ListEndpointsRequest';
import { ListEndpointsResponse } from './model/ListEndpointsResponse';
import { ListEventSchemaRequest } from './model/ListEventSchemaRequest';
import { ListEventSchemaResponse } from './model/ListEventSchemaResponse';
import { ListEventSchemaVersionsRequest } from './model/ListEventSchemaVersionsRequest';
import { ListEventSchemaVersionsResponse } from './model/ListEventSchemaVersionsResponse';
import { ListEventSourcesRequest } from './model/ListEventSourcesRequest';
import { ListEventSourcesResponse } from './model/ListEventSourcesResponse';
import { ListEventStreamingRequest } from './model/ListEventStreamingRequest';
import { ListEventStreamingResponse } from './model/ListEventStreamingResponse';
import { ListEventTargetRequest } from './model/ListEventTargetRequest';
import { ListEventTargetResponse } from './model/ListEventTargetResponse';
import { ListObsBucketsRequest } from './model/ListObsBucketsRequest';
import { ListObsBucketsResponse } from './model/ListObsBucketsResponse';
import { ListPubMetricsRequest } from './model/ListPubMetricsRequest';
import { ListPubMetricsResponse } from './model/ListPubMetricsResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListSubMetricsRequest } from './model/ListSubMetricsRequest';
import { ListSubMetricsResponse } from './model/ListSubMetricsResponse';
import { ListSubscriptionsRequest } from './model/ListSubscriptionsRequest';
import { ListSubscriptionsResponse } from './model/ListSubscriptionsResponse';
import { ListTracedEventsRequest } from './model/ListTracedEventsRequest';
import { ListTracedEventsRespResult } from './model/ListTracedEventsRespResult';
import { ListTracedEventsResponse } from './model/ListTracedEventsResponse';
import { ListTriggersRequest } from './model/ListTriggersRequest';
import { ListTriggersResponse } from './model/ListTriggersResponse';
import { ListWorkflowTriggersRequest } from './model/ListWorkflowTriggersRequest';
import { ListWorkflowTriggersResponse } from './model/ListWorkflowTriggersResponse';
import { ObsBucketInfo } from './model/ObsBucketInfo';
import { ObsBucketInfoOwner } from './model/ObsBucketInfoOwner';
import { PutEventsReq } from './model/PutEventsReq';
import { PutEventsRequest } from './model/PutEventsRequest';
import { PutEventsRespEvents } from './model/PutEventsRespEvents';
import { PutEventsResponse } from './model/PutEventsResponse';
import { PutOfficialEventsRequest } from './model/PutOfficialEventsRequest';
import { PutOfficialEventsResponse } from './model/PutOfficialEventsResponse';
import { QuotaItemInfo } from './model/QuotaItemInfo';
import { QuotaResourceResp } from './model/QuotaResourceResp';
import { ResumeEventStreamingRequest } from './model/ResumeEventStreamingRequest';
import { ResumeEventStreamingResponse } from './model/ResumeEventStreamingResponse';
import { RocketMqDetail } from './model/RocketMqDetail';
import { RunOption } from './model/RunOption';
import { ShowDetailOfChannelRequest } from './model/ShowDetailOfChannelRequest';
import { ShowDetailOfChannelResponse } from './model/ShowDetailOfChannelResponse';
import { ShowDetailOfConnectionRequest } from './model/ShowDetailOfConnectionRequest';
import { ShowDetailOfConnectionResponse } from './model/ShowDetailOfConnectionResponse';
import { ShowDetailOfEventRequest } from './model/ShowDetailOfEventRequest';
import { ShowDetailOfEventResponse } from './model/ShowDetailOfEventResponse';
import { ShowDetailOfEventSchemaRequest } from './model/ShowDetailOfEventSchemaRequest';
import { ShowDetailOfEventSchemaResponse } from './model/ShowDetailOfEventSchemaResponse';
import { ShowDetailOfEventSchemaVersionRequest } from './model/ShowDetailOfEventSchemaVersionRequest';
import { ShowDetailOfEventSchemaVersionResponse } from './model/ShowDetailOfEventSchemaVersionResponse';
import { ShowDetailOfEventSourceRequest } from './model/ShowDetailOfEventSourceRequest';
import { ShowDetailOfEventSourceResponse } from './model/ShowDetailOfEventSourceResponse';
import { ShowDetailOfEventTraceRequest } from './model/ShowDetailOfEventTraceRequest';
import { ShowDetailOfEventTraceResponse } from './model/ShowDetailOfEventTraceResponse';
import { ShowDetailOfSubscriptionRequest } from './model/ShowDetailOfSubscriptionRequest';
import { ShowDetailOfSubscriptionResponse } from './model/ShowDetailOfSubscriptionResponse';
import { ShowDetailOfSubscriptionTargetRequest } from './model/ShowDetailOfSubscriptionTargetRequest';
import { ShowDetailOfSubscriptionTargetResponse } from './model/ShowDetailOfSubscriptionTargetResponse';
import { ShowEventStreamingRequest } from './model/ShowEventStreamingRequest';
import { ShowEventStreamingResponse } from './model/ShowEventStreamingResponse';
import { ShowListOfEventSampleRequest } from './model/ShowListOfEventSampleRequest';
import { ShowListOfEventSampleResponse } from './model/ShowListOfEventSampleResponse';
import { SinkFGParameters } from './model/SinkFGParameters';
import { SinkKafkaParameters } from './model/SinkKafkaParameters';
import { SinkObsParameters } from './model/SinkObsParameters';
import { SmnTargetDetail } from './model/SmnTargetDetail';
import { SmnTargetDetailSubjectTransform } from './model/SmnTargetDetailSubjectTransform';
import { SourceCommunityMQParameters } from './model/SourceCommunityMQParameters';
import { SourceDMSMQParameters } from './model/SourceDMSMQParameters';
import { SourceKafkaMQParameters } from './model/SourceKafkaMQParameters';
import { SourceMobileMQParameters } from './model/SourceMobileMQParameters';
import { SubscriptionCreateReq } from './model/SubscriptionCreateReq';
import { SubscriptionInfo } from './model/SubscriptionInfo';
import { SubscriptionOperateReq } from './model/SubscriptionOperateReq';
import { SubscriptionOperateRespEvents } from './model/SubscriptionOperateRespEvents';
import { SubscriptionSource } from './model/SubscriptionSource';
import { SubscriptionSourceInfo } from './model/SubscriptionSourceInfo';
import { SubscriptionTarget } from './model/SubscriptionTarget';
import { SubscriptionTargetInfo } from './model/SubscriptionTargetInfo';
import { SubscriptionUpdateReq } from './model/SubscriptionUpdateReq';
import { SubscriptionUsedInfo } from './model/SubscriptionUsedInfo';
import { TransForm } from './model/TransForm';
import { UpdateChannelRequest } from './model/UpdateChannelRequest';
import { UpdateChannelResponse } from './model/UpdateChannelResponse';
import { UpdateConnectionRequest } from './model/UpdateConnectionRequest';
import { UpdateConnectionResponse } from './model/UpdateConnectionResponse';
import { UpdateEndpointRequest } from './model/UpdateEndpointRequest';
import { UpdateEndpointResponse } from './model/UpdateEndpointResponse';
import { UpdateEventSchemaRequest } from './model/UpdateEventSchemaRequest';
import { UpdateEventSchemaResponse } from './model/UpdateEventSchemaResponse';
import { UpdateEventSourceRequest } from './model/UpdateEventSourceRequest';
import { UpdateEventSourceResponse } from './model/UpdateEventSourceResponse';
import { UpdateEventStreamingRequest } from './model/UpdateEventStreamingRequest';
import { UpdateEventStreamingResponse } from './model/UpdateEventStreamingResponse';
import { UpdateSubscriptionRequest } from './model/UpdateSubscriptionRequest';
import { UpdateSubscriptionResponse } from './model/UpdateSubscriptionResponse';
import { UpdateSubscriptionSourceRequest } from './model/UpdateSubscriptionSourceRequest';
import { UpdateSubscriptionSourceResponse } from './model/UpdateSubscriptionSourceResponse';
import { UpdateSubscriptionTargetRequest } from './model/UpdateSubscriptionTargetRequest';
import { UpdateSubscriptionTargetResponse } from './model/UpdateSubscriptionTargetResponse';

export class EgClient {
    public static newBuilder(): ClientBuilder<EgClient> {
            let client = new ClientBuilder<EgClient>(newClient);
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
     * 发布事件到事件源成功需要有订阅等条件，预先校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预校验指定事件源发布事件成功
     * @param {CheckPutEventsReq} [checkPutEventsRequestBody] 需要预检查的事件源列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkPutEvents(checkPutEventsRequest?: CheckPutEventsRequest): Promise<CheckPutEventsResponse> {
        const options = ParamCreater().checkPutEvents(checkPutEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按照业务场景，一键创建服务委托授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务委托
     * @param {AgencyCreateReq} agencyCreateRequestBody 创建请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgencies(createAgenciesRequest?: CreateAgenciesRequest): Promise<CreateAgenciesResponse> {
        const options = ParamCreater().createAgencies(createAgenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义事件通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义事件通道
     * @param {ChannelCreateReq} createChannelRequestBody create channel request
     * @param {string} [enterpriseProjectId] 创建通道时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createChannel(createChannelRequest?: CreateChannelRequest): Promise<CreateChannelResponse> {
        const options = ParamCreater().createChannel(createChannelRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建目标连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建目标连接
     * @param {ConnectionCreateReq} createConnectonRequestBody create request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConnection(createConnectionRequest?: CreateConnectionRequest): Promise<CreateConnectionResponse> {
        const options = ParamCreater().createConnection(createConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建访问端点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建访问端点
     * @param {EndpointCreateReq} createEndpointRequestBody 创建请求消息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEndpoint(createEndpointRequest?: CreateEndpointRequest): Promise<CreateEndpointResponse> {
        const options = ParamCreater().createEndpoint(createEndpointRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义事件模型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义事件模型
     * @param {CustomizeSchemaCreateReq} createEventSchemaRequestBody create schema request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventSchema(createEventSchemaRequest?: CreateEventSchemaRequest): Promise<CreateEventSchemaResponse> {
        const options = ParamCreater().createEventSchema(createEventSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义事件模型版本，版本号后台自动生成
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义事件模型版本
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {CustomizeSchemaVersionCreateReq} createEventSchemaVersionRequestBody create schema version request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventSchemaVersion(createEventSchemaVersionRequest?: CreateEventSchemaVersionRequest): Promise<CreateEventSchemaVersionResponse> {
        const options = ParamCreater().createEventSchemaVersion(createEventSchemaVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建用户自定义类型的事件源，只能指定自定义通道，不能指定系统通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义事件源
     * @param {CustomizeSourceCreateReq} createEventSourceRequestBody 创建自定义事件源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventSource(createEventSourceRequest?: CreateEventSourceRequest): Promise<CreateEventSourceResponse> {
        const options = ParamCreater().createEventSource(createEventSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建事件流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建事件流
     * @param {EventStreamingCreateReq} createEventStreamingRequestBody create eventstreaming request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEventStreaming(createEventStreamingRequest?: CreateEventStreamingRequest): Promise<CreateEventStreamingResponse> {
        const options = ParamCreater().createEventStreaming(createEventStreamingRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建事件订阅。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建事件订阅
     * @param {SubscriptionCreateReq} createSubscriptionRequestBody create subscription request
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubscription(createSubscriptionRequest?: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
        const options = ParamCreater().createSubscription(createSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建单个事件订阅目标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建事件订阅目标
     * @param {string} subscriptionId 事件订阅ID
     * @param {SubscriptionTarget} createSubscriptionTargetRequestBody create subscription target request
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSubscriptionTarget(createSubscriptionTargetRequest?: CreateSubscriptionTargetRequest): Promise<CreateSubscriptionTargetResponse> {
        const options = ParamCreater().createSubscriptionTarget(createSubscriptionTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定自定义事件通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义事件通道
     * @param {string} channelId 指定查询的事件通道ID
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteChannel(deleteChannelRequest?: DeleteChannelRequest): Promise<DeleteChannelResponse> {
        const options = ParamCreater().deleteChannel(deleteChannelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除目标连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除目标连接
     * @param {string} connectionId 指定查询的目标连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConnection(deleteConnectionRequest?: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
        const options = ParamCreater().deleteConnection(deleteConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除访问端点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除访问端点
     * @param {string} endpointId 指定查询访问端点的id
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
     * 删除事件模型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件模型
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEventSchema(deleteEventSchemaRequest?: DeleteEventSchemaRequest): Promise<DeleteEventSchemaResponse> {
        const options = ParamCreater().deleteEventSchema(deleteEventSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除事件模型指定版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件模型版本
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {number} version 指定查询的事件模型版本号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEventSchemaVersion(deleteEventSchemaVersionRequest?: DeleteEventSchemaVersionRequest): Promise<DeleteEventSchemaVersionResponse> {
        const options = ParamCreater().deleteEventSchemaVersion(deleteEventSchemaVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的自定义事件源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义事件源
     * @param {string} sourceId 指定查询的事件源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEventSource(deleteEventSourceRequest?: DeleteEventSourceRequest): Promise<DeleteEventSourceResponse> {
        const options = ParamCreater().deleteEventSource(deleteEventSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除事件流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件流
     * @param {string} eventstreamingId 事件流ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEventStreaming(deleteEventStreamingRequest?: DeleteEventStreamingRequest): Promise<DeleteEventStreamingResponse> {
        const options = ParamCreater().deleteEventStreaming(deleteEventStreamingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除事件订阅。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件订阅
     * @param {string} subscriptionId 事件订阅ID
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubscription(deleteSubscriptionRequest?: DeleteSubscriptionRequest): Promise<DeleteSubscriptionResponse> {
        const options = ParamCreater().deleteSubscription(deleteSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除事件订阅目标。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件订阅目标
     * @param {string} subscriptionId 事件订阅ID
     * @param {string} targetId 事件订阅目标ID
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSubscriptionTarget(deleteSubscriptionTargetRequest?: DeleteSubscriptionTargetRequest): Promise<DeleteSubscriptionTargetResponse> {
        const options = ParamCreater().deleteSubscriptionTarget(deleteSubscriptionTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 事件模型自动发现
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 事件模型自动发现
     * @param {object} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public discoverEventSchemaFromData(discoverEventSchemaFromDataRequest?: DiscoverEventSchemaFromDataRequest): Promise<DiscoverEventSchemaFromDataResponse> {
        const options = ParamCreater().discoverEventSchemaFromData(discoverEventSchemaFromDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作事件订阅，支持启用、禁用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作事件订阅
     * @param {SubscriptionOperateReq} operateSubscriptionRequestBody operate subscription request
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeSubscriptionOperation(executeSubscriptionOperationRequest?: ExecuteSubscriptionOperationRequest): Promise<ExecuteSubscriptionOperationResponse> {
        const options = ParamCreater().executeSubscriptionOperation(executeSubscriptionOperationRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务委托。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务委托
     * @param {'TARGET_CONNECTION' | 'CUSTOM_SOURCE_RABBITMQ' | 'EG_RESTORE_AGENCY'} type 服务委托授权场景类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgencies(listAgenciesRequest?: ListAgenciesRequest): Promise<ListAgenciesResponse> {
        const options = ParamCreater().listAgencies(listAgenciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件通道列表，包括系统通道和自定义通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件通道列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {'OFFICIAL' | 'CUSTOM' | 'PARTNER'} [providerType] 指定查询提供方的类型
     * @param {string} [name] 指定查询的事件通道名称，精准匹配
     * @param {string} [fuzzyName] 指定查询的事件通道名称，模糊匹配
     * @param {string} [enterpriseProjectId] 指定查询的企业项目id，精确匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listChannels(listChannelsRequest?: ListChannelsRequest): Promise<ListChannelsResponse> {
        const options = ParamCreater().listChannels(listChannelsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目标连接列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目标连接列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {string} [name] 指定查询的目标连接名称，精准匹配
     * @param {string} [fuzzyName] 指定查询的目标连接名称，模糊匹配
     * @param {string} [instanceId] 指定查询的目标连接，队列的实例id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConnections(listConnectionsRequest?: ListConnectionsRequest): Promise<ListConnectionsResponse> {
        const options = ParamCreater().listConnections(listConnectionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询访问端点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询访问端点
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {'PRIVATE' | 'PUBLIC'} [type] 指定查询访问端点的类型
     * @param {string} [name] 指定查询访问端点的名称
     * @param {string} [vpcId] 指定查询访问端点的vpcId
     * @param {string} [fuzzyName] 指定查询访问端点的名称,模糊查询
     * @param {string} [subnetId] 指定查询访问端点的SubnetId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEndpoints(listEndpointsRequest?: ListEndpointsRequest): Promise<ListEndpointsResponse> {
        const options = ParamCreater().listEndpoints(listEndpointsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件模型列表，包括系统事件模型和自定义事件模型
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件模型列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {'OFFICIAL' | 'CUSTOM' | 'PARTNER'} [providerType] 指定查询提供方的类型
     * @param {string} [name] 指定查询的事件模型名称，精准匹配
     * @param {string} [fuzzyName] 指定查询的事件模型名称，模糊匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSchema(listEventSchemaRequest?: ListEventSchemaRequest): Promise<ListEventSchemaResponse> {
        const options = ParamCreater().listEventSchema(listEventSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件模型版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件模型版本列表
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {string} [version] 指定查询的事件模型版本号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSchemaVersions(listEventSchemaVersionsRequest?: ListEventSchemaVersionsRequest): Promise<ListEventSchemaVersionsResponse> {
        const options = ParamCreater().listEventSchemaVersions(listEventSchemaVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 支持条件查询，如可以指定事件通道ID来查询某个事件通道下的所有事件源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件源列表
     * @param {string} [channelId] 指定查询的事件通道ID
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {'OFFICIAL' | 'CUSTOM' | 'PARTNER'} [providerType] 指定查询提供方的类型
     * @param {string} [name] 指定查询的事件源名称，精准匹配
     * @param {string} [fuzzyName] 指定查询的事件源名称，模糊匹配
     * @param {string} [fuzzyLabel] 指定查询的事件源标签，模糊匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventSources(listEventSourcesRequest?: ListEventSourcesRequest): Promise<ListEventSourcesResponse> {
        const options = ParamCreater().listEventSources(listEventSourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件流列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件流列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventStreaming(listEventStreamingRequest?: ListEventStreamingRequest): Promise<ListEventStreamingResponse> {
        const options = ParamCreater().listEventStreaming(listEventStreamingRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询预置的事件目标分类，获取每个事件目标分类的字段定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件目标分类
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {string} [fuzzyLabel] 指定查询的事件目标标签，模糊匹配
     * @param {Array<'SUBSCRIPTION' | 'FLOW'>} [supportTypes] 事件目标支持方式：事件订阅：SUBSCRIPTION、事件流：FLOW
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventTarget(listEventTargetRequest?: ListEventTargetRequest): Promise<ListEventTargetResponse> {
        const options = ParamCreater().listEventTarget(listEventTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件通道监控指标数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件通道监控指标数据
     * @param {number} startTime 获取指标数据起始时间
     * @param {string} channelId 事件通道id
     * @param {'AVG' | 'MIN' | 'MAX'} [filter] 指标数据统计方式
     * @param {number} [period] 指标数据统计周期，单位minute。
     * @param {number} [endTime] 获取指标数据结束时间
     * @param {'OFFICIAL' | 'CUSTOM'} [providerType] 事件目标类型/事件通道类型
     * @param {string} [sourceName] 事件源名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPubMetrics(listPubMetricsRequest?: ListPubMetricsRequest): Promise<ListPubMetricsResponse> {
        const options = ParamCreater().listPubMetrics(listPubMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户的配额，未特殊配置过的会返回默认配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {'CHANNEL' | 'CHANNEL_SUBSCRIPTION' | 'SOURCE' | 'SUBSCRIPTION' | 'SUBSCRIPTION_TARGET' | 'SCHEMA' | 'SCHEMA_VERSION' | 'CONNECTION' | 'PRIVATE_ENDPOINT' | 'SOURCE_RABBITMQ' | 'SOURCE_ROCKETMQ'} [type] 指定查询资源类型的配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas(listQuotasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件订阅监控指标数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件订阅监控指标数据
     * @param {number} startTime 获取指标数据起始时间
     * @param {string} subscriptionId 事件订阅id
     * @param {'AVG' | 'MIN' | 'MAX'} [filter] 指标数据统计方式
     * @param {number} [period] 指标数据统计周期，单位minute。
     * @param {number} [endTime] 获取指标数据结束时间
     * @param {'OFFICIAL' | 'CUSTOM'} [providerType] 事件目标类型/事件通道类型
     * @param {string} [targetId] 事件目标id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubMetrics(listSubMetricsRequest?: ListSubMetricsRequest): Promise<ListSubMetricsResponse> {
        const options = ParamCreater().listSubMetrics(listSubMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件订阅列表，支持指定事件通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件订阅列表
     * @param {string} [channelId] 指定查询的事件通道ID
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {string} [name] 指定查询的事件订阅名称，精准匹配
     * @param {string} [fuzzyName] 指定查询的事件订阅名称，模糊匹配
     * @param {string} [connectionId] 目标连接 id
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSubscriptions(listSubscriptionsRequest?: ListSubscriptionsRequest): Promise<ListSubscriptionsResponse> {
        const options = ParamCreater().listSubscriptions(listSubscriptionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件追踪列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件追踪列表
     * @param {number} startTime 查询数据起始时间
     * @param {number} endTime 查询数据结束时间
     * @param {string} channelId 通道ID
     * @param {string} [eventId] 指定查询事件的Id
     * @param {string} [sourceName] 事件源名称
     * @param {string} [eventType] 指定查询的事件类型，精准匹配
     * @param {string} [subscriptionName] 事件订阅名称
     * @param {string} [limit] 每页显示的条目数量，不能小于0
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTracedEvents(listTracedEventsRequest?: ListTracedEventsRequest): Promise<ListTracedEventsResponse> {
        const options = ParamCreater().listTracedEvents(listTracedEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询触发器，支持指定函数urn，一个以函数urn为目标的订阅为一个触发器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个函数的EG触发器
     * @param {string} funcUrn 目标函数的urn
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTriggers(listTriggersRequest?: ListTriggersRequest): Promise<ListTriggersResponse> {
        const options = ParamCreater().listTriggers(listTriggersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询触发器，支持指定函数流id，一个以函数流id为目标的订阅为一个触发器。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个函数流的EG触发器
     * @param {string} workflowId 目标函数流的id
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflowTriggers(listWorkflowTriggersRequest?: ListWorkflowTriggersRequest): Promise<ListWorkflowTriggersResponse> {
        const options = ParamCreater().listWorkflowTriggers(listWorkflowTriggersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布事件到事件通道，仅供调试使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布事件到事件通道
     * @param {string} channelId 指定查询的事件通道ID
     * @param {PutEventsReq} [putEventsRequestBody] 发布事件到事件通道
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putEvents(putEventsRequest?: PutEventsRequest): Promise<PutEventsResponse> {
        const options = ParamCreater().putEvents(putEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 发布官方事件到事件通道。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 发布官方事件到事件通道
     * @param {string} sourceName 事件源名称
     * @param {PutEventsReq} [putOfficialEventsRequestBody] 发布官方事件到事件通道
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public putOfficialEvents(putOfficialEventsRequest?: PutOfficialEventsRequest): Promise<PutOfficialEventsResponse> {
        const options = ParamCreater().putOfficialEvents(putOfficialEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作事件流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作事件流
     * @param {string} eventstreamingId 事件流ID
     * @param {EventStreamingOperateReq} operateEventStreamingRequestBody operate eventstreaming request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resumeEventStreaming(resumeEventStreamingRequest?: ResumeEventStreamingRequest): Promise<ResumeEventStreamingResponse> {
        const options = ParamCreater().resumeEventStreaming(resumeEventStreamingRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定事件通道详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件通道详情
     * @param {string} channelId 指定查询的事件通道ID
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfChannel(showDetailOfChannelRequest?: ShowDetailOfChannelRequest): Promise<ShowDetailOfChannelResponse> {
        const options = ParamCreater().showDetailOfChannel(showDetailOfChannelRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目标连接详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目标连接详情
     * @param {string} connectionId 指定查询的目标连接ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfConnection(showDetailOfConnectionRequest?: ShowDetailOfConnectionRequest): Promise<ShowDetailOfConnectionResponse> {
        const options = ParamCreater().showDetailOfConnection(showDetailOfConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据事件ID查询事件详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询发送事件的内容
     * @param {string} traceId 追踪事件的uniqueId
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfEvent(showDetailOfEventRequest?: ShowDetailOfEventRequest): Promise<ShowDetailOfEventResponse> {
        const options = ParamCreater().showDetailOfEvent(showDetailOfEventRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件模型详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件模型详情
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfEventSchema(showDetailOfEventSchemaRequest?: ShowDetailOfEventSchemaRequest): Promise<ShowDetailOfEventSchemaResponse> {
        const options = ParamCreater().showDetailOfEventSchema(showDetailOfEventSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件模型指定版本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件模型版本详情
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {number} version 指定查询的事件模型版本号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfEventSchemaVersion(showDetailOfEventSchemaVersionRequest?: ShowDetailOfEventSchemaVersionRequest): Promise<ShowDetailOfEventSchemaVersionResponse> {
        const options = ParamCreater().showDetailOfEventSchemaVersion(showDetailOfEventSchemaVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件源详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件源详情
     * @param {string} sourceId 指定查询的事件源ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfEventSource(showDetailOfEventSourceRequest?: ShowDetailOfEventSourceRequest): Promise<ShowDetailOfEventSourceResponse> {
        const options = ParamCreater().showDetailOfEventSource(showDetailOfEventSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 事件轨迹详情，展示事件源到投递目标的投递情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 事件轨迹详情
     * @param {string} traceId 事件唯一标识
     * @param {string} channelId 通道id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfEventTrace(showDetailOfEventTraceRequest?: ShowDetailOfEventTraceRequest): Promise<ShowDetailOfEventTraceResponse> {
        const options = ParamCreater().showDetailOfEventTrace(showDetailOfEventTraceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件订阅详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件订阅详情
     * @param {string} subscriptionId 事件订阅ID
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfSubscription(showDetailOfSubscriptionRequest?: ShowDetailOfSubscriptionRequest): Promise<ShowDetailOfSubscriptionResponse> {
        const options = ParamCreater().showDetailOfSubscription(showDetailOfSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件订阅目标详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件订阅目标详情
     * @param {string} subscriptionId 事件订阅ID
     * @param {string} targetId 事件订阅目标ID
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDetailOfSubscriptionTarget(showDetailOfSubscriptionTargetRequest?: ShowDetailOfSubscriptionTargetRequest): Promise<ShowDetailOfSubscriptionTargetResponse> {
        const options = ParamCreater().showDetailOfSubscriptionTarget(showDetailOfSubscriptionTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件流详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件流详情
     * @param {string} eventstreamingId 事件流ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEventStreaming(showEventStreamingRequest?: ShowEventStreamingRequest): Promise<ShowEventStreamingResponse> {
        const options = ParamCreater().showEventStreaming(showEventStreamingRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件示例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件示例列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {string} [name] 指定查询的事件示例名称，模糊匹配
     * @param {string} [eventTypeName] 指定查询事件示例的事件类型名称
     * @param {string} [eventSourceId] 指定查询事件示例的事件源
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListOfEventSample(showListOfEventSampleRequest?: ShowListOfEventSampleRequest): Promise<ShowListOfEventSampleResponse> {
        const options = ParamCreater().showListOfEventSample(showListOfEventSampleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义事件通道定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义事件通道
     * @param {string} channelId 指定查询的事件通道ID
     * @param {ChannelUpdateReq} updateChannelRequestBody update channel request
     * @param {string} [enterpriseProjectId] 企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateChannel(updateChannelRequest?: UpdateChannelRequest): Promise<UpdateChannelResponse> {
        const options = ParamCreater().updateChannel(updateChannelRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新目标连接。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新目标连接
     * @param {string} connectionId 指定查询的目标连接ID
     * @param {ConnectionUpdateReq} updateConnectionRequestBody update request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateConnection(updateConnectionRequest?: UpdateConnectionRequest): Promise<UpdateConnectionResponse> {
        const options = ParamCreater().updateConnection(updateConnectionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新访问端点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新访问端点
     * @param {string} endpointId 指定查询访问端点的id
     * @param {EndpointUpdateReq} [updateEndpointRequestBody] 
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
     * 更新自定义事件模型定义
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义事件模型
     * @param {string} schemaId 指定查询的事件模型ID
     * @param {CustomizeSchemaUpdateReq} updateEventSchemaRequestBody update schema request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEventSchema(updateEventSchemaRequest?: UpdateEventSchemaRequest): Promise<UpdateEventSchemaResponse> {
        const options = ParamCreater().updateEventSchema(updateEventSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义事件源定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义事件源
     * @param {string} sourceId 指定查询的事件源ID
     * @param {CustomizeSourceUpdateReq} updateEventSourceRequestBody 更新自定义事件源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEventSource(updateEventSourceRequest?: UpdateEventSourceRequest): Promise<UpdateEventSourceResponse> {
        const options = ParamCreater().updateEventSource(updateEventSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新事件流。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件流
     * @param {string} eventstreamingId 事件流ID
     * @param {EventStreamingUpdateReq} updateEventStreamingRequestBody update eventstreaming request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEventStreaming(updateEventStreamingRequest?: UpdateEventStreamingRequest): Promise<UpdateEventStreamingResponse> {
        const options = ParamCreater().updateEventStreaming(updateEventStreamingRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新事件订阅定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件订阅
     * @param {string} subscriptionId 事件订阅ID
     * @param {SubscriptionUpdateReq} updateSubscriptionRequestBody update subscription request
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubscription(updateSubscriptionRequest?: UpdateSubscriptionRequest): Promise<UpdateSubscriptionResponse> {
        const options = ParamCreater().updateSubscription(updateSubscriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新事件订阅源定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件订阅源
     * @param {string} subscriptionId 事件订阅ID
     * @param {string} sourceId 事件订阅源ID
     * @param {SubscriptionSource} updateSubscriptionSourceRequestBody update subscription source request
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubscriptionSource(updateSubscriptionSourceRequest?: UpdateSubscriptionSourceRequest): Promise<UpdateSubscriptionSourceResponse> {
        const options = ParamCreater().updateSubscriptionSource(updateSubscriptionSourceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新事件订阅目标定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件订阅目标
     * @param {string} subscriptionId 事件订阅ID
     * @param {string} targetId 事件订阅目标ID
     * @param {SubscriptionTarget} updateSubscriptionTargetRequestBody update subscription target request
     * @param {string} [enterpriseProjectId] 创建订阅时所使用的企业项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSubscriptionTarget(updateSubscriptionTargetRequest?: UpdateSubscriptionTargetRequest): Promise<UpdateSubscriptionTargetResponse> {
        const options = ParamCreater().updateSubscriptionTarget(updateSubscriptionTargetRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-Request-Id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取服务支持的API版本列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取API版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApiVersions(listApiVersionsRequest?: ListApiVersionsRequest): Promise<ListApiVersionsResponse> {
        const options = ParamCreater().listApiVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取obs桶列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取obs桶列表
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询，偏移量不能小于0
     * @param {number} [limit] 每页显示的条目数量，不能小于1或大于1000
     * @param {string} [sort] 指定查询排序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listObsBuckets(listObsBucketsRequest?: ListObsBucketsRequest): Promise<ListObsBucketsResponse> {
        const options = ParamCreater().listObsBuckets(listObsBucketsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 发布事件到事件源成功需要有订阅等条件，预先校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkPutEvents(checkPutEventsRequest?: CheckPutEventsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/events/check",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkPutEventsRequest !== null && checkPutEventsRequest !== undefined) {
                if (checkPutEventsRequest instanceof CheckPutEventsRequest) {
                    body = checkPutEventsRequest.body
                } else {
                    body = checkPutEventsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按照业务场景，一键创建服务委托授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgencies(createAgenciesRequest?: CreateAgenciesRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/service-agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAgenciesRequest !== null && createAgenciesRequest !== undefined) {
                if (createAgenciesRequest instanceof CreateAgenciesRequest) {
                    body = createAgenciesRequest.body
                } else {
                    body = createAgenciesRequest['body'];
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
         * 创建自定义事件通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createChannel(createChannelRequest?: CreateChannelRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/channels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createChannelRequest !== null && createChannelRequest !== undefined) {
                if (createChannelRequest instanceof CreateChannelRequest) {
                    body = createChannelRequest.body
                    enterpriseProjectId = createChannelRequest.enterpriseProjectId;
                } else {
                    body = createChannelRequest['body'];
                    enterpriseProjectId = createChannelRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建目标连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConnection(createConnectionRequest?: CreateConnectionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createConnectionRequest !== null && createConnectionRequest !== undefined) {
                if (createConnectionRequest instanceof CreateConnectionRequest) {
                    body = createConnectionRequest.body
                } else {
                    body = createConnectionRequest['body'];
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
         * 创建访问端点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEndpoint(createEndpointRequest?: CreateEndpointRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEndpointRequest !== null && createEndpointRequest !== undefined) {
                if (createEndpointRequest instanceof CreateEndpointRequest) {
                    body = createEndpointRequest.body
                } else {
                    body = createEndpointRequest['body'];
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
         * 创建自定义事件模型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventSchema(createEventSchemaRequest?: CreateEventSchemaRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEventSchemaRequest !== null && createEventSchemaRequest !== undefined) {
                if (createEventSchemaRequest instanceof CreateEventSchemaRequest) {
                    body = createEventSchemaRequest.body
                } else {
                    body = createEventSchemaRequest['body'];
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
         * 创建自定义事件模型版本，版本号后台自动生成
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventSchemaVersion(createEventSchemaVersionRequest?: CreateEventSchemaVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/schemas/{schema_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let schemaId;

            if (createEventSchemaVersionRequest !== null && createEventSchemaVersionRequest !== undefined) {
                if (createEventSchemaVersionRequest instanceof CreateEventSchemaVersionRequest) {
                    schemaId = createEventSchemaVersionRequest.schemaId;
                    body = createEventSchemaVersionRequest.body
                } else {
                    schemaId = createEventSchemaVersionRequest['schema_id'];
                    body = createEventSchemaVersionRequest['body'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling createEventSchemaVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'schema_id': schemaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建用户自定义类型的事件源，只能指定自定义通道，不能指定系统通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventSource(createEventSourceRequest?: CreateEventSourceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEventSourceRequest !== null && createEventSourceRequest !== undefined) {
                if (createEventSourceRequest instanceof CreateEventSourceRequest) {
                    body = createEventSourceRequest.body
                } else {
                    body = createEventSourceRequest['body'];
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
         * 创建事件流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEventStreaming(createEventStreamingRequest?: CreateEventStreamingRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/eventstreamings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEventStreamingRequest !== null && createEventStreamingRequest !== undefined) {
                if (createEventStreamingRequest instanceof CreateEventStreamingRequest) {
                    body = createEventStreamingRequest.body
                } else {
                    body = createEventStreamingRequest['body'];
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
         * 创建事件订阅。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubscription(createSubscriptionRequest?: CreateSubscriptionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/subscriptions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (createSubscriptionRequest !== null && createSubscriptionRequest !== undefined) {
                if (createSubscriptionRequest instanceof CreateSubscriptionRequest) {
                    body = createSubscriptionRequest.body
                    enterpriseProjectId = createSubscriptionRequest.enterpriseProjectId;
                } else {
                    body = createSubscriptionRequest['body'];
                    enterpriseProjectId = createSubscriptionRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建单个事件订阅目标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSubscriptionTarget(createSubscriptionTargetRequest?: CreateSubscriptionTargetRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/subscriptions/{subscription_id}/targets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let subscriptionId;
            
            let enterpriseProjectId;

            if (createSubscriptionTargetRequest !== null && createSubscriptionTargetRequest !== undefined) {
                if (createSubscriptionTargetRequest instanceof CreateSubscriptionTargetRequest) {
                    subscriptionId = createSubscriptionTargetRequest.subscriptionId;
                    body = createSubscriptionTargetRequest.body
                    enterpriseProjectId = createSubscriptionTargetRequest.enterpriseProjectId;
                } else {
                    subscriptionId = createSubscriptionTargetRequest['subscription_id'];
                    body = createSubscriptionTargetRequest['body'];
                    enterpriseProjectId = createSubscriptionTargetRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling createSubscriptionTarget.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定自定义事件通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteChannel(deleteChannelRequest?: DeleteChannelRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/channels/{channel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let channelId;
            
            let enterpriseProjectId;

            if (deleteChannelRequest !== null && deleteChannelRequest !== undefined) {
                if (deleteChannelRequest instanceof DeleteChannelRequest) {
                    channelId = deleteChannelRequest.channelId;
                    enterpriseProjectId = deleteChannelRequest.enterpriseProjectId;
                } else {
                    channelId = deleteChannelRequest['channel_id'];
                    enterpriseProjectId = deleteChannelRequest['enterprise_project_id'];
                }
            }

        
            if (channelId === null || channelId === undefined) {
            throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling deleteChannel.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'channel_id': channelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除目标连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConnection(deleteConnectionRequest?: DeleteConnectionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (deleteConnectionRequest !== null && deleteConnectionRequest !== undefined) {
                if (deleteConnectionRequest instanceof DeleteConnectionRequest) {
                    connectionId = deleteConnectionRequest.connectionId;
                } else {
                    connectionId = deleteConnectionRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling deleteConnection.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除访问端点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEndpoint(deleteEndpointRequest?: DeleteEndpointRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let endpointId;

            if (deleteEndpointRequest !== null && deleteEndpointRequest !== undefined) {
                if (deleteEndpointRequest instanceof DeleteEndpointRequest) {
                    endpointId = deleteEndpointRequest.endpointId;
                } else {
                    endpointId = deleteEndpointRequest['endpoint_id'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling deleteEndpoint.');
            }

            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件模型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEventSchema(deleteEventSchemaRequest?: DeleteEventSchemaRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/schemas/{schema_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let schemaId;

            if (deleteEventSchemaRequest !== null && deleteEventSchemaRequest !== undefined) {
                if (deleteEventSchemaRequest instanceof DeleteEventSchemaRequest) {
                    schemaId = deleteEventSchemaRequest.schemaId;
                } else {
                    schemaId = deleteEventSchemaRequest['schema_id'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling deleteEventSchema.');
            }

            options.pathParams = { 'schema_id': schemaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件模型指定版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEventSchemaVersion(deleteEventSchemaVersionRequest?: DeleteEventSchemaVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/schemas/{schema_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let schemaId;
            
            let version;

            if (deleteEventSchemaVersionRequest !== null && deleteEventSchemaVersionRequest !== undefined) {
                if (deleteEventSchemaVersionRequest instanceof DeleteEventSchemaVersionRequest) {
                    schemaId = deleteEventSchemaVersionRequest.schemaId;
                    version = deleteEventSchemaVersionRequest.version;
                } else {
                    schemaId = deleteEventSchemaVersionRequest['schema_id'];
                    version = deleteEventSchemaVersionRequest['version'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling deleteEventSchemaVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling deleteEventSchemaVersion.');
            }

            options.pathParams = { 'schema_id': schemaId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定的自定义事件源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEventSource(deleteEventSourceRequest?: DeleteEventSourceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sourceId;

            if (deleteEventSourceRequest !== null && deleteEventSourceRequest !== undefined) {
                if (deleteEventSourceRequest instanceof DeleteEventSourceRequest) {
                    sourceId = deleteEventSourceRequest.sourceId;
                } else {
                    sourceId = deleteEventSourceRequest['source_id'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling deleteEventSource.');
            }

            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEventStreaming(deleteEventStreamingRequest?: DeleteEventStreamingRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/eventstreamings/{eventstreaming_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let eventstreamingId;

            if (deleteEventStreamingRequest !== null && deleteEventStreamingRequest !== undefined) {
                if (deleteEventStreamingRequest instanceof DeleteEventStreamingRequest) {
                    eventstreamingId = deleteEventStreamingRequest.eventstreamingId;
                } else {
                    eventstreamingId = deleteEventStreamingRequest['eventstreaming_id'];
                }
            }

        
            if (eventstreamingId === null || eventstreamingId === undefined) {
            throw new RequiredError('eventstreamingId','Required parameter eventstreamingId was null or undefined when calling deleteEventStreaming.');
            }

            options.pathParams = { 'eventstreaming_id': eventstreamingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件订阅。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubscription(deleteSubscriptionRequest?: DeleteSubscriptionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subscriptionId;
            
            let enterpriseProjectId;

            if (deleteSubscriptionRequest !== null && deleteSubscriptionRequest !== undefined) {
                if (deleteSubscriptionRequest instanceof DeleteSubscriptionRequest) {
                    subscriptionId = deleteSubscriptionRequest.subscriptionId;
                    enterpriseProjectId = deleteSubscriptionRequest.enterpriseProjectId;
                } else {
                    subscriptionId = deleteSubscriptionRequest['subscription_id'];
                    enterpriseProjectId = deleteSubscriptionRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling deleteSubscription.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件订阅目标。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSubscriptionTarget(deleteSubscriptionTargetRequest?: DeleteSubscriptionTargetRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/subscriptions/{subscription_id}/targets/{target_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subscriptionId;
            
            let targetId;
            
            let enterpriseProjectId;

            if (deleteSubscriptionTargetRequest !== null && deleteSubscriptionTargetRequest !== undefined) {
                if (deleteSubscriptionTargetRequest instanceof DeleteSubscriptionTargetRequest) {
                    subscriptionId = deleteSubscriptionTargetRequest.subscriptionId;
                    targetId = deleteSubscriptionTargetRequest.targetId;
                    enterpriseProjectId = deleteSubscriptionTargetRequest.enterpriseProjectId;
                } else {
                    subscriptionId = deleteSubscriptionTargetRequest['subscription_id'];
                    targetId = deleteSubscriptionTargetRequest['target_id'];
                    enterpriseProjectId = deleteSubscriptionTargetRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling deleteSubscriptionTarget.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling deleteSubscriptionTarget.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 事件模型自动发现
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        discoverEventSchemaFromData(discoverEventSchemaFromDataRequest?: DiscoverEventSchemaFromDataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/schema-discover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (discoverEventSchemaFromDataRequest !== null && discoverEventSchemaFromDataRequest !== undefined) {
                if (discoverEventSchemaFromDataRequest instanceof DiscoverEventSchemaFromDataRequest) {
                    body = discoverEventSchemaFromDataRequest.body
                } else {
                    body = discoverEventSchemaFromDataRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作事件订阅，支持启用、禁用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeSubscriptionOperation(executeSubscriptionOperationRequest?: ExecuteSubscriptionOperationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/subscriptions/operation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let enterpriseProjectId;

            if (executeSubscriptionOperationRequest !== null && executeSubscriptionOperationRequest !== undefined) {
                if (executeSubscriptionOperationRequest instanceof ExecuteSubscriptionOperationRequest) {
                    body = executeSubscriptionOperationRequest.body
                    enterpriseProjectId = executeSubscriptionOperationRequest.enterpriseProjectId;
                } else {
                    body = executeSubscriptionOperationRequest['body'];
                    enterpriseProjectId = executeSubscriptionOperationRequest['enterprise_project_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务委托。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgencies(listAgenciesRequest?: ListAgenciesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/service-agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let type;

            if (listAgenciesRequest !== null && listAgenciesRequest !== undefined) {
                if (listAgenciesRequest instanceof ListAgenciesRequest) {
                    type = listAgenciesRequest.type;
                } else {
                    type = listAgenciesRequest['type'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listAgencies.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件通道列表，包括系统通道和自定义通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listChannels(listChannelsRequest?: ListChannelsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/channels",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let providerType;
            
            let name;
            
            let fuzzyName;
            
            let enterpriseProjectId;

            if (listChannelsRequest !== null && listChannelsRequest !== undefined) {
                if (listChannelsRequest instanceof ListChannelsRequest) {
                    offset = listChannelsRequest.offset;
                    limit = listChannelsRequest.limit;
                    sort = listChannelsRequest.sort;
                    providerType = listChannelsRequest.providerType;
                    name = listChannelsRequest.name;
                    fuzzyName = listChannelsRequest.fuzzyName;
                    enterpriseProjectId = listChannelsRequest.enterpriseProjectId;
                } else {
                    offset = listChannelsRequest['offset'];
                    limit = listChannelsRequest['limit'];
                    sort = listChannelsRequest['sort'];
                    providerType = listChannelsRequest['provider_type'];
                    name = listChannelsRequest['name'];
                    fuzzyName = listChannelsRequest['fuzzy_name'];
                    enterpriseProjectId = listChannelsRequest['enterprise_project_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (providerType !== null && providerType !== undefined) {
                localVarQueryParameter['provider_type'] = providerType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目标连接列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConnections(listConnectionsRequest?: ListConnectionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/connections",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let name;
            
            let fuzzyName;
            
            let instanceId;

            if (listConnectionsRequest !== null && listConnectionsRequest !== undefined) {
                if (listConnectionsRequest instanceof ListConnectionsRequest) {
                    offset = listConnectionsRequest.offset;
                    limit = listConnectionsRequest.limit;
                    sort = listConnectionsRequest.sort;
                    name = listConnectionsRequest.name;
                    fuzzyName = listConnectionsRequest.fuzzyName;
                    instanceId = listConnectionsRequest.instanceId;
                } else {
                    offset = listConnectionsRequest['offset'];
                    limit = listConnectionsRequest['limit'];
                    sort = listConnectionsRequest['sort'];
                    name = listConnectionsRequest['name'];
                    fuzzyName = listConnectionsRequest['fuzzy_name'];
                    instanceId = listConnectionsRequest['instance_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }
            if (instanceId !== null && instanceId !== undefined) {
                localVarQueryParameter['instance_id'] = instanceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询访问端点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEndpoints(listEndpointsRequest?: ListEndpointsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/endpoints",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let type;
            
            let name;
            
            let vpcId;
            
            let fuzzyName;
            
            let subnetId;

            if (listEndpointsRequest !== null && listEndpointsRequest !== undefined) {
                if (listEndpointsRequest instanceof ListEndpointsRequest) {
                    offset = listEndpointsRequest.offset;
                    limit = listEndpointsRequest.limit;
                    sort = listEndpointsRequest.sort;
                    type = listEndpointsRequest.type;
                    name = listEndpointsRequest.name;
                    vpcId = listEndpointsRequest.vpcId;
                    fuzzyName = listEndpointsRequest.fuzzyName;
                    subnetId = listEndpointsRequest.subnetId;
                } else {
                    offset = listEndpointsRequest['offset'];
                    limit = listEndpointsRequest['limit'];
                    sort = listEndpointsRequest['sort'];
                    type = listEndpointsRequest['type'];
                    name = listEndpointsRequest['name'];
                    vpcId = listEndpointsRequest['vpc_id'];
                    fuzzyName = listEndpointsRequest['fuzzy_name'];
                    subnetId = listEndpointsRequest['subnet_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (vpcId !== null && vpcId !== undefined) {
                localVarQueryParameter['vpc_id'] = vpcId;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }
            if (subnetId !== null && subnetId !== undefined) {
                localVarQueryParameter['subnet_id'] = subnetId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件模型列表，包括系统事件模型和自定义事件模型
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSchema(listEventSchemaRequest?: ListEventSchemaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schemas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let providerType;
            
            let name;
            
            let fuzzyName;

            if (listEventSchemaRequest !== null && listEventSchemaRequest !== undefined) {
                if (listEventSchemaRequest instanceof ListEventSchemaRequest) {
                    offset = listEventSchemaRequest.offset;
                    limit = listEventSchemaRequest.limit;
                    sort = listEventSchemaRequest.sort;
                    providerType = listEventSchemaRequest.providerType;
                    name = listEventSchemaRequest.name;
                    fuzzyName = listEventSchemaRequest.fuzzyName;
                } else {
                    offset = listEventSchemaRequest['offset'];
                    limit = listEventSchemaRequest['limit'];
                    sort = listEventSchemaRequest['sort'];
                    providerType = listEventSchemaRequest['provider_type'];
                    name = listEventSchemaRequest['name'];
                    fuzzyName = listEventSchemaRequest['fuzzy_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (providerType !== null && providerType !== undefined) {
                localVarQueryParameter['provider_type'] = providerType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件模型版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSchemaVersions(listEventSchemaVersionsRequest?: ListEventSchemaVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schemas/{schema_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let schemaId;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let version;

            if (listEventSchemaVersionsRequest !== null && listEventSchemaVersionsRequest !== undefined) {
                if (listEventSchemaVersionsRequest instanceof ListEventSchemaVersionsRequest) {
                    schemaId = listEventSchemaVersionsRequest.schemaId;
                    offset = listEventSchemaVersionsRequest.offset;
                    limit = listEventSchemaVersionsRequest.limit;
                    sort = listEventSchemaVersionsRequest.sort;
                    version = listEventSchemaVersionsRequest.version;
                } else {
                    schemaId = listEventSchemaVersionsRequest['schema_id'];
                    offset = listEventSchemaVersionsRequest['offset'];
                    limit = listEventSchemaVersionsRequest['limit'];
                    sort = listEventSchemaVersionsRequest['sort'];
                    version = listEventSchemaVersionsRequest['version'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling listEventSchemaVersions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (version !== null && version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'schema_id': schemaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 支持条件查询，如可以指定事件通道ID来查询某个事件通道下的所有事件源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventSources(listEventSourcesRequest?: ListEventSourcesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let channelId;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let providerType;
            
            let name;
            
            let fuzzyName;
            
            let fuzzyLabel;

            if (listEventSourcesRequest !== null && listEventSourcesRequest !== undefined) {
                if (listEventSourcesRequest instanceof ListEventSourcesRequest) {
                    channelId = listEventSourcesRequest.channelId;
                    offset = listEventSourcesRequest.offset;
                    limit = listEventSourcesRequest.limit;
                    sort = listEventSourcesRequest.sort;
                    providerType = listEventSourcesRequest.providerType;
                    name = listEventSourcesRequest.name;
                    fuzzyName = listEventSourcesRequest.fuzzyName;
                    fuzzyLabel = listEventSourcesRequest.fuzzyLabel;
                } else {
                    channelId = listEventSourcesRequest['channel_id'];
                    offset = listEventSourcesRequest['offset'];
                    limit = listEventSourcesRequest['limit'];
                    sort = listEventSourcesRequest['sort'];
                    providerType = listEventSourcesRequest['provider_type'];
                    name = listEventSourcesRequest['name'];
                    fuzzyName = listEventSourcesRequest['fuzzy_name'];
                    fuzzyLabel = listEventSourcesRequest['fuzzy_label'];
                }
            }

        
            if (channelId !== null && channelId !== undefined) {
                localVarQueryParameter['channel_id'] = channelId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (providerType !== null && providerType !== undefined) {
                localVarQueryParameter['provider_type'] = providerType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }
            if (fuzzyLabel !== null && fuzzyLabel !== undefined) {
                localVarQueryParameter['fuzzy_label'] = fuzzyLabel;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件流列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventStreaming(listEventStreamingRequest?: ListEventStreamingRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eventstreamings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listEventStreamingRequest !== null && listEventStreamingRequest !== undefined) {
                if (listEventStreamingRequest instanceof ListEventStreamingRequest) {
                    offset = listEventStreamingRequest.offset;
                    limit = listEventStreamingRequest.limit;
                } else {
                    offset = listEventStreamingRequest['offset'];
                    limit = listEventStreamingRequest['limit'];
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
         * 查询预置的事件目标分类，获取每个事件目标分类的字段定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventTarget(listEventTargetRequest?: ListEventTargetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/target-catalogs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let fuzzyLabel;
            
            let supportTypes;

            if (listEventTargetRequest !== null && listEventTargetRequest !== undefined) {
                if (listEventTargetRequest instanceof ListEventTargetRequest) {
                    offset = listEventTargetRequest.offset;
                    limit = listEventTargetRequest.limit;
                    sort = listEventTargetRequest.sort;
                    fuzzyLabel = listEventTargetRequest.fuzzyLabel;
                    supportTypes = listEventTargetRequest.supportTypes;
                } else {
                    offset = listEventTargetRequest['offset'];
                    limit = listEventTargetRequest['limit'];
                    sort = listEventTargetRequest['sort'];
                    fuzzyLabel = listEventTargetRequest['fuzzy_label'];
                    supportTypes = listEventTargetRequest['support_types'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (fuzzyLabel !== null && fuzzyLabel !== undefined) {
                localVarQueryParameter['fuzzy_label'] = fuzzyLabel;
            }
            if (supportTypes !== null && supportTypes !== undefined) {
                localVarQueryParameter['support_types'] = supportTypes;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件通道监控指标数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPubMetrics(listPubMetricsRequest?: ListPubMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/metrics/pub",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let channelId;
            
            let filter;
            
            let period;
            
            let endTime;
            
            let providerType;
            
            let sourceName;

            if (listPubMetricsRequest !== null && listPubMetricsRequest !== undefined) {
                if (listPubMetricsRequest instanceof ListPubMetricsRequest) {
                    startTime = listPubMetricsRequest.startTime;
                    channelId = listPubMetricsRequest.channelId;
                    filter = listPubMetricsRequest.filter;
                    period = listPubMetricsRequest.period;
                    endTime = listPubMetricsRequest.endTime;
                    providerType = listPubMetricsRequest.providerType;
                    sourceName = listPubMetricsRequest.sourceName;
                } else {
                    startTime = listPubMetricsRequest['start_time'];
                    channelId = listPubMetricsRequest['channel_id'];
                    filter = listPubMetricsRequest['filter'];
                    period = listPubMetricsRequest['period'];
                    endTime = listPubMetricsRequest['end_time'];
                    providerType = listPubMetricsRequest['provider_type'];
                    sourceName = listPubMetricsRequest['source_name'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listPubMetrics.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (channelId === null || channelId === undefined) {
                throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling listPubMetrics.');
            }
            if (channelId !== null && channelId !== undefined) {
                localVarQueryParameter['channel_id'] = channelId;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (providerType !== null && providerType !== undefined) {
                localVarQueryParameter['provider_type'] = providerType;
            }
            if (sourceName !== null && sourceName !== undefined) {
                localVarQueryParameter['source_name'] = sourceName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前租户的配额，未特殊配置过的会返回默认配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas(listQuotasRequest?: ListQuotasRequest) {
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
            
            let type;

            if (listQuotasRequest !== null && listQuotasRequest !== undefined) {
                if (listQuotasRequest instanceof ListQuotasRequest) {
                    type = listQuotasRequest.type;
                } else {
                    type = listQuotasRequest['type'];
                }
            }

        
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件订阅监控指标数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubMetrics(listSubMetricsRequest?: ListSubMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/metrics/sub",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let subscriptionId;
            
            let filter;
            
            let period;
            
            let endTime;
            
            let providerType;
            
            let targetId;

            if (listSubMetricsRequest !== null && listSubMetricsRequest !== undefined) {
                if (listSubMetricsRequest instanceof ListSubMetricsRequest) {
                    startTime = listSubMetricsRequest.startTime;
                    subscriptionId = listSubMetricsRequest.subscriptionId;
                    filter = listSubMetricsRequest.filter;
                    period = listSubMetricsRequest.period;
                    endTime = listSubMetricsRequest.endTime;
                    providerType = listSubMetricsRequest.providerType;
                    targetId = listSubMetricsRequest.targetId;
                } else {
                    startTime = listSubMetricsRequest['start_time'];
                    subscriptionId = listSubMetricsRequest['subscription_id'];
                    filter = listSubMetricsRequest['filter'];
                    period = listSubMetricsRequest['period'];
                    endTime = listSubMetricsRequest['end_time'];
                    providerType = listSubMetricsRequest['provider_type'];
                    targetId = listSubMetricsRequest['target_id'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listSubMetrics.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (subscriptionId === null || subscriptionId === undefined) {
                throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling listSubMetrics.');
            }
            if (subscriptionId !== null && subscriptionId !== undefined) {
                localVarQueryParameter['subscription_id'] = subscriptionId;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (providerType !== null && providerType !== undefined) {
                localVarQueryParameter['provider_type'] = providerType;
            }
            if (targetId !== null && targetId !== undefined) {
                localVarQueryParameter['target_id'] = targetId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件订阅列表，支持指定事件通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSubscriptions(listSubscriptionsRequest?: ListSubscriptionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subscriptions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let channelId;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let name;
            
            let fuzzyName;
            
            let connectionId;
            
            let enterpriseProjectId;

            if (listSubscriptionsRequest !== null && listSubscriptionsRequest !== undefined) {
                if (listSubscriptionsRequest instanceof ListSubscriptionsRequest) {
                    channelId = listSubscriptionsRequest.channelId;
                    offset = listSubscriptionsRequest.offset;
                    limit = listSubscriptionsRequest.limit;
                    sort = listSubscriptionsRequest.sort;
                    name = listSubscriptionsRequest.name;
                    fuzzyName = listSubscriptionsRequest.fuzzyName;
                    connectionId = listSubscriptionsRequest.connectionId;
                    enterpriseProjectId = listSubscriptionsRequest.enterpriseProjectId;
                } else {
                    channelId = listSubscriptionsRequest['channel_id'];
                    offset = listSubscriptionsRequest['offset'];
                    limit = listSubscriptionsRequest['limit'];
                    sort = listSubscriptionsRequest['sort'];
                    name = listSubscriptionsRequest['name'];
                    fuzzyName = listSubscriptionsRequest['fuzzy_name'];
                    connectionId = listSubscriptionsRequest['connection_id'];
                    enterpriseProjectId = listSubscriptionsRequest['enterprise_project_id'];
                }
            }

        
            if (channelId !== null && channelId !== undefined) {
                localVarQueryParameter['channel_id'] = channelId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (fuzzyName !== null && fuzzyName !== undefined) {
                localVarQueryParameter['fuzzy_name'] = fuzzyName;
            }
            if (connectionId !== null && connectionId !== undefined) {
                localVarQueryParameter['connection_id'] = connectionId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件追踪列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTracedEvents(listTracedEventsRequest?: ListTracedEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/traced-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let startTime;
            
            let endTime;
            
            let channelId;
            
            let eventId;
            
            let sourceName;
            
            let eventType;
            
            let subscriptionName;
            
            let limit;
            
            let offset;

            if (listTracedEventsRequest !== null && listTracedEventsRequest !== undefined) {
                if (listTracedEventsRequest instanceof ListTracedEventsRequest) {
                    startTime = listTracedEventsRequest.startTime;
                    endTime = listTracedEventsRequest.endTime;
                    channelId = listTracedEventsRequest.channelId;
                    eventId = listTracedEventsRequest.eventId;
                    sourceName = listTracedEventsRequest.sourceName;
                    eventType = listTracedEventsRequest.eventType;
                    subscriptionName = listTracedEventsRequest.subscriptionName;
                    limit = listTracedEventsRequest.limit;
                    offset = listTracedEventsRequest.offset;
                } else {
                    startTime = listTracedEventsRequest['start_time'];
                    endTime = listTracedEventsRequest['end_time'];
                    channelId = listTracedEventsRequest['channel_id'];
                    eventId = listTracedEventsRequest['event_id'];
                    sourceName = listTracedEventsRequest['source_name'];
                    eventType = listTracedEventsRequest['event_type'];
                    subscriptionName = listTracedEventsRequest['subscription_name'];
                    limit = listTracedEventsRequest['limit'];
                    offset = listTracedEventsRequest['offset'];
                }
            }

        
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listTracedEvents.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listTracedEvents.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (channelId === null || channelId === undefined) {
                throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling listTracedEvents.');
            }
            if (channelId !== null && channelId !== undefined) {
                localVarQueryParameter['channel_id'] = channelId;
            }
            if (eventId !== null && eventId !== undefined) {
                localVarQueryParameter['event_id'] = eventId;
            }
            if (sourceName !== null && sourceName !== undefined) {
                localVarQueryParameter['source_name'] = sourceName;
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (subscriptionName !== null && subscriptionName !== undefined) {
                localVarQueryParameter['subscription_name'] = subscriptionName;
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
         * 查询触发器，支持指定函数urn，一个以函数urn为目标的订阅为一个触发器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTriggers(listTriggersRequest?: ListTriggersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subscription-triggers/{func_urn}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let funcUrn;
            
            let offset;
            
            let limit;
            
            let sort;

            if (listTriggersRequest !== null && listTriggersRequest !== undefined) {
                if (listTriggersRequest instanceof ListTriggersRequest) {
                    funcUrn = listTriggersRequest.funcUrn;
                    offset = listTriggersRequest.offset;
                    limit = listTriggersRequest.limit;
                    sort = listTriggersRequest.sort;
                } else {
                    funcUrn = listTriggersRequest['func_urn'];
                    offset = listTriggersRequest['offset'];
                    limit = listTriggersRequest['limit'];
                    sort = listTriggersRequest['sort'];
                }
            }

        
            if (funcUrn === null || funcUrn === undefined) {
            throw new RequiredError('funcUrn','Required parameter funcUrn was null or undefined when calling listTriggers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'func_urn': funcUrn, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询触发器，支持指定函数流id，一个以函数流id为目标的订阅为一个触发器。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflowTriggers(listWorkflowTriggersRequest?: ListWorkflowTriggersRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subscription-triggers/workflow/{workflow_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workflowId;
            
            let offset;
            
            let limit;
            
            let sort;

            if (listWorkflowTriggersRequest !== null && listWorkflowTriggersRequest !== undefined) {
                if (listWorkflowTriggersRequest instanceof ListWorkflowTriggersRequest) {
                    workflowId = listWorkflowTriggersRequest.workflowId;
                    offset = listWorkflowTriggersRequest.offset;
                    limit = listWorkflowTriggersRequest.limit;
                    sort = listWorkflowTriggersRequest.sort;
                } else {
                    workflowId = listWorkflowTriggersRequest['workflow_id'];
                    offset = listWorkflowTriggersRequest['offset'];
                    limit = listWorkflowTriggersRequest['limit'];
                    sort = listWorkflowTriggersRequest['sort'];
                }
            }

        
            if (workflowId === null || workflowId === undefined) {
            throw new RequiredError('workflowId','Required parameter workflowId was null or undefined when calling listWorkflowTriggers.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workflow_id': workflowId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布事件到事件通道，仅供调试使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        putEvents(putEventsRequest?: PutEventsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/channels/{channel_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let channelId;

            if (putEventsRequest !== null && putEventsRequest !== undefined) {
                if (putEventsRequest instanceof PutEventsRequest) {
                    channelId = putEventsRequest.channelId;
                    body = putEventsRequest.body
                } else {
                    channelId = putEventsRequest['channel_id'];
                    body = putEventsRequest['body'];
                }
            }

        
            if (channelId === null || channelId === undefined) {
            throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling putEvents.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'channel_id': channelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 发布官方事件到事件通道。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        putOfficialEvents(putOfficialEventsRequest?: PutOfficialEventsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/official/sources/{source_name}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sourceName;

            if (putOfficialEventsRequest !== null && putOfficialEventsRequest !== undefined) {
                if (putOfficialEventsRequest instanceof PutOfficialEventsRequest) {
                    sourceName = putOfficialEventsRequest.sourceName;
                    body = putOfficialEventsRequest.body
                } else {
                    sourceName = putOfficialEventsRequest['source_name'];
                    body = putOfficialEventsRequest['body'];
                }
            }

        
            if (sourceName === null || sourceName === undefined) {
            throw new RequiredError('sourceName','Required parameter sourceName was null or undefined when calling putOfficialEvents.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'source_name': sourceName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作事件流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resumeEventStreaming(resumeEventStreamingRequest?: ResumeEventStreamingRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/eventstreamings/operate/{eventstreaming_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let eventstreamingId;

            if (resumeEventStreamingRequest !== null && resumeEventStreamingRequest !== undefined) {
                if (resumeEventStreamingRequest instanceof ResumeEventStreamingRequest) {
                    eventstreamingId = resumeEventStreamingRequest.eventstreamingId;
                    body = resumeEventStreamingRequest.body
                } else {
                    eventstreamingId = resumeEventStreamingRequest['eventstreaming_id'];
                    body = resumeEventStreamingRequest['body'];
                }
            }

        
            if (eventstreamingId === null || eventstreamingId === undefined) {
            throw new RequiredError('eventstreamingId','Required parameter eventstreamingId was null or undefined when calling resumeEventStreaming.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'eventstreaming_id': eventstreamingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定事件通道详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfChannel(showDetailOfChannelRequest?: ShowDetailOfChannelRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/channels/{channel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let channelId;
            
            let enterpriseProjectId;

            if (showDetailOfChannelRequest !== null && showDetailOfChannelRequest !== undefined) {
                if (showDetailOfChannelRequest instanceof ShowDetailOfChannelRequest) {
                    channelId = showDetailOfChannelRequest.channelId;
                    enterpriseProjectId = showDetailOfChannelRequest.enterpriseProjectId;
                } else {
                    channelId = showDetailOfChannelRequest['channel_id'];
                    enterpriseProjectId = showDetailOfChannelRequest['enterprise_project_id'];
                }
            }

        
            if (channelId === null || channelId === undefined) {
            throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling showDetailOfChannel.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'channel_id': channelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目标连接详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfConnection(showDetailOfConnectionRequest?: ShowDetailOfConnectionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectionId;

            if (showDetailOfConnectionRequest !== null && showDetailOfConnectionRequest !== undefined) {
                if (showDetailOfConnectionRequest instanceof ShowDetailOfConnectionRequest) {
                    connectionId = showDetailOfConnectionRequest.connectionId;
                } else {
                    connectionId = showDetailOfConnectionRequest['connection_id'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling showDetailOfConnection.');
            }

            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据事件ID查询事件详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfEvent(showDetailOfEventRequest?: ShowDetailOfEventRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/events/detail/{trace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let traceId;

            if (showDetailOfEventRequest !== null && showDetailOfEventRequest !== undefined) {
                if (showDetailOfEventRequest instanceof ShowDetailOfEventRequest) {
                    traceId = showDetailOfEventRequest.traceId;
                } else {
                    traceId = showDetailOfEventRequest['trace_id'];
                }
            }

        
            if (traceId === null || traceId === undefined) {
            throw new RequiredError('traceId','Required parameter traceId was null or undefined when calling showDetailOfEvent.');
            }

            options.pathParams = { 'trace_id': traceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件模型详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfEventSchema(showDetailOfEventSchemaRequest?: ShowDetailOfEventSchemaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schemas/{schema_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let schemaId;

            if (showDetailOfEventSchemaRequest !== null && showDetailOfEventSchemaRequest !== undefined) {
                if (showDetailOfEventSchemaRequest instanceof ShowDetailOfEventSchemaRequest) {
                    schemaId = showDetailOfEventSchemaRequest.schemaId;
                } else {
                    schemaId = showDetailOfEventSchemaRequest['schema_id'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling showDetailOfEventSchema.');
            }

            options.pathParams = { 'schema_id': schemaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件模型指定版本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfEventSchemaVersion(showDetailOfEventSchemaVersionRequest?: ShowDetailOfEventSchemaVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/schemas/{schema_id}/versions/{version}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let schemaId;
            
            let version;

            if (showDetailOfEventSchemaVersionRequest !== null && showDetailOfEventSchemaVersionRequest !== undefined) {
                if (showDetailOfEventSchemaVersionRequest instanceof ShowDetailOfEventSchemaVersionRequest) {
                    schemaId = showDetailOfEventSchemaVersionRequest.schemaId;
                    version = showDetailOfEventSchemaVersionRequest.version;
                } else {
                    schemaId = showDetailOfEventSchemaVersionRequest['schema_id'];
                    version = showDetailOfEventSchemaVersionRequest['version'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling showDetailOfEventSchemaVersion.');
            }
            if (version === null || version === undefined) {
            throw new RequiredError('version','Required parameter version was null or undefined when calling showDetailOfEventSchemaVersion.');
            }

            options.pathParams = { 'schema_id': schemaId,'version': version, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件源详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfEventSource(showDetailOfEventSourceRequest?: ShowDetailOfEventSourceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sourceId;

            if (showDetailOfEventSourceRequest !== null && showDetailOfEventSourceRequest !== undefined) {
                if (showDetailOfEventSourceRequest instanceof ShowDetailOfEventSourceRequest) {
                    sourceId = showDetailOfEventSourceRequest.sourceId;
                } else {
                    sourceId = showDetailOfEventSourceRequest['source_id'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling showDetailOfEventSource.');
            }

            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 事件轨迹详情，展示事件源到投递目标的投递情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfEventTrace(showDetailOfEventTraceRequest?: ShowDetailOfEventTraceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/events/trace/detail/{trace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let traceId;
            
            let channelId;

            if (showDetailOfEventTraceRequest !== null && showDetailOfEventTraceRequest !== undefined) {
                if (showDetailOfEventTraceRequest instanceof ShowDetailOfEventTraceRequest) {
                    traceId = showDetailOfEventTraceRequest.traceId;
                    channelId = showDetailOfEventTraceRequest.channelId;
                } else {
                    traceId = showDetailOfEventTraceRequest['trace_id'];
                    channelId = showDetailOfEventTraceRequest['channel_id'];
                }
            }

        
            if (traceId === null || traceId === undefined) {
            throw new RequiredError('traceId','Required parameter traceId was null or undefined when calling showDetailOfEventTrace.');
            }
            if (channelId === null || channelId === undefined) {
                throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling showDetailOfEventTrace.');
            }
            if (channelId !== null && channelId !== undefined) {
                localVarQueryParameter['channel_id'] = channelId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'trace_id': traceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件订阅详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfSubscription(showDetailOfSubscriptionRequest?: ShowDetailOfSubscriptionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subscriptionId;
            
            let enterpriseProjectId;

            if (showDetailOfSubscriptionRequest !== null && showDetailOfSubscriptionRequest !== undefined) {
                if (showDetailOfSubscriptionRequest instanceof ShowDetailOfSubscriptionRequest) {
                    subscriptionId = showDetailOfSubscriptionRequest.subscriptionId;
                    enterpriseProjectId = showDetailOfSubscriptionRequest.enterpriseProjectId;
                } else {
                    subscriptionId = showDetailOfSubscriptionRequest['subscription_id'];
                    enterpriseProjectId = showDetailOfSubscriptionRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling showDetailOfSubscription.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件订阅目标详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDetailOfSubscriptionTarget(showDetailOfSubscriptionTargetRequest?: ShowDetailOfSubscriptionTargetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subscriptions/{subscription_id}/targets/{target_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subscriptionId;
            
            let targetId;
            
            let enterpriseProjectId;

            if (showDetailOfSubscriptionTargetRequest !== null && showDetailOfSubscriptionTargetRequest !== undefined) {
                if (showDetailOfSubscriptionTargetRequest instanceof ShowDetailOfSubscriptionTargetRequest) {
                    subscriptionId = showDetailOfSubscriptionTargetRequest.subscriptionId;
                    targetId = showDetailOfSubscriptionTargetRequest.targetId;
                    enterpriseProjectId = showDetailOfSubscriptionTargetRequest.enterpriseProjectId;
                } else {
                    subscriptionId = showDetailOfSubscriptionTargetRequest['subscription_id'];
                    targetId = showDetailOfSubscriptionTargetRequest['target_id'];
                    enterpriseProjectId = showDetailOfSubscriptionTargetRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling showDetailOfSubscriptionTarget.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling showDetailOfSubscriptionTarget.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件流详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEventStreaming(showEventStreamingRequest?: ShowEventStreamingRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/eventstreamings/{eventstreaming_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let eventstreamingId;

            if (showEventStreamingRequest !== null && showEventStreamingRequest !== undefined) {
                if (showEventStreamingRequest instanceof ShowEventStreamingRequest) {
                    eventstreamingId = showEventStreamingRequest.eventstreamingId;
                } else {
                    eventstreamingId = showEventStreamingRequest['eventstreaming_id'];
                }
            }

        
            if (eventstreamingId === null || eventstreamingId === undefined) {
            throw new RequiredError('eventstreamingId','Required parameter eventstreamingId was null or undefined when calling showEventStreaming.');
            }

            options.pathParams = { 'eventstreaming_id': eventstreamingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件示例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListOfEventSample(showListOfEventSampleRequest?: ShowListOfEventSampleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/samples",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;
            
            let name;
            
            let eventTypeName;
            
            let eventSourceId;

            if (showListOfEventSampleRequest !== null && showListOfEventSampleRequest !== undefined) {
                if (showListOfEventSampleRequest instanceof ShowListOfEventSampleRequest) {
                    offset = showListOfEventSampleRequest.offset;
                    limit = showListOfEventSampleRequest.limit;
                    sort = showListOfEventSampleRequest.sort;
                    name = showListOfEventSampleRequest.name;
                    eventTypeName = showListOfEventSampleRequest.eventTypeName;
                    eventSourceId = showListOfEventSampleRequest.eventSourceId;
                } else {
                    offset = showListOfEventSampleRequest['offset'];
                    limit = showListOfEventSampleRequest['limit'];
                    sort = showListOfEventSampleRequest['sort'];
                    name = showListOfEventSampleRequest['name'];
                    eventTypeName = showListOfEventSampleRequest['event_type_name'];
                    eventSourceId = showListOfEventSampleRequest['event_source_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (eventTypeName !== null && eventTypeName !== undefined) {
                localVarQueryParameter['event_type_name'] = eventTypeName;
            }
            if (eventSourceId !== null && eventSourceId !== undefined) {
                localVarQueryParameter['event_source_id'] = eventSourceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义事件通道定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateChannel(updateChannelRequest?: UpdateChannelRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/channels/{channel_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let channelId;
            
            let enterpriseProjectId;

            if (updateChannelRequest !== null && updateChannelRequest !== undefined) {
                if (updateChannelRequest instanceof UpdateChannelRequest) {
                    channelId = updateChannelRequest.channelId;
                    body = updateChannelRequest.body
                    enterpriseProjectId = updateChannelRequest.enterpriseProjectId;
                } else {
                    channelId = updateChannelRequest['channel_id'];
                    body = updateChannelRequest['body'];
                    enterpriseProjectId = updateChannelRequest['enterprise_project_id'];
                }
            }

        
            if (channelId === null || channelId === undefined) {
            throw new RequiredError('channelId','Required parameter channelId was null or undefined when calling updateChannel.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'channel_id': channelId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新目标连接。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateConnection(updateConnectionRequest?: UpdateConnectionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/connections/{connection_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectionId;

            if (updateConnectionRequest !== null && updateConnectionRequest !== undefined) {
                if (updateConnectionRequest instanceof UpdateConnectionRequest) {
                    connectionId = updateConnectionRequest.connectionId;
                    body = updateConnectionRequest.body
                } else {
                    connectionId = updateConnectionRequest['connection_id'];
                    body = updateConnectionRequest['body'];
                }
            }

        
            if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('connectionId','Required parameter connectionId was null or undefined when calling updateConnection.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connection_id': connectionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新访问端点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEndpoint(updateEndpointRequest?: UpdateEndpointRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/endpoints/{endpoint_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let endpointId;

            if (updateEndpointRequest !== null && updateEndpointRequest !== undefined) {
                if (updateEndpointRequest instanceof UpdateEndpointRequest) {
                    endpointId = updateEndpointRequest.endpointId;
                    body = updateEndpointRequest.body
                } else {
                    endpointId = updateEndpointRequest['endpoint_id'];
                    body = updateEndpointRequest['body'];
                }
            }

        
            if (endpointId === null || endpointId === undefined) {
            throw new RequiredError('endpointId','Required parameter endpointId was null or undefined when calling updateEndpoint.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'endpoint_id': endpointId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义事件模型定义
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEventSchema(updateEventSchemaRequest?: UpdateEventSchemaRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/schemas/{schema_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let schemaId;

            if (updateEventSchemaRequest !== null && updateEventSchemaRequest !== undefined) {
                if (updateEventSchemaRequest instanceof UpdateEventSchemaRequest) {
                    schemaId = updateEventSchemaRequest.schemaId;
                    body = updateEventSchemaRequest.body
                } else {
                    schemaId = updateEventSchemaRequest['schema_id'];
                    body = updateEventSchemaRequest['body'];
                }
            }

        
            if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('schemaId','Required parameter schemaId was null or undefined when calling updateEventSchema.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'schema_id': schemaId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新自定义事件源定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEventSource(updateEventSourceRequest?: UpdateEventSourceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let sourceId;

            if (updateEventSourceRequest !== null && updateEventSourceRequest !== undefined) {
                if (updateEventSourceRequest instanceof UpdateEventSourceRequest) {
                    sourceId = updateEventSourceRequest.sourceId;
                    body = updateEventSourceRequest.body
                } else {
                    sourceId = updateEventSourceRequest['source_id'];
                    body = updateEventSourceRequest['body'];
                }
            }

        
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling updateEventSource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新事件流。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEventStreaming(updateEventStreamingRequest?: UpdateEventStreamingRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/eventstreamings/{eventstreaming_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let eventstreamingId;

            if (updateEventStreamingRequest !== null && updateEventStreamingRequest !== undefined) {
                if (updateEventStreamingRequest instanceof UpdateEventStreamingRequest) {
                    eventstreamingId = updateEventStreamingRequest.eventstreamingId;
                    body = updateEventStreamingRequest.body
                } else {
                    eventstreamingId = updateEventStreamingRequest['eventstreaming_id'];
                    body = updateEventStreamingRequest['body'];
                }
            }

        
            if (eventstreamingId === null || eventstreamingId === undefined) {
            throw new RequiredError('eventstreamingId','Required parameter eventstreamingId was null or undefined when calling updateEventStreaming.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'eventstreaming_id': eventstreamingId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新事件订阅定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubscription(updateSubscriptionRequest?: UpdateSubscriptionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/subscriptions/{subscription_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let subscriptionId;
            
            let enterpriseProjectId;

            if (updateSubscriptionRequest !== null && updateSubscriptionRequest !== undefined) {
                if (updateSubscriptionRequest instanceof UpdateSubscriptionRequest) {
                    subscriptionId = updateSubscriptionRequest.subscriptionId;
                    body = updateSubscriptionRequest.body
                    enterpriseProjectId = updateSubscriptionRequest.enterpriseProjectId;
                } else {
                    subscriptionId = updateSubscriptionRequest['subscription_id'];
                    body = updateSubscriptionRequest['body'];
                    enterpriseProjectId = updateSubscriptionRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling updateSubscription.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新事件订阅源定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubscriptionSource(updateSubscriptionSourceRequest?: UpdateSubscriptionSourceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/subscriptions/{subscription_id}/sources/{source_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let subscriptionId;
            
            let sourceId;
            
            let enterpriseProjectId;

            if (updateSubscriptionSourceRequest !== null && updateSubscriptionSourceRequest !== undefined) {
                if (updateSubscriptionSourceRequest instanceof UpdateSubscriptionSourceRequest) {
                    subscriptionId = updateSubscriptionSourceRequest.subscriptionId;
                    sourceId = updateSubscriptionSourceRequest.sourceId;
                    body = updateSubscriptionSourceRequest.body
                    enterpriseProjectId = updateSubscriptionSourceRequest.enterpriseProjectId;
                } else {
                    subscriptionId = updateSubscriptionSourceRequest['subscription_id'];
                    sourceId = updateSubscriptionSourceRequest['source_id'];
                    body = updateSubscriptionSourceRequest['body'];
                    enterpriseProjectId = updateSubscriptionSourceRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling updateSubscriptionSource.');
            }
            if (sourceId === null || sourceId === undefined) {
            throw new RequiredError('sourceId','Required parameter sourceId was null or undefined when calling updateSubscriptionSource.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId,'source_id': sourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新事件订阅目标定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSubscriptionTarget(updateSubscriptionTargetRequest?: UpdateSubscriptionTargetRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/subscriptions/{subscription_id}/targets/{target_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let subscriptionId;
            
            let targetId;
            
            let enterpriseProjectId;

            if (updateSubscriptionTargetRequest !== null && updateSubscriptionTargetRequest !== undefined) {
                if (updateSubscriptionTargetRequest instanceof UpdateSubscriptionTargetRequest) {
                    subscriptionId = updateSubscriptionTargetRequest.subscriptionId;
                    targetId = updateSubscriptionTargetRequest.targetId;
                    body = updateSubscriptionTargetRequest.body
                    enterpriseProjectId = updateSubscriptionTargetRequest.enterpriseProjectId;
                } else {
                    subscriptionId = updateSubscriptionTargetRequest['subscription_id'];
                    targetId = updateSubscriptionTargetRequest['target_id'];
                    body = updateSubscriptionTargetRequest['body'];
                    enterpriseProjectId = updateSubscriptionTargetRequest['enterprise_project_id'];
                }
            }

        
            if (subscriptionId === null || subscriptionId === undefined) {
            throw new RequiredError('subscriptionId','Required parameter subscriptionId was null or undefined when calling updateSubscriptionTarget.');
            }
            if (targetId === null || targetId === undefined) {
            throw new RequiredError('targetId','Required parameter targetId was null or undefined when calling updateSubscriptionTarget.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'subscription_id': subscriptionId,'target_id': targetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取服务支持的API版本列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApiVersions() {
            const options = {
                method: "GET",
                url: "/",
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
         * 获取obs桶列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listObsBuckets(listObsBucketsRequest?: ListObsBucketsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/subscriptions/obsbuckets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let sort;

            if (listObsBucketsRequest !== null && listObsBucketsRequest !== undefined) {
                if (listObsBucketsRequest instanceof ListObsBucketsRequest) {
                    offset = listObsBucketsRequest.offset;
                    limit = listObsBucketsRequest.limit;
                    sort = listObsBucketsRequest.sort;
                } else {
                    offset = listObsBucketsRequest['offset'];
                    limit = listObsBucketsRequest['limit'];
                    sort = listObsBucketsRequest['sort'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sort !== null && sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): EgClient {
    return new EgClient(client);
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