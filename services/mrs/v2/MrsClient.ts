import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddComponentRequest } from './model/AddComponentRequest';
import { AddComponentResponse } from './model/AddComponentResponse';
import { AddComponentsReq } from './model/AddComponentsReq';
import { AddJobsReqV11 } from './model/AddJobsReqV11';
import { AgencyMapping } from './model/AgencyMapping';
import { AgencyMappingArray } from './model/AgencyMappingArray';
import { AssignedNodeGroup } from './model/AssignedNodeGroup';
import { AutoScalingPolicy } from './model/AutoScalingPolicy';
import { AutoScalingPolicyDeleteReq } from './model/AutoScalingPolicyDeleteReq';
import { AutoScalingPolicyInfo } from './model/AutoScalingPolicyInfo';
import { AutoScalingPolicyV2 } from './model/AutoScalingPolicyV2';
import { AzFlavors } from './model/AzFlavors';
import { BatchDeleteJobsRequest } from './model/BatchDeleteJobsRequest';
import { BatchDeleteJobsResponse } from './model/BatchDeleteJobsResponse';
import { BootstrapScript } from './model/BootstrapScript';
import { CancelSqlRequest } from './model/CancelSqlRequest';
import { CancelSqlResponse } from './model/CancelSqlResponse';
import { CancelSyncIamUserRequest } from './model/CancelSyncIamUserRequest';
import { CancelSyncIamUserResponse } from './model/CancelSyncIamUserResponse';
import { CancelSyncRequest } from './model/CancelSyncRequest';
import { ChargeInfo } from './model/ChargeInfo';
import { ClusterDataConnectorMap } from './model/ClusterDataConnectorMap';
import { ClusterNode } from './model/ClusterNode';
import { ComponentConfig } from './model/ComponentConfig';
import { ComponentInfo } from './model/ComponentInfo';
import { ComponentInstallMode } from './model/ComponentInstallMode';
import { Config } from './model/Config';
import { CreateAutoScalingPolicyRequest } from './model/CreateAutoScalingPolicyRequest';
import { CreateAutoScalingPolicyResponse } from './model/CreateAutoScalingPolicyResponse';
import { CreateClusterReqV2 } from './model/CreateClusterReqV2';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateDataConnectorRequest } from './model/CreateDataConnectorRequest';
import { CreateDataConnectorResponse } from './model/CreateDataConnectorResponse';
import { CreateExecuteJobRequest } from './model/CreateExecuteJobRequest';
import { CreateExecuteJobResponse } from './model/CreateExecuteJobResponse';
import { DataConnector } from './model/DataConnector';
import { DataConnectorDetail } from './model/DataConnectorDetail';
import { DataConnectorReq } from './model/DataConnectorReq';
import { DeleteAutoScalingPolicyRequest } from './model/DeleteAutoScalingPolicyRequest';
import { DeleteAutoScalingPolicyResponse } from './model/DeleteAutoScalingPolicyResponse';
import { DeleteDataConnectorRequest } from './model/DeleteDataConnectorRequest';
import { DeleteDataConnectorResponse } from './model/DeleteDataConnectorResponse';
import { ExecuteSqlRequest } from './model/ExecuteSqlRequest';
import { ExecuteSqlResponse } from './model/ExecuteSqlResponse';
import { ExpandClusterRequest } from './model/ExpandClusterRequest';
import { ExpandClusterResponse } from './model/ExpandClusterResponse';
import { ExpandParam } from './model/ExpandParam';
import { FileStatusV2 } from './model/FileStatusV2';
import { Flavor } from './model/Flavor';
import { JobBatchDelete } from './model/JobBatchDelete';
import { JobExecution } from './model/JobExecution';
import { JobQueryBean } from './model/JobQueryBean';
import { JobSubmitResult } from './model/JobSubmitResult';
import { ListDataConnectorRequest } from './model/ListDataConnectorRequest';
import { ListDataConnectorResponse } from './model/ListDataConnectorResponse';
import { ListNodesRequest } from './model/ListNodesRequest';
import { ListNodesResponse } from './model/ListNodesResponse';
import { ListSecurityRuleStatusRequest } from './model/ListSecurityRuleStatusRequest';
import { ListSecurityRuleStatusResponse } from './model/ListSecurityRuleStatusResponse';
import { ListSyncRequirementsRequest } from './model/ListSyncRequirementsRequest';
import { ListSyncRequirementsResponse } from './model/ListSyncRequirementsResponse';
import { ListSyncStatusRequest } from './model/ListSyncStatusRequest';
import { ListSyncStatusResponse } from './model/ListSyncStatusResponse';
import { ModifyDefaultTagsRequestBody } from './model/ModifyDefaultTagsRequestBody';
import { NodeDetail } from './model/NodeDetail';
import { NodeGroupV2 } from './model/NodeGroupV2';
import { ResourcesPlan } from './model/ResourcesPlan';
import { Rule } from './model/Rule';
import { RunJobFlowCommand } from './model/RunJobFlowCommand';
import { RunJobFlowRequest } from './model/RunJobFlowRequest';
import { RunJobFlowResponse } from './model/RunJobFlowResponse';
import { ScaleScript } from './model/ScaleScript';
import { ServerInfo } from './model/ServerInfo';
import { ShowAgencyMappingRequest } from './model/ShowAgencyMappingRequest';
import { ShowAgencyMappingResponse } from './model/ShowAgencyMappingResponse';
import { ShowAutoScalingPolicyRequest } from './model/ShowAutoScalingPolicyRequest';
import { ShowAutoScalingPolicyResponse } from './model/ShowAutoScalingPolicyResponse';
import { ShowHdfsFileListRequest } from './model/ShowHdfsFileListRequest';
import { ShowHdfsFileListResponse } from './model/ShowHdfsFileListResponse';
import { ShowJobExeListNewRequest } from './model/ShowJobExeListNewRequest';
import { ShowJobExeListNewResponse } from './model/ShowJobExeListNewResponse';
import { ShowMrsFlavorsRequest } from './model/ShowMrsFlavorsRequest';
import { ShowMrsFlavorsResponse } from './model/ShowMrsFlavorsResponse';
import { ShowMrsVersionListRequest } from './model/ShowMrsVersionListRequest';
import { ShowMrsVersionListResponse } from './model/ShowMrsVersionListResponse';
import { ShowSingleJobExeRequest } from './model/ShowSingleJobExeRequest';
import { ShowSingleJobExeResponse } from './model/ShowSingleJobExeResponse';
import { ShowSqlResultRequest } from './model/ShowSqlResultRequest';
import { ShowSqlResultResponse } from './model/ShowSqlResultResponse';
import { ShowSqlResultWithJobRequest } from './model/ShowSqlResultWithJobRequest';
import { ShowSqlResultWithJobResponse } from './model/ShowSqlResultWithJobResponse';
import { ShowSyncIamUserRequest } from './model/ShowSyncIamUserRequest';
import { ShowSyncIamUserResponse } from './model/ShowSyncIamUserResponse';
import { ShowTagQuotaRequest } from './model/ShowTagQuotaRequest';
import { ShowTagQuotaResponse } from './model/ShowTagQuotaResponse';
import { ShowTagStatusRequest } from './model/ShowTagStatusRequest';
import { ShowTagStatusResponse } from './model/ShowTagStatusResponse';
import { ShrinkClusterRequest } from './model/ShrinkClusterRequest';
import { ShrinkClusterResponse } from './model/ShrinkClusterResponse';
import { ShrinkParam } from './model/ShrinkParam';
import { SmnNotify } from './model/SmnNotify';
import { SqlExecutionReq } from './model/SqlExecutionReq';
import { StepConfig } from './model/StepConfig';
import { StopJobRequest } from './model/StopJobRequest';
import { StopJobResponse } from './model/StopJobResponse';
import { SwitchClusterTagsRequest } from './model/SwitchClusterTagsRequest';
import { SwitchClusterTagsResponse } from './model/SwitchClusterTagsResponse';
import { Tag } from './model/Tag';
import { Trigger } from './model/Trigger';
import { UpdateAgencyMappingRequest } from './model/UpdateAgencyMappingRequest';
import { UpdateAgencyMappingResponse } from './model/UpdateAgencyMappingResponse';
import { UpdateAutoScalingPolicyRequest } from './model/UpdateAutoScalingPolicyRequest';
import { UpdateAutoScalingPolicyResponse } from './model/UpdateAutoScalingPolicyResponse';
import { UpdateClusterNameRequest } from './model/UpdateClusterNameRequest';
import { UpdateClusterNameResponse } from './model/UpdateClusterNameResponse';
import { UpdateClusterReq } from './model/UpdateClusterReq';
import { UpdateDataConnectorRequest } from './model/UpdateDataConnectorRequest';
import { UpdateDataConnectorResponse } from './model/UpdateDataConnectorResponse';
import { UpdateSyncIamUserRequest } from './model/UpdateSyncIamUserRequest';
import { UpdateSyncIamUserResponse } from './model/UpdateSyncIamUserResponse';
import { UpdateSyncRequest } from './model/UpdateSyncRequest';
import { Volume } from './model/Volume';
import { VolumeInfo } from './model/VolumeInfo';

export class MrsClient {
    public static newBuilder(): ClientBuilder<MrsClient> {
            let client = new ClientBuilder<MrsClient>(newClient);
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
     * 在MRS集群中批量删除作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除作业
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {JobBatchDelete} batchDeleteJobsRequestBody 批量删除作业参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteJobs(batchDeleteJobsRequest?: BatchDeleteJobsRequest): Promise<BatchDeleteJobsResponse> {
        const options = ParamCreater().batchDeleteJobs(batchDeleteJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建弹性伸缩策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建弹性伸缩策略
     * @param {string} clusterId 集群ID。
     * @param {AutoScalingPolicyV2} [createAutoScalingPolicyRequestBody] 创建弹性伸缩策略请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAutoScalingPolicy(createAutoScalingPolicyRequest?: CreateAutoScalingPolicyRequest): Promise<CreateAutoScalingPolicyResponse> {
        const options = ParamCreater().createAutoScalingPolicy(createAutoScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个MRS集群。使用接口前，您需要先获取下的资源信息。
     * - 通过VPC创建或查询VPC、子网
     * - 通过ECS创建或查询密钥对
     * - 通过[终端节点](https://support.huaweicloud.com/api-mrs/mrs_02_0003.html)获取区域信息
     * - 参考[MRS服务支持的组件](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)获取MRS版本及对应版本支持的组件信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群
     * @param {CreateClusterReqV2} createClusterRequestBody 创建集群请求
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
     * 在MRS集群中新增并提交一个作业。
     * 
     * 需要先在集群详情页的“概览”页签，单击“IAM用户同步”右侧的“同步”进行IAM用户同步，然后再通过该接口提交作业。
     * 
     * 如需使用OBS加密功能，请先参考“MRS用户指南 &gt; 管理现有集群 &gt; 作业管理 &gt; 使用OBS加密数据运行作业”页面进行相关配置后，再调用API接口运行作业。
     * 
     * 所有示例中涉及的OBS路径、样例文件及终端节点和AKSK，请提前准备并在提交请求时根据实际情况替换。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增并执行作业
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {JobExecution} createExecuteJobRequestBody 执行作业参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createExecuteJob(createExecuteJobRequest?: CreateExecuteJobRequest): Promise<CreateExecuteJobResponse> {
        const options = ParamCreater().createExecuteJob(createExecuteJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除弹性伸缩策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除弹性伸缩策略
     * @param {string} clusterId 集群ID。
     * @param {AutoScalingPolicyDeleteReq} [deleteAutoScalingPolicyRequestBody] 删除弹性伸缩请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAutoScalingPolicy(deleteAutoScalingPolicyRequest?: DeleteAutoScalingPolicyRequest): Promise<DeleteAutoScalingPolicyResponse> {
        const options = ParamCreater().deleteAutoScalingPolicy(deleteAutoScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个MRS集群并提交作业，并支持作业完成后删除集群，支持MRS 1.8.9及以上集群版本使用。使用接口前，您需要先获取下的资源信息。
     * - 通过VPC创建或查询VPC、子网
     * - 通过ECS创建或查询密钥对
     * - 通过[终端节点](https://support.huaweicloud.com/api-mrs/mrs_02_0003.html)获取区域信息
     * - 参考[MRS服务支持的组件](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)获取MRS版本及对应版本支持的组件信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群并提交作业
     * @param {RunJobFlowCommand} runJobFlowRequestBody 创建集群请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runJobFlow(runJobFlowRequest?: RunJobFlowRequest): Promise<RunJobFlowResponse> {
        const options = ParamCreater().runJobFlow(runJobFlowRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用户（组）与IAM委托之间的映射关系的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户（组）与IAM委托的映射关系
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgencyMapping(showAgencyMappingRequest?: ShowAgencyMappingRequest): Promise<ShowAgencyMappingResponse> {
        const options = ParamCreater().showAgencyMapping(showAgencyMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定集群的所有的弹性伸缩策略信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看弹性伸缩策略
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAutoScalingPolicy(showAutoScalingPolicyRequest?: ShowAutoScalingPolicyRequest): Promise<ShowAutoScalingPolicyResponse> {
        const options = ParamCreater().showAutoScalingPolicy(showAutoScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS指定集群中查询作业列表信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业列表信息
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} [jobName] 作业名称，只能由字母、数字、中划线和下划线组成，并且长度为1～128个字符。
     * @param {string} [jobId] 作业ID，只能由字母、数字、中划线(-)组成，并且长度为1~64字符。
     * @param {string} [user] 用户名称、只能由字母、数字、特殊字符(-_.)组成，且不能以数字开头，并且长度为1～32字符。
     * @param {string} [jobType] 作业类型。 - MapReduce - SparkPython - SparkSubmit：SparkPython类型的作业在查询时作业类型请选择SparkSubmit。 - HiveScript - HiveSql - DistCp，导入、导出数据。 - SparkScript - SparkSql - Flink
     * @param {'FAILED' | 'KILLED' | 'NEW' | 'NEW_SAVING' | 'SUBMITTED' | 'ACCEPTED' | 'RUNNING' | 'FINISHED'} [jobState] 作业运行状态。 - FAILED：失败 - KILLED：已终止 - NEW：已创建 - NEW_SAVING：已创建保存中 - SUBMITTED：已提交 - ACCEPTED：已接受 - RUNNING：运行中 - FINISHED：已完成
     * @param {'FAILED' | 'KILLED' | 'UNDEFINED' | 'SUCCEEDED'} [jobResult] 作业运行结果。 - FAILED：执行失败的作业。 - KILLED：执行中被手动终止的作业。 - UNDEFINED：正在执行的作业。 - SUCCEEDED：执行成功的作业。
     * @param {string} [queue] 作业的资源对列类型名称，作业的资源对列类型名称，只能由数字、字母和特殊字符(-_)组成, 并且长度为1～64字符。
     * @param {string} [limit] 返回结果中每页显示条数。缺省值：10
     * @param {string} [offset] 表示作业列表从该偏移量开始查询。缺省值：0
     * @param {string} [sortBy] 返回结果的排序方式，默认值为desc。 - asc：按升序排列 - desc：按降序排列
     * @param {number} [submittedTimeBegin] 查询该时间之后提交的作业，UTC的毫秒时间戳。例如：1562032041362。
     * @param {number} [submittedTimeEnd] 查询该时间之前提交的作业UTC的毫秒时间戳。例如：1562032041362。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobExeListNew(showJobExeListNewRequest?: ShowJobExeListNewRequest): Promise<ShowJobExeListNewResponse> {
        const options = ParamCreater().showJobExeListNew(showJobExeListNewRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中查询指定作业的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询单个作业信息
     * @param {string} jobExecutionId 作业ID。获取方法，请参见[获取作业ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSingleJobExe(showSingleJobExeRequest?: ShowSingleJobExeRequest): Promise<ShowSingleJobExeResponse> {
        const options = ParamCreater().showSingleJobExe(showSingleJobExeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中查询SparkSql和SparkScript两种类型作业的SQL语句运行完成后返回的查询结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取SQL结果
     * @param {string} jobExecutionId 作业ID。获取方法，请参见[获取作业ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlResultWithJob(showSqlResultWithJobRequest?: ShowSqlResultWithJobRequest): Promise<ShowSqlResultWithJobResponse> {
        const options = ParamCreater().showSqlResultWithJob(showSqlResultWithJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中终止指定作业。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 终止作业
     * @param {string} jobExecutionId 作业ID。获取方法，请参见[获取作业ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
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
     * 更新用户（组）与IAM委托之间的映射关系。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新用户（组）与IAM委托的映射关系
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {AgencyMappingArray} updateAgencyMappingRequestBody 用户需要更新映射关系的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAgencyMapping(updateAgencyMappingRequest?: UpdateAgencyMappingRequest): Promise<UpdateAgencyMappingResponse> {
        const options = ParamCreater().updateAgencyMapping(updateAgencyMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新弹性伸缩策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新弹性伸缩策略
     * @param {string} clusterId 集群ID。
     * @param {AutoScalingPolicyV2} updateAutoScalingPolicyRequestBody 更新弹性伸缩策略请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateAutoScalingPolicy(updateAutoScalingPolicyRequest?: UpdateAutoScalingPolicyRequest): Promise<UpdateAutoScalingPolicyResponse> {
        const options = ParamCreater().updateAutoScalingPolicy(updateAutoScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改集群名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改集群名称
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {UpdateClusterReq} updateClusterNameRequestBody 修改集群名称请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterName(updateClusterNameRequest?: UpdateClusterNameRequest): Promise<UpdateClusterNameResponse> {
        const options = ParamCreater().updateClusterName(updateClusterNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 集群添加组件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群添加组件
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {AddComponentsReq} addComponentRequestBody 添加组件请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public addComponent(addComponentRequest?: AddComponentRequest): Promise<AddComponentResponse> {
        const options = ParamCreater().addComponent(addComponentRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对MRS集群进行扩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容集群
     * @param {string} clusterId 集群ID
     * @param {ExpandParam} expandClusterRequestBody 扩容请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandCluster(expandClusterRequest?: ExpandClusterRequest): Promise<ExpandClusterResponse> {
        const options = ParamCreater().expandCluster(expandClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群节点列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群节点列表
     * @param {string} clusterId 集群ID。
     * @param {string} [nodeGroup] 要查询的节点组名称。
     * @param {number} [limit] 返回结果中每页显示条数。缺省值：10。
     * @param {number} [offset] 表示作业列表从该偏移量开始查询。缺省值：1。
     * @param {string} [nodeName] 指定节点名称，支持模糊搜索。
     * @param {'node_name'} [sortKey] 排序键，支持对节点名称排序。
     * @param {'desc' | 'asc'} [sortDir] 列表排序方式，desc为降序，asc为升序。
     * @param {boolean} [queryNodeDetail] 是否查询节点详情。该字段设为true时可能会影响接口性能。
     * @param {boolean} [queryEcsDetail] 是否查询ECS详情信息，会涉及对ECS接口调用。
     * @param {string} [internalIp] 指定内网IP。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNodes(listNodesRequest?: ListNodesRequest): Promise<ListNodesResponse> {
        const options = ParamCreater().listNodes(listNodesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前集群通信安全授权状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前集群通信安全授权状态
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSecurityRuleStatus(listSecurityRuleStatusRequest?: ListSecurityRuleStatusRequest): Promise<ListSecurityRuleStatusResponse> {
        const options = ParamCreater().listSecurityRuleStatus(listSecurityRuleStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对MRS集群进行缩容。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 缩容集群
     * @param {string} clusterId 集群ID
     * @param {ShrinkParam} shrinkClusterRequestBody 缩容请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public shrinkCluster(shrinkClusterRequest?: ShrinkClusterRequest): Promise<ShrinkClusterResponse> {
        const options = ParamCreater().shrinkCluster(shrinkClusterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建数据连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据连接
     * @param {DataConnectorReq} createDataConnectorRequestBody 创建数据连接请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDataConnector(createDataConnectorRequest?: CreateDataConnectorRequest): Promise<CreateDataConnectorResponse> {
        const options = ParamCreater().createDataConnector(createDataConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除数据连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除数据连接
     * @param {string} connectorId 数据连接id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteDataConnector(deleteDataConnectorRequest?: DeleteDataConnectorRequest): Promise<DeleteDataConnectorResponse> {
        const options = ParamCreater().deleteDataConnector(deleteDataConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据连接列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据连接列表
     * @param {string} [connectorId] 连接id
     * @param {string} [sourceType] 数据源类别
     * @param {string} [connectorName] 数据连接名称
     * @param {number} [limit] 每页返回的资源个数
     * @param {number} [offset] 分页查询起始偏移量
     * @param {boolean} [available] 数据连接是否有效
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDataConnector(listDataConnectorRequest?: ListDataConnectorRequest): Promise<ListDataConnectorResponse> {
        const options = ParamCreater().listDataConnector(listDataConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新数据连接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新数据连接
     * @param {string} connectorId 数据连接id
     * @param {DataConnectorReq} updateDataConnectorRequestBody 创建数据连接请求
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateDataConnector(updateDataConnectorRequest?: UpdateDataConnectorRequest): Promise<UpdateDataConnectorResponse> {
        const options = ParamCreater().updateDataConnector(updateDataConnectorRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中获取指定目录文件列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定目录文件列表
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} path 文件目录。 比如访问“/tmp/test”目录列表，此处必须是目录，整体URI为/v2/{project_id}/clusters/{cluster_id}/files?path&#x3D;%2Ftmp%2Ftest 单层目录要遵循以下规则： - 不能为空 - 不能以\&quot;.\&quot;开头或结尾 - 不能包括下列符号 : :*?\&quot;&lt;&gt;|\\;&amp;,\&#39;&#x60;!{}[]$%+ - 不能超过255个字节
     * @param {string} [offset] 分页参数，表示从该偏移量开始查询文件列表，默认值为0。
     * @param {string} [limit] 分页参数，列表当前分页的数量限制，默认为100，最大1000。
     * @param {'path_suffix' | 'length' | 'modification_time'} [sortKey] 列表排序按该属性排序。缺省值：path_suffix - path_suffix：文件或目录名称 - length：文件大小 - modification_time：修改时间
     * @param {'desc' | 'asc'} [order] 列表排序方式，desc为降序，asc为升序，默认值为desc。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHdfsFileList(showHdfsFileListRequest?: ShowHdfsFileListRequest): Promise<ShowHdfsFileListResponse> {
        const options = ParamCreater().showHdfsFileList(showHdfsFileListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定用户、用户组取消同步
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 指定用户、用户组取消同步
     * @param {string} clusterId 集群ID
     * @param {CancelSyncRequest} [cancelSyncIAMUserRequestBody] 需要取消同步的用户、用户组信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelSyncIamUser(cancelSyncIamUserRequest?: CancelSyncIamUserRequest): Promise<CancelSyncIamUserResponse> {
        const options = ParamCreater().cancelSyncIamUser(cancelSyncIamUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定集群的IAM同步情况
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定集群的IAM同步情况
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSyncRequirements(listSyncRequirementsRequest?: ListSyncRequirementsRequest): Promise<ListSyncRequirementsResponse> {
        const options = ParamCreater().listSyncRequirements(listSyncRequirementsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前集群是否在IAM同步进行中
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询当前集群是否在IAM同步进行中
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSyncStatus(listSyncStatusRequest?: ListSyncStatusRequest): Promise<ListSyncStatusResponse> {
        const options = ParamCreater().listSyncStatus(listSyncStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取已经同步的IAM用户和用户组
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取已经同步的IAM用户和用户组
     * @param {string} clusterId 集群ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSyncIamUser(showSyncIamUserRequest?: ShowSyncIamUserRequest): Promise<ShowSyncIamUserResponse> {
        const options = ParamCreater().showSyncIamUser(showSyncIamUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将IAM用户和用户组同步到manager，指定用户的情况下，会将该用户关联的IAM用户组也同步到manager。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary IAM同步
     * @param {string} clusterId 集群ID
     * @param {UpdateSyncRequest} [updateSyncIAMUserRequestBody] IAM同步的请求参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSyncIamUser(updateSyncIamUserRequest?: UpdateSyncIamUserRequest): Promise<UpdateSyncIamUserResponse> {
        const options = ParamCreater().updateSyncIamUser(updateSyncIamUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中取消一条SQL的执行任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消SQL执行任务
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} sqlId SQL的执行ID，即提交SQL语句返回结果中的sql_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelSql(cancelSqlRequest?: CancelSqlRequest): Promise<CancelSqlResponse> {
        const options = ParamCreater().cancelSql(cancelSqlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中提交并执行一条SQL语句。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交SQL语句
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {SqlExecutionReq} executeSqlRequestBody 请求参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeSql(executeSqlRequest?: ExecuteSqlRequest): Promise<ExecuteSqlResponse> {
        const options = ParamCreater().executeSql(executeSqlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在MRS集群中查询一条SQL的执行结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SQL结果
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} sqlId SQL的执行ID，即提交SQL语句返回结果中的sql_id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSqlResult(showSqlResultRequest?: ShowSqlResultRequest): Promise<ShowSqlResultResponse> {
        const options = ParamCreater().showSqlResult(showSqlResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询标签配额信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询标签配额
     * @param {string} clusterId 集群ID。
     * @param {boolean} [autoScalingPolicyTags] 是否查询弹性伸缩策略标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTagQuota(showTagQuotaRequest?: ShowTagQuotaRequest): Promise<ShowTagQuotaResponse> {
        const options = ParamCreater().showTagQuota(showTagQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询集群默认标签状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询默认标签状态
     * @param {string} clusterId 集群ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTagStatus(showTagStatusRequest?: ShowTagStatusRequest): Promise<ShowTagStatusResponse> {
        const options = ParamCreater().showTagStatus(showTagStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对已有集群启用或关闭集群默认标签。开启后，集群内节点会打上集群默认标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 集群操作默认标签
     * @param {string} clusterId 集群ID。
     * @param {ModifyDefaultTagsRequestBody} switchClusterTagsRequestBody 操作默认标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public switchClusterTags(switchClusterTagsRequest?: SwitchClusterTagsRequest): Promise<SwitchClusterTagsResponse> {
        const options = ParamCreater().switchClusterTags(switchClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询MRS集群版本可用的规格
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询MRS集群版本可用的规格
     * @param {string} versionName MRS集群版本，不支持多版本查询 ，例如 MRS%203.1.5.1
     * @param {string} [availabilityZone] 可用区id，用于查询指定可用区的可用规格
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMrsFlavors(showMrsFlavorsRequest?: ShowMrsFlavorsRequest): Promise<ShowMrsFlavorsResponse> {
        const options = ParamCreater().showMrsFlavors(showMrsFlavorsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 展示MRS版本列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 展示MRS版本列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMrsVersionList(showMrsVersionListRequest?: ShowMrsVersionListRequest): Promise<ShowMrsVersionListResponse> {
        const options = ParamCreater().showMrsVersionList();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 在MRS集群中批量删除作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteJobs(batchDeleteJobsRequest?: BatchDeleteJobsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/job-executions/batch-delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchDeleteJobsRequest !== null && batchDeleteJobsRequest !== undefined) {
                if (batchDeleteJobsRequest instanceof BatchDeleteJobsRequest) {
                    clusterId = batchDeleteJobsRequest.clusterId;
                    body = batchDeleteJobsRequest.body
                } else {
                    clusterId = batchDeleteJobsRequest['cluster_id'];
                    body = batchDeleteJobsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteJobs.');
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
         * 创建弹性伸缩策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAutoScalingPolicy(createAutoScalingPolicyRequest?: CreateAutoScalingPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/autoscaling-policy/{cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createAutoScalingPolicyRequest !== null && createAutoScalingPolicyRequest !== undefined) {
                if (createAutoScalingPolicyRequest instanceof CreateAutoScalingPolicyRequest) {
                    clusterId = createAutoScalingPolicyRequest.clusterId;
                    body = createAutoScalingPolicyRequest.body
                } else {
                    clusterId = createAutoScalingPolicyRequest['cluster_id'];
                    body = createAutoScalingPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createAutoScalingPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个MRS集群。使用接口前，您需要先获取下的资源信息。
         * - 通过VPC创建或查询VPC、子网
         * - 通过ECS创建或查询密钥对
         * - 通过[终端节点](https://support.huaweicloud.com/api-mrs/mrs_02_0003.html)获取区域信息
         * - 参考[MRS服务支持的组件](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)获取MRS版本及对应版本支持的组件信息
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
         * 在MRS集群中新增并提交一个作业。
         * 
         * 需要先在集群详情页的“概览”页签，单击“IAM用户同步”右侧的“同步”进行IAM用户同步，然后再通过该接口提交作业。
         * 
         * 如需使用OBS加密功能，请先参考“MRS用户指南 &gt; 管理现有集群 &gt; 作业管理 &gt; 使用OBS加密数据运行作业”页面进行相关配置后，再调用API接口运行作业。
         * 
         * 所有示例中涉及的OBS路径、样例文件及终端节点和AKSK，请提前准备并在提交请求时根据实际情况替换。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createExecuteJob(createExecuteJobRequest?: CreateExecuteJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/job-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createExecuteJobRequest !== null && createExecuteJobRequest !== undefined) {
                if (createExecuteJobRequest instanceof CreateExecuteJobRequest) {
                    clusterId = createExecuteJobRequest.clusterId;
                    body = createExecuteJobRequest.body
                } else {
                    clusterId = createExecuteJobRequest['cluster_id'];
                    body = createExecuteJobRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createExecuteJob.');
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
         * 删除弹性伸缩策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAutoScalingPolicy(deleteAutoScalingPolicyRequest?: DeleteAutoScalingPolicyRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/autoscaling-policy/{cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (deleteAutoScalingPolicyRequest !== null && deleteAutoScalingPolicyRequest !== undefined) {
                if (deleteAutoScalingPolicyRequest instanceof DeleteAutoScalingPolicyRequest) {
                    clusterId = deleteAutoScalingPolicyRequest.clusterId;
                    body = deleteAutoScalingPolicyRequest.body
                } else {
                    clusterId = deleteAutoScalingPolicyRequest['cluster_id'];
                    body = deleteAutoScalingPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteAutoScalingPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个MRS集群并提交作业，并支持作业完成后删除集群，支持MRS 1.8.9及以上集群版本使用。使用接口前，您需要先获取下的资源信息。
         * - 通过VPC创建或查询VPC、子网
         * - 通过ECS创建或查询密钥对
         * - 通过[终端节点](https://support.huaweicloud.com/api-mrs/mrs_02_0003.html)获取区域信息
         * - 参考[MRS服务支持的组件](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)获取MRS版本及对应版本支持的组件信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runJobFlow(runJobFlowRequest?: RunJobFlowRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/run-job-flow",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runJobFlowRequest !== null && runJobFlowRequest !== undefined) {
                if (runJobFlowRequest instanceof RunJobFlowRequest) {
                    body = runJobFlowRequest.body
                } else {
                    body = runJobFlowRequest['body'];
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
         * 获取用户（组）与IAM委托之间的映射关系的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgencyMapping(showAgencyMappingRequest?: ShowAgencyMappingRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/agency-mapping",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showAgencyMappingRequest !== null && showAgencyMappingRequest !== undefined) {
                if (showAgencyMappingRequest instanceof ShowAgencyMappingRequest) {
                    clusterId = showAgencyMappingRequest.clusterId;
                } else {
                    clusterId = showAgencyMappingRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAgencyMapping.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定集群的所有的弹性伸缩策略信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAutoScalingPolicy(showAutoScalingPolicyRequest?: ShowAutoScalingPolicyRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/autoscaling-policy/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showAutoScalingPolicyRequest !== null && showAutoScalingPolicyRequest !== undefined) {
                if (showAutoScalingPolicyRequest instanceof ShowAutoScalingPolicyRequest) {
                    clusterId = showAutoScalingPolicyRequest.clusterId;
                } else {
                    clusterId = showAutoScalingPolicyRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showAutoScalingPolicy.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS指定集群中查询作业列表信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobExeListNew(showJobExeListNewRequest?: ShowJobExeListNewRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/job-executions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let jobName;
            
            let jobId;
            
            let user;
            
            let jobType;
            
            let jobState;
            
            let jobResult;
            
            let queue;
            
            let limit;
            
            let offset;
            
            let sortBy;
            
            let submittedTimeBegin;
            
            let submittedTimeEnd;

            if (showJobExeListNewRequest !== null && showJobExeListNewRequest !== undefined) {
                if (showJobExeListNewRequest instanceof ShowJobExeListNewRequest) {
                    clusterId = showJobExeListNewRequest.clusterId;
                    jobName = showJobExeListNewRequest.jobName;
                    jobId = showJobExeListNewRequest.jobId;
                    user = showJobExeListNewRequest.user;
                    jobType = showJobExeListNewRequest.jobType;
                    jobState = showJobExeListNewRequest.jobState;
                    jobResult = showJobExeListNewRequest.jobResult;
                    queue = showJobExeListNewRequest.queue;
                    limit = showJobExeListNewRequest.limit;
                    offset = showJobExeListNewRequest.offset;
                    sortBy = showJobExeListNewRequest.sortBy;
                    submittedTimeBegin = showJobExeListNewRequest.submittedTimeBegin;
                    submittedTimeEnd = showJobExeListNewRequest.submittedTimeEnd;
                } else {
                    clusterId = showJobExeListNewRequest['cluster_id'];
                    jobName = showJobExeListNewRequest['job_name'];
                    jobId = showJobExeListNewRequest['job_id'];
                    user = showJobExeListNewRequest['user'];
                    jobType = showJobExeListNewRequest['job_type'];
                    jobState = showJobExeListNewRequest['job_state'];
                    jobResult = showJobExeListNewRequest['job_result'];
                    queue = showJobExeListNewRequest['queue'];
                    limit = showJobExeListNewRequest['limit'];
                    offset = showJobExeListNewRequest['offset'];
                    sortBy = showJobExeListNewRequest['sort_by'];
                    submittedTimeBegin = showJobExeListNewRequest['submitted_time_begin'];
                    submittedTimeEnd = showJobExeListNewRequest['submitted_time_end'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showJobExeListNew.');
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (user !== null && user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (jobState !== null && jobState !== undefined) {
                localVarQueryParameter['job_state'] = jobState;
            }
            if (jobResult !== null && jobResult !== undefined) {
                localVarQueryParameter['job_result'] = jobResult;
            }
            if (queue !== null && queue !== undefined) {
                localVarQueryParameter['queue'] = queue;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortBy !== null && sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
            }
            if (submittedTimeBegin !== null && submittedTimeBegin !== undefined) {
                localVarQueryParameter['submitted_time_begin'] = submittedTimeBegin;
            }
            if (submittedTimeEnd !== null && submittedTimeEnd !== undefined) {
                localVarQueryParameter['submitted_time_end'] = submittedTimeEnd;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS集群中查询指定作业的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSingleJobExe(showSingleJobExeRequest?: ShowSingleJobExeRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/job-executions/{job_execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobExecutionId;
            
            let clusterId;

            if (showSingleJobExeRequest !== null && showSingleJobExeRequest !== undefined) {
                if (showSingleJobExeRequest instanceof ShowSingleJobExeRequest) {
                    jobExecutionId = showSingleJobExeRequest.jobExecutionId;
                    clusterId = showSingleJobExeRequest.clusterId;
                } else {
                    jobExecutionId = showSingleJobExeRequest['job_execution_id'];
                    clusterId = showSingleJobExeRequest['cluster_id'];
                }
            }

        
            if (jobExecutionId === null || jobExecutionId === undefined) {
            throw new RequiredError('jobExecutionId','Required parameter jobExecutionId was null or undefined when calling showSingleJobExe.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showSingleJobExe.');
            }

            options.pathParams = { 'job_execution_id': jobExecutionId,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS集群中查询SparkSql和SparkScript两种类型作业的SQL语句运行完成后返回的查询结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlResultWithJob(showSqlResultWithJobRequest?: ShowSqlResultWithJobRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/job-executions/{job_execution_id}/sql-result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobExecutionId;
            
            let clusterId;

            if (showSqlResultWithJobRequest !== null && showSqlResultWithJobRequest !== undefined) {
                if (showSqlResultWithJobRequest instanceof ShowSqlResultWithJobRequest) {
                    jobExecutionId = showSqlResultWithJobRequest.jobExecutionId;
                    clusterId = showSqlResultWithJobRequest.clusterId;
                } else {
                    jobExecutionId = showSqlResultWithJobRequest['job_execution_id'];
                    clusterId = showSqlResultWithJobRequest['cluster_id'];
                }
            }

        
            if (jobExecutionId === null || jobExecutionId === undefined) {
            throw new RequiredError('jobExecutionId','Required parameter jobExecutionId was null or undefined when calling showSqlResultWithJob.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showSqlResultWithJob.');
            }

            options.pathParams = { 'job_execution_id': jobExecutionId,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS集群中终止指定作业。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopJob(stopJobRequest?: StopJobRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/job-executions/{job_execution_id}/kill",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobExecutionId;
            
            let clusterId;

            if (stopJobRequest !== null && stopJobRequest !== undefined) {
                if (stopJobRequest instanceof StopJobRequest) {
                    jobExecutionId = stopJobRequest.jobExecutionId;
                    clusterId = stopJobRequest.clusterId;
                } else {
                    jobExecutionId = stopJobRequest['job_execution_id'];
                    clusterId = stopJobRequest['cluster_id'];
                }
            }

        
            if (jobExecutionId === null || jobExecutionId === undefined) {
            throw new RequiredError('jobExecutionId','Required parameter jobExecutionId was null or undefined when calling stopJob.');
            }
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling stopJob.');
            }

            options.pathParams = { 'job_execution_id': jobExecutionId,'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新用户（组）与IAM委托之间的映射关系。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAgencyMapping(updateAgencyMappingRequest?: UpdateAgencyMappingRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/agency-mapping",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateAgencyMappingRequest !== null && updateAgencyMappingRequest !== undefined) {
                if (updateAgencyMappingRequest instanceof UpdateAgencyMappingRequest) {
                    clusterId = updateAgencyMappingRequest.clusterId;
                    body = updateAgencyMappingRequest.body
                } else {
                    clusterId = updateAgencyMappingRequest['cluster_id'];
                    body = updateAgencyMappingRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAgencyMapping.');
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
         * 更新弹性伸缩策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateAutoScalingPolicy(updateAutoScalingPolicyRequest?: UpdateAutoScalingPolicyRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/autoscaling-policy/{cluster_id}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateAutoScalingPolicyRequest !== null && updateAutoScalingPolicyRequest !== undefined) {
                if (updateAutoScalingPolicyRequest instanceof UpdateAutoScalingPolicyRequest) {
                    clusterId = updateAutoScalingPolicyRequest.clusterId;
                    body = updateAutoScalingPolicyRequest.body
                } else {
                    clusterId = updateAutoScalingPolicyRequest['cluster_id'];
                    body = updateAutoScalingPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateAutoScalingPolicy.');
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
         * 修改集群名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterName(updateClusterNameRequest?: UpdateClusterNameRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/clusters/{cluster_id}/cluster-name",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateClusterNameRequest !== null && updateClusterNameRequest !== undefined) {
                if (updateClusterNameRequest instanceof UpdateClusterNameRequest) {
                    clusterId = updateClusterNameRequest.clusterId;
                    body = updateClusterNameRequest.body
                } else {
                    clusterId = updateClusterNameRequest['cluster_id'];
                    body = updateClusterNameRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterName.');
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
         * 集群添加组件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        addComponent(addComponentRequest?: AddComponentRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/components",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (addComponentRequest !== null && addComponentRequest !== undefined) {
                if (addComponentRequest instanceof AddComponentRequest) {
                    clusterId = addComponentRequest.clusterId;
                    body = addComponentRequest.body
                } else {
                    clusterId = addComponentRequest['cluster_id'];
                    body = addComponentRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling addComponent.');
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
         * 对MRS集群进行扩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandCluster(expandClusterRequest?: ExpandClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/expand",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (expandClusterRequest !== null && expandClusterRequest !== undefined) {
                if (expandClusterRequest instanceof ExpandClusterRequest) {
                    clusterId = expandClusterRequest.clusterId;
                    body = expandClusterRequest.body
                } else {
                    clusterId = expandClusterRequest['cluster_id'];
                    body = expandClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling expandCluster.');
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
         * 查询集群节点列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNodes(listNodesRequest?: ListNodesRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/nodes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let nodeGroup;
            
            let limit;
            
            let offset;
            
            let nodeName;
            
            let sortKey;
            
            let sortDir;
            
            let queryNodeDetail;
            
            let queryEcsDetail;
            
            let internalIp;

            if (listNodesRequest !== null && listNodesRequest !== undefined) {
                if (listNodesRequest instanceof ListNodesRequest) {
                    clusterId = listNodesRequest.clusterId;
                    nodeGroup = listNodesRequest.nodeGroup;
                    limit = listNodesRequest.limit;
                    offset = listNodesRequest.offset;
                    nodeName = listNodesRequest.nodeName;
                    sortKey = listNodesRequest.sortKey;
                    sortDir = listNodesRequest.sortDir;
                    queryNodeDetail = listNodesRequest.queryNodeDetail;
                    queryEcsDetail = listNodesRequest.queryEcsDetail;
                    internalIp = listNodesRequest.internalIp;
                } else {
                    clusterId = listNodesRequest['cluster_id'];
                    nodeGroup = listNodesRequest['node_group'];
                    limit = listNodesRequest['limit'];
                    offset = listNodesRequest['offset'];
                    nodeName = listNodesRequest['node_name'];
                    sortKey = listNodesRequest['sort_key'];
                    sortDir = listNodesRequest['sort_dir'];
                    queryNodeDetail = listNodesRequest['query_node_detail'];
                    queryEcsDetail = listNodesRequest['query_ecs_detail'];
                    internalIp = listNodesRequest['internal_ip'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listNodes.');
            }
            if (nodeGroup !== null && nodeGroup !== undefined) {
                localVarQueryParameter['node_group'] = nodeGroup;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (nodeName !== null && nodeName !== undefined) {
                localVarQueryParameter['node_name'] = nodeName;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (queryNodeDetail !== null && queryNodeDetail !== undefined) {
                localVarQueryParameter['query_node_detail'] = queryNodeDetail;
            }
            if (queryEcsDetail !== null && queryEcsDetail !== undefined) {
                localVarQueryParameter['query_ecs_detail'] = queryEcsDetail;
            }
            if (internalIp !== null && internalIp !== undefined) {
                localVarQueryParameter['internal_ip'] = internalIp;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前集群通信安全授权状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSecurityRuleStatus(listSecurityRuleStatusRequest?: ListSecurityRuleStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/security-rule/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSecurityRuleStatusRequest !== null && listSecurityRuleStatusRequest !== undefined) {
                if (listSecurityRuleStatusRequest instanceof ListSecurityRuleStatusRequest) {
                    clusterId = listSecurityRuleStatusRequest.clusterId;
                } else {
                    clusterId = listSecurityRuleStatusRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSecurityRuleStatus.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对MRS集群进行缩容。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        shrinkCluster(shrinkClusterRequest?: ShrinkClusterRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/shrink",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (shrinkClusterRequest !== null && shrinkClusterRequest !== undefined) {
                if (shrinkClusterRequest instanceof ShrinkClusterRequest) {
                    clusterId = shrinkClusterRequest.clusterId;
                    body = shrinkClusterRequest.body
                } else {
                    clusterId = shrinkClusterRequest['cluster_id'];
                    body = shrinkClusterRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling shrinkCluster.');
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
         * 创建数据连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDataConnector(createDataConnectorRequest?: CreateDataConnectorRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/data-connectors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDataConnectorRequest !== null && createDataConnectorRequest !== undefined) {
                if (createDataConnectorRequest instanceof CreateDataConnectorRequest) {
                    body = createDataConnectorRequest.body
                } else {
                    body = createDataConnectorRequest['body'];
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
         * 删除数据连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteDataConnector(deleteDataConnectorRequest?: DeleteDataConnectorRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/data-connectors/{connector_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let connectorId;

            if (deleteDataConnectorRequest !== null && deleteDataConnectorRequest !== undefined) {
                if (deleteDataConnectorRequest instanceof DeleteDataConnectorRequest) {
                    connectorId = deleteDataConnectorRequest.connectorId;
                } else {
                    connectorId = deleteDataConnectorRequest['connector_id'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling deleteDataConnector.');
            }

            options.pathParams = { 'connector_id': connectorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询数据连接列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDataConnector(listDataConnectorRequest?: ListDataConnectorRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/data-connectors",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let connectorId;
            
            let sourceType;
            
            let connectorName;
            
            let limit;
            
            let offset;
            
            let available;

            if (listDataConnectorRequest !== null && listDataConnectorRequest !== undefined) {
                if (listDataConnectorRequest instanceof ListDataConnectorRequest) {
                    connectorId = listDataConnectorRequest.connectorId;
                    sourceType = listDataConnectorRequest.sourceType;
                    connectorName = listDataConnectorRequest.connectorName;
                    limit = listDataConnectorRequest.limit;
                    offset = listDataConnectorRequest.offset;
                    available = listDataConnectorRequest.available;
                } else {
                    connectorId = listDataConnectorRequest['connector_id'];
                    sourceType = listDataConnectorRequest['source_type'];
                    connectorName = listDataConnectorRequest['connector_name'];
                    limit = listDataConnectorRequest['limit'];
                    offset = listDataConnectorRequest['offset'];
                    available = listDataConnectorRequest['available'];
                }
            }

        
            if (connectorId !== null && connectorId !== undefined) {
                localVarQueryParameter['connector_id'] = connectorId;
            }
            if (sourceType !== null && sourceType !== undefined) {
                localVarQueryParameter['source_type'] = sourceType;
            }
            if (connectorName !== null && connectorName !== undefined) {
                localVarQueryParameter['connector_name'] = connectorName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (available !== null && available !== undefined) {
                localVarQueryParameter['available'] = available;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新数据连接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateDataConnector(updateDataConnectorRequest?: UpdateDataConnectorRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/data-connectors/{connector_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let connectorId;

            if (updateDataConnectorRequest !== null && updateDataConnectorRequest !== undefined) {
                if (updateDataConnectorRequest instanceof UpdateDataConnectorRequest) {
                    connectorId = updateDataConnectorRequest.connectorId;
                    body = updateDataConnectorRequest.body
                } else {
                    connectorId = updateDataConnectorRequest['connector_id'];
                    body = updateDataConnectorRequest['body'];
                }
            }

        
            if (connectorId === null || connectorId === undefined) {
            throw new RequiredError('connectorId','Required parameter connectorId was null or undefined when calling updateDataConnector.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'connector_id': connectorId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS集群中获取指定目录文件列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHdfsFileList(showHdfsFileListRequest?: ShowHdfsFileListRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let path;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let order;

            if (showHdfsFileListRequest !== null && showHdfsFileListRequest !== undefined) {
                if (showHdfsFileListRequest instanceof ShowHdfsFileListRequest) {
                    clusterId = showHdfsFileListRequest.clusterId;
                    path = showHdfsFileListRequest.path;
                    offset = showHdfsFileListRequest.offset;
                    limit = showHdfsFileListRequest.limit;
                    sortKey = showHdfsFileListRequest.sortKey;
                    order = showHdfsFileListRequest.order;
                } else {
                    clusterId = showHdfsFileListRequest['cluster_id'];
                    path = showHdfsFileListRequest['path'];
                    offset = showHdfsFileListRequest['offset'];
                    limit = showHdfsFileListRequest['limit'];
                    sortKey = showHdfsFileListRequest['sort_key'];
                    order = showHdfsFileListRequest['order'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showHdfsFileList.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showHdfsFileList.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (order !== null && order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定用户、用户组取消同步
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelSyncIamUser(cancelSyncIamUserRequest?: CancelSyncIamUserRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/clusters/{cluster_id}/iam-sync-user",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (cancelSyncIamUserRequest !== null && cancelSyncIamUserRequest !== undefined) {
                if (cancelSyncIamUserRequest instanceof CancelSyncIamUserRequest) {
                    clusterId = cancelSyncIamUserRequest.clusterId;
                    body = cancelSyncIamUserRequest.body
                } else {
                    clusterId = cancelSyncIamUserRequest['cluster_id'];
                    body = cancelSyncIamUserRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling cancelSyncIamUser.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定集群的IAM同步情况
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSyncRequirements(listSyncRequirementsRequest?: ListSyncRequirementsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/iam-sync/is-synchronous",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSyncRequirementsRequest !== null && listSyncRequirementsRequest !== undefined) {
                if (listSyncRequirementsRequest instanceof ListSyncRequirementsRequest) {
                    clusterId = listSyncRequirementsRequest.clusterId;
                } else {
                    clusterId = listSyncRequirementsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSyncRequirements.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前集群是否在IAM同步进行中
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSyncStatus(listSyncStatusRequest?: ListSyncStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/iam-sync",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listSyncStatusRequest !== null && listSyncStatusRequest !== undefined) {
                if (listSyncStatusRequest instanceof ListSyncStatusRequest) {
                    clusterId = listSyncStatusRequest.clusterId;
                } else {
                    clusterId = listSyncStatusRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listSyncStatus.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取已经同步的IAM用户和用户组
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSyncIamUser(showSyncIamUserRequest?: ShowSyncIamUserRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/iam-sync-user",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showSyncIamUserRequest !== null && showSyncIamUserRequest !== undefined) {
                if (showSyncIamUserRequest instanceof ShowSyncIamUserRequest) {
                    clusterId = showSyncIamUserRequest.clusterId;
                } else {
                    clusterId = showSyncIamUserRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showSyncIamUser.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 将IAM用户和用户组同步到manager，指定用户的情况下，会将该用户关联的IAM用户组也同步到manager。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSyncIamUser(updateSyncIamUserRequest?: UpdateSyncIamUserRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/iam-sync-user",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateSyncIamUserRequest !== null && updateSyncIamUserRequest !== undefined) {
                if (updateSyncIamUserRequest instanceof UpdateSyncIamUserRequest) {
                    clusterId = updateSyncIamUserRequest.clusterId;
                    body = updateSyncIamUserRequest.body
                } else {
                    clusterId = updateSyncIamUserRequest['cluster_id'];
                    body = updateSyncIamUserRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateSyncIamUser.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS集群中取消一条SQL的执行任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelSql(cancelSqlRequest?: CancelSqlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/sql-execution/{sql_id}/cancel",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let sqlId;

            if (cancelSqlRequest !== null && cancelSqlRequest !== undefined) {
                if (cancelSqlRequest instanceof CancelSqlRequest) {
                    clusterId = cancelSqlRequest.clusterId;
                    sqlId = cancelSqlRequest.sqlId;
                } else {
                    clusterId = cancelSqlRequest['cluster_id'];
                    sqlId = cancelSqlRequest['sql_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling cancelSql.');
            }
            if (sqlId === null || sqlId === undefined) {
            throw new RequiredError('sqlId','Required parameter sqlId was null or undefined when calling cancelSql.');
            }

            options.pathParams = { 'cluster_id': clusterId,'sql_id': sqlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 在MRS集群中提交并执行一条SQL语句。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeSql(executeSqlRequest?: ExecuteSqlRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/sql-execution",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (executeSqlRequest !== null && executeSqlRequest !== undefined) {
                if (executeSqlRequest instanceof ExecuteSqlRequest) {
                    clusterId = executeSqlRequest.clusterId;
                    body = executeSqlRequest.body
                } else {
                    clusterId = executeSqlRequest['cluster_id'];
                    body = executeSqlRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling executeSql.');
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
         * 在MRS集群中查询一条SQL的执行结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSqlResult(showSqlResultRequest?: ShowSqlResultRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/sql-execution/{sql_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let sqlId;

            if (showSqlResultRequest !== null && showSqlResultRequest !== undefined) {
                if (showSqlResultRequest instanceof ShowSqlResultRequest) {
                    clusterId = showSqlResultRequest.clusterId;
                    sqlId = showSqlResultRequest.sqlId;
                } else {
                    clusterId = showSqlResultRequest['cluster_id'];
                    sqlId = showSqlResultRequest['sql_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showSqlResult.');
            }
            if (sqlId === null || sqlId === undefined) {
            throw new RequiredError('sqlId','Required parameter sqlId was null or undefined when calling showSqlResult.');
            }

            options.pathParams = { 'cluster_id': clusterId,'sql_id': sqlId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询标签配额信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTagQuota(showTagQuotaRequest?: ShowTagQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/tags/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let autoScalingPolicyTags;

            if (showTagQuotaRequest !== null && showTagQuotaRequest !== undefined) {
                if (showTagQuotaRequest instanceof ShowTagQuotaRequest) {
                    clusterId = showTagQuotaRequest.clusterId;
                    autoScalingPolicyTags = showTagQuotaRequest.autoScalingPolicyTags;
                } else {
                    clusterId = showTagQuotaRequest['cluster_id'];
                    autoScalingPolicyTags = showTagQuotaRequest['auto_scaling_policy_tags'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showTagQuota.');
            }
            if (autoScalingPolicyTags !== null && autoScalingPolicyTags !== undefined) {
                localVarQueryParameter['auto_scaling_policy_tags'] = autoScalingPolicyTags;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询集群默认标签状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTagStatus(showTagStatusRequest?: ShowTagStatusRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/clusters/{cluster_id}/tags/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showTagStatusRequest !== null && showTagStatusRequest !== undefined) {
                if (showTagStatusRequest instanceof ShowTagStatusRequest) {
                    clusterId = showTagStatusRequest.clusterId;
                } else {
                    clusterId = showTagStatusRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showTagStatus.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对已有集群启用或关闭集群默认标签。开启后，集群内节点会打上集群默认标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        switchClusterTags(switchClusterTagsRequest?: SwitchClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/clusters/{cluster_id}/tags/switch",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (switchClusterTagsRequest !== null && switchClusterTagsRequest !== undefined) {
                if (switchClusterTagsRequest instanceof SwitchClusterTagsRequest) {
                    clusterId = switchClusterTagsRequest.clusterId;
                    body = switchClusterTagsRequest.body
                } else {
                    clusterId = switchClusterTagsRequest['cluster_id'];
                    body = switchClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling switchClusterTags.');
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
         * 查询MRS集群版本可用的规格
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMrsFlavors(showMrsFlavorsRequest?: ShowMrsFlavorsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/metadata/version/{version_name}/available-flavor",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let versionName;
            
            let availabilityZone;

            if (showMrsFlavorsRequest !== null && showMrsFlavorsRequest !== undefined) {
                if (showMrsFlavorsRequest instanceof ShowMrsFlavorsRequest) {
                    versionName = showMrsFlavorsRequest.versionName;
                    availabilityZone = showMrsFlavorsRequest.availabilityZone;
                } else {
                    versionName = showMrsFlavorsRequest['version_name'];
                    availabilityZone = showMrsFlavorsRequest['availability_zone'];
                }
            }

        
            if (versionName === null || versionName === undefined) {
            throw new RequiredError('versionName','Required parameter versionName was null or undefined when calling showMrsFlavors.');
            }
            if (availabilityZone !== null && availabilityZone !== undefined) {
                localVarQueryParameter['availability_zone'] = availabilityZone;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'version_name': versionName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 展示MRS版本列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMrsVersionList() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/metadata/versions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): MrsClient {
    return new MrsClient(client);
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