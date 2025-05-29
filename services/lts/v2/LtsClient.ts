import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessConfigBaseLogInfo } from './model/AccessConfigBaseLogInfo';
import { AccessConfigBaseLogInfoCreate } from './model/AccessConfigBaseLogInfoCreate';
import { AccessConfigDeatilCreate } from './model/AccessConfigDeatilCreate';
import { AccessConfigDeatilUpdate } from './model/AccessConfigDeatilUpdate';
import { AccessConfigFormatCreate } from './model/AccessConfigFormatCreate';
import { AccessConfigFormatMutil } from './model/AccessConfigFormatMutil';
import { AccessConfigFormatMutilCreate } from './model/AccessConfigFormatMutilCreate';
import { AccessConfigFormatSingle } from './model/AccessConfigFormatSingle';
import { AccessConfigFormatSingleCreate } from './model/AccessConfigFormatSingleCreate';
import { AccessConfigFormatUpdate } from './model/AccessConfigFormatUpdate';
import { AccessConfigHostGroupIdList } from './model/AccessConfigHostGroupIdList';
import { AccessConfigHostGroupIdListCreate } from './model/AccessConfigHostGroupIdListCreate';
import { AccessConfigInfo } from './model/AccessConfigInfo';
import { AccessConfigQueryLogInfo } from './model/AccessConfigQueryLogInfo';
import { AccessConfigTag } from './model/AccessConfigTag';
import { AccessConfigTimeOffset } from './model/AccessConfigTimeOffset';
import { AccessConfigTimeOffsetCreate } from './model/AccessConfigTimeOffsetCreate';
import { AccessConfigWindowsLogInfoCreate } from './model/AccessConfigWindowsLogInfoCreate';
import { AccessConfigWindowsLogInfoUpdate } from './model/AccessConfigWindowsLogInfoUpdate';
import { Annotations } from './model/Annotations';
import { AomMappingLogStreamInfo } from './model/AomMappingLogStreamInfo';
import { AomMappingRequestInfo } from './model/AomMappingRequestInfo';
import { AomMappingRuleInfo } from './model/AomMappingRuleInfo';
import { AomMappingRuleResp } from './model/AomMappingRuleResp';
import { AomMappingfilesInfo } from './model/AomMappingfilesInfo';
import { BriefStructTemplateModel } from './model/BriefStructTemplateModel';
import { ChangeAlarmRuleStatus } from './model/ChangeAlarmRuleStatus';
import { ChartConfig } from './model/ChartConfig';
import { ConsumerCheckpointInfo } from './model/ConsumerCheckpointInfo';
import { ConsumerGroupHeartBeatRequest } from './model/ConsumerGroupHeartBeatRequest';
import { ConsumerGroupHeartBeatResponse } from './model/ConsumerGroupHeartBeatResponse';
import { ConsumerGroupInfo } from './model/ConsumerGroupInfo';
import { ConsumerShardCheckpointInfo } from './model/ConsumerShardCheckpointInfo';
import { CreateAccessConfigRequest } from './model/CreateAccessConfigRequest';
import { CreateAccessConfigRequestBody } from './model/CreateAccessConfigRequestBody';
import { CreateAccessConfigResponse } from './model/CreateAccessConfigResponse';
import { CreateAgencyAccessRequest } from './model/CreateAgencyAccessRequest';
import { CreateAgencyAccessResponse } from './model/CreateAgencyAccessResponse';
import { CreateAomMappingRulesRequest } from './model/CreateAomMappingRulesRequest';
import { CreateAomMappingRulesResponse } from './model/CreateAomMappingRulesResponse';
import { CreateConsumerGroupRequest } from './model/CreateConsumerGroupRequest';
import { CreateConsumerGroupResponse } from './model/CreateConsumerGroupResponse';
import { CreateDashBoardReqBody } from './model/CreateDashBoardReqBody';
import { CreateDashBoardRequest } from './model/CreateDashBoardRequest';
import { CreateDashBoardResponse } from './model/CreateDashBoardResponse';
import { CreateDashboardGroupReq } from './model/CreateDashboardGroupReq';
import { CreateDashboardGroupRequest } from './model/CreateDashboardGroupRequest';
import { CreateDashboardGroupResponse } from './model/CreateDashboardGroupResponse';
import { CreateHostGroupRequest } from './model/CreateHostGroupRequest';
import { CreateHostGroupRequestBody } from './model/CreateHostGroupRequestBody';
import { CreateHostGroupResponse } from './model/CreateHostGroupResponse';
import { CreateKeywordsAlarmRuleRequest } from './model/CreateKeywordsAlarmRuleRequest';
import { CreateKeywordsAlarmRuleRequestBody } from './model/CreateKeywordsAlarmRuleRequestBody';
import { CreateKeywordsAlarmRuleResponse } from './model/CreateKeywordsAlarmRuleResponse';
import { CreateLogDumpObsRequest } from './model/CreateLogDumpObsRequest';
import { CreateLogDumpObsRequestBody } from './model/CreateLogDumpObsRequestBody';
import { CreateLogDumpObsResponse } from './model/CreateLogDumpObsResponse';
import { CreateLogGroupParams } from './model/CreateLogGroupParams';
import { CreateLogGroupRequest } from './model/CreateLogGroupRequest';
import { CreateLogGroupResponse } from './model/CreateLogGroupResponse';
import { CreateLogStreamIndexRequest } from './model/CreateLogStreamIndexRequest';
import { CreateLogStreamIndexResponse } from './model/CreateLogStreamIndexResponse';
import { CreateLogStreamParams } from './model/CreateLogStreamParams';
import { CreateLogStreamRequest } from './model/CreateLogStreamRequest';
import { CreateLogStreamResponse } from './model/CreateLogStreamResponse';
import { CreateNotificationTemplateRequest } from './model/CreateNotificationTemplateRequest';
import { CreateNotificationTemplateRequestBody } from './model/CreateNotificationTemplateRequestBody';
import { CreateNotificationTemplateResponse } from './model/CreateNotificationTemplateResponse';
import { CreateSearchCriteriasBody } from './model/CreateSearchCriteriasBody';
import { CreateSearchCriteriasRequest } from './model/CreateSearchCriteriasRequest';
import { CreateSearchCriteriasResponse } from './model/CreateSearchCriteriasResponse';
import { CreateSqlAlarmRuleFrequency } from './model/CreateSqlAlarmRuleFrequency';
import { CreateSqlAlarmRuleRequest } from './model/CreateSqlAlarmRuleRequest';
import { CreateSqlAlarmRuleRequestBody } from './model/CreateSqlAlarmRuleRequestBody';
import { CreateSqlAlarmRuleResponse } from './model/CreateSqlAlarmRuleResponse';
import { CreateStructConfigRequest } from './model/CreateStructConfigRequest';
import { CreateStructConfigResponse } from './model/CreateStructConfigResponse';
import { CreateStructTemplateRequest } from './model/CreateStructTemplateRequest';
import { CreateStructTemplateResponse } from './model/CreateStructTemplateResponse';
import { CreateTagsReqbody } from './model/CreateTagsReqbody';
import { CreateTagsRequest } from './model/CreateTagsRequest';
import { CreateTagsResponse } from './model/CreateTagsResponse';
import { CreateTransferRequest } from './model/CreateTransferRequest';
import { CreateTransferRequestBody } from './model/CreateTransferRequestBody';
import { CreateTransferRequestBodyLogStreams } from './model/CreateTransferRequestBodyLogStreams';
import { CreateTransferRequestBodyLogTransferInfo } from './model/CreateTransferRequestBodyLogTransferInfo';
import { CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer } from './model/CreateTransferRequestBodyLogTransferInfoLogAgencyTransfer';
import { CreateTransferResponse } from './model/CreateTransferResponse';
import { CreateTransferResponseBody } from './model/CreateTransferResponseBody';
import { CreateTransferResponseBodyLogStreams } from './model/CreateTransferResponseBodyLogStreams';
import { CreateTransferResponseBodyLogTransferInfo } from './model/CreateTransferResponseBodyLogTransferInfo';
import { CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer } from './model/CreateTransferResponseBodyLogTransferInfoLogAgencyTransfer';
import { CreatefavoriteReqbody } from './model/CreatefavoriteReqbody';
import { CreatefavoriteRequest } from './model/CreatefavoriteRequest';
import { CreatefavoriteResponse } from './model/CreatefavoriteResponse';
import { DeleteAccessConfigRequest } from './model/DeleteAccessConfigRequest';
import { DeleteAccessConfigRequestBody } from './model/DeleteAccessConfigRequestBody';
import { DeleteAccessConfigResponse } from './model/DeleteAccessConfigResponse';
import { DeleteActiveAlarmsRequest } from './model/DeleteActiveAlarmsRequest';
import { DeleteActiveAlarmsRequestBody } from './model/DeleteActiveAlarmsRequestBody';
import { DeleteActiveAlarmsResponse } from './model/DeleteActiveAlarmsResponse';
import { DeleteAomMappingRulesRequest } from './model/DeleteAomMappingRulesRequest';
import { DeleteAomMappingRulesResponse } from './model/DeleteAomMappingRulesResponse';
import { DeleteConsumerGroupRequest } from './model/DeleteConsumerGroupRequest';
import { DeleteConsumerGroupResponse } from './model/DeleteConsumerGroupResponse';
import { DeleteDashboardRequest } from './model/DeleteDashboardRequest';
import { DeleteDashboardResponse } from './model/DeleteDashboardResponse';
import { DeleteHostGroupRequest } from './model/DeleteHostGroupRequest';
import { DeleteHostGroupRequestBody } from './model/DeleteHostGroupRequestBody';
import { DeleteHostGroupResponse } from './model/DeleteHostGroupResponse';
import { DeleteKeywordsAlarmRuleRequest } from './model/DeleteKeywordsAlarmRuleRequest';
import { DeleteKeywordsAlarmRuleResponse } from './model/DeleteKeywordsAlarmRuleResponse';
import { DeleteLogGroupRequest } from './model/DeleteLogGroupRequest';
import { DeleteLogGroupResponse } from './model/DeleteLogGroupResponse';
import { DeleteLogStreamRequest } from './model/DeleteLogStreamRequest';
import { DeleteLogStreamResponse } from './model/DeleteLogStreamResponse';
import { DeleteNotificationTemplateBody } from './model/DeleteNotificationTemplateBody';
import { DeleteNotificationTemplateRequest } from './model/DeleteNotificationTemplateRequest';
import { DeleteNotificationTemplateResponse } from './model/DeleteNotificationTemplateResponse';
import { DeleteSearchCriterias } from './model/DeleteSearchCriterias';
import { DeleteSearchCriteriasRequest } from './model/DeleteSearchCriteriasRequest';
import { DeleteSearchCriteriasResponse } from './model/DeleteSearchCriteriasResponse';
import { DeleteSqlAlarmRuleRequest } from './model/DeleteSqlAlarmRuleRequest';
import { DeleteSqlAlarmRuleResponse } from './model/DeleteSqlAlarmRuleResponse';
import { DeleteStructTemplateReqBody } from './model/DeleteStructTemplateReqBody';
import { DeleteStructTemplateRequest } from './model/DeleteStructTemplateRequest';
import { DeleteStructTemplateResponse } from './model/DeleteStructTemplateResponse';
import { DeleteTransferRequest } from './model/DeleteTransferRequest';
import { DeleteTransferResponse } from './model/DeleteTransferResponse';
import { DeletefavoriteRequest } from './model/DeletefavoriteRequest';
import { DeletefavoriteResponse } from './model/DeletefavoriteResponse';
import { DemoField } from './model/DemoField';
import { DemoFieldAccess } from './model/DemoFieldAccess';
import { Detail } from './model/Detail';
import { DisableLogCollectionRequest } from './model/DisableLogCollectionRequest';
import { DisableLogCollectionResponse } from './model/DisableLogCollectionResponse';
import { EnableLogCollectionRequest } from './model/EnableLogCollectionRequest';
import { EnableLogCollectionResponse } from './model/EnableLogCollectionResponse';
import { Event } from './model/Event';
import { Events } from './model/Events';
import { FieldModel } from './model/FieldModel';
import { Frequency } from './model/Frequency';
import { FrequencyRespBody } from './model/FrequencyRespBody';
import { GetAccessConfigListRequestBody } from './model/GetAccessConfigListRequestBody';
import { GetHostGroupInfo } from './model/GetHostGroupInfo';
import { GetHostGroupListFilter } from './model/GetHostGroupListFilter';
import { GetHostGroupListRequestBody } from './model/GetHostGroupListRequestBody';
import { GetHostGroupListTag } from './model/GetHostGroupListTag';
import { GetHostListFilter } from './model/GetHostListFilter';
import { GetHostListInfo } from './model/GetHostListInfo';
import { GetHostListRequestBody } from './model/GetHostListRequestBody';
import { GetQuerySearchCriteriasBody } from './model/GetQuerySearchCriteriasBody';
import { HostGroupTag } from './model/HostGroupTag';
import { KeywordsAlarmRuleRespList } from './model/KeywordsAlarmRuleRespList';
import { KeywordsRequest } from './model/KeywordsRequest';
import { KeywordsResBody } from './model/KeywordsResBody';
import { LTSAccessConfigInfoRespon200 } from './model/LTSAccessConfigInfoRespon200';
import { LTSFieldsInfo } from './model/LTSFieldsInfo';
import { LTSFullTextIndexInfo } from './model/LTSFullTextIndexInfo';
import { LTSIndexConfigInfo } from './model/LTSIndexConfigInfo';
import { LTSSubFieldsInfo } from './model/LTSSubFieldsInfo';
import { ListAccessConfigRequest } from './model/ListAccessConfigRequest';
import { ListAccessConfigResponse } from './model/ListAccessConfigResponse';
import { ListActiveOrHistoryAlarmsRequest } from './model/ListActiveOrHistoryAlarmsRequest';
import { ListActiveOrHistoryAlarmsRequestBody } from './model/ListActiveOrHistoryAlarmsRequestBody';
import { ListActiveOrHistoryAlarmsResponse } from './model/ListActiveOrHistoryAlarmsResponse';
import { ListBreifStructTemplateRequest } from './model/ListBreifStructTemplateRequest';
import { ListBreifStructTemplateResponse } from './model/ListBreifStructTemplateResponse';
import { ListChartsRequest } from './model/ListChartsRequest';
import { ListChartsResponse } from './model/ListChartsResponse';
import { ListConsumerGroupRequest } from './model/ListConsumerGroupRequest';
import { ListConsumerGroupResponse } from './model/ListConsumerGroupResponse';
import { ListCriteriasRequest } from './model/ListCriteriasRequest';
import { ListCriteriasResponse } from './model/ListCriteriasResponse';
import { ListDetailsConsumerGroupRequest } from './model/ListDetailsConsumerGroupRequest';
import { ListDetailsConsumerGroupResponse } from './model/ListDetailsConsumerGroupResponse';
import { ListHistorySqlRequest } from './model/ListHistorySqlRequest';
import { ListHistorySqlResponse } from './model/ListHistorySqlResponse';
import { ListHostGroupRequest } from './model/ListHostGroupRequest';
import { ListHostGroupResponse } from './model/ListHostGroupResponse';
import { ListHostRequest } from './model/ListHostRequest';
import { ListHostResponse } from './model/ListHostResponse';
import { ListKeywordsAlarmRulesRequest } from './model/ListKeywordsAlarmRulesRequest';
import { ListKeywordsAlarmRulesResponse } from './model/ListKeywordsAlarmRulesResponse';
import { ListLogContextRequest } from './model/ListLogContextRequest';
import { ListLogContextRequestBody } from './model/ListLogContextRequestBody';
import { ListLogContextResponse } from './model/ListLogContextResponse';
import { ListLogGroupsRequest } from './model/ListLogGroupsRequest';
import { ListLogGroupsResponse } from './model/ListLogGroupsResponse';
import { ListLogHistogramRequest } from './model/ListLogHistogramRequest';
import { ListLogHistogramResponse } from './model/ListLogHistogramResponse';
import { ListLogStreamRequest } from './model/ListLogStreamRequest';
import { ListLogStreamResponse } from './model/ListLogStreamResponse';
import { ListLogStreamsRequest } from './model/ListLogStreamsRequest';
import { ListLogStreamsResponse } from './model/ListLogStreamsResponse';
import { ListLogStreamsResponseBody1LogStreams } from './model/ListLogStreamsResponseBody1LogStreams';
import { ListLogsRequest } from './model/ListLogsRequest';
import { ListLogsResponse } from './model/ListLogsResponse';
import { ListNotificationTemplateRequest } from './model/ListNotificationTemplateRequest';
import { ListNotificationTemplateResponse } from './model/ListNotificationTemplateResponse';
import { ListNotificationTemplatesRequest } from './model/ListNotificationTemplatesRequest';
import { ListNotificationTemplatesResponse } from './model/ListNotificationTemplatesResponse';
import { ListNotificationTopicsRequest } from './model/ListNotificationTopicsRequest';
import { ListNotificationTopicsResponse } from './model/ListNotificationTopicsResponse';
import { ListQueryAllSearchCriteriasRequest } from './model/ListQueryAllSearchCriteriasRequest';
import { ListQueryAllSearchCriteriasResponse } from './model/ListQueryAllSearchCriteriasResponse';
import { ListQueryStructuredLogsRequest } from './model/ListQueryStructuredLogsRequest';
import { ListQueryStructuredLogsResponse } from './model/ListQueryStructuredLogsResponse';
import { ListSqlAlarmRulesRequest } from './model/ListSqlAlarmRulesRequest';
import { ListSqlAlarmRulesResponse } from './model/ListSqlAlarmRulesResponse';
import { ListStructTemplateRequest } from './model/ListStructTemplateRequest';
import { ListStructTemplateResponse } from './model/ListStructTemplateResponse';
import { ListStructuredLogsWithTimeRangeRequest } from './model/ListStructuredLogsWithTimeRangeRequest';
import { ListStructuredLogsWithTimeRangeResponse } from './model/ListStructuredLogsWithTimeRangeResponse';
import { ListTimeLineTrafficStatisticsRequest } from './model/ListTimeLineTrafficStatisticsRequest';
import { ListTimeLineTrafficStatisticsResponse } from './model/ListTimeLineTrafficStatisticsResponse';
import { ListTopnTrafficStatisticsRequest } from './model/ListTopnTrafficStatisticsRequest';
import { ListTopnTrafficStatisticsResponse } from './model/ListTopnTrafficStatisticsResponse';
import { ListTransfersRequest } from './model/ListTransfersRequest';
import { ListTransfersResponse } from './model/ListTransfersResponse';
import { LogContents } from './model/LogContents';
import { LogGroup } from './model/LogGroup';
import { LogMappingConfig } from './model/LogMappingConfig';
import { LogMappingStreamInfo } from './model/LogMappingStreamInfo';
import { LogStreamResBody } from './model/LogStreamResBody';
import { LtsStructTemplateInfo } from './model/LtsStructTemplateInfo';
import { MemberGroupandStreamLogStreams } from './model/MemberGroupandStreamLogStreams';
import { MemberGroupandStreamResults } from './model/MemberGroupandStreamResults';
import { Metadata } from './model/Metadata';
import { NotificationTemplate } from './model/NotificationTemplate';
import { PageInfo } from './model/PageInfo';
import { PreviewAgencyLogAccessReqBody } from './model/PreviewAgencyLogAccessReqBody';
import { PreviewAgencyLogAccessReqListBody } from './model/PreviewAgencyLogAccessReqListBody';
import { PreviewTemplateBody } from './model/PreviewTemplateBody';
import { Processor } from './model/Processor';
import { QuertHistorySQLResultsBody } from './model/QuertHistorySQLResultsBody';
import { QueryLogKeyWordCountRequestBody } from './model/QueryLogKeyWordCountRequestBody';
import { QueryLtsLogParams } from './model/QueryLtsLogParams';
import { QueryLtsStructLogParams } from './model/QueryLtsStructLogParams';
import { QueryLtsStructLogParamsNew } from './model/QueryLtsStructLogParamsNew';
import { RegisterDmsKafkaInstanceRequest } from './model/RegisterDmsKafkaInstanceRequest';
import { RegisterDmsKafkaInstanceRequestBody } from './model/RegisterDmsKafkaInstanceRequestBody';
import { RegisterDmsKafkaInstanceRequestBodyConnectInfo } from './model/RegisterDmsKafkaInstanceRequestBodyConnectInfo';
import { RegisterDmsKafkaInstanceResponse } from './model/RegisterDmsKafkaInstanceResponse';
import { Resulits } from './model/Resulits';
import { ResultsTopnBody } from './model/ResultsTopnBody';
import { Rule } from './model/Rule';
import { SearchCriteriasBody } from './model/SearchCriteriasBody';
import { ShowAdminConfigRequest } from './model/ShowAdminConfigRequest';
import { ShowAdminConfigResponse } from './model/ShowAdminConfigResponse';
import { ShowAomMappingRuleRequest } from './model/ShowAomMappingRuleRequest';
import { ShowAomMappingRuleResponse } from './model/ShowAomMappingRuleResponse';
import { ShowAomMappingRulesRequest } from './model/ShowAomMappingRulesRequest';
import { ShowAomMappingRulesResponse } from './model/ShowAomMappingRulesResponse';
import { ShowCursorByTimeRequest } from './model/ShowCursorByTimeRequest';
import { ShowCursorByTimeResponse } from './model/ShowCursorByTimeResponse';
import { ShowCursorTimeRequest } from './model/ShowCursorTimeRequest';
import { ShowCursorTimeResponse } from './model/ShowCursorTimeResponse';
import { ShowLogConvergeConfigRequest } from './model/ShowLogConvergeConfigRequest';
import { ShowLogConvergeConfigResponse } from './model/ShowLogConvergeConfigResponse';
import { ShowLogStreamShardsRequest } from './model/ShowLogStreamShardsRequest';
import { ShowLogStreamShardsResponse } from './model/ShowLogStreamShardsResponse';
import { ShowMemberGroupAndStreamRequest } from './model/ShowMemberGroupAndStreamRequest';
import { ShowMemberGroupAndStreamResponse } from './model/ShowMemberGroupAndStreamResponse';
import { ShowNotificationTemplateRequest } from './model/ShowNotificationTemplateRequest';
import { ShowNotificationTemplateResponse } from './model/ShowNotificationTemplateResponse';
import { ShowStructTemplateRequest } from './model/ShowStructTemplateRequest';
import { ShowStructTemplateResponse } from './model/ShowStructTemplateResponse';
import { ShowStructTemplateRule } from './model/ShowStructTemplateRule';
import { ShowStructTemplateclusterInfo } from './model/ShowStructTemplateclusterInfo';
import { Sort } from './model/Sort';
import { SqlAlarmRuleRespList } from './model/SqlAlarmRuleRespList';
import { SqlNotificationSaveRule } from './model/SqlNotificationSaveRule';
import { SqlRequest } from './model/SqlRequest';
import { StructConfig } from './model/StructConfig';
import { StructFieldInfo } from './model/StructFieldInfo';
import { StructFieldInfoReturn } from './model/StructFieldInfoReturn';
import { StructLogContents } from './model/StructLogContents';
import { StructTemplate } from './model/StructTemplate';
import { StructTemplateModel } from './model/StructTemplateModel';
import { SubTemplate } from './model/SubTemplate';
import { TagField } from './model/TagField';
import { TagFieldNew } from './model/TagFieldNew';
import { TagFieldsInfo } from './model/TagFieldsInfo';
import { TagsBody } from './model/TagsBody';
import { TemplateRule } from './model/TemplateRule';
import { TimeRange } from './model/TimeRange';
import { TimelineTrafficStatisticsRequestBody } from './model/TimelineTrafficStatisticsRequestBody';
import { Topics } from './model/Topics';
import { TopnRequstBody } from './model/TopnRequstBody';
import { TransferDetail } from './model/TransferDetail';
import { UpdateAccessConfigRequest } from './model/UpdateAccessConfigRequest';
import { UpdateAccessConfigRequestBody } from './model/UpdateAccessConfigRequestBody';
import { UpdateAccessConfigResponse } from './model/UpdateAccessConfigResponse';
import { UpdateAlarmRuleStatusRequest } from './model/UpdateAlarmRuleStatusRequest';
import { UpdateAlarmRuleStatusResponse } from './model/UpdateAlarmRuleStatusResponse';
import { UpdateAomMappingRequest } from './model/UpdateAomMappingRequest';
import { UpdateAomMappingRulesRequest } from './model/UpdateAomMappingRulesRequest';
import { UpdateAomMappingRulesResponse } from './model/UpdateAomMappingRulesResponse';
import { UpdateCheckPointRequest } from './model/UpdateCheckPointRequest';
import { UpdateCheckPointResponse } from './model/UpdateCheckPointResponse';
import { UpdateHostGroupRequest } from './model/UpdateHostGroupRequest';
import { UpdateHostGroupRequestBody } from './model/UpdateHostGroupRequestBody';
import { UpdateHostGroupResponse } from './model/UpdateHostGroupResponse';
import { UpdateKeywordsAlarmRuleRequest } from './model/UpdateKeywordsAlarmRuleRequest';
import { UpdateKeywordsAlarmRuleRequestBody } from './model/UpdateKeywordsAlarmRuleRequestBody';
import { UpdateKeywordsAlarmRuleResponse } from './model/UpdateKeywordsAlarmRuleResponse';
import { UpdateLogConvergeConfigRequest } from './model/UpdateLogConvergeConfigRequest';
import { UpdateLogConvergeConfigResponse } from './model/UpdateLogConvergeConfigResponse';
import { UpdateLogGroupParams } from './model/UpdateLogGroupParams';
import { UpdateLogGroupRequest } from './model/UpdateLogGroupRequest';
import { UpdateLogGroupResponse } from './model/UpdateLogGroupResponse';
import { UpdateLogStreamParams } from './model/UpdateLogStreamParams';
import { UpdateLogStreamRequest } from './model/UpdateLogStreamRequest';
import { UpdateLogStreamResponse } from './model/UpdateLogStreamResponse';
import { UpdateNotificationTemplateRequest } from './model/UpdateNotificationTemplateRequest';
import { UpdateNotificationTemplateResponse } from './model/UpdateNotificationTemplateResponse';
import { UpdateSqlAlarmRuleRequest } from './model/UpdateSqlAlarmRuleRequest';
import { UpdateSqlAlarmRuleRequestBody } from './model/UpdateSqlAlarmRuleRequestBody';
import { UpdateSqlAlarmRuleResponse } from './model/UpdateSqlAlarmRuleResponse';
import { UpdateStructConfigRequest } from './model/UpdateStructConfigRequest';
import { UpdateStructConfigResponse } from './model/UpdateStructConfigResponse';
import { UpdateStructTemplateRequest } from './model/UpdateStructTemplateRequest';
import { UpdateStructTemplateResponse } from './model/UpdateStructTemplateResponse';
import { UpdateSwitchRequest } from './model/UpdateSwitchRequest';
import { UpdateSwitchResponse } from './model/UpdateSwitchResponse';
import { UpdateTransferRequest } from './model/UpdateTransferRequest';
import { UpdateTransferRequestBody } from './model/UpdateTransferRequestBody';
import { UpdateTransferRequestBodyLogTransferInfo } from './model/UpdateTransferRequestBodyLogTransferInfo';
import { UpdateTransferResponse } from './model/UpdateTransferResponse';
import { UpdatelogConvergeConfig } from './model/UpdatelogConvergeConfig';

export class LtsClient {
    public static newBuilder(): ClientBuilder<LtsClient> {
            let client = new ClientBuilder<LtsClient>(newClient);
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
     * 创建日志接入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志接入
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateAccessConfigRequestBody} createAccessConfigRequestBody 创建日志接入请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAccessConfig(createAccessConfigRequest?: CreateAccessConfigRequest): Promise<CreateAccessConfigResponse> {
        const options = ParamCreater().createAccessConfig(createAccessConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新建跨账号日志接入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建跨账号日志接入
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;utf8。
     * @param {PreviewAgencyLogAccessReqListBody} previewAgencyLogAccessReqListBody 跨账号日志接入请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgencyAccess(createAgencyAccessRequest?: CreateAgencyAccessRequest): Promise<CreateAgencyAccessResponse> {
        const options = ParamCreater().createAgencyAccess(createAgencyAccessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建仪表盘
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建仪表盘
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  最小长度：30  最大长度：30
     * @param {CreateDashBoardReqBody} [createDashBoardBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDashBoard(createDashBoardRequest?: CreateDashBoardRequest): Promise<CreateDashBoardResponse> {
        const options = ParamCreater().createDashBoard(createDashBoardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建仪表盘分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建仪表盘分组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。 最小长度：30 最大长度：30
     * @param {CreateDashboardGroupReq} createDashboardGroup 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDashboardGroup(createDashboardGroupRequest?: CreateDashboardGroupRequest): Promise<CreateDashboardGroupResponse> {
        const options = ParamCreater().createDashboardGroup(createDashboardGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建主机组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建主机组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateHostGroupRequestBody} createHostGroupRequestBody 创建主机组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createHostGroup(createHostGroupRequest?: CreateHostGroupRequest): Promise<CreateHostGroupResponse> {
        const options = ParamCreater().createHostGroup(createHostGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建关键词告警，目前每个帐户最多可以创建共200个关键词告警与SQL告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建关键词告警规则
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateKeywordsAlarmRuleRequestBody} createKeywordsAlarmRuleRequestBody 创建关键字告警的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKeywordsAlarmRule(createKeywordsAlarmRuleRequest?: CreateKeywordsAlarmRuleRequest): Promise<CreateKeywordsAlarmRuleResponse> {
        const options = ParamCreater().createKeywordsAlarmRule(createKeywordsAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于将指定的一个或多个日志流的日志转储到OBS服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志转储（旧版）
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateLogDumpObsRequestBody} createLogDumpObsRequestBody 该参数需要在调用时，放在请求body中，为JSON字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogDumpObs(createLogDumpObsRequest?: CreateLogDumpObsRequest): Promise<CreateLogDumpObsResponse> {
        const options = ParamCreater().createLogDumpObs(createLogDumpObsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建一个日志组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateLogGroupParams} createLogGroupRequestBody 添加日志组的参数, 包含日志组的名称以及日志存储时间 天。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogGroup(createLogGroupRequest?: CreateLogGroupRequest): Promise<CreateLogGroupResponse> {
        const options = ParamCreater().createLogGroup(createLogGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建某个指定日志组下的日志流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志流
     * @param {string} logGroupId 租户想创建的日志流所在的日志组的groupid，一般为36位字符串。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateLogStreamParams} createLogStreamRequestBody 添加日志流的参数, 日志流的名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogStream(createLogStreamRequest?: CreateLogStreamRequest): Promise<CreateLogStreamResponse> {
        const options = ParamCreater().createLogStream(createLogStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 向指定流创建索引
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 向指定流创建索引
     * @param {string} groupId \&#39;项目ID，账号ID，日志组ID、日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID\&#39;
     * @param {string} streamId \&#39;项目ID，账号ID，日志组ID、日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID\&#39;
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8
     * @param {LTSIndexConfigInfo} requestBody 全文索引和字段索引至少开启一种
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLogStreamIndex(createLogStreamIndexRequest?: CreateLogStreamIndexRequest): Promise<CreateLogStreamIndexResponse> {
        const options = ParamCreater().createLogStreamIndex(createLogStreamIndexRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建通知模板，目前每个帐户最多可以创建共100个通知模板，创建后名称不可修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消息模板
     * @param {string} domainId 租户id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateNotificationTemplateRequestBody} createNotificationTemplateRequestBody 创建通知模板的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNotificationTemplate(createNotificationTemplateRequest?: CreateNotificationTemplateRequest): Promise<CreateNotificationTemplateResponse> {
        const options = ParamCreater().createNotificationTemplate(createNotificationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加快速查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加快速查询
     * @param {string} groupId 租户想查询的日志流所在的日志组的groupid，一般为36位字符串。  缺省值：None  最小长度：36  最大长度：36
     * @param {string} topicId 日志流id
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  缺省值：None  最小长度：30  最大长度：30
     * @param {CreateSearchCriteriasBody} [createSearchCriteriasBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSearchCriterias(createSearchCriteriasRequest?: CreateSearchCriteriasRequest): Promise<CreateSearchCriteriasResponse> {
        const options = ParamCreater().createSearchCriterias(createSearchCriteriasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口通过结构化模板创建结构化配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过结构化模板创建结构化配置（新）
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {StructConfig} createStructConfigRequestBody 创建结构化配置的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStructConfig(createStructConfigRequest?: CreateStructConfigRequest): Promise<CreateStructConfigResponse> {
        const options = ParamCreater().createStructConfig(createStructConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建指定日志流下的结构化配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建结构化配置
     * @param {LtsStructTemplateInfo} createStructTemplateRequestBody 创建结构化配置参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createStructTemplate(createStructTemplateRequest?: CreateStructTemplateRequest): Promise<CreateStructTemplateResponse> {
        const options = ParamCreater().createStructTemplate(createStructTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加标签
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {string} resourceType 资源类型
     * @param {string} resourceId 资源id
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  最小长度：30  最大长度：30
     * @param {CreateTagsReqbody} [createTags] 
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
     * 该接口用于创建OBS转储，DIS转储，DMS转储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志转储（新版）
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateTransferRequestBody} createTransferRequestBody 创建OBS转储，DIS转储，DMS转储的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTransfer(createTransferRequest?: CreateTransferRequest): Promise<CreateTransferResponse> {
        const options = ParamCreater().createTransfer(createTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建日志收藏
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建日志收藏
     * @param {CreatefavoriteReqbody} [requestBody] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createfavorite(createfavoriteRequest?: CreatefavoriteRequest): Promise<CreatefavoriteResponse> {
        const options = ParamCreater().createfavorite(createfavoriteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除日志接入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除日志接入
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {DeleteAccessConfigRequestBody} deleteAccessConfigRequestBody 删除日志接入请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAccessConfig(deleteAccessConfigRequest?: DeleteAccessConfigRequest): Promise<DeleteAccessConfigResponse> {
        const options = ParamCreater().deleteAccessConfig(deleteAccessConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除活动告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除活动告警
     * @param {string} domainId domainId
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {DeleteActiveAlarmsRequestBody} deleteActiveAlarmsRequestBody 删除告警请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteActiveAlarms(deleteActiveAlarmsRequest?: DeleteActiveAlarmsRequest): Promise<DeleteActiveAlarmsResponse> {
        const options = ParamCreater().deleteActiveAlarms(deleteActiveAlarmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除仪表盘
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除仪表盘
     * @param {string} id 仪表盘id
     * @param {boolean} isDeleteCharts 是否删除图表
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  最小长度：30  最大长度：30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDashboard(deleteDashboardRequest?: DeleteDashboardRequest): Promise<DeleteDashboardResponse> {
        const options = ParamCreater().deleteDashboard(deleteDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除主机组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除主机组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {DeleteHostGroupRequestBody} deleteHostGroupRequestBody 删除主机组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteHostGroup(deleteHostGroupRequest?: DeleteHostGroupRequest): Promise<DeleteHostGroupResponse> {
        const options = ParamCreater().deleteHostGroup(deleteHostGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除关键词告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除关键词告警规则
     * @param {string} keywordsAlarmRuleId 关键词告警规则id
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKeywordsAlarmRule(deleteKeywordsAlarmRuleRequest?: DeleteKeywordsAlarmRuleRequest): Promise<DeleteKeywordsAlarmRuleResponse> {
        const options = ParamCreater().deleteKeywordsAlarmRule(deleteKeywordsAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除指定日志组。当日志组中的日志流配置了日志转储，需要取消日志转储后才可删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除日志组
     * @param {string} logGroupId 日志组ID，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogGroup(deleteLogGroupRequest?: DeleteLogGroupRequest): Promise<DeleteLogGroupResponse> {
        const options = ParamCreater().deleteLogGroup(deleteLogGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除指定日志组下的指定日志流。当该日志流配置了日志转储，需要取消日志转储后才可删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除日志流
     * @param {string} logGroupId 租户想删除的日志流所在的日志组的groupid，一般为36位字符串。
     * @param {string} logStreamId 需要删除的日志流ID，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogStream(deleteLogStreamRequest?: DeleteLogStreamRequest): Promise<DeleteLogStreamResponse> {
        const options = ParamCreater().deleteLogStream(deleteLogStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除通知模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除消息模板
     * @param {string} domainId 账号id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {DeleteNotificationTemplateBody} deleteNotificationTemplateRequestBody 删除通知模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteNotificationTemplate(deleteNotificationTemplateRequest?: DeleteNotificationTemplateRequest): Promise<DeleteNotificationTemplateResponse> {
        const options = ParamCreater().deleteNotificationTemplate(deleteNotificationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除快速查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除快速查询
     * @param {string} groupId 租户想查询的日志流所在的日志组的groupid，一般为36位字符串。  缺省值：None  最小长度：36  最大长度：36
     * @param {string} topicId 日志流id
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  缺省值：None  最小长度：30  最大长度：30
     * @param {DeleteSearchCriterias} [deleteSearchCriterias] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSearchCriterias(deleteSearchCriteriasRequest?: DeleteSearchCriteriasRequest): Promise<DeleteSearchCriteriasResponse> {
        const options = ParamCreater().deleteSearchCriterias(deleteSearchCriteriasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除指定日志流下的结构化配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除结构化配置
     * @param {DeleteStructTemplateReqBody} deleteStructTemplateRequestBody 删除结构化配置参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteStructTemplate(deleteStructTemplateRequest?: DeleteStructTemplateRequest): Promise<DeleteStructTemplateResponse> {
        const options = ParamCreater().deleteStructTemplate(deleteStructTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除OBS转储，DIS转储，DMS转储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除日志转储
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {string} logTransferId 日志转储ID。获取ID有3种方式： 1. 调用查询日志转储接口，返回值有日志转储ID  2. 调用新增日志转储接口，返回值有日志转储ID 3. 调用删除日志转储接口，返回值有日志转储ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTransfer(deleteTransferRequest?: DeleteTransferRequest): Promise<DeleteTransferResponse> {
        const options = ParamCreater().deleteTransfer(deleteTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消收藏
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消收藏
     * @param {string} favResId 收藏资源id
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  最小长度：30  最大长度：30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletefavorite(deletefavoriteRequest?: DeletefavoriteRequest): Promise<DeletefavoriteResponse> {
        const options = ParamCreater().deletefavorite(deletefavoriteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于将超额采集日志功能关闭。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭超额采集开关
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableLogCollection(disableLogCollectionRequest?: DisableLogCollectionRequest): Promise<DisableLogCollectionResponse> {
        const options = ParamCreater().disableLogCollection(disableLogCollectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于将超额采集日志功能打开。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 打开超额采集开关
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableLogCollection(enableLogCollectionRequest?: EnableLogCollectionRequest): Promise<EnableLogCollectionResponse> {
        const options = ParamCreater().enableLogCollection(enableLogCollectionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询日志接入列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志接入
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {GetAccessConfigListRequestBody} listAccessConfigRequestBody 查询日志接入请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessConfig(listAccessConfigRequest?: ListAccessConfigRequest): Promise<ListAccessConfigResponse> {
        const options = ParamCreater().listAccessConfig(listAccessConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询告警列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询活动或历史告警列表
     * @param {string} domainId domainId
     * @param {'active_alert' | 'history_alert'} type 是活动告警还是历史告警
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {ListActiveOrHistoryAlarmsRequestBody} listActiveOrHistoryAlarmsRequestBody 查询活动告警或者历史告警的请求体
     * @param {string} [marker] 取值为上一页数据的最后一条记录的id(填写上一页数据返回得previous_marker或者next_marker值。)
     * @param {number} [limit] 每页数据量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listActiveOrHistoryAlarms(listActiveOrHistoryAlarmsRequest?: ListActiveOrHistoryAlarmsRequest): Promise<ListActiveOrHistoryAlarmsResponse> {
        const options = ParamCreater().listActiveOrHistoryAlarms(listActiveOrHistoryAlarmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询结构化模板简略列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询结构化模板简略列表
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBreifStructTemplate(listBreifStructTemplateRequest?: ListBreifStructTemplateRequest): Promise<ListBreifStructTemplateResponse> {
        const options = ParamCreater().listBreifStructTemplate(listBreifStructTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询日志流图表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志流图表
     * @param {string} logGroupId 日志组ID
     * @param {string} logStreamId 日志流ID
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {number} [offset] 查询游标，初始传入0，后续从上一次的返回值中获取
     * @param {number} [limit] 每页数据量，最大值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCharts(listChartsRequest?: ListChartsRequest): Promise<ListChartsResponse> {
        const options = ParamCreater().listCharts(listChartsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取快速查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取快速查询
     * @param {string} groupId 租户想查询的日志流所在的日志组的groupid，一般为36位字符串。  缺省值：None  最小长度：36  最大长度：36
     * @param {string} topicId 日志流id
     * @param {string} [contentType] 该字段填为：application/json;charset&#x3D;UTF-8。  缺省值：None  最小长度：30  最大长度：30
     * @param {string} [searchType] 原始日志：ORIGINALLOG 可视化日志: VISUALIZATION
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCriterias(listCriteriasRequest?: ListCriteriasRequest): Promise<ListCriteriasResponse> {
        const options = ParamCreater().listCriterias(listCriteriasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户历史sql
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户历史sql
     * @param {string} logGroupId 日志组id
     * @param {string} logStreamId 日志流id
     * @param {string} [contentType] 该字段填为：application/json;charset&#x3D;UTF-8。  最小长度：30  最大长度：30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHistorySql(listHistorySqlRequest?: ListHistorySqlRequest): Promise<ListHistorySqlResponse> {
        const options = ParamCreater().listHistorySql(listHistorySqlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机信息
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {GetHostListRequestBody} listHostRequestBody 查询主机信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHost(listHostRequest?: ListHostRequest): Promise<ListHostResponse> {
        const options = ParamCreater().listHost(listHostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询主机组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {GetHostGroupListRequestBody} listHostGroupRequestBody 查询主机组信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHostGroup(listHostGroupRequest?: ListHostGroupRequest): Promise<ListHostGroupResponse> {
        const options = ParamCreater().listHostGroup(listHostGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询关键词告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询关键词告警规则
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeywordsAlarmRules(listKeywordsAlarmRulesRequest?: ListKeywordsAlarmRulesRequest): Promise<ListKeywordsAlarmRulesResponse> {
        const options = ParamCreater().listKeywordsAlarmRules(listKeywordsAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询上下文日志 该接口用于查询指定日志前（上文）后（下文）的若干条日志。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询上下文日志
     * @param {string} logGroupId 日志组ID，获取方式请参见：[获取项目ID，获取账号ID，日志组ID、日志流ID](lts_api_0006.xml)
     * @param {string} logStreamId 日志流ID，获取方式请参见：[获取项目ID，获取账号ID，日志组ID、日志流ID](lts_api_0006.xml)
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {ListLogContextRequestBody} listLogContextRequestBody 查询上下文日志的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogContext(listLogContextRequest?: ListLogContextRequest): Promise<ListLogContextResponse> {
        const options = ParamCreater().listLogContext(listLogContextRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询账号下所有日志组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询账号下所有日志组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogGroups(listLogGroupsRequest?: ListLogGroupsRequest): Promise<ListLogGroupsResponse> {
        const options = ParamCreater().listLogGroups(listLogGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询关键词搜索条数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志直方图
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {QueryLogKeyWordCountRequestBody} listLogHistogramRequestBody 查询关键词搜索条数的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogHistogram(listLogHistogramRequest?: ListLogHistogramRequest): Promise<ListLogHistogramResponse> {
        const options = ParamCreater().listLogHistogram(listLogHistogramRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定日志组下的所有日志流信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定日志组下的所有日志流
     * @param {string} logGroupId 租户想查询的日志流所在的日志组的groupid，一般为36位字符串。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogStream(listLogStreamRequest?: ListLogStreamRequest): Promise<ListLogStreamResponse> {
        const options = ParamCreater().listLogStream(listLogStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询LTS日志流信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志流信息
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {string} [logGroupName] 日志组名称
     * @param {string} [logStreamName] 日志流名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogStreams(listLogStreamsRequest?: ListLogStreamsRequest): Promise<ListLogStreamsResponse> {
        const options = ParamCreater().listLogStreams(listLogStreamsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定日志流下的日志内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志
     * @param {string} logGroupId 日志组id。
     * @param {string} logStreamId 日志流id。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {QueryLtsLogParams} listLogsRequestBody 该参数需要在调用时，放在请求body中，为JSON字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogs(listLogsRequest?: ListLogsRequest): Promise<ListLogsResponse> {
        const options = ParamCreater().listLogs(listLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于预览通知模板邮件格式
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 预览消息模板邮件格式
     * @param {string} domainId 账号id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {PreviewTemplateBody} previewNotificationTemplateRequestBody 邮件格式预览请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationTemplate(listNotificationTemplateRequest?: ListNotificationTemplateRequest): Promise<ListNotificationTemplateResponse> {
        const options = ParamCreater().listNotificationTemplate(listNotificationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询通知模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消息模板
     * @param {string} domainId 账号id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {number} [offset] 查询游标，初始传入0，后续从上一次的返回值中获取
     * @param {number} [limit] 每页数据量，最大值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationTemplates(listNotificationTemplatesRequest?: ListNotificationTemplatesRequest): Promise<ListNotificationTemplatesResponse> {
        const options = ParamCreater().listNotificationTemplates(listNotificationTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询SMN主题
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SMN主题
     * @param {number} offset 查询游标，初始传入0，后续从上一次的返回值中获取
     * @param {number} limit 每页数据量，最大值为100
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationTopics(listNotificationTopicsRequest?: ListNotificationTopicsRequest): Promise<ListNotificationTopicsResponse> {
        const options = ParamCreater().listNotificationTopics(listNotificationTopicsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询日志组下所有快速查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志组下所有快速查询
     * @param {string} groupId 租户想查询的日志流所在的日志组的groupid，一般为36位字符串。  缺省值：None  最小长度：36  最大长度：36
     * @param {string} [contentType] 该字段填为：application/json;charset&#x3D;UTF-8。  缺省值：None  最小长度：30  最大长度：30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueryAllSearchCriterias(listQueryAllSearchCriteriasRequest?: ListQueryAllSearchCriteriasRequest): Promise<ListQueryAllSearchCriteriasResponse> {
        const options = ParamCreater().listQueryAllSearchCriterias(listQueryAllSearchCriteriasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定日志流下的结构化日志内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询结构化日志
     * @param {string} logGroupId 日志组id。
     * @param {string} logStreamId 日志流id。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {QueryLtsStructLogParams} listQueryStructuredLogsRequestBody 该参数需要在调用时，放在请求body中，为JSON字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQueryStructuredLogs(listQueryStructuredLogsRequest?: ListQueryStructuredLogsRequest): Promise<ListQueryStructuredLogsResponse> {
        const options = ParamCreater().listQueryStructuredLogs(listQueryStructuredLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询结构化模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询结构化模板
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {string} [id] 待查询模板id,非必填，不传时返回项目下所有自定义结构化模板
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStructTemplate(listStructTemplateRequest?: ListStructTemplateRequest): Promise<ListStructTemplateResponse> {
        const options = ParamCreater().listStructTemplate(listStructTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定日志流下的结构化日志内容（新版）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询结构化日志（新版）
     * @param {string} logStreamId 日志流id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {QueryLtsStructLogParamsNew} listStructuredLogsWithTimeRangeRequestBody 该参数需要在调用时，放在请求body中，为JSON字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStructuredLogsWithTimeRange(listStructuredLogsWithTimeRangeRequest?: ListStructuredLogsWithTimeRangeRequest): Promise<ListStructuredLogsWithTimeRangeResponse> {
        const options = ParamCreater().listStructuredLogsWithTimeRange(listStructuredLogsWithTimeRangeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 按时间段统计查询资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 按时间段统计查询资源
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  缺省值：None  最小长度：30  最大长度：30
     * @param {string} timezone 时区
     * @param {TimelineTrafficStatisticsRequestBody} timelineTrafficStatisticsRequestBody DemoInfo object that needs to be created
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTimeLineTrafficStatistics(listTimeLineTrafficStatisticsRequest?: ListTimeLineTrafficStatisticsRequest): Promise<ListTimeLineTrafficStatisticsResponse> {
        const options = ParamCreater().listTimeLineTrafficStatistics(listTimeLineTrafficStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 统计top n的日志组或日志流流量
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统计top n的日志组或日志流流量
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  最小长度：30  最大长度：30
     * @param {TopnRequstBody} updateDemoInfoRequestBody DemoInfo object that needs to be modified
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTopnTrafficStatistics(listTopnTrafficStatisticsRequest?: ListTopnTrafficStatisticsRequest): Promise<ListTopnTrafficStatisticsResponse> {
        const options = ParamCreater().listTopnTrafficStatistics(listTopnTrafficStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询OBS转储，DIS转储，DMS转储配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志转储
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {'OBS' | 'DIS' | 'DMS'} [logTransferType] 日志转储类型。OBS指OBS日志转储，DIS指DIS日志转储，DMS指DMS日志转储
     * @param {string} [logGroupName] 日志组名称
     * @param {string} [logStreamName] 日志流名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTransfers(listTransfersRequest?: ListTransfersRequest): Promise<ListTransfersResponse> {
        const options = ParamCreater().listTransfers(listTransfersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于注册DMS kafka实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 注册DMS kafka实例
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {RegisterDmsKafkaInstanceRequestBody} registerDmsKafkaInstanceRequestBody 注册DMS kafka实例的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerDmsKafkaInstance(registerDmsKafkaInstanceRequest?: RegisterDmsKafkaInstanceRequest): Promise<RegisterDmsKafkaInstanceResponse> {
        const options = ParamCreater().registerDmsKafkaInstance(registerDmsKafkaInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只能由管理员或者委托管理员调用    获取日志汇聚开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取日志汇聚开关
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;utf8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAdminConfig(showAdminConfigRequest?: ShowAdminConfigRequest): Promise<ShowAdminConfigResponse> {
        const options = ParamCreater().showAdminConfig(showAdminConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只能由组织管理员或者委托管理员调用    获取组织成员汇聚配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组织成员汇聚配置
     * @param {string} memberAccountId 成员帐户ID
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogConvergeConfig(showLogConvergeConfigRequest?: ShowLogConvergeConfigRequest): Promise<ShowLogConvergeConfigResponse> {
        const options = ParamCreater().showLogConvergeConfig(showLogConvergeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只能由管理员或者委托管理员调用，获取组织成员日志组日志流
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组织成员日志组日志流
     * @param {string} memberAccountId 成员账号ID
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMemberGroupAndStream(showMemberGroupAndStreamRequest?: ShowMemberGroupAndStreamRequest): Promise<ShowMemberGroupAndStreamResponse> {
        const options = ParamCreater().showMemberGroupAndStream(showMemberGroupAndStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询单个通知模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个消息模板
     * @param {string} domainId 账号id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} templateName template_name
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNotificationTemplate(showNotificationTemplateRequest?: ShowNotificationTemplateRequest): Promise<ShowNotificationTemplateResponse> {
        const options = ParamCreater().showNotificationTemplate(showNotificationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定日志流下的结构化配置内容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询结构化配置
     * @param {string} logGroupId 日志组ID
     * @param {string} logStreamId 日志流ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStructTemplate(showStructTemplateRequest?: ShowStructTemplateRequest): Promise<ShowStructTemplateResponse> {
        const options = ParamCreater().showStructTemplate(showStructTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改日志接入
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改日志接入
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdateAccessConfigRequestBody} updateAccessConfigRequestBody 修改日志接入请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAccessConfig(updateAccessConfigRequest?: UpdateAccessConfigRequest): Promise<UpdateAccessConfigResponse> {
        const options = ParamCreater().updateAccessConfig(updateAccessConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改主机组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改主机组
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdateHostGroupRequestBody} updateHostGroupRequestBody 更新主机组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateHostGroup(updateHostGroupRequest?: UpdateHostGroupRequest): Promise<UpdateHostGroupResponse> {
        const options = ParamCreater().updateHostGroup(updateHostGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改关键词告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改关键词告警规则
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdateKeywordsAlarmRuleRequestBody} updateKeywordsAlarmRuleRequestBody 创建关键字告警的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeywordsAlarmRule(updateKeywordsAlarmRuleRequest?: UpdateKeywordsAlarmRuleRequest): Promise<UpdateKeywordsAlarmRuleResponse> {
        const options = ParamCreater().updateKeywordsAlarmRule(updateKeywordsAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只能由管理员或者委托管理员 ,更新汇聚配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新汇聚配置
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdatelogConvergeConfig} updateBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogConvergeConfig(updateLogConvergeConfigRequest?: UpdateLogConvergeConfigRequest): Promise<UpdateLogConvergeConfigResponse> {
        const options = ParamCreater().updateLogConvergeConfig(updateLogConvergeConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改指定日志组下的日志存储时长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改日志组
     * @param {string} logGroupId 日志组ID，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdateLogGroupParams} updateLogGroupRequestBody 添加日志组的参数, 包含日志组的名称以及日志存储时间 天。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogGroup(updateLogGroupRequest?: UpdateLogGroupRequest): Promise<UpdateLogGroupResponse> {
        const options = ParamCreater().updateLogGroup(updateLogGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改指定日志流下的日志存储时长。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改日志流
     * @param {string} logGroupId 日志组ID，获取方式请参见：获取帐号ID、项目ID、日志组ID、日志流ID。  缺省值：None 最小长度：36 最大长度：36
     * @param {string} logStreamId 日志流ID，获取方式请参见：获取帐号ID、项目ID、日志组ID、日志流ID。  缺省值：None 最小长度：36 最大长度：36
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。  缺省值：None 最小长度：30 最大长度：30
     * @param {UpdateLogStreamParams} updateLogStreamRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLogStream(updateLogStreamRequest?: UpdateLogStreamRequest): Promise<UpdateLogStreamResponse> {
        const options = ParamCreater().updateLogStream(updateLogStreamRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改通知模板,根据名称进行修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改消息模板
     * @param {string} domainId 账号id，获取方式请参见：获取账号ID、项目ID、日志组ID、日志流ID（https://support.huaweicloud.com/api-lts/lts_api_0006.html）。
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateNotificationTemplateRequestBody} updateNotificationTemplateRequestBody 创建关键字告警的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNotificationTemplate(updateNotificationTemplateRequest?: UpdateNotificationTemplateRequest): Promise<UpdateNotificationTemplateResponse> {
        const options = ParamCreater().updateNotificationTemplate(updateNotificationTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口通过结构化模板修改结构化配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过结构化模板修改结构化配置（新）
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {StructConfig} updateStructConfigRequestBody 修改结构化配置的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStructConfig(updateStructConfigRequest?: UpdateStructConfigRequest): Promise<UpdateStructConfigResponse> {
        const options = ParamCreater().updateStructConfig(updateStructConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改指定日志流下的结构化配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改结构化配置
     * @param {LtsStructTemplateInfo} updateStructTemplateRequestBody 更新结构化配置参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateStructTemplate(updateStructTemplateRequest?: UpdateStructTemplateRequest): Promise<UpdateStructTemplateResponse> {
        const options = ParamCreater().updateStructTemplate(updateStructTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 只能由管理员或者委托管理员调用     修改日志汇聚开关
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改日志汇聚开关
     * @param {string} logConvergeSwitch 开关参数
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;utf8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSwitch(updateSwitchRequest?: UpdateSwitchRequest): Promise<UpdateSwitchResponse> {
        const options = ParamCreater().updateSwitch(updateSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于更新OBS转储，DIS转储，DMS转储。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新日志转储
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdateTransferRequestBody} updateTransferRequestBody 更新OBS转储，DIS转储，DMS转储的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTransfer(updateTransferRequest?: UpdateTransferRequest): Promise<UpdateTransferResponse> {
        const options = ParamCreater().updateTransfer(updateTransferRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建aom日志接入lts规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建接入规则
     * @param {boolean} isBatch 是否开启自动映射
     * @param {AomMappingRequestInfo} createAomMappingRulesRequestBody 接入规则详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAomMappingRules(createAomMappingRulesRequest?: CreateAomMappingRulesRequest): Promise<CreateAomMappingRulesResponse> {
        const options = ParamCreater().createAomMappingRules(createAomMappingRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除lts接入规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除接入规则
     * @param {string} id 接入lts规则id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAomMappingRules(deleteAomMappingRulesRequest?: DeleteAomMappingRulesRequest): Promise<DeleteAomMappingRulesResponse> {
        const options = ParamCreater().deleteAomMappingRules(deleteAomMappingRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询单个aom日志接入lts
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个接入规则
     * @param {string} ruleId 接入规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAomMappingRule(showAomMappingRuleRequest?: ShowAomMappingRuleRequest): Promise<ShowAomMappingRuleResponse> {
        const options = ParamCreater().showAomMappingRule(showAomMappingRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询aom日志所有接入lts规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有接入规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAomMappingRules(showAomMappingRulesRequest?: ShowAomMappingRulesRequest): Promise<ShowAomMappingRulesResponse> {
        const options = ParamCreater().showAomMappingRules();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改接入规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改接入规则
     * @param {UpdateAomMappingRequest} updateAomMappingRulesRequestBody 接入规则详情
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAomMappingRules(updateAomMappingRulesRequest?: UpdateAomMappingRulesRequest): Promise<UpdateAomMappingRulesResponse> {
        const options = ParamCreater().updateAomMappingRules(updateAomMappingRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 消费者发送心跳到服务端
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 消费者发送心跳到服务端
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} consumerGroupName 消费组名
     * @param {string} consumerName 消费者名称
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {Array<string>} shardIds Shard列表，可以为空数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public consumerGroupHeartBeat(consumerGroupHeartBeatRequest?: ConsumerGroupHeartBeatRequest): Promise<ConsumerGroupHeartBeatResponse> {
        const options = ParamCreater().consumerGroupHeartBeat(consumerGroupHeartBeatRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建消费组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建消费组
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {ConsumerGroupInfo} consumerGroupInfo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createConsumerGroup(createConsumerGroupRequest?: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse> {
        const options = ParamCreater().createConsumerGroup(createConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除消费组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除消费组
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} consumerGroupName 消费组名称
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteConsumerGroup(deleteConsumerGroupRequest?: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse> {
        const options = ParamCreater().deleteConsumerGroup(deleteConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组列表
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listConsumerGroup(listConsumerGroupRequest?: ListConsumerGroupRequest): Promise<ListConsumerGroupResponse> {
        const options = ParamCreater().listConsumerGroup(listConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询消费组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询消费组详情
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} consumerGroupName 消费组名称
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDetailsConsumerGroup(listDetailsConsumerGroupRequest?: ListDetailsConsumerGroupRequest): Promise<ListDetailsConsumerGroupResponse> {
        const options = ParamCreater().listDetailsConsumerGroup(listDetailsConsumerGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过时间查询cursor
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过时间获取消费游标
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} shardId Shrad ID
     * @param {string} from 起始时间戳，时间单位为纳秒
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCursorByTime(showCursorByTimeRequest?: ShowCursorByTimeRequest): Promise<ShowCursorByTimeResponse> {
        const options = ParamCreater().showCursorByTime(showCursorByTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过cursor查询服务端时间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过消费游标获取时间
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} shardId Shard ID
     * @param {string} cursor 游标值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCursorTime(showCursorTimeRequest?: ShowCursorTimeRequest): Promise<ShowCursorTimeResponse> {
        const options = ParamCreater().showCursorTime(showCursorTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 流消费获取所有的query shards
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 流消费获取Shards
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLogStreamShards(showLogStreamShardsRequest?: ShowLogStreamShardsRequest): Promise<ShowLogStreamShardsResponse> {
        const options = ParamCreater().showLogStreamShards(showLogStreamShardsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新消费组位点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新消费组位点
     * @param {string} groupId 日志组ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID。 缺省值：None 最小长度：36 最大长度：36
     * @param {string} streamId 日志流ID，获取方式请参见：获取项目ID，获取账号ID，日志组ID、日志流ID 缺省值：None 最小长度：36 最大长度：36
     * @param {string} consumerGroupName 消费组名
     * @param {string} consumerName 消费者名
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8
     * @param {Array<ConsumerShardCheckpointInfo>} consumerShardCheckpointInfo 消费位点更新列表，可以为空数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCheckPoint(updateCheckPointRequest?: UpdateCheckPointRequest): Promise<UpdateCheckPointResponse> {
        const options = ParamCreater().updateCheckPoint(updateCheckPointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于创建SQL告警，目前每个帐户最多可以创建共200个关键词告警与SQL告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SQL告警规则
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {CreateSqlAlarmRuleRequestBody} createSqlAlarmRuleRequestBody 创建Sql告警的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlAlarmRule(createSqlAlarmRuleRequest?: CreateSqlAlarmRuleRequest): Promise<CreateSqlAlarmRuleResponse> {
        const options = ParamCreater().createSqlAlarmRule(createSqlAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除SQL告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SQL告警规则
     * @param {string} sqlAlarmRuleId Sql告警规则id
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSqlAlarmRule(deleteSqlAlarmRuleRequest?: DeleteSqlAlarmRuleRequest): Promise<DeleteSqlAlarmRuleResponse> {
        const options = ParamCreater().deleteSqlAlarmRule(deleteSqlAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询SQL告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL告警规则
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSqlAlarmRules(listSqlAlarmRulesRequest?: ListSqlAlarmRulesRequest): Promise<ListSqlAlarmRulesResponse> {
        const options = ParamCreater().listSqlAlarmRules(listSqlAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 改变告警规则状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换告警规则状态
     * @param {ChangeAlarmRuleStatus} [changeAlarmRuleStatus] 改变告警规则状态请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmRuleStatus(updateAlarmRuleStatusRequest?: UpdateAlarmRuleStatusRequest): Promise<UpdateAlarmRuleStatusResponse> {
        const options = ParamCreater().updateAlarmRuleStatus(updateAlarmRuleStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改SQL告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改SQL告警规则
     * @param {string} contentType 该字段填为：application/json;charset&#x3D;UTF-8。
     * @param {UpdateSqlAlarmRuleRequestBody} updateSqlAlarmRuleRequestBody 创建Sql告警的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSqlAlarmRule(updateSqlAlarmRuleRequest?: UpdateSqlAlarmRuleRequest): Promise<UpdateSqlAlarmRuleResponse> {
        const options = ParamCreater().updateSqlAlarmRule(updateSqlAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建日志接入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAccessConfig(createAccessConfigRequest?: CreateAccessConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lts/access-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAccessConfigRequest !== null && createAccessConfigRequest !== undefined) {
                if (createAccessConfigRequest instanceof CreateAccessConfigRequest) {
                    contentType = createAccessConfigRequest.contentType;
                    body = createAccessConfigRequest.body
                } else {
                    contentType = createAccessConfigRequest['Content-Type'];
                    body = createAccessConfigRequest['body'];
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
         * 新建跨账号日志接入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgencyAccess(createAgencyAccessRequest?: CreateAgencyAccessRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/lts/createAgencyAccess",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAgencyAccessRequest !== null && createAgencyAccessRequest !== undefined) {
                if (createAgencyAccessRequest instanceof CreateAgencyAccessRequest) {
                    contentType = createAgencyAccessRequest.contentType;
                    body = createAgencyAccessRequest.body
                } else {
                    contentType = createAgencyAccessRequest['Content-Type'];
                    body = createAgencyAccessRequest['body'];
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
         * 创建仪表盘
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDashBoard(createDashBoardRequest?: CreateDashBoardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dashboard",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createDashBoardRequest !== null && createDashBoardRequest !== undefined) {
                if (createDashBoardRequest instanceof CreateDashBoardRequest) {
                    contentType = createDashBoardRequest.contentType;
                    body = createDashBoardRequest.body
                } else {
                    contentType = createDashBoardRequest['Content-Type'];
                    body = createDashBoardRequest['body'];
                }
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
         * 创建仪表盘分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDashboardGroup(createDashboardGroupRequest?: CreateDashboardGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/dashboard-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createDashboardGroupRequest !== null && createDashboardGroupRequest !== undefined) {
                if (createDashboardGroupRequest instanceof CreateDashboardGroupRequest) {
                    contentType = createDashboardGroupRequest.contentType;
                    body = createDashboardGroupRequest.body
                } else {
                    contentType = createDashboardGroupRequest['Content-Type'];
                    body = createDashboardGroupRequest['body'];
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
         * 创建主机组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createHostGroup(createHostGroupRequest?: CreateHostGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lts/host-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createHostGroupRequest !== null && createHostGroupRequest !== undefined) {
                if (createHostGroupRequest instanceof CreateHostGroupRequest) {
                    contentType = createHostGroupRequest.contentType;
                    body = createHostGroupRequest.body
                } else {
                    contentType = createHostGroupRequest['Content-Type'];
                    body = createHostGroupRequest['body'];
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
         * 该接口用于创建关键词告警，目前每个帐户最多可以创建共200个关键词告警与SQL告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKeywordsAlarmRule(createKeywordsAlarmRuleRequest?: CreateKeywordsAlarmRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/alarms/keywords-alarm-rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createKeywordsAlarmRuleRequest !== null && createKeywordsAlarmRuleRequest !== undefined) {
                if (createKeywordsAlarmRuleRequest instanceof CreateKeywordsAlarmRuleRequest) {
                    contentType = createKeywordsAlarmRuleRequest.contentType;
                    body = createKeywordsAlarmRuleRequest.body
                } else {
                    contentType = createKeywordsAlarmRuleRequest['Content-Type'];
                    body = createKeywordsAlarmRuleRequest['body'];
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
         * 该接口用于将指定的一个或多个日志流的日志转储到OBS服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogDumpObs(createLogDumpObsRequest?: CreateLogDumpObsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/log-dump/obs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createLogDumpObsRequest !== null && createLogDumpObsRequest !== undefined) {
                if (createLogDumpObsRequest instanceof CreateLogDumpObsRequest) {
                    contentType = createLogDumpObsRequest.contentType;
                    body = createLogDumpObsRequest.body
                } else {
                    contentType = createLogDumpObsRequest['Content-Type'];
                    body = createLogDumpObsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建一个日志组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogGroup(createLogGroupRequest?: CreateLogGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createLogGroupRequest !== null && createLogGroupRequest !== undefined) {
                if (createLogGroupRequest instanceof CreateLogGroupRequest) {
                    contentType = createLogGroupRequest.contentType;
                    body = createLogGroupRequest.body
                } else {
                    contentType = createLogGroupRequest['Content-Type'];
                    body = createLogGroupRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建某个指定日志组下的日志流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogStream(createLogStreamRequest?: CreateLogStreamRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/{log_group_id}/streams",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logGroupId;
            
            let contentType;

            if (createLogStreamRequest !== null && createLogStreamRequest !== undefined) {
                if (createLogStreamRequest instanceof CreateLogStreamRequest) {
                    logGroupId = createLogStreamRequest.logGroupId;
                    contentType = createLogStreamRequest.contentType;
                    body = createLogStreamRequest.body
                } else {
                    logGroupId = createLogStreamRequest['log_group_id'];
                    contentType = createLogStreamRequest['Content-Type'];
                    body = createLogStreamRequest['body'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling createLogStream.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_group_id': logGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 向指定流创建索引
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLogStreamIndex(createLogStreamIndexRequest?: CreateLogStreamIndexRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/groups/{group_id}/stream/{stream_id}/index/config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let streamId;
            
            let contentType;

            if (createLogStreamIndexRequest !== null && createLogStreamIndexRequest !== undefined) {
                if (createLogStreamIndexRequest instanceof CreateLogStreamIndexRequest) {
                    groupId = createLogStreamIndexRequest.groupId;
                    streamId = createLogStreamIndexRequest.streamId;
                    contentType = createLogStreamIndexRequest.contentType;
                    body = createLogStreamIndexRequest.body
                } else {
                    groupId = createLogStreamIndexRequest['group_id'];
                    streamId = createLogStreamIndexRequest['stream_id'];
                    contentType = createLogStreamIndexRequest['Content-Type'];
                    body = createLogStreamIndexRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createLogStreamIndex.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling createLogStreamIndex.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId,'stream_id': streamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建通知模板，目前每个帐户最多可以创建共100个通知模板，创建后名称不可修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNotificationTemplate(createNotificationTemplateRequest?: CreateNotificationTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{domain_id}/lts/events/notification/templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let contentType;

            if (createNotificationTemplateRequest !== null && createNotificationTemplateRequest !== undefined) {
                if (createNotificationTemplateRequest instanceof CreateNotificationTemplateRequest) {
                    domainId = createNotificationTemplateRequest.domainId;
                    contentType = createNotificationTemplateRequest.contentType;
                    body = createNotificationTemplateRequest.body
                } else {
                    domainId = createNotificationTemplateRequest['domain_id'];
                    contentType = createNotificationTemplateRequest['Content-Type'];
                    body = createNotificationTemplateRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling createNotificationTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 添加快速查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSearchCriterias(createSearchCriteriasRequest?: CreateSearchCriteriasRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/groups/{group_id}/topics/{topic_id}/search-criterias",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let topicId;
            
            let contentType;

            if (createSearchCriteriasRequest !== null && createSearchCriteriasRequest !== undefined) {
                if (createSearchCriteriasRequest instanceof CreateSearchCriteriasRequest) {
                    groupId = createSearchCriteriasRequest.groupId;
                    topicId = createSearchCriteriasRequest.topicId;
                    contentType = createSearchCriteriasRequest.contentType;
                    body = createSearchCriteriasRequest.body
                } else {
                    groupId = createSearchCriteriasRequest['group_id'];
                    topicId = createSearchCriteriasRequest['topic_id'];
                    contentType = createSearchCriteriasRequest['Content-Type'];
                    body = createSearchCriteriasRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createSearchCriterias.');
            }
            if (topicId === null || topicId === undefined) {
            throw new RequiredError('topicId','Required parameter topicId was null or undefined when calling createSearchCriterias.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId,'topic_id': topicId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口通过结构化模板创建结构化配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStructConfig(createStructConfigRequest?: CreateStructConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lts/struct/template",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createStructConfigRequest !== null && createStructConfigRequest !== undefined) {
                if (createStructConfigRequest instanceof CreateStructConfigRequest) {
                    contentType = createStructConfigRequest.contentType;
                    body = createStructConfigRequest.body
                } else {
                    contentType = createStructConfigRequest['Content-Type'];
                    body = createStructConfigRequest['body'];
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
         * 该接口用于创建指定日志流下的结构化配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createStructTemplate(createStructTemplateRequest?: CreateStructTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/struct/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createStructTemplateRequest !== null && createStructTemplateRequest !== undefined) {
                if (createStructTemplateRequest instanceof CreateStructTemplateRequest) {
                    body = createStructTemplateRequest.body
                } else {
                    body = createStructTemplateRequest['body'];
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
         * 添加标签
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTags(createTagsRequest?: CreateTagsRequest) {
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

            if (createTagsRequest !== null && createTagsRequest !== undefined) {
                if (createTagsRequest instanceof CreateTagsRequest) {
                    resourceType = createTagsRequest.resourceType;
                    resourceId = createTagsRequest.resourceId;
                    contentType = createTagsRequest.contentType;
                    body = createTagsRequest.body
                } else {
                    resourceType = createTagsRequest['resource_type'];
                    resourceId = createTagsRequest['resource_id'];
                    contentType = createTagsRequest['Content-Type'];
                    body = createTagsRequest['body'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling createTags.');
            }
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createTags.');
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
         * 该接口用于创建OBS转储，DIS转储，DMS转储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTransfer(createTransferRequest?: CreateTransferRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/transfers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createTransferRequest !== null && createTransferRequest !== undefined) {
                if (createTransferRequest instanceof CreateTransferRequest) {
                    contentType = createTransferRequest.contentType;
                    body = createTransferRequest.body
                } else {
                    contentType = createTransferRequest['Content-Type'];
                    body = createTransferRequest['body'];
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
         * 创建日志收藏
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createfavorite(createfavoriteRequest?: CreatefavoriteRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/lts/favorite",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createfavoriteRequest !== null && createfavoriteRequest !== undefined) {
                if (createfavoriteRequest instanceof CreatefavoriteRequest) {
                    body = createfavoriteRequest.body
                } else {
                    body = createfavoriteRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除日志接入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAccessConfig(deleteAccessConfigRequest?: DeleteAccessConfigRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/lts/access-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (deleteAccessConfigRequest !== null && deleteAccessConfigRequest !== undefined) {
                if (deleteAccessConfigRequest instanceof DeleteAccessConfigRequest) {
                    contentType = deleteAccessConfigRequest.contentType;
                    body = deleteAccessConfigRequest.body
                } else {
                    contentType = deleteAccessConfigRequest['Content-Type'];
                    body = deleteAccessConfigRequest['body'];
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
         * 该接口用于删除活动告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteActiveAlarms(deleteActiveAlarmsRequest?: DeleteActiveAlarmsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{domain_id}/lts/alarms/sql-alarm/clear",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let contentType;

            if (deleteActiveAlarmsRequest !== null && deleteActiveAlarmsRequest !== undefined) {
                if (deleteActiveAlarmsRequest instanceof DeleteActiveAlarmsRequest) {
                    domainId = deleteActiveAlarmsRequest.domainId;
                    contentType = deleteActiveAlarmsRequest.contentType;
                    body = deleteActiveAlarmsRequest.body
                } else {
                    domainId = deleteActiveAlarmsRequest['domain_id'];
                    contentType = deleteActiveAlarmsRequest['Content-Type'];
                    body = deleteActiveAlarmsRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteActiveAlarms.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除仪表盘
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDashboard(deleteDashboardRequest?: DeleteDashboardRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/dashboard",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;
            
            let isDeleteCharts;
            
            let contentType;

            if (deleteDashboardRequest !== null && deleteDashboardRequest !== undefined) {
                if (deleteDashboardRequest instanceof DeleteDashboardRequest) {
                    id = deleteDashboardRequest.id;
                    isDeleteCharts = deleteDashboardRequest.isDeleteCharts;
                    contentType = deleteDashboardRequest.contentType;
                } else {
                    id = deleteDashboardRequest['id'];
                    isDeleteCharts = deleteDashboardRequest['is_delete_charts'];
                    contentType = deleteDashboardRequest['Content-Type'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteDashboard.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (isDeleteCharts === null || isDeleteCharts === undefined) {
                throw new RequiredError('isDeleteCharts','Required parameter isDeleteCharts was null or undefined when calling deleteDashboard.');
            }
            if (isDeleteCharts !== null && isDeleteCharts !== undefined) {
                localVarQueryParameter['is_delete_charts'] = isDeleteCharts;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除主机组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteHostGroup(deleteHostGroupRequest?: DeleteHostGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/lts/host-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (deleteHostGroupRequest !== null && deleteHostGroupRequest !== undefined) {
                if (deleteHostGroupRequest instanceof DeleteHostGroupRequest) {
                    contentType = deleteHostGroupRequest.contentType;
                    body = deleteHostGroupRequest.body
                } else {
                    contentType = deleteHostGroupRequest['Content-Type'];
                    body = deleteHostGroupRequest['body'];
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
         * 该接口用于删除关键词告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKeywordsAlarmRule(deleteKeywordsAlarmRuleRequest?: DeleteKeywordsAlarmRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/lts/alarms/keywords-alarm-rule/{keywords_alarm_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keywordsAlarmRuleId;
            
            let contentType;

            if (deleteKeywordsAlarmRuleRequest !== null && deleteKeywordsAlarmRuleRequest !== undefined) {
                if (deleteKeywordsAlarmRuleRequest instanceof DeleteKeywordsAlarmRuleRequest) {
                    keywordsAlarmRuleId = deleteKeywordsAlarmRuleRequest.keywordsAlarmRuleId;
                    contentType = deleteKeywordsAlarmRuleRequest.contentType;
                } else {
                    keywordsAlarmRuleId = deleteKeywordsAlarmRuleRequest['keywords_alarm_rule_id'];
                    contentType = deleteKeywordsAlarmRuleRequest['Content-Type'];
                }
            }

        
            if (keywordsAlarmRuleId === null || keywordsAlarmRuleId === undefined) {
            throw new RequiredError('keywordsAlarmRuleId','Required parameter keywordsAlarmRuleId was null or undefined when calling deleteKeywordsAlarmRule.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'keywords_alarm_rule_id': keywordsAlarmRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除指定日志组。当日志组中的日志流配置了日志转储，需要取消日志转储后才可删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogGroup(deleteLogGroupRequest?: DeleteLogGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/groups/{log_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let logGroupId;
            
            let contentType;

            if (deleteLogGroupRequest !== null && deleteLogGroupRequest !== undefined) {
                if (deleteLogGroupRequest instanceof DeleteLogGroupRequest) {
                    logGroupId = deleteLogGroupRequest.logGroupId;
                    contentType = deleteLogGroupRequest.contentType;
                } else {
                    logGroupId = deleteLogGroupRequest['log_group_id'];
                    contentType = deleteLogGroupRequest['Content-Type'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling deleteLogGroup.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'log_group_id': logGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除指定日志组下的指定日志流。当该日志流配置了日志转储，需要取消日志转储后才可删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogStream(deleteLogStreamRequest?: DeleteLogStreamRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/groups/{log_group_id}/streams/{log_stream_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;

            if (deleteLogStreamRequest !== null && deleteLogStreamRequest !== undefined) {
                if (deleteLogStreamRequest instanceof DeleteLogStreamRequest) {
                    logGroupId = deleteLogStreamRequest.logGroupId;
                    logStreamId = deleteLogStreamRequest.logStreamId;
                    contentType = deleteLogStreamRequest.contentType;
                } else {
                    logGroupId = deleteLogStreamRequest['log_group_id'];
                    logStreamId = deleteLogStreamRequest['log_stream_id'];
                    contentType = deleteLogStreamRequest['Content-Type'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling deleteLogStream.');
            }
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling deleteLogStream.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'log_group_id': logGroupId,'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除通知模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteNotificationTemplate(deleteNotificationTemplateRequest?: DeleteNotificationTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/{domain_id}/lts/events/notification/templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let contentType;

            if (deleteNotificationTemplateRequest !== null && deleteNotificationTemplateRequest !== undefined) {
                if (deleteNotificationTemplateRequest instanceof DeleteNotificationTemplateRequest) {
                    domainId = deleteNotificationTemplateRequest.domainId;
                    contentType = deleteNotificationTemplateRequest.contentType;
                    body = deleteNotificationTemplateRequest.body
                } else {
                    domainId = deleteNotificationTemplateRequest['domain_id'];
                    contentType = deleteNotificationTemplateRequest['Content-Type'];
                    body = deleteNotificationTemplateRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling deleteNotificationTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除快速查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSearchCriterias(deleteSearchCriteriasRequest?: DeleteSearchCriteriasRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/groups/{group_id}/topics/{topic_id}/search-criterias",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let topicId;
            
            let contentType;

            if (deleteSearchCriteriasRequest !== null && deleteSearchCriteriasRequest !== undefined) {
                if (deleteSearchCriteriasRequest instanceof DeleteSearchCriteriasRequest) {
                    groupId = deleteSearchCriteriasRequest.groupId;
                    topicId = deleteSearchCriteriasRequest.topicId;
                    contentType = deleteSearchCriteriasRequest.contentType;
                    body = deleteSearchCriteriasRequest.body
                } else {
                    groupId = deleteSearchCriteriasRequest['group_id'];
                    topicId = deleteSearchCriteriasRequest['topic_id'];
                    contentType = deleteSearchCriteriasRequest['Content-Type'];
                    body = deleteSearchCriteriasRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteSearchCriterias.');
            }
            if (topicId === null || topicId === undefined) {
            throw new RequiredError('topicId','Required parameter topicId was null or undefined when calling deleteSearchCriterias.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId,'topic_id': topicId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除指定日志流下的结构化配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteStructTemplate(deleteStructTemplateRequest?: DeleteStructTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/lts/struct/template",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteStructTemplateRequest !== null && deleteStructTemplateRequest !== undefined) {
                if (deleteStructTemplateRequest instanceof DeleteStructTemplateRequest) {
                    body = deleteStructTemplateRequest.body
                } else {
                    body = deleteStructTemplateRequest['body'];
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
         * 该接口用于删除OBS转储，DIS转储，DMS转储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTransfer(deleteTransferRequest?: DeleteTransferRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/transfers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let logTransferId;

            if (deleteTransferRequest !== null && deleteTransferRequest !== undefined) {
                if (deleteTransferRequest instanceof DeleteTransferRequest) {
                    contentType = deleteTransferRequest.contentType;
                    logTransferId = deleteTransferRequest.logTransferId;
                } else {
                    contentType = deleteTransferRequest['Content-Type'];
                    logTransferId = deleteTransferRequest['log_transfer_id'];
                }
            }

        
            if (logTransferId === null || logTransferId === undefined) {
                throw new RequiredError('logTransferId','Required parameter logTransferId was null or undefined when calling deleteTransfer.');
            }
            if (logTransferId !== null && logTransferId !== undefined) {
                localVarQueryParameter['log_transfer_id'] = logTransferId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消收藏
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletefavorite(deletefavoriteRequest?: DeletefavoriteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/lts/favorite/{fav_res_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let favResId;
            
            let contentType;

            if (deletefavoriteRequest !== null && deletefavoriteRequest !== undefined) {
                if (deletefavoriteRequest instanceof DeletefavoriteRequest) {
                    favResId = deletefavoriteRequest.favResId;
                    contentType = deletefavoriteRequest.contentType;
                } else {
                    favResId = deletefavoriteRequest['fav_res_id'];
                    contentType = deletefavoriteRequest['Content-Type'];
                }
            }

        
            if (favResId === null || favResId === undefined) {
            throw new RequiredError('favResId','Required parameter favResId was null or undefined when calling deletefavorite.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'fav_res_id': favResId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于将超额采集日志功能关闭。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableLogCollection(disableLogCollectionRequest?: DisableLogCollectionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/collection/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (disableLogCollectionRequest !== null && disableLogCollectionRequest !== undefined) {
                if (disableLogCollectionRequest instanceof DisableLogCollectionRequest) {
                    contentType = disableLogCollectionRequest.contentType;
                } else {
                    contentType = disableLogCollectionRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于将超额采集日志功能打开。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableLogCollection(enableLogCollectionRequest?: EnableLogCollectionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/collection/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (enableLogCollectionRequest !== null && enableLogCollectionRequest !== undefined) {
                if (enableLogCollectionRequest instanceof EnableLogCollectionRequest) {
                    contentType = enableLogCollectionRequest.contentType;
                } else {
                    contentType = enableLogCollectionRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询日志接入列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessConfig(listAccessConfigRequest?: ListAccessConfigRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lts/access-config-list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (listAccessConfigRequest !== null && listAccessConfigRequest !== undefined) {
                if (listAccessConfigRequest instanceof ListAccessConfigRequest) {
                    contentType = listAccessConfigRequest.contentType;
                    body = listAccessConfigRequest.body
                } else {
                    contentType = listAccessConfigRequest['Content-Type'];
                    body = listAccessConfigRequest['body'];
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
         * 该接口用于查询告警列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listActiveOrHistoryAlarms(listActiveOrHistoryAlarmsRequest?: ListActiveOrHistoryAlarmsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{domain_id}/lts/alarms/sql-alarm/query",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let domainId;
            
            let type;
            
            let contentType;
            
            let marker;
            
            let limit;

            if (listActiveOrHistoryAlarmsRequest !== null && listActiveOrHistoryAlarmsRequest !== undefined) {
                if (listActiveOrHistoryAlarmsRequest instanceof ListActiveOrHistoryAlarmsRequest) {
                    domainId = listActiveOrHistoryAlarmsRequest.domainId;
                    type = listActiveOrHistoryAlarmsRequest.type;
                    contentType = listActiveOrHistoryAlarmsRequest.contentType;
                    body = listActiveOrHistoryAlarmsRequest.body
                    marker = listActiveOrHistoryAlarmsRequest.marker;
                    limit = listActiveOrHistoryAlarmsRequest.limit;
                } else {
                    domainId = listActiveOrHistoryAlarmsRequest['domain_id'];
                    type = listActiveOrHistoryAlarmsRequest['type'];
                    contentType = listActiveOrHistoryAlarmsRequest['Content-Type'];
                    body = listActiveOrHistoryAlarmsRequest['body'];
                    marker = listActiveOrHistoryAlarmsRequest['marker'];
                    limit = listActiveOrHistoryAlarmsRequest['limit'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listActiveOrHistoryAlarms.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listActiveOrHistoryAlarms.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询结构化模板简略列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBreifStructTemplate(listBreifStructTemplateRequest?: ListBreifStructTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/lts/struct/customtemplate/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listBreifStructTemplateRequest !== null && listBreifStructTemplateRequest !== undefined) {
                if (listBreifStructTemplateRequest instanceof ListBreifStructTemplateRequest) {
                    contentType = listBreifStructTemplateRequest.contentType;
                } else {
                    contentType = listBreifStructTemplateRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询日志流图表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCharts(listChartsRequest?: ListChartsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/groups/{log_group_id}/streams/{log_stream_id}/charts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;
            
            let offset;
            
            let limit;

            if (listChartsRequest !== null && listChartsRequest !== undefined) {
                if (listChartsRequest instanceof ListChartsRequest) {
                    logGroupId = listChartsRequest.logGroupId;
                    logStreamId = listChartsRequest.logStreamId;
                    contentType = listChartsRequest.contentType;
                    offset = listChartsRequest.offset;
                    limit = listChartsRequest.limit;
                } else {
                    logGroupId = listChartsRequest['log_group_id'];
                    logStreamId = listChartsRequest['log_stream_id'];
                    contentType = listChartsRequest['Content-Type'];
                    offset = listChartsRequest['offset'];
                    limit = listChartsRequest['limit'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling listCharts.');
            }
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling listCharts.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'log_group_id': logGroupId,'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取快速查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCriterias(listCriteriasRequest?: ListCriteriasRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/groups/{group_id}/topics/{topic_id}/search-criterias",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let topicId;
            
            let contentType;
            
            let searchType;

            if (listCriteriasRequest !== null && listCriteriasRequest !== undefined) {
                if (listCriteriasRequest instanceof ListCriteriasRequest) {
                    groupId = listCriteriasRequest.groupId;
                    topicId = listCriteriasRequest.topicId;
                    contentType = listCriteriasRequest.contentType;
                    searchType = listCriteriasRequest.searchType;
                } else {
                    groupId = listCriteriasRequest['group_id'];
                    topicId = listCriteriasRequest['topic_id'];
                    contentType = listCriteriasRequest['Content-Type'];
                    searchType = listCriteriasRequest['search_type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listCriterias.');
            }
            if (topicId === null || topicId === undefined) {
            throw new RequiredError('topicId','Required parameter topicId was null or undefined when calling listCriterias.');
            }
            if (searchType !== null && searchType !== undefined) {
                localVarQueryParameter['search_type'] = searchType;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId,'topic_id': topicId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户历史sql
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHistorySql(listHistorySqlRequest?: ListHistorySqlRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/history-sql",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;

            if (listHistorySqlRequest !== null && listHistorySqlRequest !== undefined) {
                if (listHistorySqlRequest instanceof ListHistorySqlRequest) {
                    logGroupId = listHistorySqlRequest.logGroupId;
                    logStreamId = listHistorySqlRequest.logStreamId;
                    contentType = listHistorySqlRequest.contentType;
                } else {
                    logGroupId = listHistorySqlRequest['log_group_id'];
                    logStreamId = listHistorySqlRequest['log_stream_id'];
                    contentType = listHistorySqlRequest['Content-Type'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
                throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling listHistorySql.');
            }
            if (logGroupId !== null && logGroupId !== undefined) {
                localVarQueryParameter['log_group_id'] = logGroupId;
            }
            if (logStreamId === null || logStreamId === undefined) {
                throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling listHistorySql.');
            }
            if (logStreamId !== null && logStreamId !== undefined) {
                localVarQueryParameter['log_stream_id'] = logStreamId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询主机列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHost(listHostRequest?: ListHostRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lts/host-list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (listHostRequest !== null && listHostRequest !== undefined) {
                if (listHostRequest instanceof ListHostRequest) {
                    contentType = listHostRequest.contentType;
                    body = listHostRequest.body
                } else {
                    contentType = listHostRequest['Content-Type'];
                    body = listHostRequest['body'];
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
         * 查询主机组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHostGroup(listHostGroupRequest?: ListHostGroupRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/lts/host-group-list",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (listHostGroupRequest !== null && listHostGroupRequest !== undefined) {
                if (listHostGroupRequest instanceof ListHostGroupRequest) {
                    contentType = listHostGroupRequest.contentType;
                    body = listHostGroupRequest.body
                } else {
                    contentType = listHostGroupRequest['Content-Type'];
                    body = listHostGroupRequest['body'];
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
         * 该接口用于查询关键词告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeywordsAlarmRules(listKeywordsAlarmRulesRequest?: ListKeywordsAlarmRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/alarms/keywords-alarm-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listKeywordsAlarmRulesRequest !== null && listKeywordsAlarmRulesRequest !== undefined) {
                if (listKeywordsAlarmRulesRequest instanceof ListKeywordsAlarmRulesRequest) {
                    contentType = listKeywordsAlarmRulesRequest.contentType;
                } else {
                    contentType = listKeywordsAlarmRulesRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询上下文日志 该接口用于查询指定日志前（上文）后（下文）的若干条日志。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogContext(listLogContextRequest?: ListLogContextRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/{log_group_id}/streams/{log_stream_id}/context",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;

            if (listLogContextRequest !== null && listLogContextRequest !== undefined) {
                if (listLogContextRequest instanceof ListLogContextRequest) {
                    logGroupId = listLogContextRequest.logGroupId;
                    logStreamId = listLogContextRequest.logStreamId;
                    contentType = listLogContextRequest.contentType;
                    body = listLogContextRequest.body
                } else {
                    logGroupId = listLogContextRequest['log_group_id'];
                    logStreamId = listLogContextRequest['log_stream_id'];
                    contentType = listLogContextRequest['Content-Type'];
                    body = listLogContextRequest['body'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling listLogContext.');
            }
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling listLogContext.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_group_id': logGroupId,'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询账号下所有日志组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogGroups(listLogGroupsRequest?: ListLogGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listLogGroupsRequest !== null && listLogGroupsRequest !== undefined) {
                if (listLogGroupsRequest instanceof ListLogGroupsRequest) {
                    contentType = listLogGroupsRequest.contentType;
                } else {
                    contentType = listLogGroupsRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询关键词搜索条数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogHistogram(listLogHistogramRequest?: ListLogHistogramRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/keyword-count",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (listLogHistogramRequest !== null && listLogHistogramRequest !== undefined) {
                if (listLogHistogramRequest instanceof ListLogHistogramRequest) {
                    contentType = listLogHistogramRequest.contentType;
                    body = listLogHistogramRequest.body
                } else {
                    contentType = listLogHistogramRequest['Content-Type'];
                    body = listLogHistogramRequest['body'];
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
         * 该接口用于查询指定日志组下的所有日志流信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogStream(listLogStreamRequest?: ListLogStreamRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/groups/{log_group_id}/streams",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let logGroupId;
            
            let contentType;

            if (listLogStreamRequest !== null && listLogStreamRequest !== undefined) {
                if (listLogStreamRequest instanceof ListLogStreamRequest) {
                    logGroupId = listLogStreamRequest.logGroupId;
                    contentType = listLogStreamRequest.contentType;
                } else {
                    logGroupId = listLogStreamRequest['log_group_id'];
                    contentType = listLogStreamRequest['Content-Type'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling listLogStream.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'log_group_id': logGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询LTS日志流信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogStreams(listLogStreamsRequest?: ListLogStreamsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/log-streams",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let logGroupName;
            
            let logStreamName;

            if (listLogStreamsRequest !== null && listLogStreamsRequest !== undefined) {
                if (listLogStreamsRequest instanceof ListLogStreamsRequest) {
                    contentType = listLogStreamsRequest.contentType;
                    logGroupName = listLogStreamsRequest.logGroupName;
                    logStreamName = listLogStreamsRequest.logStreamName;
                } else {
                    contentType = listLogStreamsRequest['Content-Type'];
                    logGroupName = listLogStreamsRequest['log_group_name'];
                    logStreamName = listLogStreamsRequest['log_stream_name'];
                }
            }

        
            if (logGroupName !== null && logGroupName !== undefined) {
                localVarQueryParameter['log_group_name'] = logGroupName;
            }
            if (logStreamName !== null && logStreamName !== undefined) {
                localVarQueryParameter['log_stream_name'] = logStreamName;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定日志流下的日志内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogs(listLogsRequest?: ListLogsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/{log_group_id}/streams/{log_stream_id}/content/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;

            if (listLogsRequest !== null && listLogsRequest !== undefined) {
                if (listLogsRequest instanceof ListLogsRequest) {
                    logGroupId = listLogsRequest.logGroupId;
                    logStreamId = listLogsRequest.logStreamId;
                    contentType = listLogsRequest.contentType;
                    body = listLogsRequest.body
                } else {
                    logGroupId = listLogsRequest['log_group_id'];
                    logStreamId = listLogsRequest['log_stream_id'];
                    contentType = listLogsRequest['Content-Type'];
                    body = listLogsRequest['body'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling listLogs.');
            }
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling listLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_group_id': logGroupId,'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于预览通知模板邮件格式
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationTemplate(listNotificationTemplateRequest?: ListNotificationTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/{domain_id}/lts/events/notification/templates/view",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let contentType;

            if (listNotificationTemplateRequest !== null && listNotificationTemplateRequest !== undefined) {
                if (listNotificationTemplateRequest instanceof ListNotificationTemplateRequest) {
                    domainId = listNotificationTemplateRequest.domainId;
                    contentType = listNotificationTemplateRequest.contentType;
                    body = listNotificationTemplateRequest.body
                } else {
                    domainId = listNotificationTemplateRequest['domain_id'];
                    contentType = listNotificationTemplateRequest['Content-Type'];
                    body = listNotificationTemplateRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listNotificationTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询通知模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationTemplates(listNotificationTemplatesRequest?: ListNotificationTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{domain_id}/lts/events/notification/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let domainId;
            
            let contentType;
            
            let offset;
            
            let limit;

            if (listNotificationTemplatesRequest !== null && listNotificationTemplatesRequest !== undefined) {
                if (listNotificationTemplatesRequest instanceof ListNotificationTemplatesRequest) {
                    domainId = listNotificationTemplatesRequest.domainId;
                    contentType = listNotificationTemplatesRequest.contentType;
                    offset = listNotificationTemplatesRequest.offset;
                    limit = listNotificationTemplatesRequest.limit;
                } else {
                    domainId = listNotificationTemplatesRequest['domain_id'];
                    contentType = listNotificationTemplatesRequest['Content-Type'];
                    offset = listNotificationTemplatesRequest['offset'];
                    limit = listNotificationTemplatesRequest['limit'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling listNotificationTemplates.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询SMN主题
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationTopics(listNotificationTopicsRequest?: ListNotificationTopicsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/notifications/topics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let contentType;

            if (listNotificationTopicsRequest !== null && listNotificationTopicsRequest !== undefined) {
                if (listNotificationTopicsRequest instanceof ListNotificationTopicsRequest) {
                    offset = listNotificationTopicsRequest.offset;
                    limit = listNotificationTopicsRequest.limit;
                    contentType = listNotificationTopicsRequest.contentType;
                } else {
                    offset = listNotificationTopicsRequest['offset'];
                    limit = listNotificationTopicsRequest['limit'];
                    contentType = listNotificationTopicsRequest['Content-Type'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listNotificationTopics.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listNotificationTopics.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询日志组下所有快速查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueryAllSearchCriterias(listQueryAllSearchCriteriasRequest?: ListQueryAllSearchCriteriasRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/lts/groups/{group_id}/search-criterias",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let contentType;

            if (listQueryAllSearchCriteriasRequest !== null && listQueryAllSearchCriteriasRequest !== undefined) {
                if (listQueryAllSearchCriteriasRequest instanceof ListQueryAllSearchCriteriasRequest) {
                    groupId = listQueryAllSearchCriteriasRequest.groupId;
                    contentType = listQueryAllSearchCriteriasRequest.contentType;
                } else {
                    groupId = listQueryAllSearchCriteriasRequest['group_id'];
                    contentType = listQueryAllSearchCriteriasRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listQueryAllSearchCriterias.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定日志流下的结构化日志内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQueryStructuredLogs(listQueryStructuredLogsRequest?: ListQueryStructuredLogsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/{log_group_id}/streams/{log_stream_id}/struct-content/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;

            if (listQueryStructuredLogsRequest !== null && listQueryStructuredLogsRequest !== undefined) {
                if (listQueryStructuredLogsRequest instanceof ListQueryStructuredLogsRequest) {
                    logGroupId = listQueryStructuredLogsRequest.logGroupId;
                    logStreamId = listQueryStructuredLogsRequest.logStreamId;
                    contentType = listQueryStructuredLogsRequest.contentType;
                    body = listQueryStructuredLogsRequest.body
                } else {
                    logGroupId = listQueryStructuredLogsRequest['log_group_id'];
                    logStreamId = listQueryStructuredLogsRequest['log_stream_id'];
                    contentType = listQueryStructuredLogsRequest['Content-Type'];
                    body = listQueryStructuredLogsRequest['body'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling listQueryStructuredLogs.');
            }
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling listQueryStructuredLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_group_id': logGroupId,'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询结构化模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStructTemplate(listStructTemplateRequest?: ListStructTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/lts/struct/customtemplate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let id;

            if (listStructTemplateRequest !== null && listStructTemplateRequest !== undefined) {
                if (listStructTemplateRequest instanceof ListStructTemplateRequest) {
                    contentType = listStructTemplateRequest.contentType;
                    id = listStructTemplateRequest.id;
                } else {
                    contentType = listStructTemplateRequest['Content-Type'];
                    id = listStructTemplateRequest['id'];
                }
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
         * 该接口用于查询指定日志流下的结构化日志内容（新版）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStructuredLogsWithTimeRange(listStructuredLogsWithTimeRangeRequest?: ListStructuredLogsWithTimeRangeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/streams/{log_stream_id}/struct-content/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logStreamId;
            
            let contentType;

            if (listStructuredLogsWithTimeRangeRequest !== null && listStructuredLogsWithTimeRangeRequest !== undefined) {
                if (listStructuredLogsWithTimeRangeRequest instanceof ListStructuredLogsWithTimeRangeRequest) {
                    logStreamId = listStructuredLogsWithTimeRangeRequest.logStreamId;
                    contentType = listStructuredLogsWithTimeRangeRequest.contentType;
                    body = listStructuredLogsWithTimeRangeRequest.body
                } else {
                    logStreamId = listStructuredLogsWithTimeRangeRequest['log_stream_id'];
                    contentType = listStructuredLogsWithTimeRangeRequest['Content-Type'];
                    body = listStructuredLogsWithTimeRangeRequest['body'];
                }
            }

        
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling listStructuredLogsWithTimeRange.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 按时间段统计查询资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTimeLineTrafficStatistics(listTimeLineTrafficStatisticsRequest?: ListTimeLineTrafficStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/timeline-traffic-statistics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let contentType;
            
            let timezone;

            if (listTimeLineTrafficStatisticsRequest !== null && listTimeLineTrafficStatisticsRequest !== undefined) {
                if (listTimeLineTrafficStatisticsRequest instanceof ListTimeLineTrafficStatisticsRequest) {
                    contentType = listTimeLineTrafficStatisticsRequest.contentType;
                    timezone = listTimeLineTrafficStatisticsRequest.timezone;
                    body = listTimeLineTrafficStatisticsRequest.body
                } else {
                    contentType = listTimeLineTrafficStatisticsRequest['Content-Type'];
                    timezone = listTimeLineTrafficStatisticsRequest['timezone'];
                    body = listTimeLineTrafficStatisticsRequest['body'];
                }
            }

        
            if (timezone === null || timezone === undefined) {
                throw new RequiredError('timezone','Required parameter timezone was null or undefined when calling listTimeLineTrafficStatistics.');
            }
            if (timezone !== null && timezone !== undefined) {
                localVarQueryParameter['timezone'] = timezone;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 统计top n的日志组或日志流流量
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTopnTrafficStatistics(listTopnTrafficStatisticsRequest?: ListTopnTrafficStatisticsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/topn-traffic-statistics",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (listTopnTrafficStatisticsRequest !== null && listTopnTrafficStatisticsRequest !== undefined) {
                if (listTopnTrafficStatisticsRequest instanceof ListTopnTrafficStatisticsRequest) {
                    contentType = listTopnTrafficStatisticsRequest.contentType;
                    body = listTopnTrafficStatisticsRequest.body
                } else {
                    contentType = listTopnTrafficStatisticsRequest['Content-Type'];
                    body = listTopnTrafficStatisticsRequest['body'];
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
         * 该接口用于查询OBS转储，DIS转储，DMS转储配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTransfers(listTransfersRequest?: ListTransfersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/transfers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let logTransferType;
            
            let logGroupName;
            
            let logStreamName;

            if (listTransfersRequest !== null && listTransfersRequest !== undefined) {
                if (listTransfersRequest instanceof ListTransfersRequest) {
                    contentType = listTransfersRequest.contentType;
                    logTransferType = listTransfersRequest.logTransferType;
                    logGroupName = listTransfersRequest.logGroupName;
                    logStreamName = listTransfersRequest.logStreamName;
                } else {
                    contentType = listTransfersRequest['Content-Type'];
                    logTransferType = listTransfersRequest['log_transfer_type'];
                    logGroupName = listTransfersRequest['log_group_name'];
                    logStreamName = listTransfersRequest['log_stream_name'];
                }
            }

        
            if (logTransferType !== null && logTransferType !== undefined) {
                localVarQueryParameter['log_transfer_type'] = logTransferType;
            }
            if (logGroupName !== null && logGroupName !== undefined) {
                localVarQueryParameter['log_group_name'] = logGroupName;
            }
            if (logStreamName !== null && logStreamName !== undefined) {
                localVarQueryParameter['log_stream_name'] = logStreamName;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于注册DMS kafka实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerDmsKafkaInstance(registerDmsKafkaInstanceRequest?: RegisterDmsKafkaInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/dms/kafka-instance",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (registerDmsKafkaInstanceRequest !== null && registerDmsKafkaInstanceRequest !== undefined) {
                if (registerDmsKafkaInstanceRequest instanceof RegisterDmsKafkaInstanceRequest) {
                    contentType = registerDmsKafkaInstanceRequest.contentType;
                    body = registerDmsKafkaInstanceRequest.body
                } else {
                    contentType = registerDmsKafkaInstanceRequest['Content-Type'];
                    body = registerDmsKafkaInstanceRequest['body'];
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
         * 只能由管理员或者委托管理员调用    获取日志汇聚开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAdminConfig(showAdminConfigRequest?: ShowAdminConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/lts/log-converge-config/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (showAdminConfigRequest !== null && showAdminConfigRequest !== undefined) {
                if (showAdminConfigRequest instanceof ShowAdminConfigRequest) {
                    contentType = showAdminConfigRequest.contentType;
                } else {
                    contentType = showAdminConfigRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 只能由组织管理员或者委托管理员调用    获取组织成员汇聚配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogConvergeConfig(showLogConvergeConfigRequest?: ShowLogConvergeConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/lts/log-converge-config/{member_account_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let memberAccountId;
            
            let contentType;

            if (showLogConvergeConfigRequest !== null && showLogConvergeConfigRequest !== undefined) {
                if (showLogConvergeConfigRequest instanceof ShowLogConvergeConfigRequest) {
                    memberAccountId = showLogConvergeConfigRequest.memberAccountId;
                    contentType = showLogConvergeConfigRequest.contentType;
                } else {
                    memberAccountId = showLogConvergeConfigRequest['member_account_id'];
                    contentType = showLogConvergeConfigRequest['Content-Type'];
                }
            }

        
            if (memberAccountId === null || memberAccountId === undefined) {
            throw new RequiredError('memberAccountId','Required parameter memberAccountId was null or undefined when calling showLogConvergeConfig.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'member_account_id': memberAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 只能由管理员或者委托管理员调用，获取组织成员日志组日志流
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMemberGroupAndStream(showMemberGroupAndStreamRequest?: ShowMemberGroupAndStreamRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/lts/{member_account_id}/all-streams",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let memberAccountId;
            
            let contentType;

            if (showMemberGroupAndStreamRequest !== null && showMemberGroupAndStreamRequest !== undefined) {
                if (showMemberGroupAndStreamRequest instanceof ShowMemberGroupAndStreamRequest) {
                    memberAccountId = showMemberGroupAndStreamRequest.memberAccountId;
                    contentType = showMemberGroupAndStreamRequest.contentType;
                } else {
                    memberAccountId = showMemberGroupAndStreamRequest['member_account_id'];
                    contentType = showMemberGroupAndStreamRequest['Content-Type'];
                }
            }

        
            if (memberAccountId === null || memberAccountId === undefined) {
            throw new RequiredError('memberAccountId','Required parameter memberAccountId was null or undefined when calling showMemberGroupAndStream.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'member_account_id': memberAccountId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询单个通知模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNotificationTemplate(showNotificationTemplateRequest?: ShowNotificationTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{domain_id}/lts/events/notification/template/{template_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let domainId;
            
            let templateName;
            
            let contentType;

            if (showNotificationTemplateRequest !== null && showNotificationTemplateRequest !== undefined) {
                if (showNotificationTemplateRequest instanceof ShowNotificationTemplateRequest) {
                    domainId = showNotificationTemplateRequest.domainId;
                    templateName = showNotificationTemplateRequest.templateName;
                    contentType = showNotificationTemplateRequest.contentType;
                } else {
                    domainId = showNotificationTemplateRequest['domain_id'];
                    templateName = showNotificationTemplateRequest['template_name'];
                    contentType = showNotificationTemplateRequest['Content-Type'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling showNotificationTemplate.');
            }
            if (templateName === null || templateName === undefined) {
            throw new RequiredError('templateName','Required parameter templateName was null or undefined when calling showNotificationTemplate.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'domain_id': domainId,'template_name': templateName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定日志流下的结构化配置内容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStructTemplate(showStructTemplateRequest?: ShowStructTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/struct/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let logGroupId;
            
            let logStreamId;

            if (showStructTemplateRequest !== null && showStructTemplateRequest !== undefined) {
                if (showStructTemplateRequest instanceof ShowStructTemplateRequest) {
                    logGroupId = showStructTemplateRequest.logGroupId;
                    logStreamId = showStructTemplateRequest.logStreamId;
                } else {
                    logGroupId = showStructTemplateRequest['logGroupId'];
                    logStreamId = showStructTemplateRequest['logStreamId'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
                throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling showStructTemplate.');
            }
            if (logGroupId !== null && logGroupId !== undefined) {
                localVarQueryParameter['logGroupId'] = logGroupId;
            }
            if (logStreamId === null || logStreamId === undefined) {
                throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling showStructTemplate.');
            }
            if (logStreamId !== null && logStreamId !== undefined) {
                localVarQueryParameter['logStreamId'] = logStreamId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改日志接入
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAccessConfig(updateAccessConfigRequest?: UpdateAccessConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/lts/access-config",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateAccessConfigRequest !== null && updateAccessConfigRequest !== undefined) {
                if (updateAccessConfigRequest instanceof UpdateAccessConfigRequest) {
                    contentType = updateAccessConfigRequest.contentType;
                    body = updateAccessConfigRequest.body
                } else {
                    contentType = updateAccessConfigRequest['Content-Type'];
                    body = updateAccessConfigRequest['body'];
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
         * 修改主机组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateHostGroup(updateHostGroupRequest?: UpdateHostGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/lts/host-group",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateHostGroupRequest !== null && updateHostGroupRequest !== undefined) {
                if (updateHostGroupRequest instanceof UpdateHostGroupRequest) {
                    contentType = updateHostGroupRequest.contentType;
                    body = updateHostGroupRequest.body
                } else {
                    contentType = updateHostGroupRequest['Content-Type'];
                    body = updateHostGroupRequest['body'];
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
         * 该接口用于修改关键词告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeywordsAlarmRule(updateKeywordsAlarmRuleRequest?: UpdateKeywordsAlarmRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/lts/alarms/keywords-alarm-rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateKeywordsAlarmRuleRequest !== null && updateKeywordsAlarmRuleRequest !== undefined) {
                if (updateKeywordsAlarmRuleRequest instanceof UpdateKeywordsAlarmRuleRequest) {
                    contentType = updateKeywordsAlarmRuleRequest.contentType;
                    body = updateKeywordsAlarmRuleRequest.body
                } else {
                    contentType = updateKeywordsAlarmRuleRequest['Content-Type'];
                    body = updateKeywordsAlarmRuleRequest['body'];
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
         * 只能由管理员或者委托管理员 ,更新汇聚配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogConvergeConfig(updateLogConvergeConfigRequest?: UpdateLogConvergeConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/lts/log-converge-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateLogConvergeConfigRequest !== null && updateLogConvergeConfigRequest !== undefined) {
                if (updateLogConvergeConfigRequest instanceof UpdateLogConvergeConfigRequest) {
                    contentType = updateLogConvergeConfigRequest.contentType;
                    body = updateLogConvergeConfigRequest.body
                } else {
                    contentType = updateLogConvergeConfigRequest['Content-Type'];
                    body = updateLogConvergeConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改指定日志组下的日志存储时长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogGroup(updateLogGroupRequest?: UpdateLogGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/groups/{log_group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logGroupId;
            
            let contentType;

            if (updateLogGroupRequest !== null && updateLogGroupRequest !== undefined) {
                if (updateLogGroupRequest instanceof UpdateLogGroupRequest) {
                    logGroupId = updateLogGroupRequest.logGroupId;
                    contentType = updateLogGroupRequest.contentType;
                    body = updateLogGroupRequest.body
                } else {
                    logGroupId = updateLogGroupRequest['log_group_id'];
                    contentType = updateLogGroupRequest['Content-Type'];
                    body = updateLogGroupRequest['body'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling updateLogGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_group_id': logGroupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改指定日志流下的日志存储时长。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLogStream(updateLogStreamRequest?: UpdateLogStreamRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/groups/{log_group_id}/streams-ttl/{log_stream_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let logGroupId;
            
            let logStreamId;
            
            let contentType;

            if (updateLogStreamRequest !== null && updateLogStreamRequest !== undefined) {
                if (updateLogStreamRequest instanceof UpdateLogStreamRequest) {
                    logGroupId = updateLogStreamRequest.logGroupId;
                    logStreamId = updateLogStreamRequest.logStreamId;
                    contentType = updateLogStreamRequest.contentType;
                    body = updateLogStreamRequest.body
                } else {
                    logGroupId = updateLogStreamRequest['log_group_id'];
                    logStreamId = updateLogStreamRequest['log_stream_id'];
                    contentType = updateLogStreamRequest['Content-Type'];
                    body = updateLogStreamRequest['body'];
                }
            }

        
            if (logGroupId === null || logGroupId === undefined) {
            throw new RequiredError('logGroupId','Required parameter logGroupId was null or undefined when calling updateLogStream.');
            }
            if (logStreamId === null || logStreamId === undefined) {
            throw new RequiredError('logStreamId','Required parameter logStreamId was null or undefined when calling updateLogStream.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'log_group_id': logGroupId,'log_stream_id': logStreamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改通知模板,根据名称进行修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNotificationTemplate(updateNotificationTemplateRequest?: UpdateNotificationTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/{domain_id}/lts/events/notification/templates",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let domainId;
            
            let contentType;

            if (updateNotificationTemplateRequest !== null && updateNotificationTemplateRequest !== undefined) {
                if (updateNotificationTemplateRequest instanceof UpdateNotificationTemplateRequest) {
                    domainId = updateNotificationTemplateRequest.domainId;
                    contentType = updateNotificationTemplateRequest.contentType;
                    body = updateNotificationTemplateRequest.body
                } else {
                    domainId = updateNotificationTemplateRequest['domain_id'];
                    contentType = updateNotificationTemplateRequest['Content-Type'];
                    body = updateNotificationTemplateRequest['body'];
                }
            }

        
            if (domainId === null || domainId === undefined) {
            throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling updateNotificationTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'domain_id': domainId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口通过结构化模板修改结构化配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStructConfig(updateStructConfigRequest?: UpdateStructConfigRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/lts/struct/template",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateStructConfigRequest !== null && updateStructConfigRequest !== undefined) {
                if (updateStructConfigRequest instanceof UpdateStructConfigRequest) {
                    contentType = updateStructConfigRequest.contentType;
                    body = updateStructConfigRequest.body
                } else {
                    contentType = updateStructConfigRequest['Content-Type'];
                    body = updateStructConfigRequest['body'];
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
         * 该接口用于修改指定日志流下的结构化配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateStructTemplate(updateStructTemplateRequest?: UpdateStructTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/lts/struct/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateStructTemplateRequest !== null && updateStructTemplateRequest !== undefined) {
                if (updateStructTemplateRequest instanceof UpdateStructTemplateRequest) {
                    body = updateStructTemplateRequest.body
                } else {
                    body = updateStructTemplateRequest['body'];
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
         * 只能由管理员或者委托管理员调用     修改日志汇聚开关
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSwitch(updateSwitchRequest?: UpdateSwitchRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/lts/log-converge-config/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let logConvergeSwitch;
            
            let contentType;

            if (updateSwitchRequest !== null && updateSwitchRequest !== undefined) {
                if (updateSwitchRequest instanceof UpdateSwitchRequest) {
                    logConvergeSwitch = updateSwitchRequest.logConvergeSwitch;
                    contentType = updateSwitchRequest.contentType;
                } else {
                    logConvergeSwitch = updateSwitchRequest['log_converge_switch'];
                    contentType = updateSwitchRequest['Content-Type'];
                }
            }

        
            if (logConvergeSwitch === null || logConvergeSwitch === undefined) {
                throw new RequiredError('logConvergeSwitch','Required parameter logConvergeSwitch was null or undefined when calling updateSwitch.');
            }
            if (logConvergeSwitch !== null && logConvergeSwitch !== undefined) {
                localVarQueryParameter['log_converge_switch'] = logConvergeSwitch;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于更新OBS转储，DIS转储，DMS转储。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTransfer(updateTransferRequest?: UpdateTransferRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/transfers",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateTransferRequest !== null && updateTransferRequest !== undefined) {
                if (updateTransferRequest instanceof UpdateTransferRequest) {
                    contentType = updateTransferRequest.contentType;
                    body = updateTransferRequest.body
                } else {
                    contentType = updateTransferRequest['Content-Type'];
                    body = updateTransferRequest['body'];
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
         * 该接口用于创建aom日志接入lts规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAomMappingRules(createAomMappingRulesRequest?: CreateAomMappingRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/aom-mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let isBatch;

            if (createAomMappingRulesRequest !== null && createAomMappingRulesRequest !== undefined) {
                if (createAomMappingRulesRequest instanceof CreateAomMappingRulesRequest) {
                    isBatch = createAomMappingRulesRequest.isBatch;
                    body = createAomMappingRulesRequest.body
                } else {
                    isBatch = createAomMappingRulesRequest['isBatch'];
                    body = createAomMappingRulesRequest['body'];
                }
            }

        
            if (isBatch === null || isBatch === undefined) {
                throw new RequiredError('isBatch','Required parameter isBatch was null or undefined when calling createAomMappingRules.');
            }
            if (isBatch !== null && isBatch !== undefined) {
                localVarQueryParameter['isBatch'] = isBatch;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除lts接入规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAomMappingRules(deleteAomMappingRulesRequest?: DeleteAomMappingRulesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/lts/aom-mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;

            if (deleteAomMappingRulesRequest !== null && deleteAomMappingRulesRequest !== undefined) {
                if (deleteAomMappingRulesRequest instanceof DeleteAomMappingRulesRequest) {
                    id = deleteAomMappingRulesRequest.id;
                } else {
                    id = deleteAomMappingRulesRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteAomMappingRules.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询单个aom日志接入lts
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAomMappingRule(showAomMappingRuleRequest?: ShowAomMappingRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/aom-mapping/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleId;

            if (showAomMappingRuleRequest !== null && showAomMappingRuleRequest !== undefined) {
                if (showAomMappingRuleRequest instanceof ShowAomMappingRuleRequest) {
                    ruleId = showAomMappingRuleRequest.ruleId;
                } else {
                    ruleId = showAomMappingRuleRequest['rule_id'];
                }
            }

        
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showAomMappingRule.');
            }

            options.pathParams = { 'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询aom日志所有接入lts规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAomMappingRules() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/aom-mapping",
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
         * 该接口用于修改接入规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAomMappingRules(updateAomMappingRulesRequest?: UpdateAomMappingRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/lts/aom-mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAomMappingRulesRequest !== null && updateAomMappingRulesRequest !== undefined) {
                if (updateAomMappingRulesRequest instanceof UpdateAomMappingRulesRequest) {
                    body = updateAomMappingRulesRequest.body
                } else {
                    body = updateAomMappingRulesRequest['body'];
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
         * 消费者发送心跳到服务端
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        consumerGroupHeartBeat(consumerGroupHeartBeatRequest?: ConsumerGroupHeartBeatRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/consumer-groups/{consumer_group_name}/heartbeat",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let groupId;
            
            let streamId;
            
            let consumerGroupName;
            
            let consumerName;
            
            let contentType;

            if (consumerGroupHeartBeatRequest !== null && consumerGroupHeartBeatRequest !== undefined) {
                if (consumerGroupHeartBeatRequest instanceof ConsumerGroupHeartBeatRequest) {
                    groupId = consumerGroupHeartBeatRequest.groupId;
                    streamId = consumerGroupHeartBeatRequest.streamId;
                    consumerGroupName = consumerGroupHeartBeatRequest.consumerGroupName;
                    consumerName = consumerGroupHeartBeatRequest.consumerName;
                    contentType = consumerGroupHeartBeatRequest.contentType;
                    body = consumerGroupHeartBeatRequest.body
                } else {
                    groupId = consumerGroupHeartBeatRequest['group_id'];
                    streamId = consumerGroupHeartBeatRequest['stream_id'];
                    consumerGroupName = consumerGroupHeartBeatRequest['consumer_group_name'];
                    consumerName = consumerGroupHeartBeatRequest['consumer_name'];
                    contentType = consumerGroupHeartBeatRequest['Content-Type'];
                    body = consumerGroupHeartBeatRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling consumerGroupHeartBeat.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling consumerGroupHeartBeat.');
            }
            if (consumerGroupName === null || consumerGroupName === undefined) {
            throw new RequiredError('consumerGroupName','Required parameter consumerGroupName was null or undefined when calling consumerGroupHeartBeat.');
            }
            if (consumerName === null || consumerName === undefined) {
                throw new RequiredError('consumerName','Required parameter consumerName was null or undefined when calling consumerGroupHeartBeat.');
            }
            if (consumerName !== null && consumerName !== undefined) {
                localVarQueryParameter['consumer_name'] = consumerName;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId,'stream_id': streamId,'consumer_group_name': consumerGroupName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建消费组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createConsumerGroup(createConsumerGroupRequest?: CreateConsumerGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/consumer-groups",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;
            
            let streamId;
            
            let contentType;

            if (createConsumerGroupRequest !== null && createConsumerGroupRequest !== undefined) {
                if (createConsumerGroupRequest instanceof CreateConsumerGroupRequest) {
                    groupId = createConsumerGroupRequest.groupId;
                    streamId = createConsumerGroupRequest.streamId;
                    contentType = createConsumerGroupRequest.contentType;
                    body = createConsumerGroupRequest.body
                } else {
                    groupId = createConsumerGroupRequest['group_id'];
                    streamId = createConsumerGroupRequest['stream_id'];
                    contentType = createConsumerGroupRequest['Content-Type'];
                    body = createConsumerGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling createConsumerGroup.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling createConsumerGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId,'stream_id': streamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除消费组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteConsumerGroup(deleteConsumerGroupRequest?: DeleteConsumerGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/consumer-groups/{consumer_group_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let streamId;
            
            let consumerGroupName;
            
            let contentType;

            if (deleteConsumerGroupRequest !== null && deleteConsumerGroupRequest !== undefined) {
                if (deleteConsumerGroupRequest instanceof DeleteConsumerGroupRequest) {
                    groupId = deleteConsumerGroupRequest.groupId;
                    streamId = deleteConsumerGroupRequest.streamId;
                    consumerGroupName = deleteConsumerGroupRequest.consumerGroupName;
                    contentType = deleteConsumerGroupRequest.contentType;
                } else {
                    groupId = deleteConsumerGroupRequest['group_id'];
                    streamId = deleteConsumerGroupRequest['stream_id'];
                    consumerGroupName = deleteConsumerGroupRequest['consumer_group_name'];
                    contentType = deleteConsumerGroupRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteConsumerGroup.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling deleteConsumerGroup.');
            }
            if (consumerGroupName === null || consumerGroupName === undefined) {
            throw new RequiredError('consumerGroupName','Required parameter consumerGroupName was null or undefined when calling deleteConsumerGroup.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId,'stream_id': streamId,'consumer_group_name': consumerGroupName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listConsumerGroup(listConsumerGroupRequest?: ListConsumerGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/consumer-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let streamId;
            
            let contentType;

            if (listConsumerGroupRequest !== null && listConsumerGroupRequest !== undefined) {
                if (listConsumerGroupRequest instanceof ListConsumerGroupRequest) {
                    groupId = listConsumerGroupRequest.groupId;
                    streamId = listConsumerGroupRequest.streamId;
                    contentType = listConsumerGroupRequest.contentType;
                } else {
                    groupId = listConsumerGroupRequest['group_id'];
                    streamId = listConsumerGroupRequest['stream_id'];
                    contentType = listConsumerGroupRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listConsumerGroup.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling listConsumerGroup.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId,'stream_id': streamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询消费组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDetailsConsumerGroup(listDetailsConsumerGroupRequest?: ListDetailsConsumerGroupRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/consumer-groups/{consumer_group_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let streamId;
            
            let consumerGroupName;
            
            let contentType;

            if (listDetailsConsumerGroupRequest !== null && listDetailsConsumerGroupRequest !== undefined) {
                if (listDetailsConsumerGroupRequest instanceof ListDetailsConsumerGroupRequest) {
                    groupId = listDetailsConsumerGroupRequest.groupId;
                    streamId = listDetailsConsumerGroupRequest.streamId;
                    consumerGroupName = listDetailsConsumerGroupRequest.consumerGroupName;
                    contentType = listDetailsConsumerGroupRequest.contentType;
                } else {
                    groupId = listDetailsConsumerGroupRequest['group_id'];
                    streamId = listDetailsConsumerGroupRequest['stream_id'];
                    consumerGroupName = listDetailsConsumerGroupRequest['consumer_group_name'];
                    contentType = listDetailsConsumerGroupRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listDetailsConsumerGroup.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling listDetailsConsumerGroup.');
            }
            if (consumerGroupName === null || consumerGroupName === undefined) {
            throw new RequiredError('consumerGroupName','Required parameter consumerGroupName was null or undefined when calling listDetailsConsumerGroup.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId,'stream_id': streamId,'consumer_group_name': consumerGroupName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过时间查询cursor
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCursorByTime(showCursorByTimeRequest?: ShowCursorByTimeRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/shards/{shard_id}/cursor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let streamId;
            
            let shardId;
            
            let from;
            
            let contentType;

            if (showCursorByTimeRequest !== null && showCursorByTimeRequest !== undefined) {
                if (showCursorByTimeRequest instanceof ShowCursorByTimeRequest) {
                    groupId = showCursorByTimeRequest.groupId;
                    streamId = showCursorByTimeRequest.streamId;
                    shardId = showCursorByTimeRequest.shardId;
                    from = showCursorByTimeRequest.from;
                    contentType = showCursorByTimeRequest.contentType;
                } else {
                    groupId = showCursorByTimeRequest['group_id'];
                    streamId = showCursorByTimeRequest['stream_id'];
                    shardId = showCursorByTimeRequest['shard_id'];
                    from = showCursorByTimeRequest['from'];
                    contentType = showCursorByTimeRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showCursorByTime.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling showCursorByTime.');
            }
            if (shardId === null || shardId === undefined) {
            throw new RequiredError('shardId','Required parameter shardId was null or undefined when calling showCursorByTime.');
            }
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling showCursorByTime.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId,'stream_id': streamId,'shard_id': shardId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过cursor查询服务端时间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCursorTime(showCursorTimeRequest?: ShowCursorTimeRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/shards/{shard_id}/time",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let streamId;
            
            let shardId;
            
            let cursor;

            if (showCursorTimeRequest !== null && showCursorTimeRequest !== undefined) {
                if (showCursorTimeRequest instanceof ShowCursorTimeRequest) {
                    groupId = showCursorTimeRequest.groupId;
                    streamId = showCursorTimeRequest.streamId;
                    shardId = showCursorTimeRequest.shardId;
                    cursor = showCursorTimeRequest.cursor;
                } else {
                    groupId = showCursorTimeRequest['group_id'];
                    streamId = showCursorTimeRequest['stream_id'];
                    shardId = showCursorTimeRequest['shard_id'];
                    cursor = showCursorTimeRequest['cursor'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showCursorTime.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling showCursorTime.');
            }
            if (shardId === null || shardId === undefined) {
            throw new RequiredError('shardId','Required parameter shardId was null or undefined when calling showCursorTime.');
            }
            if (cursor === null || cursor === undefined) {
                throw new RequiredError('cursor','Required parameter cursor was null or undefined when calling showCursorTime.');
            }
            if (cursor !== null && cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId,'stream_id': streamId,'shard_id': shardId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 流消费获取所有的query shards
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLogStreamShards(showLogStreamShardsRequest?: ShowLogStreamShardsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/shards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;
            
            let streamId;
            
            let contentType;

            if (showLogStreamShardsRequest !== null && showLogStreamShardsRequest !== undefined) {
                if (showLogStreamShardsRequest instanceof ShowLogStreamShardsRequest) {
                    groupId = showLogStreamShardsRequest.groupId;
                    streamId = showLogStreamShardsRequest.streamId;
                    contentType = showLogStreamShardsRequest.contentType;
                } else {
                    groupId = showLogStreamShardsRequest['group_id'];
                    streamId = showLogStreamShardsRequest['stream_id'];
                    contentType = showLogStreamShardsRequest['Content-Type'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showLogStreamShards.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling showLogStreamShards.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'group_id': groupId,'stream_id': streamId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新消费组位点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCheckPoint(updateCheckPointRequest?: UpdateCheckPointRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/groups/{group_id}/streams/{stream_id}/consumer-groups/{consumer_group_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let groupId;
            
            let streamId;
            
            let consumerGroupName;
            
            let consumerName;
            
            let contentType;

            if (updateCheckPointRequest !== null && updateCheckPointRequest !== undefined) {
                if (updateCheckPointRequest instanceof UpdateCheckPointRequest) {
                    groupId = updateCheckPointRequest.groupId;
                    streamId = updateCheckPointRequest.streamId;
                    consumerGroupName = updateCheckPointRequest.consumerGroupName;
                    consumerName = updateCheckPointRequest.consumerName;
                    contentType = updateCheckPointRequest.contentType;
                    body = updateCheckPointRequest.body
                } else {
                    groupId = updateCheckPointRequest['group_id'];
                    streamId = updateCheckPointRequest['stream_id'];
                    consumerGroupName = updateCheckPointRequest['consumer_group_name'];
                    consumerName = updateCheckPointRequest['consumer_name'];
                    contentType = updateCheckPointRequest['Content-Type'];
                    body = updateCheckPointRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateCheckPoint.');
            }
            if (streamId === null || streamId === undefined) {
            throw new RequiredError('streamId','Required parameter streamId was null or undefined when calling updateCheckPoint.');
            }
            if (consumerGroupName === null || consumerGroupName === undefined) {
            throw new RequiredError('consumerGroupName','Required parameter consumerGroupName was null or undefined when calling updateCheckPoint.');
            }
            if (consumerName === null || consumerName === undefined) {
                throw new RequiredError('consumerName','Required parameter consumerName was null or undefined when calling updateCheckPoint.');
            }
            if (consumerName !== null && consumerName !== undefined) {
                localVarQueryParameter['consumer_name'] = consumerName;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId,'stream_id': streamId,'consumer_group_name': consumerGroupName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于创建SQL告警，目前每个帐户最多可以创建共200个关键词告警与SQL告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlAlarmRule(createSqlAlarmRuleRequest?: CreateSqlAlarmRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/lts/alarms/sql-alarm-rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createSqlAlarmRuleRequest !== null && createSqlAlarmRuleRequest !== undefined) {
                if (createSqlAlarmRuleRequest instanceof CreateSqlAlarmRuleRequest) {
                    contentType = createSqlAlarmRuleRequest.contentType;
                    body = createSqlAlarmRuleRequest.body
                } else {
                    contentType = createSqlAlarmRuleRequest['Content-Type'];
                    body = createSqlAlarmRuleRequest['body'];
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
         * 该接口用于删除SQL告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSqlAlarmRule(deleteSqlAlarmRuleRequest?: DeleteSqlAlarmRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/lts/alarms/sql-alarm-rule/{sql_alarm_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let sqlAlarmRuleId;
            
            let contentType;

            if (deleteSqlAlarmRuleRequest !== null && deleteSqlAlarmRuleRequest !== undefined) {
                if (deleteSqlAlarmRuleRequest instanceof DeleteSqlAlarmRuleRequest) {
                    sqlAlarmRuleId = deleteSqlAlarmRuleRequest.sqlAlarmRuleId;
                    contentType = deleteSqlAlarmRuleRequest.contentType;
                } else {
                    sqlAlarmRuleId = deleteSqlAlarmRuleRequest['sql_alarm_rule_id'];
                    contentType = deleteSqlAlarmRuleRequest['Content-Type'];
                }
            }

        
            if (sqlAlarmRuleId === null || sqlAlarmRuleId === undefined) {
            throw new RequiredError('sqlAlarmRuleId','Required parameter sqlAlarmRuleId was null or undefined when calling deleteSqlAlarmRule.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'sql_alarm_rule_id': sqlAlarmRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询SQL告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSqlAlarmRules(listSqlAlarmRulesRequest?: ListSqlAlarmRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/lts/alarms/sql-alarm-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;

            if (listSqlAlarmRulesRequest !== null && listSqlAlarmRulesRequest !== undefined) {
                if (listSqlAlarmRulesRequest instanceof ListSqlAlarmRulesRequest) {
                    contentType = listSqlAlarmRulesRequest.contentType;
                } else {
                    contentType = listSqlAlarmRulesRequest['Content-Type'];
                }
            }

        
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 改变告警规则状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmRuleStatus(updateAlarmRuleStatusRequest?: UpdateAlarmRuleStatusRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/lts/alarms/status",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAlarmRuleStatusRequest !== null && updateAlarmRuleStatusRequest !== undefined) {
                if (updateAlarmRuleStatusRequest instanceof UpdateAlarmRuleStatusRequest) {
                    body = updateAlarmRuleStatusRequest.body
                } else {
                    body = updateAlarmRuleStatusRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于修改SQL告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSqlAlarmRule(updateSqlAlarmRuleRequest?: UpdateSqlAlarmRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/lts/alarms/sql-alarm-rule",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (updateSqlAlarmRuleRequest !== null && updateSqlAlarmRuleRequest !== undefined) {
                if (updateSqlAlarmRuleRequest instanceof UpdateSqlAlarmRuleRequest) {
                    contentType = updateSqlAlarmRuleRequest.contentType;
                    body = updateSqlAlarmRuleRequest.body
                } else {
                    contentType = updateSqlAlarmRuleRequest['Content-Type'];
                    body = updateSqlAlarmRuleRequest['body'];
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
    
    }
};

function newClient(client: HcClient): LtsClient {
    return new LtsClient(client);
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