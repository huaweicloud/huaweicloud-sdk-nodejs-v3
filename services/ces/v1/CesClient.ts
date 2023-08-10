import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AdditionalInfo } from './model/AdditionalInfo';
import { AlarmActions } from './model/AlarmActions';
import { AlarmHistoryInfo } from './model/AlarmHistoryInfo';
import { AlarmTemplate } from './model/AlarmTemplate';
import { AlarmTemplateCondition } from './model/AlarmTemplateCondition';
import { BatchListMetricDataRequest } from './model/BatchListMetricDataRequest';
import { BatchListMetricDataRequestBody } from './model/BatchListMetricDataRequestBody';
import { BatchListMetricDataResponse } from './model/BatchListMetricDataResponse';
import { BatchMetricData } from './model/BatchMetricData';
import { Condition } from './model/Condition';
import { CreateAlarmRequest } from './model/CreateAlarmRequest';
import { CreateAlarmRequestBody } from './model/CreateAlarmRequestBody';
import { CreateAlarmResponse } from './model/CreateAlarmResponse';
import { CreateAlarmTemplateRequest } from './model/CreateAlarmTemplateRequest';
import { CreateAlarmTemplateRequestBody } from './model/CreateAlarmTemplateRequestBody';
import { CreateAlarmTemplateResponse } from './model/CreateAlarmTemplateResponse';
import { CreateEventsRequest } from './model/CreateEventsRequest';
import { CreateEventsResponse } from './model/CreateEventsResponse';
import { CreateEventsResponseBody } from './model/CreateEventsResponseBody';
import { CreateMetricDataRequest } from './model/CreateMetricDataRequest';
import { CreateMetricDataResponse } from './model/CreateMetricDataResponse';
import { CreateResourceGroup } from './model/CreateResourceGroup';
import { CreateResourceGroupRequest } from './model/CreateResourceGroupRequest';
import { CreateResourceGroupRequestBody } from './model/CreateResourceGroupRequestBody';
import { CreateResourceGroupResponse } from './model/CreateResourceGroupResponse';
import { DataPointForAlarmHistory } from './model/DataPointForAlarmHistory';
import { Datapoint } from './model/Datapoint';
import { DatapointForBatchMetric } from './model/DatapointForBatchMetric';
import { DeleteAlarmRequest } from './model/DeleteAlarmRequest';
import { DeleteAlarmResponse } from './model/DeleteAlarmResponse';
import { DeleteAlarmTemplateRequest } from './model/DeleteAlarmTemplateRequest';
import { DeleteAlarmTemplateResponse } from './model/DeleteAlarmTemplateResponse';
import { DeleteResourceGroupRequest } from './model/DeleteResourceGroupRequest';
import { DeleteResourceGroupResponse } from './model/DeleteResourceGroupResponse';
import { EventDataInfo } from './model/EventDataInfo';
import { EventInfo } from './model/EventInfo';
import { EventInfoDetail } from './model/EventInfoDetail';
import { EventItem } from './model/EventItem';
import { EventItemDetail } from './model/EventItemDetail';
import { InstanceStatistics } from './model/InstanceStatistics';
import { ListAlarmHistoriesRequest } from './model/ListAlarmHistoriesRequest';
import { ListAlarmHistoriesResponse } from './model/ListAlarmHistoriesResponse';
import { ListAlarmTemplatesRequest } from './model/ListAlarmTemplatesRequest';
import { ListAlarmTemplatesResponse } from './model/ListAlarmTemplatesResponse';
import { ListAlarmsRequest } from './model/ListAlarmsRequest';
import { ListAlarmsResponse } from './model/ListAlarmsResponse';
import { ListEventDetailRequest } from './model/ListEventDetailRequest';
import { ListEventDetailResponse } from './model/ListEventDetailResponse';
import { ListEventsRequest } from './model/ListEventsRequest';
import { ListEventsResponse } from './model/ListEventsResponse';
import { ListMetricsRequest } from './model/ListMetricsRequest';
import { ListMetricsResponse } from './model/ListMetricsResponse';
import { ListResourceGroupRequest } from './model/ListResourceGroupRequest';
import { ListResourceGroupResponse } from './model/ListResourceGroupResponse';
import { MetaData } from './model/MetaData';
import { MetaDataForAlarmHistory } from './model/MetaDataForAlarmHistory';
import { MetricAlarms } from './model/MetricAlarms';
import { MetricDataItem } from './model/MetricDataItem';
import { MetricForAlarm } from './model/MetricForAlarm';
import { MetricInfo } from './model/MetricInfo';
import { MetricInfoForAlarm } from './model/MetricInfoForAlarm';
import { MetricInfoList } from './model/MetricInfoList';
import { MetricsDimension } from './model/MetricsDimension';
import { ModifyAlarmActionReq } from './model/ModifyAlarmActionReq';
import { Quotas } from './model/Quotas';
import { Resource } from './model/Resource';
import { ResourceGroup } from './model/ResourceGroup';
import { ResourceGroupInfo } from './model/ResourceGroupInfo';
import { ShowAlarmRequest } from './model/ShowAlarmRequest';
import { ShowAlarmResponse } from './model/ShowAlarmResponse';
import { ShowEventDataRequest } from './model/ShowEventDataRequest';
import { ShowEventDataResponse } from './model/ShowEventDataResponse';
import { ShowMetricDataRequest } from './model/ShowMetricDataRequest';
import { ShowMetricDataResponse } from './model/ShowMetricDataResponse';
import { ShowQuotasRequest } from './model/ShowQuotasRequest';
import { ShowQuotasResponse } from './model/ShowQuotasResponse';
import { ShowResourceGroupRequest } from './model/ShowResourceGroupRequest';
import { ShowResourceGroupResponse } from './model/ShowResourceGroupResponse';
import { TemplateItem } from './model/TemplateItem';
import { TotalMetaData } from './model/TotalMetaData';
import { UpdateAlarmActionRequest } from './model/UpdateAlarmActionRequest';
import { UpdateAlarmActionResponse } from './model/UpdateAlarmActionResponse';
import { UpdateAlarmRequest } from './model/UpdateAlarmRequest';
import { UpdateAlarmRequestBody } from './model/UpdateAlarmRequestBody';
import { UpdateAlarmResponse } from './model/UpdateAlarmResponse';
import { UpdateAlarmTemplateRequest } from './model/UpdateAlarmTemplateRequest';
import { UpdateAlarmTemplateRequestBody } from './model/UpdateAlarmTemplateRequestBody';
import { UpdateAlarmTemplateResponse } from './model/UpdateAlarmTemplateResponse';
import { UpdateResourceGroupRequest } from './model/UpdateResourceGroupRequest';
import { UpdateResourceGroupRequestBody } from './model/UpdateResourceGroupRequestBody';
import { UpdateResourceGroupResponse } from './model/UpdateResourceGroupResponse';

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
     * 批量查询指定时间范围内指定指标的指定粒度的监控数据，目前最多支持500指标的批量查询。 对于不同的period取值和查询的指标数量，默认的最大查询区间(to-from)不同。 规则为\&quot;指标数量*(to-from)/监控周期&lt;&#x3D;3000\&quot;，若超出阈值，会自动调整from以满足规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量查询监控数据
     * @param {BatchListMetricDataRequestBody} batchListMetricDataRequestBody 批量查询监控数据，请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchListMetricData(batchListMetricDataRequest?: BatchListMetricDataRequest): Promise<BatchListMetricDataResponse> {
        const options = ParamCreater().batchListMetricData(batchListMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一条告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建告警规则
     * @param {CreateAlarmRequestBody} createAlarmRequestBody 创建一条告警规则，请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAlarm(createAlarmRequest?: CreateAlarmRequest): Promise<CreateAlarmResponse> {
        const options = ParamCreater().createAlarm(createAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建自定义告警模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建自定义告警模板
     * @param {CreateAlarmTemplateRequestBody} createAlarmTemplateRequestBody 创建自定义告警模板，请求参数。
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
     * 上报自定义事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上报事件
     * @param {Array<EventItem>} eventItems 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEvents(createEventsRequest?: CreateEventsRequest): Promise<CreateEventsResponse> {
        const options = ParamCreater().createEvents(createEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 添加一条或多条指标监控数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加监控数据
     * @param {Array<MetricDataItem>} metricDataItem 添加一条或多条自定义指标监控数据，请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMetricData(createMetricDataRequest?: CreateMetricDataRequest): Promise<CreateMetricDataResponse> {
        const options = ParamCreater().createMetricData(createMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建资源分组，资源分组支持将各类资源按照业务集中进行分组管理，可以从分组角度查看监控与告警信息，以提升运维效率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建资源分组
     * @param {CreateResourceGroupRequestBody} createResourceGroupRequestBody 创建资源分组，请求参数。
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
     * 删除一条告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除告警规则
     * @param {string} alarmId 告警规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarm(deleteAlarmRequest?: DeleteAlarmRequest): Promise<DeleteAlarmResponse> {
        const options = ParamCreater().deleteAlarm(deleteAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据ID删除自定义告警模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义告警模板
     * @param {string} templateId 需要删除的自定义告警模板ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAlarmTemplate(deleteAlarmTemplateRequest?: DeleteAlarmTemplateRequest): Promise<DeleteAlarmTemplateResponse> {
        const options = ParamCreater().deleteAlarmTemplate(deleteAlarmTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一条资源分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除资源分组
     * @param {string} groupId 资源分组ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteResourceGroup(deleteResourceGroupRequest?: DeleteResourceGroupRequest): Promise<DeleteResourceGroupResponse> {
        const options = ParamCreater().deleteResourceGroup(deleteResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询告警历史列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警历史
     * @param {string} [groupId] 服务提供的资源分组功能，创建的资源分组ID，如：rg1603107497873DK4O2pXbn。
     * @param {string} [alarmId] 告警规则ID。如：al1603088932912v98rGl1al。
     * @param {string} [alarmName] 告警规则名称，如alarm-test01。
     * @param {string} [alarmStatus] 告警历史的状态，取值为ok，alarm，insufficient_data； ok为正常，alarm为告警，insufficient_data为数据不足。
     * @param {string} [alarmLevel] 告警历史的告警级别，值为1,2,3,4；1为紧急，2为重要，3为次要，4为提示。
     * @param {string} [namespace] 告警资源对应的命名空间，如ECS服务的资源命名空间为：SYS.ECS；各服务命名空间可查看：“[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [from] 查询告警历史的起始时间，UNIX时间戳，单位毫秒，如：1602501480905；from，to如果不进行赋值，则默认to是当前时间，from是当前时间减7天的时间戳。
     * @param {string} [to] 查询告警历史的截止时间，UNIX时间戳，单位毫秒。from必须小于等于to，如：1603106280905；from，to如果不进行赋值，则默认to是当前时间，from是当前时间减7天的时间戳。
     * @param {string} [start] 分页起始值，类型为integer，默认值为0。
     * @param {string} [limit] 单次查询的条数限制，取值范围(0,100]，默认值为100， 用于限制结果数据条数。
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
     * 查询自定义告警模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询自定义告警模板列表
     * @param {string} [alarmTemplateId] 自定义告警模的ID，如：at1603330892378wkDm77y6B。
     * @param {string} [namespace] 自定义告警模板选择的资源类型。即命名空间，如弹性云服务器的资源命名空间为：SYS.ECS；各服务命名空间可查看：“[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dname] 自定义告警模板选择的资源维度，如：弹性云服务器，则维度为instance_id，各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [start] 分页起始值，类型为integer，默认值为0。
     * @param {string} [limit] 单次查询的条数限制，取值范围(0,100]，默认值为100， 用于限制结果数据条数。
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
     * 查询告警规则列表，可以指定分页条件限制结果数量，可以指定排序规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警规则列表
     * @param {number} [limit] 取值范围(0,100]，默认值为100  用于限制结果数据条数。
     * @param {string} [order] 用于标识结果排序方法。  取值说明，默认值为desc。  asc：升序 desc：降序
     * @param {string} [start] 分页起始值，内容为alarm_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarms(listAlarmsRequest?: ListAlarmsRequest): Promise<ListAlarmsResponse> {
        const options = ParamCreater().listAlarms(listAlarmsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据事件监控名称，查询该事件发生的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询某一事件监控详情
     * @param {string} eventName 事件名称。
     * @param {'EVENT.SYS' | 'EVENT.CUSTOM'} eventType 事件类型，值为EVENT.SYS或EVENT.CUSTOM，EVENT.SYS表示系统事件，EVENT.CUSTOM表示自定义事件。
     * @param {string} [eventSource] 事件名称，值为系统产生的事件名称，或用户自定义上报的事件名称。
     * @param {string} [eventLevel] 事件的级别，值为Critical，Major，Minor，Info；Critical为紧急，Major为重要，Minor为次要，Info为提示。
     * @param {string} [eventUser] 上报事件监控数据时用户的名称，也可为projectID。
     * @param {string} [eventState] 事件的状态，值为normal，warning，incident；normal为正常，warning为警告，incident为故障。
     * @param {number} [from] 查询数据起始时间，UNIX时间戳，单位毫秒；例如：1605952700911。
     * @param {number} [to] 查询数据截止时间UNIX时间戳，单位毫秒。from必须小于to，例如：1606557500911。
     * @param {number} [start] 分页起始值，类型为integer，默认值为0。
     * @param {number} [limit] 单次查询的条数限制，取值范围(0,100]，默认值为100，用于限制结果数据条数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEventDetail(listEventDetailRequest?: ListEventDetailRequest): Promise<ListEventDetailResponse> {
        const options = ParamCreater().listEventDetail(listEventDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询事件监控列表，包括系统事件和自定义事件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询事件监控列表
     * @param {'EVENT.SYS' | 'EVENT.CUSTOM'} [eventType] 事件类型，值为EVENT.SYS或EVENT.CUSTOM，EVENT.SYS表示系统事件，EVENT.CUSTOM表示自定义事件。
     * @param {string} [eventName] 事件名称，值为系统产生的事件名称，或用户自定义上报的事件名称。
     * @param {number} [from] 查询数据起始时间，UNIX时间戳，单位毫秒；例如：1605952700911。
     * @param {number} [to] 查询数据截止时间UNIX时间戳，单位毫秒。from必须小于to，例如：1606557500911。
     * @param {number} [start] 分页起始值，类型为integer，默认值为0。
     * @param {number} [limit] 单次查询的条数限制，取值范围(0,100]，默认值为100，用于限制结果数据条数。
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
     * 查询系统当前可监控指标列表，可以指定指标命名空间、指标名称、维度、排序方式，起始记录和最大记录条数过滤查询结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指标列表
     * @param {string} [dim0] 指标的维度，目前最大支持3个维度，从0开始；维度格式为dim.{i}&#x3D;key,value，最大值为256。 例如：instance_id,6f3c6f91-4b24-4e1b-b7d1-a94ac1cb011d；各服务资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dim1] 指标的维度，目前最大支持3个维度，从0开始；维度格式为dim.{i}&#x3D;key,value，最大值为256。 例如：instance_id,6f3c6f91-4b24-4e1b-b7d1-a94ac1cb011d；各服务资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dim2] 指标的维度，目前最大支持3个维度，从0开始；维度格式为dim.{i}&#x3D;key,value，最大值为256。 例如：instance_id,6f3c6f91-4b24-4e1b-b7d1-a94ac1cb011d；各服务资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {number} [limit] 取值范围(0,1000]，默认值为1000。  用于限制结果数据条数。
     * @param {string} [metricName] 指标名称，例如弹性云服务器监控指标中的cpu_util；各服务的指标名称可查看：“[服务指标名称](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [namespace] 指标命名空间，格式为service.item；service和item必须是字符串，必须以字母开头，只能包含0-9/a-z/A-Z/_，总长度最短为3，最大为32；各服务的命名空间可查看：“[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {'asc' | 'desc'} [order] 用于标识结果排序方法。  取值说明，默认为desc：  asc，升序 desc，降序
     * @param {string} [start] 分页起始值，格式为：namespace.metric_name.key:value 例如：start&#x3D;SYS.ECS.cpu_util.instance_id:d9112af5-6913-4f3b-bd0a-3f96711e004d
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetrics(listMetricsRequest?: ListMetricsRequest): Promise<ListMetricsResponse> {
        const options = ParamCreater().listMetrics(listMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所创建的所有资源分组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有资源分组
     * @param {string} [groupName] 资源分组的名称；长度为1-128，只能包含0-9/a-z/A-Z/_/-或汉字；如：ResourceGroup-Test01。
     * @param {string} [groupId] 资源分组的ID，长度为1-128，只能包含0-9/a-z/A-Z；如：rg16063743652226ew93e64p。
     * @param {string} [status] 资源分组健康状态，值可为health、unhealth、no_alarm_rule；health表示健康，
     * @param {number} [start] 分页起始值，类型为integer，默认值为0。
     * @param {number} [limit] 单次查询的条数限制，取值范围(0,100]，默认值为100， 用于限制结果数据条数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listResourceGroup(listResourceGroupRequest?: ListResourceGroupRequest): Promise<ListResourceGroupResponse> {
        const options = ParamCreater().listResourceGroup(listResourceGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据告警ID查询告警规则信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单条告警规则信息
     * @param {string} alarmId 告警规则的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAlarm(showAlarmRequest?: ShowAlarmRequest): Promise<ShowAlarmResponse> {
        const options = ParamCreater().showAlarm(showAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间范围指定事件类型的主机配置数据，可以通过参数指定需要查询的数据维度。注意：该接口提供给HANA场景下SAP Monitor查询主机配置数据，其他场景下查不到主机配置数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机配置数据
     * @param {string} namespace 指标命名空间，如：弹性云服务器的命名空间为SYS.ECS，文档数据库的命名空间为SYS.DDS，各服务的命名空间可查看：“[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} dim0 指标的第一层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.0&#x3D;key,value，如mongodb_cluster_id,4270ff17-aba3-4138-89fa-820594c39755；key为指标的维度信息，如：文档数据库服务，则第一层维度为mongodb_cluster_id，value为文档数据库实例ID；各服务资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} type 事件类型，只允许字母、下划线、中划线，字母开头，长度不超过64，如instance_host_info。
     * @param {number} from 查询数据起始时间，UNIX时间戳，单位毫秒；如：1607146998177。
     * @param {number} to 查询数据截止时间UNIX时间戳，单位毫秒。from必须小于to；如：1607150598177。
     * @param {string} [dim1] 指标的第二层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.1&#x3D;key,value，如mongos_instance_id,c65d39d7-185c-4616-9aca-ad65703b15f9；key为指标的维度信息，如：文档数据库服务，则第二层维度为mongos_instance_id，value为文档数据库集群实例下的mongos节点ID；各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dim2] 指标的第三层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.2&#x3D;key,value，如mongod_primary_instance_id,5f9498e9-36f8-4317-9ea1-ebe28cba99b4；key为指标的维度信息，如：文档数据库服务，则第三层维度为mongod_primary_instance_id，value为文档数据库实例下的主节点ID；各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dim3] 指标的第四层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.3&#x3D;key,value，如mongod_secondary_instance_id,b46fa2c7-aac6-4ae3-9337-f4ea97f885cb；key为指标的维度信息，如：文档数据库服务，则第四层维度为mongod_secondary_instance_id，value为文档数据库实例下的备节点ID；各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEventData(showEventDataRequest?: ShowEventDataRequest): Promise<ShowEventDataResponse> {
        const options = ParamCreater().showEventData(showEventDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定时间范围指定指标的指定粒度的监控数据，可以通过参数指定需要查询的数据维度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控数据
     * @param {string} namespace 指标命名空间，如：弹性云服务器的命名空间为SYS.ECS，文档数据库的命名空间为SYS.DDS，各服务的命名空间可查看：“[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} metricName 资源的监控指标名称，如：弹性云服务器中的监控指标cpu_util，表示弹性服务器的CPU使用率；文档数据库中的指标mongo001_command_ps，表示command执行频率；各服务的指标名称可查看：“[服务指标名称](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} dim0 指标的第一层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.0&#x3D;key,value，如mongodb_cluster_id,4270ff17-aba3-4138-89fa-820594c39755；key为指标的维度信息，如：文档数据库服务，则第一层维度为mongodb_cluster_id，value为文档数据库实例ID；各服务资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {'max' | 'min' | 'average' | 'sum' | 'variance'} filter 数据聚合方式。支持的值为max, min, average, sum, variance。
     * @param {number} period 指标监控数据的聚合粒度，取值范围：1，300，1200，3600，14400，86400；1为监控资源的实时数据；300为聚合5分钟粒度数据，表示5分钟一个数据点；1200为聚合20分钟粒度数据，表示20分钟一个数据点；3600为聚合1小时粒度数据，表示1小时一个数据点；14400为聚合4小时粒度数据，表示4小时一个数据点；86400为聚合1天粒度数据，表示1天一个数据点；聚合解释可查看：“[聚合含义](https://support.huaweicloud.com/ces_faq/ces_faq_0009.html)”。
     * @param {number} from 查询数据起始时间，UNIX时间戳，单位毫秒。建议from的值相对于当前时间向前偏移至少1个周期。由于聚合运算的过程是将一个聚合周期范围内的数据点聚合到周期起始边界上，如果将from和to的范围设置在聚合周期内，会因为聚合未完成而造成查询数据为空，所以建议from参数相对于当前时间向前偏移至少1个周期。以5分钟聚合周期为例：假设当前时间点为10:35，10:30~10:35之间的原始数据会被聚合到10:30这个点上，所以查询5分钟数据点时from参数应为10:30或之前。云监控会根据所选择的聚合粒度向前取整from参数；如：1607146998177。
     * @param {number} to 查询数据截止时间UNIX时间戳，单位毫秒。from必须小于to；如：1607150598177。
     * @param {string} [dim1] 指标的第二层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.1&#x3D;key,value，如mongos_instance_id,c65d39d7-185c-4616-9aca-ad65703b15f9；key为指标的维度信息，如：文档数据库服务，则第二层维度为mongos_instance_id，value为文档数据库集群实例下的mongos节点ID；各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dim2] 指标的第三层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.2&#x3D;key,value，如mongod_primary_instance_id,5f9498e9-36f8-4317-9ea1-ebe28cba99b4；key为指标的维度信息，如：文档数据库服务，则第三层维度为mongod_primary_instance_id，value为文档数据库实例下的主节点ID；各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dim3] 指标的第四层维度，目前最大支持4个维度，维度编号从0开始；维度格式为dim.3&#x3D;key,value，如mongod_secondary_instance_id,b46fa2c7-aac6-4ae3-9337-f4ea97f885cb；key为指标的维度信息，如：文档数据库服务，则第四层维度为mongod_secondary_instance_id，value为文档数据库实例下的备节点ID；各资源的指标维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetricData(showMetricDataRequest?: ShowMetricDataRequest): Promise<ShowMetricDataResponse> {
        const options = ParamCreater().showMetricData(showMetricDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户可以创建的资源配额总数及当前使用量，当前仅有告警规则一种资源类型。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showQuotas(showQuotasRequest?: ShowQuotasRequest): Promise<ShowQuotasResponse> {
        const options = ParamCreater().showQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据资源分组ID查询资源分组下的资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询资源分组下的资源
     * @param {string} groupId 资源分组ID。
     * @param {string} [status] 资源健康状态，值可为health、unhealth、no_alarm_rule；health表示健康，
     * @param {string} [namespace] 资源类型，即命名空间，如弹性云服务器的资源命名空间为：SYS.ECS；各服务命名空间可查看：“[服务命名空间](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [dname] 资源维度，如：弹性云服务器，则维度为instance_id，各资源的监控维度名称可查看：“[服务指标维度](https://support.huaweicloud.com/usermanual-ces/zh-cn_topic_0202622212.html)”。
     * @param {string} [start] 分页起始值，类型为integer，默认值为0。
     * @param {string} [limit] 单次查询的条数限制，取值范围(0,100]，默认值为100， 用于限制结果数据条数。
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
     * 修改告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改告警规则
     * @param {string} alarmId 告警规则的ID。
     * @param {UpdateAlarmRequestBody} updateAlarmRequestBody 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarm(updateAlarmRequest?: UpdateAlarmRequest): Promise<UpdateAlarmResponse> {
        const options = ParamCreater().updateAlarm(updateAlarmRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动或停止一条告警规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启停告警规则
     * @param {string} alarmId 告警规则的ID。
     * @param {ModifyAlarmActionReq} modifyAlarmActionReq 请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAlarmAction(updateAlarmActionRequest?: UpdateAlarmActionRequest): Promise<UpdateAlarmActionResponse> {
        const options = ParamCreater().updateAlarmAction(updateAlarmActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新自定义告警模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新自定义告警模板
     * @param {string} templateId 需要更新的自定义告警模板ID。
     * @param {UpdateAlarmTemplateRequestBody} updateAlarmTemplateRequestBody 创建自定义告警模板，请求参数。
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
     * 更新资源分组，资源分组支持将各类资源按照业务集中进行分组管理，可以从分组角度查看监控与告警信息，以提升运维效率。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新资源分组
     * @param {string} groupId 资源分组ID。
     * @param {UpdateResourceGroupRequestBody} updateResourceGroupRequestBody 创建资源分组，请求参数。
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
         * 批量查询指定时间范围内指定指标的指定粒度的监控数据，目前最多支持500指标的批量查询。 对于不同的period取值和查询的指标数量，默认的最大查询区间(to-from)不同。 规则为\&quot;指标数量*(to-from)/监控周期&lt;&#x3D;3000\&quot;，若超出阈值，会自动调整from以满足规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchListMetricData(batchListMetricDataRequest?: BatchListMetricDataRequest) {
            const options = {
                method: "POST",
                url: "/V1.0/{project_id}/batch-query-metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchListMetricDataRequest !== null && batchListMetricDataRequest !== undefined) {
                if (batchListMetricDataRequest instanceof BatchListMetricDataRequest) {
                    body = batchListMetricDataRequest.body
                } else {
                    body = batchListMetricDataRequest['body'];
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
         * 创建一条告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlarm(createAlarmRequest?: CreateAlarmRequest) {
            const options = {
                method: "POST",
                url: "/V1.0/{project_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAlarmRequest !== null && createAlarmRequest !== undefined) {
                if (createAlarmRequest instanceof CreateAlarmRequest) {
                    body = createAlarmRequest.body
                } else {
                    body = createAlarmRequest['body'];
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
         * 创建自定义告警模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAlarmTemplate(createAlarmTemplateRequest?: CreateAlarmTemplateRequest) {
            const options = {
                method: "POST",
                url: "/V1.0/{project_id}/alarm-template",
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
         * 上报自定义事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEvents(createEventsRequest?: CreateEventsRequest) {
            const options = {
                method: "POST",
                url: "/V1.0/{project_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEventsRequest !== null && createEventsRequest !== undefined) {
                if (createEventsRequest instanceof CreateEventsRequest) {
                    body = createEventsRequest.body
                } else {
                    body = createEventsRequest['body'];
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
         * 添加一条或多条指标监控数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMetricData(createMetricDataRequest?: CreateMetricDataRequest) {
            const options = {
                method: "POST",
                url: "/V1.0/{project_id}/metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMetricDataRequest !== null && createMetricDataRequest !== undefined) {
                if (createMetricDataRequest instanceof CreateMetricDataRequest) {
                    body = createMetricDataRequest.body
                } else {
                    body = createMetricDataRequest['body'];
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
         * 创建资源分组，资源分组支持将各类资源按照业务集中进行分组管理，可以从分组角度查看监控与告警信息，以提升运维效率。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createResourceGroup(createResourceGroupRequest?: CreateResourceGroupRequest) {
            const options = {
                method: "POST",
                url: "/V1.0/{project_id}/resource-groups",
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
         * 删除一条告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarm(deleteAlarmRequest?: DeleteAlarmRequest) {
            const options = {
                method: "DELETE",
                url: "/V1.0/{project_id}/alarms/{alarm_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmId;

            if (deleteAlarmRequest !== null && deleteAlarmRequest !== undefined) {
                if (deleteAlarmRequest instanceof DeleteAlarmRequest) {
                    alarmId = deleteAlarmRequest.alarmId;
                } else {
                    alarmId = deleteAlarmRequest['alarm_id'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling deleteAlarm.');
            }

            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据ID删除自定义告警模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAlarmTemplate(deleteAlarmTemplateRequest?: DeleteAlarmTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/V1.0/{project_id}/alarm-template/{template_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let templateId;

            if (deleteAlarmTemplateRequest !== null && deleteAlarmTemplateRequest !== undefined) {
                if (deleteAlarmTemplateRequest instanceof DeleteAlarmTemplateRequest) {
                    templateId = deleteAlarmTemplateRequest.templateId;
                } else {
                    templateId = deleteAlarmTemplateRequest['template_id'];
                }
            }

        
            if (templateId === null || templateId === undefined) {
            throw new RequiredError('templateId','Required parameter templateId was null or undefined when calling deleteAlarmTemplate.');
            }

            options.pathParams = { 'template_id': templateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一条资源分组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteResourceGroup(deleteResourceGroupRequest?: DeleteResourceGroupRequest) {
            const options = {
                method: "DELETE",
                url: "/V1.0/{project_id}/resource-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let groupId;

            if (deleteResourceGroupRequest !== null && deleteResourceGroupRequest !== undefined) {
                if (deleteResourceGroupRequest instanceof DeleteResourceGroupRequest) {
                    groupId = deleteResourceGroupRequest.groupId;
                } else {
                    groupId = deleteResourceGroupRequest['group_id'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling deleteResourceGroup.');
            }

            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警历史列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmHistories(listAlarmHistoriesRequest?: ListAlarmHistoriesRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/alarm-histories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let alarmId;
            
            let alarmName;
            
            let alarmStatus;
            
            let alarmLevel;
            
            let namespace;
            
            let from;
            
            let to;
            
            let start;
            
            let limit;

            if (listAlarmHistoriesRequest !== null && listAlarmHistoriesRequest !== undefined) {
                if (listAlarmHistoriesRequest instanceof ListAlarmHistoriesRequest) {
                    groupId = listAlarmHistoriesRequest.groupId;
                    alarmId = listAlarmHistoriesRequest.alarmId;
                    alarmName = listAlarmHistoriesRequest.alarmName;
                    alarmStatus = listAlarmHistoriesRequest.alarmStatus;
                    alarmLevel = listAlarmHistoriesRequest.alarmLevel;
                    namespace = listAlarmHistoriesRequest.namespace;
                    from = listAlarmHistoriesRequest.from;
                    to = listAlarmHistoriesRequest.to;
                    start = listAlarmHistoriesRequest.start;
                    limit = listAlarmHistoriesRequest.limit;
                } else {
                    groupId = listAlarmHistoriesRequest['group_id'];
                    alarmId = listAlarmHistoriesRequest['alarm_id'];
                    alarmName = listAlarmHistoriesRequest['alarm_name'];
                    alarmStatus = listAlarmHistoriesRequest['alarm_status'];
                    alarmLevel = listAlarmHistoriesRequest['alarm_level'];
                    namespace = listAlarmHistoriesRequest['namespace'];
                    from = listAlarmHistoriesRequest['from'];
                    to = listAlarmHistoriesRequest['to'];
                    start = listAlarmHistoriesRequest['start'];
                    limit = listAlarmHistoriesRequest['limit'];
                }
            }

        
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (alarmId !== null && alarmId !== undefined) {
                localVarQueryParameter['alarm_id'] = alarmId;
            }
            if (alarmName !== null && alarmName !== undefined) {
                localVarQueryParameter['alarm_name'] = alarmName;
            }
            if (alarmStatus !== null && alarmStatus !== undefined) {
                localVarQueryParameter['alarm_status'] = alarmStatus;
            }
            if (alarmLevel !== null && alarmLevel !== undefined) {
                localVarQueryParameter['alarm_level'] = alarmLevel;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询自定义告警模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmTemplates(listAlarmTemplatesRequest?: ListAlarmTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/alarm-template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let alarmTemplateId;
            
            let namespace;
            
            let dname;
            
            let start;
            
            let limit;

            if (listAlarmTemplatesRequest !== null && listAlarmTemplatesRequest !== undefined) {
                if (listAlarmTemplatesRequest instanceof ListAlarmTemplatesRequest) {
                    alarmTemplateId = listAlarmTemplatesRequest.alarmTemplateId;
                    namespace = listAlarmTemplatesRequest.namespace;
                    dname = listAlarmTemplatesRequest.dname;
                    start = listAlarmTemplatesRequest.start;
                    limit = listAlarmTemplatesRequest.limit;
                } else {
                    alarmTemplateId = listAlarmTemplatesRequest['alarmTemplateId'];
                    namespace = listAlarmTemplatesRequest['namespace'];
                    dname = listAlarmTemplatesRequest['dname'];
                    start = listAlarmTemplatesRequest['start'];
                    limit = listAlarmTemplatesRequest['limit'];
                }
            }

        
            if (alarmTemplateId !== null && alarmTemplateId !== undefined) {
                localVarQueryParameter['alarmTemplateId'] = alarmTemplateId;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (dname !== null && dname !== undefined) {
                localVarQueryParameter['dname'] = dname;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询告警规则列表，可以指定分页条件限制结果数量，可以指定排序规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarms(listAlarmsRequest?: ListAlarmsRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/alarms",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let order;
            
            let start;

            if (listAlarmsRequest !== null && listAlarmsRequest !== undefined) {
                if (listAlarmsRequest instanceof ListAlarmsRequest) {
                    limit = listAlarmsRequest.limit;
                    order = listAlarmsRequest.order;
                    start = listAlarmsRequest.start;
                } else {
                    limit = listAlarmsRequest['limit'];
                    order = listAlarmsRequest['order'];
                    start = listAlarmsRequest['start'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据事件监控名称，查询该事件发生的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEventDetail(listEventDetailRequest?: ListEventDetailRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/event/{event_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let eventName;
            
            let eventType;
            
            let eventSource;
            
            let eventLevel;
            
            let eventUser;
            
            let eventState;
            
            let from;
            
            let to;
            
            let start;
            
            let limit;

            if (listEventDetailRequest !== null && listEventDetailRequest !== undefined) {
                if (listEventDetailRequest instanceof ListEventDetailRequest) {
                    eventName = listEventDetailRequest.eventName;
                    eventType = listEventDetailRequest.eventType;
                    eventSource = listEventDetailRequest.eventSource;
                    eventLevel = listEventDetailRequest.eventLevel;
                    eventUser = listEventDetailRequest.eventUser;
                    eventState = listEventDetailRequest.eventState;
                    from = listEventDetailRequest.from;
                    to = listEventDetailRequest.to;
                    start = listEventDetailRequest.start;
                    limit = listEventDetailRequest.limit;
                } else {
                    eventName = listEventDetailRequest['event_name'];
                    eventType = listEventDetailRequest['event_type'];
                    eventSource = listEventDetailRequest['event_source'];
                    eventLevel = listEventDetailRequest['event_level'];
                    eventUser = listEventDetailRequest['event_user'];
                    eventState = listEventDetailRequest['event_state'];
                    from = listEventDetailRequest['from'];
                    to = listEventDetailRequest['to'];
                    start = listEventDetailRequest['start'];
                    limit = listEventDetailRequest['limit'];
                }
            }

        
            if (eventName === null || eventName === undefined) {
            throw new RequiredError('eventName','Required parameter eventName was null or undefined when calling listEventDetail.');
            }
            if (eventType === null || eventType === undefined) {
                throw new RequiredError('eventType','Required parameter eventType was null or undefined when calling listEventDetail.');
            }
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (eventSource !== null && eventSource !== undefined) {
                localVarQueryParameter['event_source'] = eventSource;
            }
            if (eventLevel !== null && eventLevel !== undefined) {
                localVarQueryParameter['event_level'] = eventLevel;
            }
            if (eventUser !== null && eventUser !== undefined) {
                localVarQueryParameter['event_user'] = eventUser;
            }
            if (eventState !== null && eventState !== undefined) {
                localVarQueryParameter['event_state'] = eventState;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'event_name': eventName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询事件监控列表，包括系统事件和自定义事件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEvents(listEventsRequest?: ListEventsRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let eventType;
            
            let eventName;
            
            let from;
            
            let to;
            
            let start;
            
            let limit;

            if (listEventsRequest !== null && listEventsRequest !== undefined) {
                if (listEventsRequest instanceof ListEventsRequest) {
                    eventType = listEventsRequest.eventType;
                    eventName = listEventsRequest.eventName;
                    from = listEventsRequest.from;
                    to = listEventsRequest.to;
                    start = listEventsRequest.start;
                    limit = listEventsRequest.limit;
                } else {
                    eventType = listEventsRequest['event_type'];
                    eventName = listEventsRequest['event_name'];
                    from = listEventsRequest['from'];
                    to = listEventsRequest['to'];
                    start = listEventsRequest['start'];
                    limit = listEventsRequest['limit'];
                }
            }

        
            if (eventType !== null && eventType !== undefined) {
                localVarQueryParameter['event_type'] = eventType;
            }
            if (eventName !== null && eventName !== undefined) {
                localVarQueryParameter['event_name'] = eventName;
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询系统当前可监控指标列表，可以指定指标命名空间、指标名称、维度、排序方式，起始记录和最大记录条数过滤查询结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetrics(listMetricsRequest?: ListMetricsRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/metrics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let dim0;
            
            let dim1;
            
            let dim2;
            
            let limit;
            
            let metricName;
            
            let namespace;
            
            let order;
            
            let start;

            if (listMetricsRequest !== null && listMetricsRequest !== undefined) {
                if (listMetricsRequest instanceof ListMetricsRequest) {
                    dim0 = listMetricsRequest.dim0;
                    dim1 = listMetricsRequest.dim1;
                    dim2 = listMetricsRequest.dim2;
                    limit = listMetricsRequest.limit;
                    metricName = listMetricsRequest.metricName;
                    namespace = listMetricsRequest.namespace;
                    order = listMetricsRequest.order;
                    start = listMetricsRequest.start;
                } else {
                    dim0 = listMetricsRequest['dim.0'];
                    dim1 = listMetricsRequest['dim.1'];
                    dim2 = listMetricsRequest['dim.2'];
                    limit = listMetricsRequest['limit'];
                    metricName = listMetricsRequest['metric_name'];
                    namespace = listMetricsRequest['namespace'];
                    order = listMetricsRequest['order'];
                    start = listMetricsRequest['start'];
                }
            }

        
            if (dim0 !== null && dim0 !== undefined) {
                localVarQueryParameter['dim.0'] = dim0;
            }
            if (dim1 !== null && dim1 !== undefined) {
                localVarQueryParameter['dim.1'] = dim1;
            }
            if (dim2 !== null && dim2 !== undefined) {
                localVarQueryParameter['dim.2'] = dim2;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所创建的所有资源分组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listResourceGroup(listResourceGroupRequest?: ListResourceGroupRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/resource-groups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupName;
            
            let groupId;
            
            let status;
            
            let start;
            
            let limit;

            if (listResourceGroupRequest !== null && listResourceGroupRequest !== undefined) {
                if (listResourceGroupRequest instanceof ListResourceGroupRequest) {
                    groupName = listResourceGroupRequest.groupName;
                    groupId = listResourceGroupRequest.groupId;
                    status = listResourceGroupRequest.status;
                    start = listResourceGroupRequest.start;
                    limit = listResourceGroupRequest.limit;
                } else {
                    groupName = listResourceGroupRequest['group_name'];
                    groupId = listResourceGroupRequest['group_id'];
                    status = listResourceGroupRequest['status'];
                    start = listResourceGroupRequest['start'];
                    limit = listResourceGroupRequest['limit'];
                }
            }

        
            if (groupName !== null && groupName !== undefined) {
                localVarQueryParameter['group_name'] = groupName;
            }
            if (groupId !== null && groupId !== undefined) {
                localVarQueryParameter['group_id'] = groupId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据告警ID查询告警规则信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAlarm(showAlarmRequest?: ShowAlarmRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/alarms/{alarm_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let alarmId;

            if (showAlarmRequest !== null && showAlarmRequest !== undefined) {
                if (showAlarmRequest instanceof ShowAlarmRequest) {
                    alarmId = showAlarmRequest.alarmId;
                } else {
                    alarmId = showAlarmRequest['alarm_id'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling showAlarm.');
            }

            options.pathParams = { 'alarm_id': alarmId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间范围指定事件类型的主机配置数据，可以通过参数指定需要查询的数据维度。注意：该接口提供给HANA场景下SAP Monitor查询主机配置数据，其他场景下查不到主机配置数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEventData(showEventDataRequest?: ShowEventDataRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/event-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let namespace;
            
            let dim0;
            
            let type;
            
            let from;
            
            let to;
            
            let dim1;
            
            let dim2;
            
            let dim3;

            if (showEventDataRequest !== null && showEventDataRequest !== undefined) {
                if (showEventDataRequest instanceof ShowEventDataRequest) {
                    namespace = showEventDataRequest.namespace;
                    dim0 = showEventDataRequest.dim0;
                    type = showEventDataRequest.type;
                    from = showEventDataRequest.from;
                    to = showEventDataRequest.to;
                    dim1 = showEventDataRequest.dim1;
                    dim2 = showEventDataRequest.dim2;
                    dim3 = showEventDataRequest.dim3;
                } else {
                    namespace = showEventDataRequest['namespace'];
                    dim0 = showEventDataRequest['dim.0'];
                    type = showEventDataRequest['type'];
                    from = showEventDataRequest['from'];
                    to = showEventDataRequest['to'];
                    dim1 = showEventDataRequest['dim.1'];
                    dim2 = showEventDataRequest['dim.2'];
                    dim3 = showEventDataRequest['dim.3'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showEventData.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (dim0 === null || dim0 === undefined) {
                throw new RequiredError('dim0','Required parameter dim0 was null or undefined when calling showEventData.');
            }
            if (dim0 !== null && dim0 !== undefined) {
                localVarQueryParameter['dim.0'] = dim0;
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showEventData.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling showEventData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling showEventData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (dim1 !== null && dim1 !== undefined) {
                localVarQueryParameter['dim.1'] = dim1;
            }
            if (dim2 !== null && dim2 !== undefined) {
                localVarQueryParameter['dim.2'] = dim2;
            }
            if (dim3 !== null && dim3 !== undefined) {
                localVarQueryParameter['dim.3'] = dim3;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定时间范围指定指标的指定粒度的监控数据，可以通过参数指定需要查询的数据维度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetricData(showMetricDataRequest?: ShowMetricDataRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let namespace;
            
            let metricName;
            
            let dim0;
            
            let filter;
            
            let period;
            
            let from;
            
            let to;
            
            let dim1;
            
            let dim2;
            
            let dim3;

            if (showMetricDataRequest !== null && showMetricDataRequest !== undefined) {
                if (showMetricDataRequest instanceof ShowMetricDataRequest) {
                    namespace = showMetricDataRequest.namespace;
                    metricName = showMetricDataRequest.metricName;
                    dim0 = showMetricDataRequest.dim0;
                    filter = showMetricDataRequest.filter;
                    period = showMetricDataRequest.period;
                    from = showMetricDataRequest.from;
                    to = showMetricDataRequest.to;
                    dim1 = showMetricDataRequest.dim1;
                    dim2 = showMetricDataRequest.dim2;
                    dim3 = showMetricDataRequest.dim3;
                } else {
                    namespace = showMetricDataRequest['namespace'];
                    metricName = showMetricDataRequest['metric_name'];
                    dim0 = showMetricDataRequest['dim.0'];
                    filter = showMetricDataRequest['filter'];
                    period = showMetricDataRequest['period'];
                    from = showMetricDataRequest['from'];
                    to = showMetricDataRequest['to'];
                    dim1 = showMetricDataRequest['dim.1'];
                    dim2 = showMetricDataRequest['dim.2'];
                    dim3 = showMetricDataRequest['dim.3'];
                }
            }

        
            if (namespace === null || namespace === undefined) {
                throw new RequiredError('namespace','Required parameter namespace was null or undefined when calling showMetricData.');
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (metricName === null || metricName === undefined) {
                throw new RequiredError('metricName','Required parameter metricName was null or undefined when calling showMetricData.');
            }
            if (metricName !== null && metricName !== undefined) {
                localVarQueryParameter['metric_name'] = metricName;
            }
            if (dim0 === null || dim0 === undefined) {
                throw new RequiredError('dim0','Required parameter dim0 was null or undefined when calling showMetricData.');
            }
            if (dim0 !== null && dim0 !== undefined) {
                localVarQueryParameter['dim.0'] = dim0;
            }
            if (filter === null || filter === undefined) {
                throw new RequiredError('filter','Required parameter filter was null or undefined when calling showMetricData.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (period === null || period === undefined) {
                throw new RequiredError('period','Required parameter period was null or undefined when calling showMetricData.');
            }
            if (period !== null && period !== undefined) {
                localVarQueryParameter['period'] = period;
            }
            if (from === null || from === undefined) {
                throw new RequiredError('from','Required parameter from was null or undefined when calling showMetricData.');
            }
            if (from !== null && from !== undefined) {
                localVarQueryParameter['from'] = from;
            }
            if (to === null || to === undefined) {
                throw new RequiredError('to','Required parameter to was null or undefined when calling showMetricData.');
            }
            if (to !== null && to !== undefined) {
                localVarQueryParameter['to'] = to;
            }
            if (dim1 !== null && dim1 !== undefined) {
                localVarQueryParameter['dim.1'] = dim1;
            }
            if (dim2 !== null && dim2 !== undefined) {
                localVarQueryParameter['dim.2'] = dim2;
            }
            if (dim3 !== null && dim3 !== undefined) {
                localVarQueryParameter['dim.3'] = dim3;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户可以创建的资源配额总数及当前使用量，当前仅有告警规则一种资源类型。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showQuotas() {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/quotas",
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
         * 根据资源分组ID查询资源分组下的资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showResourceGroup(showResourceGroupRequest?: ShowResourceGroupRequest) {
            const options = {
                method: "GET",
                url: "/V1.0/{project_id}/resource-groups/{group_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let groupId;
            
            let status;
            
            let namespace;
            
            let dname;
            
            let start;
            
            let limit;

            if (showResourceGroupRequest !== null && showResourceGroupRequest !== undefined) {
                if (showResourceGroupRequest instanceof ShowResourceGroupRequest) {
                    groupId = showResourceGroupRequest.groupId;
                    status = showResourceGroupRequest.status;
                    namespace = showResourceGroupRequest.namespace;
                    dname = showResourceGroupRequest.dname;
                    start = showResourceGroupRequest.start;
                    limit = showResourceGroupRequest.limit;
                } else {
                    groupId = showResourceGroupRequest['group_id'];
                    status = showResourceGroupRequest['status'];
                    namespace = showResourceGroupRequest['namespace'];
                    dname = showResourceGroupRequest['dname'];
                    start = showResourceGroupRequest['start'];
                    limit = showResourceGroupRequest['limit'];
                }
            }

        
            if (groupId === null || groupId === undefined) {
            throw new RequiredError('groupId','Required parameter groupId was null or undefined when calling showResourceGroup.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (namespace !== null && namespace !== undefined) {
                localVarQueryParameter['namespace'] = namespace;
            }
            if (dname !== null && dname !== undefined) {
                localVarQueryParameter['dname'] = dname;
            }
            if (start !== null && start !== undefined) {
                localVarQueryParameter['start'] = start;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'group_id': groupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarm(updateAlarmRequest?: UpdateAlarmRequest) {
            const options = {
                method: "PUT",
                url: "/V1.0/{project_id}/alarms/{alarm_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (updateAlarmRequest !== null && updateAlarmRequest !== undefined) {
                if (updateAlarmRequest instanceof UpdateAlarmRequest) {
                    alarmId = updateAlarmRequest.alarmId;
                    body = updateAlarmRequest.body
                } else {
                    alarmId = updateAlarmRequest['alarm_id'];
                    body = updateAlarmRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling updateAlarm.');
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
         * 启动或停止一条告警规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmAction(updateAlarmActionRequest?: UpdateAlarmActionRequest) {
            const options = {
                method: "PUT",
                url: "/V1.0/{project_id}/alarms/{alarm_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let alarmId;

            if (updateAlarmActionRequest !== null && updateAlarmActionRequest !== undefined) {
                if (updateAlarmActionRequest instanceof UpdateAlarmActionRequest) {
                    alarmId = updateAlarmActionRequest.alarmId;
                    body = updateAlarmActionRequest.body
                } else {
                    alarmId = updateAlarmActionRequest['alarm_id'];
                    body = updateAlarmActionRequest['body'];
                }
            }

        
            if (alarmId === null || alarmId === undefined) {
            throw new RequiredError('alarmId','Required parameter alarmId was null or undefined when calling updateAlarmAction.');
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
         * 更新自定义告警模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAlarmTemplate(updateAlarmTemplateRequest?: UpdateAlarmTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/V1.0/{project_id}/alarm-template/{template_id}",
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
         * 更新资源分组，资源分组支持将各类资源按照业务集中进行分组管理，可以从分组角度查看监控与告警信息，以提升运维效率。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateResourceGroup(updateResourceGroupRequest?: UpdateResourceGroupRequest) {
            const options = {
                method: "PUT",
                url: "/V1.0/{project_id}/resource-groups/{group_id}",
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