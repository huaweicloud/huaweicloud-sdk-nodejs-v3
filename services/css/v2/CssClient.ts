import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { CreateClusterBackupStrategyBody } from './model/CreateClusterBackupStrategyBody';
import { CreateClusterBody } from './model/CreateClusterBody';
import { CreateClusterDatastoreBody } from './model/CreateClusterDatastoreBody';
import { CreateClusterElbWhiteList } from './model/CreateClusterElbWhiteList';
import { CreateClusterInstanceNicsBody } from './model/CreateClusterInstanceNicsBody';
import { CreateClusterInstanceVolumeBody } from './model/CreateClusterInstanceVolumeBody';
import { CreateClusterLoadBalance } from './model/CreateClusterLoadBalance';
import { CreateClusterPublicEip } from './model/CreateClusterPublicEip';
import { CreateClusterPublicEipSize } from './model/CreateClusterPublicEipSize';
import { CreateClusterPublicIpReq } from './model/CreateClusterPublicIpReq';
import { CreateClusterPublicKibanaElbWhiteList } from './model/CreateClusterPublicKibanaElbWhiteList';
import { CreateClusterPublicKibanaReq } from './model/CreateClusterPublicKibanaReq';
import { CreateClusterReq } from './model/CreateClusterReq';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResp } from './model/CreateClusterResp';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateClusterRolesBody } from './model/CreateClusterRolesBody';
import { CreateClusterTagsBody } from './model/CreateClusterTagsBody';
import { DeleteConfReqNew } from './model/DeleteConfReqNew';
import { DeleteLogstashConfRequest } from './model/DeleteLogstashConfRequest';
import { DeleteLogstashConfResponse } from './model/DeleteLogstashConfResponse';
import { DeleteLogstashTemplateRequest } from './model/DeleteLogstashTemplateRequest';
import { DeleteLogstashTemplateResponse } from './model/DeleteLogstashTemplateResponse';
import { DeleteTemplateReqNew } from './model/DeleteTemplateReqNew';
import { DiskEncryptionInfo } from './model/DiskEncryptionInfo';
import { PayInfoBody } from './model/PayInfoBody';
import { RestartClusterReq } from './model/RestartClusterReq';
import { RestartClusterRequest } from './model/RestartClusterRequest';
import { RestartClusterResponse } from './model/RestartClusterResponse';
import { RollingRestartReq } from './model/RollingRestartReq';
import { RollingRestartRequest } from './model/RollingRestartRequest';
import { RollingRestartResponse } from './model/RollingRestartResponse';
import { StartAutoCreateSnapshotsReq } from './model/StartAutoCreateSnapshotsReq';
import { StartAutoCreateSnapshotsRequest } from './model/StartAutoCreateSnapshotsRequest';
import { StartAutoCreateSnapshotsResponse } from './model/StartAutoCreateSnapshotsResponse';
import { StopAutoCreateSnapshotsRequest } from './model/StopAutoCreateSnapshotsRequest';
import { StopAutoCreateSnapshotsResponse } from './model/StopAutoCreateSnapshotsResponse';

export class CssClient {
    public static newBuilder(): ClientBuilder<CssClient> {
            let client = new ClientBuilder<CssClient>(newClient);
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
     * 该接口用于创建拥有多种不同节点类型（ess，ess-cold，ess-client，ess-master）组合的集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群V2
     * @param {CreateClusterReq} createClusterReq 
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
     * 该接口可以用于重启当前集群拥有的全部节点类型，或部分节点类型组合的节点。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启集群V2
     * @param {string} clusterId 指定重启集群ID。
     * @param {RestartClusterReq} restartClusterRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartCluster(restartClusterRequest?: RestartClusterRequest): Promise<RestartClusterResponse> {
        const options = ParamCreater().restartCluster(restartClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口会一个一个重启节点，在索引数量比较多的情况下耗时较长
     * 
     * &gt;仅当集群的节点数量（含Master节点、Client节点和冷数据节点）大于3时，才支持滚动重启
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 滚动重启
     * @param {string} clusterId 指定重启集群ID。
     * @param {RollingRestartReq} rollingRestartReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public rollingRestart(rollingRestartRequest?: RollingRestartRequest): Promise<RollingRestartResponse> {
        const options = ParamCreater().rollingRestart(rollingRestartRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于打开自动备份功能
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启自动创建快照功能
     * @param {string} clusterId 快照所属的集群的ID。
     * @param {StartAutoCreateSnapshotsReq} startAutoCreateSnapshotsReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startAutoCreateSnapshots(startAutoCreateSnapshotsRequest?: StartAutoCreateSnapshotsRequest): Promise<StartAutoCreateSnapshotsResponse> {
        const options = ParamCreater().startAutoCreateSnapshots(startAutoCreateSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于关闭自动备份功能。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭自动创建快照功能
     * @param {string} clusterId 快照所属的集群的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopAutoCreateSnapshots(stopAutoCreateSnapshotsRequest?: StopAutoCreateSnapshotsRequest): Promise<StopAutoCreateSnapshotsResponse> {
        const options = ParamCreater().stopAutoCreateSnapshots(stopAutoCreateSnapshotsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除配置文件。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除配置文件
     * @param {string} clusterId 指定删除配置文件的集群ID。获取方法请参见[获取集群ID](css_03_0101.xml)。
     * @param {DeleteConfReqNew} deleteConfReq 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogstashConf(deleteLogstashConfRequest?: DeleteLogstashConfRequest): Promise<DeleteLogstashConfResponse> {
        const options = ParamCreater().deleteLogstashConf(deleteLogstashConfRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 此接口用于删除自定义模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除自定义模板
     * @param {DeleteTemplateReqNew} deleteTemplateReqNew 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLogstashTemplate(deleteLogstashTemplateRequest?: DeleteLogstashTemplateRequest): Promise<DeleteLogstashTemplateResponse> {
        const options = ParamCreater().deleteLogstashTemplate(deleteLogstashTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于创建拥有多种不同节点类型（ess，ess-cold，ess-client，ess-master）组合的集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/clusters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createClusterRequest !== null && createClusterRequest !== undefined) {
                if (createClusterRequest instanceof CreateClusterRequest) {
                    body = createClusterRequest.body
                } else {
                    body = createClusterRequest['body'];
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
         * 该接口可以用于重启当前集群拥有的全部节点类型，或部分节点类型组合的节点。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCluster(restartClusterRequest?: RestartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/clusters/{cluster_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (restartClusterRequest !== null && restartClusterRequest !== undefined) {
                if (restartClusterRequest instanceof RestartClusterRequest) {
                    clusterId = restartClusterRequest.clusterId;
                    body = restartClusterRequest.body
                } else {
                    clusterId = restartClusterRequest['cluster_id'];
                    body = restartClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling restartCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口会一个一个重启节点，在索引数量比较多的情况下耗时较长
         * 
         * &gt;仅当集群的节点数量（含Master节点、Client节点和冷数据节点）大于3时，才支持滚动重启
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        rollingRestart(rollingRestartRequest?: RollingRestartRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/clusters/{cluster_id}/rolling-restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (rollingRestartRequest !== null && rollingRestartRequest !== undefined) {
                if (rollingRestartRequest instanceof RollingRestartRequest) {
                    clusterId = rollingRestartRequest.clusterId;
                    body = rollingRestartRequest.body
                } else {
                    clusterId = rollingRestartRequest['cluster_id'];
                    body = rollingRestartRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling rollingRestart.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于打开自动备份功能
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startAutoCreateSnapshots(startAutoCreateSnapshotsRequest?: StartAutoCreateSnapshotsRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/clusters/{cluster_id}/snapshots/policy/open",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startAutoCreateSnapshotsRequest !== null && startAutoCreateSnapshotsRequest !== undefined) {
                if (startAutoCreateSnapshotsRequest instanceof StartAutoCreateSnapshotsRequest) {
                    clusterId = startAutoCreateSnapshotsRequest.clusterId;
                    body = startAutoCreateSnapshotsRequest.body
                } else {
                    clusterId = startAutoCreateSnapshotsRequest['cluster_id'];
                    body = startAutoCreateSnapshotsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startAutoCreateSnapshots.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于关闭自动备份功能。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopAutoCreateSnapshots(stopAutoCreateSnapshotsRequest?: StopAutoCreateSnapshotsRequest) {
            const options = {
                method: "PUT",
                url: "/v2.0/{project_id}/clusters/{cluster_id}/snapshots/policy/close",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (stopAutoCreateSnapshotsRequest !== null && stopAutoCreateSnapshotsRequest !== undefined) {
                if (stopAutoCreateSnapshotsRequest instanceof StopAutoCreateSnapshotsRequest) {
                    clusterId = stopAutoCreateSnapshotsRequest.clusterId;
                } else {
                    clusterId = stopAutoCreateSnapshotsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopAutoCreateSnapshots.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除配置文件。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogstashConf(deleteLogstashConfRequest?: DeleteLogstashConfRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/clusters/{cluster_id}/lgsconf/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteLogstashConfRequest !== null && deleteLogstashConfRequest !== undefined) {
                if (deleteLogstashConfRequest instanceof DeleteLogstashConfRequest) {
                    clusterId = deleteLogstashConfRequest.clusterId;
                    body = deleteLogstashConfRequest.body
                } else {
                    clusterId = deleteLogstashConfRequest['cluster_id'];
                    body = deleteLogstashConfRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteLogstashConf.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 此接口用于删除自定义模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLogstashTemplate(deleteLogstashTemplateRequest?: DeleteLogstashTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2.0/{project_id}/lgsconf/deletetemplate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteLogstashTemplateRequest !== null && deleteLogstashTemplateRequest !== undefined) {
                if (deleteLogstashTemplateRequest instanceof DeleteLogstashTemplateRequest) {
                    body = deleteLogstashTemplateRequest.body
                } else {
                    body = deleteLogstashTemplateRequest['body'];
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
    
    }
};

function newClient(client: HcClient): CssClient {
    return new CssClient(client);
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