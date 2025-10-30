import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ChargeMode } from './model/ChargeMode';
import { ComputeSpec } from './model/ComputeSpec';
import { Condition } from './model/Condition';
import { CreateEdgeSite } from './model/CreateEdgeSite';
import { CreateEdgeSiteRequest } from './model/CreateEdgeSiteRequest';
import { CreateEdgeSiteRequestBody } from './model/CreateEdgeSiteRequestBody';
import { CreateEdgeSiteResponse } from './model/CreateEdgeSiteResponse';
import { CreateLocation } from './model/CreateLocation';
import { DeleteEdgeSiteRequest } from './model/DeleteEdgeSiteRequest';
import { DeleteEdgeSiteResponse } from './model/DeleteEdgeSiteResponse';
import { EdgeSiteDetail } from './model/EdgeSiteDetail';
import { Effect } from './model/Effect';
import { ListEdgeSiteMetricsRequest } from './model/ListEdgeSiteMetricsRequest';
import { ListEdgeSiteMetricsResponse } from './model/ListEdgeSiteMetricsResponse';
import { ListEdgeSitesRequest } from './model/ListEdgeSitesRequest';
import { ListEdgeSitesResponse } from './model/ListEdgeSitesResponse';
import { ListQuotasRequest } from './model/ListQuotasRequest';
import { ListQuotasResponse } from './model/ListQuotasResponse';
import { ListRacksRequest } from './model/ListRacksRequest';
import { ListRacksResponse } from './model/ListRacksResponse';
import { ListStoragePoolsRequest } from './model/ListStoragePoolsRequest';
import { ListStoragePoolsResponse } from './model/ListStoragePoolsResponse';
import { ListSupportedRegionsRequest } from './model/ListSupportedRegionsRequest';
import { ListSupportedRegionsResponse } from './model/ListSupportedRegionsResponse';
import { ListSupportedZonesRequest } from './model/ListSupportedZonesRequest';
import { ListSupportedZonesResponse } from './model/ListSupportedZonesResponse';
import { LocationDetail } from './model/LocationDetail';
import { MarketOptions } from './model/MarketOptions';
import { MetricDataDetail } from './model/MetricDataDetail';
import { MetricDataDetailDimension } from './model/MetricDataDetailDimension';
import { OperationStatus } from './model/OperationStatus';
import { PageInfo } from './model/PageInfo';
import { PayMode } from './model/PayMode';
import { PrepaidOptions } from './model/PrepaidOptions';
import { ProductInfo } from './model/ProductInfo';
import { QuotaDetail } from './model/QuotaDetail';
import { QuotaResources } from './model/QuotaResources';
import { Rack } from './model/Rack';
import { RackInfo } from './model/RackInfo';
import { RackStatus } from './model/RackStatus';
import { RegionDetail } from './model/RegionDetail';
import { Scene } from './model/Scene';
import { ShowEdgeSiteRequest } from './model/ShowEdgeSiteRequest';
import { ShowEdgeSiteResponse } from './model/ShowEdgeSiteResponse';
import { ShowRackRequest } from './model/ShowRackRequest';
import { ShowRackResponse } from './model/ShowRackResponse';
import { ShowStoragePoolRequest } from './model/ShowStoragePoolRequest';
import { ShowStoragePoolResponse } from './model/ShowStoragePoolResponse';
import { SiteStatus } from './model/SiteStatus';
import { StoragePool } from './model/StoragePool';
import { StoragePoolStatus } from './model/StoragePoolStatus';
import { StorageType } from './model/StorageType';
import { StorageUnit } from './model/StorageUnit';
import { Strategy } from './model/Strategy';
import { UpdateCondition } from './model/UpdateCondition';
import { UpdateEdgeSite } from './model/UpdateEdgeSite';
import { UpdateEdgeSiteRequest } from './model/UpdateEdgeSiteRequest';
import { UpdateEdgeSiteRequestBody } from './model/UpdateEdgeSiteRequestBody';
import { UpdateEdgeSiteResponse } from './model/UpdateEdgeSiteResponse';
import { UpdateLocation } from './model/UpdateLocation';
import { ZoneDetail } from './model/ZoneDetail';

export class CloudPondClient {
    public static newBuilder(): ClientBuilder<CloudPondClient> {
            let client = new ClientBuilder<CloudPondClient>(newClient, 'GlobalCredentials');
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
     * 创建边缘小站。
     * - 一个边缘小站关联一个华为云指定的区域。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建边缘小站
     * @param {CreateEdgeSiteRequestBody} createEdgeSiteRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEdgeSite(createEdgeSiteRequest?: CreateEdgeSiteRequest): Promise<CreateEdgeSiteResponse> {
        const options = ParamCreater().createEdgeSite(createEdgeSiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除指定的边缘小站。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除边缘小站
     * @param {string} siteId 边缘小站ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEdgeSite(deleteEdgeSiteRequest?: DeleteEdgeSiteRequest): Promise<DeleteEdgeSiteResponse> {
        const options = ParamCreater().deleteEdgeSite(deleteEdgeSiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询边缘小站列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘小站列表
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<string>} [sortKey] 排序字段
     * @param {Array<string>} [sortDir] 排序方向，取值范围： - desc：降序 - acs：升序
     * @param {Array<string>} [enterpriseProjectId] 企业项目ID。可以使用该字段过滤某个企业项目下的边缘小站。 最大长度36字节，带“-”连字符的UUID格式，或者是字符串“0”。“0”表示默认企业项目。 若需要查询当前用户所有企业项目绑定的边缘小站，请传参all_granted_eps。 不传则查询全部。
     * @param {Array<string>} [id] 根据边缘小站ID查询，支持排序
     * @param {Array<string>} [name] 根据边缘小站名称查询（精确），支持排序
     * @param {Array<string>} [availabilityZoneId] 根据边缘可用区ID查询
     * @param {Array<SiteStatus>} [status] 根据边缘小站部署状态查询
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEdgeSites(listEdgeSitesRequest?: ListEdgeSitesRequest): Promise<ListEdgeSitesResponse> {
        const options = ParamCreater().listEdgeSites(listEdgeSitesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询边缘小站详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询边缘小站详情
     * @param {string} siteId 边缘小站ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEdgeSite(showEdgeSiteRequest?: ShowEdgeSiteRequest): Promise<ShowEdgeSiteResponse> {
        const options = ParamCreater().showEdgeSite(showEdgeSiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新边缘小站。
     * - 允许更新边缘小站描述或场地信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新边缘小站
     * @param {string} siteId 边缘小站ID
     * @param {UpdateEdgeSiteRequestBody} updateEdgeSiteRequestBody 请求参数对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateEdgeSite(updateEdgeSiteRequest?: UpdateEdgeSiteRequest): Promise<UpdateEdgeSiteResponse> {
        const options = ParamCreater().updateEdgeSite(updateEdgeSiteRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看站点容量信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看站点容量信息
     * @param {string} siteId 边缘小站ID
     * @param {'site_id' | 'flavor' | 'storage' | 'flavor_capacity' | 'storage_pool'} [dim] 指定维度查询 - site_id: 按站点维度，查询站点下计算、存储资源容量信息 - flavor: 按规格维度，查询站点下各flavor的计算资源使用情况 - storage: 按存储维度，查询站点下各存储资源类型的使用情况 - flavor_capacity: 按规格容量维度，查询站点下各规格可发放数量预测 - storage_pool：按存储池维度，查询站点下各存储池的使用情况
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEdgeSiteMetrics(listEdgeSiteMetricsRequest?: ListEdgeSiteMetricsRequest): Promise<ListEdgeSiteMetricsResponse> {
        const options = ParamCreater().listEdgeSiteMetrics(listEdgeSiteMetricsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户资源配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas(listQuotasRequest?: ListQuotasRequest): Promise<ListQuotasResponse> {
        const options = ParamCreater().listQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询机柜列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询机柜列表
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<string>} [sortKey] 排序字段
     * @param {Array<string>} [sortDir] 排序方向，取值范围： - desc：降序 - acs：升序
     * @param {string} [edgeSiteId] 边缘小站ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRacks(listRacksRequest?: ListRacksRequest): Promise<ListRacksResponse> {
        const options = ParamCreater().listRacks(listRacksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询机柜详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询机柜详情
     * @param {string} id 机柜ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRack(showRackRequest?: ShowRackRequest): Promise<ShowRackResponse> {
        const options = ParamCreater().showRack(showRackRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持CloudPond接入的华为云区域（region）列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持的区域列表
     * @param {'zh-cn' | 'en-us' | 'pt-br' | 'es-us' | 'es-es'} [xLanguage] 选择接口返回信息的语言类型，默认为中文\&quot;zh-cn\&quot;
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<string>} [sortKey] 排序字段
     * @param {Array<string>} [sortDir] 排序方向，取值范围： - desc：降序 - acs：升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportedRegions(listSupportedRegionsRequest?: ListSupportedRegionsRequest): Promise<ListSupportedRegionsResponse> {
        const options = ParamCreater().listSupportedRegions(listSupportedRegionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询存储池列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储池列表
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<string>} [sortKey] 排序字段
     * @param {Array<string>} [sortDir] 排序方向，取值范围： - desc：降序 - acs：升序
     * @param {string} [edgeSiteId] 边缘小站ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStoragePools(listStoragePoolsRequest?: ListStoragePoolsRequest): Promise<ListStoragePoolsResponse> {
        const options = ParamCreater().listStoragePools(listStoragePoolsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询存储池详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储池详情
     * @param {string} id 存储池ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showStoragePool(showStoragePoolRequest?: ShowStoragePoolRequest): Promise<ShowStoragePoolResponse> {
        const options = ParamCreater().showStoragePool(showStoragePoolRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询支持CloudPond接入的华为云地区列表。
     * - 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:zone:list
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询支持的地区列表
     * @param {'zh-cn' | 'en-us' | 'pt-br' | 'es-us' | 'es-es'} [xLanguage] 选择接口返回信息的语言类型，默认为中文\&quot;zh-cn\&quot;
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<string>} [sortKey] 排序字段
     * @param {Array<string>} [sortDir] 排序方向，取值范围： - desc：降序 - acs：升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportedZones(listSupportedZonesRequest?: ListSupportedZonesRequest): Promise<ListSupportedZonesResponse> {
        const options = ParamCreater().listSupportedZones(listSupportedZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建边缘小站。
         * - 一个边缘小站关联一个华为云指定的区域。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createEdgeSite(createEdgeSiteRequest?: CreateEdgeSiteRequest) {
            const options = {
                method: "POST",
                url: "/v1/{domain_id}/edge-sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createEdgeSiteRequest !== null && createEdgeSiteRequest !== undefined) {
                if (createEdgeSiteRequest instanceof CreateEdgeSiteRequest) {
                    body = createEdgeSiteRequest.body
                } else {
                    body = createEdgeSiteRequest['body'];
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
         * 删除指定的边缘小站。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteEdgeSite(deleteEdgeSiteRequest?: DeleteEdgeSiteRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{domain_id}/edge-sites/{site_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let siteId;

            if (deleteEdgeSiteRequest !== null && deleteEdgeSiteRequest !== undefined) {
                if (deleteEdgeSiteRequest instanceof DeleteEdgeSiteRequest) {
                    siteId = deleteEdgeSiteRequest.siteId;
                } else {
                    siteId = deleteEdgeSiteRequest['site_id'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling deleteEdgeSite.');
            }

            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询边缘小站列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEdgeSites(listEdgeSitesRequest?: ListEdgeSitesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/edge-sites",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let enterpriseProjectId;
            
            let id;
            
            let name;
            
            let availabilityZoneId;
            
            let status;

            if (listEdgeSitesRequest !== null && listEdgeSitesRequest !== undefined) {
                if (listEdgeSitesRequest instanceof ListEdgeSitesRequest) {
                    limit = listEdgeSitesRequest.limit;
                    marker = listEdgeSitesRequest.marker;
                    sortKey = listEdgeSitesRequest.sortKey;
                    sortDir = listEdgeSitesRequest.sortDir;
                    enterpriseProjectId = listEdgeSitesRequest.enterpriseProjectId;
                    id = listEdgeSitesRequest.id;
                    name = listEdgeSitesRequest.name;
                    availabilityZoneId = listEdgeSitesRequest.availabilityZoneId;
                    status = listEdgeSitesRequest.status;
                } else {
                    limit = listEdgeSitesRequest['limit'];
                    marker = listEdgeSitesRequest['marker'];
                    sortKey = listEdgeSitesRequest['sort_key'];
                    sortDir = listEdgeSitesRequest['sort_dir'];
                    enterpriseProjectId = listEdgeSitesRequest['enterprise_project_id'];
                    id = listEdgeSitesRequest['id'];
                    name = listEdgeSitesRequest['name'];
                    availabilityZoneId = listEdgeSitesRequest['availability_zone_id'];
                    status = listEdgeSitesRequest['status'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (availabilityZoneId !== null && availabilityZoneId !== undefined) {
                localVarQueryParameter['availability_zone_id'] = availabilityZoneId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询边缘小站详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEdgeSite(showEdgeSiteRequest?: ShowEdgeSiteRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/edge-sites/{site_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let siteId;

            if (showEdgeSiteRequest !== null && showEdgeSiteRequest !== undefined) {
                if (showEdgeSiteRequest instanceof ShowEdgeSiteRequest) {
                    siteId = showEdgeSiteRequest.siteId;
                } else {
                    siteId = showEdgeSiteRequest['site_id'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling showEdgeSite.');
            }

            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新边缘小站。
         * - 允许更新边缘小站描述或场地信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateEdgeSite(updateEdgeSiteRequest?: UpdateEdgeSiteRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{domain_id}/edge-sites/{site_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let siteId;

            if (updateEdgeSiteRequest !== null && updateEdgeSiteRequest !== undefined) {
                if (updateEdgeSiteRequest instanceof UpdateEdgeSiteRequest) {
                    siteId = updateEdgeSiteRequest.siteId;
                    body = updateEdgeSiteRequest.body
                } else {
                    siteId = updateEdgeSiteRequest['site_id'];
                    body = updateEdgeSiteRequest['body'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling updateEdgeSite.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看站点容量信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listEdgeSiteMetrics(listEdgeSiteMetricsRequest?: ListEdgeSiteMetricsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/edge-sites/{site_id}/metric-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let siteId;
            
            let dim;

            if (listEdgeSiteMetricsRequest !== null && listEdgeSiteMetricsRequest !== undefined) {
                if (listEdgeSiteMetricsRequest instanceof ListEdgeSiteMetricsRequest) {
                    siteId = listEdgeSiteMetricsRequest.siteId;
                    dim = listEdgeSiteMetricsRequest.dim;
                } else {
                    siteId = listEdgeSiteMetricsRequest['site_id'];
                    dim = listEdgeSiteMetricsRequest['dim'];
                }
            }

        
            if (siteId === null || siteId === undefined) {
            throw new RequiredError('siteId','Required parameter siteId was null or undefined when calling listEdgeSiteMetrics.');
            }
            if (dim !== null && dim !== undefined) {
                localVarQueryParameter['dim'] = dim;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'site_id': siteId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户资源配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas() {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/quotas",
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
         * 查询机柜列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRacks(listRacksRequest?: ListRacksRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/racks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let edgeSiteId;

            if (listRacksRequest !== null && listRacksRequest !== undefined) {
                if (listRacksRequest instanceof ListRacksRequest) {
                    limit = listRacksRequest.limit;
                    marker = listRacksRequest.marker;
                    sortKey = listRacksRequest.sortKey;
                    sortDir = listRacksRequest.sortDir;
                    edgeSiteId = listRacksRequest.edgeSiteId;
                } else {
                    limit = listRacksRequest['limit'];
                    marker = listRacksRequest['marker'];
                    sortKey = listRacksRequest['sort_key'];
                    sortDir = listRacksRequest['sort_dir'];
                    edgeSiteId = listRacksRequest['edge_site_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (edgeSiteId !== null && edgeSiteId !== undefined) {
                localVarQueryParameter['edge_site_id'] = edgeSiteId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询机柜详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRack(showRackRequest?: ShowRackRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/racks/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showRackRequest !== null && showRackRequest !== undefined) {
                if (showRackRequest instanceof ShowRackRequest) {
                    id = showRackRequest.id;
                } else {
                    id = showRackRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showRack.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持CloudPond接入的华为云区域（region）列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportedRegions(listSupportedRegionsRequest?: ListSupportedRegionsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/regions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;

            if (listSupportedRegionsRequest !== null && listSupportedRegionsRequest !== undefined) {
                if (listSupportedRegionsRequest instanceof ListSupportedRegionsRequest) {
                    xLanguage = listSupportedRegionsRequest.xLanguage;
                    limit = listSupportedRegionsRequest.limit;
                    marker = listSupportedRegionsRequest.marker;
                    sortKey = listSupportedRegionsRequest.sortKey;
                    sortDir = listSupportedRegionsRequest.sortDir;
                } else {
                    xLanguage = listSupportedRegionsRequest['X-Language'];
                    limit = listSupportedRegionsRequest['limit'];
                    marker = listSupportedRegionsRequest['marker'];
                    sortKey = listSupportedRegionsRequest['sort_key'];
                    sortDir = listSupportedRegionsRequest['sort_dir'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询存储池列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStoragePools(listStoragePoolsRequest?: ListStoragePoolsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/storage-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;
            
            let edgeSiteId;

            if (listStoragePoolsRequest !== null && listStoragePoolsRequest !== undefined) {
                if (listStoragePoolsRequest instanceof ListStoragePoolsRequest) {
                    limit = listStoragePoolsRequest.limit;
                    marker = listStoragePoolsRequest.marker;
                    sortKey = listStoragePoolsRequest.sortKey;
                    sortDir = listStoragePoolsRequest.sortDir;
                    edgeSiteId = listStoragePoolsRequest.edgeSiteId;
                } else {
                    limit = listStoragePoolsRequest['limit'];
                    marker = listStoragePoolsRequest['marker'];
                    sortKey = listStoragePoolsRequest['sort_key'];
                    sortDir = listStoragePoolsRequest['sort_dir'];
                    edgeSiteId = listStoragePoolsRequest['edge_site_id'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (edgeSiteId !== null && edgeSiteId !== undefined) {
                localVarQueryParameter['edge_site_id'] = edgeSiteId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询存储池详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showStoragePool(showStoragePoolRequest?: ShowStoragePoolRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/storage-pools/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showStoragePoolRequest !== null && showStoragePoolRequest !== undefined) {
                if (showStoragePoolRequest instanceof ShowStoragePoolRequest) {
                    id = showStoragePoolRequest.id;
                } else {
                    id = showStoragePoolRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showStoragePool.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询支持CloudPond接入的华为云地区列表。
         * - 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:zone:list
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportedZones(listSupportedZonesRequest?: ListSupportedZonesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{domain_id}/zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let limit;
            
            let marker;
            
            let sortKey;
            
            let sortDir;

            if (listSupportedZonesRequest !== null && listSupportedZonesRequest !== undefined) {
                if (listSupportedZonesRequest instanceof ListSupportedZonesRequest) {
                    xLanguage = listSupportedZonesRequest.xLanguage;
                    limit = listSupportedZonesRequest.limit;
                    marker = listSupportedZonesRequest.marker;
                    sortKey = listSupportedZonesRequest.sortKey;
                    sortDir = listSupportedZonesRequest.sortDir;
                } else {
                    xLanguage = listSupportedZonesRequest['X-Language'];
                    limit = listSupportedZonesRequest['limit'];
                    marker = listSupportedZonesRequest['marker'];
                    sortKey = listSupportedZonesRequest['sort_key'];
                    sortDir = listSupportedZonesRequest['sort_dir'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CloudPondClient {
    return new CloudPondClient(client);
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