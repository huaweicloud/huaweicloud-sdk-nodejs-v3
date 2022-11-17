import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ClusterNode } from './model/ClusterNode';
import { CreateEngineRequest } from './model/CreateEngineRequest';
import { CreateEngineResponse } from './model/CreateEngineResponse';
import { CreateKieReq } from './model/CreateKieReq';
import { DeleteEngineRequest } from './model/DeleteEngineRequest';
import { DeleteEngineResponse } from './model/DeleteEngineResponse';
import { DownloadKieReqBody } from './model/DownloadKieReqBody';
import { DownloadKieRequest } from './model/DownloadKieRequest';
import { DownloadKieResponse } from './model/DownloadKieResponse';
import { DownloadKieResponseBodyMetadata } from './model/DownloadKieResponseBodyMetadata';
import { EngineCreateReq } from './model/EngineCreateReq';
import { EngineExternalEntrypoint } from './model/EngineExternalEntrypoint';
import { EngineRbacPwd } from './model/EngineRbacPwd';
import { EngineReference } from './model/EngineReference';
import { EngineSimpleInfo } from './model/EngineSimpleInfo';
import { EntrypointItem } from './model/EntrypointItem';
import { FlavorBrief } from './model/FlavorBrief';
import { ListEnginesRequest } from './model/ListEnginesRequest';
import { ListEnginesResponse } from './model/ListEnginesResponse';
import { ListFlavorsRequest } from './model/ListFlavorsRequest';
import { ListFlavorsResponse } from './model/ListFlavorsResponse';
import { ShowEngineJobRequest } from './model/ShowEngineJobRequest';
import { ShowEngineJobResponse } from './model/ShowEngineJobResponse';
import { ShowEngineRequest } from './model/ShowEngineRequest';
import { ShowEngineResponse } from './model/ShowEngineResponse';
import { Spec } from './model/Spec';
import { SpecClusterNode } from './model/SpecClusterNode';
import { Task } from './model/Task';
import { TaskExecutorBrief } from './model/TaskExecutorBrief';
import { TaskSteps } from './model/TaskSteps';

export class CseClient {
    public static newBuilder(): ClientBuilder<CseClient> {
        return new ClientBuilder<CseClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 创建微服务引擎专享版。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 创建微服务引擎专享版
     * @param {EngineCreateReq} createEngineRequestBody 创建微服务专享版请求结构体。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createEngine(createEngineRequest?: CreateEngineRequest): Promise<CreateEngineResponse> {
        const options = ParamCreater().createEngine(createEngineRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除微服务引擎专享版。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 删除微服务引擎专享版
     * @param {string} engineId 微服务引擎专享版ID
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteEngine(deleteEngineRequest?: DeleteEngineRequest): Promise<DeleteEngineResponse> {
        const options = ParamCreater().deleteEngine(deleteEngineRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出kie配置
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 导出kie配置
     * @param {string} xEngineId 微服务引擎专享版ID。
     * @param {DownloadKieReqBody} downloadKieRequestBody 导出的配置ID列表，如不填时，按label匹配规则全量导出，如填写的id对应的label不匹配label过滤项，则导出会忽略此id。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;
     * @param {string} [label] 按label过滤项导出，格式为：{标签key}:{标签value}
     * @param {'exact'} [match] 对label过滤项的匹配选项，如果值为exact：表示严格匹配，包括label个数和内容相等；不填表示包含匹配
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadKie(downloadKieRequest?: DownloadKieRequest): Promise<DownloadKieResponse> {
        const options = ParamCreater().downloadKie(downloadKieRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎列表。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询微服务引擎列表
     * @param {number} [offset] 偏移量。
     * @param {string} [limit] 每页显示的条目数量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listEngines(listEnginesRequest?: ListEnginesRequest): Promise<ListEnginesResponse> {
        const options = ParamCreater().listEngines(listEnginesRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎专享版的规格列表。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询微服务引擎专享版的规格列表
     * @param {string} [specType] 微服务引擎专享版应用部署类型，查询CSE微服务引擎专享版需要将该值设置为CSE2。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFlavors(listFlavorsRequest?: ListFlavorsRequest): Promise<ListFlavorsResponse> {
        const options = ParamCreater().listFlavors(listFlavorsRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎专享版详情
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询微服务引擎专享版详情
     * @param {string} engineId 微服务引擎专享版ID。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngine(showEngineRequest?: ShowEngineRequest): Promise<ShowEngineResponse> {
        const options = ParamCreater().showEngine(showEngineRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询微服务引擎任务详情。
     * 
     * 详细说明请参考华为云API Explorer。
     * Please refer to Huawei cloud API Explorer for details.
     *
     * @summary 查询微服务引擎任务详情
     * @param {string} engineId 微服务引擎专享版ID。
     * @param {string} jobId 任务ID。
     * @param {string} [xEnterpriseProjectID] 如果不带则默认企业项目为\&quot;default\&quot;，ID为\&quot;0\&quot;。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEngineJob(showEngineJobRequest?: ShowEngineJobRequest): Promise<ShowEngineJobResponse> {
        const options = ParamCreater().showEngineJob(showEngineJobRequest);
        options['responseHeaders'] = [''];
        // @ts-ignore
        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建微服务引擎专享版。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        createEngine(createEngineRequest?: CreateEngineRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/enginemgr/engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            var body: any;
            let xEnterpriseProjectID;

            if (createEngineRequest !== null && createEngineRequest !== undefined) {
                if (createEngineRequest instanceof CreateEngineRequest) {
                    body = createEngineRequest.body
                    xEnterpriseProjectID = createEngineRequest.xEnterpriseProjectID;
                } else {
                    body = createEngineRequest['body'];
                    xEnterpriseProjectID = createEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除微服务引擎专享版。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        deleteEngine(deleteEngineRequest?: DeleteEngineRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let engineId;
            let xEnterpriseProjectID;

            if (deleteEngineRequest !== null && deleteEngineRequest !== undefined) {
                if (deleteEngineRequest instanceof DeleteEngineRequest) {
                    engineId = deleteEngineRequest.engineId;
                    xEnterpriseProjectID = deleteEngineRequest.xEnterpriseProjectID;
                } else {
                    engineId = deleteEngineRequest['engine_id'];
                    xEnterpriseProjectID = deleteEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling deleteEngine.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出kie配置
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        downloadKie(downloadKieRequest?: DownloadKieRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/kie/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            var body: any;
            let xEngineId;
            let xEnterpriseProjectID;
            let label;
            let match;

            if (downloadKieRequest !== null && downloadKieRequest !== undefined) {
                if (downloadKieRequest instanceof DownloadKieRequest) {
                    xEngineId = downloadKieRequest.xEngineId;
                    body = downloadKieRequest.body
                    xEnterpriseProjectID = downloadKieRequest.xEnterpriseProjectID;
                    label = downloadKieRequest.label;
                    match = downloadKieRequest.match;
                } else {
                    xEngineId = downloadKieRequest['x-engine-id'];
                    body = downloadKieRequest['body'];
                    xEnterpriseProjectID = downloadKieRequest['X-Enterprise-Project-ID'];
                    label = downloadKieRequest['label'];
                    match = downloadKieRequest['match'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (label !== null && label !== undefined) {
                localVarQueryParameter['label'] = label;
            }
            if (match !== null && match !== undefined) {
                localVarQueryParameter['match'] = match;
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }
            if (xEngineId !== undefined && xEngineId !== null) {
                localVarHeaderParameter['x-engine-id'] = String(xEngineId);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎列表。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listEngines(listEnginesRequest?: ListEnginesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/engines",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let offset;
            let limit;

            if (listEnginesRequest !== null && listEnginesRequest !== undefined) {
                if (listEnginesRequest instanceof ListEnginesRequest) {
                    offset = listEnginesRequest.offset;
                    limit = listEnginesRequest.limit;
                } else {
                    offset = listEnginesRequest['offset'];
                    limit = listEnginesRequest['limit'];
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
         * 查询微服务引擎专享版的规格列表。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        listFlavors(listFlavorsRequest?: ListFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/flavors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let specType;

            if (listFlavorsRequest !== null && listFlavorsRequest !== undefined) {
                if (listFlavorsRequest instanceof ListFlavorsRequest) {
                    specType = listFlavorsRequest.specType;
                } else {
                    specType = listFlavorsRequest['spec_type'];
                }
            }

        
            if (specType !== null && specType !== undefined) {
                localVarQueryParameter['spec_type'] = specType;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎专享版详情
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showEngine(showEngineRequest?: ShowEngineRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let engineId;
            let xEnterpriseProjectID;

            if (showEngineRequest !== null && showEngineRequest !== undefined) {
                if (showEngineRequest instanceof ShowEngineRequest) {
                    engineId = showEngineRequest.engineId;
                    xEnterpriseProjectID = showEngineRequest.xEnterpriseProjectID;
                } else {
                    engineId = showEngineRequest['engine_id'];
                    xEnterpriseProjectID = showEngineRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling showEngine.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'engine_id': engineId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询微服务引擎任务详情。
         * 
         * 详细说明请参考华为云API Explorer。
         * Please refer to Huawei cloud API Explorer for details.
         */
        showEngineJob(showEngineJobRequest?: ShowEngineJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/enginemgr/engines/{engine_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let engineId;
            let jobId;
            let xEnterpriseProjectID;

            if (showEngineJobRequest !== null && showEngineJobRequest !== undefined) {
                if (showEngineJobRequest instanceof ShowEngineJobRequest) {
                    engineId = showEngineJobRequest.engineId;
                    jobId = showEngineJobRequest.jobId;
                    xEnterpriseProjectID = showEngineJobRequest.xEnterpriseProjectID;
                } else {
                    engineId = showEngineJobRequest['engine_id'];
                    jobId = showEngineJobRequest['job_id'];
                    xEnterpriseProjectID = showEngineJobRequest['X-Enterprise-Project-ID'];
                }
            }

        
            if (engineId === null || engineId === undefined) {
            throw new RequiredError('engineId','Required parameter engineId was null or undefined when calling showEngineJob.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showEngineJob.');
            }
            if (xEnterpriseProjectID !== undefined && xEnterpriseProjectID !== null) {
                localVarHeaderParameter['X-Enterprise-Project-ID'] = String(xEnterpriseProjectID);
            }

            options.pathParams = { 'engine_id': engineId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CseClient {
    return new CseClient(client);
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