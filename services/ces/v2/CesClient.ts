import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddAlarmRuleResourcesRequest } from './model/AddAlarmRuleResourcesRequest';
import { AddAlarmRuleResourcesResponse } from './model/AddAlarmRuleResourcesResponse';
import { AdditionalInfo } from './model/AdditionalInfo';
import { AgentDimension } from './model/AgentDimension';
import { AlarmCondition } from './model/AlarmCondition';
import { AlarmDescription } from './model/AlarmDescription';
import { AlarmEnabled } from './model/AlarmEnabled';
import { AlarmHistoryItemV2 } from './model/AlarmHistoryItemV2';
import { AlarmID } from './model/AlarmID';
import { AlarmLevel } from './model/AlarmLevel';
import { AlarmName } from './model/AlarmName';
import { AlarmTemplateID } from './model/AlarmTemplateID';
import { AlarmTemplatePolicies } from './model/AlarmTemplatePolicies';
import { AlarmTemplates } from './model/AlarmTemplates';
import { AlarmType } from './model/AlarmType';
import { BaseWidgetInfo } from './model/BaseWidgetInfo';
import { BaseWidgetInfoLocation } from './model/BaseWidgetInfoLocation';
import { BaseWidgetInfoProperties } from './model/BaseWidgetInfoProperties';
import { BatchCreateResourcesRequest } from './model/BatchCreateResourcesRequest';
import { BatchCreateResourcesResponse } from './model/BatchCreateResourcesResponse';
import { BatchDeleteAlarmRulesRequest } from './model/BatchDeleteAlarmRulesRequest';
import { BatchDeleteAlarmRulesResponse } from './model/BatchDeleteAlarmRulesResponse';
import { BatchDeleteAlarmTemplatesRequest } from './model/BatchDeleteAlarmTemplatesRequest';
import { BatchDeleteAlarmTemplatesRequestBody } from './model/BatchDeleteAlarmTemplatesRequestBody';
import { BatchDeleteAlarmTemplatesResponse } from './model/BatchDeleteAlarmTemplatesResponse';
import { BatchDeleteAlarmsRequestBody } from './model/BatchDeleteAlarmsRequestBody';
import { BatchDeleteDashboardRequestBody } from './model/BatchDeleteDashboardRequestBody';
import { BatchDeleteDashboardRespInfo } from './model/BatchDeleteDashboardRespInfo';
import { BatchDeleteResourceGroupsRequest } from './model/BatchDeleteResourceGroupsRequest';
import { BatchDeleteResourceGroupsRequestBody } from './model/BatchDeleteResourceGroupsRequestBody';
import { BatchDeleteResourceGroupsResponse } from './model/BatchDeleteResourceGroupsResponse';
import { BatchDeleteResourcesRequest } from './model/BatchDeleteResourcesRequest';
import { BatchDeleteResourcesResponse } from './model/BatchDeleteResourcesResponse';
import { BatchEnableAlarmRulesRequest } from './model/BatchEnableAlarmRulesRequest';
import { BatchEnableAlarmRulesResponse } from './model/BatchEnableAlarmRulesResponse';
import { BatchEnableAlarmsRequestBody } from './model/BatchEnableAlarmsRequestBody';
import { BatchUpdateWidgetInfo } from './model/BatchUpdateWidgetInfo';
import { BatchUpdateWidgetsRequest } from './model/BatchUpdateWidgetsRequest';
import { BatchUpdateWidgetsResponse } from './model/BatchUpdateWidgetsResponse';
import { ComparisonOperator } from './model/ComparisonOperator';
import { Count } from './model/Count';
import { CreateAlarmRulesRequest } from './model/CreateAlarmRulesRequest';
import { CreateAlarmRulesResponse } from './model/CreateAlarmRulesResponse';
import { CreateAlarmTemplateRequest } from './model/CreateAlarmTemplateRequest';
import { CreateAlarmTemplateRequestBody } from './model/CreateAlarmTemplateRequestBody';
import { CreateAlarmTemplateResponse } from './model/CreateAlarmTemplateResponse';
import { CreateDashboardRequestBody } from './model/CreateDashboardRequestBody';
import { CreateDashboardWidgetsRequest } from './model/CreateDashboardWidgetsRequest';
import { CreateDashboardWidgetsResponse } from './model/CreateDashboardWidgetsResponse';
import { CreateOneDashboardRequest } from './model/CreateOneDashboardRequest';
import { CreateOneDashboardResponse } from './model/CreateOneDashboardResponse';
import { CreateResourceGroupRequest } from './model/CreateResourceGroupRequest';
import { CreateResourceGroupRequestBody } from './model/CreateResourceGroupRequestBody';
import { CreateResourceGroupResponse } from './model/CreateResourceGroupResponse';
import { CreateTime } from './model/CreateTime';
import { DashBoardIdItem } from './model/DashBoardIdItem';
import { DashBoardInfo } from './model/DashBoardInfo';
import { DashBoardNameItem } from './model/DashBoardNameItem';
import { DataPointInfo } from './model/DataPointInfo';
import { DeleteAlarmRuleResourcesRequest } from './model/DeleteAlarmRuleResourcesRequest';
import { DeleteAlarmRuleResourcesResponse } from './model/DeleteAlarmRuleResourcesResponse';
import { DeleteDashboardsRequest } from './model/DeleteDashboardsRequest';
import { DeleteDashboardsResponse } from './model/DeleteDashboardsResponse';
import { DeleteOneWidgetRequest } from './model/DeleteOneWidgetRequest';
import { DeleteOneWidgetResponse } from './model/DeleteOneWidgetResponse';
import { Dimension } from './model/Dimension';
import { Dimension2 } from './model/Dimension2';
import { DimensionInfo } from './model/DimensionInfo';
import { DimensionName } from './model/DimensionName';
import { EnterpriseIdItem } from './model/EnterpriseIdItem';
import { EnterpriseProjectID } from './model/EnterpriseProjectID';
import { ExtraInfo } from './model/ExtraInfo';
import { Filter } from './model/Filter';
import { GetResourceGroupResources } from './model/GetResourceGroupResources';
import { IsFavoriteItem } from './model/IsFavoriteItem';
import { Level } from './model/Level';
import { ListAgentDimensionInfoRequest } from './model/ListAgentDimensionInfoRequest';
import { ListAgentDimensionInfoResponse } from './model/ListAgentDimensionInfoResponse';
import { ListAlarmHistoriesRequest } from './model/ListAlarmHistoriesRequest';
import { ListAlarmHistoriesResponse } from './model/ListAlarmHistoriesResponse';
import { ListAlarmResponseAlarms } from './model/ListAlarmResponseAlarms';
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
import { ListAssociationAlarmsResponseAlarms } from './model/ListAssociationAlarmsResponseAlarms';
import { ListDashboardInfosRequest } from './model/ListDashboardInfosRequest';
import { ListDashboardInfosResponse } from './model/ListDashboardInfosResponse';
import { ListDashboardWidgetsRequest } from './model/ListDashboardWidgetsRequest';
import { ListDashboardWidgetsResponse } from './model/ListDashboardWidgetsResponse';
import { ListPolicy } from './model/ListPolicy';
import { ListResourceGroupsRequest } from './model/ListResourceGroupsRequest';
import { ListResourceGroupsResponse } from './model/ListResourceGroupsResponse';
import { ListResourceGroupsServicesResourcesRequest } from './model/ListResourceGroupsServicesResourcesRequest';
import { ListResourceGroupsServicesResourcesResponse } from './model/ListResourceGroupsServicesResourcesResponse';
import { Metric } from './model/Metric';
import { MetricDimension } from './model/MetricDimension';
import { MetricExtraInfo } from './model/MetricExtraInfo';
import { MetricName } from './model/MetricName';
import { Namespace } from './model/Namespace';
import { NamespaceAllowedEmpty } from './model/NamespaceAllowedEmpty';
import { Notification } from './model/Notification';
import { NotificationBeginTime } from './model/NotificationBeginTime';
import { NotificationEnabled } from './model/NotificationEnabled';
import { NotificationEndTime } from './model/NotificationEndTime';
import { OneResourceGroupResp } from './model/OneResourceGroupResp';
import { Policies } from './model/Policies';
import { PoliciesReqV2 } from './model/PoliciesReqV2';
import { Policy } from './model/Policy';
import { PostAlarmsReqV2 } from './model/PostAlarmsReqV2';
import { PutResourceGroupReq } from './model/PutResourceGroupReq';
import { Resource } from './model/Resource';
import { ResourceGroupID } from './model/ResourceGroupID';
import { ResourceGroupTagRelation } from './model/ResourceGroupTagRelation';
import { ResourcesInListResp } from './model/ResourcesInListResp';
import { ResourcesReq } from './model/ResourcesReq';
import { ResourcesReqV2 } from './model/ResourcesReqV2';
import { SMNUrn } from './model/SMNUrn';
import { ShowAlarmTemplateRequest } from './model/ShowAlarmTemplateRequest';
import { ShowAlarmTemplateResponse } from './model/ShowAlarmTemplateResponse';
import { ShowResourceGroupRequest } from './model/ShowResourceGroupRequest';
import { ShowResourceGroupResponse } from './model/ShowResourceGroupResponse';
import { ShowWidgetRequest } from './model/ShowWidgetRequest';
import { ShowWidgetResponse } from './model/ShowWidgetResponse';
import { TemplateDescription } from './model/TemplateDescription';
import { TemplateID } from './model/TemplateID';
import { TemplateName } from './model/TemplateName';
import { TemplateType } from './model/TemplateType';
import { Unit } from './model/Unit';
import { UnitItem } from './model/UnitItem';
import { UpdateAlarmRulePoliciesRequest } from './model/UpdateAlarmRulePoliciesRequest';
import { UpdateAlarmRulePoliciesResponse } from './model/UpdateAlarmRulePoliciesResponse';
import { UpdateAlarmTemplateRequest } from './model/UpdateAlarmTemplateRequest';
import { UpdateAlarmTemplateRequestBody } from './model/UpdateAlarmTemplateRequestBody';
import { UpdateAlarmTemplateResponse } from './model/UpdateAlarmTemplateResponse';
import { UpdateDashboardRequest } from './model/UpdateDashboardRequest';
import { UpdateDashboardRequestBody } from './model/UpdateDashboardRequestBody';
import { UpdateDashboardResponse } from './model/UpdateDashboardResponse';
import { UpdatePolicy } from './model/UpdatePolicy';
import { UpdateResourceGroupRequest } from './model/UpdateResourceGroupRequest';
import { UpdateResourceGroupResponse } from './model/UpdateResourceGroupResponse';
import { UpdateWidgetInfo } from './model/UpdateWidgetInfo';
import { Value } from './model/Value';
import { WidgetDisplayMode } from './model/WidgetDisplayMode';
import { WidgetIdItem } from './model/WidgetIdItem';
import { WidgetInfo } from './model/WidgetInfo';
import { WidgetInfoWithId } from './model/WidgetInfoWithId';
import { WidgetMetric } from './model/WidgetMetric';

export class CesClient {
    public static newBuilder(): ClientBuilder<CesClient> {
            return new ClientBuilder<CesClient>(newClient);
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
     * @param {ResourcesReq} batchCreateResourcesRequestBody 添加资源请求体
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
     * @param {ResourcesReq} batchDeleteResourcesRequestBody 删除资源请求体
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
     * @summary 创建告警规则
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
     * 创建/复制/批量创建监控视图到指定的监控面板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建/复制/批量创建监控视图到指定的监控面板
     * @param {string} dashboardId 监控面板id，以db开头，包含22个字母和数字例：db16564943172807wjOmoLyn\&#39;
     * @param {Array<BaseWidgetInfo>} [createDashboardWidgetsRequestBody] 创建单指标条形图类型监控视图到指定监控面板请求体
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
     * 创建/复制监控面板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建/复制监控面板
     * @param {CreateDashboardRequestBody} createOneDashboardRequestBody 创建监控面板请求体
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
     * @summary 创建资源分组
     * @param {CreateResourceGroupRequestBody} createResourceGroupRequestBody 创建资源分组请求体
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
     * 批量删除监控面板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除监控面板
     * @param {BatchDeleteDashboardRequestBody} [deleteDashboardsRequestBody] 批量删除监控面板请求体
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
     * @param {string} widgetId 监控视图id
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
     * 根据ECS/BMS资源ID查询磁盘、挂载点、进程、显卡、RAID控制器维度指标信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机监控维度指标信息
     * @param {string} instanceId 资源ID，如：4270ff17-aba3-4138-89fa-820594c39755。
     * @param {'mount_point' | 'disk' | 'proc' | 'gpu' | 'raid'} dimName 维度名称，枚举类型，类型有：   mount_point：挂载点,   disk：磁盘,   proc：进程,   gpu：显卡,   raid: RAID控制器,
     * @param {string} [dimValue] 维度值，32位字符串，如：2e84018fc8b4484b94e89aae212fe615。
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
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
     * @param {string} [alarmId] 告警ID,以al开头，后跟22位由字母或数字组成的字符串
     * @param {string} [name] 告警规则名称
     * @param {string} [status] 告警规则状态, ok为正常，alarm为告警，invalid为已失效
     * @param {number} [level] 告警级别, 1为紧急，2为重要，3为次要，4为提示
     * @param {string} [namespace] 查询服务的命名空间，各服务命名空间请参考[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)
     * @param {string} [resourceId] 告警资源ID，多维度情况按字母升序排列并使用逗号分隔
     * @param {string} [from] 查询告警记录的起始时间，例如：2022-02-10T10:05:46+08:00
     * @param {string} [to] 查询告警记录的截止时间，例如：2022-02-10T10:05:47+08:00
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
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
     * @param {string} alarmId 告警规则ID
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
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
     * @param {string} alarmId Alarm实例ID
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
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
     * @summary 查询告警规则列表
     * @param {string} [alarmId] 告警规则ID
     * @param {string} [name] 告警名称, 只能包含0-9/a-z/A-Z/_/-或汉字，长度1-128
     * @param {string} [namespace] 查询服务的命名空间，各服务命名空间请参考[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)
     * @param {string} [resourceId] 告警资源ID，多维度情况按字母升序排列并使用逗号分隔
     * @param {string} [enterpriseProjectId] 企业项目ID
     * @param {number} [offset] 分页偏移量
     * @param {number} [limit] 分页大小
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
     * @param {string} [dimName] 资源维度，必须以字母开头，多维度用\&quot;,\&quot;分割，只能包含0-9/a-z/A-Z/_/-，每个维度的最大长度为32
     * @param {'system' | 'custom'} [templateType] 模板类型(custom代表默认自定义模板，system代表系统模板),不传自定义和系统均需返回
     * @param {string} [templateName] 告警模板的名称，以字母或汉字开头，可包含字母、数字、汉字、_、-，长度范围[1,128]，支持模糊匹配
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
     * 查询监控面板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控面板列表
     * @param {string} [enterpriseId] 企业项目Id
     * @param {boolean} [isFavorite] 指定企业项目下监控面板是否收藏，true:收藏，false:未收藏，填此参数时，enterprise_id必填
     * @param {string} [dashboardName] 监控面板名称
     * @param {string} [dashboardId] 监控面板id
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
     * 查询指定监控面板下的监控视图列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定监控面板下的监控视图列表
     * @param {string} dashboardId 监控面板id，以db开头，包含22个字母和数字例：db16564943172807wjOmoLyn\&#39;
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
     * @param {'EPS' | 'TAG' | 'Manual'} [type] 资源分组添加资源方式，取值只能为EPS（同步企业项目）,TAG（标签动态匹配）,Manual（手动添加），不传代表查询所有资源分组类型
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
     * @param {string} [dimName] 资源维度信息，多个维度按字母序使用逗号分割
     * @param {string} [limit] 分页查询时每页的条目数，取值[1,100]，默认值为100
     * @param {number} [offset] 分页查询时查询的起始位置，表示从第几条数据开始，默认为0
     * @param {'health' | 'unhealthy' | 'no_alarm_rule'} [status] 按状态信息进行过滤，取值只能为health（已设置告警规则且无告警触发的资源）、unhealthy（已设置告警规则且有告警触发的资源）、no_alarm_rule（未设置告警规则的资源）
     * @param {string} [dimValue] 资源维度值，不支持模糊匹配，但是多维度资源可以只指定一个维度值
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
     * @param {string} widgetId 监控视图id
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
     * 修改告警规则策略(全量修改)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警规则策略(全量修改)
     * @param {string} alarmId Alarm实例ID
     * @param {PoliciesReqV2} updateAlarmRulePoliciesRequestBody 修改策略的请求体
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
     * 修改监控面板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改监控面板
     * @param {string} dashboardId 监控面板id，以db开头，包含22个字母和数字例：db16564943172807wjOmoLyn\&#39;
     * @param {UpdateDashboardRequestBody} updateDashboardRequestBody 修改监控面板请求体
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
         * 创建/复制/批量创建监控视图到指定的监控面板
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
         * 创建/复制监控面板
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
         * 批量删除监控面板
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
         * 根据ECS/BMS资源ID查询磁盘、挂载点、进程、显卡、RAID控制器维度指标信息。
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
            
            let name;
            
            let status;
            
            let level;
            
            let namespace;
            
            let resourceId;
            
            let from;
            
            let to;
            
            let offset;
            
            let limit;

            if (listAlarmHistoriesRequest !== null && listAlarmHistoriesRequest !== undefined) {
                if (listAlarmHistoriesRequest instanceof ListAlarmHistoriesRequest) {
                    alarmId = listAlarmHistoriesRequest.alarmId;
                    name = listAlarmHistoriesRequest.name;
                    status = listAlarmHistoriesRequest.status;
                    level = listAlarmHistoriesRequest.level;
                    namespace = listAlarmHistoriesRequest.namespace;
                    resourceId = listAlarmHistoriesRequest.resourceId;
                    from = listAlarmHistoriesRequest.from;
                    to = listAlarmHistoriesRequest.to;
                    offset = listAlarmHistoriesRequest.offset;
                    limit = listAlarmHistoriesRequest.limit;
                } else {
                    alarmId = listAlarmHistoriesRequest['alarm_id'];
                    name = listAlarmHistoriesRequest['name'];
                    status = listAlarmHistoriesRequest['status'];
                    level = listAlarmHistoriesRequest['level'];
                    namespace = listAlarmHistoriesRequest['namespace'];
                    resourceId = listAlarmHistoriesRequest['resource_id'];
                    from = listAlarmHistoriesRequest['from'];
                    to = listAlarmHistoriesRequest['to'];
                    offset = listAlarmHistoriesRequest['offset'];
                    limit = listAlarmHistoriesRequest['limit'];
                }
            }

        
            if (alarmId !== null && alarmId !== undefined) {
                localVarQueryParameter['alarm_id'] = alarmId;
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
            
            let offset;
            
            let limit;

            if (listAlarmRulesRequest !== null && listAlarmRulesRequest !== undefined) {
                if (listAlarmRulesRequest instanceof ListAlarmRulesRequest) {
                    alarmId = listAlarmRulesRequest.alarmId;
                    name = listAlarmRulesRequest.name;
                    namespace = listAlarmRulesRequest.namespace;
                    resourceId = listAlarmRulesRequest.resourceId;
                    enterpriseProjectId = listAlarmRulesRequest.enterpriseProjectId;
                    offset = listAlarmRulesRequest.offset;
                    limit = listAlarmRulesRequest.limit;
                } else {
                    alarmId = listAlarmRulesRequest['alarm_id'];
                    name = listAlarmRulesRequest['name'];
                    namespace = listAlarmRulesRequest['namespace'];
                    resourceId = listAlarmRulesRequest['resource_id'];
                    enterpriseProjectId = listAlarmRulesRequest['enterprise_project_id'];
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

            if (listAlarmTemplatesRequest !== null && listAlarmTemplatesRequest !== undefined) {
                if (listAlarmTemplatesRequest instanceof ListAlarmTemplatesRequest) {
                    offset = listAlarmTemplatesRequest.offset;
                    limit = listAlarmTemplatesRequest.limit;
                    namespace = listAlarmTemplatesRequest.namespace;
                    dimName = listAlarmTemplatesRequest.dimName;
                    templateType = listAlarmTemplatesRequest.templateType;
                    templateName = listAlarmTemplatesRequest.templateName;
                } else {
                    offset = listAlarmTemplatesRequest['offset'];
                    limit = listAlarmTemplatesRequest['limit'];
                    namespace = listAlarmTemplatesRequest['namespace'];
                    dimName = listAlarmTemplatesRequest['dim_name'];
                    templateType = listAlarmTemplatesRequest['template_type'];
                    templateName = listAlarmTemplatesRequest['template_name'];
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询监控面板列表
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

            if (listDashboardInfosRequest !== null && listDashboardInfosRequest !== undefined) {
                if (listDashboardInfosRequest instanceof ListDashboardInfosRequest) {
                    enterpriseId = listDashboardInfosRequest.enterpriseId;
                    isFavorite = listDashboardInfosRequest.isFavorite;
                    dashboardName = listDashboardInfosRequest.dashboardName;
                    dashboardId = listDashboardInfosRequest.dashboardId;
                } else {
                    enterpriseId = listDashboardInfosRequest['enterprise_id'];
                    isFavorite = listDashboardInfosRequest['is_favorite'];
                    dashboardName = listDashboardInfosRequest['dashboard_name'];
                    dashboardId = listDashboardInfosRequest['dashboard_id'];
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

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定监控面板下的监控视图列表
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

            
            let dashboardId;

            if (listDashboardWidgetsRequest !== null && listDashboardWidgetsRequest !== undefined) {
                if (listDashboardWidgetsRequest instanceof ListDashboardWidgetsRequest) {
                    dashboardId = listDashboardWidgetsRequest.dashboardId;
                } else {
                    dashboardId = listDashboardWidgetsRequest['dashboard_id'];
                }
            }

        
            if (dashboardId === null || dashboardId === undefined) {
            throw new RequiredError('dashboardId','Required parameter dashboardId was null or undefined when calling listDashboardWidgets.');
            }

            options.pathParams = { 'dashboard_id': dashboardId, };
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

            if (listResourceGroupsServicesResourcesRequest !== null && listResourceGroupsServicesResourcesRequest !== undefined) {
                if (listResourceGroupsServicesResourcesRequest instanceof ListResourceGroupsServicesResourcesRequest) {
                    groupId = listResourceGroupsServicesResourcesRequest.groupId;
                    service = listResourceGroupsServicesResourcesRequest.service;
                    dimName = listResourceGroupsServicesResourcesRequest.dimName;
                    limit = listResourceGroupsServicesResourcesRequest.limit;
                    offset = listResourceGroupsServicesResourcesRequest.offset;
                    status = listResourceGroupsServicesResourcesRequest.status;
                    dimValue = listResourceGroupsServicesResourcesRequest.dimValue;
                } else {
                    groupId = listResourceGroupsServicesResourcesRequest['group_id'];
                    service = listResourceGroupsServicesResourcesRequest['service'];
                    dimName = listResourceGroupsServicesResourcesRequest['dim_name'];
                    limit = listResourceGroupsServicesResourcesRequest['limit'];
                    offset = listResourceGroupsServicesResourcesRequest['offset'];
                    status = listResourceGroupsServicesResourcesRequest['status'];
                    dimValue = listResourceGroupsServicesResourcesRequest['dim_value'];
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
         * 修改监控面板
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