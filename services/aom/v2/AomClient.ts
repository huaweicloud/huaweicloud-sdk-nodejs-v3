import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessCodeModel } from './model/AccessCodeModel';
import { ActionRule } from './model/ActionRule';
import { AddActionRuleRequest } from './model/AddActionRuleRequest';
import { AddActionRuleResponse } from './model/AddActionRuleResponse';
import { AddAlarmRuleRequest } from './model/AddAlarmRuleRequest';
import { AddAlarmRuleResponse } from './model/AddAlarmRuleResponse';
import { AddEvent2alarmRuleRequest } from './model/AddEvent2alarmRuleRequest';
import { AddEvent2alarmRuleResponse } from './model/AddEvent2alarmRuleResponse';
import { AddMetricDataRequest } from './model/AddMetricDataRequest';
import { AddMetricDataResponse } from './model/AddMetricDataResponse';
import { AddMuteRulesRequest } from './model/AddMuteRulesRequest';
import { AddMuteRulesResponse } from './model/AddMuteRulesResponse';
import { AddOrUpdateServiceDiscoveryRulesRequest } from './model/AddOrUpdateServiceDiscoveryRulesRequest';
import { AddOrUpdateServiceDiscoveryRulesResponse } from './model/AddOrUpdateServiceDiscoveryRulesResponse';
import { AlarmRuleParam } from './model/AlarmRuleParam';
import { AppNameRule } from './model/AppNameRule';
import { AppRules } from './model/AppRules';
import { AppRulesBody } from './model/AppRulesBody';
import { AppRulesSpec } from './model/AppRulesSpec';
import { ApplicationModel } from './model/ApplicationModel';
import { ApplicationNameRule } from './model/ApplicationNameRule';
import { CountEventsRequest } from './model/CountEventsRequest';
import { CountEventsResponse } from './model/CountEventsResponse';
import { CreatePromInstanceRequest } from './model/CreatePromInstanceRequest';
import { CreatePromInstanceResponse } from './model/CreatePromInstanceResponse';
import { CreateRecordingRuleRequest } from './model/CreateRecordingRuleRequest';
import { CreateRecordingRuleResponse } from './model/CreateRecordingRuleResponse';
import { DeleteActionRuleRequest } from './model/DeleteActionRuleRequest';
import { DeleteActionRuleResponse } from './model/DeleteActionRuleResponse';
import { DeleteAlarmRuleRequest } from './model/DeleteAlarmRuleRequest';
import { DeleteAlarmRuleResponse } from './model/DeleteAlarmRuleResponse';
import { DeleteAlarmRulesBody } from './model/DeleteAlarmRulesBody';
import { DeleteAlarmRulesRequest } from './model/DeleteAlarmRulesRequest';
import { DeleteAlarmRulesResponse } from './model/DeleteAlarmRulesResponse';
import { DeleteEvent2alarmRuleRequest } from './model/DeleteEvent2alarmRuleRequest';
import { DeleteEvent2alarmRuleResponse } from './model/DeleteEvent2alarmRuleResponse';
import { DeleteMuteRuleName } from './model/DeleteMuteRuleName';
import { DeleteMuteRulesRequest } from './model/DeleteMuteRulesRequest';
import { DeleteMuteRulesResponse } from './model/DeleteMuteRulesResponse';
import { DeletePromInstanceRequest } from './model/DeletePromInstanceRequest';
import { DeletePromInstanceResponse } from './model/DeletePromInstanceResponse';
import { DeleteserviceDiscoveryRulesRequest } from './model/DeleteserviceDiscoveryRulesRequest';
import { DeleteserviceDiscoveryRulesResponse } from './model/DeleteserviceDiscoveryRulesResponse';
import { Dimension } from './model/Dimension';
import { Dimension2 } from './model/Dimension2';
import { DimensionSeries } from './model/DimensionSeries';
import { DiscoveryRule } from './model/DiscoveryRule';
import { Event2alarmRuleBody } from './model/Event2alarmRuleBody';
import { Event2alarmRuleBodyMetadata } from './model/Event2alarmRuleBodyMetadata';
import { Event2alarmRuleBodyTriggerPolicies } from './model/Event2alarmRuleBodyTriggerPolicies';
import { EventList } from './model/EventList';
import { EventModel } from './model/EventModel';
import { EventQueryParam } from './model/EventQueryParam';
import { EventQueryParam2 } from './model/EventQueryParam2';
import { EventQueryParam2Sort } from './model/EventQueryParam2Sort';
import { EventQueryParamSort } from './model/EventQueryParamSort';
import { EventSeries } from './model/EventSeries';
import { ListAccessCodeRequest } from './model/ListAccessCodeRequest';
import { ListAccessCodeResponse } from './model/ListAccessCodeResponse';
import { ListActionRuleRequest } from './model/ListActionRuleRequest';
import { ListActionRuleResponse } from './model/ListActionRuleResponse';
import { ListAgentsRequest } from './model/ListAgentsRequest';
import { ListAgentsResponse } from './model/ListAgentsResponse';
import { ListAlarmRuleRequest } from './model/ListAlarmRuleRequest';
import { ListAlarmRuleResponse } from './model/ListAlarmRuleResponse';
import { ListEvent2alarmRuleRequest } from './model/ListEvent2alarmRuleRequest';
import { ListEvent2alarmRuleResponse } from './model/ListEvent2alarmRuleResponse';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListInstantQueryAomPromGetRequest } from './model/ListInstantQueryAomPromGetRequest';
import { ListInstantQueryAomPromGetResponse } from './model/ListInstantQueryAomPromGetResponse';
import { ListInstantQueryAomPromPostRequest } from './model/ListInstantQueryAomPromPostRequest';
import { ListInstantQueryAomPromPostResponse } from './model/ListInstantQueryAomPromPostResponse';
import { ListLabelValuesAomPromGetRequest } from './model/ListLabelValuesAomPromGetRequest';
import { ListLabelValuesAomPromGetResponse } from './model/ListLabelValuesAomPromGetResponse';
import { ListLabelsAomPromGetRequest } from './model/ListLabelsAomPromGetRequest';
import { ListLabelsAomPromGetResponse } from './model/ListLabelsAomPromGetResponse';
import { ListLabelsAomPromPostRequest } from './model/ListLabelsAomPromPostRequest';
import { ListLabelsAomPromPostResponse } from './model/ListLabelsAomPromPostResponse';
import { ListLogItemsRequest } from './model/ListLogItemsRequest';
import { ListLogItemsResponse } from './model/ListLogItemsResponse';
import { ListMetadataAomPromGetRequest } from './model/ListMetadataAomPromGetRequest';
import { ListMetadataAomPromGetResponse } from './model/ListMetadataAomPromGetResponse';
import { ListMetricItemsRequest } from './model/ListMetricItemsRequest';
import { ListMetricItemsResponse } from './model/ListMetricItemsResponse';
import { ListMuteRuleRequest } from './model/ListMuteRuleRequest';
import { ListMuteRuleResponse } from './model/ListMuteRuleResponse';
import { ListNotifiedHistoriesRequest } from './model/ListNotifiedHistoriesRequest';
import { ListNotifiedHistoriesResponse } from './model/ListNotifiedHistoriesResponse';
import { ListPermissionsRequest } from './model/ListPermissionsRequest';
import { ListPermissionsResponse } from './model/ListPermissionsResponse';
import { ListPromInstanceRequest } from './model/ListPromInstanceRequest';
import { ListPromInstanceResponse } from './model/ListPromInstanceResponse';
import { ListRangeQueryAomPromGetRequest } from './model/ListRangeQueryAomPromGetRequest';
import { ListRangeQueryAomPromGetResponse } from './model/ListRangeQueryAomPromGetResponse';
import { ListRangeQueryAomPromPostRequest } from './model/ListRangeQueryAomPromPostRequest';
import { ListRangeQueryAomPromPostResponse } from './model/ListRangeQueryAomPromPostResponse';
import { ListSampleRequest } from './model/ListSampleRequest';
import { ListSampleResponse } from './model/ListSampleResponse';
import { ListSeriesRequest } from './model/ListSeriesRequest';
import { ListSeriesResponse } from './model/ListSeriesResponse';
import { ListServiceDiscoveryRulesRequest } from './model/ListServiceDiscoveryRulesRequest';
import { ListServiceDiscoveryRulesResponse } from './model/ListServiceDiscoveryRulesResponse';
import { LogPathRule } from './model/LogPathRule';
import { Match } from './model/Match';
import { MetaData } from './model/MetaData';
import { MetaDataSeries } from './model/MetaDataSeries';
import { MetricAPIQueryItemParam } from './model/MetricAPIQueryItemParam';
import { MetricDataItem } from './model/MetricDataItem';
import { MetricDataPoints } from './model/MetricDataPoints';
import { MetricDataValue } from './model/MetricDataValue';
import { MetricItemInfo } from './model/MetricItemInfo';
import { MetricItemResultAPI } from './model/MetricItemResultAPI';
import { MetricQueryMeritcParam } from './model/MetricQueryMeritcParam';
import { MuteConfig } from './model/MuteConfig';
import { MuteRule } from './model/MuteRule';
import { NameRule } from './model/NameRule';
import { Notifications } from './model/Notifications';
import { NotifiedHistoriesResult } from './model/NotifiedHistoriesResult';
import { PromConfigModel } from './model/PromConfigModel';
import { PromInstanceEpsModel } from './model/PromInstanceEpsModel';
import { PushEventsRequest } from './model/PushEventsRequest';
import { PushEventsResponse } from './model/PushEventsResponse';
import { QueryAlarmResult } from './model/QueryAlarmResult';
import { QueryBodyParam } from './model/QueryBodyParam';
import { QueryMetricDataParam } from './model/QueryMetricDataParam';
import { QueryMetricItemOptionParam } from './model/QueryMetricItemOptionParam';
import { QuerySample } from './model/QuerySample';
import { QuerySampleParam } from './model/QuerySampleParam';
import { QuerySeriesOptionParam } from './model/QuerySeriesOptionParam';
import { RecordingRuleRequest } from './model/RecordingRuleRequest';
import { RelationModel } from './model/RelationModel';
import { SampleDataValue } from './model/SampleDataValue';
import { SearchKey } from './model/SearchKey';
import { SeriesAPIQueryItemParam } from './model/SeriesAPIQueryItemParam';
import { SeriesQueryItemResult } from './model/SeriesQueryItemResult';
import { ShowActionRuleRequest } from './model/ShowActionRuleRequest';
import { ShowActionRuleResponse } from './model/ShowActionRuleResponse';
import { ShowAlarmRuleRequest } from './model/ShowAlarmRuleRequest';
import { ShowAlarmRuleResponse } from './model/ShowAlarmRuleResponse';
import { ShowMetricsDataRequest } from './model/ShowMetricsDataRequest';
import { ShowMetricsDataResponse } from './model/ShowMetricsDataResponse';
import { SmnInfo } from './model/SmnInfo';
import { SmnResponse } from './model/SmnResponse';
import { SmnTopics } from './model/SmnTopics';
import { StatisticValue } from './model/StatisticValue';
import { UpdateActionRuleRequest } from './model/UpdateActionRuleRequest';
import { UpdateActionRuleResponse } from './model/UpdateActionRuleResponse';
import { UpdateAlarmRuleParam } from './model/UpdateAlarmRuleParam';
import { UpdateAlarmRuleRequest } from './model/UpdateAlarmRuleRequest';
import { UpdateAlarmRuleResponse } from './model/UpdateAlarmRuleResponse';
import { UpdateEventRuleRequest } from './model/UpdateEventRuleRequest';
import { UpdateEventRuleResponse } from './model/UpdateEventRuleResponse';
import { UpdateMuteRuleRequest } from './model/UpdateMuteRuleRequest';
import { UpdateMuteRuleResponse } from './model/UpdateMuteRuleResponse';
import { ValueData } from './model/ValueData';

export class AomClient {
    public static newBuilder(): ClientBuilder<AomClient> {
            return new ClientBuilder<AomClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 新增告警行动规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增告警行动规则
     * @param {ActionRule} addActionRuleRequestBody 告警行动规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addActionRule(addActionRuleRequest?: AddActionRuleRequest): Promise<AddActionRuleResponse> {
        const options = ParamCreater().addActionRule(addActionRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于添加一条阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加阈值规则
     * @param {AlarmRuleParam} addAlarmRuleBody 添加一条阈值规则。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addAlarmRule(addAlarmRuleRequest?: AddAlarmRuleRequest): Promise<AddAlarmRuleResponse> {
        const options = ParamCreater().addAlarmRule(addAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增一条事件类告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增一条事件类告警规则
     * @param {Event2alarmRuleBody} addEvent2alarmRuleRequestBody 事件类告警实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addEvent2alarmRule(addEvent2alarmRuleRequest?: AddEvent2alarmRuleRequest): Promise<AddEvent2alarmRuleResponse> {
        const options = ParamCreater().addEvent2alarmRule(addEvent2alarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于向服务端添加一条或多条监控数据。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加监控数据
     * @param {Array<MetricDataItem>} metricDataParam 指标参数信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addMetricData(addMetricDataRequest?: AddMetricDataRequest): Promise<AddMetricDataResponse> {
        const options = ParamCreater().addMetricData(addMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增静默规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增静默规则
     * @param {MuteRule} addMuteRulesRequestBody 静默规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addMuteRules(addMuteRulesRequest?: AddMuteRulesRequest): Promise<AddMuteRulesResponse> {
        const options = ParamCreater().addMuteRules(addMuteRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于添加或修改一条或多条服务发现规则。同一projectid下可添加的规则上限为100条。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加或修改服务发现规则
     * @param {AppRulesBody} [appRules] 服务参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addOrUpdateServiceDiscoveryRules(addOrUpdateServiceDiscoveryRulesRequest?: AddOrUpdateServiceDiscoveryRulesRequest): Promise<AddOrUpdateServiceDiscoveryRulesResponse> {
        const options = ParamCreater().addOrUpdateServiceDiscoveryRules(addOrUpdateServiceDiscoveryRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于分段统计指定条件下的事件、告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 统计事件告警信息
     * @param {EventQueryParam} countEventsRequestBody 查询事件或者告警列表请求参数。
     * @param {'history_alert' | 'active_alert'} [type] 查询类型。type&#x3D;active_alert代表查询活动告警，type&#x3D;history_alert代表查询历史告警。不传或者传其他值则返回指定查询条件的所有信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countEvents(countEventsRequest?: CountEventsRequest): Promise<CountEventsResponse> {
        const options = ParamCreater().countEvents(countEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除告警行动规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警行动规则
     * @param {Array<string>} deleteActionRuleRequestBody 要删除的规则的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteActionRule(deleteActionRuleRequest?: DeleteActionRuleRequest): Promise<DeleteActionRuleResponse> {
        const options = ParamCreater().deleteActionRule(deleteActionRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除阈值规则
     * @param {string} alarmRuleId 阈值规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmRule(deleteAlarmRuleRequest?: DeleteAlarmRuleRequest): Promise<DeleteAlarmRuleResponse> {
        const options = ParamCreater().deleteAlarmRule(deleteAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除阈值规则[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除阈值规则
     * @param {DeleteAlarmRulesBody} alarmRules 要删除的规则名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmRules(deleteAlarmRulesRequest?: DeleteAlarmRulesRequest): Promise<DeleteAlarmRulesResponse> {
        const options = ParamCreater().deleteAlarmRules(deleteAlarmRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一条事件类告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除事件类告警规则
     * @param {Array<string>} deleteEvent2alarmRuleRequestBody 删除的规则名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEvent2alarmRule(deleteEvent2alarmRuleRequest?: DeleteEvent2alarmRuleRequest): Promise<DeleteEvent2alarmRuleResponse> {
        const options = ParamCreater().deleteEvent2alarmRule(deleteEvent2alarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除静默规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除静默规则
     * @param {Array<DeleteMuteRuleName>} deleteMuteRulesRequestBody 要删除的规则的名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMuteRules(deleteMuteRulesRequest?: DeleteMuteRulesRequest): Promise<DeleteMuteRulesResponse> {
        const options = ParamCreater().deleteMuteRules(deleteMuteRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除服务发现规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除服务发现规则
     * @param {Array<string>} appRulesIds 发现规则ID，传多个时以逗号分隔。不允许为空。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteserviceDiscoveryRules(deleteserviceDiscoveryRulesRequest?: DeleteserviceDiscoveryRulesRequest): Promise<DeleteserviceDiscoveryRulesResponse> {
        const options = ParamCreater().deleteserviceDiscoveryRules(deleteserviceDiscoveryRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取告警行动规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取告警行动规则列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listActionRule(listActionRuleRequest?: ListActionRuleRequest): Promise<ListActionRuleResponse> {
        const options = ParamCreater().listActionRule();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询集群主机安装的ICAgent信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群主机安装的ICAgent信息
     * @param {string} clusterId 集群id。
     * @param {string} namespace 命名空间。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAgents(listAgentsRequest?: ListAgentsRequest): Promise<ListAgentsResponse> {
        const options = ParamCreater().listAgents(listAgentsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询阈值规则列表。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询阈值规则列表
     * @param {string} [offset] 分页信息。
     * @param {number} [limit] 用于限制结果数据条数。 取值范围(0,1000]，默认值为1000。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmRule(listAlarmRuleRequest?: ListAlarmRuleRequest): Promise<ListAlarmRuleResponse> {
        const options = ParamCreater().listAlarmRule(listAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件类告警规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件类告警规则列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvent2alarmRule(listEvent2alarmRuleRequest?: ListEvent2alarmRuleRequest): Promise<ListEvent2alarmRuleResponse> {
        const options = ParamCreater().listEvent2alarmRule();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询对应用户的事件、告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件告警信息
     * @param {EventQueryParam2} listEventsRequestBody 查询事件或者告警列表请求参数。
     * @param {'history_alert' | 'active_alert'} [type] 查询类型。type&#x3D;active_alert代表查询活动告警，type&#x3D;history_alert代表查询历史告警。不传或者传其他值则返回指定查询条件的所有信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEvents(listEventsRequest?: ListEventsRequest): Promise<ListEventsResponse> {
        const options = ParamCreater().listEvents(listEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询不同维度(例如集群、IP、应用等)下的日志内容，支持分页查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询日志
     * @param {string} type 日志接口调用方式,当值为\&quot;querylogs\&quot;时接口功能为查询日志内容。
     * @param {QueryBodyParam} listLogItemsRequestBody 查询不同维度日志请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLogItems(listLogItemsRequest?: ListLogItemsRequest): Promise<ListLogItemsResponse> {
        const options = ParamCreater().listLogItems(listLogItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询系统当前可监控的指标列表，可以指定指标命名空间、指标名称、维度、所属资源的编号（格式为：resType_resId），分页查询的起始位置和返回的最大记录条数。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标
     * @param {MetricAPIQueryItemParam} queryItemParam 指标查询参数。
     * @param {string} [type] 指标查询方式。
     * @param {string} [limit] 用于限制本次返回的结果数据条数。 取值范围(0,1000]，默认值为1000。
     * @param {string} [start] 分页查询起始位置，为非负整数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetricItems(listMetricItemsRequest?: ListMetricItemsRequest): Promise<ListMetricItemsResponse> {
        const options = ParamCreater().listMetricItems(listMetricItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取静默规则列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取静默规则列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMuteRule(listMuteRuleRequest?: ListMuteRuleRequest): Promise<ListMuteRuleResponse> {
        const options = ParamCreater().listMuteRule();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取告警发送结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取告警发送结果
     * @param {string} [eventSn] 告警流水号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotifiedHistories(listNotifiedHistoriesRequest?: ListNotifiedHistoriesRequest): Promise<ListNotifiedHistoriesResponse> {
        const options = ParamCreater().listNotifiedHistories(listNotifiedHistoriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询aom2.0相关云服务授权信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询aom2.0相关云服务授权信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPermissions(listPermissionsRequest?: ListPermissionsRequest): Promise<ListPermissionsResponse> {
        const options = ParamCreater().listPermissions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定时间范围内的监控时序数据，可以通过参数指定需要查询的数据维度，数据周期等。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询时序数据
     * @param {QuerySampleParam} listSampleRequestBody 查询时序数据所需参数。
     * @param {string} [fillValue] 用于对查询到的时序数据进行断点插值，默认值为-1。-1：断点处使用-1进行表示。0 ：断点处使用0进行表示。null：断点处使用null进行表示。average：断点处使用前后邻近的有效数据的平均值进行表示，如果不存在有效数据则使用null进行表示。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSample(listSampleRequest?: ListSampleRequest): Promise<ListSampleResponse> {
        const options = ParamCreater().listSample(listSampleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询系统当前可监控的时间序列列表，可以指定时间序列命名空间、名称、维度、所属资源的编号（格式为：resType_resId），分页查询的起始位置和返回的最大记录条数。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询时间序列
     * @param {SeriesAPIQueryItemParam} listSeriesRequestBody 时间序列查询参数。
     * @param {string} [limit] 用于限制本次返回的结果数据条数。 取值范围(0,1000]，默认值为1000。
     * @param {string} [offset] 分页查询起始位置，为非负整数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSeries(listSeriesRequest?: ListSeriesRequest): Promise<ListSeriesResponse> {
        const options = ParamCreater().listSeries(listSeriesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询系统当前已存在的服务发现规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询系统中已有服务发现规则
     * @param {string} [id] 具体的服务发现规则ID，可以精确匹配到一条服务发现规则。不传时返回project下所有服务发现规则的列表。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServiceDiscoveryRules(listServiceDiscoveryRulesRequest?: ListServiceDiscoveryRulesRequest): Promise<ListServiceDiscoveryRulesResponse> {
        const options = ParamCreater().listServiceDiscoveryRules(listServiceDiscoveryRulesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于上报对应用户的事件、告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报事件告警信息
     * @param {EventList} pushEventsRequestBody 事件或者告警列表。
     * @param {string} [xEnterprisePrjectId] 告警所属的企业项目id。
     * @param {'clear'} [action] 接口请求动作。action&#x3D;clear代表清除告警，不传或者传其他值默认为上报动作。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pushEvents(pushEventsRequest?: PushEventsRequest): Promise<PushEventsResponse> {
        const options = ParamCreater().pushEvents(pushEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过规则名称获取告警行动规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过规则名称获取告警行动规则
     * @param {string} ruleName 告警规则名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showActionRule(showActionRuleRequest?: ShowActionRuleRequest): Promise<ShowActionRuleResponse> {
        const options = ParamCreater().showActionRule(showActionRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询单条阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单条阈值规则
     * @param {string} alarmRuleId 阈值规则ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlarmRule(showAlarmRuleRequest?: ShowAlarmRuleRequest): Promise<ShowAlarmRuleResponse> {
        const options = ParamCreater().showAlarmRule(showAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询指定时间范围内指标的监控数据，可以通过参数指定需要查询的数据维度，数据周期等。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控数据
     * @param {QueryMetricDataParam} queryMetricDataParam 查询指标所需参数。
     * @param {'-1' | '0' | 'null' | 'average'} [fillValue] 用于对查询到的监控数据进行断点插值，默认值为-1。 -1：断点处使用-1进行表示。 0 ：断点处使用0进行表示。 null：断点处使用null进行表示。 average：断点处使用前后邻近的有效数据的平均值进行表示，如果不存在有效数据则使用null进行表示。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetricsData(showMetricsDataRequest?: ShowMetricsDataRequest): Promise<ShowMetricsDataResponse> {
        const options = ParamCreater().showMetricsData(showMetricsDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改告警行动规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警行动规则
     * @param {ActionRule} updateActionRuleRequestBody 服务参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateActionRule(updateActionRuleRequest?: UpdateActionRuleRequest): Promise<UpdateActionRuleResponse> {
        const options = ParamCreater().updateActionRule(updateActionRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于修改一条阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改阈值规则
     * @param {UpdateAlarmRuleParam} updateAlarmRuleBody UpdateAlarmRule
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmRule(updateAlarmRuleRequest?: UpdateAlarmRuleRequest): Promise<UpdateAlarmRuleResponse> {
        const options = ParamCreater().updateAlarmRule(updateAlarmRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新事件类告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新事件类告警规则
     * @param {Event2alarmRuleBody} [updateEventRuleRequestBody] 事件类告警规则实体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEventRule(updateEventRuleRequest?: UpdateEventRuleRequest): Promise<UpdateEventRuleResponse> {
        const options = ParamCreater().updateEventRule(updateEventRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改静默规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改静默规则
     * @param {MuteRule} updateMuteRuleRequestBody 服务参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateMuteRule(updateMuteRuleRequest?: UpdateMuteRuleRequest): Promise<UpdateMuteRuleResponse> {
        const options = ParamCreater().updateMuteRule(updateMuteRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于新增Prometheus实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增Prometheus实例
     * @param {PromInstanceEpsModel} createPromInstanceRequestBody Prometheus实例信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createPromInstance(createPromInstanceRequest?: CreatePromInstanceRequest): Promise<CreatePromInstanceResponse> {
        const options = ParamCreater().createPromInstance(createPromInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于给Prometheus实例创建预聚合规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建Prometheus实例的预聚合规则
     * @param {string} prometheusInstance prometheus实例id。
     * @param {RecordingRuleRequest} createRecordingRuleRequestBody 预聚合规则
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRecordingRule(createRecordingRuleRequest?: CreateRecordingRuleRequest): Promise<CreateRecordingRuleResponse> {
        const options = ParamCreater().createRecordingRule(createRecordingRuleRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于卸载托管Prometheus实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 卸载托管Prometheus实例
     * @param {string} promId Prometheus实例id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deletePromInstance(deletePromInstanceRequest?: DeletePromInstanceRequest): Promise<DeletePromInstanceResponse> {
        const options = ParamCreater().deletePromInstance(deletePromInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取Prometheus实例调用凭证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取Prometheus实例调用凭证
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAccessCode(listAccessCodeRequest?: ListAccessCodeRequest): Promise<ListAccessCodeResponse> {
        const options = ParamCreater().listAccessCode();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询PromQL(Prometheus Query Language)在特定时间点下的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 瞬时数据查询
     * @param {string} query PromQL表达式(参考https://prometheus.io/docs/prometheus/latest/querying/basics/)。
     * @param {string} [time] 指定用于计算 PromQL 的时间戳，(Unix时间戳格式，单位：秒）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstantQueryAomPromGet(listInstantQueryAomPromGetRequest?: ListInstantQueryAomPromGetRequest): Promise<ListInstantQueryAomPromGetResponse> {
        const options = ParamCreater().listInstantQueryAomPromGet(listInstantQueryAomPromGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询PromQL(Prometheus Query Language) 在特定时间点下的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 瞬时数据查询
     * @param {string} query PromQL表达式(参考https://prometheus.io/docs/prometheus/latest/querying/basics/)。
     * @param {string} [time] 指定用于计算 PromQL 的时间戳，(Unix时间戳格式，单位：秒）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listInstantQueryAomPromPost(listInstantQueryAomPromPostRequest?: ListInstantQueryAomPromPostRequest): Promise<ListInstantQueryAomPromPostResponse> {
        const options = ParamCreater().listInstantQueryAomPromPost(listInstantQueryAomPromPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询带有指定标签的时间序列列表。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签值
     * @param {string} labelName 查询所用标签。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLabelValuesAomPromGet(listLabelValuesAomPromGetRequest?: ListLabelValuesAomPromGetRequest): Promise<ListLabelValuesAomPromGetResponse> {
        const options = ParamCreater().listLabelValuesAomPromGet(listLabelValuesAomPromGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取标签名列表。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取标签名列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLabelsAomPromGet(listLabelsAomPromGetRequest?: ListLabelsAomPromGetRequest): Promise<ListLabelsAomPromGetResponse> {
        const options = ParamCreater().listLabelsAomPromGet();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于获取标签名列表。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取标签名列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLabelsAomPromPost(listLabelsAomPromPostRequest?: ListLabelsAomPromPostRequest): Promise<ListLabelsAomPromPostResponse> {
        const options = ParamCreater().listLabelsAomPromPost();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询序列及序列标签的元数据。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 元数据查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetadataAomPromGet(listMetadataAomPromGetRequest?: ListMetadataAomPromGetRequest): Promise<ListMetadataAomPromGetResponse> {
        const options = ParamCreater().listMetadataAomPromGet();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询Prometheus实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Prometheus实例
     * @param {string} [promId] Prometheus实例id。
     * @param {'DEFAULT' | 'ECS' | 'VPC' | 'CCE' | 'REMOTE_WRITE' | 'KUBERNETES' | 'CLOUD_SERVICE' | 'ACROSS_ACCOUNT'} [promType] Prometheus实例类型。
     * @param {'true' | 'false'} [cceClusterEnable] cce集群开关。
     * @param {'true' | 'false'} [promStatus] Prometheus实例状态。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listPromInstance(listPromInstanceRequest?: ListPromInstanceRequest): Promise<ListPromInstanceResponse> {
        const options = ParamCreater().listPromInstance(listPromInstanceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询PromQL(Prometheus Query Language)在一段时间返回内的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 区间数据查询
     * @param {string} query PromQL表达式(参考https://prometheus.io/docs/prometheus/latest/querying/basics/)。
     * @param {string} start 起始时间戳(Unix时间戳格式，单位：秒）。
     * @param {string} end 结束时间戳(Unix时间戳格式，单位：秒）。
     * @param {string} step 查询时间步长，时间区内每step秒执行一次。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRangeQueryAomPromGet(listRangeQueryAomPromGetRequest?: ListRangeQueryAomPromGetRequest): Promise<ListRangeQueryAomPromGetResponse> {
        const options = ParamCreater().listRangeQueryAomPromGet(listRangeQueryAomPromGetRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询PromQL(Prometheus Query Language)在一段时间返回内的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 区间数据查询
     * @param {string} query PromQL表达式(参考https://prometheus.io/docs/prometheus/latest/querying/basics/)。
     * @param {string} start 起始时间戳(Unix时间戳格式，单位：秒）。
     * @param {string} end 结束时间戳(Unix时间戳格式，单位：秒）。
     * @param {string} step 查询时间步长，时间区内每step秒执行一次。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRangeQueryAomPromPost(listRangeQueryAomPromPostRequest?: ListRangeQueryAomPromPostRequest): Promise<ListRangeQueryAomPromPostResponse> {
        const options = ParamCreater().listRangeQueryAomPromPost(listRangeQueryAomPromPostRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 新增告警行动规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addActionRule(addActionRuleRequest?: AddActionRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alert/action-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addActionRuleRequest !== null && addActionRuleRequest !== undefined) {
                if (addActionRuleRequest instanceof AddActionRuleRequest) {
                    body = addActionRuleRequest.body
                } else {
                    body = addActionRuleRequest['body'];
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
         * 该接口用于添加一条阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addAlarmRule(addAlarmRuleRequest?: AddAlarmRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarm-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addAlarmRuleRequest !== null && addAlarmRuleRequest !== undefined) {
                if (addAlarmRuleRequest instanceof AddAlarmRuleRequest) {
                    body = addAlarmRuleRequest.body
                } else {
                    body = addAlarmRuleRequest['body'];
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
         * 新增一条事件类告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addEvent2alarmRule(addEvent2alarmRuleRequest?: AddEvent2alarmRuleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/event2alarm-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addEvent2alarmRuleRequest !== null && addEvent2alarmRuleRequest !== undefined) {
                if (addEvent2alarmRuleRequest instanceof AddEvent2alarmRuleRequest) {
                    body = addEvent2alarmRuleRequest.body
                } else {
                    body = addEvent2alarmRuleRequest['body'];
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
         * 该接口用于向服务端添加一条或多条监控数据。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addMetricData(addMetricDataRequest?: AddMetricDataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ams/report/metricdata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addMetricDataRequest !== null && addMetricDataRequest !== undefined) {
                if (addMetricDataRequest instanceof AddMetricDataRequest) {
                    body = addMetricDataRequest.body
                } else {
                    body = addMetricDataRequest['body'];
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
         * 新增静默规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addMuteRules(addMuteRulesRequest?: AddMuteRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alert/mute-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addMuteRulesRequest !== null && addMuteRulesRequest !== undefined) {
                if (addMuteRulesRequest instanceof AddMuteRulesRequest) {
                    body = addMuteRulesRequest.body
                } else {
                    body = addMuteRulesRequest['body'];
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
         * 该接口用于添加或修改一条或多条服务发现规则。同一projectid下可添加的规则上限为100条。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addOrUpdateServiceDiscoveryRules(addOrUpdateServiceDiscoveryRulesRequest?: AddOrUpdateServiceDiscoveryRulesRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/inv/servicediscoveryrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (addOrUpdateServiceDiscoveryRulesRequest !== null && addOrUpdateServiceDiscoveryRulesRequest !== undefined) {
                if (addOrUpdateServiceDiscoveryRulesRequest instanceof AddOrUpdateServiceDiscoveryRulesRequest) {
                    body = addOrUpdateServiceDiscoveryRulesRequest.body
                } else {
                    body = addOrUpdateServiceDiscoveryRulesRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于分段统计指定条件下的事件、告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countEvents(countEventsRequest?: CountEventsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/events/statistic",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let type;

            if (countEventsRequest !== null && countEventsRequest !== undefined) {
                if (countEventsRequest instanceof CountEventsRequest) {
                    body = countEventsRequest.body
                    type = countEventsRequest.type;
                } else {
                    body = countEventsRequest['body'];
                    type = countEventsRequest['type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除告警行动规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteActionRule(deleteActionRuleRequest?: DeleteActionRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/alert/action-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteActionRuleRequest !== null && deleteActionRuleRequest !== undefined) {
                if (deleteActionRuleRequest instanceof DeleteActionRuleRequest) {
                    body = deleteActionRuleRequest.body
                } else {
                    body = deleteActionRuleRequest['body'];
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
         * 该接口用于删除阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmRule(deleteAlarmRuleRequest?: DeleteAlarmRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/alarm-rules/{alarm_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmRuleId;

            if (deleteAlarmRuleRequest !== null && deleteAlarmRuleRequest !== undefined) {
                if (deleteAlarmRuleRequest instanceof DeleteAlarmRuleRequest) {
                    alarmRuleId = deleteAlarmRuleRequest.alarmRuleId;
                } else {
                    alarmRuleId = deleteAlarmRuleRequest['alarm_rule_id'];
                }
            }

        
            if (alarmRuleId === null || alarmRuleId === undefined) {
            throw new RequiredError('alarmRuleId','Required parameter alarmRuleId was null or undefined when calling deleteAlarmRule.');
            }

            options.pathParams = { 'alarm_rule_id': alarmRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除阈值规则[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmRules(deleteAlarmRulesRequest?: DeleteAlarmRulesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/alarm-rules/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteAlarmRulesRequest !== null && deleteAlarmRulesRequest !== undefined) {
                if (deleteAlarmRulesRequest instanceof DeleteAlarmRulesRequest) {
                    body = deleteAlarmRulesRequest.body
                } else {
                    body = deleteAlarmRulesRequest['body'];
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
         * 删除一条事件类告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEvent2alarmRule(deleteEvent2alarmRuleRequest?: DeleteEvent2alarmRuleRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/event2alarm-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteEvent2alarmRuleRequest !== null && deleteEvent2alarmRuleRequest !== undefined) {
                if (deleteEvent2alarmRuleRequest instanceof DeleteEvent2alarmRuleRequest) {
                    body = deleteEvent2alarmRuleRequest.body
                } else {
                    body = deleteEvent2alarmRuleRequest['body'];
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
         * 删除静默规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMuteRules(deleteMuteRulesRequest?: DeleteMuteRulesRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/alert/mute-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteMuteRulesRequest !== null && deleteMuteRulesRequest !== undefined) {
                if (deleteMuteRulesRequest instanceof DeleteMuteRulesRequest) {
                    body = deleteMuteRulesRequest.body
                } else {
                    body = deleteMuteRulesRequest['body'];
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
         * 该接口用于删除服务发现规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteserviceDiscoveryRules(deleteserviceDiscoveryRulesRequest?: DeleteserviceDiscoveryRulesRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/inv/servicediscoveryrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appRulesIds;

            if (deleteserviceDiscoveryRulesRequest !== null && deleteserviceDiscoveryRulesRequest !== undefined) {
                if (deleteserviceDiscoveryRulesRequest instanceof DeleteserviceDiscoveryRulesRequest) {
                    appRulesIds = deleteserviceDiscoveryRulesRequest.appRulesIds;
                } else {
                    appRulesIds = deleteserviceDiscoveryRulesRequest['appRulesIds'];
                }
            }

        
            if (appRulesIds === null || appRulesIds === undefined) {
                throw new RequiredError('appRulesIds','Required parameter appRulesIds was null or undefined when calling deleteserviceDiscoveryRules.');
            }
            if (appRulesIds !== null && appRulesIds !== undefined) {
                localVarQueryParameter['appRulesIds'] = appRulesIds;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取告警行动规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listActionRule() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alert/action-rules",
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
         * 该接口用于查询集群主机安装的ICAgent信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAgents(listAgentsRequest?: ListAgentsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/{cluster_id}/{namespace}/agents",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let namespace;

            if (listAgentsRequest !== null && listAgentsRequest !== undefined) {
                if (listAgentsRequest instanceof ListAgentsRequest) {
                    clusterId = listAgentsRequest.clusterId;
                    namespace = listAgentsRequest.namespace;
                } else {
                    clusterId = listAgentsRequest['cluster_id'];
                    namespace = listAgentsRequest['namespace'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listAgents.');
            }
            if (namespace === null || namespace === undefined) {
            throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling listAgents.');
            }

            options.pathParams = { 'cluster_id': clusterId,'namespace': namespace, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询阈值规则列表。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmRule(listAlarmRuleRequest?: ListAlarmRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listAlarmRuleRequest !== null && listAlarmRuleRequest !== undefined) {
                if (listAlarmRuleRequest instanceof ListAlarmRuleRequest) {
                    offset = listAlarmRuleRequest.offset;
                    limit = listAlarmRuleRequest.limit;
                } else {
                    offset = listAlarmRuleRequest['offset'];
                    limit = listAlarmRuleRequest['limit'];
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
         * 查询事件类告警规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvent2alarmRule() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/event2alarm-rule",
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
         * 该接口用于查询对应用户的事件、告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvents(listEventsRequest?: ListEventsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let type;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    body = listEventsRequest.body
                    type = listEventsRequest.type;
                } else {
                    body = listEventsRequest['body'];
                    type = listEventsRequest['type'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询不同维度(例如集群、IP、应用等)下的日志内容，支持分页查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLogItems(listLogItemsRequest?: ListLogItemsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/als/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let type;

            if (listLogItemsRequest !== null && listLogItemsRequest !== undefined) {
                if (listLogItemsRequest instanceof ListLogItemsRequest) {
                    type = listLogItemsRequest.type;
                    body = listLogItemsRequest.body
                } else {
                    type = listLogItemsRequest['type'];
                    body = listLogItemsRequest['body'];
                }
            }

        
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listLogItems.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
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
         * 该接口用于查询系统当前可监控的指标列表，可以指定指标命名空间、指标名称、维度、所属资源的编号（格式为：resType_resId），分页查询的起始位置和返回的最大记录条数。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetricItems(listMetricItemsRequest?: ListMetricItemsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ams/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let type;
            
            let limit;
            
            let start;

            if (listMetricItemsRequest !== null && listMetricItemsRequest !== undefined) {
                if (listMetricItemsRequest instanceof ListMetricItemsRequest) {
                    body = listMetricItemsRequest.body
                    type = listMetricItemsRequest.type;
                    limit = listMetricItemsRequest.limit;
                    start = listMetricItemsRequest.start;
                } else {
                    body = listMetricItemsRequest['body'];
                    type = listMetricItemsRequest['type'];
                    limit = listMetricItemsRequest['limit'];
                    start = listMetricItemsRequest['start'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取静默规则列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMuteRule() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alert/mute-rules",
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
         * 获取告警发送结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotifiedHistories(listNotifiedHistoriesRequest?: ListNotifiedHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-notified-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let eventSn;

            if (listNotifiedHistoriesRequest !== null && listNotifiedHistoriesRequest !== undefined) {
                if (listNotifiedHistoriesRequest instanceof ListNotifiedHistoriesRequest) {
                    eventSn = listNotifiedHistoriesRequest.eventSn;
                } else {
                    eventSn = listNotifiedHistoriesRequest['event_sn'];
                }
            }

        
            if (eventSn !== null && eventSn !== undefined) {
                localVarQueryParameter['event_sn'] = eventSn;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询aom2.0相关云服务授权信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPermissions() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/auth/grant",
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
         * 该接口用于查询指定时间范围内的监控时序数据，可以通过参数指定需要查询的数据维度，数据周期等。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSample(listSampleRequest?: ListSampleRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/samples",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let fillValue;

            if (listSampleRequest !== null && listSampleRequest !== undefined) {
                if (listSampleRequest instanceof ListSampleRequest) {
                    body = listSampleRequest.body
                    fillValue = listSampleRequest.fillValue;
                } else {
                    body = listSampleRequest['body'];
                    fillValue = listSampleRequest['fill_value'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fillValue !== null && fillValue !== undefined) {
                localVarQueryParameter['fill_value'] = fillValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询系统当前可监控的时间序列列表，可以指定时间序列命名空间、名称、维度、所属资源的编号（格式为：resType_resId），分页查询的起始位置和返回的最大记录条数。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSeries(listSeriesRequest?: ListSeriesRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/series",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;
            
            let offset;

            if (listSeriesRequest !== null && listSeriesRequest !== undefined) {
                if (listSeriesRequest instanceof ListSeriesRequest) {
                    body = listSeriesRequest.body
                    limit = listSeriesRequest.limit;
                    offset = listSeriesRequest.offset;
                } else {
                    body = listSeriesRequest['body'];
                    limit = listSeriesRequest['limit'];
                    offset = listSeriesRequest['offset'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询系统当前已存在的服务发现规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServiceDiscoveryRules(listServiceDiscoveryRulesRequest?: ListServiceDiscoveryRulesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/inv/servicediscoveryrules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let id;

            if (listServiceDiscoveryRulesRequest !== null && listServiceDiscoveryRulesRequest !== undefined) {
                if (listServiceDiscoveryRulesRequest instanceof ListServiceDiscoveryRulesRequest) {
                    id = listServiceDiscoveryRulesRequest.id;
                } else {
                    id = listServiceDiscoveryRulesRequest['id'];
                }
            }

        
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于上报对应用户的事件、告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pushEvents(pushEventsRequest?: PushEventsRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/push/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let xEnterprisePrjectId;
            
            let action;

            if (pushEventsRequest !== null && pushEventsRequest !== undefined) {
                if (pushEventsRequest instanceof PushEventsRequest) {
                    body = pushEventsRequest.body
                    xEnterprisePrjectId = pushEventsRequest.xEnterprisePrjectId;
                    action = pushEventsRequest.action;
                } else {
                    body = pushEventsRequest['body'];
                    xEnterprisePrjectId = pushEventsRequest['x-enterprise-prject-id'];
                    action = pushEventsRequest['action'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (action !== null && action !== undefined) {
                localVarQueryParameter['action'] = action;
            }
            if (xEnterprisePrjectId !== undefined && xEnterprisePrjectId !== null) {
                localVarHeaderParameter['x-enterprise-prject-id'] = String(xEnterprisePrjectId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过规则名称获取告警行动规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showActionRule(showActionRuleRequest?: ShowActionRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alert/action-rules/{rule_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ruleName;

            if (showActionRuleRequest !== null && showActionRuleRequest !== undefined) {
                if (showActionRuleRequest instanceof ShowActionRuleRequest) {
                    ruleName = showActionRuleRequest.ruleName;
                } else {
                    ruleName = showActionRuleRequest['rule_name'];
                }
            }

        
            if (ruleName === null || ruleName === undefined) {
            throw new RequiredError('ruleName','Required parameter ruleName was null or undefined when calling showActionRule.');
            }

            options.pathParams = { 'rule_name': ruleName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询单条阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlarmRule(showAlarmRuleRequest?: ShowAlarmRuleRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/alarm-rules/{alarm_rule_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmRuleId;

            if (showAlarmRuleRequest !== null && showAlarmRuleRequest !== undefined) {
                if (showAlarmRuleRequest instanceof ShowAlarmRuleRequest) {
                    alarmRuleId = showAlarmRuleRequest.alarmRuleId;
                } else {
                    alarmRuleId = showAlarmRuleRequest['alarm_rule_id'];
                }
            }

        
            if (alarmRuleId === null || alarmRuleId === undefined) {
            throw new RequiredError('alarmRuleId','Required parameter alarmRuleId was null or undefined when calling showAlarmRule.');
            }

            options.pathParams = { 'alarm_rule_id': alarmRuleId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询指定时间范围内指标的监控数据，可以通过参数指定需要查询的数据维度，数据周期等。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetricsData(showMetricsDataRequest?: ShowMetricsDataRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/ams/metricdata",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let fillValue;

            if (showMetricsDataRequest !== null && showMetricsDataRequest !== undefined) {
                if (showMetricsDataRequest instanceof ShowMetricsDataRequest) {
                    body = showMetricsDataRequest.body
                    fillValue = showMetricsDataRequest.fillValue;
                } else {
                    body = showMetricsDataRequest['body'];
                    fillValue = showMetricsDataRequest['fillValue'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (fillValue !== null && fillValue !== undefined) {
                localVarQueryParameter['fillValue'] = fillValue;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警行动规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateActionRule(updateActionRuleRequest?: UpdateActionRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alert/action-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateActionRuleRequest !== null && updateActionRuleRequest !== undefined) {
                if (updateActionRuleRequest instanceof UpdateActionRuleRequest) {
                    body = updateActionRuleRequest.body
                } else {
                    body = updateActionRuleRequest['body'];
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
         * 该接口用于修改一条阈值规则。[（当前接口未上线墨西哥城二、圣地亚哥、圣保罗一）](tag:hws,hws_hk)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmRule(updateAlarmRuleRequest?: UpdateAlarmRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alarm-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateAlarmRuleRequest !== null && updateAlarmRuleRequest !== undefined) {
                if (updateAlarmRuleRequest instanceof UpdateAlarmRuleRequest) {
                    body = updateAlarmRuleRequest.body
                } else {
                    body = updateAlarmRuleRequest['body'];
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
         * 更新事件类告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEventRule(updateEventRuleRequest?: UpdateEventRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/event2alarm-rule",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateEventRuleRequest !== null && updateEventRuleRequest !== undefined) {
                if (updateEventRuleRequest instanceof UpdateEventRuleRequest) {
                    body = updateEventRuleRequest.body
                } else {
                    body = updateEventRuleRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改静默规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateMuteRule(updateMuteRuleRequest?: UpdateMuteRuleRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/alert/mute-rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateMuteRuleRequest !== null && updateMuteRuleRequest !== undefined) {
                if (updateMuteRuleRequest instanceof UpdateMuteRuleRequest) {
                    body = updateMuteRuleRequest.body
                } else {
                    body = updateMuteRuleRequest['body'];
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
         * 该接口用于新增Prometheus实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createPromInstance(createPromInstanceRequest?: CreatePromInstanceRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aom/prometheus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createPromInstanceRequest !== null && createPromInstanceRequest !== undefined) {
                if (createPromInstanceRequest instanceof CreatePromInstanceRequest) {
                    body = createPromInstanceRequest.body
                } else {
                    body = createPromInstanceRequest['body'];
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
         * 该接口用于给Prometheus实例创建预聚合规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRecordingRule(createRecordingRuleRequest?: CreateRecordingRuleRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/{prometheus_instance}/aom/api/v1/rules",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let prometheusInstance;

            if (createRecordingRuleRequest !== null && createRecordingRuleRequest !== undefined) {
                if (createRecordingRuleRequest instanceof CreateRecordingRuleRequest) {
                    prometheusInstance = createRecordingRuleRequest.prometheusInstance;
                    body = createRecordingRuleRequest.body
                } else {
                    prometheusInstance = createRecordingRuleRequest['prometheus_instance'];
                    body = createRecordingRuleRequest['body'];
                }
            }

        
            if (prometheusInstance === null || prometheusInstance === undefined) {
            throw new RequiredError('prometheusInstance','Required parameter prometheusInstance was null or undefined when calling createRecordingRule.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'prometheus_instance': prometheusInstance, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于卸载托管Prometheus实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deletePromInstance(deletePromInstanceRequest?: DeletePromInstanceRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/aom/prometheus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let promId;

            if (deletePromInstanceRequest !== null && deletePromInstanceRequest !== undefined) {
                if (deletePromInstanceRequest instanceof DeletePromInstanceRequest) {
                    promId = deletePromInstanceRequest.promId;
                } else {
                    promId = deletePromInstanceRequest['prom_id'];
                }
            }

        
            if (promId === null || promId === undefined) {
                throw new RequiredError('promId','Required parameter promId was null or undefined when calling deletePromInstance.');
            }
            if (promId !== null && promId !== undefined) {
                localVarQueryParameter['prom_id'] = promId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取Prometheus实例调用凭证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAccessCode() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/access-code",
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
         * 该接口用于查询PromQL(Prometheus Query Language)在特定时间点下的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstantQueryAomPromGet(listInstantQueryAomPromGetRequest?: ListInstantQueryAomPromGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/api/v1/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let query;
            
            let time;

            if (listInstantQueryAomPromGetRequest !== null && listInstantQueryAomPromGetRequest !== undefined) {
                if (listInstantQueryAomPromGetRequest instanceof ListInstantQueryAomPromGetRequest) {
                    query = listInstantQueryAomPromGetRequest.query;
                    time = listInstantQueryAomPromGetRequest.time;
                } else {
                    query = listInstantQueryAomPromGetRequest['query'];
                    time = listInstantQueryAomPromGetRequest['time'];
                }
            }

        
            if (query === null || query === undefined) {
                throw new RequiredError('query','Required parameter query was null or undefined when calling listInstantQueryAomPromGet.');
            }
            if (query !== null && query !== undefined) {
                localVarQueryParameter['query'] = query;
            }
            if (time !== null && time !== undefined) {
                localVarQueryParameter['time'] = time;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询PromQL(Prometheus Query Language) 在特定时间点下的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listInstantQueryAomPromPost(listInstantQueryAomPromPostRequest?: ListInstantQueryAomPromPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aom/api/v1/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let query;
            
            let time;

            if (listInstantQueryAomPromPostRequest !== null && listInstantQueryAomPromPostRequest !== undefined) {
                if (listInstantQueryAomPromPostRequest instanceof ListInstantQueryAomPromPostRequest) {
                    query = listInstantQueryAomPromPostRequest.query;
                    time = listInstantQueryAomPromPostRequest.time;
                } else {
                    query = listInstantQueryAomPromPostRequest['query'];
                    time = listInstantQueryAomPromPostRequest['time'];
                }
            }

        
            if (query === null || query === undefined) {
                throw new RequiredError('query','Required parameter query was null or undefined when calling listInstantQueryAomPromPost.');
            }
            if (query !== null && query !== undefined) {
                localVarQueryParameter['query'] = query;
            }
            if (time !== null && time !== undefined) {
                localVarQueryParameter['time'] = time;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询带有指定标签的时间序列列表。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLabelValuesAomPromGet(listLabelValuesAomPromGetRequest?: ListLabelValuesAomPromGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/api/v1/label/{label_name}/values",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let labelName;

            if (listLabelValuesAomPromGetRequest !== null && listLabelValuesAomPromGetRequest !== undefined) {
                if (listLabelValuesAomPromGetRequest instanceof ListLabelValuesAomPromGetRequest) {
                    labelName = listLabelValuesAomPromGetRequest.labelName;
                } else {
                    labelName = listLabelValuesAomPromGetRequest['label_name'];
                }
            }

        
            if (labelName === null || labelName === undefined) {
            throw new RequiredError('labelName','Required parameter labelName was null or undefined when calling listLabelValuesAomPromGet.');
            }

            options.pathParams = { 'label_name': labelName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于获取标签名列表。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLabelsAomPromGet() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/api/v1/labels",
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
         * 该接口用于获取标签名列表。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLabelsAomPromPost() {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aom/api/v1/labels",
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
         * 该接口用于查询序列及序列标签的元数据。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetadataAomPromGet() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/api/v1/metadata",
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
         * 该接口用于查询Prometheus实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listPromInstance(listPromInstanceRequest?: ListPromInstanceRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/prometheus",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let promId;
            
            let promType;
            
            let cceClusterEnable;
            
            let promStatus;

            if (listPromInstanceRequest !== null && listPromInstanceRequest !== undefined) {
                if (listPromInstanceRequest instanceof ListPromInstanceRequest) {
                    promId = listPromInstanceRequest.promId;
                    promType = listPromInstanceRequest.promType;
                    cceClusterEnable = listPromInstanceRequest.cceClusterEnable;
                    promStatus = listPromInstanceRequest.promStatus;
                } else {
                    promId = listPromInstanceRequest['prom_id'];
                    promType = listPromInstanceRequest['prom_type'];
                    cceClusterEnable = listPromInstanceRequest['cce_cluster_enable'];
                    promStatus = listPromInstanceRequest['prom_status'];
                }
            }

        
            if (promId !== null && promId !== undefined) {
                localVarQueryParameter['prom_id'] = promId;
            }
            if (promType !== null && promType !== undefined) {
                localVarQueryParameter['prom_type'] = promType;
            }
            if (cceClusterEnable !== null && cceClusterEnable !== undefined) {
                localVarQueryParameter['cce_cluster_enable'] = cceClusterEnable;
            }
            if (promStatus !== null && promStatus !== undefined) {
                localVarQueryParameter['prom_status'] = promStatus;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询PromQL(Prometheus Query Language)在一段时间返回内的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRangeQueryAomPromGet(listRangeQueryAomPromGetRequest?: ListRangeQueryAomPromGetRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/aom/api/v1/query_range",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let query;
            
            let start;
            
            let end;
            
            let step;

            if (listRangeQueryAomPromGetRequest !== null && listRangeQueryAomPromGetRequest !== undefined) {
                if (listRangeQueryAomPromGetRequest instanceof ListRangeQueryAomPromGetRequest) {
                    query = listRangeQueryAomPromGetRequest.query;
                    start = listRangeQueryAomPromGetRequest.start;
                    end = listRangeQueryAomPromGetRequest.end;
                    step = listRangeQueryAomPromGetRequest.step;
                } else {
                    query = listRangeQueryAomPromGetRequest['query'];
                    start = listRangeQueryAomPromGetRequest['start'];
                    end = listRangeQueryAomPromGetRequest['end'];
                    step = listRangeQueryAomPromGetRequest['step'];
                }
            }

        
            if (query === null || query === undefined) {
                throw new RequiredError('query','Required parameter query was null or undefined when calling listRangeQueryAomPromGet.');
            }
            if (query !== null && query !== undefined) {
                localVarQueryParameter['query'] = query;
            }
            if (start === null || start === undefined) {
                throw new RequiredError('start','Required parameter start was null or undefined when calling listRangeQueryAomPromGet.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (end === null || end === undefined) {
                throw new RequiredError('end','Required parameter end was null or undefined when calling listRangeQueryAomPromGet.');
            }
            if (end !== null && end !== undefined) {
                localVarQueryParameter['end'] = end;
            }
            if (step === null || step === undefined) {
                throw new RequiredError('step','Required parameter step was null or undefined when calling listRangeQueryAomPromGet.');
            }
            if (step !== null && step !== undefined) {
                localVarQueryParameter['step'] = step;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询PromQL(Prometheus Query Language)在一段时间返回内的计算结果。（注：接口目前开放的region为：北京四、上海一和广州）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRangeQueryAomPromPost(listRangeQueryAomPromPostRequest?: ListRangeQueryAomPromPostRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/aom/api/v1/query_range",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let query;
            
            let start;
            
            let end;
            
            let step;

            if (listRangeQueryAomPromPostRequest !== null && listRangeQueryAomPromPostRequest !== undefined) {
                if (listRangeQueryAomPromPostRequest instanceof ListRangeQueryAomPromPostRequest) {
                    query = listRangeQueryAomPromPostRequest.query;
                    start = listRangeQueryAomPromPostRequest.start;
                    end = listRangeQueryAomPromPostRequest.end;
                    step = listRangeQueryAomPromPostRequest.step;
                } else {
                    query = listRangeQueryAomPromPostRequest['query'];
                    start = listRangeQueryAomPromPostRequest['start'];
                    end = listRangeQueryAomPromPostRequest['end'];
                    step = listRangeQueryAomPromPostRequest['step'];
                }
            }

        
            if (query === null || query === undefined) {
                throw new RequiredError('query','Required parameter query was null or undefined when calling listRangeQueryAomPromPost.');
            }
            if (query !== null && query !== undefined) {
                localVarQueryParameter['query'] = query;
            }
            if (start === null || start === undefined) {
                throw new RequiredError('start','Required parameter start was null or undefined when calling listRangeQueryAomPromPost.');
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (end === null || end === undefined) {
                throw new RequiredError('end','Required parameter end was null or undefined when calling listRangeQueryAomPromPost.');
            }
            if (end !== null && end !== undefined) {
                localVarQueryParameter['end'] = end;
            }
            if (step === null || step === undefined) {
                throw new RequiredError('step','Required parameter step was null or undefined when calling listRangeQueryAomPromPost.');
            }
            if (step !== null && step !== undefined) {
                localVarQueryParameter['step'] = step;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): AomClient {
    return new AomClient(client);
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