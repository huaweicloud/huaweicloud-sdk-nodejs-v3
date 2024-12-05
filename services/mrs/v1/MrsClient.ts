import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AddJobsReqV11 } from './model/AddJobsReqV11';
import { AutoScalingPolicy } from './model/AutoScalingPolicy';
import { AutoScalingPolicyReqV11 } from './model/AutoScalingPolicyReqV11';
import { AvailableTag } from './model/AvailableTag';
import { AvailableZoneV2 } from './model/AvailableZoneV2';
import { BatchCreateClusterTagsReq } from './model/BatchCreateClusterTagsReq';
import { BatchCreateClusterTagsRequest } from './model/BatchCreateClusterTagsRequest';
import { BatchCreateClusterTagsResponse } from './model/BatchCreateClusterTagsResponse';
import { BatchDeleteClusterTagsReq } from './model/BatchDeleteClusterTagsReq';
import { BatchDeleteClusterTagsRequest } from './model/BatchDeleteClusterTagsRequest';
import { BatchDeleteClusterTagsResponse } from './model/BatchDeleteClusterTagsResponse';
import { BootstrapScript } from './model/BootstrapScript';
import { Cluster } from './model/Cluster';
import { ClusterScalingParams } from './model/ClusterScalingParams';
import { ClusterScalingReq } from './model/ClusterScalingReq';
import { ComponentAmb } from './model/ComponentAmb';
import { ComponentAmbV11 } from './model/ComponentAmbV11';
import { ComponentExternalDatasource } from './model/ComponentExternalDatasource';
import { CreateAndExecuteJobRequest } from './model/CreateAndExecuteJobRequest';
import { CreateAndExecuteJobResponse } from './model/CreateAndExecuteJobResponse';
import { CreateClusterReqV11 } from './model/CreateClusterReqV11';
import { CreateClusterRequest } from './model/CreateClusterRequest';
import { CreateClusterResponse } from './model/CreateClusterResponse';
import { CreateClusterTagRequest } from './model/CreateClusterTagRequest';
import { CreateClusterTagResponse } from './model/CreateClusterTagResponse';
import { CreateScalingPolicyRequest } from './model/CreateScalingPolicyRequest';
import { CreateScalingPolicyResponse } from './model/CreateScalingPolicyResponse';
import { CreateTagReq } from './model/CreateTagReq';
import { DeleteClusterRequest } from './model/DeleteClusterRequest';
import { DeleteClusterResponse } from './model/DeleteClusterResponse';
import { DeleteClusterTagRequest } from './model/DeleteClusterTagRequest';
import { DeleteClusterTagResponse } from './model/DeleteClusterTagResponse';
import { DeleteJobExecutionRequest } from './model/DeleteJobExecutionRequest';
import { DeleteJobExecutionResponse } from './model/DeleteJobExecutionResponse';
import { FlavorLists } from './model/FlavorLists';
import { HostModel } from './model/HostModel';
import { JobExeResult } from './model/JobExeResult';
import { ListAllTagsRequest } from './model/ListAllTagsRequest';
import { ListAllTagsResponse } from './model/ListAllTagsResponse';
import { ListAvailableZonesRequest } from './model/ListAvailableZonesRequest';
import { ListAvailableZonesResponse } from './model/ListAvailableZonesResponse';
import { ListClusterTagsRequest } from './model/ListClusterTagsRequest';
import { ListClusterTagsResponse } from './model/ListClusterTagsResponse';
import { ListClustersByTagsRequest } from './model/ListClustersByTagsRequest';
import { ListClustersByTagsResponse } from './model/ListClustersByTagsResponse';
import { ListClustersRequest } from './model/ListClustersRequest';
import { ListClustersResponse } from './model/ListClustersResponse';
import { ListExecuteJobRequest } from './model/ListExecuteJobRequest';
import { ListExecuteJobResponse } from './model/ListExecuteJobResponse';
import { ListHostsRequest } from './model/ListHostsRequest';
import { ListHostsResponse } from './model/ListHostsResponse';
import { ListResourceReq } from './model/ListResourceReq';
import { MRSResource } from './model/MRSResource';
import { Match } from './model/Match';
import { NodeConstraint } from './model/NodeConstraint';
import { NodeConstraints } from './model/NodeConstraints';
import { NodeGroupV10 } from './model/NodeGroupV10';
import { NodeGroupV11 } from './model/NodeGroupV11';
import { ResourcesPlan } from './model/ResourcesPlan';
import { RoleDeployMeta } from './model/RoleDeployMeta';
import { Rule } from './model/Rule';
import { ScaleScript } from './model/ScaleScript';
import { ShowClusterDetailsRequest } from './model/ShowClusterDetailsRequest';
import { ShowClusterDetailsResponse } from './model/ShowClusterDetailsResponse';
import { ShowJobExesRequest } from './model/ShowJobExesRequest';
import { ShowJobExesResponse } from './model/ShowJobExesResponse';
import { ShowMrsVersionMetadataRequest } from './model/ShowMrsVersionMetadataRequest';
import { ShowMrsVersionMetadataResponse } from './model/ShowMrsVersionMetadataResponse';
import { SubmitJobReqV11 } from './model/SubmitJobReqV11';
import { Tag } from './model/Tag';
import { TagPlain } from './model/TagPlain';
import { TagWithMultiValue } from './model/TagWithMultiValue';
import { TaskNodeGroup } from './model/TaskNodeGroup';
import { TaskNodeInfo } from './model/TaskNodeInfo';
import { Trigger } from './model/Trigger';
import { UpdateClusterScalingRequest } from './model/UpdateClusterScalingRequest';
import { UpdateClusterScalingResponse } from './model/UpdateClusterScalingResponse';
import { VersionComponent } from './model/VersionComponent';
import { VersionConstraint } from './model/VersionConstraint';

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
     * 为指定集群批量添加标签。
     * 
     * 一个集群上最多有10个标签。
     * 
     * 此接口为幂等接口：
     * 
     * - 创建时，同一个集群不允许重复key，如果数据库存在就覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加集群标签
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {BatchCreateClusterTagsReq} batchCreateClusterTagsReq 批量添加集群标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateClusterTags(batchCreateClusterTagsRequest?: BatchCreateClusterTagsRequest): Promise<BatchCreateClusterTagsResponse> {
        const options = ParamCreater().batchCreateClusterTags(batchCreateClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 为指定集群批量删除标签。
     * 
     * 一个集群上最多有10个标签。
     * 
     * 此接口为幂等接口：
     * 
     * -
     * 删除时，如果删除的标签不存在，默认处理成功，删除时不对标签字符集范围做校验。Key长度36个unicode字符，value为43个unicode字符。删除时tags结构体不能缺失，key不能为空，或者空字符串。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除集群标签
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {BatchDeleteClusterTagsReq} batchDeleteClusterTagsRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteClusterTags(batchDeleteClusterTagsRequest?: BatchDeleteClusterTagsRequest): Promise<BatchDeleteClusterTagsResponse> {
        const options = ParamCreater().batchDeleteClusterTags(batchDeleteClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
     * 在MRS集群中新增一个作业，并执行作业。该接口不兼容Sahara。
     * 集群ID可参考[查询集群列表](https://support.huaweicloud.com/api-mrs/ListClusters.html)接口获取。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增作业并执行（废弃）
     * @param {SubmitJobReqV11} submitJobReqV11 新增作业并执行请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAndExecuteJob(createAndExecuteJobRequest?: CreateAndExecuteJobRequest): Promise<CreateAndExecuteJobResponse> {
        const options = ParamCreater().createAndExecuteJob(createAndExecuteJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个MRS集群，并在集群中提交一个作业。该接口不兼容Sahara。
     * 支持同一时间并发创建10个集群。
     * 使用接口前，您需要先获取下的资源信息。
     * - 通过VPC创建或查询VPC、子网
     * - 通过ECS创建或查询密钥对
     * - 通过[终端节点](https://support.huaweicloud.com/api-mrs/mrs_02_0003.html)获取区域信息
     * - 参考[MRS服务支持的组件](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)获取MRS版本及对应版本支持的组件信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建集群并执行作业
     * @param {CreateClusterReqV11} createClusterReqV11 创建集群请求体
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
     * 为特定的集群添加一个tag。
     * 一个集群上最多有10个标签，此接口为幂等接口。添加标签时，如果创建的标签已经存在（key相同），则覆盖。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 给指定集群添加标签
     * @param {string} clusterId 集群ID。
     * @param {CreateTagReq} [createTagReq] 添加标签请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createClusterTag(createClusterTagRequest?: CreateClusterTagRequest): Promise<CreateClusterTagResponse> {
        const options = ParamCreater().createClusterTag(createClusterTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对弹性伸缩规则进行编辑。
     * 
     * 在创建集群并执行作业接口中也可以创建弹性伸缩规则。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 配置弹性伸缩规则
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {AutoScalingPolicyReqV11} [autoScalingPolicyReqV11] 弹性伸缩请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createScalingPolicy(createScalingPolicyRequest?: CreateScalingPolicyRequest): Promise<CreateScalingPolicyResponse> {
        const options = ParamCreater().createScalingPolicy(createScalingPolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 数据完成处理分析后或者集群运行异常无法提供服务时可删除集群服务。该接口兼容Sahara。
     * 
     * 处于如下状态的集群不允许删除：
     * - scaling-out：扩容中
     * - scaling-in：缩容中
     * - starting：启动中
     * - terminating：删除中
     * - terminated：已删除
     * - failed：失败
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除集群
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
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
     * 删除特定集群的标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定集群的标签
     * @param {string} clusterId 集群ID。
     * @param {string} key 键。标签的key值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteClusterTag(deleteClusterTagRequest?: DeleteClusterTagRequest): Promise<DeleteClusterTagResponse> {
        const options = ParamCreater().deleteClusterTag(deleteClusterTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
     * 删除指定的作业执行对象。该接口兼容Sahara。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除作业执行对象（废弃）
     * @param {string} jobExecutionId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteJobExecution(deleteJobExecutionRequest?: DeleteJobExecutionRequest): Promise<DeleteJobExecutionResponse> {
        const options = ParamCreater().deleteJobExecution(deleteJobExecutionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户在指定Region下的所有标签集合 。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTags(listAllTagsRequest?: ListAllTagsRequest): Promise<ListAllTagsResponse> {
        const options = ParamCreater().listAllTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定集群的标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定集群的标签
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClusterTags(listClusterTagsRequest?: ListClusterTagsRequest): Promise<ListClusterTagsResponse> {
        const options = ParamCreater().listClusterTags(listClusterTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看用户创建的集群列表信息。该接口不兼容Sahara。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群列表
     * @param {string} [tags] 可以通过集群的标签来搜索指定标签的集群，当指定多个tag进行查询时，标签之间是与的关系。  - tags参数的格式为tags&#x3D;k1*v1,k2*v2,k3*v3 - 当标签的value为空时，格式为tags&#x3D;k1,k2,k3*v3
     * @param {string} [pageSize] 分页查询每页返回的最大集群数量。  取值范围：[1～2147483646]
     * @param {string} [currentPage] 当前查询页码。
     * @param {string} [clusterName] 集群名称。
     * @param {string} [clusterState] 根据集群状态查询集群列表。 - existing：查询现有集群列表，包括除“已删除”、包周期集群的“订单处理中”和“准备中”状态外的所有集群。 - history：查询历史集群列表，包括所有“已删除”、删除集群失败、集群删除虚拟机失败、删除集群更新数据库失败等状态的集群。 - starting：查询启动中的集群列表。 - running：查询运行中的集群列表。 - terminated：查询已删除的集群列表。 - failed：查询失败的集群列表。 - abnormal：查询异常的集群列表。 - terminating：查询删除中的集群列表。 - frozen：查询已冻结的集群列表。 - scaling-out：查询扩容中的集群列表。 - scaling-in：查询缩容中的集群列表。
     * @param {string} [enterpriseProjectId] 通过企业项目ID来搜索指定项目的集群。  该参数默认设置为0，表示为default企业项目。  获取方式请参见《企业管理API参考》的“查询企业项目列表”响应消息表“enterprise_project字段数据结构说明”的“id”。
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
     * 使用标签过滤集群。
     * 
     * 集群默认按照创建时间倒序，集群tag也按照创建时间倒序。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询特定标签的集群列表
     * @param {ListResourceReq} listResourceReq 查询特定标签的请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listClustersByTags(listClustersByTagsRequest?: ListClustersByTagsRequest): Promise<ListClustersByTagsResponse> {
        const options = ParamCreater().listClustersByTags(listClustersByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
     * 查询所有作业的exe对象列表。该接口不兼容Sahara。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业exe对象列表（废弃）
     * @param {string} clusterId 集群编号。
     * @param {string} [pageSize] 分页查询每页返回的最大作业数量。  取值范围：[1～100]
     * @param {string} [currentPage] 当前查询页码。
     * @param {string} [jobName] 作业名称。
     * @param {string} [state] 作业状态编码：  - 1：Terminated表示已终止的作业状态 - 2：Running表示运行中的作业状态 - 3：Completed表示已完成的作业状态 - 4：Abnormal表示异常的作业状态
     * @param {string} [id] 作业执行对象的编号。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listExecuteJob(listExecuteJobRequest?: ListExecuteJobRequest): Promise<ListExecuteJobResponse> {
        const options = ParamCreater().listExecuteJob(listExecuteJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于查询输入集群的主机列表详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询主机列表
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {string} [pageSize] 分页查询每页返回的最大集群数量。 取值范围：[1～2147483646] 默认值为10。
     * @param {string} [currentPage] 当前查询页码。默认值为1。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listHosts(listHostsRequest?: ListHostsRequest): Promise<ListHostsResponse> {
        const options = ParamCreater().listHosts(listHostsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看指定集群的详细信息。该接口不兼容Sahara。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询集群详情
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showClusterDetails(showClusterDetailsRequest?: ShowClusterDetailsRequest): Promise<ShowClusterDetailsResponse> {
        const options = ParamCreater().showClusterDetails(showClusterDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
     * 查询指定作业的exe对象详细信息。该接口不兼容Sahara。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询作业exe对象详情（废弃）
     * @param {string} jobExeId 作业ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobExes(showJobExesRequest?: ShowJobExesRequest): Promise<ShowJobExesResponse> {
        const options = ParamCreater().showJobExes(showJobExesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建集群后，扩容/缩容集群Core节点或者Task节点。MRS集群创建成功后不支持调整Master节点数量，即不支持扩缩容Master节点。该接口不兼容Sahara。
     * 处于running状态的集群才允许扩容/缩容，其他状态则不允许扩容/缩容。 集群状态和集群ID可参考[查询集群列表](https://support.huaweicloud.com/api-mrs/ListClusters.html)接口获取。 本章节的接口只支持流式集群、分析集群和混合集群，不支持自定义集群。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 调整集群节点
     * @param {string} clusterId 集群ID。获取方法，请参见[获取集群ID](https://support.huaweicloud.com/api-mrs/mrs_02_9001.html)。
     * @param {ClusterScalingReq} clusterScalingReq 调整集群节点请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateClusterScaling(updateClusterScalingRequest?: UpdateClusterScalingRequest): Promise<UpdateClusterScalingResponse> {
        const options = ParamCreater().updateClusterScaling(updateClusterScalingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 在创建集群时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用区信息
     * @param {string} regionId 区域id，例如cn-north-4
     * @param {'Center' | 'Edge'} [scope] 可用区范围
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAvailableZones(listAvailableZonesRequest?: ListAvailableZonesRequest): Promise<ListAvailableZonesResponse> {
        const options = ParamCreater().listAvailableZones(listAvailableZonesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对应版本元数据。如果参数里指定集群id，则可查询集群更新过补丁之后的最新元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对应版本元数据
     * @param {string} versionName 集群版本。例如“MRS 3.1.0”。如果请求客户端不支持自动转义，则需要将空格转义为%20，例如“MRS%203.1.0”。
     * @param {string} [clusterId] 集群ID。如果指定集群ID，则获取该集群做过补丁更新的最新版本元数据。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMrsVersionMetadata(showMrsVersionMetadataRequest?: ShowMrsVersionMetadataRequest): Promise<ShowMrsVersionMetadataResponse> {
        const options = ParamCreater().showMrsVersionMetadata(showMrsVersionMetadataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 为指定集群批量添加标签。
         * 
         * 一个集群上最多有10个标签。
         * 
         * 此接口为幂等接口：
         * 
         * - 创建时，同一个集群不允许重复key，如果数据库存在就覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateClusterTags(batchCreateClusterTagsRequest?: BatchCreateClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchCreateClusterTagsRequest !== null && batchCreateClusterTagsRequest !== undefined) {
                if (batchCreateClusterTagsRequest instanceof BatchCreateClusterTagsRequest) {
                    clusterId = batchCreateClusterTagsRequest.clusterId;
                    body = batchCreateClusterTagsRequest.body
                } else {
                    clusterId = batchCreateClusterTagsRequest['cluster_id'];
                    body = batchCreateClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchCreateClusterTags.');
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
         * 为指定集群批量删除标签。
         * 
         * 一个集群上最多有10个标签。
         * 
         * 此接口为幂等接口：
         * 
         * -
         * 删除时，如果删除的标签不存在，默认处理成功，删除时不对标签字符集范围做校验。Key长度36个unicode字符，value为43个unicode字符。删除时tags结构体不能缺失，key不能为空，或者空字符串。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteClusterTags(batchDeleteClusterTagsRequest?: BatchDeleteClusterTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (batchDeleteClusterTagsRequest !== null && batchDeleteClusterTagsRequest !== undefined) {
                if (batchDeleteClusterTagsRequest instanceof BatchDeleteClusterTagsRequest) {
                    clusterId = batchDeleteClusterTagsRequest.clusterId;
                    body = batchDeleteClusterTagsRequest.body
                } else {
                    clusterId = batchDeleteClusterTagsRequest['cluster_id'];
                    body = batchDeleteClusterTagsRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling batchDeleteClusterTags.');
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
         * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
         * 在MRS集群中新增一个作业，并执行作业。该接口不兼容Sahara。
         * 集群ID可参考[查询集群列表](https://support.huaweicloud.com/api-mrs/ListClusters.html)接口获取。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAndExecuteJob(createAndExecuteJobRequest?: CreateAndExecuteJobRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/jobs/submit-job",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createAndExecuteJobRequest !== null && createAndExecuteJobRequest !== undefined) {
                if (createAndExecuteJobRequest instanceof CreateAndExecuteJobRequest) {
                    body = createAndExecuteJobRequest.body
                } else {
                    body = createAndExecuteJobRequest['body'];
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
         * 创建一个MRS集群，并在集群中提交一个作业。该接口不兼容Sahara。
         * 支持同一时间并发创建10个集群。
         * 使用接口前，您需要先获取下的资源信息。
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
                url: "/v1.1/{project_id}/run-job-flow",
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
         * 为特定的集群添加一个tag。
         * 一个集群上最多有10个标签，此接口为幂等接口。添加标签时，如果创建的标签已经存在（key相同），则覆盖。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createClusterTag(createClusterTagRequest?: CreateClusterTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createClusterTagRequest !== null && createClusterTagRequest !== undefined) {
                if (createClusterTagRequest instanceof CreateClusterTagRequest) {
                    clusterId = createClusterTagRequest.clusterId;
                    body = createClusterTagRequest.body
                } else {
                    clusterId = createClusterTagRequest['cluster_id'];
                    body = createClusterTagRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createClusterTag.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对弹性伸缩规则进行编辑。
         * 
         * 在创建集群并执行作业接口中也可以创建弹性伸缩规则。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createScalingPolicy(createScalingPolicyRequest?: CreateScalingPolicyRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/autoscaling-policy/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (createScalingPolicyRequest !== null && createScalingPolicyRequest !== undefined) {
                if (createScalingPolicyRequest instanceof CreateScalingPolicyRequest) {
                    clusterId = createScalingPolicyRequest.clusterId;
                    body = createScalingPolicyRequest.body
                } else {
                    clusterId = createScalingPolicyRequest['cluster_id'];
                    body = createScalingPolicyRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling createScalingPolicy.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 数据完成处理分析后或者集群运行异常无法提供服务时可删除集群服务。该接口兼容Sahara。
         * 
         * 处于如下状态的集群不允许删除：
         * - scaling-out：扩容中
         * - scaling-in：缩容中
         * - starting：启动中
         * - terminating：删除中
         * - terminated：已删除
         * - failed：失败
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCluster(deleteClusterRequest?: DeleteClusterRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.1/{project_id}/clusters/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (deleteClusterRequest !== null && deleteClusterRequest !== undefined) {
                if (deleteClusterRequest instanceof DeleteClusterRequest) {
                    clusterId = deleteClusterRequest.clusterId;
                } else {
                    clusterId = deleteClusterRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteCluster.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除特定集群的标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteClusterTag(deleteClusterTagRequest?: DeleteClusterTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;
            
            let key;

            if (deleteClusterTagRequest !== null && deleteClusterTagRequest !== undefined) {
                if (deleteClusterTagRequest instanceof DeleteClusterTagRequest) {
                    clusterId = deleteClusterTagRequest.clusterId;
                    key = deleteClusterTagRequest.key;
                } else {
                    clusterId = deleteClusterTagRequest['cluster_id'];
                    key = deleteClusterTagRequest['key'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling deleteClusterTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteClusterTag.');
            }

            options.pathParams = { 'cluster_id': clusterId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
         * 删除指定的作业执行对象。该接口兼容Sahara。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJobExecution(deleteJobExecutionRequest?: DeleteJobExecutionRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.1/{project_id}/job-executions/{job_execution_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobExecutionId;

            if (deleteJobExecutionRequest !== null && deleteJobExecutionRequest !== undefined) {
                if (deleteJobExecutionRequest instanceof DeleteJobExecutionRequest) {
                    jobExecutionId = deleteJobExecutionRequest.jobExecutionId;
                } else {
                    jobExecutionId = deleteJobExecutionRequest['job_execution_id'];
                }
            }

        
            if (jobExecutionId === null || jobExecutionId === undefined) {
            throw new RequiredError('jobExecutionId','Required parameter jobExecutionId was null or undefined when calling deleteJobExecution.');
            }

            options.pathParams = { 'job_execution_id': jobExecutionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户在指定Region下的所有标签集合 。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTags() {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/tags",
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
         * 查询指定集群的标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusterTags(listClusterTagsRequest?: ListClusterTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (listClusterTagsRequest !== null && listClusterTagsRequest !== undefined) {
                if (listClusterTagsRequest instanceof ListClusterTagsRequest) {
                    clusterId = listClusterTagsRequest.clusterId;
                } else {
                    clusterId = listClusterTagsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listClusterTags.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看用户创建的集群列表信息。该接口不兼容Sahara。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClusters(listClustersRequest?: ListClustersRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/cluster_infos",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let tags;
            
            let pageSize;
            
            let currentPage;
            
            let clusterName;
            
            let clusterState;
            
            let enterpriseProjectId;

            if (listClustersRequest !== null && listClustersRequest !== undefined) {
                if (listClustersRequest instanceof ListClustersRequest) {
                    tags = listClustersRequest.tags;
                    pageSize = listClustersRequest.pageSize;
                    currentPage = listClustersRequest.currentPage;
                    clusterName = listClustersRequest.clusterName;
                    clusterState = listClustersRequest.clusterState;
                    enterpriseProjectId = listClustersRequest.enterpriseProjectId;
                } else {
                    tags = listClustersRequest['tags'];
                    pageSize = listClustersRequest['pageSize'];
                    currentPage = listClustersRequest['currentPage'];
                    clusterName = listClustersRequest['clusterName'];
                    clusterState = listClustersRequest['clusterState'];
                    enterpriseProjectId = listClustersRequest['enterpriseProjectId'];
                }
            }

        
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }
            if (currentPage !== null && currentPage !== undefined) {
                localVarQueryParameter['currentPage'] = currentPage;
            }
            if (clusterName !== null && clusterName !== undefined) {
                localVarQueryParameter['clusterName'] = clusterName;
            }
            if (clusterState !== null && clusterState !== undefined) {
                localVarQueryParameter['clusterState'] = clusterState;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterpriseProjectId'] = enterpriseProjectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 使用标签过滤集群。
         * 
         * 集群默认按照创建时间倒序，集群tag也按照创建时间倒序。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listClustersByTags(listClustersByTagsRequest?: ListClustersByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.1/{project_id}/clusters/resource_instances/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listClustersByTagsRequest !== null && listClustersByTagsRequest !== undefined) {
                if (listClustersByTagsRequest instanceof ListClustersByTagsRequest) {
                    body = listClustersByTagsRequest.body
                } else {
                    body = listClustersByTagsRequest['body'];
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
         * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
         * 查询所有作业的exe对象列表。该接口不兼容Sahara。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listExecuteJob(listExecuteJobRequest?: ListExecuteJobRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/job-exes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let pageSize;
            
            let currentPage;
            
            let jobName;
            
            let state;
            
            let id;

            if (listExecuteJobRequest !== null && listExecuteJobRequest !== undefined) {
                if (listExecuteJobRequest instanceof ListExecuteJobRequest) {
                    clusterId = listExecuteJobRequest.clusterId;
                    pageSize = listExecuteJobRequest.pageSize;
                    currentPage = listExecuteJobRequest.currentPage;
                    jobName = listExecuteJobRequest.jobName;
                    state = listExecuteJobRequest.state;
                    id = listExecuteJobRequest.id;
                } else {
                    clusterId = listExecuteJobRequest['cluster_id'];
                    pageSize = listExecuteJobRequest['page_size'];
                    currentPage = listExecuteJobRequest['current_page'];
                    jobName = listExecuteJobRequest['job_name'];
                    state = listExecuteJobRequest['state'];
                    id = listExecuteJobRequest['id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
                throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listExecuteJob.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (currentPage !== null && currentPage !== undefined) {
                localVarQueryParameter['current_page'] = currentPage;
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }
            if (state !== null && state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于查询输入集群的主机列表详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listHosts(listHostsRequest?: ListHostsRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/clusters/{cluster_id}/hosts",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let clusterId;
            
            let pageSize;
            
            let currentPage;

            if (listHostsRequest !== null && listHostsRequest !== undefined) {
                if (listHostsRequest instanceof ListHostsRequest) {
                    clusterId = listHostsRequest.clusterId;
                    pageSize = listHostsRequest.pageSize;
                    currentPage = listHostsRequest.currentPage;
                } else {
                    clusterId = listHostsRequest['cluster_id'];
                    pageSize = listHostsRequest['pageSize'];
                    currentPage = listHostsRequest['currentPage'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling listHosts.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }
            if (currentPage !== null && currentPage !== undefined) {
                localVarQueryParameter['currentPage'] = currentPage;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看指定集群的详细信息。该接口不兼容Sahara。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showClusterDetails(showClusterDetailsRequest?: ShowClusterDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/cluster_infos/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let clusterId;

            if (showClusterDetailsRequest !== null && showClusterDetailsRequest !== undefined) {
                if (showClusterDetailsRequest instanceof ShowClusterDetailsRequest) {
                    clusterId = showClusterDetailsRequest.clusterId;
                } else {
                    clusterId = showClusterDetailsRequest['cluster_id'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling showClusterDetails.');
            }

            options.pathParams = { 'cluster_id': clusterId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 如需使用作业管理接口请参考apiv2接口使用，本接口后续不再进行维护。
         * 查询指定作业的exe对象详细信息。该接口不兼容Sahara。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobExes(showJobExesRequest?: ShowJobExesRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/job-exes/{job_exe_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobExeId;

            if (showJobExesRequest !== null && showJobExesRequest !== undefined) {
                if (showJobExesRequest instanceof ShowJobExesRequest) {
                    jobExeId = showJobExesRequest.jobExeId;
                } else {
                    jobExeId = showJobExesRequest['job_exe_id'];
                }
            }

        
            if (jobExeId === null || jobExeId === undefined) {
            throw new RequiredError('jobExeId','Required parameter jobExeId was null or undefined when calling showJobExes.');
            }

            options.pathParams = { 'job_exe_id': jobExeId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建集群后，扩容/缩容集群Core节点或者Task节点。MRS集群创建成功后不支持调整Master节点数量，即不支持扩缩容Master节点。该接口不兼容Sahara。
         * 处于running状态的集群才允许扩容/缩容，其他状态则不允许扩容/缩容。 集群状态和集群ID可参考[查询集群列表](https://support.huaweicloud.com/api-mrs/ListClusters.html)接口获取。 本章节的接口只支持流式集群、分析集群和混合集群，不支持自定义集群。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateClusterScaling(updateClusterScalingRequest?: UpdateClusterScalingRequest) {
            const options = {
                method: "PUT",
                url: "/v1.1/{project_id}/cluster_infos/{cluster_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let clusterId;

            if (updateClusterScalingRequest !== null && updateClusterScalingRequest !== undefined) {
                if (updateClusterScalingRequest instanceof UpdateClusterScalingRequest) {
                    clusterId = updateClusterScalingRequest.clusterId;
                    body = updateClusterScalingRequest.body
                } else {
                    clusterId = updateClusterScalingRequest['cluster_id'];
                    body = updateClusterScalingRequest['body'];
                }
            }

        
            if (clusterId === null || clusterId === undefined) {
            throw new RequiredError('clusterId','Required parameter clusterId was null or undefined when calling updateClusterScaling.');
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
         * 在创建集群时，需要配置实例所在的可用区ID，可通过该接口查询可用区的ID。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAvailableZones(listAvailableZonesRequest?: ListAvailableZonesRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{region_id}/available-zones",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let regionId;
            
            let scope;

            if (listAvailableZonesRequest !== null && listAvailableZonesRequest !== undefined) {
                if (listAvailableZonesRequest instanceof ListAvailableZonesRequest) {
                    regionId = listAvailableZonesRequest.regionId;
                    scope = listAvailableZonesRequest.scope;
                } else {
                    regionId = listAvailableZonesRequest['region_id'];
                    scope = listAvailableZonesRequest['scope'];
                }
            }

        
            if (regionId === null || regionId === undefined) {
            throw new RequiredError('regionId','Required parameter regionId was null or undefined when calling listAvailableZones.');
            }
            if (scope !== null && scope !== undefined) {
                localVarQueryParameter['scope'] = scope;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'region_id': regionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对应版本元数据。如果参数里指定集群id，则可查询集群更新过补丁之后的最新元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMrsVersionMetadata(showMrsVersionMetadataRequest?: ShowMrsVersionMetadataRequest) {
            const options = {
                method: "GET",
                url: "/v1.1/{project_id}/metadata/versions/{version_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let versionName;
            
            let clusterId;

            if (showMrsVersionMetadataRequest !== null && showMrsVersionMetadataRequest !== undefined) {
                if (showMrsVersionMetadataRequest instanceof ShowMrsVersionMetadataRequest) {
                    versionName = showMrsVersionMetadataRequest.versionName;
                    clusterId = showMrsVersionMetadataRequest.clusterId;
                } else {
                    versionName = showMrsVersionMetadataRequest['version_name'];
                    clusterId = showMrsVersionMetadataRequest['cluster_id'];
                }
            }

        
            if (versionName === null || versionName === undefined) {
            throw new RequiredError('versionName','Required parameter versionName was null or undefined when calling showMrsVersionMetadata.');
            }
            if (clusterId !== null && clusterId !== undefined) {
                localVarQueryParameter['cluster_id'] = clusterId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'version_name': versionName, };
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