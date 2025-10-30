import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ChargeMode } from './model/ChargeMode';
import { Effect } from './model/Effect';
import { LayoutLocation } from './model/LayoutLocation';
import { ListNetworkDeviceOfferingsRequest } from './model/ListNetworkDeviceOfferingsRequest';
import { ListNetworkDeviceOfferingsResponse } from './model/ListNetworkDeviceOfferingsResponse';
import { ListNetworkDevicesRequest } from './model/ListNetworkDevicesRequest';
import { ListNetworkDevicesResponse } from './model/ListNetworkDevicesResponse';
import { ListSaleCyclesRequest } from './model/ListSaleCyclesRequest';
import { ListSaleCyclesResponse } from './model/ListSaleCyclesResponse';
import { ListServerOfferingsRequest } from './model/ListServerOfferingsRequest';
import { ListServerOfferingsResponse } from './model/ListServerOfferingsResponse';
import { ListServersRequest } from './model/ListServersRequest';
import { ListServersResponse } from './model/ListServersResponse';
import { ListStorageGearsRequest } from './model/ListStorageGearsRequest';
import { ListStorageGearsResponse } from './model/ListStorageGearsResponse';
import { ListStoragePoolsRequest } from './model/ListStoragePoolsRequest';
import { ListStoragePoolsResponse } from './model/ListStoragePoolsResponse';
import { ListStorageTypesRequest } from './model/ListStorageTypesRequest';
import { ListStorageTypesResponse } from './model/ListStorageTypesResponse';
import { MarketOptions } from './model/MarketOptions';
import { NetworkDevice } from './model/NetworkDevice';
import { NetworkDeviceOffering } from './model/NetworkDeviceOffering';
import { NetworkDeviceSpec } from './model/NetworkDeviceSpec';
import { NetworkDeviceStatus } from './model/NetworkDeviceStatus';
import { OfferingStatus } from './model/OfferingStatus';
import { OperationStatus } from './model/OperationStatus';
import { PageInfo } from './model/PageInfo';
import { PayMode } from './model/PayMode';
import { PeriodType } from './model/PeriodType';
import { PrepaidOptions } from './model/PrepaidOptions';
import { ProductInfo } from './model/ProductInfo';
import { SaleCycle } from './model/SaleCycle';
import { SaleCycleOption } from './model/SaleCycleOption';
import { Scene } from './model/Scene';
import { Server } from './model/Server';
import { ServerOffering } from './model/ServerOffering';
import { ServerResourceSpec } from './model/ServerResourceSpec';
import { ServerSpec } from './model/ServerSpec';
import { ServerStatus } from './model/ServerStatus';
import { ServerType } from './model/ServerType';
import { ShowNetworkDeviceRequest } from './model/ShowNetworkDeviceRequest';
import { ShowNetworkDeviceResponse } from './model/ShowNetworkDeviceResponse';
import { ShowServerRequest } from './model/ShowServerRequest';
import { ShowServerResponse } from './model/ShowServerResponse';
import { ShowStoragePoolRequest } from './model/ShowStoragePoolRequest';
import { ShowStoragePoolResponse } from './model/ShowStoragePoolResponse';
import { StorageGearV2 } from './model/StorageGearV2';
import { StoragePoolStatus } from './model/StoragePoolStatus';
import { StoragePoolV2 } from './model/StoragePoolV2';
import { StorageTypeOption } from './model/StorageTypeOption';
import { Strategy } from './model/Strategy';

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
     * 查询网络设备列表。
     * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:listNetworkDevices](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络设备列表
     * @param {string} [edgeSiteId] 边缘小站ID
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<NetworkDeviceStatus>} [status] 根据网络设备状态查询，支持多值查询
     * @param {Array<string>} [id] 根据ID过滤，支持多值查询，查询条件格式：id&#x3D;xxx&amp;id&#x3D;xxx。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNetworkDevices(listNetworkDevicesRequest?: ListNetworkDevicesRequest): Promise<ListNetworkDevicesResponse> {
        const options = ParamCreater().listNetworkDevices(listNetworkDevicesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络设备详情。
     * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:getNetworkDevice](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络设备详情
     * @param {string} networkDeviceId 网络设备ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showNetworkDevice(showNetworkDeviceRequest?: ShowNetworkDeviceRequest): Promise<ShowNetworkDeviceResponse> {
        const options = ParamCreater().showNetworkDevice(showNetworkDeviceRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询网络设备商品列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询网络设备商品列表
     * @param {string} [zoneCode] 地区编码
     * @param {Array<string>} [storageType] 存储类型
     * @param {Array<PayMode>} [payMode] 付费模式
     * @param {Array<number>} [periodNum] 购买时长
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNetworkDeviceOfferings(listNetworkDeviceOfferingsRequest?: ListNetworkDeviceOfferingsRequest): Promise<ListNetworkDeviceOfferingsResponse> {
        const options = ParamCreater().listNetworkDeviceOfferings(listNetworkDeviceOfferingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器销售商品列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器商品列表
     * @param {string} [zoneCode] 地区编码
     * @param {Array<PayMode>} [payMode] 付费模式
     * @param {Array<number>} [periodNum] 购买时长
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServerOfferings(listServerOfferingsRequest?: ListServerOfferingsRequest): Promise<ListServerOfferingsResponse> {
        const options = ParamCreater().listServerOfferings(listServerOfferingsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询可购买的销售周期
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可购买的销售周期
     * @param {string} [zoneCode] 地区编码
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSaleCycles(listSaleCyclesRequest?: ListSaleCyclesRequest): Promise<ListSaleCyclesResponse> {
        const options = ParamCreater().listSaleCycles(listSaleCyclesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器列表。
     * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:listServers](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器列表
     * @param {string} [edgeSiteId] 边缘小站ID
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<ServerStatus>} [status] 根据服务器状态查询，支持多值查询
     * @param {Array<string>} [id] 根据ID过滤，支持多值查询，查询条件格式：id&#x3D;xxx&amp;id&#x3D;xxx。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listServers(listServersRequest?: ListServersRequest): Promise<ListServersResponse> {
        const options = ParamCreater().listServers(listServersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询服务器详情。
     * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:getServer](tag:hws)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询服务器详情
     * @param {string} serverId 服务器ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showServer(showServerRequest?: ShowServerRequest): Promise<ShowServerResponse> {
        const options = ParamCreater().showServer(showServerRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口仅返回支持的存储计费档位，实际可购买的存储容量单独定义。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储计费档位
     * @param {string} [zoneCode] 地区编码
     * @param {Array<PayMode>} [payMode] 付费模式
     * @param {Array<number>} [periodNum] 购买时长
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStorageGears(listStorageGearsRequest?: ListStorageGearsRequest): Promise<ListStorageGearsResponse> {
        const options = ParamCreater().listStorageGears(listStorageGearsRequest);

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
     * @param {string} [edgeSiteId] 边缘小站ID
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {Array<StoragePoolStatus>} [status] 根据存储池状态查询，支持多值查询
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
     * 查询支持的存储类型列表，包括步长等信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询存储类型列表
     * @param {string} [zoneCode] 地区编码
     * @param {string} [name] 存储类型名称
     * @param {number} [limit] 每页的数量
     * @param {string} [marker] 分页标识
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest): Promise<ListStorageTypesResponse> {
        const options = ParamCreater().listStorageTypes(listStorageTypesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询网络设备列表。
         * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:listNetworkDevices](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNetworkDevices(listNetworkDevicesRequest?: ListNetworkDevicesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/network-devices",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeSiteId;
            
            let limit;
            
            let marker;
            
            let status;
            
            let id;

            if (listNetworkDevicesRequest !== null && listNetworkDevicesRequest !== undefined) {
                if (listNetworkDevicesRequest instanceof ListNetworkDevicesRequest) {
                    edgeSiteId = listNetworkDevicesRequest.edgeSiteId;
                    limit = listNetworkDevicesRequest.limit;
                    marker = listNetworkDevicesRequest.marker;
                    status = listNetworkDevicesRequest.status;
                    id = listNetworkDevicesRequest.id;
                } else {
                    edgeSiteId = listNetworkDevicesRequest['edge_site_id'];
                    limit = listNetworkDevicesRequest['limit'];
                    marker = listNetworkDevicesRequest['marker'];
                    status = listNetworkDevicesRequest['status'];
                    id = listNetworkDevicesRequest['id'];
                }
            }

        
            if (edgeSiteId !== null && edgeSiteId !== undefined) {
                localVarQueryParameter['edge_site_id'] = edgeSiteId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络设备详情。
         * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:getNetworkDevice](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showNetworkDevice(showNetworkDeviceRequest?: ShowNetworkDeviceRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/network-devices/{network_device_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let networkDeviceId;

            if (showNetworkDeviceRequest !== null && showNetworkDeviceRequest !== undefined) {
                if (showNetworkDeviceRequest instanceof ShowNetworkDeviceRequest) {
                    networkDeviceId = showNetworkDeviceRequest.networkDeviceId;
                } else {
                    networkDeviceId = showNetworkDeviceRequest['network_device_id'];
                }
            }

        
            if (networkDeviceId === null || networkDeviceId === undefined) {
            throw new RequiredError('networkDeviceId','Required parameter networkDeviceId was null or undefined when calling showNetworkDevice.');
            }

            options.pathParams = { 'network_device_id': networkDeviceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询网络设备商品列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNetworkDeviceOfferings(listNetworkDeviceOfferingsRequest?: ListNetworkDeviceOfferingsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/network-device-offerings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneCode;
            
            let storageType;
            
            let payMode;
            
            let periodNum;
            
            let limit;
            
            let marker;

            if (listNetworkDeviceOfferingsRequest !== null && listNetworkDeviceOfferingsRequest !== undefined) {
                if (listNetworkDeviceOfferingsRequest instanceof ListNetworkDeviceOfferingsRequest) {
                    zoneCode = listNetworkDeviceOfferingsRequest.zoneCode;
                    storageType = listNetworkDeviceOfferingsRequest.storageType;
                    payMode = listNetworkDeviceOfferingsRequest.payMode;
                    periodNum = listNetworkDeviceOfferingsRequest.periodNum;
                    limit = listNetworkDeviceOfferingsRequest.limit;
                    marker = listNetworkDeviceOfferingsRequest.marker;
                } else {
                    zoneCode = listNetworkDeviceOfferingsRequest['zone_code'];
                    storageType = listNetworkDeviceOfferingsRequest['storage_type'];
                    payMode = listNetworkDeviceOfferingsRequest['pay_mode'];
                    periodNum = listNetworkDeviceOfferingsRequest['period_num'];
                    limit = listNetworkDeviceOfferingsRequest['limit'];
                    marker = listNetworkDeviceOfferingsRequest['marker'];
                }
            }

        
            if (zoneCode !== null && zoneCode !== undefined) {
                localVarQueryParameter['zone_code'] = zoneCode;
            }
            if (storageType !== null && storageType !== undefined) {
                localVarQueryParameter['storage_type'] = storageType;
            }
            if (payMode !== null && payMode !== undefined) {
                localVarQueryParameter['pay_mode'] = payMode;
            }
            if (periodNum !== null && periodNum !== undefined) {
                localVarQueryParameter['period_num'] = periodNum;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器销售商品列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServerOfferings(listServerOfferingsRequest?: ListServerOfferingsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/server-offerings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneCode;
            
            let payMode;
            
            let periodNum;
            
            let limit;
            
            let marker;

            if (listServerOfferingsRequest !== null && listServerOfferingsRequest !== undefined) {
                if (listServerOfferingsRequest instanceof ListServerOfferingsRequest) {
                    zoneCode = listServerOfferingsRequest.zoneCode;
                    payMode = listServerOfferingsRequest.payMode;
                    periodNum = listServerOfferingsRequest.periodNum;
                    limit = listServerOfferingsRequest.limit;
                    marker = listServerOfferingsRequest.marker;
                } else {
                    zoneCode = listServerOfferingsRequest['zone_code'];
                    payMode = listServerOfferingsRequest['pay_mode'];
                    periodNum = listServerOfferingsRequest['period_num'];
                    limit = listServerOfferingsRequest['limit'];
                    marker = listServerOfferingsRequest['marker'];
                }
            }

        
            if (zoneCode !== null && zoneCode !== undefined) {
                localVarQueryParameter['zone_code'] = zoneCode;
            }
            if (payMode !== null && payMode !== undefined) {
                localVarQueryParameter['pay_mode'] = payMode;
            }
            if (periodNum !== null && periodNum !== undefined) {
                localVarQueryParameter['period_num'] = periodNum;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询可购买的销售周期
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSaleCycles(listSaleCyclesRequest?: ListSaleCyclesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/sale-cycles",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneCode;

            if (listSaleCyclesRequest !== null && listSaleCyclesRequest !== undefined) {
                if (listSaleCyclesRequest instanceof ListSaleCyclesRequest) {
                    zoneCode = listSaleCyclesRequest.zoneCode;
                } else {
                    zoneCode = listSaleCyclesRequest['zone_code'];
                }
            }

        
            if (zoneCode !== null && zoneCode !== undefined) {
                localVarQueryParameter['zone_code'] = zoneCode;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器列表。
         * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:listServers](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listServers(listServersRequest?: ListServersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/servers",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeSiteId;
            
            let limit;
            
            let marker;
            
            let status;
            
            let id;

            if (listServersRequest !== null && listServersRequest !== undefined) {
                if (listServersRequest instanceof ListServersRequest) {
                    edgeSiteId = listServersRequest.edgeSiteId;
                    limit = listServersRequest.limit;
                    marker = listServersRequest.marker;
                    status = listServersRequest.status;
                    id = listServersRequest.id;
                } else {
                    edgeSiteId = listServersRequest['edge_site_id'];
                    limit = listServersRequest['limit'];
                    marker = listServersRequest['marker'];
                    status = listServersRequest['status'];
                    id = listServersRequest['id'];
                }
            }

        
            if (edgeSiteId !== null && edgeSiteId !== undefined) {
                localVarQueryParameter['edge_site_id'] = edgeSiteId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询服务器详情。
         * [- 该接口支持企业项目细粒度权限的校验，具体细粒度请参见 ies:edgeSite:getServer](tag:hws)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showServer(showServerRequest?: ShowServerRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/servers/{server_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let serverId;

            if (showServerRequest !== null && showServerRequest !== undefined) {
                if (showServerRequest instanceof ShowServerRequest) {
                    serverId = showServerRequest.serverId;
                } else {
                    serverId = showServerRequest['server_id'];
                }
            }

        
            if (serverId === null || serverId === undefined) {
            throw new RequiredError('serverId','Required parameter serverId was null or undefined when calling showServer.');
            }

            options.pathParams = { 'server_id': serverId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口仅返回支持的存储计费档位，实际可购买的存储容量单独定义。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageGears(listStorageGearsRequest?: ListStorageGearsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/storage-gears",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneCode;
            
            let payMode;
            
            let periodNum;
            
            let limit;
            
            let marker;

            if (listStorageGearsRequest !== null && listStorageGearsRequest !== undefined) {
                if (listStorageGearsRequest instanceof ListStorageGearsRequest) {
                    zoneCode = listStorageGearsRequest.zoneCode;
                    payMode = listStorageGearsRequest.payMode;
                    periodNum = listStorageGearsRequest.periodNum;
                    limit = listStorageGearsRequest.limit;
                    marker = listStorageGearsRequest.marker;
                } else {
                    zoneCode = listStorageGearsRequest['zone_code'];
                    payMode = listStorageGearsRequest['pay_mode'];
                    periodNum = listStorageGearsRequest['period_num'];
                    limit = listStorageGearsRequest['limit'];
                    marker = listStorageGearsRequest['marker'];
                }
            }

        
            if (zoneCode !== null && zoneCode !== undefined) {
                localVarQueryParameter['zone_code'] = zoneCode;
            }
            if (payMode !== null && payMode !== undefined) {
                localVarQueryParameter['pay_mode'] = payMode;
            }
            if (periodNum !== null && periodNum !== undefined) {
                localVarQueryParameter['period_num'] = periodNum;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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
                url: "/v2/{domain_id}/storage-pools",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let edgeSiteId;
            
            let limit;
            
            let marker;
            
            let status;

            if (listStoragePoolsRequest !== null && listStoragePoolsRequest !== undefined) {
                if (listStoragePoolsRequest instanceof ListStoragePoolsRequest) {
                    edgeSiteId = listStoragePoolsRequest.edgeSiteId;
                    limit = listStoragePoolsRequest.limit;
                    marker = listStoragePoolsRequest.marker;
                    status = listStoragePoolsRequest.status;
                } else {
                    edgeSiteId = listStoragePoolsRequest['edge_site_id'];
                    limit = listStoragePoolsRequest['limit'];
                    marker = listStoragePoolsRequest['marker'];
                    status = listStoragePoolsRequest['status'];
                }
            }

        
            if (edgeSiteId !== null && edgeSiteId !== undefined) {
                localVarQueryParameter['edge_site_id'] = edgeSiteId;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
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
                url: "/v2/{domain_id}/storage-pools/{id}",
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
         * 查询支持的存储类型列表，包括步长等信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listStorageTypes(listStorageTypesRequest?: ListStorageTypesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{domain_id}/storage-types",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let zoneCode;
            
            let name;
            
            let limit;
            
            let marker;

            if (listStorageTypesRequest !== null && listStorageTypesRequest !== undefined) {
                if (listStorageTypesRequest instanceof ListStorageTypesRequest) {
                    zoneCode = listStorageTypesRequest.zoneCode;
                    name = listStorageTypesRequest.name;
                    limit = listStorageTypesRequest.limit;
                    marker = listStorageTypesRequest.marker;
                } else {
                    zoneCode = listStorageTypesRequest['zone_code'];
                    name = listStorageTypesRequest['name'];
                    limit = listStorageTypesRequest['limit'];
                    marker = listStorageTypesRequest['marker'];
                }
            }

        
            if (zoneCode !== null && zoneCode !== undefined) {
                localVarQueryParameter['zone_code'] = zoneCode;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
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