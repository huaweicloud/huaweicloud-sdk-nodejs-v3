import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionInfo } from './model/ActionInfo';
import { ActionInstanceInfo } from './model/ActionInstanceInfo';
import { Alert } from './model/Alert';
import { AlertAlertType } from './model/AlertAlertType';
import { AlertDataSource } from './model/AlertDataSource';
import { AlertDestGeo } from './model/AlertDestGeo';
import { AlertDetail } from './model/AlertDetail';
import { AlertDetailDataclassRef } from './model/AlertDetailDataclassRef';
import { AlertEnvironment } from './model/AlertEnvironment';
import { AlertFileInfo } from './model/AlertFileInfo';
import { AlertNetworkList } from './model/AlertNetworkList';
import { AlertProcess } from './model/AlertProcess';
import { AlertRemediation } from './model/AlertRemediation';
import { AlertResourceList } from './model/AlertResourceList';
import { AlertRule } from './model/AlertRule';
import { AlertRuleTemplate } from './model/AlertRuleTemplate';
import { AlertRuleTrigger } from './model/AlertRuleTrigger';
import { AlertSrcGeo } from './model/AlertSrcGeo';
import { AlertUserInfo } from './model/AlertUserInfo';
import { AopWorkflowInfo } from './model/AopWorkflowInfo';
import { ApproveOpinionDetail } from './model/ApproveOpinionDetail';
import { ApprovePlaybookInfo } from './model/ApprovePlaybookInfo';
import { AuditLogInfo } from './model/AuditLogInfo';
import { BaselineSearchRequestBody } from './model/BaselineSearchRequestBody';
import { BatchOperateAlertResult } from './model/BatchOperateAlertResult';
import { BatchOperateDataobjectResult } from './model/BatchOperateDataobjectResult';
import { BatchSearchMetricHitsRequest } from './model/BatchSearchMetricHitsRequest';
import { BatchSearchMetricHitsRequestBody } from './model/BatchSearchMetricHitsRequestBody';
import { BatchSearchMetricHitsResponse } from './model/BatchSearchMetricHitsResponse';
import { ChangeAlertRequest } from './model/ChangeAlertRequest';
import { ChangeAlertRequestBody } from './model/ChangeAlertRequestBody';
import { ChangeAlertResponse } from './model/ChangeAlertResponse';
import { ChangeIncidentRequest } from './model/ChangeIncidentRequest';
import { ChangeIncidentRequestBody } from './model/ChangeIncidentRequestBody';
import { ChangeIncidentResponse } from './model/ChangeIncidentResponse';
import { ChangePlaybookInstanceRequest } from './model/ChangePlaybookInstanceRequest';
import { ChangePlaybookInstanceResponse } from './model/ChangePlaybookInstanceResponse';
import { ConditionInfo } from './model/ConditionInfo';
import { ConditionItem } from './model/ConditionItem';
import { CopyPlaybookInfo } from './model/CopyPlaybookInfo';
import { CopyPlaybookVersionRequest } from './model/CopyPlaybookVersionRequest';
import { CopyPlaybookVersionResponse } from './model/CopyPlaybookVersionResponse';
import { CreateAction } from './model/CreateAction';
import { CreateAlertRequest } from './model/CreateAlertRequest';
import { CreateAlertRequestBody } from './model/CreateAlertRequestBody';
import { CreateAlertResponse } from './model/CreateAlertResponse';
import { CreateAlertRuleRequest } from './model/CreateAlertRuleRequest';
import { CreateAlertRuleRequestBody } from './model/CreateAlertRuleRequestBody';
import { CreateAlertRuleResponse } from './model/CreateAlertRuleResponse';
import { CreateAlertRuleSimulationRequest } from './model/CreateAlertRuleSimulationRequest';
import { CreateAlertRuleSimulationRequestBody } from './model/CreateAlertRuleSimulationRequestBody';
import { CreateAlertRuleSimulationResponse } from './model/CreateAlertRuleSimulationResponse';
import { CreateBatchOrderAlertsRequest } from './model/CreateBatchOrderAlertsRequest';
import { CreateBatchOrderAlertsResponse } from './model/CreateBatchOrderAlertsResponse';
import { CreateDataobjectRelationsRequest } from './model/CreateDataobjectRelationsRequest';
import { CreateDataobjectRelationsRequestBody } from './model/CreateDataobjectRelationsRequestBody';
import { CreateDataobjectRelationsResponse } from './model/CreateDataobjectRelationsResponse';
import { CreateDataspaceRequest } from './model/CreateDataspaceRequest';
import { CreateDataspaceRequestBody } from './model/CreateDataspaceRequestBody';
import { CreateDataspaceResponse } from './model/CreateDataspaceResponse';
import { CreateIncidentRequest } from './model/CreateIncidentRequest';
import { CreateIncidentRequestBody } from './model/CreateIncidentRequestBody';
import { CreateIncidentResponse } from './model/CreateIncidentResponse';
import { CreateIndicatorDetail } from './model/CreateIndicatorDetail';
import { CreateIndicatorDetailDataSource } from './model/CreateIndicatorDetailDataSource';
import { CreateIndicatorDetailEnvironment } from './model/CreateIndicatorDetailEnvironment';
import { CreateIndicatorDetailIndicatorType } from './model/CreateIndicatorDetailIndicatorType';
import { CreateIndicatorRequest } from './model/CreateIndicatorRequest';
import { CreateIndicatorResponse } from './model/CreateIndicatorResponse';
import { CreatePipeRequest } from './model/CreatePipeRequest';
import { CreatePipeRequestBody } from './model/CreatePipeRequestBody';
import { CreatePipeResponse } from './model/CreatePipeResponse';
import { CreatePlaybookActionRequest } from './model/CreatePlaybookActionRequest';
import { CreatePlaybookActionResponse } from './model/CreatePlaybookActionResponse';
import { CreatePlaybookApproveRequest } from './model/CreatePlaybookApproveRequest';
import { CreatePlaybookApproveResponse } from './model/CreatePlaybookApproveResponse';
import { CreatePlaybookInfo } from './model/CreatePlaybookInfo';
import { CreatePlaybookRequest } from './model/CreatePlaybookRequest';
import { CreatePlaybookResponse } from './model/CreatePlaybookResponse';
import { CreatePlaybookRuleRequest } from './model/CreatePlaybookRuleRequest';
import { CreatePlaybookRuleResponse } from './model/CreatePlaybookRuleResponse';
import { CreatePlaybookVersionInfo } from './model/CreatePlaybookVersionInfo';
import { CreatePlaybookVersionRequest } from './model/CreatePlaybookVersionRequest';
import { CreatePlaybookVersionResponse } from './model/CreatePlaybookVersionResponse';
import { CreatePostPaidOrderRequest } from './model/CreatePostPaidOrderRequest';
import { CreatePostPaidOrderResponse } from './model/CreatePostPaidOrderResponse';
import { CreateRuleInfo } from './model/CreateRuleInfo';
import { CreateWorkspaceRequest } from './model/CreateWorkspaceRequest';
import { CreateWorkspaceRequestBody } from './model/CreateWorkspaceRequestBody';
import { CreateWorkspaceResponse } from './model/CreateWorkspaceResponse';
import { CreateWorkspaceResponseBody } from './model/CreateWorkspaceResponseBody';
import { CreateWorkspaceResponseBodyWorkspaceAgencyList } from './model/CreateWorkspaceResponseBodyWorkspaceAgencyList';
import { DataClassRefPojo } from './model/DataClassRefPojo';
import { DataClassResponseBody } from './model/DataClassResponseBody';
import { DataObject } from './model/DataObject';
import { DataObjectDetail } from './model/DataObjectDetail';
import { DataObjectNetworkList } from './model/DataObjectNetworkList';
import { DataclassInfoRef } from './model/DataclassInfoRef';
import { DataobjectInfo } from './model/DataobjectInfo';
import { DataobjectSearch } from './model/DataobjectSearch';
import { DataobjectSearchCondition } from './model/DataobjectSearchCondition';
import { DataobjectSearchConditionConditions } from './model/DataobjectSearchConditionConditions';
import { DeleteAlertRequest } from './model/DeleteAlertRequest';
import { DeleteAlertRequestBody } from './model/DeleteAlertRequestBody';
import { DeleteAlertResponse } from './model/DeleteAlertResponse';
import { DeleteAlertRuleRequest } from './model/DeleteAlertRuleRequest';
import { DeleteAlertRuleResponse } from './model/DeleteAlertRuleResponse';
import { DeleteDataobjectRelationsRequest } from './model/DeleteDataobjectRelationsRequest';
import { DeleteDataobjectRelationsResponse } from './model/DeleteDataobjectRelationsResponse';
import { DeleteIncidentRequest } from './model/DeleteIncidentRequest';
import { DeleteIncidentRequestBody } from './model/DeleteIncidentRequestBody';
import { DeleteIncidentResponse } from './model/DeleteIncidentResponse';
import { DeleteIncidentResponseBodyData } from './model/DeleteIncidentResponseBodyData';
import { DeleteIndicatorRequest } from './model/DeleteIndicatorRequest';
import { DeleteIndicatorRequestBody } from './model/DeleteIndicatorRequestBody';
import { DeleteIndicatorResponse } from './model/DeleteIndicatorResponse';
import { DeletePlaybookActionRequest } from './model/DeletePlaybookActionRequest';
import { DeletePlaybookActionResponse } from './model/DeletePlaybookActionResponse';
import { DeletePlaybookRequest } from './model/DeletePlaybookRequest';
import { DeletePlaybookResponse } from './model/DeletePlaybookResponse';
import { DeletePlaybookRuleRequest } from './model/DeletePlaybookRuleRequest';
import { DeletePlaybookRuleResponse } from './model/DeletePlaybookRuleResponse';
import { DeletePlaybookVersionRequest } from './model/DeletePlaybookVersionRequest';
import { DeletePlaybookVersionResponse } from './model/DeletePlaybookVersionResponse';
import { DeleteWorkspaceRequest } from './model/DeleteWorkspaceRequest';
import { DeleteWorkspaceResponse } from './model/DeleteWorkspaceResponse';
import { DisableAlertRuleRequest } from './model/DisableAlertRuleRequest';
import { DisableAlertRuleResponse } from './model/DisableAlertRuleResponse';
import { EnableAlertRuleRequest } from './model/EnableAlertRuleRequest';
import { EnableAlertRuleResponse } from './model/EnableAlertRuleResponse';
import { FieldResponseBody } from './model/FieldResponseBody';
import { Incident } from './model/Incident';
import { IncidentDetail } from './model/IncidentDetail';
import { IncidentEnvironment } from './model/IncidentEnvironment';
import { IncidentIncidentType } from './model/IncidentIncidentType';
import { IndicatorBatchOperateResponse } from './model/IndicatorBatchOperateResponse';
import { IndicatorCreateRequest } from './model/IndicatorCreateRequest';
import { IndicatorDataObjectDetail } from './model/IndicatorDataObjectDetail';
import { IndicatorDataObjectDetailDataSource } from './model/IndicatorDataObjectDetailDataSource';
import { IndicatorDataObjectDetailEnvironment } from './model/IndicatorDataObjectDetailEnvironment';
import { IndicatorDataObjectDetailIndicatorType } from './model/IndicatorDataObjectDetailIndicatorType';
import { IndicatorDetail } from './model/IndicatorDetail';
import { IndicatorListSearchRequest } from './model/IndicatorListSearchRequest';
import { KeyIndex } from './model/KeyIndex';
import { ListAlertDetail } from './model/ListAlertDetail';
import { ListAlertRsp } from './model/ListAlertRsp';
import { ListAlertRuleMetricsRequest } from './model/ListAlertRuleMetricsRequest';
import { ListAlertRuleMetricsResponse } from './model/ListAlertRuleMetricsResponse';
import { ListAlertRuleTemplatesRequest } from './model/ListAlertRuleTemplatesRequest';
import { ListAlertRuleTemplatesResponse } from './model/ListAlertRuleTemplatesResponse';
import { ListAlertRulesRequest } from './model/ListAlertRulesRequest';
import { ListAlertRulesResponse } from './model/ListAlertRulesResponse';
import { ListAlertsRequest } from './model/ListAlertsRequest';
import { ListAlertsResponse } from './model/ListAlertsResponse';
import { ListDataclassFieldsRequest } from './model/ListDataclassFieldsRequest';
import { ListDataclassFieldsResponse } from './model/ListDataclassFieldsResponse';
import { ListDataclassRequest } from './model/ListDataclassRequest';
import { ListDataclassResponse } from './model/ListDataclassResponse';
import { ListDataobjectRelationsRequest } from './model/ListDataobjectRelationsRequest';
import { ListDataobjectRelationsResponse } from './model/ListDataobjectRelationsResponse';
import { ListIncidentsRequest } from './model/ListIncidentsRequest';
import { ListIncidentsResponse } from './model/ListIncidentsResponse';
import { ListIndicatorsRequest } from './model/ListIndicatorsRequest';
import { ListIndicatorsResponse } from './model/ListIndicatorsResponse';
import { ListPlaybookActionsRequest } from './model/ListPlaybookActionsRequest';
import { ListPlaybookActionsResponse } from './model/ListPlaybookActionsResponse';
import { ListPlaybookApprovesRequest } from './model/ListPlaybookApprovesRequest';
import { ListPlaybookApprovesResponse } from './model/ListPlaybookApprovesResponse';
import { ListPlaybookAuditLogsRequest } from './model/ListPlaybookAuditLogsRequest';
import { ListPlaybookAuditLogsResponse } from './model/ListPlaybookAuditLogsResponse';
import { ListPlaybookInstancesRequest } from './model/ListPlaybookInstancesRequest';
import { ListPlaybookInstancesResponse } from './model/ListPlaybookInstancesResponse';
import { ListPlaybookVersionsRequest } from './model/ListPlaybookVersionsRequest';
import { ListPlaybookVersionsResponse } from './model/ListPlaybookVersionsResponse';
import { ListPlaybooksRequest } from './model/ListPlaybooksRequest';
import { ListPlaybooksResponse } from './model/ListPlaybooksResponse';
import { ListWorkflowsRequest } from './model/ListWorkflowsRequest';
import { ListWorkflowsResponse } from './model/ListWorkflowsResponse';
import { ListWorkspacesRequest } from './model/ListWorkspacesRequest';
import { ListWorkspacesResponse } from './model/ListWorkspacesResponse';
import { MetricFormat } from './model/MetricFormat';
import { ModifyActionInfo } from './model/ModifyActionInfo';
import { ModifyPlaybookInfo } from './model/ModifyPlaybookInfo';
import { ModifyPlaybookVersionInfo } from './model/ModifyPlaybookVersionInfo';
import { ModifyRuleInfo } from './model/ModifyRuleInfo';
import { OperationPlaybookInfo } from './model/OperationPlaybookInfo';
import { OrderAlert } from './model/OrderAlert';
import { OrderAlertIncidentContent } from './model/OrderAlertIncidentContent';
import { OrderAlertIncidentContentIncidentType } from './model/OrderAlertIncidentContentIncidentType';
import { PlaybookInfo } from './model/PlaybookInfo';
import { PlaybookInfoRef } from './model/PlaybookInfoRef';
import { PlaybookInstanceInfo } from './model/PlaybookInstanceInfo';
import { PlaybookInstanceMonitorDetail } from './model/PlaybookInstanceMonitorDetail';
import { PlaybookInstanceRunStatistics } from './model/PlaybookInstanceRunStatistics';
import { PlaybookStatisticDetail } from './model/PlaybookStatisticDetail';
import { PlaybookVersionInfo } from './model/PlaybookVersionInfo';
import { PlaybookVersionListEntity } from './model/PlaybookVersionListEntity';
import { PostPaidParam } from './model/PostPaidParam';
import { ProductPostPaid } from './model/ProductPostPaid';
import { RuleInfo } from './model/RuleInfo';
import { Schedule } from './model/Schedule';
import { SearchBaselineRequest } from './model/SearchBaselineRequest';
import { SearchBaselineResponse } from './model/SearchBaselineResponse';
import { ShowAlertRequest } from './model/ShowAlertRequest';
import { ShowAlertResponse } from './model/ShowAlertResponse';
import { ShowAlertRspMalware } from './model/ShowAlertRspMalware';
import { ShowAlertRuleRequest } from './model/ShowAlertRuleRequest';
import { ShowAlertRuleResponse } from './model/ShowAlertRuleResponse';
import { ShowAlertRuleTemplateRequest } from './model/ShowAlertRuleTemplateRequest';
import { ShowAlertRuleTemplateResponse } from './model/ShowAlertRuleTemplateResponse';
import { ShowIncidentRequest } from './model/ShowIncidentRequest';
import { ShowIncidentResponse } from './model/ShowIncidentResponse';
import { ShowIndicatorDetailRequest } from './model/ShowIndicatorDetailRequest';
import { ShowIndicatorDetailResponse } from './model/ShowIndicatorDetailResponse';
import { ShowMetricResultResponseBody } from './model/ShowMetricResultResponseBody';
import { ShowMetricResultResponseBodyResult } from './model/ShowMetricResultResponseBodyResult';
import { ShowPlaybookInstanceRequest } from './model/ShowPlaybookInstanceRequest';
import { ShowPlaybookInstanceResponse } from './model/ShowPlaybookInstanceResponse';
import { ShowPlaybookMonitorsRequest } from './model/ShowPlaybookMonitorsRequest';
import { ShowPlaybookMonitorsResponse } from './model/ShowPlaybookMonitorsResponse';
import { ShowPlaybookRequest } from './model/ShowPlaybookRequest';
import { ShowPlaybookResponse } from './model/ShowPlaybookResponse';
import { ShowPlaybookRuleRequest } from './model/ShowPlaybookRuleRequest';
import { ShowPlaybookRuleResponse } from './model/ShowPlaybookRuleResponse';
import { ShowPlaybookStatisticsRequest } from './model/ShowPlaybookStatisticsRequest';
import { ShowPlaybookStatisticsResponse } from './model/ShowPlaybookStatisticsResponse';
import { ShowPlaybookTopologyRequest } from './model/ShowPlaybookTopologyRequest';
import { ShowPlaybookTopologyResponse } from './model/ShowPlaybookTopologyResponse';
import { ShowPlaybookVersionRequest } from './model/ShowPlaybookVersionRequest';
import { ShowPlaybookVersionResponse } from './model/ShowPlaybookVersionResponse';
import { ShowWorkspaceRequest } from './model/ShowWorkspaceRequest';
import { ShowWorkspaceResponse } from './model/ShowWorkspaceResponse';
import { ShowWorkspaceResponseBodyWorkspace } from './model/ShowWorkspaceResponseBodyWorkspace';
import { TagInfo } from './model/TagInfo';
import { TagsPojo } from './model/TagsPojo';
import { UpdateAlertRuleRequest } from './model/UpdateAlertRuleRequest';
import { UpdateAlertRuleRequestBody } from './model/UpdateAlertRuleRequestBody';
import { UpdateAlertRuleResponse } from './model/UpdateAlertRuleResponse';
import { UpdateIndicatorRequest } from './model/UpdateIndicatorRequest';
import { UpdateIndicatorRequestBody } from './model/UpdateIndicatorRequestBody';
import { UpdateIndicatorResponse } from './model/UpdateIndicatorResponse';
import { UpdatePlaybookActionRequest } from './model/UpdatePlaybookActionRequest';
import { UpdatePlaybookActionResponse } from './model/UpdatePlaybookActionResponse';
import { UpdatePlaybookRequest } from './model/UpdatePlaybookRequest';
import { UpdatePlaybookResponse } from './model/UpdatePlaybookResponse';
import { UpdatePlaybookRuleRequest } from './model/UpdatePlaybookRuleRequest';
import { UpdatePlaybookRuleResponse } from './model/UpdatePlaybookRuleResponse';
import { UpdatePlaybookVersionRequest } from './model/UpdatePlaybookVersionRequest';
import { UpdatePlaybookVersionResponse } from './model/UpdatePlaybookVersionResponse';
import { UpdateWorkspaceRequest } from './model/UpdateWorkspaceRequest';
import { UpdateWorkspaceRequestBody } from './model/UpdateWorkspaceRequestBody';
import { UpdateWorkspaceResponse } from './model/UpdateWorkspaceResponse';

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
     * 批量查询指标结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询指标结果
     * @param {string} workspaceId 工作空间ID
     * @param {BatchSearchMetricHitsRequestBody} batchSearchMetricHitsRequestBody 需要查询的指标ID及参数
     * @param {string} [timespan] 查询指标的时间范围，ISO8601格式，例如：2007-03-01T13:00:00Z/2008-05-11T15:30:00Z或2007-03-01T13:00:00Z/P1Y2M10DT2H30M或P1Y2M10DT2H30M/2008-05-11T15:30:00Z
     * @param {boolean} [cache] 是否启用缓存，默认true, 禁用缓存 false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchSearchMetricHits(batchSearchMetricHitsRequest?: BatchSearchMetricHitsRequest): Promise<BatchSearchMetricHitsResponse> {
        const options = ParamCreater().batchSearchMetricHits(batchSearchMetricHitsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑告警，根据实际修改的属性更新，未修改的列不更新
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} alertId 告警ID
     * @param {ChangeAlertRequestBody} changeAlertRequestBody 更新告警请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAlert(changeAlertRequest?: ChangeAlertRequest): Promise<ChangeAlertResponse> {
        const options = ParamCreater().changeAlert(changeAlertRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑事件，根据实际修改的属性更新，未修改的列不更新
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} incidentId 事件ID
     * @param {ChangeIncidentRequestBody} changeIncidentRequestBody 更新事件请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeIncident(changeIncidentRequest?: ChangeIncidentRequest): Promise<ChangeIncidentResponse> {
        const options = ParamCreater().changeIncident(changeIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作剧本实例
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作剧本实例
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} instanceId 剧本实例ID
     * @param {OperationPlaybookInfo} changePlaybookInstanceRequestBody 请求参数信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changePlaybookInstance(changePlaybookInstanceRequest?: ChangePlaybookInstanceRequest): Promise<ChangePlaybookInstanceResponse> {
        const options = ParamCreater().changePlaybookInstance(changePlaybookInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 克隆剧本及版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 克隆剧本及版本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {CopyPlaybookInfo} copyPlaybookVersionRequestBody 请求参数信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyPlaybookVersion(copyPlaybookVersionRequest?: CopyPlaybookVersionRequest): Promise<CopyPlaybookVersionResponse> {
        const options = ParamCreater().copyPlaybookVersion(copyPlaybookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {CreateAlertRequestBody} createAlertRequestBody 创建告警请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlert(createAlertRequest?: CreateAlertRequest): Promise<CreateAlertResponse> {
        const options = ParamCreater().createAlert(createAlertRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Create alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {CreateAlertRuleRequestBody} createAlertRuleRequestBody CreateAlertRuleRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlertRule(createAlertRuleRequest?: CreateAlertRuleRequest): Promise<CreateAlertRuleResponse> {
        const options = ParamCreater().createAlertRule(createAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Simulate alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 模拟告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {CreateAlertRuleSimulationRequestBody} createAlertRuleSimulationRequestBody CreateAlertRuleSimulationRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlertRuleSimulation(createAlertRuleSimulationRequest?: CreateAlertRuleSimulationRequest): Promise<CreateAlertRuleSimulationResponse> {
        const options = ParamCreater().createAlertRuleSimulation(createAlertRuleSimulationRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 告警转事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 告警转事件
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {OrderAlert} createBatchOrderAlertsRequestBody 告警转事件请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBatchOrderAlerts(createBatchOrderAlertsRequest?: CreateBatchOrderAlertsRequest): Promise<CreateBatchOrderAlertsResponse> {
        const options = ParamCreater().createBatchOrderAlerts(createBatchOrderAlertsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关联Dataobject
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关联Dataobject
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} dataclassType 关联主体dataobject所属数据类，小写复数，如告警为alerts，事件为incidents
     * @param {string} dataObjectId 关联主体dataobject的id
     * @param {string} relatedDataclassType 被关联的dataobject所属数据类，小写复数，如告警为alerts，事件为incidents
     * @param {CreateDataobjectRelationsRequestBody} [createDataobjectRelationsRequestBody] 关联Dataobject请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataobjectRelations(createDataobjectRelationsRequest?: CreateDataobjectRelationsRequest): Promise<CreateDataobjectRelationsResponse> {
        const options = ParamCreater().createDataobjectRelations(createDataobjectRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据空间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据空间
     * @param {string} workspaceId 工作空间id
     * @param {CreateDataspaceRequestBody} createDataspaceRequestBody create dataspace request body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataspace(createDataspaceRequest?: CreateDataspaceRequest): Promise<CreateDataspaceResponse> {
        const options = ParamCreater().createDataspace(createDataspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建事件
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {CreateIncidentRequestBody} createIncidentRequestBody 创建事件请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIncident(createIncidentRequest?: CreateIncidentRequest): Promise<CreateIncidentResponse> {
        const options = ParamCreater().createIncident(createIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建威胁情报
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建威胁情报
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {IndicatorCreateRequest} createIndicatorRequestBody 创建情报请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createIndicator(createIndicatorRequest?: CreateIndicatorRequest): Promise<CreateIndicatorResponse> {
        const options = ParamCreater().createIndicator(createIndicatorRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据管道
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据管道
     * @param {string} workspaceId 工作空间id
     * @param {CreatePipeRequestBody} createPipeRequestBody 请求体
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
     * 创建剧本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建剧本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {CreatePlaybookInfo} createPlaybookRequestBody 剧本创建请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlaybook(createPlaybookRequest?: CreatePlaybookRequest): Promise<CreatePlaybookResponse> {
        const options = ParamCreater().createPlaybook(createPlaybookRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建剧本动作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建剧本动作
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {Array<CreateAction>} createPlaybookActionRequestBody 创建剧本版本请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlaybookAction(createPlaybookActionRequest?: CreatePlaybookActionRequest): Promise<CreatePlaybookActionResponse> {
        const options = ParamCreater().createPlaybookAction(createPlaybookActionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 审核剧本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 审核剧本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 版本ID
     * @param {ApprovePlaybookInfo} [createPlaybookApproveRequestBody] 请求参数信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlaybookApprove(createPlaybookApproveRequest?: CreatePlaybookApproveRequest): Promise<CreatePlaybookApproveResponse> {
        const options = ParamCreater().createPlaybookApprove(createPlaybookApproveRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建剧本规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建剧本规则
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {CreateRuleInfo} [createPlaybookRuleRequestBody] 创建剧本触发规则请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlaybookRule(createPlaybookRuleRequest?: CreatePlaybookRuleRequest): Promise<CreatePlaybookRuleResponse> {
        const options = ParamCreater().createPlaybookRule(createPlaybookRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建剧本版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建剧本版本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} playbookId 剧本ID
     * @param {CreatePlaybookVersionInfo} createPlaybookVersionRequestBody 创建剧本请求参数信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPlaybookVersion(createPlaybookVersionRequest?: CreatePlaybookVersionRequest): Promise<CreatePlaybookVersionResponse> {
        const options = ParamCreater().createPlaybookVersion(createPlaybookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开通安全云脑按需服务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 安全云脑按需订购
     * @param {'zh-cn' | 'en-us'} xLanguage 用户当前语言环境 zh-cn or en-us.
     * @param {PostPaidParam} createPostPaidOrderRequestBody 云脑按需订阅参数请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPostPaidOrder(createPostPaidOrderRequest?: CreatePostPaidOrderRequest): Promise<CreatePostPaidOrderResponse> {
        const options = ParamCreater().createPostPaidOrder(createPostPaidOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在使用安全云脑的基线检查、告警管理、安全分析、安全编排等功能前，需要创建工作空间，它可以将资源划分为各个不同的工作场景，避免资源冗余查找不便，影响日常使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新建工作空间
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {CreateWorkspaceRequestBody} createWorkspaceRequestBody 创建工作空间对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
        const options = ParamCreater().createWorkspace(createWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {DeleteAlertRequestBody} deleteAlertRequestBody 删除告警请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlert(deleteAlertRequest?: DeleteAlertRequest): Promise<DeleteAlertResponse> {
        const options = ParamCreater().deleteAlert(deleteAlertRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Delete alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {Array<string>} deleteAlertRuleRequestBody 告警规则ID数组
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlertRule(deleteAlertRuleRequest?: DeleteAlertRuleRequest): Promise<DeleteAlertRuleResponse> {
        const options = ParamCreater().deleteAlertRule(deleteAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消关联Dataobject
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消关联Dataobject
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} dataclassType 关联主体dataobject所属数据类，小写复数，如告警为alerts，事件为incidents
     * @param {string} dataObjectId 关联主体dataobject的id
     * @param {string} relatedDataclassType 被关联的dataobject所属数据类，小写复数，如告警为alerts，事件为incidents
     * @param {CreateDataobjectRelationsRequestBody} [deleteDataobjectRelationsRequestBody] 取消关联Dataobject请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDataobjectRelations(deleteDataobjectRelationsRequest?: DeleteDataobjectRelationsRequest): Promise<DeleteDataobjectRelationsResponse> {
        const options = ParamCreater().deleteDataobjectRelations(deleteDataobjectRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除事件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {DeleteIncidentRequestBody} deleteIncidentRequestBody 删除事件请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIncident(deleteIncidentRequest?: DeleteIncidentRequest): Promise<DeleteIncidentResponse> {
        const options = ParamCreater().deleteIncident(deleteIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除威胁情报
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除威胁情报
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {DeleteIndicatorRequestBody} deleteIndicatorRequestBody 删除威胁情报请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteIndicator(deleteIndicatorRequest?: DeleteIndicatorRequest): Promise<DeleteIndicatorResponse> {
        const options = ParamCreater().deleteIndicator(deleteIndicatorRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除剧本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除剧本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} playbookId ID of playbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePlaybook(deletePlaybookRequest?: DeletePlaybookRequest): Promise<DeletePlaybookResponse> {
        const options = ParamCreater().deletePlaybook(deletePlaybookRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除剧本动作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除剧本动作
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {string} actionId 剧本动作ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePlaybookAction(deletePlaybookActionRequest?: DeletePlaybookActionRequest): Promise<DeletePlaybookActionResponse> {
        const options = ParamCreater().deletePlaybookAction(deletePlaybookActionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除剧本规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除剧本规则
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {string} ruleId 规则ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePlaybookRule(deletePlaybookRuleRequest?: DeletePlaybookRuleRequest): Promise<DeletePlaybookRuleResponse> {
        const options = ParamCreater().deletePlaybookRule(deletePlaybookRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除剧本版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除剧本版本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePlaybookVersion(deletePlaybookVersionRequest?: DeletePlaybookVersionRequest): Promise<DeletePlaybookVersionResponse> {
        const options = ParamCreater().deletePlaybookVersion(deletePlaybookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除工作空间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除工作空间
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {boolean} [permanentDelete] 是否永久删除， true or false
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteWorkspace(deleteWorkspaceRequest?: DeleteWorkspaceRequest): Promise<DeleteWorkspaceResponse> {
        const options = ParamCreater().deleteWorkspace(deleteWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Disable alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停用告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {Array<string>} disableAlertRuleRequestBody 禁用告警规则的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableAlertRule(disableAlertRuleRequest?: DisableAlertRuleRequest): Promise<DisableAlertRuleResponse> {
        const options = ParamCreater().disableAlertRule(disableAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Enable alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {Array<string>} enableAlertRuleRequestBody 启用告警规则的请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableAlertRule(enableAlertRuleRequest?: EnableAlertRuleRequest): Promise<EnableAlertRuleResponse> {
        const options = ParamCreater().enableAlertRule(enableAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List alert rule metrics
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 告警规则总览
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRuleMetrics(listAlertRuleMetricsRequest?: ListAlertRuleMetricsRequest): Promise<ListAlertRuleMetricsResponse> {
        const options = ParamCreater().listAlertRuleMetrics(listAlertRuleMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List alert rule templates
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出告警规则模板
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {number} offset 偏移量。Offset.
     * @param {number} limit 条数。Limit.
     * @param {string} [sortKey] 排序字段。Sort key
     * @param {'asc' | 'desc'} [sortDir] 排序顺序，顺序、逆序。Sort direction, asc, desc。
     * @param {Array<'TIPS' | 'LOW' | 'MEDIUM' | 'HIGH' | 'FATAL'>} [severity] 严重程度，提示、低危、中危、高危、致命。Severity. TIPS, LOW, MEDIUM, HIGH, FATAL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRuleTemplates(listAlertRuleTemplatesRequest?: ListAlertRuleTemplatesRequest): Promise<ListAlertRuleTemplatesResponse> {
        const options = ParamCreater().listAlertRuleTemplates(listAlertRuleTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List alert rules
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 列出告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {number} offset 偏移量。Offset.
     * @param {number} limit 条数。Limit.
     * @param {string} [sortKey] 排序字段。Sort key
     * @param {'asc' | 'desc'} [sortDir] 排序顺序，顺序、逆序。Sort direction, asc, desc。
     * @param {string} [pipeId] 数据管道 ID。Pipe ID.
     * @param {string} [ruleName] 告警规则名称。Alert rule name.
     * @param {string} [ruleId] 告警规则 ID。Alert rule ID.
     * @param {Array<'ENABLED' | 'DISABLED'>} [status] 启用状态，启用、停用。Status, enabled, disabled.
     * @param {Array<'TIPS' | 'LOW' | 'MEDIUM' | 'HIGH' | 'FATAL'>} [severity] 严重程度，提示、低危、中危、高危、致命。Severity. TIPS, LOW, MEDIUM, HIGH, FATAL
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlertRules(listAlertRulesRequest?: ListAlertRulesRequest): Promise<ListAlertRulesResponse> {
        const options = ParamCreater().listAlertRules(listAlertRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 搜索告警列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索告警列表
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {DataobjectSearch} [listAlertsRequestBody] List alert RequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlerts(listAlertsRequest?: ListAlertsRequest): Promise<ListAlertsResponse> {
        const options = ParamCreater().listAlerts(listAlertsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据类列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据类列表
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 数据量
     * @param {string} [name] 名称查询
     * @param {string} [businessCode] 业务编码
     * @param {string} [description] 描述
     * @param {boolean} [isBuiltIn] 是否内置
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataclass(listDataclassRequest?: ListDataclassRequest): Promise<ListDataclassResponse> {
        const options = ParamCreater().listDataclass(listDataclassRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询字段列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询字段列表
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} dataclassId 数据类id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 数据量
     * @param {string} [name] 名称查询
     * @param {boolean} [isBuiltIn] 是否内置
     * @param {string} [fieldCategory] 字段分类
     * @param {boolean} [mapping] 是否展示在分类映射外的其他地方
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataclassFields(listDataclassFieldsRequest?: ListDataclassFieldsRequest): Promise<ListDataclassFieldsResponse> {
        const options = ParamCreater().listDataclassFields(listDataclassFieldsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询关联Dataobject列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询关联Dataobject列表
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} dataclassType 关联主体dataobject所属数据类，小写复数，如告警为alerts，事件为incidents
     * @param {string} dataObjectId 关联主体dataobject的id
     * @param {string} relatedDataclassType 被关联的dataobject所属数据类，小写复数，如告警为alerts，事件为incidents
     * @param {DataobjectSearch} [listDataobjectRelationsRequestBody] 查询关联Dataobject列表请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataobjectRelations(listDataobjectRelationsRequest?: ListDataobjectRelationsRequest): Promise<ListDataobjectRelationsResponse> {
        const options = ParamCreater().listDataobjectRelations(listDataobjectRelationsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 搜索事件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 搜索事件列表
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {DataobjectSearch} [listIncidentsRequestBody] 搜索事件列表请求body体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIncidents(listIncidentsRequest?: ListIncidentsRequest): Promise<ListIncidentsResponse> {
        const options = ParamCreater().listIncidents(listIncidentsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询威胁情报列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询威胁情报列表
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {IndicatorListSearchRequest} listIndicatorsRequestBody 查询威胁情报列表请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listIndicators(listIndicatorsRequest?: ListIndicatorsRequest): Promise<ListIndicatorsResponse> {
        const options = ParamCreater().listIndicators(listIndicatorsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本动作列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本动作
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {number} limit 分页查询参数，用于指定一次查询最多的结果数，从1开始
     * @param {number} offset 分页查询参数。用于指定查询结果的起始位置，从0开始
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlaybookActions(listPlaybookActionsRequest?: ListPlaybookActionsRequest): Promise<ListPlaybookActionsResponse> {
        const options = ParamCreater().listPlaybookActions(listPlaybookActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本审核结果
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本审核结果
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} [resourceId] 资源ID
     * @param {string} [approveType] 审核类型。（PLAYBOOK-剧本, AOP_WORKFLOW--流程)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlaybookApproves(listPlaybookApprovesRequest?: ListPlaybookApprovesRequest): Promise<ListPlaybookApprovesResponse> {
        const options = ParamCreater().listPlaybookApproves(listPlaybookApprovesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本实例审计日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本实例审计日志
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {number} offset offset
     * @param {number} limit limit
     * @param {string} [sortKey] sort_key
     * @param {'asc' | 'desc'} [sortDir] sort_dir. asc, desc
     * @param {AuditLogInfo} [listPlaybookAuditLogsRequestBody] Audit log Search
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlaybookAuditLogs(listPlaybookAuditLogsRequest?: ListPlaybookAuditLogsRequest): Promise<ListPlaybookAuditLogsResponse> {
        const options = ParamCreater().listPlaybookAuditLogs(listPlaybookAuditLogsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本实例列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本实例列表
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {number} limit 分页查询参数，用于指定一次查询最多的结果数，从1开始
     * @param {number} offset 分页查询参数。用于指定查询结果的起始位置，从0开始
     * @param {string} [status] 剧本实例状态. (RUNNING--运行中、FINISHED--成功、FAILED--失败、RETRYING--重试中、TERMINATING--终止中、TERMINATED--已终止)
     * @param {string} [name] 实例名称
     * @param {string} [playbookName] 剧本名称
     * @param {string} [dataclassName] 数据类名称
     * @param {string} [dataobjectName] 数据对象名称
     * @param {string} [triggerType] 触发类型. TIMER--定时触发, EVENT--事件触发
     * @param {string} [fromDate] 查询起始时间
     * @param {string} [toDate] 查询结束时间
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlaybookInstances(listPlaybookInstancesRequest?: ListPlaybookInstancesRequest): Promise<ListPlaybookInstancesResponse> {
        const options = ParamCreater().listPlaybookInstances(listPlaybookInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本版本列表
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} playbookId 剧本ID
     * @param {string} [status] 剧本版本状态，编辑中：EDITING  审核中：APPROVING  不通过：UNPASSED 已发布：PUBLISHED
     * @param {number} [enabled] 启用/禁用
     * @param {number} [versionType] 版本类型， 草稿版本：0  正式版本：1
     * @param {number} [offset] 分页查询参数。用于指定查询结果的起始位置，从0开始
     * @param {number} [limit] 分页查询参数，用于指定一次查询最多的结果数，从1开始
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlaybookVersions(listPlaybookVersionsRequest?: ListPlaybookVersionsRequest): Promise<ListPlaybookVersionsResponse> {
        const options = ParamCreater().listPlaybookVersions(listPlaybookVersionsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本列表
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {number} offset 分页查询参数。用于指定查询结果的起始位置，从0开始
     * @param {number} limit 分页查询参数，用于指定一次查询最多的结果数，从1开始
     * @param {string} [searchTxt] 搜索关键字
     * @param {boolean} [enabled] 是否启用
     * @param {string} [description] 剧本描述
     * @param {string} [dataclassName] 数据类名称
     * @param {string} [name] 剧本名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPlaybooks(listPlaybooksRequest?: ListPlaybooksRequest): Promise<ListPlaybooksResponse> {
        const options = ParamCreater().listPlaybooks(listPlaybooksRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询流程列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询流程列表
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {number} [offset] 偏移量
     * @param {number} [limit] 数据量
     * @param {'asc' | 'desc'} [order] 排序顺序，asc：升序，desc：降序
     * @param {'category' | 'create_time'} [sortby] 排序字段，create_time：创建时间，category：类型分类名称
     * @param {boolean} [enabled] 是否启用
     * @param {boolean} [lastVersion] 最新版本号
     * @param {string} [name] 流程名称
     * @param {string} [description] 流程描述
     * @param {string} [dataclassId] 数据类ID
     * @param {string} [dataclassName] 数据类名称
     * @param {string} [aopType] 流程类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkflows(listWorkflowsRequest?: ListWorkflowsRequest): Promise<ListWorkflowsResponse> {
        const options = ParamCreater().listWorkflows(listWorkflowsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 可通过工作空间名称、工作空间描述、创建时间等条件对租户的工作空间进行筛选。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作空间列表
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {number} offset 偏移量 指定返回记录的开始位置，必须为数字，取值范围为大于或等于0，
     * @param {number} limit 每页显示个数
     * @param {string} [regionId] 区域id
     * @param {string} [name] 名称查询
     * @param {string} [description] 描述查询
     * @param {string} [viewBindId] 视图绑定的空间id
     * @param {string} [viewBindName] 视图绑定的空间名称
     * @param {string} [createTimeStart] 创建时间开始，例如2024-04-26T16:08:09Z+0800
     * @param {string} [createTimeEnd] 创建时间结束，例如2024-04-2T16:08:09Z+0800
     * @param {boolean} [isView] 是否查询视图 true or false
     * @param {string} [ids] 工作空间id数组，英文逗号分隔
     * @param {string} [normalProjectId] 普通项目的项目id
     * @param {string} [enterpriseProjectId] 企业项目的项目id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listWorkspaces(listWorkspacesRequest?: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
        const options = ParamCreater().listWorkspaces(listWorkspacesRequest);

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
     * @param {string} workspaceId 工作空间id
     * @param {string} xLanguage 语言，参考值：zh-CN、en-US
     * @param {string} contentType 内容类型
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
     * 获取告警详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取告警详情
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} alertId 告警ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlert(showAlertRequest?: ShowAlertRequest): Promise<ShowAlertResponse> {
        const options = ParamCreater().showAlert(showAlertRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看告警规则 Get alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {string} ruleId 告警规则 ID。Alert rule ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlertRule(showAlertRuleRequest?: ShowAlertRuleRequest): Promise<ShowAlertRuleResponse> {
        const options = ParamCreater().showAlertRule(showAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * List alert rule templates
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看告警规则模板
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {string} templateId 告警规则模板 ID。Alert rule template ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlertRuleTemplate(showAlertRuleTemplateRequest?: ShowAlertRuleTemplateRequest): Promise<ShowAlertRuleTemplateResponse> {
        const options = ParamCreater().showAlertRuleTemplate(showAlertRuleTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取事件详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取事件详情
     * @param {string} contentType 内容类型
     * @param {string} workspaceId 工作空间id
     * @param {string} incidentId 事件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIncident(showIncidentRequest?: ShowIncidentRequest): Promise<ShowIncidentResponse> {
        const options = ParamCreater().showIncident(showIncidentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询威胁情报详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询威胁情报详情
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} indicatorId 威胁情报ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showIndicatorDetail(showIndicatorDetailRequest?: ShowIndicatorDetailRequest): Promise<ShowIndicatorDetailResponse> {
        const options = ParamCreater().showIndicatorDetail(showIndicatorDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本详情
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} playbookId ID of playbook
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybook(showPlaybookRequest?: ShowPlaybookRequest): Promise<ShowPlaybookResponse> {
        const options = ParamCreater().showPlaybook(showPlaybookRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Show playbook instance
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本实例详情
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} instanceId instance _id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybookInstance(showPlaybookInstanceRequest?: ShowPlaybookInstanceRequest): Promise<ShowPlaybookInstanceResponse> {
        const options = ParamCreater().showPlaybookInstance(showPlaybookInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 剧本运行监控
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 剧本运行监控
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} playbookId 剧本ID
     * @param {string} startTime 开始时间。格式ISO8601：YYYY-MM-DDTHH:mm:ss.ms+timezone。例如：2021-01-30T23:00:00Z+0800。时区信息为剧本实例产生的时区，无法解析时区的时间，默认时区填东八区。
     * @param {'ALL:全部，VALID:有效的，DELETED:已删除'} versionQueryType 统计剧本版本类型（ALL:全部，VALID:有效的，DELETED:已删除）
     * @param {string} endTime 结束时间。格式ISO8601：YYYY-MM-DDTHH:mm:ss.ms+timezone。例如：2021-01-30T23:00:00Z+0800。时区信息为剧本实例产生的时区，无法解析时区的时间，默认时区填东八区。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybookMonitors(showPlaybookMonitorsRequest?: ShowPlaybookMonitorsRequest): Promise<ShowPlaybookMonitorsResponse> {
        const options = ParamCreater().showPlaybookMonitors(showPlaybookMonitorsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本规则详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本规则详情
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId version Id value
     * @param {string} ruleId version Id value
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybookRule(showPlaybookRuleRequest?: ShowPlaybookRuleRequest): Promise<ShowPlaybookRuleResponse> {
        const options = ParamCreater().showPlaybookRule(showPlaybookRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 剧本统计数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 剧本数据统计
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybookStatistics(showPlaybookStatisticsRequest?: ShowPlaybookStatisticsRequest): Promise<ShowPlaybookStatisticsResponse> {
        const options = ParamCreater().showPlaybookStatistics(showPlaybookStatisticsRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询剧本拓扑关系
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本拓扑关系
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} instanceId 剧本实例ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybookTopology(showPlaybookTopologyRequest?: ShowPlaybookTopologyRequest): Promise<ShowPlaybookTopologyResponse> {
        const options = ParamCreater().showPlaybookTopology(showPlaybookTopologyRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Show playbook version version
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询剧本版本详情
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPlaybookVersion(showPlaybookVersionRequest?: ShowPlaybookVersionRequest): Promise<ShowPlaybookVersionResponse> {
        const options = ParamCreater().showPlaybookVersion(showPlaybookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询工作空间名称、描述等详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询工作空间详情
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWorkspace(showWorkspaceRequest?: ShowWorkspaceRequest): Promise<ShowWorkspaceResponse> {
        const options = ParamCreater().showWorkspace(showWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * Update alert rule
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新告警规则
     * @param {string} workspaceId 工作空间 ID。Workspace ID.
     * @param {string} ruleId 告警规则 ID。Alert rule ID.
     * @param {UpdateAlertRuleRequestBody} updateAlertRuleRequestBody UpdateAlertRuleRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlertRule(updateAlertRuleRequest?: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse> {
        const options = ParamCreater().updateAlertRule(updateAlertRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新威胁情报
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新威胁情报
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} indicatorId 威胁情报ID
     * @param {UpdateIndicatorRequestBody} updateIndicatorRequestBody 更新威胁情报请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateIndicator(updateIndicatorRequest?: UpdateIndicatorRequest): Promise<UpdateIndicatorResponse> {
        const options = ParamCreater().updateIndicator(updateIndicatorRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改剧本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改剧本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} playbookId 剧本ID
     * @param {ModifyPlaybookInfo} [updatePlaybookRequestBody] 更新剧本请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePlaybook(updatePlaybookRequest?: UpdatePlaybookRequest): Promise<UpdatePlaybookResponse> {
        const options = ParamCreater().updatePlaybook(updatePlaybookRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新剧本动作
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新剧本动作
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {string} actionId 剧本动作ID
     * @param {ModifyActionInfo} updatePlaybookActionRequestBody 更新剧本动作请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePlaybookAction(updatePlaybookActionRequest?: UpdatePlaybookActionRequest): Promise<UpdatePlaybookActionResponse> {
        const options = ParamCreater().updatePlaybookAction(updatePlaybookActionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新剧本规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新剧本规则
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {string} ruleId 剧本规则ID
     * @param {ModifyRuleInfo} updatePlaybookRuleRequestBody 更新剧本规则请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePlaybookRule(updatePlaybookRuleRequest?: UpdatePlaybookRuleRequest): Promise<UpdatePlaybookRuleResponse> {
        const options = ParamCreater().updatePlaybookRule(updatePlaybookRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新剧本版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新剧本版本
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {string} versionId 剧本版本ID
     * @param {ModifyPlaybookVersionInfo} [updatePlaybookVersionRequestBody] 更新剧本版本请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePlaybookVersion(updatePlaybookVersionRequest?: UpdatePlaybookVersionRequest): Promise<UpdatePlaybookVersionResponse> {
        const options = ParamCreater().updatePlaybookVersion(updatePlaybookVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = ['X-request-id'];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新工作空间名称、描述等信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新工作空间
     * @param {string} contentType application/json;charset&#x3D;UTF-8
     * @param {string} workspaceId 工作空间ID
     * @param {UpdateWorkspaceRequestBody} updateWorkspaceRequestBody 更新工作空间对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
        const options = ParamCreater().updateWorkspace(updateWorkspaceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量查询指标结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchSearchMetricHits(batchSearchMetricHitsRequest?: BatchSearchMetricHitsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/sa/metrics/hits",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let workspaceId;
            
            let timespan;
            
            let cache;

            if (batchSearchMetricHitsRequest !== null && batchSearchMetricHitsRequest !== undefined) {
                if (batchSearchMetricHitsRequest instanceof BatchSearchMetricHitsRequest) {
                    workspaceId = batchSearchMetricHitsRequest.workspaceId;
                    body = batchSearchMetricHitsRequest.body
                    timespan = batchSearchMetricHitsRequest.timespan;
                    cache = batchSearchMetricHitsRequest.cache;
                } else {
                    workspaceId = batchSearchMetricHitsRequest['workspace_id'];
                    body = batchSearchMetricHitsRequest['body'];
                    timespan = batchSearchMetricHitsRequest['timespan'];
                    cache = batchSearchMetricHitsRequest['cache'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling batchSearchMetricHits.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (timespan !== null && timespan !== undefined) {
                localVarQueryParameter['timespan'] = timespan;
            }
            if (cache !== null && cache !== undefined) {
                localVarQueryParameter['cache'] = cache;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑告警，根据实际修改的属性更新，未修改的列不更新
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAlert(changeAlertRequest?: ChangeAlertRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/alerts/{alert_id}",
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
            
            let alertId;

            if (changeAlertRequest !== null && changeAlertRequest !== undefined) {
                if (changeAlertRequest instanceof ChangeAlertRequest) {
                    contentType = changeAlertRequest.contentType;
                    workspaceId = changeAlertRequest.workspaceId;
                    alertId = changeAlertRequest.alertId;
                    body = changeAlertRequest.body
                } else {
                    contentType = changeAlertRequest['content-type'];
                    workspaceId = changeAlertRequest['workspace_id'];
                    alertId = changeAlertRequest['alert_id'];
                    body = changeAlertRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling changeAlert.');
            }
            if (alertId === null || alertId === undefined) {
            throw new RequiredError('alertId','Required parameter alertId was null or undefined when calling changeAlert.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'alert_id': alertId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 编辑事件，根据实际修改的属性更新，未修改的列不更新
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeIncident(changeIncidentRequest?: ChangeIncidentRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/incidents/{incident_id}",
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
            
            let incidentId;

            if (changeIncidentRequest !== null && changeIncidentRequest !== undefined) {
                if (changeIncidentRequest instanceof ChangeIncidentRequest) {
                    contentType = changeIncidentRequest.contentType;
                    workspaceId = changeIncidentRequest.workspaceId;
                    incidentId = changeIncidentRequest.incidentId;
                    body = changeIncidentRequest.body
                } else {
                    contentType = changeIncidentRequest['content-type'];
                    workspaceId = changeIncidentRequest['workspace_id'];
                    incidentId = changeIncidentRequest['incident_id'];
                    body = changeIncidentRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling changeIncident.');
            }
            if (incidentId === null || incidentId === undefined) {
            throw new RequiredError('incidentId','Required parameter incidentId was null or undefined when calling changeIncident.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'incident_id': incidentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作剧本实例
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changePlaybookInstance(changePlaybookInstanceRequest?: ChangePlaybookInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/instances/{instance_id}/operation",
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
            
            let instanceId;

            if (changePlaybookInstanceRequest !== null && changePlaybookInstanceRequest !== undefined) {
                if (changePlaybookInstanceRequest instanceof ChangePlaybookInstanceRequest) {
                    contentType = changePlaybookInstanceRequest.contentType;
                    workspaceId = changePlaybookInstanceRequest.workspaceId;
                    instanceId = changePlaybookInstanceRequest.instanceId;
                    body = changePlaybookInstanceRequest.body
                } else {
                    contentType = changePlaybookInstanceRequest['content-type'];
                    workspaceId = changePlaybookInstanceRequest['workspace_id'];
                    instanceId = changePlaybookInstanceRequest['instance_id'];
                    body = changePlaybookInstanceRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling changePlaybookInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling changePlaybookInstance.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 克隆剧本及版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyPlaybookVersion(copyPlaybookVersionRequest?: CopyPlaybookVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/clone",
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
            
            let versionId;

            if (copyPlaybookVersionRequest !== null && copyPlaybookVersionRequest !== undefined) {
                if (copyPlaybookVersionRequest instanceof CopyPlaybookVersionRequest) {
                    contentType = copyPlaybookVersionRequest.contentType;
                    workspaceId = copyPlaybookVersionRequest.workspaceId;
                    versionId = copyPlaybookVersionRequest.versionId;
                    body = copyPlaybookVersionRequest.body
                } else {
                    contentType = copyPlaybookVersionRequest['content-type'];
                    workspaceId = copyPlaybookVersionRequest['workspace_id'];
                    versionId = copyPlaybookVersionRequest['version_id'];
                    body = copyPlaybookVersionRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling copyPlaybookVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling copyPlaybookVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlert(createAlertRequest?: CreateAlertRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/alerts",
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

            if (createAlertRequest !== null && createAlertRequest !== undefined) {
                if (createAlertRequest instanceof CreateAlertRequest) {
                    contentType = createAlertRequest.contentType;
                    workspaceId = createAlertRequest.workspaceId;
                    body = createAlertRequest.body
                } else {
                    contentType = createAlertRequest['content-type'];
                    workspaceId = createAlertRequest['workspace_id'];
                    body = createAlertRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createAlert.');
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
         * Create alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlertRule(createAlertRuleRequest?: CreateAlertRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules",
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
         * Simulate alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlertRuleSimulation(createAlertRuleSimulationRequest?: CreateAlertRuleSimulationRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/simulation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createAlertRuleSimulationRequest !== null && createAlertRuleSimulationRequest !== undefined) {
                if (createAlertRuleSimulationRequest instanceof CreateAlertRuleSimulationRequest) {
                    workspaceId = createAlertRuleSimulationRequest.workspaceId;
                    body = createAlertRuleSimulationRequest.body
                } else {
                    workspaceId = createAlertRuleSimulationRequest['workspace_id'];
                    body = createAlertRuleSimulationRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createAlertRuleSimulation.');
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
         * 告警转事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBatchOrderAlerts(createBatchOrderAlertsRequest?: CreateBatchOrderAlertsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/alerts/batch-order",
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

            if (createBatchOrderAlertsRequest !== null && createBatchOrderAlertsRequest !== undefined) {
                if (createBatchOrderAlertsRequest instanceof CreateBatchOrderAlertsRequest) {
                    contentType = createBatchOrderAlertsRequest.contentType;
                    workspaceId = createBatchOrderAlertsRequest.workspaceId;
                    body = createBatchOrderAlertsRequest.body
                } else {
                    contentType = createBatchOrderAlertsRequest['content-type'];
                    workspaceId = createBatchOrderAlertsRequest['workspace_id'];
                    body = createBatchOrderAlertsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createBatchOrderAlerts.');
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
         * 关联Dataobject
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataobjectRelations(createDataobjectRelationsRequest?: CreateDataobjectRelationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/{dataclass_type}/{data_object_id}/{related_dataclass_type}",
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
            
            let dataclassType;
            
            let dataObjectId;
            
            let relatedDataclassType;

            if (createDataobjectRelationsRequest !== null && createDataobjectRelationsRequest !== undefined) {
                if (createDataobjectRelationsRequest instanceof CreateDataobjectRelationsRequest) {
                    contentType = createDataobjectRelationsRequest.contentType;
                    workspaceId = createDataobjectRelationsRequest.workspaceId;
                    dataclassType = createDataobjectRelationsRequest.dataclassType;
                    dataObjectId = createDataobjectRelationsRequest.dataObjectId;
                    relatedDataclassType = createDataobjectRelationsRequest.relatedDataclassType;
                    body = createDataobjectRelationsRequest.body
                } else {
                    contentType = createDataobjectRelationsRequest['content-type'];
                    workspaceId = createDataobjectRelationsRequest['workspace_id'];
                    dataclassType = createDataobjectRelationsRequest['dataclass_type'];
                    dataObjectId = createDataobjectRelationsRequest['data_object_id'];
                    relatedDataclassType = createDataobjectRelationsRequest['related_dataclass_type'];
                    body = createDataobjectRelationsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createDataobjectRelations.');
            }
            if (dataclassType === null || dataclassType === undefined) {
            throw new RequiredError('dataclassType','Required parameter dataclassType was null or undefined when calling createDataobjectRelations.');
            }
            if (dataObjectId === null || dataObjectId === undefined) {
            throw new RequiredError('dataObjectId','Required parameter dataObjectId was null or undefined when calling createDataobjectRelations.');
            }
            if (relatedDataclassType === null || relatedDataclassType === undefined) {
            throw new RequiredError('relatedDataclassType','Required parameter relatedDataclassType was null or undefined when calling createDataobjectRelations.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'dataclass_type': dataclassType,'data_object_id': dataObjectId,'related_dataclass_type': relatedDataclassType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建数据空间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataspace(createDataspaceRequest?: CreateDataspaceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/dataspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (createDataspaceRequest !== null && createDataspaceRequest !== undefined) {
                if (createDataspaceRequest instanceof CreateDataspaceRequest) {
                    workspaceId = createDataspaceRequest.workspaceId;
                    body = createDataspaceRequest.body
                } else {
                    workspaceId = createDataspaceRequest['workspace_id'];
                    body = createDataspaceRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createDataspace.');
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
         * 创建事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIncident(createIncidentRequest?: CreateIncidentRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/incidents",
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

            if (createIncidentRequest !== null && createIncidentRequest !== undefined) {
                if (createIncidentRequest instanceof CreateIncidentRequest) {
                    contentType = createIncidentRequest.contentType;
                    workspaceId = createIncidentRequest.workspaceId;
                    body = createIncidentRequest.body
                } else {
                    contentType = createIncidentRequest['content-type'];
                    workspaceId = createIncidentRequest['workspace_id'];
                    body = createIncidentRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createIncident.');
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
         * 创建威胁情报
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createIndicator(createIndicatorRequest?: CreateIndicatorRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/indicators",
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

            if (createIndicatorRequest !== null && createIndicatorRequest !== undefined) {
                if (createIndicatorRequest instanceof CreateIndicatorRequest) {
                    contentType = createIndicatorRequest.contentType;
                    workspaceId = createIndicatorRequest.workspaceId;
                    body = createIndicatorRequest.body
                } else {
                    contentType = createIndicatorRequest['content-type'];
                    workspaceId = createIndicatorRequest['workspace_id'];
                    body = createIndicatorRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createIndicator.');
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
         * 创建数据管道
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPipe(createPipeRequest?: CreatePipeRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/pipes",
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
         * 创建剧本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlaybook(createPlaybookRequest?: CreatePlaybookRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks",
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

            if (createPlaybookRequest !== null && createPlaybookRequest !== undefined) {
                if (createPlaybookRequest instanceof CreatePlaybookRequest) {
                    contentType = createPlaybookRequest.contentType;
                    workspaceId = createPlaybookRequest.workspaceId;
                    body = createPlaybookRequest.body
                } else {
                    contentType = createPlaybookRequest['content-type'];
                    workspaceId = createPlaybookRequest['workspace_id'];
                    body = createPlaybookRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createPlaybook.');
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
         * 创建剧本动作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlaybookAction(createPlaybookActionRequest?: CreatePlaybookActionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/actions",
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
            
            let versionId;

            if (createPlaybookActionRequest !== null && createPlaybookActionRequest !== undefined) {
                if (createPlaybookActionRequest instanceof CreatePlaybookActionRequest) {
                    contentType = createPlaybookActionRequest.contentType;
                    workspaceId = createPlaybookActionRequest.workspaceId;
                    versionId = createPlaybookActionRequest.versionId;
                    body = createPlaybookActionRequest.body
                } else {
                    contentType = createPlaybookActionRequest['content-type'];
                    workspaceId = createPlaybookActionRequest['workspace_id'];
                    versionId = createPlaybookActionRequest['version_id'];
                    body = createPlaybookActionRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createPlaybookAction.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling createPlaybookAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 审核剧本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlaybookApprove(createPlaybookApproveRequest?: CreatePlaybookApproveRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/approval",
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
            
            let versionId;

            if (createPlaybookApproveRequest !== null && createPlaybookApproveRequest !== undefined) {
                if (createPlaybookApproveRequest instanceof CreatePlaybookApproveRequest) {
                    contentType = createPlaybookApproveRequest.contentType;
                    workspaceId = createPlaybookApproveRequest.workspaceId;
                    versionId = createPlaybookApproveRequest.versionId;
                    body = createPlaybookApproveRequest.body
                } else {
                    contentType = createPlaybookApproveRequest['content-type'];
                    workspaceId = createPlaybookApproveRequest['workspace_id'];
                    versionId = createPlaybookApproveRequest['version_id'];
                    body = createPlaybookApproveRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createPlaybookApprove.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling createPlaybookApprove.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建剧本规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlaybookRule(createPlaybookRuleRequest?: CreatePlaybookRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/rules",
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
            
            let versionId;

            if (createPlaybookRuleRequest !== null && createPlaybookRuleRequest !== undefined) {
                if (createPlaybookRuleRequest instanceof CreatePlaybookRuleRequest) {
                    contentType = createPlaybookRuleRequest.contentType;
                    workspaceId = createPlaybookRuleRequest.workspaceId;
                    versionId = createPlaybookRuleRequest.versionId;
                    body = createPlaybookRuleRequest.body
                } else {
                    contentType = createPlaybookRuleRequest['content-type'];
                    workspaceId = createPlaybookRuleRequest['workspace_id'];
                    versionId = createPlaybookRuleRequest['version_id'];
                    body = createPlaybookRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createPlaybookRule.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling createPlaybookRule.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建剧本版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPlaybookVersion(createPlaybookVersionRequest?: CreatePlaybookVersionRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/{playbook_id}/versions",
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
            
            let playbookId;

            if (createPlaybookVersionRequest !== null && createPlaybookVersionRequest !== undefined) {
                if (createPlaybookVersionRequest instanceof CreatePlaybookVersionRequest) {
                    contentType = createPlaybookVersionRequest.contentType;
                    workspaceId = createPlaybookVersionRequest.workspaceId;
                    playbookId = createPlaybookVersionRequest.playbookId;
                    body = createPlaybookVersionRequest.body
                } else {
                    contentType = createPlaybookVersionRequest['content-type'];
                    workspaceId = createPlaybookVersionRequest['workspace_id'];
                    playbookId = createPlaybookVersionRequest['playbook_id'];
                    body = createPlaybookVersionRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling createPlaybookVersion.');
            }
            if (playbookId === null || playbookId === undefined) {
            throw new RequiredError('playbookId','Required parameter playbookId was null or undefined when calling createPlaybookVersion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'playbook_id': playbookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开通安全云脑按需服务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPostPaidOrder(createPostPaidOrderRequest?: CreatePostPaidOrderRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/subscriptions/orders",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createPostPaidOrderRequest !== null && createPostPaidOrderRequest !== undefined) {
                if (createPostPaidOrderRequest instanceof CreatePostPaidOrderRequest) {
                    xLanguage = createPostPaidOrderRequest.xLanguage;
                    body = createPostPaidOrderRequest.body
                } else {
                    xLanguage = createPostPaidOrderRequest['X-Language'];
                    body = createPostPaidOrderRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在使用安全云脑的基线检查、告警管理、安全分析、安全编排等功能前，需要创建工作空间，它可以将资源划分为各个不同的工作场景，避免资源冗余查找不便，影响日常使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createWorkspace(createWorkspaceRequest?: CreateWorkspaceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createWorkspaceRequest !== null && createWorkspaceRequest !== undefined) {
                if (createWorkspaceRequest instanceof CreateWorkspaceRequest) {
                    contentType = createWorkspaceRequest.contentType;
                    body = createWorkspaceRequest.body
                } else {
                    contentType = createWorkspaceRequest['content-type'];
                    body = createWorkspaceRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlert(deleteAlertRequest?: DeleteAlertRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/alerts",
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

            if (deleteAlertRequest !== null && deleteAlertRequest !== undefined) {
                if (deleteAlertRequest instanceof DeleteAlertRequest) {
                    contentType = deleteAlertRequest.contentType;
                    workspaceId = deleteAlertRequest.workspaceId;
                    body = deleteAlertRequest.body
                } else {
                    contentType = deleteAlertRequest['content-type'];
                    workspaceId = deleteAlertRequest['workspace_id'];
                    body = deleteAlertRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteAlert.');
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
         * Delete alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlertRule(deleteAlertRuleRequest?: DeleteAlertRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (deleteAlertRuleRequest !== null && deleteAlertRuleRequest !== undefined) {
                if (deleteAlertRuleRequest instanceof DeleteAlertRuleRequest) {
                    workspaceId = deleteAlertRuleRequest.workspaceId;
                    body = deleteAlertRuleRequest.body
                } else {
                    workspaceId = deleteAlertRuleRequest['workspace_id'];
                    body = deleteAlertRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteAlertRule.');
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
         * 取消关联Dataobject
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDataobjectRelations(deleteDataobjectRelationsRequest?: DeleteDataobjectRelationsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/{dataclass_type}/{data_object_id}/{related_dataclass_type}",
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
            
            let dataclassType;
            
            let dataObjectId;
            
            let relatedDataclassType;

            if (deleteDataobjectRelationsRequest !== null && deleteDataobjectRelationsRequest !== undefined) {
                if (deleteDataobjectRelationsRequest instanceof DeleteDataobjectRelationsRequest) {
                    contentType = deleteDataobjectRelationsRequest.contentType;
                    workspaceId = deleteDataobjectRelationsRequest.workspaceId;
                    dataclassType = deleteDataobjectRelationsRequest.dataclassType;
                    dataObjectId = deleteDataobjectRelationsRequest.dataObjectId;
                    relatedDataclassType = deleteDataobjectRelationsRequest.relatedDataclassType;
                    body = deleteDataobjectRelationsRequest.body
                } else {
                    contentType = deleteDataobjectRelationsRequest['content-type'];
                    workspaceId = deleteDataobjectRelationsRequest['workspace_id'];
                    dataclassType = deleteDataobjectRelationsRequest['dataclass_type'];
                    dataObjectId = deleteDataobjectRelationsRequest['data_object_id'];
                    relatedDataclassType = deleteDataobjectRelationsRequest['related_dataclass_type'];
                    body = deleteDataobjectRelationsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteDataobjectRelations.');
            }
            if (dataclassType === null || dataclassType === undefined) {
            throw new RequiredError('dataclassType','Required parameter dataclassType was null or undefined when calling deleteDataobjectRelations.');
            }
            if (dataObjectId === null || dataObjectId === undefined) {
            throw new RequiredError('dataObjectId','Required parameter dataObjectId was null or undefined when calling deleteDataobjectRelations.');
            }
            if (relatedDataclassType === null || relatedDataclassType === undefined) {
            throw new RequiredError('relatedDataclassType','Required parameter relatedDataclassType was null or undefined when calling deleteDataobjectRelations.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'dataclass_type': dataclassType,'data_object_id': dataObjectId,'related_dataclass_type': relatedDataclassType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除事件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIncident(deleteIncidentRequest?: DeleteIncidentRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/incidents",
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

            if (deleteIncidentRequest !== null && deleteIncidentRequest !== undefined) {
                if (deleteIncidentRequest instanceof DeleteIncidentRequest) {
                    contentType = deleteIncidentRequest.contentType;
                    workspaceId = deleteIncidentRequest.workspaceId;
                    body = deleteIncidentRequest.body
                } else {
                    contentType = deleteIncidentRequest['content-type'];
                    workspaceId = deleteIncidentRequest['workspace_id'];
                    body = deleteIncidentRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteIncident.');
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
         * 删除威胁情报
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteIndicator(deleteIndicatorRequest?: DeleteIndicatorRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/indicators",
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

            if (deleteIndicatorRequest !== null && deleteIndicatorRequest !== undefined) {
                if (deleteIndicatorRequest instanceof DeleteIndicatorRequest) {
                    contentType = deleteIndicatorRequest.contentType;
                    workspaceId = deleteIndicatorRequest.workspaceId;
                    body = deleteIndicatorRequest.body
                } else {
                    contentType = deleteIndicatorRequest['content-type'];
                    workspaceId = deleteIndicatorRequest['workspace_id'];
                    body = deleteIndicatorRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteIndicator.');
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
         * 删除剧本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePlaybook(deletePlaybookRequest?: DeletePlaybookRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/{playbook_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let playbookId;

            if (deletePlaybookRequest !== null && deletePlaybookRequest !== undefined) {
                if (deletePlaybookRequest instanceof DeletePlaybookRequest) {
                    contentType = deletePlaybookRequest.contentType;
                    workspaceId = deletePlaybookRequest.workspaceId;
                    playbookId = deletePlaybookRequest.playbookId;
                } else {
                    contentType = deletePlaybookRequest['content-type'];
                    workspaceId = deletePlaybookRequest['workspace_id'];
                    playbookId = deletePlaybookRequest['playbook_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deletePlaybook.');
            }
            if (playbookId === null || playbookId === undefined) {
            throw new RequiredError('playbookId','Required parameter playbookId was null or undefined when calling deletePlaybook.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'playbook_id': playbookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除剧本动作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePlaybookAction(deletePlaybookActionRequest?: DeletePlaybookActionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/actions/{action_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let versionId;
            
            let actionId;

            if (deletePlaybookActionRequest !== null && deletePlaybookActionRequest !== undefined) {
                if (deletePlaybookActionRequest instanceof DeletePlaybookActionRequest) {
                    contentType = deletePlaybookActionRequest.contentType;
                    workspaceId = deletePlaybookActionRequest.workspaceId;
                    versionId = deletePlaybookActionRequest.versionId;
                    actionId = deletePlaybookActionRequest.actionId;
                } else {
                    contentType = deletePlaybookActionRequest['content-type'];
                    workspaceId = deletePlaybookActionRequest['workspace_id'];
                    versionId = deletePlaybookActionRequest['version_id'];
                    actionId = deletePlaybookActionRequest['action_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deletePlaybookAction.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deletePlaybookAction.');
            }
            if (actionId === null || actionId === undefined) {
            throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling deletePlaybookAction.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId,'action_id': actionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除剧本规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePlaybookRule(deletePlaybookRuleRequest?: DeletePlaybookRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let versionId;
            
            let ruleId;

            if (deletePlaybookRuleRequest !== null && deletePlaybookRuleRequest !== undefined) {
                if (deletePlaybookRuleRequest instanceof DeletePlaybookRuleRequest) {
                    contentType = deletePlaybookRuleRequest.contentType;
                    workspaceId = deletePlaybookRuleRequest.workspaceId;
                    versionId = deletePlaybookRuleRequest.versionId;
                    ruleId = deletePlaybookRuleRequest.ruleId;
                } else {
                    contentType = deletePlaybookRuleRequest['content-type'];
                    workspaceId = deletePlaybookRuleRequest['workspace_id'];
                    versionId = deletePlaybookRuleRequest['version_id'];
                    ruleId = deletePlaybookRuleRequest['rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deletePlaybookRule.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deletePlaybookRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling deletePlaybookRule.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除剧本版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePlaybookVersion(deletePlaybookVersionRequest?: DeletePlaybookVersionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let versionId;

            if (deletePlaybookVersionRequest !== null && deletePlaybookVersionRequest !== undefined) {
                if (deletePlaybookVersionRequest instanceof DeletePlaybookVersionRequest) {
                    contentType = deletePlaybookVersionRequest.contentType;
                    workspaceId = deletePlaybookVersionRequest.workspaceId;
                    versionId = deletePlaybookVersionRequest.versionId;
                } else {
                    contentType = deletePlaybookVersionRequest['content-type'];
                    workspaceId = deletePlaybookVersionRequest['workspace_id'];
                    versionId = deletePlaybookVersionRequest['version_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deletePlaybookVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling deletePlaybookVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除工作空间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteWorkspace(deleteWorkspaceRequest?: DeleteWorkspaceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/workspaces/{workspace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let permanentDelete;

            if (deleteWorkspaceRequest !== null && deleteWorkspaceRequest !== undefined) {
                if (deleteWorkspaceRequest instanceof DeleteWorkspaceRequest) {
                    contentType = deleteWorkspaceRequest.contentType;
                    workspaceId = deleteWorkspaceRequest.workspaceId;
                    permanentDelete = deleteWorkspaceRequest.permanentDelete;
                } else {
                    contentType = deleteWorkspaceRequest['content-type'];
                    workspaceId = deleteWorkspaceRequest['workspace_id'];
                    permanentDelete = deleteWorkspaceRequest['permanent_delete'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling deleteWorkspace.');
            }
            if (permanentDelete !== null && permanentDelete !== undefined) {
                localVarQueryParameter['permanent_delete'] = permanentDelete;
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
         * Disable alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableAlertRule(disableAlertRuleRequest?: DisableAlertRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (disableAlertRuleRequest !== null && disableAlertRuleRequest !== undefined) {
                if (disableAlertRuleRequest instanceof DisableAlertRuleRequest) {
                    workspaceId = disableAlertRuleRequest.workspaceId;
                    body = disableAlertRuleRequest.body
                } else {
                    workspaceId = disableAlertRuleRequest['workspace_id'];
                    body = disableAlertRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling disableAlertRule.');
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
         * Enable alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableAlertRule(enableAlertRuleRequest?: EnableAlertRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;

            if (enableAlertRuleRequest !== null && enableAlertRuleRequest !== undefined) {
                if (enableAlertRuleRequest instanceof EnableAlertRuleRequest) {
                    workspaceId = enableAlertRuleRequest.workspaceId;
                    body = enableAlertRuleRequest.body
                } else {
                    workspaceId = enableAlertRuleRequest['workspace_id'];
                    body = enableAlertRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling enableAlertRule.');
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
         * List alert rule metrics
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRuleMetrics(listAlertRuleMetricsRequest?: ListAlertRuleMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/metrics",
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
         * List alert rule templates
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRuleTemplates(listAlertRuleTemplatesRequest?: ListAlertRuleTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/templates",
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
            
            let severity;

            if (listAlertRuleTemplatesRequest !== null && listAlertRuleTemplatesRequest !== undefined) {
                if (listAlertRuleTemplatesRequest instanceof ListAlertRuleTemplatesRequest) {
                    workspaceId = listAlertRuleTemplatesRequest.workspaceId;
                    offset = listAlertRuleTemplatesRequest.offset;
                    limit = listAlertRuleTemplatesRequest.limit;
                    sortKey = listAlertRuleTemplatesRequest.sortKey;
                    sortDir = listAlertRuleTemplatesRequest.sortDir;
                    severity = listAlertRuleTemplatesRequest.severity;
                } else {
                    workspaceId = listAlertRuleTemplatesRequest['workspace_id'];
                    offset = listAlertRuleTemplatesRequest['offset'];
                    limit = listAlertRuleTemplatesRequest['limit'];
                    sortKey = listAlertRuleTemplatesRequest['sort_key'];
                    sortDir = listAlertRuleTemplatesRequest['sort_dir'];
                    severity = listAlertRuleTemplatesRequest['severity'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlertRuleTemplates.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAlertRuleTemplates.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAlertRuleTemplates.');
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
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * List alert rules
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlertRules(listAlertRulesRequest?: ListAlertRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules",
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
            
            let pipeId;
            
            let ruleName;
            
            let ruleId;
            
            let status;
            
            let severity;

            if (listAlertRulesRequest !== null && listAlertRulesRequest !== undefined) {
                if (listAlertRulesRequest instanceof ListAlertRulesRequest) {
                    workspaceId = listAlertRulesRequest.workspaceId;
                    offset = listAlertRulesRequest.offset;
                    limit = listAlertRulesRequest.limit;
                    sortKey = listAlertRulesRequest.sortKey;
                    sortDir = listAlertRulesRequest.sortDir;
                    pipeId = listAlertRulesRequest.pipeId;
                    ruleName = listAlertRulesRequest.ruleName;
                    ruleId = listAlertRulesRequest.ruleId;
                    status = listAlertRulesRequest.status;
                    severity = listAlertRulesRequest.severity;
                } else {
                    workspaceId = listAlertRulesRequest['workspace_id'];
                    offset = listAlertRulesRequest['offset'];
                    limit = listAlertRulesRequest['limit'];
                    sortKey = listAlertRulesRequest['sort_key'];
                    sortDir = listAlertRulesRequest['sort_dir'];
                    pipeId = listAlertRulesRequest['pipe_id'];
                    ruleName = listAlertRulesRequest['rule_name'];
                    ruleId = listAlertRulesRequest['rule_id'];
                    status = listAlertRulesRequest['status'];
                    severity = listAlertRulesRequest['severity'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlertRules.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listAlertRules.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listAlertRules.');
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
            if (pipeId !== null && pipeId !== undefined) {
                localVarQueryParameter['pipe_id'] = pipeId;
            }
            if (ruleName !== null && ruleName !== undefined) {
                localVarQueryParameter['rule_name'] = ruleName;
            }
            if (ruleId !== null && ruleId !== undefined) {
                localVarQueryParameter['rule_id'] = ruleId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (severity !== null && severity !== undefined) {
                localVarQueryParameter['severity'] = severity;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 搜索告警列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlerts(listAlertsRequest?: ListAlertsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/alerts/search",
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

            if (listAlertsRequest !== null && listAlertsRequest !== undefined) {
                if (listAlertsRequest instanceof ListAlertsRequest) {
                    contentType = listAlertsRequest.contentType;
                    workspaceId = listAlertsRequest.workspaceId;
                    body = listAlertsRequest.body
                } else {
                    contentType = listAlertsRequest['content-type'];
                    workspaceId = listAlertsRequest['workspace_id'];
                    body = listAlertsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listAlerts.');
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
         * 查询数据类列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataclass(listDataclassRequest?: ListDataclassRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/dataclasses",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let businessCode;
            
            let description;
            
            let isBuiltIn;

            if (listDataclassRequest !== null && listDataclassRequest !== undefined) {
                if (listDataclassRequest instanceof ListDataclassRequest) {
                    contentType = listDataclassRequest.contentType;
                    workspaceId = listDataclassRequest.workspaceId;
                    offset = listDataclassRequest.offset;
                    limit = listDataclassRequest.limit;
                    name = listDataclassRequest.name;
                    businessCode = listDataclassRequest.businessCode;
                    description = listDataclassRequest.description;
                    isBuiltIn = listDataclassRequest.isBuiltIn;
                } else {
                    contentType = listDataclassRequest['content-type'];
                    workspaceId = listDataclassRequest['workspace_id'];
                    offset = listDataclassRequest['offset'];
                    limit = listDataclassRequest['limit'];
                    name = listDataclassRequest['name'];
                    businessCode = listDataclassRequest['business_code'];
                    description = listDataclassRequest['description'];
                    isBuiltIn = listDataclassRequest['is_built_in'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listDataclass.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (businessCode !== null && businessCode !== undefined) {
                localVarQueryParameter['business_code'] = businessCode;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (isBuiltIn !== null && isBuiltIn !== undefined) {
                localVarQueryParameter['is_built_in'] = isBuiltIn;
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
         * 查询字段列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataclassFields(listDataclassFieldsRequest?: ListDataclassFieldsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/dataclasses/{dataclass_id}/fields",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let dataclassId;
            
            let offset;
            
            let limit;
            
            let name;
            
            let isBuiltIn;
            
            let fieldCategory;
            
            let mapping;

            if (listDataclassFieldsRequest !== null && listDataclassFieldsRequest !== undefined) {
                if (listDataclassFieldsRequest instanceof ListDataclassFieldsRequest) {
                    contentType = listDataclassFieldsRequest.contentType;
                    workspaceId = listDataclassFieldsRequest.workspaceId;
                    dataclassId = listDataclassFieldsRequest.dataclassId;
                    offset = listDataclassFieldsRequest.offset;
                    limit = listDataclassFieldsRequest.limit;
                    name = listDataclassFieldsRequest.name;
                    isBuiltIn = listDataclassFieldsRequest.isBuiltIn;
                    fieldCategory = listDataclassFieldsRequest.fieldCategory;
                    mapping = listDataclassFieldsRequest.mapping;
                } else {
                    contentType = listDataclassFieldsRequest['content-type'];
                    workspaceId = listDataclassFieldsRequest['workspace_id'];
                    dataclassId = listDataclassFieldsRequest['dataclass_id'];
                    offset = listDataclassFieldsRequest['offset'];
                    limit = listDataclassFieldsRequest['limit'];
                    name = listDataclassFieldsRequest['name'];
                    isBuiltIn = listDataclassFieldsRequest['is_built_in'];
                    fieldCategory = listDataclassFieldsRequest['field_category'];
                    mapping = listDataclassFieldsRequest['mapping'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listDataclassFields.');
            }
            if (dataclassId === null || dataclassId === undefined) {
            throw new RequiredError('dataclassId','Required parameter dataclassId was null or undefined when calling listDataclassFields.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (isBuiltIn !== null && isBuiltIn !== undefined) {
                localVarQueryParameter['is_built_in'] = isBuiltIn;
            }
            if (fieldCategory !== null && fieldCategory !== undefined) {
                localVarQueryParameter['field_category'] = fieldCategory;
            }
            if (mapping !== null && mapping !== undefined) {
                localVarQueryParameter['mapping'] = mapping;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId,'dataclass_id': dataclassId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询关联Dataobject列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataobjectRelations(listDataobjectRelationsRequest?: ListDataobjectRelationsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/{dataclass_type}/{data_object_id}/{related_dataclass_type}/search",
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
            
            let dataclassType;
            
            let dataObjectId;
            
            let relatedDataclassType;

            if (listDataobjectRelationsRequest !== null && listDataobjectRelationsRequest !== undefined) {
                if (listDataobjectRelationsRequest instanceof ListDataobjectRelationsRequest) {
                    contentType = listDataobjectRelationsRequest.contentType;
                    workspaceId = listDataobjectRelationsRequest.workspaceId;
                    dataclassType = listDataobjectRelationsRequest.dataclassType;
                    dataObjectId = listDataobjectRelationsRequest.dataObjectId;
                    relatedDataclassType = listDataobjectRelationsRequest.relatedDataclassType;
                    body = listDataobjectRelationsRequest.body
                } else {
                    contentType = listDataobjectRelationsRequest['content-type'];
                    workspaceId = listDataobjectRelationsRequest['workspace_id'];
                    dataclassType = listDataobjectRelationsRequest['dataclass_type'];
                    dataObjectId = listDataobjectRelationsRequest['data_object_id'];
                    relatedDataclassType = listDataobjectRelationsRequest['related_dataclass_type'];
                    body = listDataobjectRelationsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listDataobjectRelations.');
            }
            if (dataclassType === null || dataclassType === undefined) {
            throw new RequiredError('dataclassType','Required parameter dataclassType was null or undefined when calling listDataobjectRelations.');
            }
            if (dataObjectId === null || dataObjectId === undefined) {
            throw new RequiredError('dataObjectId','Required parameter dataObjectId was null or undefined when calling listDataobjectRelations.');
            }
            if (relatedDataclassType === null || relatedDataclassType === undefined) {
            throw new RequiredError('relatedDataclassType','Required parameter relatedDataclassType was null or undefined when calling listDataobjectRelations.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'dataclass_type': dataclassType,'data_object_id': dataObjectId,'related_dataclass_type': relatedDataclassType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 搜索事件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIncidents(listIncidentsRequest?: ListIncidentsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/incidents/search",
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

            if (listIncidentsRequest !== null && listIncidentsRequest !== undefined) {
                if (listIncidentsRequest instanceof ListIncidentsRequest) {
                    contentType = listIncidentsRequest.contentType;
                    workspaceId = listIncidentsRequest.workspaceId;
                    body = listIncidentsRequest.body
                } else {
                    contentType = listIncidentsRequest['content-type'];
                    workspaceId = listIncidentsRequest['workspace_id'];
                    body = listIncidentsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listIncidents.');
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
         * 查询威胁情报列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listIndicators(listIndicatorsRequest?: ListIndicatorsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/indicators/search",
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

            if (listIndicatorsRequest !== null && listIndicatorsRequest !== undefined) {
                if (listIndicatorsRequest instanceof ListIndicatorsRequest) {
                    contentType = listIndicatorsRequest.contentType;
                    workspaceId = listIndicatorsRequest.workspaceId;
                    body = listIndicatorsRequest.body
                } else {
                    contentType = listIndicatorsRequest['content-type'];
                    workspaceId = listIndicatorsRequest['workspace_id'];
                    body = listIndicatorsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listIndicators.');
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
         * 查询剧本动作列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlaybookActions(listPlaybookActionsRequest?: ListPlaybookActionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let versionId;
            
            let limit;
            
            let offset;

            if (listPlaybookActionsRequest !== null && listPlaybookActionsRequest !== undefined) {
                if (listPlaybookActionsRequest instanceof ListPlaybookActionsRequest) {
                    contentType = listPlaybookActionsRequest.contentType;
                    workspaceId = listPlaybookActionsRequest.workspaceId;
                    versionId = listPlaybookActionsRequest.versionId;
                    limit = listPlaybookActionsRequest.limit;
                    offset = listPlaybookActionsRequest.offset;
                } else {
                    contentType = listPlaybookActionsRequest['content-type'];
                    workspaceId = listPlaybookActionsRequest['workspace_id'];
                    versionId = listPlaybookActionsRequest['version_id'];
                    limit = listPlaybookActionsRequest['limit'];
                    offset = listPlaybookActionsRequest['offset'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPlaybookActions.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling listPlaybookActions.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPlaybookActions.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPlaybookActions.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剧本审核结果
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlaybookApproves(listPlaybookApprovesRequest?: ListPlaybookApprovesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/approval",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let resourceId;
            
            let approveType;

            if (listPlaybookApprovesRequest !== null && listPlaybookApprovesRequest !== undefined) {
                if (listPlaybookApprovesRequest instanceof ListPlaybookApprovesRequest) {
                    contentType = listPlaybookApprovesRequest.contentType;
                    workspaceId = listPlaybookApprovesRequest.workspaceId;
                    resourceId = listPlaybookApprovesRequest.resourceId;
                    approveType = listPlaybookApprovesRequest.approveType;
                } else {
                    contentType = listPlaybookApprovesRequest['content-type'];
                    workspaceId = listPlaybookApprovesRequest['workspace_id'];
                    resourceId = listPlaybookApprovesRequest['resource_id'];
                    approveType = listPlaybookApprovesRequest['approve_type'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPlaybookApproves.');
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (approveType !== null && approveType !== undefined) {
                localVarQueryParameter['approve_type'] = approveType;
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
         * 查询剧本实例审计日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlaybookAuditLogs(listPlaybookAuditLogsRequest?: ListPlaybookAuditLogsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/instances/auditlogs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let contentType;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listPlaybookAuditLogsRequest !== null && listPlaybookAuditLogsRequest !== undefined) {
                if (listPlaybookAuditLogsRequest instanceof ListPlaybookAuditLogsRequest) {
                    contentType = listPlaybookAuditLogsRequest.contentType;
                    workspaceId = listPlaybookAuditLogsRequest.workspaceId;
                    offset = listPlaybookAuditLogsRequest.offset;
                    limit = listPlaybookAuditLogsRequest.limit;
                    sortKey = listPlaybookAuditLogsRequest.sortKey;
                    sortDir = listPlaybookAuditLogsRequest.sortDir;
                    body = listPlaybookAuditLogsRequest.body
                } else {
                    contentType = listPlaybookAuditLogsRequest['content-type'];
                    workspaceId = listPlaybookAuditLogsRequest['workspace_id'];
                    offset = listPlaybookAuditLogsRequest['offset'];
                    limit = listPlaybookAuditLogsRequest['limit'];
                    sortKey = listPlaybookAuditLogsRequest['sort_key'];
                    sortDir = listPlaybookAuditLogsRequest['sort_dir'];
                    body = listPlaybookAuditLogsRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPlaybookAuditLogs.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPlaybookAuditLogs.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPlaybookAuditLogs.');
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
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剧本实例列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlaybookInstances(listPlaybookInstancesRequest?: ListPlaybookInstancesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/instances",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let limit;
            
            let offset;
            
            let status;
            
            let name;
            
            let playbookName;
            
            let dataclassName;
            
            let dataobjectName;
            
            let triggerType;
            
            let fromDate;
            
            let toDate;

            if (listPlaybookInstancesRequest !== null && listPlaybookInstancesRequest !== undefined) {
                if (listPlaybookInstancesRequest instanceof ListPlaybookInstancesRequest) {
                    contentType = listPlaybookInstancesRequest.contentType;
                    workspaceId = listPlaybookInstancesRequest.workspaceId;
                    limit = listPlaybookInstancesRequest.limit;
                    offset = listPlaybookInstancesRequest.offset;
                    status = listPlaybookInstancesRequest.status;
                    name = listPlaybookInstancesRequest.name;
                    playbookName = listPlaybookInstancesRequest.playbookName;
                    dataclassName = listPlaybookInstancesRequest.dataclassName;
                    dataobjectName = listPlaybookInstancesRequest.dataobjectName;
                    triggerType = listPlaybookInstancesRequest.triggerType;
                    fromDate = listPlaybookInstancesRequest.fromDate;
                    toDate = listPlaybookInstancesRequest.toDate;
                } else {
                    contentType = listPlaybookInstancesRequest['content-type'];
                    workspaceId = listPlaybookInstancesRequest['workspace_id'];
                    limit = listPlaybookInstancesRequest['limit'];
                    offset = listPlaybookInstancesRequest['offset'];
                    status = listPlaybookInstancesRequest['status'];
                    name = listPlaybookInstancesRequest['name'];
                    playbookName = listPlaybookInstancesRequest['playbook_name'];
                    dataclassName = listPlaybookInstancesRequest['dataclass_name'];
                    dataobjectName = listPlaybookInstancesRequest['dataobject_name'];
                    triggerType = listPlaybookInstancesRequest['trigger_type'];
                    fromDate = listPlaybookInstancesRequest['from_date'];
                    toDate = listPlaybookInstancesRequest['to_date'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPlaybookInstances.');
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPlaybookInstances.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPlaybookInstances.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (playbookName !== null && playbookName !== undefined) {
                localVarQueryParameter['playbook_name'] = playbookName;
            }
            if (dataclassName !== null && dataclassName !== undefined) {
                localVarQueryParameter['dataclass_name'] = dataclassName;
            }
            if (dataobjectName !== null && dataobjectName !== undefined) {
                localVarQueryParameter['dataobject_name'] = dataobjectName;
            }
            if (triggerType !== null && triggerType !== undefined) {
                localVarQueryParameter['trigger_type'] = triggerType;
            }
            if (fromDate !== null && fromDate !== undefined) {
                localVarQueryParameter['from_date'] = fromDate;
            }
            if (toDate !== null && toDate !== undefined) {
                localVarQueryParameter['to_date'] = toDate;
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
         * 查询剧本版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlaybookVersions(listPlaybookVersionsRequest?: ListPlaybookVersionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/{playbook_id}/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let playbookId;
            
            let status;
            
            let enabled;
            
            let versionType;
            
            let offset;
            
            let limit;

            if (listPlaybookVersionsRequest !== null && listPlaybookVersionsRequest !== undefined) {
                if (listPlaybookVersionsRequest instanceof ListPlaybookVersionsRequest) {
                    contentType = listPlaybookVersionsRequest.contentType;
                    workspaceId = listPlaybookVersionsRequest.workspaceId;
                    playbookId = listPlaybookVersionsRequest.playbookId;
                    status = listPlaybookVersionsRequest.status;
                    enabled = listPlaybookVersionsRequest.enabled;
                    versionType = listPlaybookVersionsRequest.versionType;
                    offset = listPlaybookVersionsRequest.offset;
                    limit = listPlaybookVersionsRequest.limit;
                } else {
                    contentType = listPlaybookVersionsRequest['content-type'];
                    workspaceId = listPlaybookVersionsRequest['workspace_id'];
                    playbookId = listPlaybookVersionsRequest['playbook_id'];
                    status = listPlaybookVersionsRequest['status'];
                    enabled = listPlaybookVersionsRequest['enabled'];
                    versionType = listPlaybookVersionsRequest['version_type'];
                    offset = listPlaybookVersionsRequest['offset'];
                    limit = listPlaybookVersionsRequest['limit'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPlaybookVersions.');
            }
            if (playbookId === null || playbookId === undefined) {
            throw new RequiredError('playbookId','Required parameter playbookId was null or undefined when calling listPlaybookVersions.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (versionType !== null && versionType !== undefined) {
                localVarQueryParameter['version_type'] = versionType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId,'playbook_id': playbookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剧本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPlaybooks(listPlaybooksRequest?: ListPlaybooksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let searchTxt;
            
            let enabled;
            
            let description;
            
            let dataclassName;
            
            let name;

            if (listPlaybooksRequest !== null && listPlaybooksRequest !== undefined) {
                if (listPlaybooksRequest instanceof ListPlaybooksRequest) {
                    contentType = listPlaybooksRequest.contentType;
                    workspaceId = listPlaybooksRequest.workspaceId;
                    offset = listPlaybooksRequest.offset;
                    limit = listPlaybooksRequest.limit;
                    searchTxt = listPlaybooksRequest.searchTxt;
                    enabled = listPlaybooksRequest.enabled;
                    description = listPlaybooksRequest.description;
                    dataclassName = listPlaybooksRequest.dataclassName;
                    name = listPlaybooksRequest.name;
                } else {
                    contentType = listPlaybooksRequest['content-type'];
                    workspaceId = listPlaybooksRequest['workspace_id'];
                    offset = listPlaybooksRequest['offset'];
                    limit = listPlaybooksRequest['limit'];
                    searchTxt = listPlaybooksRequest['search_txt'];
                    enabled = listPlaybooksRequest['enabled'];
                    description = listPlaybooksRequest['description'];
                    dataclassName = listPlaybooksRequest['dataclass_name'];
                    name = listPlaybooksRequest['name'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listPlaybooks.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listPlaybooks.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listPlaybooks.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (searchTxt !== null && searchTxt !== undefined) {
                localVarQueryParameter['search_txt'] = searchTxt;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (dataclassName !== null && dataclassName !== undefined) {
                localVarQueryParameter['dataclass_name'] = dataclassName;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
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
         * 查询流程列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkflows(listWorkflowsRequest?: ListWorkflowsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/workflows",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let offset;
            
            let limit;
            
            let order;
            
            let sortby;
            
            let enabled;
            
            let lastVersion;
            
            let name;
            
            let description;
            
            let dataclassId;
            
            let dataclassName;
            
            let aopType;

            if (listWorkflowsRequest !== null && listWorkflowsRequest !== undefined) {
                if (listWorkflowsRequest instanceof ListWorkflowsRequest) {
                    contentType = listWorkflowsRequest.contentType;
                    workspaceId = listWorkflowsRequest.workspaceId;
                    offset = listWorkflowsRequest.offset;
                    limit = listWorkflowsRequest.limit;
                    order = listWorkflowsRequest.order;
                    sortby = listWorkflowsRequest.sortby;
                    enabled = listWorkflowsRequest.enabled;
                    lastVersion = listWorkflowsRequest.lastVersion;
                    name = listWorkflowsRequest.name;
                    description = listWorkflowsRequest.description;
                    dataclassId = listWorkflowsRequest.dataclassId;
                    dataclassName = listWorkflowsRequest.dataclassName;
                    aopType = listWorkflowsRequest.aopType;
                } else {
                    contentType = listWorkflowsRequest['content-type'];
                    workspaceId = listWorkflowsRequest['workspace_id'];
                    offset = listWorkflowsRequest['offset'];
                    limit = listWorkflowsRequest['limit'];
                    order = listWorkflowsRequest['order'];
                    sortby = listWorkflowsRequest['sortby'];
                    enabled = listWorkflowsRequest['enabled'];
                    lastVersion = listWorkflowsRequest['last_version'];
                    name = listWorkflowsRequest['name'];
                    description = listWorkflowsRequest['description'];
                    dataclassId = listWorkflowsRequest['dataclass_id'];
                    dataclassName = listWorkflowsRequest['dataclass_name'];
                    aopType = listWorkflowsRequest['aop_type'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling listWorkflows.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (sortby !== null && sortby !== undefined) {
                localVarQueryParameter['sortby'] = sortby;
            }
            if (enabled !== null && enabled !== undefined) {
                localVarQueryParameter['enabled'] = enabled;
            }
            if (lastVersion !== null && lastVersion !== undefined) {
                localVarQueryParameter['last_version'] = lastVersion;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (dataclassId !== null && dataclassId !== undefined) {
                localVarQueryParameter['dataclass_id'] = dataclassId;
            }
            if (dataclassName !== null && dataclassName !== undefined) {
                localVarQueryParameter['dataclass_name'] = dataclassName;
            }
            if (aopType !== null && aopType !== undefined) {
                localVarQueryParameter['aop_type'] = aopType;
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
         * 可通过工作空间名称、工作空间描述、创建时间等条件对租户的工作空间进行筛选。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listWorkspaces(listWorkspacesRequest?: ListWorkspacesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let offset;
            
            let limit;
            
            let regionId;
            
            let name;
            
            let description;
            
            let viewBindId;
            
            let viewBindName;
            
            let createTimeStart;
            
            let createTimeEnd;
            
            let isView;
            
            let ids;
            
            let normalProjectId;
            
            let enterpriseProjectId;

            if (listWorkspacesRequest !== null && listWorkspacesRequest !== undefined) {
                if (listWorkspacesRequest instanceof ListWorkspacesRequest) {
                    contentType = listWorkspacesRequest.contentType;
                    offset = listWorkspacesRequest.offset;
                    limit = listWorkspacesRequest.limit;
                    regionId = listWorkspacesRequest.regionId;
                    name = listWorkspacesRequest.name;
                    description = listWorkspacesRequest.description;
                    viewBindId = listWorkspacesRequest.viewBindId;
                    viewBindName = listWorkspacesRequest.viewBindName;
                    createTimeStart = listWorkspacesRequest.createTimeStart;
                    createTimeEnd = listWorkspacesRequest.createTimeEnd;
                    isView = listWorkspacesRequest.isView;
                    ids = listWorkspacesRequest.ids;
                    normalProjectId = listWorkspacesRequest.normalProjectId;
                    enterpriseProjectId = listWorkspacesRequest.enterpriseProjectId;
                } else {
                    contentType = listWorkspacesRequest['content-type'];
                    offset = listWorkspacesRequest['offset'];
                    limit = listWorkspacesRequest['limit'];
                    regionId = listWorkspacesRequest['region_id'];
                    name = listWorkspacesRequest['name'];
                    description = listWorkspacesRequest['description'];
                    viewBindId = listWorkspacesRequest['view_bind_id'];
                    viewBindName = listWorkspacesRequest['view_bind_name'];
                    createTimeStart = listWorkspacesRequest['create_time_start'];
                    createTimeEnd = listWorkspacesRequest['create_time_end'];
                    isView = listWorkspacesRequest['is_view'];
                    ids = listWorkspacesRequest['ids'];
                    normalProjectId = listWorkspacesRequest['normal_project_id'];
                    enterpriseProjectId = listWorkspacesRequest['enterprise_project_id'];
                }
            }

        
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling listWorkspaces.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listWorkspaces.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (description !== null && description !== undefined) {
                localVarQueryParameter['description'] = description;
            }
            if (viewBindId !== null && viewBindId !== undefined) {
                localVarQueryParameter['view_bind_id'] = viewBindId;
            }
            if (viewBindName !== null && viewBindName !== undefined) {
                localVarQueryParameter['view_bind_name'] = viewBindName;
            }
            if (createTimeStart !== null && createTimeStart !== undefined) {
                localVarQueryParameter['create_time_start'] = createTimeStart;
            }
            if (createTimeEnd !== null && createTimeEnd !== undefined) {
                localVarQueryParameter['create_time_end'] = createTimeEnd;
            }
            if (isView !== null && isView !== undefined) {
                localVarQueryParameter['is_view'] = isView;
            }
            if (ids !== null && ids !== undefined) {
                localVarQueryParameter['ids'] = ids;
            }
            if (normalProjectId !== null && normalProjectId !== undefined) {
                localVarQueryParameter['normal_project_id'] = normalProjectId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
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
            
            let workspaceId;
            
            let xLanguage;
            
            let contentType;

            if (searchBaselineRequest !== null && searchBaselineRequest !== undefined) {
                if (searchBaselineRequest instanceof SearchBaselineRequest) {
                    workspaceId = searchBaselineRequest.workspaceId;
                    xLanguage = searchBaselineRequest.xLanguage;
                    contentType = searchBaselineRequest.contentType;
                    body = searchBaselineRequest.body
                } else {
                    workspaceId = searchBaselineRequest['workspace_id'];
                    xLanguage = searchBaselineRequest['X-Language'];
                    contentType = searchBaselineRequest['content-type'];
                    body = searchBaselineRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling searchBaseline.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
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
         * 获取告警详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlert(showAlertRequest?: ShowAlertRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/alerts/{alert_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let alertId;

            if (showAlertRequest !== null && showAlertRequest !== undefined) {
                if (showAlertRequest instanceof ShowAlertRequest) {
                    contentType = showAlertRequest.contentType;
                    workspaceId = showAlertRequest.workspaceId;
                    alertId = showAlertRequest.alertId;
                } else {
                    contentType = showAlertRequest['content-type'];
                    workspaceId = showAlertRequest['workspace_id'];
                    alertId = showAlertRequest['alert_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showAlert.');
            }
            if (alertId === null || alertId === undefined) {
            throw new RequiredError('alertId','Required parameter alertId was null or undefined when calling showAlert.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'alert_id': alertId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看告警规则 Get alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlertRule(showAlertRuleRequest?: ShowAlertRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let workspaceId;
            
            let ruleId;

            if (showAlertRuleRequest !== null && showAlertRuleRequest !== undefined) {
                if (showAlertRuleRequest instanceof ShowAlertRuleRequest) {
                    workspaceId = showAlertRuleRequest.workspaceId;
                    ruleId = showAlertRuleRequest.ruleId;
                } else {
                    workspaceId = showAlertRuleRequest['workspace_id'];
                    ruleId = showAlertRuleRequest['rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showAlertRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showAlertRule.');
            }

            options.pathParams = { 'workspace_id': workspaceId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * List alert rule templates
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlertRuleTemplate(showAlertRuleTemplateRequest?: ShowAlertRuleTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/templates/{template_id}",
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
         * 获取事件详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIncident(showIncidentRequest?: ShowIncidentRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/incidents/{incident_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let incidentId;

            if (showIncidentRequest !== null && showIncidentRequest !== undefined) {
                if (showIncidentRequest instanceof ShowIncidentRequest) {
                    contentType = showIncidentRequest.contentType;
                    workspaceId = showIncidentRequest.workspaceId;
                    incidentId = showIncidentRequest.incidentId;
                } else {
                    contentType = showIncidentRequest['content-type'];
                    workspaceId = showIncidentRequest['workspace_id'];
                    incidentId = showIncidentRequest['incident_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showIncident.');
            }
            if (incidentId === null || incidentId === undefined) {
            throw new RequiredError('incidentId','Required parameter incidentId was null or undefined when calling showIncident.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'incident_id': incidentId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询威胁情报详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showIndicatorDetail(showIndicatorDetailRequest?: ShowIndicatorDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/indicators/{indicator_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let indicatorId;

            if (showIndicatorDetailRequest !== null && showIndicatorDetailRequest !== undefined) {
                if (showIndicatorDetailRequest instanceof ShowIndicatorDetailRequest) {
                    contentType = showIndicatorDetailRequest.contentType;
                    workspaceId = showIndicatorDetailRequest.workspaceId;
                    indicatorId = showIndicatorDetailRequest.indicatorId;
                } else {
                    contentType = showIndicatorDetailRequest['content-type'];
                    workspaceId = showIndicatorDetailRequest['workspace_id'];
                    indicatorId = showIndicatorDetailRequest['indicator_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showIndicatorDetail.');
            }
            if (indicatorId === null || indicatorId === undefined) {
            throw new RequiredError('indicatorId','Required parameter indicatorId was null or undefined when calling showIndicatorDetail.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'indicator_id': indicatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剧本详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybook(showPlaybookRequest?: ShowPlaybookRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/{playbook_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let playbookId;

            if (showPlaybookRequest !== null && showPlaybookRequest !== undefined) {
                if (showPlaybookRequest instanceof ShowPlaybookRequest) {
                    contentType = showPlaybookRequest.contentType;
                    workspaceId = showPlaybookRequest.workspaceId;
                    playbookId = showPlaybookRequest.playbookId;
                } else {
                    contentType = showPlaybookRequest['content-type'];
                    workspaceId = showPlaybookRequest['workspace_id'];
                    playbookId = showPlaybookRequest['playbook_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybook.');
            }
            if (playbookId === null || playbookId === undefined) {
            throw new RequiredError('playbookId','Required parameter playbookId was null or undefined when calling showPlaybook.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'playbook_id': playbookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Show playbook instance
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybookInstance(showPlaybookInstanceRequest?: ShowPlaybookInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/instances/{instance_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let instanceId;

            if (showPlaybookInstanceRequest !== null && showPlaybookInstanceRequest !== undefined) {
                if (showPlaybookInstanceRequest instanceof ShowPlaybookInstanceRequest) {
                    contentType = showPlaybookInstanceRequest.contentType;
                    workspaceId = showPlaybookInstanceRequest.workspaceId;
                    instanceId = showPlaybookInstanceRequest.instanceId;
                } else {
                    contentType = showPlaybookInstanceRequest['content-type'];
                    workspaceId = showPlaybookInstanceRequest['workspace_id'];
                    instanceId = showPlaybookInstanceRequest['instance_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybookInstance.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPlaybookInstance.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 剧本运行监控
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybookMonitors(showPlaybookMonitorsRequest?: ShowPlaybookMonitorsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/{playbook_id}/monitor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let workspaceId;
            
            let playbookId;
            
            let startTime;
            
            let versionQueryType;
            
            let endTime;

            if (showPlaybookMonitorsRequest !== null && showPlaybookMonitorsRequest !== undefined) {
                if (showPlaybookMonitorsRequest instanceof ShowPlaybookMonitorsRequest) {
                    contentType = showPlaybookMonitorsRequest.contentType;
                    workspaceId = showPlaybookMonitorsRequest.workspaceId;
                    playbookId = showPlaybookMonitorsRequest.playbookId;
                    startTime = showPlaybookMonitorsRequest.startTime;
                    versionQueryType = showPlaybookMonitorsRequest.versionQueryType;
                    endTime = showPlaybookMonitorsRequest.endTime;
                } else {
                    contentType = showPlaybookMonitorsRequest['content-type'];
                    workspaceId = showPlaybookMonitorsRequest['workspace_id'];
                    playbookId = showPlaybookMonitorsRequest['playbook_id'];
                    startTime = showPlaybookMonitorsRequest['start_time'];
                    versionQueryType = showPlaybookMonitorsRequest['version_query_type'];
                    endTime = showPlaybookMonitorsRequest['end_time'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybookMonitors.');
            }
            if (playbookId === null || playbookId === undefined) {
            throw new RequiredError('playbookId','Required parameter playbookId was null or undefined when calling showPlaybookMonitors.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showPlaybookMonitors.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (versionQueryType === null || versionQueryType === undefined) {
                throw new RequiredError('versionQueryType','Required parameter versionQueryType was null or undefined when calling showPlaybookMonitors.');
            }
            if (versionQueryType !== null && versionQueryType !== undefined) {
                localVarQueryParameter['version_query_type'] = versionQueryType;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showPlaybookMonitors.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'workspace_id': workspaceId,'playbook_id': playbookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剧本规则详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybookRule(showPlaybookRuleRequest?: ShowPlaybookRuleRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let versionId;
            
            let ruleId;

            if (showPlaybookRuleRequest !== null && showPlaybookRuleRequest !== undefined) {
                if (showPlaybookRuleRequest instanceof ShowPlaybookRuleRequest) {
                    contentType = showPlaybookRuleRequest.contentType;
                    workspaceId = showPlaybookRuleRequest.workspaceId;
                    versionId = showPlaybookRuleRequest.versionId;
                    ruleId = showPlaybookRuleRequest.ruleId;
                } else {
                    contentType = showPlaybookRuleRequest['content-type'];
                    workspaceId = showPlaybookRuleRequest['workspace_id'];
                    versionId = showPlaybookRuleRequest['version_id'];
                    ruleId = showPlaybookRuleRequest['rule_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybookRule.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showPlaybookRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling showPlaybookRule.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 剧本统计数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybookStatistics(showPlaybookStatisticsRequest?: ShowPlaybookStatisticsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;

            if (showPlaybookStatisticsRequest !== null && showPlaybookStatisticsRequest !== undefined) {
                if (showPlaybookStatisticsRequest instanceof ShowPlaybookStatisticsRequest) {
                    contentType = showPlaybookStatisticsRequest.contentType;
                    workspaceId = showPlaybookStatisticsRequest.workspaceId;
                } else {
                    contentType = showPlaybookStatisticsRequest['content-type'];
                    workspaceId = showPlaybookStatisticsRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybookStatistics.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询剧本拓扑关系
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybookTopology(showPlaybookTopologyRequest?: ShowPlaybookTopologyRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/instances/{instance_id}/topology",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let instanceId;

            if (showPlaybookTopologyRequest !== null && showPlaybookTopologyRequest !== undefined) {
                if (showPlaybookTopologyRequest instanceof ShowPlaybookTopologyRequest) {
                    contentType = showPlaybookTopologyRequest.contentType;
                    workspaceId = showPlaybookTopologyRequest.workspaceId;
                    instanceId = showPlaybookTopologyRequest.instanceId;
                } else {
                    contentType = showPlaybookTopologyRequest['content-type'];
                    workspaceId = showPlaybookTopologyRequest['workspace_id'];
                    instanceId = showPlaybookTopologyRequest['instance_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybookTopology.');
            }
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling showPlaybookTopology.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Show playbook version version
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPlaybookVersion(showPlaybookVersionRequest?: ShowPlaybookVersionRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;
            
            let versionId;

            if (showPlaybookVersionRequest !== null && showPlaybookVersionRequest !== undefined) {
                if (showPlaybookVersionRequest instanceof ShowPlaybookVersionRequest) {
                    contentType = showPlaybookVersionRequest.contentType;
                    workspaceId = showPlaybookVersionRequest.workspaceId;
                    versionId = showPlaybookVersionRequest.versionId;
                } else {
                    contentType = showPlaybookVersionRequest['content-type'];
                    workspaceId = showPlaybookVersionRequest['workspace_id'];
                    versionId = showPlaybookVersionRequest['version_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showPlaybookVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showPlaybookVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询工作空间名称、描述等详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWorkspace(showWorkspaceRequest?: ShowWorkspaceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/workspaces/{workspace_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let workspaceId;

            if (showWorkspaceRequest !== null && showWorkspaceRequest !== undefined) {
                if (showWorkspaceRequest instanceof ShowWorkspaceRequest) {
                    contentType = showWorkspaceRequest.contentType;
                    workspaceId = showWorkspaceRequest.workspaceId;
                } else {
                    contentType = showWorkspaceRequest['content-type'];
                    workspaceId = showWorkspaceRequest['workspace_id'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling showWorkspace.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }

            options.pathParams = { 'workspace_id': workspaceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * Update alert rule
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlertRule(updateAlertRuleRequest?: UpdateAlertRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/siem/alert-rules/{rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let workspaceId;
            
            let ruleId;

            if (updateAlertRuleRequest !== null && updateAlertRuleRequest !== undefined) {
                if (updateAlertRuleRequest instanceof UpdateAlertRuleRequest) {
                    workspaceId = updateAlertRuleRequest.workspaceId;
                    ruleId = updateAlertRuleRequest.ruleId;
                    body = updateAlertRuleRequest.body
                } else {
                    workspaceId = updateAlertRuleRequest['workspace_id'];
                    ruleId = updateAlertRuleRequest['rule_id'];
                    body = updateAlertRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateAlertRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updateAlertRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新威胁情报
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateIndicator(updateIndicatorRequest?: UpdateIndicatorRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/indicators/{indicator_id}",
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
            
            let indicatorId;

            if (updateIndicatorRequest !== null && updateIndicatorRequest !== undefined) {
                if (updateIndicatorRequest instanceof UpdateIndicatorRequest) {
                    contentType = updateIndicatorRequest.contentType;
                    workspaceId = updateIndicatorRequest.workspaceId;
                    indicatorId = updateIndicatorRequest.indicatorId;
                    body = updateIndicatorRequest.body
                } else {
                    contentType = updateIndicatorRequest['content-type'];
                    workspaceId = updateIndicatorRequest['workspace_id'];
                    indicatorId = updateIndicatorRequest['indicator_id'];
                    body = updateIndicatorRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateIndicator.');
            }
            if (indicatorId === null || indicatorId === undefined) {
            throw new RequiredError('indicatorId','Required parameter indicatorId was null or undefined when calling updateIndicator.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'indicator_id': indicatorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改剧本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePlaybook(updatePlaybookRequest?: UpdatePlaybookRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/{playbook_id}",
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
            
            let playbookId;

            if (updatePlaybookRequest !== null && updatePlaybookRequest !== undefined) {
                if (updatePlaybookRequest instanceof UpdatePlaybookRequest) {
                    contentType = updatePlaybookRequest.contentType;
                    workspaceId = updatePlaybookRequest.workspaceId;
                    playbookId = updatePlaybookRequest.playbookId;
                    body = updatePlaybookRequest.body
                } else {
                    contentType = updatePlaybookRequest['content-type'];
                    workspaceId = updatePlaybookRequest['workspace_id'];
                    playbookId = updatePlaybookRequest['playbook_id'];
                    body = updatePlaybookRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updatePlaybook.');
            }
            if (playbookId === null || playbookId === undefined) {
            throw new RequiredError('playbookId','Required parameter playbookId was null or undefined when calling updatePlaybook.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'playbook_id': playbookId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新剧本动作
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePlaybookAction(updatePlaybookActionRequest?: UpdatePlaybookActionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/actions/{action_id}",
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
            
            let versionId;
            
            let actionId;

            if (updatePlaybookActionRequest !== null && updatePlaybookActionRequest !== undefined) {
                if (updatePlaybookActionRequest instanceof UpdatePlaybookActionRequest) {
                    contentType = updatePlaybookActionRequest.contentType;
                    workspaceId = updatePlaybookActionRequest.workspaceId;
                    versionId = updatePlaybookActionRequest.versionId;
                    actionId = updatePlaybookActionRequest.actionId;
                    body = updatePlaybookActionRequest.body
                } else {
                    contentType = updatePlaybookActionRequest['content-type'];
                    workspaceId = updatePlaybookActionRequest['workspace_id'];
                    versionId = updatePlaybookActionRequest['version_id'];
                    actionId = updatePlaybookActionRequest['action_id'];
                    body = updatePlaybookActionRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updatePlaybookAction.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling updatePlaybookAction.');
            }
            if (actionId === null || actionId === undefined) {
            throw new RequiredError('actionId','Required parameter actionId was null or undefined when calling updatePlaybookAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId,'action_id': actionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新剧本规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePlaybookRule(updatePlaybookRuleRequest?: UpdatePlaybookRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}/rules/{rule_id}",
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
            
            let versionId;
            
            let ruleId;

            if (updatePlaybookRuleRequest !== null && updatePlaybookRuleRequest !== undefined) {
                if (updatePlaybookRuleRequest instanceof UpdatePlaybookRuleRequest) {
                    contentType = updatePlaybookRuleRequest.contentType;
                    workspaceId = updatePlaybookRuleRequest.workspaceId;
                    versionId = updatePlaybookRuleRequest.versionId;
                    ruleId = updatePlaybookRuleRequest.ruleId;
                    body = updatePlaybookRuleRequest.body
                } else {
                    contentType = updatePlaybookRuleRequest['content-type'];
                    workspaceId = updatePlaybookRuleRequest['workspace_id'];
                    versionId = updatePlaybookRuleRequest['version_id'];
                    ruleId = updatePlaybookRuleRequest['rule_id'];
                    body = updatePlaybookRuleRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updatePlaybookRule.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling updatePlaybookRule.');
            }
            if (ruleId === null || ruleId === undefined) {
            throw new RequiredError('ruleId','Required parameter ruleId was null or undefined when calling updatePlaybookRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId,'rule_id': ruleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新剧本版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePlaybookVersion(updatePlaybookVersionRequest?: UpdatePlaybookVersionRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}/soc/playbooks/versions/{version_id}",
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
            
            let versionId;

            if (updatePlaybookVersionRequest !== null && updatePlaybookVersionRequest !== undefined) {
                if (updatePlaybookVersionRequest instanceof UpdatePlaybookVersionRequest) {
                    contentType = updatePlaybookVersionRequest.contentType;
                    workspaceId = updatePlaybookVersionRequest.workspaceId;
                    versionId = updatePlaybookVersionRequest.versionId;
                    body = updatePlaybookVersionRequest.body
                } else {
                    contentType = updatePlaybookVersionRequest['content-type'];
                    workspaceId = updatePlaybookVersionRequest['workspace_id'];
                    versionId = updatePlaybookVersionRequest['version_id'];
                    body = updatePlaybookVersionRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updatePlaybookVersion.');
            }
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling updatePlaybookVersion.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['content-type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'workspace_id': workspaceId,'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新工作空间名称、描述等信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateWorkspace(updateWorkspaceRequest?: UpdateWorkspaceRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/workspaces/{workspace_id}",
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

            if (updateWorkspaceRequest !== null && updateWorkspaceRequest !== undefined) {
                if (updateWorkspaceRequest instanceof UpdateWorkspaceRequest) {
                    contentType = updateWorkspaceRequest.contentType;
                    workspaceId = updateWorkspaceRequest.workspaceId;
                    body = updateWorkspaceRequest.body
                } else {
                    contentType = updateWorkspaceRequest['content-type'];
                    workspaceId = updateWorkspaceRequest['workspace_id'];
                    body = updateWorkspaceRequest['body'];
                }
            }

        
            if (workspaceId === null || workspaceId === undefined) {
            throw new RequiredError('workspaceId','Required parameter workspaceId was null or undefined when calling updateWorkspace.');
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