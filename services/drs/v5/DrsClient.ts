import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { ActionParams } from './model/ActionParams';
import { ActionReq } from './model/ActionReq';
import { AlarmNotifyConfig } from './model/AlarmNotifyConfig';
import { AsyncActionBaseResp } from './model/AsyncActionBaseResp';
import { AsyncActionResp } from './model/AsyncActionResp';
import { AsyncCommitJobResp } from './model/AsyncCommitJobResp';
import { AsyncCreateJobReq } from './model/AsyncCreateJobReq';
import { AsyncCreateJobResp } from './model/AsyncCreateJobResp';
import { AsyncJobResp } from './model/AsyncJobResp';
import { AsyncUpdateJobResp } from './model/AsyncUpdateJobResp';
import { BaseEndpoint } from './model/BaseEndpoint';
import { BaseEndpointConfig } from './model/BaseEndpointConfig';
import { BaseResp } from './model/BaseResp';
import { BatchAsyncCreateJobReq } from './model/BatchAsyncCreateJobReq';
import { BatchAsyncUpdateJobReq } from './model/BatchAsyncUpdateJobReq';
import { BatchCreateJobsAsyncRequest } from './model/BatchCreateJobsAsyncRequest';
import { BatchCreateJobsAsyncResponse } from './model/BatchCreateJobsAsyncResponse';
import { BatchDeleteJobReq } from './model/BatchDeleteJobReq';
import { BatchDeleteJobsByIdRequest } from './model/BatchDeleteJobsByIdRequest';
import { BatchDeleteJobsByIdResponse } from './model/BatchDeleteJobsByIdResponse';
import { BatchExecuteJobActionsRequest } from './model/BatchExecuteJobActionsRequest';
import { BatchExecuteJobActionsResponse } from './model/BatchExecuteJobActionsResponse';
import { BatchJobActionReq } from './model/BatchJobActionReq';
import { CheckJobNameReq } from './model/CheckJobNameReq';
import { ChildrenJobListResp } from './model/ChildrenJobListResp';
import { CloneJobReq } from './model/CloneJobReq';
import { CloudBaseInfo } from './model/CloudBaseInfo';
import { CloudVpcInfo } from './model/CloudVpcInfo';
import { CollectDbObjectsAsyncRequest } from './model/CollectDbObjectsAsyncRequest';
import { CollectDbObjectsAsyncResponse } from './model/CollectDbObjectsAsyncResponse';
import { ColumnObject } from './model/ColumnObject';
import { CommitAsyncJobRequest } from './model/CommitAsyncJobRequest';
import { CommitAsyncJobResponse } from './model/CommitAsyncJobResponse';
import { CompareJobInfo } from './model/CompareJobInfo';
import { CompareResultInfo } from './model/CompareResultInfo';
import { CompareTaskParams } from './model/CompareTaskParams';
import { ContentCompareDetailInfo } from './model/ContentCompareDetailInfo';
import { ContentCompareOverviewInfo } from './model/ContentCompareOverviewInfo';
import { CopyJobRequest } from './model/CopyJobRequest';
import { CopyJobResponse } from './model/CopyJobResponse';
import { CreateJobReq } from './model/CreateJobReq';
import { CreateJobRequest } from './model/CreateJobRequest';
import { CreateJobResp } from './model/CreateJobResp';
import { CreateJobResponse } from './model/CreateJobResponse';
import { DatabaseObject } from './model/DatabaseObject';
import { DbObject } from './model/DbObject';
import { DbObjectInfo } from './model/DbObjectInfo';
import { DbParam } from './model/DbParam';
import { DbParamInfo } from './model/DbParamInfo';
import { DeleteJobRequest } from './model/DeleteJobRequest';
import { DeleteJobResp } from './model/DeleteJobResp';
import { DeleteJobResponse } from './model/DeleteJobResponse';
import { DirtyData } from './model/DirtyData';
import { DownloadBatchCreateTemplateRequest } from './model/DownloadBatchCreateTemplateRequest';
import { DownloadBatchCreateTemplateResponse } from './model/DownloadBatchCreateTemplateResponse';
import { DownloadDbObjectTemplateRequest } from './model/DownloadDbObjectTemplateRequest';
import { DownloadDbObjectTemplateResponse } from './model/DownloadDbObjectTemplateResponse';
import { EndpointSslConfig } from './model/EndpointSslConfig';
import { EnterpriseProject } from './model/EnterpriseProject';
import { ErrorResp } from './model/ErrorResp';
import { ExecuteJobActionRequest } from './model/ExecuteJobActionRequest';
import { ExecuteJobActionResponse } from './model/ExecuteJobActionResponse';
import { FlowCompareData } from './model/FlowCompareData';
import { HealthCompareJob } from './model/HealthCompareJob';
import { ImportBatchCreateJobsRequest } from './model/ImportBatchCreateJobsRequest';
import { ImportBatchCreateJobsRequestBody } from './model/ImportBatchCreateJobsRequestBody';
import { ImportBatchCreateJobsResponse } from './model/ImportBatchCreateJobsResponse';
import { ImportErrorMessageResp } from './model/ImportErrorMessageResp';
import { JobActionReq } from './model/JobActionReq';
import { JobActions } from './model/JobActions';
import { JobBaseInfo } from './model/JobBaseInfo';
import { JobDetailResp } from './model/JobDetailResp';
import { JobEndpointInfo } from './model/JobEndpointInfo';
import { JobLinkResp } from './model/JobLinkResp';
import { JobListResp } from './model/JobListResp';
import { JobNodeBaseInfo } from './model/JobNodeBaseInfo';
import { JobNodeInfo } from './model/JobNodeInfo';
import { JobNodeSpecInfo } from './model/JobNodeSpecInfo';
import { JobNodeVpcInfo } from './model/JobNodeVpcInfo';
import { JobProgressInfo } from './model/JobProgressInfo';
import { LineCompareOverviewInfo } from './model/LineCompareOverviewInfo';
import { ListAsyncJobDetailRequest } from './model/ListAsyncJobDetailRequest';
import { ListAsyncJobDetailResponse } from './model/ListAsyncJobDetailResponse';
import { ListAsyncJobsRequest } from './model/ListAsyncJobsRequest';
import { ListAsyncJobsResponse } from './model/ListAsyncJobsResponse';
import { ListDbObjectsRequest } from './model/ListDbObjectsRequest';
import { ListDbObjectsResponse } from './model/ListDbObjectsResponse';
import { ListJobsRequest } from './model/ListJobsRequest';
import { ListJobsResponse } from './model/ListJobsResponse';
import { ListLinksRequest } from './model/ListLinksRequest';
import { ListLinksResponse } from './model/ListLinksResponse';
import { MigrationObjectOverviewInfo } from './model/MigrationObjectOverviewInfo';
import { ModifyTuningParams } from './model/ModifyTuningParams';
import { ObjectsCompareDetailInfo } from './model/ObjectsCompareDetailInfo';
import { ObjectsCompareOverviewInfo } from './model/ObjectsCompareOverviewInfo';
import { ObjectsCompareTaskInfo } from './model/ObjectsCompareTaskInfo';
import { PeriodOrderInfo } from './model/PeriodOrderInfo';
import { PolicyConfig } from './model/PolicyConfig';
import { PrecheckFailSubJobResult } from './model/PrecheckFailSubJobResult';
import { PrecheckResult } from './model/PrecheckResult';
import { ProductInfo } from './model/ProductInfo';
import { ProgressCompleteInfo } from './model/ProgressCompleteInfo';
import { QueryMetricResult } from './model/QueryMetricResult';
import { QueryMigrationObjectProgressInfo } from './model/QueryMigrationObjectProgressInfo';
import { QueryNetworkResult } from './model/QueryNetworkResult';
import { QueryPreCheckResult } from './model/QueryPreCheckResult';
import { QueryUserSelectedObjectInfoReq } from './model/QueryUserSelectedObjectInfoReq';
import { ResourceTag } from './model/ResourceTag';
import { SchemaObject } from './model/SchemaObject';
import { ShowActionsRequest } from './model/ShowActionsRequest';
import { ShowActionsResponse } from './model/ShowActionsResponse';
import { ShowComparePolicyRequest } from './model/ShowComparePolicyRequest';
import { ShowComparePolicyResponse } from './model/ShowComparePolicyResponse';
import { ShowDbObjectCollectionStatusRequest } from './model/ShowDbObjectCollectionStatusRequest';
import { ShowDbObjectCollectionStatusResponse } from './model/ShowDbObjectCollectionStatusResponse';
import { ShowDbObjectTemplateProgressRequest } from './model/ShowDbObjectTemplateProgressRequest';
import { ShowDbObjectTemplateProgressResponse } from './model/ShowDbObjectTemplateProgressResponse';
import { ShowDbObjectTemplateResultRequest } from './model/ShowDbObjectTemplateResultRequest';
import { ShowDbObjectTemplateResultResponse } from './model/ShowDbObjectTemplateResultResponse';
import { ShowDirtyDataRequest } from './model/ShowDirtyDataRequest';
import { ShowDirtyDataResponse } from './model/ShowDirtyDataResponse';
import { ShowEnterpriseProjectRequest } from './model/ShowEnterpriseProjectRequest';
import { ShowEnterpriseProjectResponse } from './model/ShowEnterpriseProjectResponse';
import { ShowHealthCompareJobListRequest } from './model/ShowHealthCompareJobListRequest';
import { ShowHealthCompareJobListResponse } from './model/ShowHealthCompareJobListResponse';
import { ShowJobDetailRequest } from './model/ShowJobDetailRequest';
import { ShowJobDetailResponse } from './model/ShowJobDetailResponse';
import { ShowMeteringRequest } from './model/ShowMeteringRequest';
import { ShowMeteringResponse } from './model/ShowMeteringResponse';
import { ShowObjectMappingRequest } from './model/ShowObjectMappingRequest';
import { ShowObjectMappingResponse } from './model/ShowObjectMappingResponse';
import { ShowProgressDataRequest } from './model/ShowProgressDataRequest';
import { ShowProgressDataResponse } from './model/ShowProgressDataResponse';
import { ShowUpdateObjectSavingStatusRequest } from './model/ShowUpdateObjectSavingStatusRequest';
import { ShowUpdateObjectSavingStatusResponse } from './model/ShowUpdateObjectSavingStatusResponse';
import { SingleCreateJobReq } from './model/SingleCreateJobReq';
import { SingleUpdateJobReq } from './model/SingleUpdateJobReq';
import { SkipPreCheckInfo } from './model/SkipPreCheckInfo';
import { SpeedLimitInfo } from './model/SpeedLimitInfo';
import { SupportImportFileResult } from './model/SupportImportFileResult';
import { TableLineCompareDetailInfo } from './model/TableLineCompareDetailInfo';
import { TableObject } from './model/TableObject';
import { TargetRootDb } from './model/TargetRootDb';
import { TaskLogInfo } from './model/TaskLogInfo';
import { TuningParamInfo } from './model/TuningParamInfo';
import { TuningParameter } from './model/TuningParameter';
import { UpdateBatchAsyncJobsRequest } from './model/UpdateBatchAsyncJobsRequest';
import { UpdateBatchAsyncJobsResponse } from './model/UpdateBatchAsyncJobsResponse';
import { UpdateJob } from './model/UpdateJob';
import { UpdateJobReq } from './model/UpdateJobReq';
import { UpdateJobRequest } from './model/UpdateJobRequest';
import { UpdateJobResponse } from './model/UpdateJobResponse';
import { UploadDbObjectTemplateRequest } from './model/UploadDbObjectTemplateRequest';
import { UploadDbObjectTemplateRequestBody } from './model/UploadDbObjectTemplateRequestBody';
import { UploadDbObjectTemplateResponse } from './model/UploadDbObjectTemplateResponse';
import { UserMigrationInfo } from './model/UserMigrationInfo';
import { UserMigrationList } from './model/UserMigrationList';
import { UserMigrationRole } from './model/UserMigrationRole';
import { ValidateJobNameRequest } from './model/ValidateJobNameRequest';
import { ValidateJobNameResponse } from './model/ValidateJobNameResponse';

export class DrsClient {
    public static newBuilder(): ClientBuilder<DrsClient> {
            return new ClientBuilder<DrsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 批量异步创建任务，根据请求参数不同，可以批量异步创建实时迁移、实时同步、实时灾备等任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量异步创建任务
     * @param {BatchAsyncCreateJobReq} requestBody 批量异步创建任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateJobsAsync(batchCreateJobsAsyncRequest?: BatchCreateJobsAsyncRequest): Promise<BatchCreateJobsAsyncResponse> {
        const options = ParamCreater().batchCreateJobsAsync(batchCreateJobsAsyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除租户指定ID任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除任务
     * @param {BatchDeleteJobReq} requestBody 批量删除任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteJobsById(batchDeleteJobsByIdRequest?: BatchDeleteJobsByIdRequest): Promise<BatchDeleteJobsByIdResponse> {
        const options = ParamCreater().batchDeleteJobsById(batchDeleteJobsByIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量操作租户指定ID任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量操作指定ID任务
     * @param {BatchJobActionReq} requestBody 批量操作任务请求体，支持结束操作。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchExecuteJobActions(batchExecuteJobActionsRequest?: BatchExecuteJobActionsRequest): Promise<BatchExecuteJobActionsResponse> {
        const options = ParamCreater().batchExecuteJobActions(batchExecuteJobActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交查询数据库对象信息。例如：
     * - 当type取值为source时，表示查询源库库表信息。
     * - 当源库库表信息有变化时，则type取值为source，is_refresh取值为true。
     * - 当已同步到目标库的库表信息过大，需要提前将数据加载到缓存中时，type取值为synchronized。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交查询数据库对象信息
     * @param {string} jobId 任务ID。
     * @param {'source' | 'modified' | 'synchronized'} type 查询对象信息类型。取值： - source：查询源库对象信息。 - modified：查询已选择的（已同步的和未下发的）对象信息。 - synchronized：查询已同步的（已下发的）对象信息 ， 使用场景在任务处于全量中或者增量中。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {boolean} [isRefresh] 是否强制刷新。取值： - true：是，表示从源库重新查询。 - false：否，表示从已缓存中数据查询。
     * @param {Array<string>} [dbNames] 查询指定库的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public collectDbObjectsAsync(collectDbObjectsAsyncRequest?: CollectDbObjectsAsyncRequest): Promise<CollectDbObjectsAsyncResponse> {
        const options = ParamCreater().collectDbObjectsAsync(collectDbObjectsAsyncRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 提交批量创建异步任务，当批量异步任务创建或更新参数后，系统会自动开始进行参数校验，待所有任务成功完成参数校验后并且无报错时，可调用此接口开始创建DRS任务实例。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 提交批量创建异步任务
     * @param {string} asyncJobId 批量异步创建的任务ID，由创建批量异步任务接口返回。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public commitAsyncJob(commitAsyncJobRequest?: CommitAsyncJobRequest): Promise<CommitAsyncJobResponse> {
        const options = ParamCreater().commitAsyncJob(commitAsyncJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * DRS支持通过克隆功能，快速复制现有同步任务的配置。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 克隆任务
     * @param {CloneJobReq} copyJobRequestBody 克隆任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public copyJob(copyJobRequest?: CopyJobRequest): Promise<CopyJobResponse> {
        const options = ParamCreater().copyJob(copyJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建单个任务，根据请求参数不同，可以创建单个实时迁移、实时同步、实时灾备等任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建任务
     * @param {SingleCreateJobReq} requestBody 创建单个任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
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
     * 删除租户指定ID任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除指定ID任务
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
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
     * 下载批量导入任务模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载批量导入任务模板
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadBatchCreateTemplate(downloadBatchCreateTemplateRequest?: DownloadBatchCreateTemplateRequest): Promise<DownloadBatchCreateTemplateResponse> {
        const options = ParamCreater().downloadBatchCreateTemplate(downloadBatchCreateTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对象选择（文件导入 - 模板下载）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对象选择（文件导入 - 模板下载）
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {'database' | 'table'} [fileImportDbLevel] 文件模板支持数据同步级别，不填默认为table表级。 - database：库级 - table：表级
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadDbObjectTemplate(downloadDbObjectTemplateRequest?: DownloadDbObjectTemplateRequest): Promise<DownloadDbObjectTemplateResponse> {
        const options = ParamCreater().downloadDbObjectTemplate(downloadDbObjectTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 操作租户指定ID任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 操作指定ID任务
     * @param {string} jobId 任务ID (对比任务相关操作，多任务场景传父任务详情返回的master_job_id)
     * @param {JobActionReq} requestBody 操作单个任务请求体，支持测试连接、预检查、启动、暂停、续传、重置、对比等操作。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeJobAction(executeJobActionRequest?: ExecuteJobActionRequest): Promise<ExecuteJobActionResponse> {
        const options = ParamCreater().executeJobAction(executeJobActionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量导入任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量导入任务
     * @param {any} file 待上传的模板文件。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importBatchCreateJobs(importBatchCreateJobsRequest?: ImportBatchCreateJobsRequest): Promise<ImportBatchCreateJobsResponse> {
        const options = ParamCreater().importBatchCreateJobs(importBatchCreateJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户指定ID批量异步任务详情，默认为任务的“create_time”降序排序获取结果，支持分页查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定ID批量异步任务详情
     * @param {string} asyncJobId 批量异步创建的任务ID，由创建批量异步任务接口返回。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAsyncJobDetail(listAsyncJobDetailRequest?: ListAsyncJobDetailRequest): Promise<ListAsyncJobDetailResponse> {
        const options = ParamCreater().listAsyncJobDetail(listAsyncJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户批量异步创建的任务列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询批量异步创建的任务列表
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [asyncJobId] 批量异步创建的任务ID。
     * @param {string} [status] 批量异步创建的任务状态。
     * @param {string} [domainName] 批量异步创建的任务的租户名。
     * @param {string} [userName] 批量异步创建的任务的用户名。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {string} [sortKey] 返回结果按该关键字排序，默认为“create_time”。
     * @param {string} [sortDir] 降序或升序（分别对应desc和asc，默认为“desc”）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAsyncJobs(listAsyncJobsRequest?: ListAsyncJobsRequest): Promise<ListAsyncJobsResponse> {
        const options = ParamCreater().listAsyncJobs(listAsyncJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询数据库对象信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据库对象信息
     * @param {string} jobId 任务ID。
     * @param {string} type 查询对象信息类型。取值： - source：查询源库对象信息。 - modified：查询已选择的（已同步的和未下发的）对象信息。 - synchronized：查询已同步的（已下发的）对象信息 ， 使用场景在任务处于全量中或者增量中。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {Array<string>} [dbNames] 查询指定库的信息。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDbObjects(listDbObjectsRequest?: ListDbObjectsRequest): Promise<ListDbObjectsResponse> {
        const options = ParamCreater().listDbObjects(listDbObjectsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户任务列表，可以根据企业项目，引擎类型，网络类型，任务状态，任务名称，任务ID进行查询。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务列表
     * @param {'migration' | 'sync' | 'cloudDataGuard'} jobType 任务场景。取值： - migration：实时迁移。 - sync：实时同步。 - cloudDataGuard：实时灾备。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [name] 任务ID或名称。
     * @param {'CREATING' | 'CREATE_FAILED' | 'CONFIGURATION' | 'STARTJOBING' | 'WAITING_FOR_START' | 'START_JOB_FAILED' | 'FULL_TRANSFER_STARTED' | 'FULL_TRANSFER_FAILED' | 'FULL_TRANSFER_COMPLETE' | 'INCRE_TRANSFER_STARTED' | 'INCRE_TRANSFER_FAILED' | 'RELEASE_RESOURCE_STARTED' | 'RELEASE_RESOURCE_FAILED' | 'RELEASE_RESOURCE_COMPLETE' | 'CHANGE_JOB_STARTED' | 'CHANGE_JOB_FAILED' | 'CHILD_TRANSFER_STARTING' | 'CHILD_TRANSFER_STARTED' | 'CHILD_TRANSFER_COMPLETE' | 'CHILD_TRANSFER_FAILED' | 'RELEASE_CHILD_TRANSFER_STARTED' | 'RELEASE_CHILD_TRANSFER_COMPLETE'} [status] 任务状态。取值： - CREATING：创建中。 - CREATE_FAILED：创建失败。 - CONFIGURATION：配置中。 - STARTJOBING：启动中。 - WAITING_FOR_START：等待启动中。 - START_JOB_FAILED：任务启动失败。 - FULL_TRANSFER_STARTED：全量迁移中，灾备场景为初始化。 - FULL_TRANSFER_FAILED：全量迁移失败，灾备场景为初始化失败。 - FULL_TRANSFER_COMPLETE：全量迁移完成，灾备场景为初始化完成。 - INCRE_TRANSFER_STARTED：增量迁移中，灾备场景为灾备中。 - INCRE_TRANSFER_FAILED：增量迁移失败，灾备场景为灾备异常。 - RELEASE_RESOURCE_STARTED：结束任务中。 - RELEASE_RESOURCE_FAILED：结束任务失败。 - RELEASE_RESOURCE_COMPLETE：已结束。 - CHANGE_JOB_STARTED：任务变更中。 - CHANGE_JOB_FAILED：任务变更失败。 - CHILD_TRANSFER_STARTING：子任务启动中。 - CHILD_TRANSFER_STARTED：子任务迁移中。 - CHILD_TRANSFER_COMPLETE：子任务迁移完成。 - CHILD_TRANSFER_FAILED：子任务迁移失败。 - RELEASE_CHILD_TRANSFER_STARTED：子任务结束中。 - RELEASE_CHILD_TRANSFER_COMPLETE：子任务已结束。 其中，异常状态可单独查询，也可以通过以下方式查询全部异常任务： CREATE_FAILED,START_JOB_FAILED,FULL_TRANSFER_FAILED,INCRE_TRANSFER_FAILED,RELEASE_RESOURCE_FAILED,CHANGE_JOB_FAILED,CHILD_TRANSFER_FAILED
     * @param {'oracle-to-gaussdbv5'} [engineType] 引擎类型。取值： - oracle-to-gaussdbv5：Oracle同步到GaussDB分布式版，实时同步场景使用。
     * @param {'eip' | 'vpc' | 'vpn'} [netType] 网络类型。取值： - eip：公网网络。 - vpc：VPC网络。 - vpn：VPN、专线网络。
     * @param {string} [enterpriseProjectId] 企业项目ID。 缺省值：\&quot;\&quot;，表示查询所有企业项目任务。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {string} [sortKey] 返回结果按该关键字排序，默认为“create_time”。
     * @param {string} [sortDir] 降序或升序（分别对应desc和asc，默认为“desc”）。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobs(listJobsRequest?: ListJobsRequest): Promise<ListJobsResponse> {
        const options = ParamCreater().listJobs(listJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据参数不同，可查询实时迁移、实时同步、实时灾备等可用链路信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可用链路信息
     * @param {'migration' | 'sync' | 'cloudDataGuard'} jobType 任务场景。取值： - migration：实时迁移。 - sync：实时同步。 - cloudDataGuard：实时灾备。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listLinks(listLinksRequest?: ListLinksRequest): Promise<ListLinksResponse> {
        const options = ParamCreater().listLinks(listLinksRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定任务允许、不允许、当前操作信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定任务操作信息
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showActions(showActionsRequest?: ShowActionsRequest): Promise<ShowActionsResponse> {
        const options = ParamCreater().showActions(showActionsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询对比策略。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询对比策略
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showComparePolicy(showComparePolicyRequest?: ShowComparePolicyRequest): Promise<ShowComparePolicyResponse> {
        const options = ParamCreater().showComparePolicy(showComparePolicyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取提交查询数据库对象信息的结果。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取提交查询数据库对象信息的结果
     * @param {string} jobId 任务ID。
     * @param {string} queryId 对象信息采集的ID，提交查询数据库对象信息接口返回的ID。
     * @param {string} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDbObjectCollectionStatus(showDbObjectCollectionStatusRequest?: ShowDbObjectCollectionStatusRequest): Promise<ShowDbObjectCollectionStatusResponse> {
        const options = ParamCreater().showDbObjectCollectionStatus(showDbObjectCollectionStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对象选择（文件导入 - 进度查询）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对象选择（文件导入 - 进度查询）
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。
     * @param {number} [limit] 查询返回记录的数量限制。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDbObjectTemplateProgress(showDbObjectTemplateProgressRequest?: ShowDbObjectTemplateProgressRequest): Promise<ShowDbObjectTemplateProgressResponse> {
        const options = ParamCreater().showDbObjectTemplateProgress(showDbObjectTemplateProgressRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 对象选择（文件导入 - 获取导入结果）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对象选择（文件导入 - 获取导入结果）
     * @param {string} jobId 任务ID。
     * @param {'detail' | 'synchronized'} type 导入的结果类型。取值： - detail：获取最新导入的文件与校验结果，上传后的文件若存在错误，会同时将错误原因标记在文件内。 - synchronized：获取已同步的（已下发的）对象文件结果。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDbObjectTemplateResult(showDbObjectTemplateResultRequest?: ShowDbObjectTemplateResultRequest): Promise<ShowDbObjectTemplateResultResponse> {
        const options = ParamCreater().showDbObjectTemplateResult(showDbObjectTemplateResultRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询异常数据列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询异常数据列表
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [beginTime] 开始时间，UTC时间，例如：2020-09-01T18:50:20Z
     * @param {string} [endTime] 结束时间，UTC时间，例如：2020-09-01T19:50:20Z
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset 大于等于 0。默认为0
     * @param {number} [limit] 每页显示的条目数量。默认为10，取值范围【1-1000】
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDirtyData(showDirtyDataRequest?: ShowDirtyDataRequest): Promise<ShowDirtyDataResponse> {
        const options = ParamCreater().showDirtyData(showDirtyDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询企业项目列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询企业项目列表
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset 大于等于 0。默认为0
     * @param {number} [limit] 每页显示的条目数量。默认为10，取值范围【1-1000】
     * @param {string} [name] 企业项目名称，支持模糊搜索。
     * @param {string} [domainId] IAM用户所属帐号ID。op_service权限必须携带此参数，非op_service权限可不携带此参数。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showEnterpriseProject(showEnterpriseProjectRequest?: ShowEnterpriseProjectRequest): Promise<ShowEnterpriseProjectResponse> {
        const options = ParamCreater().showEnterpriseProject(showEnterpriseProjectRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询健康对比列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询健康对比列表
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {'WAITING_FOR_RUNNING' | 'RUNNING' | 'SUCCESSFUL' | 'FAILED' | 'CANCELLED' | 'TIMEOUT_INTERRUPT' | 'FULL_DOING' | 'INCRE_DOING'} [status] 状态，不传查询所有状态。 - WAITING_FOR_RUNNING：等待启动中 - RUNNING：运行中 - SUCCESSFUL：完成 - FAILED：失败 - CANCELLED：已取消 - TIMEOUT_INTERRUPT：超时中断 - FULL_DOING：全量校验中 - INCRE_DOING：增量校验中
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset 大于等于 0。默认为0
     * @param {number} [limit] 每页显示的条目数量。默认为10，取值范围【1-1000】
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHealthCompareJobList(showHealthCompareJobListRequest?: ShowHealthCompareJobListRequest): Promise<ShowHealthCompareJobListResponse> {
        const options = ParamCreater().showHealthCompareJobList(showHealthCompareJobListRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务详情
     * @param {string} jobId 任务ID。
     * @param {'overview' | 'detail' | 'network' | 'precheck' | 'progress' | 'log' | 'comapre' | 'file'} type 任务详情类型。取值： - overview：任务概览信息。 - detail：任务基本信息。 - network：测试连接结果信息，需配合query_id参数一起查询。 - precheck：预检查结果信息，需配合query_id参数一起查询。 - progress：任务进度信息。 - log：任务日志信息，支持分页查询参数offset与limit。 - comapre：查询对比任务。 - file：对象导入信息
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {string} [queryId] 通过指定Query ID查询任务详情。  说明：部分type类型的任务详情，需要通过触发该操作的请求返回的query_id进行操作结果查询。
     * @param {number} [offset] 偏移量，表示查询该偏移量后面的记录。  说明：部分type类型的任务详情支持分页查询，可以通过传递该参数进行分页控制。
     * @param {number} [limit] 查询返回记录的数量限制。  说明：部分type类型的任务详情支持分页查询，可以通过传递该参数进行分页控制。
     * @param {'object_compare' | 'line_compare' | 'content_compare' | 'data_compare'} [compareType] 对比任务类型 - object_compare：对象对比。 - line_compare：行对比。 - content_compare：内容对比。 - data_compare：数据对比。
     * @param {'overview' | 'list' | 'detail'} [queryType] 查询对比内容。取值： - overview：对比任务概览。 - list：数据对比任务列表。 - detail：对比详情。
     * @param {'DB' | 'TABLE' | 'INDEX'} [objectType] 查询对象对比详情类型。取值： - DB：库级对比详情。 - TABLE：表级对比详情。 - INDEX：索引对比详情。
     * @param {string} [compareTaskId] 对比任务ID。
     * @param {string} [sourceDbName] 数据对比源库名称。
     * @param {string} [targetDbName] 数据对比目标库名称。
     * @param {'compare' | 'uncompare'} [compareDetailType] 对比结果类型。取值： - compare：对比完成。 - uncompare：无法对比。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobDetail(showJobDetailRequest?: ShowJobDetailRequest): Promise<ShowJobDetailResponse> {
        const options = ParamCreater().showJobDetail(showJobDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取询价接口的参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务价格信息
     * @param {string} jobId 任务ID。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showMetering(showMeteringRequest?: ShowMeteringRequest): Promise<ShowMeteringResponse> {
        const options = ParamCreater().showMetering(showMeteringRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询实时同步映射关系包括对象选择时的库映射、schema映射、表映射和数据加工时的列映射。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询同步映射列表
     * @param {string} jobId 任务ID。
     * @param {QueryUserSelectedObjectInfoReq} showObjectMappingRequestBody 查询同步映射请求体。
     * @param {string} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showObjectMapping(showObjectMappingRequest?: ShowObjectMappingRequest): Promise<ShowObjectMappingResponse> {
        const options = ParamCreater().showObjectMapping(showObjectMappingRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询不同迁移对象类型的迁移进度。
     * 说明：
     * - 目前仅MySQL-&gt;MySQL、MySQL-&gt;GaussDB(for MySQL)、MongoDB-&gt;DDS、DDS-&gt;MongoDB的迁移支持查看迁移明细。
     * - 在任务未结束前，不能修改源库和目标库的所有用户、密码和用户权限等。
     * - 全量、增量完成不代表任务结束，如果存在触发器和事件将会进行迁移。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询数据级流式对比列表
     * @param {string} jobId 任务ID。
     * @param {string} type 迁移对象类型。 - table - event - table_structure - procedure - view - function - database - trigger - table_indexs
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {number} [offset] 偏移量，表示从此偏移量开始查询， offset 大于等于 0。默认为0
     * @param {number} [limit] 每页显示的条目数量。默认为10，取值范围【1-1000】
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProgressData(showProgressDataRequest?: ShowProgressDataRequest): Promise<ShowProgressDataResponse> {
        const options = ParamCreater().showProgressData(showProgressDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取对象保存进度。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取对象保存进度
     * @param {string} jobId 任务ID。
     * @param {string} queryId 保存对象接口返回的ID。
     * @param {string} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUpdateObjectSavingStatus(showUpdateObjectSavingStatusRequest?: ShowUpdateObjectSavingStatusRequest): Promise<ShowUpdateObjectSavingStatusResponse> {
        const options = ParamCreater().showUpdateObjectSavingStatus(showUpdateObjectSavingStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新租户指定ID批量异步任务详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定ID批量异步任务详情
     * @param {string} asyncJobId 批量异步创建的任务ID，由创建批量异步任务接口返回。
     * @param {BatchAsyncUpdateJobReq} requestBody 批量更新指定ID异步任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBatchAsyncJobs(updateBatchAsyncJobsRequest?: UpdateBatchAsyncJobsRequest): Promise<UpdateBatchAsyncJobsResponse> {
        const options = ParamCreater().updateBatchAsyncJobs(updateBatchAsyncJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新租户指定ID任务详情。
     * 当type取值为db_object， 进行异步处理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新指定ID任务详情
     * @param {string} jobId 任务ID。
     * @param {SingleUpdateJobReq} requestBody 更新指定ID任务请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
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
     * 对象选择（文件导入 - 模板上传）。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 对象选择（文件导入 - 模板上传）
     * @param {string} jobId 任务ID。
     * @param {any} file 待上传的模板文件。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {'database' | 'table'} [fileImportDbLevel] 文件模板支持数据同步级别，不填默认为table表级。 - database：库级 - table：表级
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadDbObjectTemplate(uploadDbObjectTemplateRequest?: UploadDbObjectTemplateRequest): Promise<UploadDbObjectTemplateResponse> {
        const options = ParamCreater().uploadDbObjectTemplate(uploadDbObjectTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建任务时对任务名称进行校验。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 任务名称校验
     * @param {CheckJobNameReq} validateJobNameRequestBody 校验任务名称请求体。
     * @param {'en-us' | 'zh-cn'} [xLanguage] 请求语言类型。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateJobName(validateJobNameRequest?: ValidateJobNameRequest): Promise<ValidateJobNameResponse> {
        const options = ParamCreater().validateJobName(validateJobNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量异步创建任务，根据请求参数不同，可以批量异步创建实时迁移、实时同步、实时灾备等任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateJobsAsync(batchCreateJobsAsyncRequest?: BatchCreateJobsAsyncRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/batch-async-create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchCreateJobsAsyncRequest !== null && batchCreateJobsAsyncRequest !== undefined) {
                if (batchCreateJobsAsyncRequest instanceof BatchCreateJobsAsyncRequest) {
                    body = batchCreateJobsAsyncRequest.body
                    xLanguage = batchCreateJobsAsyncRequest.xLanguage;
                } else {
                    body = batchCreateJobsAsyncRequest['body'];
                    xLanguage = batchCreateJobsAsyncRequest['X-Language'];
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
         * 批量删除租户指定ID任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteJobsById(batchDeleteJobsByIdRequest?: BatchDeleteJobsByIdRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchDeleteJobsByIdRequest !== null && batchDeleteJobsByIdRequest !== undefined) {
                if (batchDeleteJobsByIdRequest instanceof BatchDeleteJobsByIdRequest) {
                    body = batchDeleteJobsByIdRequest.body
                    xLanguage = batchDeleteJobsByIdRequest.xLanguage;
                } else {
                    body = batchDeleteJobsByIdRequest['body'];
                    xLanguage = batchDeleteJobsByIdRequest['X-Language'];
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
         * 批量操作租户指定ID任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchExecuteJobActions(batchExecuteJobActionsRequest?: BatchExecuteJobActionsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (batchExecuteJobActionsRequest !== null && batchExecuteJobActionsRequest !== undefined) {
                if (batchExecuteJobActionsRequest instanceof BatchExecuteJobActionsRequest) {
                    body = batchExecuteJobActionsRequest.body
                    xLanguage = batchExecuteJobActionsRequest.xLanguage;
                } else {
                    body = batchExecuteJobActionsRequest['body'];
                    xLanguage = batchExecuteJobActionsRequest['X-Language'];
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
         * 提交查询数据库对象信息。例如：
         * - 当type取值为source时，表示查询源库库表信息。
         * - 当源库库表信息有变化时，则type取值为source，is_refresh取值为true。
         * - 当已同步到目标库的库表信息过大，需要提前将数据加载到缓存中时，type取值为synchronized。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        collectDbObjectsAsync(collectDbObjectsAsyncRequest?: CollectDbObjectsAsyncRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/{job_id}/db-objects/collect",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let type;
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let isRefresh;
            
            let dbNames;

            if (collectDbObjectsAsyncRequest !== null && collectDbObjectsAsyncRequest !== undefined) {
                if (collectDbObjectsAsyncRequest instanceof CollectDbObjectsAsyncRequest) {
                    jobId = collectDbObjectsAsyncRequest.jobId;
                    type = collectDbObjectsAsyncRequest.type;
                    xLanguage = collectDbObjectsAsyncRequest.xLanguage;
                    offset = collectDbObjectsAsyncRequest.offset;
                    limit = collectDbObjectsAsyncRequest.limit;
                    isRefresh = collectDbObjectsAsyncRequest.isRefresh;
                    dbNames = collectDbObjectsAsyncRequest.dbNames;
                } else {
                    jobId = collectDbObjectsAsyncRequest['job_id'];
                    type = collectDbObjectsAsyncRequest['type'];
                    xLanguage = collectDbObjectsAsyncRequest['X-Language'];
                    offset = collectDbObjectsAsyncRequest['offset'];
                    limit = collectDbObjectsAsyncRequest['limit'];
                    isRefresh = collectDbObjectsAsyncRequest['is_refresh'];
                    dbNames = collectDbObjectsAsyncRequest['db_names'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling collectDbObjectsAsync.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling collectDbObjectsAsync.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (isRefresh !== null && isRefresh !== undefined) {
                localVarQueryParameter['is_refresh'] = isRefresh;
            }
            if (dbNames !== null && dbNames !== undefined) {
                localVarQueryParameter['db_names'] = dbNames;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 提交批量创建异步任务，当批量异步任务创建或更新参数后，系统会自动开始进行参数校验，待所有任务成功完成参数校验后并且无报错时，可调用此接口开始创建DRS任务实例。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        commitAsyncJob(commitAsyncJobRequest?: CommitAsyncJobRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/batch-async-jobs/{async_job_id}/commit",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let asyncJobId;
            
            let xLanguage;

            if (commitAsyncJobRequest !== null && commitAsyncJobRequest !== undefined) {
                if (commitAsyncJobRequest instanceof CommitAsyncJobRequest) {
                    asyncJobId = commitAsyncJobRequest.asyncJobId;
                    xLanguage = commitAsyncJobRequest.xLanguage;
                } else {
                    asyncJobId = commitAsyncJobRequest['async_job_id'];
                    xLanguage = commitAsyncJobRequest['X-Language'];
                }
            }

        
            if (asyncJobId === null || asyncJobId === undefined) {
            throw new RequiredError('asyncJobId','Required parameter asyncJobId was null or undefined when calling commitAsyncJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'async_job_id': asyncJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * DRS支持通过克隆功能，快速复制现有同步任务的配置。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyJob(copyJobRequest?: CopyJobRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/clone",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (copyJobRequest !== null && copyJobRequest !== undefined) {
                if (copyJobRequest instanceof CopyJobRequest) {
                    body = copyJobRequest.body
                    xLanguage = copyJobRequest.xLanguage;
                } else {
                    body = copyJobRequest['body'];
                    xLanguage = copyJobRequest['X-Language'];
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
         * 创建单个任务，根据请求参数不同，可以创建单个实时迁移、实时同步、实时灾备等任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createJob(createJobRequest?: CreateJobRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (createJobRequest !== null && createJobRequest !== undefined) {
                if (createJobRequest instanceof CreateJobRequest) {
                    body = createJobRequest.body
                    xLanguage = createJobRequest.xLanguage;
                } else {
                    body = createJobRequest['body'];
                    xLanguage = createJobRequest['X-Language'];
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
         * 删除租户指定ID任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteJob(deleteJobRequest?: DeleteJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v5/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (deleteJobRequest !== null && deleteJobRequest !== undefined) {
                if (deleteJobRequest instanceof DeleteJobRequest) {
                    jobId = deleteJobRequest.jobId;
                    xLanguage = deleteJobRequest.xLanguage;
                } else {
                    jobId = deleteJobRequest['job_id'];
                    xLanguage = deleteJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteJob.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载批量导入任务模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadBatchCreateTemplate(downloadBatchCreateTemplateRequest?: DownloadBatchCreateTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let xLanguage;

            if (downloadBatchCreateTemplateRequest !== null && downloadBatchCreateTemplateRequest !== undefined) {
                if (downloadBatchCreateTemplateRequest instanceof DownloadBatchCreateTemplateRequest) {
                    xLanguage = downloadBatchCreateTemplateRequest.xLanguage;
                } else {
                    xLanguage = downloadBatchCreateTemplateRequest['X-Language'];
                }
            }

        
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对象选择（文件导入 - 模板下载）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadDbObjectTemplate(downloadDbObjectTemplateRequest?: DownloadDbObjectTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/db-object/template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let xLanguage;
            
            let fileImportDbLevel;

            if (downloadDbObjectTemplateRequest !== null && downloadDbObjectTemplateRequest !== undefined) {
                if (downloadDbObjectTemplateRequest instanceof DownloadDbObjectTemplateRequest) {
                    jobId = downloadDbObjectTemplateRequest.jobId;
                    xLanguage = downloadDbObjectTemplateRequest.xLanguage;
                    fileImportDbLevel = downloadDbObjectTemplateRequest.fileImportDbLevel;
                } else {
                    jobId = downloadDbObjectTemplateRequest['job_id'];
                    xLanguage = downloadDbObjectTemplateRequest['X-Language'];
                    fileImportDbLevel = downloadDbObjectTemplateRequest['file_import_db_level'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling downloadDbObjectTemplate.');
            }
            if (fileImportDbLevel !== null && fileImportDbLevel !== undefined) {
                localVarQueryParameter['file_import_db_level'] = fileImportDbLevel;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 操作租户指定ID任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeJobAction(executeJobActionRequest?: ExecuteJobActionRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/{job_id}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (executeJobActionRequest !== null && executeJobActionRequest !== undefined) {
                if (executeJobActionRequest instanceof ExecuteJobActionRequest) {
                    jobId = executeJobActionRequest.jobId;
                    body = executeJobActionRequest.body
                    xLanguage = executeJobActionRequest.xLanguage;
                } else {
                    jobId = executeJobActionRequest['job_id'];
                    body = executeJobActionRequest['body'];
                    xLanguage = executeJobActionRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling executeJobAction.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量导入任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importBatchCreateJobs(importBatchCreateJobsRequest?: ImportBatchCreateJobsRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/template",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            
            let xLanguage;

            if (importBatchCreateJobsRequest !== null && importBatchCreateJobsRequest !== undefined) {
                if (importBatchCreateJobsRequest instanceof ImportBatchCreateJobsRequest) {
                    file = importBatchCreateJobsRequest.body?.file;
                    xLanguage = importBatchCreateJobsRequest.xLanguage;
                } else {
                    file = importBatchCreateJobsRequest['body']['file'];
                    xLanguage = importBatchCreateJobsRequest['X-Language'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling importBatchCreateJobs.');
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户指定ID批量异步任务详情，默认为任务的“create_time”降序排序获取结果，支持分页查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAsyncJobDetail(listAsyncJobDetailRequest?: ListAsyncJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/batch-async-jobs/{async_job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let asyncJobId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listAsyncJobDetailRequest !== null && listAsyncJobDetailRequest !== undefined) {
                if (listAsyncJobDetailRequest instanceof ListAsyncJobDetailRequest) {
                    asyncJobId = listAsyncJobDetailRequest.asyncJobId;
                    xLanguage = listAsyncJobDetailRequest.xLanguage;
                    offset = listAsyncJobDetailRequest.offset;
                    limit = listAsyncJobDetailRequest.limit;
                } else {
                    asyncJobId = listAsyncJobDetailRequest['async_job_id'];
                    xLanguage = listAsyncJobDetailRequest['X-Language'];
                    offset = listAsyncJobDetailRequest['offset'];
                    limit = listAsyncJobDetailRequest['limit'];
                }
            }

        
            if (asyncJobId === null || asyncJobId === undefined) {
            throw new RequiredError('asyncJobId','Required parameter asyncJobId was null or undefined when calling listAsyncJobDetail.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'async_job_id': asyncJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户批量异步创建的任务列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAsyncJobs(listAsyncJobsRequest?: ListAsyncJobsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/batch-async-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let asyncJobId;
            
            let status;
            
            let domainName;
            
            let userName;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listAsyncJobsRequest !== null && listAsyncJobsRequest !== undefined) {
                if (listAsyncJobsRequest instanceof ListAsyncJobsRequest) {
                    xLanguage = listAsyncJobsRequest.xLanguage;
                    asyncJobId = listAsyncJobsRequest.asyncJobId;
                    status = listAsyncJobsRequest.status;
                    domainName = listAsyncJobsRequest.domainName;
                    userName = listAsyncJobsRequest.userName;
                    offset = listAsyncJobsRequest.offset;
                    limit = listAsyncJobsRequest.limit;
                    sortKey = listAsyncJobsRequest.sortKey;
                    sortDir = listAsyncJobsRequest.sortDir;
                } else {
                    xLanguage = listAsyncJobsRequest['X-Language'];
                    asyncJobId = listAsyncJobsRequest['async_job_id'];
                    status = listAsyncJobsRequest['status'];
                    domainName = listAsyncJobsRequest['domain_name'];
                    userName = listAsyncJobsRequest['user_name'];
                    offset = listAsyncJobsRequest['offset'];
                    limit = listAsyncJobsRequest['limit'];
                    sortKey = listAsyncJobsRequest['sort_key'];
                    sortDir = listAsyncJobsRequest['sort_dir'];
                }
            }

        
            if (asyncJobId !== null && asyncJobId !== undefined) {
                localVarQueryParameter['async_job_id'] = asyncJobId;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (domainName !== null && domainName !== undefined) {
                localVarQueryParameter['domain_name'] = domainName;
            }
            if (userName !== null && userName !== undefined) {
                localVarQueryParameter['user_name'] = userName;
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
         * 查询数据库对象信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDbObjects(listDbObjectsRequest?: ListDbObjectsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/db-objects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let type;
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let dbNames;

            if (listDbObjectsRequest !== null && listDbObjectsRequest !== undefined) {
                if (listDbObjectsRequest instanceof ListDbObjectsRequest) {
                    jobId = listDbObjectsRequest.jobId;
                    type = listDbObjectsRequest.type;
                    xLanguage = listDbObjectsRequest.xLanguage;
                    offset = listDbObjectsRequest.offset;
                    limit = listDbObjectsRequest.limit;
                    dbNames = listDbObjectsRequest.dbNames;
                } else {
                    jobId = listDbObjectsRequest['job_id'];
                    type = listDbObjectsRequest['type'];
                    xLanguage = listDbObjectsRequest['X-Language'];
                    offset = listDbObjectsRequest['offset'];
                    limit = listDbObjectsRequest['limit'];
                    dbNames = listDbObjectsRequest['db_names'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listDbObjects.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling listDbObjects.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (dbNames !== null && dbNames !== undefined) {
                localVarQueryParameter['db_names'] = dbNames;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户任务列表，可以根据企业项目，引擎类型，网络类型，任务状态，任务名称，任务ID进行查询。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobs(listJobsRequest?: ListJobsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobType;
            
            let xLanguage;
            
            let name;
            
            let status;
            
            let engineType;
            
            let netType;
            
            let enterpriseProjectId;
            
            let offset;
            
            let limit;
            
            let sortKey;
            
            let sortDir;

            if (listJobsRequest !== null && listJobsRequest !== undefined) {
                if (listJobsRequest instanceof ListJobsRequest) {
                    jobType = listJobsRequest.jobType;
                    xLanguage = listJobsRequest.xLanguage;
                    name = listJobsRequest.name;
                    status = listJobsRequest.status;
                    engineType = listJobsRequest.engineType;
                    netType = listJobsRequest.netType;
                    enterpriseProjectId = listJobsRequest.enterpriseProjectId;
                    offset = listJobsRequest.offset;
                    limit = listJobsRequest.limit;
                    sortKey = listJobsRequest.sortKey;
                    sortDir = listJobsRequest.sortDir;
                } else {
                    jobType = listJobsRequest['job_type'];
                    xLanguage = listJobsRequest['X-Language'];
                    name = listJobsRequest['name'];
                    status = listJobsRequest['status'];
                    engineType = listJobsRequest['engine_type'];
                    netType = listJobsRequest['net_type'];
                    enterpriseProjectId = listJobsRequest['enterprise_project_id'];
                    offset = listJobsRequest['offset'];
                    limit = listJobsRequest['limit'];
                    sortKey = listJobsRequest['sort_key'];
                    sortDir = listJobsRequest['sort_dir'];
                }
            }

        
            if (jobType === null || jobType === undefined) {
                throw new RequiredError('jobType','Required parameter jobType was null or undefined when calling listJobs.');
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (engineType !== null && engineType !== undefined) {
                localVarQueryParameter['engine_type'] = engineType;
            }
            if (netType !== null && netType !== undefined) {
                localVarQueryParameter['net_type'] = netType;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
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
         * 根据参数不同，可查询实时迁移、实时同步、实时灾备等可用链路信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listLinks(listLinksRequest?: ListLinksRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/links",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobType;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (listLinksRequest !== null && listLinksRequest !== undefined) {
                if (listLinksRequest instanceof ListLinksRequest) {
                    jobType = listLinksRequest.jobType;
                    xLanguage = listLinksRequest.xLanguage;
                    offset = listLinksRequest.offset;
                    limit = listLinksRequest.limit;
                } else {
                    jobType = listLinksRequest['job_type'];
                    xLanguage = listLinksRequest['X-Language'];
                    offset = listLinksRequest['offset'];
                    limit = listLinksRequest['limit'];
                }
            }

        
            if (jobType === null || jobType === undefined) {
                throw new RequiredError('jobType','Required parameter jobType was null or undefined when calling listLinks.');
            }
            if (jobType !== null && jobType !== undefined) {
                localVarQueryParameter['job_type'] = jobType;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定任务允许、不允许、当前操作信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showActions(showActionsRequest?: ShowActionsRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/actions",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (showActionsRequest !== null && showActionsRequest !== undefined) {
                if (showActionsRequest instanceof ShowActionsRequest) {
                    jobId = showActionsRequest.jobId;
                    xLanguage = showActionsRequest.xLanguage;
                } else {
                    jobId = showActionsRequest['job_id'];
                    xLanguage = showActionsRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showActions.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询对比策略。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showComparePolicy(showComparePolicyRequest?: ShowComparePolicyRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/compare-policy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (showComparePolicyRequest !== null && showComparePolicyRequest !== undefined) {
                if (showComparePolicyRequest instanceof ShowComparePolicyRequest) {
                    jobId = showComparePolicyRequest.jobId;
                    xLanguage = showComparePolicyRequest.xLanguage;
                } else {
                    jobId = showComparePolicyRequest['job_id'];
                    xLanguage = showComparePolicyRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showComparePolicy.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取提交查询数据库对象信息的结果。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDbObjectCollectionStatus(showDbObjectCollectionStatusRequest?: ShowDbObjectCollectionStatusRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/db-objects/collection-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let queryId;
            
            let xLanguage;

            if (showDbObjectCollectionStatusRequest !== null && showDbObjectCollectionStatusRequest !== undefined) {
                if (showDbObjectCollectionStatusRequest instanceof ShowDbObjectCollectionStatusRequest) {
                    jobId = showDbObjectCollectionStatusRequest.jobId;
                    queryId = showDbObjectCollectionStatusRequest.queryId;
                    xLanguage = showDbObjectCollectionStatusRequest.xLanguage;
                } else {
                    jobId = showDbObjectCollectionStatusRequest['job_id'];
                    queryId = showDbObjectCollectionStatusRequest['query_id'];
                    xLanguage = showDbObjectCollectionStatusRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDbObjectCollectionStatus.');
            }
            if (queryId === null || queryId === undefined) {
                throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling showDbObjectCollectionStatus.');
            }
            if (queryId !== null && queryId !== undefined) {
                localVarQueryParameter['query_id'] = queryId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对象选择（文件导入 - 进度查询）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDbObjectTemplateProgress(showDbObjectTemplateProgressRequest?: ShowDbObjectTemplateProgressRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/db-object/template/progress",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (showDbObjectTemplateProgressRequest !== null && showDbObjectTemplateProgressRequest !== undefined) {
                if (showDbObjectTemplateProgressRequest instanceof ShowDbObjectTemplateProgressRequest) {
                    jobId = showDbObjectTemplateProgressRequest.jobId;
                    xLanguage = showDbObjectTemplateProgressRequest.xLanguage;
                    offset = showDbObjectTemplateProgressRequest.offset;
                    limit = showDbObjectTemplateProgressRequest.limit;
                } else {
                    jobId = showDbObjectTemplateProgressRequest['job_id'];
                    xLanguage = showDbObjectTemplateProgressRequest['X-Language'];
                    offset = showDbObjectTemplateProgressRequest['offset'];
                    limit = showDbObjectTemplateProgressRequest['limit'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDbObjectTemplateProgress.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对象选择（文件导入 - 获取导入结果）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDbObjectTemplateResult(showDbObjectTemplateResultRequest?: ShowDbObjectTemplateResultRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/db-object/template/result",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let type;
            
            let xLanguage;

            if (showDbObjectTemplateResultRequest !== null && showDbObjectTemplateResultRequest !== undefined) {
                if (showDbObjectTemplateResultRequest instanceof ShowDbObjectTemplateResultRequest) {
                    jobId = showDbObjectTemplateResultRequest.jobId;
                    type = showDbObjectTemplateResultRequest.type;
                    xLanguage = showDbObjectTemplateResultRequest.xLanguage;
                } else {
                    jobId = showDbObjectTemplateResultRequest['job_id'];
                    type = showDbObjectTemplateResultRequest['type'];
                    xLanguage = showDbObjectTemplateResultRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDbObjectTemplateResult.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showDbObjectTemplateResult.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询异常数据列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDirtyData(showDirtyDataRequest?: ShowDirtyDataRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/dirty-data",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let xLanguage;
            
            let beginTime;
            
            let endTime;
            
            let offset;
            
            let limit;

            if (showDirtyDataRequest !== null && showDirtyDataRequest !== undefined) {
                if (showDirtyDataRequest instanceof ShowDirtyDataRequest) {
                    jobId = showDirtyDataRequest.jobId;
                    xLanguage = showDirtyDataRequest.xLanguage;
                    beginTime = showDirtyDataRequest.beginTime;
                    endTime = showDirtyDataRequest.endTime;
                    offset = showDirtyDataRequest.offset;
                    limit = showDirtyDataRequest.limit;
                } else {
                    jobId = showDirtyDataRequest['job_id'];
                    xLanguage = showDirtyDataRequest['X-Language'];
                    beginTime = showDirtyDataRequest['begin_time'];
                    endTime = showDirtyDataRequest['end_time'];
                    offset = showDirtyDataRequest['offset'];
                    limit = showDirtyDataRequest['limit'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDirtyData.');
            }
            if (beginTime !== null && beginTime !== undefined) {
                localVarQueryParameter['begin_time'] = beginTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询企业项目列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showEnterpriseProject(showEnterpriseProjectRequest?: ShowEnterpriseProjectRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/enterprise-projects",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let xLanguage;
            
            let offset;
            
            let limit;
            
            let name;
            
            let domainId;

            if (showEnterpriseProjectRequest !== null && showEnterpriseProjectRequest !== undefined) {
                if (showEnterpriseProjectRequest instanceof ShowEnterpriseProjectRequest) {
                    xLanguage = showEnterpriseProjectRequest.xLanguage;
                    offset = showEnterpriseProjectRequest.offset;
                    limit = showEnterpriseProjectRequest.limit;
                    name = showEnterpriseProjectRequest.name;
                    domainId = showEnterpriseProjectRequest.domainId;
                } else {
                    xLanguage = showEnterpriseProjectRequest['X-Language'];
                    offset = showEnterpriseProjectRequest['offset'];
                    limit = showEnterpriseProjectRequest['limit'];
                    name = showEnterpriseProjectRequest['name'];
                    domainId = showEnterpriseProjectRequest['domain_id'];
                }
            }

        
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询健康对比列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHealthCompareJobList(showHealthCompareJobListRequest?: ShowHealthCompareJobListRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/health-compare-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let xLanguage;
            
            let status;
            
            let offset;
            
            let limit;

            if (showHealthCompareJobListRequest !== null && showHealthCompareJobListRequest !== undefined) {
                if (showHealthCompareJobListRequest instanceof ShowHealthCompareJobListRequest) {
                    jobId = showHealthCompareJobListRequest.jobId;
                    xLanguage = showHealthCompareJobListRequest.xLanguage;
                    status = showHealthCompareJobListRequest.status;
                    offset = showHealthCompareJobListRequest.offset;
                    limit = showHealthCompareJobListRequest.limit;
                } else {
                    jobId = showHealthCompareJobListRequest['job_id'];
                    xLanguage = showHealthCompareJobListRequest['X-Language'];
                    status = showHealthCompareJobListRequest['status'];
                    offset = showHealthCompareJobListRequest['offset'];
                    limit = showHealthCompareJobListRequest['limit'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showHealthCompareJobList.');
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobDetail(showJobDetailRequest?: ShowJobDetailRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let type;
            
            let xLanguage;
            
            let queryId;
            
            let offset;
            
            let limit;
            
            let compareType;
            
            let queryType;
            
            let objectType;
            
            let compareTaskId;
            
            let sourceDbName;
            
            let targetDbName;
            
            let compareDetailType;

            if (showJobDetailRequest !== null && showJobDetailRequest !== undefined) {
                if (showJobDetailRequest instanceof ShowJobDetailRequest) {
                    jobId = showJobDetailRequest.jobId;
                    type = showJobDetailRequest.type;
                    xLanguage = showJobDetailRequest.xLanguage;
                    queryId = showJobDetailRequest.queryId;
                    offset = showJobDetailRequest.offset;
                    limit = showJobDetailRequest.limit;
                    compareType = showJobDetailRequest.compareType;
                    queryType = showJobDetailRequest.queryType;
                    objectType = showJobDetailRequest.objectType;
                    compareTaskId = showJobDetailRequest.compareTaskId;
                    sourceDbName = showJobDetailRequest.sourceDbName;
                    targetDbName = showJobDetailRequest.targetDbName;
                    compareDetailType = showJobDetailRequest.compareDetailType;
                } else {
                    jobId = showJobDetailRequest['job_id'];
                    type = showJobDetailRequest['type'];
                    xLanguage = showJobDetailRequest['X-Language'];
                    queryId = showJobDetailRequest['query_id'];
                    offset = showJobDetailRequest['offset'];
                    limit = showJobDetailRequest['limit'];
                    compareType = showJobDetailRequest['compare_type'];
                    queryType = showJobDetailRequest['query_type'];
                    objectType = showJobDetailRequest['object_type'];
                    compareTaskId = showJobDetailRequest['compare_task_id'];
                    sourceDbName = showJobDetailRequest['source_db_name'];
                    targetDbName = showJobDetailRequest['target_db_name'];
                    compareDetailType = showJobDetailRequest['compare_detail_type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobDetail.');
            }
            if (type === null || type === undefined) {
                throw new RequiredError('type','Required parameter type was null or undefined when calling showJobDetail.');
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (queryId !== null && queryId !== undefined) {
                localVarQueryParameter['query_id'] = queryId;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (compareType !== null && compareType !== undefined) {
                localVarQueryParameter['compare_type'] = compareType;
            }
            if (queryType !== null && queryType !== undefined) {
                localVarQueryParameter['query_type'] = queryType;
            }
            if (objectType !== null && objectType !== undefined) {
                localVarQueryParameter['object_type'] = objectType;
            }
            if (compareTaskId !== null && compareTaskId !== undefined) {
                localVarQueryParameter['compare_task_id'] = compareTaskId;
            }
            if (sourceDbName !== null && sourceDbName !== undefined) {
                localVarQueryParameter['source_db_name'] = sourceDbName;
            }
            if (targetDbName !== null && targetDbName !== undefined) {
                localVarQueryParameter['target_db_name'] = targetDbName;
            }
            if (compareDetailType !== null && compareDetailType !== undefined) {
                localVarQueryParameter['compare_detail_type'] = compareDetailType;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取询价接口的参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showMetering(showMeteringRequest?: ShowMeteringRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/metering",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let xLanguage;

            if (showMeteringRequest !== null && showMeteringRequest !== undefined) {
                if (showMeteringRequest instanceof ShowMeteringRequest) {
                    jobId = showMeteringRequest.jobId;
                    xLanguage = showMeteringRequest.xLanguage;
                } else {
                    jobId = showMeteringRequest['job_id'];
                    xLanguage = showMeteringRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showMetering.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询实时同步映射关系包括对象选择时的库映射、schema映射、表映射和数据加工时的列映射。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showObjectMapping(showObjectMappingRequest?: ShowObjectMappingRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/{job_id}/object-mappings",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (showObjectMappingRequest !== null && showObjectMappingRequest !== undefined) {
                if (showObjectMappingRequest instanceof ShowObjectMappingRequest) {
                    jobId = showObjectMappingRequest.jobId;
                    body = showObjectMappingRequest.body
                    xLanguage = showObjectMappingRequest.xLanguage;
                } else {
                    jobId = showObjectMappingRequest['job_id'];
                    body = showObjectMappingRequest['body'];
                    xLanguage = showObjectMappingRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showObjectMapping.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询不同迁移对象类型的迁移进度。
         * 说明：
         * - 目前仅MySQL-&gt;MySQL、MySQL-&gt;GaussDB(for MySQL)、MongoDB-&gt;DDS、DDS-&gt;MongoDB的迁移支持查看迁移明细。
         * - 在任务未结束前，不能修改源库和目标库的所有用户、密码和用户权限等。
         * - 全量、增量完成不代表任务结束，如果存在触发器和事件将会进行迁移。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProgressData(showProgressDataRequest?: ShowProgressDataRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/progress-data/{type}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let type;
            
            let xLanguage;
            
            let offset;
            
            let limit;

            if (showProgressDataRequest !== null && showProgressDataRequest !== undefined) {
                if (showProgressDataRequest instanceof ShowProgressDataRequest) {
                    jobId = showProgressDataRequest.jobId;
                    type = showProgressDataRequest.type;
                    xLanguage = showProgressDataRequest.xLanguage;
                    offset = showProgressDataRequest.offset;
                    limit = showProgressDataRequest.limit;
                } else {
                    jobId = showProgressDataRequest['job_id'];
                    type = showProgressDataRequest['type'];
                    xLanguage = showProgressDataRequest['X-Language'];
                    offset = showProgressDataRequest['offset'];
                    limit = showProgressDataRequest['limit'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showProgressData.');
            }
            if (type === null || type === undefined) {
            throw new RequiredError('type','Required parameter type was null or undefined when calling showProgressData.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'type': type, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取对象保存进度。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUpdateObjectSavingStatus(showUpdateObjectSavingStatusRequest?: ShowUpdateObjectSavingStatusRequest) {
            const options = {
                method: "GET",
                url: "/v5/{project_id}/jobs/{job_id}/db-objects/saving-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let queryId;
            
            let xLanguage;

            if (showUpdateObjectSavingStatusRequest !== null && showUpdateObjectSavingStatusRequest !== undefined) {
                if (showUpdateObjectSavingStatusRequest instanceof ShowUpdateObjectSavingStatusRequest) {
                    jobId = showUpdateObjectSavingStatusRequest.jobId;
                    queryId = showUpdateObjectSavingStatusRequest.queryId;
                    xLanguage = showUpdateObjectSavingStatusRequest.xLanguage;
                } else {
                    jobId = showUpdateObjectSavingStatusRequest['job_id'];
                    queryId = showUpdateObjectSavingStatusRequest['query_id'];
                    xLanguage = showUpdateObjectSavingStatusRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showUpdateObjectSavingStatus.');
            }
            if (queryId === null || queryId === undefined) {
                throw new RequiredError('queryId','Required parameter queryId was null or undefined when calling showUpdateObjectSavingStatus.');
            }
            if (queryId !== null && queryId !== undefined) {
                localVarQueryParameter['query_id'] = queryId;
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新租户指定ID批量异步任务详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBatchAsyncJobs(updateBatchAsyncJobsRequest?: UpdateBatchAsyncJobsRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/batch-async-jobs/{async_job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let asyncJobId;
            
            let xLanguage;

            if (updateBatchAsyncJobsRequest !== null && updateBatchAsyncJobsRequest !== undefined) {
                if (updateBatchAsyncJobsRequest instanceof UpdateBatchAsyncJobsRequest) {
                    asyncJobId = updateBatchAsyncJobsRequest.asyncJobId;
                    body = updateBatchAsyncJobsRequest.body
                    xLanguage = updateBatchAsyncJobsRequest.xLanguage;
                } else {
                    asyncJobId = updateBatchAsyncJobsRequest['async_job_id'];
                    body = updateBatchAsyncJobsRequest['body'];
                    xLanguage = updateBatchAsyncJobsRequest['X-Language'];
                }
            }

        
            if (asyncJobId === null || asyncJobId === undefined) {
            throw new RequiredError('asyncJobId','Required parameter asyncJobId was null or undefined when calling updateBatchAsyncJobs.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'async_job_id': asyncJobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新租户指定ID任务详情。
         * 当type取值为db_object， 进行异步处理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateJob(updateJobRequest?: UpdateJobRequest) {
            const options = {
                method: "PUT",
                url: "/v5/{project_id}/jobs/{job_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;
            
            let xLanguage;

            if (updateJobRequest !== null && updateJobRequest !== undefined) {
                if (updateJobRequest instanceof UpdateJobRequest) {
                    jobId = updateJobRequest.jobId;
                    body = updateJobRequest.body
                    xLanguage = updateJobRequest.xLanguage;
                } else {
                    jobId = updateJobRequest['job_id'];
                    body = updateJobRequest['body'];
                    xLanguage = updateJobRequest['X-Language'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 对象选择（文件导入 - 模板上传）。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadDbObjectTemplate(uploadDbObjectTemplateRequest?: UploadDbObjectTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/{job_id}/db-object/template",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let jobId;
            let file;
            
            
            let xLanguage;
            
            let fileImportDbLevel;

            if (uploadDbObjectTemplateRequest !== null && uploadDbObjectTemplateRequest !== undefined) {
                if (uploadDbObjectTemplateRequest instanceof UploadDbObjectTemplateRequest) {
                    jobId = uploadDbObjectTemplateRequest.jobId;
                    file = uploadDbObjectTemplateRequest.body?.file;
                    xLanguage = uploadDbObjectTemplateRequest.xLanguage;
                    fileImportDbLevel = uploadDbObjectTemplateRequest.fileImportDbLevel;
                } else {
                    jobId = uploadDbObjectTemplateRequest['job_id'];
                    file = uploadDbObjectTemplateRequest['body']['file'];
                    xLanguage = uploadDbObjectTemplateRequest['X-Language'];
                    fileImportDbLevel = uploadDbObjectTemplateRequest['file_import_db_level'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling uploadDbObjectTemplate.');
            }
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadDbObjectTemplate.');
            }
            if (fileImportDbLevel !== null && fileImportDbLevel !== undefined) {
                localVarQueryParameter['file_import_db_level'] = fileImportDbLevel;
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (xLanguage !== undefined && xLanguage !== null) {
                localVarHeaderParameter['X-Language'] = String(xLanguage);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建任务时对任务名称进行校验。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateJobName(validateJobNameRequest?: ValidateJobNameRequest) {
            const options = {
                method: "POST",
                url: "/v5/{project_id}/jobs/name-validation",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let xLanguage;

            if (validateJobNameRequest !== null && validateJobNameRequest !== undefined) {
                if (validateJobNameRequest instanceof ValidateJobNameRequest) {
                    body = validateJobNameRequest.body
                    xLanguage = validateJobNameRequest.xLanguage;
                } else {
                    body = validateJobNameRequest['body'];
                    xLanguage = validateJobNameRequest['X-Language'];
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

function newClient(client: HcClient): DrsClient {
    return new DrsClient(client);
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