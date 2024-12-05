import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionProgress } from './model/ActionProgress';
import { AddComponentReq } from './model/AddComponentReq';
import { Cluster } from './model/Cluster';
import { ClusterDetail } from './model/ClusterDetail';
import { CreateCloudTableClusterRequest } from './model/CreateCloudTableClusterRequest';
import { CreateCloudTableClusterResponse } from './model/CreateCloudTableClusterResponse';
import { CreateClusterInstanceBody } from './model/CreateClusterInstanceBody';
import { CreateClusterReqBody } from './model/CreateClusterReqBody';
import { CreateClusterReqBodyClusterInfo } from './model/CreateClusterReqBodyClusterInfo';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterRequestBody } from './model/CreateClusterRequestBody';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { Datastore } from './model/Datastore';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { EnableComponentRequest } from './model/EnableComponentRequest';
import { EnableComponentResponse } from './model/EnableComponentResponse';
import { ExpandClusterComponentRequest } from './model/ExpandClusterComponentRequest';
import { ExpandClusterComponentResponse } from './model/ExpandClusterComponentResponse';
import { GrowNodeReq } from './model/GrowNodeReq';
import { HbaseClusterActionReq } from './model/HbaseClusterActionReq';
import { HbaseModifySettingV2 } from './model/HbaseModifySettingV2';
import { HbaseModifySettingV2Req } from './model/HbaseModifySettingV2Req';
import { Instance } from './model/Instance';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { Nic } from './model/Nic';
import { ParameterInfo } from './model/ParameterInfo';
import { RebootCloudTableClusterRequest } from './model/RebootCloudTableClusterRequest';
import { RebootCloudTableClusterResponse } from './model/RebootCloudTableClusterResponse';
import { RestartInstanceRsp } from './model/RestartInstanceRsp';
import { ShowClusterDetailRequest } from './model/ShowClusterDetailRequest';
import { ShowClusterDetailResponse } from './model/ShowClusterDetailResponse';
import { ShowClusterSettingRequest } from './model/ShowClusterSettingRequest';
import { ShowClusterSettingResponse } from './model/ShowClusterSettingResponse';
import { UpdateClusterSettingRequest } from './model/UpdateClusterSettingRequest';
import { UpdateClusterSettingResponse } from './model/UpdateClusterSettingResponse';

export class CloudTableClient {
    public static newBuilder(): ClientBuilder<CloudTableClient> {
            let client = new ClientBuilder<CloudTableClient>(newClient);
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
     * 创建一个CloudTable集群。
     * 使用接口前，您需要先获取如下资源信息。
     * - 通过VPC创建或查询VPC、子网
     * - 通过安全组创建或查询可用的security_group_id
     * 
     * 本接口是一个同步接口，当创建CloudTable集群成功后会返回集群id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建CloudTable集群
     * @param {string} xLanguage 语言类型
     * @param {CreateClusterRequestBody} createClusterRequestBody This is a auto create Body Object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCluster(createClusterRequest?: CreateClusterRequest): Promise<CreateClusterResponse> {
        const options = ParamCreater().createCluster(createClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群ID为集群唯一标识，根据集群ID删除指定集群。
     * 如下状态的集群不允许删除：
     * - 创建中
     * - 扩容中
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除CloudTable指定集群
     * @param {string} xLanguage 语言类型
     * @param {string} clusterId 集群ID。  获取方法：在ClooudTable控制台，单击要查询的集群名称进入集群详情页，获取“集群ID\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCluster(deleteClusterRequest?: DeleteClusterRequest): Promise<DeleteClusterResponse> {
        const options = ParamCreater().deleteCluster(deleteClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 开启opentsdb组件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启opentsdb组件
     * @param {string} clusterId 集群ID
     * @param {string} componentName 组件类型，取值为tsdb
     * @param {AddComponentReq} addComponentReq 开启tsd组件的请求体
     * @param {string} [xLanguage] 语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableComponent(enableComponentRequest?: EnableComponentRequest): Promise<EnableComponentResponse> {
        const options = ParamCreater().enableComponent(enableComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容指定类型的集群节点
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容组件
     * @param {string} clusterId 集群ID
     * @param {string} xLanguage 语言类型
     * @param {GrowNodeReq} growNodeReq 扩容节点请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandClusterComponent(expandClusterComponentRequest?: ExpandClusterComponentRequest): Promise<ExpandClusterComponentResponse> {
        const options = ParamCreater().expandClusterComponent(expandClusterComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看用户创建的集群列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CloudTable集群列表
     * @param {number} [offset] 分页参数，列表的偏移量，默认值为0
     * @param {number} [limit] 分页参数，列表当前分页的数量限制，默认为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters(listClustersRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启集群的api入口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启集群的api入口
     * @param {string} clusterId 集群ID
     * @param {HbaseClusterActionReq} hbaseClusterActionReq 集群重启请求
     * @param {string} [xLanguage] 语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rebootCloudTableCluster(rebootCloudTableClusterRequest?: RebootCloudTableClusterRequest): Promise<RebootCloudTableClusterResponse> {
        const options = ParamCreater().rebootCloudTableCluster(rebootCloudTableClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过集群ID唯一标识一个集群，根据集群ID查询特定CloudTable集群的详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CloudTable集群详情
     * @param {string} xLanguage 语言类型
     * @param {string} clusterId 集群ID。  获取方法：在ClooudTable控制台，单击要查询的集群名称进入集群详情页，获取“集群ID\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterDetail(showClusterDetailRequest?: ShowClusterDetailRequest): Promise<ShowClusterDetailResponse> {
        const options = ParamCreater().showClusterDetail(showClusterDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群配置
     * @param {string} clusterId 项目ID
     * @param {string} [xLanguage] 语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterSetting(showClusterSettingRequest?: ShowClusterSettingRequest): Promise<ShowClusterSettingResponse> {
        const options = ParamCreater().showClusterSetting(showClusterSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群配置
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群配置
     * @param {string} clusterId 集群ID
     * @param {HbaseModifySettingV2Req} hbaseModifySettingV2Req 请求参数
     * @param {string} [xLanguage] 语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterSetting(updateClusterSettingRequest?: UpdateClusterSettingRequest): Promise<UpdateClusterSettingResponse> {
        const options = ParamCreater().updateClusterSetting(updateClusterSettingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个CloudTable集群。
     * 使用接口前，您需要先获取如下资源信息。
     * - 通过VPC创建或查询VPC、子网
     * - 通过安全组创建或查询可用的security_group_id
     * 
     * 本接口是一个同步接口，当创建CloudTable集群成功后会返回集群id。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建CloudTable集群
     * @param {CreateClusterReqBody} createClusterReqBody This is a auto create Body Object
     * @param {string} [xLanguage] 语言类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCloudTableCluster(createCloudTableClusterRequest?: CreateCloudTableClusterRequest): Promise<CreateCloudTableClusterResponse> {
        const options = ParamCreater().createCloudTableCluster(createCloudTableClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建一个CloudTable集群。
         * 使用接口前，您需要先获取如下资源信息。
         * - 通过VPC创建或查询VPC、子网
         * - 通过安全组创建或查询可用的security_group_id
         * 
         * 本接口是一个同步接口，当创建CloudTable集群成功后会返回集群id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    xLanguage = createClusterRequest.xLanguage;
                    body = createClusterRequest.body
                } else {
                    xLanguage = createClusterRequest['X-Language'];
                    body = createClusterRequest['body'];
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
         * 集群ID为集群唯一标识，根据集群ID删除指定集群。
         * 如下状态的集群不允许删除：
         * - 创建中
         * - 扩容中
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;
            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    xLanguage = deleteClusterRequest.xLanguage;
                    clusterId = deleteClusterRequest.clusterId;
                } else {
                    xLanguage = deleteClusterRequest['X-Language'];
                    clusterId = deleteClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 开启opentsdb组件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableComponent(enableComponentRequest?: EnableComponentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/components/{component_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let componentName;
            
            let xLanguage;

            if (enableComponentRequest !== null && enableComponentRequest !== undefined) {
                if (enableComponentRequest instanceof EnableComponentRequest) {
                    clusterId = enableComponentRequest.clusterId;
                    componentName = enableComponentRequest.componentName;
                    body = enableComponentRequest.body
                    xLanguage = enableComponentRequest.xLanguage;
                } else {
                    clusterId = enableComponentRequest['cluster_id'];
                    componentName = enableComponentRequest['component_name'];
                    body = enableComponentRequest['body'];
                    xLanguage = enableComponentRequest['X-Language'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling enableComponent.');
            }
            if (componentName === null || componentName === undefined) {
            throw new RequiredError('componentName','Required parameter componentName was null or undefined when calling enableComponent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'component_name': componentName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容指定类型的集群节点
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandClusterComponent(expandClusterComponentRequest?: ExpandClusterComponentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let xLanguage;

            if (expandClusterComponentRequest !== null && expandClusterComponentRequest !== undefined) {
                if (expandClusterComponentRequest instanceof ExpandClusterComponentRequest) {
                    clusterId = expandClusterComponentRequest.clusterId;
                    xLanguage = expandClusterComponentRequest.xLanguage;
                    body = expandClusterComponentRequest.body
                } else {
                    clusterId = expandClusterComponentRequest['cluster_id'];
                    xLanguage = expandClusterComponentRequest['X-Language'];
                    body = expandClusterComponentRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling expandClusterComponent.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看用户创建的集群列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters(listClustersRequest?: ListClustersRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listClustersRequest !== null && listClustersRequest !== undefined) {
                if (listClustersRequest instanceof ListClustersRequest) {
                    offset = listClustersRequest.offset;
                    limit = listClustersRequest.limit;
                } else {
                    offset = listClustersRequest['offset'];
                    limit = listClustersRequest['limit'];
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
         * 重启集群的api入口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rebootCloudTableCluster(rebootCloudTableClusterRequest?: RebootCloudTableClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let xLanguage;

            if (rebootCloudTableClusterRequest !== null && rebootCloudTableClusterRequest !== undefined) {
                if (rebootCloudTableClusterRequest instanceof RebootCloudTableClusterRequest) {
                    clusterId = rebootCloudTableClusterRequest.clusterId;
                    body = rebootCloudTableClusterRequest.body
                    xLanguage = rebootCloudTableClusterRequest.xLanguage;
                } else {
                    clusterId = rebootCloudTableClusterRequest['cluster_id'];
                    body = rebootCloudTableClusterRequest['body'];
                    xLanguage = rebootCloudTableClusterRequest['X-Language'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling rebootCloudTableCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过集群ID唯一标识一个集群，根据集群ID查询特定CloudTable集群的详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterDetail(showClusterDetailRequest?: ShowClusterDetailRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;
            
            let clusterId;

            if (showClusterDetailRequest !== null && showClusterDetailRequest !== undefined) {
                if (showClusterDetailRequest instanceof ShowClusterDetailRequest) {
                    xLanguage = showClusterDetailRequest.xLanguage;
                    clusterId = showClusterDetailRequest.clusterId;
                } else {
                    xLanguage = showClusterDetailRequest['X-Language'];
                    clusterId = showClusterDetailRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterDetail.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterSetting(showClusterSettingRequest?: ShowClusterSettingRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/setting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let xLanguage;

            if (showClusterSettingRequest !== null && showClusterSettingRequest !== undefined) {
                if (showClusterSettingRequest instanceof ShowClusterSettingRequest) {
                    clusterId = showClusterSettingRequest.clusterId;
                    xLanguage = showClusterSettingRequest.xLanguage;
                } else {
                    clusterId = showClusterSettingRequest['cluster_id'];
                    xLanguage = showClusterSettingRequest['X-Language'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterSetting.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改集群配置
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterSetting(updateClusterSettingRequest?: UpdateClusterSettingRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/setting",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let xLanguage;

            if (updateClusterSettingRequest !== null && updateClusterSettingRequest !== undefined) {
                if (updateClusterSettingRequest instanceof UpdateClusterSettingRequest) {
                    clusterId = updateClusterSettingRequest.clusterId;
                    body = updateClusterSettingRequest.body
                    xLanguage = updateClusterSettingRequest.xLanguage;
                } else {
                    clusterId = updateClusterSettingRequest['cluster_id'];
                    body = updateClusterSettingRequest['body'];
                    xLanguage = updateClusterSettingRequest['X-Language'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterSetting.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个CloudTable集群。
         * 使用接口前，您需要先获取如下资源信息。
         * - 通过VPC创建或查询VPC、子网
         * - 通过安全组创建或查询可用的security_group_id
         * 
         * 本接口是一个同步接口，当创建CloudTable集群成功后会返回集群id。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCloudTableCluster(createCloudTableClusterRequest?: CreateCloudTableClusterRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createCloudTableClusterRequest !== null && createCloudTableClusterRequest !== undefined) {
                if (createCloudTableClusterRequest instanceof CreateCloudTableClusterRequest) {
                    body = createCloudTableClusterRequest.body
                    xLanguage = createCloudTableClusterRequest.xLanguage;
                } else {
                    body = createCloudTableClusterRequest['body'];
                    xLanguage = createCloudTableClusterRequest['X-Language'];
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
    
    }
};

function newClient(client: HcClient): CloudTableClient {
    return new CloudTableClient(client);
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