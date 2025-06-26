import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { AddKeystorePermissionResponseBody } from './model/AddKeystorePermissionResponseBody';
import { BriefRecordItems } from './model/BriefRecordItems';
import { BuildInfoRecord } from './model/BuildInfoRecord';
import { BuildInfoRecordCommitInfo } from './model/BuildInfoRecordCommitInfo';
import { BuildParameter } from './model/BuildParameter';
import { BuildParams } from './model/BuildParams';
import { BuildParamsBodyResult } from './model/BuildParamsBodyResult';
import { BuildRecord } from './model/BuildRecord';
import { BuildRecordBuildRecordType } from './model/BuildRecordBuildRecordType';
import { BuildRecordParameters } from './model/BuildRecordParameters';
import { BuildStageRecord } from './model/BuildStageRecord';
import { BuildStep } from './model/BuildStep';
import { CheckJobCountIsTopLimitRequest } from './model/CheckJobCountIsTopLimitRequest';
import { CheckJobCountIsTopLimitResponse } from './model/CheckJobCountIsTopLimitResponse';
import { CheckJobNameIsExistsRequest } from './model/CheckJobNameIsExistsRequest';
import { CheckJobNameIsExistsResponse } from './model/CheckJobNameIsExistsResponse';
import { CheckWebhookUrlRequest } from './model/CheckWebhookUrlRequest';
import { CheckWebhookUrlRequestBody } from './model/CheckWebhookUrlRequestBody';
import { CheckWebhookUrlResponse } from './model/CheckWebhookUrlResponse';
import { ClearRecyclingJobsRequest } from './model/ClearRecyclingJobsRequest';
import { ClearRecyclingJobsResponse } from './model/ClearRecyclingJobsResponse';
import { Constraints } from './model/Constraints';
import { CopyBuildJobRequestBody } from './model/CopyBuildJobRequestBody';
import { CopyJobRequest } from './model/CopyJobRequest';
import { CopyJobResponse } from './model/CopyJobResponse';
import { CreateBuildJobParameter } from './model/CreateBuildJobParameter';
import { CreateBuildJobParameterParam } from './model/CreateBuildJobParameterParam';
import { CreateBuildJobRequest } from './model/CreateBuildJobRequest';
import { CreateBuildJobRequestBody } from './model/CreateBuildJobRequestBody';
import { CreateBuildJobResponse } from './model/CreateBuildJobResponse';
import { CreateBuildJobResponseBodyResult } from './model/CreateBuildJobResponseBodyResult';
import { CreateBuildJobScm } from './model/CreateBuildJobScm';
import { CreateBuildJobSteps } from './model/CreateBuildJobSteps';
import { CreateBuildTimeout } from './model/CreateBuildTimeout';
import { CreateNewJobRequest } from './model/CreateNewJobRequest';
import { CreateNewJobResponse } from './model/CreateNewJobResponse';
import { CreateTemplate } from './model/CreateTemplate';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { CreateTemplateSteps } from './model/CreateTemplateSteps';
import { CreateTemplatesItems } from './model/CreateTemplatesItems';
import { CreateTemplatesRequest } from './model/CreateTemplatesRequest';
import { CreateTemplatesRequestBody } from './model/CreateTemplatesRequestBody';
import { CreateTemplatesResponse } from './model/CreateTemplatesResponse';
import { DeleteBuildJobRequest } from './model/DeleteBuildJobRequest';
import { DeleteBuildJobResponse } from './model/DeleteBuildJobResponse';
import { DeleteKeystorePermissionRequest } from './model/DeleteKeystorePermissionRequest';
import { DeleteKeystorePermissionResponse } from './model/DeleteKeystorePermissionResponse';
import { DeleteKeystoreRequest } from './model/DeleteKeystoreRequest';
import { DeleteKeystoreResponse } from './model/DeleteKeystoreResponse';
import { DeleteRecyclingJobsRequest } from './model/DeleteRecyclingJobsRequest';
import { DeleteRecyclingJobsResponse } from './model/DeleteRecyclingJobsResponse';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { DeleteTemplatesRequest } from './model/DeleteTemplatesRequest';
import { DeleteTemplatesResponse } from './model/DeleteTemplatesResponse';
import { DeleteTheJobRequest } from './model/DeleteTheJobRequest';
import { DeleteTheJobResponse } from './model/DeleteTheJobResponse';
import { DeleteTheJobResponseBodyResult } from './model/DeleteTheJobResponseBodyResult';
import { DisableBuildJobRequest } from './model/DisableBuildJobRequest';
import { DisableBuildJobResponse } from './model/DisableBuildJobResponse';
import { DisableNoticeRequest } from './model/DisableNoticeRequest';
import { DisableNoticeResponse } from './model/DisableNoticeResponse';
import { DisableTheJobRequest } from './model/DisableTheJobRequest';
import { DisableTheJobRequestBody } from './model/DisableTheJobRequestBody';
import { DisableTheJobResponse } from './model/DisableTheJobResponse';
import { DownloadBuildLogRequest } from './model/DownloadBuildLogRequest';
import { DownloadBuildLogResponse } from './model/DownloadBuildLogResponse';
import { DownloadJunitCoverageZipRequest } from './model/DownloadJunitCoverageZipRequest';
import { DownloadJunitCoverageZipResponse } from './model/DownloadJunitCoverageZipResponse';
import { DownloadKeystoreByNameRequest } from './model/DownloadKeystoreByNameRequest';
import { DownloadKeystoreByNameResponse } from './model/DownloadKeystoreByNameResponse';
import { DownloadKeystoreRequest } from './model/DownloadKeystoreRequest';
import { DownloadKeystoreResponse } from './model/DownloadKeystoreResponse';
import { DownloadLogByRecordIdRequest } from './model/DownloadLogByRecordIdRequest';
import { DownloadLogByRecordIdResponse } from './model/DownloadLogByRecordIdResponse';
import { DownloadRealTimeLogRequest } from './model/DownloadRealTimeLogRequest';
import { DownloadRealTimeLogResponse } from './model/DownloadRealTimeLogResponse';
import { DownloadTaskLogRequest } from './model/DownloadTaskLogRequest';
import { DownloadTaskLogResponse } from './model/DownloadTaskLogResponse';
import { EnableBuildJobRequest } from './model/EnableBuildJobRequest';
import { EnableBuildJobResponse } from './model/EnableBuildJobResponse';
import { ExecuteJobRequest } from './model/ExecuteJobRequest';
import { ExecuteJobResponse } from './model/ExecuteJobResponse';
import { FlowGraph2Result } from './model/FlowGraph2Result';
import { FlowGraph2ResultEdges } from './model/FlowGraph2ResultEdges';
import { FullStagesResult } from './model/FullStagesResult';
import { HistoryRecord } from './model/HistoryRecord';
import { HistoryRecord1 } from './model/HistoryRecord1';
import { IsDisableResult } from './model/IsDisableResult';
import { Job } from './model/Job';
import { JobStatusBody } from './model/JobStatusBody';
import { JobSummary } from './model/JobSummary';
import { JobSummaryBodyResult } from './model/JobSummaryBodyResult';
import { JobUpdateRecordListVoResult } from './model/JobUpdateRecordListVoResult';
import { JobUpdateRecordListVoResultJobUpdateRecords } from './model/JobUpdateRecordListVoResultJobUpdateRecords';
import { JobsRequestBody } from './model/JobsRequestBody';
import { LimitsParam } from './model/LimitsParam';
import { ListBriefRecordRequest } from './model/ListBriefRecordRequest';
import { ListBriefRecordResponse } from './model/ListBriefRecordResponse';
import { ListBriefRecordResponseBodyResult } from './model/ListBriefRecordResponseBodyResult';
import { ListBuildInfoRecordBodyResult } from './model/ListBuildInfoRecordBodyResult';
import { ListBuildInfoRecordByJobIdRequest } from './model/ListBuildInfoRecordByJobIdRequest';
import { ListBuildInfoRecordByJobIdResponse } from './model/ListBuildInfoRecordByJobIdResponse';
import { ListBuildInfoRecordRequest } from './model/ListBuildInfoRecordRequest';
import { ListBuildInfoRecordResponse } from './model/ListBuildInfoRecordResponse';
import { ListBuildParameterRequest } from './model/ListBuildParameterRequest';
import { ListBuildParameterResponse } from './model/ListBuildParameterResponse';
import { ListCustomTemplateRequest } from './model/ListCustomTemplateRequest';
import { ListCustomTemplateResponse } from './model/ListCustomTemplateResponse';
import { ListJobConfigRequest } from './model/ListJobConfigRequest';
import { ListJobConfigResponse } from './model/ListJobConfigResponse';
import { ListJobRequest } from './model/ListJobRequest';
import { ListJobResponse } from './model/ListJobResponse';
import { ListJobResult } from './model/ListJobResult';
import { ListJobResultJobList } from './model/ListJobResultJobList';
import { ListJunitCoverageSummaryRequest } from './model/ListJunitCoverageSummaryRequest';
import { ListJunitCoverageSummaryResponse } from './model/ListJunitCoverageSummaryResponse';
import { ListJunitCoverageSummaryResult } from './model/ListJunitCoverageSummaryResult';
import { ListJunitCoverageSummaryResultUnitSummaryList } from './model/ListJunitCoverageSummaryResultUnitSummaryList';
import { ListKeystoreRequest } from './model/ListKeystoreRequest';
import { ListKeystoreResponse } from './model/ListKeystoreResponse';
import { ListKeystoreResult } from './model/ListKeystoreResult';
import { ListKeystoreSearchRequest } from './model/ListKeystoreSearchRequest';
import { ListKeystoreSearchResponse } from './model/ListKeystoreSearchResponse';
import { ListKeystoreSearchResponseBodyResult } from './model/ListKeystoreSearchResponseBodyResult';
import { ListKeystoreSearchResponseBodyResultKeystoreList } from './model/ListKeystoreSearchResponseBodyResultKeystoreList';
import { ListKeystoreSearchResponseBodyResultPermission } from './model/ListKeystoreSearchResponseBodyResultPermission';
import { ListNoticeRequest } from './model/ListNoticeRequest';
import { ListNoticeResponse } from './model/ListNoticeResponse';
import { ListOfficialTemplateRequest } from './model/ListOfficialTemplateRequest';
import { ListOfficialTemplateResponse } from './model/ListOfficialTemplateResponse';
import { ListOfficialTemplateResult } from './model/ListOfficialTemplateResult';
import { ListProjectJobsRequest } from './model/ListProjectJobsRequest';
import { ListProjectJobsResponse } from './model/ListProjectJobsResponse';
import { ListRecommendOfficialTemplateRequest } from './model/ListRecommendOfficialTemplateRequest';
import { ListRecommendOfficialTemplateRequestBody } from './model/ListRecommendOfficialTemplateRequestBody';
import { ListRecommendOfficialTemplateResponse } from './model/ListRecommendOfficialTemplateResponse';
import { ListRecordsRequest } from './model/ListRecordsRequest';
import { ListRecordsResponse } from './model/ListRecordsResponse';
import { ListRecordsResult } from './model/ListRecordsResult';
import { ListRecordsResultPagination } from './model/ListRecordsResultPagination';
import { ListRecyclingJobRequest } from './model/ListRecyclingJobRequest';
import { ListRecyclingJobResponse } from './model/ListRecyclingJobResponse';
import { ListRelatedProjectInfoRequest } from './model/ListRelatedProjectInfoRequest';
import { ListRelatedProjectInfoResponse } from './model/ListRelatedProjectInfoResponse';
import { ListRelatedProjectInfoResult } from './model/ListRelatedProjectInfoResult';
import { ListRelatedProjectInfoResultProjectInfoList } from './model/ListRelatedProjectInfoResultProjectInfoList';
import { ListRepoBranchRequest } from './model/ListRepoBranchRequest';
import { ListRepoBranchResponse } from './model/ListRepoBranchResponse';
import { ListRepositoryRequest } from './model/ListRepositoryRequest';
import { ListRepositoryResponse } from './model/ListRepositoryResponse';
import { ListTemplatesRequest } from './model/ListTemplatesRequest';
import { ListTemplatesResponse } from './model/ListTemplatesResponse';
import { ListUpdateJobHistoryRequest } from './model/ListUpdateJobHistoryRequest';
import { ListUpdateJobHistoryResponse } from './model/ListUpdateJobHistoryResponse';
import { OutPutInfoResult } from './model/OutPutInfoResult';
import { OutPutResult } from './model/OutPutResult';
import { Parameter } from './model/Parameter';
import { ParameterItem } from './model/ParameterItem';
import { Params } from './model/Params';
import { QueryCustomTemplatesResult } from './model/QueryCustomTemplatesResult';
import { QueryJobNoticeItems } from './model/QueryJobNoticeItems';
import { QueryTemplate } from './model/QueryTemplate';
import { QueryTemplatesItems } from './model/QueryTemplatesItems';
import { QueryTemplatesResult } from './model/QueryTemplatesResult';
import { RealTimeLogResponseBodyResult } from './model/RealTimeLogResponseBodyResult';
import { RecordInfo2Result } from './model/RecordInfo2Result';
import { RecordInfoResult } from './model/RecordInfoResult';
import { RecyclingJob } from './model/RecyclingJob';
import { RecyclingJobsResult } from './model/RecyclingJobsResult';
import { RepositoriesResult } from './model/RepositoriesResult';
import { RestoreRecyclingJobsRequest } from './model/RestoreRecyclingJobsRequest';
import { RestoreRecyclingJobsResponse } from './model/RestoreRecyclingJobsResponse';
import { RunJobRequest } from './model/RunJobRequest';
import { RunJobRequestBody } from './model/RunJobRequestBody';
import { RunJobResponse } from './model/RunJobResponse';
import { SaveTemplateUsedInfoRequest } from './model/SaveTemplateUsedInfoRequest';
import { SaveTemplateUsedInfoRequestBody } from './model/SaveTemplateUsedInfoRequestBody';
import { SaveTemplateUsedInfoResponse } from './model/SaveTemplateUsedInfoResponse';
import { Scm } from './model/Scm';
import { SetKeepTimeRequest } from './model/SetKeepTimeRequest';
import { SetKeepTimeRequestBody } from './model/SetKeepTimeRequestBody';
import { SetKeepTimeResponse } from './model/SetKeepTimeResponse';
import { SetKeepTimeResult } from './model/SetKeepTimeResult';
import { ShowBuildInfoRecordRequest } from './model/ShowBuildInfoRecordRequest';
import { ShowBuildInfoRecordResponse } from './model/ShowBuildInfoRecordResponse';
import { ShowBuildParamsListRequest } from './model/ShowBuildParamsListRequest';
import { ShowBuildParamsListResponse } from './model/ShowBuildParamsListResponse';
import { ShowBuildRecordBuildScriptRequest } from './model/ShowBuildRecordBuildScriptRequest';
import { ShowBuildRecordBuildScriptResponse } from './model/ShowBuildRecordBuildScriptResponse';
import { ShowBuildRecordFlowGraphRequest } from './model/ShowBuildRecordFlowGraphRequest';
import { ShowBuildRecordFlowGraphResponse } from './model/ShowBuildRecordFlowGraphResponse';
import { ShowBuildRecordFullStagesRequest } from './model/ShowBuildRecordFullStagesRequest';
import { ShowBuildRecordFullStagesResponse } from './model/ShowBuildRecordFullStagesResponse';
import { ShowBuildRecordRequest } from './model/ShowBuildRecordRequest';
import { ShowBuildRecordResponse } from './model/ShowBuildRecordResponse';
import { ShowCopyNameRequest } from './model/ShowCopyNameRequest';
import { ShowCopyNameResponse } from './model/ShowCopyNameResponse';
import { ShowDefaultBuildParametersParams } from './model/ShowDefaultBuildParametersParams';
import { ShowDefaultBuildParametersRequest } from './model/ShowDefaultBuildParametersRequest';
import { ShowDefaultBuildParametersResponse } from './model/ShowDefaultBuildParametersResponse';
import { ShowDefaultBuildParametersResult } from './model/ShowDefaultBuildParametersResult';
import { ShowDefaultProjectPermissionRequest } from './model/ShowDefaultProjectPermissionRequest';
import { ShowDefaultProjectPermissionResponse } from './model/ShowDefaultProjectPermissionResponse';
import { ShowDefaultProjectPermissionResponseBodyResult } from './model/ShowDefaultProjectPermissionResponseBodyResult';
import { ShowDisableRequest } from './model/ShowDisableRequest';
import { ShowDisableResponse } from './model/ShowDisableResponse';
import { ShowDockerfileTemplateRequest } from './model/ShowDockerfileTemplateRequest';
import { ShowDockerfileTemplateResponse } from './model/ShowDockerfileTemplateResponse';
import { ShowFlowGraphRequest } from './model/ShowFlowGraphRequest';
import { ShowFlowGraphResponse } from './model/ShowFlowGraphResponse';
import { ShowHistoryDetailsRequest } from './model/ShowHistoryDetailsRequest';
import { ShowHistoryDetailsResponse } from './model/ShowHistoryDetailsResponse';
import { ShowImageTemplateListRequest } from './model/ShowImageTemplateListRequest';
import { ShowImageTemplateListResponse } from './model/ShowImageTemplateListResponse';
import { ShowImageTemplateListResponseBodyResult } from './model/ShowImageTemplateListResponseBodyResult';
import { ShowImageTemplateListResponseBodyResultImageTemplates } from './model/ShowImageTemplateListResponseBodyResultImageTemplates';
import { ShowJobBuildRecordDetailRequest } from './model/ShowJobBuildRecordDetailRequest';
import { ShowJobBuildRecordDetailResponse } from './model/ShowJobBuildRecordDetailResponse';
import { ShowJobBuildSuccessRatioRequest } from './model/ShowJobBuildSuccessRatioRequest';
import { ShowJobBuildSuccessRatioResponse } from './model/ShowJobBuildSuccessRatioResponse';
import { ShowJobBuildSuccessRatioResult } from './model/ShowJobBuildSuccessRatioResult';
import { ShowJobBuildSuccessRatioResultEveryDayReport } from './model/ShowJobBuildSuccessRatioResultEveryDayReport';
import { ShowJobBuildTimeRequest } from './model/ShowJobBuildTimeRequest';
import { ShowJobBuildTimeResponse } from './model/ShowJobBuildTimeResponse';
import { ShowJobBuildTimeResult } from './model/ShowJobBuildTimeResult';
import { ShowJobBuildTimeResultChart } from './model/ShowJobBuildTimeResultChart';
import { ShowJobConfigDiffRequest } from './model/ShowJobConfigDiffRequest';
import { ShowJobConfigDiffResponse } from './model/ShowJobConfigDiffResponse';
import { ShowJobConfigRequest } from './model/ShowJobConfigRequest';
import { ShowJobConfigResponse } from './model/ShowJobConfigResponse';
import { ShowJobInfoRequest } from './model/ShowJobInfoRequest';
import { ShowJobInfoResponse } from './model/ShowJobInfoResponse';
import { ShowJobInfoResult } from './model/ShowJobInfoResult';
import { ShowJobListByProjectIdRequest } from './model/ShowJobListByProjectIdRequest';
import { ShowJobListByProjectIdResponse } from './model/ShowJobListByProjectIdResponse';
import { ShowJobNoticeConfigInfoRequest } from './model/ShowJobNoticeConfigInfoRequest';
import { ShowJobNoticeConfigInfoResponse } from './model/ShowJobNoticeConfigInfoResponse';
import { ShowJobPermissionResult } from './model/ShowJobPermissionResult';
import { ShowJobRolePermissionRequest } from './model/ShowJobRolePermissionRequest';
import { ShowJobRolePermissionResponse } from './model/ShowJobRolePermissionResponse';
import { ShowJobRolePermissionResult } from './model/ShowJobRolePermissionResult';
import { ShowJobStatusRequest } from './model/ShowJobStatusRequest';
import { ShowJobStatusResponse } from './model/ShowJobStatusResponse';
import { ShowJobStepStatusRequest } from './model/ShowJobStepStatusRequest';
import { ShowJobStepStatusResponse } from './model/ShowJobStepStatusResponse';
import { ShowJobSuccessRatioRequest } from './model/ShowJobSuccessRatioRequest';
import { ShowJobSuccessRatioResponse } from './model/ShowJobSuccessRatioResponse';
import { ShowJobSystemParametersRequest } from './model/ShowJobSystemParametersRequest';
import { ShowJobSystemParametersResponse } from './model/ShowJobSystemParametersResponse';
import { ShowJobTotalRequest } from './model/ShowJobTotalRequest';
import { ShowJobTotalResponse } from './model/ShowJobTotalResponse';
import { ShowKeystorePermissionRequest } from './model/ShowKeystorePermissionRequest';
import { ShowKeystorePermissionResponse } from './model/ShowKeystorePermissionResponse';
import { ShowKeystorePermissionResponseBodyResult } from './model/ShowKeystorePermissionResponseBodyResult';
import { ShowLastHistoryRequest } from './model/ShowLastHistoryRequest';
import { ShowLastHistoryResponse } from './model/ShowLastHistoryResponse';
import { ShowListHistoryRequest } from './model/ShowListHistoryRequest';
import { ShowListHistoryResponse } from './model/ShowListHistoryResponse';
import { ShowListPeriodHistoryRequest } from './model/ShowListPeriodHistoryRequest';
import { ShowListPeriodHistoryResponse } from './model/ShowListPeriodHistoryResponse';
import { ShowOutputInfoRequest } from './model/ShowOutputInfoRequest';
import { ShowOutputInfoResponse } from './model/ShowOutputInfoResponse';
import { ShowProjectJobPermissionRequest } from './model/ShowProjectJobPermissionRequest';
import { ShowProjectJobPermissionResponse } from './model/ShowProjectJobPermissionResponse';
import { ShowProjectPermissionRequest } from './model/ShowProjectPermissionRequest';
import { ShowProjectPermissionResponse } from './model/ShowProjectPermissionResponse';
import { ShowRecordDetailRequest } from './model/ShowRecordDetailRequest';
import { ShowRecordDetailResponse } from './model/ShowRecordDetailResponse';
import { ShowRecordInfoRequest } from './model/ShowRecordInfoRequest';
import { ShowRecordInfoResponse } from './model/ShowRecordInfoResponse';
import { ShowRelatedProjectRequest } from './model/ShowRelatedProjectRequest';
import { ShowRelatedProjectResponse } from './model/ShowRelatedProjectResponse';
import { ShowRelatedProjectResult } from './model/ShowRelatedProjectResult';
import { ShowRelatedProjectResultProjectInfoList } from './model/ShowRelatedProjectResultProjectInfoList';
import { ShowReportSummary } from './model/ShowReportSummary';
import { ShowReportSummaryBodyResult } from './model/ShowReportSummaryBodyResult';
import { ShowReportSummaryRequest } from './model/ShowReportSummaryRequest';
import { ShowReportSummaryResponse } from './model/ShowReportSummaryResponse';
import { ShowRunningStatusRequest } from './model/ShowRunningStatusRequest';
import { ShowRunningStatusResponse } from './model/ShowRunningStatusResponse';
import { ShowRunningStatusResult } from './model/ShowRunningStatusResult';
import { ShowSummaryBuildJobInfoRequest } from './model/ShowSummaryBuildJobInfoRequest';
import { ShowSummaryBuildJobInfoResponse } from './model/ShowSummaryBuildJobInfoResponse';
import { ShowUserOverPackageQuotaRequest } from './model/ShowUserOverPackageQuotaRequest';
import { ShowUserOverPackageQuotaResponse } from './model/ShowUserOverPackageQuotaResponse';
import { ShowUserOverPackageQuotaResult } from './model/ShowUserOverPackageQuotaResult';
import { ShowUserProjectPermissionResult } from './model/ShowUserProjectPermissionResult';
import { ShowYamlTemplateRequest } from './model/ShowYamlTemplateRequest';
import { ShowYamlTemplateResponse } from './model/ShowYamlTemplateResponse';
import { StatusSuccessResultWithUUIDResult } from './model/StatusSuccessResultWithUUIDResult';
import { StopBuildJobRequest } from './model/StopBuildJobRequest';
import { StopBuildJobResponse } from './model/StopBuildJobResponse';
import { StopJobRequest } from './model/StopJobRequest';
import { StopJobRequestBody } from './model/StopJobRequestBody';
import { StopJobResponse } from './model/StopJobResponse';
import { SystemParametersResult } from './model/SystemParametersResult';
import { TemplateList } from './model/TemplateList';
import { TotalResponseBodyResult } from './model/TotalResponseBodyResult';
import { Trigger } from './model/Trigger';
import { UpdateBuildJobParameter } from './model/UpdateBuildJobParameter';
import { UpdateBuildJobParameterParam } from './model/UpdateBuildJobParameterParam';
import { UpdateBuildJobRequest } from './model/UpdateBuildJobRequest';
import { UpdateBuildJobRequestBody } from './model/UpdateBuildJobRequestBody';
import { UpdateBuildJobResponse } from './model/UpdateBuildJobResponse';
import { UpdateBuildJobScm } from './model/UpdateBuildJobScm';
import { UpdateBuildJobSteps } from './model/UpdateBuildJobSteps';
import { UpdateKeystoreRequest } from './model/UpdateKeystoreRequest';
import { UpdateKeystoreRequestBody } from './model/UpdateKeystoreRequestBody';
import { UpdateKeystoreResponse } from './model/UpdateKeystoreResponse';
import { UpdateNewJobRequest } from './model/UpdateNewJobRequest';
import { UpdateNewJobResponse } from './model/UpdateNewJobResponse';
import { UpdateNoticeRequest } from './model/UpdateNoticeRequest';
import { UpdateNoticeRequestBody } from './model/UpdateNoticeRequestBody';
import { UpdateNoticeResponse } from './model/UpdateNoticeResponse';
import { UploadKeystoreRequest } from './model/UploadKeystoreRequest';
import { UploadKeystoreRequestBody } from './model/UploadKeystoreRequestBody';
import { UploadKeystoreResponse } from './model/UploadKeystoreResponse';
import { UploadKeystoreResult } from './model/UploadKeystoreResult';
import { Vertices } from './model/Vertices';

export class CodeArtsBuildClient {
    public static newBuilder(): ClientBuilder<CodeArtsBuildClient> {
            let client = new ClientBuilder<CodeArtsBuildClient>(newClient);
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
     * 创建构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建构建任务
     * @param {CreateBuildJobRequestBody} createBuildJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createBuildJob(createBuildJobRequest?: CreateBuildJobRequest): Promise<CreateBuildJobResponse> {
        const options = ParamCreater().createBuildJob(createBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建构建模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建构建模板
     * @param {CreateTemplatesRequestBody} createTemplatesRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplates(createTemplatesRequest?: CreateTemplatesRequest): Promise<CreateTemplatesResponse> {
        const options = ParamCreater().createTemplates(createTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除构建任务
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteBuildJob(deleteBuildJobRequest?: DeleteBuildJobRequest): Promise<DeleteBuildJobResponse> {
        const options = ParamCreater().deleteBuildJob(deleteBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除构建模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除构建模板
     * @param {string} uuid uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplates(deleteTemplatesRequest?: DeleteTemplatesRequest): Promise<DeleteTemplatesResponse> {
        const options = ParamCreater().deleteTemplates(deleteTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用构建任务
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableBuildJob(disableBuildJobRequest?: DisableBuildJobRequest): Promise<DisableBuildJobResponse> {
        const options = ParamCreater().disableBuildJob(disableBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 取消通知
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消通知
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} noticeType 通知的类型,分为消息，邮件和钉钉
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableNotice(disableNoticeRequest?: DisableNoticeRequest): Promise<DisableNoticeResponse> {
        const options = ParamCreater().disableNotice(disableNoticeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载全量构建日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载全量构建日志
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {string} [logLevel] 日志等级 值为INFO | DEBUG。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadBuildLog(downloadBuildLogRequest?: DownloadBuildLogRequest): Promise<DownloadBuildLogResponse> {
        const options = ParamCreater().downloadBuildLog(downloadBuildLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载指定租户下的KeyStore文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary KeyStore文件下载
     * @param {string} fileName 下载的文件名称
     * @param {string} domainId 租户ID。32位数字、小写字母组合
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadKeystore(downloadKeystoreRequest?: DownloadKeystoreRequest): Promise<DownloadKeystoreResponse> {
        const options = ParamCreater().downloadKeystore(downloadKeystoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载构建实时日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载构建实时日志
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {number} offset 偏移量，传入前一次请求返回的offset
     * @param {number} [length] 可控制返回内容长度，默认值为1000000
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadRealTimeLog(downloadRealTimeLogRequest?: DownloadRealTimeLogRequest): Promise<DownloadRealTimeLogResponse> {
        const options = ParamCreater().downloadRealTimeLog(downloadRealTimeLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载构建步骤日志
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载构建步骤日志
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {string} taskName 步骤名称
     * @param {string} [logLevel] 日志等级 值为INFO | DEBUG。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadTaskLog(downloadTaskLogRequest?: DownloadTaskLogRequest): Promise<DownloadTaskLogResponse> {
        const options = ParamCreater().downloadTaskLog(downloadTaskLogRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复构建任务
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableBuildJob(enableBuildJobRequest?: EnableBuildJobRequest): Promise<EnableBuildJobResponse> {
        const options = ParamCreater().enableBuildJob(enableBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务构建记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务构建记录列表
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} startTime 区间开始时间，格式yyyy-MM-dd HH:mm:ss。
     * @param {string} endTime 区间结束时间，格式yyyy-MM-dd HH:mm:ss。
     * @param {number} [pageIndex] 分页页码，表示从此页开始查询， page_index大于等于0
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBuildInfoRecord(listBuildInfoRecordRequest?: ListBuildInfoRecordRequest): Promise<ListBuildInfoRecordResponse> {
        const options = ParamCreater().listBuildInfoRecord(listBuildInfoRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建任务详情
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} [getAllParams] 输入\&quot;true\&quot;或者\&quot;false\&quot;来控制返回参数是不是完整的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJobConfig(listJobConfigRequest?: ListJobConfigRequest): Promise<ListJobConfigResponse> {
        const options = ParamCreater().listJobConfig(listJobConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询通知
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询通知
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listNotice(listNoticeRequest?: ListNoticeRequest): Promise<ListNoticeResponse> {
        const options = ParamCreater().listNotice(listNoticeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询构建模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询构建模板
     * @param {string} [name] 检索的模板的名字模糊查询
     * @param {string} [page] 分页页码， 表示从此页开始查询
     * @param {string} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplates(listTemplatesRequest?: ListTemplatesRequest): Promise<ListTemplatesResponse> {
        const options = ParamCreater().listTemplates(listTemplatesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行构建任务,可传自定义参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行构建任务
     * @param {RunJobRequestBody} runJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public runJob(runJobRequest?: RunJobRequest): Promise<RunJobResponse> {
        const options = ParamCreater().runJob(runJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建历史详情信息接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建历史详情信息接口
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNumber 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showHistoryDetails(showHistoryDetailsRequest?: ShowHistoryDetailsRequest): Promise<ShowHistoryDetailsResponse> {
        const options = ParamCreater().showHistoryDetails(showHistoryDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看项目下用户的构建任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看项目下用户的构建任务列表
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {number} pageIndex 分页页码， 表示从此页开始查询， page_index大于等于0
     * @param {number} pageSize 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobListByProjectId(showJobListByProjectIdRequest?: ShowJobListByProjectIdRequest): Promise<ShowJobListByProjectIdResponse> {
        const options = ParamCreater().showJobListByProjectId(showJobListByProjectIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看任务运行状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看任务运行状态
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
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
     * 根据开始时间和结束时间查看构建任务的构建成功率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据开始时间和结束时间查看构建任务的构建成功率
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} startTime 区间开始时间，格式yyyy-MM-dd。
     * @param {string} endTime 区间结束时间，格式yyyy-MM-dd。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobSuccessRatio(showJobSuccessRatioRequest?: ShowJobSuccessRatioRequest): Promise<ShowJobSuccessRatioResponse> {
        const options = ParamCreater().showJobSuccessRatio(showJobSuccessRatioRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定代码仓库最近一次成功的构建历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定代码仓库最近一次成功的构建历史
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {string} repositoryName 代码仓库名，不支持中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLastHistory(showLastHistoryRequest?: ShowLastHistoryRequest): Promise<ShowLastHistoryResponse> {
        const options = ParamCreater().showLastHistory(showLastHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看构建任务的构建历史列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看构建任务的构建历史列表
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} offset 分页页码， 表示从此页开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量，limit小于等于100
     * @param {number} interval 距今天的时间区间（单位：天），interval小于等于30
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListHistory(showListHistoryRequest?: ShowListHistoryRequest): Promise<ShowListHistoryResponse> {
        const options = ParamCreater().showListHistory(showListHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据开始时间和结束时间查看构建任务的构建历史列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据开始时间和结束时间查看构建任务的构建历史列表
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} offset 分页页码， 表示从此页开始查询， offset大于等于0
     * @param {number} limit 每页显示的条目数量，limit小于等于100
     * @param {string} startTime 区间开始时间，格式yyyy-MM-dd。 开始时间和结束时间间隔不能超过30天
     * @param {string} endTime 区间结束时间，格式yyyy-MM-dd。 开始时间和结束时间间隔不能超过30天
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showListPeriodHistory(showListPeriodHistoryRequest?: ShowListPeriodHistoryRequest): Promise<ShowListPeriodHistoryResponse> {
        const options = ParamCreater().showListPeriodHistory(showListPeriodHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建产物详情信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建产物详情信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showOutputInfo(showOutputInfoRequest?: ShowOutputInfoRequest): Promise<ShowOutputInfoResponse> {
        const options = ParamCreater().showOutputInfo(showOutputInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordDetail(showRecordDetailRequest?: ShowRecordDetailRequest): Promise<ShowRecordDetailResponse> {
        const options = ParamCreater().showRecordDetail(showRecordDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止构建任务
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public stopBuildJob(stopBuildJobRequest?: StopBuildJobRequest): Promise<StopBuildJobResponse> {
        const options = ParamCreater().stopBuildJob(stopBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新构建任务
     * @param {UpdateBuildJobRequestBody} updateBuildJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateBuildJob(updateBuildJobRequest?: UpdateBuildJobRequest): Promise<UpdateBuildJobResponse> {
        const options = ParamCreater().updateBuildJob(updateBuildJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新通知
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新通知
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {UpdateNoticeRequestBody} updateNoticeRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNotice(updateNoticeRequest?: UpdateNoticeRequest): Promise<UpdateNoticeResponse> {
        const options = ParamCreater().updateNotice(updateNoticeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取项目列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取项目列表
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {number} [pageNo] 分页页码，表示从此页开始查询， page大于等于1
     * @param {string} [search] 搜索内容
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRelatedProjectInfo(listRelatedProjectInfoRequest?: ListRelatedProjectInfoRequest): Promise<ListRelatedProjectInfoResponse> {
        const options = ParamCreater().listRelatedProjectInfo(listRelatedProjectInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取用户权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取用户权限
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectPermission(showProjectPermissionRequest?: ShowProjectPermissionRequest): Promise<ShowProjectPermissionResponse> {
        const options = ParamCreater().showProjectPermission(showProjectPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前用户的项目信息列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前用户的项目信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRelatedProject(showRelatedProjectRequest?: ShowRelatedProjectRequest): Promise<ShowRelatedProjectResponse> {
        const options = ParamCreater().showRelatedProject();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户任务总数和成功率接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取租户任务总数和成功率接口
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSummaryBuildJobInfo(showSummaryBuildJobInfoRequest?: ShowSummaryBuildJobInfoRequest): Promise<ShowSummaryBuildJobInfoResponse> {
        const options = ParamCreater().showSummaryBuildJobInfo();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 当前用户所在项目所属租户的包周期每月时长是否超额
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 当前用户所在项目所属租户的包周期每月时长是否超额
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserOverPackageQuota(showUserOverPackageQuotaRequest?: ShowUserOverPackageQuotaRequest): Promise<ShowUserOverPackageQuotaResponse> {
        const options = ParamCreater().showUserOverPackageQuota(showUserOverPackageQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取dockerfileTemplate
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取dockerfileTemplate
     * @param {string} imageId 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDockerfileTemplate(showDockerfileTemplateRequest?: ShowDockerfileTemplateRequest): Promise<ShowDockerfileTemplateResponse> {
        const options = ParamCreater().showDockerfileTemplate(showDockerfileTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取镜像模板列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取镜像模板列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showImageTemplateList(showImageTemplateListRequest?: ShowImageTemplateListRequest): Promise<ShowImageTemplateListResponse> {
        const options = ParamCreater().showImageTemplateList();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查任务数量是否上限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查任务数量是否上限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkJobCountIsTopLimit(checkJobCountIsTopLimitRequest?: CheckJobCountIsTopLimitRequest): Promise<CheckJobCountIsTopLimitResponse> {
        const options = ParamCreater().checkJobCountIsTopLimit();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看项目下任务名是否存在
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看项目下任务名是否存在
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {string} jobName 任务名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkJobNameIsExists(checkJobNameIsExistsRequest?: CheckJobNameIsExistsRequest): Promise<CheckJobNameIsExistsResponse> {
        const options = ParamCreater().checkJobNameIsExists(checkJobNameIsExistsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 检查webhook地址参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 检查webhook地址参数
     * @param {CheckWebhookUrlRequestBody} checkWebhookUrlRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public checkWebhookUrl(checkWebhookUrlRequest?: CheckWebhookUrlRequest): Promise<CheckWebhookUrlResponse> {
        const options = ParamCreater().checkWebhookUrl(checkWebhookUrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清空回收站中的任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 清空回收站中的任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public clearRecyclingJobs(clearRecyclingJobsRequest?: ClearRecyclingJobsRequest): Promise<ClearRecyclingJobsResponse> {
        const options = ParamCreater().clearRecyclingJobs();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制构建任务
     * @param {CopyBuildJobRequestBody} copyJobRequestBody body
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
     * 创建构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建构建任务
     * @param {CreateBuildJobRequestBody} createNewJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createNewJob(createNewJobRequest?: CreateNewJobRequest): Promise<CreateNewJobResponse> {
        const options = ParamCreater().createNewJob(createNewJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除回收站中的任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除回收站中的任务
     * @param {JobsRequestBody} deleteRecyclingJobsRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteRecyclingJobs(deleteRecyclingJobsRequest?: DeleteRecyclingJobsRequest): Promise<DeleteRecyclingJobsResponse> {
        const options = ParamCreater().deleteRecyclingJobs(deleteRecyclingJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除任务
     * @param {string} jobId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTheJob(deleteTheJobRequest?: DeleteTheJobRequest): Promise<DeleteTheJobResponse> {
        const options = ParamCreater().deleteTheJob(deleteTheJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用任务
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {DisableTheJobRequestBody} disableTheJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableTheJob(disableTheJobRequest?: DisableTheJobRequest): Promise<DisableTheJobResponse> {
        const options = ParamCreater().disableTheJob(disableTheJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 执行构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 执行构建
     * @param {RunJobRequestBody} executeJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public executeJob(executeJobRequest?: ExecuteJobRequest): Promise<ExecuteJobResponse> {
        const options = ParamCreater().executeJob(executeJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 详情页获取构建参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 详情页获取构建参数
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBuildParameter(listBuildParameterRequest?: ListBuildParameterRequest): Promise<ListBuildParameterResponse> {
        const options = ParamCreater().listBuildParameter(listBuildParameterRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看用户全部的构建任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看用户全部的构建任务列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJob(listJobRequest?: ListJobRequest): Promise<ListJobResponse> {
        const options = ParamCreater().listJob();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询项目任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目任务列表
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {number} pageIndex **参数解释**： 分页页码， 表示从此页开始查询。 **约束限制**： 不涉及。 **取值范围**： 只能使用数字，大于等于0。
     * @param {number} pageSize **参数解释**： 每页显示的条目数量。 **约束限制**： 不涉及。 **取值范围**： 只能使用数字，小于等于100。
     * @param {string} [search] 查询条件
     * @param {string} [sortField] 排序的字段
     * @param {string} [sortOrder] 排序顺序
     * @param {string} [creatorId] 创建人ID
     * @param {string} [buildStatus] 构建状态过滤条件
     * @param {boolean} [byGroup] 是否分组
     * @param {string} [groupPathId] 分组ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listProjectJobs(listProjectJobsRequest?: ListProjectJobsRequest): Promise<ListProjectJobsResponse> {
        const options = ParamCreater().listProjectJobs(listProjectJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看回收站中删除的构建任务列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看回收站中删除的构建任务列表
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {number} [pageNo] 分页页码， 表示从此页开始查询， page_no大于等于1
     * @param {string} [search] 搜索的任务名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecyclingJob(listRecyclingJobRequest?: ListRecyclingJobRequest): Promise<ListRecyclingJobResponse> {
        const options = ParamCreater().listRecyclingJob(listRecyclingJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取修改历史
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取修改历史
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} [pageNo] 分页页码， 表示从此页开始查询， page_no大于等于1
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listUpdateJobHistory(listUpdateJobHistoryRequest?: ListUpdateJobHistoryRequest): Promise<ListUpdateJobHistoryResponse> {
        const options = ParamCreater().listUpdateJobHistory(listUpdateJobHistoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复回收站中的任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复回收站中的任务
     * @param {JobsRequestBody} restoreRecyclingJobsRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreRecyclingJobs(restoreRecyclingJobsRequest?: RestoreRecyclingJobsRequest): Promise<RestoreRecyclingJobsResponse> {
        const options = ParamCreater().restoreRecyclingJobs(restoreRecyclingJobsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 设置回收站中的任务保留时间,该接口需要租户账号才能访问，租户子账号无权限访问。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 设置回收站中的任务保留时间
     * @param {SetKeepTimeRequestBody} setKeepTimeRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public setKeepTime(setKeepTimeRequest?: SetKeepTimeRequest): Promise<SetKeepTimeResponse> {
        const options = ParamCreater().setKeepTime(setKeepTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 编辑页获取参数类型的接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 编辑页获取参数类型的接口
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuildParamsList(showBuildParamsListRequest?: ShowBuildParamsListRequest): Promise<ShowBuildParamsListResponse> {
        const options = ParamCreater().showBuildParamsList();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 复制任务名
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制任务名
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCopyName(showCopyNameRequest?: ShowCopyNameRequest): Promise<ShowCopyNameResponse> {
        const options = ParamCreater().showCopyName(showCopyNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取编译构建默认参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取编译构建默认参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDefaultBuildParameters(showDefaultBuildParametersRequest?: ShowDefaultBuildParametersRequest): Promise<ShowDefaultBuildParametersResponse> {
        const options = ParamCreater().showDefaultBuildParameters();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取当前项目默认角色权限矩阵信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取当前项目默认角色权限矩阵信息
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDefaultProjectPermission(showDefaultProjectPermissionRequest?: ShowDefaultProjectPermissionRequest): Promise<ShowDefaultProjectPermissionResponse> {
        const options = ParamCreater().showDefaultProjectPermission(showDefaultProjectPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务是否已禁用
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务是否已禁用
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showDisable(showDisableRequest?: ShowDisableRequest): Promise<ShowDisableResponse> {
        const options = ParamCreater().showDisable(showDisableRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建任务详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建任务详情
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} [getAllParams] 输入\&quot;true\&quot;或者\&quot;false\&quot;来控制返回参数是不是完整的
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobConfig(showJobConfigRequest?: ShowJobConfigRequest): Promise<ShowJobConfigResponse> {
        const options = ParamCreater().showJobConfig(showJobConfigRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建任务配置的对比差异
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建任务配置的对比差异
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} revisedlNo 新记录的序号
     * @param {string} originalNo 原记录的序号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobConfigDiff(showJobConfigDiffRequest?: ShowJobConfigDiffRequest): Promise<ShowJobConfigDiffResponse> {
        const options = ParamCreater().showJobConfigDiff(showJobConfigDiffRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看构建任务构建信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看构建任务构建信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobInfo(showJobInfoRequest?: ShowJobInfoRequest): Promise<ShowJobInfoResponse> {
        const options = ParamCreater().showJobInfo(showJobInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取通知信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取通知信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobNoticeConfigInfo(showJobNoticeConfigInfoRequest?: ShowJobNoticeConfigInfoRequest): Promise<ShowJobNoticeConfigInfoResponse> {
        const options = ParamCreater().showJobNoticeConfigInfo(showJobNoticeConfigInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建任务的角色权限矩阵信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建任务的角色权限矩阵信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobRolePermission(showJobRolePermissionRequest?: ShowJobRolePermissionRequest): Promise<ShowJobRolePermissionResponse> {
        const options = ParamCreater().showJobRolePermission(showJobRolePermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询任务状态
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务状态
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} [buildNo] 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobStepStatus(showJobStepStatusRequest?: ShowJobStepStatusRequest): Promise<ShowJobStepStatusResponse> {
        const options = ParamCreater().showJobStepStatus(showJobStepStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看系统预定义参数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看系统预定义参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobSystemParameters(showJobSystemParametersRequest?: ShowJobSystemParametersRequest): Promise<ShowJobSystemParametersResponse> {
        const options = ParamCreater().showJobSystemParameters();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务权限矩阵
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务权限矩阵
     * @param {string} projectId CodeArts项目ID，32位数字、小写字母组合。
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showProjectJobPermission(showProjectJobPermissionRequest?: ShowProjectJobPermissionRequest): Promise<ShowProjectJobPermissionResponse> {
        const options = ParamCreater().showProjectJobPermission(showProjectJobPermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看任务是否在构建
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看任务是否在构建
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRunningStatus(showRunningStatusRequest?: ShowRunningStatusRequest): Promise<ShowRunningStatusResponse> {
        const options = ParamCreater().showRunningStatus(showRunningStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新构建任务
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新构建任务
     * @param {UpdateBuildJobRequestBody} updateNewJobRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateNewJob(updateNewJobRequest?: UpdateNewJobRequest): Promise<UpdateNewJobResponse> {
        const options = ParamCreater().updateNewJob(updateNewJobRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除文件管理文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件管理文件
     * @param {string} keystoreId 文件秘钥Id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKeystore(deleteKeystoreRequest?: DeleteKeystoreRequest): Promise<DeleteKeystoreResponse> {
        const options = ParamCreater().deleteKeystore(deleteKeystoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 文件管理删除权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文件管理删除权限
     * @param {string} permissionId 文件管理权限ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKeystorePermission(deleteKeystorePermissionRequest?: DeleteKeystorePermissionRequest): Promise<DeleteKeystorePermissionResponse> {
        const options = ParamCreater().deleteKeystorePermission(deleteKeystorePermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 文件管理文件下载
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文件管理文件下载
     * @param {string} name 文件名
     * @param {string} domainId 租户ID
     * @param {string} id 文件ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadKeystoreByName(downloadKeystoreByNameRequest?: DownloadKeystoreByNameRequest): Promise<DownloadKeystoreByNameResponse> {
        const options = ParamCreater().downloadKeystoreByName(downloadKeystoreByNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询用户可使用文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询用户可使用文件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeystore(listKeystoreRequest?: ListKeystoreRequest): Promise<ListKeystoreResponse> {
        const options = ParamCreater().listKeystore();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户下文件列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户下文件列表
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {number} [page] 分页页码，表示从此页开始查询， page大于等于1
     * @param {string} [search] 搜索的文件名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeystoreSearch(listKeystoreSearchRequest?: ListKeystoreSearchRequest): Promise<ListKeystoreSearchResponse> {
        const options = ParamCreater().listKeystoreSearch(listKeystoreSearchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 文件管理查询权限
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 文件管理查询权限
     * @param {string} keystoreId 文件秘钥Id
     * @param {number} pageSize **参数解释**： 每页显示的条目数量。 **约束限制**： 不涉及。 **取值范围**： 只能使用数字，小于等于100。
     * @param {string} page 分页页码，表示从此页开始查询，page大于等于1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKeystorePermission(showKeystorePermissionRequest?: ShowKeystorePermissionRequest): Promise<ShowKeystorePermissionResponse> {
        const options = ParamCreater().showKeystorePermission(showKeystorePermissionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新文件信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新文件信息
     * @param {string} id 文件ID
     * @param {UpdateKeystoreRequestBody} updateKeystoreRequestBody 请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeystore(updateKeystoreRequest?: UpdateKeystoreRequest): Promise<UpdateKeystoreResponse> {
        const options = ParamCreater().updateKeystore(updateKeystoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传文件
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传文件
     * @param {any} file 文件
     * @param {string} privacy 同意隐私声明，允许使用用户敏感信息进行相关业务操作。
     * @param {string} [description] 文件描述
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadKeystore(uploadKeystoreRequest?: UploadKeystoreRequest): Promise<UploadKeystoreResponse> {
        const options = ParamCreater().uploadKeystore(uploadKeystoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 下载构建日志(待下线)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 下载构建日志(待下线)
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadLogByRecordId(downloadLogByRecordIdRequest?: DownloadLogByRecordIdRequest): Promise<DownloadLogByRecordIdResponse> {
        const options = ParamCreater().downloadLogByRecordId(downloadLogByRecordIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录的有向无环图(待下线)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录的有向无环图(待下线)
     * @param {string} buildFlowRecordId 父任务构建记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFlowGraph(showFlowGraphRequest?: ShowFlowGraphRequest): Promise<ShowFlowGraphResponse> {
        const options = ParamCreater().showFlowGraph(showFlowGraphRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录信息(待下线)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录信息(待下线)
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showRecordInfo(showRecordInfoRequest?: ShowRecordInfoRequest): Promise<ShowRecordInfoResponse> {
        const options = ParamCreater().showRecordInfo(showRecordInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 停止构建任务(待下线)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 停止构建任务(待下线)
     * @param {StopJobRequestBody} stopJobRequestBody body
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
     * 获取指定工程的简要构建信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定工程的简要构建信息
     * @param {number} limit 每页显示的条目数量，limit小于等于100
     * @param {Array<string>} listBriefRecordRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBriefRecord(listBriefRecordRequest?: ListBriefRecordRequest): Promise<ListBriefRecordResponse> {
        const options = ParamCreater().listBriefRecord(listBriefRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务构建记录列表v1
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务构建记录列表v1
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} startTime 区间开始时间，格式yyyy-MM-dd HH:mm:ss。
     * @param {string} endTime 区间结束时间，格式yyyy-MM-dd HH:mm:ss。
     * @param {number} [pageIndex] 分页页码，表示从此页开始查询， page_index大于等于0
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listBuildInfoRecordByJobId(listBuildInfoRecordByJobIdRequest?: ListBuildInfoRecordByJobIdRequest): Promise<ListBuildInfoRecordByJobIdResponse> {
        const options = ParamCreater().listBuildInfoRecordByJobId(listBuildInfoRecordByJobIdRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取指定工程的构建记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取指定工程的构建记录列表
     * @param {string} buildProjectId 构建工程项目ID，36位数字、小写字母组合。
     * @param {number} [page] 分页页码，表示从此页开始查询，大于等于0
     * @param {number} [limit] 每页显示的条目数量，小于等于100
     * @param {Array<string>} [triggers] 需要搜索的触发类型列表
     * @param {Array<string>} [branches] 需要搜索的分支列表
     * @param {Array<string>} [tags] 需要搜索的标签列表
     * @param {string} [fromDate] 查询起止时间,格式：yyyy-MM-dd HH:mm:ss
     * @param {string} [toDate] 查询结束时间,格式：yyyy-MM-dd HH:mm:ss
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecords(listRecordsRequest?: ListRecordsRequest): Promise<ListRecordsResponse> {
        const options = ParamCreater().listRecords(listRecordsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务构建记录列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务构建记录列表
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuildInfoRecord(showBuildInfoRecordRequest?: ShowBuildInfoRecordRequest): Promise<ShowBuildInfoRecordResponse> {
        const options = ParamCreater().showBuildInfoRecord(showBuildInfoRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定构建记录详情
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定构建记录详情
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuildRecord(showBuildRecordRequest?: ShowBuildRecordRequest): Promise<ShowBuildRecordResponse> {
        const options = ParamCreater().showBuildRecord(showBuildRecordRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录的构建脚本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录的构建脚本
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuildRecordBuildScript(showBuildRecordBuildScriptRequest?: ShowBuildRecordBuildScriptRequest): Promise<ShowBuildRecordBuildScriptResponse> {
        const options = ParamCreater().showBuildRecordBuildScript(showBuildRecordBuildScriptRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录的有向无环图
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录的有向无环图
     * @param {string} buildFlowRecordId 父任务构建记录ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuildRecordFlowGraph(showBuildRecordFlowGraphRequest?: ShowBuildRecordFlowGraphRequest): Promise<ShowBuildRecordFlowGraphResponse> {
        const options = ParamCreater().showBuildRecordFlowGraph(showBuildRecordFlowGraphRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取任务各阶段信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取任务各阶段信息
     * @param {string} recordId 记录ID,36位数字、小写字母、\&#39;-\&#39;组组合。
     * @param {boolean} [cascade] 是否联级获取steps
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showBuildRecordFullStages(showBuildRecordFullStagesRequest?: ShowBuildRecordFullStagesRequest): Promise<ShowBuildRecordFullStagesResponse> {
        const options = ParamCreater().showBuildRecordFullStages(showBuildRecordFullStagesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取构建记录信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取构建记录信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobBuildRecordDetail(showJobBuildRecordDetailRequest?: ShowJobBuildRecordDetailRequest): Promise<ShowJobBuildRecordDetailResponse> {
        const options = ParamCreater().showJobBuildRecordDetail(showJobBuildRecordDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 构建历史页获取构建次数
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 构建历史页获取构建次数
     * @param {string} buildProjectId 构建工程项目ID，36位数字、小写字母组合。
     * @param {string} [fromDate] 区间开始时间，格式yyyy-MM-dd HH:mm:ss。
     * @param {string} [toDate] 区间结束时间，格式yyyy-MM-dd HH:mm:ss。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobTotal(showJobTotalRequest?: ShowJobTotalRequest): Promise<ShowJobTotalResponse> {
        const options = ParamCreater().showJobTotal(showJobTotalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取单元测试覆盖率报告压缩包
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单元测试覆盖率报告压缩包
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {string} rootId 资源ID，下载覆盖率报告时使用
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public downloadJunitCoverageZip(downloadJunitCoverageZipRequest?: DownloadJunitCoverageZipRequest): Promise<DownloadJunitCoverageZipResponse> {
        const options = ParamCreater().downloadJunitCoverageZip(downloadJunitCoverageZipRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取单元测试覆盖率报告列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取单元测试覆盖率报告列表
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listJunitCoverageSummary(listJunitCoverageSummaryRequest?: ListJunitCoverageSummaryRequest): Promise<ListJunitCoverageSummaryResponse> {
        const options = ParamCreater().listJunitCoverageSummary(listJunitCoverageSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取该任务所有分支信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取该任务所有分支信息
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} repositoryName 代码仓库名，不支持中文
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepoBranch(listRepoBranchRequest?: ListRepoBranchRequest): Promise<ListRepoBranchResponse> {
        const options = ParamCreater().listRepoBranch(listRepoBranchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看仓库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看仓库
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRepository(listRepositoryRequest?: ListRepositoryRequest): Promise<ListRepositoryResponse> {
        const options = ParamCreater().listRepository(listRepositoryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询构建成功率
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询构建成功率
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} repositoryName 代码仓名称。
     * @param {number} interval 查询时间，查最近几天的。
     * @param {string} [branch] 代码仓分支名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobBuildSuccessRatio(showJobBuildSuccessRatioRequest?: ShowJobBuildSuccessRatioRequest): Promise<ShowJobBuildSuccessRatioResponse> {
        const options = ParamCreater().showJobBuildSuccessRatio(showJobBuildSuccessRatioRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 洞察构建时长
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 洞察构建时长
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} repositoryName 代码仓名称。
     * @param {number} interval 查询时间，查最近几天的。
     * @param {string} [branch] 代码仓分支名。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showJobBuildTime(showJobBuildTimeRequest?: ShowJobBuildTimeRequest): Promise<ShowJobBuildTimeResponse> {
        const options = ParamCreater().showJobBuildTime(showJobBuildTimeRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取覆盖率接口
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取覆盖率接口
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {number} buildNo 构建任务的构建编号，从1开始，每次构建递增1
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showReportSummary(showReportSummaryRequest?: ShowReportSummaryRequest): Promise<ShowReportSummaryResponse> {
        const options = ParamCreater().showReportSummary(showReportSummaryRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建构建模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建构建模板
     * @param {CreateTemplatesRequestBody} createTemplateRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplate(createTemplateRequest?: CreateTemplateRequest): Promise<CreateTemplateResponse> {
        const options = ParamCreater().createTemplate(createTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除构建模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除构建模板
     * @param {string} uuid uuid
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据条件查询特定模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据条件查询特定模板
     * @param {string} [name] 名称
     * @param {string} [filter] 过滤条件
     * @param {number} [page] 分页页码，表示从此页开始查询，page大于等于1
     * @param {number} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {string} [tags] 构建状态过滤条件
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCustomTemplate(listCustomTemplateRequest?: ListCustomTemplateRequest): Promise<ListCustomTemplateResponse> {
        const options = ParamCreater().listCustomTemplate(listCustomTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询官方模版
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询官方模版
     * @param {string} [name] 检索的模板的名字模糊查询
     * @param {string} [page] 分页页码， 表示从此页开始查询
     * @param {string} [pageSize] 每页显示的条目数量，page_size小于等于100
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listOfficialTemplate(listOfficialTemplateRequest?: ListOfficialTemplateRequest): Promise<ListOfficialTemplateResponse> {
        const options = ParamCreater().listOfficialTemplate(listOfficialTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取官方推荐模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取官方推荐模板
     * @param {ListRecommendOfficialTemplateRequestBody} listRecommendOfficialTemplateRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRecommendOfficialTemplate(listRecommendOfficialTemplateRequest?: ListRecommendOfficialTemplateRequest): Promise<ListRecommendOfficialTemplateResponse> {
        const options = ParamCreater().listRecommendOfficialTemplate(listRecommendOfficialTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 保存模板使用记录
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 保存模板使用记录
     * @param {SaveTemplateUsedInfoRequestBody} saveTemplateUsedInfoRequestBody body
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public saveTemplateUsedInfo(saveTemplateUsedInfoRequest?: SaveTemplateUsedInfoRequest): Promise<SaveTemplateUsedInfoResponse> {
        const options = ParamCreater().saveTemplateUsedInfo(saveTemplateUsedInfoRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取代码化构建默认模板
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取代码化构建默认模板
     * @param {string} jobId 构建的任务ID； 编辑构建任务时，浏览器URL末尾的32位数字、字母组合的字符串。
     * @param {string} [defaultHost] 默认主机类型
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showYamlTemplate(showYamlTemplateRequest?: ShowYamlTemplateRequest): Promise<ShowYamlTemplateResponse> {
        const options = ParamCreater().showYamlTemplate(showYamlTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 创建构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createBuildJob(createBuildJobRequest?: CreateBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createBuildJobRequest !== null && createBuildJobRequest !== undefined) {
                if (createBuildJobRequest instanceof CreateBuildJobRequest) {
                    body = createBuildJobRequest.body
                } else {
                    body = createBuildJobRequest['body'];
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
         * 创建构建模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplates(createTemplatesRequest?: CreateTemplatesRequest) {
            const options = {
                method: "POST",
                url: "/v3/templates/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTemplatesRequest !== null && createTemplatesRequest !== undefined) {
                if (createTemplatesRequest instanceof CreateTemplatesRequest) {
                    body = createTemplatesRequest.body
                } else {
                    body = createTemplatesRequest['body'];
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
         * 删除构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteBuildJob(deleteBuildJobRequest?: DeleteBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (deleteBuildJobRequest !== null && deleteBuildJobRequest !== undefined) {
                if (deleteBuildJobRequest instanceof DeleteBuildJobRequest) {
                    jobId = deleteBuildJobRequest.jobId;
                } else {
                    jobId = deleteBuildJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteBuildJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除构建模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplates(deleteTemplatesRequest?: DeleteTemplatesRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/templates/{uuid}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let uuid;

            if (deleteTemplatesRequest !== null && deleteTemplatesRequest !== undefined) {
                if (deleteTemplatesRequest instanceof DeleteTemplatesRequest) {
                    uuid = deleteTemplatesRequest.uuid;
                } else {
                    uuid = deleteTemplatesRequest['uuid'];
                }
            }

        
            if (uuid === null || uuid === undefined) {
            throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling deleteTemplates.');
            }

            options.pathParams = { 'uuid': uuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableBuildJob(disableBuildJobRequest?: DisableBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (disableBuildJobRequest !== null && disableBuildJobRequest !== undefined) {
                if (disableBuildJobRequest instanceof DisableBuildJobRequest) {
                    jobId = disableBuildJobRequest.jobId;
                } else {
                    jobId = disableBuildJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling disableBuildJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 取消通知
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableNotice(disableNoticeRequest?: DisableNoticeRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/notice/{job_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let noticeType;

            if (disableNoticeRequest !== null && disableNoticeRequest !== undefined) {
                if (disableNoticeRequest instanceof DisableNoticeRequest) {
                    jobId = disableNoticeRequest.jobId;
                    noticeType = disableNoticeRequest.noticeType;
                } else {
                    jobId = disableNoticeRequest['job_id'];
                    noticeType = disableNoticeRequest['notice_type'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling disableNotice.');
            }
            if (noticeType === null || noticeType === undefined) {
                throw new RequiredError('noticeType','Required parameter noticeType was null or undefined when calling disableNotice.');
            }
            if (noticeType !== null && noticeType !== undefined) {
                localVarQueryParameter['notice_type'] = noticeType;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载全量构建日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadBuildLog(downloadBuildLogRequest?: DownloadBuildLogRequest) {
            const options = {
                method: "GET",
                url: "/v4/{record_id}/download-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let recordId;
            
            let logLevel;

            if (downloadBuildLogRequest !== null && downloadBuildLogRequest !== undefined) {
                if (downloadBuildLogRequest instanceof DownloadBuildLogRequest) {
                    recordId = downloadBuildLogRequest.recordId;
                    logLevel = downloadBuildLogRequest.logLevel;
                } else {
                    recordId = downloadBuildLogRequest['record_id'];
                    logLevel = downloadBuildLogRequest['log_level'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling downloadBuildLog.');
            }
            if (logLevel !== null && logLevel !== undefined) {
                localVarQueryParameter['log_level'] = logLevel;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载指定租户下的KeyStore文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadKeystore(downloadKeystoreRequest?: DownloadKeystoreRequest) {
            const options = {
                method: "GET",
                url: "/v3/keystore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let fileName;
            
            let domainId;

            if (downloadKeystoreRequest !== null && downloadKeystoreRequest !== undefined) {
                if (downloadKeystoreRequest instanceof DownloadKeystoreRequest) {
                    fileName = downloadKeystoreRequest.fileName;
                    domainId = downloadKeystoreRequest.domainId;
                } else {
                    fileName = downloadKeystoreRequest['file_name'];
                    domainId = downloadKeystoreRequest['domain_id'];
                }
            }

        
            if (fileName === null || fileName === undefined) {
                throw new RequiredError('fileName','Required parameter fileName was null or undefined when calling downloadKeystore.');
            }
            if (fileName !== null && fileName !== undefined) {
                localVarQueryParameter['file_name'] = fileName;
            }
            if (domainId === null || domainId === undefined) {
                throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling downloadKeystore.');
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载构建实时日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadRealTimeLog(downloadRealTimeLogRequest?: DownloadRealTimeLogRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/{build_no}/real-time-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let buildNo;
            
            let offset;
            
            let length;

            if (downloadRealTimeLogRequest !== null && downloadRealTimeLogRequest !== undefined) {
                if (downloadRealTimeLogRequest instanceof DownloadRealTimeLogRequest) {
                    jobId = downloadRealTimeLogRequest.jobId;
                    buildNo = downloadRealTimeLogRequest.buildNo;
                    offset = downloadRealTimeLogRequest.offset;
                    length = downloadRealTimeLogRequest.length;
                } else {
                    jobId = downloadRealTimeLogRequest['job_id'];
                    buildNo = downloadRealTimeLogRequest['build_no'];
                    offset = downloadRealTimeLogRequest['offset'];
                    length = downloadRealTimeLogRequest['length'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling downloadRealTimeLog.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling downloadRealTimeLog.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling downloadRealTimeLog.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (length !== null && length !== undefined) {
                localVarQueryParameter['length'] = length;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载构建步骤日志
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadTaskLog(downloadTaskLogRequest?: DownloadTaskLogRequest) {
            const options = {
                method: "GET",
                url: "/v4/{record_id}/task-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let recordId;
            
            let taskName;
            
            let logLevel;

            if (downloadTaskLogRequest !== null && downloadTaskLogRequest !== undefined) {
                if (downloadTaskLogRequest instanceof DownloadTaskLogRequest) {
                    recordId = downloadTaskLogRequest.recordId;
                    taskName = downloadTaskLogRequest.taskName;
                    logLevel = downloadTaskLogRequest.logLevel;
                } else {
                    recordId = downloadTaskLogRequest['record_id'];
                    taskName = downloadTaskLogRequest['task_name'];
                    logLevel = downloadTaskLogRequest['log_level'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling downloadTaskLog.');
            }
            if (taskName === null || taskName === undefined) {
                throw new RequiredError('taskName','Required parameter taskName was null or undefined when calling downloadTaskLog.');
            }
            if (taskName !== null && taskName !== undefined) {
                localVarQueryParameter['task_name'] = taskName;
            }
            if (logLevel !== null && logLevel !== undefined) {
                localVarQueryParameter['log_level'] = logLevel;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableBuildJob(enableBuildJobRequest?: EnableBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/recover",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (enableBuildJobRequest !== null && enableBuildJobRequest !== undefined) {
                if (enableBuildJobRequest instanceof EnableBuildJobRequest) {
                    jobId = enableBuildJobRequest.jobId;
                } else {
                    jobId = enableBuildJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling enableBuildJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务构建记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBuildInfoRecord(listBuildInfoRecordRequest?: ListBuildInfoRecordRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/build-info-records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let startTime;
            
            let endTime;
            
            let pageIndex;
            
            let pageSize;

            if (listBuildInfoRecordRequest !== null && listBuildInfoRecordRequest !== undefined) {
                if (listBuildInfoRecordRequest instanceof ListBuildInfoRecordRequest) {
                    jobId = listBuildInfoRecordRequest.jobId;
                    startTime = listBuildInfoRecordRequest.startTime;
                    endTime = listBuildInfoRecordRequest.endTime;
                    pageIndex = listBuildInfoRecordRequest.pageIndex;
                    pageSize = listBuildInfoRecordRequest.pageSize;
                } else {
                    jobId = listBuildInfoRecordRequest['job_id'];
                    startTime = listBuildInfoRecordRequest['start_time'];
                    endTime = listBuildInfoRecordRequest['end_time'];
                    pageIndex = listBuildInfoRecordRequest['page_index'];
                    pageSize = listBuildInfoRecordRequest['page_size'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listBuildInfoRecord.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listBuildInfoRecord.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listBuildInfoRecord.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJobConfig(listJobConfigRequest?: ListJobConfigRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let getAllParams;

            if (listJobConfigRequest !== null && listJobConfigRequest !== undefined) {
                if (listJobConfigRequest instanceof ListJobConfigRequest) {
                    jobId = listJobConfigRequest.jobId;
                    getAllParams = listJobConfigRequest.getAllParams;
                } else {
                    jobId = listJobConfigRequest['job_id'];
                    getAllParams = listJobConfigRequest['get_all_params'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listJobConfig.');
            }
            if (getAllParams !== null && getAllParams !== undefined) {
                localVarQueryParameter['get_all_params'] = getAllParams;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询通知
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listNotice(listNoticeRequest?: ListNoticeRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/notice/{job_id}/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (listNoticeRequest !== null && listNoticeRequest !== undefined) {
                if (listNoticeRequest instanceof ListNoticeRequest) {
                    jobId = listNoticeRequest.jobId;
                } else {
                    jobId = listNoticeRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listNotice.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询构建模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplates(listTemplatesRequest?: ListTemplatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/templates/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let page;
            
            let pageSize;

            if (listTemplatesRequest !== null && listTemplatesRequest !== undefined) {
                if (listTemplatesRequest instanceof ListTemplatesRequest) {
                    name = listTemplatesRequest.name;
                    page = listTemplatesRequest.page;
                    pageSize = listTemplatesRequest.pageSize;
                } else {
                    name = listTemplatesRequest['name'];
                    page = listTemplatesRequest['page'];
                    pageSize = listTemplatesRequest['page_size'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行构建任务,可传自定义参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        runJob(runJobRequest?: RunJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/build",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (runJobRequest !== null && runJobRequest !== undefined) {
                if (runJobRequest instanceof RunJobRequest) {
                    body = runJobRequest.body
                } else {
                    body = runJobRequest['body'];
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
         * 获取构建历史详情信息接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showHistoryDetails(showHistoryDetailsRequest?: ShowHistoryDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/{build_number}/history-details",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNumber;

            if (showHistoryDetailsRequest !== null && showHistoryDetailsRequest !== undefined) {
                if (showHistoryDetailsRequest instanceof ShowHistoryDetailsRequest) {
                    jobId = showHistoryDetailsRequest.jobId;
                    buildNumber = showHistoryDetailsRequest.buildNumber;
                } else {
                    jobId = showHistoryDetailsRequest['job_id'];
                    buildNumber = showHistoryDetailsRequest['build_number'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showHistoryDetails.');
            }
            if (buildNumber === null || buildNumber === undefined) {
            throw new RequiredError('buildNumber','Required parameter buildNumber was null or undefined when calling showHistoryDetails.');
            }

            options.pathParams = { 'job_id': jobId,'build_number': buildNumber, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看项目下用户的构建任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobListByProjectId(showJobListByProjectIdRequest?: ShowJobListByProjectIdRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let pageIndex;
            
            let pageSize;

            if (showJobListByProjectIdRequest !== null && showJobListByProjectIdRequest !== undefined) {
                if (showJobListByProjectIdRequest instanceof ShowJobListByProjectIdRequest) {
                    projectId = showJobListByProjectIdRequest.projectId;
                    pageIndex = showJobListByProjectIdRequest.pageIndex;
                    pageSize = showJobListByProjectIdRequest.pageSize;
                } else {
                    projectId = showJobListByProjectIdRequest['project_id'];
                    pageIndex = showJobListByProjectIdRequest['page_index'];
                    pageSize = showJobListByProjectIdRequest['page_size'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showJobListByProjectId.');
            }
            if (pageIndex === null || pageIndex === undefined) {
                throw new RequiredError('pageIndex','Required parameter pageIndex was null or undefined when calling showJobListByProjectId.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling showJobListByProjectId.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看任务运行状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobStatus(showJobStatusRequest?: ShowJobStatusRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobStatusRequest !== null && showJobStatusRequest !== undefined) {
                if (showJobStatusRequest instanceof ShowJobStatusRequest) {
                    jobId = showJobStatusRequest.jobId;
                } else {
                    jobId = showJobStatusRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobStatus.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据开始时间和结束时间查看构建任务的构建成功率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobSuccessRatio(showJobSuccessRatioRequest?: ShowJobSuccessRatioRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/success-ratio",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let startTime;
            
            let endTime;

            if (showJobSuccessRatioRequest !== null && showJobSuccessRatioRequest !== undefined) {
                if (showJobSuccessRatioRequest instanceof ShowJobSuccessRatioRequest) {
                    jobId = showJobSuccessRatioRequest.jobId;
                    startTime = showJobSuccessRatioRequest.startTime;
                    endTime = showJobSuccessRatioRequest.endTime;
                } else {
                    jobId = showJobSuccessRatioRequest['job_id'];
                    startTime = showJobSuccessRatioRequest['start_time'];
                    endTime = showJobSuccessRatioRequest['end_time'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobSuccessRatio.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showJobSuccessRatio.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showJobSuccessRatio.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定代码仓库最近一次成功的构建历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLastHistory(showLastHistoryRequest?: ShowLastHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{project_id}/last-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let repositoryName;

            if (showLastHistoryRequest !== null && showLastHistoryRequest !== undefined) {
                if (showLastHistoryRequest instanceof ShowLastHistoryRequest) {
                    projectId = showLastHistoryRequest.projectId;
                    repositoryName = showLastHistoryRequest.repositoryName;
                } else {
                    projectId = showLastHistoryRequest['project_id'];
                    repositoryName = showLastHistoryRequest['repository_name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showLastHistory.');
            }
            if (repositoryName === null || repositoryName === undefined) {
                throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showLastHistory.');
            }
            if (repositoryName !== null && repositoryName !== undefined) {
                localVarQueryParameter['repository_name'] = repositoryName;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看构建任务的构建历史列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListHistory(showListHistoryRequest?: ShowListHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let offset;
            
            let limit;
            
            let interval;

            if (showListHistoryRequest !== null && showListHistoryRequest !== undefined) {
                if (showListHistoryRequest instanceof ShowListHistoryRequest) {
                    jobId = showListHistoryRequest.jobId;
                    offset = showListHistoryRequest.offset;
                    limit = showListHistoryRequest.limit;
                    interval = showListHistoryRequest.interval;
                } else {
                    jobId = showListHistoryRequest['job_id'];
                    offset = showListHistoryRequest['offset'];
                    limit = showListHistoryRequest['limit'];
                    interval = showListHistoryRequest['interval'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showListHistory.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showListHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showListHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling showListHistory.');
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据开始时间和结束时间查看构建任务的构建历史列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showListPeriodHistory(showListPeriodHistoryRequest?: ShowListPeriodHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/period-history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let offset;
            
            let limit;
            
            let startTime;
            
            let endTime;

            if (showListPeriodHistoryRequest !== null && showListPeriodHistoryRequest !== undefined) {
                if (showListPeriodHistoryRequest instanceof ShowListPeriodHistoryRequest) {
                    jobId = showListPeriodHistoryRequest.jobId;
                    offset = showListPeriodHistoryRequest.offset;
                    limit = showListPeriodHistoryRequest.limit;
                    startTime = showListPeriodHistoryRequest.startTime;
                    endTime = showListPeriodHistoryRequest.endTime;
                } else {
                    jobId = showListPeriodHistoryRequest['job_id'];
                    offset = showListPeriodHistoryRequest['offset'];
                    limit = showListPeriodHistoryRequest['limit'];
                    startTime = showListPeriodHistoryRequest['start_time'];
                    endTime = showListPeriodHistoryRequest['end_time'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showListPeriodHistory.');
            }
            if (offset === null || offset === undefined) {
                throw new RequiredError('offset','Required parameter offset was null or undefined when calling showListPeriodHistory.');
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling showListPeriodHistory.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling showListPeriodHistory.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling showListPeriodHistory.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建产物详情信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showOutputInfo(showOutputInfoRequest?: ShowOutputInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/{build_no}/output-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (showOutputInfoRequest !== null && showOutputInfoRequest !== undefined) {
                if (showOutputInfoRequest instanceof ShowOutputInfoRequest) {
                    jobId = showOutputInfoRequest.jobId;
                    buildNo = showOutputInfoRequest.buildNo;
                } else {
                    jobId = showOutputInfoRequest['job_id'];
                    buildNo = showOutputInfoRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showOutputInfo.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showOutputInfo.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordDetail(showRecordDetailRequest?: ShowRecordDetailRequest) {
            const options = {
                method: "GET",
                url: "/v4/jobs/{job_id}/{build_no}/record-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (showRecordDetailRequest !== null && showRecordDetailRequest !== undefined) {
                if (showRecordDetailRequest instanceof ShowRecordDetailRequest) {
                    jobId = showRecordDetailRequest.jobId;
                    buildNo = showRecordDetailRequest.buildNo;
                } else {
                    jobId = showRecordDetailRequest['job_id'];
                    buildNo = showRecordDetailRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showRecordDetail.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showRecordDetail.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopBuildJob(stopBuildJobRequest?: StopBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/{job_id}/{build_no}/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (stopBuildJobRequest !== null && stopBuildJobRequest !== undefined) {
                if (stopBuildJobRequest instanceof StopBuildJobRequest) {
                    jobId = stopBuildJobRequest.jobId;
                    buildNo = stopBuildJobRequest.buildNo;
                } else {
                    jobId = stopBuildJobRequest['job_id'];
                    buildNo = stopBuildJobRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling stopBuildJob.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling stopBuildJob.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateBuildJob(updateBuildJobRequest?: UpdateBuildJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateBuildJobRequest !== null && updateBuildJobRequest !== undefined) {
                if (updateBuildJobRequest instanceof UpdateBuildJobRequest) {
                    body = updateBuildJobRequest.body
                } else {
                    body = updateBuildJobRequest['body'];
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
         * 更新通知
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNotice(updateNoticeRequest?: UpdateNoticeRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/notice/{job_id}/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (updateNoticeRequest !== null && updateNoticeRequest !== undefined) {
                if (updateNoticeRequest instanceof UpdateNoticeRequest) {
                    jobId = updateNoticeRequest.jobId;
                    body = updateNoticeRequest.body
                } else {
                    jobId = updateNoticeRequest['job_id'];
                    body = updateNoticeRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling updateNotice.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取项目列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRelatedProjectInfo(listRelatedProjectInfoRequest?: ListRelatedProjectInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/domain/project/related-page",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNo;
            
            let search;

            if (listRelatedProjectInfoRequest !== null && listRelatedProjectInfoRequest !== undefined) {
                if (listRelatedProjectInfoRequest instanceof ListRelatedProjectInfoRequest) {
                    pageSize = listRelatedProjectInfoRequest.pageSize;
                    pageNo = listRelatedProjectInfoRequest.pageNo;
                    search = listRelatedProjectInfoRequest.search;
                } else {
                    pageSize = listRelatedProjectInfoRequest['page_size'];
                    pageNo = listRelatedProjectInfoRequest['page_no'];
                    search = listRelatedProjectInfoRequest['search'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取用户权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectPermission(showProjectPermissionRequest?: ShowProjectPermissionRequest) {
            const options = {
                method: "GET",
                url: "/v1/domain/user-permission",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;

            if (showProjectPermissionRequest !== null && showProjectPermissionRequest !== undefined) {
                if (showProjectPermissionRequest instanceof ShowProjectPermissionRequest) {
                    projectId = showProjectPermissionRequest.projectId;
                } else {
                    projectId = showProjectPermissionRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectPermission.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取当前用户的项目信息列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRelatedProject() {
            const options = {
                method: "GET",
                url: "/v1/domain/project/related",
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
         * 获取租户任务总数和成功率接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSummaryBuildJobInfo() {
            const options = {
                method: "GET",
                url: "/v1/domain/job-summary",
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
         * 当前用户所在项目所属租户的包周期每月时长是否超额
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserOverPackageQuota(showUserOverPackageQuotaRequest?: ShowUserOverPackageQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/domain/package/quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;

            if (showUserOverPackageQuotaRequest !== null && showUserOverPackageQuotaRequest !== undefined) {
                if (showUserOverPackageQuotaRequest instanceof ShowUserOverPackageQuotaRequest) {
                    projectId = showUserOverPackageQuotaRequest.projectId;
                } else {
                    projectId = showUserOverPackageQuotaRequest['project_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showUserOverPackageQuota.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取dockerfileTemplate
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDockerfileTemplate(showDockerfileTemplateRequest?: ShowDockerfileTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/image/dockerfile-template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let imageId;

            if (showDockerfileTemplateRequest !== null && showDockerfileTemplateRequest !== undefined) {
                if (showDockerfileTemplateRequest instanceof ShowDockerfileTemplateRequest) {
                    imageId = showDockerfileTemplateRequest.imageId;
                } else {
                    imageId = showDockerfileTemplateRequest['image_id'];
                }
            }

        
            if (imageId === null || imageId === undefined) {
                throw new RequiredError('imageId','Required parameter imageId was null or undefined when calling showDockerfileTemplate.');
            }
            if (imageId !== null && imageId !== undefined) {
                localVarQueryParameter['image_id'] = imageId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取镜像模板列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showImageTemplateList() {
            const options = {
                method: "GET",
                url: "/v1/image/templates",
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
         * 检查任务数量是否上限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkJobCountIsTopLimit() {
            const options = {
                method: "GET",
                url: "/v1/job/check/count",
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
         * 查看项目下任务名是否存在
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkJobNameIsExists(checkJobNameIsExistsRequest?: CheckJobNameIsExistsRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/check/exist",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let jobName;

            if (checkJobNameIsExistsRequest !== null && checkJobNameIsExistsRequest !== undefined) {
                if (checkJobNameIsExistsRequest instanceof CheckJobNameIsExistsRequest) {
                    projectId = checkJobNameIsExistsRequest.projectId;
                    jobName = checkJobNameIsExistsRequest.jobName;
                } else {
                    projectId = checkJobNameIsExistsRequest['project_id'];
                    jobName = checkJobNameIsExistsRequest['job_name'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling checkJobNameIsExists.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (jobName === null || jobName === undefined) {
                throw new RequiredError('jobName','Required parameter jobName was null or undefined when calling checkJobNameIsExists.');
            }
            if (jobName !== null && jobName !== undefined) {
                localVarQueryParameter['job_name'] = jobName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 检查webhook地址参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        checkWebhookUrl(checkWebhookUrlRequest?: CheckWebhookUrlRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/check/webhook-url",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (checkWebhookUrlRequest !== null && checkWebhookUrlRequest !== undefined) {
                if (checkWebhookUrlRequest instanceof CheckWebhookUrlRequest) {
                    body = checkWebhookUrlRequest.body
                } else {
                    body = checkWebhookUrlRequest['body'];
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
         * 清空回收站中的任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        clearRecyclingJobs() {
            const options = {
                method: "DELETE",
                url: "/v1/job/recycling-empty",
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
         * 复制构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        copyJob(copyJobRequest?: CopyJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/copy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (copyJobRequest !== null && copyJobRequest !== undefined) {
                if (copyJobRequest instanceof CopyJobRequest) {
                    body = copyJobRequest.body
                } else {
                    body = copyJobRequest['body'];
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
         * 创建构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createNewJob(createNewJobRequest?: CreateNewJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createNewJobRequest !== null && createNewJobRequest !== undefined) {
                if (createNewJobRequest instanceof CreateNewJobRequest) {
                    body = createNewJobRequest.body
                } else {
                    body = createNewJobRequest['body'];
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
         * 删除回收站中的任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteRecyclingJobs(deleteRecyclingJobsRequest?: DeleteRecyclingJobsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/job/recycling-deletion",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteRecyclingJobsRequest !== null && deleteRecyclingJobsRequest !== undefined) {
                if (deleteRecyclingJobsRequest instanceof DeleteRecyclingJobsRequest) {
                    body = deleteRecyclingJobsRequest.body
                } else {
                    body = deleteRecyclingJobsRequest['body'];
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
         * 删除任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTheJob(deleteTheJobRequest?: DeleteTheJobRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/job/{job_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (deleteTheJobRequest !== null && deleteTheJobRequest !== undefined) {
                if (deleteTheJobRequest instanceof DeleteTheJobRequest) {
                    jobId = deleteTheJobRequest.jobId;
                } else {
                    jobId = deleteTheJobRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling deleteTheJob.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableTheJob(disableTheJobRequest?: DisableTheJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/{job_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let jobId;

            if (disableTheJobRequest !== null && disableTheJobRequest !== undefined) {
                if (disableTheJobRequest instanceof DisableTheJobRequest) {
                    jobId = disableTheJobRequest.jobId;
                    body = disableTheJobRequest.body
                } else {
                    jobId = disableTheJobRequest['job_id'];
                    body = disableTheJobRequest['body'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling disableTheJob.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 执行构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        executeJob(executeJobRequest?: ExecuteJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/execute",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (executeJobRequest !== null && executeJobRequest !== undefined) {
                if (executeJobRequest instanceof ExecuteJobRequest) {
                    body = executeJobRequest.body
                } else {
                    body = executeJobRequest['body'];
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
         * 详情页获取构建参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBuildParameter(listBuildParameterRequest?: ListBuildParameterRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/{build_no}/history-parameters",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (listBuildParameterRequest !== null && listBuildParameterRequest !== undefined) {
                if (listBuildParameterRequest instanceof ListBuildParameterRequest) {
                    jobId = listBuildParameterRequest.jobId;
                    buildNo = listBuildParameterRequest.buildNo;
                } else {
                    jobId = listBuildParameterRequest['job_id'];
                    buildNo = listBuildParameterRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listBuildParameter.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling listBuildParameter.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看用户全部的构建任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJob() {
            const options = {
                method: "GET",
                url: "/v1/job/list",
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
         * 查询项目任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listProjectJobs(listProjectJobsRequest?: ListProjectJobsRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{project_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let pageIndex;
            
            let pageSize;
            
            let search;
            
            let sortField;
            
            let sortOrder;
            
            let creatorId;
            
            let buildStatus;
            
            let byGroup;
            
            let groupPathId;

            if (listProjectJobsRequest !== null && listProjectJobsRequest !== undefined) {
                if (listProjectJobsRequest instanceof ListProjectJobsRequest) {
                    projectId = listProjectJobsRequest.projectId;
                    pageIndex = listProjectJobsRequest.pageIndex;
                    pageSize = listProjectJobsRequest.pageSize;
                    search = listProjectJobsRequest.search;
                    sortField = listProjectJobsRequest.sortField;
                    sortOrder = listProjectJobsRequest.sortOrder;
                    creatorId = listProjectJobsRequest.creatorId;
                    buildStatus = listProjectJobsRequest.buildStatus;
                    byGroup = listProjectJobsRequest.byGroup;
                    groupPathId = listProjectJobsRequest.groupPathId;
                } else {
                    projectId = listProjectJobsRequest['project_id'];
                    pageIndex = listProjectJobsRequest['page_index'];
                    pageSize = listProjectJobsRequest['page_size'];
                    search = listProjectJobsRequest['search'];
                    sortField = listProjectJobsRequest['sort_field'];
                    sortOrder = listProjectJobsRequest['sort_order'];
                    creatorId = listProjectJobsRequest['creator_id'];
                    buildStatus = listProjectJobsRequest['build_status'];
                    byGroup = listProjectJobsRequest['by_group'];
                    groupPathId = listProjectJobsRequest['group_path_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
            throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling listProjectJobs.');
            }
            if (pageIndex === null || pageIndex === undefined) {
                throw new RequiredError('pageIndex','Required parameter pageIndex was null or undefined when calling listProjectJobs.');
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling listProjectJobs.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }
            if (sortField !== null && sortField !== undefined) {
                localVarQueryParameter['sort_field'] = sortField;
            }
            if (sortOrder !== null && sortOrder !== undefined) {
                localVarQueryParameter['sort_order'] = sortOrder;
            }
            if (creatorId !== null && creatorId !== undefined) {
                localVarQueryParameter['creator_id'] = creatorId;
            }
            if (buildStatus !== null && buildStatus !== undefined) {
                localVarQueryParameter['build_status'] = buildStatus;
            }
            if (byGroup !== null && byGroup !== undefined) {
                localVarQueryParameter['by_group'] = byGroup;
            }
            if (groupPathId !== null && groupPathId !== undefined) {
                localVarQueryParameter['group_path_id'] = groupPathId;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'project_id': projectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看回收站中删除的构建任务列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecyclingJob(listRecyclingJobRequest?: ListRecyclingJobRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/recycling-jobs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let pageNo;
            
            let search;

            if (listRecyclingJobRequest !== null && listRecyclingJobRequest !== undefined) {
                if (listRecyclingJobRequest instanceof ListRecyclingJobRequest) {
                    pageSize = listRecyclingJobRequest.pageSize;
                    pageNo = listRecyclingJobRequest.pageNo;
                    search = listRecyclingJobRequest.search;
                } else {
                    pageSize = listRecyclingJobRequest['page_size'];
                    pageNo = listRecyclingJobRequest['page_no'];
                    search = listRecyclingJobRequest['search'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取修改历史
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listUpdateJobHistory(listUpdateJobHistoryRequest?: ListUpdateJobHistoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/history",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let pageNo;
            
            let pageSize;

            if (listUpdateJobHistoryRequest !== null && listUpdateJobHistoryRequest !== undefined) {
                if (listUpdateJobHistoryRequest instanceof ListUpdateJobHistoryRequest) {
                    jobId = listUpdateJobHistoryRequest.jobId;
                    pageNo = listUpdateJobHistoryRequest.pageNo;
                    pageSize = listUpdateJobHistoryRequest.pageSize;
                } else {
                    jobId = listUpdateJobHistoryRequest['job_id'];
                    pageNo = listUpdateJobHistoryRequest['page_no'];
                    pageSize = listUpdateJobHistoryRequest['page_size'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listUpdateJobHistory.');
            }
            if (pageNo !== null && pageNo !== undefined) {
                localVarQueryParameter['page_no'] = pageNo;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复回收站中的任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreRecyclingJobs(restoreRecyclingJobsRequest?: RestoreRecyclingJobsRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/recycling-restoration",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (restoreRecyclingJobsRequest !== null && restoreRecyclingJobsRequest !== undefined) {
                if (restoreRecyclingJobsRequest instanceof RestoreRecyclingJobsRequest) {
                    body = restoreRecyclingJobsRequest.body
                } else {
                    body = restoreRecyclingJobsRequest['body'];
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
         * 设置回收站中的任务保留时间,该接口需要租户账号才能访问，租户子账号无权限访问。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        setKeepTime(setKeepTimeRequest?: SetKeepTimeRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/keep-time",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (setKeepTimeRequest !== null && setKeepTimeRequest !== undefined) {
                if (setKeepTimeRequest instanceof SetKeepTimeRequest) {
                    body = setKeepTimeRequest.body
                } else {
                    body = setKeepTimeRequest['body'];
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
         * 编辑页获取参数类型的接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuildParamsList() {
            const options = {
                method: "GET",
                url: "/v1/job/build-params",
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
         * 复制任务名
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCopyName(showCopyNameRequest?: ShowCopyNameRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/copy-name",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showCopyNameRequest !== null && showCopyNameRequest !== undefined) {
                if (showCopyNameRequest instanceof ShowCopyNameRequest) {
                    jobId = showCopyNameRequest.jobId;
                } else {
                    jobId = showCopyNameRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showCopyName.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取编译构建默认参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDefaultBuildParameters() {
            const options = {
                method: "GET",
                url: "/v1/job/default-parameters",
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
         * 获取当前项目默认角色权限矩阵信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDefaultProjectPermission(showDefaultProjectPermissionRequest?: ShowDefaultProjectPermissionRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/project/default-permission",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let jobId;

            if (showDefaultProjectPermissionRequest !== null && showDefaultProjectPermissionRequest !== undefined) {
                if (showDefaultProjectPermissionRequest instanceof ShowDefaultProjectPermissionRequest) {
                    projectId = showDefaultProjectPermissionRequest.projectId;
                    jobId = showDefaultProjectPermissionRequest.jobId;
                } else {
                    projectId = showDefaultProjectPermissionRequest['project_id'];
                    jobId = showDefaultProjectPermissionRequest['job_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showDefaultProjectPermission.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDefaultProjectPermission.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务是否已禁用
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showDisable(showDisableRequest?: ShowDisableRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/check/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showDisableRequest !== null && showDisableRequest !== undefined) {
                if (showDisableRequest instanceof ShowDisableRequest) {
                    jobId = showDisableRequest.jobId;
                } else {
                    jobId = showDisableRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showDisable.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建任务详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobConfig(showJobConfigRequest?: ShowJobConfigRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/config",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let getAllParams;

            if (showJobConfigRequest !== null && showJobConfigRequest !== undefined) {
                if (showJobConfigRequest instanceof ShowJobConfigRequest) {
                    jobId = showJobConfigRequest.jobId;
                    getAllParams = showJobConfigRequest.getAllParams;
                } else {
                    jobId = showJobConfigRequest['job_id'];
                    getAllParams = showJobConfigRequest['get_all_params'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobConfig.');
            }
            if (getAllParams !== null && getAllParams !== undefined) {
                localVarQueryParameter['get_all_params'] = getAllParams;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建任务配置的对比差异
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobConfigDiff(showJobConfigDiffRequest?: ShowJobConfigDiffRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/diff",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let revisedlNo;
            
            let originalNo;

            if (showJobConfigDiffRequest !== null && showJobConfigDiffRequest !== undefined) {
                if (showJobConfigDiffRequest instanceof ShowJobConfigDiffRequest) {
                    jobId = showJobConfigDiffRequest.jobId;
                    revisedlNo = showJobConfigDiffRequest.revisedlNo;
                    originalNo = showJobConfigDiffRequest.originalNo;
                } else {
                    jobId = showJobConfigDiffRequest['job_id'];
                    revisedlNo = showJobConfigDiffRequest['revisedl_no'];
                    originalNo = showJobConfigDiffRequest['original_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobConfigDiff.');
            }
            if (revisedlNo === null || revisedlNo === undefined) {
                throw new RequiredError('revisedlNo','Required parameter revisedlNo was null or undefined when calling showJobConfigDiff.');
            }
            if (revisedlNo !== null && revisedlNo !== undefined) {
                localVarQueryParameter['revisedl_no'] = revisedlNo;
            }
            if (originalNo === null || originalNo === undefined) {
                throw new RequiredError('originalNo','Required parameter originalNo was null or undefined when calling showJobConfigDiff.');
            }
            if (originalNo !== null && originalNo !== undefined) {
                localVarQueryParameter['original_no'] = originalNo;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看构建任务构建信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobInfo(showJobInfoRequest?: ShowJobInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobInfoRequest !== null && showJobInfoRequest !== undefined) {
                if (showJobInfoRequest instanceof ShowJobInfoRequest) {
                    jobId = showJobInfoRequest.jobId;
                } else {
                    jobId = showJobInfoRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobInfo.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取通知信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobNoticeConfigInfo(showJobNoticeConfigInfoRequest?: ShowJobNoticeConfigInfoRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/notice",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showJobNoticeConfigInfoRequest !== null && showJobNoticeConfigInfoRequest !== undefined) {
                if (showJobNoticeConfigInfoRequest instanceof ShowJobNoticeConfigInfoRequest) {
                    jobId = showJobNoticeConfigInfoRequest.jobId;
                } else {
                    jobId = showJobNoticeConfigInfoRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobNoticeConfigInfo.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建任务的角色权限矩阵信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobRolePermission(showJobRolePermissionRequest?: ShowJobRolePermissionRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/permission/role",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;

            if (showJobRolePermissionRequest !== null && showJobRolePermissionRequest !== undefined) {
                if (showJobRolePermissionRequest instanceof ShowJobRolePermissionRequest) {
                    jobId = showJobRolePermissionRequest.jobId;
                } else {
                    jobId = showJobRolePermissionRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobRolePermission.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询任务状态
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobStepStatus(showJobStepStatusRequest?: ShowJobStepStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let buildNo;

            if (showJobStepStatusRequest !== null && showJobStepStatusRequest !== undefined) {
                if (showJobStepStatusRequest instanceof ShowJobStepStatusRequest) {
                    jobId = showJobStepStatusRequest.jobId;
                    buildNo = showJobStepStatusRequest.buildNo;
                } else {
                    jobId = showJobStepStatusRequest['job_id'];
                    buildNo = showJobStepStatusRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobStepStatus.');
            }
            if (buildNo !== null && buildNo !== undefined) {
                localVarQueryParameter['build_no'] = buildNo;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看系统预定义参数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobSystemParameters() {
            const options = {
                method: "GET",
                url: "/v1/job/system-parameters",
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
         * 获取任务权限矩阵
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showProjectJobPermission(showProjectJobPermissionRequest?: ShowProjectJobPermissionRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/permission",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let projectId;
            
            let jobId;

            if (showProjectJobPermissionRequest !== null && showProjectJobPermissionRequest !== undefined) {
                if (showProjectJobPermissionRequest instanceof ShowProjectJobPermissionRequest) {
                    projectId = showProjectJobPermissionRequest.projectId;
                    jobId = showProjectJobPermissionRequest.jobId;
                } else {
                    projectId = showProjectJobPermissionRequest['project_id'];
                    jobId = showProjectJobPermissionRequest['job_id'];
                }
            }

        
            if (projectId === null || projectId === undefined) {
                throw new RequiredError('projectId','Required parameter projectId was null or undefined when calling showProjectJobPermission.');
            }
            if (projectId !== null && projectId !== undefined) {
                localVarQueryParameter['project_id'] = projectId;
            }
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showProjectJobPermission.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看任务是否在构建
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRunningStatus(showRunningStatusRequest?: ShowRunningStatusRequest) {
            const options = {
                method: "GET",
                url: "/v1/job/{job_id}/running-status",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (showRunningStatusRequest !== null && showRunningStatusRequest !== undefined) {
                if (showRunningStatusRequest instanceof ShowRunningStatusRequest) {
                    jobId = showRunningStatusRequest.jobId;
                } else {
                    jobId = showRunningStatusRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showRunningStatus.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新构建任务
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateNewJob(updateNewJobRequest?: UpdateNewJobRequest) {
            const options = {
                method: "POST",
                url: "/v1/job/update",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateNewJobRequest !== null && updateNewJobRequest !== undefined) {
                if (updateNewJobRequest instanceof UpdateNewJobRequest) {
                    body = updateNewJobRequest.body
                } else {
                    body = updateNewJobRequest['body'];
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
         * 删除文件管理文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKeystore(deleteKeystoreRequest?: DeleteKeystoreRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/keystore/{keystore_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keystoreId;

            if (deleteKeystoreRequest !== null && deleteKeystoreRequest !== undefined) {
                if (deleteKeystoreRequest instanceof DeleteKeystoreRequest) {
                    keystoreId = deleteKeystoreRequest.keystoreId;
                } else {
                    keystoreId = deleteKeystoreRequest['keystore_id'];
                }
            }

        
            if (keystoreId === null || keystoreId === undefined) {
            throw new RequiredError('keystoreId','Required parameter keystoreId was null or undefined when calling deleteKeystore.');
            }

            options.pathParams = { 'keystore_id': keystoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 文件管理删除权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKeystorePermission(deleteKeystorePermissionRequest?: DeleteKeystorePermissionRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/keystore/permission/{permission_id}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let permissionId;

            if (deleteKeystorePermissionRequest !== null && deleteKeystorePermissionRequest !== undefined) {
                if (deleteKeystorePermissionRequest instanceof DeleteKeystorePermissionRequest) {
                    permissionId = deleteKeystorePermissionRequest.permissionId;
                } else {
                    permissionId = deleteKeystorePermissionRequest['permission_id'];
                }
            }

        
            if (permissionId === null || permissionId === undefined) {
            throw new RequiredError('permissionId','Required parameter permissionId was null or undefined when calling deleteKeystorePermission.');
            }

            options.pathParams = { 'permission_id': permissionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 文件管理文件下载
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadKeystoreByName(downloadKeystoreByNameRequest?: DownloadKeystoreByNameRequest) {
            const options = {
                method: "GET",
                url: "/v2/keystore/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let domainId;
            
            let id;

            if (downloadKeystoreByNameRequest !== null && downloadKeystoreByNameRequest !== undefined) {
                if (downloadKeystoreByNameRequest instanceof DownloadKeystoreByNameRequest) {
                    name = downloadKeystoreByNameRequest.name;
                    domainId = downloadKeystoreByNameRequest.domainId;
                    id = downloadKeystoreByNameRequest.id;
                } else {
                    name = downloadKeystoreByNameRequest['name'];
                    domainId = downloadKeystoreByNameRequest['domain_id'];
                    id = downloadKeystoreByNameRequest['id'];
                }
            }

        
            if (name === null || name === undefined) {
                throw new RequiredError('name','Required parameter name was null or undefined when calling downloadKeystoreByName.');
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (domainId === null || domainId === undefined) {
                throw new RequiredError('domainId','Required parameter domainId was null or undefined when calling downloadKeystoreByName.');
            }
            if (domainId !== null && domainId !== undefined) {
                localVarQueryParameter['domain_id'] = domainId;
            }
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling downloadKeystoreByName.');
            }
            if (id !== null && id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询用户可使用文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeystore() {
            const options = {
                method: "GET",
                url: "/v2/keystore/name",
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
         * 查询租户下文件列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeystoreSearch(listKeystoreSearchRequest?: ListKeystoreSearchRequest) {
            const options = {
                method: "GET",
                url: "/v2/keystore/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let pageSize;
            
            let page;
            
            let search;

            if (listKeystoreSearchRequest !== null && listKeystoreSearchRequest !== undefined) {
                if (listKeystoreSearchRequest instanceof ListKeystoreSearchRequest) {
                    pageSize = listKeystoreSearchRequest.pageSize;
                    page = listKeystoreSearchRequest.page;
                    search = listKeystoreSearchRequest.search;
                } else {
                    pageSize = listKeystoreSearchRequest['page_size'];
                    page = listKeystoreSearchRequest['page'];
                    search = listKeystoreSearchRequest['search'];
                }
            }

        
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (search !== null && search !== undefined) {
                localVarQueryParameter['search'] = search;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 文件管理查询权限
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKeystorePermission(showKeystorePermissionRequest?: ShowKeystorePermissionRequest) {
            const options = {
                method: "GET",
                url: "/v2/keystore/permission/{keystore_id}/query",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let keystoreId;
            
            let pageSize;
            
            let page;

            if (showKeystorePermissionRequest !== null && showKeystorePermissionRequest !== undefined) {
                if (showKeystorePermissionRequest instanceof ShowKeystorePermissionRequest) {
                    keystoreId = showKeystorePermissionRequest.keystoreId;
                    pageSize = showKeystorePermissionRequest.pageSize;
                    page = showKeystorePermissionRequest.page;
                } else {
                    keystoreId = showKeystorePermissionRequest['keystore_id'];
                    pageSize = showKeystorePermissionRequest['page_size'];
                    page = showKeystorePermissionRequest['page'];
                }
            }

        
            if (keystoreId === null || keystoreId === undefined) {
            throw new RequiredError('keystoreId','Required parameter keystoreId was null or undefined when calling showKeystorePermission.');
            }
            if (pageSize === null || pageSize === undefined) {
                throw new RequiredError('pageSize','Required parameter pageSize was null or undefined when calling showKeystorePermission.');
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling showKeystorePermission.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'keystore_id': keystoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新文件信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeystore(updateKeystoreRequest?: UpdateKeystoreRequest) {
            const options = {
                method: "POST",
                url: "/v2/keystore/update/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateKeystoreRequest !== null && updateKeystoreRequest !== undefined) {
                if (updateKeystoreRequest instanceof UpdateKeystoreRequest) {
                    id = updateKeystoreRequest.id;
                    body = updateKeystoreRequest.body
                } else {
                    id = updateKeystoreRequest['id'];
                    body = updateKeystoreRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateKeystore.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传文件
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadKeystore(uploadKeystoreRequest?: UploadKeystoreRequest) {
            const options = {
                method: "POST",
                url: "/v2/keystore/upload",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            const localVarFormParams = new FormData();
            let file;
            
            let privacy;
            
            let description;
            

            if (uploadKeystoreRequest !== null && uploadKeystoreRequest !== undefined) {
                if (uploadKeystoreRequest instanceof UploadKeystoreRequest) {
                    file = uploadKeystoreRequest.body?.file;
                    privacy = uploadKeystoreRequest.body?.privacy;
                    description = uploadKeystoreRequest.body?.description;
                } else {
                    file = uploadKeystoreRequest['body']['file'];
                    privacy = uploadKeystoreRequest['body']['privacy'];
                    description = uploadKeystoreRequest['body']['description'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadKeystore.');
            }
            if (privacy === null || privacy === undefined) {
            throw new RequiredError('privacy','Required parameter privacy was null or undefined when calling uploadKeystore.');
            }
            if (privacy !== undefined) { 
                localVarFormParams.append('privacy', privacy as any);
            }
            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 下载构建日志(待下线)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadLogByRecordId(downloadLogByRecordIdRequest?: DownloadLogByRecordIdRequest) {
            const options = {
                method: "GET",
                url: "/v3/{record_id}/download-log",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let recordId;

            if (downloadLogByRecordIdRequest !== null && downloadLogByRecordIdRequest !== undefined) {
                if (downloadLogByRecordIdRequest instanceof DownloadLogByRecordIdRequest) {
                    recordId = downloadLogByRecordIdRequest.recordId;
                } else {
                    recordId = downloadLogByRecordIdRequest['record_id'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling downloadLogByRecordId.');
            }

            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录的有向无环图(待下线)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFlowGraph(showFlowGraphRequest?: ShowFlowGraphRequest) {
            const options = {
                method: "GET",
                url: "/v3/{build_flow_record_id}/flow-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let buildFlowRecordId;

            if (showFlowGraphRequest !== null && showFlowGraphRequest !== undefined) {
                if (showFlowGraphRequest instanceof ShowFlowGraphRequest) {
                    buildFlowRecordId = showFlowGraphRequest.buildFlowRecordId;
                } else {
                    buildFlowRecordId = showFlowGraphRequest['build_flow_record_id'];
                }
            }

        
            if (buildFlowRecordId === null || buildFlowRecordId === undefined) {
            throw new RequiredError('buildFlowRecordId','Required parameter buildFlowRecordId was null or undefined when calling showFlowGraph.');
            }

            options.pathParams = { 'build_flow_record_id': buildFlowRecordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录信息(待下线)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showRecordInfo(showRecordInfoRequest?: ShowRecordInfoRequest) {
            const options = {
                method: "GET",
                url: "/v3/jobs/{job_id}/{build_no}/record-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (showRecordInfoRequest !== null && showRecordInfoRequest !== undefined) {
                if (showRecordInfoRequest instanceof ShowRecordInfoRequest) {
                    jobId = showRecordInfoRequest.jobId;
                    buildNo = showRecordInfoRequest.buildNo;
                } else {
                    jobId = showRecordInfoRequest['job_id'];
                    buildNo = showRecordInfoRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showRecordInfo.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showRecordInfo.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 停止构建任务(待下线)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        stopJob(stopJobRequest?: StopJobRequest) {
            const options = {
                method: "POST",
                url: "/v3/jobs/stop",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (stopJobRequest !== null && stopJobRequest !== undefined) {
                if (stopJobRequest instanceof StopJobRequest) {
                    body = stopJobRequest.body
                } else {
                    body = stopJobRequest['body'];
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
         * 获取指定工程的简要构建信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBriefRecord(listBriefRecordRequest?: ListBriefRecordRequest) {
            const options = {
                method: "POST",
                url: "/v1/record/brief",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            let body: any;
            
            let limit;

            if (listBriefRecordRequest !== null && listBriefRecordRequest !== undefined) {
                if (listBriefRecordRequest instanceof ListBriefRecordRequest) {
                    limit = listBriefRecordRequest.limit;
                    body = listBriefRecordRequest.body
                } else {
                    limit = listBriefRecordRequest['limit'];
                    body = listBriefRecordRequest['body'];
                }
            }

        
            if (limit === null || limit === undefined) {
                throw new RequiredError('limit','Required parameter limit was null or undefined when calling listBriefRecord.');
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务构建记录列表v1
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listBuildInfoRecordByJobId(listBuildInfoRecordByJobIdRequest?: ListBuildInfoRecordByJobIdRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{job_id}/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let startTime;
            
            let endTime;
            
            let pageIndex;
            
            let pageSize;

            if (listBuildInfoRecordByJobIdRequest !== null && listBuildInfoRecordByJobIdRequest !== undefined) {
                if (listBuildInfoRecordByJobIdRequest instanceof ListBuildInfoRecordByJobIdRequest) {
                    jobId = listBuildInfoRecordByJobIdRequest.jobId;
                    startTime = listBuildInfoRecordByJobIdRequest.startTime;
                    endTime = listBuildInfoRecordByJobIdRequest.endTime;
                    pageIndex = listBuildInfoRecordByJobIdRequest.pageIndex;
                    pageSize = listBuildInfoRecordByJobIdRequest.pageSize;
                } else {
                    jobId = listBuildInfoRecordByJobIdRequest['job_id'];
                    startTime = listBuildInfoRecordByJobIdRequest['start_time'];
                    endTime = listBuildInfoRecordByJobIdRequest['end_time'];
                    pageIndex = listBuildInfoRecordByJobIdRequest['page_index'];
                    pageSize = listBuildInfoRecordByJobIdRequest['page_size'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listBuildInfoRecordByJobId.');
            }
            if (startTime === null || startTime === undefined) {
                throw new RequiredError('startTime','Required parameter startTime was null or undefined when calling listBuildInfoRecordByJobId.');
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime === null || endTime === undefined) {
                throw new RequiredError('endTime','Required parameter endTime was null or undefined when calling listBuildInfoRecordByJobId.');
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (pageIndex !== null && pageIndex !== undefined) {
                localVarQueryParameter['page_index'] = pageIndex;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取指定工程的构建记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecords(listRecordsRequest?: ListRecordsRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{build_project_id}/records",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let buildProjectId;
            
            let page;
            
            let limit;
            
            let triggers;
            
            let branches;
            
            let tags;
            
            let fromDate;
            
            let toDate;

            if (listRecordsRequest !== null && listRecordsRequest !== undefined) {
                if (listRecordsRequest instanceof ListRecordsRequest) {
                    buildProjectId = listRecordsRequest.buildProjectId;
                    page = listRecordsRequest.page;
                    limit = listRecordsRequest.limit;
                    triggers = listRecordsRequest.triggers;
                    branches = listRecordsRequest.branches;
                    tags = listRecordsRequest.tags;
                    fromDate = listRecordsRequest.fromDate;
                    toDate = listRecordsRequest.toDate;
                } else {
                    buildProjectId = listRecordsRequest['build_project_id'];
                    page = listRecordsRequest['page'];
                    limit = listRecordsRequest['limit'];
                    triggers = listRecordsRequest['triggers'];
                    branches = listRecordsRequest['branches'];
                    tags = listRecordsRequest['tags'];
                    fromDate = listRecordsRequest['from_date'];
                    toDate = listRecordsRequest['to_date'];
                }
            }

        
            if (buildProjectId === null || buildProjectId === undefined) {
            throw new RequiredError('buildProjectId','Required parameter buildProjectId was null or undefined when calling listRecords.');
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (triggers !== null && triggers !== undefined) {
                localVarQueryParameter['triggers'] = triggers;
            }
            if (branches !== null && branches !== undefined) {
                localVarQueryParameter['branches'] = branches;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }
            if (fromDate !== null && fromDate !== undefined) {
                localVarQueryParameter['from_date'] = fromDate;
            }
            if (toDate !== null && toDate !== undefined) {
                localVarQueryParameter['to_date'] = toDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'build_project_id': buildProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务构建记录列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuildInfoRecord(showBuildInfoRecordRequest?: ShowBuildInfoRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{job_id}/{build_no}/build-info-record",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (showBuildInfoRecordRequest !== null && showBuildInfoRecordRequest !== undefined) {
                if (showBuildInfoRecordRequest instanceof ShowBuildInfoRecordRequest) {
                    jobId = showBuildInfoRecordRequest.jobId;
                    buildNo = showBuildInfoRecordRequest.buildNo;
                } else {
                    jobId = showBuildInfoRecordRequest['job_id'];
                    buildNo = showBuildInfoRecordRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showBuildInfoRecord.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showBuildInfoRecord.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定构建记录详情
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuildRecord(showBuildRecordRequest?: ShowBuildRecordRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{record_id}/info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let recordId;

            if (showBuildRecordRequest !== null && showBuildRecordRequest !== undefined) {
                if (showBuildRecordRequest instanceof ShowBuildRecordRequest) {
                    recordId = showBuildRecordRequest.recordId;
                } else {
                    recordId = showBuildRecordRequest['record_id'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling showBuildRecord.');
            }

            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录的构建脚本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuildRecordBuildScript(showBuildRecordBuildScriptRequest?: ShowBuildRecordBuildScriptRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{record_id}/build-script",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let recordId;

            if (showBuildRecordBuildScriptRequest !== null && showBuildRecordBuildScriptRequest !== undefined) {
                if (showBuildRecordBuildScriptRequest instanceof ShowBuildRecordBuildScriptRequest) {
                    recordId = showBuildRecordBuildScriptRequest.recordId;
                } else {
                    recordId = showBuildRecordBuildScriptRequest['record_id'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling showBuildRecordBuildScript.');
            }

            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录的有向无环图
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuildRecordFlowGraph(showBuildRecordFlowGraphRequest?: ShowBuildRecordFlowGraphRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{build_flow_record_id}/flow-graph",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let buildFlowRecordId;

            if (showBuildRecordFlowGraphRequest !== null && showBuildRecordFlowGraphRequest !== undefined) {
                if (showBuildRecordFlowGraphRequest instanceof ShowBuildRecordFlowGraphRequest) {
                    buildFlowRecordId = showBuildRecordFlowGraphRequest.buildFlowRecordId;
                } else {
                    buildFlowRecordId = showBuildRecordFlowGraphRequest['build_flow_record_id'];
                }
            }

        
            if (buildFlowRecordId === null || buildFlowRecordId === undefined) {
            throw new RequiredError('buildFlowRecordId','Required parameter buildFlowRecordId was null or undefined when calling showBuildRecordFlowGraph.');
            }

            options.pathParams = { 'build_flow_record_id': buildFlowRecordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取任务各阶段信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showBuildRecordFullStages(showBuildRecordFullStagesRequest?: ShowBuildRecordFullStagesRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{record_id}/full-stages",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let recordId;
            
            let cascade;

            if (showBuildRecordFullStagesRequest !== null && showBuildRecordFullStagesRequest !== undefined) {
                if (showBuildRecordFullStagesRequest instanceof ShowBuildRecordFullStagesRequest) {
                    recordId = showBuildRecordFullStagesRequest.recordId;
                    cascade = showBuildRecordFullStagesRequest.cascade;
                } else {
                    recordId = showBuildRecordFullStagesRequest['record_id'];
                    cascade = showBuildRecordFullStagesRequest['cascade'];
                }
            }

        
            if (recordId === null || recordId === undefined) {
            throw new RequiredError('recordId','Required parameter recordId was null or undefined when calling showBuildRecordFullStages.');
            }
            if (cascade !== null && cascade !== undefined) {
                localVarQueryParameter['cascade'] = cascade;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'record_id': recordId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取构建记录信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobBuildRecordDetail(showJobBuildRecordDetailRequest?: ShowJobBuildRecordDetailRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{job_id}/{build_no}/record-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;
            
            let buildNo;

            if (showJobBuildRecordDetailRequest !== null && showJobBuildRecordDetailRequest !== undefined) {
                if (showJobBuildRecordDetailRequest instanceof ShowJobBuildRecordDetailRequest) {
                    jobId = showJobBuildRecordDetailRequest.jobId;
                    buildNo = showJobBuildRecordDetailRequest.buildNo;
                } else {
                    jobId = showJobBuildRecordDetailRequest['job_id'];
                    buildNo = showJobBuildRecordDetailRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobBuildRecordDetail.');
            }
            if (buildNo === null || buildNo === undefined) {
            throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showJobBuildRecordDetail.');
            }

            options.pathParams = { 'job_id': jobId,'build_no': buildNo, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 构建历史页获取构建次数
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobTotal(showJobTotalRequest?: ShowJobTotalRequest) {
            const options = {
                method: "GET",
                url: "/v1/record/{build_project_id}/statistics",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let buildProjectId;
            
            let fromDate;
            
            let toDate;

            if (showJobTotalRequest !== null && showJobTotalRequest !== undefined) {
                if (showJobTotalRequest instanceof ShowJobTotalRequest) {
                    buildProjectId = showJobTotalRequest.buildProjectId;
                    fromDate = showJobTotalRequest.fromDate;
                    toDate = showJobTotalRequest.toDate;
                } else {
                    buildProjectId = showJobTotalRequest['build_project_id'];
                    fromDate = showJobTotalRequest['from_date'];
                    toDate = showJobTotalRequest['to_date'];
                }
            }

        
            if (buildProjectId === null || buildProjectId === undefined) {
            throw new RequiredError('buildProjectId','Required parameter buildProjectId was null or undefined when calling showJobTotal.');
            }
            if (fromDate !== null && fromDate !== undefined) {
                localVarQueryParameter['from_date'] = fromDate;
            }
            if (toDate !== null && toDate !== undefined) {
                localVarQueryParameter['to_date'] = toDate;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'build_project_id': buildProjectId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单元测试覆盖率报告压缩包
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        downloadJunitCoverageZip(downloadJunitCoverageZipRequest?: DownloadJunitCoverageZipRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/junit/coverage/download",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let buildNo;
            
            let rootId;

            if (downloadJunitCoverageZipRequest !== null && downloadJunitCoverageZipRequest !== undefined) {
                if (downloadJunitCoverageZipRequest instanceof DownloadJunitCoverageZipRequest) {
                    jobId = downloadJunitCoverageZipRequest.jobId;
                    buildNo = downloadJunitCoverageZipRequest.buildNo;
                    rootId = downloadJunitCoverageZipRequest.rootId;
                } else {
                    jobId = downloadJunitCoverageZipRequest['job_id'];
                    buildNo = downloadJunitCoverageZipRequest['build_no'];
                    rootId = downloadJunitCoverageZipRequest['root_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling downloadJunitCoverageZip.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (buildNo === null || buildNo === undefined) {
                throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling downloadJunitCoverageZip.');
            }
            if (buildNo !== null && buildNo !== undefined) {
                localVarQueryParameter['build_no'] = buildNo;
            }
            if (rootId === null || rootId === undefined) {
                throw new RequiredError('rootId','Required parameter rootId was null or undefined when calling downloadJunitCoverageZip.');
            }
            if (rootId !== null && rootId !== undefined) {
                localVarQueryParameter['root_id'] = rootId;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取单元测试覆盖率报告列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listJunitCoverageSummary(listJunitCoverageSummaryRequest?: ListJunitCoverageSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/junit/coverage/list",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let buildNo;

            if (listJunitCoverageSummaryRequest !== null && listJunitCoverageSummaryRequest !== undefined) {
                if (listJunitCoverageSummaryRequest instanceof ListJunitCoverageSummaryRequest) {
                    jobId = listJunitCoverageSummaryRequest.jobId;
                    buildNo = listJunitCoverageSummaryRequest.buildNo;
                } else {
                    jobId = listJunitCoverageSummaryRequest['job_id'];
                    buildNo = listJunitCoverageSummaryRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listJunitCoverageSummary.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (buildNo === null || buildNo === undefined) {
                throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling listJunitCoverageSummary.');
            }
            if (buildNo !== null && buildNo !== undefined) {
                localVarQueryParameter['build_no'] = buildNo;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取该任务所有分支信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepoBranch(listRepoBranchRequest?: ListRepoBranchRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/branches",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let repositoryName;

            if (listRepoBranchRequest !== null && listRepoBranchRequest !== undefined) {
                if (listRepoBranchRequest instanceof ListRepoBranchRequest) {
                    jobId = listRepoBranchRequest.jobId;
                    repositoryName = listRepoBranchRequest.repositoryName;
                } else {
                    jobId = listRepoBranchRequest['job_id'];
                    repositoryName = listRepoBranchRequest['repository_name'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listRepoBranch.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (repositoryName === null || repositoryName === undefined) {
                throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling listRepoBranch.');
            }
            if (repositoryName !== null && repositoryName !== undefined) {
                localVarQueryParameter['repository_name'] = repositoryName;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看仓库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRepository(listRepositoryRequest?: ListRepositoryRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/{job_id}/repositories",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let jobId;

            if (listRepositoryRequest !== null && listRepositoryRequest !== undefined) {
                if (listRepositoryRequest instanceof ListRepositoryRequest) {
                    jobId = listRepositoryRequest.jobId;
                } else {
                    jobId = listRepositoryRequest['job_id'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling listRepository.');
            }

            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询构建成功率
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobBuildSuccessRatio(showJobBuildSuccessRatioRequest?: ShowJobBuildSuccessRatioRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/ratio",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let repositoryName;
            
            let interval;
            
            let branch;

            if (showJobBuildSuccessRatioRequest !== null && showJobBuildSuccessRatioRequest !== undefined) {
                if (showJobBuildSuccessRatioRequest instanceof ShowJobBuildSuccessRatioRequest) {
                    jobId = showJobBuildSuccessRatioRequest.jobId;
                    repositoryName = showJobBuildSuccessRatioRequest.repositoryName;
                    interval = showJobBuildSuccessRatioRequest.interval;
                    branch = showJobBuildSuccessRatioRequest.branch;
                } else {
                    jobId = showJobBuildSuccessRatioRequest['job_id'];
                    repositoryName = showJobBuildSuccessRatioRequest['repository_name'];
                    interval = showJobBuildSuccessRatioRequest['interval'];
                    branch = showJobBuildSuccessRatioRequest['branch'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobBuildSuccessRatio.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (repositoryName === null || repositoryName === undefined) {
                throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showJobBuildSuccessRatio.');
            }
            if (repositoryName !== null && repositoryName !== undefined) {
                localVarQueryParameter['repository_name'] = repositoryName;
            }
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling showJobBuildSuccessRatio.');
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (branch !== null && branch !== undefined) {
                localVarQueryParameter['branch'] = branch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 洞察构建时长
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showJobBuildTime(showJobBuildTimeRequest?: ShowJobBuildTimeRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/time",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let repositoryName;
            
            let interval;
            
            let branch;

            if (showJobBuildTimeRequest !== null && showJobBuildTimeRequest !== undefined) {
                if (showJobBuildTimeRequest instanceof ShowJobBuildTimeRequest) {
                    jobId = showJobBuildTimeRequest.jobId;
                    repositoryName = showJobBuildTimeRequest.repositoryName;
                    interval = showJobBuildTimeRequest.interval;
                    branch = showJobBuildTimeRequest.branch;
                } else {
                    jobId = showJobBuildTimeRequest['job_id'];
                    repositoryName = showJobBuildTimeRequest['repository_name'];
                    interval = showJobBuildTimeRequest['interval'];
                    branch = showJobBuildTimeRequest['branch'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
                throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showJobBuildTime.');
            }
            if (jobId !== null && jobId !== undefined) {
                localVarQueryParameter['job_id'] = jobId;
            }
            if (repositoryName === null || repositoryName === undefined) {
                throw new RequiredError('repositoryName','Required parameter repositoryName was null or undefined when calling showJobBuildTime.');
            }
            if (repositoryName !== null && repositoryName !== undefined) {
                localVarQueryParameter['repository_name'] = repositoryName;
            }
            if (interval === null || interval === undefined) {
                throw new RequiredError('interval','Required parameter interval was null or undefined when calling showJobBuildTime.');
            }
            if (interval !== null && interval !== undefined) {
                localVarQueryParameter['interval'] = interval;
            }
            if (branch !== null && branch !== undefined) {
                localVarQueryParameter['branch'] = branch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取覆盖率接口
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showReportSummary(showReportSummaryRequest?: ShowReportSummaryRequest) {
            const options = {
                method: "GET",
                url: "/v1/report/{job_id}/summary",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let buildNo;

            if (showReportSummaryRequest !== null && showReportSummaryRequest !== undefined) {
                if (showReportSummaryRequest instanceof ShowReportSummaryRequest) {
                    jobId = showReportSummaryRequest.jobId;
                    buildNo = showReportSummaryRequest.buildNo;
                } else {
                    jobId = showReportSummaryRequest['job_id'];
                    buildNo = showReportSummaryRequest['build_no'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showReportSummary.');
            }
            if (buildNo === null || buildNo === undefined) {
                throw new RequiredError('buildNo','Required parameter buildNo was null or undefined when calling showReportSummary.');
            }
            if (buildNo !== null && buildNo !== undefined) {
                localVarQueryParameter['build_no'] = buildNo;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建构建模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/template/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    body = createTemplateRequest.body
                } else {
                    body = createTemplateRequest['body'];
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
         * 删除构建模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/template/{uuid}/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let uuid;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    uuid = deleteTemplateRequest.uuid;
                } else {
                    uuid = deleteTemplateRequest['uuid'];
                }
            }

        
            if (uuid === null || uuid === undefined) {
            throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling deleteTemplate.');
            }

            options.pathParams = { 'uuid': uuid, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据条件查询特定模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCustomTemplate(listCustomTemplateRequest?: ListCustomTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/template/custom",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let filter;
            
            let page;
            
            let pageSize;
            
            let tags;

            if (listCustomTemplateRequest !== null && listCustomTemplateRequest !== undefined) {
                if (listCustomTemplateRequest instanceof ListCustomTemplateRequest) {
                    name = listCustomTemplateRequest.name;
                    filter = listCustomTemplateRequest.filter;
                    page = listCustomTemplateRequest.page;
                    pageSize = listCustomTemplateRequest.pageSize;
                    tags = listCustomTemplateRequest.tags;
                } else {
                    name = listCustomTemplateRequest['name'];
                    filter = listCustomTemplateRequest['filter'];
                    page = listCustomTemplateRequest['page'];
                    pageSize = listCustomTemplateRequest['page_size'];
                    tags = listCustomTemplateRequest['tags'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (filter !== null && filter !== undefined) {
                localVarQueryParameter['filter'] = filter;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }
            if (tags !== null && tags !== undefined) {
                localVarQueryParameter['tags'] = tags;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询官方模版
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listOfficialTemplate(listOfficialTemplateRequest?: ListOfficialTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/template/officialtemplates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let name;
            
            let page;
            
            let pageSize;

            if (listOfficialTemplateRequest !== null && listOfficialTemplateRequest !== undefined) {
                if (listOfficialTemplateRequest instanceof ListOfficialTemplateRequest) {
                    name = listOfficialTemplateRequest.name;
                    page = listOfficialTemplateRequest.page;
                    pageSize = listOfficialTemplateRequest.pageSize;
                } else {
                    name = listOfficialTemplateRequest['name'];
                    page = listOfficialTemplateRequest['page'];
                    pageSize = listOfficialTemplateRequest['page_size'];
                }
            }

        
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (page !== null && page !== undefined) {
                localVarQueryParameter['page'] = page;
            }
            if (pageSize !== null && pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 获取官方推荐模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRecommendOfficialTemplate(listRecommendOfficialTemplateRequest?: ListRecommendOfficialTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v1/template/recommend",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listRecommendOfficialTemplateRequest !== null && listRecommendOfficialTemplateRequest !== undefined) {
                if (listRecommendOfficialTemplateRequest instanceof ListRecommendOfficialTemplateRequest) {
                    body = listRecommendOfficialTemplateRequest.body
                } else {
                    body = listRecommendOfficialTemplateRequest['body'];
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
         * 保存模板使用记录
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        saveTemplateUsedInfo(saveTemplateUsedInfoRequest?: SaveTemplateUsedInfoRequest) {
            const options = {
                method: "POST",
                url: "/v1/template/used-info",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (saveTemplateUsedInfoRequest !== null && saveTemplateUsedInfoRequest !== undefined) {
                if (saveTemplateUsedInfoRequest instanceof SaveTemplateUsedInfoRequest) {
                    body = saveTemplateUsedInfoRequest.body
                } else {
                    body = saveTemplateUsedInfoRequest['body'];
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
         * 获取代码化构建默认模板
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showYamlTemplate(showYamlTemplateRequest?: ShowYamlTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v1/template/{job_id}/default-template",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let jobId;
            
            let defaultHost;

            if (showYamlTemplateRequest !== null && showYamlTemplateRequest !== undefined) {
                if (showYamlTemplateRequest instanceof ShowYamlTemplateRequest) {
                    jobId = showYamlTemplateRequest.jobId;
                    defaultHost = showYamlTemplateRequest.defaultHost;
                } else {
                    jobId = showYamlTemplateRequest['job_id'];
                    defaultHost = showYamlTemplateRequest['default_host'];
                }
            }

        
            if (jobId === null || jobId === undefined) {
            throw new RequiredError('jobId','Required parameter jobId was null or undefined when calling showYamlTemplate.');
            }
            if (defaultHost !== null && defaultHost !== undefined) {
                localVarQueryParameter['default_host'] = defaultHost;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'job_id': jobId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CodeArtsBuildClient {
    return new CodeArtsBuildClient(client);
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