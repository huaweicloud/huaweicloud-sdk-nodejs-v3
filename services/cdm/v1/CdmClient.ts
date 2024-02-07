import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionProgress } from './model/ActionProgress';
import { CdmCreateAndUpdateLinkReq } from './model/CdmCreateAndUpdateLinkReq';
import { CdmCreateClusterReq } from './model/CdmCreateClusterReq';
import { CdmCreateClusterReqCluster } from './model/CdmCreateClusterReqCluster';
import { CdmCreateJobJsonReq } from './model/CdmCreateJobJsonReq';
import { CdmDeleteClusterReq } from './model/CdmDeleteClusterReq';
import { CdmQueryClusterDetailsRepsonseMaintainWindow } from './model/CdmQueryClusterDetailsRepsonseMaintainWindow';
import { CdmQueryClusterDetailsRepsonsePublicEndpointStatus } from './model/CdmQueryClusterDetailsRepsonsePublicEndpointStatus';
import { CdmRandomCreateAndStartJobJsonReq } from './model/CdmRandomCreateAndStartJobJsonReq';
import { CdmRestartClusterReq } from './model/CdmRestartClusterReq';
import { CdmRestartClusterReqRestart } from './model/CdmRestartClusterReqRestart';
import { CdmStartClusterReq } from './model/CdmStartClusterReq';
import { CdmStartJobReq } from './model/CdmStartJobReq';
import { CdmStopClusterReq } from './model/CdmStopClusterReq';
import { CdmStopClusterReqStop } from './model/CdmStopClusterReqStop';
import { CdmUpdateJobJsonReq } from './model/CdmUpdateJobJsonReq';
import { ClusterDetailInstance } from './model/ClusterDetailInstance';
import { ClusterDetailInstanceFlavor } from './model/ClusterDetailInstanceFlavor';
import { ClusterDetailInstanceVolume } from './model/ClusterDetailInstanceVolume';
import { ClusterInstance } from './model/ClusterInstance';
import { ClusterLinks } from './model/ClusterLinks';
import { ClusterTask } from './model/ClusterTask';
import { Clusters } from './model/Clusters';
import { ConfigValues } from './model/ConfigValues';
import { Configs } from './model/Configs';
import { Counter } from './model/Counter';
import { Counters } from './model/Counters';
import { CreateAndStartRandomClusterJobRequest } from './model/CreateAndStartRandomClusterJobRequest';
import { CreateAndStartRandomClusterJobResponse } from './model/CreateAndStartRandomClusterJobResponse';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateJobRequest } from './model/CreateJobRequest';
import { CreateJobResponse } from './model/CreateJobResponse';
import { CreateLinkRequest } from './model/CreateLinkRequest';
import { CreateLinkResponse } from './model/CreateLinkResponse';
import { CustomerConfig } from './model/CustomerConfig';
import { Datastore } from './model/Datastore';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteJobRequest } from './model/DeleteJobRequest';
import { DeleteJobResponse } from './model/DeleteJobResponse';
import { DeleteLinkRequest } from './model/DeleteLinkRequest';
import { DeleteLinkResponse } from './model/DeleteLinkResponse';
import { ExtendedConfigs } from './model/ExtendedConfigs';
import { ExtendedProperties } from './model/ExtendedProperties';
import { FailedReasons } from './model/FailedReasons';
import { FailedReasonsCREATEFAILED } from './model/FailedReasonsCREATEFAILED';
import { Input } from './model/Input';
import { Instance } from './model/Instance';
import { Job } from './model/Job';
import { JobValidationResult } from './model/JobValidationResult';
import { Links } from './model/Links';
import { LinksLinkconfigvalues } from './model/LinksLinkconfigvalues';
import { LinksLinkconfigvaluesExtendedconfigs } from './model/LinksLinkconfigvaluesExtendedconfigs';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { Nics } from './model/Nics';
import { Resource } from './model/Resource';
import { RestartClusterRequest } from './model/RestartClusterRequest';
import { RestartClusterResponse } from './model/RestartClusterResponse';
import { ShowClusterDetailRequest } from './model/ShowClusterDetailRequest';
import { ShowClusterDetailResponse } from './model/ShowClusterDetailResponse';
import { ShowJobStatusRequest } from './model/ShowJobStatusRequest';
import { ShowJobStatusResponse } from './model/ShowJobStatusResponse';
import { ShowJobsRequest } from './model/ShowJobsRequest';
import { ShowJobsResponse } from './model/ShowJobsResponse';
import { ShowLinkRequest } from './model/ShowLinkRequest';
import { ShowLinkResponse } from './model/ShowLinkResponse';
import { ShowSubmissionsRequest } from './model/ShowSubmissionsRequest';
import { ShowSubmissionsResponse } from './model/ShowSubmissionsResponse';
import { StartClusterRequest } from './model/StartClusterRequest';
import { StartClusterResponse } from './model/StartClusterResponse';
import { StartJobRequest } from './model/StartJobRequest';
import { StartJobResponse } from './model/StartJobResponse';
import { StartJobSubmission } from './model/StartJobSubmission';
import { StopClusterRequest } from './model/StopClusterRequest';
import { StopClusterResponse } from './model/StopClusterResponse';
import { StopJobRequest } from './model/StopJobRequest';
import { StopJobResponse } from './model/StopJobResponse';
import { Submission } from './model/Submission';
import { SysTags } from './model/SysTags';
import { Task } from './model/Task';
import { UpdateJobRequest } from './model/UpdateJobRequest';
import { UpdateJobResponse } from './model/UpdateJobResponse';
import { UpdateLinkRequest } from './model/UpdateLinkRequest';
import { UpdateLinkResponse } from './model/UpdateLinkResponse';
import { ValidationLinkConfig } from './model/ValidationLinkConfig';
import { ValidationResult } from './model/ValidationResult';

export class CdmClient {
    public static newBuilder(): ClientBuilder<CdmClient> {
            return new ClientBuilder<CdmClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 随机集群创建作业并执行接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 随机集群创建作业并执行
     * @param {string} xLanguage 请求语言。
     * @param {CdmRandomCreateAndStartJobJsonReq} cdmRandomCreateAndStartJobJsonReq this is start job json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAndStartRandomClusterJob(createAndStartRandomClusterJobRequest?: CreateAndStartRandomClusterJobRequest): Promise<CreateAndStartRandomClusterJobResponse> {
        const options = ParamCreater().createAndStartRandomClusterJob(createAndStartRandomClusterJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建集群接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {string} xLanguage 请求语言。
     * @param {CdmCreateClusterReq} cdmCreateClusterReq 创建集群请求JSON体
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
     * 指定集群创建作业接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定集群创建作业
     * @param {string} clusterId 集群ID
     * @param {CdmCreateJobJsonReq} cdmStartJobJsonReq this is start job json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createJob(createJobRequest?: CreateJobRequest): Promise<CreateJobResponse> {
        const options = ParamCreater().createJob(createJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建连接接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建连接
     * @param {string} clusterId 集群ID
     * @param {CdmCreateAndUpdateLinkReq} cdmCreateLinkReq 创建连接请求JSON
     * @param {string} [validate] 为“true”时，此API仅校验参数是否正确，不创建连接
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createLink(createLinkRequest?: CreateLinkRequest): Promise<CreateLinkResponse> {
        const options = ParamCreater().createLink(createLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除集群接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId 集群ID
     * @param {CdmDeleteClusterReq} cdmDeleteClusterReq 删除集群请求JSON体
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
     * 删除作业接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除作业
     * @param {string} clusterId 集群ID
     * @param {string} jobName 作业名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteJob(deleteJobRequest?: DeleteJobRequest): Promise<DeleteJobResponse> {
        const options = ParamCreater().deleteJob(deleteJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除连接接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除连接
     * @param {string} clusterId 集群ID
     * @param {string} linkName 需要删除的连接名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteLink(deleteLinkRequest?: DeleteLinkRequest): Promise<DeleteLinkResponse> {
        const options = ParamCreater().deleteLink(deleteLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群列表接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusters(listClustersRequest?: ListClustersRequest): Promise<ListClustersResponse> {
        const options = ParamCreater().listClusters();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 重启集群接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 重启集群
     * @param {string} clusterId 集群ID
     * @param {CdmRestartClusterReq} cdmRestartClusterReq 重启集群请求JSON
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
     * 查询集群详情接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群详情
     * @param {string} clusterId 集群ID
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
     * 查询作业状态接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业状态
     * @param {string} clusterId 集群ID
     * @param {string} jobName 作业名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobStatus(showJobStatusRequest?: ShowJobStatusRequest): Promise<ShowJobStatusResponse> {
        const options = ParamCreater().showJobStatus(showJobStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业
     * @param {string} clusterId 集群ID
     * @param {string} jobName 查询多个作业用all,查询单个作业输入作业名
     * @param {string} [filter] 当“job_name”为“all”时，此参数用于模糊过滤作业
     * @param {number} [pageNo] 指定作业页号
     * @param {number} [pageSize] 每页作业数，值在10-100之间
     * @param {'NORMAL_JOB' | 'BATCH_JOB' | 'SCENARIO_JOB'} [jobType] 作业类型: - jobType&#x3D;NORMAL_JOB：表示查询表/文件迁移的作业。 - jobType&#x3D;BATCH_JOB：表示查询整库迁移的作业。 - jobType&#x3D;SCENARIO_JOB：表示查询场景迁移的作业。 - 不指定该参数时，默认只查询表/文件迁移的作业。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobs(showJobsRequest?: ShowJobsRequest): Promise<ShowJobsResponse> {
        const options = ParamCreater().showJobs(showJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询连接接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询连接
     * @param {string} clusterId 集群ID
     * @param {string} linkName 连接名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLink(showLinkRequest?: ShowLinkRequest): Promise<ShowLinkResponse> {
        const options = ParamCreater().showLink(showLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询作业执行历史接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业执行历史
     * @param {string} clusterId 集群ID
     * @param {string} jname 作业名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSubmissions(showSubmissionsRequest?: ShowSubmissionsRequest): Promise<ShowSubmissionsResponse> {
        const options = ParamCreater().showSubmissions(showSubmissionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动集群接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动集群
     * @param {string} clusterId 集群ID
     * @param {CdmStartClusterReq} cdmStartClusterReq 启动集群请求JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startCluster(startClusterRequest?: StartClusterRequest): Promise<StartClusterResponse> {
        const options = ParamCreater().startCluster(startClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动作业接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动作业
     * @param {string} clusterId 集群ID
     * @param {string} jobName 作业名称
     * @param {CdmStartJobReq} [cdmStartJobReq] 运行作业请求json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startJob(startJobRequest?: StartJobRequest): Promise<StartJobResponse> {
        const options = ParamCreater().startJob(startJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止集群接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止集群
     * @param {string} clusterId 集群ID
     * @param {CdmStopClusterReq} cdmStopClusterReq 停止集群请求JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopCluster(stopClusterRequest?: StopClusterRequest): Promise<StopClusterResponse> {
        const options = ParamCreater().stopCluster(stopClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止作业接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止作业
     * @param {string} clusterId 集群ID
     * @param {string} jobName 作业名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopJob(stopJobRequest?: StopJobRequest): Promise<StopJobResponse> {
        const options = ParamCreater().stopJob(stopJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改作业接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改作业
     * @param {string} clusterId 集群ID
     * @param {string} jobName 作业名称。
     * @param {CdmUpdateJobJsonReq} cdmUpdateJobJsonReq this is update job json
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateJob(updateJobRequest?: UpdateJobRequest): Promise<UpdateJobResponse> {
        const options = ParamCreater().updateJob(updateJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改连接接口。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改连接
     * @param {string} clusterId 集群ID
     * @param {string} linkName 连接名称
     * @param {CdmCreateAndUpdateLinkReq} cdmUpdateLinkReq 创建连接请求JSON
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateLink(updateLinkRequest?: UpdateLinkRequest): Promise<UpdateLinkResponse> {
        const options = ParamCreater().updateLink(updateLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 随机集群创建作业并执行接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAndStartRandomClusterJob(createAndStartRandomClusterJobRequest?: CreateAndStartRandomClusterJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/job",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createAndStartRandomClusterJobRequest !== null && createAndStartRandomClusterJobRequest !== undefined) {
                if (createAndStartRandomClusterJobRequest instanceof CreateAndStartRandomClusterJobRequest) {
                    xLanguage = createAndStartRandomClusterJobRequest.xLanguage;
                    body = createAndStartRandomClusterJobRequest.body
                } else {
                    xLanguage = createAndStartRandomClusterJobRequest['X-Language'];
                    body = createAndStartRandomClusterJobRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建集群接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCluster(createClusterRequest?: CreateClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定集群创建作业接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createJob(createJobRequest?: CreateJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createJobRequest !== null && createJobRequest !== undefined) {
                if (createJobRequest instanceof CreateJobRequest) {
                    clusterId = createJobRequest.clusterId;
                    body = createJobRequest.body
                } else {
                    clusterId = createJobRequest['cluster_id'];
                    body = createJobRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建连接接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createLink(createLinkRequest?: CreateLinkRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/link",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let clusterId;
            
            let validate;

            if (createLinkRequest !== null && createLinkRequest !== undefined) {
                if (createLinkRequest instanceof CreateLinkRequest) {
                    clusterId = createLinkRequest.clusterId;
                    body = createLinkRequest.body
                    validate = createLinkRequest.validate;
                } else {
                    clusterId = createLinkRequest['cluster_id'];
                    body = createLinkRequest['body'];
                    validate = createLinkRequest['validate'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createLink.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (validate !== null && validate !== undefined) {
                localVarQueryParameter['validate'] = validate;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除集群接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.1/{project_id}/clusters/{cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                    body = deleteClusterRequest.body
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                    body = deleteClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除作业接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJob(deleteJobRequest?: DeleteJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job/{job_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let jobName;

            if (deleteJobRequest !== null && deleteJobRequest !== undefined) {
                if (deleteJobRequest instanceof DeleteJobRequest) {
                    clusterId = deleteJobRequest.clusterId;
                    jobName = deleteJobRequest.jobName;
                } else {
                    clusterId = deleteJobRequest['cluster_id'];
                    jobName = deleteJobRequest['job_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteJob.');
            }
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling deleteJob.');
            }

            options.pathParams = { 'cluster_id': clusterId,'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除连接接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteLink(deleteLinkRequest?: DeleteLinkRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/link/{link_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let linkName;

            if (deleteLinkRequest !== null && deleteLinkRequest !== undefined) {
                if (deleteLinkRequest instanceof DeleteLinkRequest) {
                    clusterId = deleteLinkRequest.clusterId;
                    linkName = deleteLinkRequest.linkName;
                } else {
                    clusterId = deleteLinkRequest['cluster_id'];
                    linkName = deleteLinkRequest['link_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteLink.');
            }
            if (linkName === null || linkName === undefined) {
            throw new RequiredError('linkName','Required parameter linkName was null or undefined when calling deleteLink.');
            }

            options.pathParams = { 'cluster_id': clusterId,'link_name': linkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群列表接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters() {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters",
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
         * 重启集群接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartCluster(restartClusterRequest?: RestartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/action",
                contentType: "application/json;charset=UTF-8",
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
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群详情接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterDetail(showClusterDetailRequest?: ShowClusterDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterDetailRequest !== null && showClusterDetailRequest !== undefined) {
                if (showClusterDetailRequest instanceof ShowClusterDetailRequest) {
                    clusterId = showClusterDetailRequest.clusterId;
                } else {
                    clusterId = showClusterDetailRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterDetail.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业状态接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobStatus(showJobStatusRequest?: ShowJobStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job/{job_name}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let jobName;

            if (showJobStatusRequest !== null && showJobStatusRequest !== undefined) {
                if (showJobStatusRequest instanceof ShowJobStatusRequest) {
                    clusterId = showJobStatusRequest.clusterId;
                    jobName = showJobStatusRequest.jobName;
                } else {
                    clusterId = showJobStatusRequest['cluster_id'];
                    jobName = showJobStatusRequest['job_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showJobStatus.');
            }
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling showJobStatus.');
            }

            options.pathParams = { 'cluster_id': clusterId,'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobs(showJobsRequest?: ShowJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job/{job_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let jobName;
            
            let filter;
            
            let pageNo;
            
            let pageSize;
            
            let jobType;

            if (showJobsRequest !== null && showJobsRequest !== undefined) {
                if (showJobsRequest instanceof ShowJobsRequest) {
                    clusterId = showJobsRequest.clusterId;
                    jobName = showJobsRequest.jobName;
                    filter = showJobsRequest.filter;
                    pageNo = showJobsRequest.pageNo;
                    pageSize = showJobsRequest.pageSize;
                    jobType = showJobsRequest.jobType;
                } else {
                    clusterId = showJobsRequest['cluster_id'];
                    jobName = showJobsRequest['job_name'];
                    filter = showJobsRequest['filter'];
                    pageNo = showJobsRequest['page_no'];
                    pageSize = showJobsRequest['page_size'];
                    jobType = showJobsRequest['jobType'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showJobs.');
            }
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling showJobs.');
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['jobType'] = jobType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId,'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询连接接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLink(showLinkRequest?: ShowLinkRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/link/{link_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let linkName;

            if (showLinkRequest !== null && showLinkRequest !== undefined) {
                if (showLinkRequest instanceof ShowLinkRequest) {
                    clusterId = showLinkRequest.clusterId;
                    linkName = showLinkRequest.linkName;
                } else {
                    clusterId = showLinkRequest['cluster_id'];
                    linkName = showLinkRequest['link_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showLink.');
            }
            if (linkName === null || linkName === undefined) {
            throw new RequiredError('linkName','Required parameter linkName was null or undefined when calling showLink.');
            }

            options.pathParams = { 'cluster_id': clusterId,'link_name': linkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询作业执行历史接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSubmissions(showSubmissionsRequest?: ShowSubmissionsRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/submissions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let jname;

            if (showSubmissionsRequest !== null && showSubmissionsRequest !== undefined) {
                if (showSubmissionsRequest instanceof ShowSubmissionsRequest) {
                    clusterId = showSubmissionsRequest.clusterId;
                    jname = showSubmissionsRequest.jname;
                } else {
                    clusterId = showSubmissionsRequest['cluster_id'];
                    jname = showSubmissionsRequest['jname'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showSubmissions.');
            }
            if (jname === null || jname === undefined) {
                throw new RequiredError('jname','Required parameter jname was null or undefined when calling showSubmissions.');
            }
            if (jname !== null && jname !== undefined) {
                localVarQueryParameter['jname'] = jname;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动集群接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startCluster(startClusterRequest?: StartClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (startClusterRequest !== null && startClusterRequest !== undefined) {
                if (startClusterRequest instanceof StartClusterRequest) {
                    clusterId = startClusterRequest.clusterId;
                    body = startClusterRequest.body
                } else {
                    clusterId = startClusterRequest['cluster_id'];
                    body = startClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动作业接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startJob(startJobRequest?: StartJobRequest) {
            const options = {
                method: "PUT",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job/{job_name}/start",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let jobName;

            if (startJobRequest !== null && startJobRequest !== undefined) {
                if (startJobRequest instanceof StartJobRequest) {
                    clusterId = startJobRequest.clusterId;
                    jobName = startJobRequest.jobName;
                    body = startJobRequest.body
                } else {
                    clusterId = startJobRequest['cluster_id'];
                    jobName = startJobRequest['job_name'];
                    body = startJobRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling startJob.');
            }
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling startJob.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止集群接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopCluster(stopClusterRequest?: StopClusterRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (stopClusterRequest !== null && stopClusterRequest !== undefined) {
                if (stopClusterRequest instanceof StopClusterRequest) {
                    clusterId = stopClusterRequest.clusterId;
                    body = stopClusterRequest.body
                } else {
                    clusterId = stopClusterRequest['cluster_id'];
                    body = stopClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopCluster.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止作业接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopJob(stopJobRequest?: StopJobRequest) {
            const options = {
                method: "PUT",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job/{job_name}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let jobName;

            if (stopJobRequest !== null && stopJobRequest !== undefined) {
                if (stopJobRequest instanceof StopJobRequest) {
                    clusterId = stopJobRequest.clusterId;
                    jobName = stopJobRequest.jobName;
                } else {
                    clusterId = stopJobRequest['cluster_id'];
                    jobName = stopJobRequest['job_name'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopJob.');
            }
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling stopJob.');
            }

            options.pathParams = { 'cluster_id': clusterId,'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改作业接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateJob(updateJobRequest?: UpdateJobRequest) {
            const options = {
                method: "PUT",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/job/{job_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let jobName;

            if (updateJobRequest !== null && updateJobRequest !== undefined) {
                if (updateJobRequest instanceof UpdateJobRequest) {
                    clusterId = updateJobRequest.clusterId;
                    jobName = updateJobRequest.jobName;
                    body = updateJobRequest.body
                } else {
                    clusterId = updateJobRequest['cluster_id'];
                    jobName = updateJobRequest['job_name'];
                    body = updateJobRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateJob.');
            }
            if (jobName === null || jobName === undefined) {
            throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling updateJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'job_name': jobName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改连接接口。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateLink(updateLinkRequest?: UpdateLinkRequest) {
            const options = {
                method: "PUT",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/cdm/link/{link_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;
            
            let linkName;

            if (updateLinkRequest !== null && updateLinkRequest !== undefined) {
                if (updateLinkRequest instanceof UpdateLinkRequest) {
                    clusterId = updateLinkRequest.clusterId;
                    linkName = updateLinkRequest.linkName;
                    body = updateLinkRequest.body
                } else {
                    clusterId = updateLinkRequest['cluster_id'];
                    linkName = updateLinkRequest['link_name'];
                    body = updateLinkRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateLink.');
            }
            if (linkName === null || linkName === undefined) {
            throw new RequiredError('linkName','Required parameter linkName was null or undefined when calling updateLink.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId,'link_name': linkName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CdmClient {
    return new CdmClient(client);
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