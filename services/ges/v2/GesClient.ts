import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AttachEip2Request } from './model/AttachEip2Request';
import { AttachEip2Response } from './model/AttachEip2Response';
import { AttachEipReq } from './model/AttachEipReq';
import { BackupDownloadLink } from './model/BackupDownloadLink';
import { ChangeSecurityGroupReq } from './model/ChangeSecurityGroupReq';
import { ChangeSecurityGroupRequest } from './model/ChangeSecurityGroupRequest';
import { ChangeSecurityGroupResponse } from './model/ChangeSecurityGroupResponse';
import { ClearGraph2Request } from './model/ClearGraph2Request';
import { ClearGraph2Response } from './model/ClearGraph2Response';
import { CreateBackup2Request } from './model/CreateBackup2Request';
import { CreateBackup2Response } from './model/CreateBackup2Response';
import { CreateGraph2Request } from './model/CreateGraph2Request';
import { CreateGraph2Response } from './model/CreateGraph2Response';
import { CreateGraphReq } from './model/CreateGraphReq';
import { CreateGraphReqGraph } from './model/CreateGraphReqGraph';
import { CreateGraphReqGraphEncryption } from './model/CreateGraphReqGraphEncryption';
import { CreateGraphReqGraphLtsOperationTrace } from './model/CreateGraphReqGraphLtsOperationTrace';
import { CreateGraphReqGraphPublicIp } from './model/CreateGraphReqGraphPublicIp';
import { CreateGraphReqGraphSysTags } from './model/CreateGraphReqGraphSysTags';
import { CreateGraphReqGraphVertexIdType } from './model/CreateGraphReqGraphVertexIdType';
import { CreateMetadata2Request } from './model/CreateMetadata2Request';
import { CreateMetadata2Response } from './model/CreateMetadata2Response';
import { CreateMetadataReq } from './model/CreateMetadataReq';
import { CreateMetadataReqGesMetadata } from './model/CreateMetadataReqGesMetadata';
import { CreateMetadataReqGesMetadataLabels } from './model/CreateMetadataReqGesMetadataLabels';
import { DeleteBackup2Request } from './model/DeleteBackup2Request';
import { DeleteBackup2Response } from './model/DeleteBackup2Response';
import { DeleteGraph2Request } from './model/DeleteGraph2Request';
import { DeleteGraph2Response } from './model/DeleteGraph2Response';
import { DeleteMetadata2Request } from './model/DeleteMetadata2Request';
import { DeleteMetadata2Response } from './model/DeleteMetadata2Response';
import { DeregisterScenes2Request } from './model/DeregisterScenes2Request';
import { DeregisterScenes2Response } from './model/DeregisterScenes2Response';
import { DeregisterScenesReq } from './model/DeregisterScenesReq';
import { DeregisterScenesReqScenes } from './model/DeregisterScenesReqScenes';
import { DetachEip2Request } from './model/DetachEip2Request';
import { DetachEip2Response } from './model/DetachEip2Response';
import { DetachEipReq } from './model/DetachEipReq';
import { ExpandGraph2Request } from './model/ExpandGraph2Request';
import { ExpandGraph2Response } from './model/ExpandGraph2Response';
import { ExpandGraphReq } from './model/ExpandGraphReq';
import { ExpandGraphReqExpand } from './model/ExpandGraphReqExpand';
import { ExportBackup2Request } from './model/ExportBackup2Request';
import { ExportBackup2Response } from './model/ExportBackup2Response';
import { ExportBackupReq } from './model/ExportBackupReq';
import { ExportGraph2Request } from './model/ExportGraph2Request';
import { ExportGraph2Response } from './model/ExportGraph2Response';
import { ExportGraphReq } from './model/ExportGraphReq';
import { ExportGraphReqPaginate } from './model/ExportGraphReqPaginate';
import { ImportBackup2Request } from './model/ImportBackup2Request';
import { ImportBackup2Response } from './model/ImportBackup2Response';
import { ImportBackupReq } from './model/ImportBackupReq';
import { ImportGraph2Request } from './model/ImportGraph2Request';
import { ImportGraph2Response } from './model/ImportGraph2Response';
import { ImportGraphReq } from './model/ImportGraphReq';
import { ImportGraphReqParallelEdge } from './model/ImportGraphReqParallelEdge';
import { ListBackups2Request } from './model/ListBackups2Request';
import { ListBackups2Response } from './model/ListBackups2Response';
import { ListBackupsRespBackupList } from './model/ListBackupsRespBackupList';
import { ListGraphBackups2Request } from './model/ListGraphBackups2Request';
import { ListGraphBackups2Response } from './model/ListGraphBackups2Response';
import { ListGraphs2Request } from './model/ListGraphs2Request';
import { ListGraphs2Response } from './model/ListGraphs2Response';
import { ListGraphsRespGraphs } from './model/ListGraphsRespGraphs';
import { ListGraphsRespSchemaPath } from './model/ListGraphsRespSchemaPath';
import { ListGraphsRespTags } from './model/ListGraphsRespTags';
import { ListGraphsRespVertexIdType } from './model/ListGraphsRespVertexIdType';
import { ListJobs2Request } from './model/ListJobs2Request';
import { ListJobs2Response } from './model/ListJobs2Response';
import { ListJobsRespJobList } from './model/ListJobsRespJobList';
import { ListMetadatas2Request } from './model/ListMetadatas2Request';
import { ListMetadatas2Response } from './model/ListMetadatas2Response';
import { ListMetadatasRespSchemaList } from './model/ListMetadatasRespSchemaList';
import { ListQuotas2Request } from './model/ListQuotas2Request';
import { ListQuotas2Response } from './model/ListQuotas2Response';
import { ListQuotasRespQuotas } from './model/ListQuotasRespQuotas';
import { ListQuotasRespQuotasResources } from './model/ListQuotasRespQuotasResources';
import { ListScenes2Request } from './model/ListScenes2Request';
import { ListScenes2Response } from './model/ListScenes2Response';
import { ListScenesRespParams } from './model/ListScenesRespParams';
import { ListScenesRespResults } from './model/ListScenesRespResults';
import { RegisterScenes2Request } from './model/RegisterScenes2Request';
import { RegisterScenes2Response } from './model/RegisterScenes2Response';
import { RegisterScenesReq } from './model/RegisterScenesReq';
import { RegisterScenesReqScenes } from './model/RegisterScenesReqScenes';
import { ResizeGraph2Request } from './model/ResizeGraph2Request';
import { ResizeGraph2Response } from './model/ResizeGraph2Response';
import { ResizeGraphReq } from './model/ResizeGraphReq';
import { ResizeGraphReqResize } from './model/ResizeGraphReqResize';
import { RestartGraph2Request } from './model/RestartGraph2Request';
import { RestartGraph2Response } from './model/RestartGraph2Response';
import { ShowBackupDownloadLinkRequest } from './model/ShowBackupDownloadLinkRequest';
import { ShowBackupDownloadLinkResponse } from './model/ShowBackupDownloadLinkResponse';
import { ShowGraph2Request } from './model/ShowGraph2Request';
import { ShowGraph2Response } from './model/ShowGraph2Response';
import { ShowGraphRespGraph } from './model/ShowGraphRespGraph';
import { ShowJob2Request } from './model/ShowJob2Request';
import { ShowJob2Response } from './model/ShowJob2Response';
import { ShowJobRespJobDetail } from './model/ShowJobRespJobDetail';
import { ShowJobRespJobDetailSchemaPath } from './model/ShowJobRespJobDetailSchemaPath';
import { ShowMetadata2Request } from './model/ShowMetadata2Request';
import { ShowMetadata2Response } from './model/ShowMetadata2Response';
import { ShowMetadataRespGesMetadata } from './model/ShowMetadataRespGesMetadata';
import { ShowMetadataRespGesMetadataLabels } from './model/ShowMetadataRespGesMetadataLabels';
import { StartGraph2Request } from './model/StartGraph2Request';
import { StartGraph2Response } from './model/StartGraph2Response';
import { StartGraphReq } from './model/StartGraphReq';
import { StopGraph2Request } from './model/StopGraph2Request';
import { StopGraph2Response } from './model/StopGraph2Response';
import { UpgradeGraph2Request } from './model/UpgradeGraph2Request';
import { UpgradeGraph2Response } from './model/UpgradeGraph2Response';
import { UpgradeGraphReq } from './model/UpgradeGraphReq';
import { UploadFromObs2Request } from './model/UploadFromObs2Request';
import { UploadFromObs2Response } from './model/UploadFromObs2Response';
import { UploadFromObsReq } from './model/UploadFromObsReq';
import { UploadFromObsReqEncryption } from './model/UploadFromObsReqEncryption';

export class GesClient {
    public static newBuilder(): ClientBuilder<GesClient> {
            let client = new ClientBuilder<GesClient>(newClient);
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
     * 可以通过绑定弹性公网IP（简称EIP）访问GES服务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定EIP
     * @param {string} graphId 图ID。
     * @param {AttachEipReq} attachEipReq 绑定EIP请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public attachEip2(attachEip2Request?: AttachEip2Request): Promise<AttachEip2Response> {
        const options = ParamCreater().attachEip2(attachEip2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口可以在图创建成功后，修改图的安全组。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 切换安全组
     * @param {string} graphId 图ID。
     * @param {ChangeSecurityGroupReq} changeSecurityGroupReq 切换安全组请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest): Promise<ChangeSecurityGroupResponse> {
        const options = ParamCreater().changeSecurityGroup(changeSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清空图中所有数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 清空图
     * @param {string} graphId 图ID。
     * @param {boolean} [clearMetadata] 是否清空图关联的元数据。建议清除。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public clearGraph2(clearGraph2Request?: ClearGraph2Request): Promise<ClearGraph2Response> {
        const options = ParamCreater().clearGraph2(clearGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增备份。当前图数据出现错误或故障时，可以启动备份图进行恢复。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增备份
     * @param {string} graphId 图ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBackup2(createBackup2Request?: CreateBackup2Request): Promise<CreateBackup2Response> {
        const options = ParamCreater().createBackup2(createBackup2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建一个图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建图
     * @param {CreateGraphReq} createGraphReq 创建图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGraph2(createGraph2Request?: CreateGraph2Request): Promise<CreateGraph2Response> {
        const options = ParamCreater().createGraph2(createGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 新增元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 新增元数据
     * @param {CreateMetadataReq} createMetadataReq 创建元数据请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createMetadata2(createMetadata2Request?: CreateMetadata2Request): Promise<CreateMetadata2Response> {
        const options = ParamCreater().createMetadata2(createMetadata2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除备份。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除备份
     * @param {string} graphId 图ID。
     * @param {string} backupId 图备份ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBackup2(deleteBackup2Request?: DeleteBackup2Request): Promise<DeleteBackup2Response> {
        const options = ParamCreater().deleteBackup2(deleteBackup2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除一个图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除图
     * @param {string} graphId 图ID。
     * @param {boolean} [keepBackup] 删除图后是否保留备份，默认保留1个自动备份和2个手动备份。该查询参数为空时，表示不保留。
     * @param {boolean} [deleteEip] 是否同时删除EIP。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteGraph2(deleteGraph2Request?: DeleteGraph2Request): Promise<DeleteGraph2Response> {
        const options = ParamCreater().deleteGraph2(deleteGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除元数据
     * @param {string} metadataId 元数据ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteMetadata2(deleteMetadata2Request?: DeleteMetadata2Request): Promise<DeleteMetadata2Response> {
        const options = ParamCreater().deleteMetadata2(deleteMetadata2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当无需继续使用EIP时，您可通过解绑EIP来释放网络资源。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑EIP
     * @param {string} graphId 图ID。
     * @param {DetachEipReq} detachEipReq 解绑EIP请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public detachEip2(detachEip2Request?: DetachEip2Request): Promise<DetachEip2Response> {
        const options = ParamCreater().detachEip2(detachEip2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩副本能力允许动态扩容多个从节点，扩容的从节点可以处理读请求，从而提高读请求性能。
     * &gt; 1.一万边和百亿边规格的图暂不支持扩副本。
     * 2.进行扩副本操作后，不支持变更图规格操作。
     * 3.如果要对图进行扩容和扩副本两个操作，需要您先进行变更图规格操作，再进行扩副本操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩副本
     * @param {string} graphId 图ID。
     * @param {ExpandGraphReq} expandGraphReq 扩副本请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandGraph2(expandGraph2Request?: ExpandGraph2Request): Promise<ExpandGraph2Response> {
        const options = ParamCreater().expandGraph2(expandGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出备份
     * @param {string} graphId 图ID。
     * @param {ExportBackupReq} exportBackupReq 导出备份请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportBackup2(exportBackup2Request?: ExportBackup2Request): Promise<ExportBackup2Response> {
        const options = ParamCreater().exportBackup2(exportBackup2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出图
     * @param {string} graphId 图ID。
     * @param {ExportGraphReq} exportGraphReq 导出图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportGraph2(exportGraph2Request?: ExportGraph2Request): Promise<ExportGraph2Response> {
        const options = ParamCreater().exportGraph2(exportGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入备份
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入备份
     * @param {string} graphId 图ID。
     * @param {ImportBackupReq} importBackupReq 导入备份请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importBackup2(importBackup2Request?: ImportBackup2Request): Promise<ImportBackup2Response> {
        const options = ParamCreater().importBackup2(importBackup2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 增量导入图数据。
     * &gt; 为防止系统重启时，不能正常恢复导入图数据，建议在使用图期间，不要删除存储在OBS中的数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 增量导入图
     * @param {string} graphId 图ID。
     * @param {ImportGraphReq} [importGraphReq] 增量导入图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importGraph2(importGraph2Request?: ImportGraph2Request): Promise<ImportGraph2Response> {
        const options = ParamCreater().importGraph2(importGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看所有备份列表
     * @param {number} [offset] 本次请求的起始位置，默认为0。
     * @param {number} [limit] 每页资源数量的最大值，默认为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBackups2(listBackups2Request?: ListBackups2Request): Promise<ListBackups2Response> {
        const options = ParamCreater().listBackups2(listBackups2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个图下的备份列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看某个图的备份列表
     * @param {string} graphId 图ID。
     * @param {number} [offset] 本次请求的起始位置，默认为0。
     * @param {number} [limit] 每页资源数量的最大值，默认为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGraphBackups2(listGraphBackups2Request?: ListGraphBackups2Request): Promise<ListGraphBackups2Response> {
        const options = ParamCreater().listGraphBackups2(listGraphBackups2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询当前租户所有的图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询图列表
     * @param {number} [offset] 本次请求的起始位置，默认为0。
     * @param {number} [limit] 每页资源数量的最大值，默认为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGraphs2(listGraphs2Request?: ListGraphs2Request): Promise<ListGraphs2Response> {
        const options = ParamCreater().listGraphs2(listGraphs2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询管理面任务中心。当前创建图、关闭图、启动图、删除图、增加备份、导入图、导出图、升级图等操作为异步任务，该API用于查询这些任务的详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务中心
     * @param {string} [endTime] 任务结束日期，当前只支持日期，不支持时间。格式为：yyyy-MM-dd，比如2019-03-27。
     * @param {string} [graphName] 关联的图名称。
     * @param {string} [limit] 每页资源数量的最大值，默认为10。
     * @param {string} [offset] 本次请求的起始位置，默认为0。
     * @param {string} [startTime] 任务开始日期，当前只支持日期，不支持时间。格式为：yyyy-MM-dd，比如2019-03-27。
     * @param {string} [status] 任务状态。取值为：  - running - waiting - success - failed
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobs2(listJobs2Request?: ListJobs2Request): Promise<ListJobs2Response> {
        const options = ParamCreater().listJobs2(listJobs2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询元数据列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询元数据列表
     * @param {number} [offset] 本次请求的起始位置，默认为0。
     * @param {number} [limit] 每页资源数量的最大值，默认为10。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listMetadatas2(listMetadatas2Request?: ListMetadatas2Request): Promise<ListMetadatas2Response> {
        const options = ParamCreater().listMetadatas2(listMetadatas2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listQuotas2(listQuotas2Request?: ListQuotas2Request): Promise<ListQuotas2Response> {
        const options = ParamCreater().listQuotas2();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 变更图规格规格。
     * &gt; 变更图规格以后所有索引（复合索引和全文索引）都需要重新创建。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 变更图规格
     * @param {string} graphId 图ID。
     * @param {ResizeGraphReq} resizeGraphReq 变更图规格请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public resizeGraph2(resizeGraph2Request?: ResizeGraph2Request): Promise<ResizeGraph2Response> {
        const options = ParamCreater().resizeGraph2(resizeGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 强制启动一个图。针对导入、导出 、运行中 、清空中的图。强制重启图，会将该图执行中的异步任务变为失败，然后停止图、启动图到运行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 强制重启图
     * @param {string} graphId 图ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restartGraph2(restartGraph2Request?: RestartGraph2Request): Promise<RestartGraph2Response> {
        const options = ParamCreater().restartGraph2(restartGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取备份下载链接
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取备份下载链接
     * @param {string} graphId 图ID。
     * @param {string} backupId 备份ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBackupDownloadLink(showBackupDownloadLinkRequest?: ShowBackupDownloadLinkRequest): Promise<ShowBackupDownloadLinkResponse> {
        const options = ParamCreater().showBackupDownloadLink(showBackupDownloadLinkRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据图ID查询某个图详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询图详情
     * @param {string} graphId 图ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showGraph2(showGraph2Request?: ShowGraph2Request): Promise<ShowGraph2Response> {
        const options = ParamCreater().showGraph2(showGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询Job的执行状态。对创建图、关闭图、启动图、删除图、导入图等异步API命令下发后，会返回jobId，通过jobId查询任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询Job状态-管理面
     * @param {string} graphId 图ID。
     * @param {string} jobId Job ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJob2(showJob2Request?: ShowJob2Request): Promise<ShowJob2Response> {
        const options = ParamCreater().showJob2(showJob2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某个元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询元数据
     * @param {string} metadataId 元数据ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetadata2(showMetadata2Request?: ShowMetadata2Request): Promise<ShowMetadata2Response> {
        const options = ParamCreater().showMetadata2(showMetadata2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启动一个图。暂时不用的图可以先关闭，需要使用时再启动。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启动图
     * @param {string} graphId 图ID。
     * @param {StartGraphReq} [startGraphReq] 启动图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public startGraph2(startGraph2Request?: StartGraph2Request): Promise<StartGraph2Response> {
        const options = ParamCreater().startGraph2(startGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 关闭一个图。如果图创建好了，暂时不用可以先关闭，需要使用时再启用。
     * &gt; 处于关闭状态的图不计算实例费用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭图
     * @param {string} graphId 图ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopGraph2(stopGraph2Request?: StopGraph2Request): Promise<StopGraph2Response> {
        const options = ParamCreater().stopGraph2(stopGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 升级图。图引擎服务会定期升级版本，用户可根据需要升级图。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 升级图
     * @param {string} graphId 图ID。
     * @param {UpgradeGraphReq} upgradeGraphReq 升级图请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public upgradeGraph2(upgradeGraph2Request?: UpgradeGraph2Request): Promise<UpgradeGraph2Response> {
        const options = ParamCreater().upgradeGraph2(upgradeGraph2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 从OBS导入元数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 从OBS导入元数据
     * @param {UploadFromObsReq} uploadFromObsReq 从OBS导入元数据请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadFromObs2(uploadFromObs2Request?: UploadFromObs2Request): Promise<UploadFromObs2Response> {
        const options = ParamCreater().uploadFromObs2(uploadFromObs2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消订阅scenes场景应用分析能力，取消订阅后对应scene下的application业务面API将不能使用。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消订阅场景分析插件
     * @param {string} graphId 图ID。
     * @param {DeregisterScenesReq} deregisterScenesReq DeregisterScenes请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deregisterScenes2(deregisterScenes2Request?: DeregisterScenes2Request): Promise<DeregisterScenes2Response> {
        const options = ParamCreater().deregisterScenes2(deregisterScenes2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询scenes场景下的应用分析能力详情，可以获得对应场景下的application、参数和功能介绍详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询获取场景应用分析插件
     * @param {string} [sceneName] 场景名称。 当有且只有scene_name有值时，返回对应scene_name下的所有application详情。 当有且只有scene_name、application_name有值时，返回与application_name对应的application详情。 当scene_name、application_name、graph_id均无值时,返回所有SceneApplication
     * @param {string} [applicationName] 应用程序名字。 当有且只有scene_name、application_name有值时，返回与application_name对应的application详情。 当scene_name、application_name、graph_id均无值时,返回所有SceneApplication。
     * @param {string} [graphId] 图ID。 当有且只有graph_id有值时，返回对应图id下所订阅的application详情。 当scene_name、application_name、graph_id均无值时,返回所有SceneApplication。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listScenes2(listScenes2Request?: ListScenes2Request): Promise<ListScenes2Response> {
        const options = ParamCreater().listScenes2(listScenes2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 订阅scenes应用场景分析能力，便于业务面API使用对应功能。
     * &gt; 已订阅的不可以重复订阅，需要更新请先取消原有订购，重新订购。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 订阅场景分析插件
     * @param {string} graphId 图ID。
     * @param {RegisterScenesReq} registerScenesReq RegisterScenes请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public registerScenes2(registerScenes2Request?: RegisterScenes2Request): Promise<RegisterScenes2Response> {
        const options = ParamCreater().registerScenes2(registerScenes2Request);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 可以通过绑定弹性公网IP（简称EIP）访问GES服务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        attachEip2(attachEip2Request?: AttachEip2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/bind-eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (attachEip2Request !== null && attachEip2Request !== undefined) {
                if (attachEip2Request instanceof AttachEip2Request) {
                    graphId = attachEip2Request.graphId;
                    body = attachEip2Request.body
                } else {
                    graphId = attachEip2Request['graph_id'];
                    body = attachEip2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling attachEip2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口可以在图创建成功后，修改图的安全组。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/sg/change",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (changeSecurityGroupRequest !== null && changeSecurityGroupRequest !== undefined) {
                if (changeSecurityGroupRequest instanceof ChangeSecurityGroupRequest) {
                    graphId = changeSecurityGroupRequest.graphId;
                    body = changeSecurityGroupRequest.body
                } else {
                    graphId = changeSecurityGroupRequest['graph_id'];
                    body = changeSecurityGroupRequest['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling changeSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 清空图中所有数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        clearGraph2(clearGraph2Request?: ClearGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/clear-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let graphId;
            
            let clearMetadata;

            if (clearGraph2Request !== null && clearGraph2Request !== undefined) {
                if (clearGraph2Request instanceof ClearGraph2Request) {
                    graphId = clearGraph2Request.graphId;
                    clearMetadata = clearGraph2Request.clearMetadata;
                } else {
                    graphId = clearGraph2Request['graph_id'];
                    clearMetadata = clearGraph2Request['clear_metadata'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling clearGraph2.');
            }
            if (clearMetadata !== null && clearMetadata !== undefined) {
                localVarQueryParameter['clear_metadata'] = clearMetadata;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 新增备份。当前图数据出现错误或故障时，可以启动备份图进行恢复。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBackup2(createBackup2Request?: CreateBackup2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let graphId;

            if (createBackup2Request !== null && createBackup2Request !== undefined) {
                if (createBackup2Request instanceof CreateBackup2Request) {
                    graphId = createBackup2Request.graphId;
                } else {
                    graphId = createBackup2Request['graph_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling createBackup2.');
            }

            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建一个图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGraph2(createGraph2Request?: CreateGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGraph2Request !== null && createGraph2Request !== undefined) {
                if (createGraph2Request instanceof CreateGraph2Request) {
                    body = createGraph2Request.body
                } else {
                    body = createGraph2Request['body'];
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
         * 新增元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createMetadata2(createMetadata2Request?: CreateMetadata2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/metadatas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createMetadata2Request !== null && createMetadata2Request !== undefined) {
                if (createMetadata2Request instanceof CreateMetadata2Request) {
                    body = createMetadata2Request.body
                } else {
                    body = createMetadata2Request['body'];
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
         * 删除备份。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBackup2(deleteBackup2Request?: DeleteBackup2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/graphs/{graph_id}/backups/{backup_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let graphId;
            
            let backupId;

            if (deleteBackup2Request !== null && deleteBackup2Request !== undefined) {
                if (deleteBackup2Request instanceof DeleteBackup2Request) {
                    graphId = deleteBackup2Request.graphId;
                    backupId = deleteBackup2Request.backupId;
                } else {
                    graphId = deleteBackup2Request['graph_id'];
                    backupId = deleteBackup2Request['backup_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling deleteBackup2.');
            }
            if (backupId === null || backupId === undefined) {
            throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling deleteBackup2.');
            }

            options.pathParams = { 'graph_id': graphId,'backup_id': backupId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除一个图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteGraph2(deleteGraph2Request?: DeleteGraph2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/graphs/{graph_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let graphId;
            
            let keepBackup;
            
            let deleteEip;

            if (deleteGraph2Request !== null && deleteGraph2Request !== undefined) {
                if (deleteGraph2Request instanceof DeleteGraph2Request) {
                    graphId = deleteGraph2Request.graphId;
                    keepBackup = deleteGraph2Request.keepBackup;
                    deleteEip = deleteGraph2Request.deleteEip;
                } else {
                    graphId = deleteGraph2Request['graph_id'];
                    keepBackup = deleteGraph2Request['keep_backup'];
                    deleteEip = deleteGraph2Request['delete_eip'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling deleteGraph2.');
            }
            if (keepBackup !== null && keepBackup !== undefined) {
                localVarQueryParameter['keep_backup'] = keepBackup;
            }
            if (deleteEip !== null && deleteEip !== undefined) {
                localVarQueryParameter['delete_eip'] = deleteEip;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteMetadata2(deleteMetadata2Request?: DeleteMetadata2Request) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/graphs/metadatas/{metadata_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let metadataId;

            if (deleteMetadata2Request !== null && deleteMetadata2Request !== undefined) {
                if (deleteMetadata2Request instanceof DeleteMetadata2Request) {
                    metadataId = deleteMetadata2Request.metadataId;
                } else {
                    metadataId = deleteMetadata2Request['metadata_id'];
                }
            }

        
            if (metadataId === null || metadataId === undefined) {
            throw new RequiredError('metadataId','Required parameter metadataId was null or undefined when calling deleteMetadata2.');
            }

            options.pathParams = { 'metadata_id': metadataId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 当无需继续使用EIP时，您可通过解绑EIP来释放网络资源。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        detachEip2(detachEip2Request?: DetachEip2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/unbind-eip",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (detachEip2Request !== null && detachEip2Request !== undefined) {
                if (detachEip2Request instanceof DetachEip2Request) {
                    graphId = detachEip2Request.graphId;
                    body = detachEip2Request.body
                } else {
                    graphId = detachEip2Request['graph_id'];
                    body = detachEip2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling detachEip2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩副本能力允许动态扩容多个从节点，扩容的从节点可以处理读请求，从而提高读请求性能。
         * &gt; 1.一万边和百亿边规格的图暂不支持扩副本。
         * 2.进行扩副本操作后，不支持变更图规格操作。
         * 3.如果要对图进行扩容和扩副本两个操作，需要您先进行变更图规格操作，再进行扩副本操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandGraph2(expandGraph2Request?: ExpandGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/expand",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (expandGraph2Request !== null && expandGraph2Request !== undefined) {
                if (expandGraph2Request instanceof ExpandGraph2Request) {
                    graphId = expandGraph2Request.graphId;
                    body = expandGraph2Request.body
                } else {
                    graphId = expandGraph2Request['graph_id'];
                    body = expandGraph2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling expandGraph2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportBackup2(exportBackup2Request?: ExportBackup2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/backups/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (exportBackup2Request !== null && exportBackup2Request !== undefined) {
                if (exportBackup2Request instanceof ExportBackup2Request) {
                    graphId = exportBackup2Request.graphId;
                    body = exportBackup2Request.body
                } else {
                    graphId = exportBackup2Request['graph_id'];
                    body = exportBackup2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling exportBackup2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportGraph2(exportGraph2Request?: ExportGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/export-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (exportGraph2Request !== null && exportGraph2Request !== undefined) {
                if (exportGraph2Request instanceof ExportGraph2Request) {
                    graphId = exportGraph2Request.graphId;
                    body = exportGraph2Request.body
                } else {
                    graphId = exportGraph2Request['graph_id'];
                    body = exportGraph2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling exportGraph2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入备份
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importBackup2(importBackup2Request?: ImportBackup2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/backups/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (importBackup2Request !== null && importBackup2Request !== undefined) {
                if (importBackup2Request instanceof ImportBackup2Request) {
                    graphId = importBackup2Request.graphId;
                    body = importBackup2Request.body
                } else {
                    graphId = importBackup2Request['graph_id'];
                    body = importBackup2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling importBackup2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 增量导入图数据。
         * &gt; 为防止系统重启时，不能正常恢复导入图数据，建议在使用图期间，不要删除存储在OBS中的数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importGraph2(importGraph2Request?: ImportGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/import-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (importGraph2Request !== null && importGraph2Request !== undefined) {
                if (importGraph2Request instanceof ImportGraph2Request) {
                    graphId = importGraph2Request.graphId;
                    body = importGraph2Request.body
                } else {
                    graphId = importGraph2Request['graph_id'];
                    body = importGraph2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling importGraph2.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBackups2(listBackups2Request?: ListBackups2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listBackups2Request !== null && listBackups2Request !== undefined) {
                if (listBackups2Request instanceof ListBackups2Request) {
                    offset = listBackups2Request.offset;
                    limit = listBackups2Request.limit;
                } else {
                    offset = listBackups2Request['offset'];
                    limit = listBackups2Request['limit'];
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
         * 查询某个图下的备份列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGraphBackups2(listGraphBackups2Request?: ListGraphBackups2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/{graph_id}/backups",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let graphId;
            
            let offset;
            
            let limit;

            if (listGraphBackups2Request !== null && listGraphBackups2Request !== undefined) {
                if (listGraphBackups2Request instanceof ListGraphBackups2Request) {
                    graphId = listGraphBackups2Request.graphId;
                    offset = listGraphBackups2Request.offset;
                    limit = listGraphBackups2Request.limit;
                } else {
                    graphId = listGraphBackups2Request['graph_id'];
                    offset = listGraphBackups2Request['offset'];
                    limit = listGraphBackups2Request['limit'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling listGraphBackups2.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询当前租户所有的图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGraphs2(listGraphs2Request?: ListGraphs2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listGraphs2Request !== null && listGraphs2Request !== undefined) {
                if (listGraphs2Request instanceof ListGraphs2Request) {
                    offset = listGraphs2Request.offset;
                    limit = listGraphs2Request.limit;
                } else {
                    offset = listGraphs2Request['offset'];
                    limit = listGraphs2Request['limit'];
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
         * 查询管理面任务中心。当前创建图、关闭图、启动图、删除图、增加备份、导入图、导出图、升级图等操作为异步任务，该API用于查询这些任务的详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs2(listJobs2Request?: ListJobs2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let endTime;
            
            let graphName;
            
            let limit;
            
            let offset;
            
            let startTime;
            
            let status;

            if (listJobs2Request !== null && listJobs2Request !== undefined) {
                if (listJobs2Request instanceof ListJobs2Request) {
                    endTime = listJobs2Request.endTime;
                    graphName = listJobs2Request.graphName;
                    limit = listJobs2Request.limit;
                    offset = listJobs2Request.offset;
                    startTime = listJobs2Request.startTime;
                    status = listJobs2Request.status;
                } else {
                    endTime = listJobs2Request['end_time'];
                    graphName = listJobs2Request['graph_name'];
                    limit = listJobs2Request['limit'];
                    offset = listJobs2Request['offset'];
                    startTime = listJobs2Request['start_time'];
                    status = listJobs2Request['status'];
                }
            }

        
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (graphName !== null && graphName !== undefined) {
                localVarQueryParameter['graph_name'] = graphName;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询元数据列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listMetadatas2(listMetadatas2Request?: ListMetadatas2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/metadatas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let offset;
            
            let limit;

            if (listMetadatas2Request !== null && listMetadatas2Request !== undefined) {
                if (listMetadatas2Request instanceof ListMetadatas2Request) {
                    offset = listMetadatas2Request.offset;
                    limit = listMetadatas2Request.limit;
                } else {
                    offset = listMetadatas2Request['offset'];
                    limit = listMetadatas2Request['limit'];
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
         * 查询租户配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listQuotas2() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/quotas",
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
         * 变更图规格规格。
         * &gt; 变更图规格以后所有索引（复合索引和全文索引）都需要重新创建。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        resizeGraph2(resizeGraph2Request?: ResizeGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/resize",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (resizeGraph2Request !== null && resizeGraph2Request !== undefined) {
                if (resizeGraph2Request instanceof ResizeGraph2Request) {
                    graphId = resizeGraph2Request.graphId;
                    body = resizeGraph2Request.body
                } else {
                    graphId = resizeGraph2Request['graph_id'];
                    body = resizeGraph2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling resizeGraph2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 强制启动一个图。针对导入、导出 、运行中 、清空中的图。强制重启图，会将该图执行中的异步任务变为失败，然后停止图、启动图到运行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restartGraph2(restartGraph2Request?: RestartGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/restart",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let graphId;

            if (restartGraph2Request !== null && restartGraph2Request !== undefined) {
                if (restartGraph2Request instanceof RestartGraph2Request) {
                    graphId = restartGraph2Request.graphId;
                } else {
                    graphId = restartGraph2Request['graph_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling restartGraph2.');
            }

            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取备份下载链接
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBackupDownloadLink(showBackupDownloadLinkRequest?: ShowBackupDownloadLinkRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/{graph_id}/backup-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let graphId;
            
            let backupId;

            if (showBackupDownloadLinkRequest !== null && showBackupDownloadLinkRequest !== undefined) {
                if (showBackupDownloadLinkRequest instanceof ShowBackupDownloadLinkRequest) {
                    graphId = showBackupDownloadLinkRequest.graphId;
                    backupId = showBackupDownloadLinkRequest.backupId;
                } else {
                    graphId = showBackupDownloadLinkRequest['graph_id'];
                    backupId = showBackupDownloadLinkRequest['backup_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling showBackupDownloadLink.');
            }
            if (backupId === null || backupId === undefined) {
                throw new RequiredError('backupId','Required parameter backupId was null or undefined when calling showBackupDownloadLink.');
            }
            if (backupId !== null && backupId !== undefined) {
                localVarQueryParameter['backup_id'] = backupId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据图ID查询某个图详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showGraph2(showGraph2Request?: ShowGraph2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/{graph_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let graphId;

            if (showGraph2Request !== null && showGraph2Request !== undefined) {
                if (showGraph2Request instanceof ShowGraph2Request) {
                    graphId = showGraph2Request.graphId;
                } else {
                    graphId = showGraph2Request['graph_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling showGraph2.');
            }

            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询Job的执行状态。对创建图、关闭图、启动图、删除图、导入图等异步API命令下发后，会返回jobId，通过jobId查询任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJob2(showJob2Request?: ShowJob2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/{graph_id}/jobs/{job_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let graphId;
            
            let jobId;

            if (showJob2Request !== null && showJob2Request !== undefined) {
                if (showJob2Request instanceof ShowJob2Request) {
                    graphId = showJob2Request.graphId;
                    jobId = showJob2Request.jobId;
                } else {
                    graphId = showJob2Request['graph_id'];
                    jobId = showJob2Request['job_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling showJob2.');
            }
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJob2.');
            }

            options.pathParams = { 'graph_id': graphId,'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询某个元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetadata2(showMetadata2Request?: ShowMetadata2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/metadatas/{metadata_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let metadataId;

            if (showMetadata2Request !== null && showMetadata2Request !== undefined) {
                if (showMetadata2Request instanceof ShowMetadata2Request) {
                    metadataId = showMetadata2Request.metadataId;
                } else {
                    metadataId = showMetadata2Request['metadata_id'];
                }
            }

        
            if (metadataId === null || metadataId === undefined) {
            throw new RequiredError('metadataId','Required parameter metadataId was null or undefined when calling showMetadata2.');
            }

            options.pathParams = { 'metadata_id': metadataId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启动一个图。暂时不用的图可以先关闭，需要使用时再启动。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        startGraph2(startGraph2Request?: StartGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/start",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (startGraph2Request !== null && startGraph2Request !== undefined) {
                if (startGraph2Request instanceof StartGraph2Request) {
                    graphId = startGraph2Request.graphId;
                    body = startGraph2Request.body
                } else {
                    graphId = startGraph2Request['graph_id'];
                    body = startGraph2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling startGraph2.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 关闭一个图。如果图创建好了，暂时不用可以先关闭，需要使用时再启用。
         * &gt; 处于关闭状态的图不计算实例费用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopGraph2(stopGraph2Request?: StopGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let graphId;

            if (stopGraph2Request !== null && stopGraph2Request !== undefined) {
                if (stopGraph2Request instanceof StopGraph2Request) {
                    graphId = stopGraph2Request.graphId;
                } else {
                    graphId = stopGraph2Request['graph_id'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling stopGraph2.');
            }

            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 升级图。图引擎服务会定期升级版本，用户可根据需要升级图。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        upgradeGraph2(upgradeGraph2Request?: UpgradeGraph2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/upgrade",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (upgradeGraph2Request !== null && upgradeGraph2Request !== undefined) {
                if (upgradeGraph2Request instanceof UpgradeGraph2Request) {
                    graphId = upgradeGraph2Request.graphId;
                    body = upgradeGraph2Request.body
                } else {
                    graphId = upgradeGraph2Request['graph_id'];
                    body = upgradeGraph2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling upgradeGraph2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 从OBS导入元数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadFromObs2(uploadFromObs2Request?: UploadFromObs2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/metadata/upload-from-obs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (uploadFromObs2Request !== null && uploadFromObs2Request !== undefined) {
                if (uploadFromObs2Request instanceof UploadFromObs2Request) {
                    body = uploadFromObs2Request.body
                } else {
                    body = uploadFromObs2Request['body'];
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
         * 取消订阅scenes场景应用分析能力，取消订阅后对应scene下的application业务面API将不能使用。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deregisterScenes2(deregisterScenes2Request?: DeregisterScenes2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/scenes/unregister",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (deregisterScenes2Request !== null && deregisterScenes2Request !== undefined) {
                if (deregisterScenes2Request instanceof DeregisterScenes2Request) {
                    graphId = deregisterScenes2Request.graphId;
                    body = deregisterScenes2Request.body
                } else {
                    graphId = deregisterScenes2Request['graph_id'];
                    body = deregisterScenes2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling deregisterScenes2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询scenes场景下的应用分析能力详情，可以获得对应场景下的application、参数和功能介绍详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listScenes2(listScenes2Request?: ListScenes2Request) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/graphs/scenes",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let sceneName;
            
            let applicationName;
            
            let graphId;

            if (listScenes2Request !== null && listScenes2Request !== undefined) {
                if (listScenes2Request instanceof ListScenes2Request) {
                    sceneName = listScenes2Request.sceneName;
                    applicationName = listScenes2Request.applicationName;
                    graphId = listScenes2Request.graphId;
                } else {
                    sceneName = listScenes2Request['scene_name'];
                    applicationName = listScenes2Request['application_name'];
                    graphId = listScenes2Request['graph_id'];
                }
            }

        
            if (sceneName !== null && sceneName !== undefined) {
                localVarQueryParameter['scene_name'] = sceneName;
            }
            if (applicationName !== null && applicationName !== undefined) {
                localVarQueryParameter['application_name'] = applicationName;
            }
            if (graphId !== null && graphId !== undefined) {
                localVarQueryParameter['graph_id'] = graphId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 订阅scenes应用场景分析能力，便于业务面API使用对应功能。
         * &gt; 已订阅的不可以重复订阅，需要更新请先取消原有订购，重新订购。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        registerScenes2(registerScenes2Request?: RegisterScenes2Request) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/graphs/{graph_id}/scenes/register",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let graphId;

            if (registerScenes2Request !== null && registerScenes2Request !== undefined) {
                if (registerScenes2Request instanceof RegisterScenes2Request) {
                    graphId = registerScenes2Request.graphId;
                    body = registerScenes2Request.body
                } else {
                    graphId = registerScenes2Request['graph_id'];
                    body = registerScenes2Request['body'];
                }
            }

        
            if (graphId === null || graphId === undefined) {
            throw new RequiredError('graphId','Required parameter graphId was null or undefined when calling registerScenes2.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'graph_id': graphId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): GesClient {
    return new GesClient(client);
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