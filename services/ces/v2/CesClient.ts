import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddAlarmRuleResourcesRequest } from './model/AddAlarmRuleResourcesRequest';
import { AddAlarmRuleResourcesResponse } from './model/AddAlarmRuleResourcesResponse';
import { AddResourcesReq } from './model/AddResourcesReq';
import { AdditionalInfo } from './model/AdditionalInfo';
import { AgentDimension } from './model/AgentDimension';
import { AlarmDescription } from './model/AlarmDescription';
import { AlarmDescriptionResp } from './model/AlarmDescriptionResp';
import { AlarmEnabled } from './model/AlarmEnabled';
import { AlarmEnabledResp } from './model/AlarmEnabledResp';
import { AlarmHistoryItemV2 } from './model/AlarmHistoryItemV2';
import { AlarmHistoryItemV2AlarmActions } from './model/AlarmHistoryItemV2AlarmActions';
import { AlarmHistoryItemV2Condition } from './model/AlarmHistoryItemV2Condition';
import { AlarmHistoryItemV2Metric } from './model/AlarmHistoryItemV2Metric';
import { AlarmHistoryItemV2MetricDimensions } from './model/AlarmHistoryItemV2MetricDimensions';
import { AlarmID } from './model/AlarmID';
import { AlarmIDResp } from './model/AlarmIDResp';
import { AlarmLevel } from './model/AlarmLevel';
import { AlarmName } from './model/AlarmName';
import { AlarmNameResp } from './model/AlarmNameResp';
import { AlarmPolicyID } from './model/AlarmPolicyID';
import { AlarmRulePolicy } from './model/AlarmRulePolicy';
import { AlarmTemplateID } from './model/AlarmTemplateID';
import { AlarmTemplateIDResp } from './model/AlarmTemplateIDResp';
import { AlarmTemplatePolicies } from './model/AlarmTemplatePolicies';
import { AlarmTemplates } from './model/AlarmTemplates';
import { AlarmType } from './model/AlarmType';
import { AlarmTypeResp } from './model/AlarmTypeResp';
import { AssociationAlarmTemplate } from './model/AssociationAlarmTemplate';
import { AsyncAssociateRGAndTemplatesReq } from './model/AsyncAssociateRGAndTemplatesReq';
import { BaseWidgetInfo } from './model/BaseWidgetInfo';
import { BaseWidgetInfoLocation } from './model/BaseWidgetInfoLocation';
import { BaseWidgetInfoProperties } from './model/BaseWidgetInfoProperties';
import { BaseWidgetInfoResp } from './model/BaseWidgetInfoResp';
import { BaseWidgetInfoRespLocation } from './model/BaseWidgetInfoRespLocation';
import { BaseWidgetInfoRespProperties } from './model/BaseWidgetInfoRespProperties';
import { BatchCreateResourcesRequest } from './model/BatchCreateResourcesRequest';
import { BatchCreateResourcesResponse } from './model/BatchCreateResourcesResponse';
import { BatchDeleteAlarmRulesRequest } from './model/BatchDeleteAlarmRulesRequest';
import { BatchDeleteAlarmRulesResponse } from './model/BatchDeleteAlarmRulesResponse';
import { BatchDeleteAlarmTemplatesRequest } from './model/BatchDeleteAlarmTemplatesRequest';
import { BatchDeleteAlarmTemplatesRequestBody } from './model/BatchDeleteAlarmTemplatesRequestBody';
import { BatchDeleteAlarmTemplatesResponse } from './model/BatchDeleteAlarmTemplatesResponse';
import { BatchDeleteAlarmsRequestBody } from './model/BatchDeleteAlarmsRequestBody';
import { BatchDeleteDashboardRespInfo } from './model/BatchDeleteDashboardRespInfo';
import { BatchDeleteDashboardsRequestBody } from './model/BatchDeleteDashboardsRequestBody';
import { BatchDeleteNotificationMasksRequest } from './model/BatchDeleteNotificationMasksRequest';
import { BatchDeleteNotificationMasksRequestBody } from './model/BatchDeleteNotificationMasksRequestBody';
import { BatchDeleteNotificationMasksResponse } from './model/BatchDeleteNotificationMasksResponse';
import { BatchDeleteOneClickAlarmsRequest } from './model/BatchDeleteOneClickAlarmsRequest';
import { BatchDeleteOneClickAlarmsRequestBody } from './model/BatchDeleteOneClickAlarmsRequestBody';
import { BatchDeleteOneClickAlarmsResponse } from './model/BatchDeleteOneClickAlarmsResponse';
import { BatchDeleteResourceGroupsRequest } from './model/BatchDeleteResourceGroupsRequest';
import { BatchDeleteResourceGroupsRequestBody } from './model/BatchDeleteResourceGroupsRequestBody';
import { BatchDeleteResourceGroupsResponse } from './model/BatchDeleteResourceGroupsResponse';
import { BatchDeleteResourcesRequest } from './model/BatchDeleteResourcesRequest';
import { BatchDeleteResourcesResponse } from './model/BatchDeleteResourcesResponse';
import { BatchEnableAlarmPoliciesRequestBody } from './model/BatchEnableAlarmPoliciesRequestBody';
import { BatchEnableAlarmRulesRequest } from './model/BatchEnableAlarmRulesRequest';
import { BatchEnableAlarmRulesResponse } from './model/BatchEnableAlarmRulesResponse';
import { BatchEnableAlarmsRequestBody } from './model/BatchEnableAlarmsRequestBody';
import { BatchListSpecifiedMetricDataRequest } from './model/BatchListSpecifiedMetricDataRequest';
import { BatchListSpecifiedMetricDataRequestBody } from './model/BatchListSpecifiedMetricDataRequestBody';
import { BatchListSpecifiedMetricDataResponse } from './model/BatchListSpecifiedMetricDataResponse';
import { BatchUpdateNotificationMaskTimeRequest } from './model/BatchUpdateNotificationMaskTimeRequest';
import { BatchUpdateNotificationMaskTimeRequestBody } from './model/BatchUpdateNotificationMaskTimeRequestBody';
import { BatchUpdateNotificationMaskTimeResponse } from './model/BatchUpdateNotificationMaskTimeResponse';
import { BatchUpdateNotificationMasksRequest } from './model/BatchUpdateNotificationMasksRequest';
import { BatchUpdateNotificationMasksRequestBody } from './model/BatchUpdateNotificationMasksRequestBody';
import { BatchUpdateNotificationMasksResponse } from './model/BatchUpdateNotificationMasksResponse';
import { BatchUpdateOneClickAlarmPoliciesEnabledStateRequest } from './model/BatchUpdateOneClickAlarmPoliciesEnabledStateRequest';
import { BatchUpdateOneClickAlarmPoliciesEnabledStateResponse } from './model/BatchUpdateOneClickAlarmPoliciesEnabledStateResponse';
import { BatchUpdateOneClickAlarmsEnabledStateRequest } from './model/BatchUpdateOneClickAlarmsEnabledStateRequest';
import { BatchUpdateOneClickAlarmsEnabledStateResponse } from './model/BatchUpdateOneClickAlarmsEnabledStateResponse';
import { BatchUpdateWidgetInfo } from './model/BatchUpdateWidgetInfo';
import { BatchUpdateWidgetsRequest } from './model/BatchUpdateWidgetsRequest';
import { BatchUpdateWidgetsResponse } from './model/BatchUpdateWidgetsResponse';
import { CombRelation } from './model/CombRelation';
import { CombResourceName } from './model/CombResourceName';
import { ComparisonOperator } from './model/ComparisonOperator';
import { ComparisonOperatorResp } from './model/ComparisonOperatorResp';
import { Condition } from './model/Condition';
import { Count } from './model/Count';
import { CountResp } from './model/CountResp';
import { CreateAlarmRulesRequest } from './model/CreateAlarmRulesRequest';
import { CreateAlarmRulesResponse } from './model/CreateAlarmRulesResponse';
import { CreateAlarmTemplateRequest } from './model/CreateAlarmTemplateRequest';
import { CreateAlarmTemplateRequestBody } from './model/CreateAlarmTemplateRequestBody';
import { CreateAlarmTemplateResponse } from './model/CreateAlarmTemplateResponse';
import { CreateDashboardRequestBody } from './model/CreateDashboardRequestBody';
import { CreateDashboardWidgetsRequest } from './model/CreateDashboardWidgetsRequest';
import { CreateDashboardWidgetsResponse } from './model/CreateDashboardWidgetsResponse';
import { CreateOneClickAlarmRequest } from './model/CreateOneClickAlarmRequest';
import { CreateOneClickAlarmResponse } from './model/CreateOneClickAlarmResponse';
import { CreateOneDashboardRequest } from './model/CreateOneDashboardRequest';
import { CreateOneDashboardResponse } from './model/CreateOneDashboardResponse';
import { CreateResourceGroupRequest } from './model/CreateResourceGroupRequest';
import { CreateResourceGroupRequestBody } from './model/CreateResourceGroupRequestBody';
import { CreateResourceGroupResponse } from './model/CreateResourceGroupResponse';
import { CreateTime } from './model/CreateTime';
import { DashBoardIdItem } from './model/DashBoardIdItem';
import { DashBoardIdItemResp } from './model/DashBoardIdItemResp';
import { DashBoardInfo } from './model/DashBoardInfo';
import { DashBoardNameItem } from './model/DashBoardNameItem';
import { DashBoardNameItemResp } from './model/DashBoardNameItemResp';
import { DataPointInfo } from './model/DataPointInfo';
import { DelResourcesReq } from './model/DelResourcesReq';
import { DeleteAlarmRuleResourcesRequest } from './model/DeleteAlarmRuleResourcesRequest';
import { DeleteAlarmRuleResourcesResponse } from './model/DeleteAlarmRuleResourcesResponse';
import { DeleteDashboardsRequest } from './model/DeleteDashboardsRequest';
import { DeleteDashboardsResponse } from './model/DeleteDashboardsResponse';
import { DeleteOneWidgetRequest } from './model/DeleteOneWidgetRequest';
import { DeleteOneWidgetResponse } from './model/DeleteOneWidgetResponse';
import { DimNameResp } from './model/DimNameResp';
import { DimValueResp } from './model/DimValueResp';
import { Dimension } from './model/Dimension';
import { DimensionInfo } from './model/DimensionInfo';
import { DimensionInfoResp } from './model/DimensionInfoResp';
import { DimensionNameAllowEmpty } from './model/DimensionNameAllowEmpty';
import { DimensionNameAllowEmptyResp } from './model/DimensionNameAllowEmptyResp';
import { DimensionNames } from './model/DimensionNames';
import { DimensionResp } from './model/DimensionResp';
import { EffectiveTimezone } from './model/EffectiveTimezone';
import { EffectiveTimezoneResp } from './model/EffectiveTimezoneResp';
import { EnableOneClickAlarmRequestBody } from './model/EnableOneClickAlarmRequestBody';
import { EnableOneClickAlarmRequestBodyOneClickUpdateAlarms } from './model/EnableOneClickAlarmRequestBodyOneClickUpdateAlarms';
import { EndDate } from './model/EndDate';
import { EndTime } from './model/EndTime';
import { EnterpriseIdItem } from './model/EnterpriseIdItem';
import { EnterpriseIdItemResp } from './model/EnterpriseIdItemResp';
import { EnterpriseProjectID } from './model/EnterpriseProjectID';
import { EnterpriseProjectIDResp } from './model/EnterpriseProjectIDResp';
import { EnterpriseProjectIdAndTags } from './model/EnterpriseProjectIdAndTags';
import { EpResourceStatistics } from './model/EpResourceStatistics';
import { EventDimensionName } from './model/EventDimensionName';
import { ExtendInfo } from './model/ExtendInfo';
import { ExtendRelationId } from './model/ExtendRelationId';
import { ExtraInfo } from './model/ExtraInfo';
import { ExtraInfoResp } from './model/ExtraInfoResp';
import { Filter } from './model/Filter';
import { FilterResp } from './model/FilterResp';
import { GetResourceGroupResources } from './model/GetResourceGroupResources';
import { GroupID } from './model/GroupID';
import { HierarchicalValue } from './model/HierarchicalValue';
import { HierarchicalValueResp } from './model/HierarchicalValueResp';
import { Instance } from './model/Instance';
import { IsFavoriteItem } from './model/IsFavoriteItem';
import { Level } from './model/Level';
import { LevelResp } from './model/LevelResp';
import { ListAgentDimensionInfoRequest } from './model/ListAgentDimensionInfoRequest';
import { ListAgentDimensionInfoResponse } from './model/ListAgentDimensionInfoResponse';
import { ListAlarmHistoriesRequest } from './model/ListAlarmHistoriesRequest';
import { ListAlarmHistoriesResponse } from './model/ListAlarmHistoriesResponse';
import { ListAlarmRespBodyAlarms } from './model/ListAlarmRespBodyAlarms';
import { ListAlarmRulePoliciesRequest } from './model/ListAlarmRulePoliciesRequest';
import { ListAlarmRulePoliciesResponse } from './model/ListAlarmRulePoliciesResponse';
import { ListAlarmRuleResourcesRequest } from './model/ListAlarmRuleResourcesRequest';
import { ListAlarmRuleResourcesResponse } from './model/ListAlarmRuleResourcesResponse';
import { ListAlarmRulesRequest } from './model/ListAlarmRulesRequest';
import { ListAlarmRulesResponse } from './model/ListAlarmRulesResponse';
import { ListAlarmTemplateAssociationAlarmsRequest } from './model/ListAlarmTemplateAssociationAlarmsRequest';
import { ListAlarmTemplateAssociationAlarmsResponse } from './model/ListAlarmTemplateAssociationAlarmsResponse';
import { ListAlarmTemplatesRequest } from './model/ListAlarmTemplatesRequest';
import { ListAlarmTemplatesResponse } from './model/ListAlarmTemplatesResponse';
import { ListAlarmsRespAlarms } from './model/ListAlarmsRespAlarms';
import { ListAssociationAlarmsResponseAlarms } from './model/ListAssociationAlarmsResponseAlarms';
import { ListCesTargetProjectTagsRequest } from './model/ListCesTargetProjectTagsRequest';
import { ListCesTargetProjectTagsResponse } from './model/ListCesTargetProjectTagsResponse';
import { ListDashboardInfosRequest } from './model/ListDashboardInfosRequest';
import { ListDashboardInfosResponse } from './model/ListDashboardInfosResponse';
import { ListDashboardWidgetsRequest } from './model/ListDashboardWidgetsRequest';
import { ListDashboardWidgetsResponse } from './model/ListDashboardWidgetsResponse';
import { ListNotificationMaskRequestBody } from './model/ListNotificationMaskRequestBody';
import { ListNotificationMaskResourcesRequest } from './model/ListNotificationMaskResourcesRequest';
import { ListNotificationMaskResourcesResponse } from './model/ListNotificationMaskResourcesResponse';
import { ListNotificationMaskRespNotificationMasks } from './model/ListNotificationMaskRespNotificationMasks';
import { ListNotificationMasksRequest } from './model/ListNotificationMasksRequest';
import { ListNotificationMasksResponse } from './model/ListNotificationMasksResponse';
import { ListOneClickAlarmRulesRequest } from './model/ListOneClickAlarmRulesRequest';
import { ListOneClickAlarmRulesResponse } from './model/ListOneClickAlarmRulesResponse';
import { ListOneClickAlarmsRequest } from './model/ListOneClickAlarmsRequest';
import { ListOneClickAlarmsRespOneClickAlarms } from './model/ListOneClickAlarmsRespOneClickAlarms';
import { ListOneClickAlarmsResponse } from './model/ListOneClickAlarmsResponse';
import { ListPolicyResp } from './model/ListPolicyResp';
import { ListRelationType } from './model/ListRelationType';
import { ListResourceGroupsRequest } from './model/ListResourceGroupsRequest';
import { ListResourceGroupsResponse } from './model/ListResourceGroupsResponse';
import { ListResourceGroupsServicesResourcesRequest } from './model/ListResourceGroupsServicesResourcesRequest';
import { ListResourceGroupsServicesResourcesResponse } from './model/ListResourceGroupsServicesResourcesResponse';
import { MaskName } from './model/MaskName';
import { MaskResourceType } from './model/MaskResourceType';
import { MaskStatus } from './model/MaskStatus';
import { MaskType } from './model/MaskType';
import { MetricDataPoint } from './model/MetricDataPoint';
import { MetricDataPointDimensions } from './model/MetricDataPointDimensions';
import { MetricDimensionName } from './model/MetricDimensionName';
import { MetricDimensionResp } from './model/MetricDimensionResp';
import { MetricDimensionSchema } from './model/MetricDimensionSchema';
import { MetricDimensionStrResp } from './model/MetricDimensionStrResp';
import { MetricExtraInfo } from './model/MetricExtraInfo';
import { MetricExtraInfoResp } from './model/MetricExtraInfoResp';
import { MetricName } from './model/MetricName';
import { MetricNameResp } from './model/MetricNameResp';
import { MetricNameSchema } from './model/MetricNameSchema';
import { MultiMetricName } from './model/MultiMetricName';
import { MultiMetricNameResp } from './model/MultiMetricNameResp';
import { Namespace } from './model/Namespace';
import { NamespaceAllowEmpty } from './model/NamespaceAllowEmpty';
import { NamespaceAllowEmptyResp } from './model/NamespaceAllowEmptyResp';
import { NamespaceAllowedEmpty } from './model/NamespaceAllowedEmpty';
import { NamespaceAllowedEmptyResp } from './model/NamespaceAllowedEmptyResp';
import { NamespaceResp } from './model/NamespaceResp';
import { NamespaceSchema } from './model/NamespaceSchema';
import { Notification } from './model/Notification';
import { NotificationBeginTime } from './model/NotificationBeginTime';
import { NotificationBeginTimeResp } from './model/NotificationBeginTimeResp';
import { NotificationEnabled } from './model/NotificationEnabled';
import { NotificationEnabledResp } from './model/NotificationEnabledResp';
import { NotificationEndTime } from './model/NotificationEndTime';
import { NotificationEndTimeResp } from './model/NotificationEndTimeResp';
import { NotificationMaskCreateTime } from './model/NotificationMaskCreateTime';
import { NotificationMaskID } from './model/NotificationMaskID';
import { NotificationMaskUpdateTime } from './model/NotificationMaskUpdateTime';
import { NotificationResp } from './model/NotificationResp';
import { OneClickAlarmDescription } from './model/OneClickAlarmDescription';
import { OneClickAlarmEnabled } from './model/OneClickAlarmEnabled';
import { OneClickAlarmID } from './model/OneClickAlarmID';
import { OneClickAlarmIDResp } from './model/OneClickAlarmIDResp';
import { OneClickAlarmPolicy } from './model/OneClickAlarmPolicy';
import { OneResourceGroupResp } from './model/OneResourceGroupResp';
import { OneResourceGroupRespResourceStatistics } from './model/OneResourceGroupRespResourceStatistics';
import { OverwriteResultResp } from './model/OverwriteResultResp';
import { Period } from './model/Period';
import { PeriodResp } from './model/PeriodResp';
import { Policies } from './model/Policies';
import { PoliciesInListResp } from './model/PoliciesInListResp';
import { Policy } from './model/Policy';
import { PolicyEnabled } from './model/PolicyEnabled';
import { PostAlarmsReqV2 } from './model/PostAlarmsReqV2';
import { ProductInstance } from './model/ProductInstance';
import { ProductMetric } from './model/ProductMetric';
import { ProductResource } from './model/ProductResource';
import { PutAlarmNotificationReq } from './model/PutAlarmNotificationReq';
import { PutResourceGroupReq } from './model/PutResourceGroupReq';
import { RelationID } from './model/RelationID';
import { RelationType } from './model/RelationType';
import { Resource } from './model/Resource';
import { ResourceCategory } from './model/ResourceCategory';
import { ResourceDimension } from './model/ResourceDimension';
import { ResourceGroupID } from './model/ResourceGroupID';
import { ResourceGroupTagRelation } from './model/ResourceGroupTagRelation';
import { ResourceNameItem } from './model/ResourceNameItem';
import { ResourceNamespace } from './model/ResourceNamespace';
import { ResourceTag } from './model/ResourceTag';
import { ResourcesInListResp } from './model/ResourcesInListResp';
import { ResourcesReqV2 } from './model/ResourcesReqV2';
import { RollupDimension } from './model/RollupDimension';
import { RollupDimensionResp } from './model/RollupDimensionResp';
import { RollupEnable } from './model/RollupEnable';
import { RollupEnableResp } from './model/RollupEnableResp';
import { RollupFilter } from './model/RollupFilter';
import { RollupFilterResp } from './model/RollupFilterResp';
import { SMNUrn } from './model/SMNUrn';
import { SMNUrnResp } from './model/SMNUrnResp';
import { SelectedUnit } from './model/SelectedUnit';
import { ShowAlarmTemplateRequest } from './model/ShowAlarmTemplateRequest';
import { ShowAlarmTemplateResponse } from './model/ShowAlarmTemplateResponse';
import { ShowResourceGroupRequest } from './model/ShowResourceGroupRequest';
import { ShowResourceGroupResponse } from './model/ShowResourceGroupResponse';
import { ShowWidgetRequest } from './model/ShowWidgetRequest';
import { ShowWidgetResponse } from './model/ShowWidgetResponse';
import { StartDate } from './model/StartDate';
import { StartTime } from './model/StartTime';
import { SuppressDuration } from './model/SuppressDuration';
import { SuppressDurationResp } from './model/SuppressDurationResp';
import { TMSKey } from './model/TMSKey';
import { TMSValue } from './model/TMSValue';
import { TagResp } from './model/TagResp';
import { TemplateDescription } from './model/TemplateDescription';
import { TemplateID } from './model/TemplateID';
import { TemplateIDResp } from './model/TemplateIDResp';
import { TemplateName } from './model/TemplateName';
import { TemplateType } from './model/TemplateType';
import { ThresholdInfo } from './model/ThresholdInfo';
import { ThresholdInfoResp } from './model/ThresholdInfoResp';
import { TimeStampResp } from './model/TimeStampResp';
import { Type } from './model/Type';
import { Unit } from './model/Unit';
import { UnitItem } from './model/UnitItem';
import { UnitItemResp } from './model/UnitItemResp';
import { UnitResp } from './model/UnitResp';
import { UpdateAlarmNotificationsRequest } from './model/UpdateAlarmNotificationsRequest';
import { UpdateAlarmNotificationsResponse } from './model/UpdateAlarmNotificationsResponse';
import { UpdateAlarmRulePoliciesReqBodyV2 } from './model/UpdateAlarmRulePoliciesReqBodyV2';
import { UpdateAlarmRulePoliciesRequest } from './model/UpdateAlarmRulePoliciesRequest';
import { UpdateAlarmRulePoliciesResponse } from './model/UpdateAlarmRulePoliciesResponse';
import { UpdateAlarmTemplateRequest } from './model/UpdateAlarmTemplateRequest';
import { UpdateAlarmTemplateRequestBody } from './model/UpdateAlarmTemplateRequestBody';
import { UpdateAlarmTemplateResponse } from './model/UpdateAlarmTemplateResponse';
import { UpdateDashboardRequest } from './model/UpdateDashboardRequest';
import { UpdateDashboardRequestBody } from './model/UpdateDashboardRequestBody';
import { UpdateDashboardResponse } from './model/UpdateDashboardResponse';
import { UpdateNotificationMaskRequest } from './model/UpdateNotificationMaskRequest';
import { UpdateNotificationMaskResponse } from './model/UpdateNotificationMaskResponse';
import { UpdateNotificationMasksRequestBody } from './model/UpdateNotificationMasksRequestBody';
import { UpdateOneClickAlarmNotificationsRequest } from './model/UpdateOneClickAlarmNotificationsRequest';
import { UpdateOneClickAlarmNotificationsRequestBody } from './model/UpdateOneClickAlarmNotificationsRequestBody';
import { UpdateOneClickAlarmNotificationsResponse } from './model/UpdateOneClickAlarmNotificationsResponse';
import { UpdatePolicyReq } from './model/UpdatePolicyReq';
import { UpdatePolicyResp } from './model/UpdatePolicyResp';
import { UpdateResourceGroupAssociationAlarmTemplateRequest } from './model/UpdateResourceGroupAssociationAlarmTemplateRequest';
import { UpdateResourceGroupAssociationAlarmTemplateResponse } from './model/UpdateResourceGroupAssociationAlarmTemplateResponse';
import { UpdateResourceGroupRequest } from './model/UpdateResourceGroupRequest';
import { UpdateResourceGroupResponse } from './model/UpdateResourceGroupResponse';
import { UpdateWidgetInfo } from './model/UpdateWidgetInfo';
import { UpdateWidgetInfoLocation } from './model/UpdateWidgetInfoLocation';
import { UpdateWidgetInfoProperties } from './model/UpdateWidgetInfoProperties';
import { Value } from './model/Value';
import { ValueResp } from './model/ValueResp';
import { WidgetDisplayMode } from './model/WidgetDisplayMode';
import { WidgetIdItem } from './model/WidgetIdItem';
import { WidgetInfo } from './model/WidgetInfo';
import { WidgetInfoWithId } from './model/WidgetInfoWithId';
import { WidgetMetric } from './model/WidgetMetric';
import { WidgetMetricName } from './model/WidgetMetricName';
import { WidgetMetricNameResp } from './model/WidgetMetricNameResp';
import { WidgetMetricResp } from './model/WidgetMetricResp';

export class CesClient {
    public static newBuilder(): ClientBuilder<CesClient> {
            let client = new ClientBuilder<CesClient>(newClient);
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
     * 批量增加告警规则资源(资源分组类型的告警规则不支持)，资源分组类型的修改请使用资源分组管理相关接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量增加告警规则资源
     * @param {string} alarmId Alarm实例ID
     * @param {ResourcesReqV2} addAlarmRuleResourcesRequestBody 批量增加告警规则资源的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAlarmRuleResources(addAlarmRuleResourcesRequest?: AddAlarmRuleResourcesRequest): Promise<AddAlarmRuleResourcesResponse> {
        const options = ParamCreater().addAlarmRuleResources(addAlarmRuleResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给自定义资源分组,即类型为手动添加的资源分组,批量增加关联资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自定义资源分组批量增加关联资源
     * @param {string} groupId 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {AddResourcesReq} batchCreateResourcesRequestBody 添加资源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateResources(batchCreateResourcesRequest?: BatchCreateResourcesRequest): Promise<BatchCreateResourcesResponse> {
        const options = ParamCreater().batchCreateResources(batchCreateResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除告警规则V2接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除告警规则
     * @param {BatchDeleteAlarmsRequestBody} batchDeleteAlarmRulesRequestBody 批量删除告警规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAlarmRules(batchDeleteAlarmRulesRequest?: BatchDeleteAlarmRulesRequest): Promise<BatchDeleteAlarmRulesResponse> {
        const options = ParamCreater().batchDeleteAlarmRules(batchDeleteAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除自定义告警模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除自定义告警模板
     * @param {BatchDeleteAlarmTemplatesRequestBody} batchDeleteAlarmTemplatesRequestBody 批量删除告警模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteAlarmTemplates(batchDeleteAlarmTemplatesRequest?: BatchDeleteAlarmTemplatesRequest): Promise<BatchDeleteAlarmTemplatesResponse> {
        const options = ParamCreater().batchDeleteAlarmTemplates(batchDeleteAlarmTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除告警通知屏蔽规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除告警通知屏蔽规则
     * @param {BatchDeleteNotificationMasksRequestBody} batchDeleteNotificationMasksRequestBody 批量删除通知屏蔽规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteNotificationMasks(batchDeleteNotificationMasksRequest?: BatchDeleteNotificationMasksRequest): Promise<BatchDeleteNotificationMasksResponse> {
        const options = ParamCreater().batchDeleteNotificationMasks(batchDeleteNotificationMasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除一键告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除一键告警
     * @param {BatchDeleteOneClickAlarmsRequestBody} batchDeleteOneClickAlarmsRequestBody 批量停用一键告警请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteOneClickAlarms(batchDeleteOneClickAlarmsRequest?: BatchDeleteOneClickAlarmsRequest): Promise<BatchDeleteOneClickAlarmsResponse> {
        const options = ParamCreater().batchDeleteOneClickAlarms(batchDeleteOneClickAlarmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除资源分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除资源分组
     * @param {BatchDeleteResourceGroupsRequestBody} batchDeleteResourceGroupsRequestBody 批量删除资源分组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResourceGroups(batchDeleteResourceGroupsRequest?: BatchDeleteResourceGroupsRequest): Promise<BatchDeleteResourceGroupsResponse> {
        const options = ParamCreater().batchDeleteResourceGroups(batchDeleteResourceGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给自定义资源分组,即类型为手动添加的资源分组,批量删除关联资源
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 自定义资源分组批量删除关联资源
     * @param {string} groupId 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {DelResourcesReq} batchDeleteResourcesRequestBody 删除资源请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteResources(batchDeleteResourcesRequest?: BatchDeleteResourcesRequest): Promise<BatchDeleteResourcesResponse> {
        const options = ParamCreater().batchDeleteResources(batchDeleteResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量启停告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量启停告警规则
     * @param {BatchEnableAlarmsRequestBody} batchEnableAlarmRulesRequestBody 批量启停告警规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchEnableAlarmRules(batchEnableAlarmRulesRequest?: BatchEnableAlarmRulesRequest): Promise<BatchEnableAlarmRulesResponse> {
        const options = ParamCreater().batchEnableAlarmRules(batchEnableAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询指标数据
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询指标数据
     * @param {BatchListSpecifiedMetricDataRequestBody} batchListSpecifiedMetricDataRequestBody **参数解释**： 批量查询指标数据请求体。    **约束限制**： 不涉及。 **取值范围**： 不涉及。      **默认取值**： 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListSpecifiedMetricData(batchListSpecifiedMetricDataRequest?: BatchListSpecifiedMetricDataRequest): Promise<BatchListSpecifiedMetricDataResponse> {
        const options = ParamCreater().batchListSpecifiedMetricData(batchListSpecifiedMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改告警通知屏蔽规则的屏蔽时间
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改告警通知屏蔽规则的屏蔽时间
     * @param {BatchUpdateNotificationMaskTimeRequestBody} batchUpdateNotificationMaskTimeRequestBody 批量修改告警通知屏蔽规则的屏蔽时间请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateNotificationMaskTime(batchUpdateNotificationMaskTimeRequest?: BatchUpdateNotificationMaskTimeRequest): Promise<BatchUpdateNotificationMaskTimeResponse> {
        const options = ParamCreater().batchUpdateNotificationMaskTime(batchUpdateNotificationMaskTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量设置告警通知屏蔽规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量设置告警通知屏蔽规则
     * @param {BatchUpdateNotificationMasksRequestBody} batchUpdateNotificationMasksRequestBody 批量设置通知屏蔽规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateNotificationMasks(batchUpdateNotificationMasksRequest?: BatchUpdateNotificationMasksRequest): Promise<BatchUpdateNotificationMasksResponse> {
        const options = ParamCreater().batchUpdateNotificationMasks(batchUpdateNotificationMasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改一键告警关联告警规则策略的启用状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改一键告警关联告警规则策略的启用状态
     * @param {string} oneClickAlarmId 一键告警ID
     * @param {string} alarmId 告警规则ID
     * @param {BatchEnableAlarmPoliciesRequestBody} batchUpdateOneClickAlarmPoliciesEnabledStateRequestBody 批量启停告警规则策略请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateOneClickAlarmPoliciesEnabledState(batchUpdateOneClickAlarmPoliciesEnabledStateRequest?: BatchUpdateOneClickAlarmPoliciesEnabledStateRequest): Promise<BatchUpdateOneClickAlarmPoliciesEnabledStateResponse> {
        const options = ParamCreater().batchUpdateOneClickAlarmPoliciesEnabledState(batchUpdateOneClickAlarmPoliciesEnabledStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改一键告警关联告警规则的启用状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改一键告警关联告警规则的启用状态
     * @param {string} oneClickAlarmId **参数解释**： 一键告警ID。 **约束限制**： 不涉及。 **取值范围**： 只能为字母或者数字，字符长度为[1,64] **默认取值**： 不涉及。 
     * @param {BatchEnableAlarmsRequestBody} batchUpdateOneClickAlarmsEnabledStateRequestBody 批量启停告警规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateOneClickAlarmsEnabledState(batchUpdateOneClickAlarmsEnabledStateRequest?: BatchUpdateOneClickAlarmsEnabledStateRequest): Promise<BatchUpdateOneClickAlarmsEnabledStateResponse> {
        const options = ParamCreater().batchUpdateOneClickAlarmsEnabledState(batchUpdateOneClickAlarmsEnabledStateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量更新监控视图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量更新监控视图
     * @param {Array<UpdateWidgetInfo>} batchUpdateWidgetsRequestBody 批量更新监控视图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchUpdateWidgets(batchUpdateWidgetsRequest?: BatchUpdateWidgetsRequest): Promise<BatchUpdateWidgetsResponse> {
        const options = ParamCreater().batchUpdateWidgets(batchUpdateWidgetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建告警规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警规则（推荐）
     * @param {PostAlarmsReqV2} createAlarmRulesRequestBody 创建告警的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlarmRules(createAlarmRulesRequest?: CreateAlarmRulesRequest): Promise<CreateAlarmRulesResponse> {
        const options = ParamCreater().createAlarmRules(createAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义告警模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义告警模板
     * @param {CreateAlarmTemplateRequestBody} createAlarmTemplateRequestBody 创建告警模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlarmTemplate(createAlarmTemplateRequest?: CreateAlarmTemplateRequest): Promise<CreateAlarmTemplateResponse> {
        const options = ParamCreater().createAlarmTemplate(createAlarmTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建/复制/批量创建监控视图到指定的监控看板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建/复制/批量创建监控视图到指定的监控看板
     * @param {string} dashboardId **参数解释**: 监控看板id **约束限制**: 不涉及。 **取值范围**: 以db开头，包含22个字母和数字，长度为24个字符 **默认取值**: 不涉及。 
     * @param {Array<BaseWidgetInfo>} [createDashboardWidgetsRequestBody] **参数解释**: 创建单指标条形图类型监控视图到指定监控看板请求体 **约束限制**: 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDashboardWidgets(createDashboardWidgetsRequest?: CreateDashboardWidgetsRequest): Promise<CreateDashboardWidgetsResponse> {
        const options = ParamCreater().createDashboardWidgets(createDashboardWidgetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一键告警
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建一键告警
     * @param {EnableOneClickAlarmRequestBody} createOneClickAlarmRequestBody 启用一键告警请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOneClickAlarm(createOneClickAlarmRequest?: CreateOneClickAlarmRequest): Promise<CreateOneClickAlarmResponse> {
        const options = ParamCreater().createOneClickAlarm(createOneClickAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建/复制监控看板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建/复制监控看板
     * @param {CreateDashboardRequestBody} createOneDashboardRequestBody **参数解释**: 创建监控看板请求体 **约束限制**: 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createOneDashboard(createOneDashboardRequest?: CreateOneDashboardRequest): Promise<CreateOneDashboardResponse> {
        const options = ParamCreater().createOneDashboard(createOneDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源分组（推荐）
     * @param {CreateResourceGroupRequestBody} createResourceGroupRequestBody **参数解释** 创建资源分组请求体 **约束限制** 不涉及 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createResourceGroup(createResourceGroupRequest?: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
        const options = ParamCreater().createResourceGroup(createResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除告警规则资源（资源分组类型的告警规则不支持），资源分组类型的修改请使用资源分组管理相关接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除告警规则资源
     * @param {string} alarmId Alarm实例ID
     * @param {ResourcesReqV2} deleteAlarmRuleResourcesRequestBody 批量删除告警规则资源的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmRuleResources(deleteAlarmRuleResourcesRequest?: DeleteAlarmRuleResourcesRequest): Promise<DeleteAlarmRuleResourcesResponse> {
        const options = ParamCreater().deleteAlarmRuleResources(deleteAlarmRuleResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除监控看板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除监控看板
     * @param {BatchDeleteDashboardsRequestBody} [deleteDashboardsRequestBody] 批量删除监控看板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDashboards(deleteDashboardsRequest?: DeleteDashboardsRequest): Promise<DeleteDashboardsResponse> {
        const options = ParamCreater().deleteDashboards(deleteDashboardsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定监控视图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定监控视图
     * @param {string} widgetId **参数解释**: 监控视图id。 **约束限制**: 不涉及。 **取值范围**: 字符串必须以wg开头，包含22个字母和数字，长度为24个字符。 **默认取值**: 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteOneWidget(deleteOneWidgetRequest?: DeleteOneWidgetRequest): Promise<DeleteOneWidgetResponse> {
        const options = ParamCreater().deleteOneWidget(deleteOneWidgetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ECS/BMS资源ID及特殊维度值(仅支持磁盘、挂载点、进程、显卡、RAID控制器)查询该特殊维度对应的原始维度值；其他维度无需调用该接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机监控原始维度值
     * @param {string} instanceId **参数描述**： 资源ID，如：4270ff17-aba3-4138-89fa-820594c39755。 **约束限制**： 不涉及。 **取值范围**： 字符串长度为36。 **默认取值**： 不涉及。 
     * @param {'mount_point' | 'disk' | 'proc' | 'gpu' | 'raid'} dimName **参数描述**： 维度名称。 **约束限制**： 不涉及。 **取值范围**： 枚举类型，mount_point:挂载点，disk:磁盘，proc:进程，gpu:显卡，raid:RAID控制器。 **默认取值**： 不涉及。 
     * @param {string} [dimValue] **参数描述**： 维度值(建议：同一个instance_id下相同dim_value对应的原始维度值origin_value是一样的，无需多次调用，建议根据instance_id + dim_value作为key进行缓存重复使用)。 **约束限制**： 不涉及。  **取值范围**： 32位字符串，如：2e84018fc8b4484b94e89aae212fe615。 **默认取值**： 不涉及。 
     * @param {number} [offset] **参数描述**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： 最小值为0，最大值为2147483647。 **默认取值**： 0 
     * @param {number} [limit] **参数描述**： 分页大小。 **约束限制**： 不涉及。 **取值范围**： 最小值为1，最大值为1000。 **默认取值**： 1000 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgentDimensionInfo(listAgentDimensionInfoRequest?: ListAgentDimensionInfoRequest): Promise<ListAgentDimensionInfoResponse> {
        const options = ParamCreater().listAgentDimensionInfo(listAgentDimensionInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警记录列表
     * @param {Array<string>} [alarmId] **参数解释**： 告警ID列表。告警ID：以al开头，后跟22位由字母或数字组成的字符串。 **约束限制**： 列表最大长度为50。 
     * @param {string} [recordId] **参数解释**： 告警记录ID。 **约束限制**： 不涉及。 **取值范围**： 以ah开头，后跟22位由字母或数字组成的字符串，字符串长度为24。 **默认取值**： 不涉及。 
     * @param {string} [name] **参数解释**： 告警规则名称。 **约束限制**： 不涉及。 **取值范围**： 最大128字符长度。 **默认取值**： 不涉及。 
     * @param {Array<'ok' | 'alarm' | 'invalid'>} [status] **参数解释**： 告警规则状态列表。告警规则状态：枚举值，ok为正常，alarm为告警，invalid为已失效。 **约束限制**： 列表长度最大为3。 
     * @param {number} [level] **参数解释**： 告警级别。 **约束限制**： 不涉及。 **取值范围**： 枚举值，1为紧急，2为重要，3为次要，4为提示。 **默认取值**： 不涉及。 
     * @param {string} [namespace] **参数解释**： 查询服务的命名空间，各服务命名空间请参考“[服务命名空间](ces_03_0059.xml)”。 **约束限制**： 不涉及。 **取值范围**： 格式为service.item；service和item必须是字符串，必须以字母开头，只能包含0-9/a-z/A-Z/_。字符串的长度必须在 3 到 32个字符之间。 **默认取值**： 不涉及。 
     * @param {string} [resourceId] **参数解释**： 告警资源ID。 **约束限制**： 不涉及。 **取值范围**： 多维度情况按字母升序排列并使用逗号分隔。最大字符长度为2048。 **默认取值**： 不涉及。 
     * @param {string} [from] **参数解释**： 查询告警记录的起始更新时间，例如：2022-02-10T10:05:46+08:00。 **约束限制**： 不涉及。 **取值范围**： 最大字符长度为64。 **默认取值**： 不涉及。 
     * @param {string} [to] **参数解释**： 查询告警记录的截止更新时间，例如：2022-02-10T10:05:47+08:00。 **约束限制**： 不涉及。 **取值范围**： 最大字符长度为64。 **默认取值**： 不涉及。 
     * @param {'event' | 'metric'} [alarmType] **参数解释**： 告警类型。 **约束限制**： 不涉及。 **取值范围**： 枚举值。event:查询事件类型告警，metric:查询指标类型告警。 **默认取值**： 不涉及。 
     * @param {string} [createTimeFrom] **参数解释**： 查询告警记录的起始创建时间，例如：2022-02-10T10:05:46+08:00。 **约束限制**： 不涉及。 **取值范围**： 最大字符长度为64。 **默认取值**： 不涉及。 
     * @param {string} [createTimeTo] **参数解释**： 查询告警记录的截止创建时间，例如：2022-02-10T10:05:47+08:00。 **约束限制**： 不涉及。 **取值范围**： 最大字符长度为64。 **默认取值**： 不涉及。 
     * @param {number} [offset] **参数解释**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： 整数，最小值为0，最大值为1000000000。 **默认取值**： 0 
     * @param {number} [limit] **参数解释**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： 整数，最小值为1，最大值为100。 **默认取值**： 100 
     * @param {'first_alarm_time' | 'update_time' | 'alarm_level' | 'record_id'} [orderBy] **参数解释**： 按关键字排序。 **约束限制**： 不涉及。 **取值范围**： 枚举值。first_alarm_time:告警产生时间, update_time:更新时间, alarm_level:告警级别，record_id表记录主键。 **默认取值**： update_time 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmHistories(listAlarmHistoriesRequest?: ListAlarmHistoriesRequest): Promise<ListAlarmHistoriesResponse> {
        const options = ParamCreater().listAlarmHistories(listAlarmHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据告警规则ID查询策略列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警规则策略列表
     * @param {string} alarmId **参数解释**： 告警规则ID。     **约束限制**： 不涉及。 **取值范围**： 以al开头，后跟22个数字或字母。字符长度为24 **默认取值**： 不涉及。 
     * @param {number} [offset] **参数解释**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： 0-10000 **默认取值**： 0 
     * @param {number} [limit] **参数解释**： 分页大小。 **约束限制**： 不涉及。 **取值范围**： 1-100 **默认取值**： 10 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmRulePolicies(listAlarmRulePoliciesRequest?: ListAlarmRulePoliciesRequest): Promise<ListAlarmRulePoliciesResponse> {
        const options = ParamCreater().listAlarmRulePolicies(listAlarmRulePoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据告警规则ID查询告警规则资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警规则资源列表
     * @param {string} alarmId **参数解释**： 告警规则ID。 **约束限制**： 不涉及。 **取值范围**： 以al开头，后跟22位的字母或数字。          **默认取值**： 不涉及。 
     * @param {number} [offset] **参数描述**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： 最小值为0，最大值为10000。 **默认取值**： 0 
     * @param {number} [limit] **参数描述**： 分页大小。 **约束限制**： 不涉及。 **取值范围**： 最小值为1，最大值为100。 **默认取值**： 10 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmRuleResources(listAlarmRuleResourcesRequest?: ListAlarmRuleResourcesRequest): Promise<ListAlarmRuleResourcesResponse> {
        const options = ParamCreater().listAlarmRuleResources(listAlarmRuleResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警规则列表（推荐）
     * @param {string} [alarmId] **参数解释**： 告警规则ID。 **约束限制**： 不涉及。 **取值范围**： 以al开头，后跟22位的字母或数字。          **默认取值**： 不涉及。 
     * @param {string} [name] **参数解释**： 告警名称。 **约束限制**： 不涉及。 **取值范围**： 只能包含0-9/a-z/A-Z/_/-或汉字，长度为[1,128]个字符。          **默认取值**： 不涉及。 
     * @param {string} [namespace] **参数解释**： 查询服务的命名空间，各服务命名空间请参考“[服务命名空间](ces_03_0059.xml)”。 **约束限制**： 不涉及。 **取值范围**： 格式为service.item；service和item必须是字符串，必须以字母开头，只能包含0-9/a-z/A-Z/_。字符串的长度在 0 到 32个字符之间。           **默认取值**： 不涉及。 
     * @param {string} [resourceId] **参数解释**： 告警资源ID。 **约束限制**： 不涉及。 **取值范围**： 多维度情况按字母升序排列并使用逗号分隔。 长度为[0,700]个字符。        **默认取值**： 不涉及。 
     * @param {string} [enterpriseProjectId] **参数解释**： 企业项目ID。 **约束限制**： 不涉及。 **取值范围**： 只能包含小写字母、数字、“-”、“_”，可以自定义企业项目ID，长度为36个字符。也可以为0（代表默认企业项目ID），all_granted_eps（代表所有企业项目ID）。           **默认取值**： 不涉及。 
     * @param {string} [productName] **参数解释**： 产品层级跨维规则查询时支持产品名称查询，一般由\&quot;服务命名空间,服务首层维度名称\&quot;组成，如\&quot;SYS.ECS,instance_id\&quot;。 **约束限制**： 不涉及。 **取值范围**： 长度为[0,128]个字符。        **默认取值**： 不涉及。 
     * @param {'product' | 'dimension'} [resourceLevel] **参数解释**： 产品层级跨维规则查询时支持规则所属类型查询，resource_level取值为product即为云产品类型，不填或者取值为dimension则为子维度类型。           **约束限制**： 不涉及。 **取值范围**： 枚举值。 - product：云产品。 - dimension：子维度。 **默认取值**： 不涉及。 
     * @param {number} [offset] **参数解释**： 分页偏移量。 **约束限制**： 不涉及。 **取值范围**： [0,10000]           **默认取值**： 0 
     * @param {number} [limit] **参数解释**： 分页大小。 **约束限制**： 不涉及。 **取值范围**： [1,100]           **默认取值**： 10 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmRules(listAlarmRulesRequest?: ListAlarmRulesRequest): Promise<ListAlarmRulesResponse> {
        const options = ParamCreater().listAlarmRules(listAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警模板关联的告警规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警模板关联的告警规则列表
     * @param {string} templateId 告警模板的ID，以at开头，后跟字母、数字，长度最长为64
     * @param {number} [offset] 分页查询时查询的起始位置，表示从第几条数据开始，默认为0
     * @param {number} [limit] 查询结果条数的限制值，取值范围为[1,100]，默认值为100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmTemplateAssociationAlarms(listAlarmTemplateAssociationAlarmsRequest?: ListAlarmTemplateAssociationAlarmsRequest): Promise<ListAlarmTemplateAssociationAlarmsResponse> {
        const options = ParamCreater().listAlarmTemplateAssociationAlarms(listAlarmTemplateAssociationAlarmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警模板列表
     * @param {number} [offset] 分页查询时查询的起始位置，表示从第几条数据开始，默认为0
     * @param {number} [limit] 查询结果条数的限制值，取值范围为[1,100]，默认值为100
     * @param {string} [namespace] 查询服务的命名空间，各服务命名空间请参考“[服务命名空间](ces_03_0059.xml)”
     * @param {string} [dimName] 资源维度，必须以字母开头，多维度用\&quot;,\&quot;分隔，只能包含0-9/a-z/A-Z/_/-，每个维度的最大长度为32
     * @param {'system' | 'custom' | 'system_event' | 'custom_event' | 'system_custom_event'} [templateType] 模板类型(system代表默认指标模板，custom代表自定义指标模板，system_event代表默认事件模板，custom_event代表自定义事件模板，system_custom_event代表全部事件模板),不传返回全部指标模板
     * @param {string} [templateName] 告警模板的名称，以字母或汉字开头，可包含字母、数字、汉字、_、-，长度范围[1,128]，支持模糊匹配
     * @param {string} [productName] （已废弃）支持按照产品名称粒度进行查询告警模板，产品名称一般由\&quot;服务命名空间,服务首层维度名称\&quot;组成，如\&quot;SYS.ECS,instance_id\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmTemplates(listAlarmTemplatesRequest?: ListAlarmTemplatesRequest): Promise<ListAlarmTemplatesResponse> {
        const options = ParamCreater().listAlarmTemplates(listAlarmTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CES指定项目指定资源类型标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CES指定项目指定资源类型标签列表
     * @param {'CES-alarm'} resourceType **参数解释**： 资源类型。     **约束限制**： 不涉及。 **取值范围**： 只能为CES-alarm，代表告警规则。长度[1,32]个字符。      **默认取值**： 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCesTargetProjectTags(listCesTargetProjectTagsRequest?: ListCesTargetProjectTagsRequest): Promise<ListCesTargetProjectTagsResponse> {
        const options = ParamCreater().listCesTargetProjectTags(listCesTargetProjectTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监控看板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控看板列表
     * @param {string} [enterpriseId] **参数解释**： 企业项目ID。 **约束限制**： 不涉及。 **取值范围**： 只能包含小写字母、数字、“-”、“_”，可以自定义企业项目ID，长度为36个字符。也可以为0（代表默认企业项目ID），all_granted_eps（代表所有企业项目ID）。           **默认取值**： 不涉及。 
     * @param {boolean} [isFavorite] **参数解释**： 指定企业项目下监控看板是否收藏。 **约束限制**： 填此参数时，enterprise_id必填。 **取值范围**： - true:收藏 - false:未收藏          **默认取值**： 不涉及。 
     * @param {string} [dashboardName] **参数解释**： 监控看板名称。 **约束限制**： 不涉及。 **取值范围**： 长度为[1,128]个字符，只允许中文、英文、数字0-9、_和-          **默认取值**： 不涉及。 
     * @param {string} [dashboardId] **参数解释**： 监控看板id。 **约束限制**： 不涉及。 **取值范围**： 以db开头，包含22个字母和数字，长度为24个字符 **默认取值**： 不涉及。 
     * @param {'monitor_dashboard' | 'other'} [dashboardType] **参数解释**： 监控看板类型。 **约束限制**： 不涉及。 **取值范围**： - monitor_dashboard:表示监控大盘 - other:表示自定义看板 **默认取值**： 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDashboardInfos(listDashboardInfosRequest?: ListDashboardInfosRequest): Promise<ListDashboardInfosResponse> {
        const options = ParamCreater().listDashboardInfos(listDashboardInfosRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定监控看板下的监控视图列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定监控看板下的监控视图列表
     * @param {string} dashboardId **参数解释**: 监控看板id **约束限制**: 不涉及。 **取值范围**: 以db开头，包含22个字母和数字，长度为24个字符 **默认取值**: 不涉及。 
     * @param {string} [groupId] 视图所在的分组id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDashboardWidgets(listDashboardWidgetsRequest?: ListDashboardWidgetsRequest): Promise<ListDashboardWidgetsResponse> {
        const options = ParamCreater().listDashboardWidgets(listDashboardWidgetsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警通知屏蔽资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警通知屏蔽资源列表
     * @param {string} notificationMaskId **参数解释**： 屏蔽规则ID。    **约束限制**： 不涉及。 **取值范围**： 只能包含字母、数字，长度为[1,64]个字符。           **默认取值**： 不涉及。 
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationMaskResources(listNotificationMaskResourcesRequest?: ListNotificationMaskResourcesRequest): Promise<ListNotificationMaskResourcesResponse> {
        const options = ParamCreater().listNotificationMaskResources(listNotificationMaskResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量查询指定类型的通知屏蔽规则，目前最多支持100个通知屏蔽规则的批量查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警通知屏蔽列表
     * @param {ListNotificationMaskRequestBody} listNotificationMasksRequestBody 批量查询通知屏蔽规则，请求参数。
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
     * @param {'create_time' | 'update_time'} [sortKey] 排序关键字，与sort_dir同时使用。 目前只支持create_time与update_time create_time表示按创建时间排序，update_time表示按修改时间排序
     * @param {'ASC' | 'DESC'} [sortDir] 排序顺序，与sort_key同时使用。DESC表示降序排序；ASC表示升序排序；
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotificationMasks(listNotificationMasksRequest?: ListNotificationMasksRequest): Promise<ListNotificationMasksResponse> {
        const options = ParamCreater().listNotificationMasks(listNotificationMasksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询一键告警关联告警规则列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询一键告警关联告警规则列表
     * @param {string} oneClickAlarmId 一键告警ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOneClickAlarmRules(listOneClickAlarmRulesRequest?: ListOneClickAlarmRulesRequest): Promise<ListOneClickAlarmRulesResponse> {
        const options = ParamCreater().listOneClickAlarmRules(listOneClickAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询一键告警列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询一键告警列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOneClickAlarms(listOneClickAlarmsRequest?: ListOneClickAlarmsRequest): Promise<ListOneClickAlarmsResponse> {
        const options = ParamCreater().listOneClickAlarms();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源分组列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源分组列表
     * @param {string} [enterpriseProjectId] 归属企业项目ID
     * @param {string} [groupName] 资源分组名称，支持模糊查询
     * @param {string} [groupId] 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {number} [offset] 分页查询时查询的起始位置，表示从第几条数据开始，默认为0
     * @param {number} [limit] 分页查询时每页的条目数，取值[1,100]，默认值为100
     * @param {'EPS' | 'TAG' | 'Manual' | 'COMB' | 'NAME'} [type] 资源分组添加资源方式，取值只能为EPS（同步企业项目）,TAG（标签动态匹配）,Manual（手动添加），不传代表查询所有资源分组类型,COMB（智能添加-组合匹配）,NAME（资源名称模糊匹配）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceGroups(listResourceGroupsRequest?: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
        const options = ParamCreater().listResourceGroups(listResourceGroupsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询资源分组下指定服务类别特定维度的资源列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源分组下指定服务类别特定维度的资源列表
     * @param {string} groupId 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {string} service 服务类别，如SYS.ECS
     * @param {string} [dimName] 资源维度信息，多个维度按字母序使用逗号分隔
     * @param {string} [limit] 分页查询时每页的条目数，取值[1,100]，默认值为100
     * @param {number} [offset] 分页查询时查询的起始位置，表示从第几条数据开始，默认为0
     * @param {'health' | 'unhealthy' | 'no_alarm_rule'} [status] 按状态信息进行过滤，取值只能为health（已设置告警规则且无告警触发的资源）、unhealthy（已设置告警规则且有告警触发的资源）、no_alarm_rule（未设置告警规则的资源）
     * @param {string} [dimValue] 资源维度值，不支持模糊匹配，但是多维度资源可以只指定一个维度值
     * @param {string} [tag] 资源的标签信息，格式：\&quot;[key]\&quot;:\&quot;[value]\&quot;，样例参考：\&quot;ssss\&quot;:\&quot;1111\&quot;
     * @param {string} [extendRelationId] 企业项目ID
     * @param {string} [productName] 资源分组的云产品，一般由\&quot;服务命名空间,服务首层维度名称\&quot;组成，如\&quot;SYS.ECS,instance_id\&quot;
     * @param {string} [resourceName] 资源名称
     * @param {'health' | 'unhealthy' | 'no_alarm_rule'} [eventStatus] 按事件告警状态信息进行过滤，取值只能为health（已设置事件告警规则且无事件告警触发的资源）、unhealthy（已设置事件告警规则且有事件告警触发的资源）、no_alarm_rule（未设置事件告警规则的资源）
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceGroupsServicesResources(listResourceGroupsServicesResourcesRequest?: ListResourceGroupsServicesResourcesRequest): Promise<ListResourceGroupsServicesResourcesResponse> {
        const options = ParamCreater().listResourceGroupsServicesResources(listResourceGroupsServicesResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警模板详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警模板详情
     * @param {string} templateId 告警模板的ID，以at开头，后跟字母、数字，长度最长为64
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlarmTemplate(showAlarmTemplateRequest?: ShowAlarmTemplateRequest): Promise<ShowAlarmTemplateResponse> {
        const options = ParamCreater().showAlarmTemplate(showAlarmTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定资源分组详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定资源分组详情
     * @param {string} groupId 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showResourceGroup(showResourceGroupRequest?: ShowResourceGroupRequest): Promise<ShowResourceGroupResponse> {
        const options = ParamCreater().showResourceGroup(showResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定监控视图信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定监控视图信息
     * @param {string} widgetId **参数解释**: 监控视图id。 **约束限制**: 不涉及。 **取值范围**: 字符串必须以wg开头，包含22个字母和数字，长度为24个字符。 **默认取值**: 不涉及。 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showWidget(showWidgetRequest?: ShowWidgetRequest): Promise<ShowWidgetResponse> {
        const options = ParamCreater().showWidget(showWidgetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改告警规则告警通知信息，告警策略&amp;资源请使用对应接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警规则告警通知信息
     * @param {string} alarmId **参数解释**： 告警规则ID **约束限制**： 不涉及。 **取值范围**： 以al开头，后跟22位字母或数字。 **默认取值**： 不涉及。 
     * @param {PutAlarmNotificationReq} updateAlarmNotificationsRequestBody 修改告警规则告警通知信息的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmNotifications(updateAlarmNotificationsRequest?: UpdateAlarmNotificationsRequest): Promise<UpdateAlarmNotificationsResponse> {
        const options = ParamCreater().updateAlarmNotifications(updateAlarmNotificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改告警规则策略(全量修改)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警规则策略(全量修改)
     * @param {string} alarmId **参数解释**： 告警规则ID。 **约束限制**： 不涉及。 **取值范围**： 以al开头，只能由大写字母、小写字母、数字组成，且长度为24个字符。           **默认取值**： 不涉及。 
     * @param {UpdateAlarmRulePoliciesReqBodyV2} updateAlarmRulePoliciesRequestBody 修改策略的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmRulePolicies(updateAlarmRulePoliciesRequest?: UpdateAlarmRulePoliciesRequest): Promise<UpdateAlarmRulePoliciesResponse> {
        const options = ParamCreater().updateAlarmRulePolicies(updateAlarmRulePoliciesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改自定义告警模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改自定义告警模板
     * @param {string} templateId 告警模板ID
     * @param {UpdateAlarmTemplateRequestBody} updateAlarmTemplateRequestBody 修改告警模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmTemplate(updateAlarmTemplateRequest?: UpdateAlarmTemplateRequest): Promise<UpdateAlarmTemplateResponse> {
        const options = ParamCreater().updateAlarmTemplate(updateAlarmTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改监控看板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改监控看板
     * @param {string} dashboardId **参数解释**: 监控看板id **约束限制**: 不涉及。 **取值范围**: 以db开头，包含22个字母和数字，长度为24个字符 **默认取值**: 不涉及。 
     * @param {UpdateDashboardRequestBody} updateDashboardRequestBody 修改监控看板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDashboard(updateDashboardRequest?: UpdateDashboardRequest): Promise<UpdateDashboardResponse> {
        const options = ParamCreater().updateDashboard(updateDashboardRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改告警通知屏蔽规则
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警通知屏蔽规则
     * @param {string} notificationMaskId **参数解释**： 屏蔽规则ID。    **约束限制**： 不涉及。 **取值范围**： 只能包含字母、数字，长度为[1,64]个字符。           **默认取值**： 不涉及。 
     * @param {UpdateNotificationMasksRequestBody} updateNotificationMaskRequestBody 修改通知屏蔽规则请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNotificationMask(updateNotificationMaskRequest?: UpdateNotificationMaskRequest): Promise<UpdateNotificationMaskResponse> {
        const options = ParamCreater().updateNotificationMask(updateNotificationMaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量修改开启状态的一键告警关联告警规则的告警通知
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量修改开启状态的一键告警关联告警规则的告警通知
     * @param {string} oneClickAlarmId **参数解释**： 一键告警ID **约束限制**： 不涉及。 **取值范围**： 长度为[1,64]个字符。 **默认取值**： 不涉及。 
     * @param {UpdateOneClickAlarmNotificationsRequestBody} updateOneClickAlarmNotificationsRequestBody 修改告警规则告警通知信息的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOneClickAlarmNotifications(updateOneClickAlarmNotificationsRequest?: UpdateOneClickAlarmNotificationsRequest): Promise<UpdateOneClickAlarmNotificationsResponse> {
        const options = ParamCreater().updateOneClickAlarmNotifications(updateOneClickAlarmNotificationsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改资源分组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改资源分组
     * @param {string} groupId 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {PutResourceGroupReq} updateResourceGroupRequestBody 资源分组修改请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResourceGroup(updateResourceGroupRequest?: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
        const options = ParamCreater().updateResourceGroup(updateResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交资源分组批量关联自定义告警模板异步任务，由异步任务覆盖性创建告警规则。每个用户创建处于待执行状态的异步任务数量上限为100个，单个资源分组仅可有1个未完成的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 资源分组异步关联自定义告警模板
     * @param {string} groupId 资源分组ID，以rg开头，后跟22位由字母或数字组成的字符串
     * @param {AsyncAssociateRGAndTemplatesReq} updateResourceGroupAssociationAlarmTemplateRequestBody 资源分组异步关联告警模板请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateResourceGroupAssociationAlarmTemplate(updateResourceGroupAssociationAlarmTemplateRequest?: UpdateResourceGroupAssociationAlarmTemplateRequest): Promise<UpdateResourceGroupAssociationAlarmTemplateResponse> {
        const options = ParamCreater().updateResourceGroupAssociationAlarmTemplate(updateResourceGroupAssociationAlarmTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量增加告警规则资源(资源分组类型的告警规则不支持)，资源分组类型的修改请使用资源分组管理相关接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAlarmRuleResources(addAlarmRuleResourcesRequest?: AddAlarmRuleResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarms/{alarm_id}/resources/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (addAlarmRuleResourcesRequest !== null && addAlarmRuleResourcesRequest !== undefined) {
                if (addAlarmRuleResourcesRequest instanceof AddAlarmRuleResourcesRequest) {
                    alarmId = addAlarmRuleResourcesRequest.alarmId;
                    body = addAlarmRuleResourcesRequest.body
                } else {
                    alarmId = addAlarmRuleResourcesRequest['alarm_id'];
                    body = addAlarmRuleResourcesRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling addAlarmRuleResources.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给自定义资源分组,即类型为手动添加的资源分组,批量增加关联资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateResources(batchCreateResourcesRequest?: BatchCreateResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/resource-groups/{group_id}/resources/batch-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (batchCreateResourcesRequest !== null && batchCreateResourcesRequest !== undefined) {
                if (batchCreateResourcesRequest instanceof BatchCreateResourcesRequest) {
                    groupId = batchCreateResourcesRequest.groupId;
                    body = batchCreateResourcesRequest.body
                } else {
                    groupId = batchCreateResourcesRequest['group_id'];
                    body = batchCreateResourcesRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling batchCreateResources.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除告警规则V2接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAlarmRules(batchDeleteAlarmRulesRequest?: BatchDeleteAlarmRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarms/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAlarmRulesRequest !== null && batchDeleteAlarmRulesRequest !== undefined) {
                if (batchDeleteAlarmRulesRequest instanceof BatchDeleteAlarmRulesRequest) {
                    body = batchDeleteAlarmRulesRequest.body
                } else {
                    body = batchDeleteAlarmRulesRequest['body'];
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
         * 批量删除自定义告警模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteAlarmTemplates(batchDeleteAlarmTemplatesRequest?: BatchDeleteAlarmTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarm-templates/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteAlarmTemplatesRequest !== null && batchDeleteAlarmTemplatesRequest !== undefined) {
                if (batchDeleteAlarmTemplatesRequest instanceof BatchDeleteAlarmTemplatesRequest) {
                    body = batchDeleteAlarmTemplatesRequest.body
                } else {
                    body = batchDeleteAlarmTemplatesRequest['body'];
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
         * 批量删除告警通知屏蔽规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteNotificationMasks(batchDeleteNotificationMasksRequest?: BatchDeleteNotificationMasksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notification-masks/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteNotificationMasksRequest !== null && batchDeleteNotificationMasksRequest !== undefined) {
                if (batchDeleteNotificationMasksRequest instanceof BatchDeleteNotificationMasksRequest) {
                    body = batchDeleteNotificationMasksRequest.body
                } else {
                    body = batchDeleteNotificationMasksRequest['body'];
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
         * 批量删除一键告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteOneClickAlarms(batchDeleteOneClickAlarmsRequest?: BatchDeleteOneClickAlarmsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/one-click-alarms/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteOneClickAlarmsRequest !== null && batchDeleteOneClickAlarmsRequest !== undefined) {
                if (batchDeleteOneClickAlarmsRequest instanceof BatchDeleteOneClickAlarmsRequest) {
                    body = batchDeleteOneClickAlarmsRequest.body
                } else {
                    body = batchDeleteOneClickAlarmsRequest['body'];
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
         * 批量删除资源分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResourceGroups(batchDeleteResourceGroupsRequest?: BatchDeleteResourceGroupsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/resource-groups/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchDeleteResourceGroupsRequest !== null && batchDeleteResourceGroupsRequest !== undefined) {
                if (batchDeleteResourceGroupsRequest instanceof BatchDeleteResourceGroupsRequest) {
                    body = batchDeleteResourceGroupsRequest.body
                } else {
                    body = batchDeleteResourceGroupsRequest['body'];
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
         * 给自定义资源分组,即类型为手动添加的资源分组,批量删除关联资源
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteResources(batchDeleteResourcesRequest?: BatchDeleteResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/resource-groups/{group_id}/resources/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (batchDeleteResourcesRequest !== null && batchDeleteResourcesRequest !== undefined) {
                if (batchDeleteResourcesRequest instanceof BatchDeleteResourcesRequest) {
                    groupId = batchDeleteResourcesRequest.groupId;
                    body = batchDeleteResourcesRequest.body
                } else {
                    groupId = batchDeleteResourcesRequest['group_id'];
                    body = batchDeleteResourcesRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling batchDeleteResources.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量启停告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchEnableAlarmRules(batchEnableAlarmRulesRequest?: BatchEnableAlarmRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarms/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchEnableAlarmRulesRequest !== null && batchEnableAlarmRulesRequest !== undefined) {
                if (batchEnableAlarmRulesRequest instanceof BatchEnableAlarmRulesRequest) {
                    body = batchEnableAlarmRulesRequest.body
                } else {
                    body = batchEnableAlarmRulesRequest['body'];
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
         * 批量查询指标数据
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListSpecifiedMetricData(batchListSpecifiedMetricDataRequest?: BatchListSpecifiedMetricDataRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/batch-query-metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchListSpecifiedMetricDataRequest !== null && batchListSpecifiedMetricDataRequest !== undefined) {
                if (batchListSpecifiedMetricDataRequest instanceof BatchListSpecifiedMetricDataRequest) {
                    body = batchListSpecifiedMetricDataRequest.body
                } else {
                    body = batchListSpecifiedMetricDataRequest['body'];
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
         * 批量修改告警通知屏蔽规则的屏蔽时间
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateNotificationMaskTime(batchUpdateNotificationMaskTimeRequest?: BatchUpdateNotificationMaskTimeRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notification-masks/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateNotificationMaskTimeRequest !== null && batchUpdateNotificationMaskTimeRequest !== undefined) {
                if (batchUpdateNotificationMaskTimeRequest instanceof BatchUpdateNotificationMaskTimeRequest) {
                    body = batchUpdateNotificationMaskTimeRequest.body
                } else {
                    body = batchUpdateNotificationMaskTimeRequest['body'];
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
         * 批量设置告警通知屏蔽规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateNotificationMasks(batchUpdateNotificationMasksRequest?: BatchUpdateNotificationMasksRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notification-masks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateNotificationMasksRequest !== null && batchUpdateNotificationMasksRequest !== undefined) {
                if (batchUpdateNotificationMasksRequest instanceof BatchUpdateNotificationMasksRequest) {
                    body = batchUpdateNotificationMasksRequest.body
                } else {
                    body = batchUpdateNotificationMasksRequest['body'];
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
         * 批量修改一键告警关联告警规则策略的启用状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateOneClickAlarmPoliciesEnabledState(batchUpdateOneClickAlarmPoliciesEnabledStateRequest?: BatchUpdateOneClickAlarmPoliciesEnabledStateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/one-click-alarms/{one_click_alarm_id}/alarms/{alarm_id}/policies/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let oneClickAlarmId;
            
            let alarmId;

            if (batchUpdateOneClickAlarmPoliciesEnabledStateRequest !== null && batchUpdateOneClickAlarmPoliciesEnabledStateRequest !== undefined) {
                if (batchUpdateOneClickAlarmPoliciesEnabledStateRequest instanceof BatchUpdateOneClickAlarmPoliciesEnabledStateRequest) {
                    oneClickAlarmId = batchUpdateOneClickAlarmPoliciesEnabledStateRequest.oneClickAlarmId;
                    alarmId = batchUpdateOneClickAlarmPoliciesEnabledStateRequest.alarmId;
                    body = batchUpdateOneClickAlarmPoliciesEnabledStateRequest.body
                } else {
                    oneClickAlarmId = batchUpdateOneClickAlarmPoliciesEnabledStateRequest['one_click_alarm_id'];
                    alarmId = batchUpdateOneClickAlarmPoliciesEnabledStateRequest['alarm_id'];
                    body = batchUpdateOneClickAlarmPoliciesEnabledStateRequest['body'];
                }
            }

        
            if (oneClickAlarmId === null || oneClickAlarmId === undefined) {
            throw new RequiredError('oneClickAlarmId','Required parameter oneClickAlarmId was null or undefined when calling batchUpdateOneClickAlarmPoliciesEnabledState.');
            }
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling batchUpdateOneClickAlarmPoliciesEnabledState.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'one_click_alarm_id': oneClickAlarmId,'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改一键告警关联告警规则的启用状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateOneClickAlarmsEnabledState(batchUpdateOneClickAlarmsEnabledStateRequest?: BatchUpdateOneClickAlarmsEnabledStateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/one-click-alarms/{one_click_alarm_id}/alarm-rules/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let oneClickAlarmId;

            if (batchUpdateOneClickAlarmsEnabledStateRequest !== null && batchUpdateOneClickAlarmsEnabledStateRequest !== undefined) {
                if (batchUpdateOneClickAlarmsEnabledStateRequest instanceof BatchUpdateOneClickAlarmsEnabledStateRequest) {
                    oneClickAlarmId = batchUpdateOneClickAlarmsEnabledStateRequest.oneClickAlarmId;
                    body = batchUpdateOneClickAlarmsEnabledStateRequest.body
                } else {
                    oneClickAlarmId = batchUpdateOneClickAlarmsEnabledStateRequest['one_click_alarm_id'];
                    body = batchUpdateOneClickAlarmsEnabledStateRequest['body'];
                }
            }

        
            if (oneClickAlarmId === null || oneClickAlarmId === undefined) {
            throw new RequiredError('oneClickAlarmId','Required parameter oneClickAlarmId was null or undefined when calling batchUpdateOneClickAlarmsEnabledState.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'one_click_alarm_id': oneClickAlarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量更新监控视图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchUpdateWidgets(batchUpdateWidgetsRequest?: BatchUpdateWidgetsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/widgets/batch-update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchUpdateWidgetsRequest !== null && batchUpdateWidgetsRequest !== undefined) {
                if (batchUpdateWidgetsRequest instanceof BatchUpdateWidgetsRequest) {
                    body = batchUpdateWidgetsRequest.body
                } else {
                    body = batchUpdateWidgetsRequest['body'];
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
         * 创建告警规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlarmRules(createAlarmRulesRequest?: CreateAlarmRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlarmRulesRequest !== null && createAlarmRulesRequest !== undefined) {
                if (createAlarmRulesRequest instanceof CreateAlarmRulesRequest) {
                    body = createAlarmRulesRequest.body
                } else {
                    body = createAlarmRulesRequest['body'];
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
         * 创建自定义告警模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlarmTemplate(createAlarmTemplateRequest?: CreateAlarmTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarm-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlarmTemplateRequest !== null && createAlarmTemplateRequest !== undefined) {
                if (createAlarmTemplateRequest instanceof CreateAlarmTemplateRequest) {
                    body = createAlarmTemplateRequest.body
                } else {
                    body = createAlarmTemplateRequest['body'];
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
         * 创建/复制/批量创建监控视图到指定的监控看板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDashboardWidgets(createDashboardWidgetsRequest?: CreateDashboardWidgetsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dashboards/{dashboard_id}/widgets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dashboardId;

            if (createDashboardWidgetsRequest !== null && createDashboardWidgetsRequest !== undefined) {
                if (createDashboardWidgetsRequest instanceof CreateDashboardWidgetsRequest) {
                    dashboardId = createDashboardWidgetsRequest.dashboardId;
                    body = createDashboardWidgetsRequest.body
                } else {
                    dashboardId = createDashboardWidgetsRequest['dashboard_id'];
                    body = createDashboardWidgetsRequest['body'];
                }
            }

        
            if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError('dashboardId','Required parameter dashboardId was null or undefined when calling createDashboardWidgets.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dashboard_id': dashboardId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一键告警
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOneClickAlarm(createOneClickAlarmRequest?: CreateOneClickAlarmRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/one-click-alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOneClickAlarmRequest !== null && createOneClickAlarmRequest !== undefined) {
                if (createOneClickAlarmRequest instanceof CreateOneClickAlarmRequest) {
                    body = createOneClickAlarmRequest.body
                } else {
                    body = createOneClickAlarmRequest['body'];
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
         * 创建/复制监控看板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createOneDashboard(createOneDashboardRequest?: CreateOneDashboardRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dashboards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createOneDashboardRequest !== null && createOneDashboardRequest !== undefined) {
                if (createOneDashboardRequest instanceof CreateOneDashboardRequest) {
                    body = createOneDashboardRequest.body
                } else {
                    body = createOneDashboardRequest['body'];
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
         * 创建资源分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceGroup(createResourceGroupRequest?: CreateResourceGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/resource-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createResourceGroupRequest !== null && createResourceGroupRequest !== undefined) {
                if (createResourceGroupRequest instanceof CreateResourceGroupRequest) {
                    body = createResourceGroupRequest.body
                } else {
                    body = createResourceGroupRequest['body'];
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
         * 批量删除告警规则资源（资源分组类型的告警规则不支持），资源分组类型的修改请使用资源分组管理相关接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmRuleResources(deleteAlarmRuleResourcesRequest?: DeleteAlarmRuleResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarms/{alarm_id}/resources/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (deleteAlarmRuleResourcesRequest !== null && deleteAlarmRuleResourcesRequest !== undefined) {
                if (deleteAlarmRuleResourcesRequest instanceof DeleteAlarmRuleResourcesRequest) {
                    alarmId = deleteAlarmRuleResourcesRequest.alarmId;
                    body = deleteAlarmRuleResourcesRequest.body
                } else {
                    alarmId = deleteAlarmRuleResourcesRequest['alarm_id'];
                    body = deleteAlarmRuleResourcesRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling deleteAlarmRuleResources.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除监控看板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDashboards(deleteDashboardsRequest?: DeleteDashboardsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/dashboards/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteDashboardsRequest !== null && deleteDashboardsRequest !== undefined) {
                if (deleteDashboardsRequest instanceof DeleteDashboardsRequest) {
                    body = deleteDashboardsRequest.body
                } else {
                    body = deleteDashboardsRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除指定监控视图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteOneWidget(deleteOneWidgetRequest?: DeleteOneWidgetRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/widgets/{widget_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let widgetId;

            if (deleteOneWidgetRequest !== null && deleteOneWidgetRequest !== undefined) {
                if (deleteOneWidgetRequest instanceof DeleteOneWidgetRequest) {
                    widgetId = deleteOneWidgetRequest.widgetId;
                } else {
                    widgetId = deleteOneWidgetRequest['widget_id'];
                }
            }

        
            if (widgetId === null || widgetId === undefined) {
            throw new RequiredError('widgetId','Required parameter widgetId was null or undefined when calling deleteOneWidget.');
            }

            options.pathParams = { 'widget_id': widgetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ECS/BMS资源ID及特殊维度值(仅支持磁盘、挂载点、进程、显卡、RAID控制器)查询该特殊维度对应的原始维度值；其他维度无需调用该接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgentDimensionInfo(listAgentDimensionInfoRequest?: ListAgentDimensionInfoRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/instances/{instance_id}/agent-dimensions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let instanceId;
            
            let dimName;
            
            let dimValue;
            
            let offset;
            
            let limit;

            if (listAgentDimensionInfoRequest !== null && listAgentDimensionInfoRequest !== undefined) {
                if (listAgentDimensionInfoRequest instanceof ListAgentDimensionInfoRequest) {
                    instanceId = listAgentDimensionInfoRequest.instanceId;
                    dimName = listAgentDimensionInfoRequest.dimName;
                    dimValue = listAgentDimensionInfoRequest.dimValue;
                    offset = listAgentDimensionInfoRequest.offset;
                    limit = listAgentDimensionInfoRequest.limit;
                } else {
                    instanceId = listAgentDimensionInfoRequest['instance_id'];
                    dimName = listAgentDimensionInfoRequest['dim_name'];
                    dimValue = listAgentDimensionInfoRequest['dim_value'];
                    offset = listAgentDimensionInfoRequest['offset'];
                    limit = listAgentDimensionInfoRequest['limit'];
                }
            }

        
            if (instanceId === null || instanceId === undefined) {
            throw new RequiredError('instanceId','Required parameter instanceId was null or undefined when calling listAgentDimensionInfo.');
            }
            if (dimName === null || dimName === undefined) {
                throw new RequiredError('dimName','Required parameter dimName was null or undefined when calling listAgentDimensionInfo.');
            }
            if (dimName !== null && dimName !== undefined) {
                localVarQueryParameter['dim_name'] = dimName;
            }
            if (dimValue !== null && dimValue !== undefined) {
                localVarQueryParameter['dim_value'] = dimValue;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'instance_id': instanceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmHistories(listAlarmHistoriesRequest?: ListAlarmHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let alarmId;
            
            let recordId;
            
            let name;
            
            let status;
            
            let level;
            
            let namespace;
            
            let resourceId;
            
            let from;
            
            let to;
            
            let alarmType;
            
            let createTimeFrom;
            
            let createTimeTo;
            
            let offset;
            
            let limit;
            
            let orderBy;

            if (listAlarmHistoriesRequest !== null && listAlarmHistoriesRequest !== undefined) {
                if (listAlarmHistoriesRequest instanceof ListAlarmHistoriesRequest) {
                    alarmId = listAlarmHistoriesRequest.alarmId;
                    recordId = listAlarmHistoriesRequest.recordId;
                    name = listAlarmHistoriesRequest.name;
                    status = listAlarmHistoriesRequest.status;
                    level = listAlarmHistoriesRequest.level;
                    namespace = listAlarmHistoriesRequest.namespace;
                    resourceId = listAlarmHistoriesRequest.resourceId;
                    from = listAlarmHistoriesRequest.from;
                    to = listAlarmHistoriesRequest.to;
                    alarmType = listAlarmHistoriesRequest.alarmType;
                    createTimeFrom = listAlarmHistoriesRequest.createTimeFrom;
                    createTimeTo = listAlarmHistoriesRequest.createTimeTo;
                    offset = listAlarmHistoriesRequest.offset;
                    limit = listAlarmHistoriesRequest.limit;
                    orderBy = listAlarmHistoriesRequest.orderBy;
                } else {
                    alarmId = listAlarmHistoriesRequest['alarm_id'];
                    recordId = listAlarmHistoriesRequest['record_id'];
                    name = listAlarmHistoriesRequest['name'];
                    status = listAlarmHistoriesRequest['status'];
                    level = listAlarmHistoriesRequest['level'];
                    namespace = listAlarmHistoriesRequest['namespace'];
                    resourceId = listAlarmHistoriesRequest['resource_id'];
                    from = listAlarmHistoriesRequest['from'];
                    to = listAlarmHistoriesRequest['to'];
                    alarmType = listAlarmHistoriesRequest['alarm_type'];
                    createTimeFrom = listAlarmHistoriesRequest['create_time_from'];
                    createTimeTo = listAlarmHistoriesRequest['create_time_to'];
                    offset = listAlarmHistoriesRequest['offset'];
                    limit = listAlarmHistoriesRequest['limit'];
                    orderBy = listAlarmHistoriesRequest['order_by'];
                }
            }

        
            if (alarmId !== null && alarmId !== undefined) {
                localVarQueryParameter['alarm_id'] = alarmId;
            }
            if (recordId !== null && recordId !== undefined) {
                localVarQueryParameter['record_id'] = recordId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (level !== null && level !== undefined) {
                localVarQueryParameter['level'] = level;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (alarmType !== null && alarmType !== undefined) {
                localVarQueryParameter['alarm_type'] = alarmType;
            }
            if (createTimeFrom !== null && createTimeFrom !== undefined) {
                localVarQueryParameter['create_time_from'] = createTimeFrom;
            }
            if (createTimeTo !== null && createTimeTo !== undefined) {
                localVarQueryParameter['create_time_to'] = createTimeTo;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (orderBy !== null && orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据告警规则ID查询策略列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmRulePolicies(listAlarmRulePoliciesRequest?: ListAlarmRulePoliciesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarms/{alarm_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let alarmId;
            
            let offset;
            
            let limit;

            if (listAlarmRulePoliciesRequest !== null && listAlarmRulePoliciesRequest !== undefined) {
                if (listAlarmRulePoliciesRequest instanceof ListAlarmRulePoliciesRequest) {
                    alarmId = listAlarmRulePoliciesRequest.alarmId;
                    offset = listAlarmRulePoliciesRequest.offset;
                    limit = listAlarmRulePoliciesRequest.limit;
                } else {
                    alarmId = listAlarmRulePoliciesRequest['alarm_id'];
                    offset = listAlarmRulePoliciesRequest['offset'];
                    limit = listAlarmRulePoliciesRequest['limit'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling listAlarmRulePolicies.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据告警规则ID查询告警规则资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmRuleResources(listAlarmRuleResourcesRequest?: ListAlarmRuleResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarms/{alarm_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let alarmId;
            
            let offset;
            
            let limit;

            if (listAlarmRuleResourcesRequest !== null && listAlarmRuleResourcesRequest !== undefined) {
                if (listAlarmRuleResourcesRequest instanceof ListAlarmRuleResourcesRequest) {
                    alarmId = listAlarmRuleResourcesRequest.alarmId;
                    offset = listAlarmRuleResourcesRequest.offset;
                    limit = listAlarmRuleResourcesRequest.limit;
                } else {
                    alarmId = listAlarmRuleResourcesRequest['alarm_id'];
                    offset = listAlarmRuleResourcesRequest['offset'];
                    limit = listAlarmRuleResourcesRequest['limit'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling listAlarmRuleResources.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmRules(listAlarmRulesRequest?: ListAlarmRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let alarmId;
            
            let name;
            
            let namespace;
            
            let resourceId;
            
            let enterpriseProjectId;
            
            let productName;
            
            let resourceLevel;
            
            let offset;
            
            let limit;

            if (listAlarmRulesRequest !== null && listAlarmRulesRequest !== undefined) {
                if (listAlarmRulesRequest instanceof ListAlarmRulesRequest) {
                    alarmId = listAlarmRulesRequest.alarmId;
                    name = listAlarmRulesRequest.name;
                    namespace = listAlarmRulesRequest.namespace;
                    resourceId = listAlarmRulesRequest.resourceId;
                    enterpriseProjectId = listAlarmRulesRequest.enterpriseProjectId;
                    productName = listAlarmRulesRequest.productName;
                    resourceLevel = listAlarmRulesRequest.resourceLevel;
                    offset = listAlarmRulesRequest.offset;
                    limit = listAlarmRulesRequest.limit;
                } else {
                    alarmId = listAlarmRulesRequest['alarm_id'];
                    name = listAlarmRulesRequest['name'];
                    namespace = listAlarmRulesRequest['namespace'];
                    resourceId = listAlarmRulesRequest['resource_id'];
                    enterpriseProjectId = listAlarmRulesRequest['enterprise_project_id'];
                    productName = listAlarmRulesRequest['product_name'];
                    resourceLevel = listAlarmRulesRequest['resource_level'];
                    offset = listAlarmRulesRequest['offset'];
                    limit = listAlarmRulesRequest['limit'];
                }
            }

        
            if (alarmId !== null && alarmId !== undefined) {
                localVarQueryParameter['alarm_id'] = alarmId;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (resourceId !== null && resourceId !== undefined) {
                localVarQueryParameter['resource_id'] = resourceId;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (productName !== null && productName !== undefined) {
                localVarQueryParameter['product_name'] = productName;
            }
            if (resourceLevel !== null && resourceLevel !== undefined) {
                localVarQueryParameter['resource_level'] = resourceLevel;
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
         * 查询告警模板关联的告警规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmTemplateAssociationAlarms(listAlarmTemplateAssociationAlarmsRequest?: ListAlarmTemplateAssociationAlarmsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-templates/{template_id}/association-alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let templateId;
            
            let offset;
            
            let limit;

            if (listAlarmTemplateAssociationAlarmsRequest !== null && listAlarmTemplateAssociationAlarmsRequest !== undefined) {
                if (listAlarmTemplateAssociationAlarmsRequest instanceof ListAlarmTemplateAssociationAlarmsRequest) {
                    templateId = listAlarmTemplateAssociationAlarmsRequest.templateId;
                    offset = listAlarmTemplateAssociationAlarmsRequest.offset;
                    limit = listAlarmTemplateAssociationAlarmsRequest.limit;
                } else {
                    templateId = listAlarmTemplateAssociationAlarmsRequest['template_id'];
                    offset = listAlarmTemplateAssociationAlarmsRequest['offset'];
                    limit = listAlarmTemplateAssociationAlarmsRequest['limit'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling listAlarmTemplateAssociationAlarms.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmTemplates(listAlarmTemplatesRequest?: ListAlarmTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;
            
            let namespace;
            
            let dimName;
            
            let templateType;
            
            let templateName;
            
            let productName;

            if (listAlarmTemplatesRequest !== null && listAlarmTemplatesRequest !== undefined) {
                if (listAlarmTemplatesRequest instanceof ListAlarmTemplatesRequest) {
                    offset = listAlarmTemplatesRequest.offset;
                    limit = listAlarmTemplatesRequest.limit;
                    namespace = listAlarmTemplatesRequest.namespace;
                    dimName = listAlarmTemplatesRequest.dimName;
                    templateType = listAlarmTemplatesRequest.templateType;
                    templateName = listAlarmTemplatesRequest.templateName;
                    productName = listAlarmTemplatesRequest.productName;
                } else {
                    offset = listAlarmTemplatesRequest['offset'];
                    limit = listAlarmTemplatesRequest['limit'];
                    namespace = listAlarmTemplatesRequest['namespace'];
                    dimName = listAlarmTemplatesRequest['dim_name'];
                    templateType = listAlarmTemplatesRequest['template_type'];
                    templateName = listAlarmTemplatesRequest['template_name'];
                    productName = listAlarmTemplatesRequest['product_name'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (dimName !== null && dimName !== undefined) {
                localVarQueryParameter['dim_name'] = dimName;
            }
            if (templateType !== null && templateType !== undefined) {
                localVarQueryParameter['template_type'] = templateType;
            }
            if (templateName !== null && templateName !== undefined) {
                localVarQueryParameter['template_name'] = templateName;
            }
            if (productName !== null && productName !== undefined) {
                localVarQueryParameter['product_name'] = productName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CES指定项目指定资源类型标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCesTargetProjectTags(listCesTargetProjectTagsRequest?: ListCesTargetProjectTagsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/{resource_type}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceType;

            if (listCesTargetProjectTagsRequest !== null && listCesTargetProjectTagsRequest !== undefined) {
                if (listCesTargetProjectTagsRequest instanceof ListCesTargetProjectTagsRequest) {
                    resourceType = listCesTargetProjectTagsRequest.resourceType;
                } else {
                    resourceType = listCesTargetProjectTagsRequest['resource_type'];
                }
            }

        
            if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('resourceType','Required parameter resourceType was null or undefined when calling listCesTargetProjectTags.');
            }

            options.pathParams = { 'resource_type': resourceType, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询监控看板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDashboardInfos(listDashboardInfosRequest?: ListDashboardInfosRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dashboards",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseId;
            
            let isFavorite;
            
            let dashboardName;
            
            let dashboardId;
            
            let dashboardType;

            if (listDashboardInfosRequest !== null && listDashboardInfosRequest !== undefined) {
                if (listDashboardInfosRequest instanceof ListDashboardInfosRequest) {
                    enterpriseId = listDashboardInfosRequest.enterpriseId;
                    isFavorite = listDashboardInfosRequest.isFavorite;
                    dashboardName = listDashboardInfosRequest.dashboardName;
                    dashboardId = listDashboardInfosRequest.dashboardId;
                    dashboardType = listDashboardInfosRequest.dashboardType;
                } else {
                    enterpriseId = listDashboardInfosRequest['enterprise_id'];
                    isFavorite = listDashboardInfosRequest['is_favorite'];
                    dashboardName = listDashboardInfosRequest['dashboard_name'];
                    dashboardId = listDashboardInfosRequest['dashboard_id'];
                    dashboardType = listDashboardInfosRequest['dashboard_type'];
                }
            }

        
            if (enterpriseId !== null && enterpriseId !== undefined) {
                localVarQueryParameter['enterprise_id'] = enterpriseId;
            }
            if (isFavorite !== null && isFavorite !== undefined) {
                localVarQueryParameter['is_favorite'] = isFavorite;
            }
            if (dashboardName !== null && dashboardName !== undefined) {
                localVarQueryParameter['dashboard_name'] = dashboardName;
            }
            if (dashboardId !== null && dashboardId !== undefined) {
                localVarQueryParameter['dashboard_id'] = dashboardId;
            }
            if (dashboardType !== null && dashboardType !== undefined) {
                localVarQueryParameter['dashboard_type'] = dashboardType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定监控看板下的监控视图列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDashboardWidgets(listDashboardWidgetsRequest?: ListDashboardWidgetsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/dashboards/{dashboard_id}/widgets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dashboardId;
            
            let groupId;

            if (listDashboardWidgetsRequest !== null && listDashboardWidgetsRequest !== undefined) {
                if (listDashboardWidgetsRequest instanceof ListDashboardWidgetsRequest) {
                    dashboardId = listDashboardWidgetsRequest.dashboardId;
                    groupId = listDashboardWidgetsRequest.groupId;
                } else {
                    dashboardId = listDashboardWidgetsRequest['dashboard_id'];
                    groupId = listDashboardWidgetsRequest['group_id'];
                }
            }

        
            if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError('dashboardId','Required parameter dashboardId was null or undefined when calling listDashboardWidgets.');
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'dashboard_id': dashboardId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警通知屏蔽资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationMaskResources(listNotificationMaskResourcesRequest?: ListNotificationMaskResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/notification-masks/{notification_mask_id}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let notificationMaskId;
            
            let offset;
            
            let limit;

            if (listNotificationMaskResourcesRequest !== null && listNotificationMaskResourcesRequest !== undefined) {
                if (listNotificationMaskResourcesRequest instanceof ListNotificationMaskResourcesRequest) {
                    notificationMaskId = listNotificationMaskResourcesRequest.notificationMaskId;
                    offset = listNotificationMaskResourcesRequest.offset;
                    limit = listNotificationMaskResourcesRequest.limit;
                } else {
                    notificationMaskId = listNotificationMaskResourcesRequest['notification_mask_id'];
                    offset = listNotificationMaskResourcesRequest['offset'];
                    limit = listNotificationMaskResourcesRequest['limit'];
                }
            }

        
            if (notificationMaskId === null || notificationMaskId === undefined) {
            throw new RequiredError('notificationMaskId','Required parameter notificationMaskId was null or undefined when calling listNotificationMaskResources.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'notification_mask_id': notificationMaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量查询指定类型的通知屏蔽规则，目前最多支持100个通知屏蔽规则的批量查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotificationMasks(listNotificationMasksRequest?: ListNotificationMasksRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/notification-masks/batch-query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listNotificationMasksRequest !== null && listNotificationMasksRequest !== undefined) {
                if (listNotificationMasksRequest instanceof ListNotificationMasksRequest) {
                    body = listNotificationMasksRequest.body
                    offset = listNotificationMasksRequest.offset;
                    limit = listNotificationMasksRequest.limit;
                    sortKey = listNotificationMasksRequest.sortKey;
                    sortDir = listNotificationMasksRequest.sortDir;
                } else {
                    body = listNotificationMasksRequest['body'];
                    offset = listNotificationMasksRequest['offset'];
                    limit = listNotificationMasksRequest['limit'];
                    sortKey = listNotificationMasksRequest['sort_key'];
                    sortDir = listNotificationMasksRequest['sort_dir'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
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
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询一键告警关联告警规则列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOneClickAlarmRules(listOneClickAlarmRulesRequest?: ListOneClickAlarmRulesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/one-click-alarms/{one_click_alarm_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let oneClickAlarmId;

            if (listOneClickAlarmRulesRequest !== null && listOneClickAlarmRulesRequest !== undefined) {
                if (listOneClickAlarmRulesRequest instanceof ListOneClickAlarmRulesRequest) {
                    oneClickAlarmId = listOneClickAlarmRulesRequest.oneClickAlarmId;
                } else {
                    oneClickAlarmId = listOneClickAlarmRulesRequest['one_click_alarm_id'];
                }
            }

        
            if (oneClickAlarmId === null || oneClickAlarmId === undefined) {
            throw new RequiredError('oneClickAlarmId','Required parameter oneClickAlarmId was null or undefined when calling listOneClickAlarmRules.');
            }

            options.pathParams = { 'one_click_alarm_id': oneClickAlarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询一键告警列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOneClickAlarms() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/one-click-alarms",
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
         * 查询资源分组列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceGroups(listResourceGroupsRequest?: ListResourceGroupsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/resource-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let enterpriseProjectId;
            
            let groupName;
            
            let groupId;
            
            let offset;
            
            let limit;
            
            let type;

            if (listResourceGroupsRequest !== null && listResourceGroupsRequest !== undefined) {
                if (listResourceGroupsRequest instanceof ListResourceGroupsRequest) {
                    enterpriseProjectId = listResourceGroupsRequest.enterpriseProjectId;
                    groupName = listResourceGroupsRequest.groupName;
                    groupId = listResourceGroupsRequest.groupId;
                    offset = listResourceGroupsRequest.offset;
                    limit = listResourceGroupsRequest.limit;
                    type = listResourceGroupsRequest.type;
                } else {
                    enterpriseProjectId = listResourceGroupsRequest['enterprise_project_id'];
                    groupName = listResourceGroupsRequest['group_name'];
                    groupId = listResourceGroupsRequest['group_id'];
                    offset = listResourceGroupsRequest['offset'];
                    limit = listResourceGroupsRequest['limit'];
                    type = listResourceGroupsRequest['type'];
                }
            }

        
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询资源分组下指定服务类别特定维度的资源列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceGroupsServicesResources(listResourceGroupsServicesResourcesRequest?: ListResourceGroupsServicesResourcesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/resource-groups/{group_id}/services/{service}/resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let service;
            
            let dimName;
            
            let limit;
            
            let offset;
            
            let status;
            
            let dimValue;
            
            let tag;
            
            let extendRelationId;
            
            let productName;
            
            let resourceName;
            
            let eventStatus;

            if (listResourceGroupsServicesResourcesRequest !== null && listResourceGroupsServicesResourcesRequest !== undefined) {
                if (listResourceGroupsServicesResourcesRequest instanceof ListResourceGroupsServicesResourcesRequest) {
                    groupId = listResourceGroupsServicesResourcesRequest.groupId;
                    service = listResourceGroupsServicesResourcesRequest.service;
                    dimName = listResourceGroupsServicesResourcesRequest.dimName;
                    limit = listResourceGroupsServicesResourcesRequest.limit;
                    offset = listResourceGroupsServicesResourcesRequest.offset;
                    status = listResourceGroupsServicesResourcesRequest.status;
                    dimValue = listResourceGroupsServicesResourcesRequest.dimValue;
                    tag = listResourceGroupsServicesResourcesRequest.tag;
                    extendRelationId = listResourceGroupsServicesResourcesRequest.extendRelationId;
                    productName = listResourceGroupsServicesResourcesRequest.productName;
                    resourceName = listResourceGroupsServicesResourcesRequest.resourceName;
                    eventStatus = listResourceGroupsServicesResourcesRequest.eventStatus;
                } else {
                    groupId = listResourceGroupsServicesResourcesRequest['group_id'];
                    service = listResourceGroupsServicesResourcesRequest['service'];
                    dimName = listResourceGroupsServicesResourcesRequest['dim_name'];
                    limit = listResourceGroupsServicesResourcesRequest['limit'];
                    offset = listResourceGroupsServicesResourcesRequest['offset'];
                    status = listResourceGroupsServicesResourcesRequest['status'];
                    dimValue = listResourceGroupsServicesResourcesRequest['dim_value'];
                    tag = listResourceGroupsServicesResourcesRequest['tag'];
                    extendRelationId = listResourceGroupsServicesResourcesRequest['extend_relation_id'];
                    productName = listResourceGroupsServicesResourcesRequest['product_name'];
                    resourceName = listResourceGroupsServicesResourcesRequest['resource_name'];
                    eventStatus = listResourceGroupsServicesResourcesRequest['event_status'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling listResourceGroupsServicesResources.');
            }
            if (service === null || service === undefined) {
            throw new RequiredError('service','Required parameter service was null or undefined when calling listResourceGroupsServicesResources.');
            }
            if (dimName !== null && dimName !== undefined) {
                localVarQueryParameter['dim_name'] = dimName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (dimValue !== null && dimValue !== undefined) {
                localVarQueryParameter['dim_value'] = dimValue;
            }
            if (tag !== null && tag !== undefined) {
                localVarQueryParameter['tag'] = tag;
            }
            if (extendRelationId !== null && extendRelationId !== undefined) {
                localVarQueryParameter['extend_relation_id'] = extendRelationId;
            }
            if (productName !== null && productName !== undefined) {
                localVarQueryParameter['product_name'] = productName;
            }
            if (resourceName !== null && resourceName !== undefined) {
                localVarQueryParameter['resource_name'] = resourceName;
            }
            if (eventStatus !== null && eventStatus !== undefined) {
                localVarQueryParameter['event_status'] = eventStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId,'service': service, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警模板详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlarmTemplate(showAlarmTemplateRequest?: ShowAlarmTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;

            if (showAlarmTemplateRequest !== null && showAlarmTemplateRequest !== undefined) {
                if (showAlarmTemplateRequest instanceof ShowAlarmTemplateRequest) {
                    templateId = showAlarmTemplateRequest.templateId;
                } else {
                    templateId = showAlarmTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling showAlarmTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定资源分组详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceGroup(showResourceGroupRequest?: ShowResourceGroupRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/resource-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (showResourceGroupRequest !== null && showResourceGroupRequest !== undefined) {
                if (showResourceGroupRequest instanceof ShowResourceGroupRequest) {
                    groupId = showResourceGroupRequest.groupId;
                } else {
                    groupId = showResourceGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showResourceGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定监控视图信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showWidget(showWidgetRequest?: ShowWidgetRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/widgets/{widget_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let widgetId;

            if (showWidgetRequest !== null && showWidgetRequest !== undefined) {
                if (showWidgetRequest instanceof ShowWidgetRequest) {
                    widgetId = showWidgetRequest.widgetId;
                } else {
                    widgetId = showWidgetRequest['widget_id'];
                }
            }

        
            if (widgetId === null || widgetId === undefined) {
            throw new RequiredError('widgetId','Required parameter widgetId was null or undefined when calling showWidget.');
            }

            options.pathParams = { 'widget_id': widgetId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警规则告警通知信息，告警策略&amp;资源请使用对应接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmNotifications(updateAlarmNotificationsRequest?: UpdateAlarmNotificationsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alarms/{alarm_id}/notifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (updateAlarmNotificationsRequest !== null && updateAlarmNotificationsRequest !== undefined) {
                if (updateAlarmNotificationsRequest instanceof UpdateAlarmNotificationsRequest) {
                    alarmId = updateAlarmNotificationsRequest.alarmId;
                    body = updateAlarmNotificationsRequest.body
                } else {
                    alarmId = updateAlarmNotificationsRequest['alarm_id'];
                    body = updateAlarmNotificationsRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling updateAlarmNotifications.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警规则策略(全量修改)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmRulePolicies(updateAlarmRulePoliciesRequest?: UpdateAlarmRulePoliciesRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alarms/{alarm_id}/policies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (updateAlarmRulePoliciesRequest !== null && updateAlarmRulePoliciesRequest !== undefined) {
                if (updateAlarmRulePoliciesRequest instanceof UpdateAlarmRulePoliciesRequest) {
                    alarmId = updateAlarmRulePoliciesRequest.alarmId;
                    body = updateAlarmRulePoliciesRequest.body
                } else {
                    alarmId = updateAlarmRulePoliciesRequest['alarm_id'];
                    body = updateAlarmRulePoliciesRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling updateAlarmRulePolicies.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改自定义告警模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmTemplate(updateAlarmTemplateRequest?: UpdateAlarmTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alarm-templates/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let templateId;

            if (updateAlarmTemplateRequest !== null && updateAlarmTemplateRequest !== undefined) {
                if (updateAlarmTemplateRequest instanceof UpdateAlarmTemplateRequest) {
                    templateId = updateAlarmTemplateRequest.templateId;
                    body = updateAlarmTemplateRequest.body
                } else {
                    templateId = updateAlarmTemplateRequest['template_id'];
                    body = updateAlarmTemplateRequest['body'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling updateAlarmTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改监控看板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDashboard(updateDashboardRequest?: UpdateDashboardRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/dashboards/{dashboard_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let dashboardId;

            if (updateDashboardRequest !== null && updateDashboardRequest !== undefined) {
                if (updateDashboardRequest instanceof UpdateDashboardRequest) {
                    dashboardId = updateDashboardRequest.dashboardId;
                    body = updateDashboardRequest.body
                } else {
                    dashboardId = updateDashboardRequest['dashboard_id'];
                    body = updateDashboardRequest['body'];
                }
            }

        
            if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError('dashboardId','Required parameter dashboardId was null or undefined when calling updateDashboard.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'dashboard_id': dashboardId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警通知屏蔽规则
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNotificationMask(updateNotificationMaskRequest?: UpdateNotificationMaskRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/notification-masks/{notification_mask_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let notificationMaskId;

            if (updateNotificationMaskRequest !== null && updateNotificationMaskRequest !== undefined) {
                if (updateNotificationMaskRequest instanceof UpdateNotificationMaskRequest) {
                    notificationMaskId = updateNotificationMaskRequest.notificationMaskId;
                    body = updateNotificationMaskRequest.body
                } else {
                    notificationMaskId = updateNotificationMaskRequest['notification_mask_id'];
                    body = updateNotificationMaskRequest['body'];
                }
            }

        
            if (notificationMaskId === null || notificationMaskId === undefined) {
            throw new RequiredError('notificationMaskId','Required parameter notificationMaskId was null or undefined when calling updateNotificationMask.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'notification_mask_id': notificationMaskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量修改开启状态的一键告警关联告警规则的告警通知
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOneClickAlarmNotifications(updateOneClickAlarmNotificationsRequest?: UpdateOneClickAlarmNotificationsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/one-click-alarms/{one_click_alarm_id}/notifications",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let oneClickAlarmId;

            if (updateOneClickAlarmNotificationsRequest !== null && updateOneClickAlarmNotificationsRequest !== undefined) {
                if (updateOneClickAlarmNotificationsRequest instanceof UpdateOneClickAlarmNotificationsRequest) {
                    oneClickAlarmId = updateOneClickAlarmNotificationsRequest.oneClickAlarmId;
                    body = updateOneClickAlarmNotificationsRequest.body
                } else {
                    oneClickAlarmId = updateOneClickAlarmNotificationsRequest['one_click_alarm_id'];
                    body = updateOneClickAlarmNotificationsRequest['body'];
                }
            }

        
            if (oneClickAlarmId === null || oneClickAlarmId === undefined) {
            throw new RequiredError('oneClickAlarmId','Required parameter oneClickAlarmId was null or undefined when calling updateOneClickAlarmNotifications.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'one_click_alarm_id': oneClickAlarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改资源分组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceGroup(updateResourceGroupRequest?: UpdateResourceGroupRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/resource-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (updateResourceGroupRequest !== null && updateResourceGroupRequest !== undefined) {
                if (updateResourceGroupRequest instanceof UpdateResourceGroupRequest) {
                    groupId = updateResourceGroupRequest.groupId;
                    body = updateResourceGroupRequest.body
                } else {
                    groupId = updateResourceGroupRequest['group_id'];
                    body = updateResourceGroupRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateResourceGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交资源分组批量关联自定义告警模板异步任务，由异步任务覆盖性创建告警规则。每个用户创建处于待执行状态的异步任务数量上限为100个，单个资源分组仅可有1个未完成的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceGroupAssociationAlarmTemplate(updateResourceGroupAssociationAlarmTemplateRequest?: UpdateResourceGroupAssociationAlarmTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/resource-groups/{group_id}/alarm-templates/async-association",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let groupId;

            if (updateResourceGroupAssociationAlarmTemplateRequest !== null && updateResourceGroupAssociationAlarmTemplateRequest !== undefined) {
                if (updateResourceGroupAssociationAlarmTemplateRequest instanceof UpdateResourceGroupAssociationAlarmTemplateRequest) {
                    groupId = updateResourceGroupAssociationAlarmTemplateRequest.groupId;
                    body = updateResourceGroupAssociationAlarmTemplateRequest.body
                } else {
                    groupId = updateResourceGroupAssociationAlarmTemplateRequest['group_id'];
                    body = updateResourceGroupAssociationAlarmTemplateRequest['body'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling updateResourceGroupAssociationAlarmTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CesClient {
    return new CesClient(client);
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