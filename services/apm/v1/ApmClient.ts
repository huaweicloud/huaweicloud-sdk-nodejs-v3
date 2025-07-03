import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AccessAkskVO } from './model/AccessAkskVO';
import { AccessPointModel } from './model/AccessPointModel';
import { AgentDeleteParam } from './model/AgentDeleteParam';
import { AgentSearchParam } from './model/AgentSearchParam';
import { AgentStatusChangeParam } from './model/AgentStatusChangeParam';
import { AlarmDataListRequest } from './model/AlarmDataListRequest';
import { AlarmDataVO } from './model/AlarmDataVO';
import { AlarmNotifyListRequest } from './model/AlarmNotifyListRequest';
import { AppInfo } from './model/AppInfo';
import { AppNodeModel } from './model/AppNodeModel';
import { AppSearchParam } from './model/AppSearchParam';
import { BusinessEnvRequest } from './model/BusinessEnvRequest';
import { BusinessNodeModel } from './model/BusinessNodeModel';
import { BusinessTopoRequest } from './model/BusinessTopoRequest';
import { ChangeAgentStatusRequest } from './model/ChangeAgentStatusRequest';
import { ChangeAgentStatusResponse } from './model/ChangeAgentStatusResponse';
import { ClientSpanInfo } from './model/ClientSpanInfo';
import { CmdbTagEntity } from './model/CmdbTagEntity';
import { CollectorCategoryInfo } from './model/CollectorCategoryInfo';
import { CollectorConfigModel } from './model/CollectorConfigModel';
import { ConfigItem } from './model/ConfigItem';
import { ConfigItemOverride } from './model/ConfigItemOverride';
import { ConfigItemValue } from './model/ConfigItemValue';
import { CreateAkSkRequest } from './model/CreateAkSkRequest';
import { CreateAkSkResponse } from './model/CreateAkSkResponse';
import { CreateAkskModel } from './model/CreateAkskModel';
import { CreateBusinessModel } from './model/CreateBusinessModel';
import { CreateBusinessRequest } from './model/CreateBusinessRequest';
import { CreateBusinessResponse } from './model/CreateBusinessResponse';
import { DeleteAgentRequest } from './model/DeleteAgentRequest';
import { DeleteAgentResponse } from './model/DeleteAgentResponse';
import { DeleteAkSkRequest } from './model/DeleteAkSkRequest';
import { DeleteAkSkResponse } from './model/DeleteAkSkResponse';
import { DeleteAppRequest } from './model/DeleteAppRequest';
import { DeleteAppResponse } from './model/DeleteAppResponse';
import { DetailViewConfigModel } from './model/DetailViewConfigModel';
import { DetailViewItem } from './model/DetailViewItem';
import { DiscardInfo } from './model/DiscardInfo';
import { EnvEntry } from './model/EnvEntry';
import { EnvNodeModel } from './model/EnvNodeModel';
import { EnvTopoRequest } from './model/EnvTopoRequest';
import { FieldItem } from './model/FieldItem';
import { FlameLineTreeInfo } from './model/FlameLineTreeInfo';
import { FrontAlarmNotifyResult } from './model/FrontAlarmNotifyResult';
import { FrontCell } from './model/FrontCell';
import { FrontLine } from './model/FrontLine';
import { FrontPoint } from './model/FrontPoint';
import { FrontRow } from './model/FrontRow';
import { GetClobDetailParam } from './model/GetClobDetailParam';
import { GetEnvMonitorItemListParam } from './model/GetEnvMonitorItemListParam';
import { InstanceInfo } from './model/InstanceInfo';
import { InstanceSearchParam } from './model/InstanceSearchParam';
import { LineViewConfigModel } from './model/LineViewConfigModel';
import { LineViewItem } from './model/LineViewItem';
import { ListAkSkRequest } from './model/ListAkSkRequest';
import { ListAkSkResponse } from './model/ListAkSkResponse';
import { ListAlarmDataRequest } from './model/ListAlarmDataRequest';
import { ListAlarmDataResponse } from './model/ListAlarmDataResponse';
import { ListAlarmNotifyRequest } from './model/ListAlarmNotifyRequest';
import { ListAlarmNotifyResponse } from './model/ListAlarmNotifyResponse';
import { ListAppEnvsRequest } from './model/ListAppEnvsRequest';
import { ListAppEnvsResponse } from './model/ListAppEnvsResponse';
import { ListAppsRequest } from './model/ListAppsRequest';
import { ListAppsResponse } from './model/ListAppsResponse';
import { ListBusinessEnvRequest } from './model/ListBusinessEnvRequest';
import { ListBusinessEnvResponse } from './model/ListBusinessEnvResponse';
import { ListBusinessRequest } from './model/ListBusinessRequest';
import { ListBusinessResponse } from './model/ListBusinessResponse';
import { ListEnvInstancesRequest } from './model/ListEnvInstancesRequest';
import { ListEnvInstancesResponse } from './model/ListEnvInstancesResponse';
import { ListEnvMonitorItemRequest } from './model/ListEnvMonitorItemRequest';
import { ListEnvMonitorItemResponse } from './model/ListEnvMonitorItemResponse';
import { ListEnvTagsRequest } from './model/ListEnvTagsRequest';
import { ListEnvTagsResponse } from './model/ListEnvTagsResponse';
import { ListOpenRegionRequest } from './model/ListOpenRegionRequest';
import { ListOpenRegionResponse } from './model/ListOpenRegionResponse';
import { ListSupportedRegionRequest } from './model/ListSupportedRegionRequest';
import { ListSupportedRegionResponse } from './model/ListSupportedRegionResponse';
import { MonitorItem } from './model/MonitorItem';
import { MonitorItemEntity } from './model/MonitorItemEntity';
import { ObjectArrayPatterns } from './model/ObjectArrayPatterns';
import { OptionValue } from './model/OptionValue';
import { OrderParam } from './model/OrderParam';
import { RawTableParam } from './model/RawTableParam';
import { RawTableView } from './model/RawTableView';
import { RegionParam } from './model/RegionParam';
import { SaveMonitorItemConfigRequest } from './model/SaveMonitorItemConfigRequest';
import { SaveMonitorItemConfigResponse } from './model/SaveMonitorItemConfigResponse';
import { SaveMonitorItemParam } from './model/SaveMonitorItemParam';
import { SearchAgentRequest } from './model/SearchAgentRequest';
import { SearchAgentResponse } from './model/SearchAgentResponse';
import { SearchApplicationRequest } from './model/SearchApplicationRequest';
import { SearchApplicationResponse } from './model/SearchApplicationResponse';
import { SearchBusinessTopologyRequest } from './model/SearchBusinessTopologyRequest';
import { SearchBusinessTopologyResponse } from './model/SearchBusinessTopologyResponse';
import { SearchEnvTopologyRequest } from './model/SearchEnvTopologyRequest';
import { SearchEnvTopologyResponse } from './model/SearchEnvTopologyResponse';
import { SearchTransactionConfigRequest } from './model/SearchTransactionConfigRequest';
import { SearchTransactionConfigResponse } from './model/SearchTransactionConfigResponse';
import { SearchTransactionRequest } from './model/SearchTransactionRequest';
import { SearchTransactionResponse } from './model/SearchTransactionResponse';
import { ShowAccessPointRequest } from './model/ShowAccessPointRequest';
import { ShowAccessPointResponse } from './model/ShowAccessPointResponse';
import { ShowAkSksRequest } from './model/ShowAkSksRequest';
import { ShowAkSksResponse } from './model/ShowAkSksResponse';
import { ShowBusinessDetailRequest } from './model/ShowBusinessDetailRequest';
import { ShowBusinessDetailResponse } from './model/ShowBusinessDetailResponse';
import { ShowClobDetailRequest } from './model/ShowClobDetailRequest';
import { ShowClobDetailResponse } from './model/ShowClobDetailResponse';
import { ShowEnvMonitorItemsRequest } from './model/ShowEnvMonitorItemsRequest';
import { ShowEnvMonitorItemsResponse } from './model/ShowEnvMonitorItemsResponse';
import { ShowEventDetailRequest } from './model/ShowEventDetailRequest';
import { ShowEventDetailResponse } from './model/ShowEventDetailResponse';
import { ShowFlameLineTreeRequest } from './model/ShowFlameLineTreeRequest';
import { ShowFlameLineTreeResponse } from './model/ShowFlameLineTreeResponse';
import { ShowMasterAddressRequest } from './model/ShowMasterAddressRequest';
import { ShowMasterAddressResponse } from './model/ShowMasterAddressResponse';
import { ShowMonitorItemDetailRequest } from './model/ShowMonitorItemDetailRequest';
import { ShowMonitorItemDetailResponse } from './model/ShowMonitorItemDetailResponse';
import { ShowMonitorItemViewConfigRequest } from './model/ShowMonitorItemViewConfigRequest';
import { ShowMonitorItemViewConfigResponse } from './model/ShowMonitorItemViewConfigResponse';
import { ShowRawTableRequest } from './model/ShowRawTableRequest';
import { ShowRawTableResponse } from './model/ShowRawTableResponse';
import { ShowSpanSearchRequest } from './model/ShowSpanSearchRequest';
import { ShowSpanSearchResponse } from './model/ShowSpanSearchResponse';
import { ShowSubBusinessDetailRequest } from './model/ShowSubBusinessDetailRequest';
import { ShowSubBusinessDetailResponse } from './model/ShowSubBusinessDetailResponse';
import { ShowSumTableRequest } from './model/ShowSumTableRequest';
import { ShowSumTableResponse } from './model/ShowSumTableResponse';
import { ShowTokenRequest } from './model/ShowTokenRequest';
import { ShowTokenResponse } from './model/ShowTokenResponse';
import { ShowTopologyRequest } from './model/ShowTopologyRequest';
import { ShowTopologyResponse } from './model/ShowTopologyResponse';
import { ShowTopologyTreeRequest } from './model/ShowTopologyTreeRequest';
import { ShowTopologyTreeResponse } from './model/ShowTopologyTreeResponse';
import { ShowTraceEventsRequest } from './model/ShowTraceEventsRequest';
import { ShowTraceEventsResponse } from './model/ShowTraceEventsResponse';
import { ShowTransactionDetailRequest } from './model/ShowTransactionDetailRequest';
import { ShowTransactionDetailResponse } from './model/ShowTransactionDetailResponse';
import { ShowTrendRequest } from './model/ShowTrendRequest';
import { ShowTrendResponse } from './model/ShowTrendResponse';
import { SpanEventInfo } from './model/SpanEventInfo';
import { SumTableParam } from './model/SumTableParam';
import { SumTableView } from './model/SumTableView';
import { TagParam } from './model/TagParam';
import { TopoLine } from './model/TopoLine';
import { TopoNode } from './model/TopoNode';
import { TopologyTree } from './model/TopologyTree';
import { TraceSearchParam } from './model/TraceSearchParam';
import { TraceTopologyLine } from './model/TraceTopologyLine';
import { TraceTopologyLineInfo } from './model/TraceTopologyLineInfo';
import { TraceTopologyNode } from './model/TraceTopologyNode';
import { TransactionConfigItem } from './model/TransactionConfigItem';
import { TransactionConfigSearchRequest } from './model/TransactionConfigSearchRequest';
import { TreeNode } from './model/TreeNode';
import { TrendParam } from './model/TrendParam';
import { TrendView } from './model/TrendView';
import { TxDetailRequest } from './model/TxDetailRequest';
import { TxItemVo } from './model/TxItemVo';
import { TxLine } from './model/TxLine';
import { TxNode } from './model/TxNode';
import { TxSearchRequest } from './model/TxSearchRequest';
import { ViewBase } from './model/ViewBase';
import { ViewRow } from './model/ViewRow';

export class ApmClient {
    public static newBuilder(): ClientBuilder<ApmClient> {
            let client = new ClientBuilder<ApmClient>(newClient);
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
     * 创建aksk。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建aksk
     * @param {CreateAkskModel} [createAkskModel] 创建aksk入参
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAkSk(createAkSkRequest?: CreateAkSkRequest): Promise<CreateAkSkResponse> {
        const options = ParamCreater().createAkSk(createAkSkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除aksk。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除aksk
     * @param {string} ak 需要删除的ak信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAkSk(deleteAkSkRequest?: DeleteAkSkRequest): Promise<DeleteAkSkResponse> {
        const options = ParamCreater().deleteAkSk(deleteAkSkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户的aksk。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户的aksk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAkSks(showAkSksRequest?: ShowAkSksRequest): Promise<ShowAkSksResponse> {
        const options = ParamCreater().showAkSks();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询系统中存在的告警。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警列表
     * @param {number} xBusinessId 应用id。
     * @param {AlarmDataListRequest} alarmDataListRequest 告警消息请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmData(listAlarmDataRequest?: ListAlarmDataRequest): Promise<ListAlarmDataResponse> {
        const options = ParamCreater().listAlarmData(listAlarmDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个告警的触发详情与历史。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询告警消息列表
     * @param {number} xBusinessId 应用id，用于鉴权。
     * @param {AlarmNotifyListRequest} alarmNotifyListRequest 查询告警消息列表请求参数模型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAlarmNotify(listAlarmNotifyRequest?: ListAlarmNotifyRequest): Promise<ListAlarmNotifyResponse> {
        const options = ParamCreater().listAlarmNotify(listAlarmNotifyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 改变指定实例的采集状态：开启和关闭。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更改实例的采集状态
     * @param {number} xBusinessId 应用id。
     * @param {AgentStatusChangeParam} [agentStatusChangeParam] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeAgentStatus(changeAgentStatusRequest?: ChangeAgentStatusRequest): Promise<ChangeAgentStatusResponse> {
        const options = ParamCreater().changeAgentStatus(changeAgentStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除agent
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除agent
     * @param {number} xBusinessId 应用id。
     * @param {AgentDeleteParam} [agentDeleteParam] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAgent(deleteAgentRequest?: DeleteAgentRequest): Promise<DeleteAgentResponse> {
        const options = ParamCreater().deleteAgent(deleteAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取该用户创建的ak/sk列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取ak/sk
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAkSk(listAkSkRequest?: ListAkSkRequest): Promise<ListAkSkResponse> {
        const options = ParamCreater().listAkSk();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询对应用户下的应用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBusiness(listBusinessRequest?: ListBusinessRequest): Promise<ListBusinessResponse> {
        const options = ParamCreater().listBusiness();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监控项列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控项列表
     * @param {number} xBusinessId 应用id。
     * @param {GetEnvMonitorItemListParam} [getEnvMonitorItemListParam] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvMonitorItem(listEnvMonitorItemRequest?: ListEnvMonitorItemRequest): Promise<ListEnvMonitorItemResponse> {
        const options = ParamCreater().listEnvMonitorItem(listEnvMonitorItemRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存监控项。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存监控项
     * @param {number} xBusinessId 应用id。
     * @param {SaveMonitorItemParam} saveMonitorItemParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveMonitorItemConfig(saveMonitorItemConfigRequest?: SaveMonitorItemConfigRequest): Promise<SaveMonitorItemConfigResponse> {
        const options = ParamCreater().saveMonitorItemConfig(saveMonitorItemConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于搜索应用下所有探针情况。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用下所有探针
     * @param {number} xBusinessId 应用id。
     * @param {AgentSearchParam} [agentSearchParam] agent搜索参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchAgent(searchAgentRequest?: SearchAgentRequest): Promise<SearchAgentResponse> {
        const options = ParamCreater().searchAgent(searchAgentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对指定区域下的组件和环境及其探针情况进行搜索。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对指定区域下的组件和环境及其探针情况进行搜索
     * @param {number} xBusinessId 应用id。
     * @param {AppSearchParam} appSearchParam 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchApplication(searchApplicationRequest?: SearchApplicationRequest): Promise<SearchApplicationResponse> {
        const options = ParamCreater().searchApplication(searchApplicationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据region名称获取该region下的master服务podlb地址信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询master地址
     * @param {string} regionName region英文名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMasterAddress(showMasterAddressRequest?: ShowMasterAddressRequest): Promise<ShowMasterAddressResponse> {
        const options = ParamCreater().showMasterAddress(showMasterAddressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于删除指定的组件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据组件id删除指定的组件
     * @param {number} applicationId 组件id。
     * @param {number} xBusinessId 应用id，用于鉴权。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteApp(deleteAppRequest?: DeleteAppRequest): Promise<DeleteAppResponse> {
        const options = ParamCreater().deleteApp(deleteAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件下的环境列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件下的环境列表
     * @param {number} appId 组件id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppEnvs(listAppEnvsRequest?: ListAppEnvsRequest): Promise<ListAppEnvsResponse> {
        const options = ParamCreater().listAppEnvs(listAppEnvsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取组件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取组件列表
     * @param {number} businessId 应用id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listApps(listAppsRequest?: ListAppsRequest): Promise<ListAppsResponse> {
        const options = ParamCreater().listApps(listAppsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询环境标签接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询环境标签
     * @param {number} xBusinessId 应用id。
     * @param {TagParam} tagParam 查询环境标签入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvTags(listEnvTagsRequest?: ListEnvTagsRequest): Promise<ListEnvTagsResponse> {
        const options = ParamCreater().listEnvTags(listEnvTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个应用的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个应用的详情
     * @param {number} businessId 应用id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBusinessDetail(showBusinessDetailRequest?: ShowBusinessDetailRequest): Promise<ShowBusinessDetailResponse> {
        const options = ParamCreater().showBusinessDetail(showBusinessDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询单个子应用详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询子应用详情
     * @param {number} subBusinessId 子应用id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubBusinessDetail(showSubBusinessDetailRequest?: ShowSubBusinessDetailRequest): Promise<ShowSubBusinessDetailResponse> {
        const options = ParamCreater().showSubBusinessDetail(showSubBusinessDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取应用树。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用树
     * @param {number} businessId 应用id。
     * @param {number} xBusinessId 应用id。
     * @param {string} [regionId] 区域id。
     * @param {number} [envTagId] 环境标签id。
     * @param {string} [envKeyword] 环境关键字。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopologyTree(showTopologyTreeRequest?: ShowTopologyTreeRequest): Promise<ShowTopologyTreeResponse> {
        const options = ParamCreater().showTopologyTree(showTopologyTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @param {number} xBusinessId 应用id。
     * @param {FlameLineTreeInfo} flameLineTreeInfo 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlameLineTree(showFlameLineTreeRequest?: ShowFlameLineTreeRequest): Promise<ShowFlameLineTreeResponse> {
        const options = ParamCreater().showFlameLineTree(showFlameLineTreeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询用户开通的region信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询开通的region
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOpenRegion(listOpenRegionRequest?: ListOpenRegionRequest): Promise<ListOpenRegionResponse> {
        const options = ParamCreater().listOpenRegion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有的支持的region信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有的支持的region
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportedRegion(listSupportedRegionRequest?: ListSupportedRegionRequest): Promise<ListSupportedRegionResponse> {
        const options = ParamCreater().listSupportedRegion();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询应用级别全局拓扑图信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用全局拓扑图
     * @param {number} xBusinessId 应用id。
     * @param {BusinessTopoRequest} businessTopoRequest 获取应用拓扑数据的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchBusinessTopology(searchBusinessTopologyRequest?: SearchBusinessTopologyRequest): Promise<SearchBusinessTopologyResponse> {
        const options = ParamCreater().searchBusinessTopology(searchBusinessTopologyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询组件环境级别全局拓扑图信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询组件环境拓扑图
     * @param {number} xBusinessId 应用id。
     * @param {EnvTopoRequest} envTopoRequest 获取组件环境拓扑数据的请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchEnvTopology(searchEnvTopologyRequest?: SearchEnvTopologyRequest): Promise<SearchEnvTopologyResponse> {
        const options = ParamCreater().searchEnvTopology(searchEnvTopologyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建链路追踪应用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建链路追踪应用
     * @param {CreateBusinessModel} tracingBusinessModel 应用请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBusiness(createBusinessRequest?: CreateBusinessRequest): Promise<CreateBusinessResponse> {
        const options = ParamCreater().createBusiness(createBusinessRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取链路追踪应用接入地址
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取链路追踪应用接入地址
     * @param {string} businessId 应用id。
     * @param {number} xBusinessId 应用id。
     * @param {AccessPointModel} accessPointModel 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAccessPoint(showAccessPointRequest?: ShowAccessPointRequest): Promise<ShowAccessPointResponse> {
        const options = ParamCreater().showAccessPoint(showAccessPointRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取链路追踪应用的token
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取链路追踪应用的token
     * @param {string} businessId 应用id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showToken(showTokenRequest?: ShowTokenRequest): Promise<ShowTokenResponse> {
        const options = ParamCreater().showToken(showTokenRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所选Region下设置了URL跟踪的环境列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询URL跟踪Region环境列表
     * @param {number} xBusinessId 应用id。
     * @param {BusinessEnvRequest} businessEnvRequest 获取Region环境入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBusinessEnv(listBusinessEnvRequest?: ListBusinessEnvRequest): Promise<ListBusinessEnvResponse> {
        const options = ParamCreater().listBusinessEnv(listBusinessEnvRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前被调用的URL跟踪视图列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询URL跟踪视图列表
     * @param {number} xBusinessId 应用id。
     * @param {TxSearchRequest} txSearchRequest 获取URL跟踪视图列表入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchTransaction(searchTransactionRequest?: SearchTransactionRequest): Promise<SearchTransactionResponse> {
        const options = ParamCreater().searchTransaction(searchTransactionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询已配置好的URL跟踪配置列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询URL跟踪配置列表
     * @param {number} xBusinessId 应用id。
     * @param {TransactionConfigSearchRequest} transactionConfigSearchRequest 获取URL跟踪配置数据入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public searchTransactionConfig(searchTransactionConfigRequest?: SearchTransactionConfigRequest): Promise<SearchTransactionConfigResponse> {
        const options = ParamCreater().searchTransactionConfig(searchTransactionConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某条URL跟踪视图详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询URL跟踪视图详情
     * @param {number} xBusinessId 应用id。
     * @param {TxDetailRequest} txDetailRequest 获取URL跟踪视图详情入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTransactionDetail(showTransactionDetailRequest?: ShowTransactionDetailRequest): Promise<ShowTransactionDetailResponse> {
        const options = ParamCreater().showTransactionDetail(showTransactionDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取实例信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取实例信息列表
     * @param {number} xBusinessId 应用id。
     * @param {InstanceSearchParam} instanceSearchParam 获取实例信息列表入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEnvInstances(listEnvInstancesRequest?: ListEnvInstancesRequest): Promise<ListEnvInstancesResponse> {
        const options = ParamCreater().listEnvInstances(listEnvInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取原始数据详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取原始数据详情
     * @param {number} xBusinessId 应用id。
     * @param {GetClobDetailParam} getClobDetailParam 获取原始数据详情入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClobDetail(showClobDetailRequest?: ShowClobDetailRequest): Promise<ShowClobDetailResponse> {
        const options = ParamCreater().showClobDetail(showClobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取监控项信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取监控项信息
     * @param {number} envId 环境id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnvMonitorItems(showEnvMonitorItemsRequest?: ShowEnvMonitorItemsRequest): Promise<ShowEnvMonitorItemsResponse> {
        const options = ParamCreater().showEnvMonitorItems(showEnvMonitorItemsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取event的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取event的详情
     * @param {string} traceId trace id。
     * @param {string} spanId span id。
     * @param {string} eventId event id。
     * @param {number} envId 环境id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEventDetail(showEventDetailRequest?: ShowEventDetailRequest): Promise<ShowEventDetailResponse> {
        const options = ParamCreater().showEventDetail(showEventDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取一个监控项的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取一个监控项的详情
     * @param {number} monitorItemId 监控项ID
     * @param {number} envId 环境ID
     * @param {number} xBusinessId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMonitorItemDetail(showMonitorItemDetailRequest?: ShowMonitorItemDetailRequest): Promise<ShowMonitorItemDetailResponse> {
        const options = ParamCreater().showMonitorItemDetail(showMonitorItemDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询监控项配置信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询监控项配置信息
     * @param {number} envId 环境id。
     * @param {number} collectorId 采集器id。
     * @param {number} xBusinessId 应用id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMonitorItemViewConfig(showMonitorItemViewConfigRequest?: ShowMonitorItemViewConfigRequest): Promise<ShowMonitorItemViewConfigResponse> {
        const options = ParamCreater().showMonitorItemViewConfig(showMonitorItemViewConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取原始数据表格。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取原始数据表格
     * @param {number} xBusinessId 应用id。
     * @param {RawTableParam} rawTableParam 获取原始数据表格入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRawTable(showRawTableRequest?: ShowRawTableRequest): Promise<ShowRawTableResponse> {
        const options = ParamCreater().showRawTable(showRawTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * span数据查询接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询span数据
     * @param {number} xBusinessId 应用id。
     * @param {TraceSearchParam} traceSearchParam 查询span数据请求参数模型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSpanSearch(showSpanSearchRequest?: ShowSpanSearchRequest): Promise<ShowSpanSearchResponse> {
        const options = ParamCreater().showSpanSearch(showSpanSearchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取汇总表格数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取汇总表格数据
     * @param {number} xBusinessId 应用id。
     * @param {SumTableParam} sumTableParam 获取汇总表格数据入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSumTable(showSumTableRequest?: ShowSumTableRequest): Promise<ShowSumTableResponse> {
        const options = ParamCreater().showSumTable(showSumTableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 调用链拓扑图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 调用链拓扑图
     * @param {string} traceId 调用链traceId。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTopology(showTopologyRequest?: ShowTopologyRequest): Promise<ShowTopologyResponse> {
        const options = ParamCreater().showTopology(showTopologyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取一个trace的所有调用链数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取一个trace的所有调用链数据
     * @param {string} traceId 调用链ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTraceEvents(showTraceEventsRequest?: ShowTraceEventsRequest): Promise<ShowTraceEventsResponse> {
        const options = ParamCreater().showTraceEvents(showTraceEventsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取趋势图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取趋势图
     * @param {number} xBusinessId 应用id。
     * @param {TrendParam} trendParam 查询趋势图入参。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTrend(showTrendRequest?: ShowTrendRequest): Promise<ShowTrendResponse> {
        const options = ParamCreater().showTrend(showTrendRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建aksk。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAkSk(createAkSkRequest?: CreateAkSkRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/access-keys",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAkSkRequest !== null && createAkSkRequest !== undefined) {
                if (createAkSkRequest instanceof CreateAkSkRequest) {
                    body = createAkSkRequest.body
                } else {
                    body = createAkSkRequest['body'];
                }
            }

        
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除aksk。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAkSk(deleteAkSkRequest?: DeleteAkSkRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/apm2/access-keys/{ak}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let ak;

            if (deleteAkSkRequest !== null && deleteAkSkRequest !== undefined) {
                if (deleteAkSkRequest instanceof DeleteAkSkRequest) {
                    ak = deleteAkSkRequest.ak;
                } else {
                    ak = deleteAkSkRequest['ak'];
                }
            }

        
            if (ak === null || ak === undefined) {
            throw new RequiredError('ak','Required parameter ak was null or undefined when calling deleteAkSk.');
            }

            options.pathParams = { 'ak': ak, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户的aksk。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAkSks() {
            const options = {
                method: "GET",
                url: "/v1/apm2/access-keys",
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
         * 查询系统中存在的告警。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmData(listAlarmDataRequest?: ListAlarmDataRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/alarm/data/get-alarm-data-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (listAlarmDataRequest !== null && listAlarmDataRequest !== undefined) {
                if (listAlarmDataRequest instanceof ListAlarmDataRequest) {
                    xBusinessId = listAlarmDataRequest.xBusinessId;
                    body = listAlarmDataRequest.body
                } else {
                    xBusinessId = listAlarmDataRequest['x-business-id'];
                    body = listAlarmDataRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个告警的触发详情与历史。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAlarmNotify(listAlarmNotifyRequest?: ListAlarmNotifyRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/alarm/data/get-alarm-notify-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (listAlarmNotifyRequest !== null && listAlarmNotifyRequest !== undefined) {
                if (listAlarmNotifyRequest instanceof ListAlarmNotifyRequest) {
                    xBusinessId = listAlarmNotifyRequest.xBusinessId;
                    body = listAlarmNotifyRequest.body
                } else {
                    xBusinessId = listAlarmNotifyRequest['x-business-id'];
                    body = listAlarmNotifyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 改变指定实例的采集状态：开启和关闭。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeAgentStatus(changeAgentStatusRequest?: ChangeAgentStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/apm-service/agent-mgr/change-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (changeAgentStatusRequest !== null && changeAgentStatusRequest !== undefined) {
                if (changeAgentStatusRequest instanceof ChangeAgentStatusRequest) {
                    xBusinessId = changeAgentStatusRequest.xBusinessId;
                    body = changeAgentStatusRequest.body
                } else {
                    xBusinessId = changeAgentStatusRequest['x-business-id'];
                    body = changeAgentStatusRequest['body'];
                }
            }

        
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除agent
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAgent(deleteAgentRequest?: DeleteAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/apm-service/agent-mgr/delete-agent",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (deleteAgentRequest !== null && deleteAgentRequest !== undefined) {
                if (deleteAgentRequest instanceof DeleteAgentRequest) {
                    xBusinessId = deleteAgentRequest.xBusinessId;
                    body = deleteAgentRequest.body
                } else {
                    xBusinessId = deleteAgentRequest['x-business-id'];
                    body = deleteAgentRequest['body'];
                }
            }

        
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取该用户创建的ak/sk列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAkSk() {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/systemmng/get-ak-sk-list",
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
         * 该接口用于查询对应用户下的应用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBusiness() {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/cmdb/business/get-business-list",
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
         * 查询监控项列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvMonitorItem(listEnvMonitorItemRequest?: ListEnvMonitorItemRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/apm-service/monitor-item-mgr/get-env-monitor-item-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (listEnvMonitorItemRequest !== null && listEnvMonitorItemRequest !== undefined) {
                if (listEnvMonitorItemRequest instanceof ListEnvMonitorItemRequest) {
                    xBusinessId = listEnvMonitorItemRequest.xBusinessId;
                    body = listEnvMonitorItemRequest.body
                } else {
                    xBusinessId = listEnvMonitorItemRequest['x-business-id'];
                    body = listEnvMonitorItemRequest['body'];
                }
            }

        
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 保存监控项。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveMonitorItemConfig(saveMonitorItemConfigRequest?: SaveMonitorItemConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/apm-service/monitor-item-mgr/save-monitor-item-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (saveMonitorItemConfigRequest !== null && saveMonitorItemConfigRequest !== undefined) {
                if (saveMonitorItemConfigRequest instanceof SaveMonitorItemConfigRequest) {
                    xBusinessId = saveMonitorItemConfigRequest.xBusinessId;
                    body = saveMonitorItemConfigRequest.body
                } else {
                    xBusinessId = saveMonitorItemConfigRequest['x-business-id'];
                    body = saveMonitorItemConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于搜索应用下所有探针情况。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchAgent(searchAgentRequest?: SearchAgentRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/apm-service/agent-mgr/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (searchAgentRequest !== null && searchAgentRequest !== undefined) {
                if (searchAgentRequest instanceof SearchAgentRequest) {
                    xBusinessId = searchAgentRequest.xBusinessId;
                    body = searchAgentRequest.body
                } else {
                    xBusinessId = searchAgentRequest['x-business-id'];
                    body = searchAgentRequest['body'];
                }
            }

        
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对指定区域下的组件和环境及其探针情况进行搜索。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchApplication(searchApplicationRequest?: SearchApplicationRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/apm-service/app-mgr/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (searchApplicationRequest !== null && searchApplicationRequest !== undefined) {
                if (searchApplicationRequest instanceof SearchApplicationRequest) {
                    xBusinessId = searchApplicationRequest.xBusinessId;
                    body = searchApplicationRequest.body
                } else {
                    xBusinessId = searchApplicationRequest['x-business-id'];
                    body = searchApplicationRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据region名称获取该region下的master服务podlb地址信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMasterAddress(showMasterAddressRequest?: ShowMasterAddressRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/systemmng/get-master-address",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionName;

            if (showMasterAddressRequest !== null && showMasterAddressRequest !== undefined) {
                if (showMasterAddressRequest instanceof ShowMasterAddressRequest) {
                    regionName = showMasterAddressRequest.regionName;
                } else {
                    regionName = showMasterAddressRequest['region_name'];
                }
            }

        
            if (regionName === null || regionName === undefined) {
                throw new RequiredError('regionName','Required parameter regionName was null or undefined when calling showMasterAddress.');
            }
            if (regionName !== null && regionName !== undefined) {
                localVarQueryParameter['region_name'] = regionName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于删除指定的组件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteApp(deleteAppRequest?: DeleteAppRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/apm2/openapi/cmdb/apps/delete-app/{application_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let applicationId;
            
            let xBusinessId;

            if (deleteAppRequest !== null && deleteAppRequest !== undefined) {
                if (deleteAppRequest instanceof DeleteAppRequest) {
                    applicationId = deleteAppRequest.applicationId;
                    xBusinessId = deleteAppRequest.xBusinessId;
                } else {
                    applicationId = deleteAppRequest['application_id'];
                    xBusinessId = deleteAppRequest['x-business-id'];
                }
            }

        
            if (applicationId === null || applicationId === undefined) {
            throw new RequiredError('applicationId','Required parameter applicationId was null or undefined when calling deleteApp.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.pathParams = { 'application_id': applicationId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件下的环境列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppEnvs(listAppEnvsRequest?: ListAppEnvsRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/cmdb/envs/get-app-envs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let appId;
            
            let xBusinessId;

            if (listAppEnvsRequest !== null && listAppEnvsRequest !== undefined) {
                if (listAppEnvsRequest instanceof ListAppEnvsRequest) {
                    appId = listAppEnvsRequest.appId;
                    xBusinessId = listAppEnvsRequest.xBusinessId;
                } else {
                    appId = listAppEnvsRequest['app_id'];
                    xBusinessId = listAppEnvsRequest['x-business-id'];
                }
            }

        
            if (appId === null || appId === undefined) {
                throw new RequiredError('appId','Required parameter appId was null or undefined when calling listAppEnvs.');
            }
            if (appId !== null && appId !== undefined) {
                localVarQueryParameter['app_id'] = appId;
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取组件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listApps(listAppsRequest?: ListAppsRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/cmdb/apps/get-apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let businessId;
            
            let xBusinessId;

            if (listAppsRequest !== null && listAppsRequest !== undefined) {
                if (listAppsRequest instanceof ListAppsRequest) {
                    businessId = listAppsRequest.businessId;
                    xBusinessId = listAppsRequest.xBusinessId;
                } else {
                    businessId = listAppsRequest['business_id'];
                    xBusinessId = listAppsRequest['x-business-id'];
                }
            }

        
            if (businessId === null || businessId === undefined) {
                throw new RequiredError('businessId','Required parameter businessId was null or undefined when calling listApps.');
            }
            if (businessId !== null && businessId !== undefined) {
                localVarQueryParameter['business_id'] = businessId;
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询环境标签接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvTags(listEnvTagsRequest?: ListEnvTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/cmdb/tag/get-env-tag-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (listEnvTagsRequest !== null && listEnvTagsRequest !== undefined) {
                if (listEnvTagsRequest instanceof ListEnvTagsRequest) {
                    xBusinessId = listEnvTagsRequest.xBusinessId;
                    body = listEnvTagsRequest.body
                } else {
                    xBusinessId = listEnvTagsRequest['x-business-id'];
                    body = listEnvTagsRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个应用的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBusinessDetail(showBusinessDetailRequest?: ShowBusinessDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/cmdb/business/get-business-detail/{business_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let businessId;
            
            let xBusinessId;

            if (showBusinessDetailRequest !== null && showBusinessDetailRequest !== undefined) {
                if (showBusinessDetailRequest instanceof ShowBusinessDetailRequest) {
                    businessId = showBusinessDetailRequest.businessId;
                    xBusinessId = showBusinessDetailRequest.xBusinessId;
                } else {
                    businessId = showBusinessDetailRequest['business_id'];
                    xBusinessId = showBusinessDetailRequest['x-business-id'];
                }
            }

        
            if (businessId === null || businessId === undefined) {
            throw new RequiredError('businessId','Required parameter businessId was null or undefined when calling showBusinessDetail.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.pathParams = { 'business_id': businessId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询单个子应用详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubBusinessDetail(showSubBusinessDetailRequest?: ShowSubBusinessDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/cmdb/sub-business/get-sub-business-detail/{sub_business_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let subBusinessId;
            
            let xBusinessId;

            if (showSubBusinessDetailRequest !== null && showSubBusinessDetailRequest !== undefined) {
                if (showSubBusinessDetailRequest instanceof ShowSubBusinessDetailRequest) {
                    subBusinessId = showSubBusinessDetailRequest.subBusinessId;
                    xBusinessId = showSubBusinessDetailRequest.xBusinessId;
                } else {
                    subBusinessId = showSubBusinessDetailRequest['sub_business_id'];
                    xBusinessId = showSubBusinessDetailRequest['x-business-id'];
                }
            }

        
            if (subBusinessId === null || subBusinessId === undefined) {
            throw new RequiredError('subBusinessId','Required parameter subBusinessId was null or undefined when calling showSubBusinessDetail.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.pathParams = { 'sub_business_id': subBusinessId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取应用树。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopologyTree(showTopologyTreeRequest?: ShowTopologyTreeRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/cmdb/topology-trees/get-topology-trees",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let businessId;
            
            let xBusinessId;
            
            let regionId;
            
            let envTagId;
            
            let envKeyword;

            if (showTopologyTreeRequest !== null && showTopologyTreeRequest !== undefined) {
                if (showTopologyTreeRequest instanceof ShowTopologyTreeRequest) {
                    businessId = showTopologyTreeRequest.businessId;
                    xBusinessId = showTopologyTreeRequest.xBusinessId;
                    regionId = showTopologyTreeRequest.regionId;
                    envTagId = showTopologyTreeRequest.envTagId;
                    envKeyword = showTopologyTreeRequest.envKeyword;
                } else {
                    businessId = showTopologyTreeRequest['business_id'];
                    xBusinessId = showTopologyTreeRequest['x-business-id'];
                    regionId = showTopologyTreeRequest['region_id'];
                    envTagId = showTopologyTreeRequest['env_tag_id'];
                    envKeyword = showTopologyTreeRequest['env_keyword'];
                }
            }

        
            if (businessId === null || businessId === undefined) {
                throw new RequiredError('businessId','Required parameter businessId was null or undefined when calling showTopologyTree.');
            }
            if (businessId !== null && businessId !== undefined) {
                localVarQueryParameter['business_id'] = businessId;
            }
            if (regionId !== null && regionId !== undefined) {
                localVarQueryParameter['region_id'] = regionId;
            }
            if (envTagId !== null && envTagId !== undefined) {
                localVarQueryParameter['env_tag_id'] = envTagId;
            }
            if (envKeyword !== null && envKeyword !== undefined) {
                localVarQueryParameter['env_keyword'] = envKeyword;
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlameLineTree(showFlameLineTreeRequest?: ShowFlameLineTreeRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/profiling/flame-line-tree",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showFlameLineTreeRequest !== null && showFlameLineTreeRequest !== undefined) {
                if (showFlameLineTreeRequest instanceof ShowFlameLineTreeRequest) {
                    xBusinessId = showFlameLineTreeRequest.xBusinessId;
                    body = showFlameLineTreeRequest.body
                } else {
                    xBusinessId = showFlameLineTreeRequest['x-business-id'];
                    body = showFlameLineTreeRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询用户开通的region信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOpenRegion() {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/region/get-opened-region",
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
         * 查询所有的支持的region信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportedRegion() {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/region/get-all-supported-region",
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
         * 查询应用级别全局拓扑图信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchBusinessTopology(searchBusinessTopologyRequest?: SearchBusinessTopologyRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/topology/business-search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (searchBusinessTopologyRequest !== null && searchBusinessTopologyRequest !== undefined) {
                if (searchBusinessTopologyRequest instanceof SearchBusinessTopologyRequest) {
                    xBusinessId = searchBusinessTopologyRequest.xBusinessId;
                    body = searchBusinessTopologyRequest.body
                } else {
                    xBusinessId = searchBusinessTopologyRequest['x-business-id'];
                    body = searchBusinessTopologyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询组件环境级别全局拓扑图信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchEnvTopology(searchEnvTopologyRequest?: SearchEnvTopologyRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/topology/env-search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (searchEnvTopologyRequest !== null && searchEnvTopologyRequest !== undefined) {
                if (searchEnvTopologyRequest instanceof SearchEnvTopologyRequest) {
                    xBusinessId = searchEnvTopologyRequest.xBusinessId;
                    body = searchEnvTopologyRequest.body
                } else {
                    xBusinessId = searchEnvTopologyRequest['x-business-id'];
                    body = searchEnvTopologyRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建链路追踪应用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBusiness(createBusinessRequest?: CreateBusinessRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/tracing/business/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createBusinessRequest !== null && createBusinessRequest !== undefined) {
                if (createBusinessRequest instanceof CreateBusinessRequest) {
                    body = createBusinessRequest.body
                } else {
                    body = createBusinessRequest['body'];
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
         * 获取链路追踪应用接入地址
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAccessPoint(showAccessPointRequest?: ShowAccessPointRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/tracing/access/get-access-point/{business_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let businessId;
            
            let xBusinessId;

            if (showAccessPointRequest !== null && showAccessPointRequest !== undefined) {
                if (showAccessPointRequest instanceof ShowAccessPointRequest) {
                    businessId = showAccessPointRequest.businessId;
                    xBusinessId = showAccessPointRequest.xBusinessId;
                    body = showAccessPointRequest.body
                } else {
                    businessId = showAccessPointRequest['business_id'];
                    xBusinessId = showAccessPointRequest['x-business-id'];
                    body = showAccessPointRequest['body'];
                }
            }

        
            if (businessId === null || businessId === undefined) {
            throw new RequiredError('businessId','Required parameter businessId was null or undefined when calling showAccessPoint.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'business_id': businessId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取链路追踪应用的token
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showToken(showTokenRequest?: ShowTokenRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/tracing/business/token/{business_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let businessId;
            
            let xBusinessId;

            if (showTokenRequest !== null && showTokenRequest !== undefined) {
                if (showTokenRequest instanceof ShowTokenRequest) {
                    businessId = showTokenRequest.businessId;
                    xBusinessId = showTokenRequest.xBusinessId;
                } else {
                    businessId = showTokenRequest['business_id'];
                    xBusinessId = showTokenRequest['x-business-id'];
                }
            }

        
            if (businessId === null || businessId === undefined) {
            throw new RequiredError('businessId','Required parameter businessId was null or undefined when calling showToken.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.pathParams = { 'business_id': businessId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所选Region下设置了URL跟踪的环境列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBusinessEnv(listBusinessEnvRequest?: ListBusinessEnvRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/transaction/business-env",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (listBusinessEnvRequest !== null && listBusinessEnvRequest !== undefined) {
                if (listBusinessEnvRequest instanceof ListBusinessEnvRequest) {
                    xBusinessId = listBusinessEnvRequest.xBusinessId;
                    body = listBusinessEnvRequest.body
                } else {
                    xBusinessId = listBusinessEnvRequest['x-business-id'];
                    body = listBusinessEnvRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前被调用的URL跟踪视图列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchTransaction(searchTransactionRequest?: SearchTransactionRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/transaction/search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (searchTransactionRequest !== null && searchTransactionRequest !== undefined) {
                if (searchTransactionRequest instanceof SearchTransactionRequest) {
                    xBusinessId = searchTransactionRequest.xBusinessId;
                    body = searchTransactionRequest.body
                } else {
                    xBusinessId = searchTransactionRequest['x-business-id'];
                    body = searchTransactionRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询已配置好的URL跟踪配置列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        searchTransactionConfig(searchTransactionConfigRequest?: SearchTransactionConfigRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/transaction/transaction-config-search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (searchTransactionConfigRequest !== null && searchTransactionConfigRequest !== undefined) {
                if (searchTransactionConfigRequest instanceof SearchTransactionConfigRequest) {
                    xBusinessId = searchTransactionConfigRequest.xBusinessId;
                    body = searchTransactionConfigRequest.body
                } else {
                    xBusinessId = searchTransactionConfigRequest['x-business-id'];
                    body = searchTransactionConfigRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某条URL跟踪视图详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTransactionDetail(showTransactionDetailRequest?: ShowTransactionDetailRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/transaction/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showTransactionDetailRequest !== null && showTransactionDetailRequest !== undefined) {
                if (showTransactionDetailRequest instanceof ShowTransactionDetailRequest) {
                    xBusinessId = showTransactionDetailRequest.xBusinessId;
                    body = showTransactionDetailRequest.body
                } else {
                    xBusinessId = showTransactionDetailRequest['x-business-id'];
                    body = showTransactionDetailRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取实例信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEnvInstances(listEnvInstancesRequest?: ListEnvInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/mainview/get-env-instance-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (listEnvInstancesRequest !== null && listEnvInstancesRequest !== undefined) {
                if (listEnvInstancesRequest instanceof ListEnvInstancesRequest) {
                    xBusinessId = listEnvInstancesRequest.xBusinessId;
                    body = listEnvInstancesRequest.body
                } else {
                    xBusinessId = listEnvInstancesRequest['x-business-id'];
                    body = listEnvInstancesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取原始数据详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClobDetail(showClobDetailRequest?: ShowClobDetailRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/metric/get-clob-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showClobDetailRequest !== null && showClobDetailRequest !== undefined) {
                if (showClobDetailRequest instanceof ShowClobDetailRequest) {
                    xBusinessId = showClobDetailRequest.xBusinessId;
                    body = showClobDetailRequest.body
                } else {
                    xBusinessId = showClobDetailRequest['x-business-id'];
                    body = showClobDetailRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取监控项信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnvMonitorItems(showEnvMonitorItemsRequest?: ShowEnvMonitorItemsRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/view/mainview/get-env-monitor-item-list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let envId;
            
            let xBusinessId;

            if (showEnvMonitorItemsRequest !== null && showEnvMonitorItemsRequest !== undefined) {
                if (showEnvMonitorItemsRequest instanceof ShowEnvMonitorItemsRequest) {
                    envId = showEnvMonitorItemsRequest.envId;
                    xBusinessId = showEnvMonitorItemsRequest.xBusinessId;
                } else {
                    envId = showEnvMonitorItemsRequest['env_id'];
                    xBusinessId = showEnvMonitorItemsRequest['x-business-id'];
                }
            }

        
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling showEnvMonitorItems.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取event的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEventDetail(showEventDetailRequest?: ShowEventDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/view/trace/get-event-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let traceId;
            
            let spanId;
            
            let eventId;
            
            let envId;

            if (showEventDetailRequest !== null && showEventDetailRequest !== undefined) {
                if (showEventDetailRequest instanceof ShowEventDetailRequest) {
                    traceId = showEventDetailRequest.traceId;
                    spanId = showEventDetailRequest.spanId;
                    eventId = showEventDetailRequest.eventId;
                    envId = showEventDetailRequest.envId;
                } else {
                    traceId = showEventDetailRequest['trace_id'];
                    spanId = showEventDetailRequest['span_id'];
                    eventId = showEventDetailRequest['event_id'];
                    envId = showEventDetailRequest['env_id'];
                }
            }

        
            if (traceId === null || traceId === undefined) {
                throw new RequiredError('traceId','Required parameter traceId was null or undefined when calling showEventDetail.');
            }
            if (traceId !== null && traceId !== undefined) {
                localVarQueryParameter['trace_id'] = traceId;
            }
            if (spanId === null || spanId === undefined) {
                throw new RequiredError('spanId','Required parameter spanId was null or undefined when calling showEventDetail.');
            }
            if (spanId !== null && spanId !== undefined) {
                localVarQueryParameter['span_id'] = spanId;
            }
            if (eventId === null || eventId === undefined) {
                throw new RequiredError('eventId','Required parameter eventId was null or undefined when calling showEventDetail.');
            }
            if (eventId !== null && eventId !== undefined) {
                localVarQueryParameter['event_id'] = eventId;
            }
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling showEventDetail.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取一个监控项的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMonitorItemDetail(showMonitorItemDetailRequest?: ShowMonitorItemDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/apm-service/monitor-item-mgr/get-monitor-item-detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let monitorItemId;
            
            let envId;
            
            let xBusinessId;

            if (showMonitorItemDetailRequest !== null && showMonitorItemDetailRequest !== undefined) {
                if (showMonitorItemDetailRequest instanceof ShowMonitorItemDetailRequest) {
                    monitorItemId = showMonitorItemDetailRequest.monitorItemId;
                    envId = showMonitorItemDetailRequest.envId;
                    xBusinessId = showMonitorItemDetailRequest.xBusinessId;
                } else {
                    monitorItemId = showMonitorItemDetailRequest['monitor_item_id'];
                    envId = showMonitorItemDetailRequest['env_id'];
                    xBusinessId = showMonitorItemDetailRequest['x-business-id'];
                }
            }

        
            if (monitorItemId === null || monitorItemId === undefined) {
                throw new RequiredError('monitorItemId','Required parameter monitorItemId was null or undefined when calling showMonitorItemDetail.');
            }
            if (monitorItemId !== null && monitorItemId !== undefined) {
                localVarQueryParameter['monitor_item_id'] = monitorItemId;
            }
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling showMonitorItemDetail.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询监控项配置信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMonitorItemViewConfig(showMonitorItemViewConfigRequest?: ShowMonitorItemViewConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/view/config/get-monitor-item-view-config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let envId;
            
            let collectorId;
            
            let xBusinessId;

            if (showMonitorItemViewConfigRequest !== null && showMonitorItemViewConfigRequest !== undefined) {
                if (showMonitorItemViewConfigRequest instanceof ShowMonitorItemViewConfigRequest) {
                    envId = showMonitorItemViewConfigRequest.envId;
                    collectorId = showMonitorItemViewConfigRequest.collectorId;
                    xBusinessId = showMonitorItemViewConfigRequest.xBusinessId;
                } else {
                    envId = showMonitorItemViewConfigRequest['env_id'];
                    collectorId = showMonitorItemViewConfigRequest['collector_id'];
                    xBusinessId = showMonitorItemViewConfigRequest['x-business-id'];
                }
            }

        
            if (envId === null || envId === undefined) {
                throw new RequiredError('envId','Required parameter envId was null or undefined when calling showMonitorItemViewConfig.');
            }
            if (envId !== null && envId !== undefined) {
                localVarQueryParameter['env_id'] = envId;
            }
            if (collectorId === null || collectorId === undefined) {
                throw new RequiredError('collectorId','Required parameter collectorId was null or undefined when calling showMonitorItemViewConfig.');
            }
            if (collectorId !== null && collectorId !== undefined) {
                localVarQueryParameter['collector_id'] = collectorId;
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取原始数据表格。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRawTable(showRawTableRequest?: ShowRawTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/metric/raw-table",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showRawTableRequest !== null && showRawTableRequest !== undefined) {
                if (showRawTableRequest instanceof ShowRawTableRequest) {
                    xBusinessId = showRawTableRequest.xBusinessId;
                    body = showRawTableRequest.body
                } else {
                    xBusinessId = showRawTableRequest['x-business-id'];
                    body = showRawTableRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * span数据查询接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSpanSearch(showSpanSearchRequest?: ShowSpanSearchRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/trace/span-search",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showSpanSearchRequest !== null && showSpanSearchRequest !== undefined) {
                if (showSpanSearchRequest instanceof ShowSpanSearchRequest) {
                    xBusinessId = showSpanSearchRequest.xBusinessId;
                    body = showSpanSearchRequest.body
                } else {
                    xBusinessId = showSpanSearchRequest['x-business-id'];
                    body = showSpanSearchRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取汇总表格数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSumTable(showSumTableRequest?: ShowSumTableRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/metric/sum-table",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showSumTableRequest !== null && showSumTableRequest !== undefined) {
                if (showSumTableRequest instanceof ShowSumTableRequest) {
                    xBusinessId = showSumTableRequest.xBusinessId;
                    body = showSumTableRequest.body
                } else {
                    xBusinessId = showSumTableRequest['x-business-id'];
                    body = showSumTableRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 调用链拓扑图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTopology(showTopologyRequest?: ShowTopologyRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/view/trace/topology",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let traceId;

            if (showTopologyRequest !== null && showTopologyRequest !== undefined) {
                if (showTopologyRequest instanceof ShowTopologyRequest) {
                    traceId = showTopologyRequest.traceId;
                } else {
                    traceId = showTopologyRequest['trace_id'];
                }
            }

        
            if (traceId === null || traceId === undefined) {
                throw new RequiredError('traceId','Required parameter traceId was null or undefined when calling showTopology.');
            }
            if (traceId !== null && traceId !== undefined) {
                localVarQueryParameter['trace_id'] = traceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取一个trace的所有调用链数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTraceEvents(showTraceEventsRequest?: ShowTraceEventsRequest) {
            const options = {
                method: "GET",
                url: "/v1/apm2/openapi/view/trace/get-trace-events",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let traceId;

            if (showTraceEventsRequest !== null && showTraceEventsRequest !== undefined) {
                if (showTraceEventsRequest instanceof ShowTraceEventsRequest) {
                    traceId = showTraceEventsRequest.traceId;
                } else {
                    traceId = showTraceEventsRequest['trace_id'];
                }
            }

        
            if (traceId === null || traceId === undefined) {
                throw new RequiredError('traceId','Required parameter traceId was null or undefined when calling showTraceEvents.');
            }
            if (traceId !== null && traceId !== undefined) {
                localVarQueryParameter['trace_id'] = traceId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取趋势图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTrend(showTrendRequest?: ShowTrendRequest) {
            const options = {
                method: "POST",
                url: "/v1/apm2/openapi/view/metric/trend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xBusinessId;

            if (showTrendRequest !== null && showTrendRequest !== undefined) {
                if (showTrendRequest instanceof ShowTrendRequest) {
                    xBusinessId = showTrendRequest.xBusinessId;
                    body = showTrendRequest.body
                } else {
                    xBusinessId = showTrendRequest['x-business-id'];
                    body = showTrendRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xBusinessId !== undefined && xBusinessId !== null) {
                localVarHeaderParameter['x-business-id'] = String(xBusinessId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): ApmClient {
    return new ApmClient(client);
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