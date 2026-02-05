import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccumulatedTimes } from './model/AccumulatedTimes';
import { AdhocQueryAnalysisField } from './model/AdhocQueryAnalysisField';
import { AlertDescription } from './model/AlertDescription';
import { AlertGrouping } from './model/AlertGrouping';
import { AlertName } from './model/AlertName';
import { AlertRemediation } from './model/AlertRemediation';
import { AlertRuleDescription } from './model/AlertRuleDescription';
import { AlertRuleEnvironment } from './model/AlertRuleEnvironment';
import { AlertRuleItem } from './model/AlertRuleItem';
import { AlertRuleJobSetting } from './model/AlertRuleJobSetting';
import { AlertRuleName } from './model/AlertRuleName';
import { AlertRuleProcessError } from './model/AlertRuleProcessError';
import { AlertRuleSchedule } from './model/AlertRuleSchedule';
import { AlertRuleScript } from './model/AlertRuleScript';
import { AlertRuleTemplate } from './model/AlertRuleTemplate';
import { AlertRuleTemplateDescription } from './model/AlertRuleTemplateDescription';
import { AlertSeverities } from './model/AlertSeverities';
import { AlertSuppression } from './model/AlertSuppression';
import { AnalysisScript } from './model/AnalysisScript';
import { AnalysisScriptParam } from './model/AnalysisScriptParam';
import { AnalysisScriptType } from './model/AnalysisScriptType';
import { BaselineCatalogModel } from './model/BaselineCatalogModel';
import { BaselineSearchRequestBody } from './model/BaselineSearchRequestBody';
import { BaselineSearchRequestBodyCondition } from './model/BaselineSearchRequestBodyCondition';
import { BaselineSearchRequestBodyConditionConditions } from './model/BaselineSearchRequestBodyConditionConditions';
import { BatchOperateBaselineResult } from './model/BatchOperateBaselineResult';
import { CheckitemCatalogModel } from './model/CheckitemCatalogModel';
import { CheckitemModel } from './model/CheckitemModel';
import { CodeSegment } from './model/CodeSegment';
import { CodeSegmentCode } from './model/CodeSegmentCode';
import { CodeSegmentDescription } from './model/CodeSegmentDescription';
import { CodeSegmentName } from './model/CodeSegmentName';
import { ColumnDisplaySetting } from './model/ColumnDisplaySetting';
import { CompliancePackageModel } from './model/CompliancePackageModel';
import { ConfigInfo } from './model/ConfigInfo';
import { CreateAdhocQueryRequest } from './model/CreateAdhocQueryRequest';
import { CreateAdhocQueryRequestBody } from './model/CreateAdhocQueryRequestBody';
import { CreateAdhocQueryResponse } from './model/CreateAdhocQueryResponse';
import { CreateAlertRuleRequest } from './model/CreateAlertRuleRequest';
import { CreateAlertRuleRequestBody } from './model/CreateAlertRuleRequestBody';
import { CreateAlertRuleResponse } from './model/CreateAlertRuleResponse';
import { CreateAnalysisScriptRequest } from './model/CreateAnalysisScriptRequest';
import { CreateAnalysisScriptRequestBody } from './model/CreateAnalysisScriptRequestBody';
import { CreateAnalysisScriptResponse } from './model/CreateAnalysisScriptResponse';
import { CreateBy } from './model/CreateBy';
import { CreateCodeSegmentRequest } from './model/CreateCodeSegmentRequest';
import { CreateCodeSegmentRequestBody } from './model/CreateCodeSegmentRequestBody';
import { CreateCodeSegmentResponse } from './model/CreateCodeSegmentResponse';
import { CreateCollectConfigRequest } from './model/CreateCollectConfigRequest';
import { CreateCollectConfigResponse } from './model/CreateCollectConfigResponse';
import { CreateCollectConfigV2RequestBody } from './model/CreateCollectConfigV2RequestBody';
import { CreateCustomizedCheckitemRequest } from './model/CreateCustomizedCheckitemRequest';
import { CreateCustomizedCheckitemResponse } from './model/CreateCustomizedCheckitemResponse';
import { CreateCustomizedCompliancePackageRequest } from './model/CreateCustomizedCompliancePackageRequest';
import { CreateCustomizedCompliancePackageResponse } from './model/CreateCustomizedCompliancePackageResponse';
import { CreateDataTransformationRequest } from './model/CreateDataTransformationRequest';
import { CreateDataTransformationRequestBody } from './model/CreateDataTransformationRequestBody';
import { CreateDataTransformationResponse } from './model/CreateDataTransformationResponse';
import { CreateLayoutFieldRequest } from './model/CreateLayoutFieldRequest';
import { CreateLayoutFieldRequestBody } from './model/CreateLayoutFieldRequestBody';
import { CreateLayoutFieldResponse } from './model/CreateLayoutFieldResponse';
import { CreatePipeRequest } from './model/CreatePipeRequest';
import { CreatePipeRequestBody } from './model/CreatePipeRequestBody';
import { CreatePipeResponse } from './model/CreatePipeResponse';
import { CreateRetrieveScriptRequest } from './model/CreateRetrieveScriptRequest';
import { CreateRetrieveScriptRequestBody } from './model/CreateRetrieveScriptRequestBody';
import { CreateRetrieveScriptResponse } from './model/CreateRetrieveScriptResponse';
import { CreateSqlRenderRequest } from './model/CreateSqlRenderRequest';
import { CreateSqlRenderRequestBody } from './model/CreateSqlRenderRequestBody';
import { CreateSqlRenderResponse } from './model/CreateSqlRenderResponse';
import { CreateSqlValidationRequest } from './model/CreateSqlValidationRequest';
import { CreateSqlValidationRequestBody } from './model/CreateSqlValidationRequestBody';
import { CreateSqlValidationResponse } from './model/CreateSqlValidationResponse';
import { CreateTableAnalysisRequest } from './model/CreateTableAnalysisRequest';
import { CreateTableAnalysisResponse } from './model/CreateTableAnalysisResponse';
import { CreateTableRequest } from './model/CreateTableRequest';
import { CreateTableRequestBody } from './model/CreateTableRequestBody';
import { CreateTableResponse } from './model/CreateTableResponse';
import { CuQuotaAmount } from './model/CuQuotaAmount';
import { CuUsage } from './model/CuUsage';
import { DataClassification } from './model/DataClassification';
import { DataLayering } from './model/DataLayering';
import { DataRow } from './model/DataRow';
import { DataTransformationDescription } from './model/DataTransformationDescription';
import { DataTransformationItem } from './model/DataTransformationItem';
import { DataTransformationName } from './model/DataTransformationName';
import { DataTransformationProcessError } from './model/DataTransformationProcessError';
import { DatasetInfo } from './model/DatasetInfo';
import { DatasetInfoReference } from './model/DatasetInfoReference';
import { DeleteAdhocQueryRequest } from './model/DeleteAdhocQueryRequest';
import { DeleteAdhocQueryResponse } from './model/DeleteAdhocQueryResponse';
import { DeleteAlertRuleRequest } from './model/DeleteAlertRuleRequest';
import { DeleteAlertRuleResponse } from './model/DeleteAlertRuleResponse';
import { DeleteAnalysisScriptRequest } from './model/DeleteAnalysisScriptRequest';
import { DeleteAnalysisScriptResponse } from './model/DeleteAnalysisScriptResponse';
import { DeleteCodeSegmentRequest } from './model/DeleteCodeSegmentRequest';
import { DeleteCodeSegmentResponse } from './model/DeleteCodeSegmentResponse';
import { DeleteCustomizedCheckitemsRequest } from './model/DeleteCustomizedCheckitemsRequest';
import { DeleteCustomizedCheckitemsRequestBody } from './model/DeleteCustomizedCheckitemsRequestBody';
import { DeleteCustomizedCheckitemsResponse } from './model/DeleteCustomizedCheckitemsResponse';
import { DeleteCustomizedCompliancePackagesRequest } from './model/DeleteCustomizedCompliancePackagesRequest';
import { DeleteCustomizedCompliancePackagesResponse } from './model/DeleteCustomizedCompliancePackagesResponse';
import { DeleteDataTransformationRequest } from './model/DeleteDataTransformationRequest';
import { DeleteDataTransformationResponse } from './model/DeleteDataTransformationResponse';
import { DeleteLayoutFieldRequest } from './model/DeleteLayoutFieldRequest';
import { DeleteLayoutFieldResponse } from './model/DeleteLayoutFieldResponse';
import { DeletePipeRequest } from './model/DeletePipeRequest';
import { DeletePipeResponse } from './model/DeletePipeResponse';
import { DeleteRetrieveScriptRequest } from './model/DeleteRetrieveScriptRequest';
import { DeleteRetrieveScriptResponse } from './model/DeleteRetrieveScriptResponse';
import { DeleteTableRequest } from './model/DeleteTableRequest';
import { DeleteTableResponse } from './model/DeleteTableResponse';
import { Directory } from './model/Directory';
import { DirectoryI18N } from './model/DirectoryI18N';
import { DisableAlertRuleRequest } from './model/DisableAlertRuleRequest';
import { DisableAlertRuleResponse } from './model/DisableAlertRuleResponse';
import { DisableConsumptionV2RequestBody } from './model/DisableConsumptionV2RequestBody';
import { DisableDataConsumptionRequest } from './model/DisableDataConsumptionRequest';
import { DisableDataConsumptionResponse } from './model/DisableDataConsumptionResponse';
import { DisableDataTransformationRequest } from './model/DisableDataTransformationRequest';
import { DisableDataTransformationResponse } from './model/DisableDataTransformationResponse';
import { EnableAlertRuleRequest } from './model/EnableAlertRuleRequest';
import { EnableAlertRuleResponse } from './model/EnableAlertRuleResponse';
import { EnableDataConsumptionRequest } from './model/EnableDataConsumptionRequest';
import { EnableDataConsumptionResponse } from './model/EnableDataConsumptionResponse';
import { EnableDataTransformationRequest } from './model/EnableDataTransformationRequest';
import { EnableDataTransformationResponse } from './model/EnableDataTransformationResponse';
import { EsMonitorBody } from './model/EsMonitorBody';
import { Expression } from './model/Expression';
import { FrequencyUnit } from './model/FrequencyUnit';
import { IntInterval } from './model/IntInterval';
import { InterActiveParams } from './model/InterActiveParams';
import { IsapAlertDescription } from './model/IsapAlertDescription';
import { IsapAlertGrouping } from './model/IsapAlertGrouping';
import { IsapAlertName } from './model/IsapAlertName';
import { IsapAlertRemediation } from './model/IsapAlertRemediation';
import { IsapAlertSeverity } from './model/IsapAlertSeverity';
import { IsapAlertSuppression } from './model/IsapAlertSuppression';
import { IsapDataSpaceId } from './model/IsapDataSpaceId';
import { IsapIntInterval } from './model/IsapIntInterval';
import { IsapJobFieldNotNullPolicy } from './model/IsapJobFieldNotNullPolicy';
import { IsapJobMode } from './model/IsapJobMode';
import { IsapJobModeSettingDto } from './model/IsapJobModeSettingDto';
import { IsapJobModeSettingVo } from './model/IsapJobModeSettingVo';
import { IsapJobOutputSetting } from './model/IsapJobOutputSetting';
import { IsapJobStartupModeEnum } from './model/IsapJobStartupModeEnum';
import { IsapListCount } from './model/IsapListCount';
import { IsapLongInterval } from './model/IsapLongInterval';
import { IsapProjectId } from './model/IsapProjectId';
import { IsapScriptName } from './model/IsapScriptName';
import { IsapScriptTableName } from './model/IsapScriptTableName';
import { IsapTable } from './model/IsapTable';
import { IsapTableAlias } from './model/IsapTableAlias';
import { IsapTableCategory } from './model/IsapTableCategory';
import { IsapTableColumn } from './model/IsapTableColumn';
import { IsapTableColumnDisplaySettingDto } from './model/IsapTableColumnDisplaySettingDto';
import { IsapTableColumnDto } from './model/IsapTableColumnDto';
import { IsapTableColumnTreeNodeTableColumnDto } from './model/IsapTableColumnTreeNodeTableColumnDto';
import { IsapTableDisplaySettingDto } from './model/IsapTableDisplaySettingDto';
import { IsapTableId } from './model/IsapTableId';
import { IsapTableName } from './model/IsapTableName';
import { IsapTableProcessError } from './model/IsapTableProcessError';
import { IsapTableProcessStatus } from './model/IsapTableProcessStatus';
import { IsapTableSchema } from './model/IsapTableSchema';
import { IsapTableStorageSettingDto } from './model/IsapTableStorageSettingDto';
import { IsapTimeStamp } from './model/IsapTimeStamp';
import { IsapTimeUnit } from './model/IsapTimeUnit';
import { IsapUserId } from './model/IsapUserId';
import { IsapUuid } from './model/IsapUuid';
import { IsapWorkspaceId } from './model/IsapWorkspaceId';
import { JobEnvironment } from './model/JobEnvironment';
import { JobMode } from './model/JobMode';
import { JobProcessStatus } from './model/JobProcessStatus';
import { JobScript } from './model/JobScript';
import { JobStatus } from './model/JobStatus';
import { LayoutFieldResponseBody } from './model/LayoutFieldResponseBody';
import { ListAlertRuleMetricsRequest } from './model/ListAlertRuleMetricsRequest';
import { ListAlertRuleMetricsResponse } from './model/ListAlertRuleMetricsResponse';
import { ListAlertRuleTemplateMetricsRequest } from './model/ListAlertRuleTemplateMetricsRequest';
import { ListAlertRuleTemplateMetricsResponse } from './model/ListAlertRuleTemplateMetricsResponse';
import { ListAlertRuleTemplateMetricsResponseBodySeverity } from './model/ListAlertRuleTemplateMetricsResponseBodySeverity';
import { ListAlertRuleTemplateMetricsResponseBodySeverityMetric } from './model/ListAlertRuleTemplateMetricsResponseBodySeverityMetric';
import { ListAlertRuleTemplateMetricsResponseBodyStatus } from './model/ListAlertRuleTemplateMetricsResponseBodyStatus';
import { ListAlertRuleTemplateMetricsResponseBodyStatusMetric } from './model/ListAlertRuleTemplateMetricsResponseBodyStatusMetric';
import { ListAlertRuleTemplatesRequest } from './model/ListAlertRuleTemplatesRequest';
import { ListAlertRuleTemplatesResponse } from './model/ListAlertRuleTemplatesResponse';
import { ListAlertRulesRequest } from './model/ListAlertRulesRequest';
import { ListAlertRulesResponse } from './model/ListAlertRulesResponse';
import { ListAnalysisScriptsRequest } from './model/ListAnalysisScriptsRequest';
import { ListAnalysisScriptsResponse } from './model/ListAnalysisScriptsResponse';
import { ListCodeSegmentsRequest } from './model/ListCodeSegmentsRequest';
import { ListCodeSegmentsResponse } from './model/ListCodeSegmentsResponse';
import { ListCollectConfigRequest } from './model/ListCollectConfigRequest';
import { ListCollectConfigResponse } from './model/ListCollectConfigResponse';
import { ListCollectConfigResponseBodyAccounts } from './model/ListCollectConfigResponseBodyAccounts';
import { ListCollectConfigResponseBodyAllVendors } from './model/ListCollectConfigResponseBodyAllVendors';
import { ListCollectConfigResponseBodyConfigStatistics } from './model/ListCollectConfigResponseBodyConfigStatistics';
import { ListCollectConfigResponseBodyCsvcList } from './model/ListCollectConfigResponseBodyCsvcList';
import { ListCollectConfigResponseBodyDataList } from './model/ListCollectConfigResponseBodyDataList';
import { ListCollectConfigResponseBodyDatasets } from './model/ListCollectConfigResponseBodyDatasets';
import { ListCollectConfigResponseBodyReference } from './model/ListCollectConfigResponseBodyReference';
import { ListCollectConfigResponseBodySourceList } from './model/ListCollectConfigResponseBodySourceList';
import { ListCollectConfigResponseBodyTarget } from './model/ListCollectConfigResponseBodyTarget';
import { ListCount } from './model/ListCount';
import { ListDataTransformationMetricsRequest } from './model/ListDataTransformationMetricsRequest';
import { ListDataTransformationMetricsResponse } from './model/ListDataTransformationMetricsResponse';
import { ListDataTransformationsRequest } from './model/ListDataTransformationsRequest';
import { ListDataTransformationsResponse } from './model/ListDataTransformationsResponse';
import { ListDirectoriesRequest } from './model/ListDirectoriesRequest';
import { ListDirectoriesResponse } from './model/ListDirectoriesResponse';
import { ListLayoutFieldAllRequest } from './model/ListLayoutFieldAllRequest';
import { ListLayoutFieldAllResponse } from './model/ListLayoutFieldAllResponse';
import { ListPipesRequest } from './model/ListPipesRequest';
import { ListPipesResponse } from './model/ListPipesResponse';
import { ListRetrieveScriptsRequest } from './model/ListRetrieveScriptsRequest';
import { ListRetrieveScriptsResponse } from './model/ListRetrieveScriptsResponse';
import { ListTableHistogramsRequest } from './model/ListTableHistogramsRequest';
import { ListTableHistogramsRequestBody } from './model/ListTableHistogramsRequestBody';
import { ListTableHistogramsResponse } from './model/ListTableHistogramsResponse';
import { ListTableLogsRequest } from './model/ListTableLogsRequest';
import { ListTableLogsRequestBody } from './model/ListTableLogsRequestBody';
import { ListTableLogsResponse } from './model/ListTableLogsResponse';
import { ListTablesRequest } from './model/ListTablesRequest';
import { ListTablesResponse } from './model/ListTablesResponse';
import { LtsResponseVo } from './model/LtsResponseVo';
import { LtsResponseVoLogTypes } from './model/LtsResponseVoLogTypes';
import { LtsResponseVoLtsInfos } from './model/LtsResponseVoLtsInfos';
import { LtsResponseVoStreams } from './model/LtsResponseVoStreams';
import { LtsRquestVo } from './model/LtsRquestVo';
import { MetricMap } from './model/MetricMap';
import { MetricsStatus } from './model/MetricsStatus';
import { Mode } from './model/Mode';
import { Object1Map } from './model/Object1Map';
import { Object2Map } from './model/Object2Map';
import { Operator } from './model/Operator';
import { PipeAlias } from './model/PipeAlias';
import { PipeCategory } from './model/PipeCategory';
import { PipeDescription } from './model/PipeDescription';
import { PipeItem } from './model/PipeItem';
import { PipeName } from './model/PipeName';
import { PipeOwnerType } from './model/PipeOwnerType';
import { PipeProcessError } from './model/PipeProcessError';
import { PipeProcessStatus } from './model/PipeProcessStatus';
import { PipeResource } from './model/PipeResource';
import { PipeSchema } from './model/PipeSchema';
import { PipeStorageSetting } from './model/PipeStorageSetting';
import { ProcessError } from './model/ProcessError';
import { ProcessStatus } from './model/ProcessStatus';
import { Query } from './model/Query';
import { QueryType } from './model/QueryType';
import { RetrieveScript } from './model/RetrieveScript';
import { Script } from './model/Script';
import { ScriptCategory } from './model/ScriptCategory';
import { ScriptDescription } from './model/ScriptDescription';
import { ScriptDirectory } from './model/ScriptDirectory';
import { ScriptParam } from './model/ScriptParam';
import { SearchBaselineRequest } from './model/SearchBaselineRequest';
import { SearchBaselineResponse } from './model/SearchBaselineResponse';
import { SearchCheckitemsRequest } from './model/SearchCheckitemsRequest';
import { SearchCheckitemsRequestBody } from './model/SearchCheckitemsRequestBody';
import { SearchCheckitemsRequestBodyCondition } from './model/SearchCheckitemsRequestBodyCondition';
import { SearchCheckitemsResponse } from './model/SearchCheckitemsResponse';
import { SearchCompliancePackagesRequest } from './model/SearchCompliancePackagesRequest';
import { SearchCompliancePackagesRequestBody } from './model/SearchCompliancePackagesRequestBody';
import { SearchCompliancePackagesResponse } from './model/SearchCompliancePackagesResponse';
import { SearchQuery } from './model/SearchQuery';
import { SearchQueryField } from './model/SearchQueryField';
import { SearchQueryResult } from './model/SearchQueryResult';
import { SearchQueryResultHistogram } from './model/SearchQueryResultHistogram';
import { SearchScriptParam } from './model/SearchScriptParam';
import { Serverity } from './model/Serverity';
import { ShowAdhocQueryResultResponseBodyTips } from './model/ShowAdhocQueryResultResponseBodyTips';
import { ShowAdhocResultRequest } from './model/ShowAdhocResultRequest';
import { ShowAdhocResultResponse } from './model/ShowAdhocResultResponse';
import { ShowAlertRuleRequest } from './model/ShowAlertRuleRequest';
import { ShowAlertRuleResponse } from './model/ShowAlertRuleResponse';
import { ShowAlertRuleTemplateRequest } from './model/ShowAlertRuleTemplateRequest';
import { ShowAlertRuleTemplateResponse } from './model/ShowAlertRuleTemplateResponse';
import { ShowAnalysisScriptRequest } from './model/ShowAnalysisScriptRequest';
import { ShowAnalysisScriptResponse } from './model/ShowAnalysisScriptResponse';
import { ShowCheckitemDetailRequest } from './model/ShowCheckitemDetailRequest';
import { ShowCheckitemDetailResponse } from './model/ShowCheckitemDetailResponse';
import { ShowCodeSegmentRequest } from './model/ShowCodeSegmentRequest';
import { ShowCodeSegmentResponse } from './model/ShowCodeSegmentResponse';
import { ShowCompliancePackageDetailRequest } from './model/ShowCompliancePackageDetailRequest';
import { ShowCompliancePackageDetailResponse } from './model/ShowCompliancePackageDetailResponse';
import { ShowDataConsumptionRequest } from './model/ShowDataConsumptionRequest';
import { ShowDataConsumptionResponse } from './model/ShowDataConsumptionResponse';
import { ShowDataTransformationRequest } from './model/ShowDataTransformationRequest';
import { ShowDataTransformationResponse } from './model/ShowDataTransformationResponse';
import { ShowLayoutFieldInfoRequest } from './model/ShowLayoutFieldInfoRequest';
import { ShowLayoutFieldInfoResponse } from './model/ShowLayoutFieldInfoResponse';
import { ShowMonitorStatsRequest } from './model/ShowMonitorStatsRequest';
import { ShowMonitorStatsResponse } from './model/ShowMonitorStatsResponse';
import { ShowPipeRequest } from './model/ShowPipeRequest';
import { ShowPipeResponse } from './model/ShowPipeResponse';
import { ShowPulsarMonitorStatsBody } from './model/ShowPulsarMonitorStatsBody';
import { ShowRetrieveScriptRequest } from './model/ShowRetrieveScriptRequest';
import { ShowRetrieveScriptResponse } from './model/ShowRetrieveScriptResponse';
import { ShowSubscriptionResourcesRequest } from './model/ShowSubscriptionResourcesRequest';
import { ShowSubscriptionResourcesResponse } from './model/ShowSubscriptionResourcesResponse';
import { ShowTableRequest } from './model/ShowTableRequest';
import { ShowTableResponse } from './model/ShowTableResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { Simulation } from './model/Simulation';
import { SkuEnum } from './model/SkuEnum';
import { SpecCheckitemModel } from './model/SpecCheckitemModel';
import { SqlValiTableName } from './model/SqlValiTableName';
import { Status } from './model/Status';
import { StatusMetric } from './model/StatusMetric';
import { TableAlias } from './model/TableAlias';
import { TableCategory } from './model/TableCategory';
import { TableColumnDisplaySetting } from './model/TableColumnDisplaySetting';
import { TableColumnForIsapPipe } from './model/TableColumnForIsapPipe';
import { TableDescription } from './model/TableDescription';
import { TableDisplaySetting } from './model/TableDisplaySetting';
import { TableEditType } from './model/TableEditType';
import { TableFormat } from './model/TableFormat';
import { TableItem } from './model/TableItem';
import { TableLockStatus } from './model/TableLockStatus';
import { TableOwnerType } from './model/TableOwnerType';
import { TableProcessError } from './model/TableProcessError';
import { TableProcessStatus } from './model/TableProcessStatus';
import { TableRWType } from './model/TableRWType';
import { TableSchemaDto } from './model/TableSchemaDto';
import { TableStorageSetting } from './model/TableStorageSetting';
import { TemplateName } from './model/TemplateName';
import { Trigger } from './model/Trigger';
import { UpdateAlertRuleRequest } from './model/UpdateAlertRuleRequest';
import { UpdateAlertRuleRequestBody } from './model/UpdateAlertRuleRequestBody';
import { UpdateAlertRuleResponse } from './model/UpdateAlertRuleResponse';
import { UpdateAnalysisScriptRequest } from './model/UpdateAnalysisScriptRequest';
import { UpdateAnalysisScriptRequestBody } from './model/UpdateAnalysisScriptRequestBody';
import { UpdateAnalysisScriptResponse } from './model/UpdateAnalysisScriptResponse';
import { UpdateBy } from './model/UpdateBy';
import { UpdateCheckitemRequest } from './model/UpdateCheckitemRequest';
import { UpdateCheckitemResponse } from './model/UpdateCheckitemResponse';
import { UpdateCodeSegmentRequest } from './model/UpdateCodeSegmentRequest';
import { UpdateCodeSegmentRequestBody } from './model/UpdateCodeSegmentRequestBody';
import { UpdateCodeSegmentResponse } from './model/UpdateCodeSegmentResponse';
import { UpdateCompliancePackageRequest } from './model/UpdateCompliancePackageRequest';
import { UpdateCompliancePackageResponse } from './model/UpdateCompliancePackageResponse';
import { UpdateDataTransformationRequest } from './model/UpdateDataTransformationRequest';
import { UpdateDataTransformationRequestBody } from './model/UpdateDataTransformationRequestBody';
import { UpdateDataTransformationResponse } from './model/UpdateDataTransformationResponse';
import { UpdateLayoutFieldRequest } from './model/UpdateLayoutFieldRequest';
import { UpdateLayoutFieldRequestBody } from './model/UpdateLayoutFieldRequestBody';
import { UpdateLayoutFieldResponse } from './model/UpdateLayoutFieldResponse';
import { UpdatePipeRequest } from './model/UpdatePipeRequest';
import { UpdatePipeRequestBody } from './model/UpdatePipeRequestBody';
import { UpdatePipeResponse } from './model/UpdatePipeResponse';
import { UpdatePipeSchemaRequest } from './model/UpdatePipeSchemaRequest';
import { UpdatePipeSchemaResponse } from './model/UpdatePipeSchemaResponse';
import { UpdateRetrieveScriptRequest } from './model/UpdateRetrieveScriptRequest';
import { UpdateRetrieveScriptRequestBody } from './model/UpdateRetrieveScriptRequestBody';
import { UpdateRetrieveScriptResponse } from './model/UpdateRetrieveScriptResponse';
import { UpdateTableRequest } from './model/UpdateTableRequest';
import { UpdateTableRequestBody } from './model/UpdateTableRequestBody';
import { UpdateTableResponse } from './model/UpdateTableResponse';
import { UpdateTableSchemaRequest } from './model/UpdateTableSchemaRequest';
import { UpdateTableSchemaResponse } from './model/UpdateTableSchemaResponse';
import { UsageMetric } from './model/UsageMetric';

export class SecMasterClient {
    public static newBuilder(): ClientBuilder<SecMasterClient> {
            let client = new ClientBuilder<SecMasterClient>(newClient);
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
     * 创建adhoc查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建adhoc查询
     * @param {string} workspaceId 工作空间ID
     * @param {CreateAdhocQueryRequestBody} createAdhocQueryRequestBody 创建adhoc查询请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAdhocQuery(createAdhocQueryRequest?: CreateAdhocQueryRequest): Promise<CreateAdhocQueryResponse> {
        const options = ParamCreater().createAdhocQuery(createAdhocQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {CreateAlertRuleRequestBody} createAlertRuleRequestBody 创建告警规则片段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlertRule(createAlertRuleRequest?: CreateAlertRuleRequest): Promise<CreateAlertRuleResponse> {
        const options = ParamCreater().createAlertRule(createAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建分析脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建分析脚本
     * @param {string} workspaceId 工作空间ID
     * @param {CreateAnalysisScriptRequestBody} createAnalysisScriptRequestBody 创建分析脚本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAnalysisScript(createAnalysisScriptRequest?: CreateAnalysisScriptRequest): Promise<CreateAnalysisScriptResponse> {
        const options = ParamCreater().createAnalysisScript(createAnalysisScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建代码片段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建代码片段
     * @param {string} workspaceId 工作空间ID
     * @param {CreateCodeSegmentRequestBody} createCodeSegmentRequestBody 创建代码片段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCodeSegment(createCodeSegmentRequest?: CreateCodeSegmentRequest): Promise<CreateCodeSegmentResponse> {
        const options = ParamCreater().createCodeSegment(createCodeSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存云服务采集配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存云服务采集配置
     * @param {CreateCollectConfigV2RequestBody} createCollectConfigRequestBody CreateCollectConfigRequestBody detail
     * @param {string} [regionId] 区域ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCollectConfig(createCollectConfigRequest?: CreateCollectConfigRequest): Promise<CreateCollectConfigResponse> {
        const options = ParamCreater().createCollectConfig(createCollectConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增自定义检查项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增自定义检查项
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {CheckitemModel} createCustomizedCheckitemRequestBody 新增自定义检查项请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomizedCheckitem(createCustomizedCheckitemRequest?: CreateCustomizedCheckitemRequest): Promise<CreateCustomizedCheckitemResponse> {
        const options = ParamCreater().createCustomizedCheckitem(createCustomizedCheckitemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增自定义遵从包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增自定义遵从包
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {CompliancePackageModel} createCustomizedCompliancePackageRequestBody 新增自定义遵从包请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCustomizedCompliancePackage(createCustomizedCompliancePackageRequest?: CreateCustomizedCompliancePackageRequest): Promise<CreateCustomizedCompliancePackageResponse> {
        const options = ParamCreater().createCustomizedCompliancePackage(createCustomizedCompliancePackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {CreateDataTransformationRequestBody} createDataTransformationRequestBody 创建数据加工请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataTransformation(createDataTransformationRequest?: CreateDataTransformationRequest): Promise<CreateDataTransformationResponse> {
        const options = ParamCreater().createDataTransformation(createDataTransformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建布局字段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建布局字段
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {CreateLayoutFieldRequestBody} createLayoutFieldRequestBody 创建字段对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLayoutField(createLayoutFieldRequest?: CreateLayoutFieldRequest): Promise<CreateLayoutFieldResponse> {
        const options = ParamCreater().createLayoutField(createLayoutFieldRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建管道
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建管道
     * @param {string} workspaceId 工作空间ID
     * @param {CreatePipeRequestBody} createPipeRequestBody 创建管道请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPipe(createPipeRequest?: CreatePipeRequest): Promise<CreatePipeResponse> {
        const options = ParamCreater().createPipe(createPipeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建检索脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建检索脚本
     * @param {string} workspaceId 工作空间ID
     * @param {CreateRetrieveScriptRequestBody} createRetrieveScriptRequestBody 创建检索脚本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRetrieveScript(createRetrieveScriptRequest?: CreateRetrieveScriptRequest): Promise<CreateRetrieveScriptResponse> {
        const options = ParamCreater().createRetrieveScript(createRetrieveScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Adhoc sql参数渲染
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary Adhoc sql参数渲染
     * @param {string} workspaceId 工作空间ID
     * @param {CreateSqlRenderRequestBody} createSqlRenderRequestBody 创建sql参数渲染请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlRender(createSqlRenderRequest?: CreateSqlRenderRequest): Promise<CreateSqlRenderResponse> {
        const options = ParamCreater().createSqlRender(createSqlRenderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建表
     * @param {string} workspaceId 工作空间ID
     * @param {CreateTableRequestBody} createTableRequestBody 创建表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTable(createTableRequest?: CreateTableRequest): Promise<CreateTableResponse> {
        const options = ParamCreater().createTable(createTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建安全分析查询
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建安全分析查询
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {ListTableLogsRequestBody} createTableAnalysisRequestBody 创建分析查询请求体 （针对索引数据表）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTableAnalysis(createTableAnalysisRequest?: CreateTableAnalysisRequest): Promise<CreateTableAnalysisResponse> {
        const options = ParamCreater().createTableAnalysis(createTableAnalysisRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭查询操作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭查询操作
     * @param {string} workspaceId 工作空间ID
     * @param {string} queryId 查询ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAdhocQuery(deleteAdhocQueryRequest?: DeleteAdhocQueryRequest): Promise<DeleteAdhocQueryResponse> {
        const options = ParamCreater().deleteAdhocQuery(deleteAdhocQueryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {string} alertRuleId 告警规则 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlertRule(deleteAlertRuleRequest?: DeleteAlertRuleRequest): Promise<DeleteAlertRuleResponse> {
        const options = ParamCreater().deleteAlertRule(deleteAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除分析脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除分析脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} analysisScriptId 分析脚本 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAnalysisScript(deleteAnalysisScriptRequest?: DeleteAnalysisScriptRequest): Promise<DeleteAnalysisScriptResponse> {
        const options = ParamCreater().deleteAnalysisScript(deleteAnalysisScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除代码片段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除代码片段
     * @param {string} workspaceId 工作空间ID
     * @param {string} codeSegmentId 代码片段 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCodeSegment(deleteCodeSegmentRequest?: DeleteCodeSegmentRequest): Promise<DeleteCodeSegmentResponse> {
        const options = ParamCreater().deleteCodeSegment(deleteCodeSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义检查项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义检查项
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {DeleteCustomizedCheckitemsRequestBody} deleteCustomizedCheckitemsRequestBody 删除自定义检查项列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomizedCheckitems(deleteCustomizedCheckitemsRequest?: DeleteCustomizedCheckitemsRequest): Promise<DeleteCustomizedCheckitemsResponse> {
        const options = ParamCreater().deleteCustomizedCheckitems(deleteCustomizedCheckitemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除自定义遵从包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义遵从包
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {Array<string>} deleteCustomizedCompliancePackagesRequestBody 删除自定义遵从包列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCustomizedCompliancePackages(deleteCustomizedCompliancePackagesRequest?: DeleteCustomizedCompliancePackagesRequest): Promise<DeleteCustomizedCompliancePackagesResponse> {
        const options = ParamCreater().deleteCustomizedCompliancePackages(deleteCustomizedCompliancePackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {string} dataTransformationId 数据转换 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDataTransformation(deleteDataTransformationRequest?: DeleteDataTransformationRequest): Promise<DeleteDataTransformationResponse> {
        const options = ParamCreater().deleteDataTransformation(deleteDataTransformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除布局字段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除布局字段
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {Array<string>} [deleteLayoutFieldRequestBody] 字段id集合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLayoutField(deleteLayoutFieldRequest?: DeleteLayoutFieldRequest): Promise<DeleteLayoutFieldResponse> {
        const options = ParamCreater().deleteLayoutField(deleteLayoutFieldRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除管道
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除管道
     * @param {string} workspaceId 工作空间ID
     * @param {string} pipeId 管道ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePipe(deletePipeRequest?: DeletePipeRequest): Promise<DeletePipeResponse> {
        const options = ParamCreater().deletePipe(deletePipeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除检索脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除检索脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} retrieveScriptId 检索脚本 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRetrieveScript(deleteRetrieveScriptRequest?: DeleteRetrieveScriptRequest): Promise<DeleteRetrieveScriptResponse> {
        const options = ParamCreater().deleteRetrieveScript(deleteRetrieveScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除表
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTable(deleteTableRequest?: DeleteTableRequest): Promise<DeleteTableResponse> {
        const options = ParamCreater().deleteTable(deleteTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {string} alertRuleId 告警规则 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableAlertRule(disableAlertRuleRequest?: DisableAlertRuleRequest): Promise<DisableAlertRuleResponse> {
        const options = ParamCreater().disableAlertRule(disableAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭实时消费
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭实时消费
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {DisableConsumptionV2RequestBody} disableDataConsumptionRequestBody 关闭实时消费请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableDataConsumption(disableDataConsumptionRequest?: DisableDataConsumptionRequest): Promise<DisableDataConsumptionResponse> {
        const options = ParamCreater().disableDataConsumption(disableDataConsumptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停用数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {string} dataTransformationId 数据转换 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableDataTransformation(disableDataTransformationRequest?: DisableDataTransformationRequest): Promise<DisableDataTransformationResponse> {
        const options = ParamCreater().disableDataTransformation(disableDataTransformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {string} alertRuleId 告警规则 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableAlertRule(enableAlertRuleRequest?: EnableAlertRuleRequest): Promise<EnableAlertRuleResponse> {
        const options = ParamCreater().enableAlertRule(enableAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启实时消费
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启实时消费
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDataConsumption(enableDataConsumptionRequest?: EnableDataConsumptionRequest): Promise<EnableDataConsumptionResponse> {
        const options = ParamCreater().enableDataConsumption(enableDataConsumptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {string} dataTransformationId 数据转换 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableDataTransformation(enableDataTransformationRequest?: EnableDataTransformationRequest): Promise<EnableDataTransformationResponse> {
        const options = ParamCreater().enableDataTransformation(enableDataTransformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 告警规则总览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 告警规则总览
     * @param {string} workspaceId 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRuleMetrics(listAlertRuleMetricsRequest?: ListAlertRuleMetricsRequest): Promise<ListAlertRuleMetricsResponse> {
        const options = ParamCreater().listAlertRuleMetrics(listAlertRuleMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出告警规则模板总览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出告警规则模板总览
     * @param {string} workspaceId 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRuleTemplateMetrics(listAlertRuleTemplateMetricsRequest?: ListAlertRuleTemplateMetricsRequest): Promise<ListAlertRuleTemplateMetricsResponse> {
        const options = ParamCreater().listAlertRuleTemplateMetrics(listAlertRuleTemplateMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出告警规则模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出告警规则模板
     * @param {string} workspaceId 工作空间ID
     * @param {string} [templateName] 模板名称
     * @param {'ENABLED' | 'DISABLED'} [status] **参数解释**: 状态 - ENABLED 启用 - DISABLED 禁用  **约束限制** 不涉及 **取值范围**: - ENABLED - DISABLED  **默认值** 不涉及
     * @param {'TIPS' | 'LOW' | 'MEDIUM' | 'HIGH' | 'FATAL'} [severity] **参数解释**: 告警等级 - TIPS 提示 - LOW 低危 - MEDIUM 中危 - HIGH 高危 - FATAL 致命  **约束限制** 不涉及 **取值范围**: - TIPS - LOW - MEDIUM - HIGH - FATAL  **默认值** 不涉及
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRuleTemplates(listAlertRuleTemplatesRequest?: ListAlertRuleTemplatesRequest): Promise<ListAlertRuleTemplatesResponse> {
        const options = ParamCreater().listAlertRuleTemplates(listAlertRuleTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {string} [outputTableId] 输出表 ID
     * @param {string} [alertRuleName] 告警规则名称
     * @param {string} [alertRuleId] 告警规则 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRules(listAlertRulesRequest?: ListAlertRulesRequest): Promise<ListAlertRulesResponse> {
        const options = ParamCreater().listAlertRules(listAlertRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出分析脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出分析脚本
     * @param {string} workspaceId 工作空间ID
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAnalysisScripts(listAnalysisScriptsRequest?: ListAnalysisScriptsRequest): Promise<ListAnalysisScriptsResponse> {
        const options = ParamCreater().listAnalysisScripts(listAnalysisScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出代码片段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出代码片段
     * @param {string} workspaceId 工作空间ID
     * @param {string} [codeSegmentId] 代码片段 ID
     * @param {string} [codeSegmentName] 代码片段名称
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCodeSegments(listCodeSegmentsRequest?: ListCodeSegmentsRequest): Promise<ListCodeSegmentsResponse> {
        const options = ParamCreater().listCodeSegments(listCodeSegmentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取云服务采集配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取云服务采集配置
     * @param {string} [regionId] 区域ID
     * @param {number} [offset] 第几页
     * @param {number} [limit] 每页数量
     * @param {string} [sortKey] 排序字段
     * @param {string} [sortDir] 排序顺序
     * @param {string} [csvc] 云服务
     * @param {string} [domainId] 账号ID
     * @param {boolean} [queryStatistics] 是否查询云服务接入指标， 默认为 True
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCollectConfig(listCollectConfigRequest?: ListCollectConfigRequest): Promise<ListCollectConfigResponse> {
        const options = ParamCreater().listCollectConfig(listCollectConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据加工总览
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 数据加工总览
     * @param {string} workspaceId 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataTransformationMetrics(listDataTransformationMetricsRequest?: ListDataTransformationMetricsRequest): Promise<ListDataTransformationMetricsResponse> {
        const options = ParamCreater().listDataTransformationMetrics(listDataTransformationMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [outputTableId] 输出表ID
     * @param {string} [dataTransformationName] 数据转换名称
     * @param {string} [dataTransformationId] 数据转换 ID
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataTransformations(listDataTransformationsRequest?: ListDataTransformationsRequest): Promise<ListDataTransformationsResponse> {
        const options = ParamCreater().listDataTransformations(listDataTransformationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出目录分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出目录分组
     * @param {string} workspaceId 工作空间ID
     * @param {'TABLE' | 'PIPE' | 'RETRIEVE_SCRIPT' | 'ANALYSIS_SCRIPT' | 'DATA_TRANSFORMATION' | 'ALERT_RULE'} category **参数解释**: 目录类型 - TABLE 表 - PIPE 管道 - RETRIEVE_SCRIPT 检索脚本 - ANALYSIS_SCRIPT 分析脚本 - DATA_TRANSFORMATION 数据加工 - ALERT_RULE 告警规则  **约束限制** 不涉及 **取值范围**: - TABLE - PIPE - RETRIEVE_SCRIPT - ANALYSIS_SCRIPT - DATA_TRANSFORMATION - ALERT_RULE  **默认值** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDirectories(listDirectoriesRequest?: ListDirectoriesRequest): Promise<ListDirectoriesResponse> {
        const options = ParamCreater().listDirectories(listDirectoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询布局字段列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 全部布局字段
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [name] 名称查询
     * @param {boolean} [isBuiltIn] 是否内置
     * @param {string} [businessCode] 数据类业务编码
     * @param {string} [layoutId] 布局id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLayoutFieldAll(listLayoutFieldAllRequest?: ListLayoutFieldAllRequest): Promise<ListLayoutFieldAllResponse> {
        const options = ParamCreater().listLayoutFieldAll(listLayoutFieldAllRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取管道列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取管道列表
     * @param {string} workspaceId 工作空间ID
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {string} [pipeNameInQuery] 管道名称
     * @param {string} [pipeIdInQuery] 管道ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPipes(listPipesRequest?: ListPipesRequest): Promise<ListPipesResponse> {
        const options = ParamCreater().listPipes(listPipesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 列出检索脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出检索脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} [tableId] 表ID
     * @param {number} [offset] **参数解释：** 偏移量 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} [scriptName] 脚本名称
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetrieveScripts(listRetrieveScriptsRequest?: ListRetrieveScriptsRequest): Promise<ListRetrieveScriptsResponse> {
        const options = ParamCreater().listRetrieveScripts(listRetrieveScriptsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索表直方图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索表直方图
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {ListTableHistogramsRequestBody} listTableHistogramsRequestBody 查询日志结果直方图（针对索引数据表）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTableHistograms(listTableHistogramsRequest?: ListTableHistogramsRequest): Promise<ListTableHistogramsResponse> {
        const options = ParamCreater().listTableHistograms(listTableHistogramsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检索表日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检索表日志
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {ListTableLogsRequestBody} listTableLogsRequestBody 日志查询请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTableLogs(listTableLogsRequest?: ListTableLogsRequest): Promise<ListTableLogsResponse> {
        const options = ParamCreater().listTableLogs(listTableLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取表列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取表列表
     * @param {string} workspaceId 工作空间ID
     * @param {'STREAMING' | 'INDEX' | 'APPLICATION' | 'TENANT_BUCKET' | 'LAKE'} [category] **参数解释**: 目录类型 - STREAMING 实时流 - INDEX 索引 - APPLICATION 应用 - TENANT_BUCKET 租户桶 - LAKE 数据湖  **约束限制** 不涉及 **取值范围**: - STREAMING - INDEX - APPLICATION - TENANT_BUCKET - LAKE  **默认值** 不涉及
     * @param {string} [tableId] 表id
     * @param {string} [tableAlias] 表别名
     * @param {string} [tableName] 表名称
     * @param {number} [offset] **参数解释：** 偏移量 **取值范围：** 0-1000000 **默认取值：** 0
     * @param {number} [limit] **参数解释：** 查询数据限制 **取值范围：** 0-1000 **默认取值：** 不涉及
     * @param {string} [sortKey] 按照属性排序。
     * @param {string} [sortDir] 排序顺序，支持 &#x60;ASC&#x60; 或 &#x60;DESC&#x60;。
     * @param {boolean} [exists] 是否存在
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTables(listTablesRequest?: ListTablesRequest): Promise<ListTablesResponse> {
        const options = ParamCreater().listTables(listTablesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 搜索基线检查结果列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索基线检查结果列表
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {BaselineSearchRequestBody} searchBaselineRequestBody 搜索基线检查结果列表请求Body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchBaseline(searchBaselineRequest?: SearchBaselineRequest): Promise<SearchBaselineResponse> {
        const options = ParamCreater().searchBaseline(searchBaselineRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询检查项列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询检查项列表
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {SearchCheckitemsRequestBody} searchCheckitemsRequestBody 查询基线检查检查项列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCheckitems(searchCheckitemsRequest?: SearchCheckitemsRequest): Promise<SearchCheckitemsResponse> {
        const options = ParamCreater().searchCheckitems(searchCheckitemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询遵从包列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询遵从包列表
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {SearchCompliancePackagesRequestBody} searchCompliancePackagesRequestBody 查询基线检查遵从包列表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchCompliancePackages(searchCompliancePackagesRequest?: SearchCompliancePackagesRequest): Promise<SearchCompliancePackagesResponse> {
        const options = ParamCreater().searchCompliancePackages(searchCompliancePackagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取adhoc查询结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取adhoc查询结果
     * @param {string} workspaceId 工作空间ID
     * @param {string} queryId 查询ID
     * @param {number} batch 批次索引
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAdhocResult(showAdhocResultRequest?: ShowAdhocResultRequest): Promise<ShowAdhocResultResponse> {
        const options = ParamCreater().showAdhocResult(showAdhocResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {string} alertRuleId 告警规则 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlertRule(showAlertRuleRequest?: ShowAlertRuleRequest): Promise<ShowAlertRuleResponse> {
        const options = ParamCreater().showAlertRule(showAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看告警规则模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看告警规则模板
     * @param {string} workspaceId 工作空间ID
     * @param {string} templateId 告警规则模板Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlertRuleTemplate(showAlertRuleTemplateRequest?: ShowAlertRuleTemplateRequest): Promise<ShowAlertRuleTemplateResponse> {
        const options = ParamCreater().showAlertRuleTemplate(showAlertRuleTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看分析脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看分析脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} analysisScriptId 分析脚本 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAnalysisScript(showAnalysisScriptRequest?: ShowAnalysisScriptRequest): Promise<ShowAnalysisScriptResponse> {
        const options = ParamCreater().showAnalysisScript(showAnalysisScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询检查项详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询检查项详情
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {string} checkitemId 检查项uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCheckitemDetail(showCheckitemDetailRequest?: ShowCheckitemDetailRequest): Promise<ShowCheckitemDetailResponse> {
        const options = ParamCreater().showCheckitemDetail(showCheckitemDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看代码片段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看代码片段
     * @param {string} workspaceId 工作空间ID
     * @param {string} codeSegmentId 代码片段 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCodeSegment(showCodeSegmentRequest?: ShowCodeSegmentRequest): Promise<ShowCodeSegmentResponse> {
        const options = ParamCreater().showCodeSegment(showCodeSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询遵从包详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询遵从包详情
     * @param {string} compliancePackagesId 遵从包uuid
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCompliancePackageDetail(showCompliancePackageDetailRequest?: ShowCompliancePackageDetailRequest): Promise<ShowCompliancePackageDetailResponse> {
        const options = ParamCreater().showCompliancePackageDetail(showCompliancePackageDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实时消费配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实时消费配置
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDataConsumption(showDataConsumptionRequest?: ShowDataConsumptionRequest): Promise<ShowDataConsumptionResponse> {
        const options = ParamCreater().showDataConsumption(showDataConsumptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {string} dataTransformationId 数据转换 ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDataTransformation(showDataTransformationRequest?: ShowDataTransformationRequest): Promise<ShowDataTransformationResponse> {
        const options = ParamCreater().showDataTransformation(showDataTransformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询布局字段详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示字段详情
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} fieldId 字段ID
     * @param {string} [layoutId] 布局id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLayoutFieldInfo(showLayoutFieldInfoRequest?: ShowLayoutFieldInfoRequest): Promise<ShowLayoutFieldInfoResponse> {
        const options = ParamCreater().showLayoutFieldInfo(showLayoutFieldInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取监控统计信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取监控统计信息
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {ShowPulsarMonitorStatsBody} showMonitorStatsRequestBody 获取监控统计信息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMonitorStats(showMonitorStatsRequest?: ShowMonitorStatsRequest): Promise<ShowMonitorStatsResponse> {
        const options = ParamCreater().showMonitorStats(showMonitorStatsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取管道详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取管道详情
     * @param {string} workspaceId 工作空间ID
     * @param {string} pipeId 管道ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPipe(showPipeRequest?: ShowPipeRequest): Promise<ShowPipeResponse> {
        const options = ParamCreater().showPipe(showPipeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看检索脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看检索脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} retrieveScriptId 检索脚本ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRetrieveScript(showRetrieveScriptRequest?: ShowRetrieveScriptRequest): Promise<ShowRetrieveScriptResponse> {
        const options = ParamCreater().showRetrieveScript(showRetrieveScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取订阅资源信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取订阅资源信息
     * @param {string} workspaceId 工作空间ID
     * @param {'FLOW_DATA_BANDWIDTH' | 'CSS_CAPACITY' | 'PAIMON_CAPACITY' | 'OBS_CAPACITY' | 'JOB_CAPACITY' | 'AD_HOC_COUNT'} sku **参数解释**: SKU信息 - FLOW_DATA_BANDWIDTH 数据流量带宽 - CSS_CAPACITY CSS 存储容量 - PAIMON_CAPACITY Paimon 存储容量 - OBS_CAPACITY OBS 存储容量 - JOB_CAPACITY 作业处理容量 - AD_HOC_COUNT 即席查询次数  **约束限制** 不涉及 **取值范围**: - FLOW_DATA_BANDWIDTH - CSS_CAPACITY - PAIMON_CAPACITY - OBS_CAPACITY - JOB_CAPACITY - AD_HOC_COUNT  **默认值** 不涉及
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubscriptionResources(showSubscriptionResourcesRequest?: ShowSubscriptionResourcesRequest): Promise<ShowSubscriptionResourcesResponse> {
        const options = ParamCreater().showSubscriptionResources(showSubscriptionResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取表详情
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTable(showTableRequest?: ShowTableRequest): Promise<ShowTableResponse> {
        const options = ParamCreater().showTable(showTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前可用版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前可用版本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersion(showVersionRequest?: ShowVersionRequest): Promise<ShowVersionResponse> {
        const options = ParamCreater().showVersion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警规则
     * @param {string} workspaceId 工作空间ID
     * @param {string} alertRuleId 告警规则 ID
     * @param {UpdateAlertRuleRequestBody} updateAlertRuleRequestBody 更新告警规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlertRule(updateAlertRuleRequest?: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse> {
        const options = ParamCreater().updateAlertRule(updateAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新分析脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新分析脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} analysisScriptId 分析脚本 ID
     * @param {UpdateAnalysisScriptRequestBody} updateAnalysisScriptRequestBody 更新分析脚本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAnalysisScript(updateAnalysisScriptRequest?: UpdateAnalysisScriptRequest): Promise<UpdateAnalysisScriptResponse> {
        const options = ParamCreater().updateAnalysisScript(updateAnalysisScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新检查项
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新检查项
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {string} checkitemId 检查项uuid
     * @param {CheckitemModel} updateCheckitemRequestBody 更新检查项请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCheckitem(updateCheckitemRequest?: UpdateCheckitemRequest): Promise<UpdateCheckitemResponse> {
        const options = ParamCreater().updateCheckitem(updateCheckitemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新代码片段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新代码片段
     * @param {string} workspaceId 工作空间ID
     * @param {string} codeSegmentId 代码片段 ID
     * @param {UpdateCodeSegmentRequestBody} updateCodeSegmentRequestBody 更新代码片段
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCodeSegment(updateCodeSegmentRequest?: UpdateCodeSegmentRequest): Promise<UpdateCodeSegmentResponse> {
        const options = ParamCreater().updateCodeSegment(updateCodeSegmentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新遵从包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新遵从包
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} compliancePackagesId 遵从包uuid
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} xLanguage **参数解释：** 语言，参考值：zh-cn、en-us **约束限制：** 不涉及 **取值范围：** zh-cn：中文环境 en-us：英文环境 **默认取值：** 不涉及
     * @param {CompliancePackageModel} updateCompliancePackageRequestBody 更新基线检查遵从包请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCompliancePackage(updateCompliancePackageRequest?: UpdateCompliancePackageRequest): Promise<UpdateCompliancePackageResponse> {
        const options = ParamCreater().updateCompliancePackage(updateCompliancePackageRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新数据加工
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新数据加工
     * @param {string} workspaceId 工作空间ID
     * @param {string} dataTransformationId 数据转换 ID
     * @param {UpdateDataTransformationRequestBody} updateDataTransformationRequestBody 更新数据加工请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDataTransformation(updateDataTransformationRequest?: UpdateDataTransformationRequest): Promise<UpdateDataTransformationResponse> {
        const options = ParamCreater().updateDataTransformation(updateDataTransformationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新布局字段
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新字段
     * @param {string} contentType **参数解释：** 内容类型 - application/json;charset&#x3D;UTF-8    普通API请求的类型  **约束限制：** 不涉及 **取值范围：** - application/json;charset&#x3D;UTF-8  **默认取值：** 不涉及
     * @param {string} workspaceId **参数解释：** 工作空间id。 **约束限制：** 不涉及 **取值范围：** 不涉及 **默认取值：** 不涉及
     * @param {string} fieldId 字段ID
     * @param {UpdateLayoutFieldRequestBody} updateLayoutFieldRequestBody 更新字段对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLayoutField(updateLayoutFieldRequest?: UpdateLayoutFieldRequest): Promise<UpdateLayoutFieldResponse> {
        const options = ParamCreater().updateLayoutField(updateLayoutFieldRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新管道
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新管道
     * @param {string} workspaceId 工作空间ID
     * @param {string} pipeId 管道ID
     * @param {UpdatePipeRequestBody} updatePipeRequestBody 更新管道
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePipe(updatePipeRequest?: UpdatePipeRequest): Promise<UpdatePipeResponse> {
        const options = ParamCreater().updatePipe(updatePipeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新管道结构
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新管道结构
     * @param {string} workspaceId 工作空间ID
     * @param {string} pipeId 管道ID
     * @param {PipeSchema} updatePipeSchemaRequestBody 修改管道结构
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePipeSchema(updatePipeSchemaRequest?: UpdatePipeSchemaRequest): Promise<UpdatePipeSchemaResponse> {
        const options = ParamCreater().updatePipeSchema(updatePipeSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新检索脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新检索脚本
     * @param {string} workspaceId 工作空间ID
     * @param {string} retrieveScriptId 检索脚本ID
     * @param {UpdateRetrieveScriptRequestBody} updateRetrieveScriptRequestBody 更新检索脚本
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateRetrieveScript(updateRetrieveScriptRequest?: UpdateRetrieveScriptRequest): Promise<UpdateRetrieveScriptResponse> {
        const options = ParamCreater().updateRetrieveScript(updateRetrieveScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改表详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改表详情
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {UpdateTableRequestBody} updateTableRequestBody 更改表请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTable(updateTableRequest?: UpdateTableRequest): Promise<UpdateTableResponse> {
        const options = ParamCreater().updateTable(updateTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更改表结构
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改表结构
     * @param {string} workspaceId 工作空间ID
     * @param {string} tableId 表ID
     * @param {TableSchemaDto} updateTableSchemaRequestBody 更改表结构请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTableSchema(updateTableSchemaRequest?: UpdateTableSchemaRequest): Promise<UpdateTableSchemaResponse> {
        const options = ParamCreater().updateTableSchema(updateTableSchemaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建SQL校验
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建SQL校验
     * @param {string} workspaceId 工作空间ID
     * @param {CreateSqlValidationRequestBody} createSqlValidationRequestBody SQL语法校验
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSqlValidation(createSqlValidationRequest?: CreateSqlValidationRequest): Promise<CreateSqlValidationResponse> {
        const options = ParamCreater().createSqlValidation(createSqlValidationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建adhoc查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAdhocQuery(createAdhocQueryRequest?: CreateAdhocQueryRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/ad-hoc-queries",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createAdhocQueryRequest !== null && createAdhocQueryRequest !== undefined) {
                if (createAdhocQueryRequest instanceof CreateAdhocQueryRequest) {
                    workspaceId = createAdhocQueryRequest.workspaceId;
                    body = createAdhocQueryRequest.body
                } else {
                    workspaceId = createAdhocQueryRequest['workspace_id'];
                    body = createAdhocQueryRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createAdhocQuery.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlertRule(createAlertRuleRequest?: CreateAlertRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createAlertRuleRequest !== null && createAlertRuleRequest !== undefined) {
                if (createAlertRuleRequest instanceof CreateAlertRuleRequest) {
                    workspaceId = createAlertRuleRequest.workspaceId;
                    body = createAlertRuleRequest.body
                } else {
                    workspaceId = createAlertRuleRequest['workspace_id'];
                    body = createAlertRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createAlertRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建分析脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAnalysisScript(createAnalysisScriptRequest?: CreateAnalysisScriptRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/analysis-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createAnalysisScriptRequest !== null && createAnalysisScriptRequest !== undefined) {
                if (createAnalysisScriptRequest instanceof CreateAnalysisScriptRequest) {
                    workspaceId = createAnalysisScriptRequest.workspaceId;
                    body = createAnalysisScriptRequest.body
                } else {
                    workspaceId = createAnalysisScriptRequest['workspace_id'];
                    body = createAnalysisScriptRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createAnalysisScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建代码片段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCodeSegment(createCodeSegmentRequest?: CreateCodeSegmentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/code-segments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createCodeSegmentRequest !== null && createCodeSegmentRequest !== undefined) {
                if (createCodeSegmentRequest instanceof CreateCodeSegmentRequest) {
                    workspaceId = createCodeSegmentRequest.workspaceId;
                    body = createCodeSegmentRequest.body
                } else {
                    workspaceId = createCodeSegmentRequest['workspace_id'];
                    body = createCodeSegmentRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createCodeSegment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 保存云服务采集配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCollectConfig(createCollectConfigRequest?: CreateCollectConfigRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/collector/cloudlogs/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let regionId;

            if (createCollectConfigRequest !== null && createCollectConfigRequest !== undefined) {
                if (createCollectConfigRequest instanceof CreateCollectConfigRequest) {
                    body = createCollectConfigRequest.body
                    regionId = createCollectConfigRequest.regionId;
                } else {
                    body = createCollectConfigRequest['body'];
                    regionId = createCollectConfigRequest['region_id'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增自定义检查项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomizedCheckitem(createCustomizedCheckitemRequest?: CreateCustomizedCheckitemRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/checkitems",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let xLanguage;

            if (createCustomizedCheckitemRequest !== null && createCustomizedCheckitemRequest !== undefined) {
                if (createCustomizedCheckitemRequest instanceof CreateCustomizedCheckitemRequest) {
                    contentType = createCustomizedCheckitemRequest.contentType;
                    workspaceId = createCustomizedCheckitemRequest.workspaceId;
                    xLanguage = createCustomizedCheckitemRequest.xLanguage;
                    body = createCustomizedCheckitemRequest.body
                } else {
                    contentType = createCustomizedCheckitemRequest['content-type'];
                    workspaceId = createCustomizedCheckitemRequest['workspace_id'];
                    xLanguage = createCustomizedCheckitemRequest['X-Language'];
                    body = createCustomizedCheckitemRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createCustomizedCheckitem.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增自定义遵从包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCustomizedCompliancePackage(createCustomizedCompliancePackageRequest?: CreateCustomizedCompliancePackageRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/compliance-packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let contentType;
            
            let xLanguage;

            if (createCustomizedCompliancePackageRequest !== null && createCustomizedCompliancePackageRequest !== undefined) {
                if (createCustomizedCompliancePackageRequest instanceof CreateCustomizedCompliancePackageRequest) {
                    workspaceId = createCustomizedCompliancePackageRequest.workspaceId;
                    contentType = createCustomizedCompliancePackageRequest.contentType;
                    xLanguage = createCustomizedCompliancePackageRequest.xLanguage;
                    body = createCustomizedCompliancePackageRequest.body
                } else {
                    workspaceId = createCustomizedCompliancePackageRequest['workspace_id'];
                    contentType = createCustomizedCompliancePackageRequest['content-type'];
                    xLanguage = createCustomizedCompliancePackageRequest['X-Language'];
                    body = createCustomizedCompliancePackageRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createCustomizedCompliancePackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataTransformation(createDataTransformationRequest?: CreateDataTransformationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createDataTransformationRequest !== null && createDataTransformationRequest !== undefined) {
                if (createDataTransformationRequest instanceof CreateDataTransformationRequest) {
                    workspaceId = createDataTransformationRequest.workspaceId;
                    body = createDataTransformationRequest.body
                } else {
                    workspaceId = createDataTransformationRequest['workspace_id'];
                    body = createDataTransformationRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createDataTransformation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建布局字段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLayoutField(createLayoutFieldRequest?: CreateLayoutFieldRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/soc/layouts/fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;

            if (createLayoutFieldRequest !== null && createLayoutFieldRequest !== undefined) {
                if (createLayoutFieldRequest instanceof CreateLayoutFieldRequest) {
                    contentType = createLayoutFieldRequest.contentType;
                    workspaceId = createLayoutFieldRequest.workspaceId;
                    body = createLayoutFieldRequest.body
                } else {
                    contentType = createLayoutFieldRequest['content-type'];
                    workspaceId = createLayoutFieldRequest['workspace_id'];
                    body = createLayoutFieldRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createLayoutField.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建管道
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipe(createPipeRequest?: CreatePipeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/pipes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createPipeRequest !== null && createPipeRequest !== undefined) {
                if (createPipeRequest instanceof CreatePipeRequest) {
                    workspaceId = createPipeRequest.workspaceId;
                    body = createPipeRequest.body
                } else {
                    workspaceId = createPipeRequest['workspace_id'];
                    body = createPipeRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createPipe.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建检索脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRetrieveScript(createRetrieveScriptRequest?: CreateRetrieveScriptRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/retrieve-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createRetrieveScriptRequest !== null && createRetrieveScriptRequest !== undefined) {
                if (createRetrieveScriptRequest instanceof CreateRetrieveScriptRequest) {
                    workspaceId = createRetrieveScriptRequest.workspaceId;
                    body = createRetrieveScriptRequest.body
                } else {
                    workspaceId = createRetrieveScriptRequest['workspace_id'];
                    body = createRetrieveScriptRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createRetrieveScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Adhoc sql参数渲染
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlRender(createSqlRenderRequest?: CreateSqlRenderRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/ad-hoc-queries/sql-render",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createSqlRenderRequest !== null && createSqlRenderRequest !== undefined) {
                if (createSqlRenderRequest instanceof CreateSqlRenderRequest) {
                    workspaceId = createSqlRenderRequest.workspaceId;
                    body = createSqlRenderRequest.body
                } else {
                    workspaceId = createSqlRenderRequest['workspace_id'];
                    body = createSqlRenderRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createSqlRender.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTable(createTableRequest?: CreateTableRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createTableRequest !== null && createTableRequest !== undefined) {
                if (createTableRequest instanceof CreateTableRequest) {
                    workspaceId = createTableRequest.workspaceId;
                    body = createTableRequest.body
                } else {
                    workspaceId = createTableRequest['workspace_id'];
                    body = createTableRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建安全分析查询
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTableAnalysis(createTableAnalysisRequest?: CreateTableAnalysisRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/analysis",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (createTableAnalysisRequest !== null && createTableAnalysisRequest !== undefined) {
                if (createTableAnalysisRequest instanceof CreateTableAnalysisRequest) {
                    workspaceId = createTableAnalysisRequest.workspaceId;
                    tableId = createTableAnalysisRequest.tableId;
                    body = createTableAnalysisRequest.body
                } else {
                    workspaceId = createTableAnalysisRequest['workspace_id'];
                    tableId = createTableAnalysisRequest['table_id'];
                    body = createTableAnalysisRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createTableAnalysis.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling createTableAnalysis.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭查询操作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAdhocQuery(deleteAdhocQueryRequest?: DeleteAdhocQueryRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/ad-hoc-queries/{query_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let queryId;

            if (deleteAdhocQueryRequest !== null && deleteAdhocQueryRequest !== undefined) {
                if (deleteAdhocQueryRequest instanceof DeleteAdhocQueryRequest) {
                    workspaceId = deleteAdhocQueryRequest.workspaceId;
                    queryId = deleteAdhocQueryRequest.queryId;
                } else {
                    workspaceId = deleteAdhocQueryRequest['workspace_id'];
                    queryId = deleteAdhocQueryRequest['query_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteAdhocQuery.');
            }
            if (queryId === null || queryId === undefined) {
            throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling deleteAdhocQuery.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'query_id': queryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlertRule(deleteAlertRuleRequest?: DeleteAlertRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{alert_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let alertRuleId;

            if (deleteAlertRuleRequest !== null && deleteAlertRuleRequest !== undefined) {
                if (deleteAlertRuleRequest instanceof DeleteAlertRuleRequest) {
                    workspaceId = deleteAlertRuleRequest.workspaceId;
                    alertRuleId = deleteAlertRuleRequest.alertRuleId;
                } else {
                    workspaceId = deleteAlertRuleRequest['workspace_id'];
                    alertRuleId = deleteAlertRuleRequest['alert_rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteAlertRule.');
            }
            if (alertRuleId === null || alertRuleId === undefined) {
            throw new RequiredError('alertRuleId','Required parameter alertRuleId was null or undefined when calling deleteAlertRule.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'alert_rule_id': alertRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除分析脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAnalysisScript(deleteAnalysisScriptRequest?: DeleteAnalysisScriptRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/analysis-scripts/{analysis_script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let analysisScriptId;

            if (deleteAnalysisScriptRequest !== null && deleteAnalysisScriptRequest !== undefined) {
                if (deleteAnalysisScriptRequest instanceof DeleteAnalysisScriptRequest) {
                    workspaceId = deleteAnalysisScriptRequest.workspaceId;
                    analysisScriptId = deleteAnalysisScriptRequest.analysisScriptId;
                } else {
                    workspaceId = deleteAnalysisScriptRequest['workspace_id'];
                    analysisScriptId = deleteAnalysisScriptRequest['analysis_script_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteAnalysisScript.');
            }
            if (analysisScriptId === null || analysisScriptId === undefined) {
            throw new RequiredError('analysisScriptId','Required parameter analysisScriptId was null or undefined when calling deleteAnalysisScript.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'analysis_script_id': analysisScriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除代码片段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCodeSegment(deleteCodeSegmentRequest?: DeleteCodeSegmentRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/code-segments/{code_segment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let codeSegmentId;

            if (deleteCodeSegmentRequest !== null && deleteCodeSegmentRequest !== undefined) {
                if (deleteCodeSegmentRequest instanceof DeleteCodeSegmentRequest) {
                    workspaceId = deleteCodeSegmentRequest.workspaceId;
                    codeSegmentId = deleteCodeSegmentRequest.codeSegmentId;
                } else {
                    workspaceId = deleteCodeSegmentRequest['workspace_id'];
                    codeSegmentId = deleteCodeSegmentRequest['code_segment_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteCodeSegment.');
            }
            if (codeSegmentId === null || codeSegmentId === undefined) {
            throw new RequiredError('codeSegmentId','Required parameter codeSegmentId was null or undefined when calling deleteCodeSegment.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'code_segment_id': codeSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义检查项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomizedCheckitems(deleteCustomizedCheckitemsRequest?: DeleteCustomizedCheckitemsRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/checkitems",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let xLanguage;

            if (deleteCustomizedCheckitemsRequest !== null && deleteCustomizedCheckitemsRequest !== undefined) {
                if (deleteCustomizedCheckitemsRequest instanceof DeleteCustomizedCheckitemsRequest) {
                    contentType = deleteCustomizedCheckitemsRequest.contentType;
                    workspaceId = deleteCustomizedCheckitemsRequest.workspaceId;
                    xLanguage = deleteCustomizedCheckitemsRequest.xLanguage;
                    body = deleteCustomizedCheckitemsRequest.body
                } else {
                    contentType = deleteCustomizedCheckitemsRequest['content-type'];
                    workspaceId = deleteCustomizedCheckitemsRequest['workspace_id'];
                    xLanguage = deleteCustomizedCheckitemsRequest['X-Language'];
                    body = deleteCustomizedCheckitemsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteCustomizedCheckitems.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除自定义遵从包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCustomizedCompliancePackages(deleteCustomizedCompliancePackagesRequest?: DeleteCustomizedCompliancePackagesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/compliance-packages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let contentType;
            
            let xLanguage;

            if (deleteCustomizedCompliancePackagesRequest !== null && deleteCustomizedCompliancePackagesRequest !== undefined) {
                if (deleteCustomizedCompliancePackagesRequest instanceof DeleteCustomizedCompliancePackagesRequest) {
                    workspaceId = deleteCustomizedCompliancePackagesRequest.workspaceId;
                    contentType = deleteCustomizedCompliancePackagesRequest.contentType;
                    xLanguage = deleteCustomizedCompliancePackagesRequest.xLanguage;
                    body = deleteCustomizedCompliancePackagesRequest.body
                } else {
                    workspaceId = deleteCustomizedCompliancePackagesRequest['workspace_id'];
                    contentType = deleteCustomizedCompliancePackagesRequest['content-type'];
                    xLanguage = deleteCustomizedCompliancePackagesRequest['X-Language'];
                    body = deleteCustomizedCompliancePackagesRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteCustomizedCompliancePackages.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDataTransformation(deleteDataTransformationRequest?: DeleteDataTransformationRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations/{data_transformation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let dataTransformationId;

            if (deleteDataTransformationRequest !== null && deleteDataTransformationRequest !== undefined) {
                if (deleteDataTransformationRequest instanceof DeleteDataTransformationRequest) {
                    workspaceId = deleteDataTransformationRequest.workspaceId;
                    dataTransformationId = deleteDataTransformationRequest.dataTransformationId;
                } else {
                    workspaceId = deleteDataTransformationRequest['workspace_id'];
                    dataTransformationId = deleteDataTransformationRequest['data_transformation_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteDataTransformation.');
            }
            if (dataTransformationId === null || dataTransformationId === undefined) {
            throw new RequiredError('dataTransformationId','Required parameter dataTransformationId was null or undefined when calling deleteDataTransformation.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'data_transformation_id': dataTransformationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除布局字段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLayoutField(deleteLayoutFieldRequest?: DeleteLayoutFieldRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/soc/layouts/fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;

            if (deleteLayoutFieldRequest !== null && deleteLayoutFieldRequest !== undefined) {
                if (deleteLayoutFieldRequest instanceof DeleteLayoutFieldRequest) {
                    contentType = deleteLayoutFieldRequest.contentType;
                    workspaceId = deleteLayoutFieldRequest.workspaceId;
                    body = deleteLayoutFieldRequest.body
                } else {
                    contentType = deleteLayoutFieldRequest['content-type'];
                    workspaceId = deleteLayoutFieldRequest['workspace_id'];
                    body = deleteLayoutFieldRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteLayoutField.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除管道
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePipe(deletePipeRequest?: DeletePipeRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/pipes/{pipe_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let pipeId;

            if (deletePipeRequest !== null && deletePipeRequest !== undefined) {
                if (deletePipeRequest instanceof DeletePipeRequest) {
                    workspaceId = deletePipeRequest.workspaceId;
                    pipeId = deletePipeRequest.pipeId;
                } else {
                    workspaceId = deletePipeRequest['workspace_id'];
                    pipeId = deletePipeRequest['pipe_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deletePipe.');
            }
            if (pipeId === null || pipeId === undefined) {
            throw new RequiredError('pipeId','Required parameter pipeId was null or undefined when calling deletePipe.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'pipe_id': pipeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除检索脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRetrieveScript(deleteRetrieveScriptRequest?: DeleteRetrieveScriptRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/retrieve-scripts/{retrieve_script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let retrieveScriptId;

            if (deleteRetrieveScriptRequest !== null && deleteRetrieveScriptRequest !== undefined) {
                if (deleteRetrieveScriptRequest instanceof DeleteRetrieveScriptRequest) {
                    workspaceId = deleteRetrieveScriptRequest.workspaceId;
                    retrieveScriptId = deleteRetrieveScriptRequest.retrieveScriptId;
                } else {
                    workspaceId = deleteRetrieveScriptRequest['workspace_id'];
                    retrieveScriptId = deleteRetrieveScriptRequest['retrieve_script_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteRetrieveScript.');
            }
            if (retrieveScriptId === null || retrieveScriptId === undefined) {
            throw new RequiredError('retrieveScriptId','Required parameter retrieveScriptId was null or undefined when calling deleteRetrieveScript.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'retrieve_script_id': retrieveScriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTable(deleteTableRequest?: DeleteTableRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let tableId;

            if (deleteTableRequest !== null && deleteTableRequest !== undefined) {
                if (deleteTableRequest instanceof DeleteTableRequest) {
                    workspaceId = deleteTableRequest.workspaceId;
                    tableId = deleteTableRequest.tableId;
                } else {
                    workspaceId = deleteTableRequest['workspace_id'];
                    tableId = deleteTableRequest['table_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteTable.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling deleteTable.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableAlertRule(disableAlertRuleRequest?: DisableAlertRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{alert_rule_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let alertRuleId;

            if (disableAlertRuleRequest !== null && disableAlertRuleRequest !== undefined) {
                if (disableAlertRuleRequest instanceof DisableAlertRuleRequest) {
                    workspaceId = disableAlertRuleRequest.workspaceId;
                    alertRuleId = disableAlertRuleRequest.alertRuleId;
                } else {
                    workspaceId = disableAlertRuleRequest['workspace_id'];
                    alertRuleId = disableAlertRuleRequest['alert_rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling disableAlertRule.');
            }
            if (alertRuleId === null || alertRuleId === undefined) {
            throw new RequiredError('alertRuleId','Required parameter alertRuleId was null or undefined when calling disableAlertRule.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'alert_rule_id': alertRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭实时消费
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableDataConsumption(disableDataConsumptionRequest?: DisableDataConsumptionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/consumption",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (disableDataConsumptionRequest !== null && disableDataConsumptionRequest !== undefined) {
                if (disableDataConsumptionRequest instanceof DisableDataConsumptionRequest) {
                    workspaceId = disableDataConsumptionRequest.workspaceId;
                    tableId = disableDataConsumptionRequest.tableId;
                    body = disableDataConsumptionRequest.body
                } else {
                    workspaceId = disableDataConsumptionRequest['workspace_id'];
                    tableId = disableDataConsumptionRequest['table_id'];
                    body = disableDataConsumptionRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling disableDataConsumption.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling disableDataConsumption.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停用数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableDataTransformation(disableDataTransformationRequest?: DisableDataTransformationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations/{data_transformation_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let dataTransformationId;

            if (disableDataTransformationRequest !== null && disableDataTransformationRequest !== undefined) {
                if (disableDataTransformationRequest instanceof DisableDataTransformationRequest) {
                    workspaceId = disableDataTransformationRequest.workspaceId;
                    dataTransformationId = disableDataTransformationRequest.dataTransformationId;
                } else {
                    workspaceId = disableDataTransformationRequest['workspace_id'];
                    dataTransformationId = disableDataTransformationRequest['data_transformation_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling disableDataTransformation.');
            }
            if (dataTransformationId === null || dataTransformationId === undefined) {
            throw new RequiredError('dataTransformationId','Required parameter dataTransformationId was null or undefined when calling disableDataTransformation.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'data_transformation_id': dataTransformationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableAlertRule(enableAlertRuleRequest?: EnableAlertRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{alert_rule_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let alertRuleId;

            if (enableAlertRuleRequest !== null && enableAlertRuleRequest !== undefined) {
                if (enableAlertRuleRequest instanceof EnableAlertRuleRequest) {
                    workspaceId = enableAlertRuleRequest.workspaceId;
                    alertRuleId = enableAlertRuleRequest.alertRuleId;
                } else {
                    workspaceId = enableAlertRuleRequest['workspace_id'];
                    alertRuleId = enableAlertRuleRequest['alert_rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling enableAlertRule.');
            }
            if (alertRuleId === null || alertRuleId === undefined) {
            throw new RequiredError('alertRuleId','Required parameter alertRuleId was null or undefined when calling enableAlertRule.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'alert_rule_id': alertRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启实时消费
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDataConsumption(enableDataConsumptionRequest?: EnableDataConsumptionRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/consumption",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let tableId;

            if (enableDataConsumptionRequest !== null && enableDataConsumptionRequest !== undefined) {
                if (enableDataConsumptionRequest instanceof EnableDataConsumptionRequest) {
                    workspaceId = enableDataConsumptionRequest.workspaceId;
                    tableId = enableDataConsumptionRequest.tableId;
                } else {
                    workspaceId = enableDataConsumptionRequest['workspace_id'];
                    tableId = enableDataConsumptionRequest['table_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling enableDataConsumption.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling enableDataConsumption.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableDataTransformation(enableDataTransformationRequest?: EnableDataTransformationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations/{data_transformation_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let dataTransformationId;

            if (enableDataTransformationRequest !== null && enableDataTransformationRequest !== undefined) {
                if (enableDataTransformationRequest instanceof EnableDataTransformationRequest) {
                    workspaceId = enableDataTransformationRequest.workspaceId;
                    dataTransformationId = enableDataTransformationRequest.dataTransformationId;
                } else {
                    workspaceId = enableDataTransformationRequest['workspace_id'];
                    dataTransformationId = enableDataTransformationRequest['data_transformation_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling enableDataTransformation.');
            }
            if (dataTransformationId === null || dataTransformationId === undefined) {
            throw new RequiredError('dataTransformationId','Required parameter dataTransformationId was null or undefined when calling enableDataTransformation.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'data_transformation_id': dataTransformationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 告警规则总览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRuleMetrics(listAlertRuleMetricsRequest?: ListAlertRuleMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;

            if (listAlertRuleMetricsRequest !== null && listAlertRuleMetricsRequest !== undefined) {
                if (listAlertRuleMetricsRequest instanceof ListAlertRuleMetricsRequest) {
                    workspaceId = listAlertRuleMetricsRequest.workspaceId;
                } else {
                    workspaceId = listAlertRuleMetricsRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlertRuleMetrics.');
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出告警规则模板总览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRuleTemplateMetrics(listAlertRuleTemplateMetricsRequest?: ListAlertRuleTemplateMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/templates/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;

            if (listAlertRuleTemplateMetricsRequest !== null && listAlertRuleTemplateMetricsRequest !== undefined) {
                if (listAlertRuleTemplateMetricsRequest instanceof ListAlertRuleTemplateMetricsRequest) {
                    workspaceId = listAlertRuleTemplateMetricsRequest.workspaceId;
                } else {
                    workspaceId = listAlertRuleTemplateMetricsRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlertRuleTemplateMetrics.');
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出告警规则模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRuleTemplates(listAlertRuleTemplatesRequest?: ListAlertRuleTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let templateName;
            
            let status;
            
            let severity;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listAlertRuleTemplatesRequest !== null && listAlertRuleTemplatesRequest !== undefined) {
                if (listAlertRuleTemplatesRequest instanceof ListAlertRuleTemplatesRequest) {
                    workspaceId = listAlertRuleTemplatesRequest.workspaceId;
                    templateName = listAlertRuleTemplatesRequest.templateName;
                    status = listAlertRuleTemplatesRequest.status;
                    severity = listAlertRuleTemplatesRequest.severity;
                    offset = listAlertRuleTemplatesRequest.offset;
                    limit = listAlertRuleTemplatesRequest.limit;
                    sortKey = listAlertRuleTemplatesRequest.sortKey;
                    sortDir = listAlertRuleTemplatesRequest.sortDir;
                } else {
                    workspaceId = listAlertRuleTemplatesRequest['workspace_id'];
                    templateName = listAlertRuleTemplatesRequest['template_name'];
                    status = listAlertRuleTemplatesRequest['status'];
                    severity = listAlertRuleTemplatesRequest['severity'];
                    offset = listAlertRuleTemplatesRequest['offset'];
                    limit = listAlertRuleTemplatesRequest['limit'];
                    sortKey = listAlertRuleTemplatesRequest['sort_key'];
                    sortDir = listAlertRuleTemplatesRequest['sort_dir'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlertRuleTemplates.');
            }
            if (templateName !== null && templateName !== undefined) {
                localVarQueryParameter['template_name'] = templateName;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRules(listAlertRulesRequest?: ListAlertRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;
            
            let outputTableId;
            
            let alertRuleName;
            
            let alertRuleId;

            if (listAlertRulesRequest !== null && listAlertRulesRequest !== undefined) {
                if (listAlertRulesRequest instanceof ListAlertRulesRequest) {
                    workspaceId = listAlertRulesRequest.workspaceId;
                    offset = listAlertRulesRequest.offset;
                    limit = listAlertRulesRequest.limit;
                    sortKey = listAlertRulesRequest.sortKey;
                    sortDir = listAlertRulesRequest.sortDir;
                    outputTableId = listAlertRulesRequest.outputTableId;
                    alertRuleName = listAlertRulesRequest.alertRuleName;
                    alertRuleId = listAlertRulesRequest.alertRuleId;
                } else {
                    workspaceId = listAlertRulesRequest['workspace_id'];
                    offset = listAlertRulesRequest['offset'];
                    limit = listAlertRulesRequest['limit'];
                    sortKey = listAlertRulesRequest['sort_key'];
                    sortDir = listAlertRulesRequest['sort_dir'];
                    outputTableId = listAlertRulesRequest['output_table_id'];
                    alertRuleName = listAlertRulesRequest['alert_rule_name'];
                    alertRuleId = listAlertRulesRequest['alert_rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlertRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (outputTableId !== null && outputTableId !== undefined) {
                localVarQueryParameter['output_table_id'] = outputTableId;
            }
            if (alertRuleName !== null && alertRuleName !== undefined) {
                localVarQueryParameter['alert_rule_name'] = alertRuleName;
            }
            if (alertRuleId !== null && alertRuleId !== undefined) {
                localVarQueryParameter['alert_rule_id'] = alertRuleId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出分析脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAnalysisScripts(listAnalysisScriptsRequest?: ListAnalysisScriptsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/analysis-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listAnalysisScriptsRequest !== null && listAnalysisScriptsRequest !== undefined) {
                if (listAnalysisScriptsRequest instanceof ListAnalysisScriptsRequest) {
                    workspaceId = listAnalysisScriptsRequest.workspaceId;
                    offset = listAnalysisScriptsRequest.offset;
                    limit = listAnalysisScriptsRequest.limit;
                    sortKey = listAnalysisScriptsRequest.sortKey;
                    sortDir = listAnalysisScriptsRequest.sortDir;
                } else {
                    workspaceId = listAnalysisScriptsRequest['workspace_id'];
                    offset = listAnalysisScriptsRequest['offset'];
                    limit = listAnalysisScriptsRequest['limit'];
                    sortKey = listAnalysisScriptsRequest['sort_key'];
                    sortDir = listAnalysisScriptsRequest['sort_dir'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAnalysisScripts.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出代码片段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCodeSegments(listCodeSegmentsRequest?: ListCodeSegmentsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/code-segments",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let codeSegmentId;
            
            let codeSegmentName;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listCodeSegmentsRequest !== null && listCodeSegmentsRequest !== undefined) {
                if (listCodeSegmentsRequest instanceof ListCodeSegmentsRequest) {
                    workspaceId = listCodeSegmentsRequest.workspaceId;
                    codeSegmentId = listCodeSegmentsRequest.codeSegmentId;
                    codeSegmentName = listCodeSegmentsRequest.codeSegmentName;
                    offset = listCodeSegmentsRequest.offset;
                    limit = listCodeSegmentsRequest.limit;
                    sortKey = listCodeSegmentsRequest.sortKey;
                    sortDir = listCodeSegmentsRequest.sortDir;
                } else {
                    workspaceId = listCodeSegmentsRequest['workspace_id'];
                    codeSegmentId = listCodeSegmentsRequest['code_segment_id'];
                    codeSegmentName = listCodeSegmentsRequest['code_segment_name'];
                    offset = listCodeSegmentsRequest['offset'];
                    limit = listCodeSegmentsRequest['limit'];
                    sortKey = listCodeSegmentsRequest['sort_key'];
                    sortDir = listCodeSegmentsRequest['sort_dir'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listCodeSegments.');
            }
            if (codeSegmentId !== null && codeSegmentId !== undefined) {
                localVarQueryParameter['code_segment_id'] = codeSegmentId;
            }
            if (codeSegmentName !== null && codeSegmentName !== undefined) {
                localVarQueryParameter['code_segment_name'] = codeSegmentName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取云服务采集配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCollectConfig(listCollectConfigRequest?: ListCollectConfigRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/collector/cloudlogs/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionId;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;
            
            let csvc;
            
            let domainId;
            
            let queryStatistics;

            if (listCollectConfigRequest !== null && listCollectConfigRequest !== undefined) {
                if (listCollectConfigRequest instanceof ListCollectConfigRequest) {
                    regionId = listCollectConfigRequest.regionId;
                    offset = listCollectConfigRequest.offset;
                    limit = listCollectConfigRequest.limit;
                    sortKey = listCollectConfigRequest.sortKey;
                    sortDir = listCollectConfigRequest.sortDir;
                    csvc = listCollectConfigRequest.csvc;
                    domainId = listCollectConfigRequest.domainId;
                    queryStatistics = listCollectConfigRequest.queryStatistics;
                } else {
                    regionId = listCollectConfigRequest['region_id'];
                    offset = listCollectConfigRequest['offset'];
                    limit = listCollectConfigRequest['limit'];
                    sortKey = listCollectConfigRequest['sort_key'];
                    sortDir = listCollectConfigRequest['sort_dir'];
                    csvc = listCollectConfigRequest['csvc'];
                    domainId = listCollectConfigRequest['domain_id'];
                    queryStatistics = listCollectConfigRequest['query_statistics'];
                }
            }

        
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (csvc !== null && csvc !== undefined) {
                localVarQueryParameter['csvc'] = csvc;
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (queryStatistics !== null && queryStatistics !== undefined) {
                localVarQueryParameter['query_statistics'] = queryStatistics;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 数据加工总览
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataTransformationMetrics(listDataTransformationMetricsRequest?: ListDataTransformationMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;

            if (listDataTransformationMetricsRequest !== null && listDataTransformationMetricsRequest !== undefined) {
                if (listDataTransformationMetricsRequest instanceof ListDataTransformationMetricsRequest) {
                    workspaceId = listDataTransformationMetricsRequest.workspaceId;
                } else {
                    workspaceId = listDataTransformationMetricsRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listDataTransformationMetrics.');
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataTransformations(listDataTransformationsRequest?: ListDataTransformationsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let outputTableId;
            
            let dataTransformationName;
            
            let dataTransformationId;
            
            let sortKey;
            
            let sortDir;

            if (listDataTransformationsRequest !== null && listDataTransformationsRequest !== undefined) {
                if (listDataTransformationsRequest instanceof ListDataTransformationsRequest) {
                    workspaceId = listDataTransformationsRequest.workspaceId;
                    offset = listDataTransformationsRequest.offset;
                    limit = listDataTransformationsRequest.limit;
                    outputTableId = listDataTransformationsRequest.outputTableId;
                    dataTransformationName = listDataTransformationsRequest.dataTransformationName;
                    dataTransformationId = listDataTransformationsRequest.dataTransformationId;
                    sortKey = listDataTransformationsRequest.sortKey;
                    sortDir = listDataTransformationsRequest.sortDir;
                } else {
                    workspaceId = listDataTransformationsRequest['workspace_id'];
                    offset = listDataTransformationsRequest['offset'];
                    limit = listDataTransformationsRequest['limit'];
                    outputTableId = listDataTransformationsRequest['output_table_id'];
                    dataTransformationName = listDataTransformationsRequest['data_transformation_name'];
                    dataTransformationId = listDataTransformationsRequest['data_transformation_id'];
                    sortKey = listDataTransformationsRequest['sort_key'];
                    sortDir = listDataTransformationsRequest['sort_dir'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listDataTransformations.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (outputTableId !== null && outputTableId !== undefined) {
                localVarQueryParameter['output_table_id'] = outputTableId;
            }
            if (dataTransformationName !== null && dataTransformationName !== undefined) {
                localVarQueryParameter['data_transformation_name'] = dataTransformationName;
            }
            if (dataTransformationId !== null && dataTransformationId !== undefined) {
                localVarQueryParameter['data_transformation_id'] = dataTransformationId;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出目录分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDirectories(listDirectoriesRequest?: ListDirectoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/directories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let category;

            if (listDirectoriesRequest !== null && listDirectoriesRequest !== undefined) {
                if (listDirectoriesRequest instanceof ListDirectoriesRequest) {
                    workspaceId = listDirectoriesRequest.workspaceId;
                    category = listDirectoriesRequest.category;
                } else {
                    workspaceId = listDirectoriesRequest['workspace_id'];
                    category = listDirectoriesRequest['category'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listDirectories.');
            }
            if (category === null || category === undefined) {
                throw new RequiredError('category','Required parameter category was null or undefined when calling listDirectories.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询布局字段列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLayoutFieldAll(listLayoutFieldAllRequest?: ListLayoutFieldAllRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/soc/layouts/fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let name;
            
            let isBuiltIn;
            
            let businessCode;
            
            let layoutId;

            if (listLayoutFieldAllRequest !== null && listLayoutFieldAllRequest !== undefined) {
                if (listLayoutFieldAllRequest instanceof ListLayoutFieldAllRequest) {
                    contentType = listLayoutFieldAllRequest.contentType;
                    workspaceId = listLayoutFieldAllRequest.workspaceId;
                    name = listLayoutFieldAllRequest.name;
                    isBuiltIn = listLayoutFieldAllRequest.isBuiltIn;
                    businessCode = listLayoutFieldAllRequest.businessCode;
                    layoutId = listLayoutFieldAllRequest.layoutId;
                } else {
                    contentType = listLayoutFieldAllRequest['content-type'];
                    workspaceId = listLayoutFieldAllRequest['workspace_id'];
                    name = listLayoutFieldAllRequest['name'];
                    isBuiltIn = listLayoutFieldAllRequest['is_built_in'];
                    businessCode = listLayoutFieldAllRequest['business_code'];
                    layoutId = listLayoutFieldAllRequest['layout_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listLayoutFieldAll.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (isBuiltIn !== null && isBuiltIn !== undefined) {
                localVarQueryParameter['is_built_in'] = isBuiltIn;
            }
            if (businessCode !== null && businessCode !== undefined) {
                localVarQueryParameter['business_code'] = businessCode;
            }
            if (layoutId !== null && layoutId !== undefined) {
                localVarQueryParameter['layout_id'] = layoutId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取管道列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPipes(listPipesRequest?: ListPipesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/pipes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;
            
            let pipeNameInQuery;
            
            let pipeIdInQuery;

            if (listPipesRequest !== null && listPipesRequest !== undefined) {
                if (listPipesRequest instanceof ListPipesRequest) {
                    workspaceId = listPipesRequest.workspaceId;
                    offset = listPipesRequest.offset;
                    limit = listPipesRequest.limit;
                    sortKey = listPipesRequest.sortKey;
                    sortDir = listPipesRequest.sortDir;
                    pipeNameInQuery = listPipesRequest.pipeNameInQuery;
                    pipeIdInQuery = listPipesRequest.pipeIdInQuery;
                } else {
                    workspaceId = listPipesRequest['workspace_id'];
                    offset = listPipesRequest['offset'];
                    limit = listPipesRequest['limit'];
                    sortKey = listPipesRequest['sort_key'];
                    sortDir = listPipesRequest['sort_dir'];
                    pipeNameInQuery = listPipesRequest['pipe_name_in_query'];
                    pipeIdInQuery = listPipesRequest['pipe_id_in_query'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPipes.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (pipeNameInQuery !== null && pipeNameInQuery !== undefined) {
                localVarQueryParameter['pipe_name_in_query'] = pipeNameInQuery;
            }
            if (pipeIdInQuery !== null && pipeIdInQuery !== undefined) {
                localVarQueryParameter['pipe_id_in_query'] = pipeIdInQuery;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 列出检索脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRetrieveScripts(listRetrieveScriptsRequest?: ListRetrieveScriptsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/retrieve-scripts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let tableId;
            
            let offset;
            
            let scriptName;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listRetrieveScriptsRequest !== null && listRetrieveScriptsRequest !== undefined) {
                if (listRetrieveScriptsRequest instanceof ListRetrieveScriptsRequest) {
                    workspaceId = listRetrieveScriptsRequest.workspaceId;
                    tableId = listRetrieveScriptsRequest.tableId;
                    offset = listRetrieveScriptsRequest.offset;
                    scriptName = listRetrieveScriptsRequest.scriptName;
                    limit = listRetrieveScriptsRequest.limit;
                    sortKey = listRetrieveScriptsRequest.sortKey;
                    sortDir = listRetrieveScriptsRequest.sortDir;
                } else {
                    workspaceId = listRetrieveScriptsRequest['workspace_id'];
                    tableId = listRetrieveScriptsRequest['table_id'];
                    offset = listRetrieveScriptsRequest['offset'];
                    scriptName = listRetrieveScriptsRequest['script_name'];
                    limit = listRetrieveScriptsRequest['limit'];
                    sortKey = listRetrieveScriptsRequest['sort_key'];
                    sortDir = listRetrieveScriptsRequest['sort_dir'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listRetrieveScripts.');
            }
            if (tableId !== null && tableId !== undefined) {
                localVarQueryParameter['table_id'] = tableId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (scriptName !== null && scriptName !== undefined) {
                localVarQueryParameter['script_name'] = scriptName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索表直方图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTableHistograms(listTableHistogramsRequest?: ListTableHistogramsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/histograms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (listTableHistogramsRequest !== null && listTableHistogramsRequest !== undefined) {
                if (listTableHistogramsRequest instanceof ListTableHistogramsRequest) {
                    workspaceId = listTableHistogramsRequest.workspaceId;
                    tableId = listTableHistogramsRequest.tableId;
                    body = listTableHistogramsRequest.body
                } else {
                    workspaceId = listTableHistogramsRequest['workspace_id'];
                    tableId = listTableHistogramsRequest['table_id'];
                    body = listTableHistogramsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listTableHistograms.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling listTableHistograms.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检索表日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTableLogs(listTableLogsRequest?: ListTableLogsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/logs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (listTableLogsRequest !== null && listTableLogsRequest !== undefined) {
                if (listTableLogsRequest instanceof ListTableLogsRequest) {
                    workspaceId = listTableLogsRequest.workspaceId;
                    tableId = listTableLogsRequest.tableId;
                    body = listTableLogsRequest.body
                } else {
                    workspaceId = listTableLogsRequest['workspace_id'];
                    tableId = listTableLogsRequest['table_id'];
                    body = listTableLogsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listTableLogs.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling listTableLogs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取表列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTables(listTablesRequest?: ListTablesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let category;
            
            let tableId;
            
            let tableAlias;
            
            let tableName;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;
            
            let exists;

            if (listTablesRequest !== null && listTablesRequest !== undefined) {
                if (listTablesRequest instanceof ListTablesRequest) {
                    workspaceId = listTablesRequest.workspaceId;
                    category = listTablesRequest.category;
                    tableId = listTablesRequest.tableId;
                    tableAlias = listTablesRequest.tableAlias;
                    tableName = listTablesRequest.tableName;
                    offset = listTablesRequest.offset;
                    limit = listTablesRequest.limit;
                    sortKey = listTablesRequest.sortKey;
                    sortDir = listTablesRequest.sortDir;
                    exists = listTablesRequest.exists;
                } else {
                    workspaceId = listTablesRequest['workspace_id'];
                    category = listTablesRequest['category'];
                    tableId = listTablesRequest['table_id'];
                    tableAlias = listTablesRequest['table_alias'];
                    tableName = listTablesRequest['table_name'];
                    offset = listTablesRequest['offset'];
                    limit = listTablesRequest['limit'];
                    sortKey = listTablesRequest['sort_key'];
                    sortDir = listTablesRequest['sort_dir'];
                    exists = listTablesRequest['exists'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listTables.');
            }
            if (category !== null && category !== undefined) {
                localVarQueryParameter['category'] = category;
            }
            if (tableId !== null && tableId !== undefined) {
                localVarQueryParameter['table_id'] = tableId;
            }
            if (tableAlias !== null && tableAlias !== undefined) {
                localVarQueryParameter['table_alias'] = tableAlias;
            }
            if (tableName !== null && tableName !== undefined) {
                localVarQueryParameter['table_name'] = tableName;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (exists !== null && exists !== undefined) {
                localVarQueryParameter['exists'] = exists;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 搜索基线检查结果列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchBaseline(searchBaselineRequest?: SearchBaselineRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let xLanguage;

            if (searchBaselineRequest !== null && searchBaselineRequest !== undefined) {
                if (searchBaselineRequest instanceof SearchBaselineRequest) {
                    contentType = searchBaselineRequest.contentType;
                    workspaceId = searchBaselineRequest.workspaceId;
                    xLanguage = searchBaselineRequest.xLanguage;
                    body = searchBaselineRequest.body
                } else {
                    contentType = searchBaselineRequest['content-type'];
                    workspaceId = searchBaselineRequest['workspace_id'];
                    xLanguage = searchBaselineRequest['X-Language'];
                    body = searchBaselineRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling searchBaseline.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询检查项列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCheckitems(searchCheckitemsRequest?: SearchCheckitemsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/checkitems/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let xLanguage;

            if (searchCheckitemsRequest !== null && searchCheckitemsRequest !== undefined) {
                if (searchCheckitemsRequest instanceof SearchCheckitemsRequest) {
                    contentType = searchCheckitemsRequest.contentType;
                    workspaceId = searchCheckitemsRequest.workspaceId;
                    xLanguage = searchCheckitemsRequest.xLanguage;
                    body = searchCheckitemsRequest.body
                } else {
                    contentType = searchCheckitemsRequest['content-type'];
                    workspaceId = searchCheckitemsRequest['workspace_id'];
                    xLanguage = searchCheckitemsRequest['X-Language'];
                    body = searchCheckitemsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling searchCheckitems.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询遵从包列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchCompliancePackages(searchCompliancePackagesRequest?: SearchCompliancePackagesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/compliance-packages/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let contentType;
            
            let xLanguage;

            if (searchCompliancePackagesRequest !== null && searchCompliancePackagesRequest !== undefined) {
                if (searchCompliancePackagesRequest instanceof SearchCompliancePackagesRequest) {
                    workspaceId = searchCompliancePackagesRequest.workspaceId;
                    contentType = searchCompliancePackagesRequest.contentType;
                    xLanguage = searchCompliancePackagesRequest.xLanguage;
                    body = searchCompliancePackagesRequest.body
                } else {
                    workspaceId = searchCompliancePackagesRequest['workspace_id'];
                    contentType = searchCompliancePackagesRequest['content-type'];
                    xLanguage = searchCompliancePackagesRequest['X-Language'];
                    body = searchCompliancePackagesRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling searchCompliancePackages.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取adhoc查询结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAdhocResult(showAdhocResultRequest?: ShowAdhocResultRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/ad-hoc-queries/{query_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let queryId;
            
            let batch;

            if (showAdhocResultRequest !== null && showAdhocResultRequest !== undefined) {
                if (showAdhocResultRequest instanceof ShowAdhocResultRequest) {
                    workspaceId = showAdhocResultRequest.workspaceId;
                    queryId = showAdhocResultRequest.queryId;
                    batch = showAdhocResultRequest.batch;
                } else {
                    workspaceId = showAdhocResultRequest['workspace_id'];
                    queryId = showAdhocResultRequest['query_id'];
                    batch = showAdhocResultRequest['batch'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showAdhocResult.');
            }
            if (queryId === null || queryId === undefined) {
            throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling showAdhocResult.');
            }
            if (batch === null || batch === undefined) {
                throw new RequiredError('batch','Required parameter batch was null or undefined when calling showAdhocResult.');
            }
            if (batch !== null && batch !== undefined) {
                localVarQueryParameter['batch'] = batch;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId,'query_id': queryId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlertRule(showAlertRuleRequest?: ShowAlertRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{alert_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let alertRuleId;

            if (showAlertRuleRequest !== null && showAlertRuleRequest !== undefined) {
                if (showAlertRuleRequest instanceof ShowAlertRuleRequest) {
                    workspaceId = showAlertRuleRequest.workspaceId;
                    alertRuleId = showAlertRuleRequest.alertRuleId;
                } else {
                    workspaceId = showAlertRuleRequest['workspace_id'];
                    alertRuleId = showAlertRuleRequest['alert_rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showAlertRule.');
            }
            if (alertRuleId === null || alertRuleId === undefined) {
            throw new RequiredError('alertRuleId','Required parameter alertRuleId was null or undefined when calling showAlertRule.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'alert_rule_id': alertRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看告警规则模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlertRuleTemplate(showAlertRuleTemplateRequest?: ShowAlertRuleTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let templateId;

            if (showAlertRuleTemplateRequest !== null && showAlertRuleTemplateRequest !== undefined) {
                if (showAlertRuleTemplateRequest instanceof ShowAlertRuleTemplateRequest) {
                    workspaceId = showAlertRuleTemplateRequest.workspaceId;
                    templateId = showAlertRuleTemplateRequest.templateId;
                } else {
                    workspaceId = showAlertRuleTemplateRequest['workspace_id'];
                    templateId = showAlertRuleTemplateRequest['template_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showAlertRuleTemplate.');
            }
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showAlertRuleTemplate.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看分析脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAnalysisScript(showAnalysisScriptRequest?: ShowAnalysisScriptRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/analysis-scripts/{analysis_script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let analysisScriptId;

            if (showAnalysisScriptRequest !== null && showAnalysisScriptRequest !== undefined) {
                if (showAnalysisScriptRequest instanceof ShowAnalysisScriptRequest) {
                    workspaceId = showAnalysisScriptRequest.workspaceId;
                    analysisScriptId = showAnalysisScriptRequest.analysisScriptId;
                } else {
                    workspaceId = showAnalysisScriptRequest['workspace_id'];
                    analysisScriptId = showAnalysisScriptRequest['analysis_script_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showAnalysisScript.');
            }
            if (analysisScriptId === null || analysisScriptId === undefined) {
            throw new RequiredError('analysisScriptId','Required parameter analysisScriptId was null or undefined when calling showAnalysisScript.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'analysis_script_id': analysisScriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询检查项详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCheckitemDetail(showCheckitemDetailRequest?: ShowCheckitemDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/checkitems/{checkitem_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let xLanguage;
            
            let checkitemId;

            if (showCheckitemDetailRequest !== null && showCheckitemDetailRequest !== undefined) {
                if (showCheckitemDetailRequest instanceof ShowCheckitemDetailRequest) {
                    contentType = showCheckitemDetailRequest.contentType;
                    workspaceId = showCheckitemDetailRequest.workspaceId;
                    xLanguage = showCheckitemDetailRequest.xLanguage;
                    checkitemId = showCheckitemDetailRequest.checkitemId;
                } else {
                    contentType = showCheckitemDetailRequest['content-type'];
                    workspaceId = showCheckitemDetailRequest['workspace_id'];
                    xLanguage = showCheckitemDetailRequest['X-Language'];
                    checkitemId = showCheckitemDetailRequest['checkitem_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showCheckitemDetail.');
            }
            if (checkitemId === null || checkitemId === undefined) {
            throw new RequiredError('checkitemId','Required parameter checkitemId was null or undefined when calling showCheckitemDetail.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'workspace_id': workspaceId,'checkitem_id': checkitemId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看代码片段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCodeSegment(showCodeSegmentRequest?: ShowCodeSegmentRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/code-segments/{code_segment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let codeSegmentId;

            if (showCodeSegmentRequest !== null && showCodeSegmentRequest !== undefined) {
                if (showCodeSegmentRequest instanceof ShowCodeSegmentRequest) {
                    workspaceId = showCodeSegmentRequest.workspaceId;
                    codeSegmentId = showCodeSegmentRequest.codeSegmentId;
                } else {
                    workspaceId = showCodeSegmentRequest['workspace_id'];
                    codeSegmentId = showCodeSegmentRequest['code_segment_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showCodeSegment.');
            }
            if (codeSegmentId === null || codeSegmentId === undefined) {
            throw new RequiredError('codeSegmentId','Required parameter codeSegmentId was null or undefined when calling showCodeSegment.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'code_segment_id': codeSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询遵从包详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCompliancePackageDetail(showCompliancePackageDetailRequest?: ShowCompliancePackageDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/compliance-packages/{compliance_packages_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let compliancePackagesId;
            
            let workspaceId;
            
            let contentType;
            
            let xLanguage;

            if (showCompliancePackageDetailRequest !== null && showCompliancePackageDetailRequest !== undefined) {
                if (showCompliancePackageDetailRequest instanceof ShowCompliancePackageDetailRequest) {
                    compliancePackagesId = showCompliancePackageDetailRequest.compliancePackagesId;
                    workspaceId = showCompliancePackageDetailRequest.workspaceId;
                    contentType = showCompliancePackageDetailRequest.contentType;
                    xLanguage = showCompliancePackageDetailRequest.xLanguage;
                } else {
                    compliancePackagesId = showCompliancePackageDetailRequest['compliance_packages_id'];
                    workspaceId = showCompliancePackageDetailRequest['workspace_id'];
                    contentType = showCompliancePackageDetailRequest['content-type'];
                    xLanguage = showCompliancePackageDetailRequest['X-Language'];
                }
            }

        
            if (compliancePackagesId === null || compliancePackagesId === undefined) {
            throw new RequiredError('compliancePackagesId','Required parameter compliancePackagesId was null or undefined when calling showCompliancePackageDetail.');
            }
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showCompliancePackageDetail.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'compliance_packages_id': compliancePackagesId,'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实时消费配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDataConsumption(showDataConsumptionRequest?: ShowDataConsumptionRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/consumption",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let tableId;

            if (showDataConsumptionRequest !== null && showDataConsumptionRequest !== undefined) {
                if (showDataConsumptionRequest instanceof ShowDataConsumptionRequest) {
                    workspaceId = showDataConsumptionRequest.workspaceId;
                    tableId = showDataConsumptionRequest.tableId;
                } else {
                    workspaceId = showDataConsumptionRequest['workspace_id'];
                    tableId = showDataConsumptionRequest['table_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showDataConsumption.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling showDataConsumption.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDataTransformation(showDataTransformationRequest?: ShowDataTransformationRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations/{data_transformation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let dataTransformationId;

            if (showDataTransformationRequest !== null && showDataTransformationRequest !== undefined) {
                if (showDataTransformationRequest instanceof ShowDataTransformationRequest) {
                    workspaceId = showDataTransformationRequest.workspaceId;
                    dataTransformationId = showDataTransformationRequest.dataTransformationId;
                } else {
                    workspaceId = showDataTransformationRequest['workspace_id'];
                    dataTransformationId = showDataTransformationRequest['data_transformation_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showDataTransformation.');
            }
            if (dataTransformationId === null || dataTransformationId === undefined) {
            throw new RequiredError('dataTransformationId','Required parameter dataTransformationId was null or undefined when calling showDataTransformation.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'data_transformation_id': dataTransformationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询布局字段详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLayoutFieldInfo(showLayoutFieldInfoRequest?: ShowLayoutFieldInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/soc/layouts/fields/{field_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let fieldId;
            
            let layoutId;

            if (showLayoutFieldInfoRequest !== null && showLayoutFieldInfoRequest !== undefined) {
                if (showLayoutFieldInfoRequest instanceof ShowLayoutFieldInfoRequest) {
                    contentType = showLayoutFieldInfoRequest.contentType;
                    workspaceId = showLayoutFieldInfoRequest.workspaceId;
                    fieldId = showLayoutFieldInfoRequest.fieldId;
                    layoutId = showLayoutFieldInfoRequest.layoutId;
                } else {
                    contentType = showLayoutFieldInfoRequest['content-type'];
                    workspaceId = showLayoutFieldInfoRequest['workspace_id'];
                    fieldId = showLayoutFieldInfoRequest['field_id'];
                    layoutId = showLayoutFieldInfoRequest['layout_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showLayoutFieldInfo.');
            }
            if (fieldId === null || fieldId === undefined) {
            throw new RequiredError('fieldId','Required parameter fieldId was null or undefined when calling showLayoutFieldInfo.');
            }
            if (layoutId !== null && layoutId !== undefined) {
                localVarQueryParameter['layout_id'] = layoutId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId,'field_id': fieldId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取监控统计信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMonitorStats(showMonitorStatsRequest?: ShowMonitorStatsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (showMonitorStatsRequest !== null && showMonitorStatsRequest !== undefined) {
                if (showMonitorStatsRequest instanceof ShowMonitorStatsRequest) {
                    workspaceId = showMonitorStatsRequest.workspaceId;
                    tableId = showMonitorStatsRequest.tableId;
                    body = showMonitorStatsRequest.body
                } else {
                    workspaceId = showMonitorStatsRequest['workspace_id'];
                    tableId = showMonitorStatsRequest['table_id'];
                    body = showMonitorStatsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showMonitorStats.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling showMonitorStats.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取管道详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPipe(showPipeRequest?: ShowPipeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/pipes/{pipe_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let pipeId;

            if (showPipeRequest !== null && showPipeRequest !== undefined) {
                if (showPipeRequest instanceof ShowPipeRequest) {
                    workspaceId = showPipeRequest.workspaceId;
                    pipeId = showPipeRequest.pipeId;
                } else {
                    workspaceId = showPipeRequest['workspace_id'];
                    pipeId = showPipeRequest['pipe_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPipe.');
            }
            if (pipeId === null || pipeId === undefined) {
            throw new RequiredError('pipeId','Required parameter pipeId was null or undefined when calling showPipe.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'pipe_id': pipeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看检索脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRetrieveScript(showRetrieveScriptRequest?: ShowRetrieveScriptRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/retrieve-scripts/{retrieve_script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let retrieveScriptId;

            if (showRetrieveScriptRequest !== null && showRetrieveScriptRequest !== undefined) {
                if (showRetrieveScriptRequest instanceof ShowRetrieveScriptRequest) {
                    workspaceId = showRetrieveScriptRequest.workspaceId;
                    retrieveScriptId = showRetrieveScriptRequest.retrieveScriptId;
                } else {
                    workspaceId = showRetrieveScriptRequest['workspace_id'];
                    retrieveScriptId = showRetrieveScriptRequest['retrieve_script_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showRetrieveScript.');
            }
            if (retrieveScriptId === null || retrieveScriptId === undefined) {
            throw new RequiredError('retrieveScriptId','Required parameter retrieveScriptId was null or undefined when calling showRetrieveScript.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'retrieve_script_id': retrieveScriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取订阅资源信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubscriptionResources(showSubscriptionResourcesRequest?: ShowSubscriptionResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/subscription/resource",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let workspaceId;
            
            let sku;

            if (showSubscriptionResourcesRequest !== null && showSubscriptionResourcesRequest !== undefined) {
                if (showSubscriptionResourcesRequest instanceof ShowSubscriptionResourcesRequest) {
                    workspaceId = showSubscriptionResourcesRequest.workspaceId;
                    sku = showSubscriptionResourcesRequest.sku;
                } else {
                    workspaceId = showSubscriptionResourcesRequest['workspace_id'];
                    sku = showSubscriptionResourcesRequest['sku'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showSubscriptionResources.');
            }
            if (sku === null || sku === undefined) {
                throw new RequiredError('sku','Required parameter sku was null or undefined when calling showSubscriptionResources.');
            }
            if (sku !== null && sku !== undefined) {
                localVarQueryParameter['sku'] = sku;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTable(showTableRequest?: ShowTableRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let tableId;

            if (showTableRequest !== null && showTableRequest !== undefined) {
                if (showTableRequest instanceof ShowTableRequest) {
                    workspaceId = showTableRequest.workspaceId;
                    tableId = showTableRequest.tableId;
                } else {
                    workspaceId = showTableRequest['workspace_id'];
                    tableId = showTableRequest['table_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showTable.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling showTable.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前可用版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVersion() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/siem/upgradation/version",
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
         * 更新告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlertRule(updateAlertRuleRequest?: UpdateAlertRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{alert_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let alertRuleId;

            if (updateAlertRuleRequest !== null && updateAlertRuleRequest !== undefined) {
                if (updateAlertRuleRequest instanceof UpdateAlertRuleRequest) {
                    workspaceId = updateAlertRuleRequest.workspaceId;
                    alertRuleId = updateAlertRuleRequest.alertRuleId;
                    body = updateAlertRuleRequest.body
                } else {
                    workspaceId = updateAlertRuleRequest['workspace_id'];
                    alertRuleId = updateAlertRuleRequest['alert_rule_id'];
                    body = updateAlertRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateAlertRule.');
            }
            if (alertRuleId === null || alertRuleId === undefined) {
            throw new RequiredError('alertRuleId','Required parameter alertRuleId was null or undefined when calling updateAlertRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'alert_rule_id': alertRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新分析脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAnalysisScript(updateAnalysisScriptRequest?: UpdateAnalysisScriptRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/analysis-scripts/{analysis_script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let analysisScriptId;

            if (updateAnalysisScriptRequest !== null && updateAnalysisScriptRequest !== undefined) {
                if (updateAnalysisScriptRequest instanceof UpdateAnalysisScriptRequest) {
                    workspaceId = updateAnalysisScriptRequest.workspaceId;
                    analysisScriptId = updateAnalysisScriptRequest.analysisScriptId;
                    body = updateAnalysisScriptRequest.body
                } else {
                    workspaceId = updateAnalysisScriptRequest['workspace_id'];
                    analysisScriptId = updateAnalysisScriptRequest['analysis_script_id'];
                    body = updateAnalysisScriptRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateAnalysisScript.');
            }
            if (analysisScriptId === null || analysisScriptId === undefined) {
            throw new RequiredError('analysisScriptId','Required parameter analysisScriptId was null or undefined when calling updateAnalysisScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'analysis_script_id': analysisScriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新检查项
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCheckitem(updateCheckitemRequest?: UpdateCheckitemRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/checkitems/{checkitem_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let xLanguage;
            
            let checkitemId;

            if (updateCheckitemRequest !== null && updateCheckitemRequest !== undefined) {
                if (updateCheckitemRequest instanceof UpdateCheckitemRequest) {
                    contentType = updateCheckitemRequest.contentType;
                    workspaceId = updateCheckitemRequest.workspaceId;
                    xLanguage = updateCheckitemRequest.xLanguage;
                    checkitemId = updateCheckitemRequest.checkitemId;
                    body = updateCheckitemRequest.body
                } else {
                    contentType = updateCheckitemRequest['content-type'];
                    workspaceId = updateCheckitemRequest['workspace_id'];
                    xLanguage = updateCheckitemRequest['X-Language'];
                    checkitemId = updateCheckitemRequest['checkitem_id'];
                    body = updateCheckitemRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateCheckitem.');
            }
            if (checkitemId === null || checkitemId === undefined) {
            throw new RequiredError('checkitemId','Required parameter checkitemId was null or undefined when calling updateCheckitem.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'checkitem_id': checkitemId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新代码片段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCodeSegment(updateCodeSegmentRequest?: UpdateCodeSegmentRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/code-segments/{code_segment_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let codeSegmentId;

            if (updateCodeSegmentRequest !== null && updateCodeSegmentRequest !== undefined) {
                if (updateCodeSegmentRequest instanceof UpdateCodeSegmentRequest) {
                    workspaceId = updateCodeSegmentRequest.workspaceId;
                    codeSegmentId = updateCodeSegmentRequest.codeSegmentId;
                    body = updateCodeSegmentRequest.body
                } else {
                    workspaceId = updateCodeSegmentRequest['workspace_id'];
                    codeSegmentId = updateCodeSegmentRequest['code_segment_id'];
                    body = updateCodeSegmentRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateCodeSegment.');
            }
            if (codeSegmentId === null || codeSegmentId === undefined) {
            throw new RequiredError('codeSegmentId','Required parameter codeSegmentId was null or undefined when calling updateCodeSegment.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'code_segment_id': codeSegmentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新遵从包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCompliancePackage(updateCompliancePackageRequest?: UpdateCompliancePackageRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/sa/baseline/compliance-packages/{compliance_packages_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let compliancePackagesId;
            
            let contentType;
            
            let xLanguage;

            if (updateCompliancePackageRequest !== null && updateCompliancePackageRequest !== undefined) {
                if (updateCompliancePackageRequest instanceof UpdateCompliancePackageRequest) {
                    workspaceId = updateCompliancePackageRequest.workspaceId;
                    compliancePackagesId = updateCompliancePackageRequest.compliancePackagesId;
                    contentType = updateCompliancePackageRequest.contentType;
                    xLanguage = updateCompliancePackageRequest.xLanguage;
                    body = updateCompliancePackageRequest.body
                } else {
                    workspaceId = updateCompliancePackageRequest['workspace_id'];
                    compliancePackagesId = updateCompliancePackageRequest['compliance_packages_id'];
                    contentType = updateCompliancePackageRequest['content-type'];
                    xLanguage = updateCompliancePackageRequest['X-Language'];
                    body = updateCompliancePackageRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateCompliancePackage.');
            }
            if (compliancePackagesId === null || compliancePackagesId === undefined) {
            throw new RequiredError('compliancePackagesId','Required parameter compliancePackagesId was null or undefined when calling updateCompliancePackage.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'compliance_packages_id': compliancePackagesId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新数据加工
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDataTransformation(updateDataTransformationRequest?: UpdateDataTransformationRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/data-transformations/{data_transformation_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let dataTransformationId;

            if (updateDataTransformationRequest !== null && updateDataTransformationRequest !== undefined) {
                if (updateDataTransformationRequest instanceof UpdateDataTransformationRequest) {
                    workspaceId = updateDataTransformationRequest.workspaceId;
                    dataTransformationId = updateDataTransformationRequest.dataTransformationId;
                    body = updateDataTransformationRequest.body
                } else {
                    workspaceId = updateDataTransformationRequest['workspace_id'];
                    dataTransformationId = updateDataTransformationRequest['data_transformation_id'];
                    body = updateDataTransformationRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateDataTransformation.');
            }
            if (dataTransformationId === null || dataTransformationId === undefined) {
            throw new RequiredError('dataTransformationId','Required parameter dataTransformationId was null or undefined when calling updateDataTransformation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'data_transformation_id': dataTransformationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新布局字段
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLayoutField(updateLayoutFieldRequest?: UpdateLayoutFieldRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/soc/layouts/fields/{field_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let fieldId;

            if (updateLayoutFieldRequest !== null && updateLayoutFieldRequest !== undefined) {
                if (updateLayoutFieldRequest instanceof UpdateLayoutFieldRequest) {
                    contentType = updateLayoutFieldRequest.contentType;
                    workspaceId = updateLayoutFieldRequest.workspaceId;
                    fieldId = updateLayoutFieldRequest.fieldId;
                    body = updateLayoutFieldRequest.body
                } else {
                    contentType = updateLayoutFieldRequest['content-type'];
                    workspaceId = updateLayoutFieldRequest['workspace_id'];
                    fieldId = updateLayoutFieldRequest['field_id'];
                    body = updateLayoutFieldRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateLayoutField.');
            }
            if (fieldId === null || fieldId === undefined) {
            throw new RequiredError('fieldId','Required parameter fieldId was null or undefined when calling updateLayoutField.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'field_id': fieldId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新管道
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePipe(updatePipeRequest?: UpdatePipeRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/pipes/{pipe_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let pipeId;

            if (updatePipeRequest !== null && updatePipeRequest !== undefined) {
                if (updatePipeRequest instanceof UpdatePipeRequest) {
                    workspaceId = updatePipeRequest.workspaceId;
                    pipeId = updatePipeRequest.pipeId;
                    body = updatePipeRequest.body
                } else {
                    workspaceId = updatePipeRequest['workspace_id'];
                    pipeId = updatePipeRequest['pipe_id'];
                    body = updatePipeRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updatePipe.');
            }
            if (pipeId === null || pipeId === undefined) {
            throw new RequiredError('pipeId','Required parameter pipeId was null or undefined when calling updatePipe.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'pipe_id': pipeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新管道结构
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePipeSchema(updatePipeSchemaRequest?: UpdatePipeSchemaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/pipes/{pipe_id}/schema",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let pipeId;

            if (updatePipeSchemaRequest !== null && updatePipeSchemaRequest !== undefined) {
                if (updatePipeSchemaRequest instanceof UpdatePipeSchemaRequest) {
                    workspaceId = updatePipeSchemaRequest.workspaceId;
                    pipeId = updatePipeSchemaRequest.pipeId;
                    body = updatePipeSchemaRequest.body
                } else {
                    workspaceId = updatePipeSchemaRequest['workspace_id'];
                    pipeId = updatePipeSchemaRequest['pipe_id'];
                    body = updatePipeSchemaRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updatePipeSchema.');
            }
            if (pipeId === null || pipeId === undefined) {
            throw new RequiredError('pipeId','Required parameter pipeId was null or undefined when calling updatePipeSchema.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'pipe_id': pipeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新检索脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateRetrieveScript(updateRetrieveScriptRequest?: UpdateRetrieveScriptRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/retrieve-scripts/{retrieve_script_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let retrieveScriptId;

            if (updateRetrieveScriptRequest !== null && updateRetrieveScriptRequest !== undefined) {
                if (updateRetrieveScriptRequest instanceof UpdateRetrieveScriptRequest) {
                    workspaceId = updateRetrieveScriptRequest.workspaceId;
                    retrieveScriptId = updateRetrieveScriptRequest.retrieveScriptId;
                    body = updateRetrieveScriptRequest.body
                } else {
                    workspaceId = updateRetrieveScriptRequest['workspace_id'];
                    retrieveScriptId = updateRetrieveScriptRequest['retrieve_script_id'];
                    body = updateRetrieveScriptRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateRetrieveScript.');
            }
            if (retrieveScriptId === null || retrieveScriptId === undefined) {
            throw new RequiredError('retrieveScriptId','Required parameter retrieveScriptId was null or undefined when calling updateRetrieveScript.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'retrieve_script_id': retrieveScriptId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改表详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTable(updateTableRequest?: UpdateTableRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (updateTableRequest !== null && updateTableRequest !== undefined) {
                if (updateTableRequest instanceof UpdateTableRequest) {
                    workspaceId = updateTableRequest.workspaceId;
                    tableId = updateTableRequest.tableId;
                    body = updateTableRequest.body
                } else {
                    workspaceId = updateTableRequest['workspace_id'];
                    tableId = updateTableRequest['table_id'];
                    body = updateTableRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateTable.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling updateTable.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更改表结构
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTableSchema(updateTableSchemaRequest?: UpdateTableSchemaRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/tables/{table_id}/schema",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let tableId;

            if (updateTableSchemaRequest !== null && updateTableSchemaRequest !== undefined) {
                if (updateTableSchemaRequest instanceof UpdateTableSchemaRequest) {
                    workspaceId = updateTableSchemaRequest.workspaceId;
                    tableId = updateTableSchemaRequest.tableId;
                    body = updateTableSchemaRequest.body
                } else {
                    workspaceId = updateTableSchemaRequest['workspace_id'];
                    tableId = updateTableSchemaRequest['table_id'];
                    body = updateTableSchemaRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateTableSchema.');
            }
            if (tableId === null || tableId === undefined) {
            throw new RequiredError('tableId','Required parameter tableId was null or undefined when calling updateTableSchema.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'table_id': tableId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建SQL校验
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSqlValidation(createSqlValidationRequest?: CreateSqlValidationRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/workspaces/{workspace_id}/siem/sql/validation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createSqlValidationRequest !== null && createSqlValidationRequest !== undefined) {
                if (createSqlValidationRequest instanceof CreateSqlValidationRequest) {
                    workspaceId = createSqlValidationRequest.workspaceId;
                    body = createSqlValidationRequest.body
                } else {
                    workspaceId = createSqlValidationRequest['workspace_id'];
                    body = createSqlValidationRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createSqlValidation.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SecMasterClient {
    return new SecMasterClient(client);
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